# Vercel deployment and Google access

The viewer remains a client-side React/Three.js SPA inside Next.js. Next.js handles Google OAuth and session checks on the server. There is no user database or password management.

## 1. Create Google OAuth credentials

In [Google Auth Platform](https://console.cloud.google.com/auth/overview), choose a project and configure Branding, Audience and a Web application client under Clients. Use External audience for personal Gmail accounts; Internal only works for accounts in the same Google Workspace organization.

Request only basic sign-in scopes (`openid`, `email`, `profile`). If the consent screen is in Testing, add each intended Google account as a test user as well as adding it to the app allowlist. Google test-user access and the app allowlist are separate controls.

Add these exact authorized redirect URIs to the Web application client:

```text
http://localhost:3000/api/auth/callback/google
https://YOUR-PRODUCTION-DOMAIN/api/auth/callback/google
```

Replace the production hostname with the actual Vercel domain or your custom domain. Every additional login hostname needs its own exact URI; do not use wildcard preview URLs. Use a stable preview domain with separate OAuth credentials if you need preview logins.

Keep the Client ID and Client secret for the next step. Do not put the secret in source control or this chat.

## 2. Import the repository into Vercel

- Import `gonzalo-s/3d_home`, select the Next.js framework and keep the repository root as the Root Directory.
- Use Node.js 24.x. The repository defaults are `npm ci`, `npm run build` and `.next`; `vercel.json` also explicitly selects Next.js.
- Remove any old project overrides that select Vite or publish `dist`.
- Configure the following private environment variables in Settings → Environment Variables for Production. Configure Preview separately if you intend to use it.

| Variable | Value |
| --- | --- |
| `NEXTAUTH_URL` | Canonical HTTPS origin, e.g. `https://your-project.vercel.app` (no path) |
| `NEXTAUTH_SECRET` | Random secret generated locally with `openssl rand -base64 32` |
| `GOOGLE_CLIENT_ID` | Web application OAuth Client ID |
| `GOOGLE_CLIENT_SECRET` | Web application OAuth Client secret |
| `ALLOWED_GOOGLE_EMAILS` | Exact addresses separated by commas, e.g. `owner@gmail.com,guest@example.com` |

None of these variables should have the `NEXT_PUBLIC_` prefix. Redeploy after adding or changing variables, including the allowlist. Keep the secret stable across deployments to preserve sessions; changing it invalidates existing sessions.

An absent secret, OAuth credentials or an empty allowlist blocks app access with HTTP 503. There is no development or production authentication bypass.

## 3. Verify the live deployment

1. Open the site in a private browser window. It must show Google sign-in before the viewer loads.
2. Sign in with an allowed Google account. Verify PB, PA, both floors, day/night, wall hover, layers, electrical selection and reference photos. The viewer geometry and lighting code are unchanged by the auth work.
3. Use **Cerrar sesión** in the header, confirm signout, and verify the site requires sign-in again.
4. Sign in with an account outside the allowlist. It must show Access Denied and never load the viewer.
5. In a private window, request `/assets/references/cad/cad-rear-bedroom.png` directly and a viewer JS URL copied from the authenticated Network panel. Both must return 401. Repeat these checks after an authenticated user has visited them to verify CDN behavior.
6. Remove one address from the allowlist, redeploy, and check that its existing session no longer opens the site or images.

## Local development and automated checks

Use Node.js 24.x, copy `.env.example` to `.env.local`, and fill in the same variables with the localhost origin and local Google redirect URI.

```sh
npm ci
npm run dev
```

Run checks with:

```sh
npm run check:data
npm run test:auth
npm run typecheck
npm run build
npm run test:auth:integration
```

The integration check starts a production server on `127.0.0.1:3128` (override with `AUTH_TEST_PORT`). It uses randomly generated test secrets and synthetic encrypted sessions in the test process. It verifies Google OAuth initiation, session denial/acceptance, RSC and bundle protection, images, private cache headers, revoked access and missing configuration. It does not bypass Google in the app and does not prove a real Google login: that requires configured OAuth credentials and the manual deployment check above.

## Access rules and limits

- Google must report a verified email, and that exact address must match the server allowlist. Matching ignores letter case and surrounding spaces; it does not expand aliases, dots or wildcards.
- Sessions are encrypted, HTTP-only cookies and expire after eight hours. On HTTPS, NextAuth uses secure cookies. Google tokens are not sent to the viewer.
- `src/proxy.ts` checks every app request, including `public` photos, image optimization, RSC requests and `/_next/static` JS. House data is bundled into the viewer JS, so those bundles must stay protected. The login/error/signout pages are provided by NextAuth and do not need app JS. Do not add the usual static-file exemptions to this proxy.
- Only the generic brand icons (`/favicon.ico`, `/icon.svg`, `/apple-icon.png`) are public so browsers can display the house favicon before login. These exact exceptions do not expose room references or viewer bundles.
- `src/app/page.tsx` also checks the session before rendering the viewer. New server endpoints or actions handling house data must check authorization themselves.
- Protected responses use `Cache-Control: private, no-store`. Do not add public CDN caching or service-worker caches around the app. Check this on Vercel as part of deployment validation.
- Removing an address takes effect on subsequent requests after redeployment. Previously downloaded information or an already open viewer cannot be erased from a user's browser.
- The reference HTML stays immutable in `reference/` and is not served by Next.js. The optional Vite scripts (`dev:legacy`, `build:legacy`, `preview:legacy`) are only for local migration comparison and have no auth layer. Never deploy their output.

Official references: [Google provider and redirect URIs](https://next-auth.js.org/providers/google), [NextAuth configuration](https://next-auth.js.org/configuration/options), [Next.js Proxy](https://nextjs.org/docs/app/api-reference/file-conventions/proxy), [Vercel environment variables](https://vercel.com/docs/environment-variables).
