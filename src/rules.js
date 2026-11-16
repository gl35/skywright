// Numbers shared by the flight code and the hangar screens.

import { AIRCRAFT, MISSIONS, WORLDS, UP_COST } from './data.js';

// up: the player's own upgrade levels, which apply to whatever they are flying.
export function calcStats(id, up) {
  const A = AIRCRAFT[id];
  return {
    speed: A.speed * (1 + 0.08 * up.engine),
    climb: A.climb * (1 + 0.08 * up.engine),
    ceil: A.ceil,
    tank: A.tank,
    burn: A.burn / (1 + 0.15 * up.tank),
    turn: A.turn,
    wear: A.wear * (1 - 0.15 * up.frame),
    failMul: 1 - 0.2 * up.avionics,
    radar: up.avionics >= 1,
    floats: A.floats,
    space: A.space || 0,
    orbit: !!A.orbit,
    hover: !!A.hover,
  };
}

// The mission the player is on. Once the story is finished this is a free flight at the last landing ground.
export function missionOf(save) {
  if (save.mission < MISSIONS.length) return MISSIONS[save.mission];
  return { free: true, title: 'Free flight', world: 'deep', from: 0, to: 0, craft: 'starling', pay: 0, brief: 'Nothing left to deliver. Fly for the joy of it.' };
}
// Can this machine be taken on this mission? You must own it, and only a star raft can leave the world.
export const canFly = (save, m, id) => !!save.fleet[id] && (!m.transit || !!AIRCRAFT[id].orbit);

// Where a mission ends: { world, stop } with the stop's data.
export function targetOf(m) {
  const w = m.transit ? m.transit.world : m.world, i = m.transit ? m.transit.to : m.to;
  return { world: w, index: i, stop: WORLDS[w].stops[i] };
}
export function missionDist(m) {
  if (m.transit) return 0;
  const S = WORLDS[m.world].stops;
  return Math.hypot(S[m.to].x - S[m.from].x, S[m.to].y - S[m.from].y);
}

// Distance covered on `fuel` at a steady 80% throttle.
export const cruiseRange = (st, fuel) => (fuel / (st.burn * 0.73)) * st.speed * 0.85 * (1 + st.space * 0.6);
export const repairCost = (id, pts) => Math.ceil(pts * 1.3 * AIRCRAFT[id].tier);
export const fuelCost = (units) => Math.ceil(units * 0.6);
export const upCost = (lvl) => UP_COST[lvl];
// Odd jobs never run out, so an empty wallet is never a dead end. The first at each stop pays best;
// after that each pays about a quarter of a full tank for the machine you are flying.
export const jobPay = (save, st) => (save.shift ? Math.max(25, Math.ceil(fuelCost(st.tank) * 0.25)) : 60);
export const km =(cells) => Math.round(cells / 10);
// Height units to something readable: feet low down, kilometres once the sky goes dark.
export function fmtAlt(a) {
  if (a <= 60) return (Math.round((a * 500) / 100) * 100).toLocaleString('en-US') + ' ft';
  return Math.round(9 + ((a - 60) * (a - 60)) / 128) + ' km';
}
// Fraction of the way from thick air to the craft's ceiling (0 for ordinary aircraft).
export const thinAir = (st, alt) => (st.space ? Math.max(0, Math.min(1, (alt - 50) / (st.ceil - 60))) : 0);
