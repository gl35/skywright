// Drawing. Everything is a stack of flat sprites: for a point at world (x, y) and height z,
// the screen position is the rotated, vertically squashed (x, y) moved up the screen by z.

import { CH, HZ, TS, TP, getChunk, beginFrame, cloudsAround, biomeParams, levelAt, world } from './world.js';
import { hash2 } from './noise.js';
import { ROLL_STEPS } from './models.js';

export const V = {
  W: 320, H: 480,
  tilt: 0.62, elev: 0.75,
  camx: 0, camy: 0, rot: 0, zoom: 2.6, c: 1, s: 0, cx: 160, cy: 240,
};

// Draw at a reduced resolution and let CSS scale it up: chunky pixels, and far fewer to fill.
// The size is a whole-number fraction of the screen's real pixels so every game pixel is the same size.
export function resizeView(canvas) {
  const w = window.innerWidth, h = window.innerHeight, dpr = window.devicePixelRatio || 1;
  const n = Math.max(1, Math.round((Math.min(w, h) * dpr) / (w < h ? 290 : 400)));
  V.W = canvas.width = Math.ceil((w * dpr) / n);
  V.H = canvas.height = Math.ceil((h * dpr) / n);
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

  const a = V.c * V.zoom, b = V.s * V.zoom * V.tilt, c = -V.s * V.zoom, d = V.c * V.zoom * V.tilt;
  const sub = Math.max(1, Math.ceil((HZ * zs) / 2.4));
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
      ctx.fillRect(p[0] | 0, p[1] | 0, 3, 1);
    }
}

// ---------- stacked sprites ----------
// Draws baked model `m` centred at world (wx, wy), its middle layer at height z, turned to `rot`.
// lean slides the upper layers back along the heading, which reads as the nose pitching up.
export function drawStack(ctx, m, wx, wy, z, rot, vs, lean = 0) {
  const ang = V.rot + rot, k = vs * V.zoom;
  const ca = Math.cos(ang) * k, sa = Math.sin(ang) * k;
  const p = project(wx, wy, 0), px = p[0], py = p[1];
  const step = k * V.elev;
  const sub = Math.max(1, Math.ceil(step / 1.6));
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
          ctx.fillRect(p[0] | 0, p[1] | 0, 1, 1);
        }
      }
    }
  }
  if (pl.propSpin > 0.1) {
    for (const j of model.jets) {
      const len = 1 + pl.throttle * pl.throttle * 13 + Math.sin(time * 60) * (0.5 + pl.throttle);
      for (let i = 0; i < len; i++) {
        const w = i < len * 0.5 ? 1 : 0;
        const p = planePoint(pl, (j.x - mx - 1 - i) * vs, j.y * vs, (j.z - mz) * vs);
        ctx.fillStyle = i < len * 0.3 ? '#fff6c8' : i < len * 0.65 ? '#ffb347' : '#ff6a2a';
        ctx.fillRect((p[0] | 0) - w, (p[1] | 0) - w, 1 + w * 2, 1 + w * 2);
      }
    }
  }
}

function drawTrail(ctx, pl, time) {
  ctx.lineWidth = 1;
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
  ctx.lineWidth = 1;
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

const cloudList = [];
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
      drawStack(ctx, mk.m, s.x + SLOTS[i][0], s.y + SLOTS[i][1], 2 * HZ + (mk.m.nz / 2) * mk.vs, 0, mk.vs);
    });
  }

  const reach = Math.hypot(V.W, V.H / V.tilt) / V.zoom * 0.6 + 60;
  cloudsAround(V.camx, V.camy, reach, time, cloudList);
  cloudList.sort((a, b) => far(a) - far(b));
  const setOf = (c) => scenery.clouds[w.clouds[c.storm ? 1 : 0]];

  // shadows on the ground
  for (const c of cloudList) {
    const set = setOf(c);
    drawShadow(ctx, set[c.variant % set.length], c.wx + 6, c.wy + 4, 0, c.rot, c.vs, c.storm ? 0.3 : 0.16);
  }
  if (scene.showPlane) {
    const ground = levelAt(pl.x, pl.y) * HZ;
    drawShadow(ctx, model.rolls[ROLL_STEPS], pl.x + (pl.alt - ground) * 0.25, pl.y + (pl.alt - ground) * 0.15, ground, pl.heading, model.vs, 0.3);
  }
  ctx.setTransform(1, 0, 0, 1, 0, 0);

  const drawCloud = (c, above) => {
    const set = setOf(c);
    const m = set[c.variant % set.length];
    const near = Math.hypot(c.wx - pl.x, c.wy - pl.y) < c.rad * 1.5;
    ctx.globalAlpha = above && near ? 0.45 : c.storm ? 0.96 : 0.9;
    drawStack(ctx, m, c.wx, c.wy, c.alt + m.cz * c.vs, c.rot, c.vs);
    ctx.globalAlpha = 1;
  };
  for (const c of cloudList) if (!scene.showPlane || c.alt <= pl.alt) drawCloud(c, false);
  ctx.setTransform(1, 0, 0, 1, 0, 0);

  drawStreaks(ctx, pl, scene.speedFrac || 0);
  if (scene.showPlane) {
    drawTrail(ctx, pl, time);
    for (const pf of scene.puffs) {
      const p = project(pf.x, pf.y, pf.z);
      const s = 1 + pf.age * 3.5;
      ctx.fillStyle = `rgba(${pf.dark ? '40,40,46' : '255,180,80'},${Math.max(0, 0.6 - pf.age * 0.5)})`;
      ctx.fillRect(p[0] - s / 2, p[1] - s / 2, s, s);
    }
    drawPlane(ctx, pl, model, time);
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
        ctx.fillRect((hash2(i, 1, 77) * V.W) | 0, (hash2(i, 2, 77) * hgt * 0.62) | 0, 1, 1);
      }
    }
  }

  if (scene.inStorm) { // rain, or blowing dust
    const dusty = w.id === 'mars';
    ctx.strokeStyle = dusty ? 'rgba(240,200,150,0.4)' : 'rgba(200,215,255,0.35)';
    ctx.beginPath();
    for (let i = 0; i < 60; i++) {
      const x = ((hash2(i, frame >> 1, 9) * 1.3 - 0.15) * V.W) | 0, y = (hash2(i, frame >> 1, 10) * V.H) | 0;
      ctx.moveTo(x, y); ctx.lineTo(x - (dusty ? 12 : 4), y + (dusty ? 2 : 10));
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
