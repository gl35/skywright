// The aircraft as smooth 3D models, made from a few shapes: bodies turned on a lathe, tapered wing panels,
// tubes, wheels and glass. Each is built one unit long (nose at x = +0.5, tail at -0.5; y is up, z is the
// right wing) and scaled by the renderer to the size the game uses.

import * as THREE from 'three';

const mats = new Map();
const mat = (hex, o) => {
  const key = hex + JSON.stringify(o || 0);
  let m = mats.get(key);
  if (!m) { m = new THREE.MeshStandardMaterial({ color: hex, roughness: 0.55, metalness: 0.08, ...o }); mats.set(key, m); }
  return m;
};
const GLASS = () => mat(0x1c3a5a, { roughness: 0.08, metalness: 0.5 });
const DARK = 0x2a2c33, STEEL = 0x8d939c;

function add(g, mesh, x = 0, y = 0, z = 0) { mesh.position.set(x, y, z); mesh.castShadow = true; g.add(mesh); return mesh; }

// A body of revolution along x. profile: [[x, radius], ...] from tail to nose. sy/sz squash it to an oval.
function body(profile, m, sy = 1, sz = 1, seg = 16) {
  const pts = profile.map(([x, r]) => new THREE.Vector2(Math.max(0.0005, r), x));
  const mesh = new THREE.Mesh(new THREE.LatheGeometry(pts, seg).rotateZ(-Math.PI / 2), m);
  mesh.scale.set(1, sy, sz);
  return mesh;
}
// One solid panel between a root section and a tip section. Each section: leading edge x, chord, height y, thickness.
// The root is at z = 0 and the tip at z = span. The top is gently curved by a ridge a third of the way back.
function panelGeo(x0, c0, y0, t0, x1, c1, y1, t1, span) {
  const sec = (x, c, y, t, z) => [[x, y, z], [x - c * 0.3, y + t / 2, z], [x - c, y, z], [x - c * 0.3, y - t / 2, z]]; // nose, top, tail, bottom
  const A = sec(x0, c0, y0, t0, 0), B = sec(x1, c1, y1, t1, span), v = [];
  const quad = (a, b, c, d) => v.push(...a, ...b, ...c, ...a, ...c, ...d);
  for (let i = 0; i < 4; i++) { const j = (i + 1) % 4; quad(A[i], B[i], B[j], A[j]); }
  quad(B[0], B[3], B[2], B[1]); quad(A[0], A[1], A[2], A[3]);
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(v, 3));
  g.computeVertexNormals();
  return g;
}
// A pair of wings (left and right). o: { x, chord, tipX, tipChord, span (half), y, tipY, thick, tipThick }
function wings(g, m, o) {
  const geo = panelGeo(o.x, o.chord, 0, o.thick || 0.02, o.tipX ?? o.x, o.tipChord ?? o.chord, (o.tipY ?? o.y) - o.y, o.tipThick ?? (o.thick || 0.02) * 0.6, o.span);
  const r = add(g, new THREE.Mesh(geo, m), 0, o.y, o.z0 || 0);
  const l = add(g, new THREE.Mesh(geo, m), 0, o.y, -(o.z0 || 0)); l.scale.z = -1;
  m.side = THREE.DoubleSide;
  return [r, l];
}
// An upright fin: a single panel standing on the body.
function fin(g, m, o) {
  const geo = panelGeo(o.x, o.chord, 0, o.thick || 0.015, o.tipX ?? o.x - o.chord * 0.4, o.tipChord ?? o.chord * 0.5, 0, (o.thick || 0.015) * 0.6, o.h);
  const f = add(g, new THREE.Mesh(geo, m), 0, o.y || 0, o.z || 0);
  f.rotation.x = -Math.PI / 2 + (o.cant || 0);
  m.side = THREE.DoubleSide;
  return f;
}
const tube = (r, len, m, seg = 10) => new THREE.Mesh(new THREE.CylinderGeometry(r, r, len, seg).rotateZ(Math.PI / 2), m); // along x
const post = (r, len, m) => new THREE.Mesh(new THREE.CylinderGeometry(r, r, len, 6), m); // upright
const wheel = (r, w, m) => new THREE.Mesh(new THREE.CylinderGeometry(r, r, w, 14).rotateX(Math.PI / 2), m);
const blob = (rx, ry, rz, m) => { const s = new THREE.Mesh(new THREE.SphereGeometry(1, 16, 10), m); s.scale.set(rx, ry, rz); return s; };
// A strut between two points.
function strut(g, m, a, b, r = 0.006) {
  const A = new THREE.Vector3(...a), B = new THREE.Vector3(...b), s = post(r, A.distanceTo(B), m);
  s.position.copy(A).add(B).multiplyScalar(0.5);
  s.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), B.clone().sub(A).normalize());
  s.castShadow = true; g.add(s);
}
function roundel(g, x, y, z, r) {
  [[r, 0x24407a], [r * 0.66, 0xf2f0e6], [r * 0.33, 0xc8402f]].forEach(([rad, col], i) => {
    const c = new THREE.Mesh(new THREE.CircleGeometry(rad, 20).rotateX(-Math.PI / 2), mat(col, { polygonOffset: true, polygonOffsetFactor: -2 - i, polygonOffsetUnits: -2 - i }));
    c.position.set(x, y + 0.0015 * (i + 1), z); g.add(c);
  });
}
function tail(g, m, mFin, x, y, span, chord, h) {
  wings(g, m, { x, chord, tipX: x - chord * 0.25, tipChord: chord * 0.6, span, y, thick: 0.012 });
  fin(g, mFin || m, { x, chord: chord * 1.1, h, y: y + 0.005, thick: 0.012 });
}
function gear(g, x, y, z, r = 0.035) {
  for (const s of [-1, 1]) {
    add(g, wheel(r, 0.02, mat(0x1c1c20, { roughness: 0.9 })), x, y, s * z);
    strut(g, mat(STEEL), [x - 0.02, y + 0.09, s * z * 0.5], [x, y, s * z], 0.006);
  }
}

// S is the half-span the game gives this aircraft, in body lengths.
const BUILD = {
  sparrow(g, S) { // biplane trainer: red body, cream wings, radial engine
    const RED = mat(0xc8402f), CREAM = mat(0xeadfb6), WOOD = mat(0x7a5230);
    add(g, body([[-0.5, 0.008], [-0.42, 0.028], [-0.2, 0.05], [0.1, 0.072], [0.36, 0.074], [0.41, 0.068]], RED));
    add(g, tube(0.08, 0.07, mat(0x3a3c44, { metalness: 0.4 }), 14), 0.43, 0, 0);
    add(g, blob(0.03, 0.03, 0.03, mat(STEEL, { metalness: 0.6 })), 0.475, 0, 0);
    wings(g, CREAM, { x: 0.3, chord: 0.2, span: S, y: -0.055, thick: 0.022, tipThick: 0.016 });
    wings(g, CREAM, { x: 0.34, chord: 0.21, span: S * 1.04, y: 0.135, thick: 0.022, tipThick: 0.016 });
    for (const s of [-1, 1]) for (const x of [0.29, 0.16]) {
      strut(g, WOOD, [x - 0.04, -0.05, s * S * 0.62], [x, 0.13, s * S * 0.62]);
      strut(g, WOOD, [x - 0.03, 0.05, s * 0.05], [x, 0.13, s * 0.09]);
    }
    tail(g, CREAM, RED, -0.34, 0.012, S * 0.36, 0.13, 0.14);
    gear(g, 0.27, -0.165, 0.12, 0.04);
    add(g, blob(0.05, 0.02, 0.035, mat(DARK)), 0.03, 0.068, 0); // open cockpit
    add(g, blob(0.022, 0.022, 0.022, mat(0x6b4a2e)), 0.02, 0.085, 0); // the pilot's head
    roundel(g, 0.24, 0.147, S * 0.72, 0.062); roundel(g, 0.24, 0.147, -S * 0.72, 0.062);
    return { props: [{ x: 0.49, y: 0, z: 0, r: 0.14 }], jets: [] };
  },
  heron(g, S) { // high-wing floatplane, white with a blue stripe
    const WHITE = mat(0xf2f4f5), BLUE = mat(0x2a5caa);
    add(g, body([[-0.5, 0.008], [-0.3, 0.04], [0.05, 0.075], [0.36, 0.078], [0.46, 0.05], [0.5, 0.02]], WHITE, 1.05, 0.9));
    add(g, body([[-0.3, 0.041], [0.05, 0.077], [0.36, 0.08]], BLUE, 0.35, 0.92));
    wings(g, WHITE, { x: 0.27, chord: 0.2, tipX: 0.24, tipChord: 0.13, span: S, y: 0.085, thick: 0.026 });
    add(g, blob(0.09, 0.035, 0.05, GLASS()), 0.26, 0.055, 0);
    tail(g, WHITE, BLUE, -0.36, 0.02, S * 0.36, 0.13, 0.15);
    for (const s of [-1, 1]) {
      add(g, body([[-0.3, 0.004], [-0.15, 0.03], [0.2, 0.034], [0.3, 0.008]], WHITE, 0.8, 1), 0.08, -0.17, s * 0.15);
      strut(g, mat(STEEL), [0.2, -0.05, s * 0.05], [0.2, -0.15, s * 0.15]); strut(g, mat(STEEL), [0, -0.05, s * 0.05], [0, -0.15, s * 0.15]);
    }
    return { props: [{ x: 0.51, y: 0, z: 0, r: 0.12 }], jets: [] };
  },
  marlin(g, S) { // racing flying boat: navy hull, engine on struts above the wing
    const NAVY = mat(0x24407a), CREAM = mat(0xe9e2c8), RED = mat(0xb8332a);
    add(g, body([[-0.5, 0.012], [-0.3, 0.045], [0.1, 0.08], [0.38, 0.07], [0.5, 0.012]], NAVY, 1.15, 0.85));
    add(g, body([[-0.2, 0.01], [0.1, 0.05], [0.4, 0.045], [0.5, 0.01]], RED, 0.5, 0.8), 0, -0.07, 0); // the planing bottom
    wings(g, CREAM, { x: 0.22, chord: 0.2, tipX: 0.18, tipChord: 0.11, span: S, y: 0.12, thick: 0.024 });
    add(g, body([[-0.16, 0.012], [-0.05, 0.04], [0.1, 0.042], [0.16, 0.02]], RED), 0.12, 0.25, 0);
    for (const s of [-1, 1]) { strut(g, mat(STEEL), [0.18, 0.12, s * 0.06], [0.16, 0.24, s * 0.02]); strut(g, mat(STEEL), [0.04, 0.12, s * 0.06], [0.06, 0.24, s * 0.02]); strut(g, mat(STEEL), [0.14, 0.03, s * 0.05], [0.14, 0.12, s * 0.09]); }
    for (const s of [-1, 1]) { add(g, body([[-0.07, 0.004], [0, 0.02], [0.07, 0.006]], NAVY), 0.12, 0.03, s * S * 0.82); strut(g, mat(STEEL), [0.12, 0.05, s * S * 0.82], [0.12, 0.115, s * S * 0.8]); }
    add(g, blob(0.06, 0.025, 0.035, GLASS()), 0.16, 0.085, 0);
    tail(g, CREAM, NAVY, -0.36, 0.06, S * 0.36, 0.12, 0.15);
    return { props: [{ x: 0.29, y: 0.25, z: 0, r: 0.11 }], jets: [] };
  },
  dragonfly(g, S) { // clockwork ornithopter: a brass body and four beating wings of oiled silk
    const BRASS = mat(0xc9a24a, { metalness: 0.6, roughness: 0.35 }), SILK = mat(0xe9e2c4, { transparent: true, opacity: 0.82, roughness: 0.3 });
    add(g, body([[-0.5, 0.006], [-0.2, 0.016], [0.1, 0.03], [0.3, 0.05], [0.42, 0.045], [0.5, 0.015]], BRASS));
    add(g, blob(0.045, 0.04, 0.05, GLASS()), 0.43, 0.02, 0);
    for (let i = 0; i < 5; i++) add(g, tube(0.022 - i * 0.003, 0.012, mat(0x7a5a1e, { metalness: 0.6 })), -0.05 - i * 0.08, 0, 0);
    const flap = [];
    for (const [x, len] of [[0.3, 1], [0.12, 0.86]]) {
      const pair = wings(g, SILK, { x, chord: 0.13, tipX: x - 0.05, tipChord: 0.05, span: S * len, y: 0.03, thick: 0.006, tipThick: 0.004 });
      flap.push(pair);
    }
    for (const s of [-1, 1]) for (const x of [0.3, 0.15, 0]) strut(g, BRASS, [x, -0.02, s * 0.02], [x + 0.03, -0.11, s * 0.09], 0.004);
    return { props: [], jets: [], anim(t, power) { const a = Math.sin(t) * 0.45 * (0.4 + power); flap[0][0].rotation.x = a; flap[0][1].rotation.x = -a; flap[1][0].rotation.x = -a * 0.9; flap[1][1].rotation.x = a * 0.9; } };
  },
  kestrel(g, S) { // twin turboprop: low wing, two engines, T-tail
    const BODY = mat(0xdfe4e8), TEAL = mat(0x2f7f86), ENG = mat(0xb9bfc6, { metalness: 0.3 });
    add(g, body([[-0.5, 0.01], [-0.32, 0.045], [-0.05, 0.068], [0.3, 0.07], [0.43, 0.052], [0.5, 0.015]], BODY));
    add(g, body([[-0.32, 0.046], [-0.05, 0.069], [0.3, 0.071], [0.4, 0.06]], TEAL, 0.25, 1.005), 0, -0.02, 0);
    wings(g, BODY, { x: 0.2, chord: 0.2, tipX: 0.13, tipChord: 0.08, span: S, y: -0.035, tipY: 0.0, thick: 0.028 });
    for (const s of [-1, 1]) add(g, body([[-0.14, 0.012], [-0.04, 0.036], [0.1, 0.04], [0.16, 0.022]], ENG), 0.16, -0.015, s * S * 0.36);
    add(g, blob(0.07, 0.035, 0.05, GLASS()), 0.36, 0.035, 0);
    fin(g, TEAL, { x: -0.3, chord: 0.17, h: 0.19, y: 0.03, tipX: -0.4, tipChord: 0.1 });
    wings(g, BODY, { x: -0.38, chord: 0.1, tipX: -0.41, tipChord: 0.06, span: S * 0.34, y: 0.22, thick: 0.012 });
    gear(g, 0.12, -0.13, 0.1, 0.028); add(g, wheel(0.024, 0.016, mat(0x1c1c20)), 0.4, -0.13, 0); strut(g, mat(STEEL), [0.4, -0.05, 0], [0.4, -0.13, 0]);
    return { props: [{ x: 0.33, y: -0.015, z: S * 0.36, r: 0.1 }, { x: 0.33, y: -0.015, z: -S * 0.36, r: 0.1 }], jets: [] };
  },
  comet(g, S) { // light jet: swept wing, two engines on the tail, T-tail
    const WHITE = mat(0xf5f7fa), BLUE = mat(0x2a5caa), ENG = mat(0xc9ced6, { metalness: 0.4 });
    add(g, body([[-0.5, 0.012], [-0.3, 0.05], [0, 0.064], [0.3, 0.062], [0.44, 0.035], [0.5, 0.006]], WHITE));
    add(g, body([[-0.3, 0.051], [0, 0.065], [0.3, 0.063], [0.42, 0.04]], BLUE, 0.18, 1.006), 0, -0.012, 0);
    wings(g, WHITE, { x: 0.14, chord: 0.24, tipX: -0.1, tipChord: 0.07, span: S, y: -0.035, tipY: -0.01, thick: 0.024 });
    for (const s of [-1, 1]) { add(g, body([[-0.11, 0.024], [-0.05, 0.036], [0.08, 0.038], [0.11, 0.03]], ENG), -0.24, 0.035, s * 0.105); add(g, tube(0.03, 0.01, mat(DARK)), -0.125, 0.035, s * 0.105); }
    add(g, blob(0.075, 0.03, 0.045, GLASS()), 0.37, 0.028, 0);
    fin(g, BLUE, { x: -0.3, chord: 0.2, h: 0.2, y: 0.03, tipX: -0.42, tipChord: 0.1 });
    wings(g, WHITE, { x: -0.4, chord: 0.1, tipX: -0.46, tipChord: 0.05, span: S * 0.36, y: 0.23, thick: 0.01 });
    gear(g, 0.02, -0.11, 0.08, 0.022); add(g, wheel(0.02, 0.014, mat(0x1c1c20)), 0.36, -0.11, 0); strut(g, mat(STEEL), [0.36, -0.04, 0], [0.36, -0.11, 0]);
    return { props: [], jets: [{ x: -0.36, y: 0.035, z: 0.105, r: 0.03 }, { x: -0.36, y: 0.035, z: -0.105, r: 0.03 }] };
  },
  meteor(g, S) { // rocket plane: a dark needle on a delta wing
    const GREY = mat(0x4f5564, { metalness: 0.35, roughness: 0.4 }), ORANGE = mat(0xe07a2a);
    add(g, body([[-0.5, 0.05], [-0.42, 0.06], [-0.1, 0.058], [0.25, 0.04], [0.5, 0.003]], GREY));
    add(g, body([[0.3, 0.036], [0.5, 0.004]], ORANGE));
    add(g, body([[-0.56, 0.05], [-0.5, 0.034]], mat(0x1a1a1e, { metalness: 0.6 })));
    wings(g, GREY, { x: 0.12, chord: 0.56, tipX: -0.34, tipChord: 0.08, span: S, y: -0.02, thick: 0.03, tipThick: 0.008 });
    for (const s of [-1, 1]) fin(g, ORANGE, { x: -0.3, chord: 0.16, h: 0.13, y: 0.03, z: s * 0.05, cant: s * 0.3, tipX: -0.4, tipChord: 0.07 });
    add(g, blob(0.07, 0.022, 0.03, GLASS()), 0.2, 0.04, 0);
    gear(g, -0.1, -0.1, 0.1, 0.022); add(g, wheel(0.018, 0.014, mat(0x1c1c20)), 0.28, -0.1, 0); strut(g, mat(STEEL), [0.28, -0.03, 0], [0.28, -0.1, 0]);
    return { props: [], jets: [{ x: -0.56, y: 0, z: 0, r: 0.045 }] };
  },
  ark(g, S) { // patchwork airship: a quilted gas bag over a boat hull, with paddle wheels and a door
    const WOOD = mat(0x7a4f2e), RED = mat(0xb5563a), BRASS = mat(0xc9a24a, { metalness: 0.5 });
    const bag = new THREE.SphereGeometry(1, 18, 12).toNonIndexed();
    const n = bag.attributes.position.count, col = new Float32Array(n * 3), P = [0xb5563a, 0xd9a05a, 0x8a5a34, 0x6a4a8a, 0xc9a24a, 0x7a9a6a, 0xa8452f, 0xd8c08a], c = new THREE.Color();
    for (let i = 0; i < n; i += 6) { c.setHex(P[(i * 2654435761 >>> 8) % P.length]); for (let k = 0; k < 6; k++) { col[(i + k) * 3] = c.r; col[(i + k) * 3 + 1] = c.g; col[(i + k) * 3 + 2] = c.b; } }
    bag.setAttribute('color', new THREE.BufferAttribute(col, 3)); bag.computeVertexNormals();
    const env = add(g, new THREE.Mesh(bag, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.8 })), 0, 0.13, 0);
    env.scale.set(0.5, 0.17, 0.2);
    add(g, body([[-0.3, 0.01], [-0.2, 0.05], [0.15, 0.06], [0.3, 0.012]], WOOD, 0.8, 1), 0, -0.1, 0);
    const cabin = add(g, new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.06, 0.08), mat(0x9a6a40)), -0.02, -0.055, 0);
    void cabin;
    add(g, new THREE.Mesh(new THREE.BoxGeometry(0.035, 0.06, 0.004), mat(0x8ff6ff, { emissive: 0x3fb8c8, emissiveIntensity: 1.2 })), 0.02, -0.05, 0.043); // the door
    for (const s of [-1, 1]) {
      const w = add(g, wheel(0.06, 0.02, RED), -0.05, -0.1, s * 0.08);
      for (let i = 0; i < 6; i++) { const b = new THREE.Mesh(new THREE.BoxGeometry(0.012, 0.13, 0.024), BRASS); b.rotation.z = (i * Math.PI) / 6; w.add(b); }
      for (const x of [-0.22, 0, 0.22]) strut(g, mat(0x3a2a1a), [x * 0.9, -0.07, s * 0.04], [x, 0.03, s * 0.12], 0.003);
      fin(g, RED, { x: -0.36, chord: 0.14, h: 0.12, y: 0.13, z: s * 0.02, cant: s * 1.2, tipX: -0.44, tipChord: 0.07 });
    }
    fin(g, RED, { x: -0.36, chord: 0.14, h: 0.14, y: 0.2, tipX: -0.44, tipChord: 0.07 });
    return { props: [{ x: -0.31, y: -0.1, z: 0, r: 0.045 }], jets: [] };
  },
  starling(g, S) { // star raft: a white lifting body on a broad delta, black underneath
    const WHITE = mat(0xf4f5f7, { roughness: 0.4 }), BLACK = mat(0x1d1f25, { roughness: 0.7 }), GOLD = mat(0xd9a441, { metalness: 0.6, roughness: 0.3 });
    add(g, body([[-0.5, 0.062], [-0.42, 0.07], [0.2, 0.068], [0.38, 0.05], [0.47, 0.024], [0.5, 0.006]], WHITE, 1, 1.05));
    add(g, body([[0.4, 0.045], [0.47, 0.025], [0.5, 0.007]], BLACK, 1.01, 1.06));
    wings(g, WHITE, { x: 0.2, chord: 0.66, tipX: -0.36, tipChord: 0.1, span: S, y: -0.04, thick: 0.03, tipThick: 0.01 });
    wings(g, BLACK, { x: 0.21, chord: 0.68, tipX: -0.355, tipChord: 0.11, span: S * 1.01, y: -0.052, thick: 0.014, tipThick: 0.006 });
    fin(g, WHITE, { x: -0.26, chord: 0.22, h: 0.2, y: 0.05, tipX: -0.4, tipChord: 0.1 });
    add(g, blob(0.06, 0.02, 0.04, GLASS()), 0.34, 0.045, 0);
    for (const [y, z] of [[0.03, 0], [-0.02, 0.04], [-0.02, -0.04]]) { const bell = new THREE.Mesh(new THREE.ConeGeometry(0.032, 0.07, 12, 1, true).rotateZ(-Math.PI / 2), mat(0x30323a, { metalness: 0.6, side: THREE.DoubleSide })); add(g, bell, -0.52, y, z); }
    add(g, tube(0.071, 0.02, GOLD, 16), -0.3, 0, 0); // a gold band round the body
    gear(g, -0.12, -0.12, 0.12, 0.022); add(g, wheel(0.018, 0.014, mat(0x1c1c20)), 0.32, -0.12, 0); strut(g, mat(STEEL), [0.32, -0.05, 0], [0.32, -0.12, 0]);
    return { props: [], jets: [{ x: -0.55, y: 0.03, z: 0, r: 0.03 }, { x: -0.55, y: -0.02, z: 0.04, r: 0.03 }, { x: -0.55, y: -0.02, z: -0.04, r: 0.03 }] };
  },
};

// Build aircraft `id` one unit long. Returns { group, props, jets, anim, minY } with positions in body lengths.
export function buildCraft(id, S) {
  const group = new THREE.Group();
  const out = (BUILD[id] || BUILD.sparrow)(group, S);
  const box = new THREE.Box3().setFromObject(group);
  return { group, ...out, minY: box.min.y };
}
