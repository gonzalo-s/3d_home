import {readFile,access} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
import assert from 'node:assert/strict';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const readJSON=async name=>JSON.parse(await readFile(path.join(root,'src/data',name),'utf8'));
const assets=await readJSON('asset-map.json');
assert.equal(assets.length,24,'La referencia v39 contiene 24 imágenes');
for(const asset of assets)await access(path.join(root,'public',asset.path));
const snapshot=await readJSON('current-model-snapshot.json');
for(const [id,floor] of Object.entries(snapshot.electrical.floors)){
  assert.equal(new Set(floor.points.map(p=>p.id)).size,floor.points.length,`IDs duplicados en ${id}`);
}
assert.equal(snapshot.installedLights.length,40,'La referencia v39 contiene 40 luminarias instaladas');
assert.equal(new Set(snapshot.installedLights.map(p=>p.id)).size,40,'IDs duplicados en luminarias');
assert(snapshot.electrical.floors.pb.points.some(p=>p.id==='PB-L01'&&p.kind==='light'));
assert(snapshot.electrical.floors.pb.points.some(p=>p.id==='PB-76'&&p.kind==='middle'));
console.log('Datos v39: 24 imágenes accesibles, 40 luminarias y nodos eléctricos sin IDs duplicados.');
