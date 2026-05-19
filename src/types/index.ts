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

export interface NavItem {
  label: string
  href: string
}

export interface CoreValue {
  title: string
  desc: string
}
