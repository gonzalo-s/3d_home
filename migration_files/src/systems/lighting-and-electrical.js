import {SpotLight, PointLight, Vector4} from 'three';

const model = window.__model;
const {cylinder: CylinderGeometry} = model.geometryConstructors;
let template;
model.levels.pa.traverse(mesh => {
  if (mesh.userData.furniture === 'cama-principal-cad') template = mesh;
});
let maximumSceneId = 0;
model.scene.traverse(object => {maximumSceneId = Math.max(maximumSceneId, object.id);});
// This small light module shares a renderer with the existing bundled scene. Reserve distinct object IDs.
while (new SpotLight().id <= maximumSceneId + 512) {}
const shadowRooms = new Set();
const shadowFloors = new Set();
const gpu = model.renderer.capabilities;
const shadowBudget = Math.max(2, Math.min(4, gpu.maxTextures - 4));
const interiorLightBudget = 13;
model.lightingBudget = {shadowBudget, interiorLightBudget, maxTextures:gpu.maxTextures, maxFragmentUniforms:gpu.maxFragmentUniforms};
model.interiorSpots = [];
const provisionalIds = new Set(['PA-27', 'PA-30', 'PA-39', 'PA-40', 'PB-45']);
for (const [id, source] of Object.entries(model.electrical.floors)) {
  for (const p of source.points) if (provisionalIds.has(p.id)) p.provisional = true;
  model.electricalLevels[id].groups.lights.traverse(mesh => {const p = mesh.userData.electricalPoint; if (p && provisionalIds.has(p.id)) p.provisional = true;});
}
function sector(floor, p) {
  if (floor === 'pb') return p.z < 7.5725 ? 'living' : p.z < 9.1475 && p.x < 2.5125 ? 'bath' : p.z < 13.34 ? 'kitchen' : p.x < 2.2 ? 'pantry' : 'laundry';
  if (p.x < 2.4) return p.z < 3.3225 ? 'bath-main' : p.z < 6.4475 ? 'dressing' : p.z < 12.4275 ? 'hall' : 'bath-small';
  return p.z < 5.3225 ? 'main' : p.z < 7.6475 ? 'office' : p.z < 11.3225 ? 'middle' : 'rear';
}
function fixture(group, radius, height, y, emissive = false) {
  const mesh = template.clone(false);
  mesh.geometry = new CylinderGeometry(radius, radius, height, 16);
  mesh.material = template.material.clone();
  mesh.material.color.setHex(emissive ? 0xffe4b0 : 0xf2f2ee);
  mesh.material.roughness = 0.65;
  mesh.material.emissive.setHex(emissive ? 0xffd18a : 0);
  mesh.material.emissiveIntensity = 0;
  mesh.position.set(0, y, 0);
  mesh.rotation.set(0, 0, 0);
  mesh.scale.set(1, 1, 1);
  mesh.userData = {interiorSpotFixture: true};
  mesh.castShadow = false;
  group.add(mesh);
  return mesh;
}
// Fixture positions corrected from the annotated upstairs image. The source DWG
// electrical points remain unchanged, including provisional points under skylights.
model.spotCorrections = {
  removed: ['PA-36', 'PA-29'],
  moved: {
    'PA-32': {x:2.34,z:1.05},
    'PA-28': {x:1.10,z:4.80},
    'PA-38': {x:1.27,z:11.70},
    'PA-41': {x:2.225,z:13.77105},
  },
  added: [{id:'PA-32-B',sourcePointId:'PA-32',kind:'light',x:2.34,z:2.14}],
};
const entrancePoint={id:'PB-L01',kind:'light',source:'DWG',corrected:true,new:true,x:4.30,z:8.185,route:'PB-CAD-R11',routeAnchor:[3.02342,7.95387],circuitNote:'Agregado en el ramal de los dos apliques del acceso; recorrido por cielorraso interpretado.'};
model.electrical.floors.pb.points.push(entrancePoint);
for(const point of model.electrical.floors.pb.points){
 if(['PB-44','PB-74'].includes(point.id))Object.assign(point,{x:2.72,height:2.10,mount:'wall',lightType:'Aplique hacia abajo',corrected:true});
}
for (const [floorId, source] of Object.entries(model.electrical.floors)) {
  const floor = model.levels[floorId];
  const installedPoints = floorId==='pa' ? source.points
    .filter(p=>!model.spotCorrections.removed.includes(p.id))
    .map(p=>({...p,...model.spotCorrections.moved[p.id]}))
    .concat(model.spotCorrections.added) : source.points;
  for (const p of installedPoints) {
    const wallX = p.z < 9.265 ? 5.8 : 5.8 + (p.z - 9.265) * 0.1425 / 5.805;
    if (provisionalIds.has(p.id) || p.kind !== 'light' || p.x < 0.3 || p.x > wallX || p.z < 0.3 || p.z > 15.07) continue;
    const ceiling = model.ceilingAt(floorId, p.x, p.z);
    const group = new floor.constructor();
    group.position.set(p.x, 0, -p.z);
    group.userData.interiorSpot = {pointId: p.id, floor: floorId};
    const wallLight = p.id==='PA-41'||p.mount==='wall';
    const wallHeight=p.height??1.98;
    const wallSide=floorId==='pa'?-1:1;
    let emitter;
    if(wallLight){
      group.userData.wallLight=true;
      skyBox(group,0,wallHeight,0,.15,.14,.32);
      emitter=fixture(group,.06,.012,wallHeight-.08,true);
    }else{
      fixture(group, 0.095, 0.045, ceiling - 0.023);
      emitter=fixture(group, 0.067, 0.012, ceiling - 0.053, true);
    }
    floor.add(group);
    const light = new SpotLight(0xffe3b8, 6, 5.5, Math.PI / 3.3, 0.65, 2);
    light.position.set(p.x+(wallLight?wallSide*.065:0),wallLight?wallHeight-.105:ceiling-.085,-p.z);
    light.target.position.set(p.x+(wallLight?wallSide*.7:0), 0, -p.z);
    const key = floorId + '-' + sector(floorId, p);
    // Share a shadow source per sector, keeping the full spot set usable on phones.
    light.castShadow = !shadowFloors.has(floorId);
    shadowFloors.add(floorId);
    shadowRooms.add(key);
    light.shadow.mapSize.set(128, 128);
    light.shadow.autoUpdate = false;
    light.shadow.needsUpdate = true;
    light.shadow.bias = -0.0003;
    light.shadow.normalBias = 0.015;
    light.visible = false;
    floor.add(light, light.target);
    model.interiorSpots.push({light, emitter, pointId: p.id, floor: floorId, sector:key,wallLight});
  }
}
// Opal skylights scatter daylight; the existing solar blockers suppress hard direct beams.
model.skylights = [];
model.skylightLights = [];
const skylights = [
  {name:'Baño del fondo', x:1.50, z:13.65, width:.62, depth:.88},
  {name:'Vestidor', x:1.70, z:4.80, width:.76, depth:1.35},
  {name:'Pasillo / escalera', x:.86, z:9.10, width:.98, depth:4.05},
];
function skyBox(group, x, y, z, width, height, depth, glazing=false) {
  const mesh=template.clone(false);
  mesh.geometry=new model.geometryConstructors.box(width,height,depth);
  mesh.material=template.material.clone();
  mesh.material.color.setHex(glazing?0xe7f2f8:0xf1eee5);
  mesh.material.transparent=glazing;
  mesh.material.opacity=glazing?.22:1;
  mesh.material.depthWrite=!glazing;
  mesh.position.set(x,y,-z);
  mesh.rotation.set(0,0,0);mesh.scale.set(1,1,1);
  mesh.castShadow=false;mesh.userData={skylightSurface:true};
  group.add(mesh);
}
function skyLight(floorId,x,z,height,stair=false) {
  const light=new PointLight(0xeaf2ff,0,stair?5:4,2);
  light.position.set(x,height,-z);
  light.castShadow=stair;
  light.shadow.mapSize.set(128,128);light.shadow.autoUpdate=false;light.shadow.needsUpdate=true;
  light.shadow.bias=-.0003;light.shadow.normalBias=.02;
  model.levels[floorId].add(light);model.skylightLights.push(light);
}
for (const item of skylights) {
  const group=new model.levels.pa.constructor();group.userData.skylight=item;model.levels.pa.add(group);
  skyBox(group,item.x,2.37,item.z,item.width,.055,item.depth,true);
  for(const x of [item.x-item.width/2,item.x+item.width/2])skyBox(group,x,2.40,item.z,.045,.08,item.depth+.045);
  for(const z of [item.z-item.depth/2,item.z+item.depth/2])skyBox(group,item.x,2.40,z,item.width,.08,.045);
  if(item.depth>3){for(const z of [7.6,9.1,10.6])skyLight('pa',item.x,z,2.20);}
  else skyLight('pa',item.x,item.z,2.20);
  model.skylights.push(group);
}
// Diffuse reflected daylight descends through the existing stair void into PB.
skyLight('pb',.80,7.25,2.82,true);
// Installed exterior lights from the annotated photo; side-boundary points remain uninstalled.
model.exteriorSpots = [];
const uninstalledExterior = new Set(['PB-55','PB-56','PB-57']);
for (const p of model.electrical.floors.pb.points) if (uninstalledExterior.has(p.id)) p.uninstalled = true;
model.electricalLevels.pb.groups.lights.traverse(mesh => {const p=mesh.userData.electricalPoint;if(p&&uninstalledExterior.has(p.id))p.uninstalled=true;});
model.levels.pb.traverse(mesh=>{
  if(mesh.isMesh && mesh.geometry.type==='SphereGeometry' && mesh.geometry.parameters.radius===.09 && Math.abs(mesh.position.z+.33)<.001 && [6.7,8.43].some(x=>Math.abs(mesh.position.x-x)<.001))mesh.visible=false;
});
const outside = [
  {name:'Entre ventanas del living',x:6.04,z:3.52,height:2.65,wall:'side',pointId:'PB-52'},
  {name:'Living / acceso jardín',x:6.04,z:6.00,height:2.65,wall:'side',pointId:'PB-51'},
  {name:'Cocina comedor',x:6.06,z:9.41759,height:2.65,wall:'side',pointId:'PB-50'},
  {name:'Puerta del jardín',x:6.675,z:.33,height:2.25,wall:'front',pointId:'PB-63'},
  {name:'Portón reubicado',x:9.305,z:.33,height:2.25,wall:'front',pointId:'PB-53'},
];
for(const item of outside){
  const group=new model.levels.pb.constructor();group.userData.exteriorFixture=item;model.levels.pb.add(group);
  const side=item.wall==='side';
  skyBox(group,item.x,item.height,item.z,side?.16:.24,.18,side?.24:.16);
  const body=group.children[0];body.material.color.setHex(0x303334);body.castShadow=false;
  skyBox(group,item.x,item.height-.10,item.z,side?.12:.18,.025,side?.18:.12);
  const emitter=group.children[1];emitter.material.color.setHex(0xffffff);emitter.material.emissive.setHex(0xffffff);emitter.material.emissiveIntensity=0;
  const light=new SpotLight(0xffffff,12,7,Math.PI/3.2,.8,2);
  light.position.set(item.x+(side?.06:0),item.height-.13,-item.z-(side?0:.06));
  light.target.position.set(item.x+(side?1.35:0),.03,-item.z-(side?0:1.25));
  light.castShadow=item.name==='Living / acceso jardín'||item.name==='Portón reubicado';light.shadow.mapSize.set(128,128);light.shadow.autoUpdate=false;light.shadow.needsUpdate=true;light.shadow.bias=-.0003;light.shadow.normalBias=.02;light.visible=false;
  model.levels.pb.add(light,light.target);model.exteriorSpots.push({light,emitter,...item});
}
// Rebuild the overlay from current fixture positions, preserving skylight references.
for(const floorId of ['pb','pa']){
 const source=model.electrical.floors[floorId];
 if(floorId==='pa')source.points=source.points.filter(p=>!model.spotCorrections.removed.includes(p.id));
 const installed=model.interiorSpots.filter(i=>i.floor===floorId);
 if(floorId==='pb')installed.push(...model.exteriorSpots);
 for(const item of installed){
  let point=source.points.find(p=>p.id===item.pointId);
  if(!point){point={id:item.pointId,kind:'light',source:'DWG',new:true};source.points.push(point);}
  const old={x:point.x,z:point.z,height:point.height};
  const anchor=point.routeAnchor||[point.x??2.28,point.z??1.81];
  const x=item.light.position.x+(item.wallLight?(floorId==='pa'?.065:-.065):0)-(item.wall==='side'?.06:0);
  const z=-item.light.position.z-(item.wall==='front'?.06:0);
  const height=item.wall?item.height:item.wallLight?(floorId==='pa'?1.98:2.10):model.ceilingAt(floorId,x,z)-.025;
  Object.assign(point,{x,z,height,mount:item.wall||item.wallLight?'wall':'ceiling',lightType:item.wall||item.wallLight?'Aplique hacia abajo':'Spot de techo',corrected:true});
  if(item.pointId==='PA-32-B'){point.route='PA-CAD-R33';point.routeAnchor=[2.28008,1.81347];}
  const changed=old.x!==x||old.z!==z||item.wallLight||item.wall||item.pointId==='PB-L01';
  if(changed){
   const a=point.routeAnchor||anchor;
   if(Number.isFinite(a[0])&&Number.isFinite(a[1]))source.routes.push({id:point.id+'-ACTUAL',kind:'lighting',points:[[a[0],a[1]],[x,z]],points3D:[[a[0],model.ceilingAt(floorId,a[0],a[1])+.025,a[1]],[x,model.ceilingAt(floorId,x,z)+.025,z],[x,height,z]],source:'Ajuste de luminarias según usuario',mode:'ceiling',interpreted:true,fixtureId:point.id});
  }
 }
}
model.electrical.floors.pb.routes.push({id:'PB-L01-PARED',kind:'lighting',points:[[4.3,8.185],[5.80,8.185]],points3D:[[4.3,model.ceilingAt('pb',4.3,8.185)+.025,8.185],[5.8,model.ceilingAt('pb',5.8,8.185)+.025,8.185]],source:'Ramal de acceso indicado por usuario',mode:'ceiling',interpreted:true,circuit:'PB-CAD-R11'});
model.rebuildElectrical();
// Room-scoped diffuse spot lighting uses one compact uniform set instead of a
// large shadow sampler array. Every installed light contributes; opaque room
// boundaries and floor slabs block cross-room/cross-floor illumination.
const allSpots=[...model.interiorSpots,...model.exteriorSpots];
const positions=allSpots.map(()=>new Vector4());
const directions=allSpots.map(()=>new Vector4());
const colors=allSpots.map(()=>new Vector4());
const lightUniforms={houseSpotPositions:{value:positions},houseSpotDirections:{value:directions},houseSpotColors:{value:colors},houseNight:{value:false}};
const roomShader=`
varying vec3 vHousePosition;
uniform bool houseNight;
uniform vec4 houseSpotPositions[${allSpots.length}];
uniform vec4 houseSpotDirections[${allSpots.length}];
uniform vec4 houseSpotColors[${allSpots.length}];
float houseZone(vec3 p){
 float x=p.x,z=-p.z;
 if(x>5.94 || x<0.0 || z<0.0 || z>15.22)return 0.0;
 if(p.y>=3.30){
  if(z<5.3225){if(x<2.5875)return z<3.3225?11.0:12.0;return 13.0;}
  if(x<2.3625)return z<12.4275?14.0:15.0;
  if(z<7.6475)return 16.0;
  if(z<11.3225)return 17.0;
  return 18.0;
 }
 if(z>=7.5725 && z<9.1475 && x<2.575)return 2.0;
 if(z<13.34)return 1.0;
 return x<2.2?4.0:5.0;
}
`;
const roomContribution=`
if(houseNight){
 float houseFragmentZone=houseZone(vHousePosition);
 vec3 houseNormal=inverseTransformDirection(geometryNormal,viewMatrix);
 for(int hi=0;hi<${allSpots.length};hi++){
  vec4 hp=houseSpotPositions[hi];
  vec4 hc=houseSpotColors[hi];
  if(abs(houseFragmentZone-hc.w)<.1 && hp.w>0.0){
   vec3 delta=hp.xyz-vHousePosition;
   float d2=max(dot(delta,delta),.025);
   vec3 toLight=delta*inversesqrt(d2);
   float cone=smoothstep(houseSpotDirections[hi].w,houseSpotDirections[hi].w+.15,dot(-toLight,houseSpotDirections[hi].xyz));
   float range=hc.w<.5?7.0:5.5;
   float attenuation=pow(max(0.0,1.0-sqrt(d2)/range),2.0)/d2;
   float diffuse=max(dot(houseNormal,toLight),0.0);
   reflectedLight.directDiffuse+=material.diffuseColor*hc.rgb*hp.w*cone*attenuation*diffuse/3.14159265;
  }
 }
}
`;
const materials=new Set();
model.scene.traverse(object=>{if(object.isMesh){for(const material of (Array.isArray(object.material)?object.material:[object.material]))if(material.isMeshStandardMaterial||material.isMeshPhysicalMaterial)materials.add(material);}});
for(const material of materials){
 const original=material.onBeforeCompile;
 material.onBeforeCompile=function(shader,renderer){
  original.call(this,shader,renderer);
  Object.assign(shader.uniforms,lightUniforms);
  shader.vertexShader='varying vec3 vHousePosition;\n'+shader.vertexShader.replace('#include <project_vertex>','#include <project_vertex>\nvHousePosition=(modelMatrix*vec4(transformed,1.0)).xyz;');
  shader.fragmentShader=roomShader+shader.fragmentShader.replace('#include <lights_fragment_end>','#include <lights_fragment_end>\n'+roomContribution);
 };
 material.customProgramCacheKey=()=> 'house-room-spots-v1';
 material.needsUpdate=true;
}
for(const item of allSpots){item.light.visible=false;item.light.castShadow=false;}
for(const light of model.skylightLights){light.visible=true;light.intensity=0;}
function syncRoomLights(){
 model.scene.updateMatrixWorld(true);
 allSpots.forEach((item,i)=>{
  const p=item.light.getWorldPosition(item.light.position.clone());
  const t=item.light.target.getWorldPosition(item.light.target.position.clone());
  const direction=t.sub(p).normalize();
  positions[i].set(p.x,p.y,p.z,item.light.intensity);
  directions[i].set(direction.x,direction.y,direction.z,Math.cos(item.light.angle));
  const color=item.light.color;
  // Lighting remains tied to the floor controls.
  const shown=item.light.parent.visible;
  if(!shown)positions[i].w=0;
  let zone=0;
  if(item.floor==='pa')zone=({'bath-main':11,dressing:12,main:13,hall:14,'bath-small':15,office:16,middle:17,rear:18})[sector('pa',{x:p.x,z:-p.z})];
  else if(item.floor==='pb')zone=({living:1,bath:2,kitchen:1,pantry:4,laundry:5})[sector('pb',{x:p.x,z:-p.z})];
  colors[i].set(color.r,color.g,color.b,zone);
 });
}
model.roomLighting={count:allSpots.length,uniforms:lightUniforms};
let previous;
let previousVisibility;
function applyState() {
  const day=model.solar.altitude>0 && document.querySelector('#skylightDaylight').checked;
  const strength=day?2+7*Math.max(0,Math.sin(model.solar.altitude*Math.PI/180)):0;
  for(const light of model.skylightLights){light.intensity=strength;}
  model.skylightsDaylightOn=day;

  const night = model.solar.altitude <= 0 && document.querySelector('#autoInteriorSpots').checked;
  const changed=night!==previous;
  if (changed) {
    for (const item of model.interiorSpots) {
      item.light.intensity = night ? 6 : 0;
      item.emitter.material.emissiveIntensity = night ? 2.0 : 0;

    }
    for(const item of model.exteriorSpots){item.light.intensity=night?12:0;item.emitter.material.emissiveIntensity=night?1.5:0;}
    model.exteriorSpotsOn=night;
    previous = night;
    model.interiorSpotsOn = night;
  }
  lightUniforms.houseNight.value=night;
  const visibility=Number(model.levels.pb.visible)+2*Number(model.levels.pa.visible);
  if(changed||visibility!==previousVisibility){syncRoomLights();previousVisibility=visibility;}
}
for (const id of ['sunDate', 'sunTime', 'sunHour', 'latitude', 'longitude', 'season', 'autoInteriorSpots', 'skylightDaylight']) {
  const input = document.querySelector('#' + id);
  input.addEventListener('input', applyState);
  input.addEventListener('change', applyState);
}
document.querySelector('#now').addEventListener('click', applyState);
function update() {applyState(); requestAnimationFrame(update);}
update();
