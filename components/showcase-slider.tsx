'use client'

import { useEffect, useState } from 'react'
import { ArrowUpRight, ShieldCheck } from 'lucide-react'
import { SectionTitle } from '@/components/section-title'
import { Reveal } from '@/components/reveal'

const DURATION = 6500

const slides = [
  {
    id: 'hypercar',
    category: 'Automotive',
    badge: 'Flagship service',
    title: 'Hypercar & classic chassis preservation',
    description:
      'Safely strips road grime, oxidation and oil buildup without water or abrasive media. Preserves original factory stickers, delicate wiring harnesses, OEM paint markings and raw carbon fibre.',
    image: '/images/supercar-undercarriage.jpg',
    stats: [
      { label: 'Thermal shock', value: '−78.5°C' },
      { label: 'Water used', value: '0 litres' },
      { label: 'Abrasion', value: 'None' },
      { label: 'Electrical safe', value: '100%' },
    ],
  },
  {
    id: 'marine',
    category: 'Marine',
    badge: 'Marine grade',
    title: 'Teak & hull bio-fouling removal',
    description:
      'Removes bio-fouling, marine growth, salt crust and old paint from yacht hulls, drive shafts and delicate teak — with no chemical runoff or wastewater into coastal waters.',
    image: '/images/marine-yacht.jpg',
    stats: [
      { label: 'Chemical runoff', value: '0%' },
      { label: 'Blast speed', value: 'Supersonic' },
      { label: 'Substrate preserved', value: '100%' },
      { label: 'Wastewater', value: 'None' },
    ],
  },
  {
    id: 'aviation',
    category: 'Aviation',
    badge: 'Aerospace grade',
    title: 'Jet turbine & airframe maintenance',
    description:
      'Removes carbon buildup, grease and exhaust soot from turbine intakes, landing gear bays and composite airframes with zero residue and zero component disassembly.',
    image: '/images/aviation-jet.jpg',
    stats: [
      { label: 'Downtime saved', value: '~70%' },
      { label: 'Secondary waste', value: 'Zero' },
      { label: 'Media', value: 'Non-conductive' },
      { label: 'Disassembly', value: 'None' },
    ],
  },
  {
    id: 'mobile',
    category: 'Mobile',
    badge: 'Concierge on-site',
    title: 'On-demand mobile blasting fleet',
    description:
      'Matte-black service vans with independent rotary screw compressors and dual-hose blasting systems bring the full service to your private garage, from Palm Jumeirah to Emirates Hills.',
    image: '/images/mobile-van.jpg',
    stats: [
      { label: 'Power', value: 'Self-contained' },
      { label: 'Setup time', value: '< 15 min' },
      { label: 'Noise', value: 'Acoustic screened' },
      { label: 'Coverage', value: 'UAE-wide' },
    ],
  },
  {
    id: 'industrial',
    category: 'Industrial',
    badge: 'Industrial B2B',
    title: 'Production line & machinery cleaning',
    description:
      'Restores food processing lines, plastic injection molds and high-voltage electrical cabinets without interrupting shifts or generating toxic slurry.',
    image: '/images/industrial.png',
    stats: [
      { label: 'Line downtime', value: 'Minimised' },
      { label: 'Slurry', value: 'Zero' },
      { label: 'Disassembly', value: 'None' },
      { label: 'Contracts', value: 'Recurring' },
    ],
  },
]

export function ShowcaseSlider() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const slide = slides[index]

  useEffect(() => {
    if (paused) return
    const t = setTimeout(() => setIndex((i) => (i + 1) % slides.length), DURATION)
    return () => clearTimeout(t)
  }, [index, paused])

  return (
    <section id="showcase" className="relative py-24 sm:py-36">
      <div className="aurora left-1/2 top-1/3 -z-10 size-[600px] -translate-x-1/2 bg-cyan-500/10" aria-hidden="true" />
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionTitle
          align="center"
          eyebrow="Showcase"
          title={
            <>
              See it in <span className="text-gradient-ice">action</span>
            </>
          }
          description="Five sectors, one obsession: a perfect surface with nothing left behind."
        />

        <Reveal className="mt-12">
          {/* Tabs with autoplay progress */}
          <div className="flex gap-2 overflow-x-auto pb-3 [scrollbar-width:none]" role="tablist">
            {slides.map((s, i) => (
              <button
                key={s.id}
                type="button"
                role="tab"
                aria-selected={i === index}
                onClick={() => setIndex(i)}
                className={`relative shrink-0 overflow-hidden rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors duration-300 ${
                  i === index
                    ? 'border-primary/50 bg-primary/10 text-foreground'
                    : 'border-white/10 text-muted-foreground hover:text-foreground'
                }`}
              >
                {s.category}
                {i === index && (
                  <span
                    key={`${index}-${paused}`}
                    className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-primary"
                    style={{
                      animation: paused ? 'none' : `progress ${DURATION}ms linear forwards`,
                    }}
                  />
                )}
              </button>
            ))}
          </div>

          <div
            className="relative mt-3 overflow-hidden rounded-[2rem] border border-white/10 bg-card"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="grid lg:grid-cols-5">
              {/* Crossfading images */}
              <div className="relative aspect-[4/3] overflow-hidden lg:col-span-3 lg:aspect-auto lg:min-h-[540px]">
                {slides.map((s, i) => (
                  <img
                    key={s.id}
                    src={s.image}
                    alt={i === index ? s.title : ''}
                    loading="lazy"
                    className={`absolute inset-0 h-full w-full object-cover transition-all duration-[1.2s] ease-out ${
                      i === index ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
                    }`}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-card" />
                <span className="glass absolute left-5 top-5 rounded-full px-3.5 py-1.5 text-xs font-semibold text-ice">
                  {slide.badge}
                </span>
                <span className="absolute bottom-5 left-6 font-display text-6xl font-extrabold text-white/15">
                  0{index + 1}
                </span>
              </div>

              {/* Copy re-mounts per slide to replay the entrance */}
              <div key={slide.id} className="flex flex-col justify-center p-7 sm:p-10 lg:col-span-2">
                <h3 className="fade-up text-3xl font-bold leading-tight">{slide.title}</h3>
                <p
                  className="fade-up mt-4 text-sm leading-relaxed text-muted-foreground"
                  style={{ '--d': '80ms' } as React.CSSProperties}
                >
                  {slide.description}
                </p>

                <dl className="mt-7 grid grid-cols-2 gap-3">
                  {slide.stats.map((st, i) => (
                    <div
                      key={st.label}
                      className="fade-up rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                      style={{ '--d': `${160 + i * 70}ms` } as React.CSSProperties}
                    >
                      <dt className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">{st.label}</dt>
                      <dd className="mt-1 font-display text-lg font-bold text-primary">{st.value}</dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                  <a href="#contact" className="btn-primary px-5 py-3 text-sm">
                    Request a quote
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </a>
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <ShieldCheck className="size-4 text-emerald-400" aria-hidden="true" />
                    Non-abrasive guarantee
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
