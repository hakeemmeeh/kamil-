export const routes = {
  home: '/',
  about: '/about',
  corporateTravel: '/corporate-travel',
  services: '/services',
  destinations: '/destinations',
  visaAssistance: '/visa-assistance',
  carRental: '/car-rental-airport-transfers',
  tours: '/tours',
  contact: '/contact',
} as const

export type Route = (typeof routes)[keyof typeof routes]
