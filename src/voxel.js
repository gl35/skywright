// Voxel models and "sprite stacks".
// A model is a small 3D grid of coloured cells. Baking slices it into flat layers
// (one 2D sprite per height) laid side by side in one atlas canvas. Drawing the
// layers bottom to top, each nudged up the screen, gives the 3D look with no 3D engine.
//
// A model is described in coarse "design" units and stored k times finer, so shapes
// come out rounder and there is room for small details painted on afterwards.

export const shade = (c, f) =>
  (Math.min(255, ((c >> 16) & 255) * f) << 16) | (Math.min(255, ((c >> 8) & 255) * f) << 8) | Math.min(255, (c & 255) * f) | 1;

export class Vox {
  constructor(nx, ny, nz, k = 1) {
    this.k = k;
    this.nx = nx * k; this.ny = ny * k; this.nz = nz * k;
    this.d = new Uint32Array(this.nx * this.ny * this.nz); // 0 = empty, otherwise 0xRRGGBB
  }
  // ---- fine (stored) coordinates ----
  get(x, y, z) {
    if (x < 0 || y < 0 || z < 0 || x >= this.nx || y >= this.ny || z >= this.nz) return 0;
    return this.d[x + this.nx * (y + this.ny * z)];
  }
  put(x, y, z, c) {
    if (x < 0 || y < 0 || z < 0 || x >= this.nx || y >= this.ny || z >= this.nz) return;
    this.d[x + this.nx * (y + this.ny * z)] = c || 1;
  }
  // Recolour existing cells: fn(x, y, z, colour) returns a new colour, or nothing to leave it.
  each(fn) {
    for (let z = 0; z < this.nz; z++) for (let y = 0; y < this.ny; y++) for (let x = 0; x < this.nx; x++) {
      const i = x + this.nx * (y + this.ny * z), c = this.d[i];
      if (!c) continue;
      const n = fn(x, y, z, c);
      if (n !== undefined) this.d[i] = n;
    }
  }
  topZ(x, y) { for (let z = this.nz - 1; z >= 0; z--) if (this.d[x + this.nx * (y + this.ny * z)]) return z; return -1; }
  // Paint the topmost cell of each column in a design-unit rectangle.
  paintTop(x0, y0, x1, y1, fn) {
    const k = this.k;
    for (let y = Math.round(y0 * k); y <= Math.round(y1 * k) + k - 1; y++)
      for (let x = Math.round(x0 * k); x <= Math.round(x1 * k) + k - 1; x++) {
        if (x < 0 || y < 0 || x >= this.nx || y >= this.ny) continue;
        const z = this.topZ(x, y);
        if (z < 0) continue;
        const n = fn(x / k, y / k, this.d[x + this.nx * (y + this.ny * z)], z);
        if (n !== undefined) this.d[x + this.nx * (y + this.ny * z)] = n;
      }
  }
  // ---- design coordinates ----
  set(x, y, z, c) { this.box(x, y, z, x, y, z, c); }
  box(x0, y0, z0, x1, y1, z1, c) {
    const k = this.k;
    for (let z = Math.round(z0 * k); z <= Math.round(z1 * k) + k - 1; z++)
      for (let y = Math.round(y0 * k); y <= Math.round(y1 * k) + k - 1; y++)
        for (let x = Math.round(x0 * k); x <= Math.round(x1 * k) + k - 1; x++) this.put(x, y, z, c);
  }
  ellipsoid(cx, cy, cz, rx, ry, rz, c) {
    const k = this.k, h = (k - 1) / 2;
    const X = cx * k + h, Y = cy * k + h, Z = cz * k + h, RX = rx * k + h, RY = ry * k + h, RZ = rz * k + h;
    for (let z = Math.floor(Z - RZ); z <= Math.ceil(Z + RZ); z++)
      for (let y = Math.floor(Y - RY); y <= Math.ceil(Y + RY); y++)
        for (let x = Math.floor(X - RX); x <= Math.ceil(X + RX); x++) {
          const dx = (x - X) / RX, dy = (y - Y) / RY, dz = (z - Z) / RZ;
          if (dx * dx + dy * dy + dz * dz <= 1) this.put(x, y, z, typeof c === 'function' ? c(Math.floor(x / k), Math.floor(y / k), Math.floor(z / k)) : c);
        }
  }
  // A fuselage: circular cross-sections along x, radius given by rFn(x).
  tube(x0, x1, cy, cz, rFn, c) {
    const k = this.k, h = (k - 1) / 2, Y = cy * k + h, Z = cz * k + h;
    for (let x = Math.round(x0 * k); x <= Math.round(x1 * k) + k - 1; x++) {
      const r = rFn(x / k) * k + h * 0.6;
      if (r <= 0) continue;
      for (let z = Math.floor(Z - r); z <= Math.ceil(Z + r); z++)
        for (let y = Math.floor(Y - r); y <= Math.ceil(Y + r); y++) {
          const dy = y - Y, dz = z - Z;
          if (dy * dy + dz * dz <= r * r + 0.3) this.put(x, y, z, typeof c === 'function' ? c(Math.floor(x / k), Math.floor(y / k), Math.floor(z / k)) : c);
        }
    }
  }
}

// Roll the model about its long (x) axis. Positive angle drops the +y wing.
export function rollVox(src, ang) {
  const cs = Math.cos(ang), sn = Math.sin(ang);
  let nz = Math.ceil(src.ny * Math.abs(sn) + src.nz * Math.abs(cs)) + 2;
  if (nz % 2 !== src.nz % 2) nz++;
  const dst = new Vox(src.nx, src.ny, nz);
  const cy = (src.ny - 1) / 2, cz = (src.nz - 1) / 2, czd = (nz - 1) / 2;
  for (let z = 0; z < nz; z++)
    for (let y = 0; y < src.ny; y++) {
      const dy = y - cy, dz = z - czd;
      const fy = cy + dy * cs - dz * sn, fz = cz + dy * sn + dz * cs;
      const sy = Math.round(fy), sz = Math.round(fz);
      // second-nearest source cell: thin parts like wings would otherwise get holes when tilted
      const ay = Math.abs(fy - sy) > Math.abs(fz - sz);
      const sy2 = ay ? sy + (fy > sy ? 1 : -1) : sy, sz2 = ay ? sz : sz + (fz > sz ? 1 : -1);
      for (let x = 0; x < src.nx; x++) {
        const c = src.get(x, sy, sz) || (ang !== 0 ? src.get(x, sy2, sz2) : 0);
        if (c) dst.d[x + dst.nx * (y + dst.ny * z)] = c;
      }
    }
  return dst;
}

// Slice a model into an atlas: layer z sits at x offset z*nx. Also builds a flat shadow silhouette.
export function bake(vox, { light = true } = {}) {
  const { nx, ny, nz } = vox;
  const atlas = document.createElement('canvas');
  atlas.width = nx * nz; atlas.height = ny;
  const actx = atlas.getContext('2d');
  const img = actx.createImageData(nx * nz, ny);
  const sil = document.createElement('canvas');
  sil.width = nx; sil.height = ny;
  const sctx = sil.getContext('2d');
  const simg = sctx.createImageData(nx, ny);
  for (let z = 0; z < nz; z++)
    for (let y = 0; y < ny; y++)
      for (let x = 0; x < nx; x++) {
        const c = vox.get(x, y, z);
        if (!c) continue;
        let f = 1;
        if (light) {
          f = vox.get(x, y, z + 1) ? 0.72 : 1.06; // lit from above
          if (!vox.get(x, y - 1, z)) f *= 1.05;
          if (!vox.get(x, y + 1, z)) f *= 0.88;
          f *= 0.84 + 0.16 * (z / Math.max(1, nz - 1));
          // soft shadow from anything overhanging: under a top wing, beside a tail fin
          let occ = 0;
          for (let h = 2; h <= 5; h++) if (vox.get(x, y, z + h) || vox.get(x + 1, y - 1, z + h)) occ++;
          f *= 1 - occ * 0.06;
        }
        const o = (y * nx * nz + z * nx + x) * 4;
        img.data[o] = Math.min(255, ((c >> 16) & 255) * f);
        img.data[o + 1] = Math.min(255, ((c >> 8) & 255) * f);
        img.data[o + 2] = Math.min(255, (c & 255) * f);
        img.data[o + 3] = 255;
        simg.data[(y * nx + x) * 4 + 3] = 255;
      }
  actx.putImageData(img, 0, 0);
  sctx.putImageData(simg, 0, 0);
  return { atlas, sil, nx, ny, nz, cz: (nz - 1) / 2, vox }; // vox: the cells themselves, for the 3D renderer
}
