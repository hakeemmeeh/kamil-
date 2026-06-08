'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, Clock, MapPin, ArrowUpRight } from 'lucide-react'
import { tours } from '@/lib/content'
import { LineReveal } from '@/components/ui/LineReveal'

const journeys = tours.filter((t) => t.featured)

export function CuratedJourneysSection() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const scrollToIndex = useCallback((i: number) => {
    const track = trackRef.current
    if (!track) return
    const cards = track.querySelectorAll<HTMLElement>('.journey-card')
    const target = cards[i]
    if (!target) return
    const offset = target.offsetLeft - 20
    track.scrollTo({ left: offset, behavior: 'smooth' })
    setIndex(i)
  }, [])

  const advance = useCallback(
    (step: number) => {
      const next = (index + step + journeys.length) % journeys.length
      scrollToIndex(next)
    },
    [index, scrollToIndex]
  )

  useEffect(() => {
    if (paused || journeys.length <= 1) return
    const timer = window.setInterval(() => advance(1), 5000)
    return () => window.clearInterval(timer)
  }, [advance, paused])

  return (
    <section className="section-padding overflow-hidden bg-white" id="popular-tours">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="animate-eyebrow eyebrow mb-6 justify-start">
              Tour Packages
            </p>
            <LineReveal
              tag="h2"
              className="font-kanila-display text-4xl font-normal leading-[0.95] tracking-tight text-ink md:text-5xl lg:text-[52px]"
            >
              Most Popular Tours
            </LineReveal>
            <p className="animate-fade-up mt-5 text-lg leading-relaxed text-ink-muted">
              From Santorini and Bali to Thailand, the Seychelles, and beyond — inquiry-based packages
              worldwide, coordinated from our Nairobi headquarters.
            </p>
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <button
              type="button"
              onClick={() => advance(-1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-sand-light text-ink transition hover:border-gold hover:bg-gold/10 hover:text-gold"
              aria-label="Previous journey"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => advance(1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-sand-light text-ink transition hover:border-gold hover:bg-gold/10 hover:text-gold"
              aria-label="Next journey"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="journey-track flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] md:gap-6 [&::-webkit-scrollbar]:hidden"
          data-lenis-prevent
        >
          {journeys.map((tour) => (
            <article
              key={tour.slug}
              className="journey-card group relative w-[min(88vw,420px)] shrink-0 snap-start overflow-hidden rounded-4xl bg-white shadow-premium ring-1 ring-border/60 md:w-[460px]"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-4xl">
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 88vw, 460px"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-night/45 via-night/10 to-transparent" />
                <span className="absolute left-5 top-5 rounded-full bg-gold px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.12em] text-white">
                  {tour.category}
                </span>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="mb-3 flex flex-wrap items-center gap-3 text-xs font-semibold text-white/70">
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5 text-gold" />
                      {tour.destination}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5 text-gold" />
                      {tour.duration}
                    </span>
                  </div>
                  <h3 className="mb-2 font-kanila-display text-2xl font-normal text-white">
                    {tour.title}
                  </h3>
                  <p className="mb-5 line-clamp-2 text-sm leading-relaxed text-white/65">
                    {tour.desc}
                  </p>
                  <div className="flex items-center gap-3">
                    <Link
                      href={`/contact?inquiry=Tour+Inquiry&message=${encodeURIComponent(`I am interested in: ${tour.title}`)}`}
                      className="inline-flex items-center rounded-full bg-gold px-5 py-2.5 text-xs font-extrabold uppercase tracking-[0.08em] text-white transition hover:bg-gold-dark"
                    >
                      Enquire
                    </Link>
                    <Link
                      href={`/tours/${tour.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-white/80 transition hover:gap-2 hover:text-gold"
                    >
                      Details <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="animate-fade-up mt-10 text-center md:text-left">
          <Link
            href="/tours"
            className="inline-flex items-center gap-2 text-sm font-bold text-gold transition hover:gap-3"
          >
            View all packages <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
