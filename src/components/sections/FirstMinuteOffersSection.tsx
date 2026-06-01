'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FadeUp } from '@/components/ui/FadeUp'
import { LineReveal } from '@/components/ui/LineReveal'
import { TourRating } from '@/components/ui/TourRating'
import { tours } from '@/lib/content'
import { Clock, MapPin, ArrowUpRight } from 'lucide-react'

const offers = tours.filter((t) => t.firstMinute)

export function FirstMinuteOffersSection() {
  if (offers.length === 0) return null

  return (
    <section className="section-padding bg-sand" id="first-minute-offers">
      <div className="mx-auto max-w-7xl px-5">
        <FadeUp>
          <p className="font-kanila-script mb-3 text-center text-[1.5rem] text-kamil-green md:text-[1.65rem]">
            Limited Time
          </p>
          <LineReveal
            tag="h2"
            align="center"
            className="mb-4 font-kanila-display text-4xl font-normal leading-[0.95] tracking-tight text-ink md:text-5xl"
          >
            Book them while they&apos;re hot
          </LineReveal>
          <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-ink-muted">
            First-minute offers on select packages — confirm dates and pricing with our team.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {offers.map((tour, i) => (
            <FadeUp key={tour.slug} delay={i * 0.08}>
              <article className="group overflow-hidden rounded-3xl border border-border bg-white shadow-premium transition hover:-translate-y-1">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-night/50 to-transparent" />
                  <div className="absolute left-4 top-4 flex gap-2">
                    {tour.promoLabel && (
                      <span className="rounded-full bg-kamil-green-dark px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white">
                        {tour.promoLabel}
                      </span>
                    )}
                    <span className="rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold uppercase text-night">
                      First minute
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <TourRating rating={tour.rating ?? 4.5} reviewCount={tour.reviewCount ?? 2} className="mb-3" />
                  <div className="mb-2 flex flex-wrap gap-3 text-xs font-semibold text-ink-muted">
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5 text-gold" />
                      {tour.destination}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5 text-gold" />
                      {tour.duration}
                    </span>
                  </div>
                  <h3 className="mb-2 font-kanila-display text-2xl font-normal text-ink">{tour.title}</h3>
                  <ul className="mb-5 flex flex-wrap gap-2">
                    {(tour.interests ?? tour.highlights).slice(0, 3).map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full bg-sand px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-ink-muted"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-3">
                    <Link
                      href={`/contact?inquiry=Tour+Inquiry&message=${encodeURIComponent(`First-minute offer: ${tour.title}`)}`}
                      className="flex-1 rounded-full bg-gold py-2.5 text-center text-xs font-extrabold uppercase tracking-wider text-white transition hover:bg-gold-dark"
                    >
                      Book your trip
                    </Link>
                    <Link
                      href={`/tours/${tour.slug}`}
                      className="inline-flex items-center gap-1 self-center text-xs font-bold text-gold"
                    >
                      Details <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.2}>
          <div className="mt-12 text-center">
            <Link
              href="/tours?offers=1"
              className="inline-flex items-center gap-2 rounded-full border-2 border-gold px-8 py-3.5 text-sm font-extrabold uppercase tracking-[0.1em] text-gold transition hover:bg-gold hover:text-white"
            >
              Explore all offers
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
