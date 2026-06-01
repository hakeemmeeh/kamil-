'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Search } from 'lucide-react'
import { tours, tourInterests } from '@/lib/content'
import { buildToursSearchHref } from '@/lib/tourFilters'
import { cn } from '@/lib/utils'

interface TourSearchBarProps {
  className?: string
  /** Pull up over hero (homepage) */
  overlap?: boolean
  compact?: boolean
}

export function TourSearchBar({ className, overlap = false, compact = false }: TourSearchBarProps) {
  const router = useRouter()
  const [keyword, setKeyword] = useState('')
  const [destination, setDestination] = useState('All')
  const [interest, setInterest] = useState('All')
  const [departureDate, setDepartureDate] = useState('')

  const destinations = ['All', ...new Set(tours.map((t) => t.destination))]

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    router.push(
      buildToursSearchHref({
        keyword,
        destination,
        interest,
        departureDate: departureDate || undefined,
      })
    )
  }

  return (
    <section
      id="find-tour"
      className={cn(
        'relative',
        overlap ? 'z-50 -mt-12 pb-6 md:-mt-16 md:pb-8' : 'z-30 section-padding bg-sand-light pt-6',
        className
      )}
    >
      <div className="mx-auto max-w-6xl px-5">
        <form
          onSubmit={handleSubmit}
          className={cn(
            'rounded-3xl border border-border bg-white p-6 shadow-premium md:p-8',
            compact && 'md:p-6'
          )}
        >
          {!compact && (
            <div className="mb-6 text-center md:mb-8 md:text-left">
              <p className="font-kanila-script mb-2 text-[1.35rem] text-kamil-green">Find Your Tour</p>
              <h2 className="font-kanila-display text-2xl font-normal text-ink md:text-3xl">
                Search packages worldwide
              </h2>
              <p className="mt-2 text-sm text-ink-muted">
                Keyword, destination, or travel style — then send an enquiry to confirm dates and pricing.
              </p>
            </div>
          )}
          {compact && <p className="eyebrow mb-4">Find Your Tour</p>}

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <label htmlFor="home-tour-keyword" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-ink-muted">
                Keyword
              </label>
              <div className="relative">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted" />
                <input
                  id="home-tour-keyword"
                  type="search"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  placeholder="Oslo, beach, corporate…"
                  className="w-full rounded-xl border border-border bg-sand-light py-3 pl-10 pr-4 text-sm outline-none transition focus:border-gold focus:ring-4 focus:ring-gold/15"
                />
              </div>
            </div>
            <div className="lg:col-span-3">
              <label htmlFor="home-tour-dest" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-ink-muted">
                Destination
              </label>
              <select
                id="home-tour-dest"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full rounded-xl border border-border bg-sand-light px-4 py-3 text-sm outline-none transition focus:border-gold focus:ring-4 focus:ring-gold/15"
              >
                {destinations.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </div>
            <div className="lg:col-span-2">
              <label htmlFor="home-tour-date" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-ink-muted">
                Departure date
              </label>
              <input
                id="home-tour-date"
                type="date"
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
                className="w-full rounded-xl border border-border bg-sand-light px-4 py-3 text-sm outline-none transition focus:border-gold focus:ring-4 focus:ring-gold/15"
              />
            </div>
            <div className="lg:col-span-3">
              <label htmlFor="home-tour-interest" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-ink-muted">
                Travel style
              </label>
              <select
                id="home-tour-interest"
                value={interest}
                onChange={(e) => setInterest(e.target.value)}
                className="w-full rounded-xl border border-border bg-sand-light px-4 py-3 text-sm outline-none transition focus:border-gold focus:ring-4 focus:ring-gold/15"
              >
                <option value="All">All interests</option>
                {tourInterests.map((i) => (
                  <option key={i} value={i}>
                    {i}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
            <p className="text-center text-xs text-ink-muted sm:text-left">
              All packages are confirmed by enquiry — not instant online checkout.
            </p>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-8 py-3.5 text-sm font-extrabold uppercase tracking-[0.1em] text-white shadow-glow transition hover:bg-gold-dark sm:w-auto"
            >
              <Search className="h-4 w-4" />
              Search Tours
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
