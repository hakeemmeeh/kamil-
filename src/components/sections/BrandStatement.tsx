'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Check, ArrowUpRight } from 'lucide-react'
import { LineReveal } from '@/components/ui/LineReveal'
import { cityImage, cityImageAlts } from '@/lib/cityImages'
import { about } from '@/lib/content'

const planTripImages = [
  { key: 'newYork' as const, className: 'relative z-10 aspect-[3/4] w-full' },
  { key: 'london' as const, className: 'relative mt-10 aspect-[3/4] w-full sm:mt-14' },
  { key: 'tokyo' as const, className: 'relative aspect-[3/4] w-full' },
] as const

const highlights = [
  { title: 'Exclusive Trips', desc: 'Tailored itineraries for corporate and leisure travellers.' },
  { title: 'Professional Guides', desc: 'Dedicated support from Nairobi to your destination.' },
  { title: 'Airport Assistance', desc: 'Meet & assist at Mogadishu and across Somalia.' },
]

/** Kanila About — Plan Your Trip With Us (images left, copy + checklist right) */
export function BrandStatement() {
  return (
    <section className="relative z-20 section-padding bg-white" id="plan-your-trip">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          {/* Kanila — arched photo collage (left on desktop) */}
          <div className="plan-trip-collage order-2 grid grid-cols-2 items-end gap-4 sm:gap-5 lg:order-1">
            <div className="relative pt-2 pl-2 sm:pt-3 sm:pl-3">
              <div
                className="plan-trip-arch-frame pointer-events-none absolute left-0 top-0 z-0 aspect-[3/4] w-[calc(100%-8px)] rounded-t-full rounded-b-3xl border-2 border-gold/50"
                aria-hidden
              />
              <div
                className={`plan-trip-arch plan-trip-arch--lead arch-card-mask overflow-hidden shadow-2xl ${planTripImages[0].className}`}
              >
                <Image
                  src={cityImage(planTripImages[0].key, 1400)}
                  alt={cityImageAlts[planTripImages[0].key]}
                  width={400}
                  height={520}
                  quality={90}
                  className="h-full w-full object-cover will-change-transform"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 sm:gap-5">
              <div
                className={`plan-trip-arch plan-trip-arch--from-right arch-card-mask overflow-hidden shadow-premium ${planTripImages[1].className}`}
              >
                <Image
                  src={cityImage(planTripImages[1].key, 1400)}
                  alt={cityImageAlts[planTripImages[1].key]}
                  width={360}
                  height={480}
                  quality={90}
                  className="h-full w-full object-cover will-change-transform"
                />
              </div>
              <div
                className={`plan-trip-arch plan-trip-arch--from-right arch-card-mask overflow-hidden shadow-premium ${planTripImages[2].className}`}
              >
                <Image
                  src={cityImage(planTripImages[2].key, 1400)}
                  alt={cityImageAlts[planTripImages[2].key]}
                  width={360}
                  height={480}
                  quality={90}
                  className="h-full w-full object-cover will-change-transform"
                />
              </div>
            </div>
          </div>

          {/* Copy — right on desktop */}
          <div className="order-1 lg:order-2">
            <p className="animate-eyebrow eyebrow mb-4">Plan Your Trip</p>
            <LineReveal
              tag="h2"
              className="mb-6 font-kanila-display text-4xl font-normal leading-[0.95] tracking-tight text-ink md:text-5xl lg:text-[3.25rem]"
            >
              {`Plan Your Trip\nWith Us`}
            </LineReveal>
            <p className="animate-fade-up mb-8 max-w-lg text-base leading-relaxed text-ink-muted md:text-lg">
              {about.intro}
            </p>

            <ul className="animate-fade-up mb-10 space-y-5">
              {highlights.map((item) => (
                <li key={item.title} className="flex gap-4">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                    <Check className="h-4 w-4" strokeWidth={2.5} />
                  </span>
                  <div>
                    <p className="font-display text-lg font-semibold text-ink">{item.title}</p>
                    <p className="text-sm leading-relaxed text-ink-muted">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="animate-fade-up inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 text-sm font-extrabold uppercase tracking-[0.1em] text-white shadow-glow transition hover:bg-gold-dark hover:-translate-y-0.5"
            >
              Explore Now <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
