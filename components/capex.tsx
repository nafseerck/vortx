import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { Gauge, Zap, Warehouse } from 'lucide-react'

const items = [
  {
    icon: Gauge,
    name: 'Atlas Copco GA22VSDFF',
    desc: '22 kW VSD compressor with integrated dryer & filter, ensuring continuous dry-air supply.',
    cost: 'AED 43,050',
  },
  {
    icon: Zap,
    name: 'CMW ATX25E v2 Blasting Unit',
    desc: 'Heavy-duty precision blasting machine — the operational core of every job.',
    cost: 'AED 40,400',
  },
  {
    icon: Warehouse,
    name: 'Facility setup',
    desc: 'Warehouse retrofit: 3-phase electrical upgrades, soundproofing, and deposit.',
    cost: 'AED 35,000',
  },
]

export function Capex() {
  return (
    <section id="capex" className="relative overflow-hidden py-24 sm:py-32">
      <div className="bg-grid absolute inset-0 -z-10 opacity-60" aria-hidden="true" />
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Capital Expenditure"
            title={<>Optimized setup, premium hardware</>}
            description="Initial investment is heavily optimized — sourcing durable, premium machinery to guarantee continuous operational uptime."
          />
          <Reveal delay={100}>
            <div className="rounded-2xl border border-primary/30 bg-primary/10 px-6 py-4 text-right">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">
                Total CAPEX
              </div>
              <div className="font-display text-3xl font-bold text-primary">~AED 150,000</div>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.name} delay={i * 90}>
              <div className="group flex h-full flex-col rounded-2xl border border-border/60 bg-card/50 p-6 backdrop-blur transition-colors hover:border-primary/40">
                <span className="mb-5 flex size-12 items-center justify-center rounded-xl bg-primary/12 text-primary ring-1 ring-primary/25">
                  <it.icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="text-lg font-semibold">{it.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {it.desc}
                </p>
                <div className="mt-5 border-t border-border/50 pt-4 font-display text-xl font-bold text-foreground">
                  {it.cost}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
