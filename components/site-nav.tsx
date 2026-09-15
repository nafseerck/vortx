import { PelletsLogoIcon } from '@/components/pellets-logo-icon'

const links = [
  { href: '#showcase', label: 'Showcase' },
  { href: '#process', label: 'Science' },
  { href: '#opportunity', label: 'Opportunity' },
  { href: '#financials', label: 'Financials' },
  { href: '#capex', label: 'CAPEX' },
  { href: '#operations', label: 'Operations' },
  { href: '#roadmap', label: 'Roadmap' },
]

export function SiteNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-full border border-border/70 bg-background/70 px-4 py-2.5 backdrop-blur-xl sm:px-6">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex size-8 items-center justify-center rounded-full bg-primary/15 text-primary ring-1 ring-primary/30">
            <PelletsLogoIcon size={18} aria-hidden="true" />
          </span>
          <span className="font-display text-sm font-bold tracking-[0.2em]">BLSTX</span>
        </a>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Section navigation">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-full bg-primary px-4 py-1.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
        >
          Invest
        </a>
      </div>
    </header>
  )
}
