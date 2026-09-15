'use client'

import { useState, useEffect } from 'react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { ChevronLeft, ChevronRight, Pause, Play, Sparkles, ShieldCheck, Gauge, Zap, Layers } from 'lucide-react'

export interface SlideItem {
  id: string
  title: string
  category: string
  subtitle: string
  description: string
  image: string
  stats: {
    label: string
    value: string
  }[]
  badge: string
}

const slides: SlideItem[] = [
  {
    id: 'hypercar',
    category: 'Automotive Precision',
    title: 'Hypercar & Classic Chassis Preservation',
    subtitle: 'Zero-water undercarriage & engine bay cryo-detailing',
    description:
      'Safely strips road grime, oxidation, and oil buildup without water or abrasive media. Preserves original factory stickers, delicate wiring harnesses, OEM paint markings, and raw carbon fiber.',
    image: '/images/supercar-undercarriage.jpg',
    badge: 'Flagship Service',
    stats: [
      { label: 'Thermal Shock', value: '-78.5°C' },
      { label: 'Water Used', value: '0 Liters' },
      { label: 'Surface Risk', value: '0% Abrasive' },
      { label: 'Electrical Safe', value: '100%' },
    ],
  },
  {
    id: 'marine',
    category: 'Superyacht & Marine',
    title: 'Marine Teak & Hull Bio-Fouling Removal',
    subtitle: 'Eco-compliant marine maintenance in Dubai Marinas',
    description:
      'Removes bio-fouling, marine growth, salt crust, and old paint from yacht hulls, drive shafts, and delicate teak wood without chemical runoff or secondary wastewater into coastal waters.',
    image: '/images/marine-yacht.jpg',
    badge: 'Marine Grade',
    stats: [
      { label: 'Chemical Runoff', value: '0%' },
      { label: 'Sublimation Speed', value: 'Supersonic' },
      { label: 'Substrate Preservation', value: '100%' },
      { label: 'EPA/UAE Compliant', value: 'Verified' },
    ],
  },
  {
    id: 'aviation',
    category: 'Aviation & Aerospace',
    title: 'Private Jet Turbine & Airframe Maintenance',
    subtitle: 'Non-conductive turbine & airframe precision cleaning',
    description:
      'Removes carbon buildup, grease, and exhaust soot from jet turbine intakes, landing gear bays, and composite airframes with zero residue and zero component disassembly.',
    image: '/images/aviation-jet.jpg',
    badge: 'Aerospace Grade',
    stats: [
      { label: 'Downtime Saved', value: '~70%' },
      { label: 'Secondary Waste', value: 'Zero' },
      { label: 'Conductivity', value: 'Non-conductive' },
      { label: 'OEM Approved', value: 'Yes' },
    ],
  },
  {
    id: 'mobile',
    category: 'VIP Mobile Rigs',
    title: 'On-Demand Mobile Dry Ice Blasting Fleet',
    subtitle: 'High-pressure mobile units delivered directly to client private garages',
    description:
      'Custom matte-black mobile service vans equipped with independent rotary screw compressors and dual-hose blasting systems bring luxury detailing directly to Palm Jumeirah & Emirates Hills residences.',
    image: '/images/mobile-van.jpg',
    badge: 'Concierge On-Site',
    stats: [
      { label: 'Mobility', value: '100% Autonomous' },
      { label: 'Setup Time', value: '< 15 Mins' },
      { label: 'Operating Noise', value: 'Acoustic Screened' },
      { label: 'Service Coverage', value: 'UAE-Wide' },
    ],
  },
  {
    id: 'industrial',
    category: 'Commercial & Industrial',
    title: 'Production Line & Machinery Decontam',
    subtitle: 'Continuous online cleaning without line shutdown',
    description:
      'Restores food processing lines, plastic injection molds, and high-voltage electrical cabinets without interrupting operational shifts or generating secondary toxic slurry.',
    image: '/images/industrial.png',
    badge: 'Industrial B2B',
    stats: [
      { label: 'Line Downtime', value: 'Minimised' },
      { label: 'Secondary Slurry', value: '0 Slurry' },
      { label: 'ROI Payback', value: '< 6 Months' },
      { label: 'Safety Rating', value: 'OSHA Compliant' },
    ],
  },
]

export function ShowcaseSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [activeCategory, setActiveCategory] = useState<string>('All')

  const categories = ['All', 'Automotive Precision', 'Superyacht & Marine', 'Aviation & Aerospace', 'VIP Mobile Rigs', 'Commercial & Industrial']

  const filteredSlides = activeCategory === 'All'
    ? slides
    : slides.filter((s) => s.category === activeCategory)

  const currentSlide = filteredSlides[currentIndex % filteredSlides.length] || slides[0]

  useEffect(() => {
    if (!isPlaying) return
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredSlides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [isPlaying, filteredSlides.length])

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % filteredSlides.length)
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + filteredSlides.length) % filteredSlides.length)

  return (
    <section id="showcase" className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
      <SectionHeading
        eyebrow="Interactive Showcase"
        title={<>Multi-Sector Precision Detailing</>}
        description="Explore BLSTX's high-margin applications across hypercars, luxury marine, aviation, and industrial maintenance."
      />

      {/* Category Filter Pills */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActiveCategory(cat)
              setCurrentIndex(0)
            }}
            className={`rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-all ${
              activeCategory === cat
                ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-105'
                : 'border border-border/70 bg-card/40 text-muted-foreground hover:bg-card hover:text-foreground'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Main Slide Card Container */}
      <Reveal className="mt-10">
        <div className="glow-ring relative overflow-hidden rounded-3xl border border-primary/30 bg-card/60 backdrop-blur-2xl shadow-2xl">
          <div className="grid lg:grid-cols-12 min-h-[540px]">
            {/* Left: Image Container with HUD overlay */}
            <div className="relative lg:col-span-7 overflow-hidden min-h-[340px] lg:min-h-[540px]">
              <img
                src={currentSlide.image}
                alt={currentSlide.title}
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-background/20 lg:to-background" />

              {/* Badge & Telemetry HUD Overlay */}
              <div className="absolute top-5 left-5 flex items-center gap-2">
                <span className="flex items-center gap-1.5 rounded-full border border-cyan-400/40 bg-black/60 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-cyan-300 backdrop-blur-md shadow-lg">
                  <Sparkles className="size-3.5 text-cyan-400" />
                  {currentSlide.badge}
                </span>
              </div>

              {/* Auto Play & Controls Bar overlay */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-full border border-white/10 bg-black/50 px-4 py-2 backdrop-blur-md">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="flex size-8 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                    title={isPlaying ? 'Pause auto-slide' : 'Play auto-slide'}
                  >
                    {isPlaying ? <Pause className="size-4" /> : <Play className="size-4" />}
                  </button>
                  <span className="text-xs text-white/70 font-mono">
                    {String((currentIndex % filteredSlides.length) + 1).padStart(2, '0')} / {String(filteredSlides.length).padStart(2, '0')}
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  {filteredSlides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-1.5 rounded-full transition-all ${
                        idx === (currentIndex % filteredSlides.length)
                          ? 'w-6 bg-cyan-400'
                          : 'w-1.5 bg-white/30 hover:bg-white/60'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-1">
                  <button
                    onClick={prevSlide}
                    className="flex size-8 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
                    aria-label="Previous Slide"
                  >
                    <ChevronLeft className="size-4" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="flex size-8 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
                    aria-label="Next Slide"
                  >
                    <ChevronRight className="size-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right: Detailed Content & Stats */}
            <div className="flex flex-col justify-between p-8 sm:p-10 lg:col-span-5">
              <div>
                <p className="font-display text-xs font-bold uppercase tracking-[0.25em] text-cyan-400">
                  {currentSlide.category}
                </p>
                <h3 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  {currentSlide.title}
                </h3>
                <p className="mt-2 text-sm font-medium text-accent">
                  {currentSlide.subtitle}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {currentSlide.description}
                </p>
              </div>

              {/* High Tech Metrics Grid */}
              <div className="mt-8 border-t border-border/60 pt-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                  Operational Telemetry Specs
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {currentSlide.stats.map((st) => (
                    <div
                      key={st.label}
                      className="rounded-xl border border-primary/20 bg-primary/5 p-3 backdrop-blur"
                    >
                      <span className="block text-[11px] font-medium text-muted-foreground">
                        {st.label}
                      </span>
                      <span className="font-display text-base font-bold text-cyan-300">
                        {st.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-xs font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
                >
                  <Zap className="size-3.5" />
                  Request Sector Proposal
                </a>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <ShieldCheck className="size-4 text-emerald-400" />
                  Non-Abrasive Guarantee
                </span>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
