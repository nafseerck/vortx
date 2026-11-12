import { ArrowUpRight, Mail, MessageCircle, Phone } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { IceField } from '@/components/ice-field'

const EMAIL = 'info@blastx.ae'
const PHONE = '+971564393000'
const PHONE_LABEL = '+971 56 439 3000'

const contacts = [
  { icon: MessageCircle, label: 'WhatsApp', value: 'Chat with us', href: `https://wa.me/${PHONE.slice(1)}`, external: true },
  { icon: Phone, label: 'Call', value: PHONE_LABEL, href: `tel:${PHONE}` },
  { icon: Mail, label: 'Email', value: EMAIL, href: `mailto:${EMAIL}` },
]

export function SiteFooter() {
  return (
    <footer id="contact" className="relative px-5 pb-10 pt-12 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-[2.5rem] border border-primary/25 bg-card px-6 py-16 text-center sm:px-14 sm:py-24">
            <div className="absolute inset-0 -z-10" aria-hidden="true">
              <img src="/images/eco-impact.png" alt="" loading="lazy" className="h-full w-full object-cover opacity-20" />
              <div className="absolute inset-0 bg-gradient-to-b from-card/60 via-card/80 to-card" />
              <div className="aurora left-1/2 top-0 size-[480px] -translate-x-1/2 bg-sky-400/20" />
              <IceField className="absolute inset-0" />
            </div>

            <h2 className="mx-auto max-w-3xl text-balance text-5xl font-extrabold leading-[0.95] sm:text-7xl">
              Ready for a <span className="text-gradient-ice">factory-new</span> finish?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-pretty text-lg text-muted-foreground">
              Tell us what needs cleaning. We&apos;ll come back with a quote and a time that suits you.
            </p>

            <div className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-3">
              {contacts.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="glass group flex items-center gap-3 rounded-2xl p-4 text-left transition-all duration-500 hover:-translate-y-1 hover:border-primary/50"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-500 group-hover:bg-primary group-hover:text-primary-foreground">
                    <c.icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{c.label}</span>
                    <span className="block truncate text-sm font-semibold">{c.value}</span>
                  </span>
                  <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-transform duration-500 group-hover:rotate-45 group-hover:text-primary" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
          <div className="flex items-center gap-2.5">
            <img src="/logo.png" alt="" width={640} height={447} loading="lazy" className="h-10 w-auto" />
            <span className="font-display font-bold tracking-[0.2em] text-foreground">BLASTX</span>
            <span>Dry Ice — Dubai, UAE</span>
          </div>
          <p>© {new Date().getFullYear()} BLASTX. All rights reserved.</p>
        </div>

        <p
          className="pointer-events-none mt-6 select-none text-center font-display text-[22vw] font-extrabold leading-none tracking-tighter text-white/[0.04] lg:text-[17rem]"
          aria-hidden="true"
        >
          BLASTX
        </p>
      </div>
    </footer>
  )
}
