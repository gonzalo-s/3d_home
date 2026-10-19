(() => {
  const model = window.__model;
  const {extrude: ExtrudeGeometry} = model.geometryConstructors;
  const slabThickness = 0.18;
  model.solidSurfaces = [];
  for (const [id, level] of Object.entries(model.levels)) {
    const surfaces = [];
    level.traverse(mesh => {
      if (mesh.isMesh && !mesh.userData.shadowOnly && mesh.geometry.type === 'ShapeGeometry') surfaces.push(mesh);
    });
    for (const surface of surfaces) {
      const original = surface.geometry;
      const topY = original.attributes.position.getY(0);
      const thickness = surface.userData.patioFloor ? 0.08 : id === 'pa' ? slabThickness : 0.12;
      const geometry = new ExtrudeGeometry(original.parameters.shapes, {depth: thickness, bevelEnabled: false});
      const position = geometry.attributes.position;
      // Rotate the extrusion into XZ: the top remains at its original height, thickness grows downwards.
      for (let i = 0; i < position.count; i++) {
        const x = position.getX(i), z = position.getY(i), depth = position.getZ(i);
        position.setXYZ(i, x, topY - depth, z);
      }
      geometry.computeVertexNormals();
      geometry.computeBoundingBox();
      const finish = surface.material.clone();
      finish.transparent = false;
      finish.opacity = 1;
      finish.depthTest = true;
      finish.depthWrite = true;
      finish.side = 0;
      const edge = finish.clone();
      edge.color.setHex(surface.userData.patioFloor ? 0xb77150 : 0xd0d0c9);
      edge.map = null;
      geometry.clearGroups();
      const normals = geometry.attributes.normal;
      let start = 0, current = normals.getY(0) > 0.5 ? 0 : 1;
      for (let i = 3; i <= position.count; i += 3) {
        const material = i < position.count && normals.getY(i) > 0.5 ? 0 : 1;
        if (i === position.count || material !== current) {
          geometry.addGroup(start, i - start, current);
          start = i;
          current = material;
        }
      }
      surface.geometry = geometry;
      surface.material = [finish, edge];
      surface.castShadow = true;
      surface.receiveShadow = true;
      surface.renderOrder = 0;
      surface.userData.surfaceThickness = thickness;
      model.solidSurfaces.push({floor: id, top: topY, thickness, stairVoidPreserved: !!original.parameters.shapes.holes.length});
      original.dispose();
    }
  }
  // PB walls terminate below the upper slab, with a tiny rendering tolerance at the contact.
  const pb = model.levels.pb;
  pb.updateWorldMatrix(true, true);
  const ceiling = model.levels.pa.position.y - slabThickness - 0.002;
  pb.traverse(mesh => {
    if (!mesh.isMesh || !mesh.userData.structuralWall || mesh.userData.shadowOnly) return;
    const position = mesh.geometry.attributes.position;
    let changed = false;
    for (let i = 0; i < position.count; i++) {
      const point = mesh.position.clone().set(position.getX(i), position.getY(i), position.getZ(i));
      point.applyMatrix4(mesh.matrixWorld);
      if (point.y <= ceiling) continue;
      point.y = ceiling;
      mesh.worldToLocal(point);
      position.setXYZ(i, point.x, point.y, point.z);
      changed = true;
    }
    if (changed) {
      position.needsUpdate = true;
      mesh.geometry.computeVertexNormals();
      mesh.geometry.computeBoundingBox();
      mesh.geometry.computeBoundingSphere();
    }
  });
})();
