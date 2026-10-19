import { Lt, Nn, YA, he, ne, te, vo, xe } from '../../legacy/three-runtime.js';
import { PARAPET_TOP, ROOF, SKYLIGHTS, roofHeightAt } from './roofProfile.js';

const SHEET = { x0: 0.05, x1: 6.15, z0: 0.3, z1: 15.27, lift: 0.03, amplitude: 0.025, period: 0.14, samplesPerPeriod: 6 };
// Rendering clearance inside the exterior walls, independent of the CAD footprint.
const CEILING_PERIMETER_INSET = 0.02;
const CEILING = {
  thickness: 0.02,
  footprint: [
    [CEILING_PERIMETER_INSET, CEILING_PERIMETER_INSET],
    [5.95 - CEILING_PERIMETER_INSET, CEILING_PERIMETER_INSET],
    [5.95 - CEILING_PERIMETER_INSET, 9.265],
    [6.0925 - CEILING_PERIMETER_INSET, 15.22 - CEILING_PERIMETER_INSET],
    [CEILING_PERIMETER_INSET, 15.22 - CEILING_PERIMETER_INSET],
  ],
};
const BORDER = { color: 0xf1eee5, curbHeight: 0.2, curbThickness: 0.045, ringHeight: 0.03, ringThickness: 0.03 };
const SKYLIGHT_ROOF_LIFT = 0.05;

function unique(values) {
  return [...new Set(values.map((value) => Math.round(value * 1e6) / 1e6))].sort((a, b) => a - b);
}

function createCorrugatedGeometry({ x0, x1, z0, z1, holes = [] }) {
  const { lift, amplitude, period, samplesPerPeriod } = SHEET;
  const xs = unique([x0, x1, ...holes.flatMap((hole) => [hole.x0, hole.x1])].filter((x) => x >= x0 && x <= x1));
  const regular = [];
  const steps = Math.ceil((z1 - z0) / period * samplesPerPeriod);
  for (let k = 0; k <= steps; k++) regular.push(z0 + (z1 - z0) * k / steps);
  const zs = unique([...regular, ...holes.flatMap((hole) => [hole.z0, hole.z1]).filter((z) => z >= z0 && z <= z1)]);
  const positions = [];
  for (const z of zs) {
    for (const x of xs) {
      positions.push(x, roofHeightAt(x) + lift + amplitude * Math.sin((z - SHEET.z0) / period * Math.PI * 2), -z);
    }
  }
  const stride = xs.length;
  const indices = [];
  for (let j = 0; j < zs.length - 1; j++) {
    for (let i = 0; i < xs.length - 1; i++) {
      const cx = (xs[i] + xs[i + 1]) / 2;
      const cz = (zs[j] + zs[j + 1]) / 2;
      if (holes.some((hole) => cx > hole.x0 && cx < hole.x1 && cz > hole.z0 && cz < hole.z1)) continue;
      const a = j * stride + i;
      indices.push(a, a + stride, a + 1, a + 1, a + stride, a + stride + 1);
    }
  }
  const geometry = new he();
  geometry.setAttribute('position', new te(positions, 3));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  return geometry;
}

function openingOf(skylight) {
  return {
    x0: skylight.x - skylight.width / 2,
    x1: skylight.x + skylight.width / 2,
    z0: skylight.z - skylight.depth / 2,
    z1: skylight.z + skylight.depth / 2,
  };
}

function createCeilingGeometry() {
  const shape = new Lt();
  CEILING.footprint.forEach(([x, z], index) => (index ? shape.lineTo(x, -z) : shape.moveTo(x, -z)));
  shape.closePath();
  for (const skylight of SKYLIGHTS) {
    const { x0, x1, z0, z1 } = openingOf(skylight);
    const hole = new vo();
    hole.moveTo(x0, -z0), hole.lineTo(x1, -z0), hole.lineTo(x1, -z1), hole.lineTo(x0, -z1), hole.closePath();
    shape.holes.push(hole);
  }
  const geometry = new Nn(shape, { depth: CEILING.thickness, bevelEnabled: false });
  const position = geometry.attributes.position;
  for (let i = 0; i < position.count; i++) {
    position.setXYZ(i, position.getX(i), ROOF.ceilingHeight + position.getZ(i), position.getY(i));
  }
  geometry.computeVertexNormals();
  // Keep both horizontal drywall faces white; finish vertical edges like the façade.
  geometry.clearGroups();
  const normals = geometry.attributes.normal;
  let start = 0;
  let current = Math.abs(normals.getY(0)) < 0.5 ? 1 : 0;
  for (let i = 3; i <= position.count; i += 3) {
    const material = i < position.count ? (Math.abs(normals.getY(i)) < 0.5 ? 1 : 0) : -1;
    if (material !== current) {
      geometry.addGroup(start, i - start, current);
      start = i;
      current = material;
    }
  }
  return geometry;
}

export function createRoofBuilder(y, Y, exteriorWalls) {
  const sheetMaterial = new xe({ color: 0x9aa1a6, roughness: 0.55, metalness: 0.1, side: 2 });
  const panelMaterial = new xe({ color: 0xcfe3ee, roughness: 0.25, transparent: true, opacity: 0.3, side: 2, depthWrite: false });
  const ceilingMaterial = new xe({ color: 0xf4f2ee, roughness: 0.9, side: 2 });
  const ceilingEdgeMaterial = y.facade.clone();
  const borderMaterial = new xe({ color: BORDER.color, roughness: 0.8 });
  const shaftMaterial = new xe({ color: 0xe9e7e1, roughness: 1 });

  function addLayer(level) {
    const layer = new YA();
    layer.userData.roofLayer = true;
    level.add(layer);
    return layer;
  }

  function addRoofLayer(level) {
    const layer = addLayer(level);
    const sheet = new ne(createCorrugatedGeometry({ ...SHEET, holes: SKYLIGHTS.map(openingOf) }), sheetMaterial);
    sheet.castShadow = true;
    sheet.receiveShadow = true;
    layer.add(sheet);
    for (const skylight of SKYLIGHTS) {
      const panel = new ne(createCorrugatedGeometry(openingOf(skylight)), panelMaterial);
      panel.userData.skylightPanel = true;
      layer.add(panel);
    }
    return layer;
  }

  function addCeilingLayer(level) {
    const layer = addLayer(level);
    const ceiling = new ne(createCeilingGeometry(), [ceilingMaterial, ceilingEdgeMaterial]);
    ceiling.receiveShadow = true;
    ceiling.userData.ceiling = true;
    layer.add(ceiling);
    for (const skylight of SKYLIGHTS) {
      const { x0, x1, z0, z1 } = openingOf(skylight);
      const bottom = ROOF.ceilingHeight + CEILING.thickness;
      const top = roofHeightAt(skylight.x);
      for (const x of [x0, x1]) Y(layer, x, (bottom + top) / 2, skylight.z, 0.02, top - bottom, skylight.depth, shaftMaterial).castShadow = false;
      for (const z of [z0, z1]) Y(layer, skylight.x, (bottom + top) / 2, z, skylight.width, top - bottom, 0.02, shaftMaterial).castShadow = false;
    }
    return layer;
  }

  function addSkylightBorders(level) {
    return SKYLIGHTS.map((skylight) => {
      const group = new YA();
      group.userData.skylight = skylight;
      level.add(group);
      const { x0, x1, z0, z1 } = openingOf(skylight);
      const roofY = roofHeightAt(skylight.x);
      const curbY = roofY + SKYLIGHT_ROOF_LIFT + BORDER.curbHeight / 2 - 0.05;
      for (const x of [x0, x1]) Y(group, x, curbY, skylight.z, BORDER.curbThickness, BORDER.curbHeight, skylight.depth + BORDER.curbThickness, borderMaterial).castShadow = false;
      for (const z of [z0, z1]) Y(group, skylight.x, curbY, z, skylight.width, BORDER.curbHeight, BORDER.curbThickness, borderMaterial).castShadow = false;
      const ringY = ROOF.ceilingHeight + CEILING.thickness + BORDER.ringHeight / 2;
      for (const x of [x0, x1]) Y(group, x, ringY, skylight.z, BORDER.ringThickness, BORDER.ringHeight, skylight.depth + BORDER.ringThickness, borderMaterial).castShadow = false;
      for (const z of [z0, z1]) Y(group, skylight.x, ringY, z, skylight.width, BORDER.ringHeight, BORDER.ringThickness, borderMaterial).castShadow = false;
      return group;
    });
  }

  function addRoofSystem(level) {
    return {
      roofLayer: addRoofLayer(level),
      ceilingLayer: addCeilingLayer(level),
      borders: addSkylightBorders(level),
    };
  }

  function registerHoverable(mesh, token) {
    mesh.userData.exteriorWall = token;
    exteriorWalls.push(mesh);
  }

  function addGableFill(wallGroup, [x0, z0], [x1, z1], thickness, baseY) {
    const length = Math.hypot(x1 - x0, z1 - z0);
    const shape = new Lt();
    shape.moveTo(0, 0);
    shape.lineTo(length, 0);
    shape.lineTo(length, roofHeightAt(x1) - baseY);
    shape.lineTo(0, roofHeightAt(x0) - baseY);
    shape.closePath();
    const geometry = new Nn(shape, { depth: thickness, bevelEnabled: false });
    geometry.translate(0, 0, -thickness / 2);
    const fill = new ne(geometry, y.facade.clone());
    fill.position.set(x0, baseY, -z0);
    fill.rotation.y = Math.atan2(z1 - z0, x1 - x0);
    fill.castShadow = true;
    fill.receiveShadow = true;
    fill.userData.structuralWall = true;
    wallGroup.add(fill);
    registerHoverable(fill, wallGroup);
    return fill;
  }

  function addParapetCap(wallGroup, x, z, length, thickness, alongZ = false) {
    for (const [span, height, wide, centerY] of [
      [length + 0.12, 0.06, thickness + 0.14, PARAPET_TOP + 0.03],
      [length + 0.04, 0.1, thickness + 0.08, PARAPET_TOP - 0.28],
    ]) {
      const cap = alongZ
        ? Y(wallGroup, x, centerY, z, wide, height, span, y.facade)
        : Y(wallGroup, x, centerY, z, span, height, wide, y.facade);
      cap.userData.exteriorWall = wallGroup;
    }
  }

  return { addRoofSystem, addGableFill, addParapetCap };
}
