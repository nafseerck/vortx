import { type NextRequest, NextResponse } from "next/server"
import { AUTH_COOKIE, expectedSessionToken } from "@/lib/auth"

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Exclude /customers, /login, static assets from password gate
  if (
    pathname.startsWith("/customers") ||
    pathname.startsWith("/login") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    /\.(?:png|jpg|jpeg|svg|gif|webp|ico|glb|gltf|mp3|woff2?)$/.test(pathname)
  ) {
    return NextResponse.next()
  }

  const token = request.cookies.get(AUTH_COOKIE)?.value
  const expected = await expectedSessionToken()

  // Protect / (Investor view) with session token check
  if (expected && token === expected) {
    return NextResponse.next()
  }

  const loginUrl = new URL("/login", request.url)
  return NextResponse.redirect(loginUrl)
}

export const config = {
  matcher: [
    "/((?!customers|login|_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|svg|gif|webp|ico|glb|gltf|mp3|woff2?)$).*)",
  ],
}
