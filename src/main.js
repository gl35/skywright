// Skywright: game state, flight model and the main loop.

import './style.css';
import { STOPS, AIRCRAFT, PARTS, PART_KEYS, STORY, START_SAVE, KIT_COST, KIT_CAP_COST, KIT_CAP_MAX } from './data.js';
import { calcStats, repairCost, fuelCost, upCost, legDist, legPay, nextStop, thinAir, LAP_PRIZE } from './rules.js';
import { drawCockpit } from './cockpit.js';
import { aircraftModel, buildScenery } from './models.js';
import { V, resizeView, setCamera, drawScene, screenBearing, cloudsNow, project } from './render.js';
import { HZ, levelAt, airfieldAt } from './world.js';
import { input, initInput, pollInput } from './input.js';
import * as ui from './ui.js';
import { initAudio, setEngine, beep, thud, toggleMute } from './audio.js';
import { clamp, lerp } from './noise.js';

const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d', { alpha: false });
const SAVE_KEY = 'skywright.save.v1';
const LAST = STOPS.length - 1;
const isTouch = window.matchMedia('(pointer: coarse)').matches;

// Camera views. tilt squashes the ground, elev is how far height lifts things up the screen:
// a low tilt with a high elev looks along the ground instead of down at it.
const VIEWS = [
  { name: 'TOP', tilt: 0.62, elev: 0.75, ay: 0.62, zm: 1, sky: 0, skyH: 0.45 },
  { name: 'TAIL', tilt: 0.36, elev: 0.93, ay: 0.76, zm: 1.3, sky: 1, skyH: 0.36 },
  { name: 'COCKPIT', tilt: 0.3, elev: 0.95, ay: 0.98, zm: 1.6, sky: 1, skyH: 0.42 },
];
// Great heights are drawn compressed so the ground stays in the picture.
const visAlt = (a) => (a < 40 ? a : 40 + (a - 40) * 0.3);
const cockpitCanvas = document.createElement('canvas');
const cockpitCtx = cockpitCanvas.getContext('2d', { alpha: false });

const G = {
  mode: 'title', // title | cards | hangar | field | takeoff | flying | rollout | down
  time: 0, frame: 0,
  save: null, ac: null, stats: null, model: null, belly: 2,
  plane: { x: -40, y: 60, alt: 16, heading: 0, speed: 12, throttle: 0.6, roll: 0.25, rollShown: 0, vz: 0, propSpin: 1, trails: [[], []] },
  fail: { engine: false, frame: false, fuel: false, avionics: false },
  puffs: [], inCell: false, underCell: false,
  tab: 'workshop', dest: 1, legTime: 0, timer: 0, landing: null, onWater: false,
  cards: [], afterCards: null,
  view: 0, sky: 0, heat: 0, orbitRun: false,
  camRot: -Math.PI / 2, zoom: 3, ax: 0.5, ay: 0.7, trailT: 0, puffT: 0, hudT: 0, hintT: 0,
  scenery: buildScenery(),
};

// ---------- save ----------
function loadSave() {
  try {
    const s = JSON.parse(localStorage.getItem(SAVE_KEY));
    return s && s.v === 1 ? s : null;
  } catch { return null; }
}
function persist() { try { localStorage.setItem(SAVE_KEY, JSON.stringify(G.save)); } catch { /* private mode */ } }

function useAircraft() {
  const s = G.save;
  G.ac = s.fleet[s.current];
  G.stats = calcStats(s.current, G.ac);
  G.model = aircraftModel(s.current);
  G.belly = (G.model.nz * G.model.vs) / 2;
  G.ac.fuel = Math.min(G.ac.fuel, G.stats.tank);
}
function clearTrails() { G.plane.trails[0].length = 0; G.plane.trails[1].length = 0; }
function park() {
  const st = STOPS[G.save.stop];
  Object.assign(G.plane, { x: st.x - 2, y: st.y, heading: 0, speed: 0, vz: 0, roll: 0, throttle: 0, propSpin: 0, alt: 2 * HZ + G.belly });
  clearTrails();
}

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
  nextCard();
}
function nextCard() {
  const c = G.cards.shift();
  if (c) { ui.showPanel(ui.cardHTML(c)); return; }
  const f = G.afterCards; G.afterCards = null;
  if (f) f();
}
const storyCard = (i) => ({ title: STORY[i].title, nan: STORY[i].nan, body: [STORY[i].you] });

function enterHangar() {
  G.mode = 'hangar';
  useAircraft(); park();
  for (const k of PART_KEYS) G.fail[k] = false;
  G.puffs.length = 0; G.inCell = G.underCell = false;
  G.tab = 'workshop';
  ui.closeFix(); ui.setAlert(null); ui.setHint(null);
  ui.el.hud.classList.add('hidden');
  persist(); refresh();
}

function towBack(kind) {
  const s = G.save;
  const fee = Math.min(s.money, 60 + Math.round(s.money * 0.25));
  const dmg = kind === 'crash' ? 35 : kind === 'ditch' ? 22 : 0;
  s.money -= fee;
  if (dmg) for (const k of PART_KEYS) G.ac.cond[k] = Math.max(5, G.ac.cond[k] - dmg);
  const title = kind === 'crash' ? 'Crashed' : kind === 'ditch' ? 'Ditched at sea' : 'Towed in';
  const first = kind === 'crash' ? 'You walk away from it. The aircraft does not look as lucky.'
    : kind === 'ditch' ? 'The aircraft settles into the swell and you climb out onto the wing.'
      : 'With a dry tank there is nothing to do but wait for the truck.';
  showCards([{ title, body: [first, `A salvage crew brings the ${AIRCRAFT[s.current].name} back to ${STOPS[s.stop].name}. It costs you $${fee}.${dmg ? ' Every part took damage.' : ''}`], btn: 'Back to the workshop' }], enterHangar);
}

const actions = {
  new() {
    initAudio();
    G.save = START_SAVE(); G.save.best = 0;
    useAircraft(); park();
    showCards([storyCard(0)], enterHangar);
  },
  continue() { initAudio(); useAircraft(); enterHangar(); },
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
    const [k, pts] = a.split(':'), n = +pts, c = repairCost(G.save.current, n);
    if (G.save.money < c) return;
    G.save.money -= c;
    G.ac.cond[k] = Math.min(100, G.ac.cond[k] + n);
  },
  kit() { const s = G.save; if (s.kits < s.kitCap && s.money >= KIT_COST) { s.money -= KIT_COST; s.kits++; } },
  kitcap() { const s = G.save; if (s.kitCap < KIT_CAP_MAX && s.money >= KIT_CAP_COST) { s.money -= KIT_CAP_COST; s.kitCap++; } },
  shift() { const s = G.save; if (!s.shift) { s.shift = true; s.money += 60; } },
  upgrade(k) {
    const s = G.save, lv = G.ac.up[k];
    if (lv >= 3 || s.money < upCost(s.current, lv)) return;
    s.money -= upCost(s.current, lv);
    G.ac.up[k]++;
    useAircraft();
  },
  buy(id) {
    const s = G.save, A = AIRCRAFT[id];
    if (s.fleet[id] || s.money < A.cost || !(A.lap ? s.done : (s.best || 0) >= A.from)) return;
    s.money -= A.cost;
    s.fleet[id] = { cond: { engine: 100, frame: 100, fuel: 100, avionics: 100 }, up: { engine: 0, tank: 0, frame: 0, avionics: 0 }, fuel: A.tank * 0.5 };
    s.current = id;
    useAircraft(); park();
  },
  fly(id) { if (G.save.fleet[id]) { G.save.current = id; useAircraft(); park(); } },
  fieldfix(k) {
    const s = G.save;
    if (s.kits < 1) return;
    s.kits--;
    G.ac.cond[k] = Math.min(100, G.ac.cond[k] + 30);
    G.fail[k] = false;
  },
  tow() { towBack('tow'); },
  takeoff() {
    if (G.ac.fuel < 1) { beep(160, 0.25); G.tab = 'plan'; return; }
    initAudio();
    const p = G.plane, s = G.save;
    if (G.mode === 'hangar') {
      p.x = STOPS[s.stop].x - 20; p.y = STOPS[s.stop].y; p.heading = 0;
      G.legTime = 0;
      G.orbitRun = G.stats.orbit && s.done && s.stop === 0;
    }
    G.dest = nextStop(s, G.stats);
    p.speed = 0; p.vz = 0; p.roll = 0;
    input.throttle = 0.85;
    G.mode = 'takeoff';
    persist();
    ui.hidePanel();
    ui.el.hud.classList.remove('hidden');
    if (!s.seen.controls) {
      s.seen.controls = true;
      G.hintT = 10;
      ui.setHint(isTouch
        ? 'Drag left or right to steer.<br>Drag up to climb, down to descend.<br>The slider on the right is the throttle.<br>VIEW changes the camera.<br><br>Fly east to the next field and<br>descend onto the runway to land.'
        : 'A / D or arrows: steer<br>W / S: climb and descend<br>Q / E: throttle &nbsp; Space: fix a breakdown<br>V: change view<br><br>Fly east to the next field and<br>descend onto the runway to land.');
    }
  },
};
ui.el.panel.addEventListener('click', (e) => {
  const b = e.target.closest('[data-act]');
  if (!b || b.disabled) return;
  const before = G.mode;
  actions[b.dataset.act]?.(b.dataset.arg);
  if (G.mode === before && (G.mode === 'hangar' || G.mode === 'field')) { persist(); refresh(); }
});

// ---------- in-flight repair ----------
function tryFix() {
  if (G.mode !== 'flying') return;
  if (ui.fix.open) {
    const r = ui.hitFix(), k = ui.fix.part;
    if (r === 'miss') { G.ac.cond[k] = Math.max(0, G.ac.cond[k] - 1.5); beep(150, 0.12, 'sawtooth'); }
    else if (r === 'hit') beep(700, 0.06);
    else {
      G.fail[k] = false;
      G.ac.cond[k] = Math.min(100, G.ac.cond[k] + 12);
      G.save.kits--;
      ui.closeFix();
      beep(880, 0.1); setTimeout(() => beep(1180, 0.14), 90);
    }
    return;
  }
  const k = PART_KEYS.find((p) => G.fail[p]);
  if (!k) return;
  if (G.save.kits < 1) { beep(150, 0.2, 'sawtooth'); return; }
  ui.openFix(k, G.ac.cond[k]);
}
ui.el.fixBtn.addEventListener('click', tryFix);
ui.el.fixHit.addEventListener('pointerdown', (e) => { e.preventDefault(); tryFix(); });

function breakDown(k) {
  G.fail[k] = true;
  beep(220, 0.3, 'sawtooth', 0.2);
  setTimeout(() => beep(180, 0.4, 'sawtooth', 0.2), 200);
}

// ---------- flight ----------
function updateTakeoff(dt) {
  const p = G.plane, st = G.stats;
  p.throttle = Math.max(0.7, input.throttle);
  p.propSpin = 1;
  p.speed = Math.min(st.speed * 0.6, p.speed + st.speed * 0.3 * dt);
  p.x += Math.cos(p.heading) * p.speed * dt;
  p.y += Math.sin(p.heading) * p.speed * dt;
  const floor = levelAt(p.x, p.y) * HZ + G.belly;
  if (p.speed > st.speed * 0.42) { p.vz = lerp(p.vz, 3.5, Math.min(1, dt * 3)); p.alt = Math.max(floor, p.alt + p.vz * dt); }
  else p.alt = floor;
  if (p.alt > floor + 4) G.mode = 'flying';
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

function updateFlight(dt) {
  const p = G.plane, st = G.stats, ac = G.ac, f = G.fail, c = ac.cond;
  G.legTime += dt;
  checkStorms();
  p.throttle = input.throttle;
  const dead = ac.fuel <= 0 || c.engine <= 0;
  const power = dead ? 0 : p.throttle * (f.engine ? 0.5 : 1) * (0.8 + 0.2 * c.engine / 100);
  const thin = thinAir(st, p.alt), boost = 1 + thin * st.space; // thin air: spacecraft get much faster up high
  const orbiting = st.orbit && p.alt > 170;
  let base = st.hover ? (dead ? 0.1 : power) : dead ? 0.4 : 0.35 + 0.65 * power;
  if (orbiting) base = Math.max(base, 0.9); // nothing to slow you down up here
  p.speed += (st.speed * base * boost - p.speed) * Math.min(1, dt * 0.7);
  p.propSpin = dead ? Math.max(0, p.propSpin - dt * 0.5) : 1;

  p.stick = (p.stick || 0) + (input.turn - (p.stick || 0)) * Math.min(1, dt * 6); // ease the stick so taps are gentle
  let turn = p.stick;
  if (f.frame) turn = clamp(turn * 0.45 + 0.22, -1, 1);
  if (G.inCell) turn += Math.sin(G.time * 7.3) * 0.35;
  p.heading += (turn * st.turn * dt) / (1 + thin * st.space * 0.5);
  p.roll += (turn * 0.7 - p.roll) * Math.min(1, dt * 5);

  let vzT;
  if (dead) vzT = (st.hover ? -0.8 : -1.6) + Math.min(0, input.pitch) * st.climb + Math.max(0, input.pitch) * 0.7;
  else vzT = input.pitch > 0 ? input.pitch * st.climb * (0.3 + 0.7 * power) : input.pitch * st.climb * 0.9;
  if (vzT > 0 && p.alt > st.ceil - 3) vzT *= clamp((st.ceil - p.alt) / 3, 0, 1);
  if (G.inCell) vzT += Math.sin(G.time * 5.1) * 3;
  const agl = p.alt - (levelAt(p.x, p.y) * HZ + G.belly);
  if (agl < 3 && vzT < -(0.8 + agl)) vzT = -(0.8 + agl); // flare: ease the sink rate close to the ground
  p.vz += (vzT - p.vz) * Math.min(1, dt * 3);
  p.alt += p.vz * dt;
  p.x += Math.cos(p.heading) * p.speed * dt;
  p.y += Math.sin(p.heading) * p.speed * dt;

  if (!dead) ac.fuel = Math.max(0, ac.fuel - st.burn * (0.25 + 0.75 * p.throttle * p.throttle) * (f.fuel ? 4 : 1) * (orbiting ? 0.1 : 1) * dt);

  // wear and tear
  const w = st.wear * dt;
  c.engine -= 0.1 * (0.4 + 1.6 * p.throttle * p.throttle) * w;
  c.frame -= 0.035 * w; c.fuel -= 0.06 * w; c.avionics -= 0.045 * w;
  G.heat = 0;
  if (st.space && thin > 0.15 && p.vz < 0) { // re-entry: the steeper the descent, the hotter the hull
    G.heat = clamp(thin * (-p.vz / (st.climb * 0.9) - 0.45) * 2.2, 0, 1);
    c.frame -= 7 * G.heat * dt;
  }
  if (G.inCell) {
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

  // alerts, most urgent first
  const failed = PART_KEYS.find((k) => f[k]);
  const dx = STOPS[G.dest].x - p.x, dy = STOPS[G.dest].y - p.y, dist = Math.hypot(dx, dy);
  const ahead = levelAt(p.x + Math.cos(p.heading) * p.speed * 1.6, p.y + Math.sin(p.heading) * p.speed * 1.6) * HZ + G.belly;
  const nearField = airfieldAt(p.x, p.y) >= 0 || dist < 60;
  if (failed) ui.setAlert(`${PARTS[failed].fail} · ${PARTS[failed].effect}${G.save.kits > 0 ? '' : ' · NO KITS LEFT'}`);
  else if (dead) ui.setAlert(ac.fuel <= 0 ? 'OUT OF FUEL · GLIDING' : 'ENGINE DEAD · GLIDING');
  else if (G.heat > 0.15) ui.setAlert('RE-ENTRY HEAT · SHALLOW YOUR DESCENT');
  else if (ahead > p.alt - 0.5 && ahead > floor + 1) ui.setAlert('TERRAIN AHEAD · CLIMB OR TURN');
  else if (p.alt - floor < 2.5 && p.vz < 0 && !nearField) ui.setAlert(lvl === 0 && !st.floats ? 'TOO LOW · PULL UP' : 'LOW');
  else if (G.inCell) ui.setAlert('INSIDE A STORM CELL');
  else if (ac.fuel / st.tank < 0.15) ui.setAlert('LOW FUEL');
  else if (thin > 0 && dist < 400 + p.alt * 25) ui.setAlert(`${STOPS[G.dest].name} is coming up. Start a gentle descent`, true);
  else if (orbiting) ui.setAlert('In orbit. Engines idling', true);
  else if (dist < 220) ui.setAlert(dist < 60 ? (p.speed > st.speed * 0.8 ? 'Throttle back, then descend onto the runway' : 'Descend onto the runway to land') : `${STOPS[G.dest].name} ahead. Start your descent`, true);
  else ui.setAlert(null);
}

function touchdown(lvl) {
  const p = G.plane, st = G.stats, c = G.ac.cond;
  const af = airfieldAt(p.x, p.y);
  const fast = p.speed > st.speed * 0.8, hard = fast || p.vz < -3;
  let res;
  if (af >= 0 && lvl === 2) res = 'airfield';
  else if (lvl === 0) res = st.floats ? 'water' : 'ditch';
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
  p.propSpin = Math.max(0.05, p.speed / st.speed);
  const nx = p.x + Math.cos(p.heading) * p.speed * dt, ny = p.y + Math.sin(p.heading) * p.speed * dt;
  const here = levelAt(p.x, p.y);
  if (levelAt(nx, ny) === here) { p.x = nx; p.y = ny; } else p.speed = 0; // stop at the edge of the flat ground
  p.alt = here * HZ + G.belly;
  if (p.speed <= 0.3) resolveLanding();
}

function resolveLanding() {
  const { res, af, hard } = G.landing, s = G.save;
  if (res === 'airfield') {
    const prev = s.best || 0, home = af === LAST;
    s.stop = af;
    if (af <= prev && !home) { enterHangar(); return; }
    const cards = [];
    if (af > prev) {
      const pay = legPay(prev, af);
      const express = G.legTime < (legDist(prev, af) / (G.stats.speed * 0.8)) * 1.15;
      const bonus = express ? Math.round(pay * 0.2) : 0;
      s.money += pay + bonus; s.best = af; s.shift = false;
      cards.push({
        title: `Landed at ${STOPS[af].name}`,
        body: [`Mail delivered. You are paid $${pay}.${bonus ? ` Express bonus: $${bonus}.` : ''}`, hard ? 'You came in fast and hard. The airframe took a knock. Ease the throttle back before you touch down.' : 'A clean landing.'],
      }, storyCard(af));
    }
    if (home) {
      if (G.orbitRun) {
        const t = Math.round(G.legTime);
        const best = !s.orbitBest || t < s.orbitBest;
        if (best) s.orbitBest = t;
        cards.push({ title: 'Once round the world', body: [`One orbit, launch to landing, in ${t} seconds.${best ? ' That is your best lap.' : ` Your best is ${s.orbitBest} seconds.`}`, 'The first trip took eight legs and a logbook full of repairs. Nan would have laughed out loud.'], btn: 'Back to the hangar' });
      } else if (!s.done) {
        s.done = true;
        s.money += LAP_PRIZE;
        cards.push({ title: 'All the way round', body: ['Eight legs, one logbook, and an aircraft you kept flying with your own hands.', `The flying club hands you the round-the-world prize: $${LAP_PRIZE}.`, 'A crew from the new spaceport at Wrenfield has been following your trip. They have a ship called the Starling, and they want a pilot who can fix things. Look in the Aircraft tab.'], btn: 'Back to the hangar' });
      } else {
        cards.push({ title: 'Home again', body: ['Another lap in the logbook.'], btn: 'Back to the hangar' });
      }
      s.stop = 0; // the two ends of the route are the same field
    }
    G.orbitRun = false;
    showCards(cards, enterHangar);
  } else if (res === 'field' || res === 'water') {
    G.mode = 'field'; G.onWater = res === 'water';
    G.plane.propSpin = 0;
    ui.el.hud.classList.add('hidden');
    refresh();
  } else towBack(res);
}

function updateDemo(dt) {
  const p = G.plane;
  p.heading += 0.22 * dt; p.roll = 0.3; p.speed = 12; p.throttle = 0.6; p.propSpin = 1;
  p.alt = 16 + Math.sin(G.time * 0.4) * 2;
  p.x += Math.cos(p.heading) * p.speed * dt;
  p.y += Math.sin(p.heading) * p.speed * dt;
}

function updateEffects(dt, airborne) {
  const p = G.plane, m = G.model;
  G.trailT -= dt;
  if (G.trailT <= 0) {
    G.trailT = 0.045;
    const ch = Math.cos(p.heading), sh = Math.sin(p.heading);
    [-1, 1].forEach((side, i) => {
      const span = side * m.tips * m.vs;
      const r = span * Math.cos(p.roll);
      const tr = p.trails[i];
      tr.push({ x: p.x - sh * r, y: p.y + ch * r, z: visAlt(p.alt) - span * Math.sin(p.roll), t: G.time, cut: !airborne });
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

// One step of game logic, separate from drawing.
function tick(dt) {
  G.time += dt;
  pollInput(dt);
  const p = G.plane;
  if (G.mode === 'title') updateDemo(dt);
  else if (G.mode === 'takeoff') updateTakeoff(dt);
  else if (G.mode === 'flying') updateFlight(dt);
  else if (G.mode === 'rollout') updateRollout(dt);
  else if (G.mode === 'down') { G.timer += dt; p.propSpin = 0; if (G.timer > 1.7) resolveLanding(); }
  ui.updateFix(dt);
}

let last = performance.now();
function frame(now) {
  const dt = Math.min(0.05, (now - last) / 1000);
  last = now;
  G.frame++;
  tick(dt);
  const p = G.plane;

  const inFlight = G.mode === 'takeoff' || G.mode === 'flying' || G.mode === 'rollout' || G.mode === 'down';
  const airborne = G.mode === 'title' || G.mode === 'flying';
  updateEffects(dt, airborne);

  // camera: behind the aircraft in flight, slow orbit on the ground
  const wide = V.W > V.H;
  const vw = inFlight ? VIEWS[G.view] : VIEWS[0];
  const dark = clamp((p.alt - 50) / 120, 0, 1);
  let tz, tax, tay;
  if (inFlight || G.mode === 'title') {
    G.camRot += angDiff(-p.heading - Math.PI / 2, G.camRot) * Math.min(1, dt * 3);
    tz = (p.alt < 60 ? lerp(3.0, 2.0, p.alt / 60) : lerp(2.0, 1.25, clamp((p.alt - 60) / 160, 0, 1))) * vw.zm;
    tax = 0.5; tay = G.mode === 'title' ? 0.78 : vw.ay;
  } else {
    G.camRot += dt * 0.12;
    tz = 3.8; tax = wide && G.mode !== 'cards' ? 0.24 : 0.5; tay = wide ? 0.5 : 0.17;
    if (G.mode === 'cards') tay = wide ? 0.86 : 0.14; // keep the aircraft clear of the card
  }
  const kk = Math.min(1, dt * 2.5);
  G.zoom = lerp(G.zoom, tz, kk); G.ax = lerp(G.ax, tax, kk); G.ay = lerp(G.ay, tay, kk);
  V.tilt = lerp(V.tilt, vw.tilt, kk); V.elev = lerp(V.elev, vw.elev, kk);
  G.sky = lerp(G.sky, Math.max(vw.sky, dark), kk);
  const cockpit = G.view === 2 && (G.mode === 'takeoff' || G.mode === 'flying' || G.mode === 'rollout');

  const realAlt = p.alt;
  p.alt = visAlt(realAlt); // draw with the compressed height, then put the real one back
  setCamera(p.x, p.y, p.alt, G.camRot, G.zoom, G.ax, G.ay);
  drawScene(cockpit ? cockpitCtx : ctx, {
    time: G.time, frame: G.frame, plane: p, model: G.model, scenery: G.scenery, puffs: G.puffs,
    inStorm: G.mode === 'flying' && (G.inCell || G.underCell), showPlane: !cockpit, budget: G.frame < 10 ? 40 : 3,
    sky: G.sky, skyH: vw.skyH, dark,
  });
  if (cockpit) { // tip the whole outside world with the bank, then draw the cockpit level on top
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.imageSmoothingEnabled = false;
    ctx.translate(V.W / 2, V.H / 2); ctx.rotate(-p.roll * 0.5); ctx.scale(1.3, 1.3);
    ctx.drawImage(cockpitCanvas, -V.W / 2, -V.H / 2);
    drawCockpit(ctx, V.W, V.H, {
      speed: p.speed / (G.stats.speed * (1 + G.stats.space)), alt: realAlt / G.stats.ceil, fuel: G.ac.fuel / G.stats.tank,
      roll: p.roll, vz: clamp(p.vz / G.stats.climb, -1, 1), time: G.time,
      prop: G.model.props.length > 0 && p.propSpin > 0.05, nose: G.model.noseCol || '#8a8f9c',
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
        ctx.fillRect(clamp(q[0], 3, V.W - 6) | 0, clamp(q[1], 3, V.H - 6) | 0, 3, 3);
      }
    }
    G.hudT -= dt;
    if (G.hudT <= 0) {
      G.hudT = 0.1;
      const d = STOPS[G.dest];
      ui.updateHud(G, screenBearing(p.x, p.y, d.x, d.y), Math.hypot(d.x - p.x, d.y - p.y), input.throttle);
    }
    if (G.hintT > 0) { G.hintT -= dt; if (G.hintT <= 0) ui.setHint(null); }
  }
  const dead = G.ac && (G.ac.fuel <= 0 || G.ac.cond.engine <= 0);
  setEngine(G.mode === 'takeoff' || (G.mode === 'flying' && !dead), p.throttle, G.fail.engine, G.time);

  requestAnimationFrame(frame);
}

function nextView() {
  G.view = (G.view + 1) % VIEWS.length;
  ui.el.viewBtn.textContent = VIEWS[G.view].name;
  try { localStorage.setItem('skywright.view', G.view); } catch { /* private mode */ }
  beep(600, 0.04);
}
ui.el.viewBtn.addEventListener('click', nextView);

// ---------- boot ----------
G.view = (+localStorage.getItem('skywright.view') || 0) % VIEWS.length;
ui.el.viewBtn.textContent = VIEWS[G.view].name;
function onResize() { resizeView(canvas); cockpitCanvas.width = V.W; cockpitCanvas.height = V.H; }
window.addEventListener('resize', onResize);
onResize();
initInput(canvas, ui.el.throttle, {
  action: tryFix,
  key: (code) => { if (code === 'KeyM') toggleMute(); if (code === 'KeyF') tryFix(); if (code === 'KeyV') nextView(); },
});
G.model = aircraftModel('sparrow');
G.belly = (G.model.nz * G.model.vs) / 2;
G.save = loadSave();
ui.showPanel(ui.titleHTML(!!G.save));
window.__sky = { G, V, actions, STOPS, sim: (sec) => { for (let t = 0; t < sec; t += 1 / 60) tick(1 / 60); } }; // handy in the browser console
requestAnimationFrame(frame);
