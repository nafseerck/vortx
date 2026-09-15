import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { ClipboardCheck, UserCog, Wrench, Users } from 'lucide-react'

const team = [
  {
    icon: UserCog,
    role: 'Operations Manager',
    count: '1',
    body: 'B2B client acquisition, quality management, and vendor relations.',
  },
  {
    icon: Wrench,
    role: 'Lead Blasting Technician',
    count: '1',
    body: 'Machine operation, vehicle disassembly, and precision blasting execution.',
  },
  {
    icon: Users,
    role: 'Support & Logistics',
    count: '2',
    body: 'Junior technician for prep/maintenance and a dedicated driver for mobile setup and supply logistics.',
  },
]

export function Operations() {
  return (
    <section id="operations" className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
      <SectionHeading
        eyebrow="Operations, HR & QA"
        title={<>Standardized, lean, accountable</>}
        description="Operational excellence is guaranteed through standardized processes and a lean, highly specialized team structure."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-5">
        <Reveal className="lg:col-span-2">
          <div className="flex h-full flex-col rounded-3xl border border-primary/25 bg-gradient-to-b from-primary/12 to-card/40 p-7">
            <span className="mb-5 flex size-12 items-center justify-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/30">
              <ClipboardCheck className="size-6" aria-hidden="true" />
            </span>
            <h3 className="text-xl font-semibold">Pre-service inspection protocol</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Before any blasting commences, technicians execute a rigorous 360° digital inspection
              checklist covering the engine, transmission, electrical harnesses, and paint
              condition. This establishes liability protection, ensures quality control, and
              surfaces immediate upselling opportunities.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-4 lg:col-span-3">
          {team.map((t, i) => (
            <Reveal key={t.role} delay={i * 90}>
              <div className="flex items-center gap-5 rounded-2xl border border-border/60 bg-card/50 p-5 backdrop-blur">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                  <t.icon className="size-6" aria-hidden="true" />
                </span>
                <div className="flex-1">
                  <h4 className="font-semibold">{t.role}</h4>
                  <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">{t.body}</p>
                </div>
                <span className="font-display text-3xl font-bold text-primary/80">{t.count}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
