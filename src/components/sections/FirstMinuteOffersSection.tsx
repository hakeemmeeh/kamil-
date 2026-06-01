'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, Flame } from 'lucide-react'
import { tours } from '@/lib/content'
import { HotDealTourCard } from '@/components/tours/HotDealTourCard'
import { cn } from '@/lib/utils'

const offers = tours.filter((t) => t.firstMinute)

export function FirstMinuteOffersSection() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [index, setIndex] = useState(0)

  const scrollToIndex = useCallback((i: number) => {
    const track = trackRef.current
    if (!track) return
    const cards = track.querySelectorAll<HTMLElement>('.hot-deal-card')
    const clamped = Math.max(0, Math.min(i, cards.length - 1))
    const target = cards[clamped]
    if (!target) return
    const trackRect = track.getBoundingClientRect()
    const cardRect = target.getBoundingClientRect()
    const offset =
      target.offsetLeft - track.offsetLeft - (trackRect.width - cardRect.width) / 2
    track.scrollTo({ left: offset, behavior: 'smooth' })
    setIndex(clamped)
  }, [])

  const advance = useCallback(
    (step: number) => {
      scrollToIndex(index + step)
    },
    [index, scrollToIndex]
  )

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const onScroll = () => {
      const cards = [...track.querySelectorAll<HTMLElement>('.hot-deal-card')]
      if (!cards.length) return
      const trackCenter = track.scrollLeft + track.clientWidth / 2
      let closest = 0
      let minDist = Infinity
      cards.forEach((card, i) => {
        const cardCenter = card.offsetLeft - track.offsetLeft + card.offsetWidth / 2
        const dist = Math.abs(cardCenter - trackCenter)
        if (dist < minDist) {
          minDist = dist
          closest = i
        }
      })
      setIndex(closest)
    }

    track.addEventListener('scroll', onScroll, { passive: true })
    return () => track.removeEventListener('scroll', onScroll)
  }, [])

  if (offers.length === 0) return null

  return (
    <section
      id="first-minute-offers"
      className="hot-deals-section relative z-30 overflow-hidden bg-cream py-16 md:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5">
        <div className="mb-8 flex flex-col gap-8 lg:mb-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-kamil-green/30 bg-kamil-green/10 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.14em] text-kamil-green-dark">
              <Flame className="h-3.5 w-3.5" strokeWidth={2.5} />
              Limited time offers
            </span>
            <p className="font-kanila-script mb-2 text-[1.75rem] text-kamil-green md:text-[2rem]">
              Book While They&apos;re Hot
            </p>
            <h2 className="font-kanila-display text-[2.35rem] font-normal leading-[0.95] tracking-tight text-ink md:text-[2.85rem] lg:text-[3.1rem]">
              Exclusive <em className="text-gold">Hot Deals</em>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-muted md:text-lg">
              Hand-picked first-minute packages — scroll or browse the full catalogue.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 sm:flex-row lg:shrink-0">
            <div className="flex items-center gap-2 xl:hidden">
              <button
                type="button"
                onClick={() => advance(-1)}
                disabled={index === 0}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-white text-ink shadow-sm transition hover:border-gold hover:text-gold disabled:opacity-40"
                aria-label="Previous deal"
              >
                <ChevronLeft className="h-5 w-5" strokeWidth={2} />
              </button>
              <button
                type="button"
                onClick={() => advance(1)}
                disabled={index >= offers.length - 1}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-white text-ink shadow-sm transition hover:border-gold hover:text-gold disabled:opacity-40"
                aria-label="Next deal"
              >
                <ChevronRight className="h-5 w-5" strokeWidth={2} />
              </button>
            </div>
            <Link
              href="/tours?offers=1"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-3.5 text-[13px] font-extrabold uppercase tracking-[0.1em] text-white shadow-cta transition hover:bg-gold-dark hover:shadow-glow"
            >
              View All Tour
              <span aria-hidden>»</span>
            </Link>
          </div>
        </div>

        <div className="mb-6 flex flex-col items-center gap-4 xl:hidden">
          <p className="text-sm font-semibold text-ink-muted">
            <span className="text-ink">{String(index + 1).padStart(2, '0')}</span>
            {' / '}
            {String(offers.length).padStart(2, '0')}
          </p>
          <div className="flex justify-center gap-2">
            {offers.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => scrollToIndex(i)}
                aria-label={`Go to deal ${i + 1}`}
                className={cn(
                  'h-1.5 rounded-full transition-all duration-300',
                  i === index ? 'w-8 bg-gold' : 'w-1.5 bg-border hover:bg-gold/40'
                )}
              />
            ))}
          </div>
        </div>

        {/* Desktop — centred 4-column grid */}
        <div className="hidden gap-6 xl:grid xl:grid-cols-4 xl:gap-7">
          {offers.map((tour) => (
            <HotDealTourCard key={tour.slug} tour={tour} className="w-full !max-w-none" />
          ))}
        </div>

        {/* Tablet / mobile — centred scroll */}
        <div
          ref={trackRef}
          className="hot-deals-track -mx-5 overflow-x-auto px-5 pb-2 pt-1 xl:hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          data-lenis-prevent
        >
          <div className="hot-deals-track__row mx-auto flex w-max min-w-full justify-center gap-6 md:gap-7">
            {offers.map((tour) => (
              <HotDealTourCard key={tour.slug} tour={tour} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
