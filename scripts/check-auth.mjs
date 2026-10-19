// Run after npm run build. Uses isolated test credentials, never real Google accounts.
import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { once } from 'node:events';
import { randomBytes } from 'node:crypto';
import { readFile, readdir } from 'node:fs/promises';
import { encode } from 'next-auth/jwt';

const port = Number(process.env.AUTH_TEST_PORT ?? 3128);
const origin = `http://127.0.0.1:${port}`;
const referenceAssets = JSON.parse(await readFile('src/data/asset-map.json', 'utf8'));
const roomReferences = JSON.parse(await readFile('src/data/room-reference-views.json', 'utf8'));
const planPaths = roomReferences.map((room) => room.views.find((view) => view.kind === 'plan').image);
const firstImage = referenceAssets[0].path;
const lastImage = referenceAssets.at(-1).path;
const secret = randomBytes(32).toString('base64');
const env = {
  ...process.env,
  NEXTAUTH_URL: origin,
  NEXTAUTH_SECRET: secret,
  GOOGLE_CLIENT_ID: 'test-client',
  GOOGLE_CLIENT_SECRET: 'test-secret',
  ALLOWED_GOOGLE_EMAILS: 'owner@example.com',
};
delete env.VERCEL;
let output = '';

async function start(extraEnv = {}) {
  const server = spawn(process.execPath, ['node_modules/next/dist/bin/next', 'start', '--hostname', '127.0.0.1', '--port', String(port)], {
    env: { ...env, ...extraEnv }, stdio: ['ignore', 'pipe', 'pipe'],
  });
  server.stdout.on('data', (data) => { output += data; });
  server.stderr.on('data', (data) => { output += data; });
  for (let attempt = 0; attempt < 100; attempt++) {
    if (server.exitCode !== null) throw new Error(output);
    try {
      const response = await fetch(`${origin}/api/auth/csrf`);
      if (response.ok) return server;
    } catch { /* Wait for the local server to bind. */ }
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
  server.kill();
  throw new Error(`Server did not start: ${output}`);
}

async function stop(server) {
  const exited = once(server, 'exit');
  server.kill('SIGTERM');
  await exited;
}

async function cookie(token, options = {}) {
  return `next-auth.session-token=${await encode({ secret, token, ...options })}`;
}

const authorized = await cookie({ email: 'owner@example.com', googleVerified: true });
const denied = [
  '',
  'next-auth.session-token=forged',
  await cookie({ email: 'other@example.com', googleVerified: true }),
  await cookie({ email: 'owner@example.com', googleVerified: false }),
  await cookie({ email: 'owner@example.com' }),
  await cookie({ email: 'owner@example.com', googleVerified: true }, { maxAge: -60 }),
];

let server = await start();
try {
  const login = await fetch(`${origin}/api/auth/signin?callbackUrl=%2F`);
  assert.equal(login.status, 200);
  const loginHtml = await login.text();
  assert.match(loginHtml, /Sign in with Google/);
  assert.doesNotMatch(loginHtml, /\/_next\/static/);
  assert.match(login.headers.get('cache-control'), /no-store/);
  const csrfResponse = await fetch(`${origin}/api/auth/csrf`);
  const { csrfToken } = await csrfResponse.json();
  const csrfCookies = csrfResponse.headers.getSetCookie().map((value) => value.split(';')[0]).join('; ');
  const oauth = await fetch(`${origin}/api/auth/signin/google`, {
    method: 'POST', redirect: 'manual',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded', Cookie: csrfCookies },
    body: new URLSearchParams({ csrfToken, callbackUrl: '/' }),
  });
  assert.equal(oauth.status, 302);
  const googleUrl = new URL(oauth.headers.get('location'));
  assert.equal(googleUrl.hostname, 'accounts.google.com');
  assert.equal(googleUrl.searchParams.get('redirect_uri'), `${origin}/api/auth/callback/google`);
  assert.equal(googleUrl.searchParams.get('prompt'), 'select_account');
  assert(googleUrl.searchParams.get('state'));

  const allowedPage = await fetch(origin, { headers: { Cookie: authorized } });
  assert.equal(allowedPage.status, 200);
  assert.match(await allowedPage.text(), /Cerrar sesi/);
  const files = await readdir('.next/static', { recursive: true });
  const chunks = files.filter((file) => file.endsWith('.js')).map((file) => `/_next/static/${file.replaceAll('\\', '/')}`);
  assert(chunks.length > 0);
  const protectedPaths = [firstImage, lastImage, ...planPaths, `/_next/image?url=${encodeURIComponent(firstImage)}&w=640&q=75`, ...chunks];
  for (const path of protectedPaths) {
    for (const value of denied) {
      const response = await fetch(origin + path, { redirect: 'manual', headers: { Cookie: value } });
      assert.equal(response.status, 401, path);
      assert.match(response.headers.get('cache-control'), /no-store/);
    }
  }
  for (const value of denied) {
    for (const headers of [{}, { RSC: '1', 'Next-Router-Prefetch': '1' }]) {
      const response = await fetch(origin, { redirect: 'manual', headers: { ...headers, Cookie: value } });
      assert.equal(response.status, 307);
      assert.match(response.headers.get('location'), /\/api\/auth\/signin/);
    }
  }
  // Confirm authenticated requests work, including after anonymous requests.
  for (const path of [...referenceAssets.map((asset) => asset.path), ...planPaths, ...chunks]) {
    const response = await fetch(origin + path, { headers: { Cookie: authorized } });
    assert.equal(response.status, 200, path);
    assert.match(response.headers.get('cache-control'), /private.*no-store/, path);
  }
  assert.equal((await fetch(`${origin}/api/auth/signout`, { headers: { Cookie: authorized } })).status, 200);
  const signedOut = await fetch(`${origin}/api/auth/signout`, {
    method: 'POST', redirect: 'manual',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded', Cookie: `${csrfCookies}; ${authorized}` },
    body: new URLSearchParams({ csrfToken, callbackUrl: '/' }),
  });
  assert.equal(signedOut.status, 302);
  assert(signedOut.headers.getSetCookie().some((value) => value.startsWith('next-auth.session-token=;')));
  assert.equal((await fetch(origin, { redirect: 'manual' })).status, 307);
  const forgedCallback = await fetch(`${origin}/api/auth/callback/google?code=forged&state=forged`, { redirect: 'manual' });
  assert.equal(forgedCallback.status, 302);
  assert.equal(forgedCallback.headers.getSetCookie().some((value) => value.startsWith('next-auth.session-token=')), false);
  console.log('PASS: Google initiation, verified sessions, anonymous/forged/expired/denied sessions, RSC, all JS chunks, images, private caching, signout.');
} finally {
  await stop(server);
}

server = await start({ ALLOWED_GOOGLE_EMAILS: 'different@example.com' });
try {
  assert.equal((await fetch(origin + firstImage, { headers: { Cookie: authorized } })).status, 401);
  console.log('PASS: removing an email denies its existing session.');
} finally {
  await stop(server);
}

server = await start({ ALLOWED_GOOGLE_EMAILS: '' });
try {
  assert.equal((await fetch(origin, { redirect: 'manual' })).status, 503);
  assert.equal((await fetch(origin + firstImage, { headers: { Cookie: authorized } })).status, 503);
  console.log('PASS: missing configuration fails closed.');
} finally {
  await stop(server);
}
