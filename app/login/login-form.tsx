"use client"

import { useActionState } from "react"
import { useFormStatus } from "react-dom"
import { login } from "./actions"
import { Lock, ArrowRight, ShieldCheck, Sparkles } from "lucide-react"

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className="group relative inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-cyan-500 px-5 py-3 font.display text-sm font-bold text-[#04141a] transition-all hover:from-cyan-300 hover:to-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 disabled:cursor-not-allowed disabled:opacity-60 shadow-lg shadow-cyan-500/20"
    >
      <Lock className="size-4" />
      {pending ? "Authenticating…" : "Unlock Investor Presentation"}
    </button>
  )
}

export function LoginForm() {
  const [state, formAction] = useActionState(login, undefined)

  return (
    <div className="space-y-6">
      <form action={formAction} className="space-y-4">
        <div>
          <label
            htmlFor="password"
            className="mb-2 flex items-center justify-between font-display text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300/80"
          >
            <span>Investor Password</span>
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            autoFocus
            required
            aria-invalid={state?.error ? true : undefined}
            aria-describedby={state?.error ? "password-error" : undefined}
            placeholder="Enter investor password"
            className="w-full rounded-xl border border-white/15 bg-[#04141a]/80 px-4 py-3.5 text-sm text-white placeholder:text-white/30 transition-colors focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/25"
          />
        </div>

        {state?.error ? (
          <p id="password-error" role="alert" className="text-sm font-medium text-rose-300">
            {state.error}
          </p>
        ) : null}

        <SubmitButton />
      </form>

      {/* Customer Quick Option Divider */}
      <div className="relative border-t border-white/10 pt-6 text-center">
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#081b22] px-3 text-xs uppercase tracking-widest text-white/40">
          or
        </span>

        <div className="rounded-xl border border-cyan-400/30 bg-cyan-950/30 p-4 text-left backdrop-blur">
          <div className="flex items-center gap-2 text-cyan-300 font-bold text-sm">
            <Sparkles className="size-4 text-cyan-400" />
            Looking for Customer Services?
          </div>
          <p className="mt-1 text-xs text-white/60">
            Explore dry ice precision cleaning services, photo galleries, and applications without any password.
          </p>
          <a
            href="/customers"
            className="mt-3 inline-flex items-center justify-between w-full rounded-lg border border-cyan-400/40 bg-cyan-500/10 px-4 py-2.5 text-xs font-semibold text-cyan-200 transition-colors hover:bg-cyan-500/20"
          >
            <span>Visit Customer Website</span>
            <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    </div>
  )
}
