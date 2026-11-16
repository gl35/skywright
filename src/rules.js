// Numbers shared by the flight code and the hangar screens.

import { AIRCRAFT, STOPS, UP_COST } from './data.js';

export function calcStats(id, ac) {
  const A = AIRCRAFT[id], u = ac.up;
  return {
    speed: A.speed * (1 + 0.08 * u.engine),
    climb: A.climb * (1 + 0.08 * u.engine),
    ceil: A.ceil,
    tank: A.tank * (1 + 0.15 * u.tank),
    burn: A.burn,
    turn: A.turn,
    wear: A.wear * (1 - 0.15 * u.frame),
    failMul: 1 - 0.2 * u.avionics,
    radar: u.avionics >= 1,
    floats: A.floats,
    space: A.space || 0,
    orbit: !!A.orbit,
    hover: !!A.hover,
  };
}

// Distance covered on `fuel` at a steady 80% throttle.
export const cruiseRange = (st, fuel) => (fuel / (st.burn * 0.73)) * st.speed * 0.87 * (1 + st.space * 0.6);
export const repairCost = (id, pts) => Math.ceil(pts * 1.3 * AIRCRAFT[id].tier);
export const fuelCost = (units) => Math.ceil(units * 0.6);
export const upCost = (id, lvl) => Math.round(UP_COST[lvl] * AIRCRAFT[id].tier);
export const legDist = (a, b) => Math.hypot(STOPS[b].x - STOPS[a].x, STOPS[b].y - STOPS[a].y);
// Later legs pay better, so the bigger aircraft come within reach.
export const legPay = (a, b) => Math.round((120 + 0.28 * legDist(a, b)) * (1 + 0.25 * (b - 1)));
export const LAP_PRIZE = 4000;
// An orbital ship that has earned its lap flies the whole way round in one go.
export const nextStop = (save, st) => (st.orbit && save.done ? STOPS.length - 1 : Math.min(save.stop + 1, STOPS.length - 1));
// Height units to something readable: feet low down, kilometres once the sky goes dark.
export function fmtAlt(a) {
  if (a <= 60) return (Math.round((a * 500) / 100) * 100).toLocaleString('en-US') + ' ft';
  return Math.round(9 + ((a - 60) * (a - 60)) / 128) + ' km';
}
// Fraction of the way from thick air to the craft's ceiling (0 for ordinary aircraft).
export const thinAir = (st, alt) => (st.space ? Math.max(0, Math.min(1, (alt - 50) / (st.ceil - 60))) : 0);
export const km = (cells) => Math.round(cells / 10);
