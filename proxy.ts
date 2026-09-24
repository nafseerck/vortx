import { type NextRequest, NextResponse } from "next/server"
import {
  INVESTOR_AUTH_COOKIE,
  CUSTOMER_AUTH_COOKIE,
  expectedInvestorSessionToken,
  expectedCustomerSessionToken,
} from "@/lib/auth"

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  // 1. Exclude public assets, static files, and login endpoints
  if (
    pathname.startsWith("/login") ||
    pathname.startsWith("/login-customer") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    /\.(?:png|jpg|jpeg|svg|gif|webp|ico|glb|gltf|mp3|mp4|woff2?)$/.test(pathname)
  ) {
    return NextResponse.next()
  }

  // 2. Main Page (/) is public (Intro Video page)
  if (pathname === "/") {
    return NextResponse.next()
  }

  // 3. Protect Investor Area (/investor-area and /investor)
  if (pathname.startsWith("/investor-area") || pathname.startsWith("/investor")) {
    const token = request.cookies.get(INVESTOR_AUTH_COOKIE)?.value
    const expected = await expectedInvestorSessionToken()

    if (expected && token === expected) {
      return NextResponse.next()
    }

    const loginUrl = new URL("/login", request.url)
    loginUrl.searchParams.set("redirect", pathname)
    return NextResponse.redirect(loginUrl)
  }

  // 4. Protect Customer Area (/customers)
  if (pathname.startsWith("/customers")) {
    const token = request.cookies.get(CUSTOMER_AUTH_COOKIE)?.value
    const expected = await expectedCustomerSessionToken()

    if (expected && token === expected) {
      return NextResponse.next()
    }

    const loginUrl = new URL("/login-customer", request.url)
    loginUrl.searchParams.set("redirect", pathname)
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|svg|gif|webp|ico|glb|gltf|mp3|mp4|woff2?)$).*)"],
}
