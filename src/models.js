// Procedural voxel models: the aircraft, clouds and the buildings at each stop.
// Model axes: x = forward (nose at high x), y = across the wings, z = up.
// Aircraft are described in design units and stored K times finer (see voxel.js).

import { Vox, bake, rollVox, shade } from './voxel.js';
import { mulberry32, hash2 } from './noise.js';

const K = 2;
const GLASS = 0x8fd4ee, DARK = 0x33343c, PANE = 0x2c4a6e;
const keep = (c) => c === GLASS || c === DARK || c === PANE;

// ---------- detail helpers ----------
// Surface texture, panel lines, bright leading edges and wingtip navigation lights.
function finish(v, o = {}) {
  const cy = (v.ny - 1) / 2;
  v.each((x, y, z, c) => {
    if (keep(c)) return undefined;
    let f = 0.97 + 0.06 * hash2(x + z * 31, y, 9);
    const top = !v.get(x, y, z + 1);
    if (o.panels !== false && top && (x % 10 === 0 || Math.round(Math.abs(y - cy)) % 10 === 9)) f *= 0.84;
    if (top && !v.get(x + 1, y, z)) f *= 1.09;
    return shade(c, f);
  });
  if (o.lights === false) return;
  const tip = (yy, col) => {
    for (let x = v.nx - 1; x >= 0; x--) { const z = v.topZ(x, yy); if (z >= 0) { v.put(x, yy, z, col); v.put(x - 1, yy, z, col); return true; } }
    return false;
  };
  for (let y = 0; y < v.ny; y++) if (tip(y, 0xff3b30)) break; // port: red
  for (let y = v.ny - 1; y >= 0; y--) if (tip(y, 0x35ff6a)) break; // starboard: green
}
// A row of cabin windows down both sides of the fuselage, at design height zc.
function windows(v, x0, x1, zc, col = PANE) {
  const z = zc * K + 1;
  for (let x = x0 * K; x <= x1 * K + 1; x++) {
    if (x % 4 > 1) continue;
    let a = -1, b = -1;
    for (let y = 0; y < v.ny; y++) if (v.get(x, y, z)) { if (a < 0) a = y; b = y; }
    if (a >= 0) { v.put(x, a, z, col); v.put(x, b, z, col); }
  }
}
function roundel(v, cx, cy, r, ring = 0x2a4fa8, mid = 0xf4f1e6, dot = 0xc8402f) {
  v.paintTop(cx - r, cy - r, cx + r, cy + r, (x, y) => {
    const d = Math.hypot(x - cx, y - cy);
    return d < r * 0.38 ? dot : d < r * 0.72 ? mid : d <= r ? ring : undefined;
  });
}
const stripe = (v, x0, y0, x1, y1, col) => v.paintTop(x0, y0, x1, y1, (x, y, c) => (keep(c) ? undefined : col));

// ---------- aircraft ----------
function sparrow() {
  const v = new Vox(27, 27, 9, K), cy = 13;
  const RED = 0xc8402f, CREAM = 0xf0e2b6, WOOD = 0x8a5a34;
  v.tube(3, 22, cy, 3.5, (x) => (x < 8 ? 0.6 + (x - 3) * 0.2 : x > 20 ? 1.3 : 1.6), RED);
  v.tube(22, 23.5, cy, 3.5, () => 1.45, DARK); // cowling
  for (let a = 0; a < 6.28; a += 0.9) v.set(22.5, cy + Math.cos(a) * 1.7, 3.5 + Math.sin(a) * 1.7, 0x8a8f9c); // cylinder heads
  v.box(12, 2, 2, 16, 24, 2, CREAM); // lower wing
  v.box(13, 1, 6, 17, 25, 6, CREAM); // upper wing
  v.box(13, 1, 6, 17, 2, 6, RED); v.box(13, 24, 6, 17, 25, 6, RED); // wing tips
  for (const y of [5, 21]) { v.box(14, y, 3, 14, y, 5, WOOD); v.box(16, y, 3, 16, y, 5, WOOD); v.box(15, y, 4, 15, y, 4, WOOD); }
  v.box(15, cy - 2, 5, 15, cy + 2, 5, WOOD);
  v.box(3, 8, 3, 5, 18, 3, CREAM); // tailplane
  v.box(2, cy, 4, 5, cy, 6, RED); // fin
  v.box(2, cy, 6, 3, cy, 6, CREAM);
  v.box(10, cy, 5, 11, cy, 5, DARK); // open cockpit
  v.box(12, cy - 0.5, 5, 12, cy + 0.5, 5.5, GLASS); // windscreen
  for (const y of [cy - 3, cy + 3]) { v.box(15, y, 0, 16, y, 1, DARK); v.box(15.5, y, 1.5, 15.5, y, 2, 0x8a8f9c); }
  v.box(15.5, cy - 3, 1, 15.5, cy + 3, 1, 0x8a8f9c); // axle
  v.box(19, cy + 1.5, 3, 21, cy + 1.5, 3, 0x6a5040); // exhaust pipe
  finish(v);
  roundel(v, 15, 6, 1.9); roundel(v, 15, 20, 1.9);
  stripe(v, 8, cy - 2, 8.5, cy + 2, CREAM);
  stripe(v, 3, 8, 5, 8.5, RED); stripe(v, 3, 17.5, 5, 18, RED);
  return { vox: v, vs: 0.5, props: [{ x: 24.4, y: 0, z: 3.5, r: 3.2 }], jets: [], tips: 12 };
}

function heron() {
  const v = new Vox(31, 31, 10, K), cy = 15;
  const WHITE = 0xf2f4f5, TEAL = 0x1f9aa0, FLOAT = 0xcfd6dc;
  for (const y of [cy - 5, cy + 5]) {
    v.tube(8, 23, y, 1, (x) => (x > 21 ? 0.5 + (23 - x) * 0.3 : x < 10 ? 0.7 : 1.1), FLOAT);
    v.box(12, y, 2, 12, y, 3, DARK); v.box(19, y, 2, 19, y, 3, DARK);
    v.box(12, Math.min(y, cy), 2, 12, Math.max(y, cy), 2, 0x8a8f9c);
  }
  v.tube(3, 26, cy, 4.5, (x) => (x < 9 ? 0.7 + (x - 3) * 0.2 : x > 24 ? 1.4 : 2), (x, y, z) => (z === 4 ? TEAL : WHITE));
  v.tube(26, 27.5, cy, 4.5, () => 1.3, DARK);
  v.box(14, 1, 7, 18, 29, 7, TEAL); // high wing
  v.box(14, 1, 7, 18, 3, 7, WHITE); v.box(14, 27, 7, 18, 29, 7, WHITE);
  v.box(13.5, 5, 7, 13.5, 25, 7, 0xe6eaec); // flaps
  for (const y of [cy - 5, cy + 5]) v.box(16, y, 4, 16, y, 6, 0x8a8f9c);
  v.box(3, 10, 5, 5, 20, 5, TEAL); // tailplane
  v.box(2, cy, 6, 5, cy, 8, TEAL);
  v.box(20, cy - 1, 6, 22.5, cy + 1, 6.5, GLASS);
  finish(v);
  windows(v, 11, 19, 4);
  stripe(v, 14, cy - 0.5, 18, cy + 0.5, WHITE);
  stripe(v, 2, cy, 5, cy, WHITE);
  return { vox: v, vs: 0.5, props: [{ x: 28.4, y: 0, z: 4.5, r: 3.2 }], jets: [], tips: 14 };
}

// A racing flying boat: boat hull, wing on struts, engine carried above the wing, a float under each tip.
function marlin() {
  const v = new Vox(31, 31, 12, K), cy = 15;
  const NAVY = 0x24407a, CREAM = 0xf0e2b6, GOLD = 0xd9a441, STEEL = 0x8a8f9c;
  v.tube(3, 27.5, cy, 3, (x) => (x > 23 ? 1.9 - (x - 23) * 0.3 : x < 10 ? 0.7 + (x - 3) * 0.17 : 1.9), (x, y, z) => (z === 3 ? GOLD : NAVY));
  v.box(12, cy - 1, 1, 22, cy + 1, 1, 0x1a2f5c); // planing step under the hull
  v.box(13, 2, 6, 18, 28, 6, CREAM); // wing
  v.box(13, 2, 6, 18, 3.5, 6, NAVY); v.box(13, 26.5, 6, 18, 28, 6, NAVY);
  v.box(12.5, 6, 6, 12.5, 24, 6, 0xe2d2a2); // ailerons
  for (const y of [cy - 2, cy + 2]) { v.box(14, y, 4, 14, y, 5, STEEL); v.box(17, y, 4, 17, y, 5, STEEL); }
  for (const y of [4, 26]) { v.tube(13, 18, y, 3.3, (x) => (x > 17 ? 0.5 : 0.8), NAVY); v.box(15.5, y, 4, 15.5, y, 5, STEEL); } // tip floats
  v.tube(12, 19, cy, 8.4, (x) => (x > 18 ? 0.8 : 1.15), STEEL); // engine above the wing
  v.tube(19, 19.5, cy, 8.4, () => 0.7, DARK);
  for (const x of [14, 17]) v.box(x, cy, 7, x, cy, 7.5, STEEL);
  v.box(13, cy + 1, 9, 16, cy + 1, 9, 0x6a5040); // exhaust
  for (let h = 0; h <= 4; h += 0.5) v.box(3 + h * 0.3, cy, 4 + h, 6.5 - h * 0.3, cy, 4 + h, NAVY); // fin
  for (let d = 0; d <= 4; d += 0.5) v.box(3 + d * 0.2, cy - d, 6, 6, cy + d, 6, CREAM); // tailplane
  v.box(19.5, cy, 5, 20.5, cy, 5, DARK); // open cockpit
  v.box(21.5, cy - 0.5, 5, 21.5, cy + 0.5, 5.5, GLASS);
  finish(v);
  for (const y of [8, 22]) stripe(v, 14, y, 17, y + 0.5, GOLD);
  stripe(v, 4, cy, 5.5, cy, GOLD);
  return { vox: v, vs: 0.5, props: [{ x: 20.2, y: 0, z: 8.4, r: 3 }], jets: [], tips: 13 };
}

function kestrel() {
  const v = new Vox(35, 37, 10, K), cy = 18;
  const SILVER = 0xd2d8dd, ORANGE = 0xf08a24;
  v.tube(2, 32, cy, 4, (x) => (x < 9 ? 0.8 + (x - 2) * 0.2 : x > 29 ? 2.2 - (x - 29) * 0.5 : 2.2), (x, y, z) => (z === 4 ? ORANGE : SILVER));
  for (let d = 0; d <= 17; d += 0.5) { // tapered low wing
    const x0 = 14 + d * 0.18, x1 = 20 - d * 0.1;
    const c = d > 14.5 ? ORANGE : SILVER;
    v.box(x0, cy - d, 3, x1, cy - d, 3, c); v.box(x0, cy + d, 3, x1, cy + d, 3, c);
    v.set(x1, cy - d, 3, DARK); v.set(x1, cy + d, 3, DARK); // de-icing boot
  }
  for (const y of [cy - 7, cy + 7]) { // engine nacelles
    v.tube(15, 23, y, 3.5, (x) => (x > 21 ? 1.1 : 1.35), ORANGE);
    v.tube(23, 24, y, 3.5, () => 0.9, DARK);
    v.box(16, y, 5, 18, y, 5, 0x6a5040); // exhaust stack
  }
  v.box(2, cy, 5, 6, cy, 8, ORANGE); // fin
  for (let d = 0; d <= 6; d += 0.5) v.box(2 + d * 0.1, cy - d, 8, 5 - d * 0.15, cy + d, 8, SILVER); // T-tail
  v.box(27, cy - 1.5, 5.5, 29.5, cy + 1.5, 6, GLASS);
  finish(v);
  windows(v, 12, 25, 4);
  stripe(v, 3, cy, 5, cy, 0xf4f1e6);
  return { vox: v, vs: 0.5, props: [{ x: 25.4, y: -7, z: 3.5, r: 2.6 }, { x: 25.4, y: 7, z: 3.5, r: 2.6 }], jets: [], tips: 17 };
}

function comet() {
  const v = new Vox(39, 35, 10, K), cy = 17;
  const WHITE = 0xf5f7fa, BLUE = 0x2a5fd0;
  v.tube(2, 37, cy, 4, (x) => (x < 8 ? 0.8 + (x - 2) * 0.2 : x > 32 ? 2 - (x - 32) * 0.36 : 2), (x, y, z) => (z === 4 ? BLUE : WHITE));
  for (let d = 1; d <= 16; d += 0.5) { // swept wing
    const x1 = 23 - d * 0.85, x0 = x1 - (5 - d * 0.2);
    const c = d > 13.5 ? BLUE : WHITE;
    v.box(x0, cy - d, 3, x1, cy - d, 3, c); v.box(x0, cy + d, 3, x1, cy + d, 3, c);
  }
  for (const y of [cy - 4, cy + 4]) { v.tube(6, 12, y, 5, () => 1.15, 0xdfe3e8); v.tube(12, 12.5, y, 5, () => 0.8, DARK); v.tube(5.5, 6, y, 5, () => 0.9, DARK); }
  for (let h = 0; h <= 3; h += 0.5) v.box(2 + h * 0.2, cy, 5 + h, 6 - h, cy, 5 + h, BLUE); // swept fin
  for (let d = 0; d <= 6; d += 0.5) { const x1 = 5 - d * 0.5; v.box(x1 - 2, cy - d, 9, x1, cy - d, 9, WHITE); v.box(x1 - 2, cy + d, 9, x1, cy + d, 9, WHITE); }
  v.box(32, cy - 1.5, 5.5, 34.5, cy + 1.5, 6, GLASS);
  finish(v);
  windows(v, 14, 29, 4);
  stripe(v, 7, cy - 4.5, 11, cy - 3.5, BLUE); stripe(v, 7, cy + 3.5, 11, cy + 4.5, BLUE);
  return { vox: v, vs: 0.5, props: [], jets: [{ x: 5, y: -4, z: 5 }, { x: 5, y: 4, z: 5 }], tips: 16 };
}

function meteor() {
  const v = new Vox(37, 27, 9, K), cy = 13;
  const GREY = 0x4f5564, FIRE = 0xff7a2a;
  v.tube(2, 34.5, cy, 3.5, (x) => (x > 27 ? 1.7 - (x - 27) * 0.21 : 1.7), (x, y, z) => (x > 31 ? DARK : z === 4 ? FIRE : GREY));
  for (let d = 1; d <= 11; d += 0.5) { // delta wing
    const x1 = 24 - d * 1.6;
    const c = d > 9.5 ? FIRE : GREY;
    v.box(5, cy - d, 3, x1, cy - d, 3, c); v.box(5, cy + d, 3, x1, cy + d, 3, c);
  }
  for (const y of [cy - 4, cy + 4]) for (let h = 0; h <= 2; h += 0.5) v.box(3 + h * 0.5, y, 4 + h, 7 - h * 0.5, y, 4 + h, FIRE); // twin fins
  v.tube(1, 2, cy, 3.5, () => 1.2, DARK); // rocket bell
  v.box(27, cy - 0.5, 5, 29.5, cy + 0.5, 5.5, GLASS);
  finish(v);
  for (const s of [-1, 1]) { stripe(v, 6, cy + s * 3, 14, cy + s * 3.5, 0xf4f1e6); stripe(v, 6, cy + s * 6, 10, cy + s * 6.5, 0xf4f1e6); }
  stripe(v, 16, cy - 0.5, 20, cy + 0.5, 0xf4f1e6);
  return { vox: v, vs: 0.5, props: [], jets: [{ x: 1, y: 0, z: 3.5 }], tips: 11 };
}

function starling() {
  const v = new Vox(41, 33, 11, K), cy = 16;
  const WHITE = 0xf4f5f7, TILE = 0x282a31, GOLD = 0xd9a441;
  v.tube(3, 38.5, cy, 4.5, (x) => (x > 31 ? 2.6 - (x - 31) * 0.34 : 2.6), (x, y, z) => (z <= 3 ? TILE : WHITE));
  for (let d = 1; d <= 14; d += 0.5) { // big delta wing with a dark leading edge
    const x1 = 27 - d * 1.45;
    for (const y of [cy - d, cy + d]) { v.box(5, y, 3, x1, y, 3, 0xe6e9ed); v.box(x1 - 1, y, 3, x1, y, 3, TILE); }
  }
  for (let h = 0; h <= 3; h += 0.5) v.box(3 + h * 0.3, cy, 7 + h, 9 - h * 2, cy, 7 + h, WHITE); // tail fin
  for (const [y, z] of [[cy - 1.6, 5], [cy + 1.6, 5], [cy, 3.6]]) v.tube(1, 2.5, y, z, () => 1, DARK); // engine bells
  for (const y of [cy - 3.5, cy + 3.5]) v.tube(3, 7, y, 5.5, () => 0.9, 0xdfe3e8); // manoeuvring pods
  v.box(31, cy - 1.5, 7, 33.5, cy + 1.5, 7.5, GLASS);
  finish(v);
  stripe(v, 12, cy, 26, cy, 0xb9bfc8); // payload bay seam
  for (let x = 12; x <= 26; x += 3.5) stripe(v, x, cy - 2, x, cy + 2, 0xc9ced6);
  for (const s of [-1, 1]) { stripe(v, 6, cy + s * 5, 12, cy + s * 5.5, GOLD); stripe(v, 5, cy + s * 9, 8, cy + s * 9.5, GOLD); }
  windows(v, 27, 30, 5);
  v.paintTop(27, cy - 1, 29, cy + 1, (x, y) => (Math.abs(y - cy) <= (29 - x) * 0.5 ? GOLD : undefined)); // the wren mark
  return { vox: v, vs: 0.5, props: [], jets: [{ x: 1, y: -1.6, z: 5 }, { x: 1, y: 1.6, z: 5 }, { x: 1, y: 0, z: 3.6 }], tips: 14 };
}

// A boat hull under a patchwork gas bag, with a propeller out on each side and a door in the hull.
function ark() {
  const v = new Vox(33, 19, 17, K), cy = 9;
  const PATCH = [0xe8d9a8, 0xd9a05a, 0xb5563a, 0x5f9c94, 0xcbb07a, 0x8a6fa8];
  const WOOD = 0x7a4f2e, BRASS = 0xc9a24a, ROPE = 0x5c4630;
  const patch = (x, y, z) => PATCH[Math.floor(hash2(Math.floor(x / 3), Math.floor(z / 2.5) + (y > cy ? 40 : 0), 3) * PATCH.length)];
  v.ellipsoid(16, cy, 11, 15, 6.2, 4.8, patch);
  for (let h = 0; h <= 6; h += 0.5) v.box(1 + h * 0.2, cy, 9 + h, 4.5 - h * 0.25, cy, 9 + h, 0xb5563a); // rudder
  for (let d = 0; d <= 5; d += 0.5) v.box(1 + d * 0.3, cy - d, 11, 4.5, cy + d, 11, 0xb5563a); // tail planes
  for (let x = 9; x <= 24.5; x += 0.5) { // hull, narrowing at bow and stern
    const w = x > 21 ? (24.5 - x) * 0.7 : x < 10.5 ? 1 + (x - 9) * 0.7 : 2.2;
    v.box(x, cy - w, 1, x, cy + w, 3, WOOD);
    v.box(x, cy - w, 3.5, x, cy - w, 4, BRASS); v.box(x, cy + w, 3.5, x, cy + w, 4, BRASS);
  }
  v.box(10.5, cy - 2, 3.5, 21, cy + 2, 3.5, 0xb08a58); // deck planking
  v.box(11, cy - 1.5, 0, 21, cy + 1.5, 0.5, 0x5c3b22); // keel
  v.box(18, cy - 1, 4, 20, cy + 1, 5, 0x8a5a34); // wheelhouse
  v.box(20, cy - 1, 4.5, 20, cy + 1, 5, GLASS);
  v.box(14, cy, 4, 14, cy, 5.5, DARK); // stove pipe
  for (const x of [11, 13.5, 16, 18.5, 21]) for (const s of [-1, 1]) v.box(x, cy + s * 2, 4, x, cy + s * 3, 6.5, ROPE); // rigging
  for (const y of [cy - 5, cy + 5]) { v.box(13, Math.min(y, cy), 2, 13, Math.max(y, cy), 2, DARK); v.tube(12, 15, y, 2, () => 0.9, BRASS); }
  for (const y of [cy - 3.2, cy + 3.2]) { // paddle wheels, one each side of the hull
    for (let a = 0; a < 6.283; a += 0.2) v.set(16.5 + Math.cos(a) * 2.4, y, 2.2 + Math.sin(a) * 2.4, 0xb5332a);
    for (let a = 0; a < 3.14; a += 0.785) for (let r = -2; r <= 2; r += 0.5) v.set(16.5 + Math.cos(a) * r, y, 2.2 + Math.sin(a) * r, 0xd9a05a);
  }
  finish(v, { panels: false, lights: false });
  // stitched seams between the patches, a rope net over the top, and lanterns fore and aft
  v.each((x, y, z, c) => {
    if (z < 6 * K) return undefined;
    if (x % 6 === 0 || z % 5 === 0) return shade(c, 0.78);
    return undefined;
  });
  for (let x = 4; x <= 28; x += 4) stripe(v, x, cy - 6, x, cy + 6, ROPE);
  windows(v, 12, 17, 2, 0xffd86a); // lit portholes
  // the door: a tall frame on the starboard side with light coming through it
  for (let z = 1 * K; z <= 3 * K + 1; z++) for (let x = 15 * K; x <= 16 * K + 1; x++) {
    let b = -1;
    for (let y = 0; y < v.ny; y++) if (v.get(x, y, z)) b = y;
    if (b >= 0) v.put(x, b, z, x === 15 * K || x === 16 * K + 1 || z === 3 * K + 1 ? BRASS : 0x8ff6ff);
  }
  v.put(24 * K, cy * K, 4 * K, 0xffd86a); v.put(9 * K, cy * K, 4 * K + 1, 0xffd86a);
  return { vox: v, vs: 0.55, props: [{ x: 11.4, y: -5, z: 2, r: 2.4 }, { x: 11.4, y: 5, z: 2, r: 2.4 }], jets: [], tips: 6, rollK: 0.25 };
}

// Four beating wings. `pose` picks the point in the wing beat.
function dragonfly(pose = 0) {
  const v = new Vox(27, 31, 13, K), cy = 15;
  const BRASS = 0xc9a24a, COPPER = 0xb5673a, SILK = 0xcfe8c0, RIB = 0x7d6a34, TEAL = 0x3f8f8a;
  v.tube(8, 21, cy, 5, (x) => (x < 12 ? 0.9 : 1.5), (x) => (x % 3 === 0 ? COPPER : BRASS));
  v.tube(2, 8, cy, 5, () => 0.45, COPPER); // tail boom
  for (let d = 0; d <= 3; d += 0.5) v.box(1, cy - d, 5, 3.5 - d * 0.5, cy + d, 5, TEAL); // fan tail
  v.box(2, cy, 6, 3, cy, 7, TEAL);
  v.ellipsoid(22.5, cy, 5.3, 2, 1.8, 1.6, GLASS);
  v.box(22, cy, 6.5, 23, cy, 6.5, BRASS); // canopy frame
  v.tube(14, 15, cy, 6.6, () => 0.8, DARK); // clockwork drum
  const beat = [0.45, 0, -0.45, 0][pose];
  const wing = (x0, x1, ang) => {
    for (let d = 0; d <= 12; d += 0.5) {
      const off = 2 + d * Math.cos(ang), z = 6 + d * Math.sin(ang);
      const a = d > 10 ? x0 + (d - 10) * 0.6 : x0, b = d > 10 ? x1 - (d - 10) * 0.6 : x1;
      for (const y of [cy - off, cy + off]) {
        v.box(a, y, z, b, y, z, d % 3 === 0 || d >= 12 ? RIB : SILK);
        v.set(b, y, z, RIB); // leading spar
      }
    }
  };
  wing(15, 19, beat); // front pair
  wing(10, 13, -beat * 0.8); // back pair beats the other way
  v.box(14, cy, 3, 15, cy, 3, DARK); v.box(18, cy, 3, 19, cy, 3, DARK); // skids
  finish(v, { panels: false });
  return { vox: v, vs: 0.5, props: [], jets: [], tips: 13, poses: 4, fps: 14 };
}

const BUILDERS = { sparrow, heron, marlin, dragonfly, kestrel, comet, meteor, ark, starling };
export const ROLL_STEPS = 4; // variants from -4..+4, 10 degrees apart
const cache = {};

// Returns { frames: [per pose: baked model for each bank angle], vs, props, jets, tips, nx, ny, nz }.
// Sizes and positions come back in fine (stored) units.
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
  const fine = (p) => ({ x: p.x * K + 0.5, y: p.y * K, z: p.z * K + 0.5, r: (p.r || 0) * K });
  return (cache[id] = {
    rollK: 1, fps: 0, ...m, vs: (m.vs / K) * 1.2, tips: m.tips * K, props: m.props.map(fine), jets: m.jets.map(fine),
    frames, rolls: frames[0], nx: m.vox.nx, ny: m.vox.ny, nz: m.vox.nz,
  });
}

// ---------- clouds ----------
const CLOUDS = {
  white: [0xb4c4da, 0xd3deec, 0xeef3f9, 0xffffff],
  storm: [0x3b3f55, 0x4b4f66, 0x5d6178, 0x70748c],
  dustLight: [0xb98a66, 0xcfa27c, 0xe0b994, 0xedd0b0],
  dust: [0x7a4a2c, 0x935c38, 0xab7046, 0xc48a5a],
  mist: [0x9fd8d0, 0xbfe8e0, 0xdcf5f0, 0xf2fffb],
  violet: [0x3a2466, 0x51338a, 0x6b47ad, 0x8a63cc],
};
function cloud(rng, cols) {
  const v = new Vox(34, 34, 9, 2); // twice as fine as its design grid, so clouds are soft rather than blocky
  const n = 4 + Math.floor(rng() * 4);
  for (let i = 0; i < n; i++) {
    const a = rng() * 6.283, d = rng() * 9, r = 4 + rng() * 5;
    v.ellipsoid(17 + Math.cos(a) * d, 17 + Math.sin(a) * d * 0.8, 2 + rng() * 2, r, r, r * 0.62, (x, y, z) => cols[Math.min(3, Math.floor(z / 2.2))]);
  }
  return bake(v, { light: false });
}

// ---------- buildings ----------
// One storey with a wide tiled roof and upturned corners. Returns the height of the next storey.
function storey(v, cx, cy, z, hw, hd, wall, roof, h = 3) {
  v.box(cx - hw, cy - hd, z, cx + hw, cy + hd, z + h - 1, wall);
  for (const sx of [-1, 1]) for (const sy of [-1, 1]) v.box(cx + sx * hw, cy + sy * hd, z, cx + sx * hw, cy + sy * hd, z + h - 1, 0x7a2a20); // corner posts
  v.box(cx - hw - 1, cy - hd - 1, z + h, cx + hw + 1, cy + hd + 1, z + h, roof);
  for (const sx of [-1, 1]) for (const sy of [-1, 1]) v.put(cx + sx * (hw + 2), cy + sy * (hd + 2), z + h + 1, roof);
  v.box(cx - hw + 1, cy - hd + 1, z + h + 1, cx + hw - 1, cy + hd - 1, z + h + 1, shade(roof, 0.85));
  return z + h + 2;
}
const ROOF = 0x48605a, REDWALL = 0xb8452f, BRICK = 0x8d8f8a;

function pagoda(tiers) {
  const v = new Vox(15, 15, tiers * 5 + 5);
  let z = 0;
  v.box(1, 1, 0, 13, 13, 0, BRICK); z = 1;
  for (let i = 0; i < tiers; i++) { const hw = Math.max(1, 4 - Math.floor(i * 0.6)); z = storey(v, 7, 7, z, hw, hw, i % 2 ? 0xd8c8a8 : REDWALL, ROOF); }
  v.box(7, 7, z, 7, 7, z + 2, 0xd9a441);
  return { m: bake(v), vs: 0.55 };
}
function gate() {
  const v = new Vox(25, 15, 17);
  v.box(1, 2, 0, 23, 12, 5, BRICK);
  v.box(11, 2, 0, 13, 12, 3, DARK); // archway
  for (let x = 1; x <= 23; x += 2) { v.put(x, 2, 6, 0xa7a9a3); v.put(x, 12, 6, 0xa7a9a3); }
  const z = storey(v, 12, 7, 6, 8, 3, REDWALL, ROOF);
  storey(v, 12, 7, z, 6, 2, REDWALL, ROOF);
  return { m: bake(v), vs: 0.65 };
}
function clock() {
  const v = new Vox(17, 15, 27), WOOD = 0x8a5a34, BRONZE = 0xc9a24a;
  let z = storey(v, 7, 7, 0, 5, 5, WOOD, 0x3c4644, 5);
  z = storey(v, 7, 7, z, 4, 4, 0x9a6a40, 0x3c4644, 4);
  z = storey(v, 7, 7, z, 3, 3, WOOD, 0x3c4644, 3);
  for (let a = 0; a < 6.283; a += 0.25) { // armillary sphere: three bronze rings
    const c = Math.round(Math.cos(a) * 3), s = Math.round(Math.sin(a) * 3);
    v.put(7 + c, 7 + s, z + 3, BRONZE); v.put(7 + c, 7, z + 3 + s, BRONZE); v.put(7, 7 + c, z + 3 + s, BRONZE);
  }
  for (let a = 0; a < 6.283; a += 0.3) v.put(14, 7 + Math.round(Math.cos(a) * 3), 4 + Math.round(Math.sin(a) * 3), 0x6aa7b8); // waterwheel
  v.box(13, 7, 4, 15, 7, 4, WOOD);
  for (let x = 4; x <= 10; x += 2) v.put(x, 2, 3, 0xffd86a);
  return { m: bake(v), vs: 0.55 };
}
function ship() {
  const v = new Vox(36, 13, 19), WOOD = 0x8a5a34, SAIL = 0xb5332a;
  for (let x = 2; x <= 33; x++) {
    const w = Math.round(4.6 * Math.pow(Math.sin((Math.PI * (x - 1)) / 33), 0.55));
    v.box(x, 6 - w, 1, x, 6 + w, 4, WOOD);
    v.box(x, 6 - w + 1, 5, x, 6 + w - 1, 5, 0xb08a58);
    v.put(x, 6 - w, 5, 0xd9a441); v.put(x, 6 + w, 5, 0xd9a441);
  }
  v.box(3, 3, 5, 9, 9, 8, 0x9a6a40); v.box(3, 2, 9, 9, 10, 9, ROOF); // stern castle
  for (const x of [6, 14, 22, 29]) v.box(x, 4, 0, x, 8, 0, 0x5c3b22); // building stocks
  for (const [x, top] of [[12, 17], [19, 18], [26, 16]]) {
    v.box(x, 6, 5, x, 6, top, 0x5c3b22);
    for (let z = 8; z < top; z++) v.box(x + 1, 2, z, x + 1, 10, z, z % 3 === 0 ? 0x7a2019 : SAIL);
  }
  return { m: bake(v), vs: 0.7 };
}
function dome() {
  const v = new Vox(17, 17, 9);
  v.ellipsoid(8, 8, 0, 7, 7, 7, (x, y, z) => ((x + z) % 4 === 0 || (y + z) % 4 === 0 ? 0xc3c8d0 : 0xeef0f3));
  v.box(0, 7, 0, 2, 9, 2, 0x8a8f9c); v.box(0, 8, 0, 0, 8, 1, DARK); // airlock
  v.box(11, 1, 0, 15, 4, 0, 0x2a5fd0); v.box(11, 12, 0, 15, 15, 0, 0x2a5fd0); // solar panels
  return { m: bake(v), vs: 0.7 };
}
function mast() {
  const v = new Vox(7, 7, 17);
  for (let z = 0; z <= 13; z++) { v.put(3, 3, z, 0x9aa0ad); if (z % 3 === 0) v.box(2, 2, z, 4, 4, z, 0x7a808c); }
  v.ellipsoid(3, 3, 14, 3, 3, 1.2, 0xeef0f3);
  v.put(3, 3, 16, 0xff3b30);
  return { m: bake(v), vs: 0.5 };
}
function spire() {
  const v = new Vox(19, 19, 24), rng = mulberry32(77);
  for (let i = 0; i < 9; i++) {
    const x = 3 + Math.floor(rng() * 13), y = 3 + Math.floor(rng() * 13), h = 6 + Math.floor(rng() * 16), w = h > 14 ? 1 : 0;
    for (let z = 0; z <= h; z++) { const t = z < h - 2 ? w : 0; v.box(x - t, y - t, z, x + t, y + t, z, z > h - 2 ? 0xf6fbff : i % 2 ? 0x7d55c8 : 0x3cbfae); }
  }
  return { m: bake(v), vs: 0.6 };
}
function lantern() {
  const v = new Vox(21, 5, 7);
  for (let x = 1; x <= 19; x += 6) { v.box(x, 2, 0, x, 2, 4, 0x5c3b22); v.box(x - 1, 1, 5, x + 1, 3, 5, 0xffd86a); v.put(x, 2, 6, 0xb5332a); }
  return { m: bake(v, { light: false }), vs: 0.6 };
}
function door() {
  const v = new Vox(9, 3, 11);
  v.box(1, 1, 0, 1, 1, 9, 0x8a5a34); v.box(7, 1, 0, 7, 1, 9, 0x8a5a34); v.box(1, 1, 9, 7, 1, 9, 0xc9a24a);
  v.box(2, 1, 0, 6, 1, 8, 0x8ff6ff); v.box(3, 1, 1, 5, 1, 7, 0xe6feff);
  return { m: bake(v, { light: false }), vs: 0.6 };
}
function hangar() {
  const v = new Vox(14, 10, 7);
  v.box(0, 0, 0, 13, 9, 3, 0xb9bcc0);
  v.box(0, 3, 0, 0, 6, 2, 0x44464e);
  for (let y = 0; y < 10; y++) v.box(0, y, 4, 13, y, 4 + Math.round(2 * Math.sin((y / 9) * Math.PI)), y % 3 === 0 ? 0xb04632 : 0xc8523a);
  return { m: bake(v), vs: 0.6 };
}
// The island of an aircraft carrier: bridge, funnel and a radar mast.
function bridge() {
  const v = new Vox(12, 6, 16), GREY = 0x8d939c;
  v.box(0, 0, 0, 11, 5, 4, GREY);
  v.box(1, 0, 5, 7, 5, 6, GLASS);
  v.box(1, 0, 7, 7, 5, 7, GREY);
  v.box(9, 2, 5, 10, 3, 8, DARK);
  v.box(4, 2, 8, 4, 3, 13, 0x6a707a);
  v.box(2, 2, 12, 6, 3, 12, 0xc9ced6);
  v.put(4, 2, 14, 0xff3b30);
  return { m: bake(v), vs: 0.6 };
}

function tower() {
  const v = new Vox(5, 5, 11);
  v.box(1, 1, 0, 3, 3, 7, 0xd8d8d0);
  v.box(0, 0, 8, 4, 4, 9, GLASS);
  v.box(0, 0, 10, 4, 4, 10, 0xc8523a);
  return { m: bake(v), vs: 0.5 };
}

function lighthouse() {
  const v = new Vox(7, 7, 17);
  for (let z = 0; z <= 11; z++) v.box(2, 2, z, 4, 4, z, z % 5 >= 3 ? 0xc8402f : 0xf4f1e6);
  v.box(1, 1, 12, 5, 5, 12, DARK);
  v.box(2, 2, 13, 4, 4, 14, 0xffe27a);
  v.box(2, 2, 15, 4, 4, 15, 0xc8402f); v.put(3, 3, 16, 0xc8402f);
  v.box(0, 0, 0, 6, 6, 0, 0x8d8f8a);
  return { m: bake(v, { light: false }), vs: 0.7 };
}
function boat(len, hullCol, top) {
  const v = new Vox(len + 2, 9, 10);
  for (let x = 1; x <= len; x++) {
    const w = Math.max(1, Math.round(3 * Math.pow(Math.sin((Math.PI * x) / (len + 1)), 0.5)));
    v.box(x, 4 - w, 0, x, 4 + w, 2, hullCol);
    v.box(x, 4 - w + 1, 3, x, 4 + w - 1, 3, 0xb08a58);
  }
  top(v, len);
  return v;
}
function fishingBoat() {
  const v = boat(12, 0x2a5fd0, (b) => { b.box(3, 3, 4, 5, 5, 6, 0xf4f1e6); b.box(8, 4, 4, 8, 4, 9, 0x5c3b22); b.box(9, 4, 6, 10, 4, 8, 0xc8402f); });
  return { m: bake(v), vs: 0.6 };
}
function icebreaker() {
  const v = boat(22, 0xc8402f, (b) => { b.box(5, 2, 4, 12, 6, 6, 0xf4f1e6); b.box(6, 3, 7, 10, 5, 8, 0xf4f1e6); b.box(8, 4, 9, 9, 4, 9, DARK); b.box(15, 3, 4, 16, 5, 7, 0xffd24a); });
  return { m: bake(v), vs: 0.8 };
}
function buoy() {
  const v = new Vox(5, 5, 8);
  v.ellipsoid(2, 2, 1, 2, 2, 1.4, 0xc8402f);
  v.box(2, 2, 2, 2, 2, 5, 0xffd24a); v.put(2, 2, 6, 0xffe27a); v.box(1, 2, 4, 3, 2, 4, 0xffd24a);
  return { m: bake(v, { light: false }), vs: 0.7 };
}
function tents() {
  const v = new Vox(16, 9, 6);
  for (const [x0, col] of [[1, 0xe8d9a8], [9, 0xd9a05a]]) for (let h = 0; h <= 3; h++) v.box(x0 + h, 1 + h, h, x0 + 6 - h, 7 - h, h, h === 3 ? 0xb5563a : col);
  v.put(8, 4, 0, 0xff9a3c); v.put(8, 4, 1, 0xffe27a);
  return { m: bake(v), vs: 0.6 };
}
function hut() {
  const v = new Vox(13, 13, 9);
  storey(v, 6, 6, 0, 3, 3, 0xd8c8a8, ROOF, 3);
  v.box(10, 9, 0, 10, 9, 6, 0x5c3b22); v.put(10, 9, 7, 0xff9a3c);
  return { m: bake(v), vs: 0.6 };
}
function kite() {
  const v = new Vox(9, 9, 16);
  for (let z = 0; z <= 11; z++) v.put(4, 4, z, 0x5c4630);
  for (let d = 0; d <= 3; d++) v.box(4 - (3 - d), 4 - d, 12, 4 + (3 - d), 4 + d, 12, d % 2 ? 0xf4f1e6 : 0xc8402f);
  for (let i = 1; i <= 3; i++) v.put(4 - 3 - i, 4, 12 - i, 0xffd24a);
  return { m: bake(v, { light: false }), vs: 0.6 };
}
function rafts() {
  const v = new Vox(18, 12, 3);
  for (let y = 1; y <= 10; y++) if (y % 3 !== 0) v.box(1 + (y % 2), y, 0, 15 + (y % 2), y, 0, y % 2 ? 0x8a5a34 : 0x7a4f2e);
  v.box(7, 4, 1, 9, 6, 1, 0xe8d9a8); v.put(8, 5, 2, 0xc8402f);
  return { m: bake(v), vs: 0.7 };
}
function vent() {
  const v = new Vox(9, 9, 5);
  v.ellipsoid(4, 4, 0, 4, 4, 3, (x, y, z) => (z > 1 ? 0xd0602a : 0x4a4040));
  v.box(3, 3, 2, 5, 5, 3, 0xf0a030); v.put(4, 4, 4, 0xfff3a8);
  return { m: bake(v, { light: false }), vs: 0.8 };
}

// The pilot: leather jacket, flying helmet, red scarf. pose 0 and 1 are two steps of a walk, 2 is bent to a job.
function person(pose) {
  const v = new Vox(4, 3, 8);
  const JACKET = 0x7a4f2e, TROUSER = 0x3d4252, SKIN = 0xe8b890, HELMET = 0x4a3524, SCARF = 0xc8402f;
  const stride = pose === 0 ? [0, 1] : pose === 1 ? [1, 0] : [0, 0];
  v.box(1 + stride[0], 0, 0, 1 + stride[0], 0, 2, TROUSER); v.box(1 + stride[1], 2, 0, 1 + stride[1], 2, 2, TROUSER);
  v.box(1, 0, 3, 1, 2, 5, JACKET);
  if (pose === 2) { v.put(2, 0, 4, SKIN); v.put(2, 2, 4, SKIN); v.put(3, 1, 4, 0x8a8f9c); } // arms out, spanner in hand
  v.put(0, 1, 5, SCARF);
  v.put(1, 1, 6, SKIN); v.put(2, 1, 6, 0x33343c); // face and goggles
  v.put(1, 1, 7, HELMET);
  return bake(v, { light: false });
}

export function buildScenery() {
  const rng = mulberry32(4242);
  const clouds = {};
  for (const k of Object.keys(CLOUDS)) { clouds[k] = []; for (let i = 0; i < (k === 'white' ? 6 : 4); i++) clouds[k].push(cloud(rng, CLOUDS[k])); }
  const marks = { bridge: bridge(), hangar: hangar(), tower: tower(), pagoda: pagoda(6), pagodaSmall: pagoda(3), gate: gate(), clock: clock(), ship: ship(), dome: dome(), mast: mast(), spire: spire(), lantern: lantern(), door: door(),
    lighthouse: lighthouse(), boat: fishingBoat(), icebreaker: icebreaker(), buoy: buoy(), tents: tents(), hut: hut(), kite: kite(), rafts: rafts(), vent: vent() };
  return { clouds, marks, pilot: [person(0), person(1), person(2)] };
}
