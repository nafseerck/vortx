import type { Metadata } from 'next'
import { SiteNav } from '@/components/site-nav'
import { IntroVideoHero } from '@/components/intro-video-hero'
import { SiteFooter } from '@/components/site-footer'
import CustomersPage from '@/app/customers/page'

/**
 * CONFIGURATION FLAG FOR BUSINESS LAUNCH:
 * 
 * - `false` (Pre-launch mode - CURRENT):
 *   Visiting `/` displays the Intro Video presentation & portal selector (Investor vs Client).
 * 
 * - `true` (Post-launch mode):
 *   Visiting `/` directly renders the Client Area website.
 * 
 * In both cases, the Investor Portal remains permanently accessible at:
 *   - `/investor-area`
 *   - `/investor`
 */
const LAUNCHED_BUSINESS = false

export const metadata: Metadata = {
  title: 'BLASTX Dry Ice — Precision Eco-Cleaning & Detailing | Dubai, UAE',
  description:
    'BLASTX is Dubai’s premier zero-water, chemical-free precision eco-cleaning service for hypercars, superyachts, aviation, and industrial maintenance.',
}

export default function Page() {
  if (LAUNCHED_BUSINESS) {
    return <CustomersPage />
  }

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground flex flex-col justify-between">
      {/* <SiteNav mode="intro" /> */}
      <IntroVideoHero />
      {/* <SiteFooter /> */}
    </main>
  )
}
