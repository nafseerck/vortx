import type { Metadata } from 'next'
import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { BeforeAfterSlider } from '@/components/before-after'
import { ShowcaseSlider } from '@/components/showcase-slider'
import { Process } from '@/components/process'
import { Market } from '@/components/market'
import { Operations } from '@/components/operations'
import { Risk } from '@/components/risk'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'BLSTX Dry Ice — Precision Eco-Cleaning & Detailing | Dubai, UAE',
  description:
    'BLSTX is Dubai’s premier zero-water, chemical-free precision eco-cleaning service for hypercars, superyachts, aviation, and industrial maintenance.',
}

export default function CustomersPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <SiteNav mode="customer" />
      <Hero />

      {/* Interactive Sublimation Reveal Slider */}
      <section className="relative z-10 -mt-10 px-5 sm:px-8">
        <BeforeAfterSlider />
      </section>

      {/* Multi-Slide Sector Showcase */}
      <ShowcaseSlider />

      {/* The Science of Dry Ice Sublimation */}
      <Process />

      {/* Market Services */}
      <Market />

      {/* Operations & Pre-Service Inspection Protocol */}
      <Operations />

      {/* Quality & Safety Risk Pre-emption */}
      <Risk />

      {/* Footer */}
      <SiteFooter />
    </main>
  )
}
