import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { Car, BatteryCharging, Ship, Plane, Factory } from 'lucide-react'

const automotive = [
  {
    icon: Car,
    title: 'Hypercars & classics',
    body: 'Safe cleaning of complex engine bays without risking delicate OEM parts, exposed oxygen sensors, or custom carbon-fiber accents.',
  },
  {
    icon: BatteryCharging,
    title: 'EV battery safety',
    body: 'As the EV market grows, strictly waterless cleaning in battery compartments is a safety mandate — not just a preference.',
  },
]

const commercial = [
  {
    icon: Ship,
    title: 'Marine',
    body: 'Salt, biofouling, and corrosion stripped from yacht hulls, engines, and deck hardware without abrasive damage or chemical runoff into the water.',
  },
  {
    icon: Plane,
    title: 'Aviation',
    body: 'Non-abrasive, residue-free cleaning of aircraft components, turbine parts, and airframes — preserving delicate surfaces while meeting strict maintenance standards.',
  },
]

const industrial = {
  icon: Factory,
  title: 'Industrial maintenance',
  body: 'Recurring B2B contracts for machinery, molds, and production equipment — dry-ice blasting removes grease, residue, and buildup with zero disassembly and no secondary waste, keeping lines running with minimal downtime.',
}

function NicheCard({
  label,
  items,
}: {
  label: string
  items: typeof automotive
}) {
  return (
    <div className="rounded-3xl border border-border/60 bg-card/50 p-6 backdrop-blur sm:p-8">
      <h3 className="mb-6 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
        <span className="h-px w-6 bg-accent/60" aria-hidden="true" />
        {label}
      </h3>
      <div className="grid gap-5">
        {items.map((it) => (
          <div key={it.title} className="flex gap-4">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
              <it.icon className="size-5" aria-hidden="true" />
            </span>
            <div>
              <h4 className="font-semibold">{it.title}</h4>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{it.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function Market() {
  return (
    <section id="opportunity" className="relative overflow-hidden py-24 sm:py-32">
      <div className="bg-grid absolute inset-0 -z-10" aria-hidden="true" />
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Market Opportunity"
          title={<>Two high-value niches</>}
          description="BLSTX capitalizes on Dubai's premium automotive density and increasingly strict environmental mandates on commercial waste and water usage."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <NicheCard label="Automotive precision" items={automotive} />
          </Reveal>
          <Reveal delay={120}>
            <NicheCard label="Commercial scalability" items={commercial} />
          </Reveal>
        </div>

        <Reveal delay={80} className="mt-6">
          <div className="rounded-3xl border border-border/60 bg-card/50 p-6 backdrop-blur sm:p-8">
            <h3 className="mb-6 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              <span className="h-px w-6 bg-accent/60" aria-hidden="true" />
              Recurring revenue
            </h3>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
                <industrial.icon className="size-5" aria-hidden="true" />
              </span>
              <div>
                <h4 className="font-semibold">{industrial.title}</h4>
                <p className="mt-1 max-w-3xl text-sm leading-relaxed text-muted-foreground">{industrial.body}</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100} className="mt-6">
          <div className="glow-ring relative overflow-hidden rounded-3xl border border-border/60">
            <img
              src="/images/car-lift.png"
              alt="A luxury sports car on a lift while a technician in full PPE dry-ice blasts the undercarriage in a pristine garage"
              className="aspect-[16/7] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" aria-hidden="true" />
            <p className="absolute bottom-5 left-6 max-w-sm text-sm font-medium text-foreground">
              The setup in action — precision undercarriage detailing in a controlled, well-lit bay.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
