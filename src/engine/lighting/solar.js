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
export function solarPosition(o, A, e) {
  let t = ct * -e, i = ct * A, n = sw(o), a = lw(Uw(n)), f = ww(n, t) - a.ra, r = Rw(f, i, a.dec);
  return { azimuth: Fw(f, i, a.dec), altitude: (r + cw(r)) / ct };
}

export function seasonForDate(isoDate) {
  let A = isoDate.slice(5);
  return A >= "12-21" || A < "03-20" ? "summer" : A < "06-21" ? "autumn" : A < "09-22" ? "winter" : "spring";
}

export function buenosAiresNow() {
  return Object.fromEntries(new Intl.DateTimeFormat("en-CA", { timeZone: "America/Argentina/Buenos_Aires", year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", hourCycle: "h23" }).formatToParts(new Date()).map((A) => [A.type, A.value]));
}
