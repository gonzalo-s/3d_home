import { uf, Ye, di, q8, Zo, nA, j, pe, Re, YA, JA, cn, Pt, te, Bt, he, Kt, Lo, Ni, Rt, ne, Vo, Ti, go, yt, mi, vo, Lt, Nn, qo, uo, Vt, Cn, Tn, Yn, Ee, xe, Qi, On, Le, Gn, kn, Bo, In, bn, UA, _e, Rr, gr } from "./three-runtime.js";
import { createScene } from "../engine/core/createScene.js";
import { createMaterials } from "../engine/core/materials.js";
import { createArchitecturePrimitives } from "../engine/architecture/primitives.js";
import { addFloorSlab, createLevelWallBuilders } from "../engine/architecture/levels.js";
import { createFixtureBuilders } from "../engine/furniture/fixtures.js";
import { createBathUnderStairsBuilder } from "../engine/furniture/bathUnderStairs.js";
import { createGroundFloorFurnitureBuilder } from "../engine/furniture/groundFloor.js";
import { createUpperFloorFurnitureBuilder } from "../engine/furniture/upperFloor.js";
import { createRoofBuilder } from "../engine/architecture/roof.js";
import { createOutdoorAcBuilder } from "../engine/architecture/outdoorAc.js";
import { createStairBuilder, stairHeightAt, stairSpec } from "../engine/architecture/stairs.js";
import { solarPosition, seasonForDate, buenosAiresNow } from "../engine/lighting/solar.js";
import { OFFICE_REFERENCE } from "../engine/furniture/office.js";
import { applyIotDataCorrections, createCameraLayer } from "../engine/installations/iot.js";
import { createRoomPhotoHotspots } from "../engine/interaction/roomPhotoHotspots.js";
import { buildPhysicalShadows } from "../engine/lighting/physicalShadows.js";
import { createSunReference, applySun } from "../engine/lighting/sun.js";
import Hr from "../data/house.json";
import gP from "../data/electrical-source.json";
import { showRoomReferenceViews } from '../engine/interaction/referenceViews.js';
import HP from "../data/installations.json";
var Eg = new Int32Array([0, 0, 1, 0, 6288774, -20905355, 2, 0, -1, 0, 1274027, -3699111, 2, 0, 0, 0, 658314, -2955968, 0, 0, 2, 0, 213618, -569925, 0, 1, 0, 0, -185116, 48888, 0, 0, 0, 2, -114332, -3149, 2, 0, -2, 0, 58793, 246158, 2, -1, -1, 0, 57066, -152138, 2, 0, 1, 0, 53322, -170733, 2, -1, 0, 0, 45758, -204586, 0, 1, -1, 0, -40923, -129620, 1, 0, 0, 0, -34720, 108743, 0, 1, 1, 0, -30383, 104755, 2, 0, 0, -2, 15327, 10321, 0, 0, 1, 2, -12528, 0, 0, 0, 1, -2, 10980, 79661, 4, 0, -1, 0, 10675, -34782, 0, 0, 3, 0, 10034, -23210, 4, 0, -2, 0, 8548, -21636, 2, 1, -1, 0, -7888, 24208, 2, 1, 0, 0, -6766, 30824, 1, 0, -1, 0, -5163, -8379, 1, 1, 0, 0, 4987, -16675, 2, -1, 1, 0, 4036, -12831, 2, 0, 2, 0, 3994, -10445, 4, 0, 0, 0, 3861, -11650, 2, 0, -3, 0, 3665, 14403, 0, 1, -2, 0, -2689, -7003, 2, 0, -1, 2, -2602, 0, 2, -1, -2, 0, 2390, 10056, 1, 0, 1, 0, -2348, 6322, 2, -2, 0, 0, 2236, -9884, 0, 1, 2, 0, -2120, 5751, 0, 2, 0, 0, -2069, 0, 2, -2, -1, 0, 2048, -4950, 2, 0, 1, -2, -1773, 4130, 2, 0, 0, 2, -1595, 0, 4, -1, -1, 0, 1215, -3958, 0, 0, 2, 2, -1110, 0, 3, 0, -1, 0, -892, 3258, 2, 1, 1, 0, -810, 2616, 4, -1, -2, 0, 759, -1897, 0, 2, -1, 0, -713, -2117, 2, 2, -1, 0, -700, 2354, 2, 1, -2, 0, 691, 0, 2, -1, 0, -2, 596, 0, 4, 0, 1, 0, 549, -1423, 0, 0, 4, 0, 537, -1117, 4, -1, 0, 0, 520, -1571, 1, 0, -2, 0, -487, -1739, 2, 1, 0, -2, -399, 0, 0, 0, 2, -2, -381, -4421, 1, 1, 1, 0, 351, 0, 3, 0, -2, 0, -340, 0, 4, 0, -3, 0, 330, 0, 2, -1, 2, 0, 327, 0, 0, 2, 1, 0, -323, 1165, 1, 1, -1, 0, 299, 0, 2, 0, 3, 0, 294, 0, 2, 0, -1, -2, 0, 8752]), Zg = new Int32Array([0, 0, 0, 1, 5128122, 0, 0, 1, 1, 280602, 0, 0, 1, -1, 277693, 2, 0, 0, -1, 173237, 2, 0, -1, 1, 55413, 2, 0, -1, -1, 46271, 2, 0, 0, 1, 32573, 0, 0, 2, 1, 17198, 2, 0, 1, -1, 9266, 0, 0, 2, -1, 8822, 2, -1, 0, -1, 8216, 2, 0, -2, -1, 4324, 2, 0, 1, 1, 4200, 2, 1, 0, -1, -3359, 2, -1, -1, 1, 2463, 2, -1, 0, 1, 2211, 2, -1, -1, -1, 2065, 0, 1, -1, -1, -1870, 4, 0, -1, -1, 1828, 0, 1, 0, 1, -1794, 0, 0, 0, 3, -1749, 0, 1, -1, 1, -1565, 1, 0, 0, 1, -1491, 0, 1, 1, 1, -1475, 0, 1, 1, -1, -1410, 0, 1, 0, -1, -1344, 1, 0, 0, -1, -1335, 0, 0, 3, 1, 1107, 4, 0, 0, -1, 1021, 4, 0, -1, 1, 833, 0, 0, 1, -3, 777, 4, 0, -2, 1, 671, 2, 0, 0, -3, 607, 2, 0, 2, -1, 596, 2, -1, 1, -1, 491, 2, 0, -2, 1, -451, 0, 0, 3, -1, 439, 2, 0, 2, 1, 422, 2, 0, -3, -1, 421, 2, 1, -1, 1, -366, 2, 1, 0, 1, -351, 4, 0, 0, 1, 331, 2, -1, 1, 1, 315, 2, -2, 0, -1, 302, 0, 0, 1, 3, -283, 2, 1, 1, -1, -229, 1, 1, 0, -1, 223, 1, 1, 0, 1, 223, 0, 1, -2, -1, -220, 2, 1, -1, -1, -220, 1, 0, 1, 1, -185, 2, -1, -2, -1, 181, 0, 1, 2, 1, -177, 4, 0, -2, -1, 176, 4, -1, -1, -1, 166, 1, 0, 1, -1, -164, 4, 0, 1, -1, 132, 1, 0, -1, -1, -119, 4, -1, 0, -1, 115, 2, -2, 0, 1, 107]);
var t0 = new Pt(), vr = new j(), qi = class extends kn {
  constructor() {
    super(), this.isLineSegmentsGeometry = true, this.type = "LineSegmentsGeometry";
    let A = [-1, 2, 0, 1, 2, 0, -1, 1, 0, 1, 1, 0, -1, 0, 0, 1, 0, 0, -1, -1, 0, 1, -1, 0], e = [-1, 2, 1, 2, -1, 1, 1, 1, -1, -1, 1, -1, -1, -2, 1, -2], t = [0, 2, 1, 2, 3, 1, 2, 4, 3, 4, 5, 3, 4, 6, 5, 6, 7, 5];
    this.setIndex(t), this.setAttribute("position", new te(A, 3)), this.setAttribute("uv", new te(e, 2));
  }
  applyMatrix4(A) {
    let e = this.attributes.instanceStart, t = this.attributes.instanceEnd;
    return e !== void 0 && (e.applyMatrix4(A), t.applyMatrix4(A), e.needsUpdate = true), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  setPositions(A) {
    let e;
    A instanceof Float32Array ? e = A : Array.isArray(A) && (e = new Float32Array(A));
    let t = new Bo(e, 6, 1);
    return this.setAttribute("instanceStart", new Kt(t, 3, 0)), this.setAttribute("instanceEnd", new Kt(t, 3, 3)), this.instanceCount = this.attributes.instanceStart.count, this.computeBoundingBox(), this.computeBoundingSphere(), this;
  }
  setColors(A) {
    let e;
    A instanceof Float32Array ? e = A : Array.isArray(A) && (e = new Float32Array(A));
    let t = new Bo(e, 6, 1);
    return this.setAttribute("instanceColorStart", new Kt(t, 3, 0)), this.setAttribute("instanceColorEnd", new Kt(t, 3, 3)), this;
  }
  fromWireframeGeometry(A) {
    return this.setPositions(A.attributes.position.array), this;
  }
  fromEdgesGeometry(A) {
    return this.setPositions(A.attributes.position.array), this;
  }
  fromMesh(A) {
    return this.fromWireframeGeometry(new Tn(A.geometry)), this;
  }
  fromLineSegments(A) {
    let e = A.geometry;
    return this.setPositions(e.attributes.position.array), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new Pt());
    let A = this.attributes.instanceStart, e = this.attributes.instanceEnd;
    A !== void 0 && e !== void 0 && (this.boundingBox.setFromBufferAttribute(A), t0.setFromBufferAttribute(e), this.boundingBox.union(t0));
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Bt()), this.boundingBox === null && this.computeBoundingBox();
    let A = this.attributes.instanceStart, e = this.attributes.instanceEnd;
    if (A !== void 0 && e !== void 0) {
      let t = this.boundingSphere.center;
      this.boundingBox.getCenter(t);
      let i = 0;
      for (let n = 0, a = A.count; n < a; n++) vr.fromBufferAttribute(A, n), i = Math.max(i, t.distanceToSquared(vr)), vr.fromBufferAttribute(e, n), i = Math.max(i, t.distanceToSquared(vr));
      this.boundingSphere.radius = Math.sqrt(i), isNaN(this.boundingSphere.radius) && console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.", this);
    }
  }
  toJSON() {
  }
};
UA.line = { worldUnits: { value: 1 }, linewidth: { value: 1 }, resolution: { value: new nA() }, dashOffset: { value: 0 }, dashScale: { value: 1 }, dashSize: { value: 1 }, gapSize: { value: 1 } };
_e.line = { uniforms: Yn.merge([UA.common, UA.fog, UA.line]), vertexShader: `
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		float trimSegmentAlpha( const in vec4 start, const in vec4 end ) {

			// compute the interpolation factor needed to trim the segment so it terminates
			// between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column

			// we need different nearEstimate formula for reversed and default depth buffer
			// a is positive with a reversed depth buffer so it can be used for controlling the code flow
			float nearEstimate = ( a > 0.0 ) ? ( - b / ( a + 1.0 ) ) : ( - 0.5 * b / a );

			return ( nearEstimate - start.z ) / ( end.z - start.z );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef USE_DASH

				float lineDistanceStart = dashScale * instanceDistanceStart;
				float lineDistanceEnd = dashScale * instanceDistanceEnd;

			#endif

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					float alpha = trimSegmentAlpha( start, end );
					end.xyz = mix( start.xyz, end.xyz, alpha );

					#ifdef USE_DASH

						lineDistanceEnd = mix( lineDistanceStart, lineDistanceEnd, alpha );

					#endif

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					float alpha = trimSegmentAlpha( end, start );
					start.xyz = mix( end.xyz, start.xyz, alpha );

					#ifdef USE_DASH

						lineDistanceStart = mix( lineDistanceEnd, lineDistanceStart, alpha );

					#endif

				}

			}

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? lineDistanceStart : lineDistanceEnd;
				vUv = uv;

			#endif

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`, fragmentShader: `
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			float alpha = opacity;
			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		` };
var Oo = class extends Ee {
  constructor(A) {
    super({ type: "LineMaterial", uniforms: Yn.clone(_e.line.uniforms), vertexShader: _e.line.vertexShader, fragmentShader: _e.line.fragmentShader, clipping: true }), this.isLineMaterial = true, this.setValues(A);
  }
  get color() {
    return this.uniforms.diffuse.value;
  }
  set color(A) {
    this.uniforms.diffuse.value = A;
  }
  get worldUnits() {
    return "WORLD_UNITS" in this.defines;
  }
  set worldUnits(A) {
    A === true !== this.worldUnits && (this.needsUpdate = true), A === true ? this.defines.WORLD_UNITS = "" : delete this.defines.WORLD_UNITS;
  }
  get linewidth() {
    return this.uniforms.linewidth.value;
  }
  set linewidth(A) {
    this.uniforms.linewidth && (this.uniforms.linewidth.value = A);
  }
  get dashed() {
    return "USE_DASH" in this.defines;
  }
  set dashed(A) {
    A === true !== this.dashed && (this.needsUpdate = true), A === true ? this.defines.USE_DASH = "" : delete this.defines.USE_DASH;
  }
  get dashScale() {
    return this.uniforms.dashScale.value;
  }
  set dashScale(A) {
    this.uniforms.dashScale.value = A;
  }
  get dashSize() {
    return this.uniforms.dashSize.value;
  }
  set dashSize(A) {
    this.uniforms.dashSize.value = A;
  }
  get dashOffset() {
    return this.uniforms.dashOffset.value;
  }
  set dashOffset(A) {
    this.uniforms.dashOffset.value = A;
  }
  get gapSize() {
    return this.uniforms.gapSize.value;
  }
  set gapSize(A) {
    this.uniforms.gapSize.value = A;
  }
  get opacity() {
    return this.uniforms.opacity.value;
  }
  set opacity(A) {
    this.uniforms && (this.uniforms.opacity.value = A);
  }
  get resolution() {
    return this.uniforms.resolution.value;
  }
  set resolution(A) {
    this.uniforms.resolution.value.copy(A);
  }
  get alphaToCoverage() {
    return "USE_ALPHA_TO_COVERAGE" in this.defines;
  }
  set alphaToCoverage(A) {
    this.defines && (A === true !== this.alphaToCoverage && (this.needsUpdate = true), A === true ? this.defines.USE_ALPHA_TO_COVERAGE = "" : delete this.defines.USE_ALPHA_TO_COVERAGE);
  }
};
var vP = new pe(), o0 = new j(), i0 = new j(), Qe = new pe(), Ge = new pe(), Jt = new pe(), uP = new j(), dP = new Re(), ke = new bn(), n0 = new j(), ur = new Pt(), dr = new Bt(), Et = new pe(), Zt, $o;
function a0(o, A, e) {
  return Et.set(0, 0, -A, 1).applyMatrix4(o.projectionMatrix), Et.multiplyScalar(1 / Et.w), Et.x = $o / e.width, Et.y = $o / e.height, Et.applyMatrix4(o.projectionMatrixInverse), Et.multiplyScalar(1 / Et.w), Math.abs(Math.max(Et.x, Et.y));
}
function uw(o, A) {
  let e = o.matrixWorld, t = o.geometry, i = t.attributes.instanceStart, n = t.attributes.instanceEnd, a = Math.min(t.instanceCount, i.count);
  for (let f = 0, r = a; f < r; f++) {
    ke.start.fromBufferAttribute(i, f), ke.end.fromBufferAttribute(n, f), ke.applyMatrix4(e);
    let P = new j(), s = new j();
    Zt.distanceSqToSegment(ke.start, ke.end, s, P), s.distanceTo(P) < $o * 0.5 && A.push({ point: s, pointOnLine: P, distance: Zt.origin.distanceTo(s), object: o, face: null, faceIndex: f, uv: null, uv1: null });
  }
}
function dw(o, A, e) {
  let t = A.projectionMatrix, n = o.material.resolution, a = o.matrixWorld, f = o.geometry, r = f.attributes.instanceStart, P = f.attributes.instanceEnd, s = Math.min(f.instanceCount, r.count), p = -A.near;
  Zt.at(1, Jt), Jt.w = 1, Jt.applyMatrix4(A.matrixWorldInverse), Jt.applyMatrix4(t), Jt.multiplyScalar(1 / Jt.w), Jt.x *= n.x / 2, Jt.y *= n.y / 2, Jt.z = 0, uP.copy(Jt), dP.multiplyMatrices(A.matrixWorldInverse, a);
  for (let K = 0, U = s; K < U; K++) {
    if (Qe.fromBufferAttribute(r, K), Ge.fromBufferAttribute(P, K), Qe.w = 1, Ge.w = 1, Qe.applyMatrix4(dP), Ge.applyMatrix4(dP), Qe.z > p && Ge.z > p) continue;
    if (Qe.z > p) {
      let D = Qe.z - Ge.z, v = (Qe.z - p) / D;
      Qe.lerp(Ge, v);
    } else if (Ge.z > p) {
      let D = Ge.z - Qe.z, v = (Ge.z - p) / D;
      Ge.lerp(Qe, v);
    }
    Qe.applyMatrix4(t), Ge.applyMatrix4(t), Qe.multiplyScalar(1 / Qe.w), Ge.multiplyScalar(1 / Ge.w), Qe.x *= n.x / 2, Qe.y *= n.y / 2, Ge.x *= n.x / 2, Ge.y *= n.y / 2, ke.start.copy(Qe), ke.start.z = 0, ke.end.copy(Ge), ke.end.z = 0;
    let l = ke.closestPointToPointParameter(uP, true);
    ke.at(l, n0);
    let R = Zo.lerp(Qe.z, Ge.z, l), F = R >= -1 && R <= 1, u = uP.distanceTo(n0) < $o * 0.5;
    if (F && u) {
      ke.start.fromBufferAttribute(r, K), ke.end.fromBufferAttribute(P, K), ke.start.applyMatrix4(a), ke.end.applyMatrix4(a);
      let D = new j(), v = new j();
      Zt.distanceSqToSegment(ke.start, ke.end, v, D), e.push({ point: v, pointOnLine: D, distance: Zt.origin.distanceTo(v), object: o, face: null, faceIndex: K, uv: null, uv1: null });
    }
  }
}
var xr = class extends ne {
  constructor(A = new qi(), e = new Oo({ color: Math.random() * 16777215 })) {
    super(A, e), this.isLineSegments2 = true, this.type = "LineSegments2";
  }
  computeLineDistances() {
    let A = this.geometry, e = A.attributes.instanceStart, t = A.attributes.instanceEnd, i = new Float32Array(2 * e.count);
    for (let a = 0, f = 0, r = e.count; a < r; a++, f += 2) o0.fromBufferAttribute(e, a), i0.fromBufferAttribute(t, a), i[f] = f === 0 ? 0 : i[f - 1], i[f + 1] = i[f] + o0.distanceTo(i0);
    let n = new Bo(i, 2, 1);
    return A.setAttribute("instanceDistanceStart", new Kt(n, 1, 0)), A.setAttribute("instanceDistanceEnd", new Kt(n, 1, 1)), this;
  }
  raycast(A, e) {
    let t = this.material.worldUnits, i = A.camera;
    if (i === null && !t && console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'), t === false && (this.material.resolution.x === 0 || this.material.resolution.y === 0)) return;
    let n = A.params.Line2 !== void 0 && A.params.Line2.threshold || 0;
    Zt = A.ray;
    let a = this.matrixWorld, f = this.geometry, r = this.material;
    $o = r.linewidth + n, f.boundingSphere === null && f.computeBoundingSphere(), dr.copy(f.boundingSphere).applyMatrix4(a);
    let P;
    if (t) P = $o * 0.5;
    else {
      let p = Math.max(i.near, dr.distanceToPoint(Zt.origin));
      P = a0(i, p, r.resolution);
    }
    if (dr.radius += P, Zt.intersectsSphere(dr) === false) return;
    f.boundingBox === null && f.computeBoundingBox(), ur.copy(f.boundingBox).applyMatrix4(a);
    let s;
    if (t) s = $o * 0.5;
    else {
      let p = Math.max(i.near, ur.distanceToPoint(Zt.origin));
      s = a0(i, p, r.resolution);
    }
    ur.expandByScalar(s), Zt.intersectsBox(ur) !== false && (t ? uw(this, e) : dw(this, i, e));
  }
  onBeforeRender(A) {
    let e = this.material.uniforms;
    e && e.resolution && (A.getViewport(vP), this.material.uniforms.resolution.value.set(vP.z, vP.w));
  }
};
var Ji = class extends qi {
  constructor() {
    super(), this.isLineGeometry = true, this.type = "LineGeometry";
  }
  setPositions(A) {
    let e = A.length - 3, t = new Float32Array(2 * e);
    for (let i = 0; i < e; i += 3) t[2 * i] = A[i], t[2 * i + 1] = A[i + 1], t[2 * i + 2] = A[i + 2], t[2 * i + 3] = A[i + 3], t[2 * i + 4] = A[i + 4], t[2 * i + 5] = A[i + 5];
    return super.setPositions(t), this;
  }
  setColors(A) {
    let e = A.length - 3, t = new Float32Array(2 * e);
    for (let i = 0; i < e; i += 3) t[2 * i] = A[i], t[2 * i + 1] = A[i + 1], t[2 * i + 2] = A[i + 2], t[2 * i + 3] = A[i + 3], t[2 * i + 4] = A[i + 4], t[2 * i + 5] = A[i + 5];
    return super.setColors(t), this;
  }
  setFromPoints(A) {
    let e = A.length - 1, t = new Float32Array(6 * e);
    for (let i = 0; i < e; i++) t[6 * i] = A[i].x, t[6 * i + 1] = A[i].y, t[6 * i + 2] = A[i].z || 0, t[6 * i + 3] = A[i + 1].x, t[6 * i + 4] = A[i + 1].y, t[6 * i + 5] = A[i + 1].z || 0;
    return super.setPositions(t), this;
  }
  fromLine(A) {
    let e = A.geometry;
    return this.setPositions(e.attributes.position.array), this;
  }
};
var hr = class extends xr {
  constructor(A = new Ji(), e = new Oo({ color: Math.random() * 16777215 })) {
    super(A, e), this.isLine2 = true, this.type = "Line2";
  }
};
export function createHouseApp() {
const disposers = [];
let frame = 0;
applyIotDataCorrections(gP);
function listen(target, type, handler) {
  target.addEventListener(type, handler);
  disposers.push(() => target.removeEventListener(type, handler));
}
var FA = (o) => document.querySelector(o);
var { scene: gt, renderer: be, camera: Xt, controls: Zi, hemisphereLight: s0, sunLight: $e } = createScene(FA("#view"));
var y = createMaterials();
var wardrobeAnchors = [], Nr = {}, jr = [], Cr = {}, TP = [], Ei, lt, mt = {}, mP = [], ea = [], Tr = [], Go = null, ia = [["Fondo", 4.15, 13.3, 0], ["Ba\xF1o chico", 1.3, 13.4, 1], ["Cuarto del medio", 4.15, 9.9, 3], ["Pasillo", 1.2, 7, 2], ["Oficina", 4.1, 6.2, 4], ["Vestidor", 1.25, 4.5, 5], ["Principal", 4.25, 1.65, 6], ["Ba\xF1o principal", 1.25, 1.6, 7]];
var { addBox: Y, addWall: Ie, addFacadeWall: Tt, addFacadeWallOutward: xP } = createArchitecturePrimitives(y, Tr);
var roofBuilder = createRoofBuilder(y, Y, Tr);
var addOutdoorAcUnits = createOutdoorAcBuilder(Y);
var { addUpperFloorWalls, addGroundFloorWalls, addGroundFloorFinish } = createLevelWallBuilders({ addBox: Y, addWall: Ie, addFacadeWall: Tt, addFacadeWallOutward: xP }, y, { roof: roofBuilder, addOutdoorAcUnits });
var buildStairs = createStairBuilder(y, Y);
var ae = stairSpec, Dw = stairHeightAt;
var { addSofa: DP, addCounter: BP, addRadiator: jP } = createFixtureBuilders(y, Y);
var buildBathUnderStairs = createBathUnderStairsBuilder(y, Y, ae);
var addGroundFloorFurniture = createGroundFloorFurnitureBuilder(y, Y, { addCounter: BP, addSofa: DP, addRadiator: jP });
var addUpperFloorFurniture = createUpperFloorFurnitureBuilder(y, { addBox: Y, addWall: Ie });
function Dr(o, A, e, t) {
  let i = document.createElement("canvas");
  i.width = 512, i.height = 128;
  let n = i.getContext("2d");
  n.fillStyle = "#23384be8", n.beginPath(), n.roundRect(5, 10, 502, 105, 22), n.fill(), n.fillStyle = "white", n.font = "bold 38px Arial", n.textAlign = "center", n.fillText(A, 256, 77);
  let a = new Ni(new Lo({ map: new go(i), depthTest: false }));
  return a.position.set(e, 0.25, -t), a.scale.set(2, 0.5, 1), o.add(a), mP.push(a), a;
}
function xw(o, A) {
  let e = [];
  A.lines.forEach((n) => e.push(n[0], 0.035, -n[1], n[2], 0.035, -n[3]));
  let t = new he();
  t.setAttribute("position", new te(e, 3));
  let i = new Ti(t, new Vo({ color: 3560039, transparent: true, opacity: 0.75 }));
  return o.add(i), i;
}
function Nw(o) {
  let A = new YA();
  A.userData.photoBased = "jardin-desde-cuarto-fondo", o.add(A), Y(A, 8.53, 0.03, 5.775, 3.9, 0.06, 11.15, y.grass), Y(A, 6.52, 0.075, 7.7, 1.03, 0.08, 14.55, y.terracotta);
  let e = 11.35, t = e - 0.75, i = t - 0.82 - 14 * 0.52;
  for (let l = 0; l < 15; l++) {
    let R = i + l * 0.52;
    for (let F = 0; F < 3; F++) {
      let u = new ne(new Vt(0.54, 10, 8), l % 4 === 0 ? y.redLeaves : y.leaves);
      u.position.set(10.1 + 0.1 * Math.sin(l), 0.6 + F * 0.5, -R), u.scale.set(0.88, 1, 0.9), u.castShadow = true, A.add(u);
    }
  }
  for (let [l, R] of [[9.7, t]]) {
    Y(A, l, 1, R, 0.11, 2, 0.11, y.wood);
    for (let F = 0; F < 4; F++) {
      let u = F * Math.PI * 2 / 4, D = new ne(new Vt(1, 10, 6), y.leaves);
      D.scale.set(0.13, 0.035, 0.52), D.rotation.set(0.3, u, 0.2), D.position.set(l + Math.sin(u) * 0.23, 1.9 + Math.sin(F) * 0.12, -R + Math.cos(u) * 0.23), D.userData.gardenTreeLeaf = true, A.add(D);
    }
  }
  let n = 11.35, a = 15.05, f = a - n, r = (n + a) / 2, P = new Lt();
  [[7.035, 11.35], [10.71, 11.35], [10.71, 14.92], [7.035, 14.92]].forEach((l, R) => R ? P.lineTo(l[0], -l[1]) : P.moveTo(l[0], -l[1])), P.closePath();
  let s = new uo(P), p = s.attributes.position;
  for (let l = 0; l < p.count; l++) p.setXYZ(l, p.getX(l), 0.115, p.getY(l));
  let K = s.index.array;
  for (let l = 0; l < K.length; l += 3) {
    let R = K[l + 1];
    K[l + 1] = K[l + 2], K[l + 2] = R;
  }
  s.computeVertexNormals();
  let U = new ne(s, y.terracotta);
  U.receiveShadow = true, U.userData.patioFloor = { start: n, material: "same-exterior-terracotta" }, A.add(U);
  for (let l = 0.6; l < 14.92; l += 0.45) {
    let R = l < n ? 7.035 : 10.71;
    Y(A, (6.005 + R) / 2, 0.119, l, R - 6.005, 7e-3, 0.012, y.wall);
  }
  for (let l = 6.25; l < 10.71; l += 0.47) {
    let R = l < 7.035 ? 0.425 : n;
    Y(A, l, 0.119, (R + 14.92) / 2, 0.012, 7e-3, 14.92 - R, y.wall);
  }
  let w = new YA();
  w.userData.gardenCover = true, w.userData.patioStart = n, A.add(w), Y(w, 8.47, 2.18, r, 4.52, 0.035, f, y.cover);
  for (let l = 6.25; l <= 10.7; l += 0.45) Y(w, l, 2.145, r, 0.04, 0.08, f, y.wood);
  for (let l of [n, r, 15.02]) Y(w, 8.47, 2.12, l, 4.52, 0.09, 0.05, y.metal);
  for (let l of [n, 15.02]) Y(w, 10.58, 1.06, l, 0.065, 2.12, 0.065, y.metal);
  for (let l = 6.22; l < 10.72; l += 0.115) Y(w, l, 2.2, r, 0.014, 0.019, f, y.cover);
  for (let l of [6.7, 8.43]) {
    let R = new ne(new Vt(0.09, 10, 8), y.dark);
    R.position.set(l, 2.05, -0.33), A.add(R);
  }
}
var CP = { low: 15746116, middle: 16764456, high: 5487847, data: 4241539, light: 1581868, power: 15221314, lighting: 1120803, ac: 6662377, aux: 8546267, panel: 15764274, cold: 2391018, hot: 15290200, drain: 4682054, gas: 15243040, supply: 15613761, return: 11945416 }, Cw = { low: "Toma inferior", middle: "Toma intermedio", high: "Toma superior / aire", data: "Punto de datos", light: "Punto de iluminaci\xF3n" };
function Qo(o, A, e) {
  return o === "pa" ? 2.4 : A >= 0.3 && A <= 2.5125 && e >= 7.5725 && e <= 9.1475 ? A <= 1.3 ? Math.min(2.3, Dw(e)) : 2.3 : A > 6.1 || e >= 9.265 ? 2.4 : 2.9;
}
function ta(o, A, e, t = false) {
  if (A.length < 2) return;
  let i = A.flatMap((r) => [r[0], r[1], -r[2]]), n = new Ji();
  n.setPositions(i);
  let a = new Oo({ color: CP[e] || 8947848, linewidth: t ? 1.7 : 2.8, transparent: true, opacity: 0.92, depthTest: false, depthWrite: false, dashed: t, dashSize: 0.14, gapSize: 0.1 });
  a.resolution.set(FA("#view").clientWidth, FA("#view").clientHeight), TP.push(a);
  let f = new hr(n, a);
  return f.computeLineDistances(), f.renderOrder = 25, f.userData.electricalOverlay = true, o.add(f), f;
}
function P0(o, A, e) {
  let t = document.createElement("canvas");
  t.width = 256, t.height = 64;
  let i = t.getContext("2d");
  i.fillStyle = "#ffffffee", i.fillRect(0, 0, 256, 64), i.fillStyle = "#152c3e", i.font = "bold 30px Arial", i.textAlign = "center", i.fillText(A.id, 128, 43, 240);
  let n = new Ni(new Lo({ map: new go(t), depthTest: false }));
  n.position.set(A.x, e + 0.2, -A.z), n.scale.set(0.6, 0.15, 1), n.renderOrder = 110, o.add(n);
}
function K0(o, A, e, t = 0.09) {
  o.updateWorldMatrix(true, true);
  let i = o.localToWorld(new j(A.x, e, -A.z)), n = null;
  return o.traverse((a) => {
    let f = a.geometry?.parameters;
    if (!a.userData.structuralWall || !f || f.depth > 0.32 || f.height < 0.8 || f.width < 0.25) return;
    let r = a.worldToLocal(i.clone()), P = Zo.clamp(r.x, -f.width / 2, f.width / 2);
    if (Math.abs(r.y) > f.height / 2 + 0.15) return;
    let s = Math.sign(r.z);
    if (!s) {
      let U = o.localToWorld(new j(3, e, -7));
      s = Math.sign(a.worldToLocal(U).z) || 1;
    }
    let p = new j(P, r.y, s * f.depth / 2), K = Math.hypot(r.x - P, r.z - p.z);
    if (!n || K < n.distance) {
      p.z += s * t;
      let U = o.worldToLocal(a.localToWorld(p));
      n = { distance: K, x: U.x, z: -U.z, rotation: a.rotation.y };
    }
  }), n && n.distance < 0.45 ? n : { x: A.x, z: A.z, rotation: 0 };
}
function Tw(o, A) {
  let e = gP.floors[A], t = new YA();
  t.userData.electricalOverlay = true, o.add(t);
  let i = {};
  for (let n of ["outlets", "lights", "routes", "drops", "numbers", "panels", "annotations"]) i[n] = new YA(), t.add(i[n]);
  i.data = new YA(), i.dataRoutes = new YA();
  let dataLayer = new YA();
  dataLayer.userData.electricalOverlay = true, dataLayer.add(i.data, i.dataRoutes), o.add(dataLayer);
  Cr[A] = { layer: t, groups: i, dataLayer };
  for (let n of e.routes) {
    if (n.points3D) {
      const r2 = ta(n.kind === "data" ? i.dataRoutes : i.routes, n.points3D, n.kind, n.interpreted);
      r2.userData.route = n;
      continue;
    }
    let a = [], f;
    for (let P of n.points) {
      let s = n.mode === "underground" ? -0.1 : Qo(A, P[0], P[1]) + 0.025;
      if (n.mode !== "underground" && f && A === "pb" && f[1] < 9.265 != P[1] < 9.265) {
        let p = (9.265 - f[1]) / (P[1] - f[1]), K = f[0] + (P[0] - f[0]) * p;
        a.push([K, Qo(A, f[0], f[1]) + 0.025, 9.265], [K, s, 9.265]);
      }
      a.push([P[0], s, P[1]]), f = P;
    }
    let r = ta(i.routes, a, n.kind, n.dashedOriginal || n.interpreted);
    r.userData.route = n;
  }
  for (let n of e.points) {
    let a = n.kind === "light" ? n.height ?? Qo(A, n.x, n.z) - 0.025 : n.height, f = n.kind === "data" ? "data" : n.kind === "light" ? "lights" : "outlets", r = new Rt({ color: CP[n.kind], depthTest: false, depthWrite: false, transparent: true, opacity: 1 }), P = new ne(new Vt(n.kind === "light" ? 0.115 : 0.085, 16, 12), r), s = n.kind === "light" || n.feed === "underground" ? { x: n.x, z: n.z } : K0(o, n, a);
    if (P.position.set(s.x, a, -s.z), P.renderOrder = 100, P.userData.electricalPoint = { ...n, floor: A, height: a }, P.userData.electricalOverlay = true, i[f].add(P), jr.push(P), P0(i.numbers, { ...n, x: s.x, z: s.z }, a), n.kind === "light") {
      let p = new ne(new Vt(0.145, 16, 12), new Rt({ color: 16777215, transparent: true, opacity: 0.94, depthTest: false, depthWrite: false }));
      p.position.copy(P.position), p.renderOrder = 99, p.userData.electricalOverlay = true, i.lights.add(p);
    }
    if (["low", "middle", "high"].includes(n.kind)) if (n.feed === "underground") ta(i.drops, [[2.45, -0.1, 11.2], [n.x, -0.1, n.z], [s.x, a, s.z]], n.kind, true);
    else {
      let p = Qo(A, n.x, n.z) + 0.025, K = n.routeAnchor || [n.x, n.z];
      ta(i.drops, [[K[0], Qo(A, K[0], K[1]) + 0.025, K[1]], [n.x, p, n.z], [s.x, a, s.z]], n.kind, true);
    }
  }
  for (let n of e.annotations || []) P0(i.annotations, n, Qo(A, n.x, n.z) + 0.03);
  A === "pb" && ta(i.drops, [[0.305, Qo(A, 0.305, 12.1), 12.1], [0.305, -0.1, 12.1]], "power", true);
  for (let n of e.panels) {
    let a = new ne(new yt(0.22, 0.3, 0.08), new Rt({ color: CP.panel, transparent: true, opacity: 1, depthTest: false, depthWrite: false })), f = K0(o, n, n.height, 0.065);
    a.position.set(f.x, n.height, -f.z), a.rotation.y = f.rotation, a.renderOrder = 100, a.userData.electricalPoint = { ...n, floor: A, kind: "panel", id: n.name }, a.userData.electricalOverlay = true, i.panels.add(a), jr.push(a);
  }
}
function p0() {
  for (let o of Object.values(Cr)) {
    o.layer.visible = FA("#electrical").checked, o.dataLayer.visible = FA("#iotData").checked;
    for (let [A, e] of Object.entries({ outlets: "electricOutlets", lights: "electricLights", routes: "electricRoutes", drops: "electricDrops", numbers: "electricNumbers", panels: "electricPanels", annotations: "electricAnnotations" })) o.groups[A].visible = FA("#" + e).checked;
  }
  FA("#electricOptions").hidden = !FA("#electrical").checked, FA("#electrical").checked || (FA("#electricDetail").hidden = true), FA("#iotData").checked || (FA("#iotDetail").hidden = true), U0();
}
function mw(o) {
  let detail = FA(o.kind === "data" ? "#iotDetail" : "#electricDetail");
  detail.hidden = false, detail.textContent = o.id + " \xB7 " + (o.floor === "pb" ? "Planta baja" : "Planta alta") + " \xB7 " + (Cw[o.kind] || "Tablero") + " \xB7 altura " + o.height.toFixed(2) + " m desde piso. " + (o.heightInferred ? "Altura interpretada, pendiente de confirmar. " : "") + (o.corrected ? o.kind === "data" ? "Ubicaci\xF3n actualizada para IOT. " : "Ubicaci\xF3n de luminaria actualizada. " : o.source === "DWG" ? "Ubicaci\xF3n del DWG. " : "Ubicaci\xF3n estimada desde PDF. ") + (o.feed === "underground" ? "Alimentaci\xF3n de la isla por debajo del piso, confirmada por Gonza. Sin bajadas desde cielorraso. Profundidad y conexiones internas esquem\xE1ticas; posici\xF3n adaptada a la isla actual." : o.uninstalled ? "Punto el\xE9ctrico exterior; luminaria no instalada." : o.provisional ? "Punto de iluminaci\xF3n provisional bajo claraboya; sin spot instalado." : o.kind === "light" ? (o.mount === "wall" ? "Aplique de pared hacia abajo. " : "Spot de techo. ") + (o.circuitNote || "") : o.kind === "data" ? "D = datos; no se inventa su cableado." : o.route ? "Asociaci\xF3n cercana al CAD: " + o.route + ". Bajada esquem\xE1tica." : o.kind === "panel" ? "Altura del tablero esquem\xE1tica. Circuitos del plano: " + o.circuits.join(" | ") : "Sin coincidencia inequ\xEDvoca de conexi\xF3n en el CAD; bajada esquem\xE1tica.");
}
for (let o of ["electrical", "electricOutlets", "electricLights", "iotData", "electricRoutes", "electricDrops", "electricNumbers", "electricPanels", "electricAnnotations"]) FA("#" + o).onchange = p0;
FA("#electricPB").onclick = () => Yt({ title: "Electricidad \xB7 PDF previo PB", photo: 16 });
FA("#electricPA").onclick = () => Yt({ title: "Electricidad \xB7 PDF previo PA", photo: 17 });
function Xw(o, A) {
  let e = new YA();
  e.userData.electricalOverlay = true, o.add(e);
  let t = {};
  for (let i of ["cold", "hot", "drain", "gas", "supply", "return"]) t[i] = new YA(), e.add(t[i]);
  Nr[A] = { layer: e, groups: t };
  for (let i of HP.floors[A].routes) {
    let n = { cold: 0.08, hot: 0.1, drain: 0.06, gas: 0.14, supply: 0.18, return: 0.2 }[i.kind], a = ta(t[i.kind], i.points.map((f) => [f[0], n, f[1]]), i.kind);
    a.userData.installationRoute = i;
  }
}
function U0() {
  for (let o of Object.values(Nr)) {
    o.layer.visible = FA("#installations").checked;
    for (let A of Object.keys(o.groups)) o.groups[A].visible = FA("#install-" + A).checked;
  }
  FA("#installationOptions").hidden = !FA("#installations").checked;
}
for (let o of ["installations", "install-cold", "install-hot", "install-drain", "install-gas", "install-supply", "install-return"]) FA("#" + o).onchange = U0;
FA("#sourceInstallElectric").onclick = () => Yt({ title: "Instalaciones \xB7 Electricidad PB y PA", photo: 18 });
FA("#sourceInstallWater").onclick = () => Yt({ title: "Instalaciones \xB7 Agua y cloacas PB y PA", photo: 19 });
FA("#sourceInstallHeat").onclick = () => Yt({ title: "Instalaciones \xB7 Calefacci\xF3n PB y PA", photo: 21 });
FA("#sourceInstallGas").onclick = () => Yt({ title: "Instalaciones \xB7 Gas PB y PA", photo: 20 });
function Qw() {
  lt && (gt.remove(lt), lt.traverse((t) => {
    t.geometry && t.geometry.dispose();
  })), lt = new YA(), gt.add(lt), mP = [], ea = [], wardrobeAnchors.length = 0, jr = [], Cr = {}, TP = [], Tr.length = 0, Go = null, mt = {}, Nr = {};
  let o = 2.4, A = 2.9, e = 3.4;
  for (let t of ["pb", "pa"]) {
    let i = new YA();
    lt.add(i);
    let n = t === "pa" ? o : A;
    i.position.y = t === "pa" ? e : 0, mt[t] = i;
    if (addFloorSlab(i, t, y.floor), t === "pa") {
      addUpperFloorWalls(i, o), ia.forEach((l, R) => {
        let F = Dr(i, l[0], l[1], l[2]);
        F.userData.room = R, ea.push(F);
      }), wardrobeAnchors.push(...addUpperFloorFurniture(i, o));
    } else {
addGroundFloorWalls(i, o, e);
      addGroundFloorFurniture(i), buildStairs(i), buildBathUnderStairs(i), addGroundFloorFinish(i), Nw(i);
      for (let [K, U, w, l] of [["Living", 3.3, 3.2, 11], ["Cocina", 1.8, 11.3, 9], ["Comedor", 4.3, 10.1, 10], ["Jard\xEDn", 8.35, 6.7, 12]]) {
        let R = Dr(i, K, U, w);
        R.userData.reference = { title: K, photo: l }, ea.push(R);
      }
      Dr(i, "Lavadero", 2.8, 14.3);
      let p = Dr(i, "Ba\xF1o PB", 1.7, 8.4);
      p.userData.reference = { title: "Ba\xF1o PB / Escalera", photo: 22 }, ea.push(p);
    }
    i.userData.plan = xw(i, Hr.floors.find((p) => p.id === t)), Tw(i, t), Xw(i, t);
  }
  createCameraLayer(lt, Y), Ei = buildPhysicalShadows(lt, mt), lt.traverse((t) => {
    t.userData.gardenCover && (t.visible = FA("#cover").checked), t.userData.roofLayer && (t.visible = FA("#roofVisible").checked);
  }), mr(), FA("#status").textContent = `Cielorrasos: general ${o.toFixed(2)} m \xB7 living ${A.toFixed(2)} m \xB7 planta alta a ${e.toFixed(2)} m`;
}
function mr() {
  mt.pb.visible = FA("#pbToggle").getAttribute("aria-pressed") === "true", mt.pa.visible = FA("#paToggle").getAttribute("aria-pressed") === "true", mP.forEach((o) => o.visible = FA("#labels").checked), Object.values(mt).forEach((o) => o.userData.plan.visible = FA("#cad").checked), FA("#empty").hidden = mt.pb.visible || mt.pa.visible, Po.visible = mt.pb.visible || mt.pa.visible, p0(), lt.traverse((o) => {
    o.userData.bathCeiling && (o.visible = FA("#bathCeiling").checked);
  });
}
FA("#bathCeiling").onchange = mr;
function w0() {
  let o = FA("#view");
  be.setSize(o.clientWidth, o.clientHeight), Xt.aspect = o.clientWidth / o.clientHeight, Xt.updateProjectionMatrix(), TP.forEach((A) => A.resolution.set(o.clientWidth, o.clientHeight));
}
var resizeObserver = new ResizeObserver(w0);
resizeObserver.observe(FA("#view"));
for (let [o, A] of [["pbToggle", "Planta baja"], ["paToggle", "Planta alta"]]) FA("#" + o).onclick = () => {
  let e = FA("#" + o).getAttribute("aria-pressed") !== "true";
  FA("#" + o).setAttribute("aria-pressed", String(e)), FA("#" + o).textContent = A + " \xB7 " + (e ? "ON" : "OFF"), Go = null, mr();
};
for (let o of ["labels", "cad"]) listen(FA("#" + o), "change", mr);
FA("#top").onclick = () => {
  Xt.position.set(4, 28, -7), Zi.target.set(4, 0, -7);
};
FA("#perspective").onclick = () => {
  Xt.position.set(27, 26, 27), Zi.target.set(3, 4, -5);
};
FA("#cover").onchange = () => {
  lt.traverse((o) => {
    o.userData.gardenCover && (o.visible = FA("#cover").checked);
  });
};
FA("#roofVisible").onchange = () => {
  lt.traverse((o) => {
    o.userData.roofLayer && (o.visible = FA("#roofVisible").checked);
  });
};
FA("#capture").onclick = () => {
  be.render(gt, Xt);
  let o = document.createElement("a");
  o.download = "casa-vista-3d.png", o.href = be.domElement.toDataURL(), o.click();
};
var na = new In(), Sr = new nA();
listen(be.domElement, "click", (o) => {
  let A = be.domElement.getBoundingClientRect();
  Sr.set((o.clientX - A.left) / A.width * 2 - 1, -(o.clientY - A.top) / A.height * 2 + 1), na.setFromCamera(Sr, Xt);
  let e = na.intersectObjects(jr).find((i) => v0(i.object));
  if (e) {
    mw(e.object.userData.electricalPoint);
    return;
  }
});
function Yt(o) {
  if (showRoomReferenceViews(o, {
    panel: FA("#reference"), buttons: FA("#refviews"), image: FA("#photo"),
    title: FA("#roomtitle"), note: FA("#reference .refnote"),
  })) return;
  if (o.image) {
    FA("#refviews").replaceChildren();
    FA("#photo").src = encodeURI(o.image), FA("#photo").alt = "Dibujo de referencia · " + o.title, FA("#reference .refnote").textContent = "Dibujo suministrado \xB7 proporciones aproximadas, sin escala";
    FA("#roomtitle").textContent = o.title, FA("#reference").hidden = false;
    return;
  }
  let A = o.title === "Ba\xF1o PB / Escalera", e = o.title === "Cocina" || o.title === "Comedor";
  FA("#refviews").replaceChildren();
  let t = (i) => {
    if (Hr.photos[i].startsWith('/assets/references/cad/')) {
      FA("#photo").src = Hr.photos[i];
      FA("#photo").alt = "Dibujo CAD esquemático · " + o.title;
      FA("#reference .refnote").textContent = "Dibujo CAD generado a partir de foto · proporciones aproximadas, sin escala";
      return;
    }
    FA("#photo").alt = "Referencia del ambiente · " + o.title;
    FA("#photo").src = Hr.photos[i], FA("#reference .refnote").textContent = e || A ? "Dibujo suministrado \xB7 proporciones aproximadas, sin escala" : o.title.startsWith("Instalaciones") ? "Casa Instalaciones.dwg \xB7 instalaci\xF3n actual confirmada; alturas de ca\xF1er\xEDas no verificadas" : o.title.startsWith("Electricidad") ? "PDF el\xE9ctrico original \xB7 circuitos y conexiones de referencia" : "Foto suministrada por Gonza \xB7 referencia de la casa construida";
  };
  if (A) {
    for (let [i, n] of [["Vista frontal", 22], ["Planta 2D", 23]]) {
      let a = document.createElement("button");
      a.textContent = i, a.onclick = () => t(n), FA("#refviews").append(a);
    }
    t(o.photo);
  } else if (e) {
    let i = o.title === "Cocina" ? 15 : 13;
    for (let [n, a] of [["Planta 2D", 13], ["CAD", 14], ["Vista frontal", 15]]) {
      let f = document.createElement("button");
      f.textContent = n, f.setAttribute("aria-pressed", String(a === i)), f.onclick = () => {
        t(a), FA("#refviews").querySelectorAll("button").forEach((r) => r.setAttribute("aria-pressed", String(r === f)));
      }, FA("#refviews").append(f);
    }
    t(i);
  } else t(o.photo);
  FA("#roomtitle").textContent = o.title, FA("#reference").hidden = false;
}
function c0(o) {
  if (o === 12) {
    Yt({ title: "Ba\xF1o PB / Escalera", photo: 22 });
    return;
  }
  if (o >= ia.length) {
    Yt([{ title: "Cocina", photo: 9 }, { title: "Comedor", photo: 10 }, { title: "Living", photo: 11 }, { title: "Jard\xEDn \xB7 vista desde cuarto del fondo", photo: 12 }][o - ia.length]);
    return;
  }
  let A = ia[o];
  Yt({ title: A[0], photo: A[3] });
}
FA("#closePhoto").onclick = () => FA("#reference").hidden = true;
FA("#room").onchange = (o) => {
  o.target.value !== "" && c0(+o.target.value);
};
[...ia.map((o) => o[0]), "Cocina \xB7 PB", "Comedor \xB7 PB", "Living \xB7 PB", "Jard\xEDn desde cuarto del fondo", "Ba\xF1o PB / Escalera"].forEach((o, A) => {
  let e = document.createElement("option");
  e.value = A, e.textContent = o, FA("#room").append(e);
});
var { group: Xr, sphere: XP } = createSunReference(gt);
var Po = new YA();
Po.userData.environment = "calle";
gt.add(Po);
var Gw = new xe({ color: 5593953, roughness: 1 }), l0 = new xe({ color: 13092025, roughness: 1 });
Y(Po, 5.45, -0.14, -4.8, 32, 0.04, 6, Gw);
Y(Po, 5.45, -0.06, -0.9, 32, 0.12, 1.8, l0);
Y(Po, 5.45, -0.025, -1.78, 32, 0.15, 0.12, l0);
for (let o = -9; o < 21; o += 0.7) Y(Po, o, 4e-3, -0.9, 0.012, 8e-3, 1.65, y.tile);
for (let o = -9; o < 21; o += 3.4) Y(Po, o, -0.115, -4.8, 1.5, 8e-3, 0.09, y.white);
var Or = document.createElement("canvas");
Or.width = 1024;
Or.height = 128;
var Qr = Or.getContext("2d");
Qr.fillStyle = "#dededb";
Qr.font = "bold 60px Arial";
Qr.textAlign = "center";
Qr.fillText("Juan Bautista Valle", 512, 87);
var OP = new ne(new qo(8, 0.9), new Rt({ map: new go(Or), transparent: true, depthWrite: false }));
OP.rotation.x = -Math.PI / 2;
OP.position.set(5.45, -0.109, 3.15);
Po.add(OP);
function g0() {
  Xr.visible = FA("#sunRef").checked && QP.altitude > 0;
}
FA("#sunRef").onchange = g0;
var QP = {};
function Gr() {
  let o = FA("#sunDate").value, A = FA("#sunTime").value;
  if (!o || !A) return;
  let e = +FA("#latitude").value, t = +FA("#longitude").value, i = +FA("#bearing").value;
  if (!Number.isFinite(e) || !Number.isFinite(t) || Math.abs(e) > 90 || Math.abs(t) > 180) return;
  let n = new Date(o + "T" + A + ":00-03:00"), a = solarPosition(n, e, t);
  applySun({ sunLight: $e, hemisphereLight: s0, scene: gt, sunSphere: XP }, a.altitude, a.azimuth, i), FA("#season").value = seasonForDate(o), FA("#sunHourOut").textContent = A, FA("#sunHour").value = +A.slice(0, 2) * 60 + +A.slice(3, 5);
  let K = FA("#orientationConfirmed").checked;
  FA("#solarInfo").textContent = (a.altitude > 0 ? "Sol sobre el horizonte" : "Noche \xB7 sol bajo el horizonte") + " \xB7 elevaci\xF3n " + a.altitude.toFixed(1) + "\xB0 \xB7 azimut " + a.azimuth.toFixed(1) + "\xB0 desde norte. " + (K ? "Orientaci\xF3n aplicada: " + i.toFixed(1) + "\xB0 hacia el fondo (estimaci\xF3n de Maps)." : "Orientaci\xF3n de la casa pendiente."), QP = { altitude: a.altitude, azimuth: a.azimuth, date: o, time: A, latitude: e, longitude: t, bearing: i, verified: K }, g0();
}
function H0() {
  let o = buenosAiresNow();
  FA("#sunDate").value = o.year + "-" + o.month + "-" + o.day, FA("#sunTime").value = o.hour + ":" + o.minute, Gr();
}
for (let o of ["sunDate", "sunTime", "latitude", "longitude", "bearing", "orientationConfirmed"]) listen(FA("#" + o), "input", Gr);
FA("#sunHour").oninput = () => {
  let o = +FA("#sunHour").value;
  FA("#sunTime").value = String(Math.floor(o / 60)).padStart(2, "0") + ":" + String(o % 60).padStart(2, "0"), Gr();
};
FA("#season").onchange = () => {
  let o = FA("#sunDate").value.slice(0, 4);
  FA("#sunDate").value = o + "-" + { summer: "12-21", autumn: "03-20", winter: "06-21", spring: "09-22" }[FA("#season").value], Gr();
};
FA("#now").onclick = H0;
H0();
function v0(o) {
  for (let A = o; A; A = A.parent) if (!A.visible) return false;
  return true;
}
function u0(o) {
  let A = be.domElement.getBoundingClientRect();
  return Sr.set((o.clientX - A.left) / A.width * 2 - 1, -(o.clientY - A.top) / A.height * 2 + 1), na.setFromCamera(Sr, Xt), na.intersectObject(lt, true).find((t) => t.object.isMesh && !t.object.userData.shadowOnly && !t.object.userData.electricalOverlay && v0(t.object) && t.object.material !== y.glass)?.object.userData.exteriorWall || null;
}
listen(be.domElement, "pointermove", (o) => {
  o.pointerType === "mouse" && o.buttons === 0 && (Go = u0(o));
});
listen(be.domElement, "pointerleave", () => {
  Go = null;
});
var oa = null;
listen(be.domElement, "pointerdown", (o) => {
  o.pointerType !== "mouse" && (oa = { x: o.clientX, y: o.clientY });
});
listen(be.domElement, "pointerup", (o) => {
  if (oa && Math.hypot(o.clientX - oa.x, o.clientY - oa.y) < 8) {
    let A = u0(o);
    Go = Go === A ? null : A;
  }
  oa = null;
});
function Iw() {
  for (let o of Tr) {
    let A = o.userData.exteriorWall === Go ? 0.22 : 1;
    o.material.transparent = true, o.material.opacity = A, o.material.depthWrite = A === 1;
  }
}
Qw();
function referenceImageUrl(o) {
  if (o.image) return encodeURI(o.image);
  let A = o.title === "Ba\xF1o PB / Escalera" ? 22 : o.title === "Cocina" ? 15 : o.title === "Comedor" ? 13 : o.photo;
  return Hr.photos[A] ?? null;
}
var roomPhotoHotspots = createRoomPhotoHotspots({
  anchors: [
    ...ea.map((label) => {
      let reference = ia[label.userData.room]?.[0] === "Oficina" ? OFFICE_REFERENCE : label.userData.reference ?? (ia[label.userData.room] && { title: ia[label.userData.room][0], photo: ia[label.userData.room][3] });
      return { parent: label.parent, x: label.position.x, z: -label.position.z, reference, room: label.userData.room, imageUrl: reference && referenceImageUrl(reference) };
    }),
    ...wardrobeAnchors.map((anchor) => ({ ...anchor, imageUrl: referenceImageUrl(anchor.reference) }))
  ],
  camera: Xt, domElement: be.domElement, getLevelsRoot: () => lt, listen,
  openPhoto: (anchor) => anchor.reference ? Yt(anchor.reference) : c0(anchor.room)
});
disposers.push(() => roomPhotoHotspots.dispose());
w0();
function d0() {
  frame = requestAnimationFrame(d0), Zi.update(), Iw(), be.render(gt, Xt);
}
d0();
const model = { scene: gt, camera: Xt, renderer: be, get levels() {
  return mt;
}, installations: HP, get installationLevels() {
  return Nr;
}, electrical: gP, get electricalLevels() {
  return Cr;
}, get physicalShadows() {
  return Ei;
}, get sunReference() {
  return Xr;
}, get solar() {
  return QP;
}, get hoveredWall() {
  return Go;
}, exteriorMeshes: Tr, get light() {
  return $e;
}, controls: Zi, rebuildElectrical() {
  for (const e of Object.values(Cr)) {
    for (const layer of [e.layer, e.dataLayer]) {
      layer.removeFromParent();
      layer.traverse((o) => {
        o.geometry?.dispose();
        if (o.material) {
          o.material.map?.dispose();
          o.material.dispose();
        }
      });
    }
  }
  jr = [];
  Cr = {};
  for (const id of ["pb", "pa"]) Tw(mt[id], id);
  p0();
}, materials: y, geometryConstructors: { extrude: Nn, box: yt, cylinder: mi }, ceilingAt: Qo, stairSpec: ae, data: Hr };

function dispose() {
  cancelAnimationFrame(frame);
  for (const release of disposers) release();
  resizeObserver.disconnect();
  Zi.dispose();
  gt.traverse((object) => {
    object.geometry?.dispose();
    if (object.isLight) object.dispose?.();
    for (const material of [].concat(object.material ?? [])) {
      for (const value of Object.values(material)) if (value?.isTexture) value.dispose();
      material.dispose();
    }
  });
  be.dispose();
  be.forceContextLoss();
  be.domElement.remove();
}
return { model, dispose };
}
