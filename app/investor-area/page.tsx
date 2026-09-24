import type { Metadata } from 'next'
import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { BeforeAfterSlider } from '@/components/before-after'
import { ShowcaseSlider } from '@/components/showcase-slider'
import { Process } from '@/components/process'
import { ExecutiveSummary } from '@/components/executive-summary'
import { Market } from '@/components/market'
import { Financials } from '@/components/financials'
import { Capex } from '@/components/capex'
import { Operations } from '@/components/operations'
import { Risk } from '@/components/risk'
import { Roadmap } from '@/components/roadmap'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'BLASTX Dry Ice — Investor Area & Business Model | Dubai, UAE',
  description:
    'Investor pitch deck and operational breakdown for BLASTX Dry Ice — Dubai’s premier eco-cleaning & industrial detailing enterprise.',
}

export default function InvestorAreaPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <SiteNav mode="investor" />
      <Hero />

      {/* Interactive Sublimation Reveal Slider */}
      <section className="relative z-10 -mt-10 px-5 sm:px-8">
        <BeforeAfterSlider />
      </section>

      {/* Multi-Slide Interactive Showcase Gallery */}
      <ShowcaseSlider />

      {/* The Science of Dry Ice Blasting */}
      <Process />

      <ExecutiveSummary />
      <Market />
      <Financials />
      <Capex />
      <Operations />
      <Risk />
      <Roadmap />
      <SiteFooter />
    </main>
  )
}
