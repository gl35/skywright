// Skywright: game state, flight model and the main loop.

import './style.css';
import { TASKS, WORLDS, AIRCRAFT, PARTS, PART_KEYS, MISSIONS, INTRO, START_SAVE, KIT_COST, KIT_CAP_COST, KIT_CAP_MAX } from './data.js';
import { calcStats, repairCost, fuelCost, upCost, missionOf, targetOf, thinAir, km, jobPay } from './rules.js';
import { aircraftModel, buildScenery } from './models.js';
import { V, resizeView, watchSpeed, setCamera, drawScene, screenBearing, cloudsNow, project } from './render.js';
import { HZ, levelAt, airfieldAt, setWorld, world } from './world.js';
import { input, initInput, pollInput, settings, toggleStick } from './input.js';
import { makeQuestion } from './quiz.js';
import * as ui from './ui.js';
import { initAudio, setEngine, beep, thud, toggleMute, setMood, toggleMusic, musicIsOn, audioDebug } from './audio.js';
import { clamp, lerp } from './noise.js';
import { drawCockpit } from './cockpit.js';

const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d', { alpha: false });
const SAVE_KEY = 'skywright.save.v2';
const isTouch = window.matchMedia('(pointer: coarse)').matches;
const ZK = 1.9; // overall zoom: how many screen pixels one world cell covers

// Camera views. tilt squashes the ground, elev is how far height lifts things up the screen:
// a low tilt with a high elev looks along the ground instead of down at it.
const VIEWS = [
  { name: 'TOP', tilt: 0.62, elev: 0.75, ay: 0.6, zm: 1, sky: 0, skyH: 0.45 },
  { name: 'TAIL', tilt: 0.36, elev: 0.93, ay: 0.74, zm: 1.3, sky: 1, skyH: 0.36 },
  { name: 'COCKPIT', tilt: 0.3, elev: 0.95, ay: 0.98, zm: 1.6, sky: 1, skyH: 0.42 },
];
// Great heights are drawn compressed so the ground stays in the picture.
const visAlt = (a) => (a < 40 ? a : 40 + (a - 40) * 0.3);
const cockpitCanvas = document.createElement('canvas');
const cockpitCtx = cockpitCanvas.getContext('2d', { alpha: false });

const G = {
  mode: 'title', // title | cards | hangar | field | takeoff | flying | rollout | down
  time: 0, frame: 0, boost: 0,
  save: null, ac: null, stats: null, model: null, belly: 2,
  mission: null, target: null, chapter: '', newCraft: null,
  plane: { x: -40, y: 60, alt: 16, heading: 0, speed: 12, throttle: 0.6, roll: 0.25, rollShown: 0, vz: 0, propSpin: 1, spin: 0, lean: 0, stick: 0, trails: [[], []] },
  fail: { engine: false, frame: false, fuel: false, avionics: false },
  puffs: [], inCell: false, underCell: false,
  tab: 'workshop', legTime: 0, timer: 0, landing: null, onWater: false,
  transited: false, burnT: 0,
  abil: { t: 0, cd: 0 }, surfLabel: '',
  quiz: null, task: null, sparks: [], chain: 0, bonus: { sparks: 0, cash: 0, task: 0 },
  cards: [], afterCards: null,
  view: 0, sky: 0, heat: 0,
  camRot: -Math.PI / 2, zoom: 3 * ZK, ax: 0.5, ay: 0.7, trailT: 0, puffT: 0, hudT: 0, hintT: 0,
  scenery: buildScenery(),
};

// ---------- save ----------
function loadSave() {
  try {
    const s = JSON.parse(localStorage.getItem(SAVE_KEY));
    return s && s.v === 2 ? s : null;
  } catch { return null; }
}
function persist() { try { localStorage.setItem(SAVE_KEY, JSON.stringify(G.save)); } catch { /* private mode */ } }

// Work out the current mission from the save, and make sure its machine and world are loaded.
function setup() {
  const s = G.save, m = (G.mission = missionOf(s));
  for (let i = Math.min(s.mission, MISSIONS.length - 1); i >= 0; i--) if (MISSIONS[i].ch) { G.chapter = MISSIONS[i].ch; break; }
  const id = m.craft, A = AIRCRAFT[id];
  if (!s.fleet[id]) { // a new machine joins the fleet in whatever state the story left it
    s.fleet[id] = { cond: { engine: A.start.engine, frame: A.start.frame, fuel: A.start.fuel, avionics: A.start.avionics }, fuel: A.tank * A.start.tank };
    G.newCraft = id;
  }
  G.ac = s.fleet[id];
  G.stats = calcStats(id, s.up);
  G.model = aircraftModel(id);
  G.belly = (G.model.nz * G.model.vs) / 2;
  G.ac.fuel = Math.min(G.ac.fuel, G.stats.tank);
  G.target = targetOf(m);
  setWorld(m.world);
  G.transited = false; G.burnT = 0;
  G.boost = G.frame + 12;
}
function clearTrails() { G.plane.trails[0].length = 0; G.plane.trails[1].length = 0; }
function park() {
  const st = world().stops[G.mission.from];
  Object.assign(G.plane, { x: st.x - 2, y: st.y, heading: 0, speed: 0, vz: 0, roll: 0, lean: 0, throttle: 0, propSpin: 0, alt: 2 * HZ + G.belly });
  clearTrails();
}
// The landing ground the nav arrow points at, or null while still climbing out for a transit burn.
const destStop = () => (!G.mission.transit || G.transited ? G.target.stop : null);

// ---------- screens ----------
function refresh() {
  const sec = ui.el.panel.querySelector('section');
  const top = sec ? sec.scrollTop : 0;
  if (G.mode === 'hangar') ui.showPanel(ui.hangarHTML(G), true);
  else if (G.mode === 'field') ui.showPanel(ui.fieldHTML(G, G.onWater), true);
  const sec2 = ui.el.panel.querySelector('section');
  if (sec2) sec2.scrollTop = top;
}
function showCards(cards, then) {
  G.cards = cards.slice(); G.afterCards = then; G.mode = 'cards';
  ui.el.hud.classList.add('hidden');
  ui.closeFix(); ui.setAlert(null); ui.setHint(null);
  nextCard();
}
function nextCard() {
  const c = G.cards.shift();
  if (c) { ui.showPanel(ui.cardHTML(c)); return; }
  const f = G.afterCards; G.afterCards = null;
  ui.hidePanel();
  if (f) f();
}

function openHangar() {
  G.mode = 'hangar';
  G.tab = G.newCraft ? 'workshop' : G.tab;
  G.newCraft = null;
  persist(); refresh();
}
function enterHangar() {
  setup(); park();
  for (const k of PART_KEYS) G.fail[k] = false;
  G.abil.t = G.abil.cd = 0; G.plane.boosting = G.plane.shield = false;
  G.puffs.length = 0; G.inCell = G.underCell = false; G.heat = 0;
  ui.closeFix(); ui.setAlert(null); ui.setHint(null);
  ui.el.hud.classList.add('hidden');
  G.tab = 'workshop';
  if (G.newCraft && G.save.mission > 0) {
    const A = AIRCRAFT[G.newCraft];
    const worst = PART_KEYS.reduce((a, k) => (G.ac.cond[k] < G.ac.cond[a] ? k : a), 'engine');
    showCards([{ title: `The ${A.name}`, body: [A.blurb, `She is yours for the next flight, and she needs work. The ${PARTS[worst].name.toLowerCase()} is the worst of it.`], btn: 'To the workshop' }], openHangar);
  } else openHangar();
}

function towBack(kind) {
  const s = G.save;
  const fee = Math.min(s.money, 60 + Math.round(s.money * 0.25));
  const dmg = kind === 'crash' ? 35 : kind === 'ditch' ? 22 : 0;
  s.money -= fee;
  if (dmg) for (const k of PART_KEYS) G.ac.cond[k] = Math.max(5, G.ac.cond[k] - dmg);
  const home = WORLDS[G.mission.world].stops[G.mission.from].name;
  const title = kind === 'crash' ? 'Crashed' : kind === 'ditch' ? 'Ditched' : 'Stranded';
  const first = kind === 'crash' ? 'You walk away from it. The machine does not look as lucky.'
    : kind === 'ditch' ? 'She settles into the swell and you climb out onto the wing.'
      : 'With a dry tank there is nothing to do but wait.';
  showCards([{ title, body: [first, `It takes time, favours and $${fee} to get the ${AIRCRAFT[G.mission.craft].name} back to ${home}.${dmg ? ' Every part took damage.' : ''}`], btn: 'Back to the workshop' }], enterHangar);
}

const actions = {
  new() {
    initAudio();
    G.save = START_SAVE();
    setup(); park();
    G.newCraft = null;
    showCards([{ title: INTRO.title, nan: INTRO.nan, body: INTRO.body }], enterHangar);
  },
  continue() { initAudio(); enterHangar(); },
  card() { beep(520, 0.05); nextCard(); },
  tab(a) { G.tab = a; refresh(); },
  refuel() {
    const s = G.save, need = G.stats.tank - G.ac.fuel;
    const units = Math.min(need, Math.floor(s.money / 0.6));
    if (units <= 0) return;
    s.money -= Math.min(s.money, fuelCost(units));
    G.ac.fuel += units;
  },
  repair(a) {
    const [k, pts] = a.split(':'), n = +pts, c = repairCost(G.mission.craft, n);
    if (G.save.money < c) return;
    G.save.money -= c;
    G.ac.cond[k] = Math.min(100, G.ac.cond[k] + n);
  },
  kit() { const s = G.save; if (s.kits < s.kitCap && s.money >= KIT_COST) { s.money -= KIT_COST; s.kits++; } },
  kitcap() { const s = G.save; if (s.kitCap < KIT_CAP_MAX && s.money >= KIT_CAP_COST) { s.money -= KIT_CAP_COST; s.kitCap++; } },
  shift() { // an odd job is a question: answer it right to be paid
    G.quiz = makeQuestion();
    ui.showPanel(ui.quizHTML(G.quiz, jobPay(G.save, G.stats)));
  },
  answer(i) {
    const q = G.quiz, s = G.save, ok = +i === q.answer, pay = jobPay(s, G.stats);
    if (ok) { s.money += pay; s.shift = (+s.shift || 0) + 1; beep(880, 0.1); setTimeout(() => beep(1180, 0.14), 90); }
    else beep(150, 0.25, 'sawtooth');
    ui.showPanel(ui.quizResultHTML(q, ok, pay));
  },
  quizdone() { G.quiz = null; },
  upgrade(k) {
    const s = G.save, lv = s.up[k];
    if (lv >= 3 || s.money < upCost(lv)) return;
    s.money -= upCost(lv);
    s.up[k]++;
    G.stats = calcStats(G.mission.craft, s.up);
  },
  fieldfix(k) {
    const s = G.save;
    if (s.kits < 1) return;
    s.kits--;
    G.ac.cond[k] = Math.min(100, G.ac.cond[k] + 30);
    G.fail[k] = false;
  },
  fieldbodge(k) { G.fail[k] = false; G.ac.cond[k] = Math.max(G.ac.cond[k], 8); },
  tow() { towBack('tow'); },
  surface() { // carry on along the ground or the water instead of taking off
    G.mode = 'surface';
    ui.hidePanel();
    ui.el.hud.classList.remove('hidden');
  },
  takeoff() {
    if (G.ac.fuel < 1) { beep(160, 0.25); G.tab = 'mission'; return; }
    initAudio();
    const p = G.plane, s = G.save;
    if (G.mode === 'hangar') {
      const st = world().stops[G.mission.from];
      p.x = st.x - 20; p.y = st.y; p.heading = 0;
      G.legTime = 0; G.transited = false; G.burnT = 0;
      planExtras();
    }
    p.speed = 0; p.vz = 0; p.roll = 0;
    G.takeoffFrom = { x: p.x, y: p.y };
    input.throttle = 0.85;
    G.mode = 'takeoff';
    persist();
    ui.hidePanel();
    ui.el.hud.classList.remove('hidden');
    if (!s.seen.controls) {
      s.seen.controls = true;
      G.hintT = 10;
      ui.setHint(isTouch
        ? `Drag left or right to steer.<br>${settings.realStick ? 'Drag down to climb, up to descend, like a real stick.' : 'Drag up to climb, down to descend.'}<br>` + 'The slider on the right is the throttle.<br>VIEW changes the camera.<br><br>PULL = CLIMB at the top left swaps that.<br>Follow the arrow to the<br>next field and descend onto the runway to land.'
        : `A / D or arrows: steer<br>${settings.realStick ? 'S: pull back to climb &nbsp; W: push to descend' : 'W: climb &nbsp; S: descend'}<br>` + 'Q / E: throttle &nbsp; Space: fix a breakdown<br>V: change view &nbsp; N: music &nbsp; X: special move<br><br>Pull back to take off (I swaps the stick). Follow the arrow to the<br>next field and descend onto the runway to land.');
    }
  },
};
ui.el.panel.addEventListener('click', (e) => {
  const b = e.target.closest('[data-act]');
  if (!b || b.disabled) return;
  const before = G.mode;
  actions[b.dataset.act]?.(b.dataset.arg);
  if (G.mode === before && (G.mode === 'hangar' || G.mode === 'field')) { persist(); if (!G.quiz) refresh(); }
});

// ---------- things to do on the way ----------
// Look outward from (x, y) for the nearest spot the test accepts.
function findSpot(x, y, ok) {
  for (let r = 0; r <= 260; r += 13)
    for (let a = 0; a < 6.283; a += 0.52) {
      const px = x + Math.cos(a) * r, py = y + Math.sin(a) * r;
      if (ok(px, py)) return { x: px, y: py };
      if (r === 0) break;
    }
  return { x, y };
}
// Called at take-off: place this flight's job marker and a trail of sparks that weaves and changes height.
function planExtras() {
  const m = G.mission, st = G.stats;
  G.task = null; G.sparks = []; G.chain = 0; G.bonus = { sparks: 0, cash: 0, task: 0 };
  if (m.free || m.transit) { // nothing to place off-route, but a climbing job still makes sense
    const T = TASKS[G.save.mission];
    if (T && T.type === 'high' && !m.free) G.task = { ...T, done: false };
    return;
  }
  const S = world().stops, A = S[m.from], B = S[m.to];
  const dx = B.x - A.x, dy = B.y - A.y, len = Math.hypot(dx, dy), ux = dx / len, uy = dy / len;
  const T = TASKS[G.save.mission];
  if (T) {
    if (T.type === 'high') G.task = { ...T, done: false };
    else {
      const wet = (x, y) => !levelAt(x, y) && !levelAt(x + 9, y) && !levelAt(x - 9, y) && !levelAt(x, y + 9) && !levelAt(x, y - 9);
      const dry = (x, y) => { const l = levelAt(x, y); return l >= 2 && l <= 3 && levelAt(x + 6, y) === l && levelAt(x - 6, y) === l; };
      const any = (x, y) => levelAt(x, y) >= 1;
      const at = findSpot(A.x + dx * T.t - uy * T.off, A.y + dy * T.t + ux * T.off, T.type === 'land' ? (T.water ? wet : dry) : any);
      G.task = { ...T, x: at.x, y: at.y, r: T.type === 'land' ? 26 : 22, gz: levelAt(at.x, at.y) * HZ, kind: 'task', done: false };
    }
  }
  const n = Math.floor(len / 110);
  for (let i = 1; i <= n; i++) {
    const t = i / (n + 1);
    if (t < 0.07 || t > 0.93) continue;
    const side = Math.sin(t * Math.PI * 3) * 65;
    const x = A.x + dx * t - uy * side, y = A.y + dy * t + ux * side, gz = levelAt(x, y) * HZ;
    G.sparks.push({ kind: 'spark', x, y, gz, z: Math.min(st.ceil - 2, gz + 9 + ((i * 7) % 3) * 5), got: false });
  }
}
function finishTask() {
  const t = G.task;
  t.done = true;
  G.save.money += t.pay; G.bonus.task += t.pay;
  beep(660, 0.1); setTimeout(() => beep(880, 0.1), 100); setTimeout(() => beep(1320, 0.2), 200);
}
// Checked every moment in the air.
function checkExtras(p, floor) {
  for (const k of G.sparks) {
    if (k.got || Math.abs(k.x - p.x) > 7 || Math.abs(k.y - p.y) > 7 || Math.abs(k.z - p.alt) > 5) continue;
    k.got = true;
    const pay = 10 + Math.min(10, G.chain) * 2; // a run of them is worth more
    G.save.money += pay; G.bonus.sparks++; G.bonus.cash += pay; G.chain++;
    beep(700 + Math.min(10, G.chain) * 70, 0.09, 'triangle', 0.14);
  }
  const t = G.task;
  if (!t || t.done || t.type === 'land') return;
  const near = t.type === 'high' || Math.hypot(t.x - p.x, t.y - p.y) < t.r;
  const ok = t.type === 'high' ? p.alt > t.alt : t.type === 'low' ? near && p.alt - floor < 9 : near;
  if (ok) { finishTask(); ui.setHint(`<b>Done.</b> ${t.after}<br>+$${t.pay}`); G.hintT = 6; }
}

// ---------- in-flight repair ----------
function tryFix() {
  if (G.mode !== 'flying') return;
  if (ui.fix.open) {
    const r = ui.hitFix(), k = ui.fix.part;
    if (r === 'miss') { G.ac.cond[k] = Math.max(0, G.ac.cond[k] - 1.5); beep(150, 0.12, 'sawtooth'); }
    else if (r === 'hit') beep(700, 0.06);
    else {
      G.fail[k] = false;
      if (ui.fix.jury) G.ac.cond[k] = Math.max(G.ac.cond[k], 8); // a bodge: working again, barely
      else { G.ac.cond[k] = Math.min(100, G.ac.cond[k] + 12); G.save.kits--; }
      ui.closeFix();
      beep(880, 0.1); setTimeout(() => beep(1180, 0.14), 90);
    }
    return;
  }
  const k = PART_KEYS.find((p) => G.fail[p]);
  if (!k) return;
  ui.openFix(k, G.ac.cond[k], G.save.kits < 1); // with no kits you can still bodge it, the hard way
}
ui.el.fixBtn.addEventListener('click', tryFix);
ui.el.fixHit.addEventListener('pointerdown', (e) => { e.preventDefault(); tryFix(); });

function breakDown(k) {
  G.fail[k] = true;
  beep(220, 0.3, 'sawtooth', 0.2);
  setTimeout(() => beep(180, 0.4, 'sawtooth', 0.2), 200);
}

// ---------- flight ----------
// The take-off run. The machine gathers speed along the strip by itself, but it stays on the
// ground until the pilot pulls up. An airship just needs the pull: it rises from a standstill.
function updateTakeoff(dt) {
  const p = G.plane, st = G.stats;
  p.throttle = input.throttle;
  p.propSpin = 1;
  const here = levelAt(p.x, p.y), floor = here * HZ + G.belly;
  const onGround = p.alt <= floor + 0.01;
  p.speed = Math.min(st.speed * 0.6, p.speed + st.speed * 0.32 * p.throttle * dt);
  const nx = p.x + Math.cos(p.heading) * p.speed * dt, ny = p.y + Math.sin(p.heading) * p.speed * dt;
  if (onGround && levelAt(nx, ny) !== here) { // ran off the end of the flat ground without lifting off: roll back and try again
    if (G.takeoffFrom) { p.x = G.takeoffFrom.x; p.y = G.takeoffFrom.y; }
    p.speed = 0;
    beep(160, 0.2, 'sawtooth');
    return;
  }
  p.x = nx; p.y = ny;
  const ready = st.hover || p.speed > st.speed * 0.4;
  const pull = ready && input.pitch > 0.15;
  if (pull) p.vz = lerp(p.vz, 3.5 * Math.max(0.5, input.pitch), Math.min(1, dt * 3));
  else p.vz = onGround ? 0 : lerp(p.vz, -1.5, Math.min(1, dt * 2));
  p.alt = Math.max(floor, p.alt + p.vz * dt);
  p.lean = lerp(p.lean, p.alt > floor ? 0.5 : 0, Math.min(1, dt * 3));
  const up = settings.realStick ? (isTouch ? 'drag down, like pulling a stick back' : 'S or the down arrow, like pulling a stick back') : isTouch ? 'drag up' : 'W or the up arrow';
  if (p.throttle < 0.3 && !st.hover) ui.setAlert('Open the throttle to start the take-off run', true);
  else if (!ready) ui.setAlert('Gathering speed', true);
  else if (onGround) ui.setAlert(`Pull up to take off: ${up}`, true);
  else ui.setAlert(null);
  if (p.alt > floor + 4) { G.mode = 'flying'; ui.setAlert(null); }
}

function checkStorms() {
  const p = G.plane;
  G.inCell = G.underCell = false;
  for (const c of cloudsNow()) {
    if (!c.storm) continue;
    if (Math.hypot(c.wx - p.x, c.wy - p.y) > c.rad * 0.85) continue;
    if (p.alt > c.alt - 1 && p.alt < c.top) G.inCell = true;
    else if (p.alt <= c.alt - 1) G.underCell = true;
  }
}

// Leave this world for the mission's far one: story cards, then you arrive high above the landing ground.
function doTransit() {
  const m = G.mission, t = G.target, p = G.plane;
  G.transited = true;
  showCards([{ title: `To ${WORLDS[t.world].name}`, body: m.transitText, btn: 'Begin the descent' }], () => {
    setWorld(t.world);
    Object.assign(p, { x: t.stop.x - 2600, y: t.stop.y, heading: 0, alt: 210, vz: 0, roll: 0, speed: G.stats.speed * 4 });
    clearTrails();
    G.camRot = -Math.PI / 2;
    G.boost = G.frame + 12;
    G.mode = 'flying';
    ui.el.hud.classList.remove('hidden');
  });
}

function updateFlight(dt) {
  const p = G.plane, st = G.stats, ac = G.ac, f = G.fail, c = ac.cond, m = G.mission, grav = world().gravity;
  G.legTime += dt;
  G.abil.t = Math.max(0, G.abil.t - dt); G.abil.cd = Math.max(0, G.abil.cd - dt);
  const abil = AIRCRAFT[m.craft].ability, ab = G.abil.t > 0 ? abil.id : null; // the special move in progress, if any
  p.boosting = ab === 'burner' || ab === 'zoom'; p.shield = ab === 'shield';
  checkStorms();
  p.throttle = input.throttle;
  const dead = ac.fuel <= 0 || c.engine <= 0;
  const power = dead ? 0 : p.throttle * (f.engine ? 0.5 : 1) * (0.8 + 0.2 * c.engine / 100);
  const thin = thinAir(st, p.alt), boost = 1 + thin * st.space; // thin air: spacecraft get much faster up high
  const orbiting = st.orbit && p.alt > 170;
  let base = st.hover ? (dead ? 0.1 : power) : dead ? 0.35 : 0.25 + 0.75 * power;
  if (orbiting) base = Math.max(base, 0.9); // nothing to slow you down up here
  const still = ab === 'hover' || ab === 'mend';
  if (still) base = 0;
  const abSpeed = ab === 'burner' ? 1.7 : ab === 'zoom' ? 1.3 : 1;
  p.speed += (st.speed * base * boost * abSpeed - p.speed) * Math.min(1, dt * (still ? 2.5 : 0.7));
  p.propSpin = dead ? Math.max(0, p.propSpin - dt * 0.5) : 1;

  p.stick += (input.turn - p.stick) * Math.min(1, dt * 6); // ease the stick so taps are gentle
  let turn = p.stick;
  if (f.frame) turn = clamp(turn * 0.45 + 0.22, -1, 1);
  if (G.inCell) turn += Math.sin(G.time * 7.3) * 0.35;
  p.heading += (turn * st.turn * dt) / (1 + thin * st.space * 0.5);
  const wobble = Math.sin(G.time * 1.9) * 0.025 + Math.sin(G.time * 3.1) * 0.015; // never perfectly still
  p.roll += (turn * 0.7 + wobble - p.roll) * Math.min(1, dt * 5);

  let vzT;
  if (dead) vzT = (st.hover ? -0.8 : -1.6) + Math.min(0, input.pitch) * st.climb + Math.max(0, input.pitch) * 0.7;
  else vzT = input.pitch > 0 ? input.pitch * st.climb * (0.3 + 0.7 * power) : input.pitch * st.climb * 0.9;
  if (ab === 'highclimb' && vzT > 0) vzT *= 2.5;
  if (ab === 'zoom') vzT = 30;
  const loopAt = ab === 'loop' ? 1 - G.abil.t / abil.dur : -1; // 0..1 round the loop
  if (loopAt >= 0) { vzT = 16 * Math.cos(Math.PI * loopAt); p.vz = vzT; } // up over the top and back down to where you started
  if (vzT < 0) vzT *= 0.45 + 0.55 * grav; // things fall slowly in low gravity
  const ceil = st.ceil + (ab === 'highclimb' ? 15 : 0);
  if (vzT > 0 && p.alt > ceil - 3 && loopAt < 0) vzT *= clamp((ceil - p.alt) / 3, 0, 1);
  if (G.inCell) vzT += Math.sin(G.time * 5.1) * 3;
  const agl = p.alt - (levelAt(p.x, p.y) * HZ + G.belly);
  if (agl < 3 && vzT < -(0.8 + agl)) vzT = -(0.8 + agl); // flare: ease the sink rate close to the ground
  p.vz += (vzT - p.vz) * Math.min(1, dt * 3);
  p.alt += p.vz * dt;
  p.lean = loopAt >= 0 ? Math.sin(2 * Math.PI * loopAt) * 2.4 : lerp(p.lean, clamp(p.vz / st.climb, -1, 1) * 0.8, Math.min(1, dt * 4));
  p.x += Math.cos(p.heading) * p.speed * dt;
  p.y += Math.sin(p.heading) * p.speed * dt;

  if (!dead) ac.fuel = Math.max(0, ac.fuel - st.burn * (0.25 + 0.75 * p.throttle * p.throttle) * (f.fuel ? 4 : 1) * (orbiting ? 0.1 : 1) * (ab === 'lean' ? 0.33 : ab === 'burner' ? 3 : ab === 'zoom' ? 2 : 1) * dt);

  checkExtras(p, levelAt(p.x, p.y) * HZ + G.belly);

  // wear and tear
  const w = st.wear * dt;
  c.engine -= 0.1 * (0.4 + 1.6 * p.throttle * p.throttle) * w;
  c.frame -= 0.035 * w; c.fuel -= 0.06 * w; c.avionics -= 0.045 * w;
  G.heat = 0;
  if (st.space && thin > 0.15 && p.vz < 0) { // re-entry: the steeper the descent, the hotter the hull
    G.heat = clamp(thin * (-p.vz / (st.climb * 0.9 * (0.45 + 0.55 * grav)) - 0.45) * 2.2, 0, 1);
    if (ab === 'shield') G.heat = 0;
    c.frame -= 7 * G.heat * dt;
  }
  if (ab === 'mend') for (const k of PART_KEYS) if (c[k] < 45) c[k] = Math.min(45, c[k] + 2.5 * dt);
  if (G.inCell && ab !== 'shield' && ab !== 'loop') {
    c.frame -= 3.2 * dt; c.avionics -= 1.6 * dt;
    if (Math.random() < 0.18 * dt) { c.avionics -= 10; ui.flash(); thud(0.6, 0.9); }
  }
  for (const k of PART_KEYS) {
    if (c[k] < 0) c[k] = 0;
    if (f[k] || G.legTime < 12) continue;
    const chance = c[k] < 55 ? ((55 - c[k]) / 55) ** 2 * 0.05 * st.failMul * dt : 0;
    if (c[k] <= 0 || Math.random() < chance) breakDown(k);
  }

  const lvl = levelAt(p.x, p.y), floor = lvl * HZ + G.belly;
  if (p.alt <= floor) { p.alt = floor; touchdown(lvl); return; }

  // leaving this world: hold high altitude until the burn
  if (m.transit && !G.transited) {
    if (p.alt > 170) {
      G.burnT += dt;
      if (G.burnT > 6) { doTransit(); return; }
    } else G.burnT = Math.max(0, G.burnT - dt);
  }

  // alerts, most urgent first
  const failed = PART_KEYS.find((k) => f[k]);
  const dest = destStop();
  const dist = dest ? Math.hypot(dest.x - p.x, dest.y - p.y) : 1e9;
  const ahead = levelAt(p.x + Math.cos(p.heading) * p.speed * 1.6, p.y + Math.sin(p.heading) * p.speed * 1.6) * HZ + G.belly;
  const nearField = airfieldAt(p.x, p.y) >= 0 || dist < 60;
  const wet = world().water;
  if (failed) ui.setAlert(`${PARTS[failed].fail} · ${PARTS[failed].effect}${G.save.kits > 0 ? ' · PRESS FIX' : ' · NO KITS: BODGE IT'}`);
  else if (dead) ui.setAlert(ac.fuel <= 0 ? 'OUT OF FUEL · GLIDING' : 'ENGINE DEAD · GLIDING');
  else if (G.heat > 0.15) ui.setAlert('RE-ENTRY HEAT · SHALLOW YOUR DESCENT');
  else if (ahead > p.alt - 0.5 && ahead > floor + 1) ui.setAlert('TERRAIN AHEAD · CLIMB OR TURN');
  else if (p.alt - floor < 2.5 && p.vz < 0 && !nearField) ui.setAlert(lvl === 0 && wet && !st.floats ? 'TOO LOW · PULL UP' : 'LOW');
  else if (G.inCell) ui.setAlert('INSIDE A STORM');
  else if (ac.fuel / st.tank < 0.15) ui.setAlert('LOW FUEL');
  else if (!dest) ui.setAlert(p.alt > 170 ? `Hold this height. Lining up the burn: ${Math.ceil(6 - G.burnT)}` : 'Climb until the sky is black, then hold', true);
  else if (thin > 0 && dist < 400 + p.alt * 25) ui.setAlert(`${dest.name} is coming up. Start a gentle descent`, true);
  else if (orbiting) ui.setAlert('In orbit. Engines idling', true);
  else if (dist < 220) ui.setAlert(dist < 60 ? (p.speed > st.speed * 0.8 ? 'Throttle back, then descend onto the landing ground' : 'Descend onto the landing ground') : `${dest.name} ahead. Start your descent`, true);
  else ui.setAlert(null);
}

function touchdown(lvl) {
  const p = G.plane, st = G.stats, c = G.ac.cond;
  const af = airfieldAt(p.x, p.y);
  const fast = p.speed > st.speed * 0.8, hard = fast || p.vz < -3;
  let res;
  if (af >= 0 && lvl === 2) res = 'airfield';
  else if (lvl === 0 && world().water) res = st.floats ? 'water' : 'ditch';
  else if (lvl <= 3 && !fast) res = 'field';
  else res = 'crash';
  G.landing = { res, af, hard };
  G.timer = 0;
  ui.closeFix(); ui.setAlert(null); ui.setHint(null);
  if (res === 'ditch' || res === 'crash') {
    G.mode = 'down';
    thud(0.9, 1.1); ui.flash();
  } else {
    c.frame = Math.max(0, c.frame - ((res === 'field' && !st.hover ? 8 : 0) + (hard ? 10 : 0)));
    G.mode = 'rollout';
    thud(hard ? 0.5 : 0.2, 0.3);
  }
}

function updateRollout(dt) {
  const p = G.plane, st = G.stats;
  p.speed = Math.max(0, p.speed - st.speed * 0.45 * dt);
  p.throttle = 0; p.vz = 0;
  p.roll *= 1 - Math.min(1, dt * 6);
  p.lean *= 1 - Math.min(1, dt * 6);
  p.propSpin = Math.max(0.05, p.speed / st.speed);
  const nx = p.x + Math.cos(p.heading) * p.speed * dt, ny = p.y + Math.sin(p.heading) * p.speed * dt;
  const here = levelAt(p.x, p.y);
  if (levelAt(nx, ny) === here) { p.x = nx; p.y = ny; } else p.speed = 0; // stop at the edge of the flat ground
  p.alt = here * HZ + G.belly;
  if (p.speed <= 0.3) resolveLanding();
}

// The mission's flight is done: pay, tell the next part of the story, move on.
function completeMission() {
  const s = G.save, m = G.mission, hard = G.landing && G.landing.hard;
  s.money += m.pay;
  s.mission++; s.shift = false;
  const body = m.arrive.slice();
  const extra = [];
  if (G.bonus.task) extra.push(`the job on the way ($${G.bonus.task})`);
  if (G.bonus.sparks) extra.push(`${G.bonus.sparks} of ${G.sparks.length} sparks ($${G.bonus.cash})`);
  if (extra.length) body.push(`Along the way: ${extra.join(' and ')}.`);
  if (m.pay) body.push(`<b>You are paid $${m.pay}.</b>${hard ? ' You came in fast and hard, and the airframe took a knock. Ease the throttle back before you touch down.' : ''}`);
  const cards = [{ title: m.title, body, note: m.real }];
  const next = MISSIONS[s.mission];
  if (!next) cards.push({ title: 'The logbook is full', body: ['Sixteen flights, eight machines, four dynasties, three worlds and one very long way round.', 'Thank you for playing this prototype of Skywright.'], btn: 'Keep flying' });
  else if (next.ch) cards.push({ ch: 'Next', title: next.ch, body: [next.brief], btn: 'Turn the page' });
  showCards(cards, enterHangar);
}

// Stopped somewhere that is not a landing ground: open the camp screen (repairs from kits, take off, or move on).
function makeCamp(onWater) {
  const A = AIRCRAFT[G.mission.craft], lvl = levelAt(G.plane.x, G.plane.y), t = G.task;
  if (t && !t.done && t.type === 'land' && Math.hypot(t.x - G.plane.x, t.y - G.plane.y) < t.r + 10) { // you set down where you were needed
    finishTask();
    showCards([{ title: 'Job done', body: [t.after, `<b>+$${t.pay}</b>`], btn: 'Carry on' }], () => makeCamp(onWater));
    return;
  }
  const wet = lvl === 0 && world().water;
  G.mode = 'field'; G.onWater = onWater || wet;
  G.plane.propSpin = 0; G.plane.speed = 0;
  G.surfLabel = wet ? (A.surf.water ? 'Sail on' : '') : A.surf.land === 'climb' ? 'Walk on' : A.surf.land ? 'Taxi on' : '';
  ui.el.hud.classList.add('hidden');
  ui.setAlert(null);
  refresh();
}

// Sailing, walking or taxiing. Slow, but it gets you to a better place to take off from, or all the way there.
function updateSurface(dt) {
  const p = G.plane, st = G.stats, A = AIRCRAFT[G.mission.craft], w = world();
  p.throttle = input.throttle;
  p.propSpin = p.throttle > 0.05 ? 1 : 0.15;
  const here = levelAt(p.x, p.y), wetHere = here === 0 && w.water;
  p.speed += (st.speed * (wetHere ? 0.36 : 0.24) * p.throttle - p.speed) * Math.min(1, dt * 1.5);
  p.stick += (input.turn - p.stick) * Math.min(1, dt * 6);
  p.heading += p.stick * 1.5 * dt;
  p.roll = lerp(p.roll, 0, Math.min(1, dt * 5)); p.lean = lerp(p.lean, 0, Math.min(1, dt * 5)); p.vz = 0;
  const nx = p.x + Math.cos(p.heading) * p.speed * dt, ny = p.y + Math.sin(p.heading) * p.speed * dt;
  const to = levelAt(nx, ny), wetTo = to === 0 && w.water;
  let ok;
  if (wetTo) ok = !!A.surf.water;
  else if (!A.surf.land) ok = false;
  else ok = A.surf.land === 'climb' ? Math.abs(to - here) <= 1 && to <= 7 : to === here || (wetHere && to === 1) || (here === 1 && to === 2) || (here === 2 && to === 1);
  let blocked = false;
  if (ok) { p.x = nx; p.y = ny; } else { blocked = p.speed > 0.5; p.speed = 0; }
  p.alt = lerp(p.alt, levelAt(p.x, p.y) * HZ + G.belly + (wetHere ? Math.sin(G.time * 2) * 0.15 : 0), Math.min(1, dt * 6));
  G.ac.fuel = Math.max(0, G.ac.fuel - st.burn * 0.12 * p.throttle * dt);

  const af = airfieldAt(p.x, p.y), t = G.target;
  const atGoal = af >= 0 && !G.mission.free && w.id === t.world && af === t.index && (!G.mission.transit || G.transited);
  if (atGoal && p.speed < 0.6 && p.throttle < 0.12) { G.landing = { res: 'airfield', af, hard: false }; resolveLanding(); return; }
  if (G.ac.fuel <= 0) { makeCamp(wetHere); return; }
  if (input.pitch > 0.3) { G.takeoffFrom = { x: p.x, y: p.y }; G.mode = 'takeoff'; return; } // pull up: start a take-off run from here
  ui.setAlert(blocked ? 'She cannot go that way' : atGoal ? 'You have arrived. Close the throttle to stop here' : `${wetHere ? 'Sailing' : A.surf.land === 'climb' ? 'Walking' : 'Taxiing'}. Pull up to take off, STOP to make camp`, true);
}

function resolveLanding() {
  const { res, af } = G.landing, m = G.mission, t = G.target, here = world().id;
  const fieldStop = () => makeCamp(res === 'water');
  if (res === 'airfield') {
    if (!m.free && here === t.world && af === t.index && (!m.transit || G.transited)) completeMission();
    else if (here === m.world && af === m.from) enterHangar();
    else fieldStop(); // some other landing ground: rest, patch up, fly on
  } else if (res === 'field' || res === 'water') fieldStop();
  else towBack(res);
}

function updateDemo(dt) {
  const p = G.plane;
  p.heading += 0.22 * dt; p.roll = 0.3; p.speed = 12; p.throttle = 0.6; p.propSpin = 1;
  p.alt = 16 + Math.sin(G.time * 0.4) * 2;
  p.lean = Math.cos(G.time * 0.4) * 0.3;
  p.x += Math.cos(p.heading) * p.speed * dt;
  p.y += Math.sin(p.heading) * p.speed * dt;
}

function updateEffects(dt, airborne) {
  const p = G.plane, m = G.model;
  p.spin += dt * (5 + 38 * p.throttle) * p.propSpin;
  G.trailT -= dt;
  if (G.trailT <= 0) {
    G.trailT = 0.045;
    const ch = Math.cos(p.heading), sh = Math.sin(p.heading);
    [-1, 1].forEach((side, i) => {
      const span = side * m.tips * m.vs;
      const r = span * Math.cos(p.roll);
      const tr = p.trails[i];
      tr.push({ x: p.x - sh * r, y: p.y + ch * r, z: visAlt(p.alt) - span * Math.sin(p.roll), t: G.time, cut: !airborne || p.throttle < 0.35, a: 0.1 + 0.55 * p.throttle * p.throttle });
      if (tr.length > 50) tr.shift();
    });
  }
  G.puffT -= dt;
  const hot = G.mode === 'flying' && G.heat > 0.15;
  const smoking = hot || G.mode === 'down' || ((G.mode === 'flying') && (G.fail.engine || G.ac.cond.engine <= 0));
  if (smoking && G.puffT <= 0) {
    G.puffT = hot ? 0.03 : 0.07;
    G.puffs.push({ x: p.x, y: p.y, z: visAlt(p.alt), age: 0, dark: !hot && (G.mode !== 'down' || Math.random() < 0.6) });
  }
  for (let i = G.puffs.length - 1; i >= 0; i--) {
    const pf = G.puffs[i];
    pf.age += dt; pf.z += dt * 1.5;
    if (pf.age > 1.2) G.puffs.splice(i, 1);
  }
}

// ---------- main loop ----------
function angDiff(a, b) { let d = (a - b) % (Math.PI * 2); if (d > Math.PI) d -= Math.PI * 2; if (d < -Math.PI) d += Math.PI * 2; return d; }

const markList = [];
function marksNear(p) {
  markList.length = 0;
  const t = G.task;
  if (t && !t.done && t.kind && Math.hypot(t.x - p.x, t.y - p.y) < 420) markList.push(t);
  for (const k of G.sparks) if (!k.got && Math.abs(k.x - p.x) < 300 && Math.abs(k.y - p.y) < 420) markList.push(k);
  return markList;
}
const ARROWS = ['\u2191', '\u2197', '\u2192', '\u2198', '\u2193', '\u2199', '\u2190', '\u2196'];

// One step of game logic, separate from drawing.
function tick(dt) {
  G.time += dt;
  pollInput(dt);
  const p = G.plane;
  if (G.mode === 'title') updateDemo(dt);
  else if (G.mode === 'takeoff') updateTakeoff(dt);
  else if (G.mode === 'flying') updateFlight(dt);
  else if (G.mode === 'surface') updateSurface(dt);
  else if (G.mode === 'rollout') updateRollout(dt);
  else if (G.mode === 'down') { G.timer += dt; p.propSpin = 0; if (G.timer > 1.7) resolveLanding(); }
  ui.updateFix(dt);
}

let last = performance.now();
function frame(now, once) {
  const raw = (now - last) / 1000, dt = Math.min(0.05, raw);
  last = now;
  G.frame++;
  if (G.frame > 120 && !once && watchSpeed(raw)) onResize(); // struggling: drop to a coarser picture
  tick(dt);
  const p = G.plane;

  const inFlight = G.mode === 'takeoff' || G.mode === 'flying' || G.mode === 'rollout' || G.mode === 'down' || G.mode === 'surface';
  const airborne = G.mode === 'title' || G.mode === 'flying';
  updateEffects(dt, airborne);

  // how fast we are going compared with this machine's ordinary top speed: drives the sense of speed
  const frac = inFlight && G.stats ? clamp(p.speed / G.stats.speed, 0, 1.6) : G.mode === 'title' ? 0.6 : 0;

  // camera: behind the aircraft in flight, slow orbit on the ground
  const wide = V.W > V.H;
  const vw = inFlight ? VIEWS[G.view] : VIEWS[0];
  const dark = Math.max(world().dark, clamp((p.alt - 50) / 120, 0, 1));
  let tz, tax, tay;
  if (inFlight || G.mode === 'title') {
    G.camRot += angDiff(-p.heading - Math.PI / 2, G.camRot) * Math.min(1, dt * 3);
    tz = (p.alt < 60 ? lerp(3.0, 2.0, p.alt / 60) : lerp(2.0, 1.25, clamp((p.alt - 60) / 160, 0, 1))) * vw.zm * ZK;
    tz *= 1.06 - 0.14 * Math.min(1, frac); // pull back as speed builds
    tax = 0.5; tay = G.mode === 'title' ? 0.78 : vw.ay + (G.view === 2 ? 0 : 0.07 * Math.min(1, frac)); // and look further ahead
  } else {
    G.camRot += dt * 0.12;
    tz = 3.8 * ZK; tax = wide && G.mode !== 'cards' ? 0.24 : 0.5; tay = wide ? 0.5 : 0.17;
    if (G.mode === 'cards') tay = wide ? 0.86 : 0.14; // keep the aircraft clear of the card
  }
  const kk = Math.min(1, dt * 2.5);
  G.zoom = lerp(G.zoom, tz * V.q, kk); G.ax = lerp(G.ax, tax, kk); G.ay = lerp(G.ay, tay, kk);
  V.tilt = lerp(V.tilt, vw.tilt, kk); V.elev = lerp(V.elev, vw.elev, kk);
  G.sky = lerp(G.sky, Math.max(vw.sky, dark), kk);
  const cockpit = G.view === 2 && (G.mode === 'takeoff' || G.mode === 'flying' || G.mode === 'rollout');

  const realAlt = p.alt;
  p.alt = visAlt(realAlt); // draw with the compressed height, then put the real one back
  const shake = G.mode === 'flying' && p.throttle > 0.85 ? (p.throttle - 0.85) * 5 : 0; // the airframe buzzes at full power
  setCamera(p.x, p.y, p.alt, G.camRot, G.zoom, G.ax + ((Math.random() - 0.5) * shake) / V.W, G.ay + ((Math.random() - 0.5) * shake) / V.H);
  drawScene(cockpit ? cockpitCtx : ctx, {
    time: G.time, frame: G.frame, plane: p, model: G.model, scenery: G.scenery, puffs: G.puffs,
    inStorm: G.mode === 'flying' && (G.inCell || G.underCell), showPlane: !cockpit, budget: G.frame < G.boost ? 40 : 3,
    sky: G.sky, skyH: vw.skyH, dark, speedFrac: airborne ? frac : 0,
    marks: inFlight ? marksNear(p) : null,
  });
  if (cockpit) { // tip the whole outside world with the bank, then draw the cockpit level on top
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.imageSmoothingEnabled = false;
    ctx.translate(V.W / 2, V.H / 2); ctx.rotate(-p.roll * 0.5); ctx.scale(1.3, 1.3);
    ctx.drawImage(cockpitCanvas, -V.W / 2, -V.H / 2);
    drawCockpit(ctx, V.W, V.H, {
      speed: p.speed / (G.stats.speed * (1 + G.stats.space)), alt: realAlt / G.stats.ceil, fuel: G.ac.fuel / G.stats.tank,
      roll: p.roll, vz: clamp(p.vz / G.stats.climb, -1, 1), time: G.time,
      prop: G.model.props.length > 0 && p.propSpin > 0.05, nose: AIRCRAFT[G.mission.craft].nose,
    });
  }
  p.alt = realAlt;

  if (inFlight) {
    // storm radar: purple ticks at the screen edge pointing at cells that are out of view
    if (G.stats.radar && !G.fail.avionics) {
      ctx.fillStyle = '#d08bff';
      for (const c of cloudsNow()) {
        if (!c.storm) continue;
        const q = project(c.wx, c.wy, c.alt);
        if (q[0] > 0 && q[0] < V.W && q[1] > 0 && q[1] < V.H) continue;
        ctx.fillRect(clamp(q[0], 3, V.W - 12) | 0, clamp(q[1], 3, V.H - 12) | 0, 4 * V.q, 4 * V.q);
      }
    }
    G.hudT -= dt;
    if (G.hudT <= 0) {
      G.hudT = 0.1;
      const d = destStop();
      if (d) ui.updateHud(G, screenBearing(p.x, p.y, d.x, d.y), `${d.name}  ${km(Math.hypot(d.x - p.x, d.y - p.y))} km`, input.throttle);
      else ui.updateHud(G, null, 'Climb to the black sky', input.throttle);
      const job = G.task && !G.task.done && G.mode !== 'rollout' && G.mode !== 'down' ? G.task : null, O = ui.el.objective;
      O.classList.toggle('hidden', !job);
      if (job) {
        const where = job.kind ? ` ${ARROWS[((Math.round(screenBearing(p.x, p.y, job.x, job.y) / (Math.PI / 4)) % 8) + 8) % 8]} ${km(Math.hypot(job.x - p.x, job.y - p.y))} km` : '';
        const txt = `\u25c6 ${job.label}${where}`;
        if (O.textContent !== txt) O.textContent = txt;
      }
      const ab = AIRCRAFT[G.mission.craft].ability, B = ui.el.abilBtn;
      B.classList.toggle('hidden', G.mode !== 'flying');
      B.classList.toggle('on', G.abil.t > 0); B.classList.toggle('cool', G.abil.t <= 0 && G.abil.cd > 0);
      B.textContent = G.abil.t > 0 ? ab.name : G.abil.cd > 0 ? `${ab.name} ${Math.ceil(G.abil.cd)}` : ab.name;
      ui.el.stopBtn.classList.toggle('hidden', G.mode !== 'surface');
    }
    if (G.hintT > 0) { G.hintT -= dt; if (G.hintT <= 0) ui.setHint(null); }
  }
  const dead = G.ac && (G.ac.fuel <= 0 || G.ac.cond.engine <= 0);
  setEngine(G.mode === 'takeoff' || (G.mode === 'flying' && !dead), p.throttle, G.fail.engine, G.time);
  // music follows where you are: each world has its own mood, and trouble adds a nagging pulse
  const wid = world().id;
  const mood = G.mode === 'title' ? 'calm'
    : wid === 'earth' ? (!inFlight ? 'calm' : realAlt > 100 ? 'space' : 'flight')
      : wid === 'moon' ? 'moon' : wid === 'mars' ? 'mars' : wid === 'deep' ? 'deep' : 'era';
  setMood(mood, G.mode === 'flying' && (PART_KEYS.some((k) => G.fail[k]) || G.inCell || G.heat > 0.15));

  if (!once) requestAnimationFrame(frame);
}

// The machine's special move.
function useAbility() {
  if (G.mode !== 'flying' || G.abil.t > 0 || G.abil.cd > 0) return;
  const ab = AIRCRAFT[G.mission.craft].ability;
  G.abil.t = ab.dur; G.abil.cd = ab.dur + ab.cd;
  if (ab.id === 'loop') G.fail.frame = false; // the loop shakes jammed controls free
  beep(500, 0.08); setTimeout(() => beep(760, 0.12), 80);
}
ui.el.abilBtn.addEventListener('click', useAbility);
ui.el.stopBtn.addEventListener('click', () => { if (G.mode === 'surface') makeCamp(false); });

function nextView() {
  G.view = (G.view + 1) % VIEWS.length;
  ui.el.viewBtn.textContent = VIEWS[G.view].name;
  try { localStorage.setItem('skywright.view', G.view); } catch { /* private mode */ }
  beep(600, 0.04);
}
ui.el.viewBtn.addEventListener('click', nextView);
const musicBtn = document.getElementById('musicBtn');
musicBtn.classList.toggle('off', !musicIsOn());
musicBtn.addEventListener('click', () => { initAudio(); musicBtn.classList.toggle('off', !toggleMusic()); });
// which way climbs: pull back like a real stick (the default), or push up
const stickBtn = document.getElementById('stickBtn');
const stickLabel = () => { stickBtn.textContent = settings.realStick ? 'PULL = CLIMB' : 'PUSH = CLIMB'; };
stickLabel();
stickBtn.addEventListener('click', () => { toggleStick(); stickLabel(); beep(600, 0.04); });

// ---------- boot ----------
G.view = (+localStorage.getItem('skywright.view') || 0) % VIEWS.length;
ui.el.viewBtn.textContent = VIEWS[G.view].name;
function onResize() { resizeView(canvas); cockpitCanvas.width = V.W; cockpitCanvas.height = V.H; }
window.addEventListener('resize', onResize);
onResize();
initInput(canvas, ui.el.throttle, {
  action: tryFix,
  key: (code) => { if (code === 'KeyM') toggleMute(); if (code === 'KeyN') musicBtn.click(); if (code === 'KeyX') useAbility(); if (code === 'KeyI') stickBtn.click(); if (code === 'KeyF') tryFix(); if (code === 'KeyV') nextView(); },
});
G.model = aircraftModel('sparrow');
G.belly = (G.model.nz * G.model.vs) / 2;
G.boost = 12;
G.save = loadSave();
ui.showPanel(ui.titleHTML(!!G.save));
// handy in the browser console; skip() finishes the current mission
window.__sky = {
  G, V, actions, audioDebug,
  sim: (sec) => { for (let t = 0; t < sec; t += 1 / 60) tick(1 / 60); },
  bench: (n = 20) => { const t = performance.now(); for (let i = 0; i < n; i++) frame(performance.now(), true); return (performance.now() - t) / n; },
  skip: () => { G.landing = { hard: false }; completeMission(); },
};
requestAnimationFrame(frame);
