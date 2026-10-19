import { getToken } from 'next-auth/jwt';
import { NextResponse, type NextRequest } from 'next/server';
import { canAccess, isAuthConfigured } from './auth/access';

export async function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const headers = { 'Cache-Control': 'private, no-store, max-age=0' };

  // The library's self-contained login/error/signout pages need no app bundles.
  // Keep every other path protected: the Three.js bundles contain house data.
  if (pathname.startsWith('/api/auth/')) return NextResponse.next({ headers });

  if (!isAuthConfigured()) {
    return new NextResponse('Acceso no configurado. Contactá al administrador.', {
      status: 503, headers,
    });
  }

  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });
  if (!canAccess(token)) {
    if (pathname === '/') {
      return NextResponse.redirect(new URL('/api/auth/signin?callbackUrl=%2F', request.url), { headers });
    }
    return new NextResponse('No autorizado', { status: 401, headers });
  }

  return NextResponse.next({ headers });
}

// Deliberately include public images, _next/static, _next/image and RSC requests.
export const config = { matcher: '/:path*' };
