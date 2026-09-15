import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { Wind, ShieldCheck, Timer } from 'lucide-react'

const points = [
  {
    icon: Wind,
    title: 'CO₂ sublimation',
    body: 'Non-abrasive dry ice blasting lifts contaminants without touching the substrate — protecting sensitive electronics and OEM finishes.',
  },
  {
    icon: ShieldCheck,
    title: 'Zero secondary waste',
    body: 'The medium sublimates on contact, leaving no residue, slurry, or run-off to dispose of. Nothing but the removed grime.',
  },
  {
    icon: Timer,
    title: 'Minimal downtime',
    body: 'Assets can often be cleaned in place, drastically reducing teardown and drying time versus water-and-chemical methods.',
  },
]

export function ExecutiveSummary() {
  return (
    <section id="summary" className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
      <SectionHeading
        eyebrow="Executive Summary"
        title={<>The value proposition</>}
        description="BLSTX addresses the urgent UAE demand for specialized, zero-water, chemical-free precision cleaning — combining high-ticket automotive preservation with scalable commercial B2B maintenance contracts."
      />

      <div className="mt-14 grid items-center gap-10 lg:grid-cols-2">
        <Reveal className="grid gap-4">
          {points.map((p) => (
            <div
              key={p.title}
              className="group flex gap-4 rounded-2xl border border-border/60 bg-card/50 p-5 backdrop-blur transition-colors hover:border-primary/40"
            >
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/12 text-primary ring-1 ring-primary/25">
                <p.icon className="size-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            </div>
          ))}
        </Reveal>

        <Reveal delay={120} className="relative">
          <div className="glow-ring overflow-hidden rounded-3xl border border-border/60">
            <img
              src="/images/transformation.png"
              alt="Split-screen of a car engine bay: grease-covered on the left, restored to factory-new with a dry ice vapor plume on the right"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 left-6 rounded-full border border-border/70 bg-background/90 px-4 py-2 text-xs font-medium backdrop-blur">
            <span className="text-muted-foreground">Before</span>
            <span className="mx-2 text-border">→</span>
            <span className="text-primary">Factory-new</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
