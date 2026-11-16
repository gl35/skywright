// DOM screens: the flight HUD, the in-flight repair mini-game, story cards and the hangar.

import { STOPS, AIRCRAFT, UPGRADES, PARTS, PART_KEYS, STORY, KIT_COST, KIT_CAP_COST, KIT_CAP_MAX, BIOMES } from './data.js';
import { calcStats, cruiseRange, repairCost, fuelCost, upCost, legDist, legPay, km, fmtAlt, nextStop } from './rules.js';

const $ = (id) => document.getElementById(id);
export const el = {};
for (const id of ['hud', 'nav', 'navArrow', 'navText', 'alert', 'hint', 'gSpd', 'gAlt', 'gFuel', 'pips', 'throttle', 'thrFill',
  'viewBtn', 'fixBtn', 'fixPanel', 'fixTitle', 'fixZone', 'fixMark', 'fixDots', 'fixHit', 'panel', 'flash']) el[id] = $(id);

const condCls = (v) => (v > 60 ? 'ok' : v > 35 ? 'warn' : 'bad');
const bar = (pct, cls = '') => `<div class="bar ${cls}"><i style="width:${Math.max(0, Math.min(100, pct))}%"></i></div>`;

// ---------- HUD ----------
let lastAlert = null;
export function setAlert(text, soft = false) {
  const key = text + soft;
  if (key === lastAlert) return;
  lastAlert = key;
  el.alert.classList.toggle('hidden', !text);
  el.alert.classList.toggle('soft', soft);
  el.alert.textContent = text || '';
}
export function setHint(html) {
  el.hint.classList.toggle('hidden', !html);
  if (html) el.hint.innerHTML = html;
}
export function flash() {
  el.flash.classList.add('on');
  requestAnimationFrame(() => requestAnimationFrame(() => el.flash.classList.remove('on')));
}

export function updateHud(G, bearing, dist, throttle) {
  const p = G.plane, st = G.stats, ac = G.ac;
  el.gSpd.textContent = Math.round(p.speed * 10);
  el.gAlt.textContent = fmtAlt(Math.max(0, p.alt - G.belly));
  const f = (ac.fuel / st.tank) * 100;
  el.gFuel.style.width = f + '%';
  el.gFuel.parentElement.className = 'bar ' + (f > 30 ? '' : f > 15 ? 'warn' : 'bad');
  el.thrFill.style.height = throttle * 100 + '%';
  if (G.fail.avionics) {
    el.navArrow.style.visibility = 'hidden';
    el.navText.textContent = 'NAV OFFLINE';
  } else {
    el.navArrow.style.visibility = 'visible';
    el.navArrow.style.transform = `rotate(${bearing}rad)`;
    el.navText.textContent = `${STOPS[G.dest].name}  ${km(dist)} km`;
  }
  let h = '';
  for (const k of PART_KEYS) h += `<div class="pip ${condCls(ac.cond[k])}${G.fail[k] ? ' failed' : ''}">${PARTS[k].name.slice(0, 3).toUpperCase()}</div>`;
  if (h !== el.pips._h) { el.pips.innerHTML = h; el.pips._h = h; }
  const anyFail = PART_KEYS.some((k) => G.fail[k]);
  el.fixBtn.classList.toggle('hidden', !anyFail || fix.open);
}

// ---------- in-flight repair: stop the marker in the green three times ----------
export const fix = { open: false, part: null, pos: 0, dir: 1, speed: 1, z0: 0, z1: 0, hits: 0, need: 3 };
function newZone(cond) {
  const w = 0.13 + (cond / 100) * 0.12;
  fix.z0 = 0.08 + Math.random() * (0.84 - w);
  fix.z1 = fix.z0 + w;
  el.fixZone.style.left = fix.z0 * 100 + '%';
  el.fixZone.style.width = w * 100 + '%';
}
function fixDots() { el.fixDots.textContent = '●'.repeat(fix.hits) + '○'.repeat(fix.need - fix.hits); }
export function openFix(part, cond) {
  Object.assign(fix, { open: true, part, pos: 0, dir: 1, speed: 1.05, hits: 0, cond });
  el.fixTitle.textContent = `${PARTS[part].fail}: stop the marker in the green`;
  newZone(cond); fixDots();
  el.fixPanel.classList.remove('hidden');
}
export function closeFix() { fix.open = false; el.fixPanel.classList.add('hidden'); }
export function updateFix(dt) {
  if (!fix.open) return;
  fix.pos += fix.dir * fix.speed * dt;
  if (fix.pos > 1) { fix.pos = 1; fix.dir = -1; } else if (fix.pos < 0) { fix.pos = 0; fix.dir = 1; }
  el.fixMark.style.left = fix.pos * 100 + '%';
}
// Returns 'hit', 'miss' or 'done'.
export function hitFix() {
  if (fix.pos < fix.z0 || fix.pos > fix.z1) return 'miss';
  fix.hits++; fix.speed *= 1.15;
  fixDots();
  if (fix.hits >= fix.need) return 'done';
  newZone(fix.cond);
  return 'hit';
}

// ---------- panels ----------
export function showPanel(html, sheet = false) {
  el.panel.innerHTML = html;
  el.panel.classList.toggle('sheet', sheet);
  el.panel.classList.remove('hidden');
}
export function hidePanel() { el.panel.classList.add('hidden'); el.panel.innerHTML = ''; }

export function titleHTML(hasSave) {
  return `<div class="card title">
    <h1>SKYWRIGHT</h1>
    <p>Fly it. Fix it. All the way round.</p>
    ${hasSave ? '<button class="btn primary" data-act="continue">Continue flight</button>' : ''}
    <button class="btn ${hasSave ? 'ghost' : 'primary'}" data-act="new">New flight</button>
    <p><small>Prototype build</small></p>
  </div>`;
}

export function cardHTML(c) {
  return `<div class="card">
    <h2>${c.title}</h2>
    ${c.nan ? `<p class="nan">${c.nan}<br><small>Nan's logbook</small></p>` : ''}
    ${(c.body || []).map((t) => `<p>${t}</p>`).join('')}
    <button class="btn primary" data-act="card">${c.btn || 'Continue'}</button>
  </div>`;
}

function workshop(G) {
  const s = G.save, ac = G.ac, st = G.stats, id = s.current;
  const need = st.tank - ac.fuel;
  const full = fuelCost(need);
  const afford = Math.min(need, Math.floor(s.money / 0.6));
  let h = `<div class="row">
    <div class="name">Fuel</div>
    <div class="acts"><button class="mini gold" data-act="refuel" ${need < 1 || afford < 1 ? 'disabled' : ''}>${need < 1 ? 'Full' : s.money >= full ? `Fill $${full}` : `Add $${fuelCost(afford)}`}</button></div>
    <div class="meter">${bar((ac.fuel / st.tank) * 100, ac.fuel / st.tank > 0.3 ? '' : 'warn')}<span>${Math.round(ac.fuel)}/${Math.round(st.tank)}</span></div>
  </div>`;
  for (const k of PART_KEYS) {
    const v = ac.cond[k], miss = 100 - v;
    const some = Math.min(20, miss);
    h += `<div class="row">
      <div class="name">${PARTS[k].name}</div>
      <div class="acts">
        <button class="mini" data-act="repair" data-arg="${k}:${some}" ${miss < 1 || s.money < repairCost(id, some) ? 'disabled' : ''}>+${Math.round(some)} $${repairCost(id, some)}</button>
        <button class="mini gold" data-act="repair" data-arg="${k}:${miss}" ${miss < 1 || s.money < repairCost(id, miss) ? 'disabled' : ''}>Full $${repairCost(id, miss)}</button>
      </div>
      <div class="meter">${bar(v, condCls(v))}<span>${Math.round(v)}%</span></div>
    </div>`;
  }
  h += `<div class="row">
    <div class="name">Repair kits ${s.kits}/${s.kitCap}</div>
    <div class="acts">
      <button class="mini" data-act="kit" ${s.kits >= s.kitCap || s.money < KIT_COST ? 'disabled' : ''}>Kit $${KIT_COST}</button>
      <button class="mini" data-act="kitcap" ${s.kitCap >= KIT_CAP_MAX || s.money < KIT_CAP_COST ? 'disabled' : ''}>${s.kitCap >= KIT_CAP_MAX ? 'Max' : `Bigger roll $${KIT_CAP_COST}`}</button>
    </div>
    <p>One kit fixes one breakdown in the air.</p>
  </div>
  <div class="row">
    <div class="name">Short of cash?</div>
    <div class="acts"><button class="mini" data-act="shift" ${s.shift ? 'disabled' : ''}>${s.shift ? 'Done' : 'Work a shift +$60'}</button></div>
    <p>Help the field mechanic for an afternoon. Once per visit.</p>
  </div>`;
  return h;
}

function upgrades(G) {
  const s = G.save, ac = G.ac, id = s.current;
  let h = `<p><small>Upgrades stay with the ${AIRCRAFT[id].name}.</small></p>`;
  for (const k of Object.keys(UPGRADES)) {
    const lv = ac.up[k];
    h += `<div class="row">
      <div class="name">${UPGRADES[k].name} <span class="lv">${'■'.repeat(lv)}${'□'.repeat(3 - lv)}</span></div>
      <div class="acts"><button class="mini gold" data-act="upgrade" data-arg="${k}" ${lv >= 3 || s.money < upCost(id, lv) ? 'disabled' : ''}>${lv >= 3 ? 'Max' : `$${upCost(id, lv)}`}</button></div>
      <p>${UPGRADES[k].desc}</p>
    </div>`;
  }
  return h;
}

function aircraft(G) {
  const s = G.save;
  let h = '';
  for (const id of Object.keys(AIRCRAFT)) {
    const A = AIRCRAFT[id], owned = s.fleet[id];
    const st = calcStats(id, owned || { up: { engine: 0, tank: 0, frame: 0, avionics: 0 } });
    let btn;
    if (id === s.current) btn = '<button class="mini" disabled>Flying</button>';
    else if (owned) btn = `<button class="mini gold" data-act="fly" data-arg="${id}">Fly this</button>`;
    else if (A.lap ? s.done : (s.best || 0) >= A.from) btn = `<button class="mini gold" data-act="buy" data-arg="${id}" ${s.money < A.cost ? 'disabled' : ''}>Buy $${A.cost}</button>`;
    else btn = `<button class="mini" disabled>${A.lap ? 'After the lap' : `At ${STOPS[A.from].name}`}</button>`;
    h += `<div class="row">
      <div class="name">${A.name} <small>${A.kind}</small></div>
      <div class="acts">${btn}</div>
      <div>
        <p>${A.blurb}</p>
        <div class="stats"><span>${Math.round(st.speed * (1 + st.space) * 10)} kt</span><span>${fmtAlt(st.ceil)}</span><span>${km(cruiseRange(st, st.tank))} km</span></div>
      </div>
    </div>`;
  }
  return h;
}

function logbook(G) {
  let h = '';
  for (let i = 0; i <= (G.save.best || 0); i++) {
    const e = STORY[i];
    h += `<div class="row"><div><div class="name">${e.title}</div>${e.nan ? `<p class="nan">${e.nan}</p>` : ''}<p>${e.you}</p></div></div>`;
  }
  return h;
}

export function planWarnings(G) {
  const s = G.save, ac = G.ac, st = G.stats;
  const next = nextStop(s, st);
  const out = [];
  if (next === s.stop) return out;
  const d = legDist(s.stop, next), b = BIOMES[STOPS[next].biome];
  const r = cruiseRange(st, ac.fuel);
  if (r < d) out.push(['bad', `Not enough fuel. Range is ${km(r)} km, the leg is ${km(d)} km.`]);
  else if (r < d * 1.2) out.push(['warn', `Fuel is tight: ${km(r)} km of range for a ${km(d)} km leg.`]);
  for (const k of PART_KEYS) if (ac.cond[k] < 50) out.push(['warn', `${PARTS[k].name} is worn (${Math.round(ac.cond[k])}%) and likely to fail in the air.`]);
  if (s.kits === 0) out.push(['warn', 'No repair kits aboard.']);
  if (b.hs > 60 && st.ceil < 25) out.push(['warn', 'Peaks on this leg are higher than this aircraft can climb. Follow the valleys.']);
  if (b.storm > 0.1 && st.ceil < 31) out.push(['warn', 'Storm cells ahead. This aircraft cannot climb over them, so go round or stay low.']);
  if (!st.floats && b.sea > 0.56) out.push(['warn', 'Mostly open water. Nowhere to set down if something breaks.']);
  return out;
}

function plan(G) {
  const s = G.save;
  const next = nextStop(s, G.stats);
  if (G.stats.orbit && s.done && s.stop === 0) {
    const w = planWarnings(G).filter(([, t]) => !t.startsWith('Storm') && !t.startsWith('Mostly') && !t.startsWith('Peaks'));
    return `<div class="row"><div><div class="name">Orbital lap</div>
      <p>Climb until the sky goes black, let the world turn beneath you, and land back at Wrenfield. ${km(legDist(0, next))} km in one flight.</p>
      <p>${s.orbitBest ? `Your best lap: ${s.orbitBest} seconds.` : 'Above 100 km the engines idle and you coast.'} Come down gently. A steep re-entry burns the hull.</p></div></div>
      ${w.length ? w.map(([c, t]) => `<p class="warnline ${c}">▲ ${t}</p>`).join('') : '<p class="okline">Ship is ready for orbit.</p>'}`;
  }
  if (next === s.stop) return '<p class="okline">You have flown all the way round the world.</p><p>Take her up for a lap of the home field whenever you like.</p>';
  const d = legDist(s.stop, next);
  const w = planWarnings(G);
  return `<div class="row"><div><div class="name">Next: ${STOPS[next].name}</div>
      <p>${STOPS[next].tag}. ${km(d)} km east${next > (s.best || 0) ? `, mail contract pays $${legPay(s.best || 0, next)}` : ''}.</p>
      <p>Leg ${next} of ${STOPS.length - 1}. ${BIOMES[STOPS[next].biome].name}.</p></div></div>
    ${w.length ? w.map(([c, t]) => `<p class="warnline ${c}">▲ ${t}</p>`).join('') : '<p class="okline">Aircraft is ready for this leg.</p>'}`;
}

const TABS = [['workshop', 'Workshop'], ['upgrades', 'Upgrades'], ['aircraft', 'Aircraft'], ['logbook', 'Logbook'], ['plan', 'Plan']];
const BODY = { workshop, upgrades, aircraft, logbook, plan };

export function hangarHTML(G) {
  const s = G.save, stop = STOPS[s.stop];
  return `<div class="hangar">
    <header><div><h2>${stop.name}</h2><small>${stop.tag} · ${AIRCRAFT[s.current].name}</small></div><div class="money">$${s.money}</div></header>
    <div class="tabs">${TABS.map(([k, n]) => `<button data-act="tab" data-arg="${k}" class="${G.tab === k ? 'on' : ''}">${n}</button>`).join('')}</div>
    <section>${BODY[G.tab](G)}</section>
    <footer>${G.tab === 'plan'
      ? '<button class="btn primary" data-act="takeoff">Take off</button>'
      : '<button class="btn primary" data-act="tab" data-arg="plan">Flight plan</button>'}</footer>
  </div>`;
}

// Landed away from an airfield: only the kits you carry are available.
export function fieldHTML(G, onWater) {
  const s = G.save, ac = G.ac;
  let h = `<div class="hangar">
    <header><div><h2>${onWater ? 'Afloat' : 'Field landing'}</h2><small>No workshop here. Use what you carry.</small></div><div class="money">Kits ${s.kits}</div></header>
    <section>`;
  for (const k of PART_KEYS) {
    const v = ac.cond[k];
    h += `<div class="row">
      <div class="name">${PARTS[k].name}${G.fail[k] ? ' · BROKEN' : ''}</div>
      <div class="acts"><button class="mini gold" data-act="fieldfix" data-arg="${k}" ${s.kits < 1 || (v > 95 && !G.fail[k]) ? 'disabled' : ''}>Use kit +30</button></div>
      <div class="meter">${bar(v, condCls(v))}<span>${Math.round(v)}%</span></div>
    </div>`;
  }
  h += `<div class="row"><div class="name">Fuel</div><div class="meter">${bar((ac.fuel / G.stats.tank) * 100)}<span>${Math.round(ac.fuel)}</span></div></div>
    ${ac.fuel < 1 ? '<p class="warnline bad">▲ The tank is dry. You will have to radio for a tow.</p>' : ''}
    </section>
    <footer>${ac.fuel < 1 ? '<button class="btn" data-act="tow">Radio for a tow</button>' : '<button class="btn primary" data-act="takeoff">Take off</button>'}</footer>
  </div>`;
  return h;
}
