import type { Metadata } from 'next'
import { destinations } from '@/lib/content'
import { FadeUp } from '@/components/ui/FadeUp'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { DestinationCard } from '@/components/ui/DestinationCard'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Destinations & Regional Travel',
  description: 'Explore confirmed travel destinations across Somalia and beyond with Kamil Travel airport support network.',
}

export default function DestinationsPage() {
  return (
    <>
      <section className="relative pt-40 pb-20 bg-night overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507812984078-917a274065be?w=1920&q=80')] bg-cover bg-center opacity-15" />
        <div className="relative z-10 mx-auto max-w-4xl px-5 text-center">
          <p className="eyebrow !text-white/60 justify-center before:!bg-white/40">Where We Operate</p>
          <h1 className="font-display text-5xl md:text-7xl font-semibold text-white leading-[0.95] tracking-tight mb-6">Destinations & Regional Travel</h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">Explore our confirmed travel network across Somalia and the region.</p>
        </div>
      </section>

      <section className="section-padding bg-sand-light">
        <div className="mx-auto max-w-7xl px-5">
          <FadeUp><SectionHeader eyebrow="Somalia Network" title="Our Airport Support Network" description="Kamil Travel has representatives across key Somalia airports, with a branch office at Mogadishu airport." /></FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.filter(d => d.status === 'confirmed-context').map((dest, i) => (
              <FadeUp key={dest.slug} delay={i * 0.08}>
                <DestinationCard {...dest} />
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-sand">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <FadeUp>
            <SectionHeader eyebrow="Global Travel" title="International Destinations" description="[CLIENT TO PROVIDE: confirmed global destinations and package categories]" />
            <Button href="/contact" variant="primary" size="lg">Inquire About Global Travel</Button>
          </FadeUp>
        </div>
      </section>

      <section className="section-padding bg-night text-center">
        <div className="mx-auto max-w-3xl px-5">
          <FadeUp>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-white leading-[0.95] tracking-tight mb-6">Planning a trip?</h2>
            <Button href="/contact" variant="primary" size="lg">Start an Inquiry</Button>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
