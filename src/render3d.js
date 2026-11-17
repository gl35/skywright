// Drawing, in real 3D (three.js). It offers the same handful of functions the old sprite-stack
// renderer did, so the game logic does not care which is in use.
//
// World (x, y, height) maps to three.js (X = x, Y = height, Z = y).
// Everything is still made in code: terrain from the height noise, sea and sky from small shaders,
// and every aircraft, building and animal from the same voxel models as before, turned into meshes.

import * as THREE from 'three';
import { HZ, cloudsAround, ground, levelAt, world } from './world.js';
import { hash2 } from './noise.js';
import { animalsAround } from './wildlife.js';

export const V = { W: 320, H: 480, q: 1, tilt: 0.62, elev: 0.75, camx: 0, camy: 0, rot: 0, zoom: 2.6, c: 1, s: 0 };

const glCanvas = document.getElementById('gl');
const phone = Math.min(window.innerWidth, window.innerHeight) < 600;
const renderer = new THREE.WebGLRenderer({ canvas: glCanvas, antialias: !phone, powerPreference: 'high-performance' });
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, 1, 1, 2600);
scene.fog = new THREE.Fog(0xbfd9ee, 260, 640);

// ---------- size ----------
let coarser = 0, U = 1;
export function resizeView(canvas) {
  const w = window.innerWidth, h = window.innerHeight, dpr = window.devicePixelRatio || 1;
  const base = w < h ? 290 : 400;
  const n = Math.max(1, Math.round((Math.min(w, h) * dpr) / (base * 2.2))); // the overlay keeps its chunky pixels
  V.W = canvas.width = Math.ceil((w * dpr) / n);
  V.H = canvas.height = Math.ceil((h * dpr) / n);
  V.q = Math.min(V.W, V.H) / base;
  U = Math.max(1, Math.round(V.q));
  renderer.setPixelRatio(Math.min(dpr, phone ? 2 : 2) * Math.pow(0.75, coarser));
  renderer.setSize(w, h, false);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
}
let slowT = 0;
export function watchSpeed(dt) {
  if (dt > 0.2 || document.hidden) return false;
  slowT = dt > 0.034 ? slowT + dt : Math.max(0, slowT - dt * 2);
  if (slowT > 2.5 && coarser < 3) { coarser++; slowT = 0; return true; }
  return false;
}

// ---------- camera ----------
const S = { h: 0, r: 0, g: 0, b: 0, wood: false, lf: 0 };
const tgt = new THREE.Vector3(), tmp = new THREE.Vector3();
// Look at world (x, y) at height alt from behind and above. rot turns the view, zoom sets how close,
// (ax, ay) is where on the screen the subject sits, and V.tilt says how steeply the camera looks down.
export function setCamera(x, y, alt, rot, zoom, ax, ay) {
  V.camx = x; V.camy = y; V.rot = rot; V.zoom = zoom; V.c = Math.cos(rot); V.s = Math.sin(rot);
  const pitch = Math.asin(Math.min(0.97, Math.max(0.12, V.tilt * 1.15)));
  const fov = camera.aspect < 1 ? 58 : 45; // a phone held upright needs a wider lens to see to the sides
  const d = V.H / zoom / (2 * Math.tan((fov * Math.PI) / 360));
  const ux = -Math.sin(rot), uy = -Math.cos(rot); // the way "up the screen" points on the map
  tgt.set(x, alt, y);
  camera.position.set(x - ux * Math.cos(pitch) * d, alt + Math.sin(pitch) * d, y - uy * Math.cos(pitch) * d);
  const floor = ground(camera.position.x, camera.position.z, S).h + 1.5;
  if (camera.position.y < floor) camera.position.y = floor;
  camera.up.set(0, 1, 0);
  camera.fov = fov;
  camera.lookAt(tgt);
  const w = window.innerWidth, h = window.innerHeight;
  camera.setViewOffset(w, h, (0.5 - ax) * w, (0.5 - ay) * h, w, h);
  camera.updateMatrixWorld();
}

const P = [0, 0];
// World point to overlay pixels. A point behind the camera is thrown far off the screen on the right side.
export function project(x, y, z) {
  tmp.set(x, z, y).applyMatrix4(camera.matrixWorldInverse);
  const behind = tmp.z > 0;
  tmp.applyMatrix4(camera.projectionMatrix);
  let sx = (tmp.x * 0.5 + 0.5) * V.W, sy = (1 - (tmp.y * 0.5 + 0.5)) * V.H;
  if (behind) { sx = V.W / 2 - (sx - V.W / 2) * 50; sy = V.H * 3; }
  P[0] = sx; P[1] = sy;
  return P;
}
export function screenBearing(fromX, fromY, toX, toY) {
  const dx = toX - fromX, dy = toY - fromY;
  return Math.atan2(V.c * dx - V.s * dy, -(V.s * dx + V.c * dy));
}

// ---------- light and sky ----------
const SUN = new THREE.Vector3(-0.5, 0.78, -0.38).normalize();
const hemi = new THREE.HemisphereLight(0xdcecff, 0x6f7a55, 1.5);
const sun = new THREE.DirectionalLight(0xfff0d6, 2.4);
sun.castShadow = true;
sun.shadow.mapSize.set(phone ? 1024 : 2048, phone ? 1024 : 2048);
const sc = sun.shadow.camera; sc.left = -130; sc.right = 130; sc.top = 130; sc.bottom = -130; sc.near = 10; sc.far = 700;
sun.shadow.bias = -0.0006; sun.shadow.normalBias = 0.6;
scene.add(hemi, sun, sun.target);

const skyU = { zenith: { value: new THREE.Color() }, horizon: { value: new THREE.Color() }, sunDir: { value: SUN }, sunK: { value: 1 } };
const sky = new THREE.Mesh(new THREE.SphereGeometry(2200, 24, 12), new THREE.ShaderMaterial({
  uniforms: skyU, side: THREE.BackSide, depthWrite: false, depthTest: false, fog: false,
  vertexShader: 'varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
  fragmentShader: `uniform vec3 zenith, horizon, sunDir; uniform float sunK; varying vec3 vD;
    void main(){ vec3 d = normalize(vD); float t = pow(clamp(d.y, 0.0, 1.0), 0.45);
      vec3 c = mix(horizon, zenith, t); float s = max(dot(d, sunDir), 0.0);
      c += sunK * vec3(1.0, 0.86, 0.62) * (pow(s, 600.0) * 3.0 + pow(s, 14.0) * 0.28);
      gl_FragColor = vec4(c, 1.0);
      #include <colorspace_fragment>
    }`,
}));
sky.renderOrder = -10; sky.frustumCulled = false;
scene.add(sky);

const starGeo = new THREE.BufferGeometry();
{
  const a = new Float32Array(500 * 3);
  for (let i = 0; i < 500; i++) { const u = hash2(i, 1, 77) * 6.283, v = Math.acos(hash2(i, 2, 77)); a[i * 3] = Math.cos(u) * Math.sin(v) * 2000; a[i * 3 + 1] = Math.cos(v) * 2000; a[i * 3 + 2] = Math.sin(u) * Math.sin(v) * 2000; }
  starGeo.setAttribute('position', new THREE.BufferAttribute(a, 3));
}
const stars = new THREE.Points(starGeo, new THREE.PointsMaterial({ color: 0xffffff, size: 2.2, sizeAttenuation: false, transparent: true, opacity: 0, fog: false, depthWrite: false }));
stars.renderOrder = -9; stars.frustumCulled = false;
scene.add(stars);

// ---------- sea ----------
const seaU = {
  time: { value: 0 }, sunDir: { value: SUN }, deep: { value: new THREE.Color() }, skyCol: { value: new THREE.Color() },
  fogCol: { value: scene.fog.color }, fogNear: { value: 260 }, fogFar: { value: 640 },
};
const sea = new THREE.Mesh(new THREE.PlaneGeometry(1800, 1800, 150, 150).rotateX(-Math.PI / 2), new THREE.ShaderMaterial({
  uniforms: seaU, transparent: true, depthWrite: false,
  vertexShader: `uniform float time; varying vec3 vW;
    float wave(vec2 p){ return sin(p.x * 0.11 + time * 0.9) * 0.16 + sin(p.y * 0.17 - time * 1.2) * 0.12 + sin((p.x + p.y) * 0.05 + time * 0.5) * 0.2; }
    void main(){ vec4 w = modelMatrix * vec4(position, 1.0); w.y += wave(w.xz); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,
  fragmentShader: `uniform float time, fogNear, fogFar; uniform vec3 sunDir, deep, skyCol, fogCol; varying vec3 vW;
    vec2 slope(vec2 p){
      vec2 g = vec2(cos(p.x * 0.11 + time * 0.9) * 0.0176 + cos((p.x + p.y) * 0.05 + time * 0.5) * 0.01,
                    cos(p.y * 0.17 - time * 1.2) * 0.0204 + cos((p.x + p.y) * 0.05 + time * 0.5) * 0.01);
      g += vec2(cos(p.x * 0.9 + p.y * 0.4 + time * 2.1), cos(p.y * 1.1 - p.x * 0.3 + time * 1.7)) * 0.05; // ripples
      g += vec2(cos(p.x * 2.3 - time * 3.0), cos(p.y * 2.7 + time * 2.6)) * 0.03;
      return g; }
    void main(){
      vec2 g = slope(vW.xz); vec3 n = normalize(vec3(-g.x, 1.0, -g.y));
      vec3 v = normalize(cameraPosition - vW);
      float fr = pow(1.0 - max(dot(n, v), 0.0), 3.0);
      vec3 c = mix(deep, skyCol, 0.06 + fr * 0.55);
      c += deep * 0.35 * (n.x * 2.0 + n.z * 2.0); // the swell catches the light
      float sp = pow(max(dot(reflect(-sunDir, n), v), 0.0), 90.0);
      c += vec3(1.0, 0.93, 0.8) * sp * 1.6;
      float dist = length(cameraPosition - vW);
      c = mix(c, fogCol, smoothstep(fogNear, fogFar, dist));
      gl_FragColor = vec4(c, mix(0.8, 0.97, fr));
      #include <colorspace_fragment>
    }`,
}));
sea.renderOrder = 2;
scene.add(sea);

// ---------- voxel models as meshes ----------
const geoCache = new WeakMap(), colCache = new Map(), C = new THREE.Color();
const FACES = [ // [neighbour in voxel x, y, z], base corner, u, v  (all in three.js axes: X = voxel x, Y = voxel z, Z = voxel y)
  [[1, 0, 0], [1, 0, 0], [0, 1, 0], [0, 0, 1]], [[-1, 0, 0], [0, 0, 0], [0, 0, 1], [0, 1, 0]],
  [[0, 0, 1], [0, 1, 0], [0, 0, 1], [1, 0, 0]], [[0, 0, -1], [0, 0, 0], [1, 0, 0], [0, 0, 1]],
  [[0, 1, 0], [0, 0, 1], [1, 0, 0], [0, 1, 0]], [[0, -1, 0], [0, 0, 0], [0, 1, 0], [1, 0, 0]],
];
function voxGeo(vox) {
  let g = geoCache.get(vox);
  if (g) return g;
  const { nx, ny, nz } = vox, pos = [], col = [], nor = [], idx = [];
  const ox = nx / 2, oy = nz / 2, oz = ny / 2;
  for (let z = 0; z < nz; z++) for (let y = 0; y < ny; y++) for (let x = 0; x < nx; x++) {
    const c = vox.d[x + nx * (y + ny * z)];
    if (!c) continue;
    let rgb = colCache.get(c);
    if (!rgb) { C.setHex(c & 0xffffff); rgb = [C.r, C.g, C.b]; colCache.set(c, rgb); }
    for (const [nb, b, u, v] of FACES) {
      if (vox.get(x + nb[0], y + nb[1], z + nb[2])) continue;
      const i0 = pos.length / 3, X = x - ox, Y = z - oy, Z = y - oz;
      const n = [nb[0], nb[2], nb[1]];
      for (const [a, c2] of [[0, 0], [1, 0], [1, 1], [0, 1]]) {
        pos.push(X + b[0] + u[0] * a + v[0] * c2, Y + b[1] + u[1] * a + v[1] * c2, Z + b[2] + u[2] * a + v[2] * c2);
        col.push(rgb[0], rgb[1], rgb[2]); nor.push(n[0], n[1], n[2]);
      }
      idx.push(i0, i0 + 1, i0 + 2, i0, i0 + 2, i0 + 3);
    }
  }
  g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
  g.setIndex(idx);
  geoCache.set(vox, g);
  return g;
}
const voxMat = new THREE.MeshLambertMaterial({ vertexColors: true });
const voxMatSoft = new THREE.MeshLambertMaterial({ vertexColors: true, transparent: true, opacity: 0.55 });
function voxMesh(m, vs) {
  const mesh = new THREE.Mesh(voxGeo(m.vox), voxMat);
  mesh.scale.setScalar(vs); mesh.castShadow = true;
  return mesh;
}
// A pool of meshes reused every frame: ask for the i-th of a kind, and anything not asked for is hidden.
const pools = {};
function pooled(kind, i, make) {
  const p = pools[kind] || (pools[kind] = { list: [], used: 0 });
  if (i >= p.list.length) { const o = make(); scene.add(o); p.list.push(o); }
  p.used = Math.max(p.used, i + 1);
  const o = p.list[i]; o.visible = true;
  return o;
}
const poolN = new Map();
const nextOf = (kind, make) => { const i = poolN.get(kind) || 0; poolN.set(kind, i + 1); return pooled(kind, i, make); };
function sweepPools() { poolN.clear(); for (const k in pools) { const p = pools[k]; for (let i = p.used; i < p.list.length; i++) p.list[i].visible = false; p.used = 0; } }

// ---------- terrain ----------
const CS = 96, SEG = 40, STEP = CS / SEG;
const chunks = new Map();
const landMat = new THREE.MeshLambertMaterial({ vertexColors: true });
const treeGeo = new THREE.ConeGeometry(0.9, 2.4, 5).translate(0, 1.2, 0);
const treeMat = new THREE.MeshLambertMaterial({ color: 0xffffff });
const M4 = new THREE.Matrix4(), Q = new THREE.Quaternion(), SC = new THREE.Vector3(), PS = new THREE.Vector3();
function buildChunk(cx, cy) {
  const N = SEG + 3, hh = new Float32Array(N * N), cc = new Float32Array(N * N * 3), wood = [];
  const x0 = cx * CS - STEP, y0 = cy * CS - STEP;
  for (let j = 0; j < N; j++) for (let i = 0; i < N; i++) {
    const x = x0 + i * STEP, y = y0 + j * STEP;
    ground(x, y, S);
    const k = i + j * N;
    hh[k] = S.h; C.setRGB(S.r, S.g, S.b, THREE.SRGBColorSpace); cc[k * 3] = C.r; cc[k * 3 + 1] = C.g; cc[k * 3 + 2] = C.b;
    if (S.wood && i > 0 && j > 0 && i <= SEG && j <= SEG) {
      const hx = hash2(cx * 64 + i, cy * 64 + j, 31);
      if (hx > 0.25) wood.push(x + (hx - 0.5) * 2, S.h, y + (hash2(cx * 64 + i, cy * 64 + j, 32) - 0.5) * 2, hx);
    }
  }
  const n1 = SEG + 1, pos = new Float32Array(n1 * n1 * 3), nor = new Float32Array(n1 * n1 * 3), col = new Float32Array(n1 * n1 * 3), idx = [];
  for (let j = 0; j < n1; j++) for (let i = 0; i < n1; i++) {
    const k = (i + 1) + (j + 1) * N, o = (i + j * n1) * 3;
    pos[o] = cx * CS + i * STEP; pos[o + 1] = hh[k]; pos[o + 2] = cy * CS + j * STEP;
    let nx = hh[k - 1] - hh[k + 1], nz = hh[k - N] - hh[k + N]; const ny = 2 * STEP, l = Math.hypot(nx, ny, nz);
    nor[o] = nx / l; nor[o + 1] = ny / l; nor[o + 2] = nz / l;
    const steep = 1 - Math.min(0.35, Math.abs(nx) + Math.abs(nz) > 2.6 ? 0.22 : 0); // rock shows through on steep faces
    col[o] = cc[k * 3] * steep; col[o + 1] = cc[k * 3 + 1] * steep; col[o + 2] = cc[k * 3 + 2] * steep;
    if (i < SEG && j < SEG) { const a = i + j * n1, b = a + 1, c = a + n1, d = c + 1; idx.push(a, c, b, b, c, d); }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setAttribute('normal', new THREE.BufferAttribute(nor, 3));
  g.setAttribute('color', new THREE.BufferAttribute(col, 3));
  g.setIndex(idx);
  const mesh = new THREE.Mesh(g, landMat);
  mesh.receiveShadow = true;
  scene.add(mesh);
  let trees = null;
  if (wood.length) {
    const n = Math.min(500, wood.length / 4);
    trees = new THREE.InstancedMesh(treeGeo, treeMat, n);
    for (let i = 0; i < n; i++) {
      const h = wood[i * 4 + 3], s = 0.75 + h * 0.7;
      M4.compose(PS.set(wood[i * 4], wood[i * 4 + 1] - 0.2, wood[i * 4 + 2]), Q.identity(), SC.set(s, s * (0.9 + h * 0.5), s));
      trees.setMatrixAt(i, M4);
      trees.setColorAt(i, C.setRGB(0.1 + h * 0.07, 0.3 + h * 0.16, 0.12 + h * 0.05));
    }
    trees.castShadow = !phone; trees.receiveShadow = true;
    scene.add(trees);
  }
  return { mesh, trees };
}
function dropChunk(ch) {
  scene.remove(ch.mesh); ch.mesh.geometry.dispose();
  if (ch.trees) { scene.remove(ch.trees); ch.trees.dispose(); }
}
function updateChunks(x, y, budget) {
  const R = phone ? 520 : 640;
  const c0x = Math.floor((x - R) / CS), c1x = Math.floor((x + R) / CS), c0y = Math.floor((y - R) / CS), c1y = Math.floor((y + R) / CS);
  let best = null, bestD = 1e18;
  for (let cy = c0y; cy <= c1y; cy++) for (let cx = c0x; cx <= c1x; cx++) {
    const d = Math.hypot((cx + 0.5) * CS - x, (cy + 0.5) * CS - y);
    if (d > R + CS * 0.7) continue;
    const key = cx + ',' + cy;
    if (!chunks.has(key) && d < bestD) { bestD = d; best = [cx, cy, key]; }
  }
  while (best && budget-- > 0) { // nearest missing piece first
    chunks.set(best[2], buildChunk(best[0], best[1]));
    best = null; bestD = 1e18;
    for (let cy = c0y; cy <= c1y; cy++) for (let cx = c0x; cx <= c1x; cx++) {
      const d = Math.hypot((cx + 0.5) * CS - x, (cy + 0.5) * CS - y), key = cx + ',' + cy;
      if (d <= R + CS * 0.7 && !chunks.has(key) && d < bestD) { bestD = d; best = [cx, cy, key]; }
    }
  }
  for (const [key, ch] of chunks) {
    const [cx, cy] = key.split(',');
    if (Math.hypot((+cx + 0.5) * CS - x, (+cy + 0.5) * CS - y) > R + CS * 2.2) { dropChunk(ch); chunks.delete(key); }
  }
}

// ---------- landing grounds, buildings, the carrier ----------
const SLOTS = [[6, -18], [-10, -14]];
let statics = new THREE.Group(), staticFor = '';
scene.add(statics);
function padTexture(kind) {
  const c = document.createElement('canvas'); c.width = 352; c.height = kind === 'runway' ? 32 : 64;
  const x = c.getContext('2d'), W = c.width, H = c.height;
  if (kind === 'runway') {
    x.fillStyle = '#55585e'; x.fillRect(0, 0, W, H);
    x.fillStyle = '#e6e6e0'; x.fillRect(0, 0, 6, H); x.fillRect(W - 6, 0, 6, H);
    for (let i = 20; i < W - 20; i += 32) x.fillRect(i, H / 2 - 2, 16, 4);
    for (let k = 0; k < 4; k++) { x.fillRect(12, 4 + k * 7, 14, 3); x.fillRect(W - 26, 4 + k * 7, 14, 3); }
  } else if (kind === 'plaza') {
    x.fillStyle = '#c4bca8'; x.fillRect(0, 0, W, H);
    x.strokeStyle = '#a39a84'; x.lineWidth = 1;
    for (let i = 0; i <= W; i += 16) { x.beginPath(); x.moveTo(i, 0); x.lineTo(i, H); x.stroke(); }
    for (let j = 0; j <= H; j += 16) { x.beginPath(); x.moveTo(0, j); x.lineTo(W, j); x.stroke(); }
    x.strokeStyle = '#7a735f'; x.lineWidth = 6; x.strokeRect(0, 0, W, H);
  } else {
    x.fillStyle = '#3c3e44'; x.fillRect(0, 0, W, H);
    x.strokeStyle = '#e8be3c'; x.lineWidth = 5; x.strokeRect(3, 3, W - 6, H - 6);
    x.beginPath(); x.arc(W / 2, H / 2, H * 0.36, 0, 6.283); x.stroke();
  }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
  return t;
}
const padTex = {};
function decal(w, h, mat, x, y, z) {
  const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h).rotateX(-Math.PI / 2), mat);
  m.position.set(x, y, z); m.receiveShadow = true;
  return m;
}
function buildStatics(w, scenery) {
  scene.remove(statics); statics = new THREE.Group(); scene.add(statics);
  for (const [, ch] of chunks) dropChunk(ch);
  chunks.clear();
  const kind = w.pad, tex = padTex[kind] || (padTex[kind] = padTexture(kind));
  const stripMat = new THREE.MeshLambertMaterial({ map: tex, polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -4 });
  const apronMat = new THREE.MeshLambertMaterial({ color: kind === 'runway' ? 0x9c9e9a : 0x9a8668, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 });
  const steel = new THREE.MeshLambertMaterial({ color: 0x5c626c });
  for (const s of w.stops) {
    const top = 2 * HZ;
    if (s.carrier) { // a hull to the waterline and below, a flight deck on top
      const hull = new THREE.Mesh(new THREE.BoxGeometry(60, top + 4, 14), steel);
      hull.position.set(s.x - 4, top - (top + 4) / 2, s.y); hull.castShadow = true; hull.receiveShadow = true;
      const bow = new THREE.Mesh(new THREE.CylinderGeometry(7, 7, top + 4, 3), steel);
      bow.rotation.y = Math.PI / 2; bow.scale.set(1, 1, 1.25); bow.position.set(s.x + 30.3, top - (top + 4) / 2, s.y); bow.castShadow = true;
      statics.add(hull, bow, decal(56, 3, stripMat, s.x - 3, top + 0.06, s.y));
    } else {
      statics.add(decal(44, kind === 'runway' ? 4 : 8, stripMat, s.x, top + 0.1, s.y));
      statics.add(decal(22, 10, apronMat, s.x - 1, top + 0.06, s.y - 8));
    }
    (s.marks || []).forEach((name, i) => {
      const mk = scenery.marks[name], at = s.slots ? s.slots[i] : SLOTS[i];
      const mesh = voxMesh(mk.m, mk.vs);
      mesh.position.set(s.x + at[0], top + (mk.m.nz / 2) * mk.vs, s.y + at[1]);
      mesh.receiveShadow = true;
      statics.add(mesh);
    });
  }
  // sky and sea colours for this world
  const k = w.sky;
  skyU.horizon.value.setRGB(Math.min(1, k[0] / 255 * 0.75 + 0.25), Math.min(1, k[1] / 255 * 0.75 + 0.25), Math.min(1, k[2] / 255 * 0.75 + 0.25), THREE.SRGBColorSpace);
  skyU.zenith.value.setRGB(k[0] / 255 * 0.42, k[1] / 255 * 0.6, k[2] / 255 * 0.88, THREE.SRGBColorSpace);
  sea.visible = w.water;
}

// The height of the surface you can see at a point where the game says the floor is `logic`.
// Usually that is the drawn ground; on water, or on a ship's deck, it is the game's own floor.
function seenFloor(x, y, logic) { const h = ground(x, y, S).h; return logic - h > 1.3 ? logic : h; }

// ---------- the aircraft ----------
const planeG = new THREE.Group();
planeG.rotation.order = 'YZX';
scene.add(planeG);
let planeFor = null, planeBody = null, planeProps = [], planeJets = [], shield = null;
const discMat = new THREE.MeshBasicMaterial({ color: 0x2a2a30, transparent: true, opacity: 0.28, side: THREE.DoubleSide, depthWrite: false });
const bladeMat = new THREE.MeshLambertMaterial({ color: 0x2a2a30, side: THREE.DoubleSide });
const flameMat = new THREE.MeshBasicMaterial({ color: 0xffb040, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false });
function buildPlane(model) {
  planeG.clear(); planeProps = []; planeJets = [];
  planeBody = new THREE.Mesh(voxGeo(model.frames[0][Math.floor(model.frames[0].length / 2)].vox), voxMat);
  planeBody.castShadow = true;
  const holder = new THREE.Group(); holder.scale.setScalar(model.vs); holder.add(planeBody);
  planeG.add(holder);
  const vs = model.vs, mx = (model.nx - 1) / 2, mz = (model.nz - 1) / 2;
  for (const pr of model.props) {
    const g = new THREE.Group();
    g.position.set((pr.x - mx) * vs, (pr.z - mz) * vs, pr.y * vs);
    const disc = new THREE.Mesh(new THREE.CircleGeometry(pr.r * vs, 20).rotateY(Math.PI / 2), discMat);
    const blade = new THREE.Mesh(new THREE.PlaneGeometry(pr.r * vs * 0.22, pr.r * vs * 2).rotateY(Math.PI / 2), bladeMat);
    g.add(disc, blade); planeG.add(g); planeProps.push({ g, disc, blade });
  }
  for (const j of model.jets) {
    const f = new THREE.Mesh(new THREE.ConeGeometry(vs * 1.3, 1, 8).rotateZ(Math.PI / 2).translate(-0.5, 0, 0), flameMat);
    f.position.set((j.x - mx - 1) * vs, (j.z - mz) * vs, j.y * vs);
    planeG.add(f); planeJets.push(f);
  }
  shield = new THREE.Mesh(new THREE.SphereGeometry(model.nx * vs * 0.6, 16, 10), new THREE.MeshBasicMaterial({ color: 0x8cf0ff, transparent: true, opacity: 0.25, depthWrite: false }));
  planeG.add(shield);
  planeFor = model;
}
function updatePlane(pl, model, sc, time) {
  if (planeFor !== model) buildPlane(model);
  planeG.visible = sc.showPlane && !sc.wrecked;
  if (!planeG.visible) return;
  // on the ground she sits on the ground you can see
  const belly = (model.nz * model.vs) / 2, floor = levelAt(pl.x, pl.y) * HZ + belly;
  let y = pl.alt;
  if (pl.alt - floor < 0.35) y = seenFloor(pl.x, pl.y, floor - belly) + belly + (pl.alt - floor);
  planeG.position.set(pl.x, y, pl.y);
  planeG.rotation.set(pl.roll * model.rollK, -pl.heading, Math.max(-1.2, Math.min(1.2, (pl.lean || 0) * 0.42)));
  if (model.frames.length > 1) { // beating wings
    const beat = model.fps * (0.45 + 0.75 * pl.throttle);
    const pose = model.fps && pl.propSpin > 0.05 ? Math.floor(pl.spin * beat * 0.05) % model.frames.length : 0;
    planeBody.geometry = voxGeo(model.frames[pose][Math.floor(model.frames[pose].length / 2)].vox);
  }
  const fast = pl.throttle > 0.45 && pl.propSpin > 0.5;
  for (const p of planeProps) {
    p.g.visible = true; p.g.rotation.x = pl.spin || 0;
    p.disc.visible = fast && pl.propSpin > 0.02; p.blade.visible = !fast;
  }
  for (const f of planeJets) {
    const len = pl.propSpin > 0.1 ? (1 + pl.throttle * pl.throttle * 13) * (pl.boosting ? 2 : 1) * model.vs + Math.sin(time * 60) * 0.3 : 0;
    f.visible = len > 0.2; f.scale.set(len, 1, 1);
  }
  shield.visible = !!pl.shield;
}

// ---------- clouds ----------
const CLOUD_COL = { white: 0xffffff, storm: 0x6a6f86, dustLight: 0xe6c39e, dust: 0xb07a4e, mist: 0xe2f7f2, violet: 0x7a56bd };
const MAXB = 2600;
const cloudMesh = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(1, 2), new THREE.MeshLambertMaterial({ color: 0xffffff }), MAXB);
cloudMesh.castShadow = true; cloudMesh.frustumCulled = false;
scene.add(cloudMesh);
const cloudList = [];
export function cloudsNow() { return cloudList; }
function updateClouds(time, w) {
  cloudsAround(V.camx, V.camy, phone ? 480 : 600, time, cloudList);
  let n = 0;
  if (w.clouds) for (const c of cloudList) {
    C.setHex(CLOUD_COL[w.clouds[c.storm ? 1 : 0]] || 0xffffff);
    const blobs = c.storm ? 13 : 7, seed = c.variant * 7 + (c.storm ? 500 : 0);
    // a cloud right on top of the camera would hide everything: it thins out as you close on it
    const near = Math.hypot(c.wx - camera.position.x, c.wy - camera.position.z, (c.storm ? 20 : c.alt + 4) - camera.position.y);
    const thin = Math.max(c.storm ? 0.45 : 0.12, Math.min(1, (near - (c.storm ? 18 : 12)) / 30));
    for (let i = 0; i < blobs && n < MAXB; i++) {
      const a = hash2(seed, i, 61) * 6.283, r = hash2(seed, i, 62), h = hash2(seed, i, 63);
      let x, y, z, sx, sy;
      if (c.storm) { const rad = 6 + r * 15; x = Math.cos(a) * rad; z = Math.sin(a) * rad; y = c.alt + 4 + h * (c.top - c.alt - 6); sx = 9 + hash2(seed, i, 64) * 7; sy = sx * 0.8; }
      else { const rad = r * c.rad * 0.55 * c.vs; x = Math.cos(a) * rad; z = Math.sin(a) * rad * 0.7; sx = (3.2 + hash2(seed, i, 64) * 3.4) * c.vs * (1 - r * 0.45); sy = sx * 0.62; y = c.alt + 3 + sy * 0.5 + h * 1.5; }
      M4.compose(PS.set(c.wx + x, y, c.wy + z), Q.identity(), SC.set(sx * thin, sy * thin, sx * thin));
      cloudMesh.setMatrixAt(n, M4); cloudMesh.setColorAt(n, C); n++;
    }
  }
  cloudMesh.count = n;
  cloudMesh.instanceMatrix.needsUpdate = true;
  if (cloudMesh.instanceColor) cloudMesh.instanceColor.needsUpdate = true;
}

// ---------- particles, trails ----------
const MAXP = 1400;
const pGeo = new THREE.BufferGeometry();
const pPos = new Float32Array(MAXP * 3), pCol = new Float32Array(MAXP * 4), pSize = new Float32Array(MAXP);
pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
pGeo.setAttribute('color', new THREE.BufferAttribute(pCol, 4));
pGeo.setAttribute('size', new THREE.BufferAttribute(pSize, 1));
const points = new THREE.Points(pGeo, new THREE.ShaderMaterial({
  transparent: true, depthWrite: false, uniforms: { scale: { value: 600 } },
  vertexShader: 'attribute float size; attribute vec4 color; varying vec4 vC; uniform float scale; void main(){ vC = color; vec4 mv = modelViewMatrix * vec4(position, 1.0); gl_PointSize = size * scale / -mv.z; gl_Position = projectionMatrix * mv; }',
  fragmentShader: `varying vec4 vC; void main(){ vec2 d = gl_PointCoord - 0.5; float a = smoothstep(0.5, 0.2, length(d)); gl_FragColor = vec4(vC.rgb, vC.a * a);
    #include <colorspace_fragment>
  }`,
}));
points.frustumCulled = false; points.renderOrder = 5;
scene.add(points);
const MAXT = 900;
const tGeo = new THREE.BufferGeometry();
const tPos = new Float32Array(MAXT * 6), tCol = new Float32Array(MAXT * 8);
tGeo.setAttribute('position', new THREE.BufferAttribute(tPos, 3));
tGeo.setAttribute('color', new THREE.BufferAttribute(tCol, 4));
const trails = new THREE.LineSegments(tGeo, new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, depthWrite: false }));
trails.frustumCulled = false; trails.renderOrder = 4;
scene.add(trails);
const ringGeo = new THREE.RingGeometry(0.92, 1, 40).rotateX(-Math.PI / 2);
function updateFx(sc, pl, time) {
  let n = 0, rings = 0;
  const put = (x, y, z, r, g, b, a, s) => { if (n >= MAXP) return; pPos[n * 3] = x; pPos[n * 3 + 1] = z; pPos[n * 3 + 2] = y; pCol[n * 4] = r; pCol[n * 4 + 1] = g; pCol[n * 4 + 2] = b; pCol[n * 4 + 3] = a; pSize[n] = s; n++; };
  for (const f of sc.fx || []) {
    const a = Math.max(0, 1 - f.age / f.life);
    if (f.kind === 'ring') {
      const m = pooled('ripple', rings++, () => new THREE.Mesh(ringGeo, new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, depthWrite: false })));
      const r = f.size * (0.25 + f.age / f.life);
      m.position.set(f.x, 0.25, f.y); m.scale.set(r, 1, r); m.material.opacity = a * 0.6; m.renderOrder = 3;
      continue;
    }
    if (!f._c) { const q = f.col.split(','); C.setRGB(q[0] / 255, q[1] / 255, q[2] / 255, THREE.SRGBColorSpace); f._c = [C.r, C.g, C.b]; }
    put(f.x, f.y, f.z, f._c[0], f._c[1], f._c[2], a * (f.alpha || 1), f.size * 0.42 * (1 + f.age * (f.grow || 0)));
  }
  for (const pf of sc.puffs || []) {
    const a = Math.max(0, 0.6 - pf.age * 0.5);
    if (pf.dark) put(pf.x, pf.y, pf.z, 0.02, 0.02, 0.03, a, 0.8 + pf.age * 2.8); else put(pf.x, pf.y, pf.z, 1, 0.45, 0.08, a, 0.8 + pf.age * 2.8);
  }
  pGeo.setDrawRange(0, n);
  pGeo.attributes.position.needsUpdate = pGeo.attributes.color.needsUpdate = pGeo.attributes.size.needsUpdate = true;
  let t = 0;
  if (sc.showPlane) for (const tr of pl.trails) for (let i = 1; i < tr.length && t < MAXT; i++) {
    const a = tr[i - 1], b = tr[i], age = time - b.t;
    if (age > 2.2 || a.cut || b.cut) continue;
    const al = b.a * (1 - age / 2.2);
    tPos.set([a.x, a.z, a.y, b.x, b.z, b.y], t * 6);
    tCol.set([1, 1, 1, al, 1, 1, 1, al], t * 8); t++;
  }
  tGeo.setDrawRange(0, t * 2);
  tGeo.attributes.position.needsUpdate = tGeo.attributes.color.needsUpdate = true;
}

// ---------- things to aim for ----------
const goldRing = new THREE.TorusGeometry(1, 0.012, 6, 48).rotateX(Math.PI / 2);
const beamGeo = new THREE.CylinderGeometry(0.35, 0.35, 40, 6, 1, true).translate(0, 20, 0);
const gemGeo = new THREE.OctahedronGeometry(1);
function updateMarks(marks, time, scenery) {
  let nt = 0, ns = 0, np = 0, nd = 0, nr = 0;
  for (const k of marks || []) {
    if (k.kind === 'portal') {
      const m = pooled('portal', 0, () => {
        const g = new THREE.Group();
        g.add(new THREE.Mesh(new THREE.CircleGeometry(1, 32), new THREE.MeshBasicMaterial({ color: 0xbff8ff, transparent: true, opacity: 0.8, side: THREE.DoubleSide, depthWrite: false })));
        g.add(new THREE.Mesh(new THREE.TorusGeometry(1, 0.05, 8, 40), new THREE.MeshLambertMaterial({ color: 0xd9a441, emissive: 0x6a4a10 })));
        return g;
      });
      m.position.set(k.x, k.z, k.y); m.scale.set(4.5, 8, 4.5); m.rotation.y = time * 0.6;
      continue;
    }
    if (k.kind === 'drop') {
      const m = pooled('drop', nd++, () => {
        const g = new THREE.Group();
        g.add(new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshLambertMaterial({ color: 0x8a5a34 })));
        const ch = new THREE.Mesh(new THREE.SphereGeometry(1.6, 10, 6, 0, 6.283, 0, 1.4), new THREE.MeshLambertMaterial({ color: 0xf4f1e6, side: THREE.DoubleSide }));
        ch.position.y = 2; g.add(ch); g.userData.chute = ch;
        return g;
      });
      m.position.set(k.x, k.z + 0.5, k.y); m.userData.chute.visible = k.z > k.gz + 0.2;
      continue;
    }
    if (k.kind === 'task') {
      if (k.prop) {
        const mk = scenery.marks[k.prop];
        const m = nextOf('prop:' + k.prop, () => voxMesh(mk.m, mk.vs));
        m.position.set(k.x, k.gz + (mk.m.nz / 2) * mk.vs + (k.prop === 'boat' || k.prop === 'buoy' ? Math.sin(time * 2) * 0.15 : 0), k.y); m.rotation.y = -0.5;
      }
      if (k.done) continue;
      C.setRGB(...(k.col || '255,214,74').split(',').map((v) => v / 255), THREE.SRGBColorSpace);
      const ring = pooled('tring', nt, () => new THREE.Mesh(goldRing, new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.9 })));
      ring.position.set(k.x, k.gz + 0.5, k.y); ring.scale.set(k.r, k.r * 30, k.r); ring.rotation.y = time * 0.3; ring.material.color.copy(C);
      const beam = pooled('tbeam', nt++, () => new THREE.Mesh(beamGeo, new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.3, depthWrite: false, side: THREE.DoubleSide })));
      beam.position.set(k.x, k.gz, k.y); beam.material.color.copy(C);
    } else { // a spark to collect
      const m = pooled('spark', ns++, () => new THREE.Mesh(gemGeo, new THREE.MeshLambertMaterial({ color: 0xffe98a, emissive: 0xb88a10 })));
      m.position.set(k.x, k.z + Math.sin(time * 3 + k.x) * 0.6, k.y); m.rotation.y = time * 2 + k.x; m.scale.set(1.1, 1.6, 1.1);
    }
  }
  return nr;
}

// ---------- animals, the pilot ----------
const beasts = [];
function updateLife(sc, time, pl) {
  animalsAround(V.camx, V.camy, phone ? 260 : 340, time, pl, beasts);
  const count = new Map();
  for (const e of beasts) {
    if (!e.m.vox) continue;
    const soft = e.alpha < 0.8, key = (soft ? 'beastS' : 'beast');
    const i = count.get(key) || 0; count.set(key, i + 1);
    const m = pooled(key, i, () => { const o = new THREE.Mesh(voxGeo(e.m.vox), soft ? voxMatSoft : voxMat); o.castShadow = !soft; return o; });
    m.geometry = voxGeo(e.m.vox);
    m.scale.setScalar(e.vs); m.rotation.y = -e.rot;
    m.position.set(e.x, e.z + (e.m.nz / 2) * e.vs, e.y);
  }
  const who = sc.pilot;
  if (who && sc.showPlane) {
    const pm = sc.scenery.pilot[who.pose];
    const m = pooled('pilot', 0, () => voxMesh(pm, 0.34));
    m.geometry = voxGeo(pm.vox);
    const gy = who.onTop ? who.z : seenFloor(who.x, who.y, who.z);
    m.position.set(who.x, gy + (pm.nz / 2) * 0.34, who.y); m.rotation.y = -who.rot;
  }
}

// ---------- the frame ----------
const fogCol = new THREE.Color(), black = new THREE.Color(0x02030a), cockpitE = new THREE.Euler(0, 0, 0, 'YXZ');
export function drawScene(ctx, sc) {
  const { time, plane: pl, model, scenery } = sc, w = world();
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, V.W, V.H);
  if (staticFor !== w.id) { buildStatics(w, scenery); staticFor = w.id; }

  updateChunks(V.camx, V.camy, sc.budget > 10 ? 14 : 3);
  updatePlane(pl, model, sc, time);
  updateClouds(time, w);
  updateFx(sc, pl, time);
  updateMarks(sc.marks, time, scenery);
  updateLife(sc, time, pl);
  sweepPools();

  if (sc.cockpit) { // sit in the seat: look along the nose, and bank with the wings
    camera.clearViewOffset();
    camera.fov = 68;
    camera.position.set(pl.x, pl.alt + 0.9, pl.y);
    cockpitE.set(Math.max(-0.5, Math.min(0.5, (pl.lean || 0) * 0.35)) - 0.1, -pl.heading - Math.PI / 2, -pl.roll * 0.8);
    camera.quaternion.setFromEuler(cockpitE);
    camera.updateProjectionMatrix(); camera.updateMatrixWorld();
  } else if (sc.eye) { // on foot, through the pilot's own eyes
    const e = sc.eye;
    camera.clearViewOffset();
    camera.fov = 62;
    camera.position.set(e.x, seenFloor(e.x, e.y, e.z) + 2.5, e.y);
    cockpitE.set(-0.05, -e.rot - Math.PI / 2, 0);
    camera.quaternion.setFromEuler(cockpitE);
    camera.updateProjectionMatrix(); camera.updateMatrixWorld();
  } else camera.updateProjectionMatrix();

  // sky: day at the ground, black with stars at great height
  const d = sc.dark || 0;
  skyDark(d);
  fogCol.copy(skyU.horizon.value);
  scene.fog.color.copy(fogCol);
  const far = (phone ? 520 : 640) * (1 + d * 0.6);
  scene.fog.near = far * 0.42; scene.fog.far = far; seaU.fogNear.value = scene.fog.near; seaU.fogFar.value = far;
  renderer.setClearColor(fogCol);
  skyU.sunK.value = 1 - d * 0.5;
  sky.position.copy(camera.position); stars.position.copy(camera.position);
  stars.material.opacity = d;
  hemi.intensity = 1.5 * (1 - d * 0.5);

  sun.target.position.set(V.camx, 0, V.camy);
  sun.position.copy(sun.target.position).addScaledVector(SUN, 320);
  const seaStep = 12;
  sea.position.set(Math.round(camera.position.x / seaStep) * seaStep, 0, Math.round(camera.position.z / seaStep) * seaStep);
  seaU.time.value = time;
  seaU.skyCol.value.copy(fogCol);

  renderer.render(scene, camera);

  if (sc.inStorm) { // rain, or blowing dust, on the overlay
    const dusty = w.id === 'mars';
    ctx.lineWidth = U;
    ctx.strokeStyle = dusty ? 'rgba(240,200,150,0.4)' : 'rgba(200,215,255,0.35)';
    ctx.beginPath();
    for (let i = 0; i < 60; i++) {
      const x = ((hash2(i, sc.frame >> 1, 9) * 1.3 - 0.15) * V.W) | 0, y = (hash2(i, sc.frame >> 1, 10) * V.H) | 0;
      ctx.moveTo(x, y); ctx.lineTo(x - (dusty ? 12 : 4) * U, y + (dusty ? 2 : 10) * U);
    }
    ctx.stroke();
    ctx.fillStyle = dusty ? 'rgba(120,60,30,0.25)' : 'rgba(20,24,44,0.22)';
    ctx.fillRect(0, 0, V.W, V.H);
  }
}

// Keep each world's day colours, and blend toward night from them.
const dayZ = new THREE.Color(), dayH = new THREE.Color(), dayDeep = new THREE.Color();
let dayFor = '';
function skyDark(d) {
  const w = world();
  if (dayFor !== w.id) {
    dayFor = w.id; dayZ.copy(skyU.zenith.value); dayH.copy(skyU.horizon.value);
    dayDeep.setRGB(0.02, 0.13, 0.34);
  }
  skyU.zenith.value.copy(dayZ).lerp(black, d);
  skyU.horizon.value.copy(dayH).lerp(black, d * 0.85);
  seaU.deep.value.copy(dayDeep).lerp(black, d * 0.7);
}
