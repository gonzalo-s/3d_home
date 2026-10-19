import {readFile,access} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
import assert from 'node:assert/strict';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const readJSON=async name=>JSON.parse(await readFile(path.join(root,'src/data',name),'utf8'));
const assets=await readJSON('asset-map.json');
assert.equal(assets.length,24,'La referencia v39 contiene 24 imágenes');
for(const asset of assets)await access(path.join(root,'public',asset.path));
const house=await readJSON('house.json');
const roomReferences=await readJSON('room-reference-views.json');
assert.equal(roomReferences.length,9,'Nueve ambientes con perspectiva y planta');
assert.equal(new Set(roomReferences.map(room=>room.photoIndex)).size,roomReferences.length);
for(const room of roomReferences){
  assert.deepEqual(room.views.map(view=>view.kind),['perspective','plan']);
  assert.equal(room.views[0].image,house.photos[room.photoIndex],`Perspectiva del ambiente ${room.id}`);
  for(const view of room.views)await access(path.join(root,'public',view.image));
}
const snapshot=await readJSON('current-model-snapshot.json');
for(const [id,floor] of Object.entries(snapshot.electrical.floors)){
  assert.equal(new Set(floor.points.map(p=>p.id)).size,floor.points.length,`IDs duplicados en ${id}`);
}
assert.equal(snapshot.installedLights.length,40,'La referencia v39 contiene 40 luminarias instaladas');
assert.equal(new Set(snapshot.installedLights.map(p=>p.id)).size,40,'IDs duplicados en luminarias');
assert(snapshot.electrical.floors.pb.points.some(p=>p.id==='PB-L01'&&p.kind==='light'));
assert(snapshot.electrical.floors.pb.points.some(p=>p.id==='PB-76'&&p.kind==='middle'));
console.log(`Datos v39: 24 referencias, ${roomReferences.length} plantas CAD, 40 luminarias y nodos eléctricos sin IDs duplicados.`);
