'use client'

import { useState, useRef, useCallback } from 'react'
import { Sparkles, MoveHorizontal } from 'lucide-react'

export function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const x = clientX - rect.left
      const percent = Math.min(Math.max((x / rect.width) * 100, 0), 100)
      setSliderPos(percent)
    },
    []
  )

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!isDragging) return
      handleMove(e.touches[0].clientX)
    },
    [isDragging, handleMove]
  )

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging) return
      handleMove(e.clientX)
    },
    [isDragging, handleMove]
  )

  return (
    <div className="relative mx-auto w-full max-w-5xl rounded-3xl border border-primary/30 bg-card/40 p-4 sm:p-6 backdrop-blur-xl shadow-2xl">
      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <span className="flex size-7 items-center justify-center rounded-lg bg-primary/20 text-primary">
            <Sparkles className="size-4" />
          </span>
          <h3 className="font-display text-lg font-bold tracking-wide text-foreground">
            Interactive Sublimation Reveal
          </h3>
        </div>
        <p className="text-xs text-muted-foreground">
          Drag slider left/right to compare before &amp; after dry-ice precision restoration
        </p>
      </div>

      <div
        ref={containerRef}
        className="group relative aspect-[16/9] sm:aspect-[21/9] w-full select-none overflow-hidden rounded-2xl border border-border/80 cursor-ew-resize"
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
        onTouchMove={handleTouchMove}
      >
        {/* After / Clean Image (Background full width) */}
        <img
          src="/images/transformation.png"
          alt="Factory-new restored engine bay after BLASTX dry ice blasting"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute top-4 right-4 rounded-full bg-cyan-500/80 px-3 py-1 text-xs font-bold text-black shadow-lg backdrop-blur">
          AFTER — BLASTX Restored
        </div>

        {/* Before / Grimy Image (Clipped overlay) */}
        <div
          className="absolute inset-y-0 left-0 overflow-hidden border-r-2 border-cyan-400"
          style={{ width: `${sliderPos}%` }}
        >
          <img
            src="/images/gallery-engine.png"
            alt="Original contaminated grease-covered engine bay before cleaning"
            className="absolute inset-0 h-full w-full object-cover max-w-none"
            style={{
              width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
              height: containerRef.current ? `${containerRef.current.clientHeight}px` : '100%',
            }}
          />
          <div className="absolute top-4 left-4 rounded-full bg-black/80 px-3 py-1 text-xs font-bold text-white/90 shadow-lg backdrop-blur">
            BEFORE — Contaminated
          </div>
        </div>

        {/* Divider Handle */}
        <div
          className="absolute top-0 bottom-0 z-20 flex -translate-x-1/2 items-center pointer-events-none"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="flex size-10 items-center justify-center rounded-full border-2 border-cyan-300 bg-background/90 text-primary shadow-xl backdrop-blur transition-transform group-hover:scale-110">
            <MoveHorizontal className="size-5" />
          </div>
        </div>
      </div>
    </div>
  )
}
