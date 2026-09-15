"use client"

import { useActionState } from "react"
import { useFormStatus } from "react-dom"
import { login } from "./actions"

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className="group relative inline-flex w-full items-center justify-center rounded-lg bg-gradient-to-b from-cyan-400 to-cyan-500 px-5 py-3 font-[family-name:var(--font-display)] text-sm font-semibold text-[#04141a] transition-all hover:from-cyan-300 hover:to-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
    >
      {pending ? "Unlocking…" : "Unlock presentation"}
    </button>
  )
}

export function LoginForm() {
  const [state, formAction] = useActionState(login, undefined)

  return (
    <form action={formAction} className="space-y-4">
      <div>
        <label
          htmlFor="password"
          className="mb-2 block font-[family-name:var(--font-display)] text-xs font-medium uppercase tracking-[0.2em] text-white/60"
        >
          Access password
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
          placeholder="Enter password"
          className="w-full rounded-lg border border-white/12 bg-[#04141a]/60 px-4 py-3 text-sm text-white placeholder:text-white/30 transition-colors focus:border-cyan-400/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
        />
      </div>

      {state?.error ? (
        <p id="password-error" role="alert" className="text-sm text-rose-300">
          {state.error}
        </p>
      ) : null}

      <SubmitButton />
    </form>
  )
}
