import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { Marquee } from '@/components/marquee'
import { Services } from '@/components/services'
import { BeforeAfter } from '@/components/before-after'
import { ShowcaseSlider } from '@/components/showcase-slider'
import { Process } from '@/components/process'
import { Quality } from '@/components/quality'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <SiteNav />
      <Hero />
      <Marquee />
      <Services />
      <BeforeAfter />
      <ShowcaseSlider />
      <Process />
      <Quality />
      <SiteFooter />
    </main>
  )
}
