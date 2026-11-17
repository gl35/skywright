// The world: an endless procedural heightmap cut into chunks, plus clouds.
// Each chunk is baked into one atlas holding a flat image per height level,
// so the terrain is drawn as a sprite stack just like the aircraft.
// There are several worlds (Earth, four dynasties, the Moon, Mars, a far shore);
// one is current at a time and switching throws the cached chunks away.

import { fbm, vnoise, hash2, smoothstep, lerp } from './noise.js';
import { WORLDS, BIOMES } from './data.js';

export const CELL = 0.5; // world size of one terrain cell: smaller is finer
export const CH = 48; // world size of a chunk
const NC = CH / CELL; // cells per chunk side
export const NL = 12; // height levels 0..11 (0 = water, or dry low ground)
export const HZ = 2.2; // world height of one level
export const TS = NC + 1; // tile size in a chunk atlas (one cell of overlap with the next chunk)
export const TP = TS + 2; // tile pitch: a clear 1px gutter round each tile stops colours bleeding between tiles

let cur = WORLDS.earth;
// chain: the stops along the route, which set the biomes. ships: carriers, each a deck alone in open sea.
let chain = cur.stops.filter((s) => !s.carrier), ships = cur.stops.filter((s) => s.carrier);
const onDeck = (dx, dy) => Math.abs(dx) <= 34 && Math.abs(dy) <= (dx > 24 ? 7 - (dx - 24) * 0.45 : 7); // pointed at the bow
const chunks = new Map();
const cloudCells = new Map();
export const world = () => cur;
export function setWorld(id) {
  if (cur.id === id) return;
  cur = WORLDS[id];
  chain = cur.stops.filter((s) => !s.carrier); ships = cur.stops.filter((s) => s.carrier);
  chunks.clear(); cloudCells.clear();
}

// ---------- biomes ----------
let mA, mB, mT; // result of the last mix() call (avoids allocating per cell)
function mix(x) {
  const S = chain, n = S.length;
  if (x <= S[0].x) { mA = mB = BIOMES[S[0].biome]; mT = 0; return; }
  for (let i = 0; i < n - 1; i++) {
    if (x < S[i + 1].x) {
      mA = BIOMES[S[i].biome]; mB = BIOMES[S[i + 1].biome];
      mT = smoothstep(0.3, 0.7, (x - S[i].x) / (S[i + 1].x - S[i].x));
      return;
    }
  }
  mA = mB = BIOMES[S[n - 1].biome]; mT = 0;
}
export function biomeParams(x) {
  mix(x);
  return {
    cloud: lerp(mA.cloud, mB.cloud, mT),
    storm: lerp(mA.storm, mB.storm, mT),
    deep: mT < 0.5 ? mA.pal.water[0] : mB.pal.water[0],
  };
}

// The id of the biome at this x (whichever of the two blending biomes is stronger).
export function biomeOf(x) { mix(x); return (mT < 0.5 ? mA : mB).id; }

// ---------- height ----------
let outV, outHs;
function terrain(x, y, stops) {
  mix(x);
  outHs = lerp(mA.hs, mB.hs, mT);
  const seed = cur.seed;
  let v = fbm(x / 70, y / 70, seed, 5) * 0.65 + vnoise(x / 260 + 31.7, y / 260 - 12.3, seed + 99) * 0.35 - lerp(mA.sea, mB.sea, mT);
  for (let i = 0; i < stops.length; i++) {
    const s = stops[i];
    if (s.carrier) continue;
    const dx = (x - s.x) * 0.7, dy = y - s.y;
    const d2 = dx * dx + dy * dy;
    if (d2 < 8100) v += (1.5 / outHs - v) * smoothstep(90, 40, Math.sqrt(d2)); // flat ground under each landing place
  }
  for (let i = 0; i < ships.length; i++) {
    const dx = x - ships[i].x, dy = y - ships[i].y, d2 = dx * dx + dy * dy;
    if (d2 > 18490000) continue;
    v = lerp(v, Math.min(v, -0.09), smoothstep(4300, 3900, Math.sqrt(d2))); // nothing but sea for a long way round
    if (onDeck(dx, dy)) v = 1.5 / outHs; // the flight deck, at the height of any other landing ground
  }
  outV = v;
}
const toLevel = (v, hs) => (v > 0 ? Math.min(NL - 1, 1 + Math.floor(v * hs)) : 0);

export function levelAt(x, y) {
  terrain(Math.floor(x / CELL) * CELL, Math.floor(y / CELL) * CELL, cur.stops);
  return toLevel(outV, outHs);
}

// Which stop's landing ground is this point on, or -1.
export function airfieldAt(x, y) {
  const S = cur.stops;
  for (let i = 0; i < S.length; i++) if (Math.abs(x - S[i].x) < 30 && Math.abs(y - S[i].y) < 10) return i;
  return -1;
}

// ---------- chunks ----------
let genBudget = 0;
export function beginFrame(budget) { genBudget = budget; }

function genChunk(cx, cy) {
  const N = NC + 3; // one border cell before, two after: tiles carry one extra row/column so neighbours overlap
  const lv = new Uint8Array(N * N), vv = new Float32Array(N * N);
  const x0 = cx * CH - CELL, y0 = cy * CH - CELL; // world position of the first (border) cell
  const gx0 = cx * NC - 1, gy0 = cy * NC - 1; // and its whole-number cell index, for the speckle pattern
  const mx = cx * CH + CH / 2, my = cy * CH + CH / 2;
  const near = cur.stops.filter((s) => Math.abs(s.x - mx) < 165 && Math.abs(s.y - my) < 125);
  for (let iy = 0; iy < N; iy++)
    for (let ix = 0; ix < N; ix++) {
      terrain(x0 + ix * CELL, y0 + iy * CELL, near);
      vv[ix + iy * N] = outV;
      lv[ix + iy * N] = toLevel(outV, outHs);
    }
  let maxL = 0;
  for (let i = 0; i < lv.length; i++) if (lv[i] > maxL) maxL = lv[i];

  const W = TP * (maxL + 1); // only as many level tiles as this chunk has
  const canvas = document.createElement('canvas');
  canvas.width = W; canvas.height = TP * 2;
  const ctx = canvas.getContext('2d');
  const img = ctx.createImageData(W, TP * 2);
  const D = img.data;
  const land = new Float32Array(NL * 3), side = new Float32Array(NL * 3), water = new Float32Array(12);
  const pad = cur.pad;

  for (let ix = 0; ix < TS; ix++) {
    const x = x0 + (1 + ix) * CELL;
    mix(x);
    for (let k = 0; k < NL; k++)
      for (let c = 0; c < 3; c++) {
        land[k * 3 + c] = lerp(mA.pal.land[k][c], mB.pal.land[k][c], mT);
        side[k * 3 + c] = lerp(mA.pal.side[k][c], mB.pal.side[k][c], mT);
      }
    for (let k = 0; k < 4; k++) for (let c = 0; c < 3; c++) water[k * 3 + c] = lerp(mA.pal.water[k][c], mB.pal.water[k][c], mT);
    const trees = (mT < 0.5 ? mA : mB).trees;

    for (let iy = 0; iy < TS; iy++) {
      const y = y0 + (1 + iy) * CELL;
      const i = ix + 1 + (iy + 1) * N;
      const L = lv[i];
      const h = hash2(gx0 + 1 + ix, gy0 + 1 + iy, 7);
      let r, g, b, steel = false;
      for (let s = 0; s < near.length; s++) if (near[s].carrier && onDeck(x - near[s].x, y - near[s].y)) steel = true;
      if (L === 0) {
        const depth = -vv[i] + (h - 0.5) * 0.006;
        const shore = lv[i - 1] || lv[i + 1] || lv[i - N] || lv[i + N];
        const w = shore ? 3 : depth < 0.03 ? 2 : depth < 0.075 ? 1 : 0;
        const f = cur.water ? 1 : 0.94 + 0.12 * h; // dry basins get a little grain
        r = water[w * 3] * f; g = water[w * 3 + 1] * f; b = water[w * 3 + 2] * f;
      } else {
        let f = 0.95 + 0.1 * h;
        if (lv[i - 1] > L || lv[i - N] > L) f *= 0.8; // in the shade of higher ground
        else if (lv[i + 1] < L || lv[i + N] < L) f *= 1.07; // sunlit edge
        if (trees && (L === 4 || L === 5) && h > 0.7) f *= 0.76;
        r = land[L * 3] * f; g = land[L * 3 + 1] * f; b = land[L * 3 + 2] * f;
        if (steel) { r = g = 96 * f; b = 104 * f; }
        if (L === 2) {
          for (let s = 0; s < near.length; s++) { // paint the landing ground
            const dx = x - near[s].x, dy = y - near[s].y;
            const onStrip = Math.abs(dx) <= 22 && Math.abs(dy) <= 2;
            const onApron = !steel && dx >= -12 && dx <= 10 && dy >= -13 && dy <= -3;
            if (pad === 'runway') {
              if (onStrip) { const mark = Math.abs(dx) >= 21 || (dy >= -0.5 && dy <= 0 && ((Math.floor(dx) + 24) & 3) < 2); r = g = b = mark ? 222 : 84 + h * 10; b += 4; }
              else if (onApron) { r = 158 + h * 8; g = 160 + h * 8; b = 156 + h * 8; }
            } else if (pad === 'plaza') { // flagstones with a darker border
              if (Math.abs(dx) <= 22 && Math.abs(dy) <= 4) {
                const edge = Math.abs(dx) >= 21.5 || Math.abs(dy) >= 3.5, joint = (Math.floor(dx * 2) & 7) === 0 || (Math.floor(dy * 2) & 7) === 0;
                const t = edge ? 120 : joint ? 168 : 190 + h * 14;
                r = t + 6; g = t; b = t - 12;
              } else if (onApron) { r = 150 + h * 10; g = 132 + h * 10; b = 104 + h * 8; }
            } else if (Math.abs(dx) <= 22 && Math.abs(dy) <= 4) { // 'pad': dark ground with a yellow outline and centre ring
              const d = Math.hypot(dx, dy * 2.5);
              const mark = Math.abs(dx) >= 21.5 || Math.abs(dy) >= 3.5 || (d > 7 && d < 9);
              if (mark) { r = 232; g = 190; b = 60; } else { r = g = b = 58 + h * 10; }
            }
          }
        }
      }
      // level 0 is the whole base; land columns appear in every layer up to their height
      for (let k = 0; k <= L; k++) {
        const o = ((iy + 1) * W + k * TP + 1 + ix) * 4;
        if (k === L) { D[o] = r; D[o + 1] = g; D[o + 2] = b; }
        else if (steel) { D[o] = 62; D[o + 1] = 66; D[o + 2] = 74; }
        else { D[o] = side[k * 3]; D[o + 1] = side[k * 3 + 1]; D[o + 2] = side[k * 3 + 2]; }
        D[o + 3] = 255;
        if (k > 0) { // "side" row, used to fill the gaps between layers
          const o2 = ((iy + 1 + TP) * W + k * TP + 1 + ix) * 4;
          D[o2] = steel ? 62 : side[k * 3]; D[o2 + 1] = steel ? 66 : side[k * 3 + 1]; D[o2 + 2] = steel ? 74 : side[k * 3 + 2]; D[o2 + 3] = 255;
        }
      }
    }
  }
  ctx.putImageData(img, 0, 0);
  return { cx, cy, canvas, maxL, used: 0, px: 0, py: 0 };
}

export function getChunk(cx, cy, frame) {
  const key = cx + ',' + cy;
  let ch = chunks.get(key);
  if (!ch) {
    if (genBudget <= 0) return null;
    genBudget--;
    ch = genChunk(cx, cy);
    chunks.set(key, ch);
    if (chunks.size > 150) { // drop the chunks we have not drawn for longest
      const old = [...chunks.entries()].sort((a, b) => a[1].used - b[1].used).slice(0, 60);
      for (const [k] of old) chunks.delete(k);
    }
  }
  ch.used = frame;
  return ch;
}

// ---------- clouds ----------
const CG = 96;
function cellClouds(gx, gy) {
  const key = gx + ',' + gy;
  let list = cloudCells.get(key);
  if (list) return list;
  list = [];
  if (cur.clouds) {
    const bx = gx * CG, by = gy * CG;
    const p = biomeParams(bx + CG / 2);
    const stormy = vnoise(gx / 2.5 + 5.1, gy / 2.5 - 3.3, cur.seed + 7) > 1 - p.storm;
    const n = stormy ? 2 : (hash2(gx, gy, 21) < p.cloud ? 1 : 0) + (hash2(gx, gy, 22) < p.cloud * 0.4 ? 1 : 0);
    for (let k = 0; k < n; k++) {
      const x = bx + hash2(gx, gy, 30 + k) * CG, y = by + hash2(gx, gy, 40 + k) * CG;
      let storm = stormy && hash2(gx, gy, 50 + k) > 0.25;
      for (const s of cur.stops) if (Math.abs(x - s.x) < 240 && Math.abs(y - s.y) < 240) storm = false; // calm air near landing grounds
      const variant = Math.floor(hash2(gx, gy, 60 + k) * 100);
      list.push(storm
        ? { x, y, storm, variant, vs: 2, alt: 12, top: 30, rad: 26, rot: hash2(gx, gy, 70 + k) * 6.28 }
        : { x, y, storm, variant, vs: 0.9 + hash2(gx, gy, 80 + k) * 0.7, alt: 13 + hash2(gx, gy, 90 + k) * 12, top: 0, rad: 12, rot: hash2(gx, gy, 70 + k) * 6.28 });
    }
  }
  if (cloudCells.size > 600) cloudCells.clear();
  cloudCells.set(key, list);
  return list;
}

// Clouds within `radius` of (x, y). The whole cloud field drifts slowly with the wind.
export function cloudsAround(x, y, radius, time, out) {
  out.length = 0;
  const wx = time * 0.9, wy = time * 0.35;
  const qx = x - wx, qy = y - wy;
  const g0x = Math.floor((qx - radius) / CG), g1x = Math.floor((qx + radius) / CG);
  const g0y = Math.floor((qy - radius) / CG), g1y = Math.floor((qy + radius) / CG);
  for (let gy = g0y; gy <= g1y; gy++)
    for (let gx = g0x; gx <= g1x; gx++) {
      const list = cellClouds(gx, gy);
      for (let i = 0; i < list.length; i++) {
        const c = list[i];
        c.wx = c.x + wx; c.wy = c.y + wy;
        out.push(c);
      }
    }
  return out;
}
