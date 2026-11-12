import type { ReactNode } from 'react'
import { Reveal } from '@/components/reveal'

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = 'left',
}: {
  eyebrow: string
  title: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
}) {
  const center = align === 'center'
  return (
    <Reveal className={center ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/5 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
        <span className="size-1.5 rounded-full bg-primary shadow-[0_0_10px_2px] shadow-primary/70" />
        {eyebrow}
      </span>
      <h2 className="mt-5 text-balance text-4xl font-bold leading-[1.02] sm:text-5xl md:text-6xl">{title}</h2>
      {description && (
        <p className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">{description}</p>
      )}
    </Reveal>
  )
}
