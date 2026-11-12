'use client'

import { useEffect, useRef, useState } from 'react'

/** Animates a number from 0 to `value` when it scrolls into view. */
export function CountUp({
  value,
  decimals = 0,
  prefix = '',
  suffix = '',
}: {
  value: number
  decimals?: number
  prefix?: string
  suffix?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const [n, setN] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let raf = 0
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      io.disconnect()
      const start = performance.now()
      const step = (now: number) => {
        const t = Math.min((now - start) / 1600, 1)
        setN(value * (1 - Math.pow(1 - t, 4)))
        if (t < 1) raf = requestAnimationFrame(step)
      }
      raf = requestAnimationFrame(step)
    })
    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [value])

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {n.toFixed(decimals)}
      {suffix}
    </span>
  )
}
