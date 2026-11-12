'use client'

import { useEffect, useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'

const links = [
  { href: '#services', label: 'Services' },
  { href: '#showcase', label: 'Showcase' },
  { href: '#process', label: 'The Science' },
  { href: '#quality', label: 'Quality' },
  { href: '#contact', label: 'Contact' },
]

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fade-up fixed inset-x-0 top-0 z-50 px-4" style={{ '--d': '100ms' } as React.CSSProperties}>
      <div
        className={`mx-auto mt-4 flex items-center justify-between rounded-full border px-4 py-2.5 transition-all duration-500 sm:px-5 ${
          scrolled
            ? 'max-w-4xl border-white/10 bg-background/70 shadow-2xl shadow-black/40 backdrop-blur-xl'
            : 'max-w-6xl border-transparent bg-transparent'
        }`}
      >
        <a href="#top" className="group flex items-center gap-2.5">
          <img
            src="/logo.png"
            alt=""
            width={640}
            height={447}
            className="h-10 w-auto drop-shadow-[0_0_12px_rgba(63,169,245,0.55)] transition-transform duration-500 group-hover:scale-110"
          />
          <span className="font-display text-sm font-bold tracking-[0.22em]">BLASTX</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Section navigation">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3.5 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href="#contact" className="btn-primary px-4 py-2 text-sm">
            Get a quote
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="flex size-9 items-center justify-center rounded-full border border-white/15 bg-white/5 md:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          className="glass fade-up mx-auto mt-2 flex max-w-6xl flex-col rounded-3xl bg-background/90 p-3 md:hidden"
          aria-label="Mobile navigation"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-3 text-base font-medium hover:bg-white/5"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
