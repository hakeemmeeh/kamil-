// src/lib/content.ts

export const site = {
  name: 'Kamil Travel',
  tagline: 'Beyond Words',
  website: 'https://www.kamiltravel.com',
  email: 'info@kamiltravel.com',
  phone: '020 2220011 | 020 2220022',
  mobile: '0752 800 800 | 0752 800 801',
  address:
    'Eco Bank Towers, 4th Floor, Muindi Mbingu Street, P.O. Box 24378, 00100, Nairobi, Kenya',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.817!2d36.8219!3d-1.2864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTcnMTEuMCJTIDM2wrA0OScxOC44IkU!5e0!3m2!1sen!2ske!4v1',
  mapLink: 'https://maps.google.com/?q=Eco+Bank+Towers+Muindi+Mbingu+Street+Nairobi',
}

/** Add URLs when confirmed — icons only render when a link is set */
export const social = {
  facebook: '',
  instagram: '',
  linkedin: '',
  x: '',
} as const

export const brandPositioning = {
  eyebrow: 'Corporate Travel · Regional Travel · Airport Services',
  headline: 'Premium Travel Management for Kenya, Somalia, and Beyond',
  subtext:
    'Kamil Travel delivers cost-effective, customized, and comprehensive travel management services for corporate and regional travelers.',
}

export const about = {
  intro:
    'Kamil Travel has over the years earned a reputation for outstanding cost-effective, customized, and comprehensive travel management services to corporate clientele in Kenya and Somalia with over 10 years of experience within the industry.',
  airportOffice:
    'Kamil Travel has a branch office at the Mogadishu airport where, among other services, the team offers meet and assist support to arriving and departing clients. The office also specializes in arranging group travels within the country.',
  airportRepresentatives:
    'Kamil Travel has representatives in 6 local airports within Somalia namely Hargeisa, Garowe, Bosaso, Galkayo, Kismayu and Baidoa.',
  airlineRelationships:
    'Kamil Travel has good relationships with major airlines working in Somalia for both inbound and outbound travels and offers competitive and cost-effective travel management services.',
}

export const vision =
  'A travel world full of connections, prosperity and satisfaction for all.'

export const mission =
  'To catalyze and transform the growth of the travel industry by being masters of professional service delivery. Through passion, integrity and commitment, we seek to engage, ignite and inspire your spirit every single time.'

export const coreValues = [
  {
    title: 'Professional Service',
    desc: 'We focus on dependable travel support, clear communication, and well-managed client experiences.',
  },
  {
    title: 'Integrity',
    desc: 'We handle every journey with honesty, accountability, and respect for client needs.',
  },
  {
    title: 'Commitment',
    desc: 'We stay responsive before, during, and after the journey to support smoother travel.',
  },
  {
    title: 'Convenience',
    desc: 'We simplify complex travel needs through coordinated ticketing, transfers, alerts, and support.',
  },
]

export const services = [
  {
    slug: 'air-ticketing',
    eyebrow: 'Booking & Reservations',
    title: 'Air Ticketing',
    desc: 'Professional flight booking and reservation support for corporate and individual travelers.',
    image: 'https://images.unsplash.com/photo-1556388158-158ea5ccacbd?w=800&q=80',
  },
  {
    slug: 'meet-assist',
    eyebrow: 'Airport Support',
    title: 'Meet & Assist Service',
    desc: 'Arrival and departure assistance designed to make airport movement easier and more comfortable.',
    image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&q=80',
  },
  {
    slug: 'travel-insurance',
    eyebrow: 'Cover',
    title: 'Travel Insurance',
    desc: 'Travel cover support for clients who need additional protection during their journeys.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80',
  },
  {
    slug: 'vip-lounge',
    eyebrow: 'Mogadishu Airport',
    title: 'VIP Lounge',
    desc: 'VIP lounge support connected to Kamil Travel\u2019s Mogadishu airport presence.',
    image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&q=80',
  },
  {
    slug: 'airport-transfers',
    eyebrow: 'To and From',
    title: 'Airport Transfers',
    desc: 'Coordinated transfer support for travelers moving to and from the airport.',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80',
  },
  {
    slug: 'destination-alerts',
    eyebrow: 'Global',
    title: 'Destination Alerts',
    desc: 'Helpful travel updates and destination alerts to keep clients informed.',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80',
  },
  {
    slug: 'emergency-support',
    eyebrow: 'Emergency Services',
    title: '24 Hour Support',
    desc: 'Responsive travel support for urgent travel situations and client assistance needs.',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80',
  },
  {
    slug: 'consultancy',
    eyebrow: 'Intensive & Proactive',
    title: 'Travel Consultancy',
    desc: 'Professional travel guidance for organizations with complex or recurring travel requirements.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
  },
  {
    slug: 'car-hire',
    eyebrow: 'Get Any Place Easily',
    title: 'Car Hire Services',
    desc: 'Car hire support for local movement, airport transfers, and client travel convenience.',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80',
  },
]

export const destinations = [
  {
    slug: 'mogadishu',
    title: 'Mogadishu',
    country: 'Somalia',
    desc: 'A key travel point supported by Kamil Travel\u2019s airport presence and meet & assist services.',
    image: 'https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=800&q=80',
    status: 'confirmed-context',
  },
  {
    slug: 'hargeisa',
    title: 'Hargeisa',
    country: 'Somalia',
    desc: 'One of the local airport locations where Kamil Travel has representatives.',
    image: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=800&q=80',
    status: 'confirmed-context',
  },
  {
    slug: 'garowe',
    title: 'Garowe',
    country: 'Somalia',
    desc: 'Listed among the Somalia airport locations supported by Kamil Travel representatives.',
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&q=80',
    status: 'confirmed-context',
  },
  {
    slug: 'bosaso',
    title: 'Bosaso',
    country: 'Somalia',
    desc: 'A regional travel point included in Kamil Travel\u2019s Somalia airport support network.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
    status: 'confirmed-context',
  },
  {
    slug: 'galkayo',
    title: 'Galkayo',
    country: 'Somalia',
    desc: 'A Somalia airport location named in Kamil Travel\u2019s representative network.',
    image: 'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?w=800&q=80',
    status: 'confirmed-context',
  },
  {
    slug: 'kismayu',
    title: 'Kismayu',
    country: 'Somalia',
    desc: 'A regional destination supported within Kamil Travel\u2019s Somalia travel context.',
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80',
    status: 'confirmed-context',
  },
  {
    slug: 'baidoa',
    title: 'Baidoa',
    country: 'Somalia',
    desc: 'A local Somalia airport location listed among Kamil Travel\u2019s representative presence.',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&q=80',
    status: 'confirmed-context',
  },
  {
    slug: 'global-destinations',
    title: 'Global Destinations',
    country: 'International',
    desc: '[CLIENT TO PROVIDE: confirmed global destinations and packages]',
    image: 'https://images.unsplash.com/photo-1488085061387-422e29b40080?w=800&q=80',
    status: 'client-to-confirm',
  },
]

export const testimonials = [
  {
    title: 'Great Trip!',
    quote:
      'This trip was easily the trip of a lifetime for our family of four, and it will be quite some time before we stop talking about it!',
    name: 'Xassan Abdi',
    route: 'Travelled to Mogadishu',
  },
  {
    title: 'Memorable Experience',
    quote:
      'Few things command more respect than hard work, integrity, dedication and the ability to follow through. These are among the many qualities we experienced with Kamil Travel.',
    name: 'Abdulghani Ibrahim',
    route: 'Travelled to Hargeisa',
  },
  {
    title: 'Simply Awesome',
    quote:
      'My wife, daughter and myself cannot say enough about how wonderful a trip we had, how great this travel company — in particular our travel agent — made everything for us.',
    name: 'Ann Kirui',
    route: 'Travelled to Nairobi',
  },
  {
    title: 'Best Cruise ever!',
    quote:
      "We're sorry that we can only give this travel agency 5 stars — we'd have preferred 10 stars or more! What an awesome trip!",
    name: 'Samson',
    route: 'Travelled to Somalia',
  },
  {
    title: 'Just Awesome!',
    quote:
      "I've traveled A LOT in my life, but this was the best trip I've ever taken and it had everything to do with using this travel company and this agent.",
    name: 'Ali Salim',
    route: 'Travelled to Mogadishu',
  },
]

export const tourCategories = [
  'All',
  'Somalia Domestic',
  'Kenya & Regional',
  'Corporate & Group',
  'International',
] as const

export type TourCategory = (typeof tourCategories)[number]

export const tours = [
  {
    slug: 'mogadishu-travel-package',
    title: 'Mogadishu Travel Package',
    destination: 'Mogadishu',
    country: 'Somalia',
    category: 'Somalia Domestic' as TourCategory,
    duration: 'Flexible',
    desc: 'End-to-end support for travel to Mogadishu — flights, meet & assist at the airport, transfers, and coordinated local movement.',
    image: 'https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=800&q=80',
    highlights: ['Meet & assist', 'Airport transfers', 'Group coordination'],
    featured: true,
  },
  {
    slug: 'hargeisa-regional-travel',
    title: 'Hargeisa Regional Travel',
    destination: 'Hargeisa',
    country: 'Somalia',
    category: 'Somalia Domestic' as TourCategory,
    duration: 'Flexible',
    desc: 'Flight booking and travel coordination for Hargeisa with representative support at the airport.',
    image: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=800&q=80',
    highlights: ['Air ticketing', 'Local representative', 'Transfer support'],
    featured: true,
  },
  {
    slug: 'nairobi-corporate-travel',
    title: 'Nairobi Corporate Travel',
    destination: 'Nairobi',
    country: 'Kenya',
    category: 'Kenya & Regional' as TourCategory,
    duration: 'Flexible',
    desc: 'Corporate travel management for Nairobi — flights, insurance, transfers, and proactive itinerary support.',
    image: 'https://images.unsplash.com/photo-1547471080-7fc2caa6f571?w=800&q=80',
    highlights: ['Corporate itineraries', '24h support', 'Travel insurance'],
    featured: true,
  },
  {
    slug: 'somalia-multi-city',
    title: 'Somalia Multi-City Route',
    destination: 'Multiple cities',
    country: 'Somalia',
    category: 'Somalia Domestic' as TourCategory,
    duration: 'Custom',
    desc: 'Coordinated travel across Mogadishu, Hargeisa, Garowe, Bosaso, Galkayo, Kismayu, and Baidoa with airport representatives.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
    highlights: ['6 airport network', 'Domestic connections', 'Group travel'],
    featured: false,
  },
  {
    slug: 'group-travel-somalia',
    title: 'Group Travel within Somalia',
    destination: 'Somalia',
    country: 'Somalia',
    category: 'Corporate & Group' as TourCategory,
    duration: 'Custom',
    desc: 'Specialized group travel arrangements within Somalia, coordinated from Kamil Travel\u2019s Mogadishu airport office.',
    image: 'https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=800&q=80',
    highlights: ['Group bookings', 'Mogadishu airport office', 'Meet & assist'],
    featured: false,
  },
  {
    slug: 'international-flight-package',
    title: 'International Flight Package',
    destination: 'Global',
    country: 'International',
    category: 'International' as TourCategory,
    duration: 'Flexible',
    desc: 'Outbound and inbound international ticketing with competitive fares through Kamil Travel\u2019s airline partnerships.',
    image: 'https://images.unsplash.com/photo-1488085061387-422e29b40080?w=800&q=80',
    highlights: ['Major airlines', 'Competitive fares', 'Full documentation'],
    featured: false,
  },
]

export function getTourBySlug(slug: string) {
  return tours.find((t) => t.slug === slug)
}

export const footerDestinationLinks = [
  { label: 'Mogadishu', href: '/destinations' },
  { label: 'Hargeisa', href: '/destinations' },
  { label: 'Garowe', href: '/destinations' },
  { label: 'Bosaso', href: '/destinations' },
  { label: 'All Destinations', href: '/destinations' },
]

export const becomeAGuide = {
  title: 'Become Our Guide',
  desc: 'Kamil Travel works with local guides and transport partners across Kenya and Somalia. Share your experience and availability — our team will review your application.',
  cta: 'Apply as a Guide',
}

export const newsletter = {
  title: 'Love Travel?',
  subtitle:
    'Get travel inspiration, regional updates, and exclusive offers delivered to your inbox. We respond to all genuine enquiries within 24 hours.',
  disclaimer: 'We do not share your information with third parties.',
}

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Corporate Travel', href: '/corporate-travel' },
  { label: 'Services', href: '/services' },
  { label: 'Destinations', href: '/destinations' },
  { label: 'Visa Assistance', href: '/visa-assistance' },
  { label: 'Car Rental / Transfers', href: '/car-rental-airport-transfers' },
  { label: 'Tours', href: '/tours' },
  { label: 'Contact', href: '/contact' },
]
