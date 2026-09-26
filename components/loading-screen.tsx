'use client'

import { useEffect, useState } from 'react'

export function LoadingScreen() {
  const [done, setDone] = useState(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const fadeTimer = setTimeout(() => setDone(true), 1600)
    const removeTimer = setTimeout(() => setHidden(true), 2300)
    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(removeTimer)
    }
  }, [])

  if (hidden) return null

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-700 ${
        done ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
    >
      <div className="absolute left-1/2 top-1/2 size-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl" />
      <div className="relative flex flex-col items-center">
        <span className="relative flex size-20 items-center justify-center">
          <span className="absolute inset-0 animate-ping rounded-full bg-primary/30" />
          <span className="relative flex size-20 items-center justify-center overflow-hidden rounded-full ring-2 ring-primary/50 shadow-2xl shadow-cyan-500/20">
            <img
              src="/logo.png"
              alt="BLASTX"
              width={80}
              height={80}
              className="size-full object-cover animate-pulse"
            />
          </span>
        </span>
        <p className="mt-6 font-display text-2xl font-bold tracking-[0.35em] text-foreground">BLASTX</p>
        <div className="mt-4 h-px w-40 overflow-hidden bg-border/60">
          <div className="h-full w-full origin-left animate-[loadbar_1.5s_ease-in-out] bg-gradient-to-r from-primary to-accent" />
        </div>
        <p className="mt-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">Dry Ice · Loading</p>
      </div>
    </div>
  )
}
