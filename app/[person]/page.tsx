import type { Metadata } from 'next'
import { ArrowUpRight, Globe, Mail, MessageCircle, Phone, UserPlus } from 'lucide-react'

// Contact pages the business-card QR codes point to: /jaleel and /nafseer.
const people = {
  jaleel: { name: 'Jaleel', title: 'Founder & Enthusiast', phone: '+971564393000', phoneLabel: '+971 56 439 3000' },
  nafseer: { name: 'Nafseer CK', title: 'Founder', phone: '+971568156107', phoneLabel: '+971 56 815 6107' },
}
const EMAIL = 'info@blastx.ae'

type Params = { params: Promise<{ person: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return Object.keys(people).map((person) => ({ person }))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const p = people[(await params).person as keyof typeof people]
  return { title: `${p.name} — BLASTX`, description: `Call or WhatsApp ${p.name} at BLASTX dry ice blasting, Dubai.` }
}

export default async function PersonPage({ params }: Params) {
  const { person } = await params
  const p = people[person as keyof typeof people]

  const actions = [
    { icon: Phone, label: 'Call', value: p.phoneLabel, href: `tel:${p.phone}` },
    { icon: MessageCircle, label: 'WhatsApp', value: 'Chat on WhatsApp', href: `https://wa.me/${p.phone.slice(1)}` },
    { icon: Mail, label: 'Email', value: EMAIL, href: `mailto:${EMAIL}` },
    { icon: UserPlus, label: 'Save contact', value: 'Add to your phone', href: `/${person}.vcf` },
    { icon: Globe, label: 'Website', value: 'www.blastx.ae', href: '/' },
  ]

  return (
    <main className="relative isolate flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-5 py-12">
      <div className="aurora left-1/2 top-0 -z-10 size-[480px] -translate-x-1/2 bg-sky-400/20" aria-hidden="true" />
      <div className="bg-grid absolute inset-0 -z-10" aria-hidden="true" />

      <img src="/logo.png" alt="BLASTX" width={640} height={520} className="fade-up h-28 w-auto" />
      <h1 className="fade-up mt-6 text-4xl font-extrabold" style={{ '--d': '100ms' } as React.CSSProperties}>
        {p.name}
      </h1>
      <p
        className="fade-up mt-2 text-xs font-semibold uppercase tracking-[0.24em] text-primary"
        style={{ '--d': '160ms' } as React.CSSProperties}
      >
        {p.title} · BLASTX
      </p>

      <div className="mt-9 flex w-full max-w-sm flex-col gap-3">
        {actions.map((a, i) => (
          <a
            key={a.label}
            href={a.href}
            className="glass fade-up group flex items-center gap-3 rounded-2xl p-4 transition-colors duration-300 hover:border-primary/50"
            style={{ '--d': `${240 + i * 70}ms` } as React.CSSProperties}
          >
            <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <a.icon className="size-5" aria-hidden="true" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{a.label}</span>
              <span className="block truncate text-base font-semibold">{a.value}</span>
            </span>
            <ArrowUpRight className="size-4 shrink-0 text-muted-foreground group-hover:text-primary" aria-hidden="true" />
          </a>
        ))}
      </div>
    </main>
  )
}
