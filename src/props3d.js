// Buildings, things to visit, animals and the pilot as smooth 3D models, made from the same few shapes as the aircraft.
//
// Buildings and props are built inside a unit box (x and z from -0.5 to 0.5, y from 0 at the ground to 1) and
// stretched by the renderer to the footprint and height the game uses for them.
// Animals are built one unit long, nose toward +x, feet at y = 0 (sea animals and birds are centred on y = 0).

import * as THREE from 'three';
import { mat, add, body, tube, post, wheel, blob, strut, panelGeo } from './craft3d.js';

const box = (w, h, d, m) => new THREE.Mesh(new THREE.BoxGeometry(w, h, d).translate(0, h / 2, 0), m);
const cyl = (r0, r1, h, m, seg = 16) => new THREE.Mesh(new THREE.CylinderGeometry(r0, r1, h, seg).translate(0, h / 2, 0), m); // r0 at the top
const hip = (w, h, d, m, lift = 0.25) => { // a four-sided roof with upturned eaves
  const g = new THREE.CylinderGeometry(0.02, 0.7071, 1, 4, 1).rotateY(Math.PI / 4).translate(0, 0.5, 0);
  const mesh = new THREE.Mesh(g, m); mesh.scale.set(w, h, d); void lift; return mesh;
};
const glow = (hex, k = 1.4) => mat(hex, { emissive: hex, emissiveIntensity: k, roughness: 0.4 });
const STONE = 0x9a9d96, WOODC = 0x7a5230, REDWALL = 0xb8452f, ROOF = 0x48605a, WHITE = 0xf2f0e6, DARK = 0x2a2c33;

const PROPS = {
  hangar(g) {
    add(g, box(1, 0.42, 0.9, mat(0xb9b6ac)));
    const roof = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 1.02, 18, 1, false, 0, Math.PI).rotateZ(Math.PI / 2), mat(0xc0452f));
    roof.scale.set(1, 1.1, 0.94); add(g, roof, 0, 0.42, 0);
    for (const s of [-1, 1]) add(g, box(0.02, 0.36, 0.6, mat(DARK)), s * 0.5, 0, 0);
  },
  tower(g) {
    add(g, cyl(0.2, 0.26, 0.66, mat(WHITE), 12));
    add(g, cyl(0.42, 0.34, 0.18, mat(0x8fd4ee, { roughness: 0.1, metalness: 0.4 }), 8), 0, 0.66, 0);
    add(g, cyl(0.2, 0.46, 0.1, mat(0xc8523a), 8), 0, 0.84, 0);
    add(g, post(0.02, 0.1, mat(DARK)), 0, 0.97, 0);
  },
  pagoda(g, tiers = 6) {
    const step = 0.92 / tiers;
    for (let i = 0; i < tiers; i++) {
      const w = 0.62 - i * (0.36 / tiers);
      add(g, box(w, step * 0.62, w, mat(i % 2 ? 0xd8c8a8 : REDWALL)), 0, i * step, 0);
      add(g, hip(w * 1.55, step * 0.42, w * 1.55, mat(ROOF)), 0, i * step + step * 0.6, 0);
    }
    add(g, post(0.012, 0.1, mat(0xd9a441, { metalness: 0.7 })), 0, 0.95, 0);
  },
  pagodaSmall(g) { PROPS.pagoda(g, 3); },
  gate(g) { // a city gate: a thick wall with an archway and a pavilion on top
    add(g, box(1, 0.5, 0.7, mat(0x8d8f8a)));
    add(g, box(0.24, 0.34, 0.72, mat(0x1c1c20)));
    for (let x = -0.44; x < 0.5; x += 0.176) add(g, box(0.09, 0.06, 0.72, mat(0x8d8f8a)), x, 0.5, 0);
    add(g, box(0.62, 0.2, 0.4, mat(REDWALL)), 0, 0.56, 0);
    add(g, hip(0.95, 0.22, 0.75, mat(ROOF)), 0, 0.76, 0);
  },
  clock(g) { // the water-driven clock tower, with a bronze sphere of rings on the roof
    for (let i = 0; i < 3; i++) { const w = 0.6 - i * 0.1; add(g, box(w, 0.2, w, mat(i === 1 ? 0xa06a3a : WOODC)), 0, i * 0.26, 0); add(g, hip(w * 1.45, 0.08, w * 1.45, mat(ROOF)), 0, i * 0.26 + 0.2, 0); }
    const bronze = mat(0xc08a3a, { metalness: 0.7, roughness: 0.3 });
    for (const r of [0, 1, 2]) { const ring = new THREE.Mesh(new THREE.TorusGeometry(0.09, 0.008, 6, 24), bronze); ring.rotation.set(r * 1.05, r * 0.7, 0); add(g, ring, 0, 0.89, 0); }
    const ww = add(g, wheel(0.16, 0.04, mat(0x5c3b22)), 0.36, 0.18, 0); ww.rotation.y = Math.PI / 2;
  },
  ship(g) { // a great ship on the building stocks
    add(g, body([[-0.5, 0.02], [-0.42, 0.14], [0.2, 0.16], [0.44, 0.08], [0.5, 0.01]], mat(0x8a5a34)), 0, 0.2, 0).scale.set(1, 1, 2.2);
    add(g, box(0.86, 0.02, 0.6, mat(0xb08a58)), 0, 0.26, 0);
    add(g, box(0.2, 0.14, 0.5, mat(0x9a6a40)), -0.34, 0.28, 0);
    for (const [x, h] of [[-0.12, 0.62], [0.08, 0.7], [0.28, 0.56]]) {
      add(g, post(0.012, h, mat(0x5c3b22)), x, 0.28 + h / 2, 0);
      const sail = new THREE.Mesh(new THREE.PlaneGeometry(0.02, 1).rotateY(0), mat(0xb5332a, { side: THREE.DoubleSide }));
      sail.scale.set(1, h * 0.72, 1); sail.geometry = new THREE.BoxGeometry(0.012, 1, 0.62); add(g, sail, x + 0.02, 0.36 + h / 2, 0);
    }
    for (const x of [-0.3, 0, 0.3]) add(g, box(0.04, 0.08, 0.8, mat(0x5c3b22)), x, 0, 0);
  },
  dome(g) {
    add(g, cyl(0.46, 0.46, 0.22, mat(0xe9eef2), 20));
    const d = new THREE.Mesh(new THREE.SphereGeometry(0.46, 20, 10, 0, 6.283, 0, Math.PI / 2), mat(0xf4f7fa, { roughness: 0.35 })); d.scale.y = 1.6; add(g, d, 0, 0.22, 0);
    add(g, box(0.02, 0.16, 0.14, mat(0x2a5caa)), 0.46, 0, 0);
  },
  mast(g) {
    add(g, cyl(0.03, 0.07, 0.86, mat(0x9aa0ad, { metalness: 0.5 }), 6));
    for (const y of [0.2, 0.45, 0.7]) add(g, cyl(0.12, 0.12, 0.012, mat(0x7a808c), 8), 0, y, 0);
    const dish = new THREE.Mesh(new THREE.SphereGeometry(0.2, 14, 6, 0, 6.283, 0, 1.1), mat(0xeef0f3, { side: THREE.DoubleSide })); dish.rotation.z = -1.1; add(g, dish, 0.06, 0.74, 0);
    add(g, blob(0.04, 0.04, 0.04, glow(0xff3b30)), 0, 0.97, 0);
  },
  spire(g) { // a cluster of crystal spires
    const C = [0x7d55c8, 0x3cbfae, 0x5a6fb0, 0x8a63cc, 0x2fa59a];
    for (let i = 0; i < 9; i++) {
      const a = i * 2.4, r = i ? 0.12 + (i % 3) * 0.1 : 0, h = 0.35 + ((i * 37) % 60) / 100;
      const s = new THREE.Mesh(new THREE.ConeGeometry(0.07 + (i % 2) * 0.03, h, 5).translate(0, h / 2, 0), mat(C[i % C.length], { roughness: 0.2, metalness: 0.3, emissive: C[i % C.length], emissiveIntensity: 0.25 }));
      add(g, s, Math.cos(a) * r, 0, Math.sin(a) * r);
    }
  },
  lantern(g) {
    add(g, cyl(0.06, 0.1, 0.6, mat(0x5c3b22), 6));
    add(g, box(0.5, 0.24, 0.5, glow(0xffd98a, 1.8)), 0, 0.6, 0);
    add(g, hip(0.8, 0.16, 0.8, mat(REDWALL)), 0, 0.84, 0);
  },
  door(g) { // the Ark's door, standing by itself in a meadow
    for (const s of [-1, 1]) add(g, box(1, 1, 0.1, mat(0x8a5a34)), 0, 0, s * 0.45).scale.set(0.5, 1, 1);
    add(g, box(0.5, 0.08, 1, mat(0x8a5a34)), 0, 0.92, 0);
    add(g, box(0.12, 0.92, 0.8, glow(0x8ff6ff, 1.6)));
  },
  bridge(g) { // the island of an aircraft carrier
    add(g, box(1, 0.34, 1, mat(0x8d939c)));
    add(g, box(0.62, 0.12, 1.02, mat(0x8fd4ee, { roughness: 0.1, metalness: 0.4 })), -0.14, 0.34, 0);
    add(g, box(0.62, 0.08, 1, mat(0x8d939c)), -0.14, 0.46, 0);
    add(g, cyl(0.1, 0.12, 0.26, mat(DARK), 10), 0.32, 0.34, 0);
    add(g, post(0.02, 0.4, mat(0x6a707a)), -0.14, 0.72, 0);
    add(g, box(0.4, 0.03, 0.2, mat(0xc9ced6)), -0.14, 0.82, 0);
    add(g, blob(0.03, 0.03, 0.06, glow(0xff3b30)), -0.14, 0.94, 0);
  },
  lighthouse(g) {
    for (let i = 0; i < 4; i++) add(g, cyl(0.17 - i * 0.02, 0.19 - i * 0.02, 0.18, mat(i % 2 ? 0xc8402f : WHITE), 14), 0, i * 0.18, 0);
    add(g, cyl(0.22, 0.22, 0.03, mat(DARK), 14), 0, 0.72, 0);
    add(g, cyl(0.1, 0.1, 0.12, glow(0xffe27a, 2), 10), 0, 0.75, 0);
    add(g, cyl(0.01, 0.15, 0.1, mat(0xc8402f), 10), 0, 0.87, 0);
    add(g, cyl(0.42, 0.46, 0.04, mat(STONE), 12));
  },
  boat(g, hull = 0x2a5caa) {
    add(g, body([[-0.5, 0.03], [-0.4, 0.1], [0.2, 0.11], [0.45, 0.05], [0.5, 0.01]], mat(hull)), 0, 0.14, 0).scale.set(1, 1.3, 2.4);
    add(g, box(0.8, 0.02, 0.42, mat(0xd8c8a0)), -0.02, 0.2, 0);
    add(g, box(0.24, 0.24, 0.3, mat(WHITE)), -0.16, 0.22, 0);
    add(g, box(0.26, 0.03, 0.34, mat(0xc8402f)), -0.16, 0.46, 0);
    add(g, post(0.012, 0.5, mat(WOODC)), 0.14, 0.47, 0);
  },
  icebreaker(g) {
    PROPS.boat(g, 0xc8402f);
    add(g, box(0.2, 0.18, 0.26, mat(WHITE)), -0.16, 0.48, 0);
    add(g, cyl(0.05, 0.06, 0.24, mat(0xffd24a), 10), 0.1, 0.22, 0);
  },
  buoy(g) {
    add(g, blob(0.4, 0.22, 0.4, mat(0xc8402f)), 0, 0.18, 0);
    add(g, post(0.03, 0.6, mat(0xffd24a)), 0, 0.5, 0);
    add(g, blob(0.07, 0.07, 0.07, glow(0xffe27a, 2)), 0, 0.84, 0);
  },
  tents(g) {
    for (const [x, c] of [[-0.25, 0xe8d9a8], [0.25, 0xd9a05a]]) add(g, new THREE.Mesh(new THREE.ConeGeometry(0.24, 0.8, 8).translate(0, 0.4, 0), mat(c)), x, 0, 0).scale.set(1, 1, 1.9);
    add(g, blob(0.03, 0.12, 0.06, glow(0xff9a3c, 2)), 0, 0.06, 0);
  },
  hut(g) {
    add(g, box(0.8, 0.45, 0.8, mat(0xcbb48a)));
    add(g, hip(1.15, 0.5, 1.15, mat(0x8a6a3a)), 0, 0.45, 0);
    add(g, box(0.12, 0.3, 0.02, mat(0x4a3220)), 0, 0, 0.4);
    add(g, box(0.1, 0.3, 0.1, mat(0x6a6a6a)), 0.25, 0.6, 0.2);
  },
  kite(g) { // a survey kite on its line
    const k = new THREE.Mesh(new THREE.OctahedronGeometry(0.3), mat(0xc8402f, { side: THREE.DoubleSide })); k.scale.set(1, 1.4, 0.06); add(g, k, 0, 0.72, 0); k.rotation.y = 0.5;
    strut(g, mat(0xf4f1e6), [0, 0, 0], [0, 0.6, 0], 0.004);
    for (let i = 1; i < 4; i++) add(g, blob(0.03, 0.03, 0.03, mat(0xffd24a)), 0.02 * i, 0.6 - i * 0.12, 0);
  },
  rafts(g) {
    for (const z of [-0.26, 0.26]) for (let i = 0; i < 5; i++) add(g, tube(0.045, 0.9, mat(i % 2 ? 0x8a5a34 : 0x7a4f2e), 8), 0, 0.06, z + (i - 2) * 0.09);
    add(g, box(0.16, 0.1, 0.16, mat(0xd9a05a)), -0.2, 0.1, -0.26);
  },
  vent(g) {
    add(g, cyl(0.2, 0.5, 0.7, mat(0x3d3a3a, { roughness: 0.95 }), 10));
    add(g, cyl(0.19, 0.19, 0.03, glow(0xff7a2a, 2.4), 10), 0, 0.69, 0);
  },
};

// A building or prop inside its unit box, or null if there is none of that name.
export function buildProp(name) {
  if (!PROPS[name]) return null;
  const g = new THREE.Group();
  PROPS[name](g);
  return g;
}

// ---------- animals ----------
function quad(o) { // a four-legged animal, one unit long
  const g = new THREE.Group(), B = mat(o.body, { roughness: 0.9 }), L = mat(o.legs ?? o.body, { roughness: 0.9 }), H = mat(o.head ?? o.body, { roughness: 0.9 });
  const h = o.leg, by = h + o.fat * 0.9;
  add(g, blob(0.36, o.fat, o.wide, B), 0, by, 0);
  for (const [x, z] of [[0.24, 1], [0.24, -1], [-0.24, 1], [-0.24, -1]]) add(g, post(0.035, h + 0.05, L), x, (h + 0.05) / 2, z * o.wide * 0.6);
  const nx = 0.3 + (o.neck || 0) * 0.35, ny = by + (o.neck || 0) * 0.5;
  if (o.neck) strut(g, B, [0.26, by + 0.02, 0], [nx, ny, 0], 0.07);
  add(g, blob(0.14, 0.09, 0.08, H), nx + 0.1, ny + 0.02, 0);
  if (o.tail) add(g, blob(0.05, 0.05, 0.05, mat(o.tail)), -0.38, by + 0.04, 0);
  if (o.extra) o.extra(g, nx + 0.1, ny + 0.02, by);
  return g;
}
function fish(col, belly, len, fin) { // a whale or an orca, centred on y = 0
  const g = new THREE.Group();
  add(g, body([[-0.5, 0.01], [-0.3, 0.07], [0.1, 0.14], [0.36, 0.13], [0.5, 0.03]], mat(col, { roughness: 0.4 })));
  add(g, body([[-0.2, 0.05], [0.1, 0.12], [0.4, 0.09], [0.5, 0.02]], mat(belly, { roughness: 0.5 })), 0, -0.035, 0).scale.set(1, 0.8, 0.9);
  const fluke = new THREE.Mesh(panelGeo(0, 0.12, 0, 0.02, -0.06, 0.05, 0, 0.01, 0.2), mat(col, { side: THREE.DoubleSide }));
  const f2 = fluke.clone(); f2.scale.z = -1; add(g, fluke, -0.44, 0, 0); add(g, f2, -0.44, 0, 0);
  if (fin) { const d = new THREE.Mesh(panelGeo(0, 0.12, 0, 0.02, -0.1, 0.03, 0, 0.01, 0.18), mat(col, { side: THREE.DoubleSide })); d.rotation.x = -Math.PI / 2; add(g, d, 0.06, 0.12, 0); }
  void len;
  return g;
}
function bird(body2, tip) {
  const g = new THREE.Group();
  add(g, blob(0.16, 0.05, 0.05, mat(body2)));
  add(g, blob(0.04, 0.02, 0.02, mat(0xffb040)), 0.18, 0, 0);
  for (const s of [1, -1]) {
    const w = new THREE.Mesh(panelGeo(0.08, 0.14, 0, 0.012, 0.0, 0.05, 0, 0.006, 0.5), mat(tip, { side: THREE.DoubleSide }));
    w.scale.z = s; w.name = s > 0 ? 'wingR' : 'wingL'; add(g, w);
  }
  return g;
}
const BEASTS = {
  sheep: () => quad({ body: 0xf2efe6, legs: 0x2a2a2e, head: 0x2a2a2e, leg: 0.16, fat: 0.26, wide: 0.24 }),
  deer: () => quad({ body: 0x9a6a40, leg: 0.3, fat: 0.15, wide: 0.13, neck: 0.5, tail: 0xf4f1e6, extra: (g, x, y) => { for (const s of [-1, 1]) { strut(g, mat(0xd8c8a8), [x - 0.02, y + 0.05, s * 0.03], [x - 0.06, y + 0.22, s * 0.1], 0.012); strut(g, mat(0xd8c8a8), [x - 0.04, y + 0.14, s * 0.07], [x + 0.03, y + 0.2, s * 0.12], 0.01); } } }),
  horse: () => quad({ body: 0x7a4a2c, leg: 0.34, fat: 0.16, wide: 0.13, neck: 0.55, tail: 0x33241a, extra: (g, x, y, by) => strut(g, mat(0x33241a), [0.26, by + 0.1, 0], [x - 0.04, y + 0.08, 0], 0.03) }),
  buffalo: () => quad({ body: 0x4a4a52, leg: 0.22, fat: 0.24, wide: 0.2, extra: (g, x, y) => { for (const s of [-1, 1]) strut(g, mat(0xd8d0c0), [x - 0.02, y + 0.06, s * 0.05], [x + 0.03, y + 0.12, s * 0.2], 0.018); } }),
  camel: () => quad({ body: 0xc9a56a, leg: 0.36, fat: 0.15, wide: 0.13, neck: 0.75, extra: (g, x, y, by) => add(g, blob(0.12, 0.12, 0.09, mat(0xb89055)), -0.02, by + 0.15, 0) }),
  penguin: () => { const g = new THREE.Group(); add(g, blob(0.3, 0.5, 0.28, mat(0x1c1e26)), 0, 0.5, 0); add(g, blob(0.2, 0.36, 0.22, mat(0xf4f5f7)), 0.1, 0.44, 0); add(g, blob(0.17, 0.16, 0.17, mat(0x1c1e26)), 0.02, 0.96, 0); add(g, blob(0.1, 0.03, 0.04, mat(0xffa030)), 0.2, 0.94, 0); return g; },
  whale: () => fish(0x47627f, 0xb9c8d6, 1, false),
  glow: () => { const g = fish(0x3cbfae, 0xd9fff6, 1, false); g.traverse((o) => { if (o.material) { o.material = o.material.clone(); o.material.emissive = new THREE.Color(0x2fa59a); o.material.emissiveIntensity = 0.5; } }); return g; },
  orca: () => fish(0x16181e, 0xf4f5f7, 1, true),
  gull: () => bird(0xf4f5f7, 0x8a8f9a),
  crane: () => bird(0xf4f5f7, 0x1c1e26),
};
// Body length of each animal in world units.
export const BEAST_LEN = { sheep: 1.9, deer: 2.2, horse: 2.8, buffalo: 2.9, camel: 3, penguin: 1.1, whale: 12, glow: 12, orca: 7, gull: 2.6, crane: 3.4 };
const beastProto = {};
export function buildBeast(kind) {
  if (!BEASTS[kind]) return null;
  const proto = beastProto[kind] || (beastProto[kind] = BEASTS[kind]());
  return proto.clone();
}

// ---------- the pilot ----------
// One unit tall. Named parts are turned by posePilot: 0 and 1 are two steps of a walk, 2 is bent to a job.
export function buildPilot() {
  const g = new THREE.Group(), JACKET = mat(0x7a4f2e, { roughness: 0.8 }), TROUSER = mat(0x3d4252, { roughness: 0.9 }), SKIN = mat(0xe8b890, { roughness: 0.7 });
  const limb = (name, m, x, y, z, len, r) => { const p = new THREE.Group(); p.name = name; p.position.set(x, y, z); const leg = post(r, len, m); leg.position.y = -len / 2; leg.castShadow = true; p.add(leg); g.add(p); return p; };
  limb('legL', TROUSER, 0, 0.46, -0.07, 0.46, 0.055); limb('legR', TROUSER, 0, 0.46, 0.07, 0.46, 0.055);
  add(g, blob(0.11, 0.2, 0.15, JACKET), 0, 0.63, 0);
  limb('armL', JACKET, 0, 0.78, -0.17, 0.32, 0.04); limb('armR', JACKET, 0, 0.78, 0.17, 0.32, 0.04);
  add(g, blob(0.085, 0.095, 0.085, SKIN), 0, 0.9, 0);
  const cap = new THREE.Mesh(new THREE.SphereGeometry(0.095, 14, 8, 0, 6.283, 0, 1.75), mat(0x4a3524, { roughness: 0.85 })); add(g, cap, -0.005, 0.905, 0);
  add(g, blob(0.03, 0.022, 0.07, mat(0x1c1c20, { roughness: 0.2 })), 0.075, 0.915, 0); // goggles
  const scarf = new THREE.Mesh(new THREE.TorusGeometry(0.075, 0.025, 6, 14).rotateX(Math.PI / 2), mat(0xc8402f)); add(g, scarf, 0, 0.8, 0);
  return g;
}
export function posePilot(g, pose, time) {
  const part = (n) => g.getObjectByName(n);
  const s = pose === 2 ? 0 : pose === 0 ? 0.45 : -0.45;
  part('legL').rotation.z = s; part('legR').rotation.z = -s;
  if (pose === 2) { const w = Math.sin(time * 9) * 0.25; part('armL').rotation.z = 1.2 + w; part('armR').rotation.z = 1.2 - w; }
  else { part('armL').rotation.z = -s * 0.8; part('armR').rotation.z = s * 0.8; }
}
