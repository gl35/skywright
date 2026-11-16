// Wildlife: herds on the land, flocks of birds, and now and then a whale or a pod of orcas.
// Like the clouds, animals are placed by a hash of the map square they live in, so they are
// always in the same places. Herds run from an aircraft that passes low overhead.

import { hash2 } from './noise.js';
import { levelAt, world, biomeOf, HZ } from './world.js';
import { Vox, bake } from './voxel.js';

const CELL = 72;
const cache = new Map();
let M = null; // baked models, built the first time they are needed

// A four-legged animal. pose 0/1 swaps which diagonal pair of legs is forward.
function quad(pose, o) {
  const v = new Vox(o.len + 6, o.wid + 4, o.leg + o.hgt + 5);
  const x0 = 2, x1 = x0 + o.len - 1, y0 = 2, y1 = y0 + o.wid - 1, zb = o.leg;
  v.box(x0, y0, zb, x1, y1, zb + o.hgt - 1, o.body);
  const s = pose ? 1 : 0;
  for (const [x, y, d] of [[x1, y0, s], [x1, y1, 1 - s], [x0, y0, 1 - s], [x0, y1, s]]) v.box(x + (d ? 1 : 0) - (x === x0 ? 0 : 1), y, 0, x + (d ? 1 : 0) - (x === x0 ? 0 : 1), y, zb - 1, o.legCol || o.body);
  const cy = Math.round((y0 + y1) / 2), nz = zb + o.hgt - 1 + (o.neck || 0);
  if (o.neck) v.box(x1 + 1, cy, zb + o.hgt - 1, x1 + 1, cy, nz, o.body);
  v.box(x1 + 1, cy, nz, x1 + 2, cy, nz, o.head || o.body); // head
  v.put(x0 - 1, cy, zb + o.hgt - 1, o.tail || o.body);
  if (o.extra) o.extra(v, { x0, x1, y0, y1, cy, top: zb + o.hgt, hx: x1 + 1, hz: nz + 1 });
  return bake(v);
}
const two = (o) => [quad(0, o), quad(1, o)];

function whale(back, belly) {
  const v = new Vox(27, 11, 8);
  v.ellipsoid(13, 5, 3, 10, 3.4, 2.6, (x, y, z) => (z < 2 ? belly : back));
  v.box(1, 5, 3, 4, 5, 3, back); v.box(0, 2, 3, 1, 8, 3, back); // tail and flukes
  v.box(15, 1, 2, 17, 9, 2, back); // flippers
  v.put(9, 5, 6, back);
  v.put(21, 4, 5, 0x0c0e14); v.put(21, 6, 5, 0x0c0e14); // eyes
  return bake(v);
}
function orca() {
  const v = new Vox(17, 9, 9), B = 0x1c1e26, W = 0xf2f4f5;
  v.ellipsoid(8, 4, 3, 6.6, 2.3, 2.2, (x, y, z) => (z < 2 ? W : B));
  v.box(0, 2, 3, 1, 6, 3, B); v.box(1, 4, 3, 3, 4, 3, B);
  v.box(7, 4, 5, 8, 4, 8, B); v.put(7, 4, 8, 0); // tall dorsal fin
  v.box(10, 1, 2, 11, 7, 2, B);
  v.put(12, 3, 4, W); v.put(12, 5, 4, W); // eye patches
  v.box(5, 3, 5, 6, 5, 5, 0x8a8f9c); // saddle patch
  return bake(v);
}
function bird(pose, body, tip) {
  const v = new Vox(5, 9, 4);
  v.box(1, 4, 1, 3, 4, 1, body); v.put(4, 4, 1, 0xf0a030);
  if (pose) { v.box(2, 2, 2, 2, 3, 2, body); v.box(2, 5, 2, 2, 6, 2, body); v.put(2, 1, 3, tip); v.put(2, 7, 3, tip); }
  else { v.box(2, 1, 1, 2, 7, 1, body); v.put(2, 0, 1, tip); v.put(2, 8, 1, tip); }
  return bake(v);
}
function penguin() {
  const v = new Vox(4, 3, 5), B = 0x1c1e26;
  v.box(1, 0, 0, 2, 2, 3, B); v.box(1, 1, 4, 2, 1, 4, B);
  v.box(2, 1, 0, 2, 1, 3, 0xf4f5f7); v.put(3, 1, 4, 0xf0a030);
  return bake(v);
}

function build() {
  const antlers = (v, p) => { v.put(p.hx, p.cy - 1, p.hz, 0xd8c8a8); v.put(p.hx, p.cy + 1, p.hz, 0xd8c8a8); v.put(p.hx - 1, p.cy - 1, p.hz + 1, 0xd8c8a8); v.put(p.hx - 1, p.cy + 1, p.hz + 1, 0xd8c8a8); };
  const horns = (v, p) => { v.put(p.hx, p.cy - 2, p.hz - 1, 0xd8d0c0); v.put(p.hx, p.cy + 2, p.hz - 1, 0xd8d0c0); v.put(p.hx, p.cy - 1, p.hz - 1, 0xd8d0c0); v.put(p.hx, p.cy + 1, p.hz - 1, 0xd8d0c0); };
  const hump = (v, p) => v.box(p.x0 + 2, p.cy, p.top, p.x0 + 3, p.cy, p.top + 1, 0xb89055);
  const mane = (v, p) => v.box(p.x1, p.cy, p.top, p.x1 + 1, p.cy, p.top + 1, 0x33241a);
  const P = penguin();
  M = {
    sheep: { f: two({ len: 4, wid: 3, hgt: 2, leg: 1, body: 0xf2efe6, legCol: 0x2a2a2e, head: 0x2a2a2e }), vs: 0.36 },
    deer: { f: two({ len: 5, wid: 2, hgt: 2, leg: 2, neck: 2, body: 0x9a6a40, tail: 0xf4f1e6, extra: antlers }), vs: 0.36 },
    horse: { f: two({ len: 6, wid: 2, hgt: 2, leg: 3, neck: 2, body: 0x7a4a2c, tail: 0x33241a, extra: mane }), vs: 0.36 },
    buffalo: { f: two({ len: 6, wid: 3, hgt: 3, leg: 2, body: 0x4a4a52, extra: horns }), vs: 0.36 },
    camel: { f: two({ len: 6, wid: 2, hgt: 2, leg: 3, neck: 3, body: 0xc9a56a, extra: hump }), vs: 0.36 },
    penguin: { f: [P, P], vs: 0.4 },
    whale: { f: [whale(0x47627f, 0xb9c8d6)], vs: 0.7 },
    glow: { f: [whale(0x3cbfae, 0xd9fff6)], vs: 0.7 },
    orca: { f: [orca()], vs: 0.55 },
    gull: { f: [bird(0, 0xf4f5f7, 0x6a6f7a), bird(1, 0xf4f5f7, 0x6a6f7a)], vs: 0.62 },
    crane: { f: [bird(0, 0xf4f5f7, 0x1c1e26), bird(1, 0xf4f5f7, 0x1c1e26)], vs: 0.72 },
  };
}

// Which animals live where.
const LAND = {
  temperate: ['sheep', 'deer'], tropical: ['deer'], desert: ['camel'], alpine: ['deer'], arctic: ['penguin'],
  loess: ['horse', 'buffalo'], guanzhong: ['horse', 'buffalo'], plain: ['buffalo', 'horse'], jiangnan: ['buffalo'],
};
const BIRDS = { temperate: 'gull', tropical: 'gull', arctic: 'gull', desert: 'gull', alpine: 'gull', volcanic: 'gull', loess: 'crane', guanzhong: 'crane', plain: 'crane', jiangnan: 'crane', alien: 'crane' };

function cellOf(gx, gy) {
  const w = world(), key = w.id + ':' + gx + ',' + gy;
  let c = cache.get(key);
  if (c !== undefined) return c;
  c = [];
  const x = (gx + 0.2 + hash2(gx, gy, 111) * 0.6) * CELL, y = (gy + 0.2 + hash2(gx, gy, 112) * 0.6) * CELL;
  const lvl = levelAt(x, y), b = biomeOf(x), h = hash2(gx, gy, 101), ph = hash2(gx, gy, 103) * 6.283;
  let nearStop = false;
  for (const s of w.stops) if (Math.abs(x - s.x) < 34 && Math.abs(y - s.y) < 22) nearStop = true; // keep the landing ground clear
  if (lvl === 0 && w.water) {
    const open = !levelAt(x + 12, y) && !levelAt(x - 12, y) && !levelAt(x, y + 12) && !levelAt(x, y - 12);
    if (open && h < 0.055) {
      const kind = b === 'alien' ? 'glow' : h < 0.025 ? 'whale' : 'orca';
      c.push({ type: 'sea', kind, n: kind === 'orca' ? 2 + Math.floor(hash2(gx, gy, 104) * 2) : 1, x, y, ph, head: hash2(gx, gy, 105) * 6.283 });
    }
  } else if (lvl >= 2 && lvl <= 3 && LAND[b] && !nearStop && h < 0.5) {
    const kinds = LAND[b];
    c.push({ type: 'herd', kind: kinds[Math.floor(hash2(gx, gy, 106) * kinds.length)], n: 3 + Math.floor(hash2(gx, gy, 107) * 4), x, y, ph, scare: 0, away: 0 });
  }
  if (BIRDS[b] && hash2(gx, gy, 102) < 0.34) {
    c.push({ type: 'flock', kind: BIRDS[b], n: 5 + Math.floor(hash2(gx, gy, 110) * 5), x, y, ph, alt: lvl * HZ + 2.5 + hash2(gx, gy, 108) * 3.5, dir: hash2(gx, gy, 109) < 0.5 ? 1 : -1 });
  }
  if (cache.size > 500) cache.clear();
  cache.set(key, c);
  return c;
}

let lastT = 0;
// Fills `out` with things to draw: { m (baked model), x, y, z, rot, vs, alpha, spout }.
// plane is used to scare herds: it needs x, y and alt.
export function animalsAround(cx, cy, radius, time, plane, out) {
  if (!M) build();
  out.length = 0;
  const dt = Math.min(0.1, Math.max(0, time - lastT));
  lastT = time;
  for (let gy = Math.floor((cy - radius) / CELL); gy <= Math.floor((cy + radius) / CELL); gy++)
    for (let gx = Math.floor((cx - radius) / CELL); gx <= Math.floor((cx + radius) / CELL); gx++) {
      for (const g of cellOf(gx, gy)) {
        const mod = M[g.kind];
        if (g.type === 'herd') {
          const d = Math.hypot(plane.x - g.x, plane.y - g.y);
          if (d < 30 && plane.alt < levelAt(g.x, g.y) * HZ + 14) { g.scare = Math.min(1, g.scare + dt * 2.5); g.away = Math.atan2(g.y - plane.y, g.x - plane.x); }
          else g.scare = Math.max(0, g.scare - dt * 0.2);
          const wx = g.x + Math.cos(time * 0.05 + g.ph) * 5 + Math.cos(g.away) * g.scare * 16;
          const wy = g.y + Math.sin(time * 0.05 + g.ph) * 5 + Math.sin(g.away) * g.scare * 16;
          const running = g.scare > 0.05 && g.scare < 0.98;
          for (let i = 0; i < g.n; i++) {
            const a = g.ph + i * 2.4, r = 2 + (i % 3) * 2.2;
            const x = wx + Math.cos(a) * r, y = wy + Math.sin(a) * r;
            const lv = levelAt(x, y);
            if (lv < 1) continue; // nobody walks on water
            out.push({
              m: mod.f[running ? Math.floor(time * 10 + i) % 2 : Math.floor(time * 1.5 + i * 0.7) % 2 && i % 2 ? 1 : 0],
              x, y, z: lv * HZ, rot: running ? g.away + Math.sin(i * 7) * 0.3 : g.ph + i * 1.3 + Math.sin(time * 0.1 + i) * 0.6, vs: mod.vs, alpha: 1,
            });
          }
        } else if (g.type === 'sea') {
          const fast = g.kind === 'orca' ? 2 : 1;
          for (let i = 0; i < g.n; i++) {
            const swing = time * 0.03 * fast + g.ph + i * 0.35;
            const along = Math.sin(swing) * 28, back = Math.cos(swing) < 0;
            const side = (i - (g.n - 1) / 2) * 7;
            const x = g.x + Math.cos(g.head) * along - Math.sin(g.head) * side, y = g.y + Math.sin(g.head) * along + Math.cos(g.head) * side;
            const breath = Math.sin(time * 0.45 * fast + g.ph + i * 1.9); // up for air, then under again
            const z = breath * 1.5 - 1.2;
            out.push({ m: mod.f[0], x, y, z, rot: g.head + (back ? Math.PI : 0), vs: mod.vs, alpha: Math.max(0.22, Math.min(1, 0.3 + (z + 1.6) * 0.75)), spout: g.kind !== 'orca' && breath > 0.86 });
          }
        } else {
          for (let i = 0; i < g.n; i++) { // a V of birds wheeling round
            const a = (time * 0.22 + g.ph) * g.dir - (Math.ceil(i / 2) * 0.16) * g.dir;
            const r = 16 + (i % 2 ? 1 : -1) * Math.ceil(i / 2) * 1.6;
            out.push({ m: mod.f[Math.floor(time * 5 + i * 0.6) % 2], x: g.x + Math.cos(a) * r, y: g.y + Math.sin(a) * r, z: g.alt, rot: a + (Math.PI / 2) * g.dir, vs: mod.vs, alpha: 1 });
          }
        }
      }
    }
  return out;
}
