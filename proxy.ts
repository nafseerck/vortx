import { type NextRequest, NextResponse } from "next/server"
import { AUTH_COOKIE, expectedSessionToken } from "@/lib/auth"

export async function proxy(request: NextRequest) {
  const token = request.cookies.get(AUTH_COOKIE)?.value
  const expected = await expectedSessionToken()

  // If no password is configured, don't lock the user out of their own site.
  if (!expected || token === expected) {
    return NextResponse.next()
  }

  const loginUrl = new URL("/login", request.url)
  return NextResponse.redirect(loginUrl)
}

export const config = {
  // Protect everything except the login route, Next internals, and static assets.
  matcher: ["/((?!login|_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|svg|gif|webp|ico|glb|gltf|mp3|woff2?)$).*)"],
}
