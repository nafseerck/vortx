'use client'

import { useEffect, useRef } from 'react'

/** Canvas of drifting ice particles that are pushed away by the cursor. */
export function IceField({ className = '' }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let w = 0
    let h = 0
    let raf = 0
    const mouse = { x: -9999, y: -9999 }
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    const resize = () => {
      w = canvas.clientWidth
      h = canvas.clientHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()

    const count = Math.min(110, Math.floor((w * h) / 14000))
    const parts = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.8 + 0.4,
      vx: (Math.random() - 0.5) * 0.25,
      vy: -(Math.random() * 0.45 + 0.1),
      a: Math.random() * 0.6 + 0.15,
    }))

    const tick = () => {
      ctx.clearRect(0, 0, w, h)
      for (const p of parts) {
        const dx = p.x - mouse.x
        const dy = p.y - mouse.y
        const d2 = dx * dx + dy * dy
        if (d2 < 22000) {
          const f = (1 - d2 / 22000) * 1.6
          const d = Math.sqrt(d2) || 1
          p.x += (dx / d) * f
          p.y += (dy / d) * f
        }
        p.x += p.vx
        p.y += p.vy
        if (p.y < -10) {
          p.y = h + 10
          p.x = Math.random() * w
        }
        if (p.x < -10) p.x = w + 10
        if (p.x > w + 10) p.x = -10
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(190, 240, 255, ${p.a})`
        ctx.fill()
      }
      raf = requestAnimationFrame(tick)
    }
    tick()

    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect()
      mouse.x = e.clientX - r.left
      mouse.y = e.clientY - r.top
    }
    window.addEventListener('pointermove', onMove)
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={ref} aria-hidden="true" className={`pointer-events-none h-full w-full ${className}`} />
}
