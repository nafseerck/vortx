"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { INVESTOR_AUTH_COOKIE, expectedInvestorSessionToken, getInvestorPassword } from "@/lib/auth"

export async function login(_prevState: { error: string } | undefined, formData: FormData) {
  const password = String(formData.get("password") ?? "")
  const redirectTo = String(formData.get("redirectTo") ?? "/investor-area")
  const expectedPassword = getInvestorPassword()

  // Allow both Blastxdryice@2026 and legacy Blstxdryice@2026
  const isValid =
    password === expectedPassword ||
    password.toLowerCase() === expectedPassword.toLowerCase() ||
    password === "Blstxdryice@2026"

  if (!isValid) {
    return { error: "Incorrect investor password. Please try again." }
  }

  const token = await expectedInvestorSessionToken()
  const cookieStore = await cookies()
  cookieStore.set(INVESTOR_AUTH_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  })

  redirect(redirectTo.startsWith("/") ? redirectTo : "/investor-area")
}
