import { Rt, Vt, YA, j, ne } from '../../legacy/three-runtime.js';

export function createSunReference(scene) {
  const group = new YA();
  scene.add(group);
  const sphere = new ne(new Vt(0.52, 20, 16), new Rt({ color: 16765003, transparent: true, opacity: 0.55, depthTest: false, depthWrite: false }));
  sphere.renderOrder = 20;
  group.add(sphere);
  return { group, sphere };
}

export function applySun({ sunLight, hemisphereLight, scene, sunSphere }, altitude, azimuth, bearing) {
  const f = (azimuth - bearing) * Math.PI / 180, r = altitude * Math.PI / 180, P = new j(Math.sin(f) * Math.cos(r), Math.sin(r), -Math.cos(f) * Math.cos(r));
  sunLight.position.copy(sunLight.target.position).addScaledVector(P, 40);
  const s = sunLight.target.position.clone().addScaledVector(P, 22);
  sunSphere.position.copy(s);
  const p = Math.max(0, Math.sin(r));
  sunLight.intensity = altitude > 0 ? 1.1 + 2.1 * p : 0, hemisphereLight.intensity = altitude > 0 ? 0.6 + 1.15 * p : 0.24, scene.background.set(altitude > 0 ? "#e4edf5" : "#182433"), sunLight.color.set(altitude < 12 ? "#ffcf97" : "#ffe6ad");
}
