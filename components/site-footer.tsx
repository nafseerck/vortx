import { Reveal } from '@/components/reveal'
import { Snowflake, Mail, Phone } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer id="contact" className="relative mx-auto max-w-6xl px-5 pb-16 pt-8 sm:px-8">
      <Reveal>
        <div className="glow-ring relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/15 via-card to-card p-8 text-center sm:p-14">
          <div
            className="absolute left-1/2 top-0 size-64 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative">
            <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-primary/20 text-primary ring-1 ring-primary/40">
              <Snowflake className="size-6" aria-hidden="true" />
            </span>
            <h2 className="mx-auto mt-6 max-w-2xl text-balance text-3xl font-semibold sm:text-4xl">
              Partner with VORTX at the ground floor
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-muted-foreground">
              A lean, high-margin entry into Dubai&apos;s premium eco-cleaning market with a clear
              path to recurring B2B revenue. Let&apos;s discuss the opportunity.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="mailto:nethincot@gmail.com"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
              >
                <Mail className="size-4" aria-hidden="true" />
                nethincot@gmail.com
              </a>
              <a
                href="tel:+971564393000"
                className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-card/40 px-6 py-3 text-sm font-semibold text-foreground transition-transform hover:scale-[1.03]"
              >
                <Phone className="size-4" aria-hidden="true" />
                +971 56 439 3000
              </a>
            </div>
            <p className="mt-6 text-sm font-medium text-accent">
              Founder &amp; Enthusiast
            </p>
          </div>
        </div>
      </Reveal>

      <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border/50 pt-6 text-sm text-muted-foreground sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="font-display font-bold tracking-[0.2em] text-foreground">VORTX</span>
          <span>Dry Ice — Dubai, UAE</span>
        </div>
        <p>Investor Presentation · Phase 1 · Confidential</p>
      </div>
    </footer>
  )
}
