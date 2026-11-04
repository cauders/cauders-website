import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const DEV_CACHE_COOKIE = '__cauders_dev_cache_reset';
const DEV_CACHE_VERSION = 'v1';

export function middleware(request: NextRequest) {
  if (process.env.NODE_ENV !== 'production') {
    const response = NextResponse.next();
    response.headers.set('Cache-Control', 'no-store, must-revalidate');

    if (request.cookies.get(DEV_CACHE_COOKIE)?.value !== DEV_CACHE_VERSION) {
      response.headers.set('Clear-Site-Data', '"cache"');
      response.cookies.set(DEV_CACHE_COOKIE, DEV_CACHE_VERSION, {
        path: '/',
        sameSite: 'lax',
      });
    }

    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
