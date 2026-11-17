// Drawing. Everything is a stack of flat sprites: for a point at world (x, y) and height z,
// the screen position is the rotated, vertically squashed (x, y) moved up the screen by z.

import { CH, CELL, HZ, TS, TP, getChunk, beginFrame, cloudsAround, biomeParams, levelAt, world } from './world.js';
import { hash2 } from './noise.js';
import { ROLL_STEPS } from './models.js';
import { animalsAround } from './wildlife.js';

export const V = {
  W: 320, H: 480,
  tilt: 0.62, elev: 0.75,
  camx: 0, camy: 0, rot: 0, zoom: 2.6, c: 1, s: 0, cx: 160, cy: 240,
};

// The picture is drawn at a whole-number fraction of the screen's real pixels and scaled up by CSS.
// V.q says how much finer that is than the original chunky look (1 = chunky), and sizes such as
// zoom and line widths follow it. `coarser` steps the resolution down on machines that cannot keep up.
let U = 1; // width of a "one pixel" detail at the current resolution
let coarser = 0;
export function resizeView(canvas) {
  const w = window.innerWidth, h = window.innerHeight, dpr = window.devicePixelRatio || 1;
  const base = w < h ? 290 : 400;
  const n = Math.max(1, Math.round((Math.min(w, h) * dpr) / (base * 2.2)) + coarser);
  V.W = canvas.width = Math.ceil((w * dpr) / n);
  V.H = canvas.height = Math.ceil((h * dpr) / n);
  V.q = Math.min(V.W, V.H) / base;
  U = Math.max(1, Math.round(V.q));
}
let slowT = 0;
// Call every frame with the frame time. Returns true if it lowered the resolution (the caller should resize).
export function watchSpeed(dt) {
  if (dt > 0.2 || document.hidden) return false; // a sleeping tab, not a slow machine
  slowT = dt > 0.03 ? slowT + dt : Math.max(0, slowT - dt * 2);
  if (slowT > 2.5 && coarser < 2) { coarser++; slowT = 0; return true; }
  return false;
}

// Point the camera at world (x, y), placing a subject flying at `alt` at screen fraction (ax, ay).
export function setCamera(x, y, alt, rot, zoom, ax, ay) {
  V.camx = x; V.camy = y; V.rot = rot; V.zoom = zoom;
  V.c = Math.cos(rot); V.s = Math.sin(rot);
  V.cx = V.W * ax;
  V.cy = V.H * ay + alt * zoom * V.elev;
}

const P = [0, 0];
export function project(x, y, z) {
  const dx = x - V.camx, dy = y - V.camy;
  P[0] = (V.c * dx - V.s * dy) * V.zoom + V.cx;
  P[1] = (V.s * dx + V.c * dy) * V.zoom * V.tilt + V.cy - z * V.zoom * V.elev;
  return P;
}
function unproject(px, py, out) {
  const u = (px - V.cx) / V.zoom, v = (py - V.cy) / (V.zoom * V.tilt);
  out[0] = V.camx + V.c * u + V.s * v;
  out[1] = V.camy - V.s * u + V.c * v;
}

// ---------- terrain ----------
const visible = [];
const bb = { x0: 0, y0: 0, x1: 0, y1: 0 };
const Q = [0, 0];
const CORNERS = [[0, 0], [1, 0], [0, 1], [1, 1]];
function drawTerrain(ctx, frame, time) {
  const zs = V.zoom * V.elev;
  const up = 12 * HZ * zs; // tall ground below the screen edge can still poke into view
  bb.x0 = bb.y0 = 1e9; bb.x1 = bb.y1 = -1e9;
  for (const [fx, fy] of CORNERS) {
    unproject(fx * V.W, fy * (V.H + up), Q);
    bb.x0 = Math.min(bb.x0, Q[0]); bb.x1 = Math.max(bb.x1, Q[0]);
    bb.y0 = Math.min(bb.y0, Q[1]); bb.y1 = Math.max(bb.y1, Q[1]);
  }
  const R = CH * 0.71 * V.zoom;
  visible.length = 0;
  let maxL = 0;
  for (let cy = Math.floor(bb.y0 / CH); cy <= Math.floor(bb.y1 / CH); cy++)
    for (let cx = Math.floor(bb.x0 / CH); cx <= Math.floor(bb.x1 / CH); cx++) {
      const p = project((cx + 0.5) * CH, (cy + 0.5) * CH, 0);
      if (p[0] < -R || p[0] > V.W + R || p[1] < -R || p[1] > V.H + R + up) continue;
      const ch = getChunk(cx, cy, frame);
      if (!ch) continue;
      project(cx * CH, cy * CH, 0);
      ch.px = P[0]; ch.py = P[1];
      visible.push(ch);
      if (ch.maxL > maxL) maxL = ch.maxL;
    }

  const zc = V.zoom * CELL; // a terrain tile pixel is one cell
  const a = V.c * zc, b = V.s * zc * V.tilt, c = -V.s * zc, d = V.c * zc * V.tilt;
  const sub = Math.max(1, Math.ceil((HZ * zs) / 3));
  for (let k = 0; k <= maxL; k++) {
    // every chunk's filler slices first, then every chunk's top, so a neighbour never paints over a finished top
    for (let s = 1; k > 0 && s < sub; s++) {
      for (let i = 0; i < visible.length; i++) {
        const ch = visible[i];
        if (ch.maxL < k) continue;
        ctx.setTransform(a, b, c, d, ch.px, ch.py - (k - 1 + s / sub) * HZ * zs);
        ctx.drawImage(ch.canvas, k * TP + 1, TP + 1, TS, TS, 0, 0, TS, TS);
      }
    }
    for (let i = 0; i < visible.length; i++) {
      const ch = visible[i];
      if (ch.maxL < k) continue;
      ctx.setTransform(a, b, c, d, ch.px, ch.py - k * HZ * zs);
      ctx.drawImage(ch.canvas, k * TP + 1, 1, TS, TS, 0, 0, TS, TS);
    }
    if (k === 0 && world().water) drawGlints(ctx, time);
  }
  ctx.setTransform(1, 0, 0, 1, 0, 0);
}

// Little flecks of light on the water. They give a sense of speed over open sea.
function drawGlints(ctx, time) {
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.fillStyle = 'rgba(255,255,255,0.45)';
  const G = 9;
  for (let gy = Math.floor(bb.y0 / G); gy <= Math.floor(bb.y1 / G); gy++)
    for (let gx = Math.floor(bb.x0 / G); gx <= Math.floor(bb.x1 / G); gx++) {
      const h = hash2(gx, gy, 3);
      if (h < 0.45 || ((time * 0.5 + h * 9) % 1) > 0.55) continue;
      const p = project((gx + hash2(gx, gy, 4)) * G, (gy + hash2(gx, gy, 5)) * G, 0);
      ctx.fillRect(p[0] | 0, p[1] | 0, 3 * U, U);
    }
}

// ---------- stacked sprites ----------
// Draws baked model `m` centred at world (wx, wy), its middle layer at height z, turned to `rot`.
// lean slides the upper layers back along the heading, which reads as the nose pitching up.
export function drawStack(ctx, m, wx, wy, z, rot, vs, lean = 0, maxSub = 9) {
  const ang = V.rot + rot, k = vs * V.zoom;
  const ca = Math.cos(ang) * k, sa = Math.sin(ang) * k;
  const p = project(wx, wy, 0), px = p[0], py = p[1];
  const step = k * V.elev;
  const sub = Math.min(maxSub, Math.max(1, Math.ceil(step / 1.6)));
  for (let i = 0; i < m.nz; i++) {
    for (let s = 0; s < sub; s++) {
      const h = i - m.cz + s / sub, sl = -h * lean;
      ctx.setTransform(ca, sa * V.tilt, -sa, ca * V.tilt, px + ca * sl, py + sa * V.tilt * sl - z * V.zoom * V.elev - h * step);
      ctx.drawImage(m.atlas, i * m.nx, 0, m.nx, m.ny, -m.nx / 2, -m.ny / 2, m.nx, m.ny);
    }
  }
}
function drawShadow(ctx, m, wx, wy, z, rot, vs, alpha) {
  const ang = V.rot + rot, k = vs * V.zoom;
  const ca = Math.cos(ang) * k, sa = Math.sin(ang) * k;
  const p = project(wx, wy, z);
  ctx.globalAlpha = alpha;
  ctx.setTransform(ca, sa * V.tilt, -sa, ca * V.tilt, p[0], p[1]);
  ctx.drawImage(m.sil, -m.nx / 2, -m.ny / 2);
  ctx.globalAlpha = 1;
}

// A point given in the aircraft's own frame (forward, right, up), in world units.
function planePoint(pl, fwd, right, upz) {
  const ch = Math.cos(pl.heading), sh = Math.sin(pl.heading);
  const cr = Math.cos(pl.rollShown), sr = Math.sin(pl.rollShown);
  const r2 = right * cr + upz * sr, u2 = -right * sr + upz * cr;
  return project(pl.x + ch * fwd - sh * r2, pl.y + sh * fwd + ch * r2, pl.alt + u2);
}

function drawPlane(ctx, pl, model, time) {
  const idx = Math.max(-ROLL_STEPS, Math.min(ROLL_STEPS, Math.round((pl.roll * model.rollK) / 0.1745)));
  pl.rollShown = idx * 0.1745;
  // wings beat faster and propellers blur more as the engine works harder
  const beat = model.fps * (0.45 + 0.75 * pl.throttle);
  const pose = model.fps && pl.propSpin > 0.05 ? Math.floor(pl.spin * beat * 0.05) % model.frames.length : 0;
  const m = model.frames[pose][idx + ROLL_STEPS];
  drawStack(ctx, m, pl.x, pl.y, pl.alt, pl.heading, model.vs, pl.lean || 0);
  if (pl.shield) { // heat shield: a shimmering bubble
    const q = project(pl.x, pl.y, pl.alt);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.strokeStyle = `rgba(140,240,255,${0.5 + 0.3 * Math.sin(time * 20)})`;
    ctx.lineWidth = 2 * U;
    ctx.beginPath(); ctx.ellipse(q[0], q[1], model.nx * model.vs * V.zoom * 0.62, model.nx * model.vs * V.zoom * 0.45, 0, 0, 6.283); ctx.stroke();
  }
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  const vs = model.vs, mx = (model.nx - 1) / 2, mz = (model.nz - 1) / 2;
  if (pl.propSpin > 0.02) {
    const fast = pl.throttle > 0.45;
    ctx.fillStyle = fast ? 'rgba(40,40,48,0.32)' : 'rgba(40,40,48,0.7)';
    for (const pr of model.props) {
      for (let b = 0; b < (fast ? 5 : 2); b++) { // slow: you can see the blades. fast: a smeared disc
        const a = pl.spin + b * (fast ? 0.63 : 1.57);
        for (let r = -pr.r; r <= pr.r; r += 0.8) {
          const p = planePoint(pl, (pr.x - mx) * vs, (pr.y + Math.cos(a) * r) * vs, (pr.z - mz + Math.sin(a) * r) * vs);
          ctx.fillRect(p[0] | 0, p[1] | 0, U, U);
        }
      }
    }
  }
  if (pl.propSpin > 0.1) {
    for (const j of model.jets) {
      const len = (1 + pl.throttle * pl.throttle * 13) * (pl.boosting ? 2 : 1) + Math.sin(time * 60) * (0.5 + pl.throttle);
      for (let i = 0; i < len; i++) {
        const w = i < len * 0.5 ? 1 : 0;
        const p = planePoint(pl, (j.x - mx - 1 - i) * vs, j.y * vs, (j.z - mz) * vs);
        ctx.fillStyle = i < len * 0.3 ? '#fff6c8' : i < len * 0.65 ? '#ffb347' : '#ff6a2a';
        ctx.fillRect((p[0] | 0) - w * U, (p[1] | 0) - w * U, (1 + w * 2) * U, (1 + w * 2) * U);
      }
    }
  }
}

function drawTrail(ctx, pl, time) {
  ctx.lineWidth = U;
  for (const tr of pl.trails) {
    for (let i = 1; i < tr.length; i++) {
      const a = tr[i - 1], b = tr[i];
      const age = time - b.t;
      if (age > 2.2 || a.cut || b.cut) continue;
      const p = project(a.x, a.y, a.z), x0 = p[0], y0 = p[1];
      project(b.x, b.y, b.z);
      ctx.strokeStyle = `rgba(255,255,255,${b.a * (1 - age / 2.2)})`;
      ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(P[0], P[1]); ctx.stroke();
    }
  }
}

// Streaks of air rushing past. They are fixed in the world, so the faster you go the longer they smear.
const motes = [];
function drawStreaks(ctx, pl, frac) {
  const alpha = Math.min(0.6, Math.max(0, (frac - 0.3) * 0.9));
  if (alpha <= 0.02) return;
  const ch = Math.cos(pl.heading), sh = Math.sin(pl.heading);
  while (motes.length < 26) motes.push({ x: 1e9, y: 0, z: 0 });
  const len = Math.min(60, pl.speed * 0.11);
  ctx.strokeStyle = `rgba(255,255,255,${alpha})`;
  ctx.lineWidth = U;
  ctx.beginPath();
  for (const m of motes) {
    const dx = m.x - pl.x, dy = m.y - pl.y;
    const ahead = dx * ch + dy * sh;
    if (ahead < -50 || ahead > 110 || Math.abs(dy * ch - dx * sh) > 70) { // behind or far off: put it back in front
      const f = 40 + Math.random() * 70, s = (Math.random() - 0.5) * 120;
      m.x = pl.x + ch * f - sh * s; m.y = pl.y + sh * f + ch * s; m.z = pl.alt + (Math.random() - 0.5) * 10;
    }
    const p = project(m.x, m.y, m.z), x0 = p[0], y0 = p[1];
    project(m.x + ch * len, m.y + sh * len, m.z);
    ctx.moveTo(x0, y0); ctx.lineTo(P[0], P[1]);
  }
  ctx.stroke();
}

// Things to aim for: the job marker (a ring on the ground with a beam) and the sparks to collect.
function drawMarks(ctx, marks, time, scenery) {
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  const diamond = (x, y, s) => { ctx.beginPath(); ctx.moveTo(x, y - s); ctx.lineTo(x + s, y); ctx.lineTo(x, y + s); ctx.lineTo(x - s, y); ctx.fill(); };
  for (const k of marks) {
    if (k.kind === 'portal') { // the door home: a tall glowing oval with light turning inside it
      const g = project(k.x, k.y, k.gz), gx = g[0], gy = g[1];
      const p = project(k.x, k.y, k.z), w = 4.5 * V.zoom, h = 8 * V.zoom * V.elev;
      ctx.strokeStyle = 'rgba(143,246,255,0.25)'; ctx.lineWidth = 2 * U;
      ctx.beginPath(); ctx.moveTo(gx, gy); ctx.lineTo(p[0], p[1] + h); ctx.stroke();
      const gr = ctx.createRadialGradient(p[0], p[1], 0, p[0], p[1], h);
      gr.addColorStop(0, 'rgba(255,255,255,0.95)'); gr.addColorStop(0.45, 'rgba(143,246,255,0.75)'); gr.addColorStop(1, 'rgba(60,120,255,0.1)');
      ctx.fillStyle = gr;
      ctx.beginPath(); ctx.ellipse(p[0], p[1], w, h, 0, 0, 6.283); ctx.fill();
      ctx.strokeStyle = '#d9a441'; ctx.lineWidth = 3 * U; ctx.stroke(); // brass frame
      ctx.fillStyle = '#ffffff';
      for (let i = 0; i < 14; i++) { const a = time * 2.4 + i * 0.9, q = ((i * 0.071 + time * 0.25) % 1); ctx.fillRect(p[0] + Math.cos(a) * w * q, p[1] + Math.sin(a) * h * q, 2 * U, 2 * U); }
      continue;
    }
    if (k.kind === 'drop') { // a parcel under a little parachute
      const p = project(k.x, k.y, k.z), s = 2 * U;
      if (k.z > k.gz + 0.2) { ctx.fillStyle = '#f4f1e6'; ctx.beginPath(); ctx.arc(p[0], p[1] - 4 * U, 4 * U, Math.PI, 0); ctx.fill(); }
      ctx.fillStyle = '#8a5a34'; ctx.fillRect(p[0] - s, p[1] - s, s * 2, s * 2);
      continue;
    }
    if (k.kind === 'task') {
      if (k.prop) {
        const mk = scenery.marks[k.prop];
        drawStack(ctx, mk.m, k.x, k.y, k.gz + (mk.m.nz / 2) * mk.vs + (k.prop === 'boat' || k.prop === 'buoy' ? Math.sin(time * 2) * 0.15 : 0), 0.5, mk.vs);
        ctx.setTransform(1, 0, 0, 1, 0, 0);
      }
      if (k.done) continue;
      const col = k.col || '255,214,74';
      ctx.lineWidth = 2 * U; ctx.strokeStyle = `rgba(${col},0.9)`;
      ctx.beginPath();
      for (let i = 0; i < 32; i += 2) {
        const a0 = (i / 32) * 6.283 + time * 0.3, a1 = ((i + 1) / 32) * 6.283 + time * 0.3;
        let p = project(k.x + Math.cos(a0) * k.r, k.y + Math.sin(a0) * k.r, k.gz); ctx.moveTo(p[0], p[1]);
        p = project(k.x + Math.cos(a1) * k.r, k.y + Math.sin(a1) * k.r, k.gz); ctx.lineTo(p[0], p[1]);
      }
      ctx.stroke();
      let p = project(k.x, k.y, k.gz);
      const x0 = p[0], y0 = p[1];
      p = project(k.x, k.y, k.gz + 40);
      ctx.strokeStyle = `rgba(${col},0.35)`; ctx.lineWidth = 3 * U;
      ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(p[0], p[1]); ctx.stroke();
      ctx.fillStyle = `rgb(${col})`; diamond(p[0], p[1], (4 + Math.sin(time * 4)) * U);
    } else {
      const g = project(k.x, k.y, k.gz), gx = g[0], gy = g[1];
      const p = project(k.x, k.y, k.z + Math.sin(time * 3 + k.x) * 0.6);
      ctx.fillStyle = 'rgba(0,0,0,0.25)'; ctx.fillRect(gx - U, gy, 3 * U, U);
      ctx.strokeStyle = 'rgba(255,240,170,0.16)'; ctx.lineWidth = U;
      ctx.beginPath(); ctx.moveTo(gx, gy); ctx.lineTo(p[0], p[1]); ctx.stroke();
      ctx.fillStyle = '#ffe98a'; diamond(p[0], p[1], (3 + Math.sin(time * 6 + k.y) * 0.9) * U);
      ctx.fillStyle = '#ffffff'; ctx.fillRect(p[0] - U / 2, p[1] - U / 2, U, U);
    }
  }
}

// Short-lived effects: foam, ripples, spray, dust, sparks, smoke. `under` ones lie on the surface below the aircraft.
function drawFx(ctx, fx, under) {
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  for (const f of fx) {
    if (!!f.under !== under) continue;
    const a = Math.max(0, 1 - f.age / f.life), p = project(f.x, f.y, f.z);
    if (f.kind === 'ring') { // a ripple spreading on the water
      const rad = f.size * (0.25 + f.age / f.life) * V.zoom;
      ctx.strokeStyle = `rgba(255,255,255,${a * 0.6})`; ctx.lineWidth = U;
      ctx.beginPath(); ctx.ellipse(p[0], p[1], rad, rad * V.tilt, 0, 0, 6.283); ctx.stroke();
    } else {
      const s = f.size * U * (1 + f.age * (f.grow || 0));
      ctx.fillStyle = `rgba(${f.col},${a * (f.alpha || 1)})`;
      ctx.fillRect(p[0] - s / 2, p[1] - s / 2, s, s);
    }
  }
}

const cloudList = [], beasts = [];
const far = (c) => V.s * (c.wx - V.camx) + V.c * (c.wy - V.camy); // depth down the screen
const SLOTS = [[6, -18], [-10, -14]]; // where a stop's two buildings stand, relative to the landing ground

// scene: { time, frame, plane, model, scenery, puffs, inStorm, showPlane, sky, skyH, dark, speedFrac }
export function drawScene(ctx, scene) {
  const { time, frame, plane: pl, model, scenery } = scene;
  const w = world();
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.imageSmoothingEnabled = false;
  const deep = biomeParams(V.camx).deep;
  ctx.fillStyle = `rgb(${deep[0] | 0},${deep[1] | 0},${deep[2] | 0})`;
  ctx.fillRect(0, 0, V.W, V.H);

  beginFrame(scene.budget || 2);
  drawTerrain(ctx, frame, time);

  // buildings at each stop
  for (const s of w.stops) {
    if (Math.abs(s.x - V.camx) > 400 || Math.abs(s.y - V.camy) > 500) continue;
    (s.marks || []).forEach((name, i) => {
      const mk = scenery.marks[name];
      const at = s.slots ? s.slots[i] : SLOTS[i];
      drawStack(ctx, mk.m, s.x + at[0], s.y + at[1], 2 * HZ + (mk.m.nz / 2) * mk.vs, 0, mk.vs);
    });
  }

  const reach = Math.hypot(V.W, V.H / V.tilt) / V.zoom * 0.6 + 60;
  // wildlife: herds, flocks, whales
  animalsAround(V.camx, V.camy, reach * 0.85, time, pl, beasts);
  for (const e of beasts) {
    ctx.globalAlpha = e.alpha;
    drawStack(ctx, e.m, e.x, e.y, e.z + e.m.cz * e.vs, e.rot, e.vs);
    if (e.spout) { // a whale blowing
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.globalAlpha = 0.85;
      ctx.fillStyle = '#ffffff';
      for (let k = 0; k < 6; k++) {
        const p = project(e.x + Math.cos(e.rot) * 5, e.y + Math.sin(e.rot) * 5, 1.5 + k * 1.1);
        ctx.fillRect((p[0] | 0) + (((k * 7) % 5) - 2) * U, p[1] | 0, 2 * U, 2 * U);
      }
    }
  }
  ctx.globalAlpha = 1;
  ctx.setTransform(1, 0, 0, 1, 0, 0);

  cloudsAround(V.camx, V.camy, reach, time, cloudList);
  cloudList.sort((a, b) => far(a) - far(b));
  const setOf = (c) => scenery.clouds[w.clouds[c.storm ? 1 : 0]];

  // shadows on the ground
  for (const c of cloudList) {
    const set = setOf(c);
    drawShadow(ctx, set[c.variant % set.length], c.wx + 6, c.wy + 4, 0, c.rot, c.vs / 2, c.storm ? 0.3 : 0.16);
  }
  if (scene.showPlane && !scene.wrecked) {
    const ground = levelAt(pl.x, pl.y) * HZ;
    drawShadow(ctx, model.rolls[ROLL_STEPS], pl.x + (pl.alt - ground) * 0.25, pl.y + (pl.alt - ground) * 0.15, ground, pl.heading, model.vs, 0.3);
  }
  ctx.setTransform(1, 0, 0, 1, 0, 0);

  const drawCloud = (c, above) => {
    const set = setOf(c);
    const m = set[c.variant % set.length];
    const near = Math.hypot(c.wx - pl.x, c.wy - pl.y) < c.rad * 1.5;
    ctx.globalAlpha = above && near ? 0.45 : c.storm ? 0.96 : 0.9;
    drawStack(ctx, m, c.wx, c.wy, c.alt + (m.cz * c.vs) / 2, c.rot, c.vs / 2, 0, 2);
    ctx.globalAlpha = 1;
  };
  for (const c of cloudList) if (!scene.showPlane || c.alt <= pl.alt) drawCloud(c, false);
  ctx.setTransform(1, 0, 0, 1, 0, 0);

  if (scene.fx && scene.fx.length) drawFx(ctx, scene.fx, true);
  if (scene.marks && scene.marks.length) drawMarks(ctx, scene.marks, time, scenery);
  drawStreaks(ctx, pl, scene.speedFrac || 0);
  if (scene.showPlane) {
    drawTrail(ctx, pl, time);
    for (const pf of scene.puffs) {
      const p = project(pf.x, pf.y, pf.z);
      const s = (1 + pf.age * 3.5) * U;
      ctx.fillStyle = `rgba(${pf.dark ? '40,40,46' : '255,180,80'},${Math.max(0, 0.6 - pf.age * 0.5)})`;
      ctx.fillRect(p[0] - s / 2, p[1] - s / 2, s, s);
    }
    // the pilot, out of the aircraft: drawn behind or in front of it depending on where they stand
    const who = scene.pilot;
    const drawWho = () => { drawStack(ctx, scenery.pilot[who.pose], who.x, who.y, who.z + scenery.pilot[0].cz * 0.34, who.rot, 0.34); ctx.setTransform(1, 0, 0, 1, 0, 0); };
    const inFront = who && (who.onTop || V.s * (who.x - pl.x) + V.c * (who.y - pl.y) > 0);
    if (who && !inFront) drawWho();
    if (!scene.wrecked) drawPlane(ctx, pl, model, time); // blown to pieces: only the fire and the bits are left
    if (who && inFront) drawWho();
    if (scene.fx && scene.fx.length) drawFx(ctx, scene.fx, false);
    for (const c of cloudList) if (c.alt > pl.alt) drawCloud(c, true);
  }
  ctx.setTransform(1, 0, 0, 1, 0, 0);

  if (scene.sky > 0.01) { // horizon haze at the top of the screen; it turns to black space at great height
    const d = scene.dark, hgt = V.H * scene.skyH, a = scene.sky;
    const r = w.sky[0] * (1 - d) + 4 * d, g = w.sky[1] * (1 - d) + 6 * d, b = w.sky[2] * (1 - d) + 22 * d;
    const gr = ctx.createLinearGradient(0, 0, 0, hgt);
    gr.addColorStop(0, `rgba(${r | 0},${g | 0},${b | 0},${a})`);
    gr.addColorStop(0.5, `rgba(${r | 0},${g | 0},${b | 0},${a * 0.8})`);
    gr.addColorStop(1, `rgba(${Math.min(255, r + 70) | 0},${Math.min(255, g + 45) | 0},${Math.min(255, b + 15) | 0},0)`);
    ctx.fillStyle = gr;
    ctx.fillRect(0, 0, V.W, hgt);
    if (d > 0.05) {
      for (let i = 0; i < 60; i++) {
        const tw = 0.5 + 0.5 * Math.sin(time * 2 + i * 1.7);
        ctx.fillStyle = `rgba(255,255,255,${d * a * (0.4 + 0.6 * tw)})`;
        ctx.fillRect((hash2(i, 1, 77) * V.W) | 0, (hash2(i, 2, 77) * hgt * 0.62) | 0, U, U);
      }
    }
  }

  if (scene.inStorm) { // rain, or blowing dust
    const dusty = w.id === 'mars';
    ctx.lineWidth = U;
    ctx.strokeStyle = dusty ? 'rgba(240,200,150,0.4)' : 'rgba(200,215,255,0.35)';
    ctx.beginPath();
    for (let i = 0; i < 60; i++) {
      const x = ((hash2(i, frame >> 1, 9) * 1.3 - 0.15) * V.W) | 0, y = (hash2(i, frame >> 1, 10) * V.H) | 0;
      ctx.moveTo(x, y); ctx.lineTo(x - (dusty ? 12 : 4) * U, y + (dusty ? 2 : 10) * U);
    }
    ctx.stroke();
    ctx.fillStyle = dusty ? 'rgba(120,60,30,0.25)' : 'rgba(20,24,44,0.22)';
    ctx.fillRect(0, 0, V.W, V.H);
  }
}

// Bearing to a world point as seen on screen (0 = straight up the screen), for the nav arrow.
export function screenBearing(fromX, fromY, toX, toY) {
  const dx = toX - fromX, dy = toY - fromY;
  const sx = V.c * dx - V.s * dy, sy = V.s * dx + V.c * dy;
  return Math.atan2(sx, -sy);
}
export function cloudsNow() { return cloudList; }
