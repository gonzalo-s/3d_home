import { YA, xe } from '../../legacy/three-runtime.js';

export const PLACARD_REFERENCES = {
  large: {
    title: 'Placard grande',
    image: '/assets/references/White oak wardrobe with long-garment bay-1.png',
  },
  small: {
    title: 'Placard chico',
    image: '/assets/references/Streamlined wardrobe with full-height hanging bay-2.png',
  },
};

const REFERENCE_HEIGHT = 1.96;
const PANEL = 0.02;
const CLOTH_COLORS = [0xd9c3a5, 0x4a4d52, 0xf1efea, 0x8da1bd, 0x3f5a7d, 0xb78f62];

const LARGE_LAYOUT = {
  widths: [159, 240, 129, 335, 198],
  shelfMaterial: 'oak',
  columns: [
    { kind: 'shelves', shelves: [1.59, 1.23, 0.87, 0.51] },
    { kind: 'shelves', shelves: [1.53, 1.22, 0.87], drawers: { bottom: 0.39, top: 0.85, count: 2 } },
    { kind: 'hangLong', rod: 1.81, drop: 1.62 },
    { kind: 'hangDouble', rodTop: 1.81, dropTop: 0.92, midShelf: 0.86, rodBottom: 0.8, dropBottom: 0.67 },
    { kind: 'shelves', shelves: [1.53, 1.22, 0.87], drawers: { bottom: 0.39, top: 0.85, count: 2 } },
  ],
};

const SMALL_LAYOUT = {
  widths: [212, 125, 282, 125, 223],
  shelfMaterial: 'white',
  columns: [
    { kind: 'shelves', shelves: [1.65, 1.33, 1.02], drawers: { bottom: 0.37, top: 1.0, count: 4 } },
    { kind: 'hangLong', rod: 1.84, drop: 1.55 },
    { kind: 'hangDouble', rodTop: 1.83, dropTop: 0.8, midShelf: 0.95, rodBottom: 0.88, dropBottom: 0.72 },
    { kind: 'shelves', shelves: [1.63, 1.32, 1.01, 0.72, 0.4] },
    { kind: 'shelves', shelves: [1.65, 1.33, 1.02], drawers: { bottom: 0.37, top: 1.0, count: 4 } },
  ],
};

const LAYOUTS = { large: LARGE_LAYOUT, small: SMALL_LAYOUT };

export function createPlacardBuilder(y, Y) {
  const oak = new xe({ color: 0xd8b27c, roughness: 0.7 });
  const back = new xe({ color: 0xece7de, roughness: 0.9 });
  const cloth = CLOTH_COLORS.map((color) => new xe({ color, roughness: 0.95 }));
  const materials = { oak, white: y.white };

  function addCloth(group, x, yc, z, w, h, d, colorIndex) {
    const mesh = Y(group, x, yc, z, w, h, d, cloth[colorIndex % cloth.length]);
    mesh.castShadow = false;
    return mesh;
  }

  function addStacks(group, xc, depth, shelfY, zStart, width, seed) {
    const count = width > 0.55 ? 2 : 1;
    const length = Math.min(0.3, (width - 0.06) / count - 0.02);
    for (let s = 0; s < count; s++) {
      const z = zStart + (width / count) * (s + 0.5);
      for (let layer = 0; layer < 2; layer++) {
        addCloth(group, xc - 0.01, shelfY + PANEL / 2 + 0.03 + layer * 0.055, z, depth - 0.14, 0.05, length, seed + s + layer);
      }
    }
  }

  function addHanging(group, xc, rodY, drop, zStart, width, seed) {
    Y(group, xc, rodY, zStart + width / 2, 0.02, 0.02, width, y.metal);
    const count = Math.max(2, Math.round(width / 0.1));
    const garmentWidth = Math.min(0.17, width * 0.35);
    const step = (width - garmentWidth - 0.04) / (count - 1);
    for (let g = 0; g < count; g++) {
      const length = drop * (0.8 + 0.2 * ((g + seed) % 3) / 2);
      const x = xc + (g % 2 ? 0.035 : -0.035);
      addCloth(group, x, rodY - 0.04 - length / 2, zStart + 0.02 + garmentWidth / 2 + g * step, 0.05, length, garmentWidth, seed + g);
    }
  }

  function addPlacard(level, { kind, x, z, length, height, depth = 0.6 }) {
    const layout = LAYOUTS[kind];
    const group = new YA();
    group.userData.furniture = 'wardrobe';
    level.add(group);
    const scale = height / REFERENCE_HEIGHT;
    const shelfMaterial = materials[layout.shelfMaterial];
    const total = layout.widths.reduce((sum, width) => sum + width, 0);
    const zStart = z - length / 2;
    const front = x + depth / 2;

    Y(group, x - depth / 2 + 0.005, height / 2, z, 0.01, height, length, back);
    Y(group, x, height - PANEL / 2, z, depth, PANEL, length, y.white);
    Y(group, x, PANEL / 2, z, depth, PANEL, length, y.white);

    let cursor = zStart;
    layout.columns.forEach((column, index) => {
      const width = (layout.widths[index] / total) * length;
      const inner = width - PANEL;
      const zMid = cursor + width / 2;
      Y(group, x, height / 2, cursor, depth, height, PANEL, y.white);
      const seed = index * 3;

      if (column.kind === 'shelves') {
        for (const shelf of column.shelves) {
          const shelfY = shelf * scale;
          Y(group, x + 0.01, shelfY, zMid, depth - 0.02, PANEL, inner, shelfMaterial);
          addStacks(group, x, depth, shelfY, cursor + PANEL / 2, inner, seed + Math.round(shelf * 10));
        }
        if (column.drawers) {
          const { bottom, top, count } = column.drawers;
          const bottomY = bottom * scale;
          const topY = top * scale;
          const drawerHeight = (topY - bottomY) / count;
          Y(group, x + 0.01, bottomY, zMid, depth - 0.02, PANEL, inner, shelfMaterial);
          Y(group, x - 0.02, (bottomY + topY) / 2, zMid, depth - 0.1, topY - bottomY, inner, y.white);
          for (let d = 0; d < count; d++) {
            const drawerY = bottomY + drawerHeight * (d + 0.5);
            Y(group, front - 0.01, drawerY, zMid, PANEL, drawerHeight - 0.012, inner - 0.004, oak);
            Y(group, front + 0.006, drawerY, zMid, 0.012, 0.014, Math.min(0.22, inner * 0.4), y.metal);
          }
          addStacks(group, x, depth, PANEL / 2, cursor + PANEL / 2, inner, seed + 7);
        } else {
          addStacks(group, x, depth, PANEL / 2, cursor + PANEL / 2, inner, seed + 7);
        }
      } else if (column.kind === 'hangLong') {
        addHanging(group, x, column.rod * scale, column.drop * scale, cursor + PANEL / 2, inner, seed);
      } else {
        const midY = column.midShelf * scale;
        Y(group, x + 0.01, midY, zMid, depth - 0.02, PANEL, inner, shelfMaterial);
        addHanging(group, x, column.rodTop * scale, column.dropTop * scale, cursor + PANEL / 2, inner, seed);
        addHanging(group, x, column.rodBottom * scale, column.dropBottom * scale, cursor + PANEL / 2, inner, seed + 4);
      }
      cursor += width;
    });
    Y(group, x, height / 2, cursor, depth, height, PANEL, y.white);
    return group;
  }

  return addPlacard;
}
