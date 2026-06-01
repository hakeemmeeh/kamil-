import type { Tour } from '@/types'
import type { TourCategory } from '@/lib/content'

export interface TourFilterParams {
  keyword?: string
  destination?: string
  category?: TourCategory | 'All'
  interest?: string
  /** Reserved for enquiry context — not used to hide packages */
  departureDate?: string
  firstMinuteOnly?: boolean
}

export function filterTours(tours: Tour[], params: TourFilterParams): Tour[] {
  const keyword = params.keyword?.trim().toLowerCase() ?? ''
  const destination = params.destination ?? 'All'
  const category = params.category ?? 'All'
  const interest = params.interest ?? 'All'

  return tours.filter((tour) => {
    if (params.firstMinuteOnly && !tour.firstMinute) return false

    const matchesKeyword =
      keyword === '' ||
      [
        tour.title,
        tour.destination,
        tour.country,
        tour.desc,
        ...tour.highlights,
        ...(tour.interests ?? []),
      ]
        .join(' ')
        .toLowerCase()
        .includes(keyword)

    const matchesDestination = destination === 'All' || tour.destination === destination
    const matchesCategory = category === 'All' || tour.category === category
    const matchesInterest =
      interest === 'All' ||
      (tour.interests ?? []).some((i) => i.toLowerCase() === interest.toLowerCase()) ||
      (interest === 'First Minute' && tour.firstMinute === true)

    return matchesKeyword && matchesDestination && matchesCategory && matchesInterest
  })
}

export function buildToursSearchHref(params: TourFilterParams): string {
  const sp = new URLSearchParams()
  if (params.keyword?.trim()) sp.set('q', params.keyword.trim())
  if (params.destination && params.destination !== 'All') sp.set('dest', params.destination)
  if (params.category && params.category !== 'All') sp.set('category', params.category)
  if (params.interest && params.interest !== 'All') sp.set('interest', params.interest)
  if (params.departureDate) sp.set('date', params.departureDate)
  if (params.firstMinuteOnly) sp.set('offers', '1')
  const qs = sp.toString()
  return qs ? `/tours?${qs}` : '/tours'
}
