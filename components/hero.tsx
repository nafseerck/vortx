import { MapPin, Droplets, Leaf, ArrowDown } from 'lucide-react'

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <img
        src="/images/hero-vapor.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-70"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/85 to-background/30"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-transparent to-background/60"
        aria-hidden="true"
      />

      <div className="mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-5 pb-20 pt-32 sm:px-8">
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border/70 bg-card/40 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
          <MapPin className="size-3.5 text-primary" aria-hidden="true" />
          Dubai, United Arab Emirates
          <span className="text-border">|</span>
          Investor Presentation — Phase 1
        </div>

        <h1 className="mt-6 max-w-3xl text-balance text-5xl font-extrabold leading-[0.95] sm:text-7xl md:text-8xl">
          <span className="text-gradient-ice">VORTX</span>
          <span className="block text-foreground">Dry Ice</span>
        </h1>

        <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
          Next-generation precision eco-cleaning &amp; industrial detailing.
          Zero water. Zero chemicals. Non-abrasive CO
          <sub>2</sub> sublimation for high-value assets.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href="#financials"
            className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            View the numbers
          </a>
          <a
            href="#opportunity"
            className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-card"
          >
            The opportunity
          </a>
        </div>

        <div className="mt-14 flex flex-wrap gap-6 text-sm text-muted-foreground">
          <span className="flex items-center gap-2">
            <Droplets className="size-4 text-primary" aria-hidden="true" /> Zero-water process
          </span>
          <span className="flex items-center gap-2">
            <Leaf className="size-4 text-accent" aria-hidden="true" /> Chemical-free &amp; eco-safe
          </span>
          <span className="flex items-center gap-2">
            <ArrowDown className="size-4 text-primary" aria-hidden="true" /> ~38.8% operating margin
          </span>
        </div>
      </div>
    </section>
  )
}
