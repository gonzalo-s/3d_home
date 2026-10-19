import { YA, Vt, mi, ne, xe } from '../../legacy/three-runtime.js';

export function createBathroomBuilder(Y) {
  const porcelain = new xe({ color: 0xf8f8f6, roughness: 0.28 });
  const seat = new xe({ color: 0xf0efe9, roughness: 0.4 });
  const recess = new xe({ color: 0xd5dadd, roughness: 0.35 });
  const chrome = new xe({ color: 0xc4c8cd, metalness: 0.7, roughness: 0.25 });
  const mirrorGlass = new xe({ color: 0xc9d6e0, metalness: 0.6, roughness: 0.1 });
  const mirrorFrame = new xe({ color: 0x2f3236, roughness: 0.6 });

  function ellipsoid(group, material, x, y, z, rx, ry, rz) {
    const mesh = new ne(new Vt(1, 24, 16), material);
    mesh.scale.set(rx, ry, rz);
    mesh.position.set(x, y, z);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    group.add(mesh);
    return mesh;
  }

  function disc(group, material, x, y, z, rx, height, rz) {
    const mesh = new ne(new mi(1, 1, height, 28), material);
    mesh.scale.set(rx, 1, rz);
    mesh.position.set(x, y, z);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    group.add(mesh);
    return mesh;
  }

  function placeGroup(level, x, z, rotationY, userData) {
    const group = new YA();
    group.position.set(x, 0, -z);
    group.rotation.y = rotationY;
    Object.assign(group.userData, userData);
    level.add(group);
    return group;
  }

  function addToilet(level, { x, z, rotationY }) {
    const g = placeGroup(level, x, z, rotationY, { sanitary: 'toilet' });
    Y(g, -0.21, 0.69, 0, 0.18, 0.4, 0.4, porcelain);
    Y(g, -0.21, 0.9, 0, 0.2, 0.02, 0.42, porcelain);
    Y(g, -0.21, 0.915, 0, 0.05, 0.012, 0.03, chrome);
    Y(g, -0.04, 0.16, 0, 0.26, 0.32, 0.24, porcelain);
    ellipsoid(g, porcelain, 0.1, 0.33, 0, 0.3, 0.14, 0.19);
    disc(g, seat, 0.11, 0.465, 0, 0.285, 0.035, 0.185);
    disc(g, seat, 0.11, 0.5, 0, 0.27, 0.02, 0.175);
    return g;
  }

  function addBidet(level, { x, z, rotationY }) {
    const g = placeGroup(level, x, z, rotationY, { sanitary: 'bidet' });
    Y(g, -0.02, 0.15, 0, 0.26, 0.3, 0.22, porcelain);
    ellipsoid(g, porcelain, -0.02, 0.31, 0, 0.27, 0.12, 0.18);
    disc(g, recess, -0.02, 0.425, 0, 0.2, 0.01, 0.13);
    Y(g, -0.25, 0.5, 0, 0.04, 0.07, 0.04, chrome);
    Y(g, -0.19, 0.52, 0, 0.1, 0.02, 0.02, chrome);
    for (const side of [-1, 1]) Y(g, -0.23, 0.46, side * 0.09, 0.03, 0.03, 0.03, chrome);
    return g;
  }

  function addBasin(level, { x, z, topY, rx, rz, rotationY }) {
    const g = placeGroup(level, x, z, rotationY, { sanitary: 'basin' });
    ellipsoid(g, porcelain, 0.02, topY + 0.04, 0, rx, 0.07, rz);
    disc(g, recess, 0.02, topY + 0.108, 0, rx * 0.82, 0.006, rz * 0.8);
    const backX = -rx - 0.03;
    Y(g, backX, topY + 0.11, 0, 0.03, 0.2, 0.03, chrome);
    Y(g, backX + 0.07, topY + 0.2, 0, 0.14, 0.025, 0.025, chrome);
    for (const side of [-1, 1]) Y(g, backX, topY + 0.04, side * 0.07, 0.03, 0.03, 0.03, chrome);
    return g;
  }

  function addMirror(level, { x, centerY, z, width, height, rotationY }) {
    const g = placeGroup(level, x, z, rotationY, {});
    Y(g, 0, centerY, 0, 0.03, height, width, mirrorFrame);
    Y(g, 0.017, centerY, 0, 0.012, height - 0.1, width - 0.1, mirrorGlass);
    return g;
  }

  return { addToilet, addBidet, addBasin, addMirror };
}
