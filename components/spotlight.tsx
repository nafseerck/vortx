'use client'

import type { ReactNode } from 'react'

/** Card wrapper whose glow follows the cursor (see .spotlight in globals.css). */
export function Spotlight({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`spotlight ${className}`}
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect()
        e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
        e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
      }}
    >
      {children}
    </div>
  )
}
