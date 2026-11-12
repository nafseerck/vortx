import { ArrowUpRight, MapPin, Play } from 'lucide-react'
import { IceField } from '@/components/ice-field'
import { CountUp } from '@/components/count-up'

function Words({ text, start = 0, className = '' }: { text: string; start?: number; className?: string }) {
  return (
    <>
      {text.split(' ').map((w, i) => (
        <span key={i} className="word mr-[0.22em]">
          <span className={className} style={{ '--i': start + i } as React.CSSProperties}>
            {w}
          </span>
        </span>
      ))}
    </>
  )
}

const stats = [
  { value: 78.5, decimals: 1, prefix: '−', suffix: '°C', label: 'Blast temperature' },
  { value: 0, suffix: ' L', label: 'Water used' },
  { value: 100, suffix: '%', label: 'Residue-free' },
  { value: 6, label: 'Industries served' },
]

export function Hero() {
  const d = (ms: number) => ({ '--d': `${ms}ms` }) as React.CSSProperties

  return (
    <section id="top" className="relative isolate flex min-h-[100svh] flex-col overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <img src="/images/hero-vapor.png" alt="" className="kenburns h-full w-full object-cover opacity-55" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,var(--background)_85%)]" />
        <div className="aurora -left-40 top-10 size-[520px] bg-sky-400/25" />
        <div className="aurora -right-40 bottom-0 size-[560px] bg-blue-600/25 [animation-delay:-9s]" />
        <div className="bg-grid absolute inset-0" />
        <IceField className="absolute inset-0" />
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center px-5 pb-10 pt-36 text-center sm:px-8">
        <div
          className="fade-up glass inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 text-xs font-medium text-ice"
          style={d(200)}
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-primary" />
          </span>
          <MapPin className="size-3.5" aria-hidden="true" />
          Now serving Dubai &amp; the UAE
        </div>

        <h1 className="mt-8 max-w-5xl text-[13vw] font-extrabold leading-[0.92] sm:text-7xl md:text-8xl lg:text-[7.5rem]">
          <Words text="Clean at" />
          <Words text="−78.5°C." start={2} className="text-gradient-ice" />
          <br className="hidden sm:block" />
          <Words text="Zero water." start={3} />
        </h1>

        <p
          className="fade-up mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl"
          style={d(900)}
        >
          BLASTX dry ice blasting restores hypercars, motorcycles, superyachts, aircraft and industrial machinery to
          factory-new — no chemicals, no abrasion, nothing left behind but clean.
        </p>

        <div className="fade-up mt-10 flex flex-wrap items-center justify-center gap-3.5" style={d(1050)}>
          <a href="#contact" className="btn-primary px-7 py-4 text-sm">
            Book a blast
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
          <a href="#process" className="btn-ghost px-6 py-4 text-sm">
            <Play className="size-3.5 fill-current" aria-hidden="true" />
            See how it works
          </a>
        </div>
      </div>

      {/* Stat strip */}
      <div className="fade-up mx-auto w-full max-w-6xl px-5 pb-10 sm:px-8" style={d(1250)}>
        <dl className="glass grid grid-cols-2 divide-white/10 rounded-3xl md:grid-cols-4 md:divide-x">
          {stats.map((s) => (
            <div key={s.label} className="px-6 py-5 text-left">
              <dd className="font-display text-3xl font-bold text-foreground sm:text-4xl">
                <CountUp value={s.value} decimals={s.decimals} prefix={s.prefix} suffix={s.suffix} />
              </dd>
              <dt className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">{s.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
