import { Reveal } from '@/components/reveal'
import { Mail, Phone, MessageCircle, Sparkles } from 'lucide-react'
import { PelletsLogoIcon } from '@/components/pellets-logo-icon'

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
            <span className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-primary/20 text-primary ring-1 ring-primary/40 shadow-xl shadow-cyan-950/40 backdrop-blur">
              <PelletsLogoIcon size={30} aria-hidden="true" />
            </span>
            <h2 className="mx-auto mt-6 max-w-2xl text-balance text-3xl font-bold sm:text-4xl">
              Partner with BLSTX at the ground floor
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
                Call +971 56 439 3000
              </a>
              <a
                href="https://wa.me/971564393000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-6 py-3 text-sm font-semibold text-emerald-300 transition-transform hover:scale-[1.03]"
              >
                <MessageCircle className="size-4" aria-hidden="true" />
                Chat on WhatsApp
              </a>
            </div>

            {/* Bold Founder & Enthusiast Badge */}
            <div className="mt-10 inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-950/50 px-6 py-2.5 text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] text-cyan-300 shadow-xl shadow-cyan-950/60 backdrop-blur-md transition-all hover:scale-105 hover:border-cyan-300">
              <Sparkles className="size-4 text-cyan-400" />
              <span>Founder &amp; Enthusiast</span>
            </div>
          </div>
        </div>
      </Reveal>

      <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border/50 pt-6 text-sm text-muted-foreground sm:flex-row">
        <div className="flex items-center gap-2.5">
          <PelletsLogoIcon size={20} aria-hidden="true" />
          <span className="font-display font-bold tracking-[0.2em] text-foreground">BLSTX</span>
          <span>Dry Ice — Dubai, UAE</span>
        </div>
        <p>Investor Presentation · Phase 1 · Confidential</p>
      </div>
    </footer>
  )
}
