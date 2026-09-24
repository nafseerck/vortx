import { MapPin, Droplets, Leaf, ArrowDown, Sparkles, Shield, Play } from 'lucide-react'
import { VaporParticles } from '@/components/vapor-particles'

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden min-h-[100svh] flex items-center">
      {/* Background Hero Image */}
      <img
        src="/images/hero-vapor.png"
        alt="Sublimation vapor stream"
        aria-hidden="true"
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-75 animate-pulse [animation-duration:8s]"
      />

      {/* Atmospheric Particles */}
      <VaporParticles />

      {/* Radial Gradient & Lighting Overlays */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/90 to-background/40"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-transparent to-background/70"
        aria-hidden="true"
      />
      <div
        className="absolute -top-32 left-1/4 -z-10 size-[500px] rounded-full bg-cyan-500/15 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="mx-auto flex w-full max-w-6xl flex-col justify-center px-5 pb-16 pt-32 sm:px-8">
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-500/30 bg-card/60 px-4 py-1.5 text-xs font-semibold text-cyan-300 backdrop-blur-md shadow-lg shadow-cyan-950/40">
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-cyan-500" />
          </span>
          <MapPin className="size-3.5 text-cyan-400" aria-hidden="true" />
          Dubai, United Arab Emirates
          <span className="text-white/20">|</span>
          Investor Presentation — Phase 1
        </div>

        <h1 className="mt-6 max-w-3xl text-balance text-5xl font-extrabold leading-[0.95] sm:text-7xl md:text-8xl">
          <span className="text-gradient-ice drop-shadow-[0_0_35px_rgba(34,211,238,0.35)]">BLASTX</span>
          <span className="block text-foreground mt-1">Dry Ice</span>
        </h1>

        <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
          Next-generation precision eco-cleaning &amp; industrial detailing.
          Zero water. Zero chemicals. Non-abrasive CO
          <sub>2</sub> sublimation at −78.5°C for high-value assets.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3.5">
          <a
            href="#showcase"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-xl shadow-primary/25 transition-all hover:scale-[1.04] hover:shadow-cyan-500/40"
          >
            <Sparkles className="size-4 text-cyan-200 transition-transform group-hover:rotate-12" />
            Explore Showcase Slides
          </a>
          <a
            href="#financials"
            className="rounded-full border border-border/80 bg-card/40 px-6 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition-all hover:bg-card hover:border-primary/50"
          >
            Financial Highlights
          </a>
          <a
            href="#process"
            className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-3.5 text-sm font-semibold text-cyan-300 backdrop-blur transition-all hover:bg-cyan-500/20"
          >
            <Play className="size-3.5 fill-cyan-300" />
            The Science
          </a>
        </div>

        {/* Highlight Feature Badges */}
        <div className="mt-14 flex flex-wrap gap-6 text-sm text-muted-foreground">
          <span className="flex items-center gap-2.5 rounded-full border border-border/50 bg-card/30 px-4 py-2 backdrop-blur">
            <Droplets className="size-4 text-cyan-400" aria-hidden="true" />
            <span className="font-medium text-foreground">100% Waterless</span>
          </span>
          <span className="flex items-center gap-2.5 rounded-full border border-border/50 bg-card/30 px-4 py-2 backdrop-blur">
            <Leaf className="size-4 text-emerald-400" aria-hidden="true" />
            <span className="font-medium text-foreground">Zero Secondary Waste</span>
          </span>
          <span className="flex items-center gap-2.5 rounded-full border border-border/50 bg-card/30 px-4 py-2 backdrop-blur">
            <Shield className="size-4 text-cyan-400" aria-hidden="true" />
            <span className="font-medium text-foreground">Non-Abrasive (−78.5°C)</span>
          </span>
          <span className="flex items-center gap-2.5 rounded-full border border-border/50 bg-card/30 px-4 py-2 backdrop-blur">
            <ArrowDown className="size-4 text-accent" aria-hidden="true" />
            <span className="font-medium text-foreground">~38.8% Operating Margin</span>
          </span>
        </div>
      </div>
    </section>
  )
}
