export interface Service {
  slug: string
  eyebrow: string
  title: string
  desc: string
  image: string
}

export interface Destination {
  slug: string
  title: string
  country: string
  desc: string
  image: string
  status: 'confirmed-context' | 'client-to-confirm'
}

export interface Testimonial {
  title: string
  quote: string
  name: string
  route: string
}

export interface Tour {
  slug: string
  title: string
  destination: string
  country: string
  category: string
  duration: string
  desc: string
  image: string
  highlights: string[]
  featured: boolean
  rating?: number
  reviewCount?: number
  interests?: string[]
  promoLabel?: string
  firstMinute?: boolean
  /** Display “From” price on hot-deal cards (indicative — confirm with team) */
  priceFrom?: string
  priceWas?: string
}

export interface NavItem {
  label: string
  href: string
}

export interface CoreValue {
  title: string
  desc: string
}
