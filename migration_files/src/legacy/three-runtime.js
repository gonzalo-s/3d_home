var jo = { LEFT: 0, MIDDLE: 1, RIGHT: 2, ROTATE: 0, DOLLY: 1, PAN: 2 }, So = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 }, CK = 0, h8 = 1, TK = 2;
var Mn = 1, uf = 2, Ii = 3, No = 0, Ze = 1, Ye = 2, Wt = 0, bi = 1, D8 = 2, B8 = 3, j8 = 4, mK = 5;
var Jo = 100, XK = 101, OK = 102, QK = 103, GK = 104, kK = 200, IK = 201, bK = 202, zK = 203, S8 = 204, N8 = 205, MK = 206, yK = 207, LK = 208, VK = 209, WK = 210, qK = 211, JK = 212, EK = 213, ZK = 214, Ga = 0, ka = 1, Ia = 2, ui = 3, ba = 4, za = 5, Ma = 6, ya = 7, C8 = 0, YK = 1, _K = 2, jt = 0, T8 = 1, m8 = 2, X8 = 3, O8 = 4, Q8 = 5, G8 = 6, k8 = 7;
var I8 = 300, Co = 301, Eo = 302, df = 303, xf = 304, yn = 306, di = 1e3, kt = 1001, La = 1002, me = 1003, $K = 1004;
var Ln = 1005;
var Oe = 1006, hf = 1007;
var To = 1008;
var et = 1009, b8 = 1010, z8 = 1011, zi = 1012, Df = 1013, St = 1014, Nt = 1015, Ct = 1016, Bf = 1017, jf = 1018, Mi = 1020, M8 = 35902, y8 = 35899, L8 = 1021, V8 = 1022, wt = 1023, zt = 1026, mo = 1027, W8 = 1028, Sf = 1029, Xo = 1030, Nf = 1031;
var Cf = 1033, Vn = 33776, Wn = 33777, qn = 33778, Jn = 33779, Tf = 35840, mf = 35841, Xf = 35842, Of = 35843, Qf = 36196, Gf = 37492, kf = 37496, If = 37488, bf = 37489, En = 37490, zf = 37491, Mf = 37808, yf = 37809, Lf = 37810, Vf = 37811, Wf = 37812, qf = 37813, Jf = 37814, Ef = 37815, Zf = 37816, Yf = 37817, _f = 37818, $f = 37819, Ar = 37820, er = 37821, tr = 36492, or = 36494, ir = 36495, nr = 36283, ar = 36284, Zn = 36285, fr = 36286;
var sn = 2300, Va = 2301, Oa = 2302, U8 = 2303, F8 = 2400, R8 = 2401, w8 = 2402;
var As = 3200, q8 = 3201;
var rr = 0, es = 1, ao = "", nt = "srgb", pn = "srgb-linear", Un = "linear", se = "srgb";
var Qa = 7680;
var ts = 519, os = 512, is = 513, ns = 514, Pr = 515, as = 516, fs = 517, Kr = 518, rs = 519, J8 = 35044;
var E8 = "300 es", ht = 2e3, xi = 2001;
function C0(o22) {
  for (let A = o22.length - 1; A >= 0; --A) if (o22[A] >= 65535) return true;
  return false;
}
function T0(o22) {
  return ArrayBuffer.isView(o22) && !(o22 instanceof DataView);
}
function Fn(o22) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", o22);
}
function Ps() {
  let o22 = Fn("canvas");
  return o22.style.display = "block", o22;
}
var qP = {}, hi = null;
function Rn(...o22) {
  let A = "THREE." + o22.shift();
  hi ? hi("log", A, ...o22) : console.log(A, ...o22);
}
function Ks(o22) {
  let A = o22[0];
  if (typeof A == "string" && A.startsWith("TSL:")) {
    let e = o22[1];
    e && e.isStackTrace ? o22[0] += " " + e.getLocation() : o22[1] = 'Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.';
  }
  return o22;
}
function GA(...o22) {
  o22 = Ks(o22);
  let A = "THREE." + o22.shift();
  if (hi) hi("warn", A, ...o22);
  else {
    let e = o22[0];
    e && e.isStackTrace ? console.warn(e.getError(A)) : console.warn(A, ...o22);
  }
}
function bA(...o22) {
  o22 = Ks(o22);
  let A = "THREE." + o22.shift();
  if (hi) hi("error", A, ...o22);
  else {
    let e = o22[0];
    e && e.isStackTrace ? console.error(e.getError(A)) : console.error(A, ...o22);
  }
}
function yo(...o22) {
  let A = o22.join(" ");
  A in qP || (qP[A] = true, GA(...o22));
}
function ss(o22, A, e) {
  return new Promise(function(t, i) {
    function n() {
      switch (o22.clientWaitSync(A, o22.SYNC_FLUSH_COMMANDS_BIT, 0)) {
        case o22.WAIT_FAILED:
          i();
          break;
        case o22.TIMEOUT_EXPIRED:
          setTimeout(n, e);
          break;
        default:
          t();
      }
    }
    setTimeout(n, e);
  });
}
var ps = { [Ga]: ka, [Ia]: Ma, [ba]: ya, [ui]: za, [ka]: Ga, [Ma]: Ia, [ya]: ba, [za]: ui }, Dt = class {
  addEventListener(A, e) {
    this._listeners === void 0 && (this._listeners = {});
    let t = this._listeners;
    t[A] === void 0 && (t[A] = []), t[A].indexOf(e) === -1 && t[A].push(e);
  }
  hasEventListener(A, e) {
    let t = this._listeners;
    return t === void 0 ? false : t[A] !== void 0 && t[A].indexOf(e) !== -1;
  }
  removeEventListener(A, e) {
    let t = this._listeners;
    if (t === void 0) return;
    let i = t[A];
    if (i !== void 0) {
      let n = i.indexOf(e);
      n !== -1 && i.splice(n, 1);
    }
  }
  dispatchEvent(A) {
    let e = this._listeners;
    if (e === void 0) return;
    let t = e[A.type];
    if (t !== void 0) {
      A.target = this;
      let i = t.slice(0);
      for (let n = 0, a = i.length; n < a; n++) i[n].call(this, A);
      A.target = null;
    }
  }
}, Me = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"], JP = 1234567, fn = Math.PI / 180, Di = 180 / Math.PI;
function bt() {
  let o22 = Math.random() * 4294967295 | 0, A = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0;
  return (Me[o22 & 255] + Me[o22 >> 8 & 255] + Me[o22 >> 16 & 255] + Me[o22 >> 24 & 255] + "-" + Me[A & 255] + Me[A >> 8 & 255] + "-" + Me[A >> 16 & 15 | 64] + Me[A >> 24 & 255] + "-" + Me[e & 63 | 128] + Me[e >> 8 & 255] + "-" + Me[e >> 16 & 255] + Me[e >> 24 & 255] + Me[t & 255] + Me[t >> 8 & 255] + Me[t >> 16 & 255] + Me[t >> 24 & 255]).toLowerCase();
}
function LA(o22, A, e) {
  return Math.max(A, Math.min(e, o22));
}
function Z8(o22, A) {
  return (o22 % A + A) % A;
}
function m0(o22, A, e, t, i) {
  return t + (o22 - A) * (i - t) / (e - A);
}
function X0(o22, A, e) {
  return o22 !== A ? (e - o22) / (A - o22) : 0;
}
function rn(o22, A, e) {
  return (1 - e) * o22 + e * A;
}
function O0(o22, A, e, t) {
  return rn(o22, A, 1 - Math.exp(-e * t));
}
function Q0(o22, A = 1) {
  return A - Math.abs(Z8(o22, A * 2) - A);
}
function G0(o22, A, e) {
  return o22 <= A ? 0 : o22 >= e ? 1 : (o22 = (o22 - A) / (e - A), o22 * o22 * (3 - 2 * o22));
}
function k0(o22, A, e) {
  return o22 <= A ? 0 : o22 >= e ? 1 : (o22 = (o22 - A) / (e - A), o22 * o22 * o22 * (o22 * (o22 * 6 - 15) + 10));
}
function I0(o22, A) {
  return o22 + Math.floor(Math.random() * (A - o22 + 1));
}
function b0(o22, A) {
  return o22 + Math.random() * (A - o22);
}
function z0(o22) {
  return o22 * (0.5 - Math.random());
}
function M0(o22) {
  o22 !== void 0 && (JP = o22);
  let A = JP += 1831565813;
  return A = Math.imul(A ^ A >>> 15, A | 1), A ^= A + Math.imul(A ^ A >>> 7, A | 61), ((A ^ A >>> 14) >>> 0) / 4294967296;
}
function y0(o22) {
  return o22 * fn;
}
function L0(o22) {
  return o22 * Di;
}
function V0(o22) {
  return o22 > 0 && Number.isInteger(o22) && 2 ** Math.round(Math.log2(o22)) === o22;
}
function W0(o22) {
  return Math.pow(2, Math.ceil(Math.log(o22) / Math.LN2));
}
function q0(o22) {
  return Math.pow(2, Math.floor(Math.log(o22) / Math.LN2));
}
function J0(o22, A, e, t, i) {
  let n = Math.cos, a = Math.sin, f = n(e / 2), r = a(e / 2), P = n((A + t) / 2), s = a((A + t) / 2), p = n((A - t) / 2), K = a((A - t) / 2), U = n((t - A) / 2), w = a((t - A) / 2);
  switch (i) {
    case "XYX":
      o22.set(f * s, r * p, r * K, f * P);
      break;
    case "YZY":
      o22.set(r * K, f * s, r * p, f * P);
      break;
    case "ZXZ":
      o22.set(r * p, r * K, f * s, f * P);
      break;
    case "XZX":
      o22.set(f * s, r * w, r * U, f * P);
      break;
    case "YXY":
      o22.set(r * U, f * s, r * w, f * P);
      break;
    case "ZYZ":
      o22.set(r * w, r * U, f * s, f * P);
      break;
    default:
      GA("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + i);
  }
}
function xt(o22, A) {
  switch (A.constructor) {
    case Float32Array:
      return o22;
    case Uint32Array:
      return o22 / 4294967295;
    case Uint16Array:
      return o22 / 65535;
    case Uint8Array:
    case Uint8ClampedArray:
      return o22 / 255;
    case Int32Array:
      return Math.max(o22 / 2147483647, -1);
    case Int16Array:
      return Math.max(o22 / 32767, -1);
    case Int8Array:
      return Math.max(o22 / 127, -1);
    default:
      throw new Error("THREE.MathUtils: Invalid component type.");
  }
}
function Fe(o22, A) {
  switch (A.constructor) {
    case Float32Array:
      return o22;
    case Uint32Array:
      return Math.round(o22 * 4294967295);
    case Uint16Array:
      return Math.round(o22 * 65535);
    case Uint8Array:
    case Uint8ClampedArray:
      return Math.round(o22 * 255);
    case Int32Array:
      return Math.round(o22 * 2147483647);
    case Int16Array:
      return Math.round(o22 * 32767);
    case Int8Array:
      return Math.round(o22 * 127);
    default:
      throw new Error("THREE.MathUtils: Invalid component type.");
  }
}
var Zo = { DEG2RAD: fn, RAD2DEG: Di, generateUUID: bt, clamp: LA, euclideanModulo: Z8, mapLinear: m0, inverseLerp: X0, lerp: rn, damp: O0, pingpong: Q0, smoothstep: G0, smootherstep: k0, randInt: I0, randFloat: b0, randFloatSpread: z0, seededRandom: M0, degToRad: y0, radToDeg: L0, isPowerOfTwo: V0, ceilPowerOfTwo: W0, floorPowerOfTwo: q0, setQuaternionFromProperEuler: J0, normalize: Fe, denormalize: xt }, nA = class o {
  static {
    o.prototype.isVector2 = true;
  }
  constructor(A = 0, e = 0) {
    this.x = A, this.y = e;
  }
  get width() {
    return this.x;
  }
  set width(A) {
    this.x = A;
  }
  get height() {
    return this.y;
  }
  set height(A) {
    this.y = A;
  }
  set(A, e) {
    return this.x = A, this.y = e, this;
  }
  setScalar(A) {
    return this.x = A, this.y = A, this;
  }
  setX(A) {
    return this.x = A, this;
  }
  setY(A) {
    return this.y = A, this;
  }
  setComponent(A, e) {
    switch (A) {
      case 0:
        this.x = e;
        break;
      case 1:
        this.y = e;
        break;
      default:
        throw new Error("THREE.Vector2: index is out of range: " + A);
    }
    return this;
  }
  getComponent(A) {
    switch (A) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("THREE.Vector2: index is out of range: " + A);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(A) {
    return this.x = A.x, this.y = A.y, this;
  }
  add(A) {
    return this.x += A.x, this.y += A.y, this;
  }
  addScalar(A) {
    return this.x += A, this.y += A, this;
  }
  addVectors(A, e) {
    return this.x = A.x + e.x, this.y = A.y + e.y, this;
  }
  addScaledVector(A, e) {
    return this.x += A.x * e, this.y += A.y * e, this;
  }
  sub(A) {
    return this.x -= A.x, this.y -= A.y, this;
  }
  subScalar(A) {
    return this.x -= A, this.y -= A, this;
  }
  subVectors(A, e) {
    return this.x = A.x - e.x, this.y = A.y - e.y, this;
  }
  multiply(A) {
    return this.x *= A.x, this.y *= A.y, this;
  }
  multiplyScalar(A) {
    return this.x *= A, this.y *= A, this;
  }
  divide(A) {
    return this.x /= A.x, this.y /= A.y, this;
  }
  divideScalar(A) {
    return this.multiplyScalar(1 / A);
  }
  applyMatrix3(A) {
    let e = this.x, t = this.y, i = A.elements;
    return this.x = i[0] * e + i[3] * t + i[6], this.y = i[1] * e + i[4] * t + i[7], this;
  }
  min(A) {
    return this.x = Math.min(this.x, A.x), this.y = Math.min(this.y, A.y), this;
  }
  max(A) {
    return this.x = Math.max(this.x, A.x), this.y = Math.max(this.y, A.y), this;
  }
  clamp(A, e) {
    return this.x = LA(this.x, A.x, e.x), this.y = LA(this.y, A.y, e.y), this;
  }
  clampScalar(A, e) {
    return this.x = LA(this.x, A, e), this.y = LA(this.y, A, e), this;
  }
  clampLength(A, e) {
    let t = this.length();
    return this.divideScalar(t || 1).multiplyScalar(LA(t, A, e));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  dot(A) {
    return this.x * A.x + this.y * A.y;
  }
  cross(A) {
    return this.x * A.y - this.y * A.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(A) {
    let e = Math.sqrt(this.lengthSq() * A.lengthSq());
    if (e === 0) return Math.PI / 2;
    let t = this.dot(A) / e;
    return Math.acos(LA(t, -1, 1));
  }
  distanceTo(A) {
    return Math.sqrt(this.distanceToSquared(A));
  }
  distanceToSquared(A) {
    let e = this.x - A.x, t = this.y - A.y;
    return e * e + t * t;
  }
  manhattanDistanceTo(A) {
    return Math.abs(this.x - A.x) + Math.abs(this.y - A.y);
  }
  setLength(A) {
    return this.normalize().multiplyScalar(A);
  }
  lerp(A, e) {
    return this.x += (A.x - this.x) * e, this.y += (A.y - this.y) * e, this;
  }
  lerpVectors(A, e, t) {
    return this.x = A.x + (e.x - A.x) * t, this.y = A.y + (e.y - A.y) * t, this;
  }
  equals(A) {
    return A.x === this.x && A.y === this.y;
  }
  fromArray(A, e = 0) {
    return this.x = A[e], this.y = A[e + 1], this;
  }
  toArray(A = [], e = 0) {
    return A[e] = this.x, A[e + 1] = this.y, A;
  }
  fromBufferAttribute(A, e) {
    return this.x = A.getX(e), this.y = A.getY(e), this;
  }
  rotateAround(A, e) {
    let t = Math.cos(e), i = Math.sin(e), n = this.x - A.x, a = this.y - A.y;
    return this.x = n * t - a * i + A.x, this.y = n * i + a * t + A.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}, rt = class {
  constructor(A = 0, e = 0, t = 0, i = 1) {
    this.isQuaternion = true, this._x = A, this._y = e, this._z = t, this._w = i;
  }
  static slerpFlat(A, e, t, i, n, a, f) {
    let r = t[i + 0], P = t[i + 1], s = t[i + 2], p = t[i + 3], K = n[a + 0], U = n[a + 1], w = n[a + 2], l = n[a + 3];
    if (p !== l || r !== K || P !== U || s !== w) {
      let R = r * K + P * U + s * w + p * l;
      R < 0 && (K = -K, U = -U, w = -w, l = -l, R = -R);
      let F = 1 - f;
      if (R < 0.9995) {
        let u = Math.acos(R), D = Math.sin(u);
        F = Math.sin(F * u) / D, f = Math.sin(f * u) / D, r = r * F + K * f, P = P * F + U * f, s = s * F + w * f, p = p * F + l * f;
      } else {
        r = r * F + K * f, P = P * F + U * f, s = s * F + w * f, p = p * F + l * f;
        let u = 1 / Math.sqrt(r * r + P * P + s * s + p * p);
        r *= u, P *= u, s *= u, p *= u;
      }
    }
    A[e] = r, A[e + 1] = P, A[e + 2] = s, A[e + 3] = p;
  }
  static multiplyQuaternionsFlat(A, e, t, i, n, a) {
    let f = t[i], r = t[i + 1], P = t[i + 2], s = t[i + 3], p = n[a], K = n[a + 1], U = n[a + 2], w = n[a + 3];
    return A[e] = f * w + s * p + r * U - P * K, A[e + 1] = r * w + s * K + P * p - f * U, A[e + 2] = P * w + s * U + f * K - r * p, A[e + 3] = s * w - f * p - r * K - P * U, A;
  }
  get x() {
    return this._x;
  }
  set x(A) {
    this._x = A, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(A) {
    this._y = A, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(A) {
    this._z = A, this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(A) {
    this._w = A, this._onChangeCallback();
  }
  set(A, e, t, i) {
    return this._x = A, this._y = e, this._z = t, this._w = i, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(A) {
    return this._x = A.x, this._y = A.y, this._z = A.z, this._w = A.w, this._onChangeCallback(), this;
  }
  setFromEuler(A, e = true) {
    let t = A._x, i = A._y, n = A._z, a = A._order, f = Math.cos, r = Math.sin, P = f(t / 2), s = f(i / 2), p = f(n / 2), K = r(t / 2), U = r(i / 2), w = r(n / 2);
    switch (a) {
      case "XYZ":
        this._x = K * s * p + P * U * w, this._y = P * U * p - K * s * w, this._z = P * s * w + K * U * p, this._w = P * s * p - K * U * w;
        break;
      case "YXZ":
        this._x = K * s * p + P * U * w, this._y = P * U * p - K * s * w, this._z = P * s * w - K * U * p, this._w = P * s * p + K * U * w;
        break;
      case "ZXY":
        this._x = K * s * p - P * U * w, this._y = P * U * p + K * s * w, this._z = P * s * w + K * U * p, this._w = P * s * p - K * U * w;
        break;
      case "ZYX":
        this._x = K * s * p - P * U * w, this._y = P * U * p + K * s * w, this._z = P * s * w - K * U * p, this._w = P * s * p + K * U * w;
        break;
      case "YZX":
        this._x = K * s * p + P * U * w, this._y = P * U * p + K * s * w, this._z = P * s * w - K * U * p, this._w = P * s * p - K * U * w;
        break;
      case "XZY":
        this._x = K * s * p - P * U * w, this._y = P * U * p - K * s * w, this._z = P * s * w + K * U * p, this._w = P * s * p + K * U * w;
        break;
      default:
        GA("Quaternion: .setFromEuler() encountered an unknown order: " + a);
    }
    return e === true && this._onChangeCallback(), this;
  }
  setFromAxisAngle(A, e) {
    let t = e / 2, i = Math.sin(t);
    return this._x = A.x * i, this._y = A.y * i, this._z = A.z * i, this._w = Math.cos(t), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(A) {
    let e = A.elements, t = e[0], i = e[4], n = e[8], a = e[1], f = e[5], r = e[9], P = e[2], s = e[6], p = e[10], K = t + f + p;
    if (K > 0) {
      let U = 0.5 / Math.sqrt(K + 1);
      this._w = 0.25 / U, this._x = (s - r) * U, this._y = (n - P) * U, this._z = (a - i) * U;
    } else if (t > f && t > p) {
      let U = 2 * Math.sqrt(1 + t - f - p);
      this._w = (s - r) / U, this._x = 0.25 * U, this._y = (i + a) / U, this._z = (n + P) / U;
    } else if (f > p) {
      let U = 2 * Math.sqrt(1 + f - t - p);
      this._w = (n - P) / U, this._x = (i + a) / U, this._y = 0.25 * U, this._z = (r + s) / U;
    } else {
      let U = 2 * Math.sqrt(1 + p - t - f);
      this._w = (a - i) / U, this._x = (n + P) / U, this._y = (r + s) / U, this._z = 0.25 * U;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(A, e) {
    let t = A.dot(e) + 1;
    return t < 1e-8 ? (t = 0, Math.abs(A.x) > Math.abs(A.z) ? (this._x = -A.y, this._y = A.x, this._z = 0, this._w = t) : (this._x = 0, this._y = -A.z, this._z = A.y, this._w = t)) : (this._x = A.y * e.z - A.z * e.y, this._y = A.z * e.x - A.x * e.z, this._z = A.x * e.y - A.y * e.x, this._w = t), this.normalize();
  }
  angleTo(A) {
    return 2 * Math.acos(Math.abs(LA(this.dot(A), -1, 1)));
  }
  rotateTowards(A, e) {
    let t = this.angleTo(A);
    if (t === 0) return this;
    let i = Math.min(1, e / t);
    return this.slerp(A, i), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  }
  dot(A) {
    return this._x * A._x + this._y * A._y + this._z * A._z + this._w * A._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let A = this.length();
    return A === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (A = 1 / A, this._x = this._x * A, this._y = this._y * A, this._z = this._z * A, this._w = this._w * A), this._onChangeCallback(), this;
  }
  multiply(A) {
    return this.multiplyQuaternions(this, A);
  }
  premultiply(A) {
    return this.multiplyQuaternions(A, this);
  }
  multiplyQuaternions(A, e) {
    let t = A._x, i = A._y, n = A._z, a = A._w, f = e._x, r = e._y, P = e._z, s = e._w;
    return this._x = t * s + a * f + i * P - n * r, this._y = i * s + a * r + n * f - t * P, this._z = n * s + a * P + t * r - i * f, this._w = a * s - t * f - i * r - n * P, this._onChangeCallback(), this;
  }
  slerp(A, e) {
    let t = A._x, i = A._y, n = A._z, a = A._w, f = this.dot(A);
    f < 0 && (t = -t, i = -i, n = -n, a = -a, f = -f);
    let r = 1 - e;
    if (f < 0.9995) {
      let P = Math.acos(f), s = Math.sin(P);
      r = Math.sin(r * P) / s, e = Math.sin(e * P) / s, this._x = this._x * r + t * e, this._y = this._y * r + i * e, this._z = this._z * r + n * e, this._w = this._w * r + a * e, this._onChangeCallback();
    } else this._x = this._x * r + t * e, this._y = this._y * r + i * e, this._z = this._z * r + n * e, this._w = this._w * r + a * e, this.normalize();
    return this;
  }
  slerpQuaternions(A, e, t) {
    return this.copy(A).slerp(e, t);
  }
  random() {
    let A = 2 * Math.PI * Math.random(), e = 2 * Math.PI * Math.random(), t = Math.random(), i = Math.sqrt(1 - t), n = Math.sqrt(t);
    return this.set(i * Math.sin(A), i * Math.cos(A), n * Math.sin(e), n * Math.cos(e));
  }
  equals(A) {
    return A._x === this._x && A._y === this._y && A._z === this._z && A._w === this._w;
  }
  fromArray(A, e = 0) {
    return this._x = A[e], this._y = A[e + 1], this._z = A[e + 2], this._w = A[e + 3], this._onChangeCallback(), this;
  }
  toArray(A = [], e = 0) {
    return A[e] = this._x, A[e + 1] = this._y, A[e + 2] = this._z, A[e + 3] = this._w, A;
  }
  fromBufferAttribute(A, e) {
    return this._x = A.getX(e), this._y = A.getY(e), this._z = A.getZ(e), this._w = A.getW(e), this._onChangeCallback(), this;
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(A) {
    return this._onChangeCallback = A, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}, j = class o2 {
  static {
    o2.prototype.isVector3 = true;
  }
  constructor(A = 0, e = 0, t = 0) {
    this.x = A, this.y = e, this.z = t;
  }
  set(A, e, t) {
    return t === void 0 && (t = this.z), this.x = A, this.y = e, this.z = t, this;
  }
  setScalar(A) {
    return this.x = A, this.y = A, this.z = A, this;
  }
  setX(A) {
    return this.x = A, this;
  }
  setY(A) {
    return this.y = A, this;
  }
  setZ(A) {
    return this.z = A, this;
  }
  setComponent(A, e) {
    switch (A) {
      case 0:
        this.x = e;
        break;
      case 1:
        this.y = e;
        break;
      case 2:
        this.z = e;
        break;
      default:
        throw new Error("THREE.Vector3: index is out of range: " + A);
    }
    return this;
  }
  getComponent(A) {
    switch (A) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("THREE.Vector3: index is out of range: " + A);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(A) {
    return this.x = A.x, this.y = A.y, this.z = A.z, this;
  }
  add(A) {
    return this.x += A.x, this.y += A.y, this.z += A.z, this;
  }
  addScalar(A) {
    return this.x += A, this.y += A, this.z += A, this;
  }
  addVectors(A, e) {
    return this.x = A.x + e.x, this.y = A.y + e.y, this.z = A.z + e.z, this;
  }
  addScaledVector(A, e) {
    return this.x += A.x * e, this.y += A.y * e, this.z += A.z * e, this;
  }
  sub(A) {
    return this.x -= A.x, this.y -= A.y, this.z -= A.z, this;
  }
  subScalar(A) {
    return this.x -= A, this.y -= A, this.z -= A, this;
  }
  subVectors(A, e) {
    return this.x = A.x - e.x, this.y = A.y - e.y, this.z = A.z - e.z, this;
  }
  multiply(A) {
    return this.x *= A.x, this.y *= A.y, this.z *= A.z, this;
  }
  multiplyScalar(A) {
    return this.x *= A, this.y *= A, this.z *= A, this;
  }
  multiplyVectors(A, e) {
    return this.x = A.x * e.x, this.y = A.y * e.y, this.z = A.z * e.z, this;
  }
  applyEuler(A) {
    return this.applyQuaternion(EP.setFromEuler(A));
  }
  applyAxisAngle(A, e) {
    return this.applyQuaternion(EP.setFromAxisAngle(A, e));
  }
  applyMatrix3(A) {
    let e = this.x, t = this.y, i = this.z, n = A.elements;
    return this.x = n[0] * e + n[3] * t + n[6] * i, this.y = n[1] * e + n[4] * t + n[7] * i, this.z = n[2] * e + n[5] * t + n[8] * i, this;
  }
  applyNormalMatrix(A) {
    return this.applyMatrix3(A).normalize();
  }
  applyMatrix4(A) {
    let e = this.x, t = this.y, i = this.z, n = A.elements, a = 1 / (n[3] * e + n[7] * t + n[11] * i + n[15]);
    return this.x = (n[0] * e + n[4] * t + n[8] * i + n[12]) * a, this.y = (n[1] * e + n[5] * t + n[9] * i + n[13]) * a, this.z = (n[2] * e + n[6] * t + n[10] * i + n[14]) * a, this;
  }
  applyQuaternion(A) {
    let e = this.x, t = this.y, i = this.z, n = A.x, a = A.y, f = A.z, r = A.w, P = 2 * (a * i - f * t), s = 2 * (f * e - n * i), p = 2 * (n * t - a * e);
    return this.x = e + r * P + a * p - f * s, this.y = t + r * s + f * P - n * p, this.z = i + r * p + n * s - a * P, this;
  }
  project(A) {
    return this.applyMatrix4(A.matrixWorldInverse).applyMatrix4(A.projectionMatrix);
  }
  unproject(A) {
    return this.applyMatrix4(A.projectionMatrixInverse).applyMatrix4(A.matrixWorld);
  }
  transformDirection(A) {
    let e = this.x, t = this.y, i = this.z, n = A.elements;
    return this.x = n[0] * e + n[4] * t + n[8] * i, this.y = n[1] * e + n[5] * t + n[9] * i, this.z = n[2] * e + n[6] * t + n[10] * i, this.normalize();
  }
  divide(A) {
    return this.x /= A.x, this.y /= A.y, this.z /= A.z, this;
  }
  divideScalar(A) {
    return this.multiplyScalar(1 / A);
  }
  min(A) {
    return this.x = Math.min(this.x, A.x), this.y = Math.min(this.y, A.y), this.z = Math.min(this.z, A.z), this;
  }
  max(A) {
    return this.x = Math.max(this.x, A.x), this.y = Math.max(this.y, A.y), this.z = Math.max(this.z, A.z), this;
  }
  clamp(A, e) {
    return this.x = LA(this.x, A.x, e.x), this.y = LA(this.y, A.y, e.y), this.z = LA(this.z, A.z, e.z), this;
  }
  clampScalar(A, e) {
    return this.x = LA(this.x, A, e), this.y = LA(this.y, A, e), this.z = LA(this.z, A, e), this;
  }
  clampLength(A, e) {
    let t = this.length();
    return this.divideScalar(t || 1).multiplyScalar(LA(t, A, e));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  }
  dot(A) {
    return this.x * A.x + this.y * A.y + this.z * A.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(A) {
    return this.normalize().multiplyScalar(A);
  }
  lerp(A, e) {
    return this.x += (A.x - this.x) * e, this.y += (A.y - this.y) * e, this.z += (A.z - this.z) * e, this;
  }
  lerpVectors(A, e, t) {
    return this.x = A.x + (e.x - A.x) * t, this.y = A.y + (e.y - A.y) * t, this.z = A.z + (e.z - A.z) * t, this;
  }
  cross(A) {
    return this.crossVectors(this, A);
  }
  crossVectors(A, e) {
    let t = A.x, i = A.y, n = A.z, a = e.x, f = e.y, r = e.z;
    return this.x = i * r - n * f, this.y = n * a - t * r, this.z = t * f - i * a, this;
  }
  projectOnVector(A) {
    let e = A.lengthSq();
    if (e === 0) return this.set(0, 0, 0);
    let t = A.dot(this) / e;
    return this.copy(A).multiplyScalar(t);
  }
  projectOnPlane(A) {
    return br.copy(this).projectOnVector(A), this.sub(br);
  }
  reflect(A) {
    return this.sub(br.copy(A).multiplyScalar(2 * this.dot(A)));
  }
  angleTo(A) {
    let e = Math.sqrt(this.lengthSq() * A.lengthSq());
    if (e === 0) return Math.PI / 2;
    let t = this.dot(A) / e;
    return Math.acos(LA(t, -1, 1));
  }
  distanceTo(A) {
    return Math.sqrt(this.distanceToSquared(A));
  }
  distanceToSquared(A) {
    let e = this.x - A.x, t = this.y - A.y, i = this.z - A.z;
    return e * e + t * t + i * i;
  }
  manhattanDistanceTo(A) {
    return Math.abs(this.x - A.x) + Math.abs(this.y - A.y) + Math.abs(this.z - A.z);
  }
  setFromSpherical(A) {
    return this.setFromSphericalCoords(A.radius, A.phi, A.theta);
  }
  setFromSphericalCoords(A, e, t) {
    let i = Math.sin(e) * A;
    return this.x = i * Math.sin(t), this.y = Math.cos(e) * A, this.z = i * Math.cos(t), this;
  }
  setFromCylindrical(A) {
    return this.setFromCylindricalCoords(A.radius, A.theta, A.y);
  }
  setFromCylindricalCoords(A, e, t) {
    return this.x = A * Math.sin(e), this.y = t, this.z = A * Math.cos(e), this;
  }
  setFromMatrixPosition(A) {
    let e = A.elements;
    return this.x = e[12], this.y = e[13], this.z = e[14], this;
  }
  setFromMatrixScale(A) {
    let e = this.setFromMatrixColumn(A, 0).length(), t = this.setFromMatrixColumn(A, 1).length(), i = this.setFromMatrixColumn(A, 2).length();
    return this.x = e, this.y = t, this.z = i, this;
  }
  setFromMatrixColumn(A, e) {
    return this.fromArray(A.elements, e * 4);
  }
  setFromMatrix3Column(A, e) {
    return this.fromArray(A.elements, e * 3);
  }
  setFromEuler(A) {
    return this.x = A._x, this.y = A._y, this.z = A._z, this;
  }
  setFromColor(A) {
    return this.x = A.r, this.y = A.g, this.z = A.b, this;
  }
  equals(A) {
    return A.x === this.x && A.y === this.y && A.z === this.z;
  }
  fromArray(A, e = 0) {
    return this.x = A[e], this.y = A[e + 1], this.z = A[e + 2], this;
  }
  toArray(A = [], e = 0) {
    return A[e] = this.x, A[e + 1] = this.y, A[e + 2] = this.z, A;
  }
  fromBufferAttribute(A, e) {
    return this.x = A.getX(e), this.y = A.getY(e), this.z = A.getZ(e), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  randomDirection() {
    let A = Math.random() * Math.PI * 2, e = Math.random() * 2 - 1, t = Math.sqrt(1 - e * e);
    return this.x = t * Math.cos(A), this.y = e, this.z = t * Math.sin(A), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}, br = new j(), EP = new rt(), VA = class o3 {
  static {
    o3.prototype.isMatrix3 = true;
  }
  constructor(A, e, t, i, n, a, f, r, P) {
    this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], A !== void 0 && this.set(A, e, t, i, n, a, f, r, P);
  }
  set(A, e, t, i, n, a, f, r, P) {
    let s = this.elements;
    return s[0] = A, s[1] = i, s[2] = f, s[3] = e, s[4] = n, s[5] = r, s[6] = t, s[7] = a, s[8] = P, this;
  }
  identity() {
    return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
  }
  copy(A) {
    let e = this.elements, t = A.elements;
    return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], this;
  }
  extractBasis(A, e, t) {
    return A.setFromMatrix3Column(this, 0), e.setFromMatrix3Column(this, 1), t.setFromMatrix3Column(this, 2), this;
  }
  setFromMatrix4(A) {
    let e = A.elements;
    return this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]), this;
  }
  multiply(A) {
    return this.multiplyMatrices(this, A);
  }
  premultiply(A) {
    return this.multiplyMatrices(A, this);
  }
  multiplyMatrices(A, e) {
    let t = A.elements, i = e.elements, n = this.elements, a = t[0], f = t[3], r = t[6], P = t[1], s = t[4], p = t[7], K = t[2], U = t[5], w = t[8], l = i[0], R = i[3], F = i[6], u = i[1], D = i[4], v = i[7], x = i[2], h = i[5], S = i[8];
    return n[0] = a * l + f * u + r * x, n[3] = a * R + f * D + r * h, n[6] = a * F + f * v + r * S, n[1] = P * l + s * u + p * x, n[4] = P * R + s * D + p * h, n[7] = P * F + s * v + p * S, n[2] = K * l + U * u + w * x, n[5] = K * R + U * D + w * h, n[8] = K * F + U * v + w * S, this;
  }
  multiplyScalar(A) {
    let e = this.elements;
    return e[0] *= A, e[3] *= A, e[6] *= A, e[1] *= A, e[4] *= A, e[7] *= A, e[2] *= A, e[5] *= A, e[8] *= A, this;
  }
  determinant() {
    let A = this.elements, e = A[0], t = A[1], i = A[2], n = A[3], a = A[4], f = A[5], r = A[6], P = A[7], s = A[8];
    return e * a * s - e * f * P - t * n * s + t * f * r + i * n * P - i * a * r;
  }
  invert() {
    let A = this.elements, e = A[0], t = A[1], i = A[2], n = A[3], a = A[4], f = A[5], r = A[6], P = A[7], s = A[8], p = s * a - f * P, K = f * r - s * n, U = P * n - a * r, w = e * p + t * K + i * U;
    if (w === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    let l = 1 / w;
    return A[0] = p * l, A[1] = (i * P - s * t) * l, A[2] = (f * t - i * a) * l, A[3] = K * l, A[4] = (s * e - i * r) * l, A[5] = (i * n - f * e) * l, A[6] = U * l, A[7] = (t * r - P * e) * l, A[8] = (a * e - t * n) * l, this;
  }
  transpose() {
    let A, e = this.elements;
    return A = e[1], e[1] = e[3], e[3] = A, A = e[2], e[2] = e[6], e[6] = A, A = e[5], e[5] = e[7], e[7] = A, this;
  }
  getNormalMatrix(A) {
    return this.setFromMatrix4(A).invert().transpose();
  }
  transposeIntoArray(A) {
    let e = this.elements;
    return A[0] = e[0], A[1] = e[3], A[2] = e[6], A[3] = e[1], A[4] = e[4], A[5] = e[7], A[6] = e[2], A[7] = e[5], A[8] = e[8], this;
  }
  setUvTransform(A, e, t, i, n, a, f) {
    let r = Math.cos(n), P = Math.sin(n);
    return this.set(t * r, t * P, -t * (r * a + P * f) + a + A, -i * P, i * r, -i * (-P * a + r * f) + f + e, 0, 0, 1), this;
  }
  scale(A, e) {
    return yo("Matrix3: .scale() is deprecated. Use .makeScale() instead."), this.premultiply(zr.makeScale(A, e)), this;
  }
  rotate(A) {
    return yo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."), this.premultiply(zr.makeRotation(-A)), this;
  }
  translate(A, e) {
    return yo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."), this.premultiply(zr.makeTranslation(A, e)), this;
  }
  makeTranslation(A, e) {
    return A.isVector2 ? this.set(1, 0, A.x, 0, 1, A.y, 0, 0, 1) : this.set(1, 0, A, 0, 1, e, 0, 0, 1), this;
  }
  makeRotation(A) {
    let e = Math.cos(A), t = Math.sin(A);
    return this.set(e, -t, 0, t, e, 0, 0, 0, 1), this;
  }
  makeScale(A, e) {
    return this.set(A, 0, 0, 0, e, 0, 0, 0, 1), this;
  }
  equals(A) {
    let e = this.elements, t = A.elements;
    for (let i = 0; i < 9; i++) if (e[i] !== t[i]) return false;
    return true;
  }
  fromArray(A, e = 0) {
    for (let t = 0; t < 9; t++) this.elements[t] = A[t + e];
    return this;
  }
  toArray(A = [], e = 0) {
    let t = this.elements;
    return A[e] = t[0], A[e + 1] = t[1], A[e + 2] = t[2], A[e + 3] = t[3], A[e + 4] = t[4], A[e + 5] = t[5], A[e + 6] = t[6], A[e + 7] = t[7], A[e + 8] = t[8], A;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}, zr = new VA(), ZP = new VA().set(0.4123908, 0.3575843, 0.1804808, 0.212639, 0.7151687, 0.0721923, 0.0193308, 0.1191948, 0.9505322), YP = new VA().set(3.2409699, -1.5373832, -0.4986108, -0.9692436, 1.8759675, 0.0415551, 0.0556301, -0.203977, 1.0569715);
function E0() {
  let o22 = { enabled: true, workingColorSpace: pn, spaces: {}, convert: function(i, n, a) {
    return this.enabled === false || n === a || !n || !a || (this.spaces[n].transfer === se && (i.r = io(i.r), i.g = io(i.g), i.b = io(i.b)), this.spaces[n].primaries !== this.spaces[a].primaries && (i.applyMatrix3(this.spaces[n].toXYZ), i.applyMatrix3(this.spaces[a].fromXYZ)), this.spaces[a].transfer === se && (i.r = vi(i.r), i.g = vi(i.g), i.b = vi(i.b))), i;
  }, workingToColorSpace: function(i, n) {
    return this.convert(i, this.workingColorSpace, n);
  }, colorSpaceToWorking: function(i, n) {
    return this.convert(i, n, this.workingColorSpace);
  }, getPrimaries: function(i) {
    return this.spaces[i].primaries;
  }, getTransfer: function(i) {
    return i === ao ? Un : this.spaces[i].transfer;
  }, getToneMappingMode: function(i) {
    return this.spaces[i].outputColorSpaceConfig.toneMappingMode || "standard";
  }, getLuminanceCoefficients: function(i, n = this.workingColorSpace) {
    return i.fromArray(this.spaces[n].luminanceCoefficients);
  }, define: function(i) {
    Object.assign(this.spaces, i);
  }, _getMatrix: function(i, n, a) {
    return i.copy(this.spaces[n].toXYZ).multiply(this.spaces[a].fromXYZ);
  }, _getDrawingBufferColorSpace: function(i) {
    return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace;
  }, _getUnpackColorSpace: function(i = this.workingColorSpace) {
    return this.spaces[i].workingColorSpaceConfig.unpackColorSpace;
  }, fromWorkingColorSpace: function(i, n) {
    return yo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."), o22.workingToColorSpace(i, n);
  }, toWorkingColorSpace: function(i, n) {
    return yo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."), o22.colorSpaceToWorking(i, n);
  } }, A = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06], e = [0.2126, 0.7152, 0.0722], t = [0.3127, 0.329];
  return o22.define({ [pn]: { primaries: A, whitePoint: t, transfer: Un, toXYZ: ZP, fromXYZ: YP, luminanceCoefficients: e, workingColorSpaceConfig: { unpackColorSpace: nt }, outputColorSpaceConfig: { drawingBufferColorSpace: nt } }, [nt]: { primaries: A, whitePoint: t, transfer: se, toXYZ: ZP, fromXYZ: YP, luminanceCoefficients: e, outputColorSpaceConfig: { drawingBufferColorSpace: nt } } }), o22;
}
var ee = E0();
function io(o22) {
  return o22 < 0.04045 ? o22 * 0.0773993808 : Math.pow(o22 * 0.9478672986 + 0.0521327014, 2.4);
}
function vi(o22) {
  return o22 < 31308e-7 ? o22 * 12.92 : 1.055 * Math.pow(o22, 0.41666) - 0.055;
}
var ti, Wa = class {
  static getDataURL(A, e = "image/png") {
    if (/^data:/i.test(A.src) || typeof HTMLCanvasElement > "u") return A.src;
    let t;
    if (A instanceof HTMLCanvasElement) t = A;
    else {
      ti === void 0 && (ti = Fn("canvas")), ti.width = A.width, ti.height = A.height;
      let i = ti.getContext("2d");
      A instanceof ImageData ? i.putImageData(A, 0, 0) : i.drawImage(A, 0, 0, A.width, A.height), t = ti;
    }
    return t.toDataURL(e);
  }
  static sRGBToLinear(A) {
    if (typeof HTMLImageElement < "u" && A instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && A instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && A instanceof ImageBitmap) {
      let e = Fn("canvas");
      e.width = A.width, e.height = A.height;
      let t = e.getContext("2d");
      t.drawImage(A, 0, 0, A.width, A.height);
      let i = t.getImageData(0, 0, A.width, A.height), n = i.data;
      for (let a = 0; a < n.length; a++) n[a] = io(n[a] / 255) * 255;
      return t.putImageData(i, 0, 0), e;
    } else if (A.data) {
      let e = A.data.slice(0);
      for (let t = 0; t < e.length; t++) e instanceof Uint8Array || e instanceof Uint8ClampedArray ? e[t] = Math.floor(io(e[t] / 255) * 255) : e[t] = io(e[t]);
      return { data: e, width: A.width, height: A.height };
    } else return GA("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), A;
  }
}, Z0 = 0, Bi = class {
  constructor(A = null) {
    this.isTextureSource = true, Object.defineProperty(this, "id", { value: Z0++ }), this.uuid = bt(), this.data = A, this.dataReady = true, this.version = 0;
  }
  getSize(A) {
    let e = this.data;
    return typeof HTMLVideoElement < "u" && e instanceof HTMLVideoElement ? A.set(e.videoWidth, e.videoHeight, 0) : typeof VideoFrame < "u" && e instanceof VideoFrame ? A.set(e.displayWidth, e.displayHeight, 0) : e !== null ? A.set(e.width, e.height, e.depth || 0) : A.set(0, 0, 0), A;
  }
  set needsUpdate(A) {
    A === true && this.version++;
  }
  toJSON(A) {
    let e = A === void 0 || typeof A == "string";
    if (!e && A.images[this.uuid] !== void 0) return A.images[this.uuid];
    let t = { uuid: this.uuid, url: "" }, i = this.data;
    if (i !== null) {
      let n;
      if (Array.isArray(i)) {
        n = [];
        for (let a = 0, f = i.length; a < f; a++) i[a].isDataTexture ? n.push(Mr(i[a].image)) : n.push(Mr(i[a]));
      } else n = Mr(i);
      t.url = n;
    }
    return e || (A.images[this.uuid] = t), t;
  }
};
function Mr(o22) {
  return typeof HTMLImageElement < "u" && o22 instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && o22 instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && o22 instanceof ImageBitmap ? Wa.getDataURL(o22) : o22.data ? { data: Array.from(o22.data), width: o22.width, height: o22.height, type: o22.data.constructor.name } : (GA("Texture: Unable to serialize Texture."), {});
}
var Y0 = 0, yr = new j(), Je = class o4 extends Dt {
  constructor(A = o4.DEFAULT_IMAGE, e = o4.DEFAULT_MAPPING, t = kt, i = kt, n = Oe, a = To, f = wt, r = et, P = o4.DEFAULT_ANISOTROPY, s = ao) {
    super(), this.isTexture = true, Object.defineProperty(this, "id", { value: Y0++ }), this.uuid = bt(), this.name = "", this.source = new Bi(A), this.mipmaps = [], this.mapping = e, this.channel = 0, this.wrapS = t, this.wrapT = i, this.magFilter = n, this.minFilter = a, this.anisotropy = P, this.format = f, this.internalFormat = null, this.type = r, this.offset = new nA(0, 0), this.repeat = new nA(1, 1), this.center = new nA(0, 0), this.rotation = 0, this.matrixAutoUpdate = true, this.matrix = new VA(), this.generateMipmaps = true, this.premultiplyAlpha = false, this.flipY = true, this.unpackAlignment = 4, this.colorSpace = s, this.userData = {}, this.updateRanges = [], this.version = 0, this.onUpdate = null, this.renderTarget = null, this.isRenderTargetTexture = false, this.isArrayTexture = !!(A && A.depth && A.depth > 1), this.pmremVersion = 0, this.normalized = false;
  }
  get width() {
    return this.source.getSize(yr).x;
  }
  get height() {
    return this.source.getSize(yr).y;
  }
  get depth() {
    return this.source.getSize(yr).z;
  }
  get image() {
    return this.source.data;
  }
  set image(A) {
    this.source.data = A;
  }
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  addUpdateRange(A, e) {
    this.updateRanges.push({ start: A, count: e });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(A) {
    return this.name = A.name, this.source = A.source, this.mipmaps = A.mipmaps.slice(0), this.mapping = A.mapping, this.channel = A.channel, this.wrapS = A.wrapS, this.wrapT = A.wrapT, this.magFilter = A.magFilter, this.minFilter = A.minFilter, this.anisotropy = A.anisotropy, this.format = A.format, this.internalFormat = A.internalFormat, this.type = A.type, this.normalized = A.normalized, this.offset.copy(A.offset), this.repeat.copy(A.repeat), this.center.copy(A.center), this.rotation = A.rotation, this.matrixAutoUpdate = A.matrixAutoUpdate, this.matrix.copy(A.matrix), this.generateMipmaps = A.generateMipmaps, this.premultiplyAlpha = A.premultiplyAlpha, this.flipY = A.flipY, this.unpackAlignment = A.unpackAlignment, this.colorSpace = A.colorSpace, this.renderTarget = A.renderTarget, this.isRenderTargetTexture = A.isRenderTargetTexture, this.isArrayTexture = A.isArrayTexture, this.userData = JSON.parse(JSON.stringify(A.userData)), this.needsUpdate = true, this;
  }
  setValues(A) {
    for (let e in A) {
      let t = A[e];
      if (t === void 0) {
        GA(`Texture.setValues(): parameter '${e}' has value of undefined.`);
        continue;
      }
      let i = this[e];
      if (i === void 0) {
        GA(`Texture.setValues(): property '${e}' does not exist.`);
        continue;
      }
      i && t && i.isVector2 && t.isVector2 || i && t && i.isVector3 && t.isVector3 || i && t && i.isMatrix3 && t.isMatrix3 ? i.copy(t) : this[e] = t;
    }
  }
  toJSON(A) {
    let e = A === void 0 || typeof A == "string";
    if (!e && A.textures[this.uuid] !== void 0) return A.textures[this.uuid];
    let t = { metadata: { version: 4.7, type: "Texture", generator: "Texture.toJSON" }, uuid: this.uuid, name: this.name, image: this.source.toJSON(A).uuid, mapping: this.mapping, channel: this.channel, repeat: [this.repeat.x, this.repeat.y], offset: [this.offset.x, this.offset.y], center: [this.center.x, this.center.y], rotation: this.rotation, wrap: [this.wrapS, this.wrapT], format: this.format, internalFormat: this.internalFormat, type: this.type, normalized: this.normalized, colorSpace: this.colorSpace, minFilter: this.minFilter, magFilter: this.magFilter, anisotropy: this.anisotropy, flipY: this.flipY, generateMipmaps: this.generateMipmaps, premultiplyAlpha: this.premultiplyAlpha, unpackAlignment: this.unpackAlignment };
    return Object.keys(this.userData).length > 0 && (t.userData = this.userData), e || (A.textures[this.uuid] = t), t;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(A) {
    if (this.mapping !== I8) return A;
    if (A.applyMatrix3(this.matrix), A.x < 0 || A.x > 1) switch (this.wrapS) {
      case di:
        A.x = A.x - Math.floor(A.x);
        break;
      case kt:
        A.x = A.x < 0 ? 0 : 1;
        break;
      case La:
        Math.abs(Math.floor(A.x) % 2) === 1 ? A.x = Math.ceil(A.x) - A.x : A.x = A.x - Math.floor(A.x);
        break;
    }
    if (A.y < 0 || A.y > 1) switch (this.wrapT) {
      case di:
        A.y = A.y - Math.floor(A.y);
        break;
      case kt:
        A.y = A.y < 0 ? 0 : 1;
        break;
      case La:
        Math.abs(Math.floor(A.y) % 2) === 1 ? A.y = Math.ceil(A.y) - A.y : A.y = A.y - Math.floor(A.y);
        break;
    }
    return this.flipY && (A.y = 1 - A.y), A;
  }
  set needsUpdate(A) {
    A === true && (this.version++, this.source.needsUpdate = true);
  }
  set needsPMREMUpdate(A) {
    A === true && this.pmremVersion++;
  }
};
Je.DEFAULT_IMAGE = null;
Je.DEFAULT_MAPPING = I8;
Je.DEFAULT_ANISOTROPY = 1;
var pe = class o5 {
  static {
    o5.prototype.isVector4 = true;
  }
  constructor(A = 0, e = 0, t = 0, i = 1) {
    this.x = A, this.y = e, this.z = t, this.w = i;
  }
  get width() {
    return this.z;
  }
  set width(A) {
    this.z = A;
  }
  get height() {
    return this.w;
  }
  set height(A) {
    this.w = A;
  }
  set(A, e, t, i) {
    return this.x = A, this.y = e, this.z = t, this.w = i, this;
  }
  setScalar(A) {
    return this.x = A, this.y = A, this.z = A, this.w = A, this;
  }
  setX(A) {
    return this.x = A, this;
  }
  setY(A) {
    return this.y = A, this;
  }
  setZ(A) {
    return this.z = A, this;
  }
  setW(A) {
    return this.w = A, this;
  }
  setComponent(A, e) {
    switch (A) {
      case 0:
        this.x = e;
        break;
      case 1:
        this.y = e;
        break;
      case 2:
        this.z = e;
        break;
      case 3:
        this.w = e;
        break;
      default:
        throw new Error("THREE.Vector4: index is out of range: " + A);
    }
    return this;
  }
  getComponent(A) {
    switch (A) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("THREE.Vector4: index is out of range: " + A);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(A) {
    return this.x = A.x, this.y = A.y, this.z = A.z, this.w = A.w !== void 0 ? A.w : 1, this;
  }
  add(A) {
    return this.x += A.x, this.y += A.y, this.z += A.z, this.w += A.w, this;
  }
  addScalar(A) {
    return this.x += A, this.y += A, this.z += A, this.w += A, this;
  }
  addVectors(A, e) {
    return this.x = A.x + e.x, this.y = A.y + e.y, this.z = A.z + e.z, this.w = A.w + e.w, this;
  }
  addScaledVector(A, e) {
    return this.x += A.x * e, this.y += A.y * e, this.z += A.z * e, this.w += A.w * e, this;
  }
  sub(A) {
    return this.x -= A.x, this.y -= A.y, this.z -= A.z, this.w -= A.w, this;
  }
  subScalar(A) {
    return this.x -= A, this.y -= A, this.z -= A, this.w -= A, this;
  }
  subVectors(A, e) {
    return this.x = A.x - e.x, this.y = A.y - e.y, this.z = A.z - e.z, this.w = A.w - e.w, this;
  }
  multiply(A) {
    return this.x *= A.x, this.y *= A.y, this.z *= A.z, this.w *= A.w, this;
  }
  multiplyScalar(A) {
    return this.x *= A, this.y *= A, this.z *= A, this.w *= A, this;
  }
  applyMatrix4(A) {
    let e = this.x, t = this.y, i = this.z, n = this.w, a = A.elements;
    return this.x = a[0] * e + a[4] * t + a[8] * i + a[12] * n, this.y = a[1] * e + a[5] * t + a[9] * i + a[13] * n, this.z = a[2] * e + a[6] * t + a[10] * i + a[14] * n, this.w = a[3] * e + a[7] * t + a[11] * i + a[15] * n, this;
  }
  divide(A) {
    return this.x /= A.x, this.y /= A.y, this.z /= A.z, this.w /= A.w, this;
  }
  divideScalar(A) {
    return this.multiplyScalar(1 / A);
  }
  setAxisAngleFromQuaternion(A) {
    this.w = 2 * Math.acos(A.w);
    let e = Math.sqrt(1 - A.w * A.w);
    return e < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = A.x / e, this.y = A.y / e, this.z = A.z / e), this;
  }
  setAxisAngleFromRotationMatrix(A) {
    let e, t, i, n, r = A.elements, P = r[0], s = r[4], p = r[8], K = r[1], U = r[5], w = r[9], l = r[2], R = r[6], F = r[10];
    if (Math.abs(s - K) < 0.01 && Math.abs(p - l) < 0.01 && Math.abs(w - R) < 0.01) {
      if (Math.abs(s + K) < 0.1 && Math.abs(p + l) < 0.1 && Math.abs(w + R) < 0.1 && Math.abs(P + U + F - 3) < 0.1) return this.set(1, 0, 0, 0), this;
      e = Math.PI;
      let D = (P + 1) / 2, v = (U + 1) / 2, x = (F + 1) / 2, h = (s + K) / 4, S = (p + l) / 4, g = (w + R) / 4;
      return D > v && D > x ? D < 0.01 ? (t = 0, i = 0.707106781, n = 0.707106781) : (t = Math.sqrt(D), i = h / t, n = S / t) : v > x ? v < 0.01 ? (t = 0.707106781, i = 0, n = 0.707106781) : (i = Math.sqrt(v), t = h / i, n = g / i) : x < 0.01 ? (t = 0.707106781, i = 0.707106781, n = 0) : (n = Math.sqrt(x), t = S / n, i = g / n), this.set(t, i, n, e), this;
    }
    let u = Math.sqrt((R - w) * (R - w) + (p - l) * (p - l) + (K - s) * (K - s));
    return Math.abs(u) < 1e-3 && (u = 1), this.x = (R - w) / u, this.y = (p - l) / u, this.z = (K - s) / u, this.w = Math.acos((P + U + F - 1) / 2), this;
  }
  setFromMatrixPosition(A) {
    let e = A.elements;
    return this.x = e[12], this.y = e[13], this.z = e[14], this.w = e[15], this;
  }
  min(A) {
    return this.x = Math.min(this.x, A.x), this.y = Math.min(this.y, A.y), this.z = Math.min(this.z, A.z), this.w = Math.min(this.w, A.w), this;
  }
  max(A) {
    return this.x = Math.max(this.x, A.x), this.y = Math.max(this.y, A.y), this.z = Math.max(this.z, A.z), this.w = Math.max(this.w, A.w), this;
  }
  clamp(A, e) {
    return this.x = LA(this.x, A.x, e.x), this.y = LA(this.y, A.y, e.y), this.z = LA(this.z, A.z, e.z), this.w = LA(this.w, A.w, e.w), this;
  }
  clampScalar(A, e) {
    return this.x = LA(this.x, A, e), this.y = LA(this.y, A, e), this.z = LA(this.z, A, e), this.w = LA(this.w, A, e), this;
  }
  clampLength(A, e) {
    let t = this.length();
    return this.divideScalar(t || 1).multiplyScalar(LA(t, A, e));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
  }
  dot(A) {
    return this.x * A.x + this.y * A.y + this.z * A.z + this.w * A.w;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(A) {
    return this.normalize().multiplyScalar(A);
  }
  lerp(A, e) {
    return this.x += (A.x - this.x) * e, this.y += (A.y - this.y) * e, this.z += (A.z - this.z) * e, this.w += (A.w - this.w) * e, this;
  }
  lerpVectors(A, e, t) {
    return this.x = A.x + (e.x - A.x) * t, this.y = A.y + (e.y - A.y) * t, this.z = A.z + (e.z - A.z) * t, this.w = A.w + (e.w - A.w) * t, this;
  }
  equals(A) {
    return A.x === this.x && A.y === this.y && A.z === this.z && A.w === this.w;
  }
  fromArray(A, e = 0) {
    return this.x = A[e], this.y = A[e + 1], this.z = A[e + 2], this.w = A[e + 3], this;
  }
  toArray(A = [], e = 0) {
    return A[e] = this.x, A[e + 1] = this.y, A[e + 2] = this.z, A[e + 3] = this.w, A;
  }
  fromBufferAttribute(A, e) {
    return this.x = A.getX(e), this.y = A.getY(e), this.z = A.getZ(e), this.w = A.getW(e), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}, qa = class extends Dt {
  constructor(A = 1, e = 1, t = {}) {
    super(), t = Object.assign({ generateMipmaps: false, internalFormat: null, minFilter: Oe, depthBuffer: true, stencilBuffer: false, resolveColorBuffer: true, resolveDepthBuffer: true, resolveStencilBuffer: true, storeMultisampledColorBuffer: true, storeMultisampledDepthBuffer: true, storeMultisampledStencilBuffer: true, depthTexture: null, samples: 0, count: 1, depth: 1, multiview: false, useArrayDepthTexture: false }, t), this.isRenderTarget = true, this.width = A, this.height = e, this.depth = t.depth, this.scissor = new pe(0, 0, A, e), this.scissorTest = false, this.viewport = new pe(0, 0, A, e), this.textures = [];
    let i = { width: A, height: e, depth: t.depth }, n = new Je(i), a = t.count;
    for (let f = 0; f < a; f++) this.textures[f] = n.clone(), this.textures[f].isRenderTargetTexture = true, this.textures[f].renderTarget = this;
    this._setTextureOptions(t), this.depthBuffer = t.depthBuffer, this.stencilBuffer = t.stencilBuffer, this.resolveColorBuffer = t.resolveColorBuffer, this.resolveDepthBuffer = t.resolveDepthBuffer, this.resolveStencilBuffer = t.resolveStencilBuffer, this.storeMultisampledColorBuffer = t.storeMultisampledColorBuffer, this.storeMultisampledDepthBuffer = t.storeMultisampledDepthBuffer, this.storeMultisampledStencilBuffer = t.storeMultisampledStencilBuffer, this._depthTexture = null, this.depthTexture = t.depthTexture, this.samples = t.samples, this.multiview = t.multiview, this.useArrayDepthTexture = t.useArrayDepthTexture;
  }
  _setTextureOptions(A = {}) {
    let e = { minFilter: Oe, generateMipmaps: false, flipY: false, internalFormat: null };
    A.mapping !== void 0 && (e.mapping = A.mapping), A.wrapS !== void 0 && (e.wrapS = A.wrapS), A.wrapT !== void 0 && (e.wrapT = A.wrapT), A.wrapR !== void 0 && (e.wrapR = A.wrapR), A.magFilter !== void 0 && (e.magFilter = A.magFilter), A.minFilter !== void 0 && (e.minFilter = A.minFilter), A.format !== void 0 && (e.format = A.format), A.type !== void 0 && (e.type = A.type), A.anisotropy !== void 0 && (e.anisotropy = A.anisotropy), A.colorSpace !== void 0 && (e.colorSpace = A.colorSpace), A.flipY !== void 0 && (e.flipY = A.flipY), A.generateMipmaps !== void 0 && (e.generateMipmaps = A.generateMipmaps), A.internalFormat !== void 0 && (e.internalFormat = A.internalFormat);
    for (let t = 0; t < this.textures.length; t++) this.textures[t].setValues(e);
  }
  get texture() {
    return this.textures[0];
  }
  set texture(A) {
    this.textures[0] = A;
  }
  set depthTexture(A) {
    this._depthTexture !== null && this._depthTexture.renderTarget === this && (this._depthTexture.renderTarget = null), A !== null && A.renderTarget === null && (A.renderTarget = this), this._depthTexture = A;
  }
  get depthTexture() {
    return this._depthTexture;
  }
  setSize(A, e, t = 1) {
    if (this.width !== A || this.height !== e || this.depth !== t) {
      this.width = A, this.height = e, this.depth = t;
      for (let i = 0, n = this.textures.length; i < n; i++) this.textures[i].image.width = A, this.textures[i].image.height = e, this.textures[i].image.depth = t, this.textures[i].isData3DTexture !== true && (this.textures[i].isArrayTexture = this.textures[i].image.depth > 1);
      this.dispose();
    }
    this.viewport.set(0, 0, A, e), this.scissor.set(0, 0, A, e);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(A) {
    this.width = A.width, this.height = A.height, this.depth = A.depth, this.scissor.copy(A.scissor), this.scissorTest = A.scissorTest, this.viewport.copy(A.viewport), this.textures.length = 0;
    for (let e = 0, t = A.textures.length; e < t; e++) {
      this.textures[e] = A.textures[e].clone(), this.textures[e].isRenderTargetTexture = true, this.textures[e].renderTarget = this;
      let i = Object.assign({}, A.textures[e].image);
      this.textures[e].source = new Bi(i);
    }
    if (this.depthBuffer = A.depthBuffer, this.stencilBuffer = A.stencilBuffer, this.resolveColorBuffer = A.resolveColorBuffer, this.resolveDepthBuffer = A.resolveDepthBuffer, this.resolveStencilBuffer = A.resolveStencilBuffer, this.storeMultisampledColorBuffer = A.storeMultisampledColorBuffer, this.storeMultisampledDepthBuffer = A.storeMultisampledDepthBuffer, this.storeMultisampledStencilBuffer = A.storeMultisampledStencilBuffer, A.depthTexture !== null) if (A.depthTexture.renderTarget === A) {
      let e = A.depthTexture.clone();
      e.renderTarget = null, this.depthTexture = e;
    } else this.depthTexture = A.depthTexture;
    return this.samples = A.samples, this.multiview = A.multiview, this.useArrayDepthTexture = A.useArrayDepthTexture, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}, At = class extends qa {
  constructor(A = 1, e = 1, t = {}) {
    super(A, e, t), this.isWebGLRenderTarget = true;
  }
}, wn = class extends Je {
  constructor(A = null, e = 1, t = 1, i = 1) {
    super(null), this.isDataArrayTexture = true, this.image = { data: A, width: e, height: t, depth: i }, this.magFilter = me, this.minFilter = me, this.wrapR = kt, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
  }
  copy(A) {
    return super.copy(A), this.wrapR = A.wrapR, this;
  }
  addLayerUpdate(A) {
    this.layerUpdates.add(A);
  }
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
};
var Ja = class extends Je {
  constructor(A = null, e = 1, t = 1, i = 1) {
    super(null), this.isData3DTexture = true, this.image = { data: A, width: e, height: t, depth: i }, this.magFilter = me, this.minFilter = me, this.wrapR = kt, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1;
  }
  copy(A) {
    return super.copy(A), this.wrapR = A.wrapR, this;
  }
};
var Re = class o6 {
  static {
    o6.prototype.isMatrix4 = true;
  }
  constructor(A, e, t, i, n, a, f, r, P, s, p, K, U, w, l, R) {
    this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], A !== void 0 && this.set(A, e, t, i, n, a, f, r, P, s, p, K, U, w, l, R);
  }
  set(A, e, t, i, n, a, f, r, P, s, p, K, U, w, l, R) {
    let F = this.elements;
    return F[0] = A, F[4] = e, F[8] = t, F[12] = i, F[1] = n, F[5] = a, F[9] = f, F[13] = r, F[2] = P, F[6] = s, F[10] = p, F[14] = K, F[3] = U, F[7] = w, F[11] = l, F[15] = R, this;
  }
  identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  clone() {
    return new o6().fromArray(this.elements);
  }
  copy(A) {
    let e = this.elements, t = A.elements;
    return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e[9] = t[9], e[10] = t[10], e[11] = t[11], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15], this;
  }
  copyPosition(A) {
    let e = this.elements, t = A.elements;
    return e[12] = t[12], e[13] = t[13], e[14] = t[14], this;
  }
  setFromMatrix3(A) {
    let e = A.elements;
    return this.set(e[0], e[3], e[6], 0, e[1], e[4], e[7], 0, e[2], e[5], e[8], 0, 0, 0, 0, 1), this;
  }
  extractBasis(A, e, t) {
    return this.determinantAffine() === 0 ? (A.set(1, 0, 0), e.set(0, 1, 0), t.set(0, 0, 1), this) : (A.setFromMatrixColumn(this, 0), e.setFromMatrixColumn(this, 1), t.setFromMatrixColumn(this, 2), this);
  }
  makeBasis(A, e, t) {
    return this.set(A.x, e.x, t.x, 0, A.y, e.y, t.y, 0, A.z, e.z, t.z, 0, 0, 0, 0, 1), this;
  }
  extractRotation(A) {
    if (A.determinantAffine() === 0) return this.identity();
    let e = this.elements, t = A.elements, i = 1 / oi.setFromMatrixColumn(A, 0).length(), n = 1 / oi.setFromMatrixColumn(A, 1).length(), a = 1 / oi.setFromMatrixColumn(A, 2).length();
    return e[0] = t[0] * i, e[1] = t[1] * i, e[2] = t[2] * i, e[3] = 0, e[4] = t[4] * n, e[5] = t[5] * n, e[6] = t[6] * n, e[7] = 0, e[8] = t[8] * a, e[9] = t[9] * a, e[10] = t[10] * a, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
  }
  makeRotationFromEuler(A) {
    let e = this.elements, t = A.x, i = A.y, n = A.z, a = Math.cos(t), f = Math.sin(t), r = Math.cos(i), P = Math.sin(i), s = Math.cos(n), p = Math.sin(n);
    if (A.order === "XYZ") {
      let K = a * s, U = a * p, w = f * s, l = f * p;
      e[0] = r * s, e[4] = -r * p, e[8] = P, e[1] = U + w * P, e[5] = K - l * P, e[9] = -f * r, e[2] = l - K * P, e[6] = w + U * P, e[10] = a * r;
    } else if (A.order === "YXZ") {
      let K = r * s, U = r * p, w = P * s, l = P * p;
      e[0] = K + l * f, e[4] = w * f - U, e[8] = a * P, e[1] = a * p, e[5] = a * s, e[9] = -f, e[2] = U * f - w, e[6] = l + K * f, e[10] = a * r;
    } else if (A.order === "ZXY") {
      let K = r * s, U = r * p, w = P * s, l = P * p;
      e[0] = K - l * f, e[4] = -a * p, e[8] = w + U * f, e[1] = U + w * f, e[5] = a * s, e[9] = l - K * f, e[2] = -a * P, e[6] = f, e[10] = a * r;
    } else if (A.order === "ZYX") {
      let K = a * s, U = a * p, w = f * s, l = f * p;
      e[0] = r * s, e[4] = w * P - U, e[8] = K * P + l, e[1] = r * p, e[5] = l * P + K, e[9] = U * P - w, e[2] = -P, e[6] = f * r, e[10] = a * r;
    } else if (A.order === "YZX") {
      let K = a * r, U = a * P, w = f * r, l = f * P;
      e[0] = r * s, e[4] = l - K * p, e[8] = w * p + U, e[1] = p, e[5] = a * s, e[9] = -f * s, e[2] = -P * s, e[6] = U * p + w, e[10] = K - l * p;
    } else if (A.order === "XZY") {
      let K = a * r, U = a * P, w = f * r, l = f * P;
      e[0] = r * s, e[4] = -p, e[8] = P * s, e[1] = K * p + l, e[5] = a * s, e[9] = U * p - w, e[2] = w * p - U, e[6] = f * s, e[10] = l * p + K;
    }
    return e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
  }
  makeRotationFromQuaternion(A) {
    return this.compose(_0, A, $0);
  }
  lookAt(A, e, t) {
    let i = this.elements;
    return ot.subVectors(A, e), ot.lengthSq() === 0 && (ot.z = 1), ot.normalize(), Uo.crossVectors(t, ot), Uo.lengthSq() === 0 && (Math.abs(t.z) === 1 ? ot.x += 1e-4 : ot.z += 1e-4, ot.normalize(), Uo.crossVectors(t, ot)), Uo.normalize(), ra.crossVectors(ot, Uo), i[0] = Uo.x, i[4] = ra.x, i[8] = ot.x, i[1] = Uo.y, i[5] = ra.y, i[9] = ot.y, i[2] = Uo.z, i[6] = ra.z, i[10] = ot.z, this;
  }
  multiply(A) {
    return this.multiplyMatrices(this, A);
  }
  premultiply(A) {
    return this.multiplyMatrices(A, this);
  }
  multiplyMatrices(A, e) {
    let t = A.elements, i = e.elements, n = this.elements, a = t[0], f = t[4], r = t[8], P = t[12], s = t[1], p = t[5], K = t[9], U = t[13], w = t[2], l = t[6], R = t[10], F = t[14], u = t[3], D = t[7], v = t[11], x = t[15], h = i[0], S = i[4], g = i[8], B = i[12], N = i[1], O = i[5], G = i[9], M = i[13], m = i[2], k = i[6], W = i[10], V = i[14], aA = i[3], q = i[7], AA = i[11], oA = i[15];
    return n[0] = a * h + f * N + r * m + P * aA, n[4] = a * S + f * O + r * k + P * q, n[8] = a * g + f * G + r * W + P * AA, n[12] = a * B + f * M + r * V + P * oA, n[1] = s * h + p * N + K * m + U * aA, n[5] = s * S + p * O + K * k + U * q, n[9] = s * g + p * G + K * W + U * AA, n[13] = s * B + p * M + K * V + U * oA, n[2] = w * h + l * N + R * m + F * aA, n[6] = w * S + l * O + R * k + F * q, n[10] = w * g + l * G + R * W + F * AA, n[14] = w * B + l * M + R * V + F * oA, n[3] = u * h + D * N + v * m + x * aA, n[7] = u * S + D * O + v * k + x * q, n[11] = u * g + D * G + v * W + x * AA, n[15] = u * B + D * M + v * V + x * oA, this;
  }
  multiplyScalar(A) {
    let e = this.elements;
    return e[0] *= A, e[4] *= A, e[8] *= A, e[12] *= A, e[1] *= A, e[5] *= A, e[9] *= A, e[13] *= A, e[2] *= A, e[6] *= A, e[10] *= A, e[14] *= A, e[3] *= A, e[7] *= A, e[11] *= A, e[15] *= A, this;
  }
  determinant() {
    let A = this.elements, e = A[0], t = A[4], i = A[8], n = A[12], a = A[1], f = A[5], r = A[9], P = A[13], s = A[2], p = A[6], K = A[10], U = A[14], w = A[3], l = A[7], R = A[11], F = A[15], u = r * U - P * K, D = f * U - P * p, v = f * K - r * p, x = a * U - P * s, h = a * K - r * s, S = a * p - f * s;
    return e * (l * u - R * D + F * v) - t * (w * u - R * x + F * h) + i * (w * D - l * x + F * S) - n * (w * v - l * h + R * S);
  }
  determinantAffine() {
    let A = this.elements, e = A[0], t = A[4], i = A[8], n = A[1], a = A[5], f = A[9], r = A[2], P = A[6], s = A[10];
    return e * (a * s - f * P) - t * (n * s - f * r) + i * (n * P - a * r);
  }
  transpose() {
    let A = this.elements, e;
    return e = A[1], A[1] = A[4], A[4] = e, e = A[2], A[2] = A[8], A[8] = e, e = A[6], A[6] = A[9], A[9] = e, e = A[3], A[3] = A[12], A[12] = e, e = A[7], A[7] = A[13], A[13] = e, e = A[11], A[11] = A[14], A[14] = e, this;
  }
  setPosition(A, e, t) {
    let i = this.elements;
    return A.isVector3 ? (i[12] = A.x, i[13] = A.y, i[14] = A.z) : (i[12] = A, i[13] = e, i[14] = t), this;
  }
  invert() {
    let A = this.elements, e = A[0], t = A[1], i = A[2], n = A[3], a = A[4], f = A[5], r = A[6], P = A[7], s = A[8], p = A[9], K = A[10], U = A[11], w = A[12], l = A[13], R = A[14], F = A[15], u = e * f - t * a, D = e * r - i * a, v = e * P - n * a, x = t * r - i * f, h = t * P - n * f, S = i * P - n * r, g = s * l - p * w, B = s * R - K * w, N = s * F - U * w, O = p * R - K * l, G = p * F - U * l, M = K * F - U * R, m = u * M - D * G + v * O + x * N - h * B + S * g;
    if (m === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    let k = 1 / m;
    return A[0] = (f * M - r * G + P * O) * k, A[1] = (i * G - t * M - n * O) * k, A[2] = (l * S - R * h + F * x) * k, A[3] = (K * h - p * S - U * x) * k, A[4] = (r * N - a * M - P * B) * k, A[5] = (e * M - i * N + n * B) * k, A[6] = (R * v - w * S - F * D) * k, A[7] = (s * S - K * v + U * D) * k, A[8] = (a * G - f * N + P * g) * k, A[9] = (t * N - e * G - n * g) * k, A[10] = (w * h - l * v + F * u) * k, A[11] = (p * v - s * h - U * u) * k, A[12] = (f * B - a * O - r * g) * k, A[13] = (e * O - t * B + i * g) * k, A[14] = (l * D - w * x - R * u) * k, A[15] = (s * x - p * D + K * u) * k, this;
  }
  scale(A) {
    let e = this.elements, t = A.x, i = A.y, n = A.z;
    return e[0] *= t, e[4] *= i, e[8] *= n, e[1] *= t, e[5] *= i, e[9] *= n, e[2] *= t, e[6] *= i, e[10] *= n, e[3] *= t, e[7] *= i, e[11] *= n, this;
  }
  getMaxScaleOnAxis() {
    let A = this.elements, e = A[0] * A[0] + A[1] * A[1] + A[2] * A[2], t = A[4] * A[4] + A[5] * A[5] + A[6] * A[6], i = A[8] * A[8] + A[9] * A[9] + A[10] * A[10];
    return Math.sqrt(Math.max(e, t, i));
  }
  makeTranslation(A, e, t) {
    return A.isVector3 ? this.set(1, 0, 0, A.x, 0, 1, 0, A.y, 0, 0, 1, A.z, 0, 0, 0, 1) : this.set(1, 0, 0, A, 0, 1, 0, e, 0, 0, 1, t, 0, 0, 0, 1), this;
  }
  makeRotationX(A) {
    let e = Math.cos(A), t = Math.sin(A);
    return this.set(1, 0, 0, 0, 0, e, -t, 0, 0, t, e, 0, 0, 0, 0, 1), this;
  }
  makeRotationY(A) {
    let e = Math.cos(A), t = Math.sin(A);
    return this.set(e, 0, t, 0, 0, 1, 0, 0, -t, 0, e, 0, 0, 0, 0, 1), this;
  }
  makeRotationZ(A) {
    let e = Math.cos(A), t = Math.sin(A);
    return this.set(e, -t, 0, 0, t, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  makeRotationAxis(A, e) {
    let t = Math.cos(e), i = Math.sin(e), n = 1 - t, a = A.x, f = A.y, r = A.z, P = n * a, s = n * f;
    return this.set(P * a + t, P * f - i * r, P * r + i * f, 0, P * f + i * r, s * f + t, s * r - i * a, 0, P * r - i * f, s * r + i * a, n * r * r + t, 0, 0, 0, 0, 1), this;
  }
  makeScale(A, e, t) {
    return this.set(A, 0, 0, 0, 0, e, 0, 0, 0, 0, t, 0, 0, 0, 0, 1), this;
  }
  makeShear(A, e, t, i, n, a) {
    return this.set(1, t, n, 0, A, 1, a, 0, e, i, 1, 0, 0, 0, 0, 1), this;
  }
  compose(A, e, t) {
    let i = this.elements, n = e._x, a = e._y, f = e._z, r = e._w, P = n + n, s = a + a, p = f + f, K = n * P, U = n * s, w = n * p, l = a * s, R = a * p, F = f * p, u = r * P, D = r * s, v = r * p, x = t.x, h = t.y, S = t.z;
    return i[0] = (1 - (l + F)) * x, i[1] = (U + v) * x, i[2] = (w - D) * x, i[3] = 0, i[4] = (U - v) * h, i[5] = (1 - (K + F)) * h, i[6] = (R + u) * h, i[7] = 0, i[8] = (w + D) * S, i[9] = (R - u) * S, i[10] = (1 - (K + l)) * S, i[11] = 0, i[12] = A.x, i[13] = A.y, i[14] = A.z, i[15] = 1, this;
  }
  decompose(A, e, t) {
    let i = this.elements;
    A.x = i[12], A.y = i[13], A.z = i[14];
    let n = this.determinantAffine();
    if (n === 0) return t.set(1, 1, 1), e.identity(), this;
    let a = oi.set(i[0], i[1], i[2]).length(), f = oi.set(i[4], i[5], i[6]).length(), r = oi.set(i[8], i[9], i[10]).length();
    n < 0 && (a = -a), vt.copy(this);
    let P = 1 / a, s = 1 / f, p = 1 / r;
    return vt.elements[0] *= P, vt.elements[1] *= P, vt.elements[2] *= P, vt.elements[4] *= s, vt.elements[5] *= s, vt.elements[6] *= s, vt.elements[8] *= p, vt.elements[9] *= p, vt.elements[10] *= p, e.setFromRotationMatrix(vt), t.x = a, t.y = f, t.z = r, this;
  }
  makePerspective(A, e, t, i, n, a, f = ht, r = false) {
    let P = this.elements, s = 2 * n / (e - A), p = 2 * n / (t - i), K = (e + A) / (e - A), U = (t + i) / (t - i), w, l;
    if (r) w = n / (a - n), l = a * n / (a - n);
    else if (f === ht) w = -(a + n) / (a - n), l = -2 * a * n / (a - n);
    else if (f === xi) w = -a / (a - n), l = -a * n / (a - n);
    else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + f);
    return P[0] = s, P[4] = 0, P[8] = K, P[12] = 0, P[1] = 0, P[5] = p, P[9] = U, P[13] = 0, P[2] = 0, P[6] = 0, P[10] = w, P[14] = l, P[3] = 0, P[7] = 0, P[11] = -1, P[15] = 0, this;
  }
  makeOrthographic(A, e, t, i, n, a, f = ht, r = false) {
    let P = this.elements, s = 2 / (e - A), p = 2 / (t - i), K = -(e + A) / (e - A), U = -(t + i) / (t - i), w, l;
    if (r) w = 1 / (a - n), l = a / (a - n);
    else if (f === ht) w = -2 / (a - n), l = -(a + n) / (a - n);
    else if (f === xi) w = -1 / (a - n), l = -n / (a - n);
    else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + f);
    return P[0] = s, P[4] = 0, P[8] = 0, P[12] = K, P[1] = 0, P[5] = p, P[9] = 0, P[13] = U, P[2] = 0, P[6] = 0, P[10] = w, P[14] = l, P[3] = 0, P[7] = 0, P[11] = 0, P[15] = 1, this;
  }
  equals(A) {
    let e = this.elements, t = A.elements;
    for (let i = 0; i < 16; i++) if (e[i] !== t[i]) return false;
    return true;
  }
  fromArray(A, e = 0) {
    for (let t = 0; t < 16; t++) this.elements[t] = A[t + e];
    return this;
  }
  toArray(A = [], e = 0) {
    let t = this.elements;
    return A[e] = t[0], A[e + 1] = t[1], A[e + 2] = t[2], A[e + 3] = t[3], A[e + 4] = t[4], A[e + 5] = t[5], A[e + 6] = t[6], A[e + 7] = t[7], A[e + 8] = t[8], A[e + 9] = t[9], A[e + 10] = t[10], A[e + 11] = t[11], A[e + 12] = t[12], A[e + 13] = t[13], A[e + 14] = t[14], A[e + 15] = t[15], A;
  }
}, oi = new j(), vt = new Re(), _0 = new j(0, 0, 0), $0 = new j(1, 1, 1), Uo = new j(), ra = new j(), ot = new j(), _P = new Re(), $P = new rt(), no = class o7 {
  constructor(A = 0, e = 0, t = 0, i = o7.DEFAULT_ORDER) {
    this.isEuler = true, this._x = A, this._y = e, this._z = t, this._order = i;
  }
  get x() {
    return this._x;
  }
  set x(A) {
    this._x = A, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(A) {
    this._y = A, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(A) {
    this._z = A, this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(A) {
    this._order = A, this._onChangeCallback();
  }
  set(A, e, t, i = this._order) {
    return this._x = A, this._y = e, this._z = t, this._order = i, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(A) {
    return this._x = A._x, this._y = A._y, this._z = A._z, this._order = A._order, this._onChangeCallback(), this;
  }
  setFromRotationMatrix(A, e = this._order, t = true) {
    let i = A.elements, n = i[0], a = i[4], f = i[8], r = i[1], P = i[5], s = i[9], p = i[2], K = i[6], U = i[10];
    switch (e) {
      case "XYZ":
        this._y = Math.asin(LA(f, -1, 1)), Math.abs(f) < 0.9999999 ? (this._x = Math.atan2(-s, U), this._z = Math.atan2(-a, n)) : (this._x = Math.atan2(K, P), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-LA(s, -1, 1)), Math.abs(s) < 0.9999999 ? (this._y = Math.atan2(f, U), this._z = Math.atan2(r, P)) : (this._y = Math.atan2(-p, n), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(LA(K, -1, 1)), Math.abs(K) < 0.9999999 ? (this._y = Math.atan2(-p, U), this._z = Math.atan2(-a, P)) : (this._y = 0, this._z = Math.atan2(r, n));
        break;
      case "ZYX":
        this._y = Math.asin(-LA(p, -1, 1)), Math.abs(p) < 0.9999999 ? (this._x = Math.atan2(K, U), this._z = Math.atan2(r, n)) : (this._x = 0, this._z = Math.atan2(-a, P));
        break;
      case "YZX":
        this._z = Math.asin(LA(r, -1, 1)), Math.abs(r) < 0.9999999 ? (this._x = Math.atan2(-s, P), this._y = Math.atan2(-p, n)) : (this._x = 0, this._y = Math.atan2(f, U));
        break;
      case "XZY":
        this._z = Math.asin(-LA(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(K, P), this._y = Math.atan2(f, n)) : (this._x = Math.atan2(-s, U), this._y = 0);
        break;
      default:
        GA("Euler: .setFromRotationMatrix() encountered an unknown order: " + e);
    }
    return this._order = e, t === true && this._onChangeCallback(), this;
  }
  setFromQuaternion(A, e, t) {
    return _P.makeRotationFromQuaternion(A), this.setFromRotationMatrix(_P, e, t);
  }
  setFromVector3(A, e = this._order) {
    return this.set(A.x, A.y, A.z, e);
  }
  reorder(A) {
    return $P.setFromEuler(this), this.setFromQuaternion($P, A);
  }
  equals(A) {
    return A._x === this._x && A._y === this._y && A._z === this._z && A._order === this._order;
  }
  fromArray(A) {
    return this._x = A[0], this._y = A[1], this._z = A[2], A[3] !== void 0 && (this._order = A[3]), this._onChangeCallback(), this;
  }
  toArray(A = [], e = 0) {
    return A[e] = this._x, A[e + 1] = this._y, A[e + 2] = this._z, A[e + 3] = this._order, A;
  }
  _onChange(A) {
    return this._onChangeCallback = A, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
};
no.DEFAULT_ORDER = "XYZ";
var ji = class {
  constructor() {
    this.mask = 1;
  }
  set(A) {
    this.mask = (1 << A | 0) >>> 0;
  }
  enable(A) {
    this.mask |= 1 << A | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(A) {
    this.mask ^= 1 << A | 0;
  }
  disable(A) {
    this.mask &= ~(1 << A | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(A) {
    return (this.mask & A.mask) !== 0;
  }
  isEnabled(A) {
    return (this.mask & (1 << A | 0)) !== 0;
  }
}, Ap = 0, AK = new j(), ii = new rt(), _t = new Re(), Pa = new j(), Yi = new j(), ep = new j(), tp = new rt(), eK = new j(1, 0, 0), tK = new j(0, 1, 0), oK = new j(0, 0, 1), iK = { type: "added" }, op = { type: "removed" }, ni = { type: "childadded", child: null }, Lr = { type: "childremoved", child: null }, Xe = class o8 extends Dt {
  constructor() {
    super(), this.isObject3D = true, Object.defineProperty(this, "id", { value: Ap++ }), this.uuid = bt(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = o8.DEFAULT_UP.clone();
    let A = new j(), e = new no(), t = new rt(), i = new j(1, 1, 1);
    function n() {
      t.setFromEuler(e, false);
    }
    function a() {
      e.setFromQuaternion(t, void 0, false);
    }
    e._onChange(n), t._onChange(a), Object.defineProperties(this, { position: { configurable: true, enumerable: true, value: A }, rotation: { configurable: true, enumerable: true, value: e }, quaternion: { configurable: true, enumerable: true, value: t }, scale: { configurable: true, enumerable: true, value: i }, modelViewMatrix: { value: new Re() }, normalMatrix: { value: new VA() } }), this.matrix = new Re(), this.matrixWorld = new Re(), this.matrixAutoUpdate = o8.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = o8.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = false, this.layers = new ji(), this.visible = true, this.castShadow = false, this.receiveShadow = false, this.frustumCulled = true, this.renderOrder = 0, this.animations = [], this.customDepthMaterial = void 0, this.customDistanceMaterial = void 0, this.static = false, this.userData = {}, this.pivot = null;
  }
  onBeforeShadow() {
  }
  onAfterShadow() {
  }
  onBeforeRender() {
  }
  onAfterRender() {
  }
  applyMatrix4(A) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(A), this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(A) {
    return this.quaternion.premultiply(A), this;
  }
  setRotationFromAxisAngle(A, e) {
    this.quaternion.setFromAxisAngle(A, e);
  }
  setRotationFromEuler(A) {
    this.quaternion.setFromEuler(A, true);
  }
  setRotationFromMatrix(A) {
    this.quaternion.setFromRotationMatrix(A);
  }
  setRotationFromQuaternion(A) {
    this.quaternion.copy(A);
  }
  rotateOnAxis(A, e) {
    return ii.setFromAxisAngle(A, e), this.quaternion.multiply(ii), this;
  }
  rotateOnWorldAxis(A, e) {
    return ii.setFromAxisAngle(A, e), this.quaternion.premultiply(ii), this;
  }
  rotateX(A) {
    return this.rotateOnAxis(eK, A);
  }
  rotateY(A) {
    return this.rotateOnAxis(tK, A);
  }
  rotateZ(A) {
    return this.rotateOnAxis(oK, A);
  }
  translateOnAxis(A, e) {
    return AK.copy(A).applyQuaternion(this.quaternion), this.position.add(AK.multiplyScalar(e)), this;
  }
  translateX(A) {
    return this.translateOnAxis(eK, A);
  }
  translateY(A) {
    return this.translateOnAxis(tK, A);
  }
  translateZ(A) {
    return this.translateOnAxis(oK, A);
  }
  localToWorld(A) {
    return this.updateWorldMatrix(true, false), A.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(A) {
    return this.updateWorldMatrix(true, false), A.applyMatrix4(_t.copy(this.matrixWorld).invert());
  }
  lookAt(A, e, t) {
    A.isVector3 ? Pa.copy(A) : Pa.set(A, e, t);
    let i = this.parent;
    this.updateWorldMatrix(true, false), Yi.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? _t.lookAt(Yi, Pa, this.up) : _t.lookAt(Pa, Yi, this.up), this.quaternion.setFromRotationMatrix(_t), i && (_t.extractRotation(i.matrixWorld), ii.setFromRotationMatrix(_t), this.quaternion.premultiply(ii.invert()));
  }
  add(A) {
    if (arguments.length > 1) {
      for (let e = 0; e < arguments.length; e++) this.add(arguments[e]);
      return this;
    }
    return A === this ? (bA("Object3D.add: object can't be added as a child of itself.", A), this) : (A && A.isObject3D ? (A.removeFromParent(), A.parent = this, this.children.push(A), A.dispatchEvent(iK), ni.child = A, this.dispatchEvent(ni), ni.child = null) : bA("Object3D.add: object not an instance of THREE.Object3D.", A), this);
  }
  remove(A) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++) this.remove(arguments[t]);
      return this;
    }
    let e = this.children.indexOf(A);
    return e !== -1 && (A.parent = null, this.children.splice(e, 1), A.dispatchEvent(op), Lr.child = A, this.dispatchEvent(Lr), Lr.child = null), this;
  }
  removeFromParent() {
    let A = this.parent;
    return A !== null && A.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(A) {
    return this.updateWorldMatrix(true, false), _t.copy(this.matrixWorld).invert(), A.parent !== null && (A.parent.updateWorldMatrix(true, false), _t.multiply(A.parent.matrixWorld)), A.applyMatrix4(_t), A.removeFromParent(), A.parent = this, this.children.push(A), A.updateWorldMatrix(false, true), A.dispatchEvent(iK), ni.child = A, this.dispatchEvent(ni), ni.child = null, this;
  }
  getObjectById(A) {
    return this.getObjectByProperty("id", A);
  }
  getObjectByName(A) {
    return this.getObjectByProperty("name", A);
  }
  getObjectByProperty(A, e) {
    if (this[A] === e) return this;
    for (let t = 0, i = this.children.length; t < i; t++) {
      let a = this.children[t].getObjectByProperty(A, e);
      if (a !== void 0) return a;
    }
  }
  getObjectsByProperty(A, e, t = []) {
    this[A] === e && t.push(this);
    let i = this.children;
    for (let n = 0, a = i.length; n < a; n++) i[n].getObjectsByProperty(A, e, t);
    return t;
  }
  getWorldPosition(A) {
    return this.updateWorldMatrix(true, false), A.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(A) {
    return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(Yi, A, ep), A;
  }
  getWorldScale(A) {
    return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(Yi, tp, A), A;
  }
  getWorldDirection(A) {
    this.updateWorldMatrix(true, false);
    let e = this.matrixWorld.elements;
    return A.set(e[8], e[9], e[10]).normalize();
  }
  raycast() {
  }
  intersectsFrustum() {
  }
  traverse(A) {
    A(this);
    let e = this.children;
    for (let t = 0, i = e.length; t < i; t++) e[t].traverse(A);
  }
  traverseVisible(A) {
    if (this.visible === false) return;
    A(this);
    let e = this.children;
    for (let t = 0, i = e.length; t < i; t++) e[t].traverseVisible(A);
  }
  traverseAncestors(A) {
    let e = this.parent;
    e !== null && (A(e), e.traverseAncestors(A));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale);
    let A = this.pivot;
    if (A !== null) {
      let e = A.x, t = A.y, i = A.z, n = this.matrix.elements;
      n[12] += e - n[0] * e - n[4] * t - n[8] * i, n[13] += t - n[1] * e - n[5] * t - n[9] * i, n[14] += i - n[2] * e - n[6] * t - n[10] * i;
    }
    this.matrixWorldNeedsUpdate = true;
  }
  updateMatrixWorld(A) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || A) && (this.matrixWorldAutoUpdate === true && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = false, A = true);
    let e = this.children;
    for (let t = 0, i = e.length; t < i; t++) e[t].updateMatrixWorld(A);
  }
  updateWorldMatrix(A, e, t = false) {
    let i = this.parent;
    if (A === true && i !== null && i.updateWorldMatrix(true, false), this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || t) && (this.matrixWorldAutoUpdate === true && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = false, t = true), e === true) {
      let n = this.children;
      for (let a = 0, f = n.length; a < f; a++) n[a].updateWorldMatrix(false, true, t);
    }
  }
  toJSON(A) {
    let e = A === void 0 || typeof A == "string", t = {};
    e && (A = { geometries: {}, materials: {}, textures: {}, images: {}, shapes: {}, skeletons: {}, animations: {}, nodes: {} }, t.metadata = { version: 4.7, type: "Object", generator: "Object3D.toJSON" });
    let i = {};
    i.uuid = this.uuid, i.type = this.type, i.name = this.name, i.castShadow = this.castShadow, i.receiveShadow = this.receiveShadow, i.visible = this.visible, i.frustumCulled = this.frustumCulled, i.renderOrder = this.renderOrder, i.static = this.static, i.matrixAutoUpdate = this.matrixAutoUpdate, Object.keys(this.userData).length > 0 && (i.userData = this.userData), i.layers = this.layers.mask, i.matrix = this.matrix.toArray(), i.up = this.up.toArray(), this.pivot !== null && (i.pivot = this.pivot.toArray()), this.morphTargetDictionary !== void 0 && (i.morphTargetDictionary = Object.assign({}, this.morphTargetDictionary)), this.morphTargetInfluences !== void 0 && (i.morphTargetInfluences = this.morphTargetInfluences.slice()), this.isInstancedMesh && (i.type = "InstancedMesh", i.count = this.count, i.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (i.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (i.type = "BatchedMesh", i.perObjectFrustumCulled = this.perObjectFrustumCulled, i.sortObjects = this.sortObjects, i.drawRanges = this._drawRanges, i.reservedRanges = this._reservedRanges, i.geometryInfo = this._geometryInfo.map((f) => ({ ...f, boundingBox: f.boundingBox ? f.boundingBox.toJSON() : void 0, boundingSphere: f.boundingSphere ? f.boundingSphere.toJSON() : void 0 })), i.instanceInfo = this._instanceInfo.map((f) => ({ ...f })), i.availableInstanceIds = this._availableInstanceIds.slice(), i.availableGeometryIds = this._availableGeometryIds.slice(), i.nextIndexStart = this._nextIndexStart, i.nextVertexStart = this._nextVertexStart, i.geometryCount = this._geometryCount, i.maxInstanceCount = this._maxInstanceCount, i.maxVertexCount = this._maxVertexCount, i.maxIndexCount = this._maxIndexCount, i.geometryInitialized = this._geometryInitialized, i.matricesTexture = this._matricesTexture.toJSON(A), i.indirectTexture = this._indirectTexture.toJSON(A), this._colorsTexture !== null && (i.colorsTexture = this._colorsTexture.toJSON(A)), this.boundingSphere !== null && (i.boundingSphere = this.boundingSphere.toJSON()), this.boundingBox !== null && (i.boundingBox = this.boundingBox.toJSON()));
    function n(f, r) {
      return f[r.uuid] === void 0 && (f[r.uuid] = r.toJSON(A)), r.uuid;
    }
    if (this.isScene) this.background && (this.background.isColor ? i.background = this.background.toJSON() : this.background.isTexture && (i.background = this.background.toJSON(A).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== true && (i.environment = this.environment.toJSON(A).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      i.geometry = n(A.geometries, this.geometry);
      let f = this.geometry.parameters;
      if (f !== void 0 && f.shapes !== void 0) {
        let r = f.shapes;
        if (Array.isArray(r)) for (let P = 0, s = r.length; P < s; P++) {
          let p = r[P];
          n(A.shapes, p);
        }
        else n(A.shapes, r);
      }
    }
    if (this.isSkinnedMesh && (i.bindMode = this.bindMode, i.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (n(A.skeletons, this.skeleton), i.skeleton = this.skeleton.uuid)), this.material !== void 0) if (Array.isArray(this.material)) {
      let f = [];
      for (let r = 0, P = this.material.length; r < P; r++) f.push(n(A.materials, this.material[r]));
      i.material = f;
    } else i.material = n(A.materials, this.material);
    if (this.children.length > 0) {
      i.children = [];
      for (let f = 0; f < this.children.length; f++) i.children.push(this.children[f].toJSON(A).object);
    }
    if (this.animations.length > 0) {
      i.animations = [];
      for (let f = 0; f < this.animations.length; f++) {
        let r = this.animations[f];
        i.animations.push(n(A.animations, r));
      }
    }
    if (e) {
      let f = a(A.geometries), r = a(A.materials), P = a(A.textures), s = a(A.images), p = a(A.shapes), K = a(A.skeletons), U = a(A.animations), w = a(A.nodes);
      f.length > 0 && (t.geometries = f), r.length > 0 && (t.materials = r), P.length > 0 && (t.textures = P), s.length > 0 && (t.images = s), p.length > 0 && (t.shapes = p), K.length > 0 && (t.skeletons = K), U.length > 0 && (t.animations = U), w.length > 0 && (t.nodes = w);
    }
    return t.object = i, t;
    function a(f) {
      let r = [];
      for (let P in f) {
        let s = f[P];
        delete s.metadata, r.push(s);
      }
      return r;
    }
  }
  clone(A) {
    return new this.constructor().copy(this, A);
  }
  copy(A, e = true) {
    if (this.name = A.name, this.up.copy(A.up), this.position.copy(A.position), this.rotation.order = A.rotation.order, this.quaternion.copy(A.quaternion), this.scale.copy(A.scale), this.pivot = A.pivot !== null ? A.pivot.clone() : null, this.matrix.copy(A.matrix), this.matrixWorld.copy(A.matrixWorld), this.matrixAutoUpdate = A.matrixAutoUpdate, this.matrixWorldAutoUpdate = A.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = A.matrixWorldNeedsUpdate, this.layers.mask = A.layers.mask, this.visible = A.visible, this.castShadow = A.castShadow, this.receiveShadow = A.receiveShadow, this.frustumCulled = A.frustumCulled, this.renderOrder = A.renderOrder, this.static = A.static, this.animations = A.animations.slice(), this.userData = JSON.parse(JSON.stringify(A.userData)), e === true) for (let t = 0; t < A.children.length; t++) {
      let i = A.children[t];
      this.add(i.clone());
    }
    return this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
};
Xe.DEFAULT_UP = new j(0, 1, 0);
Xe.DEFAULT_MATRIX_AUTO_UPDATE = true;
Xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = true;
var YA = class extends Xe {
  constructor() {
    super(), this.isGroup = true, this.type = "Group";
  }
}, ip = { type: "move" }, Si = class {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new YA(), this._hand.matrixAutoUpdate = false, this._hand.visible = false, this._hand.joints = {}, this._hand.inputState = { pinching: false }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new YA(), this._targetRay.matrixAutoUpdate = false, this._targetRay.visible = false, this._targetRay.hasLinearVelocity = false, this._targetRay.linearVelocity = new j(), this._targetRay.hasAngularVelocity = false, this._targetRay.angularVelocity = new j()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new YA(), this._grip.matrixAutoUpdate = false, this._grip.visible = false, this._grip.hasLinearVelocity = false, this._grip.linearVelocity = new j(), this._grip.hasAngularVelocity = false, this._grip.angularVelocity = new j(), this._grip.eventsEnabled = false), this._grip;
  }
  dispatchEvent(A) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(A), this._grip !== null && this._grip.dispatchEvent(A), this._hand !== null && this._hand.dispatchEvent(A), this;
  }
  connect(A) {
    if (A && A.hand) {
      let e = this._hand;
      if (e) for (let t of A.hand.values()) this._getHandJoint(e, t);
    }
    return this.dispatchEvent({ type: "connected", data: A }), this;
  }
  disconnect(A) {
    return this.dispatchEvent({ type: "disconnected", data: A }), this._targetRay !== null && (this._targetRay.visible = false), this._grip !== null && (this._grip.visible = false), this._hand !== null && (this._hand.visible = false), this;
  }
  update(A, e, t) {
    let i = null, n = null, a = null, f = this._targetRay, r = this._grip, P = this._hand;
    if (A && e.session.visibilityState !== "visible-blurred") {
      if (P && A.hand) {
        a = true;
        for (let l of A.hand.values()) {
          let R = e.getJointPose(l, t), F = this._getHandJoint(P, l);
          R !== null && (F.matrix.fromArray(R.transform.matrix), F.matrix.decompose(F.position, F.rotation, F.scale), F.matrixWorldNeedsUpdate = true, F.jointRadius = R.radius), F.visible = R !== null;
        }
        let s = P.joints["index-finger-tip"], p = P.joints["thumb-tip"], K = s.position.distanceTo(p.position), U = 0.02, w = 5e-3;
        P.inputState.pinching && K > U + w ? (P.inputState.pinching = false, this.dispatchEvent({ type: "pinchend", handedness: A.handedness, target: this })) : !P.inputState.pinching && K <= U - w && (P.inputState.pinching = true, this.dispatchEvent({ type: "pinchstart", handedness: A.handedness, target: this }));
      } else r !== null && A.gripSpace && (n = e.getPose(A.gripSpace, t), n !== null && (r.matrix.fromArray(n.transform.matrix), r.matrix.decompose(r.position, r.rotation, r.scale), r.matrixWorldNeedsUpdate = true, n.linearVelocity ? (r.hasLinearVelocity = true, r.linearVelocity.copy(n.linearVelocity)) : r.hasLinearVelocity = false, n.angularVelocity ? (r.hasAngularVelocity = true, r.angularVelocity.copy(n.angularVelocity)) : r.hasAngularVelocity = false, r.eventsEnabled && r.dispatchEvent({ type: "gripUpdated", data: A, target: this })));
      f !== null && (i = e.getPose(A.targetRaySpace, t), i === null && n !== null && (i = n), i !== null && (f.matrix.fromArray(i.transform.matrix), f.matrix.decompose(f.position, f.rotation, f.scale), f.matrixWorldNeedsUpdate = true, i.linearVelocity ? (f.hasLinearVelocity = true, f.linearVelocity.copy(i.linearVelocity)) : f.hasLinearVelocity = false, i.angularVelocity ? (f.hasAngularVelocity = true, f.angularVelocity.copy(i.angularVelocity)) : f.hasAngularVelocity = false, this.dispatchEvent(ip)));
    }
    return f !== null && (f.visible = i !== null), r !== null && (r.visible = n !== null), P !== null && (P.visible = a !== null), this;
  }
  _getHandJoint(A, e) {
    if (A.joints[e.jointName] === void 0) {
      let t = new YA();
      t.matrixAutoUpdate = false, t.visible = false, A.joints[e.jointName] = t, A.add(t);
    }
    return A.joints[e.jointName];
  }
}, Us = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 }, Fo = { h: 0, s: 0, l: 0 }, Ka = { h: 0, s: 0, l: 0 };
function Vr(o22, A, e) {
  return e < 0 && (e += 1), e > 1 && (e -= 1), e < 1 / 6 ? o22 + (A - o22) * 6 * e : e < 1 / 2 ? A : e < 2 / 3 ? o22 + (A - o22) * 6 * (2 / 3 - e) : o22;
}
var JA = class {
  constructor(A, e, t) {
    return this.isColor = true, this.r = 1, this.g = 1, this.b = 1, this.set(A, e, t);
  }
  set(A, e, t) {
    if (e === void 0 && t === void 0) {
      let i = A;
      i && i.isColor ? this.copy(i) : typeof i == "number" ? this.setHex(i) : typeof i == "string" && this.setStyle(i);
    } else this.setRGB(A, e, t);
    return this;
  }
  setScalar(A) {
    return this.r = A, this.g = A, this.b = A, this;
  }
  setHex(A, e = nt) {
    return A = Math.floor(A), this.r = (A >> 16 & 255) / 255, this.g = (A >> 8 & 255) / 255, this.b = (A & 255) / 255, ee.colorSpaceToWorking(this, e), this;
  }
  setRGB(A, e, t, i = ee.workingColorSpace) {
    return this.r = A, this.g = e, this.b = t, ee.colorSpaceToWorking(this, i), this;
  }
  setHSL(A, e, t, i = ee.workingColorSpace) {
    if (A = Z8(A, 1), e = LA(e, 0, 1), t = LA(t, 0, 1), e === 0) this.r = this.g = this.b = t;
    else {
      let n = t <= 0.5 ? t * (1 + e) : t + e - t * e, a = 2 * t - n;
      this.r = Vr(a, n, A + 1 / 3), this.g = Vr(a, n, A), this.b = Vr(a, n, A - 1 / 3);
    }
    return ee.colorSpaceToWorking(this, i), this;
  }
  setStyle(A, e = nt) {
    function t(n) {
      n !== void 0 && parseFloat(n) < 1 && GA("Color: Alpha component of " + A + " will be ignored.");
    }
    let i;
    if (i = /^(\w+)\(([^\)]*)\)/.exec(A)) {
      let n, a = i[1], f = i[2];
      switch (a) {
        case "rgb":
        case "rgba":
          if (n = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f)) return t(n[4]), this.setRGB(Math.min(255, parseInt(n[1], 10)) / 255, Math.min(255, parseInt(n[2], 10)) / 255, Math.min(255, parseInt(n[3], 10)) / 255, e);
          if (n = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f)) return t(n[4]), this.setRGB(Math.min(100, parseInt(n[1], 10)) / 100, Math.min(100, parseInt(n[2], 10)) / 100, Math.min(100, parseInt(n[3], 10)) / 100, e);
          break;
        case "hsl":
        case "hsla":
          if (n = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f)) return t(n[4]), this.setHSL(parseFloat(n[1]) / 360, parseFloat(n[2]) / 100, parseFloat(n[3]) / 100, e);
          break;
        default:
          GA("Color: Unknown color model " + A);
      }
    } else if (i = /^\#([A-Fa-f\d]+)$/.exec(A)) {
      let n = i[1], a = n.length;
      if (a === 3) return this.setRGB(parseInt(n.charAt(0), 16) / 15, parseInt(n.charAt(1), 16) / 15, parseInt(n.charAt(2), 16) / 15, e);
      if (a === 6) return this.setHex(parseInt(n, 16), e);
      GA("Color: Invalid hex color " + A);
    } else if (A && A.length > 0) return this.setColorName(A, e);
    return this;
  }
  setColorName(A, e = nt) {
    let t = Us[A.toLowerCase()];
    return t !== void 0 ? this.setHex(t, e) : GA("Color: Unknown color " + A), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(A) {
    return this.r = A.r, this.g = A.g, this.b = A.b, this;
  }
  copySRGBToLinear(A) {
    return this.r = io(A.r), this.g = io(A.g), this.b = io(A.b), this;
  }
  copyLinearToSRGB(A) {
    return this.r = vi(A.r), this.g = vi(A.g), this.b = vi(A.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(A = nt) {
    return ee.workingToColorSpace(ye.copy(this), A), Math.round(LA(ye.r * 255, 0, 255)) * 65536 + Math.round(LA(ye.g * 255, 0, 255)) * 256 + Math.round(LA(ye.b * 255, 0, 255));
  }
  getHexString(A = nt) {
    return ("000000" + this.getHex(A).toString(16)).slice(-6);
  }
  getHSL(A, e = ee.workingColorSpace) {
    ee.workingToColorSpace(ye.copy(this), e);
    let t = ye.r, i = ye.g, n = ye.b, a = Math.max(t, i, n), f = Math.min(t, i, n), r, P, s = (f + a) / 2;
    if (f === a) r = 0, P = 0;
    else {
      let p = a - f;
      switch (P = s <= 0.5 ? p / (a + f) : p / (2 - a - f), a) {
        case t:
          r = (i - n) / p + (i < n ? 6 : 0);
          break;
        case i:
          r = (n - t) / p + 2;
          break;
        case n:
          r = (t - i) / p + 4;
          break;
      }
      r /= 6;
    }
    return A.h = r, A.s = P, A.l = s, A;
  }
  getRGB(A, e = ee.workingColorSpace) {
    return ee.workingToColorSpace(ye.copy(this), e), A.r = ye.r, A.g = ye.g, A.b = ye.b, A;
  }
  getStyle(A = nt) {
    ee.workingToColorSpace(ye.copy(this), A);
    let e = ye.r, t = ye.g, i = ye.b;
    return A !== nt ? `color(${A} ${e.toFixed(3)} ${t.toFixed(3)} ${i.toFixed(3)})` : `rgb(${Math.round(e * 255)},${Math.round(t * 255)},${Math.round(i * 255)})`;
  }
  offsetHSL(A, e, t) {
    return this.getHSL(Fo), this.setHSL(Fo.h + A, Fo.s + e, Fo.l + t);
  }
  add(A) {
    return this.r += A.r, this.g += A.g, this.b += A.b, this;
  }
  addColors(A, e) {
    return this.r = A.r + e.r, this.g = A.g + e.g, this.b = A.b + e.b, this;
  }
  addScalar(A) {
    return this.r += A, this.g += A, this.b += A, this;
  }
  sub(A) {
    return this.r = Math.max(0, this.r - A.r), this.g = Math.max(0, this.g - A.g), this.b = Math.max(0, this.b - A.b), this;
  }
  multiply(A) {
    return this.r *= A.r, this.g *= A.g, this.b *= A.b, this;
  }
  multiplyScalar(A) {
    return this.r *= A, this.g *= A, this.b *= A, this;
  }
  lerp(A, e) {
    return this.r += (A.r - this.r) * e, this.g += (A.g - this.g) * e, this.b += (A.b - this.b) * e, this;
  }
  lerpColors(A, e, t) {
    return this.r = A.r + (e.r - A.r) * t, this.g = A.g + (e.g - A.g) * t, this.b = A.b + (e.b - A.b) * t, this;
  }
  lerpHSL(A, e) {
    this.getHSL(Fo), A.getHSL(Ka);
    let t = rn(Fo.h, Ka.h, e), i = rn(Fo.s, Ka.s, e), n = rn(Fo.l, Ka.l, e);
    return this.setHSL(t, i, n), this;
  }
  setFromVector3(A) {
    return this.r = A.x, this.g = A.y, this.b = A.z, this;
  }
  applyMatrix3(A) {
    let e = this.r, t = this.g, i = this.b, n = A.elements;
    return this.r = n[0] * e + n[3] * t + n[6] * i, this.g = n[1] * e + n[4] * t + n[7] * i, this.b = n[2] * e + n[5] * t + n[8] * i, this;
  }
  equals(A) {
    return A.r === this.r && A.g === this.g && A.b === this.b;
  }
  fromArray(A, e = 0) {
    return this.r = A[e], this.g = A[e + 1], this.b = A[e + 2], this;
  }
  toArray(A = [], e = 0) {
    return A[e] = this.r, A[e + 1] = this.g, A[e + 2] = this.b, A;
  }
  fromBufferAttribute(A, e) {
    return this.r = A.getX(e), this.g = A.getY(e), this.b = A.getZ(e), this;
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}, ye = new JA();
JA.NAMES = Us;
var cn = class extends Xe {
  constructor() {
    super(), this.isScene = true, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new no(), this.environmentIntensity = 1, this.environmentRotation = new no(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(A, e) {
    return super.copy(A, e), A.background !== null && (this.background = A.background.clone()), A.environment !== null && (this.environment = A.environment.clone()), A.fog !== null && (this.fog = A.fog.clone()), this.backgroundBlurriness = A.backgroundBlurriness, this.backgroundIntensity = A.backgroundIntensity, this.backgroundRotation.copy(A.backgroundRotation), this.environmentIntensity = A.environmentIntensity, this.environmentRotation.copy(A.environmentRotation), A.overrideMaterial !== null && (this.overrideMaterial = A.overrideMaterial.clone()), this.matrixAutoUpdate = A.matrixAutoUpdate, this;
  }
  toJSON(A) {
    let e = super.toJSON(A);
    return this.fog !== null && (e.object.fog = this.fog.toJSON()), e.object.backgroundBlurriness = this.backgroundBlurriness, e.object.backgroundIntensity = this.backgroundIntensity, e.object.backgroundRotation = this.backgroundRotation.toArray(), e.object.environmentIntensity = this.environmentIntensity, e.object.environmentRotation = this.environmentRotation.toArray(), e;
  }
}, ut = new j(), $t = new j(), Wr = new j(), Ao = new j(), ai = new j(), fi = new j(), nK = new j(), qr = new j(), Jr = new j(), Er = new j(), Zr = new pe(), Yr = new pe(), _r = new pe(), oo = class o9 {
  constructor(A = new j(), e = new j(), t = new j()) {
    this.a = A, this.b = e, this.c = t;
  }
  static getNormal(A, e, t, i) {
    i.subVectors(t, e), ut.subVectors(A, e), i.cross(ut);
    let n = i.lengthSq();
    return n > 0 ? i.multiplyScalar(1 / Math.sqrt(n)) : i.set(0, 0, 0);
  }
  static getBarycoord(A, e, t, i, n) {
    ut.subVectors(i, e), $t.subVectors(t, e), Wr.subVectors(A, e);
    let a = ut.dot(ut), f = ut.dot($t), r = ut.dot(Wr), P = $t.dot($t), s = $t.dot(Wr), p = a * P - f * f;
    if (p === 0) return n.set(0, 0, 0), null;
    let K = 1 / p, U = (P * r - f * s) * K, w = (a * s - f * r) * K;
    return n.set(1 - U - w, w, U);
  }
  static containsPoint(A, e, t, i) {
    return this.getBarycoord(A, e, t, i, Ao) === null ? false : Ao.x >= 0 && Ao.y >= 0 && Ao.x + Ao.y <= 1;
  }
  static getInterpolation(A, e, t, i, n, a, f, r) {
    return this.getBarycoord(A, e, t, i, Ao) === null ? (r.x = 0, r.y = 0, "z" in r && (r.z = 0), "w" in r && (r.w = 0), null) : (r.setScalar(0), r.addScaledVector(n, Ao.x), r.addScaledVector(a, Ao.y), r.addScaledVector(f, Ao.z), r);
  }
  static getInterpolatedAttribute(A, e, t, i, n, a) {
    return Zr.setScalar(0), Yr.setScalar(0), _r.setScalar(0), Zr.fromBufferAttribute(A, e), Yr.fromBufferAttribute(A, t), _r.fromBufferAttribute(A, i), a.setScalar(0), a.addScaledVector(Zr, n.x), a.addScaledVector(Yr, n.y), a.addScaledVector(_r, n.z), a;
  }
  static isFrontFacing(A, e, t, i) {
    return ut.subVectors(t, e), $t.subVectors(A, e), ut.cross($t).dot(i) < 0;
  }
  set(A, e, t) {
    return this.a.copy(A), this.b.copy(e), this.c.copy(t), this;
  }
  setFromPointsAndIndices(A, e, t, i) {
    return this.a.copy(A[e]), this.b.copy(A[t]), this.c.copy(A[i]), this;
  }
  setFromAttributeAndIndices(A, e, t, i) {
    return this.a.fromBufferAttribute(A, e), this.b.fromBufferAttribute(A, t), this.c.fromBufferAttribute(A, i), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(A) {
    return this.a.copy(A.a), this.b.copy(A.b), this.c.copy(A.c), this;
  }
  getArea() {
    return ut.subVectors(this.c, this.b), $t.subVectors(this.a, this.b), ut.cross($t).length() * 0.5;
  }
  getMidpoint(A) {
    return A.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(A) {
    return o9.getNormal(this.a, this.b, this.c, A);
  }
  getPlane(A) {
    return A.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(A, e) {
    return o9.getBarycoord(A, this.a, this.b, this.c, e);
  }
  getInterpolation(A, e, t, i, n) {
    return o9.getInterpolation(A, this.a, this.b, this.c, e, t, i, n);
  }
  containsPoint(A) {
    return o9.containsPoint(A, this.a, this.b, this.c);
  }
  isFrontFacing(A) {
    return o9.isFrontFacing(this.a, this.b, this.c, A);
  }
  intersectsBox(A) {
    return A.intersectsTriangle(this);
  }
  closestPointToPoint(A, e) {
    let t = this.a, i = this.b, n = this.c, a, f;
    ai.subVectors(i, t), fi.subVectors(n, t), qr.subVectors(A, t);
    let r = ai.dot(qr), P = fi.dot(qr);
    if (r <= 0 && P <= 0) return e.copy(t);
    Jr.subVectors(A, i);
    let s = ai.dot(Jr), p = fi.dot(Jr);
    if (s >= 0 && p <= s) return e.copy(i);
    let K = r * p - s * P;
    if (K <= 0 && r >= 0 && s <= 0) return a = r / (r - s), e.copy(t).addScaledVector(ai, a);
    Er.subVectors(A, n);
    let U = ai.dot(Er), w = fi.dot(Er);
    if (w >= 0 && U <= w) return e.copy(n);
    let l = U * P - r * w;
    if (l <= 0 && P >= 0 && w <= 0) return f = P / (P - w), e.copy(t).addScaledVector(fi, f);
    let R = s * w - U * p;
    if (R <= 0 && p - s >= 0 && U - w >= 0) return nK.subVectors(n, i), f = (p - s) / (p - s + (U - w)), e.copy(i).addScaledVector(nK, f);
    let F = 1 / (R + l + K);
    return a = l * F, f = K * F, e.copy(t).addScaledVector(ai, a).addScaledVector(fi, f);
  }
  equals(A) {
    return A.a.equals(this.a) && A.b.equals(this.b) && A.c.equals(this.c);
  }
}, Pt = class {
  constructor(A = new j(1 / 0, 1 / 0, 1 / 0), e = new j(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = true, this.min = A, this.max = e;
  }
  set(A, e) {
    return this.min.copy(A), this.max.copy(e), this;
  }
  setFromArray(A) {
    this.makeEmpty();
    for (let e = 0, t = A.length; e < t; e += 3) this.expandByPoint(dt.fromArray(A, e));
    return this;
  }
  setFromBufferAttribute(A) {
    this.makeEmpty();
    for (let e = 0, t = A.count; e < t; e++) this.expandByPoint(dt.fromBufferAttribute(A, e));
    return this;
  }
  setFromPoints(A) {
    this.makeEmpty();
    for (let e = 0, t = A.length; e < t; e++) this.expandByPoint(A[e]);
    return this;
  }
  setFromCenterAndSize(A, e) {
    let t = dt.copy(e).multiplyScalar(0.5);
    return this.min.copy(A).sub(t), this.max.copy(A).add(t), this;
  }
  setFromObject(A, e = false) {
    return this.makeEmpty(), this.expandByObject(A, e);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(A) {
    return this.min.copy(A.min), this.max.copy(A.max), this;
  }
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(A) {
    return this.isEmpty() ? A.set(0, 0, 0) : A.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(A) {
    return this.isEmpty() ? A.set(0, 0, 0) : A.subVectors(this.max, this.min);
  }
  expandByPoint(A) {
    return this.min.min(A), this.max.max(A), this;
  }
  expandByVector(A) {
    return this.min.sub(A), this.max.add(A), this;
  }
  expandByScalar(A) {
    return this.min.addScalar(-A), this.max.addScalar(A), this;
  }
  expandByObject(A, e = false) {
    A.updateWorldMatrix(false, false);
    let t = A.geometry;
    if (t !== void 0) {
      let n = t.getAttribute("position");
      if (e === true && n !== void 0 && A.isInstancedMesh !== true) for (let a = 0, f = n.count; a < f; a++) A.isMesh === true ? A.getVertexPosition(a, dt) : dt.fromBufferAttribute(n, a), dt.applyMatrix4(A.matrixWorld), this.expandByPoint(dt);
      else A.boundingBox !== void 0 ? (A.boundingBox === null && A.computeBoundingBox(), sa.copy(A.boundingBox)) : (t.boundingBox === null && t.computeBoundingBox(), sa.copy(t.boundingBox)), sa.applyMatrix4(A.matrixWorld), this.union(sa);
    }
    let i = A.children;
    for (let n = 0, a = i.length; n < a; n++) this.expandByObject(i[n], e);
    return this;
  }
  containsPoint(A) {
    return A.x >= this.min.x && A.x <= this.max.x && A.y >= this.min.y && A.y <= this.max.y && A.z >= this.min.z && A.z <= this.max.z;
  }
  containsBox(A) {
    return this.min.x <= A.min.x && A.max.x <= this.max.x && this.min.y <= A.min.y && A.max.y <= this.max.y && this.min.z <= A.min.z && A.max.z <= this.max.z;
  }
  getParameter(A, e) {
    return e.set((A.x - this.min.x) / (this.max.x - this.min.x), (A.y - this.min.y) / (this.max.y - this.min.y), (A.z - this.min.z) / (this.max.z - this.min.z));
  }
  intersectsBox(A) {
    return A.max.x >= this.min.x && A.min.x <= this.max.x && A.max.y >= this.min.y && A.min.y <= this.max.y && A.max.z >= this.min.z && A.min.z <= this.max.z;
  }
  intersectsSphere(A) {
    return this.clampPoint(A.center, dt), dt.distanceToSquared(A.center) <= A.radius * A.radius;
  }
  intersectsPlane(A) {
    let e, t;
    return A.normal.x > 0 ? (e = A.normal.x * this.min.x, t = A.normal.x * this.max.x) : (e = A.normal.x * this.max.x, t = A.normal.x * this.min.x), A.normal.y > 0 ? (e += A.normal.y * this.min.y, t += A.normal.y * this.max.y) : (e += A.normal.y * this.max.y, t += A.normal.y * this.min.y), A.normal.z > 0 ? (e += A.normal.z * this.min.z, t += A.normal.z * this.max.z) : (e += A.normal.z * this.max.z, t += A.normal.z * this.min.z), e <= -A.constant && t >= -A.constant;
  }
  intersectsTriangle(A) {
    if (this.isEmpty()) return false;
    this.getCenter(_i), pa.subVectors(this.max, _i), ri.subVectors(A.a, _i), Pi.subVectors(A.b, _i), Ki.subVectors(A.c, _i), Ro.subVectors(Pi, ri), wo.subVectors(Ki, Pi), Io.subVectors(ri, Ki);
    let e = [0, -Ro.z, Ro.y, 0, -wo.z, wo.y, 0, -Io.z, Io.y, Ro.z, 0, -Ro.x, wo.z, 0, -wo.x, Io.z, 0, -Io.x, -Ro.y, Ro.x, 0, -wo.y, wo.x, 0, -Io.y, Io.x, 0];
    return !$r(e, ri, Pi, Ki, pa) || (e = [1, 0, 0, 0, 1, 0, 0, 0, 1], !$r(e, ri, Pi, Ki, pa)) ? false : (Ua.crossVectors(Ro, wo), e = [Ua.x, Ua.y, Ua.z], $r(e, ri, Pi, Ki, pa));
  }
  clampPoint(A, e) {
    return e.copy(A).clamp(this.min, this.max);
  }
  distanceToPoint(A) {
    return this.clampPoint(A, dt).distanceTo(A);
  }
  getBoundingSphere(A) {
    return this.isEmpty() ? A.makeEmpty() : (this.getCenter(A.center), A.radius = this.getSize(dt).length() * 0.5), A;
  }
  intersect(A) {
    return this.min.max(A.min), this.max.min(A.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(A) {
    return this.min.min(A.min), this.max.max(A.max), this;
  }
  applyMatrix4(A) {
    return this.isEmpty() ? this : (eo[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(A), eo[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(A), eo[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(A), eo[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(A), eo[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(A), eo[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(A), eo[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(A), eo[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(A), this.setFromPoints(eo), this);
  }
  translate(A) {
    return this.min.add(A), this.max.add(A), this;
  }
  equals(A) {
    return A.min.equals(this.min) && A.max.equals(this.max);
  }
  toJSON() {
    return { min: this.min.toArray(), max: this.max.toArray() };
  }
  fromJSON(A) {
    return this.min.fromArray(A.min), this.max.fromArray(A.max), this;
  }
}, eo = [new j(), new j(), new j(), new j(), new j(), new j(), new j(), new j()], dt = new j(), sa = new Pt(), ri = new j(), Pi = new j(), Ki = new j(), Ro = new j(), wo = new j(), Io = new j(), _i = new j(), pa = new j(), Ua = new j(), bo = new j();
function $r(o22, A, e, t, i) {
  for (let n = 0, a = o22.length - 3; n <= a; n += 3) {
    bo.fromArray(o22, n);
    let f = i.x * Math.abs(bo.x) + i.y * Math.abs(bo.y) + i.z * Math.abs(bo.z), r = A.dot(bo), P = e.dot(bo), s = t.dot(bo);
    if (Math.max(-Math.max(r, P, s), Math.min(r, P, s)) > f) return false;
  }
  return true;
}
var je = new j(), Fa = new nA(), np = 0, ft = class extends Dt {
  constructor(A, e, t = false) {
    if (super(), Array.isArray(A)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = true, Object.defineProperty(this, "id", { value: np++ }), this.name = "", this.array = A, this.itemSize = e, this.count = A !== void 0 ? A.length / e : 0, this.normalized = t, this.usage = J8, this.updateRanges = [], this.gpuType = Nt, this.version = 0;
  }
  onUploadCallback() {
  }
  set needsUpdate(A) {
    A === true && this.version++;
  }
  setUsage(A) {
    return this.usage = A, this;
  }
  addUpdateRange(A, e) {
    this.updateRanges.push({ start: A, count: e });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(A) {
    return this.name = A.name, this.array = new A.array.constructor(A.array), this.itemSize = A.itemSize, this.count = A.count, this.normalized = A.normalized, this.usage = A.usage, this.gpuType = A.gpuType, this;
  }
  copyAt(A, e, t) {
    A *= this.itemSize, t *= e.itemSize;
    for (let i = 0, n = this.itemSize; i < n; i++) this.array[A + i] = e.array[t + i];
    return this;
  }
  copyArray(A) {
    return this.array.set(A), this;
  }
  applyMatrix3(A) {
    if (this.itemSize === 2) for (let e = 0, t = this.count; e < t; e++) Fa.fromBufferAttribute(this, e), Fa.applyMatrix3(A), this.setXY(e, Fa.x, Fa.y);
    else if (this.itemSize === 3) for (let e = 0, t = this.count; e < t; e++) je.fromBufferAttribute(this, e), je.applyMatrix3(A), this.setXYZ(e, je.x, je.y, je.z);
    return this;
  }
  applyMatrix4(A) {
    for (let e = 0, t = this.count; e < t; e++) je.fromBufferAttribute(this, e), je.applyMatrix4(A), this.setXYZ(e, je.x, je.y, je.z);
    return this;
  }
  applyNormalMatrix(A) {
    for (let e = 0, t = this.count; e < t; e++) je.fromBufferAttribute(this, e), je.applyNormalMatrix(A), this.setXYZ(e, je.x, je.y, je.z);
    return this;
  }
  transformDirection(A) {
    for (let e = 0, t = this.count; e < t; e++) je.fromBufferAttribute(this, e), je.transformDirection(A), this.setXYZ(e, je.x, je.y, je.z);
    return this;
  }
  set(A, e = 0) {
    return this.array.set(A, e), this;
  }
  getComponent(A, e) {
    let t = this.array[A * this.itemSize + e];
    return this.normalized && (t = xt(t, this.array)), t;
  }
  setComponent(A, e, t) {
    return this.normalized && (t = Fe(t, this.array)), this.array[A * this.itemSize + e] = t, this;
  }
  getX(A) {
    let e = this.array[A * this.itemSize];
    return this.normalized && (e = xt(e, this.array)), e;
  }
  setX(A, e) {
    return this.normalized && (e = Fe(e, this.array)), this.array[A * this.itemSize] = e, this;
  }
  getY(A) {
    let e = this.array[A * this.itemSize + 1];
    return this.normalized && (e = xt(e, this.array)), e;
  }
  setY(A, e) {
    return this.normalized && (e = Fe(e, this.array)), this.array[A * this.itemSize + 1] = e, this;
  }
  getZ(A) {
    let e = this.array[A * this.itemSize + 2];
    return this.normalized && (e = xt(e, this.array)), e;
  }
  setZ(A, e) {
    return this.normalized && (e = Fe(e, this.array)), this.array[A * this.itemSize + 2] = e, this;
  }
  getW(A) {
    let e = this.array[A * this.itemSize + 3];
    return this.normalized && (e = xt(e, this.array)), e;
  }
  setW(A, e) {
    return this.normalized && (e = Fe(e, this.array)), this.array[A * this.itemSize + 3] = e, this;
  }
  setXY(A, e, t) {
    return A *= this.itemSize, this.normalized && (e = Fe(e, this.array), t = Fe(t, this.array)), this.array[A + 0] = e, this.array[A + 1] = t, this;
  }
  setXYZ(A, e, t, i) {
    return A *= this.itemSize, this.normalized && (e = Fe(e, this.array), t = Fe(t, this.array), i = Fe(i, this.array)), this.array[A + 0] = e, this.array[A + 1] = t, this.array[A + 2] = i, this;
  }
  setXYZW(A, e, t, i, n) {
    return A *= this.itemSize, this.normalized && (e = Fe(e, this.array), t = Fe(t, this.array), i = Fe(i, this.array), n = Fe(n, this.array)), this.array[A + 0] = e, this.array[A + 1] = t, this.array[A + 2] = i, this.array[A + 3] = n, this;
  }
  onUpload(A) {
    return this.onUploadCallback = A, this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    let A = { itemSize: this.itemSize, type: this.array.constructor.name, array: Array.from(this.array), normalized: this.normalized };
    return A.name = this.name, A.usage = this.usage, A.gpuType = this.gpuType, A;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
};
var ln = class extends ft {
  constructor(A, e, t) {
    super(new Uint16Array(A), e, t);
  }
};
var gn = class extends ft {
  constructor(A, e, t) {
    super(new Uint32Array(A), e, t);
  }
};
var te = class extends ft {
  constructor(A, e, t) {
    super(new Float32Array(A), e, t);
  }
}, ap = new Pt(), $i = new j(), A8 = new j(), Bt = class {
  constructor(A = new j(), e = -1) {
    this.isSphere = true, this.center = A, this.radius = e;
  }
  set(A, e) {
    return this.center.copy(A), this.radius = e, this;
  }
  setFromPoints(A, e) {
    let t = this.center;
    e !== void 0 ? t.copy(e) : ap.setFromPoints(A).getCenter(t);
    let i = 0;
    for (let n = 0, a = A.length; n < a; n++) i = Math.max(i, t.distanceToSquared(A[n]));
    return this.radius = Math.sqrt(i), this;
  }
  copy(A) {
    return this.center.copy(A.center), this.radius = A.radius, this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  containsPoint(A) {
    return A.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(A) {
    return A.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(A) {
    let e = this.radius + A.radius;
    return A.center.distanceToSquared(this.center) <= e * e;
  }
  intersectsBox(A) {
    return A.intersectsSphere(this);
  }
  intersectsPlane(A) {
    return Math.abs(A.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(A, e) {
    let t = this.center.distanceToSquared(A);
    return e.copy(A), t > this.radius * this.radius && (e.sub(this.center).normalize(), e.multiplyScalar(this.radius).add(this.center)), e;
  }
  getBoundingBox(A) {
    return this.isEmpty() ? (A.makeEmpty(), A) : (A.set(this.center, this.center), A.expandByScalar(this.radius), A);
  }
  applyMatrix4(A) {
    return this.center.applyMatrix4(A), this.radius = this.radius * A.getMaxScaleOnAxis(), this;
  }
  translate(A) {
    return this.center.add(A), this;
  }
  expandByPoint(A) {
    if (this.isEmpty()) return this.center.copy(A), this.radius = 0, this;
    $i.subVectors(A, this.center);
    let e = $i.lengthSq();
    if (e > this.radius * this.radius) {
      let t = Math.sqrt(e), i = (t - this.radius) * 0.5;
      this.center.addScaledVector($i, i / t), this.radius += i;
    }
    return this;
  }
  union(A) {
    return A.isEmpty() ? this : this.isEmpty() ? (this.copy(A), this) : (this.center.equals(A.center) === true ? this.radius = Math.max(this.radius, A.radius) : (A8.subVectors(A.center, this.center).setLength(A.radius), this.expandByPoint($i.copy(A.center).add(A8)), this.expandByPoint($i.copy(A.center).sub(A8))), this);
  }
  equals(A) {
    return A.center.equals(this.center) && A.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    return { radius: this.radius, center: this.center.toArray() };
  }
  fromJSON(A) {
    return this.radius = A.radius, this.center.fromArray(A.center), this;
  }
}, fp = 0, Ft = new Re(), e8 = new Xe(), si = new j(), it = new Pt(), An = new Pt(), Te = new j(), he = class o10 extends Dt {
  constructor() {
    super(), this.isBufferGeometry = true, Object.defineProperty(this, "id", { value: fp++ }), this.uuid = bt(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.indirectOffset = 0, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = false, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {}, this._transformed = false;
  }
  getIndex() {
    return this.index;
  }
  setIndex(A) {
    return Array.isArray(A) ? this.index = new (C0(A) ? gn : ln)(A, 1) : this.index = A, this;
  }
  setIndirect(A, e = 0) {
    return this.indirect = A, this.indirectOffset = e, this;
  }
  getIndirect() {
    return this.indirect;
  }
  getAttribute(A) {
    return this.attributes[A];
  }
  setAttribute(A, e) {
    return this.attributes[A] = e, this;
  }
  deleteAttribute(A) {
    return delete this.attributes[A], this;
  }
  hasAttribute(A) {
    return this.attributes[A] !== void 0;
  }
  addGroup(A, e, t = 0) {
    this.groups.push({ start: A, count: e, materialIndex: t });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(A, e) {
    this.drawRange.start = A, this.drawRange.count = e;
  }
  applyMatrix4(A) {
    let e = this.attributes.position;
    e !== void 0 && (e.applyMatrix4(A), e.needsUpdate = true);
    let t = this.attributes.normal;
    if (t !== void 0) {
      let n = new VA().getNormalMatrix(A);
      t.applyNormalMatrix(n), t.needsUpdate = true;
    }
    let i = this.attributes.tangent;
    return i !== void 0 && (i.transformDirection(A), i.needsUpdate = true), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this._transformed = true, this;
  }
  applyQuaternion(A) {
    return Ft.makeRotationFromQuaternion(A), this.applyMatrix4(Ft), this;
  }
  rotateX(A) {
    return Ft.makeRotationX(A), this.applyMatrix4(Ft), this;
  }
  rotateY(A) {
    return Ft.makeRotationY(A), this.applyMatrix4(Ft), this;
  }
  rotateZ(A) {
    return Ft.makeRotationZ(A), this.applyMatrix4(Ft), this;
  }
  translate(A, e, t) {
    return Ft.makeTranslation(A, e, t), this.applyMatrix4(Ft), this;
  }
  scale(A, e, t) {
    return Ft.makeScale(A, e, t), this.applyMatrix4(Ft), this;
  }
  lookAt(A) {
    return e8.lookAt(A), e8.updateMatrix(), this.applyMatrix4(e8.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(si).negate(), this.translate(si.x, si.y, si.z), this;
  }
  setFromPoints(A) {
    let e = this.getAttribute("position");
    if (e === void 0) {
      let t = [];
      for (let i = 0, n = A.length; i < n; i++) {
        let a = A[i];
        t.push(a.x, a.y, a.z || 0);
      }
      this.setAttribute("position", new te(t, 3));
    } else {
      let t = Math.min(A.length, e.count);
      for (let i = 0; i < t; i++) {
        let n = A[i];
        e.setXYZ(i, n.x, n.y, n.z || 0);
      }
      A.length > e.count && GA("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."), e.needsUpdate = true;
    }
    return this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new Pt());
    let A = this.attributes.position, e = this.morphAttributes.position;
    if (A && A.isGLBufferAttribute) {
      bA("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(new j(-1 / 0, -1 / 0, -1 / 0), new j(1 / 0, 1 / 0, 1 / 0));
      return;
    }
    if (A !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(A), e) for (let t = 0, i = e.length; t < i; t++) {
        let n = e[t];
        it.setFromBufferAttribute(n), this.morphTargetsRelative ? (Te.addVectors(this.boundingBox.min, it.min), this.boundingBox.expandByPoint(Te), Te.addVectors(this.boundingBox.max, it.max), this.boundingBox.expandByPoint(Te)) : (this.boundingBox.expandByPoint(it.min), this.boundingBox.expandByPoint(it.max));
      }
    } else this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && bA('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Bt());
    let A = this.attributes.position, e = this.morphAttributes.position;
    if (A && A.isGLBufferAttribute) {
      bA("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new j(), 1 / 0);
      return;
    }
    if (A) {
      let t = this.boundingSphere.center;
      if (it.setFromBufferAttribute(A), e) for (let n = 0, a = e.length; n < a; n++) {
        let f = e[n];
        An.setFromBufferAttribute(f), this.morphTargetsRelative ? (Te.addVectors(it.min, An.min), it.expandByPoint(Te), Te.addVectors(it.max, An.max), it.expandByPoint(Te)) : (it.expandByPoint(An.min), it.expandByPoint(An.max));
      }
      it.getCenter(t);
      let i = 0;
      for (let n = 0, a = A.count; n < a; n++) Te.fromBufferAttribute(A, n), i = Math.max(i, t.distanceToSquared(Te));
      if (e) for (let n = 0, a = e.length; n < a; n++) {
        let f = e[n], r = this.morphTargetsRelative;
        for (let P = 0, s = f.count; P < s; P++) Te.fromBufferAttribute(f, P), r && (si.fromBufferAttribute(A, P), Te.add(si)), i = Math.max(i, t.distanceToSquared(Te));
      }
      this.boundingSphere.radius = Math.sqrt(i), isNaN(this.boundingSphere.radius) && bA('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeTangents() {
    let A = this.index, e = this.attributes;
    if (A === null || e.position === void 0 || e.normal === void 0 || e.uv === void 0) {
      bA("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    let t = e.position, i = e.normal, n = e.uv, a = this.getAttribute("tangent");
    (a === void 0 || a.count !== t.count) && (a = new ft(new Float32Array(4 * t.count), 4), this.setAttribute("tangent", a));
    let f = [], r = [];
    for (let g = 0; g < t.count; g++) f[g] = new j(), r[g] = new j();
    let P = new j(), s = new j(), p = new j(), K = new nA(), U = new nA(), w = new nA(), l = new j(), R = new j();
    function F(g, B, N) {
      P.fromBufferAttribute(t, g), s.fromBufferAttribute(t, B), p.fromBufferAttribute(t, N), K.fromBufferAttribute(n, g), U.fromBufferAttribute(n, B), w.fromBufferAttribute(n, N), s.sub(P), p.sub(P), U.sub(K), w.sub(K);
      let O = 1 / (U.x * w.y - w.x * U.y);
      isFinite(O) && (l.copy(s).multiplyScalar(w.y).addScaledVector(p, -U.y).multiplyScalar(O), R.copy(p).multiplyScalar(U.x).addScaledVector(s, -w.x).multiplyScalar(O), f[g].add(l), f[B].add(l), f[N].add(l), r[g].add(R), r[B].add(R), r[N].add(R));
    }
    let u = this.groups;
    u.length === 0 && (u = [{ start: 0, count: A.count }]);
    for (let g = 0, B = u.length; g < B; ++g) {
      let N = u[g], O = N.start, G = N.count;
      for (let M = O, m = O + G; M < m; M += 3) F(A.getX(M + 0), A.getX(M + 1), A.getX(M + 2));
    }
    let D = new j(), v = new j(), x = new j(), h = new j();
    function S(g) {
      x.fromBufferAttribute(i, g), h.copy(x);
      let B = f[g];
      D.copy(B), D.sub(x.multiplyScalar(x.dot(B))).normalize(), v.crossVectors(h, B);
      let O = v.dot(r[g]) < 0 ? -1 : 1;
      a.setXYZW(g, D.x, D.y, D.z, O);
    }
    for (let g = 0, B = u.length; g < B; ++g) {
      let N = u[g], O = N.start, G = N.count;
      for (let M = O, m = O + G; M < m; M += 3) S(A.getX(M + 0)), S(A.getX(M + 1)), S(A.getX(M + 2));
    }
    this._transformed = true;
  }
  computeVertexNormals() {
    let A = this.index, e = this.getAttribute("position");
    if (e !== void 0) {
      let t = this.getAttribute("normal");
      if (t === void 0 || t.count !== e.count) t = new ft(new Float32Array(e.count * 3), 3), this.setAttribute("normal", t);
      else for (let K = 0, U = t.count; K < U; K++) t.setXYZ(K, 0, 0, 0);
      let i = new j(), n = new j(), a = new j(), f = new j(), r = new j(), P = new j(), s = new j(), p = new j();
      if (A) for (let K = 0, U = A.count; K < U; K += 3) {
        let w = A.getX(K + 0), l = A.getX(K + 1), R = A.getX(K + 2);
        i.fromBufferAttribute(e, w), n.fromBufferAttribute(e, l), a.fromBufferAttribute(e, R), s.subVectors(a, n), p.subVectors(i, n), s.cross(p), f.fromBufferAttribute(t, w), r.fromBufferAttribute(t, l), P.fromBufferAttribute(t, R), f.add(s), r.add(s), P.add(s), t.setXYZ(w, f.x, f.y, f.z), t.setXYZ(l, r.x, r.y, r.z), t.setXYZ(R, P.x, P.y, P.z);
      }
      else for (let K = 0, U = e.count; K < U; K += 3) i.fromBufferAttribute(e, K + 0), n.fromBufferAttribute(e, K + 1), a.fromBufferAttribute(e, K + 2), s.subVectors(a, n), p.subVectors(i, n), s.cross(p), t.setXYZ(K + 0, s.x, s.y, s.z), t.setXYZ(K + 1, s.x, s.y, s.z), t.setXYZ(K + 2, s.x, s.y, s.z);
      this.normalizeNormals(), t.needsUpdate = true;
    }
  }
  normalizeNormals() {
    let A = this.attributes.normal;
    for (let e = 0, t = A.count; e < t; e++) Te.fromBufferAttribute(A, e), Te.normalize(), A.setXYZ(e, Te.x, Te.y, Te.z);
  }
  toNonIndexed() {
    function A(f, r) {
      let P = f.array, s = f.itemSize, p = f.normalized, K = new P.constructor(r.length * s), U = 0, w = 0;
      for (let l = 0, R = r.length; l < R; l++) {
        f.isInterleavedBufferAttribute ? U = r[l] * f.data.stride + f.offset : U = r[l] * s;
        for (let F = 0; F < s; F++) K[w++] = P[U++];
      }
      return new ft(K, s, p);
    }
    if (this.index === null) return GA("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    let e = new o10(), t = this.index.array, i = this.attributes;
    for (let f in i) {
      let r = i[f], P = A(r, t);
      e.setAttribute(f, P);
    }
    let n = this.morphAttributes;
    for (let f in n) {
      let r = [], P = n[f];
      for (let s = 0, p = P.length; s < p; s++) {
        let K = P[s], U = A(K, t);
        r.push(U);
      }
      e.morphAttributes[f] = r;
    }
    e.morphTargetsRelative = this.morphTargetsRelative;
    let a = this.groups;
    for (let f = 0, r = a.length; f < r; f++) {
      let P = a[f];
      e.addGroup(P.start, P.count, P.materialIndex);
    }
    return e;
  }
  toJSON() {
    let A = { metadata: { version: 4.7, type: "BufferGeometry", generator: "BufferGeometry.toJSON" } };
    if (A.uuid = this.uuid, A.type = this.parameters !== void 0 && this._transformed === true ? "BufferGeometry" : this.type, A.name = this.name, Object.keys(this.userData).length > 0 && (A.userData = this.userData), this.parameters !== void 0 && this._transformed !== true) {
      let r = this.parameters;
      for (let P in r) r[P] !== void 0 && (A[P] = r[P]);
      return A;
    }
    A.data = { attributes: {} };
    let e = this.index;
    e !== null && (A.data.index = { type: e.array.constructor.name, array: Array.prototype.slice.call(e.array) });
    let t = this.attributes;
    for (let r in t) {
      let P = t[r];
      A.data.attributes[r] = P.toJSON(A.data);
    }
    let i = {}, n = false;
    for (let r in this.morphAttributes) {
      let P = this.morphAttributes[r], s = [];
      for (let p = 0, K = P.length; p < K; p++) {
        let U = P[p];
        s.push(U.toJSON(A.data));
      }
      s.length > 0 && (i[r] = s, n = true);
    }
    n && (A.data.morphAttributes = i, A.data.morphTargetsRelative = this.morphTargetsRelative);
    let a = this.groups;
    a.length > 0 && (A.data.groups = JSON.parse(JSON.stringify(a)));
    let f = this.boundingSphere;
    return f !== null && (A.data.boundingSphere = f.toJSON()), A;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(A) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    let e = {};
    this.name = A.name;
    let t = A.index;
    t !== null && this.setIndex(t.clone());
    let i = A.attributes;
    for (let P in i) {
      let s = i[P];
      this.setAttribute(P, s.clone(e));
    }
    let n = A.morphAttributes;
    for (let P in n) {
      let s = [], p = n[P];
      for (let K = 0, U = p.length; K < U; K++) s.push(p[K].clone(e));
      this.morphAttributes[P] = s;
    }
    this.morphTargetsRelative = A.morphTargetsRelative;
    let a = A.groups;
    for (let P = 0, s = a.length; P < s; P++) {
      let p = a[P];
      this.addGroup(p.start, p.count, p.materialIndex);
    }
    let f = A.boundingBox;
    f !== null && (this.boundingBox = f.clone());
    let r = A.boundingSphere;
    return r !== null && (this.boundingSphere = r.clone()), this.drawRange.start = A.drawRange.start, this.drawRange.count = A.drawRange.count, this.userData = A.userData, this._transformed = A._transformed, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}, Hn = class {
  constructor(A, e) {
    this.isInterleavedBuffer = true, this.array = A, this.stride = e, this.count = A !== void 0 ? A.length / e : 0, this.usage = J8, this.updateRanges = [], this.version = 0, this.uuid = bt();
  }
  onUploadCallback() {
  }
  set needsUpdate(A) {
    A === true && this.version++;
  }
  setUsage(A) {
    return this.usage = A, this;
  }
  addUpdateRange(A, e) {
    this.updateRanges.push({ start: A, count: e });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(A) {
    return this.array = new A.array.constructor(A.array), this.count = A.count, this.stride = A.stride, this.usage = A.usage, this;
  }
  copyAt(A, e, t) {
    A *= this.stride, t *= e.stride;
    for (let i = 0, n = this.stride; i < n; i++) this.array[A + i] = e.array[t + i];
    return this;
  }
  set(A, e = 0) {
    return this.array.set(A, e), this;
  }
  clone(A) {
    A.arrayBuffers === void 0 && (A.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = bt()), A.arrayBuffers[this.array.buffer._uuid] === void 0 && (A.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
    let e = new this.array.constructor(A.arrayBuffers[this.array.buffer._uuid]), t = new this.constructor(e, this.stride);
    return t.setUsage(this.usage), t;
  }
  onUpload(A) {
    return this.onUploadCallback = A, this;
  }
  toJSON(A) {
    A.arrayBuffers === void 0 && (A.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = bt()), A.arrayBuffers[this.array.buffer._uuid] === void 0 && (A.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer)));
    let e = { uuid: this.uuid, buffer: this.array.buffer._uuid, type: this.array.constructor.name, stride: this.stride };
    return e.usage = this.usage, e;
  }
}, qe = new j(), Kt = class o11 {
  constructor(A, e, t, i = false) {
    this.isInterleavedBufferAttribute = true, this.name = "", this.data = A, this.itemSize = e, this.offset = t, this.normalized = i;
  }
  get count() {
    return this.data.count;
  }
  get array() {
    return this.data.array;
  }
  set needsUpdate(A) {
    this.data.needsUpdate = A;
  }
  applyMatrix4(A) {
    for (let e = 0, t = this.data.count; e < t; e++) qe.fromBufferAttribute(this, e), qe.applyMatrix4(A), this.setXYZ(e, qe.x, qe.y, qe.z);
    return this;
  }
  applyNormalMatrix(A) {
    for (let e = 0, t = this.count; e < t; e++) qe.fromBufferAttribute(this, e), qe.applyNormalMatrix(A), this.setXYZ(e, qe.x, qe.y, qe.z);
    return this;
  }
  transformDirection(A) {
    for (let e = 0, t = this.count; e < t; e++) qe.fromBufferAttribute(this, e), qe.transformDirection(A), this.setXYZ(e, qe.x, qe.y, qe.z);
    return this;
  }
  getComponent(A, e) {
    let t = this.array[A * this.data.stride + this.offset + e];
    return this.normalized && (t = xt(t, this.array)), t;
  }
  setComponent(A, e, t) {
    return this.normalized && (t = Fe(t, this.array)), this.data.array[A * this.data.stride + this.offset + e] = t, this;
  }
  setX(A, e) {
    return this.normalized && (e = Fe(e, this.array)), this.data.array[A * this.data.stride + this.offset] = e, this;
  }
  setY(A, e) {
    return this.normalized && (e = Fe(e, this.array)), this.data.array[A * this.data.stride + this.offset + 1] = e, this;
  }
  setZ(A, e) {
    return this.normalized && (e = Fe(e, this.array)), this.data.array[A * this.data.stride + this.offset + 2] = e, this;
  }
  setW(A, e) {
    return this.normalized && (e = Fe(e, this.array)), this.data.array[A * this.data.stride + this.offset + 3] = e, this;
  }
  getX(A) {
    let e = this.data.array[A * this.data.stride + this.offset];
    return this.normalized && (e = xt(e, this.array)), e;
  }
  getY(A) {
    let e = this.data.array[A * this.data.stride + this.offset + 1];
    return this.normalized && (e = xt(e, this.array)), e;
  }
  getZ(A) {
    let e = this.data.array[A * this.data.stride + this.offset + 2];
    return this.normalized && (e = xt(e, this.array)), e;
  }
  getW(A) {
    let e = this.data.array[A * this.data.stride + this.offset + 3];
    return this.normalized && (e = xt(e, this.array)), e;
  }
  setXY(A, e, t) {
    return A = A * this.data.stride + this.offset, this.normalized && (e = Fe(e, this.array), t = Fe(t, this.array)), this.data.array[A + 0] = e, this.data.array[A + 1] = t, this;
  }
  setXYZ(A, e, t, i) {
    return A = A * this.data.stride + this.offset, this.normalized && (e = Fe(e, this.array), t = Fe(t, this.array), i = Fe(i, this.array)), this.data.array[A + 0] = e, this.data.array[A + 1] = t, this.data.array[A + 2] = i, this;
  }
  setXYZW(A, e, t, i, n) {
    return A = A * this.data.stride + this.offset, this.normalized && (e = Fe(e, this.array), t = Fe(t, this.array), i = Fe(i, this.array), n = Fe(n, this.array)), this.data.array[A + 0] = e, this.data.array[A + 1] = t, this.data.array[A + 2] = i, this.data.array[A + 3] = n, this;
  }
  clone(A) {
    if (A === void 0) {
      Rn("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");
      let e = [];
      for (let t = 0; t < this.count; t++) {
        let i = t * this.data.stride + this.offset;
        for (let n = 0; n < this.itemSize; n++) e.push(this.data.array[i + n]);
      }
      return new ft(new this.array.constructor(e), this.itemSize, this.normalized);
    } else return A.interleavedBuffers === void 0 && (A.interleavedBuffers = {}), A.interleavedBuffers[this.data.uuid] === void 0 && (A.interleavedBuffers[this.data.uuid] = this.data.clone(A)), new o11(A.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
  }
  toJSON(A) {
    if (A === void 0) {
      Rn("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");
      let e = [];
      for (let t = 0; t < this.count; t++) {
        let i = t * this.data.stride + this.offset;
        for (let n = 0; n < this.itemSize; n++) e.push(this.data.array[i + n]);
      }
      return { itemSize: this.itemSize, type: this.array.constructor.name, array: e, normalized: this.normalized };
    } else return A.interleavedBuffers === void 0 && (A.interleavedBuffers = {}), A.interleavedBuffers[this.data.uuid] === void 0 && (A.interleavedBuffers[this.data.uuid] = this.data.toJSON(A)), { isInterleavedBufferAttribute: true, itemSize: this.itemSize, data: this.data.uuid, offset: this.offset, normalized: this.normalized };
  }
}, t8 = new j(), rp = new j(), Pp = new VA(), at = class {
  constructor(A = new j(1, 0, 0), e = 0) {
    this.isPlane = true, this.normal = A, this.constant = e;
  }
  set(A, e) {
    return this.normal.copy(A), this.constant = e, this;
  }
  setComponents(A, e, t, i) {
    return this.normal.set(A, e, t), this.constant = i, this;
  }
  setFromNormalAndCoplanarPoint(A, e) {
    return this.normal.copy(A), this.constant = -e.dot(this.normal), this;
  }
  setFromCoplanarPoints(A, e, t) {
    let i = t8.subVectors(t, e).cross(rp.subVectors(A, e)).normalize();
    return this.setFromNormalAndCoplanarPoint(i, A), this;
  }
  copy(A) {
    return this.normal.copy(A.normal), this.constant = A.constant, this;
  }
  normalize() {
    let A = 1 / this.normal.length();
    return this.normal.multiplyScalar(A), this.constant *= A, this;
  }
  negate() {
    return this.constant *= -1, this.normal.negate(), this;
  }
  distanceToPoint(A) {
    return this.normal.dot(A) + this.constant;
  }
  distanceToSphere(A) {
    return this.distanceToPoint(A.center) - A.radius;
  }
  projectPoint(A, e) {
    return e.copy(A).addScaledVector(this.normal, -this.distanceToPoint(A));
  }
  intersectLine(A, e, t = true) {
    let i = A.delta(t8), n = this.normal.dot(i);
    if (n === 0) return this.distanceToPoint(A.start) === 0 ? e.copy(A.start) : null;
    let a = -(A.start.dot(this.normal) + this.constant) / n;
    return t === true && (a < 0 || a > 1) ? null : e.copy(A.start).addScaledVector(i, a);
  }
  intersectsLine(A) {
    let e = this.distanceToPoint(A.start), t = this.distanceToPoint(A.end);
    return e < 0 && t > 0 || t < 0 && e > 0;
  }
  intersectsBox(A) {
    return A.intersectsPlane(this);
  }
  intersectsSphere(A) {
    return A.intersectsPlane(this);
  }
  coplanarPoint(A) {
    return A.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(A, e) {
    let t = e || Pp.getNormalMatrix(A), i = this.coplanarPoint(t8).applyMatrix4(A), n = this.normal.applyMatrix3(t).normalize();
    return this.constant = -i.dot(n), this;
  }
  translate(A) {
    return this.constant -= A.dot(this.normal), this;
  }
  equals(A) {
    return A.normal.equals(this.normal) && A.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    return { normal: this.normal.toArray(), constant: this.constant };
  }
  fromJSON(A) {
    return this.normal.fromArray(A.normal), this.constant = A.constant, this;
  }
}, Kp = 0, Mt = class extends Dt {
  constructor() {
    super(), this.isMaterial = true, Object.defineProperty(this, "id", { value: Kp++ }), this.uuid = bt(), this.name = "", this.type = "Material", this.blending = bi, this.side = No, this.vertexColors = false, this.opacity = 1, this.transparent = false, this.alphaHash = false, this.blendSrc = S8, this.blendDst = N8, this.blendEquation = Jo, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new JA(0, 0, 0), this.blendAlpha = 0, this.depthFunc = ui, this.depthTest = true, this.depthWrite = true, this.stencilWriteMask = 255, this.stencilFunc = ts, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = Qa, this.stencilZFail = Qa, this.stencilZPass = Qa, this.stencilWrite = false, this.clippingPlanes = null, this.clipIntersection = false, this.clipShadows = false, this.shadowSide = null, this.colorWrite = true, this.precision = null, this.polygonOffset = false, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = false, this.alphaToCoverage = false, this.premultipliedAlpha = false, this.forceSinglePass = false, this.allowOverride = true, this.visible = true, this.toneMapped = true, this.userData = {}, this.version = 0, this._alphaTest = 0;
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(A) {
    this._alphaTest > 0 != A > 0 && this.version++, this._alphaTest = A;
  }
  onBeforeRender() {
  }
  onBeforeCompile() {
  }
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(A) {
    if (A !== void 0) for (let e in A) {
      let t = A[e];
      if (t === void 0) {
        GA(`Material: parameter '${e}' has value of undefined.`);
        continue;
      }
      let i = this[e];
      if (i === void 0) {
        GA(`Material: '${e}' is not a property of THREE.${this.type}.`);
        continue;
      }
      i && i.isColor ? i.set(t) : i && i.isVector2 && t && t.isVector2 || i && i.isEuler && t && t.isEuler || i && i.isVector3 && t && t.isVector3 ? i.copy(t) : this[e] = t;
    }
  }
  toJSON(A) {
    let e = A === void 0 || typeof A == "string";
    e && (A = { textures: {}, images: {} });
    let t = { metadata: { version: 4.7, type: "Material", generator: "Material.toJSON" } };
    t.uuid = this.uuid, t.type = this.type, t.blending = this.blending, t.side = this.side, t.shadowSide = this.shadowSide, t.vertexColors = this.vertexColors, t.opacity = this.opacity, t.transparent = this.transparent, t.blendSrc = this.blendSrc, t.blendDst = this.blendDst, t.blendEquation = this.blendEquation, t.blendSrcAlpha = this.blendSrcAlpha, t.blendDstAlpha = this.blendDstAlpha, t.blendEquationAlpha = this.blendEquationAlpha, t.blendColor = this.blendColor.getHex(), t.blendAlpha = this.blendAlpha, t.depthFunc = this.depthFunc, t.depthTest = this.depthTest, t.depthWrite = this.depthWrite, t.colorWrite = this.colorWrite, t.clipIntersection = this.clipIntersection, t.clipShadows = this.clipShadows, t.stencilWriteMask = this.stencilWriteMask, t.stencilFunc = this.stencilFunc, t.stencilRef = this.stencilRef, t.stencilFuncMask = this.stencilFuncMask, t.stencilFail = this.stencilFail, t.stencilZFail = this.stencilZFail, t.stencilZPass = this.stencilZPass, t.stencilWrite = this.stencilWrite, t.polygonOffset = this.polygonOffset, t.polygonOffsetFactor = this.polygonOffsetFactor, t.polygonOffsetUnits = this.polygonOffsetUnits, t.dithering = this.dithering, t.alphaTest = this.alphaTest, t.alphaHash = this.alphaHash, t.alphaToCoverage = this.alphaToCoverage, t.premultipliedAlpha = this.premultipliedAlpha, t.forceSinglePass = this.forceSinglePass, t.allowOverride = this.allowOverride, t.visible = this.visible, t.toneMapped = this.toneMapped, t.name = this.name, this.color && this.color.isColor && (t.color = this.color.getHex()), this.roughness !== void 0 && (t.roughness = this.roughness), this.metalness !== void 0 && (t.metalness = this.metalness), this.sheen !== void 0 && (t.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (t.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (t.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (t.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && (t.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (t.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (t.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (t.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (t.shininess = this.shininess), this.clearcoat !== void 0 && (t.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (t.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (t.clearcoatMap = this.clearcoatMap.toJSON(A).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (t.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(A).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (t.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(A).uuid, t.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.sheenColorMap && this.sheenColorMap.isTexture && (t.sheenColorMap = this.sheenColorMap.toJSON(A).uuid), this.sheenRoughnessMap && this.sheenRoughnessMap.isTexture && (t.sheenRoughnessMap = this.sheenRoughnessMap.toJSON(A).uuid), this.dispersion !== void 0 && (t.dispersion = this.dispersion), this.retroreflectivity !== void 0 && (t.retroreflectivity = this.retroreflectivity), this.iridescence !== void 0 && (t.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (t.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (t.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (t.iridescenceMap = this.iridescenceMap.toJSON(A).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (t.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(A).uuid), this.anisotropy !== void 0 && (t.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (t.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (t.anisotropyMap = this.anisotropyMap.toJSON(A).uuid), this.map && this.map.isTexture && (t.map = this.map.toJSON(A).uuid), this.matcap && this.matcap.isTexture && (t.matcap = this.matcap.toJSON(A).uuid), this.alphaMap && this.alphaMap.isTexture && (t.alphaMap = this.alphaMap.toJSON(A).uuid), this.lightMap && this.lightMap.isTexture && (t.lightMap = this.lightMap.toJSON(A).uuid, t.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (t.aoMap = this.aoMap.toJSON(A).uuid, t.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (t.bumpMap = this.bumpMap.toJSON(A).uuid, t.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (t.normalMap = this.normalMap.toJSON(A).uuid, t.normalMapType = this.normalMapType, t.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (t.displacementMap = this.displacementMap.toJSON(A).uuid, t.displacementScale = this.displacementScale, t.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (t.roughnessMap = this.roughnessMap.toJSON(A).uuid), this.metalnessMap && this.metalnessMap.isTexture && (t.metalnessMap = this.metalnessMap.toJSON(A).uuid), this.emissiveMap && this.emissiveMap.isTexture && (t.emissiveMap = this.emissiveMap.toJSON(A).uuid), this.specularMap && this.specularMap.isTexture && (t.specularMap = this.specularMap.toJSON(A).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (t.specularIntensityMap = this.specularIntensityMap.toJSON(A).uuid), this.specularColorMap && this.specularColorMap.isTexture && (t.specularColorMap = this.specularColorMap.toJSON(A).uuid), this.envMap && this.envMap.isTexture && (t.envMap = this.envMap.toJSON(A).uuid, this.combine !== void 0 && (t.combine = this.combine)), this.envMapRotation !== void 0 && (t.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (t.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (t.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (t.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (t.gradientMap = this.gradientMap.toJSON(A).uuid), this.transmission !== void 0 && (t.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (t.transmissionMap = this.transmissionMap.toJSON(A).uuid), this.thickness !== void 0 && (t.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (t.thicknessMap = this.thicknessMap.toJSON(A).uuid), this.attenuationDistance !== void 0 && (t.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (t.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (t.size = this.size), this.sizeAttenuation !== void 0 && (t.sizeAttenuation = this.sizeAttenuation), Array.isArray(this.clippingPlanes) && this.clippingPlanes.length > 0 && (t.clippingPlanes = this.clippingPlanes.map((n) => n.toJSON())), this.rotation !== void 0 && (t.rotation = this.rotation), this.depthPacking !== void 0 && (t.depthPacking = this.depthPacking), this.linewidth !== void 0 && (t.linewidth = this.linewidth), this.linecap !== void 0 && (t.linecap = this.linecap), this.linejoin !== void 0 && (t.linejoin = this.linejoin), this.dashSize !== void 0 && (t.dashSize = this.dashSize), this.gapSize !== void 0 && (t.gapSize = this.gapSize), this.scale !== void 0 && (t.scale = this.scale), this.wireframe !== void 0 && (t.wireframe = this.wireframe), this.wireframeLinewidth !== void 0 && (t.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== void 0 && (t.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== void 0 && (t.wireframeLinejoin = this.wireframeLinejoin), this.flatShading !== void 0 && (t.flatShading = this.flatShading), this.fog !== void 0 && (t.fog = this.fog), Object.keys(this.userData).length > 0 && (t.userData = this.userData);
    function i(n) {
      let a = [];
      for (let f in n) {
        let r = n[f];
        delete r.metadata, a.push(r);
      }
      return a;
    }
    if (e) {
      let n = i(A.textures), a = i(A.images);
      n.length > 0 && (t.textures = n), a.length > 0 && (t.images = a);
    }
    return t;
  }
  fromJSON(A, e) {
    if (A.uuid !== void 0 && (this.uuid = A.uuid), A.name !== void 0 && (this.name = A.name), A.color !== void 0 && this.color !== void 0 && this.color.setHex(A.color), A.roughness !== void 0 && (this.roughness = A.roughness), A.metalness !== void 0 && (this.metalness = A.metalness), A.sheen !== void 0 && (this.sheen = A.sheen), A.sheenColor !== void 0 && (this.sheenColor = new JA().setHex(A.sheenColor)), A.sheenRoughness !== void 0 && (this.sheenRoughness = A.sheenRoughness), A.emissive !== void 0 && this.emissive !== void 0 && this.emissive.setHex(A.emissive), A.specular !== void 0 && this.specular !== void 0 && this.specular.setHex(A.specular), A.specularIntensity !== void 0 && (this.specularIntensity = A.specularIntensity), A.specularColor !== void 0 && this.specularColor !== void 0 && this.specularColor.setHex(A.specularColor), A.shininess !== void 0 && (this.shininess = A.shininess), A.clearcoat !== void 0 && (this.clearcoat = A.clearcoat), A.clearcoatRoughness !== void 0 && (this.clearcoatRoughness = A.clearcoatRoughness), A.dispersion !== void 0 && (this.dispersion = A.dispersion), A.retroreflectivity !== void 0 && (this.retroreflectivity = A.retroreflectivity), A.iridescence !== void 0 && (this.iridescence = A.iridescence), A.iridescenceIOR !== void 0 && (this.iridescenceIOR = A.iridescenceIOR), A.iridescenceThicknessRange !== void 0 && (this.iridescenceThicknessRange = A.iridescenceThicknessRange), A.transmission !== void 0 && (this.transmission = A.transmission), A.thickness !== void 0 && (this.thickness = A.thickness), A.attenuationDistance !== void 0 && (this.attenuationDistance = A.attenuationDistance), A.attenuationColor !== void 0 && this.attenuationColor !== void 0 && this.attenuationColor.setHex(A.attenuationColor), A.anisotropy !== void 0 && (this.anisotropy = A.anisotropy), A.anisotropyRotation !== void 0 && (this.anisotropyRotation = A.anisotropyRotation), A.fog !== void 0 && (this.fog = A.fog), A.flatShading !== void 0 && (this.flatShading = A.flatShading), A.blending !== void 0 && (this.blending = A.blending), A.combine !== void 0 && (this.combine = A.combine), A.side !== void 0 && (this.side = A.side), A.shadowSide !== void 0 && (this.shadowSide = A.shadowSide), A.opacity !== void 0 && (this.opacity = A.opacity), A.transparent !== void 0 && (this.transparent = A.transparent), A.alphaTest !== void 0 && (this.alphaTest = A.alphaTest), A.alphaHash !== void 0 && (this.alphaHash = A.alphaHash), A.depthFunc !== void 0 && (this.depthFunc = A.depthFunc), A.depthTest !== void 0 && (this.depthTest = A.depthTest), A.depthWrite !== void 0 && (this.depthWrite = A.depthWrite), A.colorWrite !== void 0 && (this.colorWrite = A.colorWrite), A.clippingPlanes !== void 0 && (this.clippingPlanes = A.clippingPlanes.map((t) => new at().fromJSON(t))), A.clipIntersection !== void 0 && (this.clipIntersection = A.clipIntersection), A.clipShadows !== void 0 && (this.clipShadows = A.clipShadows), A.depthPacking !== void 0 && (this.depthPacking = A.depthPacking), A.blendSrc !== void 0 && (this.blendSrc = A.blendSrc), A.blendDst !== void 0 && (this.blendDst = A.blendDst), A.blendEquation !== void 0 && (this.blendEquation = A.blendEquation), A.blendSrcAlpha !== void 0 && (this.blendSrcAlpha = A.blendSrcAlpha), A.blendDstAlpha !== void 0 && (this.blendDstAlpha = A.blendDstAlpha), A.blendEquationAlpha !== void 0 && (this.blendEquationAlpha = A.blendEquationAlpha), A.blendColor !== void 0 && this.blendColor !== void 0 && this.blendColor.setHex(A.blendColor), A.blendAlpha !== void 0 && (this.blendAlpha = A.blendAlpha), A.stencilWriteMask !== void 0 && (this.stencilWriteMask = A.stencilWriteMask), A.stencilFunc !== void 0 && (this.stencilFunc = A.stencilFunc), A.stencilRef !== void 0 && (this.stencilRef = A.stencilRef), A.stencilFuncMask !== void 0 && (this.stencilFuncMask = A.stencilFuncMask), A.stencilFail !== void 0 && (this.stencilFail = A.stencilFail), A.stencilZFail !== void 0 && (this.stencilZFail = A.stencilZFail), A.stencilZPass !== void 0 && (this.stencilZPass = A.stencilZPass), A.stencilWrite !== void 0 && (this.stencilWrite = A.stencilWrite), A.wireframe !== void 0 && (this.wireframe = A.wireframe), A.wireframeLinewidth !== void 0 && (this.wireframeLinewidth = A.wireframeLinewidth), A.wireframeLinecap !== void 0 && (this.wireframeLinecap = A.wireframeLinecap), A.wireframeLinejoin !== void 0 && (this.wireframeLinejoin = A.wireframeLinejoin), A.rotation !== void 0 && (this.rotation = A.rotation), A.linewidth !== void 0 && (this.linewidth = A.linewidth), A.linecap !== void 0 && (this.linecap = A.linecap), A.linejoin !== void 0 && (this.linejoin = A.linejoin), A.dashSize !== void 0 && (this.dashSize = A.dashSize), A.gapSize !== void 0 && (this.gapSize = A.gapSize), A.scale !== void 0 && (this.scale = A.scale), A.polygonOffset !== void 0 && (this.polygonOffset = A.polygonOffset), A.polygonOffsetFactor !== void 0 && (this.polygonOffsetFactor = A.polygonOffsetFactor), A.polygonOffsetUnits !== void 0 && (this.polygonOffsetUnits = A.polygonOffsetUnits), A.dithering !== void 0 && (this.dithering = A.dithering), A.alphaToCoverage !== void 0 && (this.alphaToCoverage = A.alphaToCoverage), A.premultipliedAlpha !== void 0 && (this.premultipliedAlpha = A.premultipliedAlpha), A.forceSinglePass !== void 0 && (this.forceSinglePass = A.forceSinglePass), A.allowOverride !== void 0 && (this.allowOverride = A.allowOverride), A.visible !== void 0 && (this.visible = A.visible), A.toneMapped !== void 0 && (this.toneMapped = A.toneMapped), A.userData !== void 0 && (this.userData = A.userData), A.vertexColors !== void 0 && (typeof A.vertexColors == "number" ? this.vertexColors = A.vertexColors > 0 : this.vertexColors = A.vertexColors), A.size !== void 0 && (this.size = A.size), A.sizeAttenuation !== void 0 && (this.sizeAttenuation = A.sizeAttenuation), A.map !== void 0 && (this.map = e[A.map] || null), A.matcap !== void 0 && (this.matcap = e[A.matcap] || null), A.alphaMap !== void 0 && (this.alphaMap = e[A.alphaMap] || null), A.bumpMap !== void 0 && (this.bumpMap = e[A.bumpMap] || null), A.bumpScale !== void 0 && (this.bumpScale = A.bumpScale), A.normalMap !== void 0 && (this.normalMap = e[A.normalMap] || null), A.normalMapType !== void 0 && (this.normalMapType = A.normalMapType), A.normalScale !== void 0) {
      let t = A.normalScale;
      Array.isArray(t) === false && (t = [t, t]), this.normalScale = new nA().fromArray(t);
    }
    return A.displacementMap !== void 0 && (this.displacementMap = e[A.displacementMap] || null), A.displacementScale !== void 0 && (this.displacementScale = A.displacementScale), A.displacementBias !== void 0 && (this.displacementBias = A.displacementBias), A.roughnessMap !== void 0 && (this.roughnessMap = e[A.roughnessMap] || null), A.metalnessMap !== void 0 && (this.metalnessMap = e[A.metalnessMap] || null), A.emissiveMap !== void 0 && (this.emissiveMap = e[A.emissiveMap] || null), A.emissiveIntensity !== void 0 && (this.emissiveIntensity = A.emissiveIntensity), A.specularMap !== void 0 && (this.specularMap = e[A.specularMap] || null), A.specularIntensityMap !== void 0 && (this.specularIntensityMap = e[A.specularIntensityMap] || null), A.specularColorMap !== void 0 && (this.specularColorMap = e[A.specularColorMap] || null), A.envMap !== void 0 && (this.envMap = e[A.envMap] || null), A.envMapRotation !== void 0 && this.envMapRotation.fromArray(A.envMapRotation), A.envMapIntensity !== void 0 && (this.envMapIntensity = A.envMapIntensity), A.reflectivity !== void 0 && (this.reflectivity = A.reflectivity), A.refractionRatio !== void 0 && (this.refractionRatio = A.refractionRatio), A.lightMap !== void 0 && (this.lightMap = e[A.lightMap] || null), A.lightMapIntensity !== void 0 && (this.lightMapIntensity = A.lightMapIntensity), A.aoMap !== void 0 && (this.aoMap = e[A.aoMap] || null), A.aoMapIntensity !== void 0 && (this.aoMapIntensity = A.aoMapIntensity), A.gradientMap !== void 0 && (this.gradientMap = e[A.gradientMap] || null), A.clearcoatMap !== void 0 && (this.clearcoatMap = e[A.clearcoatMap] || null), A.clearcoatRoughnessMap !== void 0 && (this.clearcoatRoughnessMap = e[A.clearcoatRoughnessMap] || null), A.clearcoatNormalMap !== void 0 && (this.clearcoatNormalMap = e[A.clearcoatNormalMap] || null), A.clearcoatNormalScale !== void 0 && (this.clearcoatNormalScale = new nA().fromArray(A.clearcoatNormalScale)), A.iridescenceMap !== void 0 && (this.iridescenceMap = e[A.iridescenceMap] || null), A.iridescenceThicknessMap !== void 0 && (this.iridescenceThicknessMap = e[A.iridescenceThicknessMap] || null), A.transmissionMap !== void 0 && (this.transmissionMap = e[A.transmissionMap] || null), A.thicknessMap !== void 0 && (this.thicknessMap = e[A.thicknessMap] || null), A.anisotropyMap !== void 0 && (this.anisotropyMap = e[A.anisotropyMap] || null), A.sheenColorMap !== void 0 && (this.sheenColorMap = e[A.sheenColorMap] || null), A.sheenRoughnessMap !== void 0 && (this.sheenRoughnessMap = e[A.sheenRoughnessMap] || null), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(A) {
    this.name = A.name, this.blending = A.blending, this.side = A.side, this.vertexColors = A.vertexColors, this.opacity = A.opacity, this.transparent = A.transparent, this.blendSrc = A.blendSrc, this.blendDst = A.blendDst, this.blendEquation = A.blendEquation, this.blendSrcAlpha = A.blendSrcAlpha, this.blendDstAlpha = A.blendDstAlpha, this.blendEquationAlpha = A.blendEquationAlpha, this.blendColor.copy(A.blendColor), this.blendAlpha = A.blendAlpha, this.depthFunc = A.depthFunc, this.depthTest = A.depthTest, this.depthWrite = A.depthWrite, this.stencilWriteMask = A.stencilWriteMask, this.stencilFunc = A.stencilFunc, this.stencilRef = A.stencilRef, this.stencilFuncMask = A.stencilFuncMask, this.stencilFail = A.stencilFail, this.stencilZFail = A.stencilZFail, this.stencilZPass = A.stencilZPass, this.stencilWrite = A.stencilWrite;
    let e = A.clippingPlanes, t = null;
    if (e !== null) {
      let i = e.length;
      t = new Array(i);
      for (let n = 0; n !== i; ++n) t[n] = e[n].clone();
    }
    return this.clippingPlanes = t, this.clipIntersection = A.clipIntersection, this.clipShadows = A.clipShadows, this.shadowSide = A.shadowSide, this.colorWrite = A.colorWrite, this.precision = A.precision, this.polygonOffset = A.polygonOffset, this.polygonOffsetFactor = A.polygonOffsetFactor, this.polygonOffsetUnits = A.polygonOffsetUnits, this.dithering = A.dithering, this.alphaTest = A.alphaTest, this.alphaHash = A.alphaHash, this.alphaToCoverage = A.alphaToCoverage, this.premultipliedAlpha = A.premultipliedAlpha, this.forceSinglePass = A.forceSinglePass, this.allowOverride = A.allowOverride, this.visible = A.visible, this.toneMapped = A.toneMapped, this.userData = JSON.parse(JSON.stringify(A.userData)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(A) {
    A === true && this.version++;
  }
}, Lo = class extends Mt {
  constructor(A) {
    super(), this.isSpriteMaterial = true, this.type = "SpriteMaterial", this.color = new JA(16777215), this.map = null, this.alphaMap = null, this.rotation = 0, this.sizeAttenuation = true, this.transparent = true, this.fog = true, this.setValues(A);
  }
  copy(A) {
    return super.copy(A), this.color.copy(A.color), this.map = A.map, this.alphaMap = A.alphaMap, this.rotation = A.rotation, this.sizeAttenuation = A.sizeAttenuation, this.fog = A.fog, this;
  }
}, pi, en = new j(), Ui = new j(), Fi = new j(), Ri = new nA(), tn = new nA(), Fs = new Re(), Ra = new j(), on = new j(), wa = new j(), aK = new nA(), o82 = new nA(), fK = new nA(), Ni = class extends Xe {
  constructor(A = new Lo()) {
    if (super(), this.isSprite = true, this.type = "Sprite", pi === void 0) {
      pi = new he();
      let e = new Float32Array([-0.5, -0.5, 0, 0, 0, 0.5, -0.5, 0, 1, 0, 0.5, 0.5, 0, 1, 1, -0.5, 0.5, 0, 0, 1]), t = new Hn(e, 5);
      pi.setIndex([0, 1, 2, 0, 2, 3]), pi.setAttribute("position", new Kt(t, 3, 0, false)), pi.setAttribute("uv", new Kt(t, 2, 3, false));
    }
    this.geometry = pi, this.material = A, this.center = new nA(0.5, 0.5), this.count = 1;
  }
  intersectsFrustum(A) {
    return A.intersectsSprite(this);
  }
  raycast(A, e) {
    A.camera === null && bA('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'), Ui.setFromMatrixScale(this.matrixWorld), Fs.copy(A.camera.matrixWorld), this.modelViewMatrix.multiplyMatrices(A.camera.matrixWorldInverse, this.matrixWorld), Fi.setFromMatrixPosition(this.modelViewMatrix), A.camera.isPerspectiveCamera && this.material.sizeAttenuation === false && Ui.multiplyScalar(-Fi.z);
    let t = this.material.rotation, i, n;
    t !== 0 && (n = Math.cos(t), i = Math.sin(t));
    let a = this.center;
    ca(Ra.set(-0.5, -0.5, 0), Fi, a, Ui, i, n), ca(on.set(0.5, -0.5, 0), Fi, a, Ui, i, n), ca(wa.set(0.5, 0.5, 0), Fi, a, Ui, i, n), aK.set(0, 0), o82.set(1, 0), fK.set(1, 1);
    let f = A.ray.intersectTriangle(Ra, on, wa, false, en);
    if (f === null && (ca(on.set(-0.5, 0.5, 0), Fi, a, Ui, i, n), o82.set(0, 1), f = A.ray.intersectTriangle(Ra, wa, on, false, en), f === null)) return;
    let r = A.ray.origin.distanceTo(en);
    r < A.near || r > A.far || e.push({ distance: r, point: en.clone(), uv: oo.getInterpolation(en, Ra, on, wa, aK, o82, fK, new nA()), face: null, object: this });
  }
  copy(A, e) {
    return super.copy(A, e), A.center !== void 0 && this.center.copy(A.center), this.material = A.material, this;
  }
};
function ca(o22, A, e, t, i, n) {
  Ri.subVectors(o22, e).addScalar(0.5).multiply(t), i !== void 0 ? (tn.x = n * Ri.x - i * Ri.y, tn.y = i * Ri.x + n * Ri.y) : tn.copy(Ri), o22.copy(A), o22.x += tn.x, o22.y += tn.y, o22.applyMatrix4(Fs);
}
var to = new j(), i8 = new j(), la = new j(), ga = new j(), lo = class {
  constructor(A = new j(), e = new j(0, 0, -1)) {
    this.origin = A, this.direction = e;
  }
  set(A, e) {
    return this.origin.copy(A), this.direction.copy(e), this;
  }
  copy(A) {
    return this.origin.copy(A.origin), this.direction.copy(A.direction), this;
  }
  at(A, e) {
    return e.copy(this.origin).addScaledVector(this.direction, A);
  }
  lookAt(A) {
    return this.direction.copy(A).sub(this.origin).normalize(), this;
  }
  recast(A) {
    return this.origin.copy(this.at(A, to)), this;
  }
  closestPointToPoint(A, e) {
    e.subVectors(A, this.origin);
    let t = e.dot(this.direction);
    return t < 0 ? e.copy(this.origin) : e.copy(this.origin).addScaledVector(this.direction, t);
  }
  distanceToPoint(A) {
    return Math.sqrt(this.distanceSqToPoint(A));
  }
  distanceSqToPoint(A) {
    let e = to.subVectors(A, this.origin).dot(this.direction);
    return e < 0 ? this.origin.distanceToSquared(A) : (to.copy(this.origin).addScaledVector(this.direction, e), to.distanceToSquared(A));
  }
  distanceSqToSegment(A, e, t, i) {
    i8.copy(A).add(e).multiplyScalar(0.5), la.copy(e).sub(A).normalize(), ga.copy(this.origin).sub(i8);
    let n = A.distanceTo(e) * 0.5, a = -this.direction.dot(la), f = ga.dot(this.direction), r = -ga.dot(la), P = ga.lengthSq(), s = Math.abs(1 - a * a), p, K, U, w;
    if (s > 0) if (p = a * r - f, K = a * f - r, w = n * s, p >= 0) if (K >= -w) if (K <= w) {
      let l = 1 / s;
      p *= l, K *= l, U = p * (p + a * K + 2 * f) + K * (a * p + K + 2 * r) + P;
    } else K = n, p = Math.max(0, -(a * K + f)), U = -p * p + K * (K + 2 * r) + P;
    else K = -n, p = Math.max(0, -(a * K + f)), U = -p * p + K * (K + 2 * r) + P;
    else K <= -w ? (p = Math.max(0, -(-a * n + f)), K = p > 0 ? -n : Math.min(Math.max(-n, -r), n), U = -p * p + K * (K + 2 * r) + P) : K <= w ? (p = 0, K = Math.min(Math.max(-n, -r), n), U = K * (K + 2 * r) + P) : (p = Math.max(0, -(a * n + f)), K = p > 0 ? n : Math.min(Math.max(-n, -r), n), U = -p * p + K * (K + 2 * r) + P);
    else K = a > 0 ? -n : n, p = Math.max(0, -(a * K + f)), U = -p * p + K * (K + 2 * r) + P;
    return t && t.copy(this.origin).addScaledVector(this.direction, p), i && i.copy(i8).addScaledVector(la, K), U;
  }
  intersectSphere(A, e) {
    if (A.radius < 0) return null;
    to.subVectors(A.center, this.origin);
    let t = to.dot(this.direction), i = to.dot(to) - t * t, n = A.radius * A.radius;
    if (i > n) return null;
    let a = Math.sqrt(n - i), f = t - a, r = t + a;
    return r < 0 ? null : f < 0 ? this.at(r, e) : this.at(f, e);
  }
  intersectsSphere(A) {
    return A.radius < 0 ? false : this.distanceSqToPoint(A.center) <= A.radius * A.radius;
  }
  distanceToPlane(A) {
    let e = A.normal.dot(this.direction);
    if (e === 0) return A.distanceToPoint(this.origin) === 0 ? 0 : null;
    let t = -(this.origin.dot(A.normal) + A.constant) / e;
    return t >= 0 ? t : null;
  }
  intersectPlane(A, e) {
    let t = this.distanceToPlane(A);
    return t === null ? null : this.at(t, e);
  }
  intersectsPlane(A) {
    let e = A.distanceToPoint(this.origin);
    return e === 0 || A.normal.dot(this.direction) * e < 0;
  }
  intersectBox(A, e) {
    let t, i, n, a, f, r, P = 1 / this.direction.x, s = 1 / this.direction.y, p = 1 / this.direction.z, K = this.origin;
    return P >= 0 ? (t = (A.min.x - K.x) * P, i = (A.max.x - K.x) * P) : (t = (A.max.x - K.x) * P, i = (A.min.x - K.x) * P), s >= 0 ? (n = (A.min.y - K.y) * s, a = (A.max.y - K.y) * s) : (n = (A.max.y - K.y) * s, a = (A.min.y - K.y) * s), t > a || n > i || ((n > t || isNaN(t)) && (t = n), (a < i || isNaN(i)) && (i = a), p >= 0 ? (f = (A.min.z - K.z) * p, r = (A.max.z - K.z) * p) : (f = (A.max.z - K.z) * p, r = (A.min.z - K.z) * p), t > r || f > i) || ((f > t || t !== t) && (t = f), (r < i || i !== i) && (i = r), i < 0) ? null : this.at(t >= 0 ? t : i, e);
  }
  intersectsBox(A) {
    return this.intersectBox(A, to) !== null;
  }
  intersectTriangle(A, e, t, i, n) {
    let a = this.origin, f = this.direction, r = f.x, P = f.y, s = f.z, p = A.x - a.x, K = A.y - a.y, U = A.z - a.z, w = e.x - a.x, l = e.y - a.y, R = e.z - a.z, F = t.x - a.x, u = t.y - a.y, D = t.z - a.z, v = Math.abs(r), x = Math.abs(P), h = Math.abs(s), S, g, B, N, O, G, M, m, k, W, V, aA;
    if (v >= x && v >= h ? (B = r, G = p, k = w, aA = F, r >= 0 ? (S = P, g = s, N = K, O = U, M = l, m = R, W = u, V = D) : (S = s, g = P, N = U, O = K, M = R, m = l, W = D, V = u)) : x >= h ? (B = P, G = K, k = l, aA = u, P >= 0 ? (S = s, g = r, N = U, O = p, M = R, m = w, W = D, V = F) : (S = r, g = s, N = p, O = U, M = w, m = R, W = F, V = D)) : (B = s, G = U, k = R, aA = D, s >= 0 ? (S = r, g = P, N = p, O = K, M = w, m = l, W = F, V = u) : (S = P, g = r, N = K, O = p, M = l, m = w, W = u, V = F)), B === 0) return null;
    let q = S / B, AA = g / B, oA = 1 / B, TA = N - q * G, BA = O - AA * G, fe = M - q * k, _A = m - AA * k, oe = W - q * aA, Z = V - AA * aA, eA = oe * _A - Z * fe, HA = TA * Z - BA * oe, zA = fe * BA - _A * TA;
    if (i) {
      if (eA < 0 || HA < 0 || zA < 0) return null;
    } else if ((eA < 0 || HA < 0 || zA < 0) && (eA > 0 || HA > 0 || zA > 0)) return null;
    let xA = eA + HA + zA;
    if (xA === 0) return null;
    let MA = oA * (eA * G + HA * k + zA * aA);
    return (xA > 0 ? MA < 0 : MA > 0) ? null : this.at(MA / xA, n);
  }
  applyMatrix4(A) {
    return this.origin.applyMatrix4(A), this.direction.transformDirection(A), this;
  }
  equals(A) {
    return A.origin.equals(this.origin) && A.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}, Rt = class extends Mt {
  constructor(A) {
    super(), this.isMeshBasicMaterial = true, this.type = "MeshBasicMaterial", this.color = new JA(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new no(), this.combine = C8, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = true, this.setValues(A);
  }
  copy(A) {
    return super.copy(A), this.color.copy(A.color), this.map = A.map, this.lightMap = A.lightMap, this.lightMapIntensity = A.lightMapIntensity, this.aoMap = A.aoMap, this.aoMapIntensity = A.aoMapIntensity, this.specularMap = A.specularMap, this.alphaMap = A.alphaMap, this.envMap = A.envMap, this.envMapRotation.copy(A.envMapRotation), this.combine = A.combine, this.reflectivity = A.reflectivity, this.refractionRatio = A.refractionRatio, this.wireframe = A.wireframe, this.wireframeLinewidth = A.wireframeLinewidth, this.wireframeLinecap = A.wireframeLinecap, this.wireframeLinejoin = A.wireframeLinejoin, this.fog = A.fog, this;
  }
}, rK = new Re(), zo = new lo(), Ha = new Bt(), PK = new j(), va = new j(), ua = new j(), da = new j(), n8 = new j(), xa = new j(), KK = new j(), ha = new j(), ne = class extends Xe {
  constructor(A = new he(), e = new Rt()) {
    super(), this.isMesh = true, this.type = "Mesh", this.geometry = A, this.material = e, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.count = 1, this.updateMorphTargets();
  }
  copy(A, e) {
    return super.copy(A, e), A.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = A.morphTargetInfluences.slice()), A.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, A.morphTargetDictionary)), this.material = Array.isArray(A.material) ? A.material.slice() : A.material, this.geometry = A.geometry, this;
  }
  updateMorphTargets() {
    let e = this.geometry.morphAttributes, t = Object.keys(e);
    if (t.length > 0) {
      let i = e[t[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let n = 0, a = i.length; n < a; n++) {
          let f = i[n].name || String(n);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[f] = n;
        }
      }
    }
  }
  getVertexPosition(A, e) {
    let t = this.geometry, i = t.attributes.position, n = t.morphAttributes.position, a = t.morphTargetsRelative;
    e.fromBufferAttribute(i, A);
    let f = this.morphTargetInfluences;
    if (n && f) {
      xa.set(0, 0, 0);
      for (let r = 0, P = n.length; r < P; r++) {
        let s = f[r], p = n[r];
        s !== 0 && (n8.fromBufferAttribute(p, A), a ? xa.addScaledVector(n8, s) : xa.addScaledVector(n8.sub(e), s));
      }
      e.add(xa);
    }
    return e;
  }
  intersectsFrustum(A) {
    return A.intersectsObject(this);
  }
  raycast(A, e) {
    let t = this.geometry, i = this.material, n = this.matrixWorld;
    i !== void 0 && (t.boundingSphere === null && t.computeBoundingSphere(), Ha.copy(t.boundingSphere), Ha.applyMatrix4(n), zo.copy(A.ray).recast(A.near), !(Ha.containsPoint(zo.origin) === false && (zo.intersectSphere(Ha, PK) === null || zo.origin.distanceToSquared(PK) > (A.far - A.near) ** 2)) && (rK.copy(n).invert(), zo.copy(A.ray).applyMatrix4(rK), !(t.boundingBox !== null && zo.intersectsBox(t.boundingBox) === false) && this._computeIntersections(A, e, zo)));
  }
  _computeIntersections(A, e, t) {
    let i, n = this.geometry, a = this.material, f = n.index, r = n.attributes.position, P = n.attributes.uv, s = n.attributes.uv1, p = n.attributes.normal, K = n.groups, U = n.drawRange;
    if (f !== null) if (Array.isArray(a)) for (let w = 0, l = K.length; w < l; w++) {
      let R = K[w], F = a[R.materialIndex], u = Math.max(R.start, U.start), D = Math.min(f.count, Math.min(R.start + R.count, U.start + U.count));
      for (let v = u, x = D; v < x; v += 3) {
        let h = f.getX(v), S = f.getX(v + 1), g = f.getX(v + 2);
        i = Da(this, F, A, t, P, s, p, h, S, g), i && (i.faceIndex = Math.floor(v / 3), i.face.materialIndex = R.materialIndex, e.push(i));
      }
    }
    else {
      let w = Math.max(0, U.start), l = Math.min(f.count, U.start + U.count);
      for (let R = w, F = l; R < F; R += 3) {
        let u = f.getX(R), D = f.getX(R + 1), v = f.getX(R + 2);
        i = Da(this, a, A, t, P, s, p, u, D, v), i && (i.faceIndex = Math.floor(R / 3), e.push(i));
      }
    }
    else if (r !== void 0) if (Array.isArray(a)) for (let w = 0, l = K.length; w < l; w++) {
      let R = K[w], F = a[R.materialIndex], u = Math.max(R.start, U.start), D = Math.min(r.count, Math.min(R.start + R.count, U.start + U.count));
      for (let v = u, x = D; v < x; v += 3) {
        let h = v, S = v + 1, g = v + 2;
        i = Da(this, F, A, t, P, s, p, h, S, g), i && (i.faceIndex = Math.floor(v / 3), i.face.materialIndex = R.materialIndex, e.push(i));
      }
    }
    else {
      let w = Math.max(0, U.start), l = Math.min(r.count, U.start + U.count);
      for (let R = w, F = l; R < F; R += 3) {
        let u = R, D = R + 1, v = R + 2;
        i = Da(this, a, A, t, P, s, p, u, D, v), i && (i.faceIndex = Math.floor(R / 3), e.push(i));
      }
    }
  }
};
function sp(o22, A, e, t, i, n, a, f) {
  let r;
  if (A.side === Ze ? r = t.intersectTriangle(a, n, i, true, f) : r = t.intersectTriangle(i, n, a, A.side === No, f), r === null) return null;
  ha.copy(f), ha.applyMatrix4(o22.matrixWorld);
  let P = e.ray.origin.distanceTo(ha);
  return P < e.near || P > e.far ? null : { distance: P, point: ha.clone(), object: o22 };
}
function Da(o22, A, e, t, i, n, a, f, r, P) {
  o22.getVertexPosition(f, va), o22.getVertexPosition(r, ua), o22.getVertexPosition(P, da);
  let s = sp(o22, A, e, t, va, ua, da, KK);
  if (s) {
    let p = new j();
    oo.getBarycoord(KK, va, ua, da, p), i && (s.uv = oo.getInterpolatedAttribute(i, f, r, P, p, new nA())), n && (s.uv1 = oo.getInterpolatedAttribute(n, f, r, P, p, new nA())), a && (s.normal = oo.getInterpolatedAttribute(a, f, r, P, p, new j()), s.normal.dot(t.direction) > 0 && s.normal.multiplyScalar(-1));
    let K = { a: f, b: r, c: P, normal: new j(), materialIndex: 0 };
    oo.getNormal(va, ua, da, K.normal), s.face = K, s.barycoord = p;
  }
  return s;
}
var Ea = class extends Je {
  constructor(A = null, e = 1, t = 1, i, n, a, f, r, P = me, s = me, p, K) {
    super(null, a, f, r, P, s, i, n, p, K), this.isDataTexture = true, this.image = { data: A, width: e, height: t }, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1;
  }
};
var Mo = new Bt(), pp = new nA(0.5, 0.5), Ba = new j(), Ci = class {
  constructor(A = new at(), e = new at(), t = new at(), i = new at(), n = new at(), a = new at()) {
    this.planes = [A, e, t, i, n, a];
  }
  set(A, e, t, i, n, a) {
    let f = this.planes;
    return f[0].copy(A), f[1].copy(e), f[2].copy(t), f[3].copy(i), f[4].copy(n), f[5].copy(a), this;
  }
  copy(A) {
    let e = this.planes;
    for (let t = 0; t < 6; t++) e[t].copy(A.planes[t]);
    return this;
  }
  setFromProjectionMatrix(A, e = ht, t = false) {
    let i = this.planes, n = A.elements, a = n[0], f = n[1], r = n[2], P = n[3], s = n[4], p = n[5], K = n[6], U = n[7], w = n[8], l = n[9], R = n[10], F = n[11], u = n[12], D = n[13], v = n[14], x = n[15];
    if (i[0].setComponents(P - a, U - s, F - w, x - u).normalize(), i[1].setComponents(P + a, U + s, F + w, x + u).normalize(), i[2].setComponents(P + f, U + p, F + l, x + D).normalize(), i[3].setComponents(P - f, U - p, F - l, x - D).normalize(), t) i[4].setComponents(r, K, R, v).normalize(), i[5].setComponents(P - r, U - K, F - R, x - v).normalize();
    else if (i[4].setComponents(P - r, U - K, F - R, x - v).normalize(), e === ht) i[5].setComponents(P + r, U + K, F + R, x + v).normalize();
    else if (e === xi) i[5].setComponents(r, K, R, v).normalize();
    else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + e);
    return this;
  }
  intersectsObject(A) {
    if (A.boundingSphere !== void 0) A.boundingSphere === null && A.computeBoundingSphere(), Mo.copy(A.boundingSphere).applyMatrix4(A.matrixWorld);
    else {
      let e = A.geometry;
      e.boundingSphere === null && e.computeBoundingSphere(), Mo.copy(e.boundingSphere).applyMatrix4(A.matrixWorld);
    }
    return this.intersectsSphere(Mo);
  }
  intersectsSprite(A) {
    Mo.center.set(0, 0, 0);
    let e = pp.distanceTo(A.center);
    return Mo.radius = 0.7071067811865476 + e, Mo.applyMatrix4(A.matrixWorld), this.intersectsSphere(Mo);
  }
  intersectsSphere(A) {
    let e = this.planes, t = A.center, i = -A.radius;
    for (let n = 0; n < 6; n++) if (e[n].distanceToPoint(t) < i) return false;
    return true;
  }
  intersectsBox(A) {
    let e = this.planes;
    for (let t = 0; t < 6; t++) {
      let i = e[t];
      if (Ba.x = i.normal.x > 0 ? A.max.x : A.min.x, Ba.y = i.normal.y > 0 ? A.max.y : A.min.y, Ba.z = i.normal.z > 0 ? A.max.z : A.min.z, i.distanceToPoint(Ba) < 0) return false;
    }
    return true;
  }
  containsPoint(A) {
    let e = this.planes;
    for (let t = 0; t < 6; t++) if (e[t].distanceToPoint(A) < 0) return false;
    return true;
  }
  clone() {
    return new this.constructor().copy(this);
  }
};
var Vo = class extends Mt {
  constructor(A) {
    super(), this.isLineBasicMaterial = true, this.type = "LineBasicMaterial", this.color = new JA(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = true, this.setValues(A);
  }
  copy(A) {
    return super.copy(A), this.color.copy(A.color), this.map = A.map, this.linewidth = A.linewidth, this.linecap = A.linecap, this.linejoin = A.linejoin, this.fog = A.fog, this;
  }
}, Za = new j(), Ya = new j(), sK = new Re(), nn = new lo(), ja = new Bt(), a8 = new j(), pK = new j(), _a = class extends Xe {
  constructor(A = new he(), e = new Vo()) {
    super(), this.isLine = true, this.type = "Line", this.geometry = A, this.material = e, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.updateMorphTargets();
  }
  copy(A, e) {
    return super.copy(A, e), this.material = Array.isArray(A.material) ? A.material.slice() : A.material, this.geometry = A.geometry, this;
  }
  computeLineDistances() {
    let A = this.geometry;
    if (A.index === null) {
      let e = A.attributes.position, t = [0];
      for (let i = 1, n = e.count; i < n; i++) Za.fromBufferAttribute(e, i - 1), Ya.fromBufferAttribute(e, i), t[i] = t[i - 1], t[i] += Za.distanceTo(Ya);
      A.setAttribute("lineDistance", new te(t, 1));
    } else GA("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
  intersectsFrustum(A) {
    return A.intersectsObject(this);
  }
  raycast(A, e) {
    let t = this.geometry, i = this.matrixWorld, n = A.params.Line.threshold, a = t.drawRange;
    if (t.boundingSphere === null && t.computeBoundingSphere(), ja.copy(t.boundingSphere), ja.applyMatrix4(i), ja.radius += n, A.ray.intersectsSphere(ja) === false) return;
    sK.copy(i).invert(), nn.copy(A.ray).applyMatrix4(sK);
    let f = n / ((this.scale.x + this.scale.y + this.scale.z) / 3), r = f * f, P = this.isLineSegments ? 2 : 1, s = t.index, K = t.attributes.position;
    if (s !== null) {
      let U = Math.max(0, a.start), w = Math.min(s.count, a.start + a.count);
      for (let l = U, R = w - 1; l < R; l += P) {
        let F = s.getX(l), u = s.getX(l + 1), D = Sa(this, A, nn, r, F, u, l);
        D && e.push(D);
      }
      if (this.isLineLoop) {
        let l = s.getX(w - 1), R = s.getX(U), F = Sa(this, A, nn, r, l, R, w - 1);
        F && e.push(F);
      }
    } else {
      let U = Math.max(0, a.start), w = Math.min(K.count, a.start + a.count);
      for (let l = U, R = w - 1; l < R; l += P) {
        let F = Sa(this, A, nn, r, l, l + 1, l);
        F && e.push(F);
      }
      if (this.isLineLoop) {
        let l = Sa(this, A, nn, r, w - 1, U, w - 1);
        l && e.push(l);
      }
    }
  }
  updateMorphTargets() {
    let e = this.geometry.morphAttributes, t = Object.keys(e);
    if (t.length > 0) {
      let i = e[t[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let n = 0, a = i.length; n < a; n++) {
          let f = i[n].name || String(n);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[f] = n;
        }
      }
    }
  }
};
function Sa(o22, A, e, t, i, n, a) {
  let f = o22.geometry.attributes.position;
  if (Za.fromBufferAttribute(f, i), Ya.fromBufferAttribute(f, n), e.distanceSqToSegment(Za, Ya, a8, pK) > t) return;
  a8.applyMatrix4(o22.matrixWorld);
  let P = A.ray.origin.distanceTo(a8);
  if (!(P < A.near || P > A.far)) return { distance: P, point: pK.clone().applyMatrix4(o22.matrixWorld), index: a, face: null, faceIndex: null, barycoord: null, object: o22 };
}
var UK = new j(), FK = new j(), Ti = class extends _a {
  constructor(A, e) {
    super(A, e), this.isLineSegments = true, this.type = "LineSegments";
  }
  computeLineDistances() {
    let A = this.geometry;
    if (A.index === null) {
      let e = A.attributes.position, t = [];
      for (let i = 0, n = e.count; i < n; i += 2) UK.fromBufferAttribute(e, i), FK.fromBufferAttribute(e, i + 1), t[i] = i === 0 ? 0 : t[i - 1], t[i + 1] = t[i] + UK.distanceTo(FK);
      A.setAttribute("lineDistance", new te(t, 1));
    } else GA("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
};
var vn = class extends Je {
  constructor(A = [], e = Co, t, i, n, a, f, r, P, s) {
    super(A, e, t, i, n, a, f, r, P, s), this.isCubeTexture = true, this.flipY = false;
  }
  get images() {
    return this.image;
  }
  set images(A) {
    this.image = A;
  }
}, go = class extends Je {
  constructor(A, e, t, i, n, a, f, r, P) {
    super(A, e, t, i, n, a, f, r, P), this.isCanvasTexture = true, this.needsUpdate = true;
  }
};
var Ho = class extends Je {
  constructor(A, e, t = St, i, n, a, f = me, r = me, P, s = zt, p = 1) {
    if (s !== zt && s !== mo) throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    let K = { width: A, height: e, depth: p };
    super(K, i, n, a, f, r, s, t, P), this.isDepthTexture = true, this.flipY = false, this.generateMipmaps = false, this.compareFunction = null;
  }
  copy(A) {
    return super.copy(A), this.source = new Bi(Object.assign({}, A.image)), this.compareFunction = A.compareFunction, this;
  }
  toJSON(A) {
    let e = super.toJSON(A);
    return e.compareFunction = this.compareFunction, e;
  }
}, $a = class extends Ho {
  constructor(A, e = St, t = Co, i, n, a = me, f = me, r, P = zt) {
    let s = { width: A, height: A, depth: 1 }, p = [s, s, s, s, s, s];
    super(A, A, e, t, i, n, a, f, r, P), this.image = p, this.isCubeDepthTexture = true, this.isCubeTexture = true;
  }
  get images() {
    return this.image;
  }
  set images(A) {
    this.image = A;
  }
}, un = class extends Je {
  constructor(A = null) {
    super(), this.sourceTexture = A, this.isExternalTexture = true;
  }
  copy(A) {
    return super.copy(A), this.sourceTexture = A.sourceTexture, this;
  }
}, yt = class o12 extends he {
  constructor(A = 1, e = 1, t = 1, i = 1, n = 1, a = 1) {
    super(), this.type = "BoxGeometry", this.parameters = { width: A, height: e, depth: t, widthSegments: i, heightSegments: n, depthSegments: a };
    let f = this;
    i = Math.floor(i), n = Math.floor(n), a = Math.floor(a);
    let r = [], P = [], s = [], p = [], K = 0, U = 0;
    w("z", "y", "x", -1, -1, t, e, A, a, n, 0), w("z", "y", "x", 1, -1, t, e, -A, a, n, 1), w("x", "z", "y", 1, 1, A, t, e, i, a, 2), w("x", "z", "y", 1, -1, A, t, -e, i, a, 3), w("x", "y", "z", 1, -1, A, e, t, i, n, 4), w("x", "y", "z", -1, -1, A, e, -t, i, n, 5), this.setIndex(r), this.setAttribute("position", new te(P, 3)), this.setAttribute("normal", new te(s, 3)), this.setAttribute("uv", new te(p, 2));
    function w(l, R, F, u, D, v, x, h, S, g, B) {
      let N = v / S, O = x / g, G = v / 2, M = x / 2, m = h / 2, k = S + 1, W = g + 1, V = 0, aA = 0, q = new j();
      for (let AA = 0; AA < W; AA++) {
        let oA = AA * O - M;
        for (let TA = 0; TA < k; TA++) {
          let BA = TA * N - G;
          q[l] = BA * u, q[R] = oA * D, q[F] = m, P.push(q.x, q.y, q.z), q[l] = 0, q[R] = 0, q[F] = h > 0 ? 1 : -1, s.push(q.x, q.y, q.z), p.push(TA / S), p.push(1 - AA / g), V += 1;
        }
      }
      for (let AA = 0; AA < g; AA++) for (let oA = 0; oA < S; oA++) {
        let TA = K + oA + k * AA, BA = K + oA + k * (AA + 1), fe = K + (oA + 1) + k * (AA + 1), _A = K + (oA + 1) + k * AA;
        r.push(TA, BA, _A), r.push(BA, fe, _A), aA += 6;
      }
      f.addGroup(U, aA, B), U += aA, K += V;
    }
  }
  copy(A) {
    return super.copy(A), this.parameters = Object.assign({}, A.parameters), this;
  }
  static fromJSON(A) {
    return new o12(A.width, A.height, A.depth, A.widthSegments, A.heightSegments, A.depthSegments);
  }
};
var mi = class o13 extends he {
  constructor(A = 1, e = 1, t = 1, i = 32, n = 1, a = false, f = 0, r = Math.PI * 2) {
    super(), this.type = "CylinderGeometry", this.parameters = { radiusTop: A, radiusBottom: e, height: t, radialSegments: i, heightSegments: n, openEnded: a, thetaStart: f, thetaLength: r };
    let P = this;
    i = Math.floor(i), n = Math.floor(n);
    let s = [], p = [], K = [], U = [], w = 0, l = [], R = t / 2, F = 0;
    u(), a === false && (A > 0 && D(true), e > 0 && D(false)), this.setIndex(s), this.setAttribute("position", new te(p, 3)), this.setAttribute("normal", new te(K, 3)), this.setAttribute("uv", new te(U, 2));
    function u() {
      let v = new j(), x = new j(), h = 0, S = (e - A) / t;
      for (let g = 0; g <= n; g++) {
        let B = [], N = g / n, O = N * (e - A) + A;
        for (let G = 0; G <= i; G++) {
          let M = G / i, m = M * r + f, k = Math.sin(m), W = Math.cos(m);
          x.x = O * k, x.y = -N * t + R, x.z = O * W, p.push(x.x, x.y, x.z), v.set(k, S, W).normalize(), K.push(v.x, v.y, v.z), U.push(M, 1 - N), B.push(w++);
        }
        l.push(B);
      }
      for (let g = 0; g < i; g++) for (let B = 0; B < n; B++) {
        let N = l[B][g], O = l[B + 1][g], G = l[B + 1][g + 1], M = l[B][g + 1];
        (A > 0 || B !== 0) && (s.push(N, O, M), h += 3), (e > 0 || B !== n - 1) && (s.push(O, G, M), h += 3);
      }
      P.addGroup(F, h, 0), F += h;
    }
    function D(v) {
      let x = w, h = new nA(), S = new j(), g = 0, B = v === true ? A : e, N = v === true ? 1 : -1;
      for (let G = 1; G <= i; G++) p.push(0, R * N, 0), K.push(0, N, 0), U.push(0.5, 0.5), w++;
      let O = w;
      for (let G = 0; G <= i; G++) {
        let m = G / i * r + f, k = Math.cos(m), W = Math.sin(m);
        S.x = B * W, S.y = R * N, S.z = B * k, p.push(S.x, S.y, S.z), K.push(0, N, 0), h.x = k * 0.5 + 0.5, h.y = W * 0.5 * N + 0.5, U.push(h.x, h.y), w++;
      }
      for (let G = 0; G < i; G++) {
        let M = x + G, m = O + G;
        v === true ? s.push(m, m + 1, M) : s.push(m + 1, m, M), g += 3;
      }
      P.addGroup(F, g, v === true ? 1 : 2), F += g;
    }
  }
  copy(A) {
    return super.copy(A), this.parameters = Object.assign({}, A.parameters), this;
  }
  static fromJSON(A) {
    return new o13(A.radiusTop, A.radiusBottom, A.height, A.radialSegments, A.heightSegments, A.openEnded, A.thetaStart, A.thetaLength);
  }
};
var st = class {
  constructor() {
    this.type = "Curve", this.arcLengthDivisions = 200, this.needsUpdate = false, this.cacheArcLengths = null;
  }
  getPoint() {
    GA("Curve: .getPoint() not implemented.");
  }
  getPointAt(A, e) {
    let t = this.getUtoTmapping(A);
    return this.getPoint(t, e);
  }
  getPoints(A = 5) {
    let e = [];
    for (let t = 0; t <= A; t++) e.push(this.getPoint(t / A));
    return e;
  }
  getSpacedPoints(A = 5) {
    let e = [];
    for (let t = 0; t <= A; t++) e.push(this.getPointAt(t / A));
    return e;
  }
  getLength() {
    let A = this.getLengths();
    return A[A.length - 1];
  }
  getLengths(A = this.arcLengthDivisions) {
    if (this.cacheArcLengths && this.cacheArcLengths.length === A + 1 && !this.needsUpdate) return this.cacheArcLengths;
    this.needsUpdate = false;
    let e = [], t, i = this.getPoint(0), n = 0;
    e.push(0);
    for (let a = 1; a <= A; a++) t = this.getPoint(a / A), n += t.distanceTo(i), e.push(n), i = t;
    return this.cacheArcLengths = e, e;
  }
  updateArcLengths() {
    this.needsUpdate = true, this.getLengths();
  }
  getUtoTmapping(A, e = null) {
    let t = this.getLengths(), i = 0, n = t.length, a;
    e ? a = e : a = A * t[n - 1];
    let f = 0, r = n - 1, P;
    for (; f <= r; ) if (i = Math.floor(f + (r - f) / 2), P = t[i] - a, P < 0) f = i + 1;
    else if (P > 0) r = i - 1;
    else {
      r = i;
      break;
    }
    if (i = r, t[i] === a) return i / (n - 1);
    let s = t[i], K = t[i + 1] - s, U = (a - s) / K;
    return (i + U) / (n - 1);
  }
  getTangent(A, e) {
    let i = A - 1e-4, n = A + 1e-4;
    i < 0 && (i = 0), n > 1 && (n = 1);
    let a = this.getPoint(i), f = this.getPoint(n), r = e || (a.isVector2 ? new nA() : new j());
    return r.copy(f).sub(a).normalize(), r;
  }
  getTangentAt(A, e) {
    let t = this.getUtoTmapping(A);
    return this.getTangent(t, e);
  }
  computeFrenetFrames(A, e = false) {
    let t = new j(), i = [], n = [], a = [], f = new j(), r = new Re();
    for (let U = 0; U <= A; U++) {
      let w = U / A;
      i[U] = this.getTangentAt(w, new j());
    }
    n[0] = new j(), a[0] = new j();
    let P = Number.MAX_VALUE, s = Math.abs(i[0].x), p = Math.abs(i[0].y), K = Math.abs(i[0].z);
    s <= P && (P = s, t.set(1, 0, 0)), p <= P && (P = p, t.set(0, 1, 0)), K <= P && t.set(0, 0, 1), f.crossVectors(i[0], t).normalize(), n[0].crossVectors(i[0], f), a[0].crossVectors(i[0], n[0]);
    for (let U = 1; U <= A; U++) {
      if (n[U] = n[U - 1].clone(), a[U] = a[U - 1].clone(), f.crossVectors(i[U - 1], i[U]), f.length() > Number.EPSILON) {
        f.normalize();
        let w = Math.acos(LA(i[U - 1].dot(i[U]), -1, 1));
        n[U].applyMatrix4(r.makeRotationAxis(f, w));
      }
      a[U].crossVectors(i[U], n[U]);
    }
    if (e === true) {
      let U = Math.acos(LA(n[0].dot(n[A]), -1, 1));
      U /= A, i[0].dot(f.crossVectors(n[0], n[A])) > 0 && (U = -U);
      for (let w = 1; w <= A; w++) n[w].applyMatrix4(r.makeRotationAxis(i[w], U * w)), a[w].crossVectors(i[w], n[w]);
    }
    return { tangents: i, normals: n, binormals: a };
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(A) {
    return this.arcLengthDivisions = A.arcLengthDivisions, this;
  }
  toJSON() {
    let A = { metadata: { version: 4.7, type: "Curve", generator: "Curve.toJSON" } };
    return A.arcLengthDivisions = this.arcLengthDivisions, A.type = this.type, A;
  }
  fromJSON(A) {
    return this.arcLengthDivisions = A.arcLengthDivisions, this;
  }
}, Xi = class extends st {
  constructor(A = 0, e = 0, t = 1, i = 1, n = 0, a = Math.PI * 2, f = false, r = 0) {
    super(), this.isEllipseCurve = true, this.type = "EllipseCurve", this.aX = A, this.aY = e, this.xRadius = t, this.yRadius = i, this.aStartAngle = n, this.aEndAngle = a, this.aClockwise = f, this.aRotation = r;
  }
  getPoint(A, e = new nA()) {
    let t = e, i = Math.PI * 2, n = this.aEndAngle - this.aStartAngle, a = Math.abs(n) < Number.EPSILON;
    for (; n < 0; ) n += i;
    for (; n > i; ) n -= i;
    n < Number.EPSILON && (a ? n = 0 : n = i), this.aClockwise === true && !a && (n === i ? n = -i : n = n - i);
    let f = this.aStartAngle + A * n, r = this.aX + this.xRadius * Math.cos(f), P = this.aY + this.yRadius * Math.sin(f);
    if (this.aRotation !== 0) {
      let s = Math.cos(this.aRotation), p = Math.sin(this.aRotation), K = r - this.aX, U = P - this.aY;
      r = K * s - U * p + this.aX, P = K * p + U * s + this.aY;
    }
    return t.set(r, P);
  }
  copy(A) {
    return super.copy(A), this.aX = A.aX, this.aY = A.aY, this.xRadius = A.xRadius, this.yRadius = A.yRadius, this.aStartAngle = A.aStartAngle, this.aEndAngle = A.aEndAngle, this.aClockwise = A.aClockwise, this.aRotation = A.aRotation, this;
  }
  toJSON() {
    let A = super.toJSON();
    return A.aX = this.aX, A.aY = this.aY, A.xRadius = this.xRadius, A.yRadius = this.yRadius, A.aStartAngle = this.aStartAngle, A.aEndAngle = this.aEndAngle, A.aClockwise = this.aClockwise, A.aRotation = this.aRotation, A;
  }
  fromJSON(A) {
    return super.fromJSON(A), this.aX = A.aX, this.aY = A.aY, this.xRadius = A.xRadius, this.yRadius = A.yRadius, this.aStartAngle = A.aStartAngle, this.aEndAngle = A.aEndAngle, this.aClockwise = A.aClockwise, this.aRotation = A.aRotation, this;
  }
}, Af = class extends Xi {
  constructor(A, e, t, i, n, a) {
    super(A, e, t, t, i, n, a), this.isArcCurve = true, this.type = "ArcCurve";
  }
};
function Y8() {
  let o22 = 0, A = 0, e = 0, t = 0;
  function i(n, a, f, r) {
    o22 = n, A = f, e = -3 * n + 3 * a - 2 * f - r, t = 2 * n - 2 * a + f + r;
  }
  return { initCatmullRom: function(n, a, f, r, P) {
    i(a, f, P * (f - n), P * (r - a));
  }, initNonuniformCatmullRom: function(n, a, f, r, P, s, p) {
    let K = (a - n) / P - (f - n) / (P + s) + (f - a) / s, U = (f - a) / s - (r - a) / (s + p) + (r - f) / p;
    K *= s, U *= s, i(a, f, K, U);
  }, calc: function(n) {
    let a = n * n, f = a * n;
    return o22 + A * n + e * a + t * f;
  } };
}
var RK = new j(), wK = new j(), f8 = new Y8(), r8 = new Y8(), P8 = new Y8(), ef = class extends st {
  constructor(A = [], e = false, t = "centripetal", i = 0.5) {
    super(), this.isCatmullRomCurve3 = true, this.type = "CatmullRomCurve3", this.points = A, this.closed = e, this.curveType = t, this.tension = i;
  }
  getPoint(A, e = new j()) {
    let t = e, i = this.points, n = i.length, a = (n - (this.closed ? 0 : 1)) * A, f = Math.floor(a), r = a - f;
    this.closed ? f += f > 0 ? 0 : (Math.floor(Math.abs(f) / n) + 1) * n : r === 0 && f === n - 1 && (f = n - 2, r = 1);
    let P, s;
    this.closed || f > 0 ? P = i[(f - 1) % n] : (wK.subVectors(i[0], i[1]).add(i[0]), P = wK);
    let p = i[f % n], K = i[(f + 1) % n];
    if (this.closed || f + 2 < n ? s = i[(f + 2) % n] : (RK.subVectors(i[n - 1], i[n - 2]).add(i[n - 1]), s = RK), this.curveType === "centripetal" || this.curveType === "chordal") {
      let U = this.curveType === "chordal" ? 0.5 : 0.25, w = Math.pow(P.distanceToSquared(p), U), l = Math.pow(p.distanceToSquared(K), U), R = Math.pow(K.distanceToSquared(s), U);
      l < 1e-4 && (l = 1), w < 1e-4 && (w = l), R < 1e-4 && (R = l), f8.initNonuniformCatmullRom(P.x, p.x, K.x, s.x, w, l, R), r8.initNonuniformCatmullRom(P.y, p.y, K.y, s.y, w, l, R), P8.initNonuniformCatmullRom(P.z, p.z, K.z, s.z, w, l, R);
    } else this.curveType === "catmullrom" && (f8.initCatmullRom(P.x, p.x, K.x, s.x, this.tension), r8.initCatmullRom(P.y, p.y, K.y, s.y, this.tension), P8.initCatmullRom(P.z, p.z, K.z, s.z, this.tension));
    return t.set(f8.calc(r), r8.calc(r), P8.calc(r)), t;
  }
  copy(A) {
    super.copy(A), this.points = [];
    for (let e = 0, t = A.points.length; e < t; e++) {
      let i = A.points[e];
      this.points.push(i.clone());
    }
    return this.closed = A.closed, this.curveType = A.curveType, this.tension = A.tension, this;
  }
  toJSON() {
    let A = super.toJSON();
    A.points = [];
    for (let e = 0, t = this.points.length; e < t; e++) {
      let i = this.points[e];
      A.points.push(i.toArray());
    }
    return A.closed = this.closed, A.curveType = this.curveType, A.tension = this.tension, A;
  }
  fromJSON(A) {
    super.fromJSON(A), this.points = [];
    for (let e = 0, t = A.points.length; e < t; e++) {
      let i = A.points[e];
      this.points.push(new j().fromArray(i));
    }
    return this.closed = A.closed, this.curveType = A.curveType, this.tension = A.tension, this;
  }
};
function cK(o22, A, e, t, i) {
  let n = (t - A) * 0.5, a = (i - e) * 0.5, f = o22 * o22, r = o22 * f;
  return (2 * e - 2 * t + n + a) * r + (-3 * e + 3 * t - 2 * n - a) * f + n * o22 + e;
}
function Up(o22, A) {
  let e = 1 - o22;
  return e * e * A;
}
function Fp(o22, A) {
  return 2 * (1 - o22) * o22 * A;
}
function Rp(o22, A) {
  return o22 * o22 * A;
}
function Pn(o22, A, e, t) {
  return Up(o22, A) + Fp(o22, e) + Rp(o22, t);
}
function wp(o22, A) {
  let e = 1 - o22;
  return e * e * e * A;
}
function cp(o22, A) {
  let e = 1 - o22;
  return 3 * e * e * o22 * A;
}
function lp(o22, A) {
  return 3 * (1 - o22) * o22 * o22 * A;
}
function gp(o22, A) {
  return o22 * o22 * o22 * A;
}
function Kn(o22, A, e, t, i) {
  return wp(o22, A) + cp(o22, e) + lp(o22, t) + gp(o22, i);
}
var dn = class extends st {
  constructor(A = new nA(), e = new nA(), t = new nA(), i = new nA()) {
    super(), this.isCubicBezierCurve = true, this.type = "CubicBezierCurve", this.v0 = A, this.v1 = e, this.v2 = t, this.v3 = i;
  }
  getPoint(A, e = new nA()) {
    let t = e, i = this.v0, n = this.v1, a = this.v2, f = this.v3;
    return t.set(Kn(A, i.x, n.x, a.x, f.x), Kn(A, i.y, n.y, a.y, f.y)), t;
  }
  copy(A) {
    return super.copy(A), this.v0.copy(A.v0), this.v1.copy(A.v1), this.v2.copy(A.v2), this.v3.copy(A.v3), this;
  }
  toJSON() {
    let A = super.toJSON();
    return A.v0 = this.v0.toArray(), A.v1 = this.v1.toArray(), A.v2 = this.v2.toArray(), A.v3 = this.v3.toArray(), A;
  }
  fromJSON(A) {
    return super.fromJSON(A), this.v0.fromArray(A.v0), this.v1.fromArray(A.v1), this.v2.fromArray(A.v2), this.v3.fromArray(A.v3), this;
  }
}, tf = class extends st {
  constructor(A = new j(), e = new j(), t = new j(), i = new j()) {
    super(), this.isCubicBezierCurve3 = true, this.type = "CubicBezierCurve3", this.v0 = A, this.v1 = e, this.v2 = t, this.v3 = i;
  }
  getPoint(A, e = new j()) {
    let t = e, i = this.v0, n = this.v1, a = this.v2, f = this.v3;
    return t.set(Kn(A, i.x, n.x, a.x, f.x), Kn(A, i.y, n.y, a.y, f.y), Kn(A, i.z, n.z, a.z, f.z)), t;
  }
  copy(A) {
    return super.copy(A), this.v0.copy(A.v0), this.v1.copy(A.v1), this.v2.copy(A.v2), this.v3.copy(A.v3), this;
  }
  toJSON() {
    let A = super.toJSON();
    return A.v0 = this.v0.toArray(), A.v1 = this.v1.toArray(), A.v2 = this.v2.toArray(), A.v3 = this.v3.toArray(), A;
  }
  fromJSON(A) {
    return super.fromJSON(A), this.v0.fromArray(A.v0), this.v1.fromArray(A.v1), this.v2.fromArray(A.v2), this.v3.fromArray(A.v3), this;
  }
}, xn = class extends st {
  constructor(A = new nA(), e = new nA()) {
    super(), this.isLineCurve = true, this.type = "LineCurve", this.v1 = A, this.v2 = e;
  }
  getPoint(A, e = new nA()) {
    let t = e;
    return A === 1 ? t.copy(this.v2) : (t.copy(this.v2).sub(this.v1), t.multiplyScalar(A).add(this.v1)), t;
  }
  getPointAt(A, e) {
    return this.getPoint(A, e);
  }
  getTangent(A, e = new nA()) {
    return e.subVectors(this.v2, this.v1).normalize();
  }
  getTangentAt(A, e) {
    return this.getTangent(A, e);
  }
  copy(A) {
    return super.copy(A), this.v1.copy(A.v1), this.v2.copy(A.v2), this;
  }
  toJSON() {
    let A = super.toJSON();
    return A.v1 = this.v1.toArray(), A.v2 = this.v2.toArray(), A;
  }
  fromJSON(A) {
    return super.fromJSON(A), this.v1.fromArray(A.v1), this.v2.fromArray(A.v2), this;
  }
}, of = class extends st {
  constructor(A = new j(), e = new j()) {
    super(), this.isLineCurve3 = true, this.type = "LineCurve3", this.v1 = A, this.v2 = e;
  }
  getPoint(A, e = new j()) {
    let t = e;
    return A === 1 ? t.copy(this.v2) : (t.copy(this.v2).sub(this.v1), t.multiplyScalar(A).add(this.v1)), t;
  }
  getPointAt(A, e) {
    return this.getPoint(A, e);
  }
  getTangent(A, e = new j()) {
    return e.subVectors(this.v2, this.v1).normalize();
  }
  getTangentAt(A, e) {
    return this.getTangent(A, e);
  }
  copy(A) {
    return super.copy(A), this.v1.copy(A.v1), this.v2.copy(A.v2), this;
  }
  toJSON() {
    let A = super.toJSON();
    return A.v1 = this.v1.toArray(), A.v2 = this.v2.toArray(), A;
  }
  fromJSON(A) {
    return super.fromJSON(A), this.v1.fromArray(A.v1), this.v2.fromArray(A.v2), this;
  }
}, hn = class extends st {
  constructor(A = new nA(), e = new nA(), t = new nA()) {
    super(), this.isQuadraticBezierCurve = true, this.type = "QuadraticBezierCurve", this.v0 = A, this.v1 = e, this.v2 = t;
  }
  getPoint(A, e = new nA()) {
    let t = e, i = this.v0, n = this.v1, a = this.v2;
    return t.set(Pn(A, i.x, n.x, a.x), Pn(A, i.y, n.y, a.y)), t;
  }
  copy(A) {
    return super.copy(A), this.v0.copy(A.v0), this.v1.copy(A.v1), this.v2.copy(A.v2), this;
  }
  toJSON() {
    let A = super.toJSON();
    return A.v0 = this.v0.toArray(), A.v1 = this.v1.toArray(), A.v2 = this.v2.toArray(), A;
  }
  fromJSON(A) {
    return super.fromJSON(A), this.v0.fromArray(A.v0), this.v1.fromArray(A.v1), this.v2.fromArray(A.v2), this;
  }
}, nf = class extends st {
  constructor(A = new j(), e = new j(), t = new j()) {
    super(), this.isQuadraticBezierCurve3 = true, this.type = "QuadraticBezierCurve3", this.v0 = A, this.v1 = e, this.v2 = t;
  }
  getPoint(A, e = new j()) {
    let t = e, i = this.v0, n = this.v1, a = this.v2;
    return t.set(Pn(A, i.x, n.x, a.x), Pn(A, i.y, n.y, a.y), Pn(A, i.z, n.z, a.z)), t;
  }
  copy(A) {
    return super.copy(A), this.v0.copy(A.v0), this.v1.copy(A.v1), this.v2.copy(A.v2), this;
  }
  toJSON() {
    let A = super.toJSON();
    return A.v0 = this.v0.toArray(), A.v1 = this.v1.toArray(), A.v2 = this.v2.toArray(), A;
  }
  fromJSON(A) {
    return super.fromJSON(A), this.v0.fromArray(A.v0), this.v1.fromArray(A.v1), this.v2.fromArray(A.v2), this;
  }
}, Dn = class extends st {
  constructor(A = []) {
    super(), this.isSplineCurve = true, this.type = "SplineCurve", this.points = A;
  }
  getPoint(A, e = new nA()) {
    let t = e, i = this.points, n = (i.length - 1) * A, a = Math.floor(n), f = n - a, r = i[a === 0 ? a : a - 1], P = i[a], s = i[a > i.length - 2 ? i.length - 1 : a + 1], p = i[a > i.length - 3 ? i.length - 1 : a + 2];
    return t.set(cK(f, r.x, P.x, s.x, p.x), cK(f, r.y, P.y, s.y, p.y)), t;
  }
  copy(A) {
    super.copy(A), this.points = [];
    for (let e = 0, t = A.points.length; e < t; e++) {
      let i = A.points[e];
      this.points.push(i.clone());
    }
    return this;
  }
  toJSON() {
    let A = super.toJSON();
    A.points = [];
    for (let e = 0, t = this.points.length; e < t; e++) {
      let i = this.points[e];
      A.points.push(i.toArray());
    }
    return A;
  }
  fromJSON(A) {
    super.fromJSON(A), this.points = [];
    for (let e = 0, t = A.points.length; e < t; e++) {
      let i = A.points[e];
      this.points.push(new nA().fromArray(i));
    }
    return this;
  }
}, c8 = Object.freeze({ __proto__: null, ArcCurve: Af, CatmullRomCurve3: ef, CubicBezierCurve: dn, CubicBezierCurve3: tf, EllipseCurve: Xi, LineCurve: xn, LineCurve3: of, QuadraticBezierCurve: hn, QuadraticBezierCurve3: nf, SplineCurve: Dn }), af = class extends st {
  constructor() {
    super(), this.type = "CurvePath", this.curves = [], this.autoClose = false;
  }
  add(A) {
    this.curves.push(A);
  }
  closePath() {
    let A = this.curves[0].getPoint(0), e = this.curves[this.curves.length - 1].getPoint(1);
    if (!A.equals(e)) {
      let t = A.isVector2 === true ? "LineCurve" : "LineCurve3";
      this.curves.push(new c8[t](e, A));
    }
    return this;
  }
  getPoint(A, e) {
    let t = A * this.getLength(), i = this.getCurveLengths(), n = 0;
    for (; n < i.length; ) {
      if (i[n] >= t) {
        let a = i[n] - t, f = this.curves[n], r = f.getLength(), P = r === 0 ? 0 : 1 - a / r;
        return f.getPointAt(P, e);
      }
      n++;
    }
    return null;
  }
  getLength() {
    let A = this.getCurveLengths();
    return A[A.length - 1];
  }
  updateArcLengths() {
    this.needsUpdate = true, this.cacheLengths = null, this.getCurveLengths();
  }
  getCurveLengths() {
    if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths;
    let A = [], e = 0;
    for (let t = 0, i = this.curves.length; t < i; t++) e += this.curves[t].getLength(), A.push(e);
    return this.cacheLengths = A, A;
  }
  getSpacedPoints(A = 40) {
    let e = [];
    for (let t = 0; t <= A; t++) e.push(this.getPoint(t / A));
    return this.autoClose && e.push(e[0]), e;
  }
  getPoints(A = 12) {
    let e = [], t;
    for (let i = 0, n = this.curves; i < n.length; i++) {
      let a = n[i], f = a.isEllipseCurve ? A * 2 : a.isLineCurve || a.isLineCurve3 ? 1 : a.isSplineCurve ? A * a.points.length : A, r = a.getPoints(f);
      for (let P = 0; P < r.length; P++) {
        let s = r[P];
        t && t.equals(s) || (e.push(s), t = s);
      }
    }
    return this.autoClose && e.length > 1 && !e[e.length - 1].equals(e[0]) && e.push(e[0]), e;
  }
  copy(A) {
    super.copy(A), this.curves = [];
    for (let e = 0, t = A.curves.length; e < t; e++) {
      let i = A.curves[e];
      this.curves.push(i.clone());
    }
    return this.autoClose = A.autoClose, this;
  }
  toJSON() {
    let A = super.toJSON();
    A.autoClose = this.autoClose, A.curves = [];
    for (let e = 0, t = this.curves.length; e < t; e++) {
      let i = this.curves[e];
      A.curves.push(i.toJSON());
    }
    return A;
  }
  fromJSON(A) {
    super.fromJSON(A), this.autoClose = A.autoClose, this.curves = [];
    for (let e = 0, t = A.curves.length; e < t; e++) {
      let i = A.curves[e];
      this.curves.push(new c8[i.type]().fromJSON(i));
    }
    return this;
  }
}, vo = class extends af {
  constructor(A) {
    super(), this.type = "Path", this.currentPoint = new nA(), A && this.setFromPoints(A);
  }
  setFromPoints(A) {
    this.moveTo(A[0].x, A[0].y);
    for (let e = 1, t = A.length; e < t; e++) this.lineTo(A[e].x, A[e].y);
    return this;
  }
  moveTo(A, e) {
    return this.currentPoint.set(A, e), this;
  }
  lineTo(A, e) {
    let t = new xn(this.currentPoint.clone(), new nA(A, e));
    return this.curves.push(t), this.currentPoint.set(A, e), this;
  }
  quadraticCurveTo(A, e, t, i) {
    let n = new hn(this.currentPoint.clone(), new nA(A, e), new nA(t, i));
    return this.curves.push(n), this.currentPoint.set(t, i), this;
  }
  bezierCurveTo(A, e, t, i, n, a) {
    let f = new dn(this.currentPoint.clone(), new nA(A, e), new nA(t, i), new nA(n, a));
    return this.curves.push(f), this.currentPoint.set(n, a), this;
  }
  splineThru(A) {
    let e = [this.currentPoint.clone()].concat(A), t = new Dn(e);
    return this.curves.push(t), this.currentPoint.copy(A[A.length - 1]), this;
  }
  arc(A, e, t, i, n, a) {
    let f = this.currentPoint.x, r = this.currentPoint.y;
    return this.absarc(A + f, e + r, t, i, n, a), this;
  }
  absarc(A, e, t, i, n, a) {
    return this.absellipse(A, e, t, t, i, n, a), this;
  }
  ellipse(A, e, t, i, n, a, f, r) {
    let P = this.currentPoint.x, s = this.currentPoint.y;
    return this.absellipse(A + P, e + s, t, i, n, a, f, r), this;
  }
  absellipse(A, e, t, i, n, a, f, r) {
    let P = new Xi(A, e, t, i, n, a, f, r);
    if (this.curves.length > 0) {
      let p = P.getPoint(0);
      p.equals(this.currentPoint) || this.lineTo(p.x, p.y);
    }
    this.curves.push(P);
    let s = P.getPoint(1);
    return this.currentPoint.copy(s), this;
  }
  copy(A) {
    return super.copy(A), this.currentPoint.copy(A.currentPoint), this;
  }
  toJSON() {
    let A = super.toJSON();
    return A.currentPoint = this.currentPoint.toArray(), A;
  }
  fromJSON(A) {
    return super.fromJSON(A), this.currentPoint.fromArray(A.currentPoint), this;
  }
}, Lt = class extends vo {
  constructor(A) {
    super(A), this.uuid = bt(), this.type = "Shape", this.holes = [];
  }
  getPointsHoles(A) {
    let e = [];
    for (let t = 0, i = this.holes.length; t < i; t++) e[t] = this.holes[t].getPoints(A);
    return e;
  }
  extractPoints(A) {
    return { shape: this.getPoints(A), holes: this.getPointsHoles(A) };
  }
  copy(A) {
    super.copy(A), this.holes = [];
    for (let e = 0, t = A.holes.length; e < t; e++) {
      let i = A.holes[e];
      this.holes.push(i.clone());
    }
    return this;
  }
  toJSON() {
    let A = super.toJSON();
    A.uuid = this.uuid, A.holes = [];
    for (let e = 0, t = this.holes.length; e < t; e++) {
      let i = this.holes[e];
      A.holes.push(i.toJSON());
    }
    return A;
  }
  fromJSON(A) {
    super.fromJSON(A), this.uuid = A.uuid, this.holes = [];
    for (let e = 0, t = A.holes.length; e < t; e++) {
      let i = A.holes[e];
      this.holes.push(new vo().fromJSON(i));
    }
    return this;
  }
};
function Hp(o22, A, e = 2) {
  let t = A && A.length, i = t ? A[0] * e : o22.length, n = Rs(o22, 0, i, e, true), a = [];
  if (!n || n.next === n.prev) return a;
  let f, r, P;
  if (t && (n = hp(o22, A, n, e)), o22.length > 80 * e) {
    f = o22[0], r = o22[1];
    let s = f, p = r;
    for (let K = e; K < i; K += e) {
      let U = o22[K], w = o22[K + 1];
      U < f && (f = U), w < r && (r = w), U > s && (s = U), w > p && (p = w);
    }
    P = Math.max(s - f, p - r), P = P !== 0 ? 32767 / P : 0;
  }
  return Bn(n, a, e, f, r, P, 0), a;
}
function Rs(o22, A, e, t, i) {
  let n;
  if (i === Qp(o22, A, e, t) > 0) for (let a = A; a < e; a += t) n = lK(a / t | 0, o22[a], o22[a + 1], n);
  else for (let a = e - t; a >= A; a -= t) n = lK(a / t | 0, o22[a], o22[a + 1], n);
  return n && Oi(n, n.next) && (Sn(n), n = n.next), n;
}
function Wo(o22, A) {
  if (!o22) return o22;
  A || (A = o22);
  let e = o22, t;
  do
    if (t = false, !e.steiner && (Oi(e, e.next) || de(e.prev, e, e.next) === 0)) {
      if (Sn(e), e = A = e.prev, e === e.next) break;
      t = true;
    } else e = e.next;
  while (t || e !== A);
  return A;
}
function Bn(o22, A, e, t, i, n, a) {
  if (!o22) return;
  !a && n && Np(o22, t, i, n);
  let f = o22;
  for (; o22.prev !== o22.next; ) {
    let r = o22.prev, P = o22.next;
    if (n ? up(o22, t, i, n) : vp(o22)) {
      A.push(r.i, o22.i, P.i), Sn(o22), o22 = P.next, f = P.next;
      continue;
    }
    if (o22 = P, o22 === f) {
      a ? a === 1 ? (o22 = dp(Wo(o22), A), Bn(o22, A, e, t, i, n, 2)) : a === 2 && xp(o22, A, e, t, i, n) : Bn(Wo(o22), A, e, t, i, n, 1);
      break;
    }
  }
}
function vp(o22) {
  let A = o22.prev, e = o22, t = o22.next;
  if (de(A, e, t) >= 0) return false;
  let i = A.x, n = e.x, a = t.x, f = A.y, r = e.y, P = t.y, s = Math.min(i, n, a), p = Math.min(f, r, P), K = Math.max(i, n, a), U = Math.max(f, r, P), w = t.next;
  for (; w !== A; ) {
    if (w.x >= s && w.x <= K && w.y >= p && w.y <= U && an(i, f, n, r, a, P, w.x, w.y) && de(w.prev, w, w.next) >= 0) return false;
    w = w.next;
  }
  return true;
}
function up(o22, A, e, t) {
  let i = o22.prev, n = o22, a = o22.next;
  if (de(i, n, a) >= 0) return false;
  let f = i.x, r = n.x, P = a.x, s = i.y, p = n.y, K = a.y, U = Math.min(f, r, P), w = Math.min(s, p, K), l = Math.max(f, r, P), R = Math.max(s, p, K), F = l8(U, w, A, e, t), u = l8(l, R, A, e, t), D = o22.prevZ, v = o22.nextZ;
  for (; D && D.z >= F && v && v.z <= u; ) {
    if (D.x >= U && D.x <= l && D.y >= w && D.y <= R && D !== i && D !== a && an(f, s, r, p, P, K, D.x, D.y) && de(D.prev, D, D.next) >= 0 || (D = D.prevZ, v.x >= U && v.x <= l && v.y >= w && v.y <= R && v !== i && v !== a && an(f, s, r, p, P, K, v.x, v.y) && de(v.prev, v, v.next) >= 0)) return false;
    v = v.nextZ;
  }
  for (; D && D.z >= F; ) {
    if (D.x >= U && D.x <= l && D.y >= w && D.y <= R && D !== i && D !== a && an(f, s, r, p, P, K, D.x, D.y) && de(D.prev, D, D.next) >= 0) return false;
    D = D.prevZ;
  }
  for (; v && v.z <= u; ) {
    if (v.x >= U && v.x <= l && v.y >= w && v.y <= R && v !== i && v !== a && an(f, s, r, p, P, K, v.x, v.y) && de(v.prev, v, v.next) >= 0) return false;
    v = v.nextZ;
  }
  return true;
}
function dp(o22, A) {
  let e = o22;
  do {
    let t = e.prev, i = e.next.next;
    !Oi(t, i) && cs(t, e, e.next, i) && jn(t, i) && jn(i, t) && (A.push(t.i, e.i, i.i), Sn(e), Sn(e.next), e = o22 = i), e = e.next;
  } while (e !== o22);
  return Wo(e);
}
function xp(o22, A, e, t, i, n) {
  let a = o22;
  do {
    let f = a.next.next;
    for (; f !== a.prev; ) {
      if (a.i !== f.i && mp(a, f)) {
        let r = ls(a, f);
        a = Wo(a, a.next), r = Wo(r, r.next), Bn(a, A, e, t, i, n, 0), Bn(r, A, e, t, i, n, 0);
        return;
      }
      f = f.next;
    }
    a = a.next;
  } while (a !== o22);
}
function hp(o22, A, e, t) {
  let i = [];
  for (let n = 0, a = A.length; n < a; n++) {
    let f = A[n] * t, r = n < a - 1 ? A[n + 1] * t : o22.length, P = Rs(o22, f, r, t, false);
    P === P.next && (P.steiner = true), i.push(Tp(P));
  }
  i.sort(Dp);
  for (let n = 0; n < i.length; n++) e = Bp(i[n], e);
  return e;
}
function Dp(o22, A) {
  let e = o22.x - A.x;
  if (e === 0 && (e = o22.y - A.y, e === 0)) {
    let t = (o22.next.y - o22.y) / (o22.next.x - o22.x), i = (A.next.y - A.y) / (A.next.x - A.x);
    e = t - i;
  }
  return e;
}
function Bp(o22, A) {
  let e = jp(o22, A);
  if (!e) return A;
  let t = ls(e, o22);
  return Wo(t, t.next), Wo(e, e.next);
}
function jp(o22, A) {
  let e = A, t = o22.x, i = o22.y, n = -1 / 0, a;
  if (Oi(o22, e)) return e;
  do {
    if (Oi(o22, e.next)) return e.next;
    if (i <= e.y && i >= e.next.y && e.next.y !== e.y) {
      let p = e.x + (i - e.y) * (e.next.x - e.x) / (e.next.y - e.y);
      if (p <= t && p > n && (n = p, a = e.x < e.next.x ? e : e.next, p === t)) return a;
    }
    e = e.next;
  } while (e !== A);
  if (!a) return null;
  let f = a, r = a.x, P = a.y, s = 1 / 0;
  e = a;
  do {
    if (t >= e.x && e.x >= r && t !== e.x && ws(i < P ? t : n, i, r, P, i < P ? n : t, i, e.x, e.y)) {
      let p = Math.abs(i - e.y) / (t - e.x);
      jn(e, o22) && (p < s || p === s && (e.x > a.x || e.x === a.x && Sp(a, e))) && (a = e, s = p);
    }
    e = e.next;
  } while (e !== f);
  return a;
}
function Sp(o22, A) {
  return de(o22.prev, o22, A.prev) < 0 && de(A.next, o22, o22.next) < 0;
}
function Np(o22, A, e, t) {
  let i = o22;
  do
    i.z === 0 && (i.z = l8(i.x, i.y, A, e, t)), i.prevZ = i.prev, i.nextZ = i.next, i = i.next;
  while (i !== o22);
  i.prevZ.nextZ = null, i.prevZ = null, Cp(i);
}
function Cp(o22) {
  let A, e = 1;
  do {
    let t = o22, i;
    o22 = null;
    let n = null;
    for (A = 0; t; ) {
      A++;
      let a = t, f = 0;
      for (let P = 0; P < e && (f++, a = a.nextZ, !!a); P++) ;
      let r = e;
      for (; f > 0 || r > 0 && a; ) f !== 0 && (r === 0 || !a || t.z <= a.z) ? (i = t, t = t.nextZ, f--) : (i = a, a = a.nextZ, r--), n ? n.nextZ = i : o22 = i, i.prevZ = n, n = i;
      t = a;
    }
    n.nextZ = null, e *= 2;
  } while (A > 1);
  return o22;
}
function l8(o22, A, e, t, i) {
  return o22 = (o22 - e) * i | 0, A = (A - t) * i | 0, o22 = (o22 | o22 << 8) & 16711935, o22 = (o22 | o22 << 4) & 252645135, o22 = (o22 | o22 << 2) & 858993459, o22 = (o22 | o22 << 1) & 1431655765, A = (A | A << 8) & 16711935, A = (A | A << 4) & 252645135, A = (A | A << 2) & 858993459, A = (A | A << 1) & 1431655765, o22 | A << 1;
}
function Tp(o22) {
  let A = o22, e = o22;
  do
    (A.x < e.x || A.x === e.x && A.y < e.y) && (e = A), A = A.next;
  while (A !== o22);
  return e;
}
function ws(o22, A, e, t, i, n, a, f) {
  return (i - a) * (A - f) >= (o22 - a) * (n - f) && (o22 - a) * (t - f) >= (e - a) * (A - f) && (e - a) * (n - f) >= (i - a) * (t - f);
}
function an(o22, A, e, t, i, n, a, f) {
  return !(o22 === a && A === f) && ws(o22, A, e, t, i, n, a, f);
}
function mp(o22, A) {
  return o22.next.i !== A.i && o22.prev.i !== A.i && !Xp(o22, A) && (jn(o22, A) && jn(A, o22) && Op(o22, A) && (de(o22.prev, o22, A.prev) || de(o22, A.prev, A)) || Oi(o22, A) && de(o22.prev, o22, o22.next) > 0 && de(A.prev, A, A.next) > 0);
}
function de(o22, A, e) {
  return (A.y - o22.y) * (e.x - A.x) - (A.x - o22.x) * (e.y - A.y);
}
function Oi(o22, A) {
  return o22.x === A.x && o22.y === A.y;
}
function cs(o22, A, e, t) {
  let i = Ca(de(o22, A, e)), n = Ca(de(o22, A, t)), a = Ca(de(e, t, o22)), f = Ca(de(e, t, A));
  return !!(i !== n && a !== f || i === 0 && Na(o22, e, A) || n === 0 && Na(o22, t, A) || a === 0 && Na(e, o22, t) || f === 0 && Na(e, A, t));
}
function Na(o22, A, e) {
  return A.x <= Math.max(o22.x, e.x) && A.x >= Math.min(o22.x, e.x) && A.y <= Math.max(o22.y, e.y) && A.y >= Math.min(o22.y, e.y);
}
function Ca(o22) {
  return o22 > 0 ? 1 : o22 < 0 ? -1 : 0;
}
function Xp(o22, A) {
  let e = o22;
  do {
    if (e.i !== o22.i && e.next.i !== o22.i && e.i !== A.i && e.next.i !== A.i && cs(e, e.next, o22, A)) return true;
    e = e.next;
  } while (e !== o22);
  return false;
}
function jn(o22, A) {
  return de(o22.prev, o22, o22.next) < 0 ? de(o22, A, o22.next) >= 0 && de(o22, o22.prev, A) >= 0 : de(o22, A, o22.prev) < 0 || de(o22, o22.next, A) < 0;
}
function Op(o22, A) {
  let e = o22, t = false, i = (o22.x + A.x) / 2, n = (o22.y + A.y) / 2;
  do
    e.y > n != e.next.y > n && e.next.y !== e.y && i < (e.next.x - e.x) * (n - e.y) / (e.next.y - e.y) + e.x && (t = !t), e = e.next;
  while (e !== o22);
  return t;
}
function ls(o22, A) {
  let e = g8(o22.i, o22.x, o22.y), t = g8(A.i, A.x, A.y), i = o22.next, n = A.prev;
  return o22.next = A, A.prev = o22, e.next = i, i.prev = e, t.next = e, e.prev = t, n.next = t, t.prev = n, t;
}
function lK(o22, A, e, t) {
  let i = g8(o22, A, e);
  return t ? (i.next = t.next, i.prev = t, t.next.prev = i, t.next = i) : (i.prev = i, i.next = i), i;
}
function Sn(o22) {
  o22.next.prev = o22.prev, o22.prev.next = o22.next, o22.prevZ && (o22.prevZ.nextZ = o22.nextZ), o22.nextZ && (o22.nextZ.prevZ = o22.prevZ);
}
function g8(o22, A, e) {
  return { i: o22, x: A, y: e, prev: null, next: null, z: 0, prevZ: null, nextZ: null, steiner: false };
}
function Qp(o22, A, e, t) {
  let i = 0;
  for (let n = A, a = e - t; n < e; n += t) i += (o22[a] - o22[n]) * (o22[n + 1] + o22[a + 1]), a = n;
  return i;
}
var H8 = class {
  static triangulate(A, e, t = 2) {
    return Hp(A, e, t);
  }
}, It = class o14 {
  static area(A) {
    let e = A.length, t = 0;
    for (let i = e - 1, n = 0; n < e; i = n++) t += A[i].x * A[n].y - A[n].x * A[i].y;
    return t * 0.5;
  }
  static isClockWise(A) {
    return o14.area(A) < 0;
  }
  static triangulateShape(A, e) {
    let t = [], i = [], n = [];
    gK(A), HK(t, A);
    let a = A.length;
    e.forEach(gK);
    for (let r = 0; r < e.length; r++) i.push(a), a += e[r].length, HK(t, e[r]);
    let f = H8.triangulate(t, i);
    for (let r = 0; r < f.length; r += 3) n.push(f.slice(r, r + 3));
    return n;
  }
};
function gK(o22) {
  let A = o22.length;
  A > 2 && o22[A - 1].equals(o22[0]) && o22.pop();
}
function HK(o22, A) {
  for (let e = 0; e < A.length; e++) o22.push(A[e].x), o22.push(A[e].y);
}
var Nn = class o15 extends he {
  constructor(A = new Lt([new nA(0.5, 0.5), new nA(-0.5, 0.5), new nA(-0.5, -0.5), new nA(0.5, -0.5)]), e = {}) {
    super(), this.type = "ExtrudeGeometry", this.parameters = { shapes: A, options: e }, A = Array.isArray(A) ? A : [A];
    let t = this, i = [], n = [];
    for (let f = 0, r = A.length; f < r; f++) {
      let P = A[f];
      a(P);
    }
    this.setAttribute("position", new te(i, 3)), this.setAttribute("uv", new te(n, 2)), this.computeVertexNormals();
    function a(f) {
      let r = [], P = e.curveSegments !== void 0 ? e.curveSegments : 12, s = e.steps !== void 0 ? e.steps : 1, p = e.depth !== void 0 ? e.depth : 1, K = e.bevelEnabled !== void 0 ? e.bevelEnabled : true, U = e.bevelThickness !== void 0 ? e.bevelThickness : 0.2, w = e.bevelSize !== void 0 ? e.bevelSize : U - 0.1, l = e.bevelOffset !== void 0 ? e.bevelOffset : 0, R = e.bevelSegments !== void 0 ? e.bevelSegments : 3, F = e.extrudePath, u = e.UVGenerator !== void 0 ? e.UVGenerator : Gp, D, v = false, x, h, S, g;
      if (F) {
        D = F.getSpacedPoints(s), v = true, K = false;
        let tA = F.isCatmullRomCurve3 ? F.closed : false;
        x = F.computeFrenetFrames(s, tA), h = new j(), S = new j(), g = new j();
      }
      K || (R = 0, U = 0, w = 0, l = 0);
      let B = f.extractPoints(P), N = B.shape, O = B.holes;
      if (!It.isClockWise(N)) {
        N = N.reverse();
        for (let tA = 0, fA = O.length; tA < fA; tA++) {
          let rA = O[tA];
          It.isClockWise(rA) && (O[tA] = rA.reverse());
        }
      }
      function M(tA) {
        let rA = 10000000000000001e-36, PA = tA[0];
        for (let pA = 1; pA <= tA.length; pA++) {
          let kA = pA % tA.length, QA = tA[kA], yA = QA.x - PA.x, WA = QA.y - PA.y, C = yA * yA + WA * WA, re = Math.max(Math.abs(QA.x), Math.abs(QA.y), Math.abs(PA.x), Math.abs(PA.y)), $A = rA * re * re;
          if (C <= $A) {
            tA.splice(kA, 1), pA--;
            continue;
          }
          PA = QA;
        }
      }
      M(N), O.forEach(M);
      let m = O.length, k = N;
      for (let tA = 0; tA < m; tA++) {
        let fA = O[tA];
        N = N.concat(fA);
      }
      function W(tA, fA, rA) {
        return fA || bA("ExtrudeGeometry: vec does not exist"), tA.clone().addScaledVector(fA, rA);
      }
      let V = N.length;
      function aA(tA, fA, rA) {
        let PA, pA, kA, QA = tA.x - fA.x, yA = tA.y - fA.y, WA = rA.x - tA.x, C = rA.y - tA.y, re = QA * QA + yA * yA, $A = QA * C - yA * WA;
        if (Math.abs($A) > Number.EPSILON) {
          let d = Math.sqrt(re), c = Math.sqrt(WA * WA + C * C), Q = fA.x - yA / d, z = fA.y + QA / d, J = rA.x - C / c, KA = rA.y + WA / c, sA = ((J - Q) * C - (KA - z) * WA) / (QA * C - yA * WA);
          PA = Q + QA * sA - tA.x, pA = z + yA * sA - tA.y;
          let E = PA * PA + pA * pA;
          if (E <= 2) return new nA(PA, pA);
          kA = Math.sqrt(E / 2);
        } else {
          let d = false;
          QA > Number.EPSILON ? WA > Number.EPSILON && (d = true) : QA < -Number.EPSILON ? WA < -Number.EPSILON && (d = true) : Math.sign(yA) === Math.sign(C) && (d = true), d ? (PA = -yA, pA = QA, kA = Math.sqrt(re)) : (PA = QA, pA = yA, kA = Math.sqrt(re / 2));
        }
        return new nA(PA / kA, pA / kA);
      }
      let q = [];
      for (let tA = 0, fA = k.length, rA = fA - 1, PA = tA + 1; tA < fA; tA++, rA++, PA++) rA === fA && (rA = 0), PA === fA && (PA = 0), q[tA] = aA(k[tA], k[rA], k[PA]);
      let AA = [], oA, TA = q.concat();
      for (let tA = 0, fA = m; tA < fA; tA++) {
        let rA = O[tA];
        oA = [];
        for (let PA = 0, pA = rA.length, kA = pA - 1, QA = PA + 1; PA < pA; PA++, kA++, QA++) kA === pA && (kA = 0), QA === pA && (QA = 0), oA[PA] = aA(rA[PA], rA[kA], rA[QA]);
        AA.push(oA), TA = TA.concat(oA);
      }
      let BA;
      if (R === 0) BA = It.triangulateShape(k, O);
      else {
        let tA = [], fA = [];
        for (let rA = 0; rA < R; rA++) {
          let PA = rA / R, pA = U * Math.cos(PA * Math.PI / 2), kA = w * Math.sin(PA * Math.PI / 2) + l;
          for (let QA = 0, yA = k.length; QA < yA; QA++) {
            let WA = W(k[QA], q[QA], kA);
            HA(WA.x, WA.y, -pA), PA === 0 && tA.push(WA);
          }
          for (let QA = 0, yA = m; QA < yA; QA++) {
            let WA = O[QA];
            oA = AA[QA];
            let C = [];
            for (let re = 0, $A = WA.length; re < $A; re++) {
              let d = W(WA[re], oA[re], kA);
              HA(d.x, d.y, -pA), PA === 0 && C.push(d);
            }
            PA === 0 && fA.push(C);
          }
        }
        BA = It.triangulateShape(tA, fA);
      }
      let fe = BA.length, _A = w + l;
      for (let tA = 0; tA < V; tA++) {
        let fA = K ? W(N[tA], TA[tA], _A) : N[tA];
        v ? (S.copy(x.normals[0]).multiplyScalar(fA.x), h.copy(x.binormals[0]).multiplyScalar(fA.y), g.copy(D[0]).add(S).add(h), HA(g.x, g.y, g.z)) : HA(fA.x, fA.y, 0);
      }
      for (let tA = 1; tA <= s; tA++) for (let fA = 0; fA < V; fA++) {
        let rA = K ? W(N[fA], TA[fA], _A) : N[fA];
        v ? (S.copy(x.normals[tA]).multiplyScalar(rA.x), h.copy(x.binormals[tA]).multiplyScalar(rA.y), g.copy(D[tA]).add(S).add(h), HA(g.x, g.y, g.z)) : HA(rA.x, rA.y, p / s * tA);
      }
      for (let tA = R - 1; tA >= 0; tA--) {
        let fA = tA / R, rA = U * Math.cos(fA * Math.PI / 2), PA = w * Math.sin(fA * Math.PI / 2) + l;
        for (let pA = 0, kA = k.length; pA < kA; pA++) {
          let QA = W(k[pA], q[pA], PA);
          HA(QA.x, QA.y, p + rA);
        }
        for (let pA = 0, kA = O.length; pA < kA; pA++) {
          let QA = O[pA];
          oA = AA[pA];
          for (let yA = 0, WA = QA.length; yA < WA; yA++) {
            let C = W(QA[yA], oA[yA], PA);
            v ? HA(C.x, C.y + D[s - 1].y, D[s - 1].x + rA) : HA(C.x, C.y, p + rA);
          }
        }
      }
      oe(), Z();
      function oe() {
        let tA = i.length / 3;
        if (K) {
          let fA = 0, rA = V * fA;
          for (let PA = 0; PA < fe; PA++) {
            let pA = BA[PA];
            zA(pA[2] + rA, pA[1] + rA, pA[0] + rA);
          }
          fA = s + R * 2, rA = V * fA;
          for (let PA = 0; PA < fe; PA++) {
            let pA = BA[PA];
            zA(pA[0] + rA, pA[1] + rA, pA[2] + rA);
          }
        } else {
          for (let fA = 0; fA < fe; fA++) {
            let rA = BA[fA];
            zA(rA[2], rA[1], rA[0]);
          }
          for (let fA = 0; fA < fe; fA++) {
            let rA = BA[fA];
            zA(rA[0] + V * s, rA[1] + V * s, rA[2] + V * s);
          }
        }
        t.addGroup(tA, i.length / 3 - tA, 0);
      }
      function Z() {
        let tA = i.length / 3, fA = 0;
        eA(k, fA), fA += k.length;
        for (let rA = 0, PA = O.length; rA < PA; rA++) {
          let pA = O[rA];
          eA(pA, fA), fA += pA.length;
        }
        t.addGroup(tA, i.length / 3 - tA, 1);
      }
      function eA(tA, fA) {
        let rA = tA.length;
        for (; --rA >= 0; ) {
          let PA = rA, pA = rA - 1;
          pA < 0 && (pA = tA.length - 1);
          for (let kA = 0, QA = s + R * 2; kA < QA; kA++) {
            let yA = V * kA, WA = V * (kA + 1), C = fA + PA + yA, re = fA + pA + yA, $A = fA + pA + WA, d = fA + PA + WA;
            xA(C, re, $A, d);
          }
        }
      }
      function HA(tA, fA, rA) {
        r.push(tA), r.push(fA), r.push(rA);
      }
      function zA(tA, fA, rA) {
        MA(tA), MA(fA), MA(rA);
        let PA = i.length / 3, pA = u.generateTopUV(t, i, PA - 3, PA - 2, PA - 1);
        Ue(pA[0]), Ue(pA[1]), Ue(pA[2]);
      }
      function xA(tA, fA, rA, PA) {
        MA(tA), MA(fA), MA(PA), MA(fA), MA(rA), MA(PA);
        let pA = i.length / 3, kA = u.generateSideWallUV(t, i, pA - 6, pA - 3, pA - 2, pA - 1);
        Ue(kA[0]), Ue(kA[1]), Ue(kA[3]), Ue(kA[1]), Ue(kA[2]), Ue(kA[3]);
      }
      function MA(tA) {
        i.push(r[tA * 3 + 0]), i.push(r[tA * 3 + 1]), i.push(r[tA * 3 + 2]);
      }
      function Ue(tA) {
        n.push(tA.x), n.push(tA.y);
      }
    }
  }
  copy(A) {
    return super.copy(A), this.parameters = Object.assign({}, A.parameters), this;
  }
  toJSON() {
    let A = super.toJSON(), e = this.parameters.shapes, t = this.parameters.options;
    return kp(e, t, A);
  }
  static fromJSON(A, e) {
    let t = [];
    for (let n = 0, a = A.shapes.length; n < a; n++) {
      let f = e[A.shapes[n]];
      t.push(f);
    }
    let i = A.options.extrudePath;
    return i !== void 0 && (A.options.extrudePath = new c8[i.type]().fromJSON(i)), new o15(t, A.options);
  }
}, Gp = { generateTopUV: function(o22, A, e, t, i) {
  let n = A[e * 3], a = A[e * 3 + 1], f = A[t * 3], r = A[t * 3 + 1], P = A[i * 3], s = A[i * 3 + 1];
  return [new nA(n, a), new nA(f, r), new nA(P, s)];
}, generateSideWallUV: function(o22, A, e, t, i, n) {
  let a = A[e * 3], f = A[e * 3 + 1], r = A[e * 3 + 2], P = A[t * 3], s = A[t * 3 + 1], p = A[t * 3 + 2], K = A[i * 3], U = A[i * 3 + 1], w = A[i * 3 + 2], l = A[n * 3], R = A[n * 3 + 1], F = A[n * 3 + 2];
  return Math.abs(f - s) < Math.abs(a - P) ? [new nA(a, 1 - r), new nA(P, 1 - p), new nA(K, 1 - w), new nA(l, 1 - F)] : [new nA(f, 1 - r), new nA(s, 1 - p), new nA(U, 1 - w), new nA(R, 1 - F)];
} };
function kp(o22, A, e) {
  if (e.shapes = [], Array.isArray(o22)) for (let t = 0, i = o22.length; t < i; t++) {
    let n = o22[t];
    e.shapes.push(n.uuid);
  }
  else e.shapes.push(o22.uuid);
  return e.options = Object.assign({}, A), A.extrudePath !== void 0 && (e.options.extrudePath = A.extrudePath.toJSON()), e;
}
var qo = class o16 extends he {
  constructor(A = 1, e = 1, t = 1, i = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = { width: A, height: e, widthSegments: t, heightSegments: i };
    let n = A / 2, a = e / 2, f = Math.floor(t), r = Math.floor(i), P = f + 1, s = r + 1, p = A / f, K = e / r, U = [], w = [], l = [], R = [];
    for (let F = 0; F < s; F++) {
      let u = F * K - a;
      for (let D = 0; D < P; D++) {
        let v = D * p - n;
        w.push(v, -u, 0), l.push(0, 0, 1), R.push(D / f), R.push(1 - F / r);
      }
    }
    for (let F = 0; F < r; F++) for (let u = 0; u < f; u++) {
      let D = u + P * F, v = u + P * (F + 1), x = u + 1 + P * (F + 1), h = u + 1 + P * F;
      U.push(D, v, h), U.push(v, x, h);
    }
    this.setIndex(U), this.setAttribute("position", new te(w, 3)), this.setAttribute("normal", new te(l, 3)), this.setAttribute("uv", new te(R, 2));
  }
  copy(A) {
    return super.copy(A), this.parameters = Object.assign({}, A.parameters), this;
  }
  static fromJSON(A) {
    return new o16(A.width, A.height, A.widthSegments, A.heightSegments);
  }
};
var uo = class o17 extends he {
  constructor(A = new Lt([new nA(0, 0.5), new nA(-0.5, -0.5), new nA(0.5, -0.5)]), e = 12) {
    super(), this.type = "ShapeGeometry", this.parameters = { shapes: A, curveSegments: e };
    let t = [], i = [], n = [], a = [], f = 0, r = 0;
    if (Array.isArray(A) === false) P(A);
    else for (let s = 0; s < A.length; s++) P(A[s]), this.addGroup(f, r, s), f += r, r = 0;
    this.setIndex(t), this.setAttribute("position", new te(i, 3)), this.setAttribute("normal", new te(n, 3)), this.setAttribute("uv", new te(a, 2));
    function P(s) {
      let p = i.length / 3, K = s.extractPoints(e), U = K.shape, w = K.holes;
      It.isClockWise(U) === false && (U = U.reverse());
      for (let R = 0, F = w.length; R < F; R++) {
        let u = w[R];
        It.isClockWise(u) === true && (w[R] = u.reverse());
      }
      let l = It.triangulateShape(U, w);
      for (let R = 0, F = w.length; R < F; R++) {
        let u = w[R];
        U = U.concat(u);
      }
      for (let R = 0, F = U.length; R < F; R++) {
        let u = U[R];
        i.push(u.x, u.y, 0), n.push(0, 0, 1), a.push(u.x, u.y);
      }
      for (let R = 0, F = l.length; R < F; R++) {
        let u = l[R], D = u[0] + p, v = u[1] + p, x = u[2] + p;
        t.push(D, v, x), r += 3;
      }
    }
  }
  copy(A) {
    return super.copy(A), this.parameters = Object.assign({}, A.parameters), this;
  }
  toJSON() {
    let A = super.toJSON(), e = this.parameters.shapes;
    return Ip(e, A);
  }
  static fromJSON(A, e) {
    let t = [];
    for (let i = 0, n = A.shapes.length; i < n; i++) {
      let a = e[A.shapes[i]];
      t.push(a);
    }
    return new o17(t, A.curveSegments);
  }
};
function Ip(o22, A) {
  if (A.shapes = [], Array.isArray(o22)) for (let e = 0, t = o22.length; e < t; e++) {
    let i = o22[e];
    A.shapes.push(i.uuid);
  }
  else A.shapes.push(o22.uuid);
  return A;
}
var Vt = class o18 extends he {
  constructor(A = 1, e = 32, t = 16, i = 0, n = Math.PI * 2, a = 0, f = Math.PI) {
    super(), this.type = "SphereGeometry", this.parameters = { radius: A, widthSegments: e, heightSegments: t, phiStart: i, phiLength: n, thetaStart: a, thetaLength: f }, e = Math.max(3, Math.floor(e)), t = Math.max(2, Math.floor(t));
    let r = Math.min(a + f, Math.PI), P = 0, s = [], p = new j(), K = new j(), U = [], w = [], l = [], R = [];
    for (let F = 0; F <= t; F++) {
      let u = [], D = F / t, v = a + D * f, x = A * Math.cos(v), h = Math.sqrt(A * A - x * x), S = 0;
      F === 0 && a === 0 ? S = 0.5 / e : F === t && r === Math.PI && (S = -0.5 / e);
      for (let g = 0; g <= e; g++) {
        let B = g / e, N = i + B * n;
        p.x = -h * Math.cos(N), p.y = x, p.z = h * Math.sin(N), w.push(p.x, p.y, p.z), K.copy(p).normalize(), l.push(K.x, K.y, K.z), R.push(B + S, 1 - D), u.push(P++);
      }
      s.push(u);
    }
    for (let F = 0; F < t; F++) for (let u = 0; u < e; u++) {
      let D = s[F][u + 1], v = s[F][u], x = s[F + 1][u], h = s[F + 1][u + 1];
      (F !== 0 || a > 0) && U.push(D, v, h), (F !== t - 1 || r < Math.PI) && U.push(v, x, h);
    }
    this.setIndex(U), this.setAttribute("position", new te(w, 3)), this.setAttribute("normal", new te(l, 3)), this.setAttribute("uv", new te(R, 2));
  }
  copy(A) {
    return super.copy(A), this.parameters = Object.assign({}, A.parameters), this;
  }
  static fromJSON(A) {
    return new o18(A.radius, A.widthSegments, A.heightSegments, A.phiStart, A.phiLength, A.thetaStart, A.thetaLength);
  }
};
var Cn = class o19 extends he {
  constructor(A = 1, e = 0.4, t = 12, i = 48, n = Math.PI * 2, a = 0, f = Math.PI * 2) {
    super(), this.type = "TorusGeometry", this.parameters = { radius: A, tube: e, radialSegments: t, tubularSegments: i, arc: n, thetaStart: a, thetaLength: f }, t = Math.floor(t), i = Math.floor(i);
    let r = [], P = [], s = [], p = [], K = new j(), U = new j(), w = new j();
    for (let l = 0; l <= t; l++) {
      let R = a + l / t * f;
      for (let F = 0; F <= i; F++) {
        let u = F / i * n;
        U.x = (A + e * Math.cos(R)) * Math.cos(u), U.y = (A + e * Math.cos(R)) * Math.sin(u), U.z = e * Math.sin(R), P.push(U.x, U.y, U.z), K.x = A * Math.cos(u), K.y = A * Math.sin(u), w.subVectors(U, K).normalize(), s.push(w.x, w.y, w.z), p.push(F / i), p.push(l / t);
      }
    }
    for (let l = 1; l <= t; l++) for (let R = 1; R <= i; R++) {
      let F = (i + 1) * l + R - 1, u = (i + 1) * (l - 1) + R - 1, D = (i + 1) * (l - 1) + R, v = (i + 1) * l + R;
      r.push(F, u, v), r.push(u, D, v);
    }
    this.setIndex(r), this.setAttribute("position", new te(P, 3)), this.setAttribute("normal", new te(s, 3)), this.setAttribute("uv", new te(p, 2));
  }
  copy(A) {
    return super.copy(A), this.parameters = Object.assign({}, A.parameters), this;
  }
  static fromJSON(A) {
    return new o19(A.radius, A.tube, A.radialSegments, A.tubularSegments, A.arc, A.thetaStart, A.thetaLength);
  }
};
var Tn = class extends he {
  constructor(A = null) {
    if (super(), this.type = "WireframeGeometry", this.parameters = { geometry: A }, A !== null) {
      let e = [], t = /* @__PURE__ */ new Set(), i = new j(), n = new j();
      if (A.index !== null) {
        let a = A.attributes.position, f = A.index, r = A.groups;
        r.length === 0 && (r = [{ start: 0, count: f.count, materialIndex: 0 }]);
        for (let P = 0, s = r.length; P < s; ++P) {
          let p = r[P], K = p.start, U = p.count;
          for (let w = K, l = K + U; w < l; w += 3) for (let R = 0; R < 3; R++) {
            let F = f.getX(w + R), u = f.getX(w + (R + 1) % 3);
            i.fromBufferAttribute(a, F), n.fromBufferAttribute(a, u), vK(i, n, t) === true && (e.push(i.x, i.y, i.z), e.push(n.x, n.y, n.z));
          }
        }
      } else {
        let a = A.attributes.position;
        for (let f = 0, r = a.count / 3; f < r; f++) for (let P = 0; P < 3; P++) {
          let s = 3 * f + P, p = 3 * f + (P + 1) % 3;
          i.fromBufferAttribute(a, s), n.fromBufferAttribute(a, p), vK(i, n, t) === true && (e.push(i.x, i.y, i.z), e.push(n.x, n.y, n.z));
        }
      }
      this.setAttribute("position", new te(e, 3));
    }
  }
  copy(A) {
    return super.copy(A), this.parameters = Object.assign({}, A.parameters), this;
  }
};
function vK(o22, A, e) {
  let t = `${o22.x},${o22.y},${o22.z}-${A.x},${A.y},${A.z}`, i = `${A.x},${A.y},${A.z}-${o22.x},${o22.y},${o22.z}`;
  return e.has(t) === true || e.has(i) === true ? false : (e.add(t), e.add(i), true);
}
function Yo(o22) {
  let A = {};
  for (let e in o22) {
    A[e] = {};
    for (let t in o22[e]) {
      let i = o22[e][t];
      if (uK(i)) i.isRenderTargetTexture ? (GA("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), A[e][t] = null) : A[e][t] = i.clone();
      else if (Array.isArray(i)) if (uK(i[0])) {
        let n = [];
        for (let a = 0, f = i.length; a < f; a++) n[a] = i[a].clone();
        A[e][t] = n;
      } else A[e][t] = i.slice();
      else A[e][t] = i;
    }
  }
  return A;
}
function Ve(o22) {
  let A = {};
  for (let e = 0; e < o22.length; e++) {
    let t = Yo(o22[e]);
    for (let i in t) A[i] = t[i];
  }
  return A;
}
function uK(o22) {
  return o22 && (o22.isColor || o22.isMatrix3 || o22.isMatrix4 || o22.isVector2 || o22.isVector3 || o22.isVector4 || o22.isTexture || o22.isQuaternion);
}
function bp(o22) {
  let A = [];
  for (let e = 0; e < o22.length; e++) A.push(o22[e].clone());
  return A;
}
function _8(o22) {
  let A = o22.getRenderTarget();
  return A === null ? o22.outputColorSpace : A.isXRRenderTarget === true ? A.texture.colorSpace : ee.workingColorSpace;
}
var Yn = { clone: Yo, merge: Ve }, zp = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, Mp = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`, Ee = class extends Mt {
  constructor(A) {
    super(), this.isShaderMaterial = true, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = zp, this.fragmentShader = Mp, this.linewidth = 1, this.wireframe = false, this.wireframeLinewidth = 1, this.fog = false, this.lights = false, this.clipping = false, this.forceSinglePass = true, this.extensions = { clipCullDistance: false, multiDraw: false }, this.defaultAttributeValues = { color: [1, 1, 1], uv: [0, 0], uv1: [0, 0] }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = false, this.glslVersion = null, A !== void 0 && this.setValues(A);
  }
  copy(A) {
    return super.copy(A), this.fragmentShader = A.fragmentShader, this.vertexShader = A.vertexShader, this.uniforms = Yo(A.uniforms), this.uniformsGroups = bp(A.uniformsGroups), this.defines = Object.assign({}, A.defines), this.wireframe = A.wireframe, this.wireframeLinewidth = A.wireframeLinewidth, this.fog = A.fog, this.lights = A.lights, this.clipping = A.clipping, this.extensions = Object.assign({}, A.extensions), this.glslVersion = A.glslVersion, this.defaultAttributeValues = Object.assign({}, A.defaultAttributeValues), this.index0AttributeName = A.index0AttributeName, this.uniformsNeedUpdate = A.uniformsNeedUpdate, this;
  }
  toJSON(A) {
    let e = super.toJSON(A);
    e.glslVersion = this.glslVersion, e.uniforms = {};
    for (let i in this.uniforms) {
      let a = this.uniforms[i].value;
      a && a.isTexture ? e.uniforms[i] = { type: "t", value: a.toJSON(A).uuid } : a && a.isColor ? e.uniforms[i] = { type: "c", value: a.getHex() } : a && a.isVector2 ? e.uniforms[i] = { type: "v2", value: a.toArray() } : a && a.isVector3 ? e.uniforms[i] = { type: "v3", value: a.toArray() } : a && a.isVector4 ? e.uniforms[i] = { type: "v4", value: a.toArray() } : a && a.isMatrix3 ? e.uniforms[i] = { type: "m3", value: a.toArray() } : a && a.isMatrix4 ? e.uniforms[i] = { type: "m4", value: a.toArray() } : e.uniforms[i] = { value: a };
    }
    Object.keys(this.defines).length > 0 && (e.defines = this.defines), e.vertexShader = this.vertexShader, e.fragmentShader = this.fragmentShader, e.lights = this.lights, e.clipping = this.clipping;
    let t = {};
    for (let i in this.extensions) this.extensions[i] === true && (t[i] = true);
    return Object.keys(t).length > 0 && (e.extensions = t), e;
  }
  fromJSON(A, e) {
    if (super.fromJSON(A, e), A.uniforms !== void 0) for (let t in A.uniforms) {
      let i = A.uniforms[t];
      switch (this.uniforms[t] = {}, i.type) {
        case "t":
          this.uniforms[t].value = e[i.value] || null;
          break;
        case "c":
          this.uniforms[t].value = new JA().setHex(i.value);
          break;
        case "v2":
          this.uniforms[t].value = new nA().fromArray(i.value);
          break;
        case "v3":
          this.uniforms[t].value = new j().fromArray(i.value);
          break;
        case "v4":
          this.uniforms[t].value = new pe().fromArray(i.value);
          break;
        case "m3":
          this.uniforms[t].value = new VA().fromArray(i.value);
          break;
        case "m4":
          this.uniforms[t].value = new Re().fromArray(i.value);
          break;
        default:
          this.uniforms[t].value = i.value;
      }
    }
    if (A.defines !== void 0 && (this.defines = A.defines), A.vertexShader !== void 0 && (this.vertexShader = A.vertexShader), A.fragmentShader !== void 0 && (this.fragmentShader = A.fragmentShader), A.glslVersion !== void 0 && (this.glslVersion = A.glslVersion), A.extensions !== void 0) for (let t in A.extensions) this.extensions[t] = A.extensions[t];
    return A.lights !== void 0 && (this.lights = A.lights), A.clipping !== void 0 && (this.clipping = A.clipping), this;
  }
}, ff = class extends Ee {
  constructor(A) {
    super(A), this.isRawShaderMaterial = true, this.type = "RawShaderMaterial";
  }
}, xe = class extends Mt {
  constructor(A) {
    super(), this.isMeshStandardMaterial = true, this.type = "MeshStandardMaterial", this.defines = { STANDARD: "" }, this.color = new JA(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new JA(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = rr, this.normalScale = new nA(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new no(), this.envMapIntensity = 1, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = false, this.fog = true, this.setValues(A);
  }
  copy(A) {
    return super.copy(A), this.defines = { STANDARD: "" }, this.color.copy(A.color), this.roughness = A.roughness, this.metalness = A.metalness, this.map = A.map, this.lightMap = A.lightMap, this.lightMapIntensity = A.lightMapIntensity, this.aoMap = A.aoMap, this.aoMapIntensity = A.aoMapIntensity, this.emissive.copy(A.emissive), this.emissiveMap = A.emissiveMap, this.emissiveIntensity = A.emissiveIntensity, this.bumpMap = A.bumpMap, this.bumpScale = A.bumpScale, this.normalMap = A.normalMap, this.normalMapType = A.normalMapType, this.normalScale.copy(A.normalScale), this.displacementMap = A.displacementMap, this.displacementScale = A.displacementScale, this.displacementBias = A.displacementBias, this.roughnessMap = A.roughnessMap, this.metalnessMap = A.metalnessMap, this.alphaMap = A.alphaMap, this.envMap = A.envMap, this.envMapRotation.copy(A.envMapRotation), this.envMapIntensity = A.envMapIntensity, this.wireframe = A.wireframe, this.wireframeLinewidth = A.wireframeLinewidth, this.wireframeLinecap = A.wireframeLinecap, this.wireframeLinejoin = A.wireframeLinejoin, this.flatShading = A.flatShading, this.fog = A.fog, this;
  }
};
var Qi = class extends Mt {
  constructor(A) {
    super(), this.isMeshDepthMaterial = true, this.type = "MeshDepthMaterial", this.depthPacking = As, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = false, this.wireframeLinewidth = 1, this.setValues(A);
  }
  copy(A) {
    return super.copy(A), this.depthPacking = A.depthPacking, this.map = A.map, this.alphaMap = A.alphaMap, this.displacementMap = A.displacementMap, this.displacementScale = A.displacementScale, this.displacementBias = A.displacementBias, this.wireframe = A.wireframe, this.wireframeLinewidth = A.wireframeLinewidth, this;
  }
}, rf = class extends Mt {
  constructor(A) {
    super(), this.isMeshDistanceMaterial = true, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(A);
  }
  copy(A) {
    return super.copy(A), this.map = A.map, this.alphaMap = A.alphaMap, this.displacementMap = A.displacementMap, this.displacementScale = A.displacementScale, this.displacementBias = A.displacementBias, this;
  }
};
function wi(o22, A) {
  return !o22 || o22.constructor === A ? o22 : typeof A.BYTES_PER_ELEMENT == "number" ? new A(o22) : Array.prototype.slice.call(o22);
}
function K8(o22) {
  return o22 !== void 0 && o22.inTangents !== void 0 && o22.outTangents !== void 0;
}
var xo = class {
  constructor(A, e, t, i) {
    this.parameterPositions = A, this._cachedIndex = 0, this.resultBuffer = i !== void 0 ? i : new e.constructor(t), this.sampleValues = e, this.valueSize = t, this.settings = null, this.DefaultSettings_ = {};
  }
  evaluate(A) {
    let e = this.parameterPositions, t = this._cachedIndex, i = e[t], n = e[t - 1];
    t: {
      A: {
        let a;
        e: {
          o: if (!(A < i)) {
            for (let f = t + 2; ; ) {
              if (i === void 0) {
                if (A < n) break o;
                return t = e.length, this._cachedIndex = t, this.copySampleValue_(t - 1);
              }
              if (t === f) break;
              if (n = i, i = e[++t], A < i) break A;
            }
            a = e.length;
            break e;
          }
          if (!(A >= n)) {
            let f = e[1];
            A < f && (t = 2, n = f);
            for (let r = t - 2; ; ) {
              if (n === void 0) return this._cachedIndex = 0, this.copySampleValue_(0);
              if (t === r) break;
              if (i = n, n = e[--t - 1], A >= n) break A;
            }
            a = t, t = 0;
            break e;
          }
          break t;
        }
        for (; t < a; ) {
          let f = t + a >>> 1;
          A < e[f] ? a = f : t = f + 1;
        }
        if (i = e[t], n = e[t - 1], n === void 0) return this._cachedIndex = 0, this.copySampleValue_(0);
        if (i === void 0) return t = e.length, this._cachedIndex = t, this.copySampleValue_(t - 1);
      }
      this._cachedIndex = t, this.intervalChanged_(t, n, i);
    }
    return this.interpolate_(t, n, A, i);
  }
  getSettings_() {
    return this.settings || this.DefaultSettings_;
  }
  copySampleValue_(A) {
    let e = this.resultBuffer, t = this.sampleValues, i = this.valueSize, n = A * i;
    for (let a = 0; a !== i; ++a) e[a] = t[n + a];
    return e;
  }
  interpolate_() {
    throw new Error("THREE.Interpolant: Call to abstract method.");
  }
  intervalChanged_() {
  }
}, Pf = class extends xo {
  constructor(A, e, t, i) {
    super(A, e, t, i), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = { endingStart: F8, endingEnd: F8 };
  }
  intervalChanged_(A, e, t) {
    let i = this.parameterPositions, n = A - 2, a = A + 1, f = i[n], r = i[a];
    if (f === void 0) switch (this.getSettings_().endingStart) {
      case R8:
        n = A, f = 2 * e - t;
        break;
      case w8:
        n = i.length - 2, f = e + i[n] - i[n + 1];
        break;
      default:
        n = A, f = t;
    }
    if (r === void 0) switch (this.getSettings_().endingEnd) {
      case R8:
        a = A, r = 2 * t - e;
        break;
      case w8:
        a = 1, r = t + i[1] - i[0];
        break;
      default:
        a = A - 1, r = e;
    }
    let P = (t - e) * 0.5, s = this.valueSize;
    this._weightPrev = P / (e - f), this._weightNext = P / (r - t), this._offsetPrev = n * s, this._offsetNext = a * s;
  }
  interpolate_(A, e, t, i) {
    let n = this.resultBuffer, a = this.sampleValues, f = this.valueSize, r = A * f, P = r - f, s = this._offsetPrev, p = this._offsetNext, K = this._weightPrev, U = this._weightNext, w = (t - e) / (i - e), l = w * w, R = l * w, F = -K * R + 2 * K * l - K * w, u = (1 + K) * R + (-1.5 - 2 * K) * l + (-0.5 + K) * w + 1, D = (-1 - U) * R + (1.5 + U) * l + 0.5 * w, v = U * R - U * l;
    for (let x = 0; x !== f; ++x) n[x] = F * a[s + x] + u * a[P + x] + D * a[r + x] + v * a[p + x];
    return n;
  }
}, Kf = class extends xo {
  constructor(A, e, t, i) {
    super(A, e, t, i);
  }
  interpolate_(A, e, t, i) {
    let n = this.resultBuffer, a = this.sampleValues, f = this.valueSize, r = A * f, P = r - f, s = (t - e) / (i - e), p = 1 - s;
    for (let K = 0; K !== f; ++K) n[K] = a[P + K] * p + a[r + K] * s;
    return n;
  }
}, sf = class extends xo {
  constructor(A, e, t, i) {
    super(A, e, t, i);
  }
  interpolate_(A) {
    return this.copySampleValue_(A - 1);
  }
}, pf = class extends xo {
  interpolate_(A, e, t, i) {
    let n = this.resultBuffer, a = this.sampleValues, f = this.valueSize, r = A * f, P = r - f, s = this.inTangents, p = this.outTangents;
    if (!s || !p) {
      let w = (t - e) / (i - e), l = 1 - w;
      for (let R = 0; R !== f; ++R) n[R] = a[P + R] * l + a[r + R] * w;
      return n;
    }
    let K = f * 2, U = A - 1;
    for (let w = 0; w !== f; ++w) {
      let l = a[P + w], R = a[r + w], F = U * K + w * 2, u = p[F], D = p[F + 1], v = A * K + w * 2, x = s[v], h = s[v + 1], S = Lp(t, e, u, x, i);
      n[w] = gs(S, l, D, h, R);
    }
    return n;
  }
};
function gs(o22, A, e, t, i) {
  let n = 1 - o22;
  return n * n * n * A + 3 * n * n * o22 * e + 3 * n * o22 * o22 * t + o22 * o22 * o22 * i;
}
function yp(o22, A, e, t, i) {
  let n = 1 - o22;
  return 3 * n * n * (e - A) + 6 * n * o22 * (t - e) + 3 * o22 * o22 * (i - t);
}
function Lp(o22, A, e, t, i) {
  let n = (o22 - A) / (i - A);
  for (let a = 0; a < 8; a++) {
    let f = gs(n, A, e, t, i) - o22;
    if (Math.abs(f) < 1e-10) break;
    let r = yp(n, A, e, t, i);
    if (Math.abs(r) < 1e-10) break;
    n = Math.max(0, Math.min(1, n - f / r));
  }
  return n;
}
var pt = class {
  constructor(A, e, t, i) {
    if (A === void 0) throw new Error("THREE.KeyframeTrack: track name is undefined");
    if (e === void 0 || e.length === 0) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + A);
    this.name = A, this.times = wi(e, this.TimeBufferType), this.values = wi(t, this.ValueBufferType), this.setInterpolation(i || this.DefaultInterpolation);
  }
  static toJSON(A) {
    let e = A.constructor, t;
    if (e.toJSON !== this.toJSON) t = e.toJSON(A);
    else {
      t = { name: A.name, times: wi(A.times, Array), values: wi(A.values, Array) };
      let i = A.getInterpolation();
      i !== A.DefaultInterpolation && (t.interpolation = i), K8(A.settings) && (t.settings = { inTangents: wi(A.settings.inTangents, Array), outTangents: wi(A.settings.outTangents, Array) });
    }
    return t.type = A.ValueTypeName, t;
  }
  InterpolantFactoryMethodDiscrete(A) {
    return new sf(this.times, this.values, this.getValueSize(), A);
  }
  InterpolantFactoryMethodLinear(A) {
    return new Kf(this.times, this.values, this.getValueSize(), A);
  }
  InterpolantFactoryMethodSmooth(A) {
    return new Pf(this.times, this.values, this.getValueSize(), A);
  }
  InterpolantFactoryMethodBezier(A) {
    let e = new pf(this.times, this.values, this.getValueSize(), A);
    return this.settings && (e.inTangents = this.settings.inTangents, e.outTangents = this.settings.outTangents), e;
  }
  setInterpolation(A) {
    let e;
    switch (A) {
      case sn:
        e = this.InterpolantFactoryMethodDiscrete;
        break;
      case Va:
        e = this.InterpolantFactoryMethodLinear;
        break;
      case Oa:
        e = this.InterpolantFactoryMethodSmooth;
        break;
      case U8:
        e = this.InterpolantFactoryMethodBezier;
        break;
    }
    if (e === void 0) {
      let t = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
      if (this.createInterpolant === void 0) if (A !== this.DefaultInterpolation) this.setInterpolation(this.DefaultInterpolation);
      else throw new Error(t);
      return GA("KeyframeTrack:", t), this;
    }
    return this.createInterpolant = e, this;
  }
  getInterpolation() {
    switch (this.createInterpolant) {
      case this.InterpolantFactoryMethodDiscrete:
        return sn;
      case this.InterpolantFactoryMethodLinear:
        return Va;
      case this.InterpolantFactoryMethodSmooth:
        return Oa;
      case this.InterpolantFactoryMethodBezier:
        return U8;
    }
  }
  getValueSize() {
    return this.values.length / this.times.length;
  }
  shift(A) {
    if (A !== 0) {
      let e = this.times;
      for (let t = 0, i = e.length; t !== i; ++t) e[t] += A;
    }
    return this;
  }
  scale(A) {
    if (A !== 1) {
      let e = this.times;
      for (let t = 0, i = e.length; t !== i; ++t) e[t] *= A;
      K8(this.settings) && (dK(this.settings.inTangents, A), dK(this.settings.outTangents, A));
    }
    return this;
  }
  trim(A, e) {
    let t = this.times, i = t.length, n = 0, a = i - 1;
    for (; n !== i && t[n] < A; ) ++n;
    for (; a !== -1 && t[a] > e; ) --a;
    if (++a, n !== 0 || a !== i) {
      n >= a && (a = Math.max(a, 1), n = a - 1);
      let f = this.getValueSize();
      this.times = t.slice(n, a), this.values = this.values.slice(n * f, a * f);
    }
    return this;
  }
  validate() {
    let A = true, e = this.getValueSize();
    e - Math.floor(e) !== 0 && (bA("KeyframeTrack: Invalid value size in track.", this), A = false);
    let t = this.times, i = this.values, n = t.length;
    n === 0 && (bA("KeyframeTrack: Track is empty.", this), A = false);
    let a = null;
    for (let f = 0; f !== n; f++) {
      let r = t[f];
      if (typeof r == "number" && isNaN(r)) {
        bA("KeyframeTrack: Time is not a valid number.", this, f, r), A = false;
        break;
      }
      if (a !== null && a > r) {
        bA("KeyframeTrack: Out of order keys.", this, f, r, a), A = false;
        break;
      }
      a = r;
    }
    if (i !== void 0 && T0(i)) for (let f = 0, r = i.length; f !== r; ++f) {
      let P = i[f];
      if (isNaN(P)) {
        bA("KeyframeTrack: Value is not a valid number.", this, f, P), A = false;
        break;
      }
    }
    return A;
  }
  optimize() {
    let A = this.times.slice(), e = this.values.slice(), t = this.getValueSize(), i = this.getInterpolation() === Oa, n = A.length - 1, a = 1;
    for (let f = 1; f < n; ++f) {
      let r = false, P = A[f], s = A[f + 1];
      if (P !== s && (f !== 1 || P !== A[0])) if (i) r = true;
      else {
        let p = f * t, K = p - t, U = p + t;
        for (let w = 0; w !== t; ++w) {
          let l = e[p + w];
          if (l !== e[K + w] || l !== e[U + w]) {
            r = true;
            break;
          }
        }
      }
      if (r) {
        if (f !== a) {
          A[a] = A[f];
          let p = f * t, K = a * t;
          for (let U = 0; U !== t; ++U) e[K + U] = e[p + U];
        }
        ++a;
      }
    }
    if (n > 0) {
      A[a] = A[n];
      for (let f = n * t, r = a * t, P = 0; P !== t; ++P) e[r + P] = e[f + P];
      ++a;
    }
    return a !== A.length ? (this.times = A.slice(0, a), this.values = e.slice(0, a * t)) : (this.times = A, this.values = e), this;
  }
  clone() {
    let A = this.times.slice(), e = this.values.slice(), t = this.constructor, i = new t(this.name, A, e);
    return i.createInterpolant = this.createInterpolant, K8(this.settings) && (i.settings = { inTangents: this.settings.inTangents.slice(), outTangents: this.settings.outTangents.slice() }), i;
  }
};
function dK(o22, A) {
  for (let e = 0, t = o22.length; e !== t; e += 2) o22[e] *= A;
}
pt.prototype.ValueTypeName = "";
pt.prototype.TimeBufferType = Float32Array;
pt.prototype.ValueBufferType = Float32Array;
pt.prototype.DefaultInterpolation = Va;
var ho = class extends pt {
  constructor(A, e, t) {
    super(A, e, t);
  }
};
ho.prototype.ValueTypeName = "bool";
ho.prototype.ValueBufferType = Array;
ho.prototype.DefaultInterpolation = sn;
ho.prototype.InterpolantFactoryMethodLinear = void 0;
ho.prototype.InterpolantFactoryMethodSmooth = void 0;
var Uf = class extends pt {
  constructor(A, e, t, i) {
    super(A, e, t, i);
  }
};
Uf.prototype.ValueTypeName = "color";
var Ff = class extends pt {
  constructor(A, e, t, i) {
    super(A, e, t, i);
  }
};
Ff.prototype.ValueTypeName = "number";
var Rf = class extends xo {
  constructor(A, e, t, i) {
    super(A, e, t, i);
  }
  interpolate_(A, e, t, i) {
    let n = this.resultBuffer, a = this.sampleValues, f = this.valueSize, r = (t - e) / (i - e), P = A * f;
    for (let s = P + f; P !== s; P += 4) rt.slerpFlat(n, 0, a, P - f, a, P, r);
    return n;
  }
}, mn = class extends pt {
  constructor(A, e, t, i) {
    super(A, e, t, i);
  }
  InterpolantFactoryMethodLinear(A) {
    return new Rf(this.times, this.values, this.getValueSize(), A);
  }
};
mn.prototype.ValueTypeName = "quaternion";
mn.prototype.InterpolantFactoryMethodSmooth = void 0;
var Do = class extends pt {
  constructor(A, e, t) {
    super(A, e, t);
  }
};
Do.prototype.ValueTypeName = "string";
Do.prototype.ValueBufferType = Array;
Do.prototype.DefaultInterpolation = sn;
Do.prototype.InterpolantFactoryMethodLinear = void 0;
Do.prototype.InterpolantFactoryMethodSmooth = void 0;
var wf = class extends pt {
  constructor(A, e, t, i) {
    super(A, e, t, i);
  }
};
wf.prototype.ValueTypeName = "vector";
var cf = class {
  constructor(A, e, t) {
    let i = this, n = false, a = 0, f = 0, r, P = [];
    this.onStart = void 0, this.onLoad = A, this.onProgress = e, this.onError = t, this._abortController = null, this.itemStart = function(s) {
      f++, n === false && i.onStart !== void 0 && i.onStart(s, a, f), n = true;
    }, this.itemEnd = function(s) {
      a++, i.onProgress !== void 0 && i.onProgress(s, a, f), a === f && (n = false, i.onLoad !== void 0 && i.onLoad());
    }, this.itemError = function(s) {
      i.onError !== void 0 && i.onError(s);
    }, this.resolveURL = function(s) {
      return s = s.normalize("NFC"), r ? r(s) : s;
    }, this.setURLModifier = function(s) {
      return r = s, this;
    }, this.addHandler = function(s, p) {
      return P.push(s, p), this;
    }, this.removeHandler = function(s) {
      let p = P.indexOf(s);
      return p !== -1 && P.splice(p, 2), this;
    }, this.getHandler = function(s) {
      for (let p = 0, K = P.length; p < K; p += 2) {
        let U = P[p], w = P[p + 1];
        if (U.global && (U.lastIndex = 0), U.test(s)) return w;
      }
      return null;
    }, this.abort = function() {
      return this.abortController.abort(), this._abortController = null, this;
    };
  }
  get abortController() {
    return this._abortController || (this._abortController = new AbortController()), this._abortController;
  }
}, Hs = new cf(), lf = class {
  constructor(A) {
    this.manager = A !== void 0 ? A : Hs, this.crossOrigin = "anonymous", this.withCredentials = false, this.path = "", this.resourcePath = "", this.requestHeader = {}, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  load() {
  }
  loadAsync(A, e) {
    let t = this;
    return new Promise(function(i, n) {
      t.load(A, i, e, n);
    });
  }
  parse() {
  }
  setCrossOrigin(A) {
    return this.crossOrigin = A, this;
  }
  setWithCredentials(A) {
    return this.withCredentials = A, this;
  }
  setPath(A) {
    return this.path = A, this;
  }
  setResourcePath(A) {
    return this.resourcePath = A, this;
  }
  setRequestHeader(A) {
    return this.requestHeader = A, this;
  }
  abort() {
    return this;
  }
};
lf.DEFAULT_MATERIAL_NAME = "__DEFAULT";
var Xn = class extends Xe {
  constructor(A, e = 1) {
    super(), this.isLight = true, this.type = "Light", this.color = new JA(A), this.intensity = e;
  }
  copy(A, e) {
    return super.copy(A, e), this.color.copy(A.color), this.intensity = A.intensity, this;
  }
  toJSON(A) {
    let e = super.toJSON(A);
    return e.object.color = this.color.getHex(), e.object.intensity = this.intensity, e;
  }
}, On = class extends Xn {
  constructor(A, e, t) {
    super(A, t), this.isHemisphereLight = true, this.type = "HemisphereLight", this.position.copy(Xe.DEFAULT_UP), this.updateMatrix(), this.groundColor = new JA(e);
  }
  copy(A, e) {
    return super.copy(A, e), this.groundColor.copy(A.groundColor), this;
  }
  toJSON(A) {
    let e = super.toJSON(A);
    return e.object.groundColor = this.groundColor.getHex(), e;
  }
}, s8 = new Re(), xK = new j(), hK = new j(), gf = class {
  constructor(A) {
    this.camera = A, this.intensity = 1, this.bias = 0, this.biasNode = null, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new nA(512, 512), this.mapType = et, this.map = null, this.mapPass = null, this.matrix = new Re(), this.autoUpdate = true, this.needsUpdate = false, this._frustum = new Ci(), this._frameExtents = new nA(1, 1), this._viewportCount = 1, this._viewports = [new pe(0, 0, 1, 1)];
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getCamera() {
    return this.camera;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(A) {
    let e = this.camera;
    xK.setFromMatrixPosition(A.matrixWorld), e.position.copy(xK), hK.setFromMatrixPosition(A.target.matrixWorld), e.lookAt(hK), e.updateMatrixWorld(), this._updateMatrix(e, this.matrix, this._frustum);
  }
  _updateMatrix(A, e, t, i) {
    s8.multiplyMatrices(A.projectionMatrix, A.matrixWorldInverse), t.setFromProjectionMatrix(s8, A.coordinateSystem, A.reversedDepth);
    let n = this._frameExtents, a = i ? i.z / n.x : 1, f = i ? i.w / n.y : 1, r = i ? i.x / n.x : 0, P = i ? i.y / n.y : 0;
    A.coordinateSystem === xi || A.reversedDepth ? e.set(0.5 * a, 0, 0, 0.5 * a + r, 0, 0.5 * f, 0, 0.5 * f + P, 0, 0, 1, 0, 0, 0, 0, 1) : e.set(0.5 * a, 0, 0, 0.5 * a + r, 0, 0.5 * f, 0, 0.5 * f + P, 0, 0, 0.5, 0.5, 0, 0, 0, 1), e.multiply(s8);
  }
  getViewport(A) {
    return this._viewports[A];
  }
  getFrameExtents() {
    return this._frameExtents;
  }
  dispose() {
    this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
  }
  copy(A) {
    return this.camera = A.camera.clone(), this.intensity = A.intensity, this.bias = A.bias, this.radius = A.radius, this.autoUpdate = A.autoUpdate, this.needsUpdate = A.needsUpdate, this.normalBias = A.normalBias, this.blurSamples = A.blurSamples, this.mapSize.copy(A.mapSize), this.biasNode = A.biasNode, this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    let A = {};
    return A.intensity = this.intensity, A.bias = this.bias, A.normalBias = this.normalBias, A.radius = this.radius, A.blurSamples = this.blurSamples, A.mapSize = this.mapSize.toArray(), A.camera = this.camera.toJSON(false).object, delete A.camera.matrix, A;
  }
}, Ta = new j(), ma = new rt(), Gt = new j(), Qn = class extends Xe {
  constructor() {
    super(), this.isCamera = true, this.type = "Camera", this.matrixWorldInverse = new Re(), this.projectionMatrix = new Re(), this.projectionMatrixInverse = new Re(), this.coordinateSystem = ht, this._reversedDepth = false;
  }
  get reversedDepth() {
    return this._reversedDepth;
  }
  copy(A, e) {
    return super.copy(A, e), this.matrixWorldInverse.copy(A.matrixWorldInverse), this.projectionMatrix.copy(A.projectionMatrix), this.projectionMatrixInverse.copy(A.projectionMatrixInverse), this.coordinateSystem = A.coordinateSystem, this;
  }
  getWorldDirection(A) {
    return super.getWorldDirection(A).negate();
  }
  updateMatrixWorld(A) {
    super.updateMatrixWorld(A), this.matrixWorld.decompose(Ta, ma, Gt), Gt.x === 1 && Gt.y === 1 && Gt.z === 1 ? this.matrixWorldInverse.copy(this.matrixWorld).invert() : this.matrixWorldInverse.compose(Ta, ma, Gt.set(1, 1, 1)).invert();
  }
  updateWorldMatrix(A, e, t = false) {
    super.updateWorldMatrix(A, e, t), this.matrixWorld.decompose(Ta, ma, Gt), Gt.x === 1 && Gt.y === 1 && Gt.z === 1 ? this.matrixWorldInverse.copy(this.matrixWorld).invert() : this.matrixWorldInverse.compose(Ta, ma, Gt.set(1, 1, 1)).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}, co = new j(), DK = new nA(), BK = new nA(), Le = class extends Qn {
  constructor(A = 50, e = 1, t = 0.1, i = 2e3) {
    super(), this.isPerspectiveCamera = true, this.type = "PerspectiveCamera", this.fov = A, this.zoom = 1, this.near = t, this.far = i, this.focus = 10, this.aspect = e, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(A, e) {
    return super.copy(A, e), this.fov = A.fov, this.zoom = A.zoom, this.near = A.near, this.far = A.far, this.focus = A.focus, this.aspect = A.aspect, this.view = A.view === null ? null : Object.assign({}, A.view), this.filmGauge = A.filmGauge, this.filmOffset = A.filmOffset, this;
  }
  setFocalLength(A) {
    let e = 0.5 * this.getFilmHeight() / A;
    this.fov = Di * 2 * Math.atan(e), this.updateProjectionMatrix();
  }
  getFocalLength() {
    let A = Math.tan(fn * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / A;
  }
  getEffectiveFOV() {
    return Di * 2 * Math.atan(Math.tan(fn * 0.5 * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  getViewBounds(A, e, t) {
    co.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), e.set(co.x, co.y).multiplyScalar(-A / co.z), co.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), t.set(co.x, co.y).multiplyScalar(-A / co.z);
  }
  getViewSize(A, e) {
    return this.getViewBounds(A, DK, BK), e.subVectors(BK, DK);
  }
  setViewOffset(A, e, t, i, n, a) {
    this.aspect = A / e, this.view === null && (this.view = { enabled: true, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = true, this.view.fullWidth = A, this.view.fullHeight = e, this.view.offsetX = t, this.view.offsetY = i, this.view.width = n, this.view.height = a, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = false), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    let A = this.near, e = A * Math.tan(fn * 0.5 * this.fov) / this.zoom, t = 2 * e, i = this.aspect * t, n = -0.5 * i, a = this.view;
    if (this.view !== null && this.view.enabled) {
      let r = a.fullWidth, P = a.fullHeight;
      n += a.offsetX * i / r, e -= a.offsetY * t / P, i *= a.width / r, t *= a.height / P;
    }
    let f = this.filmOffset;
    f !== 0 && (n += A * f / this.getFilmWidth()), this.projectionMatrix.makePerspective(n, n + i, e, e - t, A, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(A) {
    let e = super.toJSON(A);
    return e.object.fov = this.fov, e.object.zoom = this.zoom, e.object.near = this.near, e.object.far = this.far, e.object.focus = this.focus, e.object.aspect = this.aspect, this.view !== null && (e.object.view = Object.assign({}, this.view)), e.object.filmGauge = this.filmGauge, e.object.filmOffset = this.filmOffset, e;
  }
};
var Gi = class extends Qn {
  constructor(A = -1, e = 1, t = 1, i = -1, n = 0.1, a = 2e3) {
    super(), this.isOrthographicCamera = true, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = A, this.right = e, this.top = t, this.bottom = i, this.near = n, this.far = a, this.updateProjectionMatrix();
  }
  copy(A, e) {
    return super.copy(A, e), this.left = A.left, this.right = A.right, this.top = A.top, this.bottom = A.bottom, this.near = A.near, this.far = A.far, this.zoom = A.zoom, this.view = A.view === null ? null : Object.assign({}, A.view), this;
  }
  setViewOffset(A, e, t, i, n, a) {
    this.view === null && (this.view = { enabled: true, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = true, this.view.fullWidth = A, this.view.fullHeight = e, this.view.offsetX = t, this.view.offsetY = i, this.view.width = n, this.view.height = a, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = false), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    let A = (this.right - this.left) / (2 * this.zoom), e = (this.top - this.bottom) / (2 * this.zoom), t = (this.right + this.left) / 2, i = (this.top + this.bottom) / 2, n = t - A, a = t + A, f = i + e, r = i - e;
    if (this.view !== null && this.view.enabled) {
      let P = (this.right - this.left) / this.view.fullWidth / this.zoom, s = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      n += P * this.view.offsetX, a = n + P * this.view.width, f -= s * this.view.offsetY, r = f - s * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(n, a, f, r, this.near, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(A) {
    let e = super.toJSON(A);
    return e.object.zoom = this.zoom, e.object.left = this.left, e.object.right = this.right, e.object.top = this.top, e.object.bottom = this.bottom, e.object.near = this.near, e.object.far = this.far, this.view !== null && (e.object.view = Object.assign({}, this.view)), e;
  }
}, v8 = class extends gf {
  constructor() {
    super(new Gi(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = true;
  }
}, Gn = class extends Xn {
  constructor(A, e) {
    super(A, e), this.isDirectionalLight = true, this.type = "DirectionalLight", this.position.copy(Xe.DEFAULT_UP), this.updateMatrix(), this.target = new Xe(), this.shadow = new v8();
  }
  dispose() {
    super.dispose(), this.shadow.dispose();
  }
  copy(A) {
    return super.copy(A), this.target = A.target.clone(), this.shadow = A.shadow.clone(), this;
  }
  toJSON(A) {
    let e = super.toJSON(A);
    return e.object.shadow = this.shadow.toJSON(), e.object.target = this.target.uuid, e;
  }
};
var kn = class extends he {
  constructor() {
    super(), this.isInstancedBufferGeometry = true, this.type = "InstancedBufferGeometry", this.instanceCount = 1 / 0;
  }
  copy(A) {
    return super.copy(A), this.instanceCount = A.instanceCount, this;
  }
  toJSON() {
    let A = super.toJSON();
    return A.instanceCount = this.instanceCount, A.isInstancedBufferGeometry = true, A;
  }
};
var ci = -90, li = 1, Hf = class extends Xe {
  constructor(A, e, t) {
    super(), this.type = "CubeCamera", this.renderTarget = t, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    let i = new Le(ci, li, A, e);
    i.layers = this.layers, this.add(i);
    let n = new Le(ci, li, A, e);
    n.layers = this.layers, this.add(n);
    let a = new Le(ci, li, A, e);
    a.layers = this.layers, this.add(a);
    let f = new Le(ci, li, A, e);
    f.layers = this.layers, this.add(f);
    let r = new Le(ci, li, A, e);
    r.layers = this.layers, this.add(r);
    let P = new Le(ci, li, A, e);
    P.layers = this.layers, this.add(P);
  }
  updateCoordinateSystem() {
    let A = this.coordinateSystem, e = this.children.concat(), [t, i, n, a, f, r] = e;
    for (let P of e) this.remove(P);
    if (A === ht) t.up.set(0, 1, 0), t.lookAt(1, 0, 0), i.up.set(0, 1, 0), i.lookAt(-1, 0, 0), n.up.set(0, 0, -1), n.lookAt(0, 1, 0), a.up.set(0, 0, 1), a.lookAt(0, -1, 0), f.up.set(0, 1, 0), f.lookAt(0, 0, 1), r.up.set(0, 1, 0), r.lookAt(0, 0, -1);
    else if (A === xi) t.up.set(0, -1, 0), t.lookAt(-1, 0, 0), i.up.set(0, -1, 0), i.lookAt(1, 0, 0), n.up.set(0, 0, 1), n.lookAt(0, 1, 0), a.up.set(0, 0, -1), a.lookAt(0, -1, 0), f.up.set(0, -1, 0), f.lookAt(0, 0, 1), r.up.set(0, -1, 0), r.lookAt(0, 0, -1);
    else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + A);
    for (let P of e) this.add(P), P.updateMatrixWorld();
  }
  update(A, e) {
    this.parent === null && this.updateMatrixWorld();
    let { renderTarget: t, activeMipmapLevel: i } = this;
    this.coordinateSystem !== A.coordinateSystem && (this.coordinateSystem = A.coordinateSystem, this.updateCoordinateSystem());
    let [n, a, f, r, P, s] = this.children, p = A.getRenderTarget(), K = A.getActiveCubeFace(), U = A.getActiveMipmapLevel(), w = A.xr.enabled;
    A.xr.enabled = false;
    let l = t.texture.generateMipmaps;
    t.texture.generateMipmaps = false;
    let R = false;
    A.isWebGLRenderer === true ? R = A.state.buffers.depth.getReversed() : R = A.reversedDepthBuffer, A.setRenderTarget(t, 0, i), R && A.autoClear === false && A.clearDepth(), A.render(e, n), A.setRenderTarget(t, 1, i), R && A.autoClear === false && A.clearDepth(), A.render(e, a), A.setRenderTarget(t, 2, i), R && A.autoClear === false && A.clearDepth(), A.render(e, f), A.setRenderTarget(t, 3, i), R && A.autoClear === false && A.clearDepth(), A.render(e, r), A.setRenderTarget(t, 4, i), R && A.autoClear === false && A.clearDepth(), A.render(e, P), t.texture.generateMipmaps = l, A.setRenderTarget(t, 5, i), R && A.autoClear === false && A.clearDepth(), A.render(e, s), A.setRenderTarget(p, K, U), A.xr.enabled = w, t.texture.needsPMREMUpdate = true;
  }
}, vf = class extends Le {
  constructor(A = []) {
    super(), this.isArrayCamera = true, this.isMultiViewCamera = false, this.cameras = A;
  }
};
var $8 = "\\[\\]\\.:\\/", Vp = new RegExp("[" + $8 + "]", "g"), AP = "[^" + $8 + "]", Wp = "[^" + $8.replace("\\.", "") + "]", qp = /((?:WC+[\/:])*)/.source.replace("WC", AP), Jp = /(WCOD+)?/.source.replace("WCOD", Wp), Ep = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", AP), Zp = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", AP), Yp = new RegExp("^" + qp + Jp + Ep + Zp + "$"), _p = ["material", "materials", "bones", "map"], u8 = class {
  constructor(A, e, t) {
    let i = t || ue.parseTrackName(e);
    this._targetGroup = A, this._bindings = A.subscribe_(e, i);
  }
  getValue(A, e) {
    this.bind();
    let t = this._targetGroup.nCachedObjects_, i = this._bindings[t];
    i !== void 0 && i.getValue(A, e);
  }
  setValue(A, e) {
    let t = this._bindings;
    for (let i = this._targetGroup.nCachedObjects_, n = t.length; i !== n; ++i) t[i].setValue(A, e);
  }
  bind() {
    let A = this._bindings;
    for (let e = this._targetGroup.nCachedObjects_, t = A.length; e !== t; ++e) A[e].bind();
  }
  unbind() {
    let A = this._bindings;
    for (let e = this._targetGroup.nCachedObjects_, t = A.length; e !== t; ++e) A[e].unbind();
  }
}, ue = class o20 {
  constructor(A, e, t) {
    this.path = e, this.parsedPath = t || o20.parseTrackName(e), this.node = o20.findNode(A, this.parsedPath.nodeName), this.rootNode = A, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
  static create(A, e, t) {
    return A && A.isAnimationObjectGroup ? new o20.Composite(A, e, t) : new o20(A, e, t);
  }
  static sanitizeNodeName(A) {
    return A.replace(/\s/g, "_").replace(Vp, "");
  }
  static parseTrackName(A) {
    let e = Yp.exec(A);
    if (e === null) throw new Error("THREE.PropertyBinding: Cannot parse trackName: " + A);
    let t = { nodeName: e[2], objectName: e[3], objectIndex: e[4], propertyName: e[5], propertyIndex: e[6] }, i = t.nodeName && t.nodeName.lastIndexOf(".");
    if (i !== void 0 && i !== -1) {
      let n = t.nodeName.substring(i + 1);
      _p.indexOf(n) !== -1 && (t.nodeName = t.nodeName.substring(0, i), t.objectName = n);
    }
    if (t.propertyName === null || t.propertyName.length === 0) throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: " + A);
    return t;
  }
  static findNode(A, e) {
    if (e === void 0 || e === "" || e === "." || e === -1 || e === A.name || e === A.uuid) return A;
    if (A.skeleton) {
      let t = A.skeleton.getBoneByName(e);
      if (t !== void 0) return t;
    }
    if (A.children) {
      let t = function(n) {
        for (let a = 0; a < n.length; a++) {
          let f = n[a];
          if (f.name === e || f.uuid === e) return f;
          let r = t(f.children);
          if (r) return r;
        }
        return null;
      }, i = t(A.children);
      if (i) return i;
    }
    return null;
  }
  _getValue_unavailable() {
  }
  _setValue_unavailable() {
  }
  _getValue_direct(A, e) {
    A[e] = this.targetObject[this.propertyName];
  }
  _getValue_array(A, e) {
    let t = this.resolvedProperty;
    for (let i = 0, n = t.length; i !== n; ++i) A[e++] = t[i];
  }
  _getValue_arrayElement(A, e) {
    A[e] = this.resolvedProperty[this.propertyIndex];
  }
  _getValue_toArray(A, e) {
    this.resolvedProperty.toArray(A, e);
  }
  _setValue_direct(A, e) {
    this.targetObject[this.propertyName] = A[e];
  }
  _setValue_direct_setNeedsUpdate(A, e) {
    this.targetObject[this.propertyName] = A[e], this.targetObject.needsUpdate = true;
  }
  _setValue_direct_setMatrixWorldNeedsUpdate(A, e) {
    this.targetObject[this.propertyName] = A[e], this.targetObject.matrixWorldNeedsUpdate = true;
  }
  _setValue_array(A, e) {
    let t = this.resolvedProperty;
    for (let i = 0, n = t.length; i !== n; ++i) t[i] = A[e++];
  }
  _setValue_array_setNeedsUpdate(A, e) {
    let t = this.resolvedProperty;
    for (let i = 0, n = t.length; i !== n; ++i) t[i] = A[e++];
    this.targetObject.needsUpdate = true;
  }
  _setValue_array_setMatrixWorldNeedsUpdate(A, e) {
    let t = this.resolvedProperty;
    for (let i = 0, n = t.length; i !== n; ++i) t[i] = A[e++];
    this.targetObject.matrixWorldNeedsUpdate = true;
  }
  _setValue_arrayElement(A, e) {
    this.resolvedProperty[this.propertyIndex] = A[e];
  }
  _setValue_arrayElement_setNeedsUpdate(A, e) {
    this.resolvedProperty[this.propertyIndex] = A[e], this.targetObject.needsUpdate = true;
  }
  _setValue_arrayElement_setMatrixWorldNeedsUpdate(A, e) {
    this.resolvedProperty[this.propertyIndex] = A[e], this.targetObject.matrixWorldNeedsUpdate = true;
  }
  _setValue_fromArray(A, e) {
    this.resolvedProperty.fromArray(A, e);
  }
  _setValue_fromArray_setNeedsUpdate(A, e) {
    this.resolvedProperty.fromArray(A, e), this.targetObject.needsUpdate = true;
  }
  _setValue_fromArray_setMatrixWorldNeedsUpdate(A, e) {
    this.resolvedProperty.fromArray(A, e), this.targetObject.matrixWorldNeedsUpdate = true;
  }
  _getValue_unbound(A, e) {
    this.bind(), this.getValue(A, e);
  }
  _setValue_unbound(A, e) {
    this.bind(), this.setValue(A, e);
  }
  bind() {
    let A = this.node, e = this.parsedPath, t = e.objectName, i = e.propertyName, n = e.propertyIndex;
    if (A || (A = o20.findNode(this.rootNode, e.nodeName), this.node = A), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !A) {
      GA("PropertyBinding: No target node found for track: " + this.path + ".");
      return;
    }
    if (t) {
      let P = e.objectIndex;
      switch (t) {
        case "materials":
          if (!A.material) {
            bA("PropertyBinding: Can not bind to material as node does not have a material.", this);
            return;
          }
          if (!A.material.materials) {
            bA("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
            return;
          }
          A = A.material.materials;
          break;
        case "bones":
          if (!A.skeleton) {
            bA("PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
            return;
          }
          A = A.skeleton.bones;
          for (let s = 0; s < A.length; s++) if (A[s].name === P) {
            P = s;
            break;
          }
          break;
        case "map":
          if ("map" in A) {
            A = A.map;
            break;
          }
          if (!A.material) {
            bA("PropertyBinding: Can not bind to material as node does not have a material.", this);
            return;
          }
          if (!A.material.map) {
            bA("PropertyBinding: Can not bind to material.map as node.material does not have a map.", this);
            return;
          }
          A = A.material.map;
          break;
        default:
          if (A[t] === void 0) {
            bA("PropertyBinding: Can not bind to objectName of node undefined.", this);
            return;
          }
          A = A[t];
      }
      if (P !== void 0) {
        if (A[P] === void 0) {
          bA("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, A);
          return;
        }
        A = A[P];
      }
    }
    let a = A[i];
    if (a === void 0) {
      let P = e.nodeName;
      bA("PropertyBinding: Trying to update property for track: " + P + "." + i + " but it wasn't found.", A);
      return;
    }
    let f = this.Versioning.None;
    this.targetObject = A, A.isMaterial === true ? f = this.Versioning.NeedsUpdate : A.isObject3D === true && (f = this.Versioning.MatrixWorldNeedsUpdate);
    let r = this.BindingType.Direct;
    if (n !== void 0) {
      if (i === "morphTargetInfluences") {
        if (!A.geometry) {
          bA("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
          return;
        }
        if (!A.geometry.morphAttributes) {
          bA("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
          return;
        }
        A.morphTargetDictionary[n] !== void 0 && (n = A.morphTargetDictionary[n]);
      }
      r = this.BindingType.ArrayElement, this.resolvedProperty = a, this.propertyIndex = n;
    } else a.fromArray !== void 0 && a.toArray !== void 0 ? (r = this.BindingType.HasFromToArray, this.resolvedProperty = a) : Array.isArray(a) ? (r = this.BindingType.EntireArray, this.resolvedProperty = a) : this.propertyName = i;
    this.getValue = this.GetterByBindingType[r], this.setValue = this.SetterByBindingTypeAndVersioning[r][f];
  }
  unbind() {
    this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
};
ue.Composite = u8;
ue.prototype.BindingType = { Direct: 0, EntireArray: 1, ArrayElement: 2, HasFromToArray: 3 };
ue.prototype.Versioning = { None: 0, NeedsUpdate: 1, MatrixWorldNeedsUpdate: 2 };
ue.prototype.GetterByBindingType = [ue.prototype._getValue_direct, ue.prototype._getValue_array, ue.prototype._getValue_arrayElement, ue.prototype._getValue_toArray];
ue.prototype.SetterByBindingTypeAndVersioning = [[ue.prototype._setValue_direct, ue.prototype._setValue_direct_setNeedsUpdate, ue.prototype._setValue_direct_setMatrixWorldNeedsUpdate], [ue.prototype._setValue_array, ue.prototype._setValue_array_setNeedsUpdate, ue.prototype._setValue_array_setMatrixWorldNeedsUpdate], [ue.prototype._setValue_arrayElement, ue.prototype._setValue_arrayElement_setNeedsUpdate, ue.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate], [ue.prototype._setValue_fromArray, ue.prototype._setValue_fromArray_setNeedsUpdate, ue.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];
var bw = new Float32Array(1);
var Bo = class extends Hn {
  constructor(A, e, t = 1) {
    super(A, e), this.isInstancedInterleavedBuffer = true, this.meshPerAttribute = t;
  }
  copy(A) {
    return super.copy(A), this.meshPerAttribute = A.meshPerAttribute, this;
  }
  clone(A) {
    let e = super.clone(A);
    return e.meshPerAttribute = this.meshPerAttribute, e;
  }
  toJSON(A) {
    let e = super.toJSON(A);
    return e.isInstancedInterleavedBuffer = true, e.meshPerAttribute = this.meshPerAttribute, e;
  }
};
var jK = new Re(), In = class {
  constructor(A, e, t = 0, i = 1 / 0) {
    this.ray = new lo(A, e), this.near = t, this.far = i, this.camera = null, this.layers = new ji(), this.params = { Mesh: {}, Line: { threshold: 1 }, LOD: {}, Points: { threshold: 1 }, Sprite: {} };
  }
  set(A, e) {
    this.ray.set(A, e);
  }
  setFromCamera(A, e) {
    e.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(e.matrixWorld), this.ray.direction.set(A.x, A.y, 0.5).unproject(e).sub(this.ray.origin).normalize(), this.camera = e) : e.isOrthographicCamera ? (this.ray.origin.set(A.x, A.y, e.projectionMatrix.elements[14]).unproject(e), this.ray.direction.set(0, 0, -1).transformDirection(e.matrixWorld), this.camera = e) : bA("Raycaster: Unsupported camera type: " + e.type);
  }
  setFromXRController(A) {
    return jK.identity().extractRotation(A.matrixWorld), this.ray.origin.setFromMatrixPosition(A.matrixWorld), this.ray.direction.set(0, 0, -1).applyMatrix4(jK), this;
  }
  intersectObject(A, e = true, t = []) {
    return d8(A, this, t, e), t.sort(SK), t;
  }
  intersectObjects(A, e = true, t = []) {
    for (let i = 0, n = A.length; i < n; i++) d8(A[i], this, t, e);
    return t.sort(SK), t;
  }
};
function SK(o22, A) {
  return o22.distance - A.distance;
}
function d8(o22, A, e, t) {
  let i = true;
  if (o22.layers.test(A.layers) && o22.raycast(A, e) === false && (i = false), i === true && t === true) {
    let n = o22.children;
    for (let a = 0, f = n.length; a < f; a++) d8(n[a], A, e, true);
  }
}
var ki = class {
  constructor(A = 1, e = 0, t = 0) {
    this.radius = A, this.phi = e, this.theta = t;
  }
  set(A, e, t) {
    return this.radius = A, this.phi = e, this.theta = t, this;
  }
  copy(A) {
    return this.radius = A.radius, this.phi = A.phi, this.theta = A.theta, this;
  }
  makeSafe() {
    return this.phi = LA(this.phi, 1e-6, Math.PI - 1e-6), this;
  }
  setFromVector3(A) {
    return this.setFromCartesianCoords(A.x, A.y, A.z);
  }
  setFromCartesianCoords(A, e, t) {
    return this.radius = Math.sqrt(A * A + e * e + t * t), this.radius === 0 ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(A, t), this.phi = Math.acos(LA(e / this.radius, -1, 1))), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
};
var x8 = class o21 {
  static {
    o21.prototype.isMatrix2 = true;
  }
  constructor(A, e, t, i) {
    this.elements = [1, 0, 0, 1], A !== void 0 && this.set(A, e, t, i);
  }
  identity() {
    return this.set(1, 0, 0, 1), this;
  }
  fromArray(A, e = 0) {
    for (let t = 0; t < 4; t++) this.elements[t] = A[t + e];
    return this;
  }
  set(A, e, t, i) {
    let n = this.elements;
    return n[0] = A, n[2] = e, n[1] = t, n[3] = i, this;
  }
};
var NK = new j(), Xa = new j(), gi = new j(), Hi = new j(), p8 = new j(), $p = new j(), AU = new j(), bn = class {
  constructor(A = new j(), e = new j()) {
    this.start = A, this.end = e;
  }
  set(A, e) {
    return this.start.copy(A), this.end.copy(e), this;
  }
  copy(A) {
    return this.start.copy(A.start), this.end.copy(A.end), this;
  }
  getCenter(A) {
    return A.addVectors(this.start, this.end).multiplyScalar(0.5);
  }
  delta(A) {
    return A.subVectors(this.end, this.start);
  }
  distanceSq() {
    return this.start.distanceToSquared(this.end);
  }
  distance() {
    return this.start.distanceTo(this.end);
  }
  at(A, e) {
    return this.delta(e).multiplyScalar(A).add(this.start);
  }
  closestPointToPointParameter(A, e) {
    NK.subVectors(A, this.start), Xa.subVectors(this.end, this.start);
    let t = Xa.dot(Xa);
    if (t === 0) return 0;
    let n = Xa.dot(NK) / t;
    return e && (n = LA(n, 0, 1)), n;
  }
  closestPointToPoint(A, e, t) {
    let i = this.closestPointToPointParameter(A, e);
    return this.delta(t).multiplyScalar(i).add(this.start);
  }
  distanceSqToLine3(A, e = $p, t = AU) {
    let i = 10000000000000001e-32, n, a, f = this.start, r = A.start, P = this.end, s = A.end;
    gi.subVectors(P, f), Hi.subVectors(s, r), p8.subVectors(f, r);
    let p = gi.dot(gi), K = Hi.dot(Hi), U = Hi.dot(p8);
    if (p <= i && K <= i) return e.copy(f), t.copy(r), e.sub(t), e.dot(e);
    if (p <= i) n = 0, a = U / K, a = LA(a, 0, 1);
    else {
      let w = gi.dot(p8);
      if (K <= i) a = 0, n = LA(-w / p, 0, 1);
      else {
        let l = gi.dot(Hi), R = p * K - l * l;
        R !== 0 ? n = LA((l * U - w * K) / R, 0, 1) : n = 0, a = (l * n + U) / K, a < 0 ? (a = 0, n = LA(-w / p, 0, 1)) : a > 1 && (a = 1, n = LA((l - w) / p, 0, 1));
      }
    }
    return e.copy(f).addScaledVector(gi, n), t.copy(r).addScaledVector(Hi, a), e.distanceToSquared(t);
  }
  applyMatrix4(A) {
    return this.start.applyMatrix4(A), this.end.applyMatrix4(A), this;
  }
  equals(A) {
    return A.start.equals(this.start) && A.end.equals(this.end);
  }
  clone() {
    return new this.constructor().copy(this);
  }
};
var zn = class extends Dt {
  constructor(A, e = null) {
    super(), this.object = A, this.domElement = e, this.enabled = true, this.state = -1, this.keys = {}, this.mouseButtons = { LEFT: null, MIDDLE: null, RIGHT: null }, this.touches = { ONE: null, TWO: null };
  }
  connect(A) {
    this.domElement !== null && this.disconnect(), this.domElement = A;
  }
  disconnect() {
  }
  dispose() {
  }
  update() {
  }
};
function eP(o22, A, e, t) {
  let i = eU(t);
  switch (e) {
    case L8:
      return o22 * A;
    case W8:
      return o22 * A / i.components * i.byteLength;
    case Sf:
      return o22 * A / i.components * i.byteLength;
    case Xo:
      return o22 * A * 2 / i.components * i.byteLength;
    case Nf:
      return o22 * A * 2 / i.components * i.byteLength;
    case V8:
      return o22 * A * 3 / i.components * i.byteLength;
    case wt:
      return o22 * A * 4 / i.components * i.byteLength;
    case Cf:
      return o22 * A * 4 / i.components * i.byteLength;
    case Vn:
    case Wn:
      return Math.floor((o22 + 3) / 4) * Math.floor((A + 3) / 4) * 8;
    case qn:
    case Jn:
      return Math.floor((o22 + 3) / 4) * Math.floor((A + 3) / 4) * 16;
    case mf:
    case Of:
      return Math.max(o22, 16) * Math.max(A, 8) / 4;
    case Tf:
    case Xf:
      return Math.max(o22, 8) * Math.max(A, 8) / 2;
    case Qf:
    case Gf:
    case If:
    case bf:
      return Math.floor((o22 + 3) / 4) * Math.floor((A + 3) / 4) * 8;
    case kf:
    case En:
    case zf:
      return Math.floor((o22 + 3) / 4) * Math.floor((A + 3) / 4) * 16;
    case Mf:
      return Math.floor((o22 + 3) / 4) * Math.floor((A + 3) / 4) * 16;
    case yf:
      return Math.floor((o22 + 4) / 5) * Math.floor((A + 3) / 4) * 16;
    case Lf:
      return Math.floor((o22 + 4) / 5) * Math.floor((A + 4) / 5) * 16;
    case Vf:
      return Math.floor((o22 + 5) / 6) * Math.floor((A + 4) / 5) * 16;
    case Wf:
      return Math.floor((o22 + 5) / 6) * Math.floor((A + 5) / 6) * 16;
    case qf:
      return Math.floor((o22 + 7) / 8) * Math.floor((A + 4) / 5) * 16;
    case Jf:
      return Math.floor((o22 + 7) / 8) * Math.floor((A + 5) / 6) * 16;
    case Ef:
      return Math.floor((o22 + 7) / 8) * Math.floor((A + 7) / 8) * 16;
    case Zf:
      return Math.floor((o22 + 9) / 10) * Math.floor((A + 4) / 5) * 16;
    case Yf:
      return Math.floor((o22 + 9) / 10) * Math.floor((A + 5) / 6) * 16;
    case _f:
      return Math.floor((o22 + 9) / 10) * Math.floor((A + 7) / 8) * 16;
    case $f:
      return Math.floor((o22 + 9) / 10) * Math.floor((A + 9) / 10) * 16;
    case Ar:
      return Math.floor((o22 + 11) / 12) * Math.floor((A + 9) / 10) * 16;
    case er:
      return Math.floor((o22 + 11) / 12) * Math.floor((A + 11) / 12) * 16;
    case tr:
    case or:
    case ir:
      return Math.ceil(o22 / 4) * Math.ceil(A / 4) * 16;
    case nr:
    case ar:
      return Math.ceil(o22 / 4) * Math.ceil(A / 4) * 8;
    case Zn:
    case fr:
      return Math.ceil(o22 / 4) * Math.ceil(A / 4) * 16;
  }
  throw new Error(`Unable to determine texture byte length for ${e} format.`);
}
function eU(o22) {
  switch (o22) {
    case et:
    case b8:
      return { byteLength: 1, components: 1 };
    case zi:
    case z8:
    case Ct:
      return { byteLength: 2, components: 1 };
    case Bf:
    case jf:
      return { byteLength: 2, components: 4 };
    case St:
    case Df:
    case Nt:
      return { byteLength: 4, components: 1 };
    case M8:
    case y8:
      return { byteLength: 4, components: 3 };
  }
  throw new Error(`THREE.TextureUtils: Unknown texture type ${o22}.`);
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: { revision: "186" } }));
typeof window < "u" && (window.__THREE__ ? GA("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = "186");
function Ms() {
  let o22 = null, A = false, e = null, t = null;
  function i(n, a) {
    t = o22.requestAnimationFrame(i), e(n, a);
  }
  return { start: function() {
    A !== true && e !== null && o22 !== null && (t = o22.requestAnimationFrame(i), A = true);
  }, stop: function() {
    o22 !== null && o22.cancelAnimationFrame(t), A = false;
  }, setAnimationLoop: function(n) {
    e = n;
  }, setContext: function(n) {
    o22 = n;
  } };
}
function oU(o22) {
  let A = /* @__PURE__ */ new WeakMap();
  function e(f, r) {
    let P = f.array, s = f.usage, p = P.byteLength, K = o22.createBuffer();
    o22.bindBuffer(r, K), o22.bufferData(r, P, s), f.onUploadCallback();
    let U;
    if (P instanceof Float32Array) U = o22.FLOAT;
    else if (typeof Float16Array < "u" && P instanceof Float16Array) U = o22.HALF_FLOAT;
    else if (P instanceof Uint16Array) f.isFloat16BufferAttribute ? U = o22.HALF_FLOAT : U = o22.UNSIGNED_SHORT;
    else if (P instanceof Int16Array) U = o22.SHORT;
    else if (P instanceof Uint32Array) U = o22.UNSIGNED_INT;
    else if (P instanceof Int32Array) U = o22.INT;
    else if (P instanceof Int8Array) U = o22.BYTE;
    else if (P instanceof Uint8Array) U = o22.UNSIGNED_BYTE;
    else if (P instanceof Uint8ClampedArray) U = o22.UNSIGNED_BYTE;
    else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + P);
    return { buffer: K, type: U, bytesPerElement: P.BYTES_PER_ELEMENT, version: f.version, size: p };
  }
  function t(f, r, P) {
    let s = r.array, p = r.updateRanges;
    if (o22.bindBuffer(P, f), p.length === 0) o22.bufferSubData(P, 0, s);
    else {
      p.sort((U, w) => U.start - w.start);
      let K = 0;
      for (let U = 1; U < p.length; U++) {
        let w = p[K], l = p[U];
        l.start <= w.start + w.count + 1 ? w.count = Math.max(w.count, l.start + l.count - w.start) : (++K, p[K] = l);
      }
      p.length = K + 1;
      for (let U = 0, w = p.length; U < w; U++) {
        let l = p[U];
        o22.bufferSubData(P, l.start * s.BYTES_PER_ELEMENT, s, l.start, l.count);
      }
      r.clearUpdateRanges();
    }
    r.onUploadCallback();
  }
  function i(f) {
    return f.isInterleavedBufferAttribute && (f = f.data), A.get(f);
  }
  function n(f) {
    f.isInterleavedBufferAttribute && (f = f.data);
    let r = A.get(f);
    r && (o22.deleteBuffer(r.buffer), A.delete(f));
  }
  function a(f, r) {
    if (f.isInterleavedBufferAttribute && (f = f.data), f.isGLBufferAttribute) {
      let s = A.get(f);
      (!s || s.version < f.version) && A.set(f, { buffer: f.buffer, type: f.type, bytesPerElement: f.elementSize, version: f.version });
      return;
    }
    let P = A.get(f);
    if (P === void 0) A.set(f, e(f, r));
    else if (P.version < f.version) {
      if (P.size !== f.array.byteLength) throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
      t(P.buffer, f, r), P.version = f.version;
    }
  }
  return { get: i, remove: n, update: a };
}
var iU = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, nU = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`, aU = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, fU = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, rU = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`, PU = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, KU = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, sU = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, pU = `#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`, UU = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`, FU = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, RU = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, wU = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`, cU = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`, lU = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, gU = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`, HU = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, vU = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, uU = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, dU = `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`, xU = `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`, hU = `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`, DU = `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`, BU = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`, jU = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`, SU = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`, NU = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, CU = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, TU = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, mU = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, XU = "gl_FragColor = linearToOutputTexel( gl_FragColor );", OU = `vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, QU = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`, GU = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`, kU = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`, IU = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, bU = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, zU = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, MU = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, yU = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, LU = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, VU = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`, WU = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, qU = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, JU = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, EU = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`, ZU = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`, YU = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, _U = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, $U = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, A4 = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, e4 = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`, t4 = `uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, o42 = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, i4 = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`, n4 = `#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, a4 = `#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`, f4 = `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, r4 = `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, P4 = `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, K4 = `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`, s4 = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, p4 = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, U4 = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, F4 = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, R4 = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, w4 = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, c4 = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`, l4 = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, g4 = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, H4 = `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`, v4 = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, u4 = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`, d4 = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`, x4 = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, h4 = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, D4 = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`, B4 = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`, j4 = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, S4 = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, N4 = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, C4 = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, T4 = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, m4 = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`, X4 = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, O4 = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, Q4 = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, G4 = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, k4 = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, I4 = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, b4 = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`, z4 = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, M4 = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`, y4 = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`, L4 = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, V4 = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`, W4 = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, q4 = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`, J4 = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, E4 = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, Z4 = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, Y4 = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`, _4 = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`, $4 = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`, AF = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, eF = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, tF = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`, oF = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`, iF = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, nF = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, aF = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, fF = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, rF = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, PF = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, KF = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`, sF = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`, pF = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`, UF = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`, FF = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, RF = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, wF = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, cF = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, lF = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`, gF = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, HF = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, vF = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, uF = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`, dF = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, xF = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`, hF = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`, DF = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, BF = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, jF = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`, SF = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, NF = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, CF = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, TF = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, mF = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, XF = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, OF = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, QF = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, GF = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, ZA = { alphahash_fragment: iU, alphahash_pars_fragment: nU, alphamap_fragment: aU, alphamap_pars_fragment: fU, alphatest_fragment: rU, alphatest_pars_fragment: PU, aomap_fragment: KU, aomap_pars_fragment: sU, batching_pars_vertex: pU, batching_vertex: UU, begin_vertex: FU, beginnormal_vertex: RU, bsdfs: wU, iridescence_fragment: cU, bumpmap_pars_fragment: lU, clipping_planes_fragment: gU, clipping_planes_pars_fragment: HU, clipping_planes_pars_vertex: vU, clipping_planes_vertex: uU, color_fragment: dU, color_pars_fragment: xU, color_pars_vertex: hU, color_vertex: DU, common: BU, cube_uv_reflection_fragment: jU, defaultnormal_vertex: SU, displacementmap_pars_vertex: NU, displacementmap_vertex: CU, emissivemap_fragment: TU, emissivemap_pars_fragment: mU, colorspace_fragment: XU, colorspace_pars_fragment: OU, envmap_fragment: QU, envmap_common_pars_fragment: GU, envmap_pars_fragment: kU, envmap_pars_vertex: IU, envmap_physical_pars_fragment: ZU, envmap_vertex: bU, fog_vertex: zU, fog_pars_vertex: MU, fog_fragment: yU, fog_pars_fragment: LU, gradientmap_pars_fragment: VU, lightmap_pars_fragment: WU, lights_lambert_fragment: qU, lights_lambert_pars_fragment: JU, lights_pars_begin: EU, lights_toon_fragment: YU, lights_toon_pars_fragment: _U, lights_phong_fragment: $U, lights_phong_pars_fragment: A4, lights_physical_fragment: e4, lights_physical_pars_fragment: t4, lights_fragment_begin: o42, lights_fragment_maps: i4, lights_fragment_end: n4, lightprobes_pars_fragment: a4, logdepthbuf_fragment: f4, logdepthbuf_pars_fragment: r4, logdepthbuf_pars_vertex: P4, logdepthbuf_vertex: K4, map_fragment: s4, map_pars_fragment: p4, map_particle_fragment: U4, map_particle_pars_fragment: F4, metalnessmap_fragment: R4, metalnessmap_pars_fragment: w4, morphinstance_vertex: c4, morphcolor_vertex: l4, morphnormal_vertex: g4, morphtarget_pars_vertex: H4, morphtarget_vertex: v4, normal_fragment_begin: u4, normal_fragment_maps: d4, normal_pars_fragment: x4, normal_pars_vertex: h4, normal_vertex: D4, normalmap_pars_fragment: B4, clearcoat_normal_fragment_begin: j4, clearcoat_normal_fragment_maps: S4, clearcoat_pars_fragment: N4, iridescence_pars_fragment: C4, opaque_fragment: T4, packing: m4, premultiplied_alpha_fragment: X4, project_vertex: O4, dithering_fragment: Q4, dithering_pars_fragment: G4, roughnessmap_fragment: k4, roughnessmap_pars_fragment: I4, shadowmap_pars_fragment: b4, shadowmap_pars_vertex: z4, shadowmap_vertex: M4, shadowmask_pars_fragment: y4, skinbase_vertex: L4, skinning_pars_vertex: V4, skinning_vertex: W4, skinnormal_vertex: q4, specularmap_fragment: J4, specularmap_pars_fragment: E4, tonemapping_fragment: Z4, tonemapping_pars_fragment: Y4, transmission_fragment: _4, transmission_pars_fragment: $4, uv_pars_fragment: AF, uv_pars_vertex: eF, uv_vertex: tF, worldpos_vertex: oF, background_vert: iF, background_frag: nF, backgroundCube_vert: aF, backgroundCube_frag: fF, cube_vert: rF, cube_frag: PF, depth_vert: KF, depth_frag: sF, distance_vert: pF, distance_frag: UF, equirect_vert: FF, equirect_frag: RF, linedashed_vert: wF, linedashed_frag: cF, meshbasic_vert: lF, meshbasic_frag: gF, meshlambert_vert: HF, meshlambert_frag: vF, meshmatcap_vert: uF, meshmatcap_frag: dF, meshnormal_vert: xF, meshnormal_frag: hF, meshphong_vert: DF, meshphong_frag: BF, meshphysical_vert: jF, meshphysical_frag: SF, meshtoon_vert: NF, meshtoon_frag: CF, points_vert: TF, points_frag: mF, shadow_vert: XF, shadow_frag: OF, sprite_vert: QF, sprite_frag: GF }, UA = { common: { diffuse: { value: new JA(16777215) }, opacity: { value: 1 }, map: { value: null }, mapTransform: { value: new VA() }, alphaMap: { value: null }, alphaMapTransform: { value: new VA() }, alphaTest: { value: 0 } }, specularmap: { specularMap: { value: null }, specularMapTransform: { value: new VA() } }, envmap: { envMap: { value: null }, envMapRotation: { value: new VA() }, reflectivity: { value: 1 }, ior: { value: 1.5 }, refractionRatio: { value: 0.98 }, dfgLUT: { value: null } }, aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 }, aoMapTransform: { value: new VA() } }, lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 }, lightMapTransform: { value: new VA() } }, bumpmap: { bumpMap: { value: null }, bumpMapTransform: { value: new VA() }, bumpScale: { value: 1 } }, normalmap: { normalMap: { value: null }, normalMapTransform: { value: new VA() }, normalScale: { value: new nA(1, 1) } }, displacementmap: { displacementMap: { value: null }, displacementMapTransform: { value: new VA() }, displacementScale: { value: 1 }, displacementBias: { value: 0 } }, emissivemap: { emissiveMap: { value: null }, emissiveMapTransform: { value: new VA() } }, metalnessmap: { metalnessMap: { value: null }, metalnessMapTransform: { value: new VA() } }, roughnessmap: { roughnessMap: { value: null }, roughnessMapTransform: { value: new VA() } }, gradientmap: { gradientMap: { value: null } }, fog: { fogDensity: { value: 25e-5 }, fogNear: { value: 1 }, fogFar: { value: 2e3 }, fogColor: { value: new JA(16777215) } }, lights: { ambientLightColor: { value: [] }, lightProbe: { value: [] }, sunLights: { value: [], properties: { direction: {}, color: {} } }, sunLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, sunShadowMatrix: { value: [] }, sunShadowCascade: { value: [] }, directionalLights: { value: [], properties: { direction: {}, color: {} } }, directionalLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, directionalShadowMatrix: { value: [] }, spotLights: { value: [], properties: { color: {}, position: {}, direction: {}, distance: {}, coneCos: {}, penumbraCos: {}, decay: {} } }, spotLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, spotLightMap: { value: [] }, spotLightMatrix: { value: [] }, pointLights: { value: [], properties: { color: {}, position: {}, decay: {}, distance: {} } }, pointLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {}, shadowCameraNear: {}, shadowCameraFar: {} } }, pointShadowMatrix: { value: [] }, hemisphereLights: { value: [], properties: { direction: {}, skyColor: {}, groundColor: {} } }, rectAreaLights: { value: [], properties: { color: {}, position: {}, width: {}, height: {} } }, ltc_1: { value: null }, ltc_2: { value: null }, probesSH: { value: null }, probesMin: { value: new j() }, probesMax: { value: new j() }, probesResolution: { value: new j() } }, points: { diffuse: { value: new JA(16777215) }, opacity: { value: 1 }, size: { value: 1 }, scale: { value: 1 }, map: { value: null }, alphaMap: { value: null }, alphaMapTransform: { value: new VA() }, alphaTest: { value: 0 }, uvTransform: { value: new VA() } }, sprite: { diffuse: { value: new JA(16777215) }, opacity: { value: 1 }, center: { value: new nA(0.5, 0.5) }, rotation: { value: 0 }, map: { value: null }, mapTransform: { value: new VA() }, alphaMap: { value: null }, alphaMapTransform: { value: new VA() }, alphaTest: { value: 0 } } }, _e = { basic: { uniforms: Ve([UA.common, UA.specularmap, UA.envmap, UA.aomap, UA.lightmap, UA.fog]), vertexShader: ZA.meshbasic_vert, fragmentShader: ZA.meshbasic_frag }, lambert: { uniforms: Ve([UA.common, UA.specularmap, UA.envmap, UA.aomap, UA.lightmap, UA.emissivemap, UA.bumpmap, UA.normalmap, UA.displacementmap, UA.fog, UA.lights, { emissive: { value: new JA(0) }, envMapIntensity: { value: 1 } }]), vertexShader: ZA.meshlambert_vert, fragmentShader: ZA.meshlambert_frag }, phong: { uniforms: Ve([UA.common, UA.specularmap, UA.envmap, UA.aomap, UA.lightmap, UA.emissivemap, UA.bumpmap, UA.normalmap, UA.displacementmap, UA.fog, UA.lights, { emissive: { value: new JA(0) }, specular: { value: new JA(1118481) }, shininess: { value: 30 }, envMapIntensity: { value: 1 } }]), vertexShader: ZA.meshphong_vert, fragmentShader: ZA.meshphong_frag }, standard: { uniforms: Ve([UA.common, UA.envmap, UA.aomap, UA.lightmap, UA.emissivemap, UA.bumpmap, UA.normalmap, UA.displacementmap, UA.roughnessmap, UA.metalnessmap, UA.fog, UA.lights, { emissive: { value: new JA(0) }, roughness: { value: 1 }, metalness: { value: 0 }, envMapIntensity: { value: 1 } }]), vertexShader: ZA.meshphysical_vert, fragmentShader: ZA.meshphysical_frag }, toon: { uniforms: Ve([UA.common, UA.aomap, UA.lightmap, UA.emissivemap, UA.bumpmap, UA.normalmap, UA.displacementmap, UA.gradientmap, UA.fog, UA.lights, { emissive: { value: new JA(0) } }]), vertexShader: ZA.meshtoon_vert, fragmentShader: ZA.meshtoon_frag }, matcap: { uniforms: Ve([UA.common, UA.bumpmap, UA.normalmap, UA.displacementmap, UA.fog, { matcap: { value: null } }]), vertexShader: ZA.meshmatcap_vert, fragmentShader: ZA.meshmatcap_frag }, points: { uniforms: Ve([UA.points, UA.fog]), vertexShader: ZA.points_vert, fragmentShader: ZA.points_frag }, dashed: { uniforms: Ve([UA.common, UA.fog, { scale: { value: 1 }, dashSize: { value: 1 }, totalSize: { value: 2 } }]), vertexShader: ZA.linedashed_vert, fragmentShader: ZA.linedashed_frag }, depth: { uniforms: Ve([UA.common, UA.displacementmap]), vertexShader: ZA.depth_vert, fragmentShader: ZA.depth_frag }, normal: { uniforms: Ve([UA.common, UA.bumpmap, UA.normalmap, UA.displacementmap, { opacity: { value: 1 } }]), vertexShader: ZA.meshnormal_vert, fragmentShader: ZA.meshnormal_frag }, sprite: { uniforms: Ve([UA.sprite, UA.fog]), vertexShader: ZA.sprite_vert, fragmentShader: ZA.sprite_frag }, background: { uniforms: { uvTransform: { value: new VA() }, t2D: { value: null }, backgroundIntensity: { value: 1 } }, vertexShader: ZA.background_vert, fragmentShader: ZA.background_frag }, backgroundCube: { uniforms: { envMap: { value: null }, backgroundBlurriness: { value: 0 }, backgroundIntensity: { value: 1 }, backgroundRotation: { value: new VA() } }, vertexShader: ZA.backgroundCube_vert, fragmentShader: ZA.backgroundCube_frag }, cube: { uniforms: { tCube: { value: null }, tFlip: { value: -1 }, opacity: { value: 1 } }, vertexShader: ZA.cube_vert, fragmentShader: ZA.cube_frag }, equirect: { uniforms: { tEquirect: { value: null } }, vertexShader: ZA.equirect_vert, fragmentShader: ZA.equirect_frag }, distance: { uniforms: Ve([UA.common, UA.displacementmap, { referencePosition: { value: new j() }, nearDistance: { value: 1 }, farDistance: { value: 1e3 } }]), vertexShader: ZA.distance_vert, fragmentShader: ZA.distance_frag }, shadow: { uniforms: Ve([UA.lights, UA.fog, { color: { value: new JA(0) }, opacity: { value: 1 } }]), vertexShader: ZA.shadow_vert, fragmentShader: ZA.shadow_frag } };
_e.physical = { uniforms: Ve([_e.standard.uniforms, { clearcoat: { value: 0 }, clearcoatMap: { value: null }, clearcoatMapTransform: { value: new VA() }, clearcoatNormalMap: { value: null }, clearcoatNormalMapTransform: { value: new VA() }, clearcoatNormalScale: { value: new nA(1, 1) }, clearcoatRoughness: { value: 0 }, clearcoatRoughnessMap: { value: null }, clearcoatRoughnessMapTransform: { value: new VA() }, dispersion: { value: 0 }, retroreflectivity: { value: 0 }, iridescence: { value: 0 }, iridescenceMap: { value: null }, iridescenceMapTransform: { value: new VA() }, iridescenceIOR: { value: 1.3 }, iridescenceThicknessMinimum: { value: 100 }, iridescenceThicknessMaximum: { value: 400 }, iridescenceThicknessMap: { value: null }, iridescenceThicknessMapTransform: { value: new VA() }, sheen: { value: 0 }, sheenColor: { value: new JA(0) }, sheenColorMap: { value: null }, sheenColorMapTransform: { value: new VA() }, sheenRoughness: { value: 1 }, sheenRoughnessMap: { value: null }, sheenRoughnessMapTransform: { value: new VA() }, transmission: { value: 0 }, transmissionMap: { value: null }, transmissionMapTransform: { value: new VA() }, transmissionSamplerSize: { value: new nA() }, transmissionSamplerMap: { value: null }, thickness: { value: 0 }, thicknessMap: { value: null }, thicknessMapTransform: { value: new VA() }, attenuationDistance: { value: 0 }, attenuationColor: { value: new JA(0) }, specularColor: { value: new JA(1, 1, 1) }, specularColorMap: { value: null }, specularColorMapTransform: { value: new VA() }, specularIntensity: { value: 1 }, specularIntensityMap: { value: null }, specularIntensityMapTransform: { value: new VA() }, anisotropyVector: { value: new nA() }, anisotropyMap: { value: null }, anisotropyMapTransform: { value: new VA() } }]), vertexShader: ZA.meshphysical_vert, fragmentShader: ZA.meshphysical_frag };
var sr = { r: 0, b: 0, g: 0 }, kF = new Re(), ys = new VA();
ys.set(-1, 0, 0, 0, 1, 0, 0, 0, 1);
function IF(o22, A, e, t, i, n) {
  let a = new JA(0), f = i === true ? 0 : 1, r, P, s = null, p = 0, K = null;
  function U(u) {
    let D = u.isScene === true ? u.background : null;
    if (D && D.isTexture) {
      let v = u.backgroundBlurriness > 0;
      D = A.get(D, v);
    }
    return D;
  }
  function w(u) {
    let D = false, v = U(u);
    v === null ? R(a, f) : v && v.isColor && (R(v, 1), D = true);
    let x = o22.xr.getEnvironmentBlendMode();
    x === "additive" ? e.buffers.color.setClear(0, 0, 0, 1, n) : x === "alpha-blend" && e.buffers.color.setClear(0, 0, 0, 0, n), (o22.autoClear || D) && (e.buffers.depth.setTest(true), e.buffers.depth.setMask(true), e.buffers.color.setMask(true), o22.clear(o22.autoClearColor, o22.autoClearDepth, o22.autoClearStencil));
  }
  function l(u, D) {
    let v = U(D);
    v && (v.isCubeTexture || v.mapping === yn) ? (P === void 0 && (P = new ne(new yt(1, 1, 1), new Ee({ name: "BackgroundCubeMaterial", uniforms: Yo(_e.backgroundCube.uniforms), vertexShader: _e.backgroundCube.vertexShader, fragmentShader: _e.backgroundCube.fragmentShader, side: Ze, depthTest: false, depthWrite: false, fog: false, allowOverride: false })), P.geometry.deleteAttribute("normal"), P.geometry.deleteAttribute("uv"), P.onBeforeRender = function(x, h, S) {
      this.matrixWorld.copyPosition(S.matrixWorld);
    }, Object.defineProperty(P.material, "envMap", { get: function() {
      return this.uniforms.envMap.value;
    } }), t.update(P)), P.material.uniforms.envMap.value = v, P.material.uniforms.backgroundBlurriness.value = D.backgroundBlurriness, P.material.uniforms.backgroundIntensity.value = D.backgroundIntensity, P.material.uniforms.backgroundRotation.value.setFromMatrix4(kF.makeRotationFromEuler(D.backgroundRotation)).transpose(), v.isCubeTexture && v.isRenderTargetTexture === false && P.material.uniforms.backgroundRotation.value.premultiply(ys), P.material.toneMapped = ee.getTransfer(v.colorSpace) !== se, (s !== v || p !== v.version || K !== o22.toneMapping) && (P.material.needsUpdate = true, s = v, p = v.version, K = o22.toneMapping), P.layers.enableAll(), u.unshift(P, P.geometry, P.material, 0, 0, null)) : v && v.isTexture && (r === void 0 && (r = new ne(new qo(2, 2), new Ee({ name: "BackgroundMaterial", uniforms: Yo(_e.background.uniforms), vertexShader: _e.background.vertexShader, fragmentShader: _e.background.fragmentShader, side: No, depthTest: false, depthWrite: false, fog: false, allowOverride: false })), r.geometry.deleteAttribute("normal"), Object.defineProperty(r.material, "map", { get: function() {
      return this.uniforms.t2D.value;
    } }), t.update(r)), r.material.uniforms.t2D.value = v, r.material.uniforms.backgroundIntensity.value = D.backgroundIntensity, r.material.toneMapped = ee.getTransfer(v.colorSpace) !== se, v.matrixAutoUpdate === true && v.updateMatrix(), r.material.uniforms.uvTransform.value.copy(v.matrix), (s !== v || p !== v.version || K !== o22.toneMapping) && (r.material.needsUpdate = true, s = v, p = v.version, K = o22.toneMapping), r.layers.enableAll(), u.unshift(r, r.geometry, r.material, 0, 0, null));
  }
  function R(u, D) {
    u.getRGB(sr, _8(o22)), e.buffers.color.setClear(sr.r, sr.g, sr.b, D, n);
  }
  function F() {
    P !== void 0 && (P.geometry.dispose(), P.material.dispose(), P = void 0), r !== void 0 && (r.geometry.dispose(), r.material.dispose(), r = void 0);
  }
  return { getClearColor: function() {
    return a;
  }, setClearColor: function(u, D = 1) {
    a.set(u), f = D, R(a, f);
  }, getClearAlpha: function() {
    return f;
  }, setClearAlpha: function(u) {
    f = u, R(a, f);
  }, render: w, addToRenderList: l, dispose: F };
}
function bF(o22, A) {
  let e = o22.getParameter(o22.MAX_VERTEX_ATTRIBS), t = {}, i = K(null), n = i, a = false;
  function f(O, G, M, m, k) {
    let W = false, V = p(O, m, M, G);
    n !== V && (n = V, P(n.object)), W = U(O, m, M, k), W && w(O, m, M, k), k !== null && A.update(k, o22.ELEMENT_ARRAY_BUFFER), (W || a) && (a = false, v(O, G, M, m), k !== null && o22.bindBuffer(o22.ELEMENT_ARRAY_BUFFER, A.get(k).buffer));
  }
  function r() {
    return o22.createVertexArray();
  }
  function P(O) {
    return o22.bindVertexArray(O);
  }
  function s(O) {
    return o22.deleteVertexArray(O);
  }
  function p(O, G, M, m) {
    let k = m.wireframe === true, W = t[G.id];
    W === void 0 && (W = {}, t[G.id] = W);
    let V = O.isInstancedMesh === true ? O.id : 0, aA = W[V];
    aA === void 0 && (aA = {}, W[V] = aA);
    let q = aA[M.id];
    q === void 0 && (q = {}, aA[M.id] = q);
    let AA = q[k];
    return AA === void 0 && (AA = K(r()), q[k] = AA), AA;
  }
  function K(O) {
    let G = [], M = [], m = [];
    for (let k = 0; k < e; k++) G[k] = 0, M[k] = 0, m[k] = 0;
    return { geometry: null, program: null, wireframe: false, newAttributes: G, enabledAttributes: M, attributeDivisors: m, object: O, attributes: {}, index: null };
  }
  function U(O, G, M, m) {
    let k = n.attributes, W = G.attributes, V = 0, aA = M.getAttributes();
    for (let q in aA) if (aA[q].location >= 0) {
      let oA = k[q], TA = W[q];
      if (TA === void 0 && (q === "instanceMatrix" && O.instanceMatrix && (TA = O.instanceMatrix), q === "instanceColor" && O.instanceColor && (TA = O.instanceColor)), oA === void 0 || oA.attribute !== TA || TA && oA.data !== TA.data) return true;
      V++;
    }
    return n.attributesNum !== V || n.index !== m;
  }
  function w(O, G, M, m) {
    let k = {}, W = G.attributes, V = 0, aA = M.getAttributes();
    for (let q in aA) if (aA[q].location >= 0) {
      let oA = W[q];
      oA === void 0 && (q === "instanceMatrix" && O.instanceMatrix && (oA = O.instanceMatrix), q === "instanceColor" && O.instanceColor && (oA = O.instanceColor));
      let TA = {};
      TA.attribute = oA, oA && oA.data && (TA.data = oA.data), k[q] = TA, V++;
    }
    n.attributes = k, n.attributesNum = V, n.index = m;
  }
  function l() {
    let O = n.newAttributes;
    for (let G = 0, M = O.length; G < M; G++) O[G] = 0;
  }
  function R(O) {
    F(O, 0);
  }
  function F(O, G) {
    let M = n.newAttributes, m = n.enabledAttributes, k = n.attributeDivisors;
    M[O] = 1, m[O] === 0 && (o22.enableVertexAttribArray(O), m[O] = 1), k[O] !== G && (o22.vertexAttribDivisor(O, G), k[O] = G);
  }
  function u() {
    let O = n.newAttributes, G = n.enabledAttributes;
    for (let M = 0, m = G.length; M < m; M++) G[M] !== O[M] && (o22.disableVertexAttribArray(M), G[M] = 0);
  }
  function D(O, G, M, m, k, W, V) {
    V === true ? o22.vertexAttribIPointer(O, G, M, k, W) : o22.vertexAttribPointer(O, G, M, m, k, W);
  }
  function v(O, G, M, m) {
    l();
    let k = m.attributes, W = M.getAttributes(), V = G.defaultAttributeValues;
    for (let aA in W) {
      let q = W[aA];
      if (q.location >= 0) {
        let AA = k[aA];
        if (AA === void 0 && (aA === "instanceMatrix" && O.instanceMatrix && (AA = O.instanceMatrix), aA === "instanceColor" && O.instanceColor && (AA = O.instanceColor)), AA !== void 0) {
          let oA = AA.normalized, TA = AA.itemSize, BA = A.get(AA);
          if (BA === void 0) continue;
          let fe = BA.buffer, _A = BA.type, oe = BA.bytesPerElement, Z = _A === o22.INT || _A === o22.UNSIGNED_INT || AA.gpuType === Df;
          if (AA.isInterleavedBufferAttribute) {
            let eA = AA.data, HA = eA.stride, zA = AA.offset;
            if (eA.isInstancedInterleavedBuffer) {
              for (let xA = 0; xA < q.locationSize; xA++) F(q.location + xA, eA.meshPerAttribute);
              O.isInstancedMesh !== true && m._maxInstanceCount === void 0 && (m._maxInstanceCount = eA.meshPerAttribute * eA.count);
            } else for (let xA = 0; xA < q.locationSize; xA++) R(q.location + xA);
            o22.bindBuffer(o22.ARRAY_BUFFER, fe);
            for (let xA = 0; xA < q.locationSize; xA++) D(q.location + xA, TA / q.locationSize, _A, oA, HA * oe, (zA + TA / q.locationSize * xA) * oe, Z);
          } else {
            if (AA.isInstancedBufferAttribute) {
              for (let eA = 0; eA < q.locationSize; eA++) F(q.location + eA, AA.meshPerAttribute);
              O.isInstancedMesh !== true && m._maxInstanceCount === void 0 && (m._maxInstanceCount = AA.meshPerAttribute * AA.count);
            } else for (let eA = 0; eA < q.locationSize; eA++) R(q.location + eA);
            o22.bindBuffer(o22.ARRAY_BUFFER, fe);
            for (let eA = 0; eA < q.locationSize; eA++) D(q.location + eA, TA / q.locationSize, _A, oA, TA * oe, TA / q.locationSize * eA * oe, Z);
          }
        } else if (V !== void 0) {
          let oA = V[aA];
          if (oA !== void 0) switch (oA.length) {
            case 2:
              o22.vertexAttrib2fv(q.location, oA);
              break;
            case 3:
              o22.vertexAttrib3fv(q.location, oA);
              break;
            case 4:
              o22.vertexAttrib4fv(q.location, oA);
              break;
            default:
              o22.vertexAttrib1fv(q.location, oA);
          }
        }
      }
    }
    u();
  }
  function x() {
    B();
    for (let O in t) {
      let G = t[O];
      for (let M in G) {
        let m = G[M];
        for (let k in m) {
          let W = m[k];
          for (let V in W) s(W[V].object), delete W[V];
          delete m[k];
        }
      }
      delete t[O];
    }
  }
  function h(O) {
    if (t[O.id] === void 0) return;
    let G = t[O.id];
    for (let M in G) {
      let m = G[M];
      for (let k in m) {
        let W = m[k];
        for (let V in W) s(W[V].object), delete W[V];
        delete m[k];
      }
    }
    delete t[O.id];
  }
  function S(O) {
    for (let G in t) {
      let M = t[G];
      for (let m in M) {
        let k = M[m];
        if (k[O.id] === void 0) continue;
        let W = k[O.id];
        for (let V in W) s(W[V].object), delete W[V];
        delete k[O.id];
      }
    }
  }
  function g(O) {
    for (let G in t) {
      let M = t[G], m = O.isInstancedMesh === true ? O.id : 0, k = M[m];
      if (k !== void 0) {
        for (let W in k) {
          let V = k[W];
          for (let aA in V) s(V[aA].object), delete V[aA];
          delete k[W];
        }
        delete M[m], Object.keys(M).length === 0 && delete t[G];
      }
    }
  }
  function B() {
    N(), a = true, n !== i && (n = i, P(n.object));
  }
  function N() {
    i.geometry = null, i.program = null, i.wireframe = false;
  }
  return { setup: f, reset: B, resetDefaultState: N, dispose: x, releaseStatesOfGeometry: h, releaseStatesOfObject: g, releaseStatesOfProgram: S, initAttributes: l, enableAttribute: R, disableUnusedAttributes: u };
}
function zF(o22, A, e) {
  let t;
  function i(r) {
    t = r;
  }
  function n(r, P) {
    o22.drawArrays(t, r, P), e.update(P, t, 1);
  }
  function a(r, P, s) {
    s !== 0 && (o22.drawArraysInstanced(t, r, P, s), e.update(P, t, s));
  }
  function f(r, P, s) {
    if (s === 0) return;
    A.get("WEBGL_multi_draw").multiDrawArraysWEBGL(t, r, 0, P, 0, s);
    let K = 0;
    for (let U = 0; U < s; U++) K += P[U];
    e.update(K, t, 1);
  }
  this.setMode = i, this.render = n, this.renderInstances = a, this.renderMultiDraw = f;
}
function MF(o22, A, e, t) {
  let i;
  function n() {
    if (i !== void 0) return i;
    if (A.has("EXT_texture_filter_anisotropic") === true) {
      let S = A.get("EXT_texture_filter_anisotropic");
      i = o22.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else i = 0;
    return i;
  }
  function a(S) {
    return !(S !== wt && t.convert(S) !== o22.getParameter(o22.IMPLEMENTATION_COLOR_READ_FORMAT));
  }
  function f(S) {
    let g = S === Ct && (A.has("EXT_color_buffer_half_float") || A.has("EXT_color_buffer_float"));
    return !(S !== et && S !== Nt && !g && t.convert(S) !== o22.getParameter(o22.IMPLEMENTATION_COLOR_READ_TYPE));
  }
  function r(S) {
    if (S === "highp") {
      if (o22.getShaderPrecisionFormat(o22.VERTEX_SHADER, o22.HIGH_FLOAT).precision > 0 && o22.getShaderPrecisionFormat(o22.FRAGMENT_SHADER, o22.HIGH_FLOAT).precision > 0) return "highp";
      S = "mediump";
    }
    return S === "mediump" && o22.getShaderPrecisionFormat(o22.VERTEX_SHADER, o22.MEDIUM_FLOAT).precision > 0 && o22.getShaderPrecisionFormat(o22.FRAGMENT_SHADER, o22.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  let P = e.precision !== void 0 ? e.precision : "highp", s = r(P);
  s !== P && (GA("WebGLRenderer:", P, "not supported, using", s, "instead."), P = s);
  let p = e.logarithmicDepthBuffer === true, K = e.reversedDepthBuffer === true && A.has("EXT_clip_control");
  e.reversedDepthBuffer === true && K === false && GA("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");
  let U = o22.getParameter(o22.MAX_TEXTURE_IMAGE_UNITS), w = o22.getParameter(o22.MAX_VERTEX_TEXTURE_IMAGE_UNITS), l = o22.getParameter(o22.MAX_TEXTURE_SIZE), R = o22.getParameter(o22.MAX_CUBE_MAP_TEXTURE_SIZE), F = o22.getParameter(o22.MAX_VERTEX_ATTRIBS), u = o22.getParameter(o22.MAX_VERTEX_UNIFORM_VECTORS), D = o22.getParameter(o22.MAX_VARYING_VECTORS), v = o22.getParameter(o22.MAX_FRAGMENT_UNIFORM_VECTORS), x = o22.getParameter(o22.MAX_SAMPLES), h = o22.getParameter(o22.SAMPLES);
  return { isWebGL2: true, getMaxAnisotropy: n, getMaxPrecision: r, textureFormatReadable: a, textureTypeReadable: f, precision: P, logarithmicDepthBuffer: p, reversedDepthBuffer: K, maxTextures: U, maxVertexTextures: w, maxTextureSize: l, maxCubemapSize: R, maxAttributes: F, maxVertexUniforms: u, maxVaryings: D, maxFragmentUniforms: v, maxSamples: x, samples: h };
}
function yF(o22) {
  let A = this, e = null, t = 0, i = false, n = false, a = new at(), f = new VA(), r = { value: null, needsUpdate: false };
  this.uniform = r, this.numPlanes = 0, this.numIntersection = 0, this.init = function(p, K) {
    let U = p.length !== 0 || K || t !== 0 || i;
    return i = K, t = p.length, U;
  }, this.beginShadows = function() {
    n = true, s(null);
  }, this.endShadows = function() {
    n = false;
  }, this.setGlobalState = function(p, K) {
    e = s(p, K, 0);
  }, this.setState = function(p, K, U) {
    let w = p.clippingPlanes, l = p.clipIntersection, R = p.clipShadows, F = o22.get(p);
    if (!i || w === null || w.length === 0 || n && !R) n ? s(null) : P();
    else {
      let u = n ? 0 : t, D = u * 4, v = F.clippingState || null;
      r.value = v, v = s(w, K, D, U);
      for (let x = 0; x !== D; ++x) v[x] = e[x];
      F.clippingState = v, this.numIntersection = l ? this.numPlanes : 0, this.numPlanes += u;
    }
  };
  function P() {
    r.value !== e && (r.value = e, r.needsUpdate = t > 0), A.numPlanes = t, A.numIntersection = 0;
  }
  function s(p, K, U, w) {
    let l = p !== null ? p.length : 0, R = null;
    if (l !== 0) {
      if (R = r.value, w !== true || R === null) {
        let F = U + l * 4, u = K.matrixWorldInverse;
        f.getNormalMatrix(u), (R === null || R.length < F) && (R = new Float32Array(F));
        for (let D = 0, v = U; D !== l; ++D, v += 4) a.copy(p[D]).applyMatrix4(u, f), a.normal.toArray(R, v), R[v + 3] = a.constant;
      }
      r.value = R, r.needsUpdate = true;
    }
    return A.numPlanes = l, A.numIntersection = 0, R;
  }
}
var Li = 4, LF = 6, VF = 20, WF = 256, _n = new Gi(), vs = new JA(), tP = null, oP = 0, iP = 0, nP = false, qF = new j(), _o = new j(), Ur = class {
  constructor(A) {
    this._renderer = A, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._sizeLods = [], this._lodMeshes = [], this._backgroundBox = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._blurMaterial = null, this._ggxMaterial = null;
  }
  fromScene(A, e = 0, t = 0.1, i = 100, n = {}) {
    let { size: a = 256, position: f = qF } = n;
    tP = this._renderer.getRenderTarget(), oP = this._renderer.getActiveCubeFace(), iP = this._renderer.getActiveMipmapLevel(), nP = this._renderer.xr.enabled, this._renderer.xr.enabled = false, this._setSize(a);
    let r = this._allocateTargets();
    return r.depthBuffer = true, this._sceneToCubeUV(A, t, i, r, f), e > 0 && this._blur(r, 0, 0, e), this._applyPMREM(r), this._cleanup(r), r;
  }
  fromEquirectangular(A, e = null) {
    return this._fromTexture(A, e);
  }
  fromCubemap(A, e = null) {
    return this._fromTexture(A, e);
  }
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = xs(), this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = ds(), this._compileMaterial(this._equirectMaterial));
  }
  dispose() {
    this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose(), this._backgroundBox !== null && (this._backgroundBox.geometry.dispose(), this._backgroundBox.material.dispose());
  }
  _setSize(A) {
    this._lodMax = Math.floor(Math.log2(A)), this._cubeSize = Math.pow(2, this._lodMax);
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(), this._ggxMaterial !== null && this._ggxMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
    for (let A = 0; A < this._lodMeshes.length; A++) this._lodMeshes[A].geometry.dispose();
  }
  _cleanup(A) {
    this._renderer.setRenderTarget(tP, oP, iP), this._renderer.xr.enabled = nP, A.scissorTest = false, yi(A, 0, 0, A.width, A.height);
  }
  _fromTexture(A, e) {
    A.mapping === Co || A.mapping === Eo ? this._setSize(A.image.length === 0 ? 16 : A.image[0].width || A.image[0].image.width) : this._setSize(A.image.width / 4), tP = this._renderer.getRenderTarget(), oP = this._renderer.getActiveCubeFace(), iP = this._renderer.getActiveMipmapLevel(), nP = this._renderer.xr.enabled, this._renderer.xr.enabled = false;
    let t = e || this._allocateTargets();
    return this._textureToCubeUV(A, t), this._applyPMREM(t), this._cleanup(t), t;
  }
  _allocateTargets() {
    let A = 3 * Math.max(this._cubeSize, 112), e = 4 * this._cubeSize, t = { magFilter: Oe, minFilter: Oe, generateMipmaps: false, type: Ct, format: wt, colorSpace: pn, depthBuffer: false }, i = us(A, e, t);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== A || this._pingPongRenderTarget.height !== e) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = us(A, e, t);
      let { _lodMax: n } = this;
      ({ lodMeshes: this._lodMeshes, sizeLods: this._sizeLods } = JF(n)), this._blurMaterial = ZF(n, A, e), this._ggxMaterial = EF(n, A, e);
    }
    return i;
  }
  _compileMaterial(A) {
    let e = new ne(new he(), A);
    this._renderer.compile(e, _n);
  }
  _sceneToCubeUV(A, e, t, i, n) {
    let r = new Le(90, 1, e, t), P = [1, -1, 1, 1, 1, 1], s = [1, 1, 1, -1, -1, -1], p = this._renderer, K = p.autoClear, U = p.toneMapping;
    p.getClearColor(vs), p.toneMapping = jt, p.autoClear = false, p.state.buffers.depth.getReversed() && (p.setRenderTarget(i), p.clearDepth(), p.setRenderTarget(null)), this._backgroundBox === null && (this._backgroundBox = new ne(new yt(), new Rt({ name: "PMREM.Background", side: Ze, depthWrite: false, depthTest: false })));
    let l = this._backgroundBox, R = l.material, F = false, u = A.background;
    u ? u.isColor && (R.color.copy(u), A.background = null, F = true) : (R.color.copy(vs), F = true);
    for (let D = 0; D < 6; D++) {
      let v = D % 3;
      v === 0 ? (r.up.set(0, P[D], 0), r.position.set(n.x, n.y, n.z), r.lookAt(n.x + s[D], n.y, n.z)) : v === 1 ? (r.up.set(0, 0, P[D]), r.position.set(n.x, n.y, n.z), r.lookAt(n.x, n.y + s[D], n.z)) : (r.up.set(0, P[D], 0), r.position.set(n.x, n.y, n.z), r.lookAt(n.x, n.y, n.z + s[D]));
      let x = this._cubeSize;
      yi(i, v * x, D > 2 ? x : 0, x, x), p.setRenderTarget(i), F && p.render(l, r), p.render(A, r);
    }
    p.toneMapping = U, p.autoClear = K, A.background = u;
  }
  _textureToCubeUV(A, e) {
    let t = this._renderer, i = A.mapping === Co || A.mapping === Eo;
    i ? (this._cubemapMaterial === null && (this._cubemapMaterial = xs()), this._cubemapMaterial.uniforms.flipEnvMap.value = A.isRenderTargetTexture === false ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = ds());
    let n = i ? this._cubemapMaterial : this._equirectMaterial, a = this._lodMeshes[0];
    a.material = n;
    let f = n.uniforms;
    f.envMap.value = A;
    let r = this._cubeSize;
    yi(e, 0, 0, 3 * r, 2 * r), t.setRenderTarget(e), t.render(a, _n);
  }
  _applyPMREM(A) {
    let e = this._renderer, t = e.autoClear;
    e.autoClear = false;
    let i = this._lodMeshes.length;
    for (let n = 1; n < i; n++) this._applyGGXFilter(A, n - 1, n);
    e.autoClear = t;
  }
  _applyGGXFilter(A, e, t) {
    let i = this._renderer, n = this._pingPongRenderTarget, a = this._ggxMaterial, f = this._lodMeshes[t];
    f.material = a;
    let r = a.uniforms, P = t / (this._lodMeshes.length - 1), s = e / (this._lodMeshes.length - 1), p = Math.sqrt(P * P - s * s), K = P * 1.25, U = p * K, { _lodMax: w } = this, l = this._sizeLods[t], R = 3 * l * (t > w - Li ? t - w + Li : 0), F = 4 * (this._cubeSize - l);
    r.envMap.value = A.texture, r.roughness.value = U, r.mipInt.value = w - e, yi(n, R, F, 3 * l, 2 * l), i.setRenderTarget(n), i.render(f, _n), r.envMap.value = n.texture, r.roughness.value = 0, r.mipInt.value = w - t, yi(A, R, F, 3 * l, 2 * l), i.setRenderTarget(A), i.render(f, _n);
  }
  _blur(A, e, t, i) {
    let n = this._pingPongRenderTarget, a = Math.min(i, Math.PI) / Math.SQRT2;
    this._blurPass(A, n, e, t, a), this._blurPass(n, A, t, t, a);
  }
  _blurPass(A, e, t, i, n) {
    let a = this._renderer, f = this._blurMaterial, r = this._lodMeshes[i];
    r.material = f;
    let P = f.uniforms;
    P.envMap.value = A.texture, P.sigma.value = n, P.mipInt.value = this._lodMax - t;
    let s = this._sizeLods[i], p = 3 * s * (i > this._lodMax - Li ? i - this._lodMax + Li : 0), K = 4 * (this._cubeSize - s);
    yi(e, p, K, 3 * s, 2 * s), a.setRenderTarget(e), a.render(r, _n);
  }
};
function JF(o22) {
  let A = [], e = [], t = o22, i = o22 - Li + 1 + LF;
  for (let n = 0; n < i; n++) {
    let a = Math.pow(2, t);
    A.push(a);
    let f = 1 / (a - 2), r = -f, P = 1 + f, s = [r, r, P, r, P, P, r, r, P, P, r, P], p = 6, K = 6, U = 3, w = new Float32Array(U * K * p), l = new Float32Array(U * K * p);
    for (let F = 0; F < p; F++) {
      let u = F % 3 * 2 / 3 - 1, D = F > 2 ? 0 : -1, v = [u, D, 0, u + 2 / 3, D, 0, u + 2 / 3, D + 1, 0, u, D, 0, u + 2 / 3, D + 1, 0, u, D + 1, 0];
      w.set(v, U * K * F);
      for (let x = 0; x < K; x++) {
        let h = s[x * 2] * 2 - 1, S = s[x * 2 + 1] * 2 - 1;
        F === 0 ? _o.set(1, S, h) : F === 1 ? _o.set(-h, 1, -S) : F === 2 ? _o.set(-h, S, 1) : F === 3 ? _o.set(-1, S, -h) : F === 4 ? _o.set(-h, -1, S) : _o.set(h, S, -1), _o.toArray(l, (F * K + x) * U);
      }
    }
    let R = new he();
    R.setAttribute("position", new ft(w, U)), R.setAttribute("outputDirection", new ft(l, U)), e.push(new ne(R, null)), t > Li && t--;
  }
  return { lodMeshes: e, sizeLods: A };
}
function us(o22, A, e) {
  let t = new At(o22, A, e);
  return t.texture.mapping = yn, t.texture.name = "PMREM.cubeUv", t.scissorTest = true, t;
}
function yi(o22, A, e, t, i) {
  o22.viewport.set(A, e, t, i), o22.scissor.set(A, e, t, i);
}
function EF(o22, A, e) {
  return new Ee({ name: "PMREMGGXConvolution", defines: { GGX_SAMPLES: WF, CUBEUV_TEXEL_WIDTH: 1 / A, CUBEUV_TEXEL_HEIGHT: 1 / e, CUBEUV_MAX_MIP: `${o22}.0` }, uniforms: { envMap: { value: null }, roughness: { value: 0 }, mipInt: { value: 0 } }, vertexShader: wr(), fragmentShader: `

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`, blending: Wt, depthTest: false, depthWrite: false });
}
function ZF(o22, A, e) {
  return new Ee({ name: "SphericalGaussianBlur", defines: { SAMPLES: VF, CUBEUV_TEXEL_WIDTH: 1 / A, CUBEUV_TEXEL_HEIGHT: 1 / e, CUBEUV_MAX_MIP: `${o22}.0` }, uniforms: { envMap: { value: null }, sigma: { value: 0 }, mipInt: { value: 0 } }, vertexShader: wr(), fragmentShader: `

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`, blending: Wt, depthTest: false, depthWrite: false });
}
function ds() {
  return new Ee({ name: "EquirectangularToCubeUV", uniforms: { envMap: { value: null } }, vertexShader: wr(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`, blending: Wt, depthTest: false, depthWrite: false });
}
function xs() {
  return new Ee({ name: "CubemapToCubeUV", uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } }, vertexShader: wr(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`, blending: Wt, depthTest: false, depthWrite: false });
}
function wr() {
  return `

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`;
}
var Fr = class extends At {
  constructor(A = 1, e = {}) {
    super(A, A, e), this.isWebGLCubeRenderTarget = true;
    let t = { width: A, height: A, depth: 1 }, i = [t, t, t, t, t, t];
    this.texture = new vn(i), this._setTextureOptions(e), this.texture.isRenderTargetTexture = true;
  }
  fromEquirectangularTexture(A, e) {
    this.texture.type = e.type, this.texture.colorSpace = e.colorSpace, this.texture.generateMipmaps = e.generateMipmaps, this.texture.minFilter = e.minFilter, this.texture.magFilter = e.magFilter;
    let t = { uniforms: { tEquirect: { value: null } }, vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`, fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			` }, i = new yt(5, 5, 5), n = new Ee({ name: "CubemapFromEquirect", uniforms: Yo(t.uniforms), vertexShader: t.vertexShader, fragmentShader: t.fragmentShader, side: Ze, blending: Wt });
    n.uniforms.tEquirect.value = e;
    let a = new ne(i, n), f = e.minFilter;
    return e.minFilter === To && (e.minFilter = Oe), new Hf(1, 10, this).update(A, a), e.minFilter = f, a.geometry.dispose(), a.material.dispose(), this;
  }
  clear(A, e = true, t = true, i = true) {
    let n = A.getRenderTarget();
    for (let a = 0; a < 6; a++) A.setRenderTarget(this, a), A.clear(e, t, i);
    A.setRenderTarget(n);
  }
};
function YF(o22) {
  let A = /* @__PURE__ */ new WeakMap(), e = /* @__PURE__ */ new WeakMap(), t = null;
  function i(K, U = false) {
    return K == null ? null : U ? a(K) : n(K);
  }
  function n(K) {
    if (K && K.isTexture) {
      let U = K.mapping;
      if (U === df || U === xf) if (A.has(K)) {
        let w = A.get(K).texture;
        return f(w, K.mapping);
      } else {
        let w = K.image;
        if (w && w.height > 0) {
          let l = new Fr(w.height);
          return l.fromEquirectangularTexture(o22, K), A.set(K, l), K.addEventListener("dispose", P), f(l.texture, K.mapping);
        } else return null;
      }
    }
    return K;
  }
  function a(K) {
    if (K && K.isTexture) {
      let U = K.mapping, w = U === df || U === xf, l = U === Co || U === Eo;
      if (w || l) {
        let R = e.get(K), F = R !== void 0 ? R.texture.pmremVersion : 0;
        if (K.isRenderTargetTexture && K.pmremVersion !== F) return t === null && (t = new Ur(o22)), R = w ? t.fromEquirectangular(K, R) : t.fromCubemap(K, R), R.texture.pmremVersion = K.pmremVersion, e.set(K, R), R.texture;
        if (R !== void 0) return R.texture;
        {
          let u = K.image;
          return w && u && u.height > 0 || l && u && r(u) ? (t === null && (t = new Ur(o22)), R = w ? t.fromEquirectangular(K) : t.fromCubemap(K), R.texture.pmremVersion = K.pmremVersion, e.set(K, R), K.addEventListener("dispose", s), R.texture) : null;
        }
      }
    }
    return K;
  }
  function f(K, U) {
    return U === df ? K.mapping = Co : U === xf && (K.mapping = Eo), K;
  }
  function r(K) {
    let U = 0, w = 6;
    for (let l = 0; l < w; l++) K[l] !== void 0 && U++;
    return U === w;
  }
  function P(K) {
    let U = K.target;
    U.removeEventListener("dispose", P);
    let w = A.get(U);
    w !== void 0 && (A.delete(U), w.dispose());
  }
  function s(K) {
    let U = K.target;
    U.removeEventListener("dispose", s);
    let w = e.get(U);
    w !== void 0 && (e.delete(U), w.dispose());
  }
  function p() {
    A = /* @__PURE__ */ new WeakMap(), e = /* @__PURE__ */ new WeakMap(), t !== null && (t.dispose(), t = null);
  }
  return { get: i, dispose: p };
}
function _F(o22) {
  let A = {};
  function e(t) {
    if (A[t] !== void 0) return A[t];
    let i = o22.getExtension(t);
    return A[t] = i, i;
  }
  return { has: function(t) {
    return e(t) !== null;
  }, init: function() {
    e("EXT_color_buffer_float"), e("WEBGL_clip_cull_distance"), e("OES_texture_float_linear"), e("EXT_color_buffer_half_float"), e("WEBGL_multisampled_render_to_texture"), e("WEBGL_render_shared_exponent");
  }, get: function(t) {
    let i = e(t);
    return i === null && yo("WebGLRenderer: " + t + " extension not supported."), i;
  } };
}
function $F(o22, A, e, t) {
  let i = {}, n = /* @__PURE__ */ new WeakMap();
  function a(p) {
    let K = p.target;
    K.index !== null && A.remove(K.index);
    for (let w in K.attributes) A.remove(K.attributes[w]);
    K.removeEventListener("dispose", a), delete i[K.id];
    let U = n.get(K);
    U && (A.remove(U), n.delete(K)), t.releaseStatesOfGeometry(K), K.isInstancedBufferGeometry === true && delete K._maxInstanceCount, e.memory.geometries--;
  }
  function f(p, K) {
    return i[K.id] === true || (K.addEventListener("dispose", a), i[K.id] = true, e.memory.geometries++), K;
  }
  function r(p) {
    let K = p.attributes;
    for (let U in K) A.update(K[U], o22.ARRAY_BUFFER);
  }
  function P(p) {
    let K = [], U = p.index, w = p.attributes.position, l = 0;
    if (w === void 0) return;
    if (U !== null) {
      let u = U.array;
      l = U.version;
      for (let D = 0, v = u.length; D < v; D += 3) {
        let x = u[D + 0], h = u[D + 1], S = u[D + 2];
        K.push(x, h, h, S, S, x);
      }
    } else {
      let u = w.array;
      l = w.version;
      for (let D = 0, v = u.length / 3 - 1; D < v; D += 3) {
        let x = D + 0, h = D + 1, S = D + 2;
        K.push(x, h, h, S, S, x);
      }
    }
    let R = new (w.count >= 65535 ? gn : ln)(K, 1);
    R.version = l;
    let F = n.get(p);
    F && A.remove(F), n.set(p, R);
  }
  function s(p) {
    let K = n.get(p);
    if (K) {
      let U = p.index;
      U !== null && K.version < U.version && P(p);
    } else P(p);
    return n.get(p);
  }
  return { get: f, update: r, getWireframeAttribute: s };
}
function AR(o22, A, e) {
  let t;
  function i(p) {
    t = p;
  }
  let n, a;
  function f(p) {
    n = p.type, a = p.bytesPerElement;
  }
  function r(p, K) {
    o22.drawElements(t, K, n, p * a), e.update(K, t, 1);
  }
  function P(p, K, U) {
    U !== 0 && (o22.drawElementsInstanced(t, K, n, p * a, U), e.update(K, t, U));
  }
  function s(p, K, U) {
    if (U === 0) return;
    A.get("WEBGL_multi_draw").multiDrawElementsWEBGL(t, K, 0, n, p, 0, U);
    let l = 0;
    for (let R = 0; R < U; R++) l += K[R];
    e.update(l, t, 1);
  }
  this.setMode = i, this.setIndex = f, this.render = r, this.renderInstances = P, this.renderMultiDraw = s;
}
function eR(o22) {
  let A = { geometries: 0, textures: 0 }, e = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
  function t(n, a, f) {
    switch (e.calls++, a) {
      case o22.TRIANGLES:
        e.triangles += f * (n / 3);
        break;
      case o22.LINES:
        e.lines += f * (n / 2);
        break;
      case o22.LINE_STRIP:
        e.lines += f * (n - 1);
        break;
      case o22.LINE_LOOP:
        e.lines += f * n;
        break;
      case o22.POINTS:
        e.points += f * n;
        break;
      default:
        bA("WebGLInfo: Unknown draw mode:", a);
        break;
    }
  }
  function i() {
    e.calls = 0, e.triangles = 0, e.points = 0, e.lines = 0;
  }
  return { memory: A, render: e, programs: null, autoReset: true, reset: i, update: t };
}
function tR(o22, A, e) {
  let t = /* @__PURE__ */ new WeakMap(), i = new pe();
  function n(a, f, r) {
    let P = a.morphTargetInfluences, s = f.morphAttributes.position || f.morphAttributes.normal || f.morphAttributes.color, p = s !== void 0 ? s.length : 0, K = t.get(f);
    if (K === void 0 || K.count !== p) {
      let B = function() {
        S.dispose(), t.delete(f), f.removeEventListener("dispose", B);
      };
      K !== void 0 && K.texture.dispose();
      let U = f.morphAttributes.position !== void 0, w = f.morphAttributes.normal !== void 0, l = f.morphAttributes.color !== void 0, R = f.morphAttributes.position || [], F = f.morphAttributes.normal || [], u = f.morphAttributes.color || [], D = 0;
      U === true && (D = 1), w === true && (D = 2), l === true && (D = 3);
      let v = f.attributes.position.count * D, x = 1;
      v > A.maxTextureSize && (x = Math.ceil(v / A.maxTextureSize), v = A.maxTextureSize);
      let h = new Float32Array(v * x * 4 * p), S = new wn(h, v, x, p);
      S.type = Nt, S.needsUpdate = true;
      let g = D * 4;
      for (let N = 0; N < p; N++) {
        let O = R[N], G = F[N], M = u[N], m = v * x * 4 * N;
        for (let k = 0; k < O.count; k++) {
          let W = k * g;
          U === true && (i.fromBufferAttribute(O, k), h[m + W + 0] = i.x, h[m + W + 1] = i.y, h[m + W + 2] = i.z, h[m + W + 3] = 0), w === true && (i.fromBufferAttribute(G, k), h[m + W + 4] = i.x, h[m + W + 5] = i.y, h[m + W + 6] = i.z, h[m + W + 7] = 0), l === true && (i.fromBufferAttribute(M, k), h[m + W + 8] = i.x, h[m + W + 9] = i.y, h[m + W + 10] = i.z, h[m + W + 11] = M.itemSize === 4 ? i.w : 1);
        }
      }
      K = { count: p, texture: S, size: new nA(v, x) }, t.set(f, K), f.addEventListener("dispose", B);
    }
    if (a.isInstancedMesh === true && a.morphTexture !== null) r.getUniforms().setValue(o22, "morphTexture", a.morphTexture, e);
    else {
      let U = 0;
      for (let l = 0; l < P.length; l++) U += P[l];
      let w = f.morphTargetsRelative ? 1 : 1 - U;
      r.getUniforms().setValue(o22, "morphTargetBaseInfluence", w), r.getUniforms().setValue(o22, "morphTargetInfluences", P);
    }
    r.getUniforms().setValue(o22, "morphTargetsTexture", K.texture, e), r.getUniforms().setValue(o22, "morphTargetsTextureSize", K.size);
  }
  return { update: n };
}
function oR(o22, A, e, t, i) {
  let n = /* @__PURE__ */ new WeakMap();
  function a(P) {
    let s = i.render.frame, p = P.geometry, K = A.get(P, p);
    if (n.get(K) !== s && (A.update(K), n.set(K, s)), P.isInstancedMesh && (P.hasEventListener("dispose", r) === false && P.addEventListener("dispose", r), n.get(P) !== s && (e.update(P.instanceMatrix, o22.ARRAY_BUFFER), P.instanceColor !== null && e.update(P.instanceColor, o22.ARRAY_BUFFER), n.set(P, s))), P.isSkinnedMesh) {
      let U = P.skeleton;
      n.get(U) !== s && (U.update(), n.set(U, s));
    }
    return K;
  }
  function f() {
    n = /* @__PURE__ */ new WeakMap();
  }
  function r(P) {
    let s = P.target;
    s.removeEventListener("dispose", r), t.releaseStatesOfObject(s), e.remove(s.instanceMatrix), s.instanceColor !== null && e.remove(s.instanceColor);
  }
  return { update: a, dispose: f };
}
var iR = { [T8]: "LINEAR_TONE_MAPPING", [m8]: "REINHARD_TONE_MAPPING", [X8]: "CINEON_TONE_MAPPING", [O8]: "ACES_FILMIC_TONE_MAPPING", [G8]: "AGX_TONE_MAPPING", [k8]: "NEUTRAL_TONE_MAPPING", [Q8]: "CUSTOM_TONE_MAPPING" };
function nR(o22, A, e, t, i, n) {
  let a = new At(A, e, { type: o22, depthBuffer: i, stencilBuffer: n, samples: t ? 4 : 0, storeMultisampledDepthBuffer: false, storeMultisampledStencilBuffer: false, resolveDepthBuffer: false, resolveStencilBuffer: false }), f = null, r = null, P = new he();
  P.setAttribute("position", new te([-1, 3, 0, -1, -1, 0, 3, -1, 0], 3)), P.setAttribute("uv", new te([0, 2, 0, 0, 2, 0], 2));
  let s = new ff({ uniforms: { tDiffuse: { value: null } }, vertexShader: `
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`, fragmentShader: `
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`, depthTest: false, depthWrite: false }), p = new ne(P, s), K = new Gi(-1, 1, 1, -1, 0, 1), U = null, w = null, l = false, R, F = null, u = [], D = false;
  this.setSize = function(v, x) {
    a.setSize(v, x), f !== null && f.setSize(v, x), r !== null && r.setSize(v, x);
    for (let h = 0; h < u.length; h++) {
      let S = u[h];
      S.setSize && S.setSize(v, x);
    }
  }, this.setEffects = function(v) {
    u = v, D = u.length > 0 && u[0].isRenderPass === true;
    let x = a.width, h = a.height;
    u.length > 0 && f === null && (f = new At(x, h, { type: Ct, depthBuffer: false, stencilBuffer: false }), r = new At(x, h, { type: Ct, depthBuffer: false, stencilBuffer: false }));
    for (let S = 0; S < u.length; S++) {
      let g = u[S];
      g.setSize && g.setSize(x, h);
    }
  }, this.begin = function(v, x) {
    if (l || v.toneMapping === jt && u.length === 0) return false;
    if (F = x, x !== null) {
      let h = x.width, S = x.height;
      (a.width !== h || a.height !== S) && this.setSize(h, S);
    }
    return D === false && v.setRenderTarget(a), R = v.toneMapping, v.toneMapping = jt, true;
  }, this.hasRenderPass = function() {
    return D;
  }, this.end = function(v, x) {
    v.toneMapping = R, l = true;
    let h = a, S = f;
    for (let g = 0; g < u.length; g++) {
      let B = u[g];
      B.enabled !== false && (B.render(v, S, h, x), B.needsSwap !== false && (h = S, S = S === f ? r : f));
    }
    if (U !== v.outputColorSpace || w !== v.toneMapping) {
      U = v.outputColorSpace, w = v.toneMapping, s.defines = {}, ee.getTransfer(U) === se && (s.defines.SRGB_TRANSFER = "");
      let g = iR[w];
      g && (s.defines[g] = ""), s.needsUpdate = true;
    }
    s.uniforms.tDiffuse.value = h.texture, v.setRenderTarget(F), v.render(p, K), F = null, l = false;
  }, this.isCompositing = function() {
    return l;
  }, this.dispose = function() {
    a.dispose(), f !== null && f.dispose(), r !== null && r.dispose(), P.dispose(), s.dispose();
  };
}
var Ls = new Je(), rP = new Ho(1, 1), Vs = new wn(), Ws = new Ja(), qs = new vn(), hs = [], Ds = [], Bs = new Float32Array(16), js = new Float32Array(9), Ss = new Float32Array(4);
function Wi(o22, A, e) {
  let t = o22[0];
  if (t <= 0 || t > 0) return o22;
  let i = A * e, n = hs[i];
  if (n === void 0 && (n = new Float32Array(i), hs[i] = n), A !== 0) {
    t.toArray(n, 0);
    for (let a = 1, f = 0; a !== A; ++a) f += e, o22[a].toArray(n, f);
  }
  return n;
}
function Se(o22, A) {
  if (o22.length !== A.length) return false;
  for (let e = 0, t = o22.length; e < t; e++) if (o22[e] !== A[e]) return false;
  return true;
}
function Ne(o22, A) {
  for (let e = 0, t = A.length; e < t; e++) o22[e] = A[e];
}
function cr(o22, A) {
  let e = Ds[A];
  e === void 0 && (e = new Int32Array(A), Ds[A] = e);
  for (let t = 0; t !== A; ++t) e[t] = o22.allocateTextureUnit();
  return e;
}
function aR(o22, A) {
  let e = this.cache;
  e[0] !== A && (o22.uniform1f(this.addr, A), e[0] = A);
}
function fR(o22, A) {
  let e = this.cache;
  if (A.x !== void 0) (e[0] !== A.x || e[1] !== A.y) && (o22.uniform2f(this.addr, A.x, A.y), e[0] = A.x, e[1] = A.y);
  else {
    if (Se(e, A)) return;
    o22.uniform2fv(this.addr, A), Ne(e, A);
  }
}
function rR(o22, A) {
  let e = this.cache;
  if (A.x !== void 0) (e[0] !== A.x || e[1] !== A.y || e[2] !== A.z) && (o22.uniform3f(this.addr, A.x, A.y, A.z), e[0] = A.x, e[1] = A.y, e[2] = A.z);
  else if (A.r !== void 0) (e[0] !== A.r || e[1] !== A.g || e[2] !== A.b) && (o22.uniform3f(this.addr, A.r, A.g, A.b), e[0] = A.r, e[1] = A.g, e[2] = A.b);
  else {
    if (Se(e, A)) return;
    o22.uniform3fv(this.addr, A), Ne(e, A);
  }
}
function PR(o22, A) {
  let e = this.cache;
  if (A.x !== void 0) (e[0] !== A.x || e[1] !== A.y || e[2] !== A.z || e[3] !== A.w) && (o22.uniform4f(this.addr, A.x, A.y, A.z, A.w), e[0] = A.x, e[1] = A.y, e[2] = A.z, e[3] = A.w);
  else {
    if (Se(e, A)) return;
    o22.uniform4fv(this.addr, A), Ne(e, A);
  }
}
function KR(o22, A) {
  let e = this.cache, t = A.elements;
  if (t === void 0) {
    if (Se(e, A)) return;
    o22.uniformMatrix2fv(this.addr, false, A), Ne(e, A);
  } else {
    if (Se(e, t)) return;
    Ss.set(t), o22.uniformMatrix2fv(this.addr, false, Ss), Ne(e, t);
  }
}
function sR(o22, A) {
  let e = this.cache, t = A.elements;
  if (t === void 0) {
    if (Se(e, A)) return;
    o22.uniformMatrix3fv(this.addr, false, A), Ne(e, A);
  } else {
    if (Se(e, t)) return;
    js.set(t), o22.uniformMatrix3fv(this.addr, false, js), Ne(e, t);
  }
}
function pR(o22, A) {
  let e = this.cache, t = A.elements;
  if (t === void 0) {
    if (Se(e, A)) return;
    o22.uniformMatrix4fv(this.addr, false, A), Ne(e, A);
  } else {
    if (Se(e, t)) return;
    Bs.set(t), o22.uniformMatrix4fv(this.addr, false, Bs), Ne(e, t);
  }
}
function UR(o22, A) {
  let e = this.cache;
  e[0] !== A && (o22.uniform1i(this.addr, A), e[0] = A);
}
function FR(o22, A) {
  let e = this.cache;
  if (A.x !== void 0) (e[0] !== A.x || e[1] !== A.y) && (o22.uniform2i(this.addr, A.x, A.y), e[0] = A.x, e[1] = A.y);
  else {
    if (Se(e, A)) return;
    o22.uniform2iv(this.addr, A), Ne(e, A);
  }
}
function RR(o22, A) {
  let e = this.cache;
  if (A.x !== void 0) (e[0] !== A.x || e[1] !== A.y || e[2] !== A.z) && (o22.uniform3i(this.addr, A.x, A.y, A.z), e[0] = A.x, e[1] = A.y, e[2] = A.z);
  else {
    if (Se(e, A)) return;
    o22.uniform3iv(this.addr, A), Ne(e, A);
  }
}
function wR(o22, A) {
  let e = this.cache;
  if (A.x !== void 0) (e[0] !== A.x || e[1] !== A.y || e[2] !== A.z || e[3] !== A.w) && (o22.uniform4i(this.addr, A.x, A.y, A.z, A.w), e[0] = A.x, e[1] = A.y, e[2] = A.z, e[3] = A.w);
  else {
    if (Se(e, A)) return;
    o22.uniform4iv(this.addr, A), Ne(e, A);
  }
}
function cR(o22, A) {
  let e = this.cache;
  e[0] !== A && (o22.uniform1ui(this.addr, A), e[0] = A);
}
function lR(o22, A) {
  let e = this.cache;
  if (A.x !== void 0) (e[0] !== A.x || e[1] !== A.y) && (o22.uniform2ui(this.addr, A.x, A.y), e[0] = A.x, e[1] = A.y);
  else {
    if (Se(e, A)) return;
    o22.uniform2uiv(this.addr, A), Ne(e, A);
  }
}
function gR(o22, A) {
  let e = this.cache;
  if (A.x !== void 0) (e[0] !== A.x || e[1] !== A.y || e[2] !== A.z) && (o22.uniform3ui(this.addr, A.x, A.y, A.z), e[0] = A.x, e[1] = A.y, e[2] = A.z);
  else {
    if (Se(e, A)) return;
    o22.uniform3uiv(this.addr, A), Ne(e, A);
  }
}
function HR(o22, A) {
  let e = this.cache;
  if (A.x !== void 0) (e[0] !== A.x || e[1] !== A.y || e[2] !== A.z || e[3] !== A.w) && (o22.uniform4ui(this.addr, A.x, A.y, A.z, A.w), e[0] = A.x, e[1] = A.y, e[2] = A.z, e[3] = A.w);
  else {
    if (Se(e, A)) return;
    o22.uniform4uiv(this.addr, A), Ne(e, A);
  }
}
function vR(o22, A, e) {
  let t = this.cache, i = e.allocateTextureUnit();
  t[0] !== i && (o22.uniform1i(this.addr, i), t[0] = i);
  let n;
  this.type === o22.SAMPLER_2D_SHADOW ? (rP.compareFunction = e.isReversedDepthBuffer() ? Kr : Pr, n = rP) : n = Ls, e.setTexture2D(A || n, i);
}
function uR(o22, A, e) {
  let t = this.cache, i = e.allocateTextureUnit();
  t[0] !== i && (o22.uniform1i(this.addr, i), t[0] = i), e.setTexture3D(A || Ws, i);
}
function dR(o22, A, e) {
  let t = this.cache, i = e.allocateTextureUnit();
  t[0] !== i && (o22.uniform1i(this.addr, i), t[0] = i), e.setTextureCube(A || qs, i);
}
function xR(o22, A, e) {
  let t = this.cache, i = e.allocateTextureUnit();
  t[0] !== i && (o22.uniform1i(this.addr, i), t[0] = i), e.setTexture2DArray(A || Vs, i);
}
function hR(o22) {
  switch (o22) {
    case 5126:
      return aR;
    case 35664:
      return fR;
    case 35665:
      return rR;
    case 35666:
      return PR;
    case 35674:
      return KR;
    case 35675:
      return sR;
    case 35676:
      return pR;
    case 5124:
    case 35670:
      return UR;
    case 35667:
    case 35671:
      return FR;
    case 35668:
    case 35672:
      return RR;
    case 35669:
    case 35673:
      return wR;
    case 5125:
      return cR;
    case 36294:
      return lR;
    case 36295:
      return gR;
    case 36296:
      return HR;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return vR;
    case 35679:
    case 36299:
    case 36307:
      return uR;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return dR;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return xR;
  }
}
function DR(o22, A) {
  o22.uniform1fv(this.addr, A);
}
function BR(o22, A) {
  let e = Wi(A, this.size, 2);
  o22.uniform2fv(this.addr, e);
}
function jR(o22, A) {
  let e = Wi(A, this.size, 3);
  o22.uniform3fv(this.addr, e);
}
function SR(o22, A) {
  let e = Wi(A, this.size, 4);
  o22.uniform4fv(this.addr, e);
}
function NR(o22, A) {
  let e = Wi(A, this.size, 4);
  o22.uniformMatrix2fv(this.addr, false, e);
}
function CR(o22, A) {
  let e = Wi(A, this.size, 9);
  o22.uniformMatrix3fv(this.addr, false, e);
}
function TR(o22, A) {
  let e = Wi(A, this.size, 16);
  o22.uniformMatrix4fv(this.addr, false, e);
}
function mR(o22, A) {
  o22.uniform1iv(this.addr, A);
}
function XR(o22, A) {
  o22.uniform2iv(this.addr, A);
}
function OR(o22, A) {
  o22.uniform3iv(this.addr, A);
}
function QR(o22, A) {
  o22.uniform4iv(this.addr, A);
}
function GR(o22, A) {
  o22.uniform1uiv(this.addr, A);
}
function kR(o22, A) {
  o22.uniform2uiv(this.addr, A);
}
function IR(o22, A) {
  o22.uniform3uiv(this.addr, A);
}
function bR(o22, A) {
  o22.uniform4uiv(this.addr, A);
}
function zR(o22, A, e) {
  let t = this.cache, i = A.length, n = cr(e, i);
  Se(t, n) || (o22.uniform1iv(this.addr, n), Ne(t, n));
  let a;
  this.type === o22.SAMPLER_2D_SHADOW ? a = rP : a = Ls;
  for (let f = 0; f !== i; ++f) e.setTexture2D(A[f] || a, n[f]);
}
function MR(o22, A, e) {
  let t = this.cache, i = A.length, n = cr(e, i);
  Se(t, n) || (o22.uniform1iv(this.addr, n), Ne(t, n));
  for (let a = 0; a !== i; ++a) e.setTexture3D(A[a] || Ws, n[a]);
}
function yR(o22, A, e) {
  let t = this.cache, i = A.length, n = cr(e, i);
  Se(t, n) || (o22.uniform1iv(this.addr, n), Ne(t, n));
  for (let a = 0; a !== i; ++a) e.setTextureCube(A[a] || qs, n[a]);
}
function LR(o22, A, e) {
  let t = this.cache, i = A.length, n = cr(e, i);
  Se(t, n) || (o22.uniform1iv(this.addr, n), Ne(t, n));
  for (let a = 0; a !== i; ++a) e.setTexture2DArray(A[a] || Vs, n[a]);
}
function VR(o22) {
  switch (o22) {
    case 5126:
      return DR;
    case 35664:
      return BR;
    case 35665:
      return jR;
    case 35666:
      return SR;
    case 35674:
      return NR;
    case 35675:
      return CR;
    case 35676:
      return TR;
    case 5124:
    case 35670:
      return mR;
    case 35667:
    case 35671:
      return XR;
    case 35668:
    case 35672:
      return OR;
    case 35669:
    case 35673:
      return QR;
    case 5125:
      return GR;
    case 36294:
      return kR;
    case 36295:
      return IR;
    case 36296:
      return bR;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return zR;
    case 35679:
    case 36299:
    case 36307:
      return MR;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return yR;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return LR;
  }
}
var PP = class {
  constructor(A, e, t) {
    this.id = A, this.addr = t, this.cache = [], this.type = e.type, this.setValue = hR(e.type);
  }
}, KP = class {
  constructor(A, e, t) {
    this.id = A, this.addr = t, this.cache = [], this.type = e.type, this.size = e.size, this.setValue = VR(e.type);
  }
}, sP = class {
  constructor(A) {
    this.id = A, this.seq = [], this.map = {};
  }
  setValue(A, e, t) {
    let i = this.seq;
    for (let n = 0, a = i.length; n !== a; ++n) {
      let f = i[n];
      f.setValue(A, e[f.id], t);
    }
  }
}, aP = /(\w+)(\])?(\[|\.)?/g;
function Ns(o22, A) {
  o22.seq.push(A), o22.map[A.id] = A;
}
function WR(o22, A, e) {
  let t = o22.name, i = t.length;
  for (aP.lastIndex = 0; ; ) {
    let n = aP.exec(t), a = aP.lastIndex, f = n[1], r = n[2] === "]", P = n[3];
    if (r && (f = f | 0), P === void 0 || P === "[" && a + 2 === i) {
      Ns(e, P === void 0 ? new PP(f, o22, A) : new KP(f, o22, A));
      break;
    } else {
      let p = e.map[f];
      p === void 0 && (p = new sP(f), Ns(e, p)), e = p;
    }
  }
}
var Vi = class {
  constructor(A, e) {
    this.seq = [], this.map = {};
    let t = A.getProgramParameter(e, A.ACTIVE_UNIFORMS);
    for (let a = 0; a < t; ++a) {
      let f = A.getActiveUniform(e, a), r = A.getUniformLocation(e, f.name);
      WR(f, r, this);
    }
    let i = [], n = [];
    for (let a of this.seq) a.type === A.SAMPLER_2D_SHADOW || a.type === A.SAMPLER_CUBE_SHADOW || a.type === A.SAMPLER_2D_ARRAY_SHADOW ? i.push(a) : n.push(a);
    i.length > 0 && (this.seq = i.concat(n));
  }
  setValue(A, e, t, i) {
    let n = this.map[e];
    n !== void 0 && n.setValue(A, t, i);
  }
  setOptional(A, e, t) {
    let i = e[t];
    i !== void 0 && this.setValue(A, t, i);
  }
  static upload(A, e, t, i) {
    for (let n = 0, a = e.length; n !== a; ++n) {
      let f = e[n], r = t[f.id];
      r.needsUpdate !== false && f.setValue(A, r.value, i);
    }
  }
  static seqWithValue(A, e) {
    let t = [];
    for (let i = 0, n = A.length; i !== n; ++i) {
      let a = A[i];
      a.id in e && t.push(a);
    }
    return t;
  }
};
function Cs(o22, A, e) {
  let t = o22.createShader(A);
  return o22.shaderSource(t, e), o22.compileShader(t), t;
}
var qR = 37297, JR = 0;
function ER(o22, A) {
  let e = o22.split(`
`), t = [], i = Math.max(A - 6, 0), n = Math.min(A + 6, e.length);
  for (let a = i; a < n; a++) {
    let f = a + 1;
    t.push(`${f === A ? ">" : " "} ${f}: ${e[a]}`);
  }
  return t.join(`
`);
}
var Ts = new VA();
function ZR(o22) {
  ee._getMatrix(Ts, ee.workingColorSpace, o22);
  let A = `mat3( ${Ts.elements.map((e) => e.toFixed(4))} )`;
  switch (ee.getTransfer(o22)) {
    case Un:
      return [A, "LinearTransferOETF"];
    case se:
      return [A, "sRGBTransferOETF"];
    default:
      return GA("WebGLProgram: Unsupported color space: ", o22), [A, "LinearTransferOETF"];
  }
}
function ms(o22, A, e) {
  let t = o22.getShaderParameter(A, o22.COMPILE_STATUS), n = (o22.getShaderInfoLog(A) || "").trim();
  if (t && n === "") return "";
  let a = /ERROR: 0:(\d+)/.exec(n);
  if (a) {
    let f = parseInt(a[1]);
    return e.toUpperCase() + `

` + n + `

` + ER(o22.getShaderSource(A), f);
  } else return n;
}
function YR(o22, A) {
  let e = ZR(A);
  return [`vec4 ${o22}( vec4 value ) {`, `	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`, "}"].join(`
`);
}
var _R = { [T8]: "Linear", [m8]: "Reinhard", [X8]: "Cineon", [O8]: "ACESFilmic", [G8]: "AgX", [k8]: "Neutral", [Q8]: "Custom" };
function $R(o22, A) {
  let e = _R[A];
  return e === void 0 ? (GA("WebGLProgram: Unsupported toneMapping:", A), "vec3 " + o22 + "( vec3 color ) { return LinearToneMapping( color ); }") : "vec3 " + o22 + "( vec3 color ) { return " + e + "ToneMapping( color ); }";
}
var pr = new j();
function A1() {
  ee.getLuminanceCoefficients(pr);
  let o22 = pr.x.toFixed(4), A = pr.y.toFixed(4), e = pr.z.toFixed(4);
  return ["float luminance( const in vec3 rgb ) {", `	const vec3 weights = vec3( ${o22}, ${A}, ${e} );`, "	return dot( weights, rgb );", "}"].join(`
`);
}
function e1(o22) {
  return [o22.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "", o22.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""].filter(Aa).join(`
`);
}
function t1(o22) {
  let A = [];
  for (let e in o22) {
    let t = o22[e];
    t !== false && A.push("#define " + e + " " + t);
  }
  return A.join(`
`);
}
function o1(o22, A) {
  let e = {}, t = o22.getProgramParameter(A, o22.ACTIVE_ATTRIBUTES);
  for (let i = 0; i < t; i++) {
    let n = o22.getActiveAttrib(A, i), a = n.name, f = 1;
    n.type === o22.FLOAT_MAT2 && (f = 2), n.type === o22.FLOAT_MAT3 && (f = 3), n.type === o22.FLOAT_MAT4 && (f = 4), e[a] = { type: n.type, location: o22.getAttribLocation(A, a), locationSize: f };
  }
  return e;
}
function Aa(o22) {
  return o22 !== "";
}
function Xs(o22, A) {
  let e = A.numSpotLightShadows + A.numSpotLightMaps - A.numSpotLightShadowsWithMaps;
  return o22.replace(/NUM_SUN_LIGHTS/g, A.numSunLights).replace(/NUM_DIR_LIGHTS/g, A.numDirLights).replace(/NUM_SPOT_LIGHTS/g, A.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, A.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, e).replace(/NUM_RECT_AREA_LIGHTS/g, A.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, A.numPointLights).replace(/NUM_HEMI_LIGHTS/g, A.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g, A.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g, A.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, A.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, A.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, A.numPointLightShadows);
}
function Os(o22, A) {
  return o22.replace(/NUM_CLIPPING_PLANES/g, A.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, A.numClippingPlanes - A.numClipIntersection);
}
var i1 = /^[ \t]*#include +<([\w\d./]+)>/gm;
function pP(o22) {
  return o22.replace(i1, a1);
}
var n1 = /* @__PURE__ */ new Map();
function a1(o22, A) {
  let e = ZA[A];
  if (e === void 0) {
    let t = n1.get(A);
    if (t !== void 0) e = ZA[t], GA('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', A, t);
    else throw new Error("THREE.WebGLProgram: Can not resolve #include <" + A + ">");
  }
  return pP(e);
}
var f1 = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Qs(o22) {
  return o22.replace(f1, r1);
}
function r1(o22, A, e, t) {
  let i = "";
  for (let n = parseInt(A); n < parseInt(e); n++) i += t.replace(/\[\s*i\s*\]/g, "[ " + n + " ]").replace(/UNROLLED_LOOP_INDEX/g, n);
  return i;
}
function Gs(o22) {
  let A = `precision ${o22.precision} float;
	precision ${o22.precision} int;
	precision ${o22.precision} sampler2D;
	precision ${o22.precision} samplerCube;
	precision ${o22.precision} sampler3D;
	precision ${o22.precision} sampler2DArray;
	precision ${o22.precision} sampler2DShadow;
	precision ${o22.precision} samplerCubeShadow;
	precision ${o22.precision} sampler2DArrayShadow;
	precision ${o22.precision} isampler2D;
	precision ${o22.precision} isampler3D;
	precision ${o22.precision} isamplerCube;
	precision ${o22.precision} isampler2DArray;
	precision ${o22.precision} usampler2D;
	precision ${o22.precision} usampler3D;
	precision ${o22.precision} usamplerCube;
	precision ${o22.precision} usampler2DArray;
	`;
  return o22.precision === "highp" ? A += `
#define HIGH_PRECISION` : o22.precision === "mediump" ? A += `
#define MEDIUM_PRECISION` : o22.precision === "lowp" && (A += `
#define LOW_PRECISION`), A;
}
var P1 = { [Mn]: "SHADOWMAP_TYPE_PCF", [Ii]: "SHADOWMAP_TYPE_VSM" };
function K1(o22) {
  return P1[o22.shadowMapType] || "SHADOWMAP_TYPE_BASIC";
}
var s1 = { [Co]: "ENVMAP_TYPE_CUBE", [Eo]: "ENVMAP_TYPE_CUBE", [yn]: "ENVMAP_TYPE_CUBE_UV" };
function p1(o22) {
  return o22.envMap === false ? "ENVMAP_TYPE_CUBE" : s1[o22.envMapMode] || "ENVMAP_TYPE_CUBE";
}
var U1 = { [Eo]: "ENVMAP_MODE_REFRACTION" };
function F1(o22) {
  return o22.envMap === false ? "ENVMAP_MODE_REFLECTION" : U1[o22.envMapMode] || "ENVMAP_MODE_REFLECTION";
}
var R1 = { [C8]: "ENVMAP_BLENDING_MULTIPLY", [YK]: "ENVMAP_BLENDING_MIX", [_K]: "ENVMAP_BLENDING_ADD" };
function w1(o22) {
  return o22.envMap === false ? "ENVMAP_BLENDING_NONE" : R1[o22.combine] || "ENVMAP_BLENDING_NONE";
}
function c1(o22) {
  let A = o22.envMapCubeUVHeight;
  if (A === null) return null;
  let e = Math.log2(A) - 2, t = 1 / A;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, e), 112)), texelHeight: t, maxMip: e };
}
function l1(o22, A, e, t) {
  let i = o22.getContext(), n = e.defines, a = e.vertexShader, f = e.fragmentShader, r = K1(e), P = p1(e), s = F1(e), p = w1(e), K = c1(e), U = e1(e), w = t1(n), l = i.createProgram(), R, F, u = e.glslVersion ? "#version " + e.glslVersion + `
` : "";
  e.isRawShaderMaterial ? (R = ["#define SHADER_TYPE " + e.shaderType, "#define SHADER_NAME " + e.shaderName, w].filter(Aa).join(`
`), R.length > 0 && (R += `
`), F = ["#define SHADER_TYPE " + e.shaderType, "#define SHADER_NAME " + e.shaderName, w].filter(Aa).join(`
`), F.length > 0 && (F += `
`)) : (R = [Gs(e), "#define SHADER_TYPE " + e.shaderType, "#define SHADER_NAME " + e.shaderName, w, e.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "", e.batching ? "#define USE_BATCHING" : "", e.batchingColor ? "#define USE_BATCHING_COLOR" : "", e.instancing ? "#define USE_INSTANCING" : "", e.instancingColor ? "#define USE_INSTANCING_COLOR" : "", e.instancingMorph ? "#define USE_INSTANCING_MORPH" : "", e.useFog && e.fog ? "#define USE_FOG" : "", e.useFog && e.fogExp2 ? "#define FOG_EXP2" : "", e.map ? "#define USE_MAP" : "", e.envMap ? "#define USE_ENVMAP" : "", e.envMap ? "#define " + s : "", e.lightMap ? "#define USE_LIGHTMAP" : "", e.aoMap ? "#define USE_AOMAP" : "", e.bumpMap ? "#define USE_BUMPMAP" : "", e.normalMap ? "#define USE_NORMALMAP" : "", e.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", e.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", e.displacementMap ? "#define USE_DISPLACEMENTMAP" : "", e.emissiveMap ? "#define USE_EMISSIVEMAP" : "", e.anisotropy ? "#define USE_ANISOTROPY" : "", e.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", e.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", e.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", e.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", e.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", e.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", e.specularMap ? "#define USE_SPECULARMAP" : "", e.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", e.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", e.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", e.metalnessMap ? "#define USE_METALNESSMAP" : "", e.alphaMap ? "#define USE_ALPHAMAP" : "", e.alphaHash ? "#define USE_ALPHAHASH" : "", e.transmission ? "#define USE_TRANSMISSION" : "", e.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", e.thicknessMap ? "#define USE_THICKNESSMAP" : "", e.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", e.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", e.mapUv ? "#define MAP_UV " + e.mapUv : "", e.alphaMapUv ? "#define ALPHAMAP_UV " + e.alphaMapUv : "", e.lightMapUv ? "#define LIGHTMAP_UV " + e.lightMapUv : "", e.aoMapUv ? "#define AOMAP_UV " + e.aoMapUv : "", e.emissiveMapUv ? "#define EMISSIVEMAP_UV " + e.emissiveMapUv : "", e.bumpMapUv ? "#define BUMPMAP_UV " + e.bumpMapUv : "", e.normalMapUv ? "#define NORMALMAP_UV " + e.normalMapUv : "", e.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + e.displacementMapUv : "", e.metalnessMapUv ? "#define METALNESSMAP_UV " + e.metalnessMapUv : "", e.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + e.roughnessMapUv : "", e.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + e.anisotropyMapUv : "", e.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + e.clearcoatMapUv : "", e.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + e.clearcoatNormalMapUv : "", e.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + e.clearcoatRoughnessMapUv : "", e.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + e.iridescenceMapUv : "", e.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + e.iridescenceThicknessMapUv : "", e.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + e.sheenColorMapUv : "", e.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + e.sheenRoughnessMapUv : "", e.specularMapUv ? "#define SPECULARMAP_UV " + e.specularMapUv : "", e.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + e.specularColorMapUv : "", e.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + e.specularIntensityMapUv : "", e.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + e.transmissionMapUv : "", e.thicknessMapUv ? "#define THICKNESSMAP_UV " + e.thicknessMapUv : "", e.vertexTangents && e.flatShading === false ? "#define USE_TANGENT" : "", e.vertexNormals ? "#define HAS_NORMAL" : "", e.vertexColors ? "#define USE_COLOR" : "", e.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", e.vertexUv1s ? "#define USE_UV1" : "", e.vertexUv2s ? "#define USE_UV2" : "", e.vertexUv3s ? "#define USE_UV3" : "", e.pointsUvs ? "#define USE_POINTS_UV" : "", e.flatShading ? "#define FLAT_SHADED" : "", e.skinning ? "#define USE_SKINNING" : "", e.morphTargets ? "#define USE_MORPHTARGETS" : "", e.morphNormals && e.flatShading === false ? "#define USE_MORPHNORMALS" : "", e.morphColors ? "#define USE_MORPHCOLORS" : "", e.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + e.morphTextureStride : "", e.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + e.morphTargetsCount : "", e.doubleSided ? "#define DOUBLE_SIDED" : "", e.flipSided ? "#define FLIP_SIDED" : "", e.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", e.shadowMapEnabled ? "#define " + r : "", e.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", e.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", e.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "", e.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "	attribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "	attribute vec3 instanceColor;", "#endif", "#ifdef USE_INSTANCING_MORPH", "	uniform sampler2D morphTexture;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_UV1", "	attribute vec2 uv1;", "#endif", "#ifdef USE_UV2", "	attribute vec2 uv2;", "#endif", "#ifdef USE_UV3", "	attribute vec2 uv3;", "#endif", "#ifdef USE_TANGENT", "	attribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "	attribute vec4 color;", "#elif defined( USE_COLOR )", "	attribute vec3 color;", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", `
`].filter(Aa).join(`
`), F = [Gs(e), "#define SHADER_TYPE " + e.shaderType, "#define SHADER_NAME " + e.shaderName, w, e.useFog && e.fog ? "#define USE_FOG" : "", e.useFog && e.fogExp2 ? "#define FOG_EXP2" : "", e.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "", e.map ? "#define USE_MAP" : "", e.matcap ? "#define USE_MATCAP" : "", e.envMap ? "#define USE_ENVMAP" : "", e.envMap ? "#define " + P : "", e.envMap ? "#define " + s : "", e.envMap ? "#define " + p : "", K ? "#define CUBEUV_TEXEL_WIDTH " + K.texelWidth : "", K ? "#define CUBEUV_TEXEL_HEIGHT " + K.texelHeight : "", K ? "#define CUBEUV_MAX_MIP " + K.maxMip + ".0" : "", e.lightMap ? "#define USE_LIGHTMAP" : "", e.aoMap ? "#define USE_AOMAP" : "", e.bumpMap ? "#define USE_BUMPMAP" : "", e.normalMap ? "#define USE_NORMALMAP" : "", e.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", e.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", e.packedNormalMap ? "#define USE_PACKED_NORMALMAP" : "", e.emissiveMap ? "#define USE_EMISSIVEMAP" : "", e.anisotropy ? "#define USE_ANISOTROPY" : "", e.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", e.clearcoat ? "#define USE_CLEARCOAT" : "", e.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", e.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", e.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", e.dispersion ? "#define USE_DISPERSION" : "", e.retroreflection ? "#define USE_RETROREFLECTION" : "", e.iridescence ? "#define USE_IRIDESCENCE" : "", e.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", e.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", e.specularMap ? "#define USE_SPECULARMAP" : "", e.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", e.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", e.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", e.metalnessMap ? "#define USE_METALNESSMAP" : "", e.alphaMap ? "#define USE_ALPHAMAP" : "", e.alphaTest ? "#define USE_ALPHATEST" : "", e.alphaHash ? "#define USE_ALPHAHASH" : "", e.sheen ? "#define USE_SHEEN" : "", e.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", e.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", e.transmission ? "#define USE_TRANSMISSION" : "", e.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", e.thicknessMap ? "#define USE_THICKNESSMAP" : "", e.vertexTangents && e.flatShading === false ? "#define USE_TANGENT" : "", e.vertexColors || e.instancingColor ? "#define USE_COLOR" : "", e.vertexAlphas || e.batchingColor ? "#define USE_COLOR_ALPHA" : "", e.vertexUv1s ? "#define USE_UV1" : "", e.vertexUv2s ? "#define USE_UV2" : "", e.vertexUv3s ? "#define USE_UV3" : "", e.pointsUvs ? "#define USE_POINTS_UV" : "", e.gradientMap ? "#define USE_GRADIENTMAP" : "", e.flatShading ? "#define FLAT_SHADED" : "", e.doubleSided ? "#define DOUBLE_SIDED" : "", e.flipSided ? "#define FLIP_SIDED" : "", e.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", e.shadowMapEnabled ? "#define " + r : "", e.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", e.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", e.numLightProbeGrids > 0 ? "#define USE_LIGHT_PROBES_GRID" : "", e.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "", e.decodeVideoTextureEmissive ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE" : "", e.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "", e.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", e.toneMapping !== jt ? "#define TONE_MAPPING" : "", e.toneMapping !== jt ? ZA.tonemapping_pars_fragment : "", e.toneMapping !== jt ? $R("toneMapping", e.toneMapping) : "", e.dithering ? "#define DITHERING" : "", e.opaque ? "#define OPAQUE" : "", ZA.colorspace_pars_fragment, YR("linearToOutputTexel", e.outputColorSpace), A1(), e.useDepthPacking ? "#define DEPTH_PACKING " + e.depthPacking : "", `
`].filter(Aa).join(`
`)), a = pP(a), a = Xs(a, e), a = Os(a, e), f = pP(f), f = Xs(f, e), f = Os(f, e), a = Qs(a), f = Qs(f), e.isRawShaderMaterial !== true && (u = `#version 300 es
`, R = [U, "#define attribute in", "#define varying out", "#define texture2D texture"].join(`
`) + `
` + R, F = ["#define varying in", e.glslVersion === E8 ? "" : "layout(location = 0) out highp vec4 pc_fragColor;", e.glslVersion === E8 ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join(`
`) + `
` + F);
  let D = u + R + a, v = u + F + f, x = Cs(i, i.VERTEX_SHADER, D), h = Cs(i, i.FRAGMENT_SHADER, v);
  i.attachShader(l, x), i.attachShader(l, h), e.index0AttributeName !== void 0 ? i.bindAttribLocation(l, 0, e.index0AttributeName) : e.hasPositionAttribute === true && i.bindAttribLocation(l, 0, "position"), i.linkProgram(l);
  function S(O) {
    if (o22.debug.checkShaderErrors) {
      let G = i.getProgramInfoLog(l) || "", M = i.getShaderInfoLog(x) || "", m = i.getShaderInfoLog(h) || "", k = G.trim(), W = M.trim(), V = m.trim(), aA = true, q = true;
      if (i.getProgramParameter(l, i.LINK_STATUS) === false) if (aA = false, typeof o22.debug.onShaderError == "function") o22.debug.onShaderError(i, l, x, h);
      else {
        let AA = ms(i, x, "vertex"), oA = ms(i, h, "fragment");
        bA("WebGLProgram: Shader Error " + i.getError() + " - VALIDATE_STATUS " + i.getProgramParameter(l, i.VALIDATE_STATUS) + `

Material Name: ` + O.name + `
Material Type: ` + O.type + `

Program Info Log: ` + k + `
` + AA + `
` + oA);
      }
      else k !== "" ? GA("WebGLProgram: Program Info Log:", k) : (W === "" || V === "") && (q = false);
      q && (O.diagnostics = { runnable: aA, programLog: k, vertexShader: { log: W, prefix: R }, fragmentShader: { log: V, prefix: F } });
    }
    i.deleteShader(x), i.deleteShader(h), g = new Vi(i, l), B = o1(i, l);
  }
  let g;
  this.getUniforms = function() {
    return g === void 0 && S(this), g;
  };
  let B;
  this.getAttributes = function() {
    return B === void 0 && S(this), B;
  };
  let N = e.rendererExtensionParallelShaderCompile === false;
  return this.isReady = function() {
    return N === false && (N = i.getProgramParameter(l, qR)), N;
  }, this.destroy = function() {
    t.releaseStatesOfProgram(this), i.deleteProgram(l), this.program = void 0;
  }, this.type = e.shaderType, this.name = e.shaderName, this.id = JR++, this.cacheKey = A, this.usedTimes = 1, this.program = l, this.vertexShader = x, this.fragmentShader = h, this;
}
var g1 = 0, UP = class {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(A, e, t) {
    let i = this._getShaderCacheForMaterial(A);
    return i.has(e) === false && (i.add(e), e.usedTimes++), i.has(t) === false && (i.add(t), t.usedTimes++), this;
  }
  remove(A) {
    let e = this.materialCache.get(A);
    for (let t of e) t.usedTimes--, t.usedTimes === 0 && this.shaderCache.delete(t.code);
    return this.materialCache.delete(A), this;
  }
  getVertexShaderStage(A) {
    return this._getShaderStage(A.vertexShader);
  }
  getFragmentShaderStage(A) {
    return this._getShaderStage(A.fragmentShader);
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(A) {
    let e = this.materialCache, t = e.get(A);
    return t === void 0 && (t = /* @__PURE__ */ new Set(), e.set(A, t)), t;
  }
  _getShaderStage(A) {
    let e = this.shaderCache, t = e.get(A);
    return t === void 0 && (t = new FP(A), e.set(A, t)), t;
  }
}, FP = class {
  constructor(A) {
    this.id = g1++, this.code = A, this.usedTimes = 0;
  }
};
function H1(o22) {
  return o22 === Xo || o22 === En || o22 === Zn;
}
function v1(o22, A, e, t, i, n) {
  let a = new ji(), f = new UP(), r = /* @__PURE__ */ new Set(), P = [], s = /* @__PURE__ */ new Map(), p = t.logarithmicDepthBuffer, K = t.precision, U = { MeshDepthMaterial: "depth", MeshDistanceMaterial: "distance", MeshNormalMaterial: "normal", MeshBasicMaterial: "basic", MeshLambertMaterial: "lambert", MeshPhongMaterial: "phong", MeshToonMaterial: "toon", MeshStandardMaterial: "physical", MeshPhysicalMaterial: "physical", MeshMatcapMaterial: "matcap", LineBasicMaterial: "basic", LineDashedMaterial: "dashed", PointsMaterial: "points", ShadowMaterial: "shadow", SpriteMaterial: "sprite" };
  function w(g) {
    return r.add(g), g === 0 ? "uv" : `uv${g}`;
  }
  function l(g, B, N, O, G, M) {
    let m = O.fog, k = G.geometry, W = g.isMeshStandardMaterial || g.isMeshLambertMaterial || g.isMeshPhongMaterial ? O.environment : null, V = g.isMeshStandardMaterial || g.isMeshLambertMaterial && !g.envMap || g.isMeshPhongMaterial && !g.envMap, aA = A.get(g.envMap || W, V), q = aA && aA.mapping === yn ? aA.image.height : null, AA = U[g.type];
    g.precision !== null && (K = t.getMaxPrecision(g.precision), K !== g.precision && GA("WebGLProgram.getParameters:", g.precision, "not supported, using", K, "instead."));
    let oA = k.morphAttributes.position || k.morphAttributes.normal || k.morphAttributes.color, TA = oA !== void 0 ? oA.length : 0, BA = 0;
    k.morphAttributes.position !== void 0 && (BA = 1), k.morphAttributes.normal !== void 0 && (BA = 2), k.morphAttributes.color !== void 0 && (BA = 3);
    let fe, _A, oe, Z;
    if (AA) {
      let ge = _e[AA];
      fe = ge.vertexShader, _A = ge.fragmentShader;
    } else {
      fe = g.vertexShader, _A = g.fragmentShader;
      let ge = f.getVertexShaderStage(g), Pe = f.getFragmentShaderStage(g);
      f.update(g, ge, Pe), oe = ge.id, Z = Pe.id;
    }
    let eA = o22.getRenderTarget(), HA = o22.state.buffers.depth.getReversed(), zA = G.isInstancedMesh === true, xA = G.isBatchedMesh === true, MA = !!g.map, Ue = !!g.matcap, tA = !!aA, fA = !!g.aoMap, rA = !!g.lightMap, PA = !!g.bumpMap && g.wireframe === false, pA = !!g.normalMap, kA = !!g.displacementMap, QA = !!g.emissiveMap, yA = !!g.metalnessMap, WA = !!g.roughnessMap, C = g.anisotropy > 0, re = g.clearcoat > 0, $A = g.dispersion > 0, d = g.retroreflectivity > 0, c = g.iridescence > 0, Q = g.sheen > 0, z = g.transmission > 0, J = C && !!g.anisotropyMap, KA = re && !!g.clearcoatMap, sA = re && !!g.clearcoatNormalMap, E = re && !!g.clearcoatRoughnessMap, $ = c && !!g.iridescenceMap, RA = c && !!g.iridescenceThicknessMap, mA = Q && !!g.sheenColorMap, gA = Q && !!g.sheenRoughnessMap, wA = !!g.specularMap, XA = !!g.specularColorMap, IA = !!g.specularIntensityMap, qA = z && !!g.transmissionMap, X = z && !!g.thicknessMap, cA = !!g.gradientMap, _ = !!g.alphaMap, lA = g.alphaTest > 0, dA = !!g.alphaHash, iA = !!g.extensions, OA = jt;
    g.toneMapped && (eA === null || eA.isXRRenderTarget === true) && (OA = o22.toneMapping);
    let NA = { shaderID: AA, shaderType: g.type, shaderName: g.name, vertexShader: fe, fragmentShader: _A, defines: g.defines, customVertexShaderID: oe, customFragmentShaderID: Z, isRawShaderMaterial: g.isRawShaderMaterial === true, glslVersion: g.glslVersion, precision: K, batching: xA, batchingColor: xA && G._colorsTexture !== null, instancing: zA, instancingColor: zA && G.instanceColor !== null, instancingMorph: zA && G.morphTexture !== null, outputColorSpace: eA === null ? o22.outputColorSpace : eA.isXRRenderTarget === true ? eA.texture.colorSpace : ee.workingColorSpace, alphaToCoverage: !!g.alphaToCoverage, map: MA, matcap: Ue, envMap: tA, envMapMode: tA && aA.mapping, envMapCubeUVHeight: q, aoMap: fA, lightMap: rA, bumpMap: PA, normalMap: pA, displacementMap: kA, emissiveMap: QA, normalMapObjectSpace: pA && g.normalMapType === es, normalMapTangentSpace: pA && g.normalMapType === rr, packedNormalMap: pA && g.normalMapType === rr && H1(g.normalMap.format), metalnessMap: yA, roughnessMap: WA, anisotropy: C, anisotropyMap: J, clearcoat: re, clearcoatMap: KA, clearcoatNormalMap: sA, clearcoatRoughnessMap: E, dispersion: $A, retroreflection: d, iridescence: c, iridescenceMap: $, iridescenceThicknessMap: RA, sheen: Q, sheenColorMap: mA, sheenRoughnessMap: gA, specularMap: wA, specularColorMap: XA, specularIntensityMap: IA, transmission: z, transmissionMap: qA, thicknessMap: X, gradientMap: cA, opaque: g.transparent === false && g.blending === bi && g.alphaToCoverage === false, alphaMap: _, alphaTest: lA, alphaHash: dA, combine: g.combine, mapUv: MA && w(g.map.channel), aoMapUv: fA && w(g.aoMap.channel), lightMapUv: rA && w(g.lightMap.channel), bumpMapUv: PA && w(g.bumpMap.channel), normalMapUv: pA && w(g.normalMap.channel), displacementMapUv: kA && w(g.displacementMap.channel), emissiveMapUv: QA && w(g.emissiveMap.channel), metalnessMapUv: yA && w(g.metalnessMap.channel), roughnessMapUv: WA && w(g.roughnessMap.channel), anisotropyMapUv: J && w(g.anisotropyMap.channel), clearcoatMapUv: KA && w(g.clearcoatMap.channel), clearcoatNormalMapUv: sA && w(g.clearcoatNormalMap.channel), clearcoatRoughnessMapUv: E && w(g.clearcoatRoughnessMap.channel), iridescenceMapUv: $ && w(g.iridescenceMap.channel), iridescenceThicknessMapUv: RA && w(g.iridescenceThicknessMap.channel), sheenColorMapUv: mA && w(g.sheenColorMap.channel), sheenRoughnessMapUv: gA && w(g.sheenRoughnessMap.channel), specularMapUv: wA && w(g.specularMap.channel), specularColorMapUv: XA && w(g.specularColorMap.channel), specularIntensityMapUv: IA && w(g.specularIntensityMap.channel), transmissionMapUv: qA && w(g.transmissionMap.channel), thicknessMapUv: X && w(g.thicknessMap.channel), alphaMapUv: _ && w(g.alphaMap.channel), vertexTangents: !!k.attributes.tangent && (pA || C), vertexNormals: !!k.attributes.normal, vertexColors: g.vertexColors, vertexAlphas: g.vertexColors === true && !!k.attributes.color && k.attributes.color.itemSize === 4, pointsUvs: G.isPoints === true && !!k.attributes.uv && (MA || _), fog: !!m, useFog: g.fog === true, fogExp2: !!m && m.isFogExp2, flatShading: g.wireframe === false && (g.flatShading === true || k.attributes.normal === void 0 && pA === false && (g.isMeshLambertMaterial || g.isMeshPhongMaterial || g.isMeshStandardMaterial || g.isMeshPhysicalMaterial)), sizeAttenuation: g.sizeAttenuation === true, logarithmicDepthBuffer: p, reversedDepthBuffer: HA, skinning: G.isSkinnedMesh === true, hasPositionAttribute: k.attributes.position !== void 0, morphTargets: k.morphAttributes.position !== void 0, morphNormals: k.morphAttributes.normal !== void 0, morphColors: k.morphAttributes.color !== void 0, morphTargetsCount: TA, morphTextureStride: BA, numSunLights: B.sun.length, numDirLights: B.directional.length, numPointLights: B.point.length, numSpotLights: B.spot.length, numSpotLightMaps: B.spotLightMap.length, numRectAreaLights: B.rectArea.length, numHemiLights: B.hemi.length, numSunLightShadows: B.sunShadowMap.length, numDirLightShadows: B.directionalShadowMap.length, numPointLightShadows: B.pointShadowMap.length, numSpotLightShadows: B.spotShadowMap.length, numSpotLightShadowsWithMaps: B.numSpotLightShadowsWithMaps, numLightProbes: B.numLightProbes, numLightProbeGrids: M.length, numClippingPlanes: n.numPlanes, numClipIntersection: n.numIntersection, dithering: g.dithering, shadowMapEnabled: o22.shadowMap.enabled && N.length > 0, shadowMapType: o22.shadowMap.type, toneMapping: OA, decodeVideoTexture: MA && g.map.isVideoTexture === true && ee.getTransfer(g.map.colorSpace) === se, decodeVideoTextureEmissive: QA && g.emissiveMap.isVideoTexture === true && ee.getTransfer(g.emissiveMap.colorSpace) === se, premultipliedAlpha: g.premultipliedAlpha, doubleSided: g.side === Ye, flipSided: g.side === Ze, useDepthPacking: g.depthPacking >= 0, depthPacking: g.depthPacking || 0, index0AttributeName: g.index0AttributeName, extensionClipCullDistance: iA && g.extensions.clipCullDistance === true && e.has("WEBGL_clip_cull_distance"), extensionMultiDraw: (iA && g.extensions.multiDraw === true || xA) && e.has("WEBGL_multi_draw"), rendererExtensionParallelShaderCompile: e.has("KHR_parallel_shader_compile"), customProgramCacheKey: g.customProgramCacheKey() };
    return NA.vertexUv1s = r.has(1), NA.vertexUv2s = r.has(2), NA.vertexUv3s = r.has(3), r.clear(), NA;
  }
  function R(g) {
    let B = [];
    if (g.shaderID ? B.push(g.shaderID) : (B.push(g.customVertexShaderID), B.push(g.customFragmentShaderID)), g.defines !== void 0) for (let N in g.defines) B.push(N), B.push(g.defines[N]);
    return g.isRawShaderMaterial === false && (F(B, g), u(B, g), B.push(o22.outputColorSpace)), B.push(g.customProgramCacheKey), B.join();
  }
  function F(g, B) {
    g.push(B.precision), g.push(B.outputColorSpace), g.push(B.envMapMode), g.push(B.envMapCubeUVHeight), g.push(B.mapUv), g.push(B.alphaMapUv), g.push(B.lightMapUv), g.push(B.aoMapUv), g.push(B.bumpMapUv), g.push(B.normalMapUv), g.push(B.displacementMapUv), g.push(B.emissiveMapUv), g.push(B.metalnessMapUv), g.push(B.roughnessMapUv), g.push(B.anisotropyMapUv), g.push(B.clearcoatMapUv), g.push(B.clearcoatNormalMapUv), g.push(B.clearcoatRoughnessMapUv), g.push(B.iridescenceMapUv), g.push(B.iridescenceThicknessMapUv), g.push(B.sheenColorMapUv), g.push(B.sheenRoughnessMapUv), g.push(B.specularMapUv), g.push(B.specularColorMapUv), g.push(B.specularIntensityMapUv), g.push(B.transmissionMapUv), g.push(B.thicknessMapUv), g.push(B.combine), g.push(B.fogExp2), g.push(B.sizeAttenuation), g.push(B.morphTargetsCount), g.push(B.morphAttributeCount), g.push(B.numSunLights), g.push(B.numDirLights), g.push(B.numPointLights), g.push(B.numSpotLights), g.push(B.numSpotLightMaps), g.push(B.numHemiLights), g.push(B.numRectAreaLights), g.push(B.numSunLightShadows), g.push(B.numDirLightShadows), g.push(B.numPointLightShadows), g.push(B.numSpotLightShadows), g.push(B.numSpotLightShadowsWithMaps), g.push(B.numLightProbes), g.push(B.shadowMapType), g.push(B.toneMapping), g.push(B.numClippingPlanes), g.push(B.numClipIntersection), g.push(B.depthPacking);
  }
  function u(g, B) {
    a.disableAll(), B.instancing && a.enable(0), B.instancingColor && a.enable(1), B.instancingMorph && a.enable(2), B.matcap && a.enable(3), B.envMap && a.enable(4), B.normalMapObjectSpace && a.enable(5), B.normalMapTangentSpace && a.enable(6), B.clearcoat && a.enable(7), B.iridescence && a.enable(8), B.alphaTest && a.enable(9), B.vertexColors && a.enable(10), B.vertexAlphas && a.enable(11), B.vertexUv1s && a.enable(12), B.vertexUv2s && a.enable(13), B.vertexUv3s && a.enable(14), B.vertexTangents && a.enable(15), B.anisotropy && a.enable(16), B.alphaHash && a.enable(17), B.batching && a.enable(18), B.dispersion && a.enable(19), B.retroreflection && a.enable(24), B.batchingColor && a.enable(20), B.gradientMap && a.enable(21), B.packedNormalMap && a.enable(22), B.vertexNormals && a.enable(23), g.push(a.mask), a.disableAll(), B.fog && a.enable(0), B.useFog && a.enable(1), B.flatShading && a.enable(2), B.logarithmicDepthBuffer && a.enable(3), B.reversedDepthBuffer && a.enable(4), B.skinning && a.enable(5), B.morphTargets && a.enable(6), B.morphNormals && a.enable(7), B.morphColors && a.enable(8), B.premultipliedAlpha && a.enable(9), B.shadowMapEnabled && a.enable(10), B.doubleSided && a.enable(11), B.flipSided && a.enable(12), B.useDepthPacking && a.enable(13), B.dithering && a.enable(14), B.transmission && a.enable(15), B.sheen && a.enable(16), B.opaque && a.enable(17), B.pointsUvs && a.enable(18), B.decodeVideoTexture && a.enable(19), B.decodeVideoTextureEmissive && a.enable(20), B.alphaToCoverage && a.enable(21), B.numLightProbeGrids > 0 && a.enable(22), B.hasPositionAttribute && a.enable(23), g.push(a.mask);
  }
  function D(g) {
    let B = U[g.type], N;
    if (B) {
      let O = _e[B];
      N = Yn.clone(O.uniforms);
    } else N = g.uniforms;
    return N;
  }
  function v(g, B) {
    let N = s.get(B);
    return N !== void 0 ? ++N.usedTimes : (N = new l1(o22, B, g, i), P.push(N), s.set(B, N)), N;
  }
  function x(g) {
    if (--g.usedTimes === 0) {
      let B = P.indexOf(g);
      P[B] = P[P.length - 1], P.pop(), s.delete(g.cacheKey), g.destroy();
    }
  }
  function h(g) {
    f.remove(g);
  }
  function S() {
    f.dispose();
  }
  return { getParameters: l, getProgramCacheKey: R, getUniforms: D, acquireProgram: v, releaseProgram: x, releaseShaderCache: h, programs: P, dispose: S };
}
function u1() {
  let o22 = /* @__PURE__ */ new WeakMap();
  function A(a) {
    return o22.has(a);
  }
  function e(a) {
    let f = o22.get(a);
    return f === void 0 && (f = {}, o22.set(a, f)), f;
  }
  function t(a) {
    o22.delete(a);
  }
  function i(a, f, r) {
    o22.get(a)[f] = r;
  }
  function n() {
    o22 = /* @__PURE__ */ new WeakMap();
  }
  return { has: A, get: e, remove: t, update: i, dispose: n };
}
function d1(o22, A) {
  return o22.groupOrder !== A.groupOrder ? o22.groupOrder - A.groupOrder : o22.renderOrder !== A.renderOrder ? o22.renderOrder - A.renderOrder : o22.material.id !== A.material.id ? o22.material.id - A.material.id : o22.materialVariant !== A.materialVariant ? o22.materialVariant - A.materialVariant : o22.z !== A.z ? o22.z - A.z : o22.id - A.id;
}
function ks(o22, A) {
  return o22.groupOrder !== A.groupOrder ? o22.groupOrder - A.groupOrder : o22.renderOrder !== A.renderOrder ? o22.renderOrder - A.renderOrder : o22.z !== A.z ? A.z - o22.z : o22.id - A.id;
}
function Is() {
  let o22 = [], A = 0, e = [], t = [], i = [];
  function n() {
    A = 0, e.length = 0, t.length = 0, i.length = 0;
  }
  function a(K) {
    let U = 0;
    return K.isInstancedMesh && (U += 2), K.isSkinnedMesh && (U += 1), U;
  }
  function f(K, U, w, l, R, F) {
    let u = o22[A];
    return u === void 0 ? (u = { id: K.id, object: K, geometry: U, material: w, materialVariant: a(K), groupOrder: l, renderOrder: K.renderOrder, z: R, group: F }, o22[A] = u) : (u.id = K.id, u.object = K, u.geometry = U, u.material = w, u.materialVariant = a(K), u.groupOrder = l, u.renderOrder = K.renderOrder, u.z = R, u.group = F), A++, u;
  }
  function r(K, U, w, l, R, F, u) {
    u.reversedDepth === true && (R = -R);
    let D = f(K, U, w, l, R, F);
    w.transmission > 0 ? t.push(D) : w.transparent === true ? i.push(D) : e.push(D);
  }
  function P(K, U, w, l, R, F) {
    let u = f(K, U, w, l, R, F);
    w.transmission > 0 ? t.unshift(u) : w.transparent === true ? i.unshift(u) : e.unshift(u);
  }
  function s(K, U) {
    e.length > 1 && e.sort(K || d1), t.length > 1 && t.sort(U || ks), i.length > 1 && i.sort(U || ks);
  }
  function p() {
    for (let K = A, U = o22.length; K < U; K++) {
      let w = o22[K];
      if (w.id === null) break;
      w.id = null, w.object = null, w.geometry = null, w.material = null, w.group = null;
    }
  }
  return { opaque: e, transmissive: t, transparent: i, init: n, push: r, unshift: P, finish: p, sort: s };
}
function x1() {
  let o22 = /* @__PURE__ */ new WeakMap();
  function A(t, i) {
    let n = o22.get(t), a;
    return n === void 0 ? (a = new Is(), o22.set(t, [a])) : i >= n.length ? (a = new Is(), n.push(a)) : a = n[i], a;
  }
  function e() {
    o22 = /* @__PURE__ */ new WeakMap();
  }
  return { get: A, dispose: e };
}
function h1() {
  let o22 = {};
  return { get: function(A) {
    if (o22[A.id] !== void 0) return o22[A.id];
    let e;
    switch (A.type) {
      case "SunLight":
      case "DirectionalLight":
        e = { direction: new j(), color: new JA() };
        break;
      case "SpotLight":
        e = { position: new j(), direction: new j(), color: new JA(), distance: 0, coneCos: 0, penumbraCos: 0, decay: 0 };
        break;
      case "PointLight":
        e = { position: new j(), color: new JA(), distance: 0, decay: 0 };
        break;
      case "HemisphereLight":
        e = { direction: new j(), skyColor: new JA(), groundColor: new JA() };
        break;
      case "RectAreaLight":
        e = { color: new JA(), position: new j(), halfWidth: new j(), halfHeight: new j() };
        break;
    }
    return o22[A.id] = e, e;
  } };
}
function D1() {
  let o22 = {};
  return { get: function(A) {
    if (o22[A.id] !== void 0) return o22[A.id];
    let e;
    switch (A.type) {
      case "SunLight":
      case "DirectionalLight":
        e = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new nA() };
        break;
      case "SpotLight":
        e = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new nA() };
        break;
      case "PointLight":
        e = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new nA(), shadowCameraNear: 1, shadowCameraFar: 1e3 };
        break;
    }
    return o22[A.id] = e, e;
  } };
}
var B1 = 0;
function j1(o22, A) {
  return (A.castShadow ? 2 : 0) - (o22.castShadow ? 2 : 0) + (A.map ? 1 : 0) - (o22.map ? 1 : 0);
}
function S1(o22) {
  let A = new h1(), e = D1(), t = { version: 0, hash: { sunLength: -1, directionalLength: -1, pointLength: -1, spotLength: -1, rectAreaLength: -1, hemiLength: -1, numSunShadows: -1, numDirectionalShadows: -1, numPointShadows: -1, numSpotShadows: -1, numSpotMaps: -1, numLightProbes: -1 }, ambient: [0, 0, 0], probe: [], sun: [], sunShadow: [], sunShadowMap: [], sunShadowMatrix: [], sunShadowCascade: [], directional: [], directionalShadow: [], directionalShadowMap: [], directionalShadowMatrix: [], spot: [], spotLightMap: [], spotShadow: [], spotShadowMap: [], spotLightMatrix: [], rectArea: [], rectAreaLTC1: null, rectAreaLTC2: null, point: [], pointShadow: [], pointShadowMap: [], pointShadowMatrix: [], hemi: [], numSpotLightShadowsWithMaps: 0, numLightProbes: 0 };
  for (let P = 0; P < 9; P++) t.probe.push(new j());
  let i = new j(), n = new Re(), a = new Re();
  function f(P) {
    let s = 0, p = 0, K = 0;
    for (let G = 0; G < 9; G++) t.probe[G].set(0, 0, 0);
    let U = 0, w = 0, l = 0, R = 0, F = 0, u = 0, D = 0, v = 0, x = 0, h = 0, S = 0, g = 0, B = 0, N = 0;
    P.sort(j1);
    for (let G = 0, M = P.length; G < M; G++) {
      let m = P[G], k = m.color, W = m.intensity, V = m.distance, aA = null;
      if (m.shadow && m.shadow.map && (m.shadow.map.texture.format === Xo ? aA = m.shadow.map.texture : aA = m.shadow.map.depthTexture || m.shadow.map.texture), m.isAmbientLight) s += k.r * W, p += k.g * W, K += k.b * W;
      else if (m.isLightProbe) {
        for (let q = 0; q < 9; q++) t.probe[q].addScaledVector(m.sh.coefficients[q], W);
        N++;
      } else if (m.isSunLight) {
        let q = A.get(m);
        if (q.color.copy(m.color).multiplyScalar(m.intensity), m.castShadow) {
          let AA = m.shadow, oA = e.get(m);
          oA.shadowIntensity = AA.intensity, oA.shadowBias = AA.bias, oA.shadowNormalBias = AA.normalBias, oA.shadowRadius = AA.radius, oA.shadowMapSize.copy(AA.mapSize).multiply(AA.getFrameExtents()), t.sunShadow[w] = oA, t.sunShadowMap[w] = aA;
          let TA = AA.getViewportCount();
          for (let BA = 0; BA < TA; BA++) t.sunShadowMatrix[l + BA] = AA.getMatrix(BA), t.sunShadowCascade[l + BA] = AA._cascadeData[BA];
          l += TA, w++;
        }
        t.sun[U] = q, U++;
      } else if (m.isDirectionalLight) {
        let q = A.get(m);
        if (q.color.copy(m.color).multiplyScalar(m.intensity), m.castShadow) {
          let AA = m.shadow, oA = e.get(m);
          oA.shadowIntensity = AA.intensity, oA.shadowBias = AA.bias, oA.shadowNormalBias = AA.normalBias, oA.shadowRadius = AA.radius, oA.shadowMapSize = AA.mapSize, t.directionalShadow[R] = oA, t.directionalShadowMap[R] = aA, t.directionalShadowMatrix[R] = m.shadow.matrix, x++;
        }
        t.directional[R] = q, R++;
      } else if (m.isSpotLight) {
        let q = A.get(m);
        q.position.setFromMatrixPosition(m.matrixWorld), q.color.copy(k).multiplyScalar(W), q.distance = V, q.coneCos = Math.cos(m.angle), q.penumbraCos = Math.cos(m.angle * (1 - m.penumbra)), q.decay = m.decay, t.spot[u] = q;
        let AA = m.shadow;
        if (m.map && (t.spotLightMap[g] = m.map, g++, AA.updateMatrices(m), m.castShadow && B++), t.spotLightMatrix[u] = AA.matrix, m.castShadow) {
          let oA = e.get(m);
          oA.shadowIntensity = AA.intensity, oA.shadowBias = AA.bias, oA.shadowNormalBias = AA.normalBias, oA.shadowRadius = AA.radius, oA.shadowMapSize = AA.mapSize, t.spotShadow[u] = oA, t.spotShadowMap[u] = aA, S++;
        }
        u++;
      } else if (m.isRectAreaLight) {
        let q = A.get(m);
        q.color.copy(k).multiplyScalar(W), q.halfWidth.set(m.width * 0.5, 0, 0), q.halfHeight.set(0, m.height * 0.5, 0), t.rectArea[D] = q, D++;
      } else if (m.isPointLight) {
        let q = A.get(m);
        if (q.color.copy(m.color).multiplyScalar(m.intensity), q.distance = m.distance, q.decay = m.decay, m.castShadow) {
          let AA = m.shadow, oA = e.get(m);
          oA.shadowIntensity = AA.intensity, oA.shadowBias = AA.bias, oA.shadowNormalBias = AA.normalBias, oA.shadowRadius = AA.radius, oA.shadowMapSize = AA.mapSize, oA.shadowCameraNear = AA.camera.near, oA.shadowCameraFar = AA.camera.far, t.pointShadow[F] = oA, t.pointShadowMap[F] = aA, t.pointShadowMatrix[F] = m.shadow.matrix, h++;
        }
        t.point[F] = q, F++;
      } else if (m.isHemisphereLight) {
        let q = A.get(m);
        q.skyColor.copy(m.color).multiplyScalar(W), q.groundColor.copy(m.groundColor).multiplyScalar(W), t.hemi[v] = q, v++;
      }
    }
    D > 0 && (o22.has("OES_texture_float_linear") === true ? (t.rectAreaLTC1 = UA.LTC_FLOAT_1, t.rectAreaLTC2 = UA.LTC_FLOAT_2) : (t.rectAreaLTC1 = UA.LTC_HALF_1, t.rectAreaLTC2 = UA.LTC_HALF_2)), t.ambient[0] = s, t.ambient[1] = p, t.ambient[2] = K;
    let O = t.hash;
    (O.sunLength !== U || O.directionalLength !== R || O.pointLength !== F || O.spotLength !== u || O.rectAreaLength !== D || O.hemiLength !== v || O.numSunShadows !== w || O.numDirectionalShadows !== x || O.numPointShadows !== h || O.numSpotShadows !== S || O.numSpotMaps !== g || O.numLightProbes !== N) && (t.sun.length = U, t.directional.length = R, t.spot.length = u, t.rectArea.length = D, t.point.length = F, t.hemi.length = v, t.sunShadow.length = w, t.sunShadowMap.length = w, t.sunShadowMatrix.length = l, t.sunShadowCascade.length = l, t.directionalShadow.length = x, t.directionalShadowMap.length = x, t.directionalShadowMatrix.length = x, t.pointShadow.length = h, t.pointShadowMap.length = h, t.pointShadowMatrix.length = h, t.spotShadow.length = S, t.spotShadowMap.length = S, t.spotLightMatrix.length = S + g - B, t.spotLightMap.length = g, t.numSpotLightShadowsWithMaps = B, t.numLightProbes = N, O.sunLength = U, O.directionalLength = R, O.pointLength = F, O.spotLength = u, O.rectAreaLength = D, O.hemiLength = v, O.numSunShadows = w, O.numDirectionalShadows = x, O.numPointShadows = h, O.numSpotShadows = S, O.numSpotMaps = g, O.numLightProbes = N, t.version = B1++);
  }
  function r(P, s) {
    let p = 0, K = 0, U = 0, w = 0, l = 0, R = 0, F = s.matrixWorldInverse;
    for (let u = 0, D = P.length; u < D; u++) {
      let v = P[u];
      if (v.isSunLight) {
        let x = t.sun[p];
        x.direction.setFromMatrixPosition(v.matrixWorld), x.direction.transformDirection(F), p++;
      } else if (v.isDirectionalLight) {
        let x = t.directional[K];
        x.direction.setFromMatrixPosition(v.matrixWorld), i.setFromMatrixPosition(v.target.matrixWorld), x.direction.sub(i), x.direction.transformDirection(F), K++;
      } else if (v.isSpotLight) {
        let x = t.spot[w];
        x.position.setFromMatrixPosition(v.matrixWorld), x.position.applyMatrix4(F), x.direction.setFromMatrixPosition(v.matrixWorld), i.setFromMatrixPosition(v.target.matrixWorld), x.direction.sub(i), x.direction.transformDirection(F), w++;
      } else if (v.isRectAreaLight) {
        let x = t.rectArea[l];
        x.position.setFromMatrixPosition(v.matrixWorld), x.position.applyMatrix4(F), a.identity(), n.copy(v.matrixWorld), n.premultiply(F), a.extractRotation(n), x.halfWidth.set(v.width * 0.5, 0, 0), x.halfHeight.set(0, v.height * 0.5, 0), x.halfWidth.applyMatrix4(a), x.halfHeight.applyMatrix4(a), l++;
      } else if (v.isPointLight) {
        let x = t.point[U];
        x.position.setFromMatrixPosition(v.matrixWorld), x.position.applyMatrix4(F), U++;
      } else if (v.isHemisphereLight) {
        let x = t.hemi[R];
        x.direction.setFromMatrixPosition(v.matrixWorld), x.direction.transformDirection(F), R++;
      }
    }
  }
  return { setup: f, setupView: r, state: t };
}
function bs(o22) {
  let A = new S1(o22), e = [], t = [], i = [];
  function n(K) {
    p.camera = K, e.length = 0, t.length = 0, i.length = 0;
  }
  function a(K) {
    e.push(K);
  }
  function f(K) {
    t.push(K);
  }
  function r(K) {
    i.push(K);
  }
  function P() {
    A.setup(e);
  }
  function s(K) {
    A.setupView(e, K);
  }
  let p = { lightsArray: e, shadowsArray: t, lightProbeGridArray: i, camera: null, lights: A, transmissionRenderTarget: {}, textureUnits: 0 };
  return { init: n, state: p, setupLights: P, setupLightsView: s, pushLight: a, pushShadow: f, pushLightProbeGrid: r };
}
function N1(o22) {
  let A = /* @__PURE__ */ new WeakMap();
  function e(i, n = 0) {
    let a = A.get(i), f;
    return a === void 0 ? (f = new bs(o22), A.set(i, [f])) : n >= a.length ? (f = new bs(o22), a.push(f)) : f = a[n], f;
  }
  function t() {
    A = /* @__PURE__ */ new WeakMap();
  }
  return { get: e, dispose: t };
}
var C1 = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, T1 = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`, m1 = [new j(1, 0, 0), new j(-1, 0, 0), new j(0, 1, 0), new j(0, -1, 0), new j(0, 0, 1), new j(0, 0, -1)], X1 = [new j(0, -1, 0), new j(0, -1, 0), new j(0, 0, 1), new j(0, 0, -1), new j(0, -1, 0), new j(0, -1, 0)], zs = new Re(), $n = new j(), fP = new j();
function O1(o22, A, e) {
  let t = new Ci(), i = new nA(), n = new nA(), a = new pe(), f = new Qi(), r = new rf(), P = {}, s = e.maxTextureSize, p = { [No]: Ze, [Ze]: No, [Ye]: Ye }, K = new Ee({ defines: { VSM_SAMPLES: 8 }, uniforms: { shadow_pass: { value: null }, resolution: { value: new nA() }, radius: { value: 4 } }, vertexShader: C1, fragmentShader: T1 }), U = K.clone();
  U.defines.HORIZONTAL_PASS = 1;
  let w = new he();
  w.setAttribute("position", new ft(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3));
  let l = new ne(w, K), R = this;
  this.enabled = false, this.autoUpdate = true, this.needsUpdate = false, this.type = Mn;
  let F = this.type;
  this.render = function(h, S, g) {
    if (R.enabled === false || R.autoUpdate === false && R.needsUpdate === false || h.length === 0) return;
    this.type === uf && (GA("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."), this.type = Mn);
    let B = o22.getRenderTarget(), N = o22.getActiveCubeFace(), O = o22.getActiveMipmapLevel(), G = o22.state;
    G.setBlending(Wt), G.buffers.depth.getReversed() === true ? G.buffers.color.setClear(0, 0, 0, 0) : G.buffers.color.setClear(1, 1, 1, 1), G.buffers.depth.setTest(true), G.setScissorTest(false);
    let M = F !== this.type;
    M && S.traverse(function(m) {
      m.material && (Array.isArray(m.material) ? m.material.forEach((k) => k.needsUpdate = true) : m.material.needsUpdate = true);
    });
    for (let m = 0, k = h.length; m < k; m++) {
      let W = h[m], V = W.shadow;
      if (V === void 0) {
        GA("WebGLShadowMap:", W, "has no shadow.");
        continue;
      }
      if (V.autoUpdate === false && V.needsUpdate === false) continue;
      i.copy(V.mapSize);
      let aA = V.getFrameExtents();
      i.multiply(aA), n.copy(V.mapSize), (i.x > s || i.y > s) && (i.x > s && (n.x = Math.floor(s / aA.x), i.x = n.x * aA.x, V.mapSize.x = n.x), i.y > s && (n.y = Math.floor(s / aA.y), i.y = n.y * aA.y, V.mapSize.y = n.y));
      let q = o22.state.buffers.depth.getReversed();
      if (V.camera._reversedDepth = q, V.map === null || M === true) {
        if (V.map !== null && (V.map.depthTexture !== null && (V.map.depthTexture.dispose(), V.map.depthTexture = null), V.map.dispose()), this.type === Ii) {
          if (W.isPointLight) {
            GA("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");
            continue;
          }
          V.map = new At(i.x, i.y, { format: Xo, type: Ct, minFilter: Oe, magFilter: Oe, generateMipmaps: false }), V.map.texture.name = W.name + ".shadowMap", V.map.depthTexture = new Ho(i.x, i.y, Nt), V.map.depthTexture.name = W.name + ".shadowMapDepth", V.map.depthTexture.format = zt, V.map.depthTexture.compareFunction = null, V.map.depthTexture.minFilter = me, V.map.depthTexture.magFilter = me;
        } else W.isPointLight ? (V.map = new Fr(i.x), V.map.depthTexture = new $a(i.x, St)) : (V.map = new At(i.x, i.y), V.map.depthTexture = new Ho(i.x, i.y, St)), V.map.depthTexture.name = W.name + ".shadowMap", V.map.depthTexture.format = zt, this.type === Mn ? (V.map.depthTexture.compareFunction = q ? Kr : Pr, V.map.depthTexture.minFilter = Oe, V.map.depthTexture.magFilter = Oe) : (V.map.depthTexture.compareFunction = null, V.map.depthTexture.minFilter = me, V.map.depthTexture.magFilter = me);
        V.camera.updateProjectionMatrix();
      }
      V.map.isWebGLCubeRenderTarget !== true && (V.map.width !== i.x || V.map.height !== i.y) && V.map.setSize(i.x, i.y);
      let AA = V.map.isWebGLCubeRenderTarget ? 6 : V.getViewportCount();
      W.isPointLight !== true && V.updateMatrices(W, g);
      for (let oA = 0; oA < AA; oA++) {
        let TA = V.getCamera(oA);
        if (W.isPointLight) {
          let BA = V.camera, fe = V.matrix, _A = W.distance || BA.far;
          _A !== BA.far && (BA.far = _A, BA.updateProjectionMatrix()), $n.setFromMatrixPosition(W.matrixWorld), BA.position.copy($n), fP.copy(BA.position), fP.add(m1[oA]), BA.up.copy(X1[oA]), BA.lookAt(fP), BA.updateMatrixWorld(), fe.makeTranslation(-$n.x, -$n.y, -$n.z), zs.multiplyMatrices(BA.projectionMatrix, BA.matrixWorldInverse), V._frustum.setFromProjectionMatrix(zs, BA.coordinateSystem, BA.reversedDepth);
        }
        if (V.map.isWebGLCubeRenderTarget) o22.setRenderTarget(V.map, oA), o22.clear();
        else {
          oA === 0 && (o22.setRenderTarget(V.map), o22.clear());
          let BA = V.getViewport(oA);
          a.set(n.x * BA.x, n.y * BA.y, n.x * BA.z, n.y * BA.w), G.viewport(a);
        }
        t = V.getFrustum(oA), v(S, g, TA, W, this.type);
      }
      V.isPointLightShadow !== true && this.type === Ii && u(V, g), V.needsUpdate = false;
    }
    F = this.type, R.needsUpdate = false, o22.setRenderTarget(B, N, O);
  };
  function u(h, S) {
    let g = A.update(l);
    K.defines.VSM_SAMPLES !== h.blurSamples && (K.defines.VSM_SAMPLES = h.blurSamples, U.defines.VSM_SAMPLES = h.blurSamples, K.needsUpdate = true, U.needsUpdate = true), h.mapPass === null ? h.mapPass = new At(i.x, i.y, { format: Xo, type: Ct }) : (h.mapPass.width !== h.map.width || h.mapPass.height !== h.map.height) && h.mapPass.setSize(h.map.width, h.map.height), K.uniforms.shadow_pass.value = h.map.depthTexture, K.uniforms.resolution.value.set(h.map.width, h.map.height), K.uniforms.radius.value = h.radius, o22.setRenderTarget(h.mapPass), o22.clear(), o22.renderBufferDirect(S, null, g, K, l, null), U.uniforms.shadow_pass.value = h.mapPass.texture, U.uniforms.resolution.value.set(h.map.width, h.map.height), U.uniforms.radius.value = h.radius, o22.setRenderTarget(h.map), o22.clear(), o22.renderBufferDirect(S, null, g, U, l, null);
  }
  function D(h, S, g, B) {
    let N = null, O = g.isPointLight === true ? h.customDistanceMaterial : h.customDepthMaterial;
    if (O !== void 0) N = O;
    else if (N = g.isPointLight === true ? r : f, o22.localClippingEnabled && S.clipShadows === true && Array.isArray(S.clippingPlanes) && S.clippingPlanes.length !== 0 || S.displacementMap && S.displacementScale !== 0 || S.alphaMap && S.alphaTest > 0 || S.map && S.alphaTest > 0 || S.alphaToCoverage === true) {
      let G = N.uuid, M = S.uuid, m = P[G];
      m === void 0 && (m = {}, P[G] = m);
      let k = m[M];
      k === void 0 && (k = N.clone(), m[M] = k, S.addEventListener("dispose", x)), N = k;
    }
    if (N.visible = S.visible, N.wireframe = S.wireframe, B === Ii ? N.side = S.shadowSide !== null ? S.shadowSide : S.side : N.side = S.shadowSide !== null ? S.shadowSide : p[S.side], N.alphaMap = S.alphaMap, N.alphaTest = S.alphaToCoverage === true ? 0.5 : S.alphaTest, N.map = S.map, N.clipShadows = S.clipShadows, N.clippingPlanes = S.clippingPlanes, N.clipIntersection = S.clipIntersection, N.displacementMap = S.displacementMap, N.displacementScale = S.displacementScale, N.displacementBias = S.displacementBias, N.wireframeLinewidth = S.wireframeLinewidth, N.linewidth = S.linewidth, g.isPointLight === true && N.isMeshDistanceMaterial === true) {
      let G = o22.properties.get(N);
      G.light = g;
    }
    return N;
  }
  function v(h, S, g, B, N) {
    if (h.visible === false) return;
    if (h.layers.test(S.layers) && (h.isMesh || h.isLine || h.isPoints) && (h.castShadow || h.receiveShadow && N === Ii) && (!h.frustumCulled || h.intersectsFrustum(t))) {
      h.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse, h.matrixWorld);
      let M = A.update(h), m = h.material;
      if (Array.isArray(m)) {
        let k = M.groups;
        for (let W = 0, V = k.length; W < V; W++) {
          let aA = k[W], q = m[aA.materialIndex];
          if (q && q.visible) {
            let AA = D(h, q, B, N);
            h.onBeforeShadow(o22, h, S, g, M, AA, aA), o22.renderBufferDirect(g, null, M, AA, h, aA), h.onAfterShadow(o22, h, S, g, M, AA, aA);
          }
        }
      } else if (m.visible) {
        let k = D(h, m, B, N);
        h.onBeforeShadow(o22, h, S, g, M, k, null), o22.renderBufferDirect(g, null, M, k, h, null), h.onAfterShadow(o22, h, S, g, M, k, null);
      }
    }
    let G = h.children;
    for (let M = 0, m = G.length; M < m; M++) v(G[M], S, g, B, N);
  }
  function x(h) {
    h.target.removeEventListener("dispose", x);
    for (let g in P) {
      let B = P[g], N = h.target.uuid;
      N in B && (B[N].dispose(), delete B[N]);
    }
  }
}
function Q1(o22, A) {
  function e() {
    let X = false, cA = new pe(), _ = null, lA = new pe(0, 0, 0, 0);
    return { setMask: function(dA) {
      _ !== dA && !X && (o22.colorMask(dA, dA, dA, dA), _ = dA);
    }, setLocked: function(dA) {
      X = dA;
    }, setClear: function(dA, iA, OA, NA, ge) {
      ge === true && (dA *= NA, iA *= NA, OA *= NA), cA.set(dA, iA, OA, NA), lA.equals(cA) === false && (o22.clearColor(dA, iA, OA, NA), lA.copy(cA));
    }, reset: function() {
      X = false, _ = null, lA.set(-1, 0, 0, 0);
    } };
  }
  function t() {
    let X = false, cA = false, _ = null, lA = null, dA = null;
    return { setReversed: function(iA) {
      if (cA !== iA) {
        let OA = A.get("EXT_clip_control");
        iA ? OA.clipControlEXT(OA.LOWER_LEFT_EXT, OA.ZERO_TO_ONE_EXT) : OA.clipControlEXT(OA.LOWER_LEFT_EXT, OA.NEGATIVE_ONE_TO_ONE_EXT), cA = iA;
        let NA = dA;
        dA = null, this.setClear(NA);
      }
    }, getReversed: function() {
      return cA;
    }, setTest: function(iA) {
      iA ? eA(o22.DEPTH_TEST) : HA(o22.DEPTH_TEST);
    }, setMask: function(iA) {
      _ !== iA && !X && (o22.depthMask(iA), _ = iA);
    }, setFunc: function(iA) {
      if (cA && (iA = ps[iA]), lA !== iA) {
        switch (iA) {
          case Ga:
            o22.depthFunc(o22.NEVER);
            break;
          case ka:
            o22.depthFunc(o22.ALWAYS);
            break;
          case Ia:
            o22.depthFunc(o22.LESS);
            break;
          case ui:
            o22.depthFunc(o22.LEQUAL);
            break;
          case ba:
            o22.depthFunc(o22.EQUAL);
            break;
          case za:
            o22.depthFunc(o22.GEQUAL);
            break;
          case Ma:
            o22.depthFunc(o22.GREATER);
            break;
          case ya:
            o22.depthFunc(o22.NOTEQUAL);
            break;
          default:
            o22.depthFunc(o22.LEQUAL);
        }
        lA = iA;
      }
    }, setLocked: function(iA) {
      X = iA;
    }, setClear: function(iA) {
      dA !== iA && (dA = iA, cA && (iA = 1 - iA), o22.clearDepth(iA));
    }, reset: function() {
      X = false, _ = null, lA = null, dA = null, cA = false;
    } };
  }
  function i() {
    let X = false, cA = null, _ = null, lA = null, dA = null, iA = null, OA = null, NA = null, ge = null;
    return { setTest: function(Pe) {
      X || (Pe ? eA(o22.STENCIL_TEST) : HA(o22.STENCIL_TEST));
    }, setMask: function(Pe) {
      cA !== Pe && !X && (o22.stencilMask(Pe), cA = Pe);
    }, setFunc: function(Pe, Ht, Ot) {
      (_ !== Pe || lA !== Ht || dA !== Ot) && (o22.stencilFunc(Pe, Ht, Ot), _ = Pe, lA = Ht, dA = Ot);
    }, setOp: function(Pe, Ht, Ot) {
      (iA !== Pe || OA !== Ht || NA !== Ot) && (o22.stencilOp(Pe, Ht, Ot), iA = Pe, OA = Ht, NA = Ot);
    }, setLocked: function(Pe) {
      X = Pe;
    }, setClear: function(Pe) {
      ge !== Pe && (o22.clearStencil(Pe), ge = Pe);
    }, reset: function() {
      X = false, cA = null, _ = null, lA = null, dA = null, iA = null, OA = null, NA = null, ge = null;
    } };
  }
  let n = new e(), a = new t(), f = new i(), r = /* @__PURE__ */ new WeakMap(), P = /* @__PURE__ */ new WeakMap(), s = {}, p = {}, K = {}, U = /* @__PURE__ */ new WeakMap(), w = [], l = null, R = false, F = null, u = null, D = null, v = null, x = null, h = null, S = null, g = new JA(0, 0, 0), B = 0, N = false, O = null, G = null, M = null, m = null, k = null, W = o22.getParameter(o22.MAX_COMBINED_TEXTURE_IMAGE_UNITS), V = false, aA = 0, q = o22.getParameter(o22.VERSION);
  q.indexOf("WebGL") !== -1 ? (aA = parseFloat(/^WebGL (\d)/.exec(q)[1]), V = aA >= 1) : q.indexOf("OpenGL ES") !== -1 && (aA = parseFloat(/^OpenGL ES (\d)/.exec(q)[1]), V = aA >= 2);
  let AA = null, oA = {}, TA = o22.getParameter(o22.SCISSOR_BOX), BA = o22.getParameter(o22.VIEWPORT), fe = new pe().fromArray(TA), _A = new pe().fromArray(BA);
  function oe(X, cA, _, lA) {
    let dA = new Uint8Array(4), iA = o22.createTexture();
    o22.bindTexture(X, iA), o22.texParameteri(X, o22.TEXTURE_MIN_FILTER, o22.NEAREST), o22.texParameteri(X, o22.TEXTURE_MAG_FILTER, o22.NEAREST);
    for (let OA = 0; OA < _; OA++) X === o22.TEXTURE_3D || X === o22.TEXTURE_2D_ARRAY ? o22.texImage3D(cA, 0, o22.RGBA, 1, 1, lA, 0, o22.RGBA, o22.UNSIGNED_BYTE, dA) : o22.texImage2D(cA + OA, 0, o22.RGBA, 1, 1, 0, o22.RGBA, o22.UNSIGNED_BYTE, dA);
    return iA;
  }
  let Z = {};
  Z[o22.TEXTURE_2D] = oe(o22.TEXTURE_2D, o22.TEXTURE_2D, 1), Z[o22.TEXTURE_CUBE_MAP] = oe(o22.TEXTURE_CUBE_MAP, o22.TEXTURE_CUBE_MAP_POSITIVE_X, 6), Z[o22.TEXTURE_2D_ARRAY] = oe(o22.TEXTURE_2D_ARRAY, o22.TEXTURE_2D_ARRAY, 1, 1), Z[o22.TEXTURE_3D] = oe(o22.TEXTURE_3D, o22.TEXTURE_3D, 1, 1), n.setClear(0, 0, 0, 1), a.setClear(1), f.setClear(0), eA(o22.DEPTH_TEST), a.setFunc(ui), PA(false), pA(h8), eA(o22.CULL_FACE), fA(Wt);
  function eA(X) {
    s[X] !== true && (o22.enable(X), s[X] = true);
  }
  function HA(X) {
    s[X] !== false && (o22.disable(X), s[X] = false);
  }
  function zA(X, cA) {
    return K[X] !== cA ? (o22.bindFramebuffer(X, cA), K[X] = cA, X === o22.DRAW_FRAMEBUFFER && (K[o22.FRAMEBUFFER] = cA), X === o22.FRAMEBUFFER && (K[o22.DRAW_FRAMEBUFFER] = cA), true) : false;
  }
  function xA(X, cA) {
    let _ = w, lA = false;
    if (X) {
      _ = U.get(cA), _ === void 0 && (_ = [], U.set(cA, _));
      let dA = X.textures;
      if (_.length !== dA.length || _[0] !== o22.COLOR_ATTACHMENT0) {
        for (let iA = 0, OA = dA.length; iA < OA; iA++) _[iA] = o22.COLOR_ATTACHMENT0 + iA;
        _.length = dA.length, lA = true;
      }
    } else _[0] !== o22.BACK && (_[0] = o22.BACK, lA = true);
    lA && o22.drawBuffers(_);
  }
  function MA(X) {
    return l !== X ? (o22.useProgram(X), l = X, true) : false;
  }
  let Ue = { [Jo]: o22.FUNC_ADD, [XK]: o22.FUNC_SUBTRACT, [OK]: o22.FUNC_REVERSE_SUBTRACT };
  Ue[QK] = o22.MIN, Ue[GK] = o22.MAX;
  let tA = { [kK]: o22.ZERO, [IK]: o22.ONE, [bK]: o22.SRC_COLOR, [S8]: o22.SRC_ALPHA, [WK]: o22.SRC_ALPHA_SATURATE, [LK]: o22.DST_COLOR, [MK]: o22.DST_ALPHA, [zK]: o22.ONE_MINUS_SRC_COLOR, [N8]: o22.ONE_MINUS_SRC_ALPHA, [VK]: o22.ONE_MINUS_DST_COLOR, [yK]: o22.ONE_MINUS_DST_ALPHA, [qK]: o22.CONSTANT_COLOR, [JK]: o22.ONE_MINUS_CONSTANT_COLOR, [EK]: o22.CONSTANT_ALPHA, [ZK]: o22.ONE_MINUS_CONSTANT_ALPHA };
  function fA(X, cA, _, lA, dA, iA, OA, NA, ge, Pe) {
    if (X === Wt) {
      R === true && (HA(o22.BLEND), R = false);
      return;
    }
    if (R === false && (eA(o22.BLEND), R = true), X !== mK) {
      if (X !== F || Pe !== N) {
        if ((u !== Jo || x !== Jo) && (o22.blendEquation(o22.FUNC_ADD), u = Jo, x = Jo), Pe) switch (X) {
          case bi:
            o22.blendFuncSeparate(o22.ONE, o22.ONE_MINUS_SRC_ALPHA, o22.ONE, o22.ONE_MINUS_SRC_ALPHA);
            break;
          case D8:
            o22.blendFunc(o22.ONE, o22.ONE);
            break;
          case B8:
            o22.blendFuncSeparate(o22.ZERO, o22.ONE_MINUS_SRC_COLOR, o22.ZERO, o22.ONE);
            break;
          case j8:
            o22.blendFuncSeparate(o22.DST_COLOR, o22.ONE_MINUS_SRC_ALPHA, o22.ZERO, o22.ONE);
            break;
          default:
            bA("WebGLState: Invalid blending: ", X);
            break;
        }
        else switch (X) {
          case bi:
            o22.blendFuncSeparate(o22.SRC_ALPHA, o22.ONE_MINUS_SRC_ALPHA, o22.ONE, o22.ONE_MINUS_SRC_ALPHA);
            break;
          case D8:
            o22.blendFuncSeparate(o22.SRC_ALPHA, o22.ONE, o22.ONE, o22.ONE);
            break;
          case B8:
            bA("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");
            break;
          case j8:
            bA("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");
            break;
          default:
            bA("WebGLState: Invalid blending: ", X);
            break;
        }
        D = null, v = null, h = null, S = null, g.set(0, 0, 0), B = 0, F = X, N = Pe;
      }
      return;
    }
    dA = dA || cA, iA = iA || _, OA = OA || lA, (cA !== u || dA !== x) && (o22.blendEquationSeparate(Ue[cA], Ue[dA]), u = cA, x = dA), (_ !== D || lA !== v || iA !== h || OA !== S) && (o22.blendFuncSeparate(tA[_], tA[lA], tA[iA], tA[OA]), D = _, v = lA, h = iA, S = OA), (NA.equals(g) === false || ge !== B) && (o22.blendColor(NA.r, NA.g, NA.b, ge), g.copy(NA), B = ge), F = X, N = false;
  }
  function rA(X, cA) {
    X.side === Ye ? HA(o22.CULL_FACE) : eA(o22.CULL_FACE);
    let _ = X.side === Ze;
    cA && (_ = !_), PA(_), X.blending === bi && X.transparent === false ? fA(Wt) : fA(X.blending, X.blendEquation, X.blendSrc, X.blendDst, X.blendEquationAlpha, X.blendSrcAlpha, X.blendDstAlpha, X.blendColor, X.blendAlpha, X.premultipliedAlpha), a.setFunc(X.depthFunc), a.setTest(X.depthTest), a.setMask(X.depthWrite), n.setMask(X.colorWrite);
    let lA = X.stencilWrite;
    f.setTest(lA), lA && (f.setMask(X.stencilWriteMask), f.setFunc(X.stencilFunc, X.stencilRef, X.stencilFuncMask), f.setOp(X.stencilFail, X.stencilZFail, X.stencilZPass)), QA(X.polygonOffset, X.polygonOffsetFactor, X.polygonOffsetUnits), X.alphaToCoverage === true ? eA(o22.SAMPLE_ALPHA_TO_COVERAGE) : HA(o22.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function PA(X) {
    O !== X && (X ? o22.frontFace(o22.CW) : o22.frontFace(o22.CCW), O = X);
  }
  function pA(X) {
    X !== CK ? (eA(o22.CULL_FACE), X !== G && (X === h8 ? o22.cullFace(o22.BACK) : X === TK ? o22.cullFace(o22.FRONT) : o22.cullFace(o22.FRONT_AND_BACK))) : HA(o22.CULL_FACE), G = X;
  }
  function kA(X) {
    X !== M && (V && o22.lineWidth(X), M = X);
  }
  function QA(X, cA, _) {
    X ? (eA(o22.POLYGON_OFFSET_FILL), (m !== cA || k !== _) && (m = cA, k = _, a.getReversed() && (cA = -cA), o22.polygonOffset(cA, _))) : HA(o22.POLYGON_OFFSET_FILL);
  }
  function yA(X) {
    X ? eA(o22.SCISSOR_TEST) : HA(o22.SCISSOR_TEST);
  }
  function WA(X) {
    X === void 0 && (X = o22.TEXTURE0 + W - 1), AA !== X && (o22.activeTexture(X), AA = X);
  }
  function C(X, cA, _) {
    _ === void 0 && (AA === null ? _ = o22.TEXTURE0 + W - 1 : _ = AA);
    let lA = oA[_];
    lA === void 0 && (lA = { type: void 0, texture: void 0 }, oA[_] = lA), (lA.type !== X || lA.texture !== cA) && (AA !== _ && (o22.activeTexture(_), AA = _), o22.bindTexture(X, cA || Z[X]), lA.type = X, lA.texture = cA);
  }
  function re() {
    let X = oA[AA];
    X !== void 0 && X.type !== void 0 && (o22.bindTexture(X.type, null), X.type = void 0, X.texture = void 0);
  }
  function $A() {
    try {
      o22.compressedTexImage2D(...arguments);
    } catch (X) {
      bA("WebGLState:", X);
    }
  }
  function d() {
    try {
      o22.compressedTexImage3D(...arguments);
    } catch (X) {
      bA("WebGLState:", X);
    }
  }
  function c() {
    try {
      o22.texSubImage2D(...arguments);
    } catch (X) {
      bA("WebGLState:", X);
    }
  }
  function Q() {
    try {
      o22.texSubImage3D(...arguments);
    } catch (X) {
      bA("WebGLState:", X);
    }
  }
  function z() {
    try {
      o22.compressedTexSubImage2D(...arguments);
    } catch (X) {
      bA("WebGLState:", X);
    }
  }
  function J() {
    try {
      o22.compressedTexSubImage3D(...arguments);
    } catch (X) {
      bA("WebGLState:", X);
    }
  }
  function KA() {
    try {
      o22.texStorage2D(...arguments);
    } catch (X) {
      bA("WebGLState:", X);
    }
  }
  function sA() {
    try {
      o22.texStorage3D(...arguments);
    } catch (X) {
      bA("WebGLState:", X);
    }
  }
  function E() {
    try {
      o22.texImage2D(...arguments);
    } catch (X) {
      bA("WebGLState:", X);
    }
  }
  function $() {
    try {
      o22.texImage3D(...arguments);
    } catch (X) {
      bA("WebGLState:", X);
    }
  }
  function RA(X) {
    return p[X] !== void 0 ? p[X] : o22.getParameter(X);
  }
  function mA(X, cA) {
    p[X] !== cA && (o22.pixelStorei(X, cA), p[X] = cA);
  }
  function gA(X) {
    fe.equals(X) === false && (o22.scissor(X.x, X.y, X.z, X.w), fe.copy(X));
  }
  function wA(X) {
    _A.equals(X) === false && (o22.viewport(X.x, X.y, X.z, X.w), _A.copy(X));
  }
  function XA(X, cA) {
    let _ = P.get(cA);
    _ === void 0 && (_ = /* @__PURE__ */ new WeakMap(), P.set(cA, _));
    let lA = _.get(X);
    lA === void 0 && (lA = o22.getUniformBlockIndex(cA, X.name), _.set(X, lA));
  }
  function IA(X, cA) {
    let lA = P.get(cA).get(X);
    r.get(cA) !== lA && (o22.uniformBlockBinding(cA, lA, X.__bindingPointIndex), r.set(cA, lA));
  }
  function qA() {
    o22.disable(o22.BLEND), o22.disable(o22.CULL_FACE), o22.disable(o22.DEPTH_TEST), o22.disable(o22.POLYGON_OFFSET_FILL), o22.disable(o22.SCISSOR_TEST), o22.disable(o22.STENCIL_TEST), o22.disable(o22.SAMPLE_ALPHA_TO_COVERAGE), o22.blendEquation(o22.FUNC_ADD), o22.blendFunc(o22.ONE, o22.ZERO), o22.blendFuncSeparate(o22.ONE, o22.ZERO, o22.ONE, o22.ZERO), o22.blendColor(0, 0, 0, 0), o22.colorMask(true, true, true, true), o22.clearColor(0, 0, 0, 0), o22.depthMask(true), o22.depthFunc(o22.LESS), a.setReversed(false), o22.clearDepth(1), o22.stencilMask(4294967295), o22.stencilFunc(o22.ALWAYS, 0, 4294967295), o22.stencilOp(o22.KEEP, o22.KEEP, o22.KEEP), o22.clearStencil(0), o22.cullFace(o22.BACK), o22.frontFace(o22.CCW), o22.polygonOffset(0, 0), o22.activeTexture(o22.TEXTURE0), o22.bindFramebuffer(o22.FRAMEBUFFER, null), o22.bindFramebuffer(o22.DRAW_FRAMEBUFFER, null), o22.bindFramebuffer(o22.READ_FRAMEBUFFER, null), o22.useProgram(null), o22.lineWidth(1), o22.scissor(0, 0, o22.canvas.width, o22.canvas.height), o22.viewport(0, 0, o22.canvas.width, o22.canvas.height), o22.pixelStorei(o22.PACK_ALIGNMENT, 4), o22.pixelStorei(o22.UNPACK_ALIGNMENT, 4), o22.pixelStorei(o22.UNPACK_FLIP_Y_WEBGL, false), o22.pixelStorei(o22.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false), o22.pixelStorei(o22.UNPACK_COLORSPACE_CONVERSION_WEBGL, o22.BROWSER_DEFAULT_WEBGL), o22.pixelStorei(o22.PACK_ROW_LENGTH, 0), o22.pixelStorei(o22.PACK_SKIP_PIXELS, 0), o22.pixelStorei(o22.PACK_SKIP_ROWS, 0), o22.pixelStorei(o22.UNPACK_ROW_LENGTH, 0), o22.pixelStorei(o22.UNPACK_IMAGE_HEIGHT, 0), o22.pixelStorei(o22.UNPACK_SKIP_PIXELS, 0), o22.pixelStorei(o22.UNPACK_SKIP_ROWS, 0), o22.pixelStorei(o22.UNPACK_SKIP_IMAGES, 0), s = {}, p = {}, AA = null, oA = {}, K = {}, U = /* @__PURE__ */ new WeakMap(), w = [], l = null, R = false, F = null, u = null, D = null, v = null, x = null, h = null, S = null, g = new JA(0, 0, 0), B = 0, N = false, O = null, G = null, M = null, m = null, k = null, fe.set(0, 0, o22.canvas.width, o22.canvas.height), _A.set(0, 0, o22.canvas.width, o22.canvas.height), n.reset(), a.reset(), f.reset();
  }
  return { buffers: { color: n, depth: a, stencil: f }, enable: eA, disable: HA, bindFramebuffer: zA, drawBuffers: xA, useProgram: MA, setBlending: fA, setMaterial: rA, setFlipSided: PA, setCullFace: pA, setLineWidth: kA, setPolygonOffset: QA, setScissorTest: yA, activeTexture: WA, bindTexture: C, unbindTexture: re, compressedTexImage2D: $A, compressedTexImage3D: d, texImage2D: E, texImage3D: $, pixelStorei: mA, getParameter: RA, updateUBOMapping: XA, uniformBlockBinding: IA, texStorage2D: KA, texStorage3D: sA, texSubImage2D: c, texSubImage3D: Q, compressedTexSubImage2D: z, compressedTexSubImage3D: J, scissor: gA, viewport: wA, reset: qA };
}
function G1(o22, A, e, t, i, n, a) {
  let f = A.has("WEBGL_multisampled_render_to_texture") ? A.get("WEBGL_multisampled_render_to_texture") : null, r = typeof navigator > "u" ? false : /OculusBrowser/g.test(navigator.userAgent), P = new nA(), s = /* @__PURE__ */ new WeakMap(), p = /* @__PURE__ */ new Set(), K, U = /* @__PURE__ */ new WeakMap(), w = false;
  try {
    w = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function l(d, c) {
    return w ? new OffscreenCanvas(d, c) : Fn("canvas");
  }
  function R(d, c, Q) {
    let z = 1, J = $A(d);
    if ((J.width > Q || J.height > Q) && (z = Q / Math.max(J.width, J.height)), z < 1) if (typeof HTMLImageElement < "u" && d instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && d instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && d instanceof ImageBitmap || typeof VideoFrame < "u" && d instanceof VideoFrame) {
      let KA = Math.floor(z * J.width), sA = Math.floor(z * J.height);
      K === void 0 && (K = l(KA, sA));
      let E = c ? l(KA, sA) : K;
      return E.width = KA, E.height = sA, E.getContext("2d").drawImage(d, 0, 0, KA, sA), GA("WebGLRenderer: Texture has been resized from (" + J.width + "x" + J.height + ") to (" + KA + "x" + sA + ")."), E;
    } else return "data" in d && GA("WebGLRenderer: Image in DataTexture is too big (" + J.width + "x" + J.height + ")."), d;
    return d;
  }
  function F(d) {
    return d.generateMipmaps;
  }
  function u(d) {
    o22.generateMipmap(d);
  }
  function D(d) {
    return d.isWebGLCubeRenderTarget ? o22.TEXTURE_CUBE_MAP : d.isWebGL3DRenderTarget ? o22.TEXTURE_3D : d.isWebGLArrayRenderTarget || d.isCompressedArrayTexture ? o22.TEXTURE_2D_ARRAY : o22.TEXTURE_2D;
  }
  function v(d, c, Q, z, J, KA = false) {
    if (d !== null) {
      if (o22[d] !== void 0) return o22[d];
      GA("WebGLRenderer: Attempt to use non-existing WebGL internal format '" + d + "'");
    }
    let sA;
    z && (sA = A.get("EXT_texture_norm16"), sA || GA("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));
    let E = c;
    if (c === o22.RED && (Q === o22.FLOAT && (E = o22.R32F), Q === o22.HALF_FLOAT && (E = o22.R16F), Q === o22.UNSIGNED_BYTE && (E = o22.R8), Q === o22.UNSIGNED_SHORT && sA && (E = sA.R16_EXT), Q === o22.SHORT && sA && (E = sA.R16_SNORM_EXT)), c === o22.RED_INTEGER && (Q === o22.UNSIGNED_BYTE && (E = o22.R8UI), Q === o22.UNSIGNED_SHORT && (E = o22.R16UI), Q === o22.UNSIGNED_INT && (E = o22.R32UI), Q === o22.BYTE && (E = o22.R8I), Q === o22.SHORT && (E = o22.R16I), Q === o22.INT && (E = o22.R32I)), c === o22.RG && (Q === o22.FLOAT && (E = o22.RG32F), Q === o22.HALF_FLOAT && (E = o22.RG16F), Q === o22.UNSIGNED_BYTE && (E = o22.RG8), Q === o22.UNSIGNED_SHORT && sA && (E = sA.RG16_EXT), Q === o22.SHORT && sA && (E = sA.RG16_SNORM_EXT)), c === o22.RG_INTEGER && (Q === o22.UNSIGNED_BYTE && (E = o22.RG8UI), Q === o22.UNSIGNED_SHORT && (E = o22.RG16UI), Q === o22.UNSIGNED_INT && (E = o22.RG32UI), Q === o22.BYTE && (E = o22.RG8I), Q === o22.SHORT && (E = o22.RG16I), Q === o22.INT && (E = o22.RG32I)), c === o22.RGB_INTEGER && (Q === o22.UNSIGNED_BYTE && (E = o22.RGB8UI), Q === o22.UNSIGNED_SHORT && (E = o22.RGB16UI), Q === o22.UNSIGNED_INT && (E = o22.RGB32UI), Q === o22.BYTE && (E = o22.RGB8I), Q === o22.SHORT && (E = o22.RGB16I), Q === o22.INT && (E = o22.RGB32I)), c === o22.RGBA_INTEGER && (Q === o22.UNSIGNED_BYTE && (E = o22.RGBA8UI), Q === o22.UNSIGNED_SHORT && (E = o22.RGBA16UI), Q === o22.UNSIGNED_INT && (E = o22.RGBA32UI), Q === o22.BYTE && (E = o22.RGBA8I), Q === o22.SHORT && (E = o22.RGBA16I), Q === o22.INT && (E = o22.RGBA32I)), c === o22.RGB && (Q === o22.UNSIGNED_SHORT && sA && (E = sA.RGB16_EXT), Q === o22.SHORT && sA && (E = sA.RGB16_SNORM_EXT), Q === o22.UNSIGNED_INT_5_9_9_9_REV && (E = o22.RGB9_E5), Q === o22.UNSIGNED_INT_10F_11F_11F_REV && (E = o22.R11F_G11F_B10F)), c === o22.RGBA) {
      let $ = KA ? Un : ee.getTransfer(J);
      Q === o22.FLOAT && (E = o22.RGBA32F), Q === o22.HALF_FLOAT && (E = o22.RGBA16F), Q === o22.UNSIGNED_BYTE && (E = $ === se ? o22.SRGB8_ALPHA8 : o22.RGBA8), Q === o22.UNSIGNED_SHORT && sA && (E = sA.RGBA16_EXT), Q === o22.SHORT && sA && (E = sA.RGBA16_SNORM_EXT), Q === o22.UNSIGNED_SHORT_4_4_4_4 && (E = o22.RGBA4), Q === o22.UNSIGNED_SHORT_5_5_5_1 && (E = o22.RGB5_A1);
    }
    return (E === o22.R16F || E === o22.R32F || E === o22.RG16F || E === o22.RG32F || E === o22.RGBA16F || E === o22.RGBA32F) && A.get("EXT_color_buffer_float"), E;
  }
  function x(d, c) {
    let Q;
    return d ? c === null || c === St || c === Mi ? Q = o22.DEPTH24_STENCIL8 : c === Nt ? Q = o22.DEPTH32F_STENCIL8 : c === zi && (Q = o22.DEPTH24_STENCIL8, GA("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : c === null || c === St || c === Mi ? Q = o22.DEPTH_COMPONENT24 : c === Nt ? Q = o22.DEPTH_COMPONENT32F : c === zi && (Q = o22.DEPTH_COMPONENT16), Q;
  }
  function h(d, c) {
    return F(d) === true || d.isFramebufferTexture && d.minFilter !== me && d.minFilter !== Oe ? Math.log2(Math.max(c.width, c.height)) + 1 : d.mipmaps !== void 0 && d.mipmaps.length > 0 ? d.mipmaps.length : d.isCompressedTexture && Array.isArray(d.image) ? c.mipmaps.length : 1;
  }
  function S(d) {
    let c = d.target;
    c.removeEventListener("dispose", S), B(c), c.isVideoTexture && s.delete(c), c.isHTMLTexture && p.delete(c);
  }
  function g(d) {
    let c = d.target;
    c.removeEventListener("dispose", g), O(c);
  }
  function B(d) {
    let c = t.get(d);
    if (c.__webglInit === void 0) return;
    let Q = d.source, z = U.get(Q);
    if (z) {
      let J = z[c.__cacheKey];
      J.usedTimes--, J.usedTimes === 0 && N(d), Object.keys(z).length === 0 && U.delete(Q);
    }
    t.remove(d);
  }
  function N(d) {
    let c = t.get(d);
    o22.deleteTexture(c.__webglTexture);
    let Q = d.source, z = U.get(Q);
    delete z[c.__cacheKey], a.memory.textures--;
  }
  function O(d) {
    let c = t.get(d);
    if (d.depthTexture && (d.depthTexture.dispose(), t.remove(d.depthTexture)), d.isWebGLCubeRenderTarget) for (let z = 0; z < 6; z++) {
      if (Array.isArray(c.__webglFramebuffer[z])) for (let J = 0; J < c.__webglFramebuffer[z].length; J++) o22.deleteFramebuffer(c.__webglFramebuffer[z][J]);
      else o22.deleteFramebuffer(c.__webglFramebuffer[z]);
      c.__webglDepthbuffer && o22.deleteRenderbuffer(c.__webglDepthbuffer[z]);
    }
    else {
      if (Array.isArray(c.__webglFramebuffer)) for (let z = 0; z < c.__webglFramebuffer.length; z++) o22.deleteFramebuffer(c.__webglFramebuffer[z]);
      else o22.deleteFramebuffer(c.__webglFramebuffer);
      if (c.__webglDepthbuffer && o22.deleteRenderbuffer(c.__webglDepthbuffer), c.__webglMultisampledFramebuffer && o22.deleteFramebuffer(c.__webglMultisampledFramebuffer), c.__webglColorRenderbuffer) for (let z = 0; z < c.__webglColorRenderbuffer.length; z++) c.__webglColorRenderbuffer[z] && o22.deleteRenderbuffer(c.__webglColorRenderbuffer[z]);
      c.__webglDepthRenderbuffer && o22.deleteRenderbuffer(c.__webglDepthRenderbuffer);
    }
    let Q = d.textures;
    for (let z = 0, J = Q.length; z < J; z++) {
      let KA = t.get(Q[z]);
      KA.__webglTexture && (o22.deleteTexture(KA.__webglTexture), a.memory.textures--), t.remove(Q[z]);
    }
    t.remove(d);
  }
  let G = 0;
  function M() {
    G = 0;
  }
  function m() {
    return G;
  }
  function k(d) {
    G = d;
  }
  function W() {
    let d = G;
    return d >= i.maxTextures && GA("WebGLTextures: Trying to use " + (d + 1) + " texture units while this GPU supports only " + i.maxTextures), G += 1, d;
  }
  function V(d) {
    let c = [];
    return c.push(d.wrapS), c.push(d.wrapT), c.push(d.wrapR || 0), c.push(d.magFilter), c.push(d.minFilter), c.push(d.anisotropy), c.push(d.internalFormat), c.push(d.format), c.push(d.type), c.push(d.generateMipmaps), c.push(d.premultiplyAlpha), c.push(d.flipY), c.push(d.unpackAlignment), c.push(d.colorSpace), c.join();
  }
  function aA(d, c) {
    let Q = t.get(d);
    if (d.isVideoTexture && C(d), d.isRenderTargetTexture === false && d.isExternalTexture !== true && d.version > 0 && Q.__version !== d.version) {
      let z = d.image;
      if (z === null) GA("WebGLRenderer: Texture marked for update but no image data found.");
      else if (z.complete === false) GA("WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        HA(Q, d, c);
        return;
      }
    } else d.isExternalTexture && (Q.__webglTexture = d.sourceTexture ? d.sourceTexture : null);
    e.bindTexture(o22.TEXTURE_2D, Q.__webglTexture, o22.TEXTURE0 + c);
  }
  function q(d, c) {
    let Q = t.get(d);
    if (d.isRenderTargetTexture === false && d.version > 0 && Q.__version !== d.version) {
      HA(Q, d, c);
      return;
    } else d.isExternalTexture && (Q.__webglTexture = d.sourceTexture ? d.sourceTexture : null);
    e.bindTexture(o22.TEXTURE_2D_ARRAY, Q.__webglTexture, o22.TEXTURE0 + c);
  }
  function AA(d, c) {
    let Q = t.get(d);
    if (d.isRenderTargetTexture === false && d.version > 0 && Q.__version !== d.version) {
      HA(Q, d, c);
      return;
    }
    e.bindTexture(o22.TEXTURE_3D, Q.__webglTexture, o22.TEXTURE0 + c);
  }
  function oA(d, c) {
    let Q = t.get(d);
    if (d.isCubeDepthTexture !== true && d.version > 0 && Q.__version !== d.version) {
      zA(Q, d, c);
      return;
    }
    e.bindTexture(o22.TEXTURE_CUBE_MAP, Q.__webglTexture, o22.TEXTURE0 + c);
  }
  let TA = { [di]: o22.REPEAT, [kt]: o22.CLAMP_TO_EDGE, [La]: o22.MIRRORED_REPEAT }, BA = { [me]: o22.NEAREST, [$K]: o22.NEAREST_MIPMAP_NEAREST, [Ln]: o22.NEAREST_MIPMAP_LINEAR, [Oe]: o22.LINEAR, [hf]: o22.LINEAR_MIPMAP_NEAREST, [To]: o22.LINEAR_MIPMAP_LINEAR }, fe = { [os]: o22.NEVER, [rs]: o22.ALWAYS, [is]: o22.LESS, [Pr]: o22.LEQUAL, [ns]: o22.EQUAL, [Kr]: o22.GEQUAL, [as]: o22.GREATER, [fs]: o22.NOTEQUAL };
  function _A(d, c) {
    if (c.type === Nt && A.has("OES_texture_float_linear") === false && (c.magFilter === Oe || c.magFilter === hf || c.magFilter === Ln || c.magFilter === To || c.minFilter === Oe || c.minFilter === hf || c.minFilter === Ln || c.minFilter === To) && GA("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), o22.texParameteri(d, o22.TEXTURE_WRAP_S, TA[c.wrapS]), o22.texParameteri(d, o22.TEXTURE_WRAP_T, TA[c.wrapT]), (d === o22.TEXTURE_3D || d === o22.TEXTURE_2D_ARRAY) && o22.texParameteri(d, o22.TEXTURE_WRAP_R, TA[c.wrapR]), o22.texParameteri(d, o22.TEXTURE_MAG_FILTER, BA[c.magFilter]), o22.texParameteri(d, o22.TEXTURE_MIN_FILTER, BA[c.minFilter]), c.compareFunction && (o22.texParameteri(d, o22.TEXTURE_COMPARE_MODE, o22.COMPARE_REF_TO_TEXTURE), o22.texParameteri(d, o22.TEXTURE_COMPARE_FUNC, fe[c.compareFunction])), A.has("EXT_texture_filter_anisotropic") === true) {
      if (c.magFilter === me || c.minFilter !== Ln && c.minFilter !== To || c.type === Nt && A.has("OES_texture_float_linear") === false) return;
      if (c.anisotropy > 1 || t.get(c).__currentAnisotropy) {
        let Q = A.get("EXT_texture_filter_anisotropic");
        o22.texParameterf(d, Q.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(c.anisotropy, i.getMaxAnisotropy())), t.get(c).__currentAnisotropy = c.anisotropy;
      }
    }
  }
  function oe(d, c) {
    let Q = false;
    d.__webglInit === void 0 && (d.__webglInit = true, c.addEventListener("dispose", S));
    let z = c.source, J = U.get(z);
    J === void 0 && (J = {}, U.set(z, J));
    let KA = V(c);
    if (KA !== d.__cacheKey) {
      J[KA] === void 0 && (J[KA] = { texture: o22.createTexture(), usedTimes: 0 }, a.memory.textures++, Q = true), J[KA].usedTimes++;
      let sA = J[d.__cacheKey];
      sA !== void 0 && (J[d.__cacheKey].usedTimes--, sA.usedTimes === 0 && N(c)), d.__cacheKey = KA, d.__webglTexture = J[KA].texture;
    }
    return Q;
  }
  function Z(d, c, Q) {
    return Math.floor(Math.floor(d / Q) / c);
  }
  function eA(d, c, Q, z) {
    let KA = d.updateRanges;
    if (KA.length === 0) e.texSubImage2D(o22.TEXTURE_2D, 0, 0, 0, c.width, c.height, Q, z, c.data);
    else {
      KA.sort((mA, gA) => mA.start - gA.start);
      let sA = 0;
      for (let mA = 1; mA < KA.length; mA++) {
        let gA = KA[sA], wA = KA[mA], XA = gA.start + gA.count, IA = Z(wA.start, c.width, 4), qA = Z(gA.start, c.width, 4);
        wA.start <= XA + 1 && IA === qA && Z(wA.start + wA.count - 1, c.width, 4) === IA ? gA.count = Math.max(gA.count, wA.start + wA.count - gA.start) : (++sA, KA[sA] = wA);
      }
      KA.length = sA + 1;
      let E = e.getParameter(o22.UNPACK_ROW_LENGTH), $ = e.getParameter(o22.UNPACK_SKIP_PIXELS), RA = e.getParameter(o22.UNPACK_SKIP_ROWS);
      e.pixelStorei(o22.UNPACK_ROW_LENGTH, c.width);
      for (let mA = 0, gA = KA.length; mA < gA; mA++) {
        let wA = KA[mA], XA = Math.floor(wA.start / 4), IA = Math.ceil(wA.count / 4), qA = XA % c.width, X = Math.floor(XA / c.width), cA = IA, _ = 1;
        e.pixelStorei(o22.UNPACK_SKIP_PIXELS, qA), e.pixelStorei(o22.UNPACK_SKIP_ROWS, X), e.texSubImage2D(o22.TEXTURE_2D, 0, qA, X, cA, _, Q, z, c.data);
      }
      d.clearUpdateRanges(), e.pixelStorei(o22.UNPACK_ROW_LENGTH, E), e.pixelStorei(o22.UNPACK_SKIP_PIXELS, $), e.pixelStorei(o22.UNPACK_SKIP_ROWS, RA);
    }
  }
  function HA(d, c, Q) {
    let z = o22.TEXTURE_2D;
    (c.isDataArrayTexture || c.isCompressedArrayTexture) && (z = o22.TEXTURE_2D_ARRAY), c.isData3DTexture && (z = o22.TEXTURE_3D);
    let J = oe(d, c), KA = c.source;
    e.bindTexture(z, d.__webglTexture, o22.TEXTURE0 + Q);
    let sA = t.get(KA);
    if (KA.version !== sA.__version || J === true) {
      if (e.activeTexture(o22.TEXTURE0 + Q), (typeof ImageBitmap < "u" && c.image instanceof ImageBitmap) === false) {
        let _ = ee.getPrimaries(ee.workingColorSpace), lA = c.colorSpace === ao ? null : ee.getPrimaries(c.colorSpace), dA = c.colorSpace === ao || _ === lA ? o22.NONE : o22.BROWSER_DEFAULT_WEBGL;
        e.pixelStorei(o22.UNPACK_FLIP_Y_WEBGL, c.flipY), e.pixelStorei(o22.UNPACK_PREMULTIPLY_ALPHA_WEBGL, c.premultiplyAlpha), e.pixelStorei(o22.UNPACK_COLORSPACE_CONVERSION_WEBGL, dA);
      }
      e.pixelStorei(o22.UNPACK_ALIGNMENT, c.unpackAlignment);
      let $ = R(c.image, false, i.maxTextureSize);
      $ = re(c, $);
      let RA = n.convert(c.format, c.colorSpace), mA = n.convert(c.type), gA = v(c.internalFormat, RA, mA, c.normalized, c.colorSpace, c.isVideoTexture);
      _A(z, c);
      let wA, XA = c.mipmaps, IA = c.isVideoTexture !== true, qA = sA.__version === void 0 || J === true, X = KA.dataReady, cA = h(c, $);
      if (c.isDepthTexture) gA = x(c.format === mo, c.type), qA && (IA ? e.texStorage2D(o22.TEXTURE_2D, 1, gA, $.width, $.height) : e.texImage2D(o22.TEXTURE_2D, 0, gA, $.width, $.height, 0, RA, mA, null));
      else if (c.isDataTexture) if (XA.length > 0) {
        IA && qA && e.texStorage2D(o22.TEXTURE_2D, cA, gA, XA[0].width, XA[0].height);
        for (let _ = 0, lA = XA.length; _ < lA; _++) wA = XA[_], IA ? X && e.texSubImage2D(o22.TEXTURE_2D, _, 0, 0, wA.width, wA.height, RA, mA, wA.data) : e.texImage2D(o22.TEXTURE_2D, _, gA, wA.width, wA.height, 0, RA, mA, wA.data);
        c.generateMipmaps = false;
      } else IA ? (qA && e.texStorage2D(o22.TEXTURE_2D, cA, gA, $.width, $.height), X && eA(c, $, RA, mA)) : e.texImage2D(o22.TEXTURE_2D, 0, gA, $.width, $.height, 0, RA, mA, $.data);
      else if (c.isCompressedTexture) if (c.isCompressedArrayTexture) {
        IA && qA && e.texStorage3D(o22.TEXTURE_2D_ARRAY, cA, gA, XA[0].width, XA[0].height, $.depth);
        for (let _ = 0, lA = XA.length; _ < lA; _++) if (wA = XA[_], c.format !== wt) if (RA !== null) if (IA) {
          if (X) if (c.layerUpdates.size > 0) {
            let dA = eP(wA.width, wA.height, c.format, c.type);
            for (let iA of c.layerUpdates) {
              let OA = wA.data.subarray(iA * dA / wA.data.BYTES_PER_ELEMENT, (iA + 1) * dA / wA.data.BYTES_PER_ELEMENT);
              e.compressedTexSubImage3D(o22.TEXTURE_2D_ARRAY, _, 0, 0, iA, wA.width, wA.height, 1, RA, OA);
            }
          } else e.compressedTexSubImage3D(o22.TEXTURE_2D_ARRAY, _, 0, 0, 0, wA.width, wA.height, $.depth, RA, wA.data);
        } else e.compressedTexImage3D(o22.TEXTURE_2D_ARRAY, _, gA, wA.width, wA.height, $.depth, 0, wA.data, 0, 0);
        else GA("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
        else IA ? X && e.texSubImage3D(o22.TEXTURE_2D_ARRAY, _, 0, 0, 0, wA.width, wA.height, $.depth, RA, mA, wA.data) : e.texImage3D(o22.TEXTURE_2D_ARRAY, _, gA, wA.width, wA.height, $.depth, 0, RA, mA, wA.data);
        c.layerUpdates.size > 0 && c.clearLayerUpdates();
      } else {
        IA && qA && e.texStorage2D(o22.TEXTURE_2D, cA, gA, XA[0].width, XA[0].height);
        for (let _ = 0, lA = XA.length; _ < lA; _++) wA = XA[_], c.format !== wt ? RA !== null ? IA ? X && e.compressedTexSubImage2D(o22.TEXTURE_2D, _, 0, 0, wA.width, wA.height, RA, wA.data) : e.compressedTexImage2D(o22.TEXTURE_2D, _, gA, wA.width, wA.height, 0, wA.data) : GA("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : IA ? X && e.texSubImage2D(o22.TEXTURE_2D, _, 0, 0, wA.width, wA.height, RA, mA, wA.data) : e.texImage2D(o22.TEXTURE_2D, _, gA, wA.width, wA.height, 0, RA, mA, wA.data);
      }
      else if (c.isDataArrayTexture) if (IA) {
        if (qA && e.texStorage3D(o22.TEXTURE_2D_ARRAY, cA, gA, $.width, $.height, $.depth), X) if (c.layerUpdates.size > 0) {
          let _ = eP($.width, $.height, c.format, c.type);
          for (let lA of c.layerUpdates) {
            let dA = $.data.subarray(lA * _ / $.data.BYTES_PER_ELEMENT, (lA + 1) * _ / $.data.BYTES_PER_ELEMENT);
            e.texSubImage3D(o22.TEXTURE_2D_ARRAY, 0, 0, 0, lA, $.width, $.height, 1, RA, mA, dA);
          }
          c.clearLayerUpdates();
        } else e.texSubImage3D(o22.TEXTURE_2D_ARRAY, 0, 0, 0, 0, $.width, $.height, $.depth, RA, mA, $.data);
      } else e.texImage3D(o22.TEXTURE_2D_ARRAY, 0, gA, $.width, $.height, $.depth, 0, RA, mA, $.data);
      else if (c.isData3DTexture) IA ? (qA && e.texStorage3D(o22.TEXTURE_3D, cA, gA, $.width, $.height, $.depth), X && e.texSubImage3D(o22.TEXTURE_3D, 0, 0, 0, 0, $.width, $.height, $.depth, RA, mA, $.data)) : e.texImage3D(o22.TEXTURE_3D, 0, gA, $.width, $.height, $.depth, 0, RA, mA, $.data);
      else if (c.isFramebufferTexture) {
        if (qA) if (IA) e.texStorage2D(o22.TEXTURE_2D, cA, gA, $.width, $.height);
        else {
          let _ = $.width, lA = $.height;
          for (let dA = 0; dA < cA; dA++) e.texImage2D(o22.TEXTURE_2D, dA, gA, _, lA, 0, RA, mA, null), _ >>= 1, lA >>= 1;
        }
      } else if (c.isHTMLTexture) {
        if ("texElementImage2D" in o22) {
          let _ = o22.canvas;
          if (_.hasAttribute("layoutsubtree") || _.setAttribute("layoutsubtree", "true"), $.parentNode !== _) {
            _.appendChild($), p.add(c), _.onpaint = (lA) => {
              let dA = lA.changedElements;
              for (let iA of p) dA.includes(iA.image) && (iA.needsUpdate = true);
            }, _.requestPaint();
            return;
          }
          if (o22.texElementImage2D.length === 3) o22.texElementImage2D(o22.TEXTURE_2D, o22.RGBA8, $);
          else {
            let dA = o22.RGBA, iA = o22.RGBA, OA = o22.UNSIGNED_BYTE;
            o22.texElementImage2D(o22.TEXTURE_2D, 0, dA, iA, OA, $);
          }
          o22.texParameteri(o22.TEXTURE_2D, o22.TEXTURE_MIN_FILTER, o22.LINEAR), o22.texParameteri(o22.TEXTURE_2D, o22.TEXTURE_WRAP_S, o22.CLAMP_TO_EDGE), o22.texParameteri(o22.TEXTURE_2D, o22.TEXTURE_WRAP_T, o22.CLAMP_TO_EDGE);
        }
      } else if (XA.length > 0) {
        if (IA && qA) {
          let _ = $A(XA[0]);
          e.texStorage2D(o22.TEXTURE_2D, cA, gA, _.width, _.height);
        }
        for (let _ = 0, lA = XA.length; _ < lA; _++) wA = XA[_], IA ? X && e.texSubImage2D(o22.TEXTURE_2D, _, 0, 0, RA, mA, wA) : e.texImage2D(o22.TEXTURE_2D, _, gA, RA, mA, wA);
        c.generateMipmaps = false;
      } else if (IA) {
        if (qA) {
          let _ = $A($);
          e.texStorage2D(o22.TEXTURE_2D, cA, gA, _.width, _.height);
        }
        X && e.texSubImage2D(o22.TEXTURE_2D, 0, 0, 0, RA, mA, $);
      } else e.texImage2D(o22.TEXTURE_2D, 0, gA, RA, mA, $);
      F(c) && u(z), sA.__version = KA.version, c.onUpdate && c.onUpdate(c);
    }
    d.__version = c.version;
  }
  function zA(d, c, Q) {
    if (c.image.length !== 6) return;
    let z = oe(d, c), J = c.source;
    e.bindTexture(o22.TEXTURE_CUBE_MAP, d.__webglTexture, o22.TEXTURE0 + Q);
    let KA = t.get(J);
    if (J.version !== KA.__version || z === true) {
      e.activeTexture(o22.TEXTURE0 + Q);
      let sA = ee.getPrimaries(ee.workingColorSpace), E = c.colorSpace === ao ? null : ee.getPrimaries(c.colorSpace), $ = c.colorSpace === ao || sA === E ? o22.NONE : o22.BROWSER_DEFAULT_WEBGL;
      e.pixelStorei(o22.UNPACK_FLIP_Y_WEBGL, c.flipY), e.pixelStorei(o22.UNPACK_PREMULTIPLY_ALPHA_WEBGL, c.premultiplyAlpha), e.pixelStorei(o22.UNPACK_ALIGNMENT, c.unpackAlignment), e.pixelStorei(o22.UNPACK_COLORSPACE_CONVERSION_WEBGL, $);
      let RA = c.isCompressedTexture || c.image[0].isCompressedTexture, mA = c.image[0] && c.image[0].isDataTexture, gA = [];
      for (let iA = 0; iA < 6; iA++) !RA && !mA ? gA[iA] = R(c.image[iA], true, i.maxCubemapSize) : gA[iA] = mA ? c.image[iA].image : c.image[iA], gA[iA] = re(c, gA[iA]);
      let wA = gA[0], XA = n.convert(c.format, c.colorSpace), IA = n.convert(c.type), qA = v(c.internalFormat, XA, IA, c.normalized, c.colorSpace), X = c.isVideoTexture !== true, cA = KA.__version === void 0 || z === true, _ = J.dataReady, lA = h(c, wA);
      _A(o22.TEXTURE_CUBE_MAP, c);
      let dA;
      if (RA) {
        X && cA && e.texStorage2D(o22.TEXTURE_CUBE_MAP, lA, qA, wA.width, wA.height);
        for (let iA = 0; iA < 6; iA++) {
          dA = gA[iA].mipmaps;
          for (let OA = 0; OA < dA.length; OA++) {
            let NA = dA[OA];
            c.format !== wt ? XA !== null ? X ? _ && e.compressedTexSubImage2D(o22.TEXTURE_CUBE_MAP_POSITIVE_X + iA, OA, 0, 0, NA.width, NA.height, XA, NA.data) : e.compressedTexImage2D(o22.TEXTURE_CUBE_MAP_POSITIVE_X + iA, OA, qA, NA.width, NA.height, 0, NA.data) : GA("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : X ? _ && e.texSubImage2D(o22.TEXTURE_CUBE_MAP_POSITIVE_X + iA, OA, 0, 0, NA.width, NA.height, XA, IA, NA.data) : e.texImage2D(o22.TEXTURE_CUBE_MAP_POSITIVE_X + iA, OA, qA, NA.width, NA.height, 0, XA, IA, NA.data);
          }
        }
      } else {
        if (dA = c.mipmaps, X && cA) {
          dA.length > 0 && lA++;
          let iA = $A(gA[0]);
          e.texStorage2D(o22.TEXTURE_CUBE_MAP, lA, qA, iA.width, iA.height);
        }
        for (let iA = 0; iA < 6; iA++) if (mA) {
          X ? _ && e.texSubImage2D(o22.TEXTURE_CUBE_MAP_POSITIVE_X + iA, 0, 0, 0, gA[iA].width, gA[iA].height, XA, IA, gA[iA].data) : e.texImage2D(o22.TEXTURE_CUBE_MAP_POSITIVE_X + iA, 0, qA, gA[iA].width, gA[iA].height, 0, XA, IA, gA[iA].data);
          for (let OA = 0; OA < dA.length; OA++) {
            let ge = dA[OA].image[iA].image;
            X ? _ && e.texSubImage2D(o22.TEXTURE_CUBE_MAP_POSITIVE_X + iA, OA + 1, 0, 0, ge.width, ge.height, XA, IA, ge.data) : e.texImage2D(o22.TEXTURE_CUBE_MAP_POSITIVE_X + iA, OA + 1, qA, ge.width, ge.height, 0, XA, IA, ge.data);
          }
        } else {
          X ? _ && e.texSubImage2D(o22.TEXTURE_CUBE_MAP_POSITIVE_X + iA, 0, 0, 0, XA, IA, gA[iA]) : e.texImage2D(o22.TEXTURE_CUBE_MAP_POSITIVE_X + iA, 0, qA, XA, IA, gA[iA]);
          for (let OA = 0; OA < dA.length; OA++) {
            let NA = dA[OA];
            X ? _ && e.texSubImage2D(o22.TEXTURE_CUBE_MAP_POSITIVE_X + iA, OA + 1, 0, 0, XA, IA, NA.image[iA]) : e.texImage2D(o22.TEXTURE_CUBE_MAP_POSITIVE_X + iA, OA + 1, qA, XA, IA, NA.image[iA]);
          }
        }
      }
      F(c) && u(o22.TEXTURE_CUBE_MAP), KA.__version = J.version, c.onUpdate && c.onUpdate(c);
    }
    d.__version = c.version;
  }
  function xA(d, c, Q, z, J, KA) {
    let sA = n.convert(Q.format, Q.colorSpace), E = n.convert(Q.type), $ = v(Q.internalFormat, sA, E, Q.normalized, Q.colorSpace), RA = t.get(c), mA = t.get(Q);
    if (mA.__renderTarget = c, !RA.__hasExternalTextures) {
      let gA = Math.max(1, c.width >> KA), wA = Math.max(1, c.height >> KA);
      J === o22.TEXTURE_3D || J === o22.TEXTURE_2D_ARRAY ? e.texImage3D(J, KA, $, gA, wA, c.depth, 0, sA, E, null) : e.texImage2D(J, KA, $, gA, wA, 0, sA, E, null);
    }
    e.bindFramebuffer(o22.FRAMEBUFFER, d), WA(c) ? f.framebufferTexture2DMultisampleEXT(o22.FRAMEBUFFER, z, J, mA.__webglTexture, 0, yA(c)) : (J === o22.TEXTURE_2D || J >= o22.TEXTURE_CUBE_MAP_POSITIVE_X && J <= o22.TEXTURE_CUBE_MAP_NEGATIVE_Z) && o22.framebufferTexture2D(o22.FRAMEBUFFER, z, J, mA.__webglTexture, KA), e.bindFramebuffer(o22.FRAMEBUFFER, null);
  }
  function MA(d, c, Q) {
    if (o22.bindRenderbuffer(o22.RENDERBUFFER, d), c.depthBuffer) {
      let z = c.depthTexture, J = z && z.isDepthTexture ? z.type : null, KA = x(c.stencilBuffer, J), sA = c.stencilBuffer ? o22.DEPTH_STENCIL_ATTACHMENT : o22.DEPTH_ATTACHMENT;
      WA(c) ? f.renderbufferStorageMultisampleEXT(o22.RENDERBUFFER, yA(c), KA, c.width, c.height) : Q ? o22.renderbufferStorageMultisample(o22.RENDERBUFFER, yA(c), KA, c.width, c.height) : o22.renderbufferStorage(o22.RENDERBUFFER, KA, c.width, c.height), o22.framebufferRenderbuffer(o22.FRAMEBUFFER, sA, o22.RENDERBUFFER, d);
    } else {
      let z = c.textures;
      for (let J = 0; J < z.length; J++) {
        let KA = z[J], sA = n.convert(KA.format, KA.colorSpace), E = n.convert(KA.type), $ = v(KA.internalFormat, sA, E, KA.normalized, KA.colorSpace);
        WA(c) ? f.renderbufferStorageMultisampleEXT(o22.RENDERBUFFER, yA(c), $, c.width, c.height) : Q ? o22.renderbufferStorageMultisample(o22.RENDERBUFFER, yA(c), $, c.width, c.height) : o22.renderbufferStorage(o22.RENDERBUFFER, $, c.width, c.height);
      }
    }
    o22.bindRenderbuffer(o22.RENDERBUFFER, null);
  }
  function Ue(d, c, Q) {
    let z = c.isWebGLCubeRenderTarget === true;
    if (e.bindFramebuffer(o22.FRAMEBUFFER, d), !(c.depthTexture && c.depthTexture.isDepthTexture)) throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");
    let J = t.get(c.depthTexture);
    if (J.__renderTarget = c, (!J.__webglTexture || c.depthTexture.image.width !== c.width || c.depthTexture.image.height !== c.height) && (c.depthTexture.image.width = c.width, c.depthTexture.image.height = c.height, c.depthTexture.needsUpdate = true), z) {
      if (J.__webglInit === void 0 && (J.__webglInit = true, c.depthTexture.addEventListener("dispose", S)), J.__webglTexture === void 0) {
        J.__webglTexture = o22.createTexture(), e.bindTexture(o22.TEXTURE_CUBE_MAP, J.__webglTexture), _A(o22.TEXTURE_CUBE_MAP, c.depthTexture);
        let RA = n.convert(c.depthTexture.format), mA = n.convert(c.depthTexture.type), gA;
        c.depthTexture.format === zt ? gA = o22.DEPTH_COMPONENT24 : c.depthTexture.format === mo && (gA = o22.DEPTH24_STENCIL8);
        for (let wA = 0; wA < 6; wA++) o22.texImage2D(o22.TEXTURE_CUBE_MAP_POSITIVE_X + wA, 0, gA, c.width, c.height, 0, RA, mA, null);
      }
    } else aA(c.depthTexture, 0);
    let KA = J.__webglTexture, sA = yA(c), E = z ? o22.TEXTURE_CUBE_MAP_POSITIVE_X + Q : o22.TEXTURE_2D, $ = c.depthTexture.format === mo ? o22.DEPTH_STENCIL_ATTACHMENT : o22.DEPTH_ATTACHMENT;
    if (c.depthTexture.format === zt) WA(c) ? f.framebufferTexture2DMultisampleEXT(o22.FRAMEBUFFER, $, E, KA, 0, sA) : o22.framebufferTexture2D(o22.FRAMEBUFFER, $, E, KA, 0);
    else if (c.depthTexture.format === mo) WA(c) ? f.framebufferTexture2DMultisampleEXT(o22.FRAMEBUFFER, $, E, KA, 0, sA) : o22.framebufferTexture2D(o22.FRAMEBUFFER, $, E, KA, 0);
    else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.");
  }
  function tA(d) {
    let c = t.get(d), Q = d.isWebGLCubeRenderTarget === true;
    if (c.__boundDepthTexture !== d.depthTexture) {
      let z = d.depthTexture;
      if (c.__depthDisposeCallback && c.__depthDisposeCallback(), z) {
        let J = () => {
          delete c.__boundDepthTexture, delete c.__depthDisposeCallback, z.removeEventListener("dispose", J);
        };
        z.addEventListener("dispose", J), c.__depthDisposeCallback = J;
      }
      c.__boundDepthTexture = z;
    }
    if (d.depthTexture && !c.__autoAllocateDepthBuffer) if (Q) for (let z = 0; z < 6; z++) Ue(c.__webglFramebuffer[z], d, z);
    else {
      let z = d.texture.mipmaps;
      z && z.length > 0 ? Ue(c.__webglFramebuffer[0], d, 0) : Ue(c.__webglFramebuffer, d, 0);
    }
    else if (Q) {
      c.__webglDepthbuffer = [];
      for (let z = 0; z < 6; z++) if (e.bindFramebuffer(o22.FRAMEBUFFER, c.__webglFramebuffer[z]), c.__webglDepthbuffer[z] === void 0) c.__webglDepthbuffer[z] = o22.createRenderbuffer(), MA(c.__webglDepthbuffer[z], d, false);
      else {
        let J = d.stencilBuffer ? o22.DEPTH_STENCIL_ATTACHMENT : o22.DEPTH_ATTACHMENT, KA = c.__webglDepthbuffer[z];
        o22.bindRenderbuffer(o22.RENDERBUFFER, KA), o22.framebufferRenderbuffer(o22.FRAMEBUFFER, J, o22.RENDERBUFFER, KA);
      }
    } else {
      let z = d.texture.mipmaps;
      if (z && z.length > 0 ? e.bindFramebuffer(o22.FRAMEBUFFER, c.__webglFramebuffer[0]) : e.bindFramebuffer(o22.FRAMEBUFFER, c.__webglFramebuffer), c.__webglDepthbuffer === void 0) c.__webglDepthbuffer = o22.createRenderbuffer(), MA(c.__webglDepthbuffer, d, false);
      else {
        let J = d.stencilBuffer ? o22.DEPTH_STENCIL_ATTACHMENT : o22.DEPTH_ATTACHMENT, KA = c.__webglDepthbuffer;
        o22.bindRenderbuffer(o22.RENDERBUFFER, KA), o22.framebufferRenderbuffer(o22.FRAMEBUFFER, J, o22.RENDERBUFFER, KA);
      }
    }
    e.bindFramebuffer(o22.FRAMEBUFFER, null);
  }
  function fA(d, c, Q) {
    let z = t.get(d);
    c !== void 0 && xA(z.__webglFramebuffer, d, d.texture, o22.COLOR_ATTACHMENT0, o22.TEXTURE_2D, 0), Q !== void 0 && tA(d);
  }
  function rA(d) {
    let c = d.texture, Q = t.get(d), z = t.get(c);
    d.addEventListener("dispose", g);
    let J = d.textures, KA = d.isWebGLCubeRenderTarget === true, sA = J.length > 1;
    if (sA || (z.__webglTexture === void 0 && (z.__webglTexture = o22.createTexture()), z.__version = c.version, a.memory.textures++), KA) {
      Q.__webglFramebuffer = [];
      for (let E = 0; E < 6; E++) if (c.mipmaps && c.mipmaps.length > 0) {
        Q.__webglFramebuffer[E] = [];
        for (let $ = 0; $ < c.mipmaps.length; $++) Q.__webglFramebuffer[E][$] = o22.createFramebuffer();
      } else Q.__webglFramebuffer[E] = o22.createFramebuffer();
    } else {
      if (c.mipmaps && c.mipmaps.length > 0) {
        Q.__webglFramebuffer = [];
        for (let E = 0; E < c.mipmaps.length; E++) Q.__webglFramebuffer[E] = o22.createFramebuffer();
      } else Q.__webglFramebuffer = o22.createFramebuffer();
      if (sA) for (let E = 0, $ = J.length; E < $; E++) {
        let RA = t.get(J[E]);
        RA.__webglTexture === void 0 && (RA.__webglTexture = o22.createTexture(), a.memory.textures++);
      }
      if (d.samples > 0 && WA(d) === false) {
        Q.__webglMultisampledFramebuffer = o22.createFramebuffer(), Q.__webglColorRenderbuffer = [], e.bindFramebuffer(o22.FRAMEBUFFER, Q.__webglMultisampledFramebuffer);
        for (let E = 0; E < J.length; E++) {
          let $ = J[E];
          Q.__webglColorRenderbuffer[E] = o22.createRenderbuffer(), o22.bindRenderbuffer(o22.RENDERBUFFER, Q.__webglColorRenderbuffer[E]);
          let RA = n.convert($.format, $.colorSpace), mA = n.convert($.type), gA = v($.internalFormat, RA, mA, $.normalized, $.colorSpace, d.isXRRenderTarget === true), wA = yA(d);
          o22.renderbufferStorageMultisample(o22.RENDERBUFFER, wA, gA, d.width, d.height), o22.framebufferRenderbuffer(o22.FRAMEBUFFER, o22.COLOR_ATTACHMENT0 + E, o22.RENDERBUFFER, Q.__webglColorRenderbuffer[E]);
        }
        o22.bindRenderbuffer(o22.RENDERBUFFER, null), d.depthBuffer && (Q.__webglDepthRenderbuffer = o22.createRenderbuffer(), MA(Q.__webglDepthRenderbuffer, d, true)), e.bindFramebuffer(o22.FRAMEBUFFER, null);
      }
    }
    if (KA) {
      e.bindTexture(o22.TEXTURE_CUBE_MAP, z.__webglTexture), _A(o22.TEXTURE_CUBE_MAP, c);
      for (let E = 0; E < 6; E++) if (c.mipmaps && c.mipmaps.length > 0) for (let $ = 0; $ < c.mipmaps.length; $++) xA(Q.__webglFramebuffer[E][$], d, c, o22.COLOR_ATTACHMENT0, o22.TEXTURE_CUBE_MAP_POSITIVE_X + E, $);
      else xA(Q.__webglFramebuffer[E], d, c, o22.COLOR_ATTACHMENT0, o22.TEXTURE_CUBE_MAP_POSITIVE_X + E, 0);
      F(c) && u(o22.TEXTURE_CUBE_MAP), e.unbindTexture();
    } else if (sA) {
      for (let E = 0, $ = J.length; E < $; E++) {
        let RA = J[E], mA = t.get(RA), gA = o22.TEXTURE_2D;
        (d.isWebGL3DRenderTarget || d.isWebGLArrayRenderTarget) && (gA = d.isWebGL3DRenderTarget ? o22.TEXTURE_3D : o22.TEXTURE_2D_ARRAY), e.bindTexture(gA, mA.__webglTexture), _A(gA, RA), xA(Q.__webglFramebuffer, d, RA, o22.COLOR_ATTACHMENT0 + E, gA, 0), F(RA) && u(gA);
      }
      e.unbindTexture();
    } else {
      let E = o22.TEXTURE_2D;
      if ((d.isWebGL3DRenderTarget || d.isWebGLArrayRenderTarget) && (E = d.isWebGL3DRenderTarget ? o22.TEXTURE_3D : o22.TEXTURE_2D_ARRAY), e.bindTexture(E, z.__webglTexture), _A(E, c), c.mipmaps && c.mipmaps.length > 0) for (let $ = 0; $ < c.mipmaps.length; $++) xA(Q.__webglFramebuffer[$], d, c, o22.COLOR_ATTACHMENT0, E, $);
      else xA(Q.__webglFramebuffer, d, c, o22.COLOR_ATTACHMENT0, E, 0);
      F(c) && u(E), e.unbindTexture();
    }
    d.depthBuffer && tA(d);
  }
  function PA(d) {
    let c = d.textures;
    for (let Q = 0, z = c.length; Q < z; Q++) {
      let J = c[Q];
      if (F(J)) {
        let KA = D(d), sA = t.get(J).__webglTexture;
        e.bindTexture(KA, sA), u(KA), e.unbindTexture();
      }
    }
  }
  let pA = [], kA = [];
  function QA(d) {
    if (d.samples > 0) {
      if (WA(d) === false) {
        let c = d.textures, Q = d.width, z = d.height, J = o22.COLOR_BUFFER_BIT, KA = d.stencilBuffer ? o22.DEPTH_STENCIL_ATTACHMENT : o22.DEPTH_ATTACHMENT, sA = t.get(d), E = c.length > 1;
        if (E) for (let RA = 0; RA < c.length; RA++) e.bindFramebuffer(o22.FRAMEBUFFER, sA.__webglMultisampledFramebuffer), o22.framebufferRenderbuffer(o22.FRAMEBUFFER, o22.COLOR_ATTACHMENT0 + RA, o22.RENDERBUFFER, null), e.bindFramebuffer(o22.FRAMEBUFFER, sA.__webglFramebuffer), o22.framebufferTexture2D(o22.DRAW_FRAMEBUFFER, o22.COLOR_ATTACHMENT0 + RA, o22.TEXTURE_2D, null, 0);
        e.bindFramebuffer(o22.READ_FRAMEBUFFER, sA.__webglMultisampledFramebuffer);
        let $ = d.texture.mipmaps;
        $ && $.length > 0 ? e.bindFramebuffer(o22.DRAW_FRAMEBUFFER, sA.__webglFramebuffer[0]) : e.bindFramebuffer(o22.DRAW_FRAMEBUFFER, sA.__webglFramebuffer);
        for (let RA = 0; RA < c.length; RA++) {
          if (d.resolveDepthBuffer && (d.depthBuffer && (J |= o22.DEPTH_BUFFER_BIT), d.stencilBuffer && d.resolveStencilBuffer && (J |= o22.STENCIL_BUFFER_BIT)), E) {
            o22.framebufferRenderbuffer(o22.READ_FRAMEBUFFER, o22.COLOR_ATTACHMENT0, o22.RENDERBUFFER, sA.__webglColorRenderbuffer[RA]);
            let mA = t.get(c[RA]).__webglTexture;
            o22.framebufferTexture2D(o22.DRAW_FRAMEBUFFER, o22.COLOR_ATTACHMENT0, o22.TEXTURE_2D, mA, 0);
          }
          o22.blitFramebuffer(0, 0, Q, z, 0, 0, Q, z, J, o22.NEAREST), r === true && (pA.length = 0, kA.length = 0, pA.push(o22.COLOR_ATTACHMENT0 + RA), d.depthBuffer && d.storeMultisampledDepthBuffer === false && (pA.push(KA), kA.push(KA), o22.invalidateFramebuffer(o22.DRAW_FRAMEBUFFER, kA)), o22.invalidateFramebuffer(o22.READ_FRAMEBUFFER, pA));
        }
        if (e.bindFramebuffer(o22.READ_FRAMEBUFFER, null), e.bindFramebuffer(o22.DRAW_FRAMEBUFFER, null), E) for (let RA = 0; RA < c.length; RA++) {
          e.bindFramebuffer(o22.FRAMEBUFFER, sA.__webglMultisampledFramebuffer), o22.framebufferRenderbuffer(o22.FRAMEBUFFER, o22.COLOR_ATTACHMENT0 + RA, o22.RENDERBUFFER, sA.__webglColorRenderbuffer[RA]);
          let mA = t.get(c[RA]).__webglTexture;
          e.bindFramebuffer(o22.FRAMEBUFFER, sA.__webglFramebuffer), o22.framebufferTexture2D(o22.DRAW_FRAMEBUFFER, o22.COLOR_ATTACHMENT0 + RA, o22.TEXTURE_2D, mA, 0);
        }
        e.bindFramebuffer(o22.DRAW_FRAMEBUFFER, sA.__webglMultisampledFramebuffer);
      } else if (d.depthBuffer && d.storeMultisampledDepthBuffer === false && r) {
        let c = d.stencilBuffer ? o22.DEPTH_STENCIL_ATTACHMENT : o22.DEPTH_ATTACHMENT;
        o22.invalidateFramebuffer(o22.DRAW_FRAMEBUFFER, [c]);
      }
    }
  }
  function yA(d) {
    return Math.min(i.maxSamples, d.samples);
  }
  function WA(d) {
    let c = t.get(d);
    return d.samples > 0 && A.has("WEBGL_multisampled_render_to_texture") === true && c.__useRenderToTexture !== false;
  }
  function C(d) {
    let c = a.render.frame;
    s.get(d) !== c && (s.set(d, c), d.update());
  }
  function re(d, c) {
    let Q = d.colorSpace, z = d.format, J = d.type;
    return d.isCompressedTexture === true || d.isVideoTexture === true || Q !== pn && Q !== ao && (ee.getTransfer(Q) === se ? (z !== wt || J !== et) && GA("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : bA("WebGLTextures: Unsupported texture color space:", Q)), c;
  }
  function $A(d) {
    return typeof HTMLImageElement < "u" && d instanceof HTMLImageElement ? (P.width = d.naturalWidth || d.width, P.height = d.naturalHeight || d.height) : typeof VideoFrame < "u" && d instanceof VideoFrame ? (P.width = d.displayWidth, P.height = d.displayHeight) : (P.width = d.width, P.height = d.height), P;
  }
  this.allocateTextureUnit = W, this.resetTextureUnits = M, this.getTextureUnits = m, this.setTextureUnits = k, this.setTexture2D = aA, this.setTexture2DArray = q, this.setTexture3D = AA, this.setTextureCube = oA, this.rebindTextures = fA, this.setupRenderTarget = rA, this.updateRenderTargetMipmap = PA, this.updateMultisampleRenderTarget = QA, this.setupDepthRenderbuffer = tA, this.setupFrameBufferTexture = xA, this.useMultisampledRTT = WA, this.isReversedDepthBuffer = function() {
    return e.buffers.depth.getReversed();
  };
}
function k1(o22, A) {
  function e(t, i = ao) {
    let n, a = ee.getTransfer(i);
    if (t === et) return o22.UNSIGNED_BYTE;
    if (t === Bf) return o22.UNSIGNED_SHORT_4_4_4_4;
    if (t === jf) return o22.UNSIGNED_SHORT_5_5_5_1;
    if (t === M8) return o22.UNSIGNED_INT_5_9_9_9_REV;
    if (t === y8) return o22.UNSIGNED_INT_10F_11F_11F_REV;
    if (t === b8) return o22.BYTE;
    if (t === z8) return o22.SHORT;
    if (t === zi) return o22.UNSIGNED_SHORT;
    if (t === Df) return o22.INT;
    if (t === St) return o22.UNSIGNED_INT;
    if (t === Nt) return o22.FLOAT;
    if (t === Ct) return o22.HALF_FLOAT;
    if (t === L8) return o22.ALPHA;
    if (t === V8) return o22.RGB;
    if (t === wt) return o22.RGBA;
    if (t === zt) return o22.DEPTH_COMPONENT;
    if (t === mo) return o22.DEPTH_STENCIL;
    if (t === W8) return o22.RED;
    if (t === Sf) return o22.RED_INTEGER;
    if (t === Xo) return o22.RG;
    if (t === Nf) return o22.RG_INTEGER;
    if (t === Cf) return o22.RGBA_INTEGER;
    if (t === Vn || t === Wn || t === qn || t === Jn) if (a === se) if (n = A.get("WEBGL_compressed_texture_s3tc_srgb"), n !== null) {
      if (t === Vn) return n.COMPRESSED_SRGB_S3TC_DXT1_EXT;
      if (t === Wn) return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
      if (t === qn) return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
      if (t === Jn) return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
    } else return null;
    else if (n = A.get("WEBGL_compressed_texture_s3tc"), n !== null) {
      if (t === Vn) return n.COMPRESSED_RGB_S3TC_DXT1_EXT;
      if (t === Wn) return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;
      if (t === qn) return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;
      if (t === Jn) return n.COMPRESSED_RGBA_S3TC_DXT5_EXT;
    } else return null;
    if (t === Tf || t === mf || t === Xf || t === Of) if (n = A.get("WEBGL_compressed_texture_pvrtc"), n !== null) {
      if (t === Tf) return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
      if (t === mf) return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
      if (t === Xf) return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
      if (t === Of) return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
    } else return null;
    if (t === Qf || t === Gf || t === kf || t === If || t === bf || t === En || t === zf) if (n = A.get("WEBGL_compressed_texture_etc"), n !== null) {
      if (t === Qf || t === Gf) return a === se ? n.COMPRESSED_SRGB8_ETC2 : n.COMPRESSED_RGB8_ETC2;
      if (t === kf) return a === se ? n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : n.COMPRESSED_RGBA8_ETC2_EAC;
      if (t === If) return n.COMPRESSED_R11_EAC;
      if (t === bf) return n.COMPRESSED_SIGNED_R11_EAC;
      if (t === En) return n.COMPRESSED_RG11_EAC;
      if (t === zf) return n.COMPRESSED_SIGNED_RG11_EAC;
    } else return null;
    if (t === Mf || t === yf || t === Lf || t === Vf || t === Wf || t === qf || t === Jf || t === Ef || t === Zf || t === Yf || t === _f || t === $f || t === Ar || t === er) if (n = A.get("WEBGL_compressed_texture_astc"), n !== null) {
      if (t === Mf) return a === se ? n.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : n.COMPRESSED_RGBA_ASTC_4x4_KHR;
      if (t === yf) return a === se ? n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : n.COMPRESSED_RGBA_ASTC_5x4_KHR;
      if (t === Lf) return a === se ? n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : n.COMPRESSED_RGBA_ASTC_5x5_KHR;
      if (t === Vf) return a === se ? n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : n.COMPRESSED_RGBA_ASTC_6x5_KHR;
      if (t === Wf) return a === se ? n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : n.COMPRESSED_RGBA_ASTC_6x6_KHR;
      if (t === qf) return a === se ? n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : n.COMPRESSED_RGBA_ASTC_8x5_KHR;
      if (t === Jf) return a === se ? n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : n.COMPRESSED_RGBA_ASTC_8x6_KHR;
      if (t === Ef) return a === se ? n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : n.COMPRESSED_RGBA_ASTC_8x8_KHR;
      if (t === Zf) return a === se ? n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : n.COMPRESSED_RGBA_ASTC_10x5_KHR;
      if (t === Yf) return a === se ? n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : n.COMPRESSED_RGBA_ASTC_10x6_KHR;
      if (t === _f) return a === se ? n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : n.COMPRESSED_RGBA_ASTC_10x8_KHR;
      if (t === $f) return a === se ? n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : n.COMPRESSED_RGBA_ASTC_10x10_KHR;
      if (t === Ar) return a === se ? n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : n.COMPRESSED_RGBA_ASTC_12x10_KHR;
      if (t === er) return a === se ? n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : n.COMPRESSED_RGBA_ASTC_12x12_KHR;
    } else return null;
    if (t === tr || t === or || t === ir) if (n = A.get("EXT_texture_compression_bptc"), n !== null) {
      if (t === tr) return a === se ? n.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : n.COMPRESSED_RGBA_BPTC_UNORM_EXT;
      if (t === or) return n.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
      if (t === ir) return n.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
    } else return null;
    if (t === nr || t === ar || t === Zn || t === fr) if (n = A.get("EXT_texture_compression_rgtc"), n !== null) {
      if (t === nr) return n.COMPRESSED_RED_RGTC1_EXT;
      if (t === ar) return n.COMPRESSED_SIGNED_RED_RGTC1_EXT;
      if (t === Zn) return n.COMPRESSED_RED_GREEN_RGTC2_EXT;
      if (t === fr) return n.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
    } else return null;
    return t === Mi ? o22.UNSIGNED_INT_24_8 : o22[t] !== void 0 ? o22[t] : null;
  }
  return { convert: e };
}
var I1 = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`, b1 = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`, RP = class {
  constructor() {
    this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
  }
  init(A, e) {
    if (this.texture === null) {
      let t = new un(A.texture);
      (A.depthNear !== e.depthNear || A.depthFar !== e.depthFar) && (this.depthNear = A.depthNear, this.depthFar = A.depthFar), this.texture = t;
    }
  }
  getMesh(A) {
    if (this.texture !== null && this.mesh === null) {
      let e = A.cameras[0].viewport, t = new Ee({ vertexShader: I1, fragmentShader: b1, uniforms: { depthColor: { value: this.texture }, depthWidth: { value: e.z }, depthHeight: { value: e.w } } });
      this.mesh = new ne(new qo(20, 20), t);
    }
    return this.mesh;
  }
  reset() {
    this.texture = null, this.mesh = null;
  }
  getDepthTexture() {
    return this.texture;
  }
}, wP = class extends Dt {
  constructor(A, e) {
    super();
    let t = this, i = null, n = 1, a = null, f = "local-floor", r = 1, P = null, s = null, p = null, K = null, U = null, w = null, l = typeof XRWebGLBinding < "u", R = new RP(), F = {}, u = e.getContextAttributes(), D = null, v = null, x = [], h = [], S = new nA(), g = null, B = null, N = new Le();
    N.viewport = new pe();
    let O = new Le();
    O.viewport = new pe();
    let G = [N, O], M = new vf(), m = null, k = null;
    this.cameraAutoUpdate = true, this.enabled = false, this.isPresenting = false, this.getController = function(Z) {
      let eA = x[Z];
      return eA === void 0 && (eA = new Si(), x[Z] = eA), eA.getTargetRaySpace();
    }, this.getControllerGrip = function(Z) {
      let eA = x[Z];
      return eA === void 0 && (eA = new Si(), x[Z] = eA), eA.getGripSpace();
    }, this.getHand = function(Z) {
      let eA = x[Z];
      return eA === void 0 && (eA = new Si(), x[Z] = eA), eA.getHandSpace();
    };
    function W(Z) {
      let eA = h.indexOf(Z.inputSource);
      if (eA === -1) return;
      let HA = x[eA];
      HA !== void 0 && (HA.update(Z.inputSource, Z.frame, P || a), HA.dispatchEvent({ type: Z.type, data: Z.inputSource }));
    }
    function V() {
      i.removeEventListener("select", W), i.removeEventListener("selectstart", W), i.removeEventListener("selectend", W), i.removeEventListener("squeeze", W), i.removeEventListener("squeezestart", W), i.removeEventListener("squeezeend", W), i.removeEventListener("end", V), i.removeEventListener("inputsourceschange", aA);
      for (let Z = 0; Z < x.length; Z++) {
        let eA = h[Z];
        eA !== null && (h[Z] = null, x[Z].disconnect(eA));
      }
      m = null, k = null, R.reset();
      for (let Z in F) delete F[Z];
      if (A.setRenderTarget(D), U = null, K = null, p = null, i = null, v = null, oe.stop(), t.isPresenting = false, A.setPixelRatio(g), A.setSize(S.width, S.height, false), B !== null) {
        let Z = B.camera;
        Z.fov = B.fov, Z.zoom = B.zoom, Z.updateProjectionMatrix(), B = null;
      }
      t.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(Z) {
      n = Z, t.isPresenting === true && GA("WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(Z) {
      f = Z, t.isPresenting === true && GA("WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return P || a;
    }, this.setReferenceSpace = function(Z) {
      P = Z;
    }, this.getBaseLayer = function() {
      return K !== null ? K : U;
    }, this.getBinding = function() {
      return p === null && l && (p = new XRWebGLBinding(i, e)), p;
    }, this.getFrame = function() {
      return w;
    }, this.getSession = function() {
      return i;
    }, this.setSession = async function(Z) {
      if (i = Z, i !== null) {
        if (D = A.getRenderTarget(), i.addEventListener("select", W), i.addEventListener("selectstart", W), i.addEventListener("selectend", W), i.addEventListener("squeeze", W), i.addEventListener("squeezestart", W), i.addEventListener("squeezeend", W), i.addEventListener("end", V), i.addEventListener("inputsourceschange", aA), u.xrCompatible !== true && await e.makeXRCompatible(), g = A.getPixelRatio(), A.getSize(S), l && "createProjectionLayer" in XRWebGLBinding.prototype) {
          let HA = null, zA = null, xA = null;
          u.depth && (xA = u.stencil ? e.DEPTH24_STENCIL8 : e.DEPTH_COMPONENT24, HA = u.stencil ? mo : zt, zA = u.stencil ? Mi : St);
          let MA = { colorFormat: e.RGBA8, depthFormat: xA, scaleFactor: n };
          p = this.getBinding(), K = p.createProjectionLayer(MA), i.updateRenderState({ layers: [K] }), A.setPixelRatio(1), A.setSize(K.textureWidth, K.textureHeight, false), v = new At(K.textureWidth, K.textureHeight, { format: wt, type: et, depthTexture: new Ho(K.textureWidth, K.textureHeight, zA, void 0, void 0, void 0, void 0, void 0, void 0, HA), stencilBuffer: u.stencil, colorSpace: A.outputColorSpace, samples: u.antialias ? 4 : 0, resolveDepthBuffer: K.ignoreDepthValues === false, resolveStencilBuffer: K.ignoreDepthValues === false, storeMultisampledDepthBuffer: K.ignoreDepthValues === false, storeMultisampledStencilBuffer: K.ignoreDepthValues === false });
        } else {
          let HA = { antialias: u.antialias, alpha: true, depth: u.depth, stencil: u.stencil, framebufferScaleFactor: n };
          U = new XRWebGLLayer(i, e, HA), i.updateRenderState({ baseLayer: U }), A.setPixelRatio(1), A.setSize(U.framebufferWidth, U.framebufferHeight, false), v = new At(U.framebufferWidth, U.framebufferHeight, { format: wt, type: et, colorSpace: A.outputColorSpace, stencilBuffer: u.stencil, resolveDepthBuffer: U.ignoreDepthValues === false, resolveStencilBuffer: U.ignoreDepthValues === false, storeMultisampledDepthBuffer: U.ignoreDepthValues === false, storeMultisampledStencilBuffer: U.ignoreDepthValues === false });
        }
        v.isXRRenderTarget = true, this.setFoveation(r), P = null, a = await i.requestReferenceSpace(f), oe.setContext(i), oe.start(), t.isPresenting = true, t.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (i !== null) return i.environmentBlendMode;
    }, this.getDepthTexture = function() {
      return R.getDepthTexture();
    };
    function aA(Z) {
      for (let eA = 0; eA < Z.removed.length; eA++) {
        let HA = Z.removed[eA], zA = h.indexOf(HA);
        zA >= 0 && (h[zA] = null, x[zA].disconnect(HA));
      }
      for (let eA = 0; eA < Z.added.length; eA++) {
        let HA = Z.added[eA], zA = h.indexOf(HA);
        if (zA === -1) {
          for (let MA = 0; MA < x.length; MA++) if (MA >= h.length) {
            h.push(HA), zA = MA;
            break;
          } else if (h[MA] === null) {
            h[MA] = HA, zA = MA;
            break;
          }
          if (zA === -1) break;
        }
        let xA = x[zA];
        xA && xA.connect(HA);
      }
    }
    let q = new j(), AA = new j();
    function oA(Z, eA, HA) {
      q.setFromMatrixPosition(eA.matrixWorld), AA.setFromMatrixPosition(HA.matrixWorld);
      let zA = q.distanceTo(AA), xA = eA.projectionMatrix.elements, MA = HA.projectionMatrix.elements, Ue = xA[14] / (xA[10] - 1), tA = xA[14] / (xA[10] + 1), fA = (xA[9] + 1) / xA[5], rA = (xA[9] - 1) / xA[5], PA = (xA[8] - 1) / xA[0], pA = (MA[8] + 1) / MA[0], kA = Ue * PA, QA = Ue * pA, yA = zA / (-PA + pA), WA = yA * -PA;
      if (eA.matrixWorld.decompose(Z.position, Z.quaternion, Z.scale), Z.translateX(WA), Z.translateZ(yA), Z.matrixWorld.compose(Z.position, Z.quaternion, Z.scale), Z.matrixWorldInverse.copy(Z.matrixWorld).invert(), xA[10] === -1) Z.projectionMatrix.copy(eA.projectionMatrix), Z.projectionMatrixInverse.copy(eA.projectionMatrixInverse);
      else {
        let C = Ue + yA, re = tA + yA, $A = kA - WA, d = QA + (zA - WA), c = fA * tA / re * C, Q = rA * tA / re * C;
        Z.projectionMatrix.makePerspective($A, d, c, Q, C, re), Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert();
      }
    }
    function TA(Z, eA) {
      eA === null ? Z.matrixWorld.copy(Z.matrix) : Z.matrixWorld.multiplyMatrices(eA.matrixWorld, Z.matrix), Z.matrixWorldInverse.copy(Z.matrixWorld).invert();
    }
    this.updateCamera = function(Z) {
      if (i === null) return;
      let eA = Z.near, HA = Z.far;
      R.texture !== null && (R.depthNear > 0 && (eA = R.depthNear), R.depthFar > 0 && (HA = R.depthFar)), M.near = O.near = N.near = eA, M.far = O.far = N.far = HA, (m !== M.near || k !== M.far) && (i.updateRenderState({ depthNear: M.near, depthFar: M.far }), m = M.near, k = M.far), M.layers.mask = Z.layers.mask | 6, N.layers.mask = M.layers.mask & -5, O.layers.mask = M.layers.mask & -3;
      let zA = Z.parent, xA = M.cameras;
      TA(M, zA);
      for (let MA = 0; MA < xA.length; MA++) TA(xA[MA], zA);
      xA.length === 2 ? oA(M, N, O) : M.projectionMatrix.copy(N.projectionMatrix), B === null && Z.isPerspectiveCamera && (B = { camera: Z, fov: Z.fov, zoom: Z.zoom }), BA(Z, M, zA);
    };
    function BA(Z, eA, HA) {
      HA === null ? Z.matrix.copy(eA.matrixWorld) : (Z.matrix.copy(HA.matrixWorld), Z.matrix.invert(), Z.matrix.multiply(eA.matrixWorld)), Z.matrix.decompose(Z.position, Z.quaternion, Z.scale), Z.updateMatrixWorld(true), Z.projectionMatrix.copy(eA.projectionMatrix), Z.projectionMatrixInverse.copy(eA.projectionMatrixInverse), Z.isPerspectiveCamera && (Z.fov = Di * 2 * Math.atan(1 / Z.projectionMatrix.elements[5]), Z.zoom = 1);
    }
    this.getCamera = function() {
      return M;
    }, this.getFoveation = function() {
      if (!(K === null && U === null)) return r;
    }, this.setFoveation = function(Z) {
      r = Z, K !== null && (K.fixedFoveation = Z), U !== null && U.fixedFoveation !== void 0 && (U.fixedFoveation = Z);
    }, this.hasDepthSensing = function() {
      return R.texture !== null;
    }, this.getDepthSensingMesh = function() {
      return R.getMesh(M);
    }, this.getCameraTexture = function(Z) {
      return F[Z];
    };
    let fe = null;
    function _A(Z, eA) {
      if (s = eA.getViewerPose(P || a), w = eA, s !== null) {
        let HA = s.views;
        U !== null && (A.setRenderTargetFramebuffer(v, U.framebuffer), A.setRenderTarget(v));
        let zA = false;
        HA.length !== M.cameras.length && (M.cameras.length = 0, zA = true);
        for (let tA = 0; tA < HA.length; tA++) {
          let fA = HA[tA], rA = null;
          if (U !== null) rA = U.getViewport(fA);
          else {
            let pA = p.getViewSubImage(K, fA);
            rA = pA.viewport, tA === 0 && (A.setRenderTargetTextures(v, pA.colorTexture, pA.depthStencilTexture), A.setRenderTarget(v));
          }
          let PA = G[tA];
          PA === void 0 && (PA = new Le(), PA.layers.enable(tA), PA.viewport = new pe(), G[tA] = PA), PA.matrix.fromArray(fA.transform.matrix), PA.matrix.decompose(PA.position, PA.quaternion, PA.scale), PA.projectionMatrix.fromArray(fA.projectionMatrix), PA.projectionMatrixInverse.copy(PA.projectionMatrix).invert(), PA.viewport.set(rA.x, rA.y, rA.width, rA.height), tA === 0 && (M.matrix.copy(PA.matrix), M.matrix.decompose(M.position, M.quaternion, M.scale)), zA === true && M.cameras.push(PA);
        }
        let xA = i.enabledFeatures;
        if (xA && xA.includes("depth-sensing") && i.depthUsage == "gpu-optimized" && l) {
          p = t.getBinding();
          let tA = p.getDepthInformation(HA[0]);
          tA && tA.isValid && tA.texture && R.init(tA, i.renderState);
        }
        if (xA && xA.includes("camera-access") && l) {
          A.state.unbindTexture(), p = t.getBinding();
          for (let tA = 0; tA < HA.length; tA++) {
            let fA = HA[tA].camera;
            if (fA) {
              let rA = F[fA];
              rA || (rA = new un(), F[fA] = rA);
              let PA = p.getCameraImage(fA);
              rA.sourceTexture = PA;
            }
          }
        }
      }
      for (let HA = 0; HA < x.length; HA++) {
        let zA = h[HA], xA = x[HA];
        zA !== null && xA !== void 0 && xA.update(zA, eA, P || a);
      }
      fe && fe(Z, eA), eA.detectedPlanes && t.dispatchEvent({ type: "planesdetected", data: eA }), w = null;
    }
    let oe = new Ms();
    oe.setAnimationLoop(_A), this.setAnimationLoop = function(Z) {
      fe = Z;
    }, this.dispose = function() {
    };
  }
}, z1 = new Re(), Js = new VA();
Js.set(-1, 0, 0, 0, 1, 0, 0, 0, 1);
function M1(o22, A) {
  function e(R, F) {
    R.matrixAutoUpdate === true && R.updateMatrix(), F.value.copy(R.matrix);
  }
  function t(R, F) {
    F.color.getRGB(R.fogColor.value, _8(o22)), F.isFog ? (R.fogNear.value = F.near, R.fogFar.value = F.far) : F.isFogExp2 && (R.fogDensity.value = F.density);
  }
  function i(R, F, u, D, v) {
    F.isNodeMaterial ? F.uniformsNeedUpdate = false : F.isMeshBasicMaterial ? n(R, F) : F.isMeshLambertMaterial ? (n(R, F), F.envMap && (R.envMapIntensity.value = F.envMapIntensity)) : F.isMeshToonMaterial ? (n(R, F), p(R, F)) : F.isMeshPhongMaterial ? (n(R, F), s(R, F), F.envMap && (R.envMapIntensity.value = F.envMapIntensity)) : F.isMeshStandardMaterial ? (n(R, F), K(R, F), F.isMeshPhysicalMaterial && U(R, F, v)) : F.isMeshMatcapMaterial ? (n(R, F), w(R, F)) : F.isMeshDepthMaterial ? n(R, F) : F.isMeshDistanceMaterial ? (n(R, F), l(R, F)) : F.isMeshNormalMaterial ? n(R, F) : F.isLineBasicMaterial ? (a(R, F), F.isLineDashedMaterial && f(R, F)) : F.isPointsMaterial ? r(R, F, u, D) : F.isSpriteMaterial ? P(R, F) : F.isShadowMaterial ? (R.color.value.copy(F.color), R.opacity.value = F.opacity) : F.isShaderMaterial && (F.uniformsNeedUpdate = false);
  }
  function n(R, F) {
    R.opacity.value = F.opacity, F.color && R.diffuse.value.copy(F.color), F.emissive && R.emissive.value.copy(F.emissive).multiplyScalar(F.emissiveIntensity), F.map && (R.map.value = F.map, e(F.map, R.mapTransform)), F.alphaMap && (R.alphaMap.value = F.alphaMap, e(F.alphaMap, R.alphaMapTransform)), F.bumpMap && (R.bumpMap.value = F.bumpMap, e(F.bumpMap, R.bumpMapTransform), R.bumpScale.value = F.bumpScale, F.side === Ze && (R.bumpScale.value *= -1)), F.normalMap && (R.normalMap.value = F.normalMap, e(F.normalMap, R.normalMapTransform), R.normalScale.value.copy(F.normalScale), F.side === Ze && R.normalScale.value.negate()), F.displacementMap && (R.displacementMap.value = F.displacementMap, e(F.displacementMap, R.displacementMapTransform), R.displacementScale.value = F.displacementScale, R.displacementBias.value = F.displacementBias), F.emissiveMap && (R.emissiveMap.value = F.emissiveMap, e(F.emissiveMap, R.emissiveMapTransform)), F.specularMap && (R.specularMap.value = F.specularMap, e(F.specularMap, R.specularMapTransform)), F.alphaTest > 0 && (R.alphaTest.value = F.alphaTest);
    let u = A.get(F), D = u.envMap, v = u.envMapRotation;
    D && (R.envMap.value = D, R.envMapRotation.value.setFromMatrix4(z1.makeRotationFromEuler(v)).transpose(), D.isCubeTexture && D.isRenderTargetTexture === false && R.envMapRotation.value.premultiply(Js), R.reflectivity.value = F.reflectivity, R.ior.value = F.ior, R.refractionRatio.value = F.refractionRatio), F.lightMap && (R.lightMap.value = F.lightMap, R.lightMapIntensity.value = F.lightMapIntensity, e(F.lightMap, R.lightMapTransform)), F.aoMap && (R.aoMap.value = F.aoMap, R.aoMapIntensity.value = F.aoMapIntensity, e(F.aoMap, R.aoMapTransform));
  }
  function a(R, F) {
    R.diffuse.value.copy(F.color), R.opacity.value = F.opacity, F.map && (R.map.value = F.map, e(F.map, R.mapTransform));
  }
  function f(R, F) {
    R.dashSize.value = F.dashSize, R.totalSize.value = F.dashSize + F.gapSize, R.scale.value = F.scale;
  }
  function r(R, F, u, D) {
    R.diffuse.value.copy(F.color), R.opacity.value = F.opacity, R.size.value = F.size * u, R.scale.value = D * 0.5, F.map && (R.map.value = F.map, e(F.map, R.uvTransform)), F.alphaMap && (R.alphaMap.value = F.alphaMap, e(F.alphaMap, R.alphaMapTransform)), F.alphaTest > 0 && (R.alphaTest.value = F.alphaTest);
  }
  function P(R, F) {
    R.diffuse.value.copy(F.color), R.opacity.value = F.opacity, R.rotation.value = F.rotation, F.map && (R.map.value = F.map, e(F.map, R.mapTransform)), F.alphaMap && (R.alphaMap.value = F.alphaMap, e(F.alphaMap, R.alphaMapTransform)), F.alphaTest > 0 && (R.alphaTest.value = F.alphaTest);
  }
  function s(R, F) {
    R.specular.value.copy(F.specular), R.shininess.value = Math.max(F.shininess, 1e-4);
  }
  function p(R, F) {
    F.gradientMap && (R.gradientMap.value = F.gradientMap);
  }
  function K(R, F) {
    R.metalness.value = F.metalness, F.metalnessMap && (R.metalnessMap.value = F.metalnessMap, e(F.metalnessMap, R.metalnessMapTransform)), R.roughness.value = F.roughness, F.roughnessMap && (R.roughnessMap.value = F.roughnessMap, e(F.roughnessMap, R.roughnessMapTransform)), F.envMap && (R.envMapIntensity.value = F.envMapIntensity);
  }
  function U(R, F, u) {
    R.ior.value = F.ior, F.sheen > 0 && (R.sheenColor.value.copy(F.sheenColor).multiplyScalar(F.sheen), R.sheenRoughness.value = F.sheenRoughness, F.sheenColorMap && (R.sheenColorMap.value = F.sheenColorMap, e(F.sheenColorMap, R.sheenColorMapTransform)), F.sheenRoughnessMap && (R.sheenRoughnessMap.value = F.sheenRoughnessMap, e(F.sheenRoughnessMap, R.sheenRoughnessMapTransform))), F.clearcoat > 0 && (R.clearcoat.value = F.clearcoat, R.clearcoatRoughness.value = F.clearcoatRoughness, F.clearcoatMap && (R.clearcoatMap.value = F.clearcoatMap, e(F.clearcoatMap, R.clearcoatMapTransform)), F.clearcoatRoughnessMap && (R.clearcoatRoughnessMap.value = F.clearcoatRoughnessMap, e(F.clearcoatRoughnessMap, R.clearcoatRoughnessMapTransform)), F.clearcoatNormalMap && (R.clearcoatNormalMap.value = F.clearcoatNormalMap, e(F.clearcoatNormalMap, R.clearcoatNormalMapTransform), R.clearcoatNormalScale.value.copy(F.clearcoatNormalScale), F.side === Ze && R.clearcoatNormalScale.value.negate())), F.dispersion > 0 && (R.dispersion.value = F.dispersion), F.retroreflectivity > 0 && (R.retroreflectivity.value = F.retroreflectivity), F.iridescence > 0 && (R.iridescence.value = F.iridescence, R.iridescenceIOR.value = F.iridescenceIOR, R.iridescenceThicknessMinimum.value = F.iridescenceThicknessRange[0], R.iridescenceThicknessMaximum.value = F.iridescenceThicknessRange[1], F.iridescenceMap && (R.iridescenceMap.value = F.iridescenceMap, e(F.iridescenceMap, R.iridescenceMapTransform)), F.iridescenceThicknessMap && (R.iridescenceThicknessMap.value = F.iridescenceThicknessMap, e(F.iridescenceThicknessMap, R.iridescenceThicknessMapTransform))), F.transmission > 0 && (R.transmission.value = F.transmission, R.transmissionSamplerMap.value = u.texture, R.transmissionSamplerSize.value.set(u.width, u.height), F.transmissionMap && (R.transmissionMap.value = F.transmissionMap, e(F.transmissionMap, R.transmissionMapTransform)), R.thickness.value = F.thickness, F.thicknessMap && (R.thicknessMap.value = F.thicknessMap, e(F.thicknessMap, R.thicknessMapTransform)), R.attenuationDistance.value = F.attenuationDistance, R.attenuationColor.value.copy(F.attenuationColor)), F.anisotropy > 0 && (R.anisotropyVector.value.set(F.anisotropy * Math.cos(F.anisotropyRotation), F.anisotropy * Math.sin(F.anisotropyRotation)), F.anisotropyMap && (R.anisotropyMap.value = F.anisotropyMap, e(F.anisotropyMap, R.anisotropyMapTransform))), R.specularIntensity.value = F.specularIntensity, R.specularColor.value.copy(F.specularColor), F.specularColorMap && (R.specularColorMap.value = F.specularColorMap, e(F.specularColorMap, R.specularColorMapTransform)), F.specularIntensityMap && (R.specularIntensityMap.value = F.specularIntensityMap, e(F.specularIntensityMap, R.specularIntensityMapTransform));
  }
  function w(R, F) {
    F.matcap && (R.matcap.value = F.matcap);
  }
  function l(R, F) {
    let u = A.get(F).light;
    R.referencePosition.value.setFromMatrixPosition(u.matrixWorld), R.nearDistance.value = u.shadow.camera.near, R.farDistance.value = u.shadow.camera.far;
  }
  return { refreshFogUniforms: t, refreshMaterialUniforms: i };
}
function y1(o22, A, e, t) {
  let i = {}, n = {}, a = [], f = o22.getParameter(o22.MAX_UNIFORM_BUFFER_BINDINGS);
  function r(v, x) {
    let h = x.program;
    t.uniformBlockBinding(v, h);
  }
  function P(v, x) {
    let h = i[v.id];
    h === void 0 && (R(v), h = s(v), i[v.id] = h, v.addEventListener("dispose", u));
    let S = x.program;
    t.updateUBOMapping(v, S);
    let g = A.render.frame;
    n[v.id] !== g && (K(v), n[v.id] = g);
  }
  function s(v) {
    let x = p();
    v.__bindingPointIndex = x;
    let h = o22.createBuffer(), S = v.__size, g = v.usage;
    return o22.bindBuffer(o22.UNIFORM_BUFFER, h), o22.bufferData(o22.UNIFORM_BUFFER, S, g), o22.bindBuffer(o22.UNIFORM_BUFFER, null), o22.bindBufferBase(o22.UNIFORM_BUFFER, x, h), h;
  }
  function p() {
    for (let v = 0; v < f; v++) if (a.indexOf(v) === -1) return a.push(v), v;
    return bA("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function K(v) {
    let x = i[v.id], h = v.uniforms, S = v.__cache;
    o22.bindBuffer(o22.UNIFORM_BUFFER, x);
    for (let g = 0, B = h.length; g < B; g++) {
      let N = h[g];
      if (Array.isArray(N)) for (let O = 0, G = N.length; O < G; O++) U(N[O], g, O, S);
      else U(N, g, 0, S);
    }
    o22.bindBuffer(o22.UNIFORM_BUFFER, null);
  }
  function U(v, x, h, S) {
    if (l(v, x, h, S) === true) {
      let g = v.__offset, B = v.value;
      if (Array.isArray(B)) {
        let N = 0;
        for (let O = 0; O < B.length; O++) {
          let G = B[O], M = F(G);
          w(G, v.__data, N), typeof G != "number" && typeof G != "boolean" && !G.isMatrix3 && !ArrayBuffer.isView(G) && (N += M.storage / Float32Array.BYTES_PER_ELEMENT);
        }
      } else w(B, v.__data, 0);
      o22.bufferSubData(o22.UNIFORM_BUFFER, g, v.__data);
    }
  }
  function w(v, x, h) {
    typeof v == "number" || typeof v == "boolean" ? x[0] = v : v.isMatrix3 ? (x[0] = v.elements[0], x[1] = v.elements[1], x[2] = v.elements[2], x[3] = 0, x[4] = v.elements[3], x[5] = v.elements[4], x[6] = v.elements[5], x[7] = 0, x[8] = v.elements[6], x[9] = v.elements[7], x[10] = v.elements[8], x[11] = 0) : ArrayBuffer.isView(v) ? x.set(new v.constructor(v.buffer, v.byteOffset, x.length)) : v.toArray(x, h);
  }
  function l(v, x, h, S) {
    let g = v.value, B = x + "_" + h;
    if (S[B] === void 0) return typeof g == "number" || typeof g == "boolean" ? S[B] = g : ArrayBuffer.isView(g) ? S[B] = g.slice() : S[B] = g.clone(), true;
    {
      let N = S[B];
      if (typeof g == "number" || typeof g == "boolean") {
        if (N !== g) return S[B] = g, true;
      } else {
        if (ArrayBuffer.isView(g)) return true;
        if (N.equals(g) === false) return N.copy(g), true;
      }
    }
    return false;
  }
  function R(v) {
    let x = v.uniforms, h = 0, S = 16;
    for (let B = 0, N = x.length; B < N; B++) {
      let O = Array.isArray(x[B]) ? x[B] : [x[B]];
      for (let G = 0, M = O.length; G < M; G++) {
        let m = O[G], k = Array.isArray(m.value) ? m.value : [m.value];
        for (let W = 0, V = k.length; W < V; W++) {
          let aA = k[W], q = F(aA), AA = h % S, oA = AA % q.boundary, TA = AA + oA;
          h += oA, TA !== 0 && S - TA < q.storage && (h += S - TA), m.__data = new Float32Array(q.storage / Float32Array.BYTES_PER_ELEMENT), m.__offset = h, h += q.storage;
        }
      }
    }
    let g = h % S;
    return g > 0 && (h += S - g), v.__size = h, v.__cache = {}, this;
  }
  function F(v) {
    let x = { boundary: 0, storage: 0 };
    return typeof v == "number" || typeof v == "boolean" ? (x.boundary = 4, x.storage = 4) : v.isVector2 ? (x.boundary = 8, x.storage = 8) : v.isVector3 || v.isColor ? (x.boundary = 16, x.storage = 12) : v.isVector4 ? (x.boundary = 16, x.storage = 16) : v.isMatrix3 ? (x.boundary = 48, x.storage = 48) : v.isMatrix4 ? (x.boundary = 64, x.storage = 64) : v.isTexture ? GA("WebGLRenderer: Texture samplers can not be part of an uniforms group.") : ArrayBuffer.isView(v) ? (x.boundary = 16, x.storage = v.byteLength) : GA("WebGLRenderer: Unsupported uniform value type.", v), x;
  }
  function u(v) {
    let x = v.target;
    x.removeEventListener("dispose", u);
    let h = a.indexOf(x.__bindingPointIndex);
    a.splice(h, 1), o22.deleteBuffer(i[x.id]), delete i[x.id], delete n[x.id];
  }
  function D() {
    for (let v in i) o22.deleteBuffer(i[v]);
    a = [], i = {}, n = {};
  }
  return { bind: r, update: P, dispose: D };
}
var L1 = new Uint16Array([12469, 15057, 12620, 14925, 13266, 14620, 13807, 14376, 14323, 13990, 14545, 13625, 14713, 13328, 14840, 12882, 14931, 12528, 14996, 12233, 15039, 11829, 15066, 11525, 15080, 11295, 15085, 10976, 15082, 10705, 15073, 10495, 13880, 14564, 13898, 14542, 13977, 14430, 14158, 14124, 14393, 13732, 14556, 13410, 14702, 12996, 14814, 12596, 14891, 12291, 14937, 11834, 14957, 11489, 14958, 11194, 14943, 10803, 14921, 10506, 14893, 10278, 14858, 9960, 14484, 14039, 14487, 14025, 14499, 13941, 14524, 13740, 14574, 13468, 14654, 13106, 14743, 12678, 14818, 12344, 14867, 11893, 14889, 11509, 14893, 11180, 14881, 10751, 14852, 10428, 14812, 10128, 14765, 9754, 14712, 9466, 14764, 13480, 14764, 13475, 14766, 13440, 14766, 13347, 14769, 13070, 14786, 12713, 14816, 12387, 14844, 11957, 14860, 11549, 14868, 11215, 14855, 10751, 14825, 10403, 14782, 10044, 14729, 9651, 14666, 9352, 14599, 9029, 14967, 12835, 14966, 12831, 14963, 12804, 14954, 12723, 14936, 12564, 14917, 12347, 14900, 11958, 14886, 11569, 14878, 11247, 14859, 10765, 14828, 10401, 14784, 10011, 14727, 9600, 14660, 9289, 14586, 8893, 14508, 8533, 15111, 12234, 15110, 12234, 15104, 12216, 15092, 12156, 15067, 12010, 15028, 11776, 14981, 11500, 14942, 11205, 14902, 10752, 14861, 10393, 14812, 9991, 14752, 9570, 14682, 9252, 14603, 8808, 14519, 8445, 14431, 8145, 15209, 11449, 15208, 11451, 15202, 11451, 15190, 11438, 15163, 11384, 15117, 11274, 15055, 10979, 14994, 10648, 14932, 10343, 14871, 9936, 14803, 9532, 14729, 9218, 14645, 8742, 14556, 8381, 14461, 8020, 14365, 7603, 15273, 10603, 15272, 10607, 15267, 10619, 15256, 10631, 15231, 10614, 15182, 10535, 15118, 10389, 15042, 10167, 14963, 9787, 14883, 9447, 14800, 9115, 14710, 8665, 14615, 8318, 14514, 7911, 14411, 7507, 14279, 7198, 15314, 9675, 15313, 9683, 15309, 9712, 15298, 9759, 15277, 9797, 15229, 9773, 15166, 9668, 15084, 9487, 14995, 9274, 14898, 8910, 14800, 8539, 14697, 8234, 14590, 7790, 14479, 7409, 14367, 7067, 14178, 6621, 15337, 8619, 15337, 8631, 15333, 8677, 15325, 8769, 15305, 8871, 15264, 8940, 15202, 8909, 15119, 8775, 15022, 8565, 14916, 8328, 14804, 8009, 14688, 7614, 14569, 7287, 14448, 6888, 14321, 6483, 14088, 6171, 15350, 7402, 15350, 7419, 15347, 7480, 15340, 7613, 15322, 7804, 15287, 7973, 15229, 8057, 15148, 8012, 15046, 7846, 14933, 7611, 14810, 7357, 14682, 7069, 14552, 6656, 14421, 6316, 14251, 5948, 14007, 5528, 15356, 5942, 15356, 5977, 15353, 6119, 15348, 6294, 15332, 6551, 15302, 6824, 15249, 7044, 15171, 7122, 15070, 7050, 14949, 6861, 14818, 6611, 14679, 6349, 14538, 6067, 14398, 5651, 14189, 5311, 13935, 4958, 15359, 4123, 15359, 4153, 15356, 4296, 15353, 4646, 15338, 5160, 15311, 5508, 15263, 5829, 15188, 6042, 15088, 6094, 14966, 6001, 14826, 5796, 14678, 5543, 14527, 5287, 14377, 4985, 14133, 4586, 13869, 4257, 15360, 1563, 15360, 1642, 15358, 2076, 15354, 2636, 15341, 3350, 15317, 4019, 15273, 4429, 15203, 4732, 15105, 4911, 14981, 4932, 14836, 4818, 14679, 4621, 14517, 4386, 14359, 4156, 14083, 3795, 13808, 3437, 15360, 122, 15360, 137, 15358, 285, 15355, 636, 15344, 1274, 15322, 2177, 15281, 2765, 15215, 3223, 15120, 3451, 14995, 3569, 14846, 3567, 14681, 3466, 14511, 3305, 14344, 3121, 14037, 2800, 13753, 2467, 15360, 0, 15360, 1, 15359, 21, 15355, 89, 15346, 253, 15325, 479, 15287, 796, 15225, 1148, 15133, 1492, 15008, 1749, 14856, 1882, 14685, 1886, 14506, 1783, 14324, 1608, 13996, 1398, 13702, 1183]), qt = null;
function V1() {
  return qt === null && (qt = new Ea(L1, 16, 16, Xo, Ct), qt.name = "DFG_LUT", qt.minFilter = Oe, qt.magFilter = Oe, qt.wrapS = kt, qt.wrapT = kt, qt.generateMipmaps = false, qt.needsUpdate = true), qt;
}
var Rr = class {
  constructor(A = {}) {
    let { canvas: e = Ps(), context: t = null, depth: i = true, stencil: n = false, alpha: a = false, antialias: f = false, premultipliedAlpha: r = true, preserveDrawingBuffer: P = false, powerPreference: s = "default", failIfMajorPerformanceCaveat: p = false, reversedDepthBuffer: K = false, outputBufferType: U = et } = A;
    this.isWebGLRenderer = true;
    let w;
    if (t !== null) {
      if (typeof WebGLRenderingContext < "u" && t instanceof WebGLRenderingContext) throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
      w = t.getContextAttributes().alpha;
    } else w = a;
    let l = U, R = /* @__PURE__ */ new Set([Cf, Nf, Sf]), F = /* @__PURE__ */ new Set([et, St, zi, Mi, Bf, jf]), u = new Uint32Array(4), D = new Int32Array(4), v = new j(), x = null, h = null, S = [], g = [], B = null;
    this.domElement = e, this.debug = { checkShaderErrors: true, diagnostics: { keywords: false }, onShaderError: null }, this.autoClear = true, this.autoClearColor = true, this.autoClearDepth = true, this.autoClearStencil = true, this.sortObjects = true, this.clippingPlanes = [], this.localClippingEnabled = false, this.toneMapping = jt, this.toneMappingExposure = 1, this.transmissionResolutionScale = 1;
    let N = this, O = false, G = null, M = null, m = null, k = null;
    this._outputColorSpace = nt;
    let W = 0, V = 0, aA = null, q = -1, AA = null, oA = new pe(), TA = new pe(), BA = null, fe = new JA(0), _A = 0, oe = e.width, Z = e.height, eA = 1, HA = null, zA = null, xA = new pe(0, 0, oe, Z), MA = new pe(0, 0, oe, Z), Ue = false, tA = new Ci(), fA = false, rA = false, PA = new Re(), pA = new j(), kA = new pe(), QA = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: true }, yA = false;
    function WA() {
      return aA === null ? eA : 1;
    }
    let C = t;
    function re(H, T) {
      return e.getContext(H, T);
    }
    let $A, d, c, Q, z, J, KA, sA, E, $, RA, mA, gA, wA, XA, IA, qA, X, cA, _, lA, dA, iA;
    try {
      let H = { alpha: true, depth: i, stencil: n, antialias: f, premultipliedAlpha: r, preserveDrawingBuffer: P, powerPreference: s, failIfMajorPerformanceCaveat: p };
      if ("setAttribute" in e && e.setAttribute("data-engine", `three.js r${"186"}`), e.addEventListener("webglcontextlost", ge, false), e.addEventListener("webglcontextrestored", Pe, false), e.addEventListener("webglcontextcreationerror", Ht, false), C === null) {
        let T = "webgl2";
        if (C = re(T, H), C === null) throw re(T) ? new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.") : new Error("THREE.WebGLRenderer: Error creating WebGL context.");
      }
      OA();
    } catch (H) {
      throw e.removeEventListener("webglcontextlost", ge, false), e.removeEventListener("webglcontextrestored", Pe, false), e.removeEventListener("webglcontextcreationerror", Ht, false), bA("WebGLRenderer: " + H.message), H;
    }
    function OA() {
      $A = new _F(C), $A.init(), lA = new k1(C, $A), d = new MF(C, $A, A, lA), c = new Q1(C, $A), d.reversedDepthBuffer && K && c.buffers.depth.setReversed(true), M = C.createFramebuffer(), m = C.createFramebuffer(), k = C.createFramebuffer(), Q = new eR(C), z = new u1(), J = new G1(C, $A, c, z, d, lA, Q), KA = new YF(N), sA = new oU(C), dA = new bF(C, sA), E = new $F(C, sA, Q, dA), $ = new oR(C, E, sA, dA, Q), X = new tR(C, d, J), XA = new yF(z), RA = new v1(N, KA, $A, d, dA, XA), mA = new M1(N, z), gA = new x1(), wA = new N1($A), qA = new IF(N, KA, c, $, w, r), IA = new O1(N, $, d), iA = new y1(C, Q, d, c), cA = new zF(C, $A, Q), _ = new AR(C, $A, Q), Q.programs = RA.programs, N.capabilities = d, N.extensions = $A, N.properties = z, N.renderLists = gA, N.shadowMap = IA, N.state = c, N.info = Q;
    }
    l !== et && (B = new nR(l, e.width, e.height, f, i, n));
    let NA = new wP(N, C);
    this.xr = NA, this.getContext = function() {
      return C;
    }, this.getContextAttributes = function() {
      return C.getContextAttributes();
    }, this.forceContextLoss = function() {
      let H = $A.get("WEBGL_lose_context");
      H && H.loseContext();
    }, this.forceContextRestore = function() {
      let H = $A.get("WEBGL_lose_context");
      H && H.restoreContext();
    }, this.getPixelRatio = function() {
      return eA;
    }, this.setPixelRatio = function(H) {
      H !== void 0 && (eA = H, this.setSize(oe, Z, false));
    }, this.getSize = function(H) {
      return H.set(oe, Z);
    }, this.setSize = function(H, T, L = true) {
      if (NA.isPresenting) {
        GA("WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      oe = H, Z = T, e.width = Math.floor(H * eA), e.height = Math.floor(T * eA), L === true && (e.style.width = H + "px", e.style.height = T + "px"), B !== null && B.setSize(e.width, e.height), this.setViewport(0, 0, H, T);
    }, this.getDrawingBufferSize = function(H) {
      return H.set(oe * eA, Z * eA).floor();
    }, this.setDrawingBufferSize = function(H, T, L) {
      oe = H, Z = T, eA = L, e.width = Math.floor(H * L), e.height = Math.floor(T * L), this.setViewport(0, 0, H, T);
    }, this.setEffects = function(H) {
      if (l === et) {
        bA("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");
        return;
      }
      if (H) {
        for (let T = 0; T < H.length; T++) if (H[T].isOutputPass === true) {
          GA("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");
          break;
        }
      }
      B.setEffects(H || []);
    }, this.getCurrentViewport = function(H) {
      return H.copy(oA);
    }, this.getViewport = function(H) {
      return H.copy(xA);
    }, this.setViewport = function(H, T, L, I) {
      H.isVector4 ? xA.set(H.x, H.y, H.z, H.w) : xA.set(H, T, L, I), c.viewport(oA.copy(xA).multiplyScalar(eA).round());
    }, this.getScissor = function(H) {
      return H.copy(MA);
    }, this.setScissor = function(H, T, L, I) {
      H.isVector4 ? MA.set(H.x, H.y, H.z, H.w) : MA.set(H, T, L, I), c.scissor(TA.copy(MA).multiplyScalar(eA).round());
    }, this.getScissorTest = function() {
      return Ue;
    }, this.setScissorTest = function(H) {
      c.setScissorTest(Ue = H);
    }, this.setOpaqueSort = function(H) {
      HA = H;
    }, this.setTransparentSort = function(H) {
      zA = H;
    }, this.getClearColor = function(H) {
      return H.copy(qA.getClearColor());
    }, this.setClearColor = function() {
      qA.setClearColor(...arguments);
    }, this.getClearAlpha = function() {
      return qA.getClearAlpha();
    }, this.setClearAlpha = function() {
      qA.setClearAlpha(...arguments);
    }, this.clear = function(H = true, T = true, L = true) {
      let I = 0;
      if (H) {
        let b = false;
        if (aA !== null) {
          let uA = aA.texture.format;
          b = R.has(uA);
        }
        if (b) {
          let uA = aA.texture.type, DA = F.has(uA), vA = qA.getClearColor(), jA = qA.getClearAlpha(), CA = vA.r, EA = vA.g, Ae = vA.b;
          DA ? (u[0] = CA, u[1] = EA, u[2] = Ae, u[3] = jA, C.clearBufferuiv(C.COLOR, 0, u)) : (D[0] = CA, D[1] = EA, D[2] = Ae, D[3] = jA, C.clearBufferiv(C.COLOR, 0, D));
        } else I |= C.COLOR_BUFFER_BIT;
      }
      T && (I |= C.DEPTH_BUFFER_BIT, this.state.buffers.depth.setMask(true)), L && (I |= C.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), I !== 0 && C.clear(I);
    }, this.clearColor = function() {
      this.clear(true, false, false);
    }, this.clearDepth = function() {
      this.clear(false, true, false);
    }, this.clearStencil = function() {
      this.clear(false, false, true);
    }, this.setNodesHandler = function(H) {
      H.setRenderer(this), G = H;
    }, this.dispose = function() {
      e.removeEventListener("webglcontextlost", ge, false), e.removeEventListener("webglcontextrestored", Pe, false), e.removeEventListener("webglcontextcreationerror", Ht, false), qA.dispose(), gA.dispose(), wA.dispose(), z.dispose(), KA.dispose(), $.dispose(), dA.dispose(), iA.dispose(), RA.dispose(), NA.dispose(), NA.removeEventListener("sessionstart", kP), NA.removeEventListener("sessionend", IP), ko.stop();
    };
    function ge(H) {
      H.preventDefault(), Rn("WebGLRenderer: Context Lost."), O = true;
    }
    function Pe() {
      Rn("WebGLRenderer: Context Restored."), O = false;
      let H = Q.autoReset, T = IA.enabled, L = IA.autoUpdate, I = IA.needsUpdate, b = IA.type;
      OA(), Q.autoReset = H, IA.enabled = T, IA.autoUpdate = L, IA.needsUpdate = I, IA.type = b;
    }
    function Ht(H) {
      bA("WebGLRenderer: A WebGL context could not be created. Reason: ", H.statusMessage);
    }
    function Ot(H) {
      let T = H.target;
      T.removeEventListener("dispose", Ot), x0(T);
    }
    function x0(H) {
      h0(H), z.remove(H);
    }
    function h0(H) {
      let T = z.get(H).programs;
      T !== void 0 && (T.forEach(function(L) {
        RA.releaseProgram(L);
      }), H.isShaderMaterial && RA.releaseShaderCache(H));
    }
    this.renderBufferDirect = function(H, T, L, I, b, uA) {
      T === null && (T = QA);
      let DA = b.isMesh && b.matrixWorld.determinantAffine() < 0, vA = j0(H, T, L, I, b);
      c.setMaterial(I, DA);
      let jA = L.index, CA = 1;
      if (I.wireframe === true) {
        if (jA = E.getWireframeAttribute(L), jA === void 0) return;
        CA = 2;
      }
      let EA = L.drawRange, Ae = L.attributes.position, SA = EA.start * CA, Ke = (EA.start + EA.count) * CA;
      uA !== null && (SA = Math.max(SA, uA.start * CA), Ke = Math.min(Ke, (uA.start + uA.count) * CA)), jA !== null ? (SA = Math.max(SA, 0), Ke = Math.min(Ke, jA.count)) : Ae != null && (SA = Math.max(SA, 0), Ke = Math.min(Ke, Ae.count));
      let Be = Ke - SA;
      if (Be < 0 || Be === 1 / 0) return;
      dA.setup(b, I, vA, L, jA);
      let ve, le = cA;
      if (jA !== null && (ve = sA.get(jA), le = _, le.setIndex(ve)), b.isMesh) I.wireframe === true ? (c.setLineWidth(I.wireframeLinewidth * WA()), le.setMode(C.LINES)) : le.setMode(C.TRIANGLES);
      else if (b.isLine) {
        let ze = I.linewidth;
        ze === void 0 && (ze = 1), c.setLineWidth(ze * WA()), b.isLineSegments ? le.setMode(C.LINES) : b.isLineLoop ? le.setMode(C.LINE_LOOP) : le.setMode(C.LINE_STRIP);
      } else b.isPoints ? le.setMode(C.POINTS) : b.isSprite && le.setMode(C.TRIANGLES);
      if (b.isBatchedMesh) if ($A.get("WEBGL_multi_draw")) le.renderMultiDraw(b._multiDrawStarts, b._multiDrawCounts, b._multiDrawCount);
      else {
        let ze = b._multiDrawStarts, hA = b._multiDrawCounts, We = b._multiDrawCount, ie = jA ? sA.get(jA).bytesPerElement : 1, Ut = z.get(I).currentProgram.getUniforms();
        for (let Qt = 0; Qt < We; Qt++) Ut.setValue(C, "_gl_DrawID", Qt), le.render(ze[Qt] / ie, hA[Qt]);
      }
      else if (b.isInstancedMesh) le.renderInstances(SA, Be, b.count);
      else if (L.isInstancedBufferGeometry) {
        let ze = L._maxInstanceCount !== void 0 ? L._maxInstanceCount : 1 / 0, hA = Math.min(L.instanceCount, ze);
        le.renderInstances(SA, Be, hA);
      } else le.render(SA, Be);
    };
    function GP(H, T, L, I) {
      G !== null && H.isNodeMaterial && G.setObject(I, H), fA === true && XA.setState(H, L, false), H.transparent === true && H.side === Ye && H.forceSinglePass === false ? (H.side = Ze, H.needsUpdate = true, fa(H, T, I), H.side = No, H.needsUpdate = true, fa(H, T, I), H.side = Ye) : fa(H, T, I);
    }
    this.compile = function(H, T, L = null) {
      L === null && (L = H), G !== null && G.renderStart(H, T, L), h = wA.get(L), h.init(T), g.push(h), L.traverseVisible(function(b) {
        b.isLight && b.layers.test(T.layers) && (h.pushLight(b), b.castShadow && h.pushShadow(b));
      }), H !== L && H.traverseVisible(function(b) {
        b.isLight && b.layers.test(T.layers) && (h.pushLight(b), b.castShadow && h.pushShadow(b));
      }), h.setupLights(), G !== null && G.updateLights(h.state.lightsArray), rA = this.localClippingEnabled, fA = XA.init(this.clippingPlanes, rA), fA === true && XA.setGlobalState(this.clippingPlanes, T), G !== null && IA.render(h.state.shadowsArray, L, T);
      let I = /* @__PURE__ */ new Set();
      return H.traverse(function(b) {
        if (!(b.isMesh || b.isPoints || b.isLine || b.isSprite)) return;
        let uA = b.material;
        if (uA) if (Array.isArray(uA)) for (let DA = 0; DA < uA.length; DA++) {
          let vA = uA[DA];
          GP(vA, L, T, b), I.add(vA);
        }
        else GP(uA, L, T, b), I.add(uA);
      }), h = g.pop(), G !== null && G.renderEnd(), I;
    }, this.compileAsync = function(H, T, L = null) {
      let I = this.compile(H, T, L);
      return new Promise((b) => {
        function uA() {
          if (I.forEach(function(DA) {
            let jA = z.get(DA).currentProgram;
            (jA === void 0 || jA.isReady()) && I.delete(DA);
          }), I.size === 0) {
            b(H);
            return;
          }
          setTimeout(uA, 10);
        }
        $A.get("KHR_parallel_shader_compile") !== null ? uA() : setTimeout(uA, 10);
      });
    };
    let kr = null;
    function D0(H) {
      kr && kr(H);
    }
    function kP() {
      ko.stop();
    }
    function IP() {
      ko.start();
    }
    let ko = new Ms();
    ko.setAnimationLoop(D0), typeof self < "u" && ko.setContext(self), this.setAnimationLoop = function(H) {
      kr = H, NA.setAnimationLoop(H), H === null ? ko.stop() : ko.start();
    }, NA.addEventListener("sessionstart", kP), NA.addEventListener("sessionend", IP), this.render = function(H, T) {
      if (T !== void 0 && T.isCamera !== true) {
        bA("WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (O === true) return;
      G !== null && G.renderStart(H, T);
      let L = NA.enabled === true && NA.isPresenting === true, I = B !== null && (aA === null || L) && B.begin(N, aA);
      if (H.matrixWorldAutoUpdate === true && H.updateMatrixWorld(), T.parent === null && T.matrixWorldAutoUpdate === true && T.updateMatrixWorld(), NA.enabled === true && NA.isPresenting === true && (B === null || B.isCompositing() === false) && (NA.cameraAutoUpdate === true && NA.updateCamera(T), T = NA.getCamera()), H.isScene === true && H.onBeforeRender(N, H, T, aA), h = wA.get(H, g.length), h.init(T), h.state.textureUnits = J.getTextureUnits(), g.push(h), PA.multiplyMatrices(T.projectionMatrix, T.matrixWorldInverse), tA.setFromProjectionMatrix(PA, ht, T.reversedDepth), rA = this.localClippingEnabled, fA = XA.init(this.clippingPlanes, rA), x = gA.get(H, S.length), x.init(), S.push(x), NA.enabled === true && NA.isPresenting === true) {
        let DA = N.xr.getDepthSensingMesh();
        DA !== null && Ir(DA, T, -1 / 0, N.sortObjects);
      }
      Ir(H, T, 0, N.sortObjects), x.finish(), G !== null && G.updateLights(h.state.lightsArray), N.sortObjects === true && x.sort(HA, zA), yA = NA.enabled === false || NA.isPresenting === false || NA.hasDepthSensing() === false, yA && qA.addToRenderList(x, H), this.info.render.frame++, this.info.autoReset === true && this.info.reset(), fA === true && XA.beginShadows();
      let b = h.state.shadowsArray;
      if (IA.render(b, H, T), fA === true && XA.endShadows(), (I && B.hasRenderPass()) === false) {
        let DA = x.opaque, vA = x.transmissive;
        if (h.setupLights(), T.isArrayCamera) {
          let jA = T.cameras;
          if (vA.length > 0) for (let CA = 0, EA = jA.length; CA < EA; CA++) {
            let Ae = jA[CA];
            zP(DA, vA, H, Ae);
          }
          yA && qA.render(H);
          for (let CA = 0, EA = jA.length; CA < EA; CA++) {
            let Ae = jA[CA];
            bP(x, H, Ae, Ae.viewport);
          }
        } else vA.length > 0 && zP(DA, vA, H, T), yA && qA.render(H), bP(x, H, T);
      }
      aA !== null && V === 0 && (J.updateMultisampleRenderTarget(aA), J.updateRenderTargetMipmap(aA)), I && B.end(N), H.isScene === true && H.onAfterRender(N, H, T), dA.resetDefaultState(), q = -1, AA = null, g.pop(), g.length > 0 ? (h = g[g.length - 1], J.setTextureUnits(h.state.textureUnits), fA === true && XA.setGlobalState(N.clippingPlanes, h.state.camera)) : h = null, S.pop(), S.length > 0 ? x = S[S.length - 1] : x = null, G !== null && G.renderEnd();
    };
    function Ir(H, T, L, I) {
      if (H.visible === false) return;
      if (H.layers.test(T.layers)) {
        if (H.isGroup) L = H.renderOrder;
        else if (H.isLOD) H.autoUpdate === true && H.update(T);
        else if (H.isLightProbeGrid) h.pushLightProbeGrid(H);
        else if (H.isLight) h.pushLight(H), H.castShadow && h.pushShadow(H);
        else if (H.isSprite) {
          if (!H.frustumCulled || H.intersectsFrustum(tA)) {
            I && kA.setFromMatrixPosition(H.matrixWorld).applyMatrix4(PA);
            let DA = $.update(H), vA = H.material;
            vA.visible && x.push(H, DA, vA, L, kA.z, null, T);
          }
        } else if ((H.isMesh || H.isLine || H.isPoints) && (!H.frustumCulled || H.intersectsFrustum(tA))) {
          let DA = $.update(H), vA = H.material;
          if (I && (H.boundingSphere !== void 0 ? (H.boundingSphere === null && H.computeBoundingSphere(), kA.copy(H.boundingSphere.center)) : (DA.boundingSphere === null && DA.computeBoundingSphere(), kA.copy(DA.boundingSphere.center)), kA.applyMatrix4(H.matrixWorld).applyMatrix4(PA)), Array.isArray(vA)) {
            let jA = DA.groups;
            for (let CA = 0, EA = jA.length; CA < EA; CA++) {
              let Ae = jA[CA], SA = vA[Ae.materialIndex];
              SA && SA.visible && x.push(H, DA, SA, L, kA.z, Ae, T);
            }
          } else vA.visible && x.push(H, DA, vA, L, kA.z, null, T);
        }
      }
      let uA = H.children;
      for (let DA = 0, vA = uA.length; DA < vA; DA++) Ir(uA[DA], T, L, I);
    }
    function bP(H, T, L, I) {
      let { opaque: b, transmissive: uA, transparent: DA } = H;
      h.setupLightsView(L), fA === true && XA.setGlobalState(N.clippingPlanes, L), I && c.viewport(oA.copy(I)), b.length > 0 && aa(b, T, L), uA.length > 0 && aa(uA, T, L), DA.length > 0 && aa(DA, T, L), c.buffers.depth.setTest(true), c.buffers.depth.setMask(true), c.buffers.color.setMask(true), c.setPolygonOffset(false);
    }
    function zP(H, T, L, I) {
      if ((L.isScene === true ? L.overrideMaterial : null) !== null) return;
      if (h.state.transmissionRenderTarget[I.id] === void 0) {
        let SA = $A.has("EXT_color_buffer_half_float") || $A.has("EXT_color_buffer_float");
        h.state.transmissionRenderTarget[I.id] = new At(1, 1, { generateMipmaps: true, type: SA ? Ct : et, minFilter: To, samples: Math.max(4, d.samples), stencilBuffer: n, resolveDepthBuffer: false, resolveStencilBuffer: false, storeMultisampledDepthBuffer: false, storeMultisampledStencilBuffer: false, colorSpace: ee.workingColorSpace });
      }
      let uA = h.state.transmissionRenderTarget[I.id], DA = I.viewport || oA;
      uA.setSize(DA.z * N.transmissionResolutionScale, DA.w * N.transmissionResolutionScale);
      let vA = N.getRenderTarget(), jA = N.getActiveCubeFace(), CA = N.getActiveMipmapLevel();
      N.setRenderTarget(uA), N.getClearColor(fe), _A = N.getClearAlpha(), _A < 1 && N.setClearColor(16777215, 0.5), N.clear(), yA && qA.render(L);
      let EA = N.toneMapping;
      N.toneMapping = jt;
      let Ae = I.viewport;
      if (I.viewport !== void 0 && (I.viewport = void 0), h.setupLightsView(I), fA === true && XA.setGlobalState(N.clippingPlanes, I), aa(H, L, I), J.updateMultisampleRenderTarget(uA), J.updateRenderTargetMipmap(uA), $A.has("WEBGL_multisampled_render_to_texture") === false) {
        let SA = false;
        for (let Ke = 0, Be = T.length; Ke < Be; Ke++) {
          let ve = T[Ke], { object: le, geometry: ze, material: hA, group: We } = ve;
          if (hA.side === Ye && le.layers.test(I.layers)) {
            let ie = hA.side;
            hA.side = Ze, hA.needsUpdate = true, MP(le, L, I, ze, hA, We), hA.side = ie, hA.needsUpdate = true, SA = true;
          }
        }
        SA === true && (J.updateMultisampleRenderTarget(uA), J.updateRenderTargetMipmap(uA));
      }
      N.setRenderTarget(vA, jA, CA), N.setClearColor(fe, _A), Ae !== void 0 && (I.viewport = Ae), N.toneMapping = EA;
    }
    function aa(H, T, L) {
      let I = T.isScene === true ? T.overrideMaterial : null;
      for (let b = 0, uA = H.length; b < uA; b++) {
        let DA = H[b], { object: vA, geometry: jA, group: CA } = DA, EA = DA.material;
        EA.allowOverride === true && I !== null && (EA = I), vA.layers.test(L.layers) && MP(vA, T, L, jA, EA, CA);
      }
    }
    function MP(H, T, L, I, b, uA) {
      G !== null && b.isNodeMaterial && G.setObject(H, b), H.onBeforeRender(N, T, L, I, b, uA), H.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse, H.matrixWorld), H.normalMatrix.getNormalMatrix(H.modelViewMatrix), b.onBeforeRender(N, T, L, I, H, uA), b.transparent === true && b.side === Ye && b.forceSinglePass === false ? (b.side = Ze, b.needsUpdate = true, N.renderBufferDirect(L, T, I, b, H, uA), b.side = No, b.needsUpdate = true, N.renderBufferDirect(L, T, I, b, H, uA), b.side = Ye) : N.renderBufferDirect(L, T, I, b, H, uA), H.onAfterRender(N, T, L, I, b, uA);
    }
    function fa(H, T, L) {
      T.isScene !== true && (T = QA);
      let I = z.get(H), b = h.state.lights, uA = h.state.shadowsArray, DA = b.state.version, vA = RA.getParameters(H, b.state, uA, T, L, h.state.lightProbeGridArray), jA = RA.getProgramCacheKey(vA), CA = I.programs;
      I.environment = H.isMeshStandardMaterial || H.isMeshLambertMaterial || H.isMeshPhongMaterial ? T.environment : null, I.fog = T.fog;
      let EA = H.isMeshStandardMaterial || H.isMeshLambertMaterial && !H.envMap || H.isMeshPhongMaterial && !H.envMap;
      I.envMap = KA.get(H.envMap || I.environment, EA), I.envMapRotation = I.environment !== null && H.envMap === null ? T.environmentRotation : H.envMapRotation, CA === void 0 && (H.addEventListener("dispose", Ot), CA = /* @__PURE__ */ new Map(), I.programs = CA);
      let Ae = CA.get(jA);
      if (Ae !== void 0) {
        if (I.currentProgram === Ae && I.lightsStateVersion === DA) return LP(H, vA), Ae;
      } else vA.uniforms = RA.getUniforms(H), G !== null && H.isNodeMaterial && G.build(H, L, vA), H.onBeforeCompile(vA, N), Ae = RA.acquireProgram(vA, jA), CA.set(jA, Ae), I.uniforms = vA.uniforms;
      let SA = I.uniforms;
      return (!H.isShaderMaterial && !H.isRawShaderMaterial || H.clipping === true) && (SA.clippingPlanes = XA.uniform), LP(H, vA), I.needsLights = N0(H), I.lightsStateVersion = DA, I.needsLights && (SA.ambientLightColor.value = b.state.ambient, SA.lightProbe.value = b.state.probe, SA.sunLights.value = b.state.sun, SA.sunLightShadows.value = b.state.sunShadow, SA.directionalLights.value = b.state.directional, SA.directionalLightShadows.value = b.state.directionalShadow, SA.spotLights.value = b.state.spot, SA.spotLightShadows.value = b.state.spotShadow, SA.rectAreaLights.value = b.state.rectArea, SA.ltc_1.value = b.state.rectAreaLTC1, SA.ltc_2.value = b.state.rectAreaLTC2, SA.pointLights.value = b.state.point, SA.pointLightShadows.value = b.state.pointShadow, SA.hemisphereLights.value = b.state.hemi, SA.sunShadowMatrix.value = b.state.sunShadowMatrix, SA.sunShadowCascade.value = b.state.sunShadowCascade, SA.directionalShadowMatrix.value = b.state.directionalShadowMatrix, SA.spotLightMatrix.value = b.state.spotLightMatrix, SA.spotLightMap.value = b.state.spotLightMap, SA.pointShadowMatrix.value = b.state.pointShadowMatrix), I.lightProbeGrid = h.state.lightProbeGridArray.length > 0, I.currentProgram = Ae, I.uniformsList = null, Ae;
    }
    function yP(H) {
      if (H.uniformsList === null) {
        let T = H.currentProgram.getUniforms();
        H.uniformsList = Vi.seqWithValue(T.seq, H.uniforms);
      }
      return H.uniformsList;
    }
    function LP(H, T) {
      let L = z.get(H);
      L.outputColorSpace = T.outputColorSpace, L.batching = T.batching, L.batchingColor = T.batchingColor, L.instancing = T.instancing, L.instancingColor = T.instancingColor, L.instancingMorph = T.instancingMorph, L.skinning = T.skinning, L.morphTargets = T.morphTargets, L.morphNormals = T.morphNormals, L.morphColors = T.morphColors, L.morphTargetsCount = T.morphTargetsCount, L.numClippingPlanes = T.numClippingPlanes, L.numIntersection = T.numClipIntersection, L.vertexAlphas = T.vertexAlphas, L.vertexTangents = T.vertexTangents, L.toneMapping = T.toneMapping;
    }
    function B0(H, T) {
      if (H.length === 0) return null;
      if (H.length === 1) return H[0].texture !== null ? H[0] : null;
      v.setFromMatrixPosition(T.matrixWorld);
      for (let L = 0, I = H.length; L < I; L++) {
        let b = H[L];
        if (b.texture !== null && b.boundingBox.containsPoint(v)) return b;
      }
      return null;
    }
    function j0(H, T, L, I, b) {
      T.isScene !== true && (T = QA), J.resetTextureUnits();
      let uA = T.fog, DA = I.isMeshStandardMaterial || I.isMeshLambertMaterial || I.isMeshPhongMaterial ? T.environment : null, vA = aA === null ? N.outputColorSpace : aA.isXRRenderTarget === true ? aA.texture.colorSpace : ee.workingColorSpace, jA = I.isMeshStandardMaterial || I.isMeshLambertMaterial && !I.envMap || I.isMeshPhongMaterial && !I.envMap, CA = KA.get(I.envMap || DA, jA), EA = I.vertexColors === true && !!L.attributes.color && L.attributes.color.itemSize === 4, Ae = !!L.attributes.tangent && (!!I.normalMap || I.anisotropy > 0), SA = !!L.morphAttributes.position, Ke = !!L.morphAttributes.normal, Be = !!L.morphAttributes.color, ve = jt;
      I.toneMapped && (aA === null || aA.isXRRenderTarget === true) && (ve = N.toneMapping);
      let le = L.morphAttributes.position || L.morphAttributes.normal || L.morphAttributes.color, ze = le !== void 0 ? le.length : 0, hA = z.get(I), We = h.state.lights;
      if (fA === true && (rA === true || H !== AA)) {
        let He = H === AA && I.id === q;
        XA.setState(I, H, He);
      }
      let ie = false;
      I.version === hA.__version ? (hA.needsLights && hA.lightsStateVersion !== We.state.version || hA.outputColorSpace !== vA || b.isBatchedMesh && hA.batching === false || !b.isBatchedMesh && hA.batching === true || b.isBatchedMesh && hA.batchingColor === true && b._colorsTexture === null || b.isBatchedMesh && hA.batchingColor === false && b._colorsTexture !== null || b.isInstancedMesh && hA.instancing === false || !b.isInstancedMesh && hA.instancing === true || b.isSkinnedMesh && hA.skinning === false || !b.isSkinnedMesh && hA.skinning === true || b.isInstancedMesh && hA.instancingColor === true && b.instanceColor === null || b.isInstancedMesh && hA.instancingColor === false && b.instanceColor !== null || b.isInstancedMesh && hA.instancingMorph === true && b.morphTexture === null || b.isInstancedMesh && hA.instancingMorph === false && b.morphTexture !== null || hA.envMap !== CA || I.fog === true && hA.fog !== uA || hA.numClippingPlanes !== void 0 && (hA.numClippingPlanes !== XA.numPlanes || hA.numIntersection !== XA.numIntersection) || hA.vertexAlphas !== EA || hA.vertexTangents !== Ae || hA.morphTargets !== SA || hA.morphNormals !== Ke || hA.morphColors !== Be || hA.toneMapping !== ve || hA.morphTargetsCount !== ze || !!hA.lightProbeGrid != h.state.lightProbeGridArray.length > 0) && (ie = true) : (ie = true, hA.__version = I.version);
      let Ut = hA.currentProgram;
      ie === true && (Ut = fa(I, T, b), G && I.isNodeMaterial && G.onUpdateProgram(I, Ut, hA));
      let Qt = false, Ko = false, Ai = false, ce = Ut.getUniforms(), De = hA.uniforms;
      if (c.useProgram(Ut.program) && (Qt = true, Ko = true, Ai = true), I.id !== q && (q = I.id, Ko = true), hA.needsLights) {
        let He = B0(h.state.lightProbeGridArray, b);
        hA.lightProbeGrid !== He && (hA.lightProbeGrid = He, Ko = true);
      }
      if (Qt || AA !== H) {
        c.buffers.depth.getReversed() && H.reversedDepth !== true && (H._reversedDepth = true, H.updateProjectionMatrix()), ce.setValue(C, "projectionMatrix", H.projectionMatrix), ce.setValue(C, "viewMatrix", H.matrixWorldInverse);
        let po = ce.map.cameraPosition;
        po !== void 0 && po.setValue(C, pA.setFromMatrixPosition(H.matrixWorld)), d.logarithmicDepthBuffer && ce.setValue(C, "logDepthBufFC", 2 / (Math.log(H.far + 1) / Math.LN2)), (I.isMeshPhongMaterial || I.isMeshToonMaterial || I.isMeshLambertMaterial || I.isMeshBasicMaterial || I.isMeshStandardMaterial || I.isShaderMaterial) && ce.setValue(C, "isOrthographic", H.isOrthographicCamera === true), AA !== H && (AA = H, Ko = true, Ai = true);
      }
      if (hA.needsLights && (We.state.sunShadowMap.length > 0 && ce.setValue(C, "sunShadowMap", We.state.sunShadowMap, J), We.state.directionalShadowMap.length > 0 && ce.setValue(C, "directionalShadowMap", We.state.directionalShadowMap, J), We.state.spotShadowMap.length > 0 && ce.setValue(C, "spotShadowMap", We.state.spotShadowMap, J), We.state.pointShadowMap.length > 0 && ce.setValue(C, "pointShadowMap", We.state.pointShadowMap, J)), b.isSkinnedMesh) {
        ce.setOptional(C, b, "bindMatrix"), ce.setOptional(C, b, "bindMatrixInverse");
        let He = b.skeleton;
        He && (He.boneTexture === null && He.computeBoneTexture(), ce.setValue(C, "boneTexture", He.boneTexture, J));
      }
      b.isBatchedMesh && (ce.setOptional(C, b, "batchingTexture"), ce.setValue(C, "batchingTexture", b._matricesTexture, J), ce.setOptional(C, b, "batchingIdTexture"), ce.setValue(C, "batchingIdTexture", b._indirectTexture, J), ce.setOptional(C, b, "batchingColorTexture"), b._colorsTexture !== null && ce.setValue(C, "batchingColorTexture", b._colorsTexture, J));
      let so = L.morphAttributes;
      if ((so.position !== void 0 || so.normal !== void 0 || so.color !== void 0) && X.update(b, L, Ut), (Ko || hA.receiveShadow !== b.receiveShadow) && (hA.receiveShadow = b.receiveShadow, ce.setValue(C, "receiveShadow", b.receiveShadow)), (I.isMeshStandardMaterial || I.isMeshLambertMaterial || I.isMeshPhongMaterial) && I.envMap === null && T.environment !== null && (De.envMapIntensity.value = T.environmentIntensity), De.dfgLUT !== void 0 && (De.dfgLUT.value = V1()), Ko) {
        if (ce.setValue(C, "toneMappingExposure", N.toneMappingExposure), hA.needsLights && S0(De, Ai), uA && I.fog === true && mA.refreshFogUniforms(De, uA), mA.refreshMaterialUniforms(De, I, eA, Z, h.state.transmissionRenderTarget[H.id]), hA.needsLights && hA.lightProbeGrid) {
          let He = hA.lightProbeGrid;
          De.probesSH.value = He.texture, De.probesMin.value.copy(He.boundingBox.min), De.probesMax.value.copy(He.boundingBox.max), De.probesResolution.value.copy(He.resolution);
        }
        Vi.upload(C, yP(hA), De, J);
      }
      if (I.isShaderMaterial && I.uniformsNeedUpdate === true && (Vi.upload(C, yP(hA), De, J), I.uniformsNeedUpdate = false), I.isSpriteMaterial && ce.setValue(C, "center", b.center), ce.setValue(C, "modelViewMatrix", b.modelViewMatrix), ce.setValue(C, "normalMatrix", b.normalMatrix), ce.setValue(C, "modelMatrix", b.matrixWorld), I.uniformsGroups !== void 0) {
        let He = I.uniformsGroups;
        for (let po = 0, ei = He.length; po < ei; po++) {
          let WP = He[po];
          iA.update(WP, Ut), iA.bind(WP, Ut);
        }
      }
      return Ut;
    }
    function S0(H, T) {
      H.ambientLightColor.needsUpdate = T, H.lightProbe.needsUpdate = T, H.sunLights.needsUpdate = T, H.sunLightShadows.needsUpdate = T, H.directionalLights.needsUpdate = T, H.directionalLightShadows.needsUpdate = T, H.pointLights.needsUpdate = T, H.pointLightShadows.needsUpdate = T, H.spotLights.needsUpdate = T, H.spotLightShadows.needsUpdate = T, H.rectAreaLights.needsUpdate = T, H.hemisphereLights.needsUpdate = T;
    }
    function N0(H) {
      return H.isMeshLambertMaterial || H.isMeshToonMaterial || H.isMeshPhongMaterial || H.isMeshStandardMaterial || H.isShadowMaterial || H.isShaderMaterial && H.lights === true;
    }
    this.getActiveCubeFace = function() {
      return W;
    }, this.getActiveMipmapLevel = function() {
      return V;
    }, this.getRenderTarget = function() {
      return aA;
    }, this.setRenderTargetTextures = function(H, T, L) {
      let I = z.get(H);
      I.__autoAllocateDepthBuffer = H.resolveDepthBuffer === false, I.__autoAllocateDepthBuffer === false && (I.__useRenderToTexture = false), z.get(H.texture).__webglTexture = T, z.get(H.depthTexture).__webglTexture = I.__autoAllocateDepthBuffer ? void 0 : L, I.__hasExternalTextures = true;
    }, this.setRenderTargetFramebuffer = function(H, T) {
      let L = z.get(H);
      L.__webglFramebuffer = T, L.__useDefaultFramebuffer = T === void 0;
    }, this.setRenderTarget = function(H, T = 0, L = 0) {
      aA = H, W = T, V = L;
      let I = null, b = false, uA = false;
      if (H) {
        let vA = z.get(H);
        if (vA.__useDefaultFramebuffer !== void 0) {
          c.bindFramebuffer(C.FRAMEBUFFER, vA.__webglFramebuffer), oA.copy(H.viewport), TA.copy(H.scissor), BA = H.scissorTest, c.viewport(oA), c.scissor(TA), c.setScissorTest(BA), q = -1;
          return;
        } else if (vA.__webglFramebuffer === void 0) J.setupRenderTarget(H);
        else if (vA.__hasExternalTextures) J.rebindTextures(H, z.get(H.texture).__webglTexture, z.get(H.depthTexture).__webglTexture);
        else if (H.depthBuffer) {
          let EA = H.depthTexture;
          if (vA.__boundDepthTexture !== EA) {
            if (EA !== null && z.has(EA) && (H.width !== EA.image.width || H.height !== EA.image.height)) throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");
            J.setupDepthRenderbuffer(H);
          }
        }
        let jA = H.texture;
        (jA.isData3DTexture || jA.isDataArrayTexture || jA.isCompressedArrayTexture) && (uA = true);
        let CA = z.get(H).__webglFramebuffer;
        H.isWebGLCubeRenderTarget ? (Array.isArray(CA[T]) ? I = CA[T][L] : I = CA[T], b = true) : H.samples > 0 && J.useMultisampledRTT(H) === false ? I = z.get(H).__webglMultisampledFramebuffer : Array.isArray(CA) ? I = CA[L] : I = CA, oA.copy(H.viewport), TA.copy(H.scissor), BA = H.scissorTest;
      } else oA.copy(xA).multiplyScalar(eA).floor(), TA.copy(MA).multiplyScalar(eA).floor(), BA = Ue;
      if (L !== 0 && (I = M), c.bindFramebuffer(C.FRAMEBUFFER, I) && c.drawBuffers(H, I), c.viewport(oA), c.scissor(TA), c.setScissorTest(BA), b) {
        let vA = z.get(H.texture);
        C.framebufferTexture2D(C.FRAMEBUFFER, C.COLOR_ATTACHMENT0, C.TEXTURE_CUBE_MAP_POSITIVE_X + T, vA.__webglTexture, L);
      } else if (uA) {
        let vA = T;
        for (let jA = 0; jA < H.textures.length; jA++) {
          let CA = z.get(H.textures[jA]);
          C.framebufferTextureLayer(C.FRAMEBUFFER, C.COLOR_ATTACHMENT0 + jA, CA.__webglTexture, L, vA);
        }
      } else if (H !== null && L !== 0) {
        let vA = z.get(H.texture);
        C.framebufferTexture2D(C.FRAMEBUFFER, C.COLOR_ATTACHMENT0, C.TEXTURE_2D, vA.__webglTexture, L);
      }
      q = -1;
    };
    function VP(H) {
      let T = z.get(H);
      return (T.__readFormat !== H.format || T.__readType !== H.type) && (T.__readFormat = H.format, T.__readType = H.type, T.__formatReadable = d.textureFormatReadable(H.format), T.__typeReadable = d.textureTypeReadable(H.type)), T;
    }
    this.readRenderTargetPixels = function(H, T, L, I, b, uA, DA, vA = 0) {
      if (!(H && H.isWebGLRenderTarget)) {
        bA("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let jA = z.get(H).__webglFramebuffer;
      if (H.isWebGLCubeRenderTarget && DA !== void 0 && (jA = jA[DA]), jA) {
        c.bindFramebuffer(C.FRAMEBUFFER, jA);
        try {
          let CA = H.textures[vA], EA = CA.format, Ae = CA.type;
          H.textures.length > 1 && C.readBuffer(C.COLOR_ATTACHMENT0 + vA);
          let SA = VP(CA);
          if (SA.__formatReadable === false) {
            bA("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          if (SA.__typeReadable === false) {
            bA("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          T >= 0 && T <= H.width - I && L >= 0 && L <= H.height - b && C.readPixels(T, L, I, b, lA.convert(EA), lA.convert(Ae), uA);
        } finally {
          let CA = aA !== null ? z.get(aA).__webglFramebuffer : null;
          c.bindFramebuffer(C.FRAMEBUFFER, CA);
        }
      }
    }, this.readRenderTargetPixelsAsync = async function(H, T, L, I, b, uA, DA, vA = 0) {
      if (!(H && H.isWebGLRenderTarget)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      let jA = z.get(H).__webglFramebuffer;
      if (H.isWebGLCubeRenderTarget && DA !== void 0 && (jA = jA[DA]), jA) if (T >= 0 && T <= H.width - I && L >= 0 && L <= H.height - b) {
        c.bindFramebuffer(C.FRAMEBUFFER, jA);
        let CA = H.textures[vA], EA = CA.format, Ae = CA.type;
        H.textures.length > 1 && C.readBuffer(C.COLOR_ATTACHMENT0 + vA);
        let SA = VP(CA);
        if (SA.__formatReadable === false) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
        if (SA.__typeReadable === false) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
        let Ke = C.createBuffer();
        C.bindBuffer(C.PIXEL_PACK_BUFFER, Ke), C.bufferData(C.PIXEL_PACK_BUFFER, uA.byteLength, C.STREAM_READ), C.readPixels(T, L, I, b, lA.convert(EA), lA.convert(Ae), 0), C.bindBuffer(C.PIXEL_PACK_BUFFER, null);
        let Be = aA !== null ? z.get(aA).__webglFramebuffer : null;
        c.bindFramebuffer(C.FRAMEBUFFER, Be);
        let ve = C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE, 0);
        return C.flush(), await ss(C, ve, 4), C.bindBuffer(C.PIXEL_PACK_BUFFER, Ke), C.getBufferSubData(C.PIXEL_PACK_BUFFER, 0, uA), C.bindBuffer(C.PIXEL_PACK_BUFFER, null), C.deleteBuffer(Ke), C.deleteSync(ve), uA;
      } else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
    }, this.copyFramebufferToTexture = function(H, T = null, L = 0) {
      let I = Math.pow(2, -L), b = Math.floor(H.image.width * I), uA = Math.floor(H.image.height * I), DA = T !== null ? T.x : 0, vA = T !== null ? T.y : 0;
      J.setTexture2D(H, 0), C.copyTexSubImage2D(C.TEXTURE_2D, L, 0, 0, DA, vA, b, uA), c.unbindTexture();
    }, this.copyTextureToTexture = function(H, T, L = null, I = null, b = 0, uA = 0) {
      let DA, vA, jA, CA, EA, Ae, SA, Ke, Be, ve = H.isCompressedTexture ? H.mipmaps[uA] : H.image;
      if (L !== null) DA = L.max.x - L.min.x, vA = L.max.y - L.min.y, jA = L.isBox3 ? L.max.z - L.min.z : 1, CA = L.min.x, EA = L.min.y, Ae = L.isBox3 ? L.min.z : 0;
      else {
        let De = Math.pow(2, -b);
        DA = Math.floor(ve.width * De), vA = Math.floor(ve.height * De), H.isDataArrayTexture ? jA = ve.depth : H.isData3DTexture ? jA = Math.floor(ve.depth * De) : jA = 1, CA = 0, EA = 0, Ae = 0;
      }
      I !== null ? (SA = I.x, Ke = I.y, Be = I.z) : (SA = 0, Ke = 0, Be = 0);
      let le = lA.convert(T.format), ze = lA.convert(T.type), hA;
      T.isData3DTexture ? (J.setTexture3D(T, 0), hA = C.TEXTURE_3D) : T.isDataArrayTexture || T.isCompressedArrayTexture ? (J.setTexture2DArray(T, 0), hA = C.TEXTURE_2D_ARRAY) : (J.setTexture2D(T, 0), hA = C.TEXTURE_2D), c.activeTexture(C.TEXTURE0), c.pixelStorei(C.UNPACK_FLIP_Y_WEBGL, T.flipY), c.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL, T.premultiplyAlpha), c.pixelStorei(C.UNPACK_ALIGNMENT, T.unpackAlignment);
      let We = c.getParameter(C.UNPACK_ROW_LENGTH), ie = c.getParameter(C.UNPACK_IMAGE_HEIGHT), Ut = c.getParameter(C.UNPACK_SKIP_PIXELS), Qt = c.getParameter(C.UNPACK_SKIP_ROWS), Ko = c.getParameter(C.UNPACK_SKIP_IMAGES);
      c.pixelStorei(C.UNPACK_ROW_LENGTH, ve.width), c.pixelStorei(C.UNPACK_IMAGE_HEIGHT, ve.height), c.pixelStorei(C.UNPACK_SKIP_PIXELS, CA), c.pixelStorei(C.UNPACK_SKIP_ROWS, EA), c.pixelStorei(C.UNPACK_SKIP_IMAGES, Ae);
      let Ai = H.isDataArrayTexture || H.isData3DTexture, ce = T.isDataArrayTexture || T.isData3DTexture;
      if (H.isDepthTexture) {
        let De = z.get(H), so = z.get(T), He = z.get(De.__renderTarget), po = z.get(so.__renderTarget);
        c.bindFramebuffer(C.READ_FRAMEBUFFER, He.__webglFramebuffer), c.bindFramebuffer(C.DRAW_FRAMEBUFFER, po.__webglFramebuffer);
        for (let ei = 0; ei < jA; ei++) Ai && (C.framebufferTextureLayer(C.READ_FRAMEBUFFER, C.COLOR_ATTACHMENT0, z.get(H).__webglTexture, b, Ae + ei), C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER, C.COLOR_ATTACHMENT0, z.get(T).__webglTexture, uA, Be + ei)), C.blitFramebuffer(CA, EA, DA, vA, SA, Ke, DA, vA, C.DEPTH_BUFFER_BIT, C.NEAREST);
        c.bindFramebuffer(C.READ_FRAMEBUFFER, null), c.bindFramebuffer(C.DRAW_FRAMEBUFFER, null);
      } else if (b !== 0 || H.isRenderTargetTexture || z.has(H)) {
        let De = z.get(H), so = z.get(T);
        c.bindFramebuffer(C.READ_FRAMEBUFFER, m), c.bindFramebuffer(C.DRAW_FRAMEBUFFER, k);
        for (let He = 0; He < jA; He++) Ai ? C.framebufferTextureLayer(C.READ_FRAMEBUFFER, C.COLOR_ATTACHMENT0, De.__webglTexture, b, Ae + He) : C.framebufferTexture2D(C.READ_FRAMEBUFFER, C.COLOR_ATTACHMENT0, C.TEXTURE_2D, De.__webglTexture, b), ce ? C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER, C.COLOR_ATTACHMENT0, so.__webglTexture, uA, Be + He) : C.framebufferTexture2D(C.DRAW_FRAMEBUFFER, C.COLOR_ATTACHMENT0, C.TEXTURE_2D, so.__webglTexture, uA), b !== 0 ? C.blitFramebuffer(CA, EA, DA, vA, SA, Ke, DA, vA, C.COLOR_BUFFER_BIT, C.NEAREST) : ce ? C.copyTexSubImage3D(hA, uA, SA, Ke, Be + He, CA, EA, DA, vA) : C.copyTexSubImage2D(hA, uA, SA, Ke, CA, EA, DA, vA);
        c.bindFramebuffer(C.READ_FRAMEBUFFER, null), c.bindFramebuffer(C.DRAW_FRAMEBUFFER, null);
      } else ce ? H.isDataTexture || H.isData3DTexture ? C.texSubImage3D(hA, uA, SA, Ke, Be, DA, vA, jA, le, ze, ve.data) : T.isCompressedArrayTexture ? C.compressedTexSubImage3D(hA, uA, SA, Ke, Be, DA, vA, jA, le, ve.data) : C.texSubImage3D(hA, uA, SA, Ke, Be, DA, vA, jA, le, ze, ve) : H.isDataTexture ? C.texSubImage2D(C.TEXTURE_2D, uA, SA, Ke, DA, vA, le, ze, ve.data) : H.isCompressedTexture ? C.compressedTexSubImage2D(C.TEXTURE_2D, uA, SA, Ke, ve.width, ve.height, le, ve.data) : C.texSubImage2D(C.TEXTURE_2D, uA, SA, Ke, DA, vA, le, ze, ve);
      c.pixelStorei(C.UNPACK_ROW_LENGTH, We), c.pixelStorei(C.UNPACK_IMAGE_HEIGHT, ie), c.pixelStorei(C.UNPACK_SKIP_PIXELS, Ut), c.pixelStorei(C.UNPACK_SKIP_ROWS, Qt), c.pixelStorei(C.UNPACK_SKIP_IMAGES, Ko), uA === 0 && T.generateMipmaps && C.generateMipmap(hA), c.unbindTexture();
    }, this.initRenderTarget = function(H) {
      z.get(H).__webglFramebuffer === void 0 && J.setupRenderTarget(H);
    }, this.initTexture = function(H) {
      H.isCubeTexture ? J.setTextureCube(H, 0) : H.isData3DTexture ? J.setTexture3D(H, 0) : H.isDataArrayTexture || H.isCompressedArrayTexture ? J.setTexture2DArray(H, 0) : J.setTexture2D(H, 0), c.unbindTexture();
    }, this.resetState = function() {
      W = 0, V = 0, aA = null, c.reset(), dA.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  get coordinateSystem() {
    return ht;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(A) {
    this._outputColorSpace = A;
    let e = this.getContext();
    e.drawingBufferColorSpace = ee._getDrawingBufferColorSpace(A), e.unpackColorSpace = ee._getUnpackColorSpace();
  }
};
var Es = { type: "change" }, lP = { type: "start" }, Ys = { type: "end" }, lr = new lo(), Zs = new at(), q1 = Math.cos(70 * Zo.DEG2RAD), Ce = new j(), tt = 2 * Math.PI, we = { NONE: -1, ROTATE: 0, DOLLY: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_PAN: 4, TOUCH_DOLLY_PAN: 5, TOUCH_DOLLY_ROTATE: 6 }, cP = 1e-6, gr = class extends zn {
  constructor(A, e = null) {
    super(A, e), this.state = we.NONE, this.target = new j(), this.cursor = new j(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minTargetRadius = 0, this.maxTargetRadius = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = false, this.dampingFactor = 0.05, this.enableZoom = true, this.zoomSpeed = 1, this.enableRotate = true, this.rotateSpeed = 1, this.keyRotateSpeed = 1, this.enablePan = true, this.panSpeed = 1, this.screenSpacePanning = true, this.keyPanSpeed = 7, this.zoomToCursor = false, this.autoRotate = false, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: jo.ROTATE, MIDDLE: jo.DOLLY, RIGHT: jo.PAN }, this.touches = { ONE: So.ROTATE, TWO: So.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._cursorStyle = "auto", this._domElementKeyEvents = null, this._lastPosition = new j(), this._lastQuaternion = new rt(), this._lastTargetPosition = new j(), this._quat = new rt().setFromUnitVectors(A.up, new j(0, 1, 0)), this._quatInverse = this._quat.clone().invert(), this._spherical = new ki(), this._sphericalDelta = new ki(), this._scale = 1, this._panOffset = new j(), this._rotateStart = new nA(), this._rotateEnd = new nA(), this._rotateDelta = new nA(), this._panStart = new nA(), this._panEnd = new nA(), this._panDelta = new nA(), this._dollyStart = new nA(), this._dollyEnd = new nA(), this._dollyDelta = new nA(), this._dollyDirection = new j(), this._mouse = new nA(), this._performCursorZoom = false, this._pointers = [], this._pointerPositions = {}, this._controlActive = false, this._onPointerMove = E1.bind(this), this._onPointerDown = J1.bind(this), this._onPointerUp = Z1.bind(this), this._onContextMenu = ow.bind(this), this._onMouseWheel = $1.bind(this), this._onKeyDown = Aw.bind(this), this._onTouchStart = ew.bind(this), this._onTouchMove = tw.bind(this), this._onMouseDown = Y1.bind(this), this._onMouseMove = _1.bind(this), this._interceptControlDown = iw.bind(this), this._interceptControlUp = nw.bind(this), this.domElement !== null && this.connect(this.domElement), this.update();
  }
  set cursorStyle(A) {
    this._cursorStyle = A, A === "grab" ? this.domElement.style.cursor = "grab" : this.domElement.style.cursor = "auto";
  }
  get cursorStyle() {
    return this._cursorStyle;
  }
  connect(A) {
    super.connect(A), this.domElement.addEventListener("pointerdown", this._onPointerDown), this.domElement.addEventListener("pointercancel", this._onPointerUp), this.domElement.addEventListener("contextmenu", this._onContextMenu), this.domElement.addEventListener("wheel", this._onMouseWheel, { passive: false }), this.domElement.getRootNode().addEventListener("keydown", this._interceptControlDown, { passive: true, capture: true }), this.domElement.style.touchAction = "none";
  }
  disconnect() {
    this.state = we.NONE, this.domElement.removeEventListener("pointerdown", this._onPointerDown), this.domElement.ownerDocument.removeEventListener("pointermove", this._onPointerMove), this.domElement.ownerDocument.removeEventListener("pointerup", this._onPointerUp), this.domElement.removeEventListener("pointercancel", this._onPointerUp), this.domElement.removeEventListener("wheel", this._onMouseWheel), this.domElement.removeEventListener("contextmenu", this._onContextMenu), this.stopListenToKeyEvents();
    let A = this.domElement.getRootNode();
    A.removeEventListener("keydown", this._interceptControlDown, { capture: true }), A.removeEventListener("keyup", this._interceptControlUp, { capture: true }), this._controlActive = false, this._pointers.length = 0, this._pointerPositions = {}, this.domElement.style.touchAction = "", this.domElement.style.cursor = "auto";
  }
  dispose() {
    this.disconnect();
  }
  getPolarAngle() {
    return this._spherical.phi;
  }
  getAzimuthalAngle() {
    return this._spherical.theta;
  }
  getDistance() {
    return this.object.position.distanceTo(this.target);
  }
  listenToKeyEvents(A) {
    A.addEventListener("keydown", this._onKeyDown), this._domElementKeyEvents = A;
  }
  stopListenToKeyEvents() {
    this._domElementKeyEvents !== null && (this._domElementKeyEvents.removeEventListener("keydown", this._onKeyDown), this._domElementKeyEvents = null);
  }
  saveState() {
    this.target0.copy(this.target), this.position0.copy(this.object.position), this.zoom0 = this.object.zoom;
  }
  reset() {
    this.target.copy(this.target0), this.object.position.copy(this.position0), this.object.zoom = this.zoom0, this.object.updateProjectionMatrix(), this.dispatchEvent(Es), this.update(), this.state = we.NONE;
  }
  pan(A, e) {
    this._pan(A, e), this.update();
  }
  dollyIn(A) {
    this._dollyIn(A), this.update();
  }
  dollyOut(A) {
    this._dollyOut(A), this.update();
  }
  rotateLeft(A) {
    this._rotateLeft(A), this.update();
  }
  rotateUp(A) {
    this._rotateUp(A), this.update();
  }
  update(A = null) {
    let e = this.object.position;
    Ce.copy(e).sub(this.target), Ce.applyQuaternion(this._quat), this._spherical.setFromVector3(Ce), this.autoRotate && this.state === we.NONE && this._rotateLeft(this._getAutoRotationAngle(A)), this.enableDamping ? (this._spherical.theta += this._sphericalDelta.theta * this.dampingFactor, this._spherical.phi += this._sphericalDelta.phi * this.dampingFactor) : (this._spherical.theta += this._sphericalDelta.theta, this._spherical.phi += this._sphericalDelta.phi);
    let t = this.minAzimuthAngle, i = this.maxAzimuthAngle;
    isFinite(t) && isFinite(i) && (t < -Math.PI ? t += tt : t > Math.PI && (t -= tt), i < -Math.PI ? i += tt : i > Math.PI && (i -= tt), t <= i ? this._spherical.theta = Math.max(t, Math.min(i, this._spherical.theta)) : this._spherical.theta = this._spherical.theta > (t + i) / 2 ? Math.max(t, this._spherical.theta) : Math.min(i, this._spherical.theta)), this._spherical.phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, this._spherical.phi)), this._spherical.makeSafe(), this.enableDamping === true ? this.target.addScaledVector(this._panOffset, this.dampingFactor) : this.target.add(this._panOffset), this.target.sub(this.cursor), this.target.clampLength(this.minTargetRadius, this.maxTargetRadius), this.target.add(this.cursor);
    let n = false;
    if (this.zoomToCursor && this._performCursorZoom || this.object.isOrthographicCamera) this._spherical.radius = this._clampDistance(this._spherical.radius);
    else {
      let a = this._spherical.radius;
      this._spherical.radius = this._clampDistance(this._spherical.radius * this._scale), n = a != this._spherical.radius;
    }
    if (Ce.setFromSpherical(this._spherical), Ce.applyQuaternion(this._quatInverse), e.copy(this.target).add(Ce), this.object.lookAt(this.target), this.enableDamping === true ? (this._sphericalDelta.theta *= 1 - this.dampingFactor, this._sphericalDelta.phi *= 1 - this.dampingFactor, this._panOffset.multiplyScalar(1 - this.dampingFactor)) : (this._sphericalDelta.set(0, 0, 0), this._panOffset.set(0, 0, 0)), this.zoomToCursor && this._performCursorZoom) {
      let a = null;
      if (this.object.isPerspectiveCamera) {
        let f = Ce.length();
        a = this._clampDistance(f * this._scale);
        let r = f - a;
        this.object.position.addScaledVector(this._dollyDirection, r), this.object.updateMatrixWorld(), n = !!r;
      } else if (this.object.isOrthographicCamera) {
        let f = new j(this._mouse.x, this._mouse.y, 0);
        f.unproject(this.object);
        let r = this.object.zoom;
        this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), this.object.updateProjectionMatrix(), n = r !== this.object.zoom;
        let P = new j(this._mouse.x, this._mouse.y, 0);
        P.unproject(this.object), this.object.position.sub(P).add(f), this.object.updateMatrixWorld(), a = Ce.length();
      } else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."), this.zoomToCursor = false;
      a !== null && (this.screenSpacePanning ? this.target.set(0, 0, -1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position) : (lr.origin.copy(this.object.position), lr.direction.set(0, 0, -1).transformDirection(this.object.matrix), Math.abs(this.object.up.dot(lr.direction)) < q1 ? this.object.lookAt(this.target) : (Zs.setFromNormalAndCoplanarPoint(this.object.up, this.target), lr.intersectPlane(Zs, this.target))));
    } else if (this.object.isOrthographicCamera) {
      let a = this.object.zoom;
      this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), a !== this.object.zoom && (this.object.updateProjectionMatrix(), n = true);
    }
    return this._scale = 1, this._performCursorZoom = false, n || this._lastPosition.distanceToSquared(this.object.position) > cP || 8 * (1 - this._lastQuaternion.dot(this.object.quaternion)) > cP || this._lastTargetPosition.distanceToSquared(this.target) > cP ? (this.dispatchEvent(Es), this._lastPosition.copy(this.object.position), this._lastQuaternion.copy(this.object.quaternion), this._lastTargetPosition.copy(this.target), true) : false;
  }
  _getAutoRotationAngle(A) {
    return A !== null ? tt / 60 * this.autoRotateSpeed * A : tt / 60 / 60 * this.autoRotateSpeed;
  }
  _getZoomScale(A) {
    let e = Math.abs(A * 0.01);
    return Math.pow(0.95, this.zoomSpeed * e);
  }
  _rotateLeft(A) {
    this._sphericalDelta.theta -= A;
  }
  _rotateUp(A) {
    this._sphericalDelta.phi -= A;
  }
  _panLeft(A, e) {
    Ce.setFromMatrixColumn(e, 0), Ce.multiplyScalar(-A), this._panOffset.add(Ce);
  }
  _panUp(A, e) {
    this.screenSpacePanning === true ? Ce.setFromMatrixColumn(e, 1) : (Ce.setFromMatrixColumn(e, 0), Ce.crossVectors(this.object.up, Ce)), Ce.multiplyScalar(A), this._panOffset.add(Ce);
  }
  _pan(A, e) {
    let t = this.domElement;
    if (this.object.isPerspectiveCamera) {
      let i = this.object.position;
      Ce.copy(i).sub(this.target);
      let n = Ce.length();
      n *= Math.tan(this.object.fov / 2 * Math.PI / 180), this._panLeft(2 * A * n / t.clientHeight, this.object.matrix), this._panUp(2 * e * n / t.clientHeight, this.object.matrix);
    } else this.object.isOrthographicCamera ? (this._panLeft(A * (this.object.right - this.object.left) / this.object.zoom / t.clientWidth, this.object.matrix), this._panUp(e * (this.object.top - this.object.bottom) / this.object.zoom / t.clientHeight, this.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), this.enablePan = false);
  }
  _dollyOut(A) {
    this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale /= A : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), this.enableZoom = false);
  }
  _dollyIn(A) {
    this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale *= A : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), this.enableZoom = false);
  }
  _updateZoomParameters(A, e) {
    if (!this.zoomToCursor) return;
    this._performCursorZoom = true;
    let t = this.domElement.getBoundingClientRect(), i = A - t.left, n = e - t.top, a = t.width, f = t.height;
    this._mouse.x = i / a * 2 - 1, this._mouse.y = -(n / f) * 2 + 1, this._dollyDirection.set(this._mouse.x, this._mouse.y, 1).unproject(this.object).sub(this.object.position).normalize();
  }
  _clampDistance(A) {
    return Math.max(this.minDistance, Math.min(this.maxDistance, A));
  }
  _handleMouseDownRotate(A) {
    this._rotateStart.set(A.clientX, A.clientY);
  }
  _handleMouseDownDolly(A) {
    this._updateZoomParameters(A.clientX, A.clientX), this._dollyStart.set(A.clientX, A.clientY);
  }
  _handleMouseDownPan(A) {
    this._panStart.set(A.clientX, A.clientY);
  }
  _handleMouseMoveRotate(A) {
    this._rotateEnd.set(A.clientX, A.clientY), this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
    let e = this.domElement;
    this._rotateLeft(tt * this._rotateDelta.x / e.clientHeight), this._rotateUp(tt * this._rotateDelta.y / e.clientHeight), this._rotateStart.copy(this._rotateEnd), this.update();
  }
  _handleMouseMoveDolly(A) {
    this._dollyEnd.set(A.clientX, A.clientY), this._dollyDelta.subVectors(this._dollyEnd, this._dollyStart), this._dollyDelta.y > 0 ? this._dollyOut(this._getZoomScale(this._dollyDelta.y)) : this._dollyDelta.y < 0 && this._dollyIn(this._getZoomScale(this._dollyDelta.y)), this._dollyStart.copy(this._dollyEnd), this.update();
  }
  _handleMouseMovePan(A) {
    this._panEnd.set(A.clientX, A.clientY), this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd), this.update();
  }
  _handleMouseWheel(A) {
    this._updateZoomParameters(A.clientX, A.clientY), A.deltaY < 0 ? this._dollyIn(this._getZoomScale(A.deltaY)) : A.deltaY > 0 && this._dollyOut(this._getZoomScale(A.deltaY)), this.update();
  }
  _handleKeyDown(A) {
    let e = false;
    switch (A.code) {
      case this.keys.UP:
        A.ctrlKey || A.metaKey || A.shiftKey ? this.enableRotate && this._rotateUp(tt * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, this.keyPanSpeed), e = true;
        break;
      case this.keys.BOTTOM:
        A.ctrlKey || A.metaKey || A.shiftKey ? this.enableRotate && this._rotateUp(-tt * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, -this.keyPanSpeed), e = true;
        break;
      case this.keys.LEFT:
        A.ctrlKey || A.metaKey || A.shiftKey ? this.enableRotate && this._rotateLeft(tt * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(this.keyPanSpeed, 0), e = true;
        break;
      case this.keys.RIGHT:
        A.ctrlKey || A.metaKey || A.shiftKey ? this.enableRotate && this._rotateLeft(-tt * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(-this.keyPanSpeed, 0), e = true;
        break;
    }
    e && (A.preventDefault(), this.update());
  }
  _handleTouchStartRotate(A) {
    if (this._pointers.length === 1) this._rotateStart.set(A.pageX, A.pageY);
    else {
      let e = this._getSecondPointerPosition(A), t = 0.5 * (A.pageX + e.x), i = 0.5 * (A.pageY + e.y);
      this._rotateStart.set(t, i);
    }
  }
  _handleTouchStartPan(A) {
    if (this._pointers.length === 1) this._panStart.set(A.pageX, A.pageY);
    else {
      let e = this._getSecondPointerPosition(A), t = 0.5 * (A.pageX + e.x), i = 0.5 * (A.pageY + e.y);
      this._panStart.set(t, i);
    }
  }
  _handleTouchStartDolly(A) {
    let e = this._getSecondPointerPosition(A), t = A.pageX - e.x, i = A.pageY - e.y, n = Math.sqrt(t * t + i * i);
    this._dollyStart.set(0, n);
  }
  _handleTouchStartDollyPan(A) {
    this.enableZoom && this._handleTouchStartDolly(A), this.enablePan && this._handleTouchStartPan(A);
  }
  _handleTouchStartDollyRotate(A) {
    this.enableZoom && this._handleTouchStartDolly(A), this.enableRotate && this._handleTouchStartRotate(A);
  }
  _handleTouchMoveRotate(A) {
    if (this._pointers.length == 1) this._rotateEnd.set(A.pageX, A.pageY);
    else {
      let t = this._getSecondPointerPosition(A), i = 0.5 * (A.pageX + t.x), n = 0.5 * (A.pageY + t.y);
      this._rotateEnd.set(i, n);
    }
    this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
    let e = this.domElement;
    this._rotateLeft(tt * this._rotateDelta.x / e.clientHeight), this._rotateUp(tt * this._rotateDelta.y / e.clientHeight), this._rotateStart.copy(this._rotateEnd);
  }
  _handleTouchMovePan(A) {
    if (this._pointers.length === 1) this._panEnd.set(A.pageX, A.pageY);
    else {
      let e = this._getSecondPointerPosition(A), t = 0.5 * (A.pageX + e.x), i = 0.5 * (A.pageY + e.y);
      this._panEnd.set(t, i);
    }
    this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd);
  }
  _handleTouchMoveDolly(A) {
    let e = this._getSecondPointerPosition(A), t = A.pageX - e.x, i = A.pageY - e.y, n = Math.sqrt(t * t + i * i);
    this._dollyEnd.set(0, n), this._dollyDelta.set(0, Math.pow(this._dollyEnd.y / this._dollyStart.y, this.zoomSpeed)), this._dollyOut(this._dollyDelta.y), this._dollyStart.copy(this._dollyEnd);
    let a = (A.pageX + e.x) * 0.5, f = (A.pageY + e.y) * 0.5;
    this._updateZoomParameters(a, f);
  }
  _handleTouchMoveDollyPan(A) {
    this.enableZoom && this._handleTouchMoveDolly(A), this.enablePan && this._handleTouchMovePan(A);
  }
  _handleTouchMoveDollyRotate(A) {
    this.enableZoom && this._handleTouchMoveDolly(A), this.enableRotate && this._handleTouchMoveRotate(A);
  }
  _addPointer(A) {
    this._pointers.push(A.pointerId);
  }
  _removePointer(A) {
    delete this._pointerPositions[A.pointerId];
    for (let e = 0; e < this._pointers.length; e++) if (this._pointers[e] == A.pointerId) {
      this._pointers.splice(e, 1);
      return;
    }
  }
  _isTrackingPointer(A) {
    for (let e = 0; e < this._pointers.length; e++) if (this._pointers[e] == A.pointerId) return true;
    return false;
  }
  _trackPointer(A) {
    let e = this._pointerPositions[A.pointerId];
    e === void 0 && (e = new nA(), this._pointerPositions[A.pointerId] = e), e.set(A.pageX, A.pageY);
  }
  _getSecondPointerPosition(A) {
    let e = A.pointerId === this._pointers[0] ? this._pointers[1] : this._pointers[0];
    return this._pointerPositions[e];
  }
  _customWheelEvent(A) {
    let e = A.deltaMode, t = { clientX: A.clientX, clientY: A.clientY, deltaY: A.deltaY };
    switch (e) {
      case 1:
        t.deltaY *= 16;
        break;
      case 2:
        t.deltaY *= 100;
        break;
    }
    return A.ctrlKey && !this._controlActive && (t.deltaY *= 10), t;
  }
};
function J1(o22) {
  this.enabled !== false && (this._pointers.length === 0 && (this.domElement.setPointerCapture(o22.pointerId), this.domElement.ownerDocument.addEventListener("pointermove", this._onPointerMove), this.domElement.ownerDocument.addEventListener("pointerup", this._onPointerUp)), !this._isTrackingPointer(o22) && (this._addPointer(o22), o22.pointerType === "touch" ? this._onTouchStart(o22) : this._onMouseDown(o22), this._cursorStyle === "grab" && (this.domElement.style.cursor = "grabbing")));
}
function E1(o22) {
  this.enabled !== false && (o22.pointerType === "touch" ? this._onTouchMove(o22) : this._onMouseMove(o22));
}
function Z1(o22) {
  switch (this._removePointer(o22), this._pointers.length) {
    case 0:
      this.domElement.releasePointerCapture(o22.pointerId), this.domElement.ownerDocument.removeEventListener("pointermove", this._onPointerMove), this.domElement.ownerDocument.removeEventListener("pointerup", this._onPointerUp), this.dispatchEvent(Ys), this.state = we.NONE, this._cursorStyle === "grab" && (this.domElement.style.cursor = "grab");
      break;
    case 1:
      let A = this._pointers[0], e = this._pointerPositions[A];
      this._onTouchStart({ pointerId: A, pageX: e.x, pageY: e.y });
      break;
  }
}
function Y1(o22) {
  let A;
  switch (o22.button) {
    case 0:
      A = this.mouseButtons.LEFT;
      break;
    case 1:
      A = this.mouseButtons.MIDDLE;
      break;
    case 2:
      A = this.mouseButtons.RIGHT;
      break;
    default:
      A = -1;
  }
  switch (A) {
    case jo.DOLLY:
      if (this.enableZoom === false) return;
      this._handleMouseDownDolly(o22), this.state = we.DOLLY;
      break;
    case jo.ROTATE:
      if (o22.ctrlKey || o22.metaKey || o22.shiftKey) {
        if (this.enablePan === false) return;
        this._handleMouseDownPan(o22), this.state = we.PAN;
      } else {
        if (this.enableRotate === false) return;
        this._handleMouseDownRotate(o22), this.state = we.ROTATE;
      }
      break;
    case jo.PAN:
      if (o22.ctrlKey || o22.metaKey || o22.shiftKey) {
        if (this.enableRotate === false) return;
        this._handleMouseDownRotate(o22), this.state = we.ROTATE;
      } else {
        if (this.enablePan === false) return;
        this._handleMouseDownPan(o22), this.state = we.PAN;
      }
      break;
    default:
      this.state = we.NONE;
  }
  this.state !== we.NONE && this.dispatchEvent(lP);
}
function _1(o22) {
  switch (this.state) {
    case we.ROTATE:
      if (this.enableRotate === false) return;
      this._handleMouseMoveRotate(o22);
      break;
    case we.DOLLY:
      if (this.enableZoom === false) return;
      this._handleMouseMoveDolly(o22);
      break;
    case we.PAN:
      if (this.enablePan === false) return;
      this._handleMouseMovePan(o22);
      break;
  }
}
function $1(o22) {
  this.enabled === false || this.enableZoom === false || this.state !== we.NONE || (o22.preventDefault(), this.dispatchEvent(lP), this._handleMouseWheel(this._customWheelEvent(o22)), this.dispatchEvent(Ys));
}
function Aw(o22) {
  this.enabled !== false && this._handleKeyDown(o22);
}
function ew(o22) {
  switch (this._trackPointer(o22), this._pointers.length) {
    case 1:
      switch (this.touches.ONE) {
        case So.ROTATE:
          if (this.enableRotate === false) return;
          this._handleTouchStartRotate(o22), this.state = we.TOUCH_ROTATE;
          break;
        case So.PAN:
          if (this.enablePan === false) return;
          this._handleTouchStartPan(o22), this.state = we.TOUCH_PAN;
          break;
        default:
          this.state = we.NONE;
      }
      break;
    case 2:
      switch (this.touches.TWO) {
        case So.DOLLY_PAN:
          if (this.enableZoom === false && this.enablePan === false) return;
          this._handleTouchStartDollyPan(o22), this.state = we.TOUCH_DOLLY_PAN;
          break;
        case So.DOLLY_ROTATE:
          if (this.enableZoom === false && this.enableRotate === false) return;
          this._handleTouchStartDollyRotate(o22), this.state = we.TOUCH_DOLLY_ROTATE;
          break;
        default:
          this.state = we.NONE;
      }
      break;
    default:
      this.state = we.NONE;
  }
  this.state !== we.NONE && this.dispatchEvent(lP);
}
function tw(o22) {
  switch (this._trackPointer(o22), this.state) {
    case we.TOUCH_ROTATE:
      if (this.enableRotate === false) return;
      this._handleTouchMoveRotate(o22), this.update();
      break;
    case we.TOUCH_PAN:
      if (this.enablePan === false) return;
      this._handleTouchMovePan(o22), this.update();
      break;
    case we.TOUCH_DOLLY_PAN:
      if (this.enableZoom === false && this.enablePan === false) return;
      this._handleTouchMoveDollyPan(o22), this.update();
      break;
    case we.TOUCH_DOLLY_ROTATE:
      if (this.enableZoom === false && this.enableRotate === false) return;
      this._handleTouchMoveDollyRotate(o22), this.update();
      break;
    default:
      this.state = we.NONE;
  }
}
function ow(o22) {
  this.enabled !== false && o22.preventDefault();
}
function iw(o22) {
  o22.key === "Control" && (this._controlActive = true, this.domElement.getRootNode().addEventListener("keyup", this._interceptControlUp, { passive: true, capture: true }));
}
function nw(o22) {
  o22.key === "Control" && (this._controlActive = false, this.domElement.getRootNode().removeEventListener("keyup", this._interceptControlUp, { passive: true, capture: true }));
}
export {
  Bo,
  Bt,
  Cn,
  Ee,
  Gn,
  In,
  JA,
  Kt,
  Le,
  Lo,
  Lt,
  Ni,
  Nn,
  On,
  Pt,
  Qi,
  Re,
  Rr,
  Rt,
  Ti,
  Tn,
  UA,
  Vo,
  Vt,
  YA,
  Ye,
  Yn,
  Zo,
  _e,
  bn,
  cn,
  di,
  go,
  gr,
  he,
  j,
  kn,
  mi,
  nA,
  ne,
  pe,
  q8,
  qo,
  te,
  uf,
  uo,
  vo,
  xe,
  yt
};
