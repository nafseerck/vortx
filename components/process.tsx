import { Snowflake, Wind, Sparkles } from 'lucide-react'
import { SectionTitle } from '@/components/section-title'
import { Reveal } from '@/components/reveal'

const steps = [
  {
    icon: Snowflake,
    title: 'Solid CO₂ pellets',
    body: 'Food-grade dry ice pellets at −78.5°C are loaded into the blaster — a dry, non-toxic, non-conductive media.',
  },
  {
    icon: Wind,
    title: 'Supersonic blast',
    body: 'Compressed air accelerates the pellets onto the surface. The thermal shock cracks and lifts contaminants instantly.',
  },
  {
    icon: Sparkles,
    title: 'Sublimation',
    body: 'Pellets convert straight to gas and vanish — leaving zero water, zero residue, and nothing to clean up afterward.',
  },
]

export function Process() {
  return (
    <section id="process" className="relative py-24 sm:py-36">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        {/* Image stays pinned while the steps scroll past */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <div className="group relative overflow-hidden rounded-[2rem] border border-white/10">
              <img
                src="/images/process-nozzle.png"
                alt="A dry ice blasting nozzle spraying a jet of dry ice and white vapor onto a metal surface"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="glass absolute inset-x-5 bottom-5 flex items-center justify-between rounded-2xl px-5 py-4">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Pellet temperature</p>
                  <p className="font-display text-2xl font-bold">−78.5°C</p>
                </div>
                <Snowflake className="size-8 animate-spin text-primary [animation-duration:12s]" aria-hidden="true" />
              </div>
            </div>
          </Reveal>
        </div>

        <div>
          <SectionTitle
            eyebrow="The science"
            title={
              <>
                Clean by physics, <span className="text-gradient-ice">not chemicals</span>
              </>
            }
            description="Dry ice blasting uses temperature and kinetic energy — no water, no solvents, no abrasion. Here's how a single pass works."
          />

          <ol className="relative mt-12 space-y-5 before:absolute before:bottom-8 before:left-[27px] before:top-8 before:w-px before:bg-gradient-to-b before:from-primary/60 before:via-primary/20 before:to-transparent">
            {steps.map((s, i) => (
              <li key={s.title}>
                <Reveal delay={i * 120}>
                  <div className="group relative flex gap-5 rounded-3xl border border-transparent p-3 transition-colors duration-500 hover:border-white/10 hover:bg-white/[0.03]">
                    <span className="relative z-10 flex size-14 shrink-0 items-center justify-center rounded-2xl border border-primary/30 bg-background text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-[0_0_30px_-4px] group-hover:shadow-primary">
                      <s.icon className="size-6" aria-hidden="true" />
                    </span>
                    <div className="pt-1">
                      <span className="font-display text-xs font-bold tracking-[0.25em] text-primary/70">
                        STEP 0{i + 1}
                      </span>
                      <h3 className="mt-1 text-2xl font-bold">{s.title}</h3>
                      <p className="mt-2 leading-relaxed text-muted-foreground">{s.body}</p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
