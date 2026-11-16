// DOM screens: the flight HUD, the in-flight repair mini-game, story cards and the hangar.

import { surfText, WORLDS, AIRCRAFT, UPGRADES, PARTS, PART_KEYS, MISSIONS, INTRO, EPILOGUE, KIT_COST, KIT_CAP_COST, KIT_CAP_MAX, BIOMES } from './data.js';
import { calcStats, cruiseRange, repairCost, fuelCost, upCost, missionDist, targetOf, km, fmtAlt, jobPay } from './rules.js';

const $ = (id) => document.getElementById(id);
export const el = {};
for (const id of ['hud', 'nav', 'navArrow', 'navText', 'alert', 'hint', 'gSpd', 'gAlt', 'gFuel', 'pips', 'throttle', 'thrFill',
  'objective', 'viewBtn', 'abilBtn', 'stopBtn', 'fixBtn', 'fixPanel', 'fixTitle', 'fixZone', 'fixMark', 'fixDots', 'fixHit', 'panel', 'flash']) el[id] = $(id);

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

// navText is what to show beside the arrow; bearing null hides the arrow.
export function updateHud(G, bearing, navText, throttle) {
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
    el.navArrow.style.visibility = bearing === null ? 'hidden' : 'visible';
    if (bearing !== null) el.navArrow.style.transform = `rotate(${bearing}rad)`;
    el.navText.textContent = navText;
  }
  let h = '';
  for (const k of PART_KEYS) h += `<div class="pip ${condCls(ac.cond[k])}${G.fail[k] ? ' failed' : ''}">${PARTS[k].name.slice(0, 3).toUpperCase()}</div>`;
  if (h !== el.pips._h) { el.pips.innerHTML = h; el.pips._h = h; }
  const anyFail = PART_KEYS.some((k) => G.fail[k]);
  el.fixBtn.classList.toggle('hidden', !anyFail || fix.open);
  el.fixBtn.textContent = G.save.kits > 0 ? 'FIX' : 'BODGE';
}

// ---------- in-flight repair: stop the marker in the green three times ----------
export const fix = { open: false, part: null, pos: 0, dir: 1, speed: 1, z0: 0, z1: 0, hits: 0, need: 3 };
function newZone(cond) {
  const w = (0.13 + (cond / 100) * 0.12) * (fix.jury ? 0.8 : 1);
  fix.z0 = 0.08 + Math.random() * (0.84 - w);
  fix.z1 = fix.z0 + w;
  el.fixZone.style.left = fix.z0 * 100 + '%';
  el.fixZone.style.width = w * 100 + '%';
}
function fixDots() { el.fixDots.textContent = '●'.repeat(fix.hits) + '○'.repeat(fix.need - fix.hits); }
// jury: no kit to hand, so it is a harder bodge (five hits, smaller target) that gets the part working but no healthier.
export function openFix(part, cond, jury = false) {
  Object.assign(fix, { open: true, part, pos: 0, dir: 1, speed: 1.05, hits: 0, cond, jury, need: jury ? 5 : 3 });
  el.fixTitle.textContent = jury
    ? `${PARTS[part].fail}: no kits, so bodge it. Five clean hits`
    : `${PARTS[part].fail}: stop the marker in the green`;
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
    <p>Fly it. Fix it. Follow the logbook.</p>
    ${hasSave ? '<button class="btn primary" data-act="continue">Continue</button>' : ''}
    <button class="btn ${hasSave ? 'ghost' : 'primary'}" data-act="new">New story</button>
    <p><small>Prototype build</small></p>
  </div>`;
}

export function cardHTML(c) {
  return `<div class="card">
    ${c.ch ? `<small class="chapter">${c.ch}</small>` : ''}
    <h2>${c.title}</h2>
    ${c.nan ? `<p class="nan">${c.nan}<br><small>Nan's logbook</small></p>` : ''}
    ${(c.body || []).map((t) => `<p>${t}</p>`).join('')}
    ${c.note ? `<p class="note">${c.note}</p>` : ''}
    <button class="btn primary" data-act="card">${c.btn || 'Continue'}</button>
  </div>`;
}

export function quizHTML(q, pay) {
  return `<div class="card">
    <small class="chapter">Odd job · pays $${pay} for the right answer</small>
    <p>${q.intro}</p>
    <p class="qq">${q.q}</p>
    ${q.options.map((o, i) => `<button class="btn opt" data-act="answer" data-arg="${i}">${'ABCD'[i]}. ${o}</button>`).join('')}
  </div>`;
}
export function quizResultHTML(q, ok, pay) {
  return `<div class="card">
    <h2 class="${ok ? 'right' : 'wrong'}">${ok ? 'Right' : 'Not quite'}</h2>
    <p>${q.why}</p>
    <p>${ok ? `You are paid <b>$${pay}</b>.` : `The answer was <b>${q.right}</b>. No pay this time, but there is always another job.`}</p>
    <button class="btn primary" data-act="quizdone">Back to the workshop</button>
  </div>`;
}

function workshop(G) {
  const s = G.save, ac = G.ac, st = G.stats, id = G.mission.craft;
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
    <div class="acts"><button class="mini" data-act="shift">Odd jobs +$${jobPay(s, st)}</button></div>
    <p>The locals pay for a right answer: a sum, a rule of engineering, or a riddle. There is always more work, though the first job pays best.</p>
  </div>`;
  return h;
}

function skills(G) {
  const s = G.save;
  let h = '<p><small>What you learn stays with you, whatever you are flying.</small></p>';
  for (const k of Object.keys(UPGRADES)) {
    const lv = s.up[k];
    h += `<div class="row">
      <div class="name">${UPGRADES[k].name} <span class="lv">${'■'.repeat(lv)}${'□'.repeat(3 - lv)}</span></div>
      <div class="acts"><button class="mini gold" data-act="upgrade" data-arg="${k}" ${lv >= 3 || s.money < upCost(lv) ? 'disabled' : ''}>${lv >= 3 ? 'Max' : `$${upCost(lv)}`}</button></div>
      <p>${UPGRADES[k].desc}</p>
    </div>`;
  }
  return h;
}

function fleet(G) {
  const s = G.save;
  let h = '<p><small>Each part of the journey needs its own machine. They come to you as the story goes.</small></p>';
  for (const id of Object.keys(AIRCRAFT)) {
    const A = AIRCRAFT[id], own = s.fleet[id];
    if (!own) { h += '<div class="row"><div><div class="name">? ? ?</div><p>Not yet yours.</p></div></div>'; continue; }
    const st = calcStats(id, s.up);
    const worst = Math.min(...PART_KEYS.map((k) => own.cond[k]));
    h += `<div class="row">
      <div class="name">${A.name} <small>${A.kind}</small></div>
      <div class="acts"><button class="mini" disabled>${id === G.mission.craft ? 'Flying now' : `${Math.round(worst)}% worst part`}</button></div>
      <div>
        <p>${A.blurb}</p>
        <p class="abil"><b>${A.ability.name}:</b> ${A.ability.desc}</p>
        <p>${surfText(A)}</p>
        <div class="stats"><span>${Math.round(st.speed * (1 + st.space) * 10)} kt</span><span>${fmtAlt(st.ceil)}</span><span>${km(cruiseRange(st, st.tank))} km</span></div>
      </div>
    </div>`;
  }
  return h;
}

function logbook(G) {
  let h = `<div class="row"><div><div class="name">${INTRO.title}</div><p class="nan">${INTRO.nan}</p>${INTRO.body.map((t) => `<p>${t}</p>`).join('')}</div></div>`;
  for (let i = 0; i < Math.min(G.save.mission, MISSIONS.length); i++) {
    const m = MISSIONS[i];
    h += `<div class="row"><div>${m.ch ? `<small class="chapter">${m.ch}</small>` : ''}<div class="name">${m.title}</div>
      ${m.arrive.map((t) => `<p>${t}</p>`).join('')}${m.real ? `<p class="note">${m.real}</p>` : ''}</div></div>`;
  }
  if (G.save.mission >= MISSIONS.length) h += `<div class="row"><div><p>${EPILOGUE}</p></div></div>`;
  return h;
}

export function planWarnings(G) {
  const s = G.save, ac = G.ac, st = G.stats, m = G.mission;
  const out = [];
  if (m.free) return out;
  const d = missionDist(m), b = BIOMES[targetOf(m).stop.biome];
  const r = cruiseRange(st, ac.fuel);
  if (m.transit) { if (ac.fuel < st.tank * 0.6) out.push(['warn', 'Fill the tank. The climb to space is thirsty.']); }
  else if (r < d) out.push(['bad', `Not enough fuel. Range is ${km(r)} km, the flight is ${km(d)} km.`]);
  else if (r < d * 1.2) out.push(['warn', `Fuel is tight: ${km(r)} km of range for a ${km(d)} km flight.`]);
  for (const k of PART_KEYS) if (ac.cond[k] < 50) out.push(['warn', `${PARTS[k].name} is worn (${Math.round(ac.cond[k])}%) and likely to fail in the air.`]);
  if (s.kits === 0) out.push(['warn', 'No repair kits aboard.']);
  if (!m.transit && !st.orbit) {
    if (b.hs > 60 && st.ceil < 28) out.push(['warn', 'Peaks on this flight are higher than this machine can climb. Follow the valleys.']);
    if (b.storm > 0.1 && st.ceil < 31) out.push(['warn', 'Storm cells ahead. You cannot climb over them, so go round or stay low.']);
    if (!st.floats && b.sea > 0.56) out.push(['warn', 'Mostly open water. Nowhere to set down if something breaks.']);
  }
  return out;
}

function mission(G) {
  const m = G.mission, A = AIRCRAFT[m.craft];
  if (m.free) return `<div class="row"><div><div class="name">${m.title}</div><p>${EPILOGUE}</p></div></div>`;
  const t = targetOf(m), d = missionDist(m), w = planWarnings(G);
  return `<div class="row"><div>
      <small class="chapter">${G.chapter}</small>
      <div class="name">${m.title}</div>
      <p>${m.brief}</p>
      <p><b>Fly:</b> ${A.name} (${A.kind.toLowerCase()}). <b>To:</b> ${t.stop.name}${t.world !== m.world ? `, ${WORLDS[t.world].name}` : ''}${d ? `, ${km(d)} km` : ''}.${m.pay ? ` <b>Pays:</b> $${m.pay}.` : ''}</p>
      <p class="abil"><b>${A.ability.name}:</b> ${A.ability.desc}</p>
      <p>${surfText(A)}</p>
    </div></div>
    ${w.length ? w.map(([c, x]) => `<p class="warnline ${c}">▲ ${x}</p>`).join('') : `<p class="okline">The ${A.name} is ready.</p>`}`;
}

const TABS = [['workshop', 'Workshop'], ['skills', 'Skills'], ['fleet', 'Fleet'], ['logbook', 'Logbook'], ['mission', 'Mission']];
const BODY = { workshop, skills, fleet, logbook, mission };

export function hangarHTML(G) {
  const s = G.save, m = G.mission, w = WORLDS[m.world], stop = w.stops[m.from];
  return `<div class="hangar">
    <header><div><h2>${stop.name}</h2><small>${w.id === 'earth' ? stop.tag : w.name} · ${AIRCRAFT[m.craft].name}</small></div><div class="money">$${s.money}</div></header>
    <div class="tabs">${TABS.map(([k, n]) => `<button data-act="tab" data-arg="${k}" class="${G.tab === k ? 'on' : ''}">${n}</button>`).join('')}</div>
    <section>${BODY[G.tab](G)}</section>
    <footer>${G.tab === 'mission'
      ? '<button class="btn primary" data-act="takeoff">Take off</button>'
      : '<button class="btn primary" data-act="tab" data-arg="mission">Mission</button>'}</footer>
  </div>`;
}

// Landed away from a landing ground: only the kits you carry are available.
export function fieldHTML(G, onWater) {
  const s = G.save, ac = G.ac;
  let h = `<div class="hangar">
    <header><div><h2>${onWater ? 'Afloat' : 'Set down in the open'}</h2><small>No workshop here. Use what you carry.</small></div><div class="money">Kits ${s.kits}</div></header>
    <section>`;
  for (const k of PART_KEYS) {
    const v = ac.cond[k];
    h += `<div class="row">
      <div class="name">${PARTS[k].name}${G.fail[k] ? ' · BROKEN' : ''}</div>
      <div class="acts">${s.kits < 1 && G.fail[k]
        ? `<button class="mini" data-act="fieldbodge" data-arg="${k}">Bodge it</button>`
        : `<button class="mini gold" data-act="fieldfix" data-arg="${k}" ${s.kits < 1 || (v > 95 && !G.fail[k]) ? 'disabled' : ''}>Use kit +30</button>`}</div>
      <div class="meter">${bar(v, condCls(v))}<span>${Math.round(v)}%</span></div>
    </div>`;
  }
  h += `<div class="row"><div class="name">Fuel</div><div class="meter">${bar((ac.fuel / G.stats.tank) * 100)}<span>${Math.round(ac.fuel)}</span></div></div>
    ${ac.fuel < 1 ? '<p class="warnline bad">▲ The tank is dry. You will have to call for help.</p>' : ''}
    </section>
    <footer>${ac.fuel < 1 ? '<button class="btn" data-act="tow">Call for help</button>' : '<button class="btn primary" data-act="takeoff">Take off</button>'}
      ${G.surfLabel && ac.fuel >= 1 ? `<button class="btn ghost" data-act="surface">${G.surfLabel}</button>` : ''}</footer>
  </div>`;
  return h;
}
