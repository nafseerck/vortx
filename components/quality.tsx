import { ClipboardCheck, Droplets, Leaf, ShieldCheck, Zap } from 'lucide-react'
import { SectionTitle } from '@/components/section-title'
import { Reveal } from '@/components/reveal'
import { Spotlight } from '@/components/spotlight'

const promises = [
  {
    icon: ShieldCheck,
    title: 'Non-abrasive',
    body: 'Pellets sublimate on impact, so paint, plating, rubber and carbon fibre keep their original finish.',
  },
  {
    icon: Zap,
    title: 'Non-conductive',
    body: 'Completely dry media — safe around wiring harnesses, sensors, EV batteries and live cabinets.',
  },
  {
    icon: Droplets,
    title: 'Zero water',
    body: 'Nothing to pool, seep or corrode. No drying time and no wastewater to dispose of.',
  },
  {
    icon: Leaf,
    title: 'Zero secondary waste',
    body: 'No solvents, no grit, no slurry. The only thing left to sweep up is the dirt that came off.',
  },
]

export function Quality() {
  return (
    <section id="quality" className="relative py-24 sm:py-36">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionTitle
          eyebrow="Quality & safety"
          title={
            <>
              Inspected first. <span className="text-gradient-ice">Protected throughout.</span>
            </>
          }
          description="Your asset is documented before we start and treated with a process that physically cannot scratch, soak or contaminate it."
        />

        <div className="mt-14 grid gap-4 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <Spotlight className="group relative h-full min-h-[420px] overflow-hidden rounded-3xl border border-primary/25">
              <img
                src="/images/dry-ice-pellets.png"
                alt=""
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover opacity-50 transition-transform duration-[2s] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/20" />
              <div className="relative flex h-full flex-col justify-end p-7 sm:p-8">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/15 text-primary ring-1 ring-primary/30 backdrop-blur">
                  <ClipboardCheck className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-2xl font-bold">360° pre-service inspection</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Before any blasting begins, our technicians complete a digital inspection checklist covering
                  the engine, transmission, electrical harnesses and paint condition — so you know exactly
                  what we found and exactly what we did.
                </p>
              </div>
            </Spotlight>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-3">
            {promises.map((p, i) => (
              <Reveal key={p.title} delay={i * 90}>
                <Spotlight className="glass group h-full rounded-3xl p-6 transition-transform duration-500 hover:-translate-y-1 sm:p-7">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                    <p.icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-xl font-bold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </Spotlight>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
