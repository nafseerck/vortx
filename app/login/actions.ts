"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { AUTH_COOKIE, createSessionToken } from "@/lib/auth"

export async function login(_prevState: { error: string } | undefined, formData: FormData) {
  const password = String(formData.get("password") ?? "")
  const expected = process.env.SITE_PASSWORD

  if (!expected) {
    return { error: "The site password is not configured. Add SITE_PASSWORD to continue." }
  }

  if (password !== expected) {
    return { error: "Incorrect password. Please try again." }
  }

  const token = await createSessionToken(expected)
  const cookieStore = await cookies()
  cookieStore.set(AUTH_COOKIE, token, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  })

  redirect("/")
}
