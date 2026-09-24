"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { CUSTOMER_AUTH_COOKIE, expectedCustomerSessionToken, getCustomerPassword } from "@/lib/auth"

export async function loginCustomer(_prevState: { error: string } | undefined, formData: FormData) {
  const password = String(formData.get("password") ?? "")
  const redirectTo = String(formData.get("redirectTo") ?? "/customers")
  const expectedPassword = getCustomerPassword()

  if (password !== expectedPassword) {
    return { error: "Incorrect customer portal password. Please try again." }
  }

  const token = await expectedCustomerSessionToken()
  const cookieStore = await cookies()
  cookieStore.set(CUSTOMER_AUTH_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  })

  redirect(redirectTo.startsWith("/") ? redirectTo : "/customers")
}
