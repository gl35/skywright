// Skywright: game state, flight model and the main loop.

import './style.css';
import { ERA_FINDS, TASKS, WORLDS, AIRCRAFT, PARTS, PART_KEYS, MISSIONS, INTRO, START_SAVE, KIT_COST, KIT_CAP_COST, KIT_CAP_MAX } from './data.js';
import { canFly, calcStats, repairCost, fuelCost, upCost, missionOf, targetOf, thinAir, km, jobPay } from './rules.js';
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
// On foot: looking over the pilot's shoulder, or through their eyes.
const FOOT = [
  { name: 'THIRD PERSON', tilt: 0.42, elev: 0.9, ay: 0.7, zoom: 15, sky: 1, skyH: 0.3, eye: 0 },
  { name: 'FIRST PERSON', tilt: 0.33, elev: 0.94, ay: 0.9, zoom: 15, sky: 1, skyH: 0.4, eye: 2.3 },
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
  pilot: { t: 0, work: 0 },
  foot: { x: 0, y: 0, rot: 0, view: 0, from: 'hangar', step: 0, moving: false },
  fx: [], fxT: 0, shakeT: 0, bounce: 0,
  quiz: null, task: null, sparks: [], drops: [], finds: [], portal: null, chain: 0, bonus: { sparks: 0, cash: 0, task: 0 },
  cards: [], afterCards: null,
  view: 0, sky: 0, heat: 0,
  camRot: -Math.PI / 2, zoom: 3 * ZK, ax: 0.5, ay: 0.7, trailT: 0, puffT: 0, hudT: 0, hintT: 0,
  scenery: buildScenery(),
};

// ---------- save ----------
function loadSave() {
  try {
    const s = JSON.parse(localStorage.getItem(SAVE_KEY));
    if (s && s.v === 2) { if (s.mission > 5) s.mission++; s.v = 3; } // v3 added a flight after the fifth
    return s && s.v === 3 ? s : null;
  } catch { return null; }
}
function persist() { try { localStorage.setItem(SAVE_KEY, JSON.stringify(G.save)); } catch { /* private mode */ } }

// Work out the current mission from the save, and make sure its machine and world are loaded.
function setup() {
  const s = G.save, m = (G.mission = missionOf(s));
  for (let i = Math.min(s.mission, MISSIONS.length - 1); i >= 0; i--) if (MISSIONS[i].ch) { G.chapter = MISSIONS[i].ch; break; }
  const need = m.craft, N = AIRCRAFT[need];
  if (!s.fleet[need]) { // a new machine joins the fleet in whatever state the story left it
    s.fleet[need] = { cond: { engine: N.start.engine, frame: N.start.frame, fuel: N.start.fuel, avionics: N.start.avionics }, fuel: N.tank * N.start.tank };
    G.newCraft = need;
    s.pick = null; // try the new one first
  }
  for (let i = 0; i <= Math.min(s.mission, MISSIONS.length - 1); i++) for (const x of MISSIONS[i].also || []) { // extra machines met along the way
    const X = AIRCRAFT[x];
    if (!s.fleet[x]) s.fleet[x] = { cond: { engine: X.start.engine, frame: X.start.frame, fuel: X.start.fuel, avionics: X.start.avionics }, fuel: X.tank * X.start.tank };
  }
  // the story suggests a machine for each flight, but any you own will do if it can get there
  const id = (G.craft = s.pick && canFly(s, m, s.pick) ? s.pick : need);
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
    showCards([{ title: `The ${A.name}`, body: [`${A.blurb} Fix the ${PARTS[worst].name.toLowerCase()} first.`], btn: 'Workshop' }], openHangar);
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
  showCards([{ title, body: [`Towed back to ${home}: <b>-$${fee}</b>.${dmg ? ' Every part damaged.' : ''}`], btn: 'Workshop' }], enterHangar);
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
    const [k, pts] = a.split(':'), n = +pts, c = repairCost(G.craft, n);
    if (G.save.money < c) return;
    G.save.money -= c;
    G.ac.cond[k] = Math.min(100, G.ac.cond[k] + n);
    G.pilot.work = 3;
  },
  kit() { const s = G.save; if (s.kits < s.kitCap && s.money >= KIT_COST) { s.money -= KIT_COST; s.kits++; } },
  kitcap() { const s = G.save; if (s.kitCap < KIT_CAP_MAX && s.money >= KIT_CAP_COST) { s.money -= KIT_CAP_COST; s.kitCap++; } },
  shift() { // an odd job is a question: answer it right to be paid
    G.quiz = makeQuestion(); G.quizFor = 'job';
    ui.showPanel(ui.quizHTML(G.quiz, `Odd job \u00b7 $${jobPay(G.save, G.stats)}`));
  },
  brew() { // stuck in the open with no fuel: an engineer makes some
    G.quiz = makeQuestion(); G.quizFor = 'fuel';
    ui.showPanel(ui.quizHTML(G.quiz, 'Make fuel \u00b7 +20%'));
  },
  scav() {
    G.quiz = makeQuestion(); G.quizFor = 'kit';
    ui.showPanel(ui.quizHTML(G.quiz, 'Make a kit \u00b7 +1'));
  },
  answer(i) {
    const q = G.quiz, s = G.save, ok = +i === q.answer, pay = jobPay(s, G.stats);
    let good, bad = '';
    if (G.quizFor === 'fuel') {
      if (ok) G.ac.fuel = Math.min(G.stats.tank, G.ac.fuel + G.stats.tank * 0.2);
      good = '<b>+20% fuel.</b>'; bad = 'No fuel. Try again.';
    } else if (G.quizFor === 'kit') {
      if (ok) s.kits = Math.min(s.kitCap, s.kits + 1);
      good = '<b>+1 repair kit.</b>'; bad = 'No kit. Try again.';
    } else {
      if (ok) { s.money += pay; s.shift = (+s.shift || 0) + 1; }
      good = `<b>+$${pay}</b>`; bad = 'No pay. Try another.';
    }
    if (ok) { beep(880, 0.1); setTimeout(() => beep(1180, 0.14), 90); } else beep(150, 0.25, 'sawtooth');
    ui.showPanel(ui.quizResultHTML(q, ok, ok ? good : bad, 'Back'));
  },
  quizdone() { G.quiz = null; G.pilot.work = 2.5; },
  upgrade(k) {
    const s = G.save, lv = s.up[k];
    if (lv >= 3 || s.money < upCost(lv)) return;
    s.money -= upCost(lv);
    s.up[k]++;
    G.stats = calcStats(G.craft, s.up);
  },
  fieldfix(k) {
    const s = G.save;
    if (s.kits < 1) return;
    s.kits--;
    G.ac.cond[k] = Math.min(100, G.ac.cond[k] + 30);
    G.fail[k] = false;
    G.pilot.work = 3;
  },
  fieldbodge(k) { G.pilot.work = 3; G.fail[k] = false; G.ac.cond[k] = Math.max(G.ac.cond[k], 8); },
  tow() { towBack('tow'); },
  walk() { // get out: you steer the pilot now, close up
    const at = pilotNow(0) || { x: G.plane.x + 3, y: G.plane.y + 3, rot: G.plane.heading };
    Object.assign(G.foot, { x: at.x, y: at.y, rot: at.rot, from: G.mode, step: 0, moving: false });
    G.mode = 'foot';
    ui.hidePanel();
    footBar.classList.remove('hidden');
    footLabel();
  },
  door(w) { // turn the key: the Ark goes through its own door to another year
    const s = G.save;
    s.visit = w; s.pick = null;
    beep(520, 0.1); setTimeout(() => beep(780, 0.1), 110); setTimeout(() => beep(1040, 0.25), 220);
    ui.flash();
    showCards([{ ch: 'The door', title: WORLDS[w].name, body: ['Woodsmoke, wet earth, and not one engine under the sky. Look round.'], btn: 'Step out' }], enterHangar);
  },
  doorhome() {
    G.save.visit = null;
    ui.flash();
    showCards([{ ch: 'The door', title: 'Back to your own year', body: ['The door clicks shut behind you.'], btn: 'Carry on' }], enterHangar);
  },
  fly(id) { // take a different machine from the fleet
    const s = G.save;
    if (!canFly(s, G.mission, id)) return;
    s.pick = id === G.mission.craft ? null : id;
    setup(); park();
    G.newCraft = null;
    beep(600, 0.05);
  },
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
      G.legTime = 0; G.transited = false; G.burnT = 0; G.fixT = 0; G.fix = null;
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
      G.hintT = 8;
      ui.setHint(isTouch
        ? `Drag to steer. ${settings.realStick ? 'Drag down to climb.' : 'Drag up to climb.'}<br>Right slider: throttle.<br>Follow the arrow. Land on the runway.`
        : `A/D steer \u00b7 ${settings.realStick ? 'S climb \u00b7 W descend' : 'W climb \u00b7 S descend'}<br>Q/E throttle \u00b7 Space fix \u00b7 X special \u00b7 V view<br>Follow the arrow. Land on the runway.`);
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

// ---------- effects: wakes, splashes, dust, explosions ----------
const rnd = (a, b) => a + Math.random() * (b - a);
function burst(n, x, y, z, o) { // n particles flung outward from a point
  for (let i = 0; i < n; i++) {
    const a = Math.random() * 6.283, v = rnd(o.v0, o.v1);
    G.fx.push({ kind: 'dot', x, y, z, vx: Math.cos(a) * v, vy: Math.sin(a) * v, vz: rnd(o.up0 || 0, o.up1 || 0), g: o.g || 0, age: 0, life: rnd(o.life * 0.7, o.life * 1.2),
      size: o.size || 2, col: Array.isArray(o.col) ? o.col[i % o.col.length] : o.col, grow: o.grow, alpha: o.alpha, under: o.under });
  }
}
const ring = (x, y, size, life = 1.4) => G.fx.push({ kind: 'ring', x, y, z: 0.05, vx: 0, vy: 0, vz: 0, age: 0, life, size, under: true });
function splash(x, y, big) {
  burst(big ? 40 : 22, x, y, 0.3, { v0: 1.5, v1: big ? 8 : 5, up0: 4, up1: big ? 13 : 9, g: 16, life: 0.9, col: '255,255,255', size: 2 });
  ring(x, y, big ? 14 : 8); ring(x, y, big ? 9 : 5, 1);
}
const dust = (x, y, z, n = 18) => burst(n, x, y, z, { v0: 1.5, v1: 5, up0: 0.5, up1: 2, life: 0.9, col: '205,185,145', size: 2, grow: 2, alpha: 0.6 });
function explode(x, y, z) {
  burst(36, x, y, z, { v0: 3, v1: 12, up0: 3, up1: 12, g: 13, life: 0.9, col: ['255,236,150', '255,160,60', '255,96,40'], size: 2 });
  burst(16, x, y, z, { v0: 0.5, v1: 3, up0: 2, up1: 5, life: 1.9, col: '40,40,46', size: 3, grow: 2.5, alpha: 0.7 });
  burst(10, x, y, z, { v0: 3, v1: 8, up0: 5, up1: 11, g: 15, life: 1.2, col: '60,50,46', size: 2 });
}
// Called every frame: move the particles on, and lay a wake behind anything moving on (or just above) water.
function updateFx(dt) {
  for (let i = G.fx.length - 1; i >= 0; i--) {
    const f = G.fx[i];
    f.age += dt;
    if (f.age >= f.life) { G.fx.splice(i, 1); continue; }
    f.x += f.vx * dt; f.y += f.vy * dt; f.z += f.vz * dt;
    if (f.g) { f.vz -= f.g * dt; if (f.z < 0) { f.z = 0; f.vz = 0; f.vx *= 0.5; f.vy *= 0.5; } }
  }
  G.shakeT = Math.max(0, G.shakeT - dt);
  G.bounce = Math.max(0, G.bounce - dt * 1.4);
  if (!G.model || G.mode === 'title' || G.fx.length > 400) return;
  const p = G.plane, lvl = levelAt(p.x, p.y);
  if (lvl !== 0 || !world().water) return;
  const agl = p.alt - G.belly; // height of the hull above the water
  const afloat = agl < 0.6, skimming = agl < 3.2 && G.mode === 'flying';
  if (!afloat && !skimming) return;
  G.fxT -= dt;
  if (G.fxT > 0) return;
  const ch = Math.cos(p.heading), sh = Math.sin(p.heading), half = (G.model.nx * G.model.vs) / 2;
  if (p.speed > 0.8) { // a V of foam from the stern (or spray from the wind of a low pass)
    G.fxT = 0.045;
    for (const side of [-1, 1]) {
      G.fx.push({ kind: 'dot', x: p.x - ch * half * 0.5 - sh * side * 1.2, y: p.y - sh * half * 0.5 + ch * side * 1.2, z: 0.05,
        vx: -sh * side * 1.6 - ch * 0.6, vy: ch * side * 1.6 - sh * 0.6, vz: 0, age: 0, life: afloat ? 1.7 : 0.8, size: afloat ? 2 : 1.5, col: '255,255,255', alpha: afloat ? 0.75 : 0.4, grow: 0.6, under: true });
    }
    if (afloat && Math.random() < 0.3) burst(1, p.x + ch * half * 0.7, p.y + sh * half * 0.7, 0.2, { v0: 0.5, v1: 2, up0: 2, up1: 4, g: 12, life: 0.5, col: '255,255,255', size: 1.5 }); // bow spray
  } else if (afloat) { G.fxT = 0.9; ring(p.x, p.y, 6 + Math.random() * 3); } // sitting still: slow ripples
}

// ---------- things to do on the way ----------
// Look outward from (x, y) for the nearest spot the test accepts.
function findSpot(x, y, ok) {
  for (let r = 0; r <= 340; r += 13)
    for (let a = 0; a < 6.283; a += 0.4) {
      const px = x + Math.cos(a) * r, py = y + Math.sin(a) * r;
      if (ok(px, py)) return { x: px, y: py };
      if (r === 0) break;
    }
  return null; // nothing suitable round here
}
// Called at take-off: place this flight's job marker and a trail of sparks that weaves and changes height.
function planExtras() {
  const m = G.mission, st = G.stats;
  G.task = null; G.sparks = []; G.drops = []; G.chain = 0; G.bonus = { sparks: 0, cash: 0, task: 0 };
  G.finds = []; G.portal = null;
  if (m.excursion) { // a visit through the door: things to find, a ring of sparks, and the door home hanging in the sky
    const h = world().stops[0], found = (G.save.found = G.save.found || {});
    const low = (x, y) => { const l = levelAt(x, y); return l >= 1 && l <= 3; };
    ERA_FINDS[m.world].forEach((f, i) => {
      const a = 0.6 + i * 2.1, d = 230 + i * 90;
      const at = findSpot(h.x + Math.cos(a) * d, h.y + Math.sin(a) * d, low);
      if (at) G.finds.push({ ...f, kind: 'task', col: '120,230,255', x: at.x, y: at.y, r: 20, gz: levelAt(at.x, at.y) * HZ, done: !!found[f.id] });
    });
    for (let i = 0; i < 16; i++) {
      const a = (i / 16) * 6.283, x = h.x + Math.cos(a) * 150, y = h.y + Math.sin(a) * 120, gz = levelAt(x, y) * HZ;
      G.sparks.push({ kind: 'spark', x, y, gz, z: gz + 7 + (i % 3) * 4, got: false });
    }
    G.portal = { kind: 'portal', x: h.x + 60, y: h.y - 45, gz: levelAt(h.x + 60, h.y - 45) * HZ, z: 2 * HZ + 15 };
    return;
  }
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
    else if (T.type === 'land' && T.water && !st.floats) G.task = null; // this machine cannot set down on water, so no rescue today
    else {
      // water jobs go on open water; everything else goes on dry ground, never in the sea
      const wet = (x, y) => !levelAt(x, y) && !levelAt(x + 9, y) && !levelAt(x - 9, y) && !levelAt(x, y + 9) && !levelAt(x, y - 9);
      const flat = (x, y) => { const l = levelAt(x, y); return l >= 2 && l <= 3 && levelAt(x + 6, y) === l && levelAt(x - 6, y) === l; };
      // low ground with no hills crowding it, so there is room to come down over it
      const dry = (x, y) => { const l = levelAt(x, y); return l >= 1 && l <= 3 && Math.max(levelAt(x + 22, y), levelAt(x - 22, y), levelAt(x, y + 22), levelAt(x, y - 22)) <= l + 2; };
      const test = T.water ? wet : T.type === 'land' ? flat : dry;
      let at = null;
      for (const tt of [T.t, 0.35, 0.65, 0.25, 0.75]) { // try other stretches of the route if the first has nowhere suitable
        for (const side of [T.off, -T.off]) {
          at = findSpot(A.x + dx * tt - uy * side, A.y + dy * tt + ux * side, test);
          if (at) break;
        }
        if (at) break;
      }
      if (at) G.task = { ...T, x: at.x, y: at.y, r: T.type === 'land' ? 26 : 24, gz: levelAt(at.x, at.y) * HZ, kind: 'task', done: false };
    }
  }
  const n = m.radio ? 0 : Math.floor(len / 110); // no trail of sparks to follow when you are meant to navigate
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
const LOW = 12; // how close to the ground counts as low enough for a drop
// Checked every moment in the air.
function checkExtras(p, floor) {
  for (const f of G.finds) { // a curiosity: come down low over its beam
    if (f.done || Math.hypot(f.x - p.x, f.y - p.y) > f.r || p.alt - floor > LOW + 2) continue;
    f.done = true;
    G.save.found[f.id] = true; G.save.money += 150;
    persist();
    beep(660, 0.1); setTimeout(() => beep(990, 0.1), 100); setTimeout(() => beep(1320, 0.25), 200);
    showCards([{ ch: 'Curiosity', title: f.title, body: [`${f.text} <b>+$150</b>`], note: f.note, btn: 'Fly on' }], () => { G.mode = 'flying'; ui.el.hud.classList.remove('hidden'); });
    return;
  }
  const d = G.portal;
  if (d && G.legTime > 6 && Math.hypot(d.x - p.x, d.y - p.y) < 9 && Math.abs(d.z - p.alt) < 9) { // through the door in the sky
    beep(1040, 0.1); setTimeout(() => beep(780, 0.1), 110); setTimeout(() => beep(520, 0.25), 220);
    actions.doorhome();
    return;
  }
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
  const ok = t.type === 'high' ? p.alt > t.alt : t.type === 'low' ? near && p.alt - floor < LOW : near;
  if (ok) {
    if (t.type === 'low') G.drops.push({ kind: 'drop', x: p.x, y: p.y, z: p.alt, gz: t.gz, age: 0 }); // out it goes
    finishTask(); ui.setHint(`<b>Done +$${t.pay}</b><br>${t.after}`); G.hintT = 4; }
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
  // The run can bump over gentle ground, but not up a bank, and not into the sea unless she floats.
  const to = levelAt(nx, ny), sea = to === 0 && world().water;
  if (onGround && to !== here && (to > here + 1 || (sea && !st.floats) || (here === 0 && world().water && !AIRCRAFT[G.craft].surf.land))) {
    p.heading += Math.PI; // no room that way: swing round and run back the other way
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
  const up = settings.realStick ? (isTouch ? 'drag down' : 'S') : isTouch ? 'drag up' : 'W';
  if (p.throttle < 0.3 && !st.hover) ui.setAlert('Open the throttle', true);
  else if (!ready) ui.setAlert('Gathering speed', true);
  else if (onGround) ui.setAlert(`Pull up: ${up}`, true);
  else ui.setAlert(null);
  if (p.alt > floor + 4) { G.mode = 'flying'; G.lastLvl = here; ui.setAlert(null); }
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
  const abil = AIRCRAFT[G.craft].ability, ab = G.abil.t > 0 ? abil.id : null; // the special move in progress, if any
  p.boosting = ab === 'burner' || ab === 'zoom'; p.shield = ab === 'shield';
  checkStorms();
  p.throttle = input.throttle;
  const dead = ac.fuel <= 0 || c.engine <= 0;
  const power = dead ? 0 : p.throttle * (f.engine ? 0.5 : 1) * (0.8 + 0.2 * c.engine / 100);
  const thin = thinAir(st, p.alt), boost = 1 + thin * st.space; // thin air: spacecraft get much faster up high
  const orbiting = st.orbit && p.alt > 170;
  let base = st.hover ? (dead ? 0.1 : power) : dead ? 0.42 : 0.25 + 0.75 * power;
  if (orbiting) base = Math.max(base, 0.9); // nothing to slow you down up here
  const still = ab === 'hover' || ab === 'mend';
  if (still) base = 0;
  const abSpeed = ab === 'burner' ? 1.7 : ab === 'race' ? 1.5 : ab === 'zoom' ? 1.3 : 1;
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
  if (dead) vzT = (st.hover ? -0.6 : -1.1) + // a dead engine is a long shallow glide, not a fall
    Math.min(0, input.pitch) * st.climb + Math.max(0, input.pitch) * 0.7;
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
  if (m.wind) { p.x += m.wind[0] * dt; p.y += m.wind[1] * dt; } // a steady wind carries you off your line
  if (m.radio) { // radio silence: the ship sends a bearing and distance only now and then
    G.fixT = (G.fixT || 0) - dt;
    if (G.fixT <= 0) { const d = G.target.stop; G.fixT = m.radio; G.fix = { brg: Math.atan2(d.y - p.y, d.x - p.x), dist: Math.hypot(d.x - p.x, d.y - p.y) }; beep(980, 0.05); }
  }

  if (!dead) ac.fuel = Math.max(0, ac.fuel - st.burn * (0.25 + 0.75 * p.throttle * p.throttle) * (f.fuel ? 4 : 1) * (orbiting ? 0.1 : 1) * (ab === 'lean' ? 0.33 : ab === 'burner' ? 3 : ab === 'zoom' || ab === 'race' ? 2 : 1) * dt);

  if (orbiting && ac.fuel < st.tank * 0.12) ac.fuel += st.tank * 0.006 * dt; // sun on the cells: never stranded in orbit
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
  if (p.alt <= floor) { p.alt = floor; touchdown(lvl, G.lastLvl); return; }
  G.lastLvl = lvl;

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
  if (failed) ui.setAlert(`${PARTS[failed].fail} · ${PARTS[failed].effect}${G.save.kits > 0 ? ' · FIX' : ' · BODGE'}`);
  else if (dead) ui.setAlert(`${ac.fuel <= 0 ? 'OUT OF FUEL' : 'ENGINE DEAD'} · GLIDE TO ${st.floats ? 'WATER OR FLAT GROUND' : 'FLAT GROUND'}`);
  else if (G.heat > 0.15) ui.setAlert('HEAT · DESCEND SLOWER');
  else if (ahead > p.alt - 0.5 && ahead > floor + 1) ui.setAlert('TERRAIN · CLIMB OR TURN');
  else if (p.alt - floor < 2.5 && p.vz < 0 && !nearField) ui.setAlert(lvl === 0 && wet && !st.floats ? 'TOO LOW · PULL UP' : 'LOW');
  else if (G.inCell) ui.setAlert('INSIDE A STORM');
  else if (ac.fuel / st.tank < 0.15) ui.setAlert('LOW FUEL');
  else if (G.task && !G.task.done && G.task.type === 'low' && Math.hypot(G.task.x - p.x, G.task.y - p.y) < G.task.r * 3)
    ui.setAlert(p.alt - floor >= LOW ? 'Too high. Come down' : 'Fly through the ring', true);
  else if (G.task && !G.task.done && G.task.type === 'land' && Math.hypot(G.task.x - p.x, G.task.y - p.y) < G.task.r * 3)
    ui.setAlert(p.speed > st.speed * 0.8 ? 'Slow down, land in the ring' : 'Land in the ring', true);
  else if (!dest) ui.setAlert(p.alt > 170 ? `Hold this height: ${Math.ceil(6 - G.burnT)}` : 'Climb to the black sky, then hold', true);
  else if (thin > 0 && dist < 400 + p.alt * 25) ui.setAlert(`${dest.name} ahead. Descend gently`, true);
  else if (orbiting) ui.setAlert('In orbit', true);
  else if (dist < 220) ui.setAlert(dist < 60 ? (p.speed > st.speed * 0.8 ? 'Slow down and land' : 'Descend to land') : `${dest.name} ahead. Descend`, true);
  else ui.setAlert(null);
}

// The ground has been reached. `was` is the ground level a moment ago.
// Coming down onto ground, flat or not, is a landing: rough ground and too much speed cost the airframe,
// but you walk away. Only flying level into ground that rises in front of you is a crash.
function touchdown(lvl, was) {
  const p = G.plane, st = G.stats, c = G.ac.cond, A = AIRCRAFT[G.craft];
  const af = airfieldAt(p.x, p.y);
  const fast = p.speed > st.speed * 0.8, hard = fast || p.vz < -3;
  const wet = lvl === 0 && world().water;
  // a bank one step high is a bump you can ride over; a wall two steps high, met while flying level, is not
  const steep = levelAt(p.x + Math.cos(p.heading) * 5, p.y + Math.sin(p.heading) * 5) >= lvl + 2; // the ground keeps climbing ahead
  const intoHill = was !== undefined && p.vz > -1.2 && (lvl >= was + 2 || (lvl > was && steep));
  const bump = was !== undefined && lvl === was + 1 && p.vz > -1.2;
  let rough = bump;
  if (!wet) for (const [dx, dy] of [[4, 0], [-4, 0], [0, 4], [0, -4]]) if (Math.abs(levelAt(p.x + dx, p.y + dy) - lvl) >= 2) rough = true;
  let res;
  if (af >= 0 && lvl === 2) res = 'airfield';
  else if (wet) res = st.floats ? 'water' : 'ditch';
  else if (intoHill) res = 'crash';
  else res = 'field';
  G.landing = { res, af, hard };
  G.timer = 0;
  G.campNote = '';
  ui.closeFix(); ui.setAlert(null); ui.setHint(null);
  if (res === 'ditch' || res === 'crash') {
    G.mode = 'down';
    thud(0.9, 1.1); ui.flash();
    G.shakeT = 0.7;
    if (res === 'ditch') splash(p.x, p.y, true); else explode(p.x, p.y, p.alt);
  } else {
    let dmg = hard ? 10 : 0;
    if (res === 'field' && !st.hover) {
      const onFloats = !A.surf.land; // a seaplane put down on dry land slides in on its floats
      dmg += 3 + (rough ? 10 : 0) + (onFloats ? 14 : 0) + (fast ? 6 : 0);
      G.campNote = onFloats ? 'Floats on dry land: airframe damaged.'
        : rough ? 'Rough ground: airframe knocked.'
          : fast ? 'Too fast: airframe knocked.' : 'Down safely.';
    }
    c.frame = Math.max(0, c.frame - dmg);
    G.mode = 'rollout';
    thud(hard || rough ? 0.5 : 0.2, 0.3);
    if (res === 'water') splash(p.x, p.y, hard);
    else dust(p.x, p.y, p.alt - G.belly, hard || rough ? 26 : 7);
    if (hard || rough) { G.shakeT = 0.35; G.bounce = 1; } // a hard arrival: she bounces
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
  const hop = G.bounce > 0 ? Math.abs(Math.sin(G.bounce * 9)) * 1.6 * G.bounce : 0;
  if (hop < 0.05 && G.bounce > 0.1 && G.bounce < 0.95 && Math.random() < dt * 8) { if (here === 0 && world().water) splash(p.x, p.y, false); else dust(p.x, p.y, here * HZ, 6); } // each time she comes back down
  p.alt = here * HZ + G.belly + hop;
  if (p.speed <= 0.3 && G.bounce <= 0) resolveLanding();
}

// The mission's flight is done: pay, tell the next part of the story, move on.
function completeMission() {
  const s = G.save, m = G.mission, hard = G.landing && G.landing.hard;
  s.money += m.pay;
  s.mission++; s.shift = false; s.pick = null;
  const body = m.arrive.slice();
  const extra = [];
  if (m.pay) extra.push(`<b>+$${m.pay}</b>`);
  if (G.bonus.task) extra.push(`job +$${G.bonus.task}`);
  if (G.bonus.sparks) extra.push(`sparks ${G.bonus.sparks}/${G.sparks.length} +$${G.bonus.cash}`);
  if (extra.length || hard) body.push(`${extra.join(' \u00b7 ')}${hard ? ' Hard landing: slow down next time.' : ''}`);
  const cards = [{ title: m.title, body, note: m.real }];
  const next = MISSIONS[s.mission];
  if (!next) cards.push({ title: 'The logbook is full', body: ['Seventeen flights, four dynasties, three worlds. Thanks for playing.'], btn: 'Keep flying' });
  else if (next.ch) cards.push({ ch: 'Next', title: next.ch, body: [next.brief], btn: 'Turn the page' });
  showCards(cards, enterHangar);
}

// Stopped somewhere that is not a landing ground: open the camp screen (repairs from kits, take off, or move on).
function makeCamp(onWater) {
  const A = AIRCRAFT[G.craft], lvl = levelAt(G.plane.x, G.plane.y), t = G.task;
  if (t && !t.done && t.type === 'land' && Math.hypot(t.x - G.plane.x, t.y - G.plane.y) < t.r + 10) { // you set down where you were needed
    finishTask();
    showCards([{ title: 'Job done', body: [`${t.after} <b>+$${t.pay}</b>`], btn: 'Carry on' }], () => makeCamp(onWater));
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
  const p = G.plane, st = G.stats, A = AIRCRAFT[G.craft], w = world();
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
  ui.setAlert(blocked ? 'Blocked' : atGoal ? 'Arrived. Close the throttle' : `${wetHere ? 'Sailing' : A.surf.land === 'climb' ? 'Walking' : 'Taxiing'}. Pull up to fly, STOP to camp`, true);
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
  updateFx(dt);
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
  for (let i = G.drops.length - 1; i >= 0; i--) { // parcels drift down and sit for a moment
    const d = G.drops[i];
    d.z = Math.max(d.gz, d.z - 7 * dt);
    if (d.z <= d.gz) { d.age += dt; if (d.age > 4) G.drops.splice(i, 1); }
  }
  for (let i = G.puffs.length - 1; i >= 0; i--) {
    const pf = G.puffs[i];
    pf.age += dt; pf.z += dt * 1.5;
    if (pf.age > 1.2) G.puffs.splice(i, 1);
  }
}

// ---------- main loop ----------
function angDiff(a, b) { let d = (a - b) % (Math.PI * 2); if (d > Math.PI) d -= Math.PI * 2; if (d < -Math.PI) d += Math.PI * 2; return d; }

// Where the pilot is when the aircraft is down: walking round it on land and stopping to work,
// or out on the wing if it is sitting on water. Returns null when they are in the cockpit.
// The pilot under your control. On land they walk where you steer; afloat they keep to the wing.
function updateFoot(dt) {
  const F = G.foot, p = G.plane, m = G.model;
  F.rot += input.turn * 2.3 * dt;
  const v = input.fwd > 0 ? 3.4 * input.fwd : 1.6 * input.fwd;
  F.moving = Math.abs(v) > 0.2;
  if (F.moving) F.step += dt * 5;
  let nx = F.x + Math.cos(F.rot) * v * dt, ny = F.y + Math.sin(F.rot) * v * dt;
  const afloat = levelAt(p.x, p.y) === 0 && world().water;
  if (afloat) { // stay on the wing: clamp to a strip across the aircraft
    const ch = Math.cos(p.heading), sh = Math.sin(p.heading), span = m.tips * m.vs * 0.85;
    const dx = nx - p.x, dy = ny - p.y;
    const along = clamp(dx * ch + dy * sh, -0.6, 1.4), across = clamp(-dx * sh + dy * ch, -span, span);
    nx = p.x + ch * along - sh * across; ny = p.y + sh * along + ch * across;
  } else {
    const here = levelAt(F.x, F.y), to = levelAt(nx, ny);
    if ((to === 0 && world().water) || Math.abs(to - here) > 1) { nx = F.x; ny = F.y; F.moving = false; } // no swimming, no cliffs
  }
  F.x = nx; F.y = ny;
}
function pilotNow(dt) {
  const p = G.plane, m = G.model, P = G.pilot;
  if (G.mode === 'foot') {
    const F = G.foot, afloat = levelAt(p.x, p.y) === 0 && world().water;
    return { x: F.x, y: F.y, z: afloat ? p.alt + G.belly * 0.3 : levelAt(F.x, F.y) * HZ, rot: F.rot, pose: F.moving ? Math.floor(F.step) % 2 : 0, onTop: afloat, hidden: F.view === 1 };
  }
  if (!G.save || !(G.mode === 'hangar' || G.mode === 'field' || G.mode === 'cards')) return null;
  const lvl = levelAt(p.x, p.y);
  if (p.alt - (lvl * HZ + G.belly) > 0.8) return null; // still in the air
  P.t += dt; P.work = Math.max(0, P.work - dt);
  const ch = Math.cos(p.heading), sh = Math.sin(p.heading);
  const half = (m.nx * m.vs) / 2, span = m.tips * m.vs;
  const busy = P.work > 0 || P.t % 11 < 2.6; // working because you asked, or just tinkering
  if (busy && Math.random() < dt * 6) G.puffs.push({ x: p.x + ch * half * 0.8, y: p.y + sh * half * 0.8, z: p.alt, age: 0.5, dark: false });
  if (lvl === 0 && world().water) { // nowhere to stand but the wing
    const k = Math.sin(P.t * 0.4), d = Math.cos(P.t * 0.4);
    const side = busy ? 0.25 * span : k * span * 0.6;
    return { x: p.x - sh * side + ch * 0.5, y: p.y + ch * side + sh * 0.5, z: p.alt + G.belly * 0.3, rot: busy ? p.heading : p.heading + (d > 0 ? Math.PI / 2 : -Math.PI / 2), pose: busy ? 2 : Math.floor(P.t * 4) % 2, onTop: true };
  }
  // on land: a slow circuit of the machine, ending each lap with some work at the nose
  const walked = P.t - 2.6 * Math.floor(P.t / 11) - Math.min(P.t % 11, 2.6);
  const a = P.work > 0 ? 0.25 : walked * 0.45 + 0.25;
  const rx = half + 2.2, ry = span * 0.55 + 2.4;
  const lx = Math.cos(a) * rx, ly = Math.sin(a) * ry;
  const x = p.x + ch * lx - sh * ly, y = p.y + sh * lx + ch * ly;
  const face = busy ? Math.atan2(p.y - y, p.x - x) : p.heading + Math.atan2(Math.cos(a) * ry, -Math.sin(a) * rx);
  return { x, y, z: levelAt(x, y) * HZ, rot: face, pose: busy ? 2 : Math.floor(P.t * 4) % 2, onTop: false };
}

const markList = [];
function marksNear(p) {
  markList.length = 0;
  const t = G.task;
  if (t && t.kind && Math.hypot(t.x - p.x, t.y - p.y) < 420) markList.push(t); // stays on the map after the job is done
  for (const d of G.drops) markList.push(d);
  for (const f of G.finds) if (Math.hypot(f.x - p.x, f.y - p.y) < 480) markList.push(f);
  if (G.portal) markList.push(G.portal);
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
  else if (G.mode === 'foot') updateFoot(dt);
  else if (G.mode === 'rollout') updateRollout(dt);
  else if (G.mode === 'down') { // the wreck: cartwheeling and burning on land, settling and sinking at sea
    G.timer += dt; p.propSpin = 0;
    const ditch = G.landing && G.landing.res === 'ditch';
    if (ditch) {
      p.speed *= 1 - Math.min(1, dt * 3); p.alt -= dt * 1.1; p.roll = lerp(p.roll, 0.5, Math.min(1, dt * 2));
      if (Math.random() < dt * 5) ring(p.x + rnd(-3, 3), p.y + rnd(-3, 3), rnd(3, 6), 1);
    } else {
      const k = Math.max(0, 1 - G.timer / 1.5);
      p.heading += dt * 9 * k; p.roll = Math.sin(G.timer * 14) * 0.7 * k; p.speed *= 1 - Math.min(1, dt * 4);
      p.x += Math.cos(p.heading) * p.speed * dt * 0.3; p.y += Math.sin(p.heading) * p.speed * dt * 0.3;
      if (Math.random() < dt * 14) burst(1, p.x + rnd(-2, 2), p.y + rnd(-2, 2), p.alt, { v0: 0, v1: 1, up0: 2, up1: 5, life: 1.3, col: Math.random() < 0.4 ? '255,150,50' : '40,40,46', size: 3, grow: 2, alpha: 0.7 });
    }
    if (G.timer > 2.3) resolveLanding();
  }
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
  const onFoot = G.mode === 'foot';
  const who = pilotNow(dt);
  const vw = onFoot ? FOOT[G.foot.view] : inFlight ? VIEWS[G.view] : VIEWS[0];
  const dark = Math.max(world().dark, clamp((p.alt - 50) / 120, 0, 1));
  let tz, tax, tay;
  if (inFlight || G.mode === 'title') {
    G.camRot += angDiff(-p.heading - Math.PI / 2, G.camRot) * Math.min(1, dt * 3);
    tz = (p.alt < 60 ? lerp(3.5, 1.9, Math.min(1, p.alt / 45)) : lerp(2.0, 1.25, clamp((p.alt - 60) / 160, 0, 1))) * vw.zm * ZK;
    tz *= 1.06 - 0.14 * Math.min(1, frac); // pull back as speed builds
    tax = 0.5; tay = G.mode === 'title' ? 0.78 : vw.ay + (G.view === 2 ? 0 : 0.07 * Math.min(1, frac)); // and look further ahead
  } else if (onFoot) { // close in behind the pilot, or at their eye
    G.camRot += angDiff(-G.foot.rot - Math.PI / 2, G.camRot) * Math.min(1, dt * 5);
    tz = vw.zoom; tax = 0.5; tay = vw.ay;
  } else {
    G.camRot += dt * 0.12;
    tz = 3.8 * ZK; tax = wide && G.mode !== 'cards' ? 0.24 : 0.5; tay = wide ? 0.5 : 0.17;
    if (G.mode === 'cards') tay = wide ? 0.86 : 0.14; // keep the aircraft clear of the card
  }
  const kk = Math.min(1, dt * 2.5);
  G.zoom = lerp(G.zoom, tz * V.q, kk); G.ax = lerp(G.ax, tax, kk); G.ay = lerp(G.ay, tay, kk);
  // The ordinary view follows your height: down low the camera drops behind you and looks along the ground
  // to the horizon; as you climb it swings up until it is looking almost straight down.
  let tTilt = vw.tilt, tElev = vw.elev, tSky = vw.sky, skyH = vw.skyH;
  if (vw === VIEWS[0] && (inFlight || G.mode === 'title')) {
    const t = clamp((p.alt - 7) / 27, 0, 1), a = t * t * (3 - 2 * t);
    tTilt = lerp(0.38, 0.74, a); tElev = lerp(0.92, 0.66, a); tSky = 1 - clamp((a - 0.2) / 0.4, 0, 1); skyH = lerp(0.3, 0.45, a);
    G.ay = lerp(G.ay, tay + 0.12 * (1 - a), kk);
  }
  V.tilt = lerp(V.tilt, tTilt, kk); V.elev = lerp(V.elev, tElev, kk);
  G.sky = lerp(G.sky, Math.max(tSky, dark), kk);
  const cockpit = G.view === 2 && (G.mode === 'takeoff' || G.mode === 'flying' || G.mode === 'rollout');

  const realAlt = p.alt;
  p.alt = visAlt(realAlt); // draw with the compressed height, then put the real one back
  const shake = (G.mode === 'flying' && p.throttle > 0.85 ? (p.throttle - 0.85) * 5 : 0) + G.shakeT * 22 * V.q; // engine buzz, and the jolt of a hard arrival // the airframe buzzes at full power
  const fx = onFoot && who ? who.x : p.x, fy = onFoot && who ? who.y : p.y, fz = onFoot && who ? who.z + vw.eye : p.alt;
  setCamera(fx, fy, fz, G.camRot, G.zoom, G.ax + ((Math.random() - 0.5) * shake) / V.W, G.ay + ((Math.random() - 0.5) * shake) / V.H);
  drawScene(cockpit ? cockpitCtx : ctx, {
    time: G.time, frame: G.frame, plane: p, model: G.model, scenery: G.scenery, puffs: G.puffs,
    inStorm: G.mode === 'flying' && (G.inCell || G.underCell), showPlane: !cockpit, budget: G.frame < G.boost ? 40 : 3,
    sky: G.sky, skyH, dark, speedFrac: airborne ? frac : 0,
    marks: inFlight ? marksNear(p) : null, pilot: who && !who.hidden ? who : null, fx: G.fx,
  });
  if (cockpit) { // tip the whole outside world with the bank, then draw the cockpit level on top
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.imageSmoothingEnabled = false;
    ctx.translate(V.W / 2, V.H / 2); ctx.rotate(-p.roll * 0.5); ctx.scale(1.3, 1.3);
    ctx.drawImage(cockpitCanvas, -V.W / 2, -V.H / 2);
    drawCockpit(ctx, V.W, V.H, {
      speed: p.speed / (G.stats.speed * (1 + G.stats.space)), alt: realAlt / G.stats.ceil, fuel: G.ac.fuel / G.stats.tank,
      roll: p.roll, vz: clamp(p.vz / G.stats.climb, -1, 1), time: G.time,
      prop: G.model.props.length > 0 && p.propSpin > 0.05, nose: AIRCRAFT[G.craft].nose,
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
      const deg = (a) => String(Math.round((((a * 180) / Math.PI + 90) % 360 + 360) % 360) % 360).padStart(3, '0'); // compass: north is up the map
      if (d && G.mission.radio && Math.hypot(d.x - p.x, d.y - p.y) > 350) // too far to see: steer by the last fix
        ui.updateHud(G, null, G.fix ? `STEER ${deg(G.fix.brg)}° · YOU ${deg(p.heading)}° · ${km(G.fix.dist)} km` : 'Waiting for a fix', input.throttle);
      else if (d) ui.updateHud(G, screenBearing(p.x, p.y, d.x, d.y), `${d.name}  ${km(Math.hypot(d.x - p.x, d.y - p.y))} km`, input.throttle);
      else ui.updateHud(G, null, 'Climb to the black sky', input.throttle);
      const job = G.task && !G.task.done && G.mode !== 'rollout' && G.mode !== 'down' ? G.task : null, O = ui.el.objective;
      const trip = G.mission.excursion && G.mode !== 'rollout' && G.mode !== 'down';
      O.classList.toggle('hidden', !job && !trip);
      if (trip) {
        const txt = `\u25c6 Finds ${G.finds.filter((f) => f.done).length}/${G.finds.length} \u00b7 fly low over blue beams`;
        if (O.textContent !== txt) O.textContent = txt;
      }
      if (job) {
        const where = job.kind ? ` ${ARROWS[((Math.round(screenBearing(p.x, p.y, job.x, job.y) / (Math.PI / 4)) % 8) + 8) % 8]} ${km(Math.hypot(job.x - p.x, job.y - p.y))} km` : '';
        const txt = `\u25c6 ${job.label}${where}`;
        if (O.textContent !== txt) O.textContent = txt;
      }
      const ab = AIRCRAFT[G.craft].ability, B = ui.el.abilBtn;
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
  const ab = AIRCRAFT[G.craft].ability;
  G.abil.t = ab.dur; G.abil.cd = ab.dur + ab.cd;
  if (ab.id === 'loop') G.fail.frame = false; // the loop shakes jammed controls free
  beep(500, 0.08); setTimeout(() => beep(760, 0.12), 80);
}
ui.el.abilBtn.addEventListener('click', useAbility);
ui.el.stopBtn.addEventListener('click', () => { if (G.mode === 'surface') makeCamp(false); });

const footBar = document.getElementById('footBar');
function footLabel() {
  document.getElementById('footView').textContent = FOOT[G.foot.view].name;
  document.getElementById('footHint').textContent = isTouch ? 'Drag to walk and turn' : 'W walk \u00b7 A/D turn \u00b7 V view \u00b7 B back';
}
function footBack() {
  if (G.mode !== 'foot') return;
  footBar.classList.add('hidden');
  G.mode = G.foot.from;
  refresh();
}
document.getElementById('footView').addEventListener('click', () => { G.foot.view = 1 - G.foot.view; footLabel(); beep(600, 0.04); });
document.getElementById('footBack').addEventListener('click', footBack);

function nextView() {
  if (G.mode === 'foot') { G.foot.view = 1 - G.foot.view; footLabel(); beep(600, 0.04); return; }
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
  key: (code) => { if (code === 'KeyM') toggleMute(); if (code === 'KeyN') musicBtn.click(); if (code === 'KeyX') useAbility(); if (code === 'KeyB') footBack(); if (code === 'KeyI') stickBtn.click(); if (code === 'KeyF') tryFix(); if (code === 'KeyV') nextView(); },
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
