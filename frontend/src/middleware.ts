import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value
  console.log(token)

  const isLoginPage = request.nextUrl.pathname.startsWith('/auth/login')

  if (!token && !isLoginPage) {
    return NextResponse.redirect(new URL('/auth/login', request.url))
  }

  if (token && isLoginPage) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/settings', '/products', '/categories', '/users'],
}
