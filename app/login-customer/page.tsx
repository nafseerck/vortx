import type { Metadata } from "next"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { CUSTOMER_AUTH_COOKIE, expectedCustomerSessionToken } from "@/lib/auth"
import { CustomerLoginForm } from "./login-customer-form"

export const metadata: Metadata = {
  title: "Customer Access Required — BLASTX Dry Ice",
  description: "Customer Access Portal for BLASTX Dry Ice Dubai.",
  robots: { index: false, follow: false },
}

export default async function CustomerLoginPage() {
  const cookieStore = await cookies()
  const token = cookieStore.get(CUSTOMER_AUTH_COOKIE)?.value
  const expected = await expectedCustomerSessionToken()
  if (expected && token === expected) {
    redirect("/customers")
  }

  return (
    <main className="relative flex min-h-dvh items-center justify-center overflow-hidden px-6 py-16 bg-[#04141a]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(120% 90% at 50% -10%, rgba(34,211,238,0.2), transparent 60%), radial-gradient(90% 70% at 85% 110%, rgba(6,182,212,0.15), transparent 65%), #04141a",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.3]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(80% 60% at 50% 40%, black, transparent)",
        }}
      />

      <section className="w-full max-w-md">
        <div className="rounded-3xl border border-cyan-400/20 bg-[#081b22]/90 p-8 backdrop-blur-2xl shadow-2xl shadow-cyan-950/50 sm:p-10">
          <div className="mb-8 text-center flex flex-col items-center">
            <span className="flex size-16 items-center justify-center overflow-hidden rounded-2xl ring-1 ring-cyan-400/30 mb-4 shadow-xl shadow-cyan-950/50">
              <img
                src="/logo.png"
                alt="BLASTX"
                width={64}
                height={64}
                className="size-full object-cover"
              />
            </span>
            <p className="font-display text-xs font-bold uppercase tracking-[0.35em] text-cyan-300">
              BLASTX Dry Ice
            </p>
            <h1 className="mt-2 font-display text-2xl font-bold text-balance bg-gradient-to-b from-white to-cyan-100/70 bg-clip-text text-transparent sm:text-3xl">
              Client Portal Access
            </h1>
            <p className="mt-2 text-xs leading-relaxed text-white/60 text-pretty">
              Enter password to preview Customer Services &amp; Showcase.
            </p>
          </div>

          <CustomerLoginForm />
        </div>
      </section>
    </main>
  )
}
