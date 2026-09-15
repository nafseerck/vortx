import type { Metadata } from "next"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { AUTH_COOKIE, expectedSessionToken } from "@/lib/auth"
import { LoginForm } from "./login-form"

export const metadata: Metadata = {
  title: "Access Required — BLSTX Dry Ice",
  description: "This investor presentation is private. Enter the access password to continue.",
  robots: { index: false, follow: false },
}

export default async function LoginPage() {
  // If already authenticated, skip the gate.
  const cookieStore = await cookies()
  const token = cookieStore.get(AUTH_COOKIE)?.value
  const expected = await expectedSessionToken()
  if (expected && token === expected) {
    redirect("/")
  }

  return (
    <main className="relative flex min-h-dvh items-center justify-center overflow-hidden px-6 py-16">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(120% 90% at 50% -10%, rgba(34,211,238,0.16), transparent 55%), radial-gradient(90% 70% at 85% 110%, rgba(212,175,55,0.12), transparent 60%), #04141a",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.4]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(80% 60% at 50% 40%, black, transparent)",
        }}
      />

      <section className="w-full max-w-md">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl shadow-2xl sm:p-10">
          <div className="mb-8 text-center">
            <p className="font-[family-name:var(--font-display)] text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300/80">
              BLSTX Dry Ice
            </p>
            <h1 className="mt-4 font-[family-name:var(--font-display)] text-2xl font-bold text-balance bg-gradient-to-b from-white to-cyan-100/70 bg-clip-text text-transparent sm:text-3xl">
              Private Investor Presentation
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-white/55 text-pretty">
              These details are confidential. Enter the access password to view the full plan.
            </p>
          </div>

          <LoginForm />

          <p className="mt-6 text-center text-xs text-white/40">Access is restricted to invited stakeholders.</p>
        </div>
      </section>
    </main>
  )
}
