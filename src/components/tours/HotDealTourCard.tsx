'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Clock, Compass, MapPin, Star } from 'lucide-react'
import type { Tour } from '@/types'
import { cn } from '@/lib/utils'

function tourTypeLabel(tour: Tour): string {
  const interest = tour.interests?.[0]
  if (interest === 'Cruises') return 'Cruises'
  if (interest === 'Weekend') return 'City Tours'
  if (interest === 'Adventure') return 'Adventure'
  if (interest === 'Family Holidays') return 'Family Tours'
  return interest ?? tour.category
}

interface HotDealTourCardProps {
  tour: Tour
  className?: string
}

export function HotDealTourCard({ tour, className }: HotDealTourCardProps) {
  const rating = tour.rating ?? 4.5
  const reviews = tour.reviewCount ?? 2

  return (
    <article
      className={cn(
        'hot-deal-card group flex w-[min(85vw,340px)] shrink-0 snap-center flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-white/80 sm:w-[360px] md:w-[380px]',
        className
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={tour.image}
          alt={tour.title}
          fill
          quality={94}
          className="object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.05]"
          sizes="(max-width: 640px) 88vw, 400px"
        />
        {tour.promoLabel && (
          <span className="absolute right-4 top-4 rounded-full bg-kamil-green-dark px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.14em] text-white shadow-md">
            {tour.promoLabel}
          </span>
        )}

        <div className="absolute bottom-4 left-4 flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-bold text-ink shadow-sm backdrop-blur-sm">
          <MapPin className="h-3.5 w-3.5 text-gold" strokeWidth={2} />
          {tour.destination}
        </div>
      </div>

      <div className="flex flex-1 flex-col px-8 pb-8 pt-7">
        <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-sand px-3 py-1.5 text-sm">
          <span className="font-bold text-ink">{rating.toFixed(1)}</span>
          <Star className="h-3.5 w-3.5 fill-kamil-green text-kamil-green" strokeWidth={0} />
          <span className="text-ink-muted">
            ({reviews} {reviews === 1 ? 'review' : 'reviews'})
          </span>
        </div>

        <h3 className="mb-5 font-kanila-display text-[1.4rem] font-normal leading-[1.1] text-ink md:text-[1.5rem]">
          {tour.title}
        </h3>

        <div className="mb-6 flex flex-col gap-2.5 text-sm text-ink-muted">
          <span className="inline-flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold-light">
              <Compass className="h-4 w-4 text-gold" strokeWidth={1.75} />
            </span>
            {tourTypeLabel(tour)}
          </span>
          <span className="inline-flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold-light">
              <Clock className="h-4 w-4 text-gold" strokeWidth={1.75} />
            </span>
            {tour.duration}
          </span>
        </div>

        <div className="mb-6 mt-auto border-t border-border/80 pt-5">
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-ink-muted">From</p>
          <p className="mt-1 flex flex-wrap items-baseline gap-2">
            {tour.priceWas && (
              <span className="text-base text-ink-muted/60 line-through">{tour.priceWas}</span>
            )}
            <span className="font-kanila-display text-2xl text-ink">{tour.priceFrom ?? 'Enquire'}</span>
          </p>
        </div>

        <Link
          href={`/tours/${tour.slug}`}
          className="hot-deal-card__cta inline-flex w-full items-center justify-center gap-2 rounded-full py-4 text-[13px] font-extrabold uppercase tracking-[0.1em]"
        >
          View Tour
          <span aria-hidden>»</span>
        </Link>
      </div>
    </article>
  )
}
