(() => {
  const model = window.__model;
  const floor = model.levels.pa;
  let template;
  floor.traverse(mesh => {
    if (mesh.userData.furniture === 'cama-principal-cad') template = mesh;
  });
  if (!template) throw new Error('Missing upper-floor furniture template');

  function component(group, x, y, z, width, height, depth, color) {
    const mesh = template.clone(false);
    mesh.userData = {};
    mesh.geometry = template.geometry.clone();
    const size = template.geometry.parameters;
    mesh.geometry.scale(width / size.width, height / size.height, depth / size.depth);
    mesh.material = template.material.clone();
    mesh.material.color.setHex(color);
    mesh.material.roughness = 0.65;
    mesh.scale.set(1, 1, 1);
    mesh.rotation.set(0, 0, 0);
    mesh.position.set(x, y, -z);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    group.add(mesh);
  }

  const mainOutlet = model.electrical.floors.pa.points.find(point => point.id === 'PA-04' && point.kind === 'high');
  const units = [
    ['Dormitorio principal', 0.30, mainOutlet.x, 'front'],
    ['Oficina', 5.8, 6.81],
    ['Cuarto del medio', 5.8, 8.5602403393],
    ['Cuarto del fondo', 5.9039, 13.4987],
  ];
  model.paIndoorAC = [];
  for (const [room, wallX, z, mount] of units) {
    const group = new floor.constructor();
    group.userData.indoorAirConditioner = {room, source: 'Fotos interiores', approximateDimensions: true};
    // The rear face touches the garden-side wall. All units are indoors and below the 2.40 m ceiling.
    const x = wallX - 0.10;
    component(group, x, 2.25, z, 0.20, 0.27, 0.86, 0xf5f5f1);
    component(group, x - 0.103, 2.15, z, 0.012, 0.025, 0.75, 0x747a7c);
    for (const y of [2.17, 2.185]) {
      component(group, x - 0.103, y, z, 0.012, 0.006, 0.71, 0xc9cdcc);
    }
    component(group, x - 0.105, 2.25, z + 0.31, 0.012, 0.012, 0.022, 0x83abb8);
    if (mount === 'front') {
      // Align the principal unit to the AC outlet on the street-side wall.
      for (const mesh of group.children) mesh.position.set(mesh.position.x - x, mesh.position.y, mesh.position.z + z);
      group.position.set(z, 0, -(wallX + 0.10));
      group.rotation.y = -Math.PI / 2;
      group.userData.indoorAirConditioner.source = 'Toma superior PA-04 del DWG';
      group.userData.indoorAirConditioner.outletId = mainOutlet.id;
    }
    floor.add(group);
    model.paIndoorAC.push(group);
  }
})();
