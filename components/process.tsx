import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { Snowflake, Wind, Sparkles } from 'lucide-react'

const steps = [
  {
    icon: Snowflake,
    step: '01',
    title: 'Solid CO₂ pellets',
    body: 'Food-grade dry ice pellets at −78.5°C are loaded into the blaster — a dry, non-toxic, non-conductive media.',
  },
  {
    icon: Wind,
    step: '02',
    title: 'Supersonic blast',
    body: 'Compressed air accelerates the pellets onto the surface. The thermal shock cracks and lifts contaminants instantly.',
  },
  {
    icon: Sparkles,
    step: '03',
    title: 'Sublimation',
    body: 'Pellets convert straight to gas and vanish — leaving zero water, zero residue, and nothing to clean up afterward.',
  },
]

export function Process() {
  return (
    <section id="process" className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="glow-ring relative overflow-hidden rounded-3xl border border-border/60">
              <img
                src="/images/process-nozzle.png"
                alt="A dry ice blasting nozzle spraying a powerful jet of dry ice and white vapor onto a metal surface"
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" aria-hidden="true" />
            </div>
          </Reveal>

          <div>
            <SectionHeading
              eyebrow="The Science"
              title={<>Clean by physics, not chemicals</>}
              description="Dry-ice blasting uses temperature and kinetic energy — no water, no solvents, no abrasion. Here's how a single pass works."
            />
            <div className="mt-10 grid gap-4">
              {steps.map((s, i) => (
                <Reveal key={s.step} delay={i * 100}>
                  <div className="flex gap-5 rounded-2xl border border-border/60 bg-card/50 p-5 backdrop-blur">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                      <s.icon className="size-5" aria-hidden="true" />
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-display text-xs font-bold tracking-widest text-accent">{s.step}</span>
                        <h4 className="font-semibold">{s.title}</h4>
                      </div>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
