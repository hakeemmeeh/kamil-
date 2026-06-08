'use client'

import { useMemo, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { tours, tourCategories, tourInterests, type TourCategory } from '@/lib/content'
import { TourCard } from '@/components/ui/TourCard'
import { filterTours } from '@/lib/tourFilters'
import { Search } from 'lucide-react'

type TourFilters = {
  keyword: string
  destination: string
  category: TourCategory | 'All'
  interest: string
  departureDate: string
}

function filtersFromSearchParams(searchParams: URLSearchParams): TourFilters {
  const cat = searchParams.get('category')
  return {
    keyword: searchParams.get('q') ?? '',
    destination: searchParams.get('dest') ?? 'All',
    category:
      cat && tourCategories.includes(cat as TourCategory) ? (cat as TourCategory) : 'All',
    interest: searchParams.get('interest') ?? 'All',
    departureDate: searchParams.get('date') ?? '',
  }
}

function ToursCatalogForm({ initial }: { initial: TourFilters }) {
  const [keyword, setKeyword] = useState(initial.keyword)
  const [destination, setDestination] = useState(initial.destination)
  const [category, setCategory] = useState<TourCategory | 'All'>(initial.category)
  const [interest, setInterest] = useState(initial.interest)
  const [departureDate, setDepartureDate] = useState(initial.departureDate)

  const searchParams = useSearchParams()
  const firstMinuteOnly = searchParams.get('offers') === '1'

  const destinations = useMemo(() => {
    const unique = [...new Set(tours.map((t) => t.destination))]
    return ['All', ...unique]
  }, [])

  const filtered = useMemo(
    () =>
      filterTours(tours, {
        keyword,
        destination,
        category,
        interest,
        departureDate,
        firstMinuteOnly,
      }),
    [keyword, destination, category, interest, departureDate, firstMinuteOnly]
  )

  return (
    <div>
      <div className="mb-10 rounded-3xl border border-border bg-surface p-6 shadow-premium md:p-8">
        <p className="eyebrow mb-4">Find Your Package</p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <label htmlFor="tour-keyword" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-ink-muted">
              Keyword
            </label>
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted" />
              <input
                id="tour-keyword"
                type="search"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Search packages..."
                className="w-full rounded-xl border border-border bg-sand-light py-3 pl-10 pr-4 text-sm outline-none transition focus:border-gold focus:ring-4 focus:ring-gold/15"
              />
            </div>
          </div>
          <div className="lg:col-span-1">
            <label htmlFor="tour-destination" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-ink-muted">
              Destination
            </label>
            <select
              id="tour-destination"
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
          <div className="lg:col-span-1">
            <label htmlFor="tour-date" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-ink-muted">
              Departure
            </label>
            <input
              id="tour-date"
              type="date"
              value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)}
              className="w-full rounded-xl border border-border bg-sand-light px-4 py-3 text-sm outline-none transition focus:border-gold focus:ring-4 focus:ring-gold/15"
            />
          </div>
          <div className="lg:col-span-1">
            <label htmlFor="tour-interest" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-ink-muted">
              Interest
            </label>
            <select
              id="tour-interest"
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
              className="w-full rounded-xl border border-border bg-sand-light px-4 py-3 text-sm outline-none transition focus:border-gold focus:ring-4 focus:ring-gold/15"
            >
              <option value="All">All</option>
              {tourInterests.map((i) => (
                <option key={i} value={i}>
                  {i}
                </option>
              ))}
            </select>
          </div>
          <div className="lg:col-span-1">
            <label htmlFor="tour-category" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-ink-muted">
              Category
            </label>
            <select
              id="tour-category"
              value={category}
              onChange={(e) => setCategory(e.target.value as TourCategory | 'All')}
              className="w-full rounded-xl border border-border bg-sand-light px-4 py-3 text-sm outline-none transition focus:border-gold focus:ring-4 focus:ring-gold/15"
            >
              {tourCategories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        </div>
        <p className="mt-4 text-sm text-ink-muted">
          Showing {filtered.length} of {tours.length} packages
          {departureDate ? ` · Preferred departure: ${departureDate} (confirmed on enquiry)` : ''}
          {firstMinuteOnly ? ' · First-minute offers' : ''}
          {' · '}All bookings are handled by enquiry, not instant checkout.
        </p>
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-3xl border border-border bg-sand p-12 text-center">
          <p className="mb-2 font-kanila-display text-2xl font-normal text-ink">No packages match your search</p>
          <p className="text-sm text-ink-muted">Try different filters or contact us for a custom itinerary.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((tour) => (
            <div key={tour.slug} id={tour.slug}>
              <TourCard {...tour} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export function ToursCatalog() {
  const searchParams = useSearchParams()
  const filterKey = searchParams.toString()
  const initial = useMemo(() => filtersFromSearchParams(searchParams), [searchParams])

  return <ToursCatalogForm key={filterKey} initial={initial} />
}
