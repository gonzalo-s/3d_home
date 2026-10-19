import { uf, Ye, di, q8, Zo, nA, j, pe, Re, YA, JA, cn, Pt, te, Bt, he, Kt, Lo, Ni, Rt, ne, Vo, Ti, go, yt, mi, vo, Lt, Nn, qo, uo, Vt, Cn, Tn, Yn, Ee, xe, Qi, On, Le, Gn, kn, Bo, In, bn, UA, _e, Rr, gr } from "./three-runtime.js";
import Hr from "../data/house.json";
import gP from "../data/electrical-source.json";
import HP from "../data/installations.json";
var { PI: fw, sin: fo, cos: ro, tan: _s, asin: $s, atan2: A0, acos: Lg, sqrt: Vg, abs: Wg, round: qg, floor: Jg } = Math, ct = fw / 180, rw = 1e3 * 60 * 60 * 24, Pw = 2440588, Kw = 2451545;
function sw(o) {
  return o.valueOf() / rw - 0.5 + Pw - Kw;
}
function pw(o) {
  let A = 2e3 + o / 365.2425, e;
  return A < 1920 ? (e = A - 1900, -2.79 + e * (1.494119 + e * (-0.0598939 + e * (61966e-7 - e * 197e-6)))) : A < 1941 ? (e = A - 1920, 21.2 + e * (0.84493 + e * (-0.0761 + e * 20936e-7))) : A < 1961 ? (e = A - 1950, 29.07 + e * (0.407 + e * (-1 / 233 + e / 2547))) : A < 1986 ? (e = A - 1975, 45.45 + e * (1.067 + e * (-1 / 260 - e / 718))) : A < 2005 ? (e = A - 2e3, 63.86 + e * (0.3345 + e * (-0.060374 + e * (17275e-7 + e * (651814e-9 + e * 2373599e-11))))) : A < 2050 ? (e = A - 2e3, 62.92 + e * (0.32217 + e * 5589e-6)) : (e = (A - 1820) / 100, -20 + 32 * e * e - 0.5628 * (2150 - A));
}
function Uw(o) {
  return o + pw(o) / 86400;
}
function Fw(o, A, e) {
  return (A0(fo(o), ro(o) * fo(A) - _s(e) * ro(A)) / ct + 540) % 360;
}
function Rw(o, A, e) {
  return $s(fo(A) * fo(e) + ro(A) * ro(e) * ro(o));
}
function ww(o, A) {
  return ct * (280.46061837 + 360.98564736629 * o) - A;
}
function cw(o) {
  return o < 0 && (o = 0), 2967e-7 / _s(o + 312536e-8 / (o + 0.08901179));
}
function lw(o) {
  let A = o / 36525, e = ct * (280.46646 + A * (36000.76983 + A * 3032e-7)), t = ct * (357.52911 + A * (35999.05029 - A * 1537e-7)), i = fo(t), n = ro(t), a = ct * ((1.914602 - A * (4817e-6 + A * 14e-6)) * i + (0.019993 - 101e-6 * A) * 2 * i * n + 289e-6 * i * (3 - 4 * i * i)), f = ct * (125.04 - 1934.136 * A), r = e + a - ct * (569e-5 + 478e-5 * fo(f)), P = ct * (23.439291 - A * (0.0130042 + A * (16e-8 - A * 504e-9))) + ct * 256e-5 * ro(f);
  return { ra: A0(ro(P) * fo(r), ro(r)), dec: $s(fo(P) * fo(r)), lon: r };
}
function e0(o, A, e) {
  let t = ct * -e, i = ct * A, n = sw(o), a = lw(Uw(n)), f = ww(n, t) - a.ra, r = Rw(f, i, a.dec);
  return { azimuth: Fw(f, i, a.dec), altitude: (r + cw(r)) / ct };
}
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
var FA = (o) => document.querySelector(o), gt = new cn();
gt.background = new JA("#e9edf1");
var be = new Rr({ antialias: true, preserveDrawingBuffer: true });
be.setPixelRatio(Math.min(devicePixelRatio, 2));
be.shadowMap.enabled = true;
be.shadowMap.type = uf;
FA("#view").append(be.domElement);
var Xt = new Le(42, 1, 0.1, 150), Zi = new gr(Xt, be.domElement);
Zi.enableDamping = true;
Zi.target.set(3, 4, -5);
Xt.position.set(27, 26, 27);
var s0 = new On(16777215, 8425632, 2.3);
gt.add(s0);
var $e = new Gn(16777215, 3);
$e.position.set(-12, 24, 8);
$e.castShadow = true;
$e.shadow.mapSize.set(2048, 2048);
Object.assign($e.shadow.camera, { left: -25, right: 25, top: 25, bottom: -25 });
$e.shadow.camera.far = 120;
$e.shadow.bias = -3e-4;
$e.target.position.set(5, 0, -7);
gt.add($e.target);
gt.add($e);
var y = { wall: new xe({ color: 16250092, roughness: 0.9 }), floor: new xe({ color: 12494216, roughness: 0.9, side: Ye }), tile: new xe({ color: 11646392, roughness: 0.8 }), white: new xe({ color: 16777215 }), wood: new xe({ color: 7492418 }), glass: new xe({ color: 8963796, transparent: true, opacity: 0.35, roughness: 0.1 }), blue: new xe({ color: 5011608 }) };
y.facade = new xe({ color: 13285782, roughness: 0.95 });
y.metal = new xe({ color: 5593952, metalness: 0.45, roughness: 0.55 });
y.grayFloor = new xe({ color: 11183774, roughness: 0.88 });
y.terracotta = new xe({ color: 12022096, roughness: 0.95 });
y.grass = new xe({ color: 5538363, roughness: 1 });
y.leaves = new xe({ color: 4811318, roughness: 1 });
y.redLeaves = new xe({ color: 7954507, roughness: 1 });
y.dark = new xe({ color: 3158836, roughness: 0.85 });
y.cover = new xe({ color: 12962245, transparent: true, opacity: 0.48, side: Ye, roughness: 0.5 });
var Nr = {}, jr = [], Cr = {}, TP = [], Ei, lt, mt = {}, mP = [], ea = [], Tr = [], Go = null, ia = [["Fondo", 4.15, 13.3, 0], ["Ba\xF1o chico", 1.3, 13.4, 1], ["Cuarto del medio", 4.15, 9.9, 3], ["Pasillo", 1.2, 7, 2], ["Oficina", 4.1, 6.2, 4], ["Vestidor", 1.25, 4.5, 5], ["Principal", 4.25, 1.65, 6], ["Ba\xF1o principal", 1.25, 1.6, 7]];
function Y(o, A, e, t, i, n, a, f) {
  let r = f === y.facade, P = new ne(new yt(i, n, a), r ? f.clone() : f);
  return r && (P.userData.exteriorWall = P, Tr.push(P)), P.position.set(A, e, -t), P.castShadow = f !== y.glass && f !== y.cover, P.receiveShadow = true, o.add(P), P;
}
function Ie(o, A, e, t, i, n = []) {
  let a = e[0] - A[0], f = e[1] - A[1], r = Math.hypot(a, f), P = [0, r];
  n.forEach((s) => P.push(s[0], s[1])), P = [...new Set(P)].filter((s) => s >= 0 && s <= r).sort((s, p) => s - p);
  for (let s = 1; s < P.length; s++) {
    let p = P[s - 1], K = P[s], U = (p + K) / 2, w = n.find((R) => U > R[0] && U < R[1]), l = w ? [[0, w[2]], [w[3], i]] : [[0, i]];
    for (let [R, F] of l) {
      if (F <= R) continue;
      let u = Y(o, A[0] + a * U / r, (F + R) / 2, A[1] + f * U / r, K - p, F - R, t, y.wall);
      u.rotation.y = Math.atan2(f, a), u.userData.structuralWall = true;
    }
    if (w && w[2] > 0 && !["niche", "open-void"].includes(w[6])) {
      let R = Y(o, A[0] + a * U / r, (w[2] + w[3]) / 2, A[1] + f * U / r, K - p, w[3] - w[2], 0.025, y.glass);
      R.rotation.y = Math.atan2(f, a);
    }
  }
}
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
function Tt(o, A, e, t, i, n = [], a = 1) {
  let f = new YA();
  o.add(f), o = f;
  let r = y.wall;
  y.wall = y.facade, Ie(o, A, e, t, i, n), y.wall = r;
  let P = e[0] - A[0], s = e[1] - A[1], p = Math.hypot(P, s);
  for (let K of n) {
    if (K[2] <= 0 && !K[4] || K[5] === "no-decoration") continue;
    let U = Math.max(0, K[0]), w = K[5] === "cad-middle-window" ? K[1] : Math.min(p, K[1]);
    if (w <= U) continue;
    let l = (U + w) / 2, R = w - U, F = K[2], u = K[3], D = new YA();
    D.userData.exteriorWindow = F > 0, D.userData.gardenDoor = K[4] || null, D.userData.opening = { width: R, bottom: F, top: u, cadReference: K[5] || null }, D.position.set(A[0] + P * l / p + a * s / p * (t / 2 + 0.035), 0, -A[1] - s * l / p + a * P / p * (t / 2 + 0.035)), D.rotation.y = Math.atan2(s, P), o.add(D), K[4] ? hw(D, R, u, K[4]) : NP(D, 0, 0, R, F, u);
    for (let v of [-R / 2 - 0.055, R / 2 + 0.055]) Y(D, v, (F + u) / 2, 0, 0.11, u - F + 0.2, 0.1, y.facade);
    Y(D, 0, F - 0.06, 0, R + 0.22, 0.12, 0.12, y.facade), Y(D, 0, u + 0.055, 0, R + 0.22, 0.11, 0.1, y.facade);
  }
  o.traverse((K) => {
    K.userData.exteriorWall && (K.userData.exteriorWall = o), K.isMesh && K.material !== y.glass && (K.userData.structuralWall = true);
  });
}
function xP(o, A, e, t, i, n = []) {
  Tt(o, A, e, t, i, n);
}
function NP(o, A, e, t, i, n) {
  for (let a = 0; a <= Math.ceil(t / 0.16); a++) {
    let f = Math.ceil(t / 0.16);
    Y(o, A - t / 2 + a * t / f, (i + n) / 2, e, 0.022, n - i, 0.028, y.metal);
  }
  for (let a of [i, i + 0.28, n - 0.28, n]) Y(o, A, a, e, t, 0.025, 0.028, y.metal);
}
function hw(o, A, e, t) {
  let i = t === "cocina-balcon", n = 0.055, a = t === "principal-jardin" ? y.metal : y.white;
  o.userData.doorFinish = t === "principal-jardin" ? "metal-gris" : "blanco", o.userData.hasGrille = i || t === "lavadero-jardin";
  for (let f of [-A / 2 + n / 2, A / 2 - n / 2]) Y(o, f, e / 2, 0, n, e, 0.065, a);
  if (Y(o, 0, e - n / 2, 0, A, n, 0.065, a), i) {
    Y(o, 0, e / 2, 0, n, e, 0.065, a);
    for (let f of [-A / 4, A / 4]) Y(o, f, e / 2, -0.01, A / 2 - n * 1.6, e - n * 2, 0.03, y.glass), Y(o, f, n / 2, 0, A / 2, n, 0.065, y.white);
    NP(o, 0, -0.09, A, 0.025, e - 0.025);
  } else Y(o, 0, (e - n) / 2, -5e-3, A - n * 2, e - n, 0.045, a), Y(o, A / 2 - 0.16, 0.98, -0.04, 0.035, 0.14, 0.03, y.metal), t === "lavadero-jardin" && NP(o, 0, -0.09, A, 0.025, e - 0.025);
}
function hP(o, A, e, t, i, n) {
  let a = new YA();
  a.userData.furniture = "wardrobe", o.add(a), Y(a, A, n / 2, e, t, n, i, y.wood);
  for (let f = 0; f < 4; f++) Y(a, A, 0.28 + f * (n - 0.4) / 3, e, t, 0.035, i, y.white);
  return a;
}
function f0(o, A) {
  let e = new YA();
  e.userData.sanitary = "toilet", e.position.set(0.6, 0, -A), e.rotation.y = Math.PI / 2, o.add(e), Y(e, 0, 0.25, -0.05, 0.42, 0.5, 0.7, y.white), Y(e, 0, 0.7, 0.22, 0.42, 0.55, 0.16, y.white);
}
function r0(o, A) {
  let e = new YA();
  e.userData.sanitary = "bidet", e.position.set(0.59, 0, -A), e.rotation.y = Math.PI / 2, o.add(e), Y(e, 0, 0.23, 0, 0.42, 0.46, 0.58, y.white), Y(e, 0, 0.465, 0, 0.27, 0.018, 0.34, y.glass), Y(e, 0, 0.5, 0.21, 0.025, 0.08, 0.025, y.metal);
}
function DP(o, A, e, t, i, n, a = 0) {
  let f = new YA();
  f.position.set(A, 0, -e), f.rotation.y = a, o.add(f), Y(f, 0, 0.16, 0, t, 0.16, i, y.wood), Y(f, 0, 0.4, 0, t, 0.4, i, n), Y(f, 0, 0.72, -i / 2 + 0.11, t, 0.65, 0.22, n);
  for (let r of [-1, 1]) Y(f, r * (t / 2 - 0.1), 0.57, 0, 0.2, 0.45, i, n);
}
function BP(o, A, e, t, i, n = 0.85) {
  Y(o, A, n / 2, e, t, n, i, y.white), Y(o, A, n + 0.035, e, t + 0.035, 0.07, i + 0.04, y.grayFloor);
}
function jP(o, A, e, t = 0.7) {
  let i = new YA();
  i.userData.whiteRadiator = true, i.userData.location = { x: A, z: e }, o.add(i);
  let n = 8;
  for (let a = 0; a < n; a++) Y(i, A, 0.48, e - t / 2 + (a + 0.5) * t / n, 0.13, 0.66, t / n * 0.78, y.white);
  for (let a of [0.21, 0.76]) Y(i, A, a, e, 0.11, 0.045, t, y.white);
  Y(i, A, 0.73, e + t / 2 + 0.06, 0.07, 0.05, 0.13, y.white);
}
var ae = { start: 5.26, end: 9.1475, width: 1, steps: 18, rise: 3.4 };
function Dw(o) {
  let A = Math.floor((o - ae.start) / (ae.end - ae.start) * ae.steps);
  return Math.min(3.4, (A + 1) * 3.4 / ae.steps - 0.15);
}
function SP(o, A, e, t, i, n) {
  let a = new j(A, e[0], -e[1]), f = new j(A, t[0], -t[1]), r = f.clone().sub(a), P = new ne(new yt(n, r.length(), n), i);
  P.position.copy(a.add(f).multiplyScalar(0.5)), P.quaternion.setFromUnitVectors(new j(0, 1, 0), r.normalize()), P.castShadow = true, o.add(P);
}
function Bw(o, A, e, t, i, n, a, f) {
  let r = new Lt();
  r.moveTo(e, 0), r.lineTo(t, 0), r.lineTo(t, n), r.lineTo(e, i), r.closePath();
  let P = new Nn(r, { depth: a, bevelEnabled: false }), s = P.attributes.position;
  for (let K = 0; K < s.count; K++) {
    let U = s.getX(K), w = s.getY(K), l = s.getZ(K);
    s.setXYZ(K, A + l, w, -U);
  }
  P.computeVertexNormals();
  let p = new ne(P, f);
  return p.castShadow = true, p.userData.stairStorage = true, o.add(p), p;
}
function jw(o) {
  let A = new YA();
  A.userData.stairSpec = ae, o.add(A);
  let e = ae.steps, t = (ae.end - ae.start) / e, i = ae.rise / e;
  for (let F = 0; F < e; F++) {
    let u = ae.start + (F + 0.5) * t, D = (F + 1) * i;
    Y(A, 0.8, D - 0.035, u, 1, 0.07, t + 0.015, y.wood), Y(A, 0.8, D - i / 2, u - t / 2 + 0.02, 1, i, 0.035, y.wood);
  }
  let n = 7.5725, a = (n - ae.start) / (ae.end - ae.start) * 3.4 - 0.15;
  Bw(A, 0.3, ae.start, n, 0.025, a, 1, y.dark), SP(A, 1.34, [0.1, ae.start], [3.25, ae.end], y.dark, 0.16);
  for (let F = 5.75; F < 7.5; F += 0.6) {
    let u = (F - ae.start) / (ae.end - ae.start) * 3.4 - 0.14;
    Y(A, 1.305, u / 2, F, 0.015, u, 0.016, y.metal);
  }
  for (let F = 0; F < 5; F++) {
    let u = ae.start + 0.08 + F * (ae.end - ae.start - 0.16) / 4, D = (u - ae.start) / (ae.end - ae.start) * 3.4;
    Y(A, 1.35, D + 0.48, u, 0.045, 0.96, 0.045, y.metal);
  }
  for (let F of [0.34, 0.61]) SP(A, 1.35, [F, ae.start], [3.4 + F, ae.end], y.metal, 0.025);
  SP(A, 1.35, [0.96, ae.start], [4.36, ae.end], y.wood, 0.07);
  let f = new YA();
  f.userData.room = "bath-pb", f.userData.flatCeiling = 2.3, o.add(f);
  let r = document.createElement("canvas");
  r.width = r.height = 128;
  let P = r.getContext("2d");
  P.fillStyle = "#42413d", P.fillRect(0, 0, 128, 128), P.fillStyle = "#e6e3db";
  for (let [F, u] of [[0, 0], [128, 0], [0, 128], [128, 128]]) P.beginPath(), P.arc(F, u, 65, 0, Math.PI * 2), P.fill();
  P.fillStyle = "#42413d", P.beginPath(), P.arc(64, 64, 44, 0, Math.PI * 2), P.fill();
  let s = new go(r);
  s.wrapS = s.wrapT = di, s.repeat.set(5, 4);
  let p = new xe({ map: s, roughness: 0.8 });
  Y(f, 1.375, 0.035, 8.36, 2.15, 0.035, 1.45, p), Y(f, 1.375, 0.1, 9.075, 2.15, 0.18, 0.02, p), Y(f, 0.31, 0.1, 8.36, 0.02, 0.18, 1.45, p);
  let K = new YA();
  K.userData.furniture = "toilet-bath-pb", K.position.set(0.8, 0, -7.935), K.rotation.y = Math.PI, f.add(K), Y(K, 0, 0.25, -0.05, 0.42, 0.5, 0.7, y.white), Y(K, 0, 0.7, 0.22, 0.42, 0.55, 0.16, y.white);
  let U = new YA();
  U.userData.furniture = "vanity-bath-pb", f.add(U), Y(U, 2.225, 0.8, 8.905, 0.45, 0.09, 0.36, y.grayFloor), Y(U, 2.225, 0.91, 8.905, 0.35, 0.15, 0.27, y.white), Y(U, 2.225, 0.985, 8.905, 0.26, 9e-3, 0.18, y.glass);
  for (let F of [2.025, 2.425]) Y(U, F, 0.39, 8.92, 0.035, 0.78, 0.03, y.dark);
  Y(U, 2.225, 1.055, 9.02, 0.025, 0.18, 0.025, y.metal), Y(f, 2.225, 1.57, 9.065, 0.4, 0.82, 0.035, y.dark), Y(f, 2.225, 1.57, 9.04, 0.32, 0.72, 0.012, y.glass);
  let w = new YA();
  w.userData.furniture = "bath-radiator-two-elements", w.userData.whiteRadiator = true, w.userData.location = { x: 0.365, z: 8.8425 }, f.add(w);
  for (let F = 0; F < 2; F++) Y(w, 0.365, 0.48, 8.8 + F * 0.085, 0.13, 0.66, 0.06, y.white);
  for (let F of [0.21, 0.76]) Y(w, 0.365, F, 8.8425, 0.11, 0.045, 0.17, y.white);
  Y(f, 0.12, 1.32, 8.3, 0.06, 0.46, 0.8, y.grayFloor);
  for (let F of [7.9, 8.7]) Y(f, 0.225, 1.32, F, 0.15, 0.46, 0.02, y.white);
  for (let F of [1.09, 1.55]) Y(f, 0.225, F, 8.3, 0.15, 0.02, 0.8, y.white);
  let l = new YA();
  l.userData.bathCeiling = true, o.add(l);
  let R = Y(l, 1.375, 2.34, 8.36, 2.15, 0.08, 1.45, y.wall);
  R.userData.structuralWall = true;
  for (let F = 0; F < e; F++) {
    let u = ae.start + (F + 0.5) * t;
    if (u < 7.5725) continue;
    let D = Math.min(2.3, (F + 1) * i - 0.15);
    if (D >= 2.3) continue;
    let v = Y(l, 0.8, (D + 2.3) / 2, u, 1, 2.3 - D, t, y.wall);
    v.userData.structuralWall = true;
  }
}
function Sw(o, A, e, t) {
  let i = new YA();
  i.userData.photoBased = "planta-baja", o.add(i), BP(i, 0.64, 10.67, 0.68, 1.98), BP(i, 1.40625, 9.535, 2.2125, 0.65);
  for (let U of [10.1, 10.7, 11.3]) Y(i, 0.535, 1.86, U, 0.47, 0.72, 0.57, y.white), Y(i, 0.79, 1.28, U, 0.02, 0.4, 0.57, y.tile), Y(i, 0.9, 0.44, U, 0.012, 0.76, 0.01, y.metal);
  let n = new YA();
  n.userData.furniture = "sink-return", i.add(n), Y(n, 1.12, 0.925, 9.535, 0.56, 0.022, 0.44, y.metal), Y(n, 1.12, 0.943, 9.535, 0.44, 0.015, 0.32, y.dark), Y(n, 1.12, 1.08, 9.28, 0.035, 0.28, 0.035, y.metal), Y(n, 1.12, 1.21, 9.35, 0.035, 0.035, 0.18, y.metal);
  let a = new YA();
  a.userData.furniture = "dishwasher-return", i.add(a), Y(a, 2.17, 0.43, 9.88, 0.56, 0.79, 0.025, y.metal), Y(a, 2.17, 0.72, 9.9, 0.42, 0.035, 0.035, y.dark);
  for (let U of [1.37, 1.78]) Y(i, 1.34, U, 9.37, 1.73, 0.045, 0.3, y.white);
  Y(i, 0.67, 1.12, 11.93, 0.74, 2.24, 0.72, y.white), Y(i, 1.07, 1.13, 11.93, 0.025, 0.7, 0.57, y.dark), Y(i, 1.08, 1.77, 11.93, 0.025, 0.39, 0.57, y.metal), Y(i, 1.095, 1.77, 11.93, 0.012, 0.26, 0.39, y.dark), Y(i, 0.68, 1.03, 12.76, 0.76, 2.06, 0.7, y.metal), Y(i, 1.09, 1.12, 12.76, 0.025, 0.025, 0.7, y.dark);
  let f = new YA();
  f.userData.furniture = "island", f.position.x = 0, i.add(f), BP(f, 2.45, 11.2, 0.6, 1.75, 0.9), Y(f, 2.45, 0.985, 11.25, 0.46, 0.025, 0.58, y.dark);
  for (let U of [2.32, 2.58]) for (let w of [11.08, 11.42]) {
    let l = new ne(new Cn(0.08, 8e-3, 6, 24), y.metal);
    l.rotation.x = Math.PI / 2, l.position.set(U, 1.003, -w), f.add(l);
  }
  let r = new YA();
  r.userData.furniture = "dining", i.add(r), Y(r, 4.43, 0.77, 11.35, 1, 0.09, 1.95, y.floor);
  for (let U of [4.03, 4.83]) for (let w of [10.52, 12.18]) Y(r, U, 0.36, w, 0.06, 0.72, 0.06, y.wood);
  for (let U of [3.61, 5.25]) for (let w of [10.84, 11.86]) {
    Y(r, U, 0.44, w, 0.44, 0.08, 0.45, y.dark), Y(r, U + (U < 4.43 ? -0.21 : 0.21), 0.69, w, 0.055, 0.53, 0.44, y.dark);
    for (let l of [-0.17, 0.17]) for (let R of [-0.17, 0.17]) Y(r, U + l, 0.21, w + R, 0.025, 0.42, 0.025, y.metal);
  }
  Y(i, 4.72, 0.52, 13.0625, 1.65, 1.04, 0.43, y.tile), Y(i, 4.72, 1.38, 13.1525, 1.05, 0.62, 0.055, y.dark), Y(i, 2.95, 0.43, 0.52, 2.05, 0.86, 0.44, y.wood), Y(i, 2.95, 1.19, 0.45, 1.35, 0.77, 0.055, y.dark), Y(i, 4.9, 1.02, 0.51, 0.65, 2.04, 0.42, y.wood), Y(i, 4.9, 1.09, 0.74, 0.53, 1.7, 0.025, y.glass), Y(i, 1.65, 0.36, 0.47, 0.3, 0.72, 0.34, y.dark);
  let P = new YA();
  P.userData.furniture = "living-seating", i.add(P), DP(P, 1.05, 2.65, 2.6, 0.86, y.dark, -Math.PI / 2), DP(P, 4.95, 2.65, 2.6, 0.82, y.white, Math.PI / 2), DP(P, 3, 4.32, 2.3, 0.82, y.white, Math.PI), Y(P, 3, 0.41, 2.6, 1.2, 0.05, 0.85, y.wood);
  for (let U of [2.5, 3.5]) Y(P, U, 0.2, 2.6, 0.035, 0.4, 0.65, y.metal);
  let s = new ne(new mi(0.32, 0.32, 0.055, 24), y.wood);
  s.position.set(1.03, 0.55, -4.35), P.add(s);
  for (let U of [0.83, 1.23]) Y(P, U, 0.26, 4.35, 0.04, 0.52, 0.04, y.wood);
  for (let U of [2.27, 4.47]) jP(i, 5.735, U, 0.75), Y(i, 5.705, 2.35, U, 0.19, 0.31, 0.87, y.white);
  jP(i, 5.735, 6.62, 0.8);
  for (let U of [9.98, 12.72]) jP(i, 5.875 + (U - 9.265) * 0.1425 / 5.805 - 0.14, U, 0.6);
  jw(o), Y(o, 3.05, 9e-3, 6.8, 5.5, 0.018, 12.9, y.grayFloor), Y(o, 1.6, 0.023, 11.28, 2.6, 0.02, 3.45, y.floor);
  let p = [];
  for (let U = 0.3; U < 5.8; U += 0.8) p.push(U, 0.025, -0.3, U, 0.025, -13.25);
  for (let U = 0.3; U < 13.3; U += 0.8) p.push(0.3, 0.025, -U, 5.8, 0.025, -U);
  let K = new he();
  K.setAttribute("position", new te(p, 3)), o.add(new Ti(K, new Vo({ color: 9407621, transparent: true, opacity: 0.5 })));
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
  for (let l of [7.6, 12.7]) {
    Y(A, 6.14, 2.5, l, 0.32, 0.65, 0.92, y.white);
    for (let R = 0; R < 5; R++) Y(A, 6.31, 2.3 + R * 0.09, l, 0.016, 0.023, 0.72, y.tile);
  }
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
  for (let n of ["outlets", "lights", "data", "routes", "drops", "numbers", "panels", "annotations"]) i[n] = new YA(), t.add(i[n]);
  Cr[A] = { layer: t, groups: i };
  for (let n of e.routes) {
    if (n.points3D) {
      const r2 = ta(i.routes, n.points3D, n.kind, n.interpreted);
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
    o.layer.visible = FA("#electrical").checked;
    for (let [A, e] of Object.entries({ outlets: "electricOutlets", lights: "electricLights", data: "electricData", routes: "electricRoutes", drops: "electricDrops", numbers: "electricNumbers", panels: "electricPanels", annotations: "electricAnnotations" })) o.groups[A].visible = FA("#" + e).checked;
  }
  FA("#electricOptions").hidden = !FA("#electrical").checked, FA("#electrical").checked || (FA("#electricDetail").hidden = true), U0();
}
function mw(o) {
  FA("#electricDetail").hidden = false, FA("#electricDetail").textContent = o.id + " \xB7 " + (o.floor === "pb" ? "Planta baja" : "Planta alta") + " \xB7 " + (Cw[o.kind] || "Tablero") + " \xB7 altura " + o.height.toFixed(2) + " m desde piso. " + (o.heightInferred ? "Altura interpretada, pendiente de confirmar. " : "") + (o.corrected ? "Ubicaci\xF3n de luminaria actualizada. " : o.source === "DWG" ? "Ubicaci\xF3n del DWG. " : "Ubicaci\xF3n estimada desde PDF. ") + (o.feed === "underground" ? "Alimentaci\xF3n de la isla por debajo del piso, confirmada por Gonza. Sin bajadas desde cielorraso. Profundidad y conexiones internas esquem\xE1ticas; posici\xF3n adaptada a la isla actual." : o.uninstalled ? "Punto el\xE9ctrico exterior; luminaria no instalada." : o.provisional ? "Punto de iluminaci\xF3n provisional bajo claraboya; sin spot instalado." : o.kind === "light" ? (o.mount === "wall" ? "Aplique de pared hacia abajo. " : "Spot de techo. ") + (o.circuitNote || "") : o.kind === "data" ? "D = datos; no se inventa su cableado." : o.route ? "Asociaci\xF3n cercana al CAD: " + o.route + ". Bajada esquem\xE1tica." : o.kind === "panel" ? "Altura del tablero esquem\xE1tica. Circuitos del plano: " + o.circuits.join(" | ") : "Sin coincidencia inequ\xEDvoca de conexi\xF3n en el CAD; bajada esquem\xE1tica.");
}
for (let o of ["electrical", "electricOutlets", "electricLights", "electricData", "electricRoutes", "electricDrops", "electricNumbers", "electricPanels", "electricAnnotations"]) FA("#" + o).onchange = p0;
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
var F0 = new Rt({ colorWrite: false, depthWrite: false, side: Ye }), R0 = new Qi({ depthPacking: q8, side: Ye });
function Br(o, A, e = false) {
  let t = new Lt();
  if (o.forEach((f, r) => r ? t.lineTo(f[0], -f[1]) : t.moveTo(f[0], -f[1])), t.closePath(), e) {
    let f = new vo();
    f.moveTo(0.3, -6.51), f.lineTo(1.425, -6.51), f.lineTo(1.425, -9.1475), f.lineTo(0.3, -9.1475), f.closePath(), t.holes.push(f);
  }
  let i = new uo(t), n = i.attributes.position;
  for (let f = 0; f < n.count; f++) n.setXYZ(f, n.getX(f), A, n.getY(f));
  i.computeVertexNormals();
  let a = new ne(i, F0);
  a.customDepthMaterial = R0, a.castShadow = true, a.userData.shadowOnly = true, Ei.add(a);
}
function Ow() {
  Ei = new YA(), Ei.userData.physicalShadowGroup = true, lt.add(Ei), Br([[0, 0], [5.95, 0], [5.95, 9.265], [6.0925, 15.22], [0, 15.22]], 5.8), Br([[0, 0], [5.95, 0], [5.95, 9.265], [6.0925, 15.22], [0, 15.22]], 3.4, true), Br([[0, 0], [5.95, 0], [5.95, 9.265], [0, 9.265]], 2.9, true), Br([[0, 9.265], [5.95, 9.265], [6.0925, 15.22], [0, 15.22]], 2.4), lt.updateMatrixWorld(true);
  for (let o of Object.values(mt)) o.traverse((A) => {
    if (!A.isMesh || !A.userData.structuralWall) return;
    let e = new ne(A.geometry.clone(), F0);
    e.customDepthMaterial = R0, e.castShadow = true, e.matrixAutoUpdate = false, e.matrix.copy(A.matrixWorld), e.userData.shadowOnly = true, Ei.add(e), A.castShadow = false;
  });
}
function Qw() {
  lt && (gt.remove(lt), lt.traverse((t) => {
    t.geometry && t.geometry.dispose();
  })), lt = new YA(), gt.add(lt), mP = [], ea = [], jr = [], Cr = {}, TP = [], Tr = [], Go = null, mt = {}, Nr = {};
  let o = 2.4, A = 2.9, e = 3.4;
  for (let t of ["pb", "pa"]) {
    let i = new YA();
    lt.add(i);
    let n = t === "pa" ? o : A;
    i.position.y = t === "pa" ? e : 0, mt[t] = i;
    let a = new Lt();
    if ((t === "pa" ? [[0, 0], [5.95, 0], [5.95, 9.265], [6.0925, 15.22], [0, 15.22]] : [[0, 0], [10.91, 0], [10.91, 15.22], [0, 15.22]]).forEach((p, K) => K ? a.lineTo(p[0], -p[1]) : a.moveTo(p[0], -p[1])), a.closePath(), t === "pa") {
      let p = new vo();
      p.moveTo(0.3, -6.51), p.lineTo(1.425, -6.51), p.lineTo(1.425, -9.1475), p.lineTo(0.3, -9.1475), p.closePath(), a.holes.push(p);
    }
    let r = new ne(new uo(a), y.floor);
    r.rotation.x = -Math.PI / 2, r.geometry.dispose();
    let P = new uo(a), s = P.attributes.position;
    for (let p = 0; p < s.count; p++) {
      let K = s.getX(p), U = s.getY(p);
      s.setXYZ(p, K, 0, U);
    }
    if (P.computeVertexNormals(), r.geometry = P, r.rotation.x = 0, r.material = y.floor, r.receiveShadow = true, i.add(r), t === "pa") {
      Tt(i, [0.15, 0], [0.15, 15.22], 0.3, o, [], -1), xP(i, [0, 0.15], [5.95, 0.15], 0.3, o, [[0.625, 1.625, 0.9, 2.1], [3.475, 4.975, 0.9, 2.1]]), Tt(i, [0, 15.07], [6.09, 15.07], 0.3, o, [], -1), Tt(i, [5.875, 0.3], [5.875, 9.265], 0.15, o, [[3.168, 4.668, 0.9, 2.1], [6.11, 6.91, 0.9, 2.1], [7.5102403393, 9.0102403393, 0.9, 2.1, null, "cad-middle-window"]]), Tt(i, [5.875, 9.265], [6.0175, 15.07], 0.15, o, [[0, 0.0452403393, 0.9, 2.1, null, "no-decoration"], [3.485, 4.985, 0.9, 2.1]]), Ie(i, [2.5875, 0.3], [2.5875, 4.46024], 0.125, o), Ie(i, [0.3, 3.3225], [2.525, 3.3225], 0.125, o, [[1.388, 2.188, 0, 2.05]]), Ie(i, [2.3625, 5.26], [2.3625, 12.365], 0.125, o, [[1.488, 2.288, 0, 2.05], [4.975, 5.775, 0, 2.05], [6.1, 6.9, 0, 2.05]]), Ie(i, [0.3, 6.4475], [2.3, 6.4475], 0.125, o, [[1.1625, 1.9625, 0, 2.05]]), Ie(i, [1.3625, 6.51], [1.3625, 9.01], 0.125, 0.95), Ie(i, [2.3625, 5.3225], [5.875, 5.3225], 0.125, o), Ie(i, [2.425, 7.6475], [5.875, 7.6475], 0.125, o), Ie(i, [2.425, 11.3225], [5.95, 11.3225], 0.125, o), Ie(i, [2.3625, 12.365], [2.3625, 15.07], 0.125, o), Ie(i, [0.3, 12.4275], [2.3, 12.4275], 0.125, o, [[1.1, 1.9, 0, 2.05]]), ia.forEach((l, R) => {
        let F = Dr(i, l[0], l[1], l[2]);
        F.userData.room = R, ea.push(F);
      }), f0(i, 12.9), f0(i, 0.85), r0(i, 13.55), r0(i, 1.55), Y(i, 1.1, 0.26, 14.56, 1.4, 0.52, 0.72, y.white), Y(i, 1.1, 0.53, 14.56, 1.15, 0.015, 0.5, y.glass), Y(i, 0.8, 0.08, 2.835, 1, 0.16, 0.85, y.white), Y(i, 1.315, 1.05, 2.835, 0.03, 2, 0.85, y.glass), Y(i, 2.285, 0.78, 1.45, 0.48, 0.08, 1.45, y.wood), Y(i, 2.285, 0.87, 1.75, 0.4, 0.12, 0.5, y.white);
      let p = Y(i, 2.11125, 0.78, 13.77105, 0.3775, 0.08, 0.7297, y.wood);
      p.userData.furniture = "vanitory-bano-chico-cad";
      let K = new ne(new mi(0.145, 0.12, 0.1, 24), y.white);
      K.position.set(2.095, 0.87, -13.77105), i.add(K), Y(i, 2.265, 0.9, 13.77105, 0.025, 0.14, 0.025, y.metal);
      let U = hP(i, 0.6, 4.885, 0.6, 3, 2.2);
      U.userData.furniture = "vestidor-principal", hP(i, 2.725, 13.4, 0.6, 2.8, 2.2), Ie(i, [2.425, 11.94], [3.1, 11.94], 0.1, o), hP(i, 2.725, 8.95, 0.6, 2.35, 2.2), Ie(i, [2.425, 10.2], [3.1, 10.2], 0.1, o);
      let w = Y(i, 3.65, 0.32, 2.37, 2, 0.64, 1.6, y.white);
      w.userData.furniture = "cama-principal-cad", Y(i, 4.15, 0.3, 13.97, 0.9, 0.6, 1.9, y.white), Y(i, 4.2, 0.3, 8.66, 0.9, 0.6, 1.9, y.wood), Y(i, 4.3875, 0.75, 5.71, 2.825, 0.08, 0.65, y.wood);
      for (let l of [3.12, 5.77]) Y(i, l, 0.36, 5.71, 0.045, 0.72, 0.5, y.metal);
      Y(i, 4.6, 1.07, 5.81, 0.7, 0.42, 0.055, y.metal);
    } else {
      Tt(i, [0.15, 0.15], [0.15, 15.07], 0.3, e, [[7.75, 8.55, 1.09, 1.55, null, "no-decoration", "niche"]], -1), Y(i, 0.06, 1.32, 8.3, 0.12, 0.46, 0.8, y.facade).userData.structuralWall = true, xP(i, [0, 0.15], [5.95, 0.15], 0.3, e, [[0.65, 1.45, 0.9, 2.1]]), Tt(i, [0, 15.07], [6.09, 15.07], 0.3, e, [], -1), Tt(i, [6.09, 15.07], [10.91, 15.07], 0.3, o, [], -1), Tt(i, [10.81, 0.3], [10.81, 15.07], 0.2, o), Tt(i, [5.875, 0.3], [5.875, 9.265], 0.15, e, [[0.968, 2.968, 0.9, 2.1], [3.468, 5.468, 0.9, 2.1], [7.21, 8.56, 0, 2.05, "principal-jardin"]]), Tt(i, [5.875, 9.265], [6.0175, 15.07], 0.15, e, [[1.085628, 3.085628, 0, 2.1, "cocina-balcon"], [4.63, 5.43, 0, 2.05, "lavadero-jardin"]]), xP(i, [5.95, 0.15], [10.91, 0.15], 0.3, o, [[0.3, 1.15, 0, 2.05], [1.98, 4.73, 0, 2.05]]), Y(i, 6.675, 1.025, 0.1, 0.85, 2.05, 0.055, y.metal), Y(i, 9.305, 1.025, 0.1, 2.75, 2.05, 0.07, y.metal);
      for (let K of [7.93, 8.62, 9.305, 9.99, 10.68]) Y(i, K, 1.025, 0.04, 0.018, 2.05, 0.018, y.wood);
      Y(i, 8.43, o - 0.05, 0.08, 5.15, 0.13, 0.45, y.facade), Y(i, 8.43, o - 0.18, 0.08, 5.1, 0.055, 0.38, y.facade), Y(i, 7.45, 1.45, -0.025, 0.38, 0.22, 0.035, y.wood), Ie(i, [0.3, 7.5725], [2.5125, 7.5725], 0.125, e, [[0, 1.0625, 1.9, e, null, null, "open-void"], [1.25, 2.05, 0, 2.05]]), Ie(i, [2.5125, 6.737], [2.5125, 9.1475], 0.125, e), Ie(i, [0.3, 9.1475], [2.5125, 9.1475], 0.125, e), Ie(i, [0.3, 13.34], [5.95, 13.34], 0.125, e, [[2.52, 3.62, 0, 2.05]]), Sw(i, o, A, e), Nw(i);
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
  Ow(), lt.traverse((t) => {
    t.userData.gardenCover && (t.visible = FA("#cover").checked);
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
new ResizeObserver(w0).observe(FA("#view"));
for (let [o, A] of [["pbToggle", "Planta baja"], ["paToggle", "Planta alta"]]) FA("#" + o).onclick = () => {
  let e = FA("#" + o).getAttribute("aria-pressed") !== "true";
  FA("#" + o).setAttribute("aria-pressed", String(e)), FA("#" + o).textContent = A + " \xB7 " + (e ? "ON" : "OFF"), Go = null, mr();
};
for (let o of ["labels", "cad"]) FA("#" + o).addEventListener("change", mr);
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
FA("#capture").onclick = () => {
  be.render(gt, Xt);
  let o = document.createElement("a");
  o.download = "casa-vista-3d.png", o.href = be.domElement.toDataURL(), o.click();
};
var na = new In(), Sr = new nA();
be.domElement.addEventListener("click", (o) => {
  let A = be.domElement.getBoundingClientRect();
  Sr.set((o.clientX - A.left) / A.width * 2 - 1, -(o.clientY - A.top) / A.height * 2 + 1), na.setFromCamera(Sr, Xt);
  let e = na.intersectObjects(jr).find((i) => v0(i.object));
  if (e) {
    mw(e.object.userData.electricalPoint);
    return;
  }
  let t = na.intersectObjects(ea).find((i) => i.object.parent.visible);
  t && (t.object.userData.reference ? Yt(t.object.userData.reference) : c0(t.object.userData.room));
});
function Yt(o) {
  let A = o.title === "Ba\xF1o PB / Escalera", e = o.title === "Cocina" || o.title === "Comedor";
  FA("#refviews").replaceChildren();
  let t = (i) => {
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
var Xr = new YA();
gt.add(Xr);
var XP = new ne(new Vt(0.52, 20, 16), new Rt({ color: 16765003, transparent: true, opacity: 0.55, depthTest: false, depthWrite: false }));
XP.renderOrder = 20;
Xr.add(XP);
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
function kw(o) {
  let A = o.slice(5);
  return A >= "12-21" || A < "03-20" ? "summer" : A < "06-21" ? "autumn" : A < "09-22" ? "winter" : "spring";
}
function Gr() {
  let o = FA("#sunDate").value, A = FA("#sunTime").value;
  if (!o || !A) return;
  let e = +FA("#latitude").value, t = +FA("#longitude").value, i = +FA("#bearing").value;
  if (!Number.isFinite(e) || !Number.isFinite(t) || Math.abs(e) > 90 || Math.abs(t) > 180) return;
  let n = /* @__PURE__ */ new Date(o + "T" + A + ":00-03:00"), a = e0(n, e, t), f = (a.azimuth - i) * Math.PI / 180, r = a.altitude * Math.PI / 180, P = new j(Math.sin(f) * Math.cos(r), Math.sin(r), -Math.cos(f) * Math.cos(r));
  $e.position.copy($e.target.position).addScaledVector(P, 40);
  let s = $e.target.position.clone().addScaledVector(P, 22);
  XP.position.copy(s);
  let p = Math.max(0, Math.sin(r));
  $e.intensity = a.altitude > 0 ? 1.1 + 2.1 * p : 0, s0.intensity = a.altitude > 0 ? 0.6 + 1.15 * p : 0.24, gt.background.set(a.altitude > 0 ? "#e4edf5" : "#182433"), $e.color.set(a.altitude < 12 ? "#ffcf97" : "#ffe6ad"), FA("#season").value = kw(o), FA("#sunHourOut").textContent = A, FA("#sunHour").value = +A.slice(0, 2) * 60 + +A.slice(3, 5);
  let K = FA("#orientationConfirmed").checked;
  FA("#solarInfo").textContent = (a.altitude > 0 ? "Sol sobre el horizonte" : "Noche \xB7 sol bajo el horizonte") + " \xB7 elevaci\xF3n " + a.altitude.toFixed(1) + "\xB0 \xB7 azimut " + a.azimuth.toFixed(1) + "\xB0 desde norte. " + (K ? "Orientaci\xF3n aplicada: " + i.toFixed(1) + "\xB0 hacia el fondo (estimaci\xF3n de Maps)." : "Orientaci\xF3n de la casa pendiente."), QP = { altitude: a.altitude, azimuth: a.azimuth, date: o, time: A, latitude: e, longitude: t, bearing: i, verified: K }, g0();
}
function H0() {
  let o = Object.fromEntries(new Intl.DateTimeFormat("en-CA", { timeZone: "America/Argentina/Buenos_Aires", year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", hourCycle: "h23" }).formatToParts(/* @__PURE__ */ new Date()).map((A) => [A.type, A.value]));
  FA("#sunDate").value = o.year + "-" + o.month + "-" + o.day, FA("#sunTime").value = o.hour + ":" + o.minute, Gr();
}
for (let o of ["sunDate", "sunTime", "latitude", "longitude", "bearing", "orientationConfirmed"]) FA("#" + o).addEventListener("input", Gr);
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
be.domElement.addEventListener("pointermove", (o) => {
  o.pointerType === "mouse" && o.buttons === 0 && (Go = u0(o));
});
be.domElement.addEventListener("pointerleave", () => {
  Go = null;
});
var oa = null;
be.domElement.addEventListener("pointerdown", (o) => {
  o.pointerType !== "mouse" && (oa = { x: o.clientX, y: o.clientY });
});
be.domElement.addEventListener("pointerup", (o) => {
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
w0();
function d0() {
  requestAnimationFrame(d0), Zi.update(), Iw(), be.render(gt, Xt);
}
d0();
window.__model = { scene: gt, camera: Xt, renderer: be, get levels() {
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
    e.layer.removeFromParent();
    e.layer.traverse((o) => {
      o.geometry?.dispose();
      if (o.material) {
        o.material.map?.dispose();
        o.material.dispose();
      }
    });
  }
  jr = [];
  Cr = {};
  for (const id of ["pb", "pa"]) Tw(mt[id], id);
  p0();
}, geometryConstructors: { extrude: Nn, box: yt, cylinder: mi }, ceilingAt: Qo, stairSpec: ae, data: Hr };
