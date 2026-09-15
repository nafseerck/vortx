"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { AUTH_COOKIE, createSessionToken, getInvestorPassword } from "@/lib/auth"

export async function login(_prevState: { error: string } | undefined, formData: FormData) {
  const password = String(formData.get("password") ?? "")
  const expectedPassword = getInvestorPassword()

  if (password !== expectedPassword) {
    return { error: "Incorrect investor password. Please try again." }
  }

  const token = await createSessionToken(expectedPassword)
  const cookieStore = await cookies()
  cookieStore.set(AUTH_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  })

  redirect("/")
}
