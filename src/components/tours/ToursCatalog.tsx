'use client'

import { useMemo, useState } from 'react'
import { tours, tourCategories, type TourCategory } from '@/lib/content'
import { TourCard } from '@/components/ui/TourCard'
import { Search } from 'lucide-react'

export function ToursCatalog() {
  const [keyword, setKeyword] = useState('')
  const [destination, setDestination] = useState('All')
  const [category, setCategory] = useState<TourCategory | 'All'>('All')

  const destinations = useMemo(() => {
    const unique = [...new Set(tours.map((t) => t.destination))]
    return ['All', ...unique]
  }, [])

  const filtered = useMemo(() => {
    return tours.filter((tour) => {
      const matchesKeyword =
        keyword.trim() === '' ||
        [tour.title, tour.destination, tour.country, tour.desc, ...tour.highlights]
          .join(' ')
          .toLowerCase()
          .includes(keyword.toLowerCase())

      const matchesDestination = destination === 'All' || tour.destination === destination
      const matchesCategory = category === 'All' || tour.category === category

      return matchesKeyword && matchesDestination && matchesCategory
    })
  }, [keyword, destination, category])

  return (
    <div>
      <div className="mb-10 rounded-3xl border border-border bg-surface p-6 shadow-premium md:p-8">
        <p className="eyebrow mb-4">Find Your Package</p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
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
          <div>
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
          <div>
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
          Showing {filtered.length} of {tours.length} packages · All bookings are handled by enquiry, not instant checkout.
        </p>
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-3xl border border-border bg-sand p-12 text-center">
          <p className="mb-2 font-display text-2xl font-semibold text-ink">No packages match your search</p>
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
