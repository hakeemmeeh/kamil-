import type { Metadata } from 'next'
import { FadeUp } from '@/components/ui/FadeUp'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Button } from '@/components/ui/Button'
import { Compass } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Tours & Travel Experiences',
  description: 'Explore curated tours and travel experiences with Kamil Travel — professional travel management across Kenya, Somalia, and beyond.',
}

export default function ToursPage() {
  return (
    <>
      <section className="relative pt-40 pb-20 bg-night overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1920&q=80')] bg-cover bg-center opacity-15" />
        <div className="relative z-10 mx-auto max-w-4xl px-5 text-center">
          <p className="eyebrow !text-white/60 justify-center before:!bg-white/40">Explore</p>
          <h1 className="font-display text-5xl md:text-7xl font-semibold text-white leading-[0.95] tracking-tight mb-6">Tours & Travel Experiences</h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">Curated travel experiences managed with professional care.</p>
        </div>
      </section>

      <section className="section-padding bg-sand-light">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <FadeUp>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-gold/10 text-gold mb-8">
              <Compass className="h-10 w-10" />
            </div>
            <SectionHeader eyebrow="Coming Soon" title="Tours & Packages" description="We are preparing curated tours and travel packages. Check back soon or inquire for custom travel experiences." />
          </FadeUp>

          <FadeUp delay={0.15}>
            <div className="rounded-2xl bg-sand border border-border p-8 mb-8">
              <p className="text-ink-muted italic text-sm">[CLIENT TO PROVIDE: confirmed tours and packages]</p>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <Button href="/contact" variant="primary" size="lg">Inquire About Tours</Button>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
