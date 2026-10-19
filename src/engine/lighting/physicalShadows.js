import { Lt, Qi, Rt, YA, Ye, ne, q8, uo, vo } from '../../legacy/three-runtime.js';

const F0 = new Rt({ colorWrite: false, depthWrite: false, side: Ye }), R0 = new Qi({ depthPacking: q8, side: Ye });
function Br(group, o, A, e = false) {
  let t = new Lt();
  if (o.forEach((f, r) => r ? t.lineTo(f[0], -f[1]) : t.moveTo(f[0], -f[1])), t.closePath(), e) {
    let f = new vo();
    f.moveTo(0.3, -6.51), f.lineTo(1.425, -6.51), f.lineTo(1.425, -9.1475), f.lineTo(0.3, -9.1475), f.closePath(), t.holes.push(f);
  }
  let i = new uo(t), n = i.attributes.position;
  for (let f = 0; f < n.count; f++) n.setXYZ(f, n.getX(f), A, n.getY(f));
  i.computeVertexNormals();
  let a = new ne(i, F0);
  a.customDepthMaterial = R0, a.castShadow = true, a.userData.shadowOnly = true, group.add(a);
}
export function buildPhysicalShadows(lt, mt) {
  const Ei = new YA();
  Ei.userData.physicalShadowGroup = true, lt.add(Ei), Br(Ei, [[0, 0], [5.95, 0], [5.95, 9.265], [6.0925, 15.22], [0, 15.22]], 5.8), Br(Ei, [[0, 0], [5.95, 0], [5.95, 9.265], [6.0925, 15.22], [0, 15.22]], 3.4, true), Br(Ei, [[0, 0], [5.95, 0], [5.95, 9.265], [0, 9.265]], 2.9, true), Br(Ei, [[0, 9.265], [5.95, 9.265], [6.0925, 15.22], [0, 15.22]], 2.4), lt.updateMatrixWorld(true);
  for (let o of Object.values(mt)) o.traverse((A) => {
    if (!A.isMesh || !A.userData.structuralWall) return;
    let e = new ne(A.geometry.clone(), F0);
    e.customDepthMaterial = R0, e.castShadow = true, e.matrixAutoUpdate = false, e.matrix.copy(A.matrixWorld), e.userData.shadowOnly = true, Ei.add(e), A.castShadow = false;
  });
  return Ei;
}
