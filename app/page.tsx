import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { ExecutiveSummary } from '@/components/executive-summary'
import { Market } from '@/components/market'
import { Financials } from '@/components/financials'
import { Capex } from '@/components/capex'
import { Operations } from '@/components/operations'
import { Risk } from '@/components/risk'
import { Roadmap } from '@/components/roadmap'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <SiteNav />
      <Hero />
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
