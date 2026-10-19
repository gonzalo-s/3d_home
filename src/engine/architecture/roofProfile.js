export const ROOF = {
  eaveHigh: 3.15,
  eaveLow: 2.75,
  spanX: 6.1,
  parapetRise: 0.8,
  ceilingHeight: 2.4,
};

export function roofHeightAt(x) {
  const t = Math.min(Math.max(x / ROOF.spanX, 0), 1);
  return ROOF.eaveHigh + (ROOF.eaveLow - ROOF.eaveHigh) * t;
}

export const PARAPET_TOP = ROOF.eaveHigh + ROOF.parapetRise;

export const SKYLIGHTS = [
  { name: 'Baño del fondo', x: 1.5, z: 13.65, width: 0.62, depth: 0.88 },
  { name: 'Vestidor', x: 1.7, z: 4.8, width: 0.76, depth: 1.35 },
  { name: 'Pasillo / escalera', x: 0.86, z: 9.1, width: 0.98, depth: 4.05 },
];
