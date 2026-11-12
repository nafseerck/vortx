'use client'

import { useRef, useState } from 'react'
import { MoveHorizontal } from 'lucide-react'
import { SectionTitle } from '@/components/section-title'
import { Reveal } from '@/components/reveal'

export function BeforeAfter() {
  const [pos, setPos] = useState(50)
  const dragging = useRef(false)

  const move = (e: React.PointerEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    setPos(Math.min(Math.max(((e.clientX - r.left) / r.width) * 100, 0), 100))
  }

  return (
    <section className="relative py-24 sm:py-36">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionTitle
          align="center"
          eyebrow="Before / after"
          title={
            <>
              Drag to reveal the <span className="text-gradient-ice">difference</span>
            </>
          }
          description="The same engine bay, one pass apart. No water, no teardown, no residue."
        />

        <Reveal className="mt-12">
          <div
            className="group relative aspect-[4/3] w-full cursor-ew-resize touch-pan-y select-none overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_40px_120px_-40px] shadow-primary/30 sm:aspect-[21/9]"
            onPointerDown={(e) => {
              dragging.current = true
              e.currentTarget.setPointerCapture(e.pointerId)
              move(e)
            }}
            onPointerMove={(e) => dragging.current && move(e)}
            onPointerUp={() => (dragging.current = false)}
            onPointerCancel={() => (dragging.current = false)}
            role="slider"
            aria-label="Before and after comparison"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(pos)}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'ArrowLeft') setPos((p) => Math.max(p - 5, 0))
              if (e.key === 'ArrowRight') setPos((p) => Math.min(p + 5, 100))
            }}
          >
            <img
              src="/images/transformation.png"
              alt="Restored engine bay after BLASTX dry ice blasting"
              draggable={false}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <img
              src="/images/gallery-engine.png"
              alt="Grease-covered engine bay before cleaning"
              draggable={false}
              className="absolute inset-0 h-full w-full object-cover"
              style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
            />

            <span className="glass absolute left-5 top-5 rounded-full px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider">
              Before
            </span>
            <span className="absolute right-5 top-5 rounded-full bg-primary px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-primary-foreground">
              After
            </span>

            <div
              className="pointer-events-none absolute inset-y-0 w-px bg-primary shadow-[0_0_24px_2px] shadow-primary"
              style={{ left: `${pos}%` }}
            >
              <span className="absolute left-1/2 top-1/2 flex size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-primary bg-background/80 text-primary backdrop-blur transition-transform duration-300 group-hover:scale-110">
                <MoveHorizontal className="size-5" aria-hidden="true" />
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
