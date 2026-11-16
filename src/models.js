// Procedural voxel models: the four aircraft, clouds and the airfield buildings.
// Model axes: x = forward (nose at high x), y = across the wings, z = up.

import { Vox, bake, rollVox } from './voxel.js';
import { mulberry32 } from './noise.js';

const GLASS = 0x8fd4ee, DARK = 0x33343c;

function sparrow() {
  const v = new Vox(27, 27, 9), cy = 13;
  const RED = 0xc8402f, CREAM = 0xf0e2b6;
  v.tube(3, 22, cy, 3.5, (x) => (x < 8 ? 0.6 + (x - 3) * 0.2 : x > 20 ? 1.2 : 1.6), RED);
  v.box(22, cy - 1, 3, 23, cy + 1, 4, DARK); // cowling
  v.box(12, 2, 2, 16, 24, 2, CREAM); // lower wing
  v.box(13, 1, 6, 17, 25, 6, CREAM); // upper wing
  v.box(13, 1, 6, 17, 2, 6, RED); v.box(13, 24, 6, 17, 25, 6, RED); // wing tips
  for (const y of [5, 21]) { v.box(14, y, 3, 14, y, 5, DARK); v.box(16, y, 3, 16, y, 5, DARK); }
  v.box(15, cy - 2, 5, 15, cy + 2, 5, DARK);
  v.box(3, 8, 3, 5, 18, 3, CREAM); // tailplane
  v.box(2, cy, 4, 5, cy, 6, RED); // fin
  v.box(10, cy, 5, 11, cy, 5, GLASS);
  for (const y of [cy - 3, cy + 3]) v.box(15, y, 0, 16, y, 1, DARK); // wheels
  return { vox: v, vs: 0.5, props: [{ x: 24.4, y: 0, z: 3.5, r: 3.2 }], jets: [], tips: 12 };
}

function heron() {
  const v = new Vox(31, 31, 10), cy = 15;
  const WHITE = 0xf2f4f5, TEAL = 0x1f9aa0, FLOAT = 0xcfd6dc;
  for (const y of [cy - 5, cy + 5]) {
    v.tube(8, 23, y, 1, (x) => (x > 21 ? 0.5 : 1.1), FLOAT);
    v.box(12, y, 2, 12, y, 3, DARK); v.box(19, y, 2, 19, y, 3, DARK);
  }
  v.tube(3, 26, cy, 4.5, (x) => (x < 9 ? 0.7 + (x - 3) * 0.2 : x > 24 ? 1.3 : 2), (x, y, z) => (z === 4 ? TEAL : WHITE));
  v.box(26, cy - 1, 4, 27, cy + 1, 5, DARK);
  v.box(14, 1, 7, 18, 29, 7, TEAL); // high wing
  v.box(14, 1, 7, 18, 3, 7, WHITE); v.box(14, 27, 7, 18, 29, 7, WHITE);
  for (const y of [cy - 5, cy + 5]) v.box(16, y, 4, 16, y, 6, DARK);
  v.box(3, 10, 5, 5, 20, 5, TEAL); // tailplane
  v.box(2, cy, 6, 5, cy, 8, TEAL);
  v.box(20, cy - 1, 6, 22, cy + 1, 6, GLASS);
  return { vox: v, vs: 0.5, props: [{ x: 28.4, y: 0, z: 4.5, r: 3.2 }], jets: [], tips: 14 };
}

function kestrel() {
  const v = new Vox(35, 37, 10), cy = 18;
  const SILVER = 0xd2d8dd, ORANGE = 0xf08a24;
  v.tube(2, 32, cy, 4, (x) => (x < 9 ? 0.8 + (x - 2) * 0.2 : x > 29 ? 2.2 - (x - 29) * 0.5 : 2.2), (x, y, z) => (z === 4 ? ORANGE : SILVER));
  for (let d = 0; d <= 17; d++) { // tapered low wing
    const x0 = Math.round(14 + d * 0.18), x1 = Math.round(20 - d * 0.1);
    const c = d > 14 ? ORANGE : SILVER;
    v.box(x0, cy - d, 3, x1, cy - d, 3, c); v.box(x0, cy + d, 3, x1, cy + d, 3, c);
  }
  for (const y of [cy - 7, cy + 7]) { // engine nacelles
    v.tube(15, 23, y, 3.5, () => 1.3, ORANGE);
    v.box(23, y, 3, 24, y, 4, DARK);
  }
  v.box(2, cy, 5, 6, cy, 8, ORANGE); // fin
  v.box(2, cy - 6, 8, 5, cy + 6, 8, SILVER); // T-tail
  v.box(27, cy - 1, 6, 29, cy + 1, 6, GLASS);
  return { vox: v, vs: 0.5, props: [{ x: 25.4, y: -7, z: 3.5, r: 2.6 }, { x: 25.4, y: 7, z: 3.5, r: 2.6 }], jets: [], tips: 17 };
}

function comet() {
  const v = new Vox(39, 35, 10), cy = 17;
  const WHITE = 0xf5f7fa, BLUE = 0x2a5fd0;
  v.tube(2, 37, cy, 4, (x) => (x < 8 ? 0.8 + (x - 2) * 0.2 : x > 32 ? 2 - (x - 32) * 0.4 : 2), (x, y, z) => (z === 4 ? BLUE : WHITE));
  for (let d = 1; d <= 16; d++) { // swept wing
    const x1 = Math.round(23 - d * 0.85), x0 = Math.round(x1 - (5 - d * 0.2));
    const c = d > 13 ? BLUE : WHITE;
    v.box(x0, cy - d, 3, x1, cy - d, 3, c); v.box(x0, cy + d, 3, x1, cy + d, 3, c);
  }
  for (const y of [cy - 4, cy + 4]) v.tube(6, 12, y, 5, () => 1.1, DARK); // rear engines
  for (let h = 0; h <= 3; h++) v.box(2 - 0 + h * 0 , cy, 5 + h, 6 - h, cy, 5 + h, BLUE); // swept fin
  for (let d = 0; d <= 6; d++) { const x1 = Math.round(5 - d * 0.5); v.box(x1 - 2, cy - d, 9, x1, cy - d, 9, WHITE); v.box(x1 - 2, cy + d, 9, x1, cy + d, 9, WHITE); }
  v.box(32, cy - 1, 6, 34, cy + 1, 6, GLASS);
  return { vox: v, vs: 0.5, props: [], jets: [{ x: 5, y: -4, z: 5 }, { x: 5, y: 4, z: 5 }], tips: 16 };
}

function meteor() {
  const v = new Vox(37, 27, 9), cy = 13;
  const GREY = 0x4f5564, FIRE = 0xff7a2a;
  v.tube(2, 34, cy, 3.5, (x) => (x > 27 ? 1.7 - (x - 27) * 0.22 : 1.7), (x, y, z) => (z === 4 ? FIRE : GREY));
  for (let d = 1; d <= 11; d++) { // delta wing
    const x1 = Math.round(24 - d * 1.6);
    const c = d > 9 ? FIRE : GREY;
    v.box(5, cy - d, 3, x1, cy - d, 3, c); v.box(5, cy + d, 3, x1, cy + d, 3, c);
  }
  for (const y of [cy - 4, cy + 4]) v.box(3, y, 4, 7, y, 6, FIRE); // twin fins
  v.box(1, cy - 1, 3, 2, cy + 1, 4, DARK);
  v.box(27, cy, 5, 29, cy, 5, GLASS);
  return { vox: v, vs: 0.5, props: [], jets: [{ x: 1, y: 0, z: 3.5 }], tips: 11 };
}

function starling() {
  const v = new Vox(41, 33, 11), cy = 16;
  const WHITE = 0xf4f5f7, TILE = 0x282a31;
  v.tube(3, 38, cy, 4.5, (x) => (x > 31 ? 2.6 - (x - 31) * 0.36 : 2.6), (x, y, z) => (z <= 3 ? TILE : WHITE));
  for (let d = 1; d <= 14; d++) { // big delta wing with a dark leading edge
    const x1 = Math.round(27 - d * 1.45);
    for (const y of [cy - d, cy + d]) { v.box(5, y, 3, x1, y, 3, 0xe6e9ed); v.set(x1, y, 3, TILE); v.set(x1 - 1, y, 3, TILE); }
  }
  for (let h = 0; h <= 3; h++) v.box(3, cy, 7 + h, 9 - h * 2, cy, 7 + h, WHITE); // tail fin
  v.box(1, cy - 2, 3, 2, cy + 2, 6, DARK); // engine bells
  v.box(31, cy - 1, 7, 33, cy + 1, 7, GLASS);
  v.box(12, cy, 7, 26, cy, 7, 0xc9ced6); // payload bay seam
  return { vox: v, vs: 0.5, props: [], jets: [{ x: 1, y: -1.6, z: 5 }, { x: 1, y: 1.6, z: 5 }, { x: 1, y: 0, z: 3.6 }], tips: 14 };
}

// A boat hull under a patchwork gas bag, with a propeller out on each side.
function ark() {
  const v = new Vox(33, 19, 17), cy = 9;
  const PATCH = [0xe8d9a8, 0xd9a05a, 0xb5563a, 0x5f9c94, 0xcbb07a];
  const WOOD = 0x7a4f2e, BRASS = 0xc9a24a;
  v.ellipsoid(16, cy, 11, 15, 6.2, 4.8, (x, y, z) => PATCH[(Math.floor(x / 4) * 2 + Math.floor(z / 3) * 3 + (y > cy ? 1 : 0)) % PATCH.length]);
  v.box(1, cy, 9, 4, cy, 16, 0xb5563a); // rudder
  v.box(1, cy - 5, 11, 4, cy + 5, 11, 0xb5563a); // tail planes
  for (let x = 9; x <= 24; x++) { // hull, narrowing at the bow
    const w = x > 21 ? 24 - x : 2;
    v.box(x, cy - w, 1, x, cy + w, 3, WOOD);
    v.box(x, cy - w, 4, x, cy - w, 4, BRASS); v.box(x, cy + w, 4, x, cy + w, 4, BRASS);
  }
  v.box(10, cy - 2, 0, 22, cy + 2, 0, 0x5c3b22);
  for (const x of [11, 16, 21]) v.box(x, cy, 4, x, cy, 6, DARK); // rigging
  for (const y of [cy - 5, cy + 5]) { v.box(13, Math.min(y, cy), 2, 13, Math.max(y, cy), 2, DARK); v.box(12, y, 1, 15, y, 3, BRASS); }
  v.box(18, cy - 1, 4, 19, cy + 1, 4, GLASS);
  return { vox: v, vs: 0.55, props: [{ x: 11.4, y: -5, z: 2, r: 2.4 }, { x: 11.4, y: 5, z: 2, r: 2.4 }], jets: [], tips: 6, rollK: 0.25 };
}

// Four beating wings. `pose` picks the point in the wing beat.
function dragonfly(pose = 0) {
  const v = new Vox(27, 31, 13), cy = 15;
  const BRASS = 0xc9a24a, COPPER = 0xb5673a, SILK = 0xcfe8c0, RIB = 0x7d6a34;
  v.tube(8, 21, cy, 5, (x) => (x < 12 ? 0.9 : 1.5), (x, y, z) => ((x & 3) === 0 ? COPPER : BRASS));
  v.box(2, cy, 5, 8, cy, 5, COPPER); // tail boom
  v.box(1, cy - 3, 5, 3, cy + 3, 5, 0x3f8f8a); // fan tail
  v.box(2, cy, 6, 3, cy, 7, 0x3f8f8a);
  v.ellipsoid(22.5, cy, 5.3, 2, 1.8, 1.6, GLASS);
  const beat = [0.45, 0, -0.45, 0][pose];
  const wing = (x0, x1, ang) => {
    for (let d = 0; d <= 12; d++) {
      const off = 2 + d * Math.cos(ang), z = 6 + d * Math.sin(ang);
      const c = d % 4 === 3 || d === 12 ? RIB : SILK;
      const a = d > 10 ? x0 + 1 : x0, b = d > 10 ? x1 - 1 : x1;
      v.box(a, cy - off, z, b, cy - off, z, c); v.box(a, cy + off, z, b, cy + off, z, c);
    }
  };
  wing(15, 19, beat); // front pair
  wing(10, 13, -beat * 0.8); // back pair beats the other way
  v.box(14, cy, 3, 15, cy, 3, DARK); v.box(18, cy, 3, 19, cy, 3, DARK); // skids
  return { vox: v, vs: 0.5, props: [], jets: [], tips: 13, poses: 4, fps: 14 };
}

const BUILDERS = { sparrow, heron, ark, dragonfly, kestrel, comet, meteor, starling };
export const ROLL_STEPS = 4; // variants from -4..+4, 10 degrees apart
const cache = {};

// Returns { rolls: [baked model for each bank angle], vs, props, jets, tips, nx, ny, nz }.
export function aircraftModel(id) {
  if (cache[id]) return cache[id];
  const m = BUILDERS[id](0);
  const frames = []; // one set of bank angles per animation pose (most craft have a single pose)
  for (let f = 0; f < (m.poses || 1); f++) {
    const vox = f === 0 ? m.vox : BUILDERS[id](f).vox;
    const rolls = [];
    for (let k = -ROLL_STEPS; k <= ROLL_STEPS; k++) rolls.push(bake(rollVox(vox, (k * 10 * Math.PI) / 180)));
    frames.push(rolls);
  }
  return (cache[id] = { rollK: 1, fps: 0, ...m, frames, rolls: frames[0], nx: m.vox.nx, ny: m.vox.ny, nz: m.vox.nz });
}

function cloud(rng, storm) {
  const v = new Vox(34, 34, 9);
  const cols = storm ? [0x3b3f55, 0x4b4f66, 0x5d6178, 0x70748c] : [0xb4c4da, 0xd3deec, 0xeef3f9, 0xffffff];
  const n = 4 + Math.floor(rng() * 4);
  for (let i = 0; i < n; i++) {
    const a = rng() * 6.283, d = rng() * 9;
    const r = 4 + rng() * 5;
    v.ellipsoid(17 + Math.cos(a) * d, 17 + Math.sin(a) * d * 0.8, 2 + rng() * 2, r, r, r * 0.62,
      (x, y, z) => cols[Math.min(3, Math.floor(z / 2.2))]);
  }
  return bake(v, { light: false });
}

function hangar() {
  const v = new Vox(14, 10, 7);
  v.box(0, 0, 0, 13, 9, 3, 0xb9bcc0);
  v.box(0, 3, 0, 0, 6, 2, 0x44464e); // door
  for (let y = 0; y < 10; y++) { // arched roof
    const h = 4 + Math.round(2 * Math.sin((y / 9) * Math.PI));
    v.box(0, y, 4, 13, y, h, 0xc8523a);
  }
  return bake(v);
}
function tower() {
  const v = new Vox(5, 5, 11);
  v.box(1, 1, 0, 3, 3, 7, 0xd8d8d0);
  v.box(0, 0, 8, 4, 4, 9, GLASS);
  v.box(0, 0, 10, 4, 4, 10, 0xc8523a);
  return bake(v);
}

export function buildScenery() {
  const rng = mulberry32(4242);
  const white = [], storm = [];
  for (let i = 0; i < 6; i++) white.push(cloud(rng, false));
  for (let i = 0; i < 4; i++) storm.push(cloud(rng, true));
  return { white, storm, hangar: hangar(), tower: tower() };
}
