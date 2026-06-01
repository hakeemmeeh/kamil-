// src/lib/content.ts

import { cityImage } from './cityImages'

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
  eyebrow: 'Global Travel · Corporate · Airport Services',
  headline: 'Your World, Your Way — Premium Travel Management',
  subtext:
    'From Santorini and Bali to Thailand, the Seychelles, Nairobi, and beyond — Kamil Travel delivers customized booking, airport support, and end-to-end journey management worldwide.',
}

export const travelRegions = [
  {
    slug: 'africa',
    name: 'Africa',
    image: 'nairobi' as const,
    desc: 'East Africa headquarters in Nairobi with deep regional expertise and Somalia airport support.',
    places: [
      { name: 'Nairobi', href: '/tours/nairobi-corporate-travel' },
      { name: 'Mogadishu', href: '/destinations#mogadishu' },
      { name: 'Hargeisa', href: '/destinations#hargeisa' },
      { name: 'Garowe', href: '/destinations#garowe' },
      { name: 'Bosaso', href: '/destinations#bosaso' },
      { name: 'Galkayo', href: '/destinations#galkayo' },
    ],
  },
  {
    slug: 'europe',
    name: 'Europe',
    image: 'santorini' as const,
    desc: 'City breaks, island escapes, and curated holidays from the Aegean to the Arctic.',
    places: [
      { name: 'Santorini', href: '/destinations#santorini' },
      { name: 'Greece', href: '/destinations#greece' },
      { name: 'Oslo', href: '/tours/oslo-weekend' },
      { name: 'London', href: '/tours/international-flight-package' },
    ],
  },
  {
    slug: 'americas',
    name: 'Americas',
    image: 'newYork' as const,
    desc: 'Big-city adventures and business travel across North and South America.',
    places: [
      { name: 'New York', href: '/tours/new-york-adventure' },
      { name: 'Global routes', href: '/tours/international-flight-package' },
    ],
  },
  {
    slug: 'asia-pacific',
    name: 'Asia-Pacific',
    image: 'bali' as const,
    desc: 'Long-haul leisure and corporate travel across Southeast Asia and Oceania.',
    places: [
      { name: 'Bali', href: '/destinations#bali' },
      { name: 'Thailand', href: '/destinations#thailand' },
      { name: 'Tokyo', href: '/tours/international-flight-package' },
      { name: 'Sydney', href: '/tours/sydney-faraway' },
    ],
  },
  {
    slug: 'indian-ocean',
    name: 'Indian Ocean',
    image: 'seychelles' as const,
    desc: 'Luxury island escapes with turquoise waters, granite shores, and boutique resorts.',
    places: [
      { name: 'Seychelles', href: '/destinations#seychelles' },
      { name: 'Mauritius', href: '/tours/international-flight-package' },
      { name: 'Maldives', href: '/tours/international-flight-package' },
    ],
  },
]

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
    image: cityImage('mogadishu'),
    status: 'confirmed-context',
  },
  {
    slug: 'hargeisa',
    title: 'Hargeisa',
    country: 'Somalia',
    desc: 'One of the local airport locations where Kamil Travel has representatives.',
    image: cityImage('hargeisa'),
    status: 'confirmed-context',
  },
  {
    slug: 'garowe',
    title: 'Garowe',
    country: 'Somalia',
    desc: 'Listed among the Somalia airport locations supported by Kamil Travel representatives.',
    image: cityImage('garowe'),
    status: 'confirmed-context',
  },
  {
    slug: 'bosaso',
    title: 'Bosaso',
    country: 'Somalia',
    desc: 'A regional travel point included in Kamil Travel\u2019s Somalia airport support network.',
    image: cityImage('bosaso'),
    status: 'confirmed-context',
  },
  {
    slug: 'galkayo',
    title: 'Galkayo',
    country: 'Somalia',
    desc: 'A Somalia airport location named in Kamil Travel\u2019s representative network.',
    image: cityImage('galkayo'),
    status: 'confirmed-context',
  },
  {
    slug: 'kismayu',
    title: 'Kismayu',
    country: 'Somalia',
    desc: 'A regional destination supported within Kamil Travel\u2019s Somalia travel context.',
    image: cityImage('kismayo'),
    status: 'confirmed-context',
  },
  {
    slug: 'baidoa',
    title: 'Baidoa',
    country: 'Somalia',
    desc: 'A local Somalia airport location listed among Kamil Travel\u2019s representative presence.',
    image: cityImage('baidoa'),
    status: 'confirmed-context',
  },
  {
    slug: 'global-destinations',
    title: 'Global Destinations',
    country: 'Worldwide',
    desc: 'International ticketing and travel management to cities across Europe, the Americas, Asia-Pacific, and beyond.',
    image: cityImage('international'),
    status: 'confirmed-context',
  },
  {
    slug: 'santorini',
    title: 'Santorini',
    country: 'Greece',
    desc: 'Iconic caldera views, whitewashed villages, and sunset cruises across the Aegean.',
    image: cityImage('santorini'),
    status: 'confirmed-context',
  },
  {
    slug: 'greece',
    title: 'Greece',
    country: 'Greece',
    desc: 'Island-hopping, ancient heritage, and Mediterranean leisure from Athens to the Cyclades.',
    image: cityImage('greece'),
    status: 'confirmed-context',
  },
  {
    slug: 'bali',
    title: 'Bali',
    country: 'Indonesia',
    desc: 'Rice terraces, temple culture, and boutique beach resorts across the Island of the Gods.',
    image: cityImage('bali'),
    status: 'confirmed-context',
  },
  {
    slug: 'thailand',
    title: 'Thailand',
    country: 'Thailand',
    desc: 'Golden temples, tropical beaches, and vibrant cities from Bangkok to the Andaman coast.',
    image: cityImage('thailand'),
    status: 'confirmed-context',
  },
  {
    slug: 'seychelles',
    title: 'Seychelles',
    country: 'Seychelles',
    desc: 'Granite boulders, turquoise lagoons, and exclusive Indian Ocean island escapes.',
    image: cityImage('seychelles'),
    status: 'confirmed-context',
  },
  {
    slug: 'oslo',
    title: 'Oslo',
    country: 'Norway',
    desc: 'The Scandinavian experience — city, waterfront, and curated weekend escapes.',
    image: cityImage('oslo'),
    status: 'confirmed-context',
  },
  {
    slug: 'new-york',
    title: 'New York',
    country: 'USA',
    desc: 'Big-city adventure tours and corporate travel to the Empire State.',
    image: cityImage('newYork'),
    status: 'confirmed-context',
  },
  {
    slug: 'sydney',
    title: 'Sydney',
    country: 'Australia',
    desc: 'Faraway Sydney — harbour, opera house, and long-haul leisure travel.',
    image: cityImage('sydney'),
    status: 'confirmed-context',
  },
  {
    slug: 'london',
    title: 'London',
    country: 'United Kingdom',
    desc: 'One of the world\u2019s great travel hubs for business and leisure.',
    image: cityImage('london'),
    status: 'confirmed-context',
  },
  {
    slug: 'tokyo',
    title: 'Tokyo',
    country: 'Japan',
    desc: 'Asia-Pacific gateway for corporate and leisure itineraries.',
    image: cityImage('tokyo'),
    status: 'confirmed-context',
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
    slug: 'santorini-escape',
    title: 'Santorini Escape',
    destination: 'Santorini',
    country: 'Greece',
    category: 'International' as TourCategory,
    duration: '5 Days',
    desc: 'Caldera sunsets, whitewashed Oia, and Aegean sailing — a classic Mediterranean getaway arranged by Kamil Travel.',
    image: cityImage('santorini'),
    highlights: ['Caldera views', 'Sunset cruises', 'Boutique hotels'],
    featured: true,
  },
  {
    slug: 'bali-retreat',
    title: 'Bali Island Retreat',
    destination: 'Bali',
    country: 'Indonesia',
    category: 'International' as TourCategory,
    duration: '7 Days',
    desc: 'Ubud terraces, temple visits, and beachfront relaxation across Bali\u2019s cultural heart and southern coast.',
    image: cityImage('bali'),
    highlights: ['Rice terraces', 'Temple culture', 'Beach resorts'],
    featured: true,
  },
  {
    slug: 'thailand-discovery',
    title: 'Thailand Discovery',
    destination: 'Thailand',
    country: 'Thailand',
    category: 'International' as TourCategory,
    duration: '6 Days',
    desc: 'Bangkok temples, Andaman beaches, and curated island hops — Southeast Asia at its most vibrant.',
    image: cityImage('thailand'),
    highlights: ['Temple tours', 'Tropical beaches', 'Island hopping'],
    featured: true,
  },
  {
    slug: 'seychelles-luxury',
    title: 'Seychelles Luxury Isles',
    destination: 'Seychelles',
    country: 'Seychelles',
    category: 'International' as TourCategory,
    duration: '8 Days',
    desc: 'Private island resorts, granite coves, and crystal-clear lagoons in the Indian Ocean\u2019s most exclusive archipelago.',
    image: cityImage('seychelles'),
    highlights: ['Luxury resorts', 'Snorkelling', 'Island transfers'],
    featured: true,
  },
  {
    slug: 'oslo-weekend',
    title: 'Weekend in Oslo',
    destination: 'Oslo',
    country: 'Norway',
    category: 'International' as TourCategory,
    duration: '3 Days',
    desc: 'No trip to Norway would be complete without exploring the streets and waterfront — the Scandinavian experience, curated by Kamil Travel.',
    image: cityImage('oslo'),
    highlights: ['Weekend escape', 'Waterfront & city', 'First minute offers'],
    featured: true,
  },
  {
    slug: 'new-york-adventure',
    title: 'Tour of New York',
    destination: 'New York',
    country: 'USA',
    category: 'International' as TourCategory,
    duration: '5 Days',
    desc: 'Big city adventure across the Empire State — iconic sights, culture, and curated urban exploration beyond the five boroughs.',
    image: cityImage('newYork'),
    highlights: ['City adventure', 'Curated itinerary', 'Group & solo'],
    featured: true,
  },
  {
    slug: 'sydney-faraway',
    title: 'Faraway Sydney',
    destination: 'Sydney',
    country: 'Australia',
    category: 'International' as TourCategory,
    duration: '10 Days',
    desc: 'Home of the Opera House — one of the world\u2019s most beautiful cities, arranged as a long-haul leisure journey.',
    image: cityImage('sydney'),
    highlights: ['Long-haul leisure', 'Harbour & coast', 'Family holidays'],
    featured: true,
  },
  {
    slug: 'mogadishu-travel-package',
    title: 'Mogadishu Travel Package',
    destination: 'Mogadishu',
    country: 'Somalia',
    category: 'Somalia Domestic' as TourCategory,
    duration: 'Flexible',
    desc: 'End-to-end support for travel to Mogadishu — flights, meet & assist at the airport, transfers, and coordinated local movement.',
    image: cityImage('mogadishu'),
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
    image: cityImage('hargeisa'),
    highlights: ['Air ticketing', 'Local representative', 'Transfer support'],
    featured: false,
  },
  {
    slug: 'nairobi-corporate-travel',
    title: 'Nairobi Corporate Travel',
    destination: 'Nairobi',
    country: 'Kenya',
    category: 'Kenya & Regional' as TourCategory,
    duration: 'Flexible',
    desc: 'Corporate travel management for Nairobi — flights, insurance, transfers, and proactive itinerary support.',
    image: cityImage('nairobi'),
    highlights: ['Corporate itineraries', '24h support', 'Travel insurance'],
    featured: false,
  },
  {
    slug: 'somalia-multi-city',
    title: 'Somalia Multi-City Route',
    destination: 'Multiple cities',
    country: 'Somalia',
    category: 'Somalia Domestic' as TourCategory,
    duration: 'Custom',
    desc: 'Coordinated travel across Mogadishu, Hargeisa, Garowe, Bosaso, Galkayo, Kismayu, and Baidoa with airport representatives.',
    image: cityImage('somaliaNetwork'),
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
    image: cityImage('mogadishuCoast'),
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
    image: cityImage('international'),
    highlights: ['Major airlines', 'Competitive fares', 'Full documentation'],
    featured: false,
  },
]

export function getTourBySlug(slug: string) {
  return tours.find((t) => t.slug === slug)
}

export const footerDestinationLinks = [
  { label: 'Santorini', href: '/destinations#santorini' },
  { label: 'Bali', href: '/destinations#bali' },
  { label: 'Thailand', href: '/destinations#thailand' },
  { label: 'Seychelles', href: '/destinations#seychelles' },
  { label: 'Mogadishu', href: '/destinations#mogadishu' },
  { label: 'Nairobi', href: '/tours/nairobi-corporate-travel' },
  { label: 'All Destinations', href: '/destinations' },
]

export const footerGlobalCityLinks = [
  { label: 'London', href: '/tours/international-flight-package' },
  { label: 'Tokyo', href: '/tours/international-flight-package' },
  { label: 'Moscow', href: '/tours/international-flight-package' },
  { label: 'Belgrade', href: '/tours/international-flight-package' },
]

export const becomeAGuide = {
  title: 'Become Our Guide',
  desc: 'Kamil Travel works with local guides and transport partners worldwide. Share your experience and availability — our team will review your application.',
  cta: 'Apply as a Guide',
}

export const newsletter = {
  title: 'Love Travel?',
  subtitle:
    'Get travel inspiration, regional updates, and exclusive offers delivered to your inbox. We respond to all genuine enquiries within 24 hours.',
  disclaimer: 'We do not share your information with third parties.',
}

export const processSteps = [
  {
    step: '01',
    title: 'Share Your Brief',
    desc: 'Tell us your route, dates, and travel requirements — corporate, group, or individual.',
  },
  {
    step: '02',
    title: 'We Plan & Book',
    desc: 'Flights, transfers, documentation, and coordinated logistics worldwide — with regional depth in East Africa.',
  },
  {
    step: '03',
    title: 'Airport Meet & Assist',
    desc: 'Meet & assist at Mogadishu and representative support across key Somalia airports, plus global coordination.',
  },
  {
    step: '04',
    title: 'Travel With Support',
    desc: 'On-trip coordination, changes, and responsive assistance when plans shift.',
  },
  {
    step: '05',
    title: 'Return & Follow-Up',
    desc: 'Departure support and post-travel follow-up for your next journey.',
  },
]

export const travelStories = [
  {
    slug: 'santorini-aegean-escape',
    category: 'International',
    title: 'Santorini — sunsets over the caldera',
    excerpt:
      'Whitewashed cliffs, blue-domed chapels, and sailing the Aegean — how we craft Mediterranean escapes.',
    image: cityImage('santorini'),
    href: '/tours/santorini-escape',
  },
  {
    slug: 'bali-island-retreat',
    category: 'International',
    title: 'Bali — terraces, temples, and tropical calm',
    excerpt:
      'From Ubud rice fields to southern beaches — curated Indonesia itineraries for leisure travellers.',
    image: cityImage('bali'),
    href: '/tours/bali-retreat',
  },
  {
    slug: 'oslo-scandinavian-weekend',
    category: 'International',
    title: 'Weekend in Oslo — the Scandinavian experience',
    excerpt:
      'City streets, waterfront walks, and curated short breaks — how Kamil Travel arranges European getaways.',
    image: cityImage('oslo'),
    href: '/tours/oslo-weekend',
  },
  {
    slug: 'corporate-travel-global',
    category: 'Corporate Travel',
    title: 'Managing corporate travel from Nairobi to the world',
    excerpt:
      'Air ticketing, insurance, transfers, and 24-hour support for organizations with global travel needs.',
    image: cityImage('nairobi'),
    href: '/corporate-travel',
  },
  {
    slug: 'mogadishu-airport-support',
    category: 'Airport Experience',
    title: 'Meet & assist at Mogadishu — what to expect on arrival',
    excerpt:
      'Regional airport presence and representative support across six Somalia locations — alongside worldwide booking.',
    image: cityImage('mogadishu'),
    href: '/car-rental-airport-transfers',
  },
]

/** Kanila-style — homepage “Things to know before travelling” */
export const travelTipsBefore = [
  {
    title: 'Visa & entry requirements',
    desc: 'Confirm passport validity, visa rules, and transit requirements for every country on your itinerary.',
    href: '/visa-assistance',
  },
  {
    title: 'Travel documents',
    desc: 'Keep tickets, insurance, corporate letters, and ID accessible in print and digital copies.',
    href: '/visa-assistance',
  },
  {
    title: 'Airport meet & assist',
    desc: 'Book arrival and departure support — especially at Mogadishu and regional Somalia airports.',
    href: '/services#airport-experience',
  },
  {
    title: 'Insurance & health',
    desc: 'Arrange travel cover and check health advisories before international departures.',
    href: '/services',
  },
  {
    title: 'Baggage & connections',
    desc: 'Allow connection time on multi-sector tickets; confirm baggage allowances with your airline.',
    href: '/contact',
  },
  {
    title: '24-hour support',
    desc: 'Save Kamil contact details for changes, delays, or emergency travel assistance.',
    href: '/contact',
  },
]

export const homeFaqs = [
  {
    q: 'How do I book a tour or flight with Kamil Travel?',
    a: 'We work on an inquiry basis — share your dates, route, and group size via our contact form or email. Our team responds with options and a tailored quote; there is no instant online checkout.',
  },
  {
    q: 'Do you offer corporate travel management?',
    a: 'Yes. We provide customized booking, group coordination, emergency support, and account-style service for organizations in Kenya, Somalia, and on global routes.',
  },
  {
    q: 'What airport support do you provide in Somalia?',
    a: 'We operate a branch at Mogadishu airport for meet & assist, plus representatives at Hargeisa, Garowe, Bosaso, Galkayo, Kismayu, and Baidoa.',
  },
  {
    q: 'Can you help with visa preparation?',
    a: 'We offer guidance and checklists for travel preparation. We do not guarantee visa approval or provide legal immigration advice.',
  },
  {
    q: 'Which destinations do you cover?',
    a: 'From Nairobi we coordinate travel across East Africa, Europe, the Americas, and Asia-Pacific — including corporate hubs such as Oslo, London, New York, and Sydney.',
  },
  {
    q: 'Is car hire and airport transfer available?',
    a: 'Yes — airport pickup, drop-off, corporate movement, and car hire can be arranged through our transfers page or by inquiry.',
  },
]

export const trustPartners = [
  'Global Airline Partners',
  'Nairobi Headquarters',
  'Mogadishu Airport Office',
  'Corporate & Leisure Clients',
  '24-Hour Emergency Support',
]

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
