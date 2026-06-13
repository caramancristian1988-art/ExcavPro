import { NextRequest, NextResponse } from 'next/server'
import { jwtVerify } from 'jose'

const COOKIE = 'admin_session'

function secret() {
  const s = process.env.JWT_SECRET ?? ''
  return new TextEncoder().encode(s)
}

export async function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl

  const isAdminUI  = pathname.startsWith('/admin') && pathname !== '/admin/login'
  const isAdminAPI = pathname.startsWith('/api/admin')

  if (!isAdminUI && !isAdminAPI) return NextResponse.next()

  const token = req.cookies.get(COOKIE)?.value

  if (!token) {
    if (isAdminAPI) return NextResponse.json({ error: 'Neautorizat' }, { status: 401 })
    return NextResponse.redirect(new URL('/admin/login', req.url))
  }

  try {
    await jwtVerify(token, secret())
    return NextResponse.next()
  } catch {
    if (isAdminAPI) {
      return NextResponse.json({ error: 'Sesiune expirată' }, { status: 401 })
    }
    const res = NextResponse.redirect(new URL('/admin/login', req.url))
    res.cookies.delete(COOKIE)
    return res
  }
}

export const config = {
  matcher: ['/admin/:path*', '/api/admin/:path*'],
}
