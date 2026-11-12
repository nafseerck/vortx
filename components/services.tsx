import { ArrowUpRight, Car, BatteryCharging, Anchor, Plane, Factory, Truck } from 'lucide-react'
import { SectionTitle } from '@/components/section-title'
import { Reveal } from '@/components/reveal'
import { Spotlight } from '@/components/spotlight'

const services = [
  {
    icon: Car,
    tag: 'Automotive',
    title: 'Hypercar & classic detailing',
    body: 'Engine bays and undercarriages stripped of grime without risking OEM parts, sensors, factory stickers or raw carbon fibre.',
    image: '/images/supercar-undercarriage.jpg',
    span: 'md:col-span-4',
  },
  {
    icon: BatteryCharging,
    tag: 'Electric',
    title: 'EV battery-safe cleaning',
    body: 'Strictly waterless and non-conductive — the only safe way to clean around battery compartments.',
    image: '/images/car-lift.png',
    span: 'md:col-span-2',
  },
  {
    icon: Anchor,
    tag: 'Marine',
    title: 'Hull & teak restoration',
    body: 'Salt, biofouling and corrosion lifted from hulls, engines and deck hardware with zero chemical runoff.',
    image: '/images/marine-yacht.jpg',
    span: 'md:col-span-2',
  },
  {
    icon: Plane,
    tag: 'Aviation',
    title: 'Turbine & airframe cleaning',
    body: 'Residue-free cleaning of turbine parts, landing gear bays and composite airframes — no disassembly.',
    image: '/images/aviation-jet.jpg',
    span: 'md:col-span-2',
  },
  {
    icon: Factory,
    tag: 'Industrial',
    title: 'Machinery & production lines',
    body: 'Molds, machinery and electrical cabinets cleaned in place, with no secondary waste and minimal downtime.',
    image: '/images/industrial.png',
    span: 'md:col-span-2',
  },
]

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-36">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionTitle
          eyebrow="Services"
          title={
            <>
              One process. <span className="text-gradient-ice">Every high-value surface.</span>
            </>
          }
          description="From a concours-ready engine bay to a production line that cannot stop — we bring the same non-abrasive, waterless clean to all of it."
        />

        <div className="mt-14 grid gap-4 md:grid-cols-6">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 80} className={s.span}>
              <Spotlight className="group h-full overflow-hidden rounded-3xl border border-white/10 bg-card transition-colors duration-500 hover:border-primary/40">
                <a href="#contact" className="relative flex h-full min-h-[340px] flex-col justify-end p-6 sm:p-7">
                  <img
                    src={s.image}
                    alt=""
                    loading="lazy"
                    className="absolute inset-0 -z-10 h-full w-full object-cover opacity-60 transition-all duration-[1.2s] ease-out group-hover:scale-110 group-hover:opacity-80"
                  />
                  <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-background/70 to-transparent" />

                  <span className="absolute right-5 top-5 flex size-10 items-center justify-center rounded-full border border-white/15 bg-black/30 backdrop-blur transition-all duration-500 group-hover:rotate-45 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                    <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:-rotate-45" aria-hidden="true" />
                  </span>

                  <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary backdrop-blur">
                    <s.icon className="size-3.5" aria-hidden="true" />
                    {s.tag}
                  </span>
                  <h3 className="mt-3 text-2xl font-bold">{s.title}</h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                </a>
              </Spotlight>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-4">
          <Spotlight className="glass flex flex-col gap-5 rounded-3xl p-6 sm:flex-row sm:items-center sm:p-8">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary/15 text-primary">
              <Truck className="size-6" aria-hidden="true" />
            </span>
            <div className="flex-1">
              <h3 className="text-xl font-bold">We come to you</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                Fully self-contained mobile rigs set up in under 15 minutes — at your garage, marina berth,
                hangar or factory floor, anywhere in the UAE.
              </p>
            </div>
            <a href="#contact" className="btn-ghost shrink-0 px-5 py-3 text-sm">
              Request a visit
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </Spotlight>
        </Reveal>
      </div>
    </section>
  )
}
