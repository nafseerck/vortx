import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { Truck, Volume2, Cog } from 'lucide-react'

const risks = [
  {
    icon: Truck,
    factor: 'Supply chain (dry ice)',
    mitigation:
      'Establish dual-supplier contracts with regional gas companies in Dubai to lock in stable rates, strictly within the AED 10k monthly budget cap.',
  },
  {
    icon: Volume2,
    factor: 'Noise & safety compliance',
    mitigation:
      'Install acoustic bay curtains and enforce strict EAR/PPE protocols to exceed UAE OSHA noise and safety regulations.',
  },
  {
    icon: Cog,
    factor: 'Equipment downtime',
    mitigation:
      'Maintain in-house inventory of critical wear-and-tear spares (nozzles, seals) and leverage Atlas Copco\u2019s extensive local service network.',
  },
]

export function Risk() {
  return (
    <section id="risk" className="relative overflow-hidden py-24 sm:py-32">
      <div className="bg-grid absolute inset-0 -z-10 opacity-60" aria-hidden="true" />
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Risk Mitigation"
          title={<>Bottlenecks, pre-empted</>}
          description="BLASTX proactively addresses potential operational bottlenecks while building rapid brand authority in the UAE market."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {risks.map((r, i) => (
            <Reveal key={r.factor} delay={i * 90}>
              <div className="flex h-full flex-col rounded-2xl border border-border/60 bg-card/50 p-6 backdrop-blur">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-lg bg-destructive/15 text-destructive">
                    <r.icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="font-semibold leading-tight">{r.factor}</h3>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{r.mitigation}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
