// Voxel models and "sprite stacks".
// A model is a small 3D grid of coloured cells. Baking slices it into flat layers
// (one 2D sprite per height) laid side by side in one atlas canvas. Drawing the
// layers bottom to top, each nudged up the screen, gives the 3D look with no 3D engine.

export class Vox {
  constructor(nx, ny, nz) {
    this.nx = nx; this.ny = ny; this.nz = nz;
    this.d = new Uint32Array(nx * ny * nz); // 0 = empty, otherwise 0xRRGGBB (never pure 0)
  }
  set(x, y, z, c) {
    x = Math.round(x); y = Math.round(y); z = Math.round(z);
    if (x < 0 || y < 0 || z < 0 || x >= this.nx || y >= this.ny || z >= this.nz) return;
    this.d[x + this.nx * (y + this.ny * z)] = c || 1;
  }
  get(x, y, z) {
    if (x < 0 || y < 0 || z < 0 || x >= this.nx || y >= this.ny || z >= this.nz) return 0;
    return this.d[x + this.nx * (y + this.ny * z)];
  }
  box(x0, y0, z0, x1, y1, z1, c) {
    for (let z = z0; z <= z1; z++) for (let y = y0; y <= y1; y++) for (let x = x0; x <= x1; x++) this.set(x, y, z, c);
  }
  ellipsoid(cx, cy, cz, rx, ry, rz, c) {
    for (let z = Math.floor(cz - rz); z <= Math.ceil(cz + rz); z++)
      for (let y = Math.floor(cy - ry); y <= Math.ceil(cy + ry); y++)
        for (let x = Math.floor(cx - rx); x <= Math.ceil(cx + rx); x++) {
          const dx = (x - cx) / rx, dy = (y - cy) / ry, dz = (z - cz) / rz;
          if (dx * dx + dy * dy + dz * dz <= 1) this.set(x, y, z, typeof c === 'function' ? c(x, y, z) : c);
        }
  }
  // A fuselage: circular cross-sections along x, radius given by rFn(x).
  tube(x0, x1, cy, cz, rFn, c) {
    for (let x = x0; x <= x1; x++) {
      const r = rFn(x);
      if (r <= 0) continue;
      for (let z = Math.floor(cz - r); z <= Math.ceil(cz + r); z++)
        for (let y = Math.floor(cy - r); y <= Math.ceil(cy + r); y++) {
          const dy = y - cy, dz = z - cz;
          if (dy * dy + dz * dz <= r * r + 0.3) this.set(x, y, z, typeof c === 'function' ? c(x, y, z) : c);
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
          f = vox.get(x, y, z + 1) ? 0.74 : 1.06; // lit from above
          if (!vox.get(x, y - 1, z)) f *= 1.05;
          if (!vox.get(x, y + 1, z)) f *= 0.9;
          f *= 0.86 + 0.14 * (z / Math.max(1, nz - 1));
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
  return { atlas, sil, nx, ny, nz, cz: (nz - 1) / 2 };
}
