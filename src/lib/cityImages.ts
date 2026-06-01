/**
 * City-specific imagery (Unsplash — leisure destinations + Somalia & Kenya).
 * Central source for hero, destinations, and tour package photos.
 */

const photos = {
  mogadishu:
    'photo-1660519167902-42fa6857567c', // Liido beach — Mogadishu coast
  mogadishuCoast:
    'photo-1660519167902-42fa6857567c', // Liido beach with boats
  hargeisa:
    'photo-1730714222751-eb1bbdea6f83', // Sunset over city and hills — Hargeisa
  garowe:
    'photo-1775634937590-7d27a59e313e', // Cityscape — Puntland / Garowe region
  bosaso:
    'photo-1763454282607-5a44ffbddd5d', // Harbour — ships and waterfront
  galkayo:
    'photo-1660519258909-8dcc0dcb83d5', // Coastal town — central Somalia
  kismayo:
    'photo-1774869597727-16fcb9a84b4f', // Fishing boats on shore — Kismayo coast
  baidoa:
    'photo-1660519258909-8dcc0dcb83d5', // Coastal landscape — southern Somalia region
  nairobi:
    'photo-1488085061387-422e29b40080', // Urban travel — Nairobi / East Africa context
  somaliaNetwork:
    'photo-1723151684036-d014403c33b2', // City skyline at sunset — Somalia
  international:
    'photo-1775309310157-2721accecb28', // Aircraft at airport gate
  groupTravel:
    'photo-1660519258909-8dcc0dcb83d5', // Busy coastal hub — group travel context
  oslo:
    'photo-1513622470522-26c3c8a854bc', // Oslo — Scandinavian fjord & city
  newYork:
    'photo-1496442226666-8d4d0e62e6e9', // New York City skyline
  london:
    'photo-1513635269975-59663e0ac1ad', // London — Thames & cityscape
  tokyo:
    'photo-1528164344705-47542687000d', // Tokyo — urban skyline
  sydney:
    'photo-1469474968028-56623f02e42e', // Scenic harbour — Asia-Pacific travel
  santorini:
    'photo-1570077188670-e3a8d69ac5ff', // Oia caldera — blue domes & whitewash
  santoriniSunset:
    'photo-1720630941688-2cf38a01e433', // Santorini — whitewash & windmill at dusk
  greece:
    'photo-1533105079780-92b9be482077', // Santorini — caldera village & Aegean (Greece)
  bali:
    'photo-1555400038-63f5ba517a47', // Bali — rice terraces & lush green
  thailand:
    'photo-1552733407-5d5c46c3bb3b', // Thailand — tropical beach & palms
  thailandTemple:
    'photo-1506929562872-bb421503ef21', // Thailand — temple & culture
  seychelles:
    'photo-1432405972618-c60b0225b8f9', // Seychelles — turquoise lagoon
  kanilaHero:
    'photo-1514565131-fce0801e5785', // Epic city skyline at dusk — Kanila-style hero
  kanilaHeroAlt:
    'photo-1544551763-46a013bb70d5', // Coastal sunset — aerial sea overview
  kanilaPopular:
    'photo-1570077188670-e3a8d69ac5ff', // Santorini caldera — Popular Destinations sticky bg
  kanilaHeroCity:
    'photo-1496442226666-8d4d0e62e6e9', // New York City skyline — alternate hero
  kanilaKayak:
    'photo-1540959733332-eab4deabeeaf', // Kayaks on emerald water
  vacationBeach:
    'photo-1507525428034-b5c55cefb08b', // Tropical beach — leisure escape
  vacationResort:
    'photo-1571896349842-33c89424de2d', // Pool / resort leisure
  bannerContact:
    'photo-1529074963764-98f45c47344b',
  bannerCorporate:
    'photo-1497366216548-37526070297c',
  bannerServices:
    'photo-1556388158-158ea5ccacbd',
  bannerCarRental:
    'photo-1544620347-c4fd4a3d5957',
  bannerVisa:
    'photo-1569154941061-e231b4725ef1',
  bannerCta:
    'photo-1507812984078-917a274065be',
  desertDunes:
    'photo-1512453979798-5ea266f8880c', // Golden sand dunes — desert landscape
  footerScenic:
    'photo-1472214103451-9374bd1c798e', // Warm horizon — footer alternate
} as const

export type CityImageKey = keyof typeof photos

export type CityImageWidth = 800 | 1400 | 1920

export function cityImage(key: CityImageKey, width: CityImageWidth = 800): string {
  const q = width >= 1400 ? 90 : 85
  return `https://images.unsplash.com/${photos[key]}?w=${width}&q=${q}&auto=format&fit=crop`
}

export const cityImageAlts: Record<CityImageKey, string> = {
  mogadishu: 'Mogadishu — mosque and city neighbourhood',
  mogadishuCoast: 'Mogadishu — Liido beach and boats',
  hargeisa: 'Hargeisa — sunset over the city and hills',
  garowe: 'Garowe — Puntland cityscape',
  bosaso: 'Bosaso — port and Gulf of Aden waterfront',
  galkayo: 'Galkayo — coastal Somalia',
  kismayo: 'Kismayo — fishing harbour and shoreline',
  baidoa: 'Baidoa — southern Somalia landscape',
  nairobi: 'Nairobi — Kenya skyline',
  somaliaNetwork: 'Somalia — city skyline at dusk',
  international: 'International routes — aircraft at airport',
  groupTravel: 'Somalia — coastal travel hub',
  oslo: 'Oslo — Scandinavian fjord and city',
  newYork: 'New York City — skyline and urban travel',
  london: 'London — Thames and cityscape',
  tokyo: 'Tokyo — Japan urban skyline',
  sydney: 'Sydney — harbour and coastal travel',
  santorini: 'Santorini — Oia caldera with blue domes',
  santoriniSunset: 'Santorini — whitewash and windmill at dusk',
  greece: 'Greece — Santorini caldera village and Aegean Sea',
  bali: 'Bali — emerald rice terraces',
  thailand: 'Thailand — tropical beach and palms',
  thailandTemple: 'Thailand — golden temple architecture',
  seychelles: 'Seychelles — turquoise Indian Ocean lagoon',
  kanilaHero: 'Epic city skyline at dusk — luxury travel hero',
  kanilaHeroAlt: 'Coastal sunset over the ocean',
  kanilaPopular: 'Santorini caldera — Popular Destinations backdrop',
  kanilaHeroCity: 'New York City skyline at twilight',
  kanilaKayak: 'Kayaks on calm emerald water — adventure travel',
  vacationBeach: 'Tropical beach — vacation escape',
  vacationResort: 'Resort pool and palm trees — luxury leisure',
  bannerContact: 'Contact and travel planning',
  bannerCorporate: 'Corporate office and business travel',
  bannerServices: 'Airport and travel services',
  bannerCarRental: 'Car rental and airport transfer',
  bannerVisa: 'Visa assistance and documentation',
  bannerCta: 'Travel destination aerial view',
  desertDunes: 'Golden sand dunes in the desert',
  footerScenic: 'Warm sunset horizon over open landscape',
}


/** Full-bleed hero background rotation — leisure + core markets */
export const heroBackgroundSlides: CityImageKey[] = [
  'santorini',
  'santoriniSunset',
  'bali',
  'thailand',
  'seychelles',
  'greece',
  'kanilaHero',
  'mogadishu',
  'nairobi',
]

/** Hero arch carousel — curated destination slugs (homepage) */
export const heroArchSlugs = [
  'santorini',
  'bali',
  'thailand',
  'seychelles',
  'greece',
  'new-york',
  'sydney',
  'mogadishu',
  'nairobi',
  'oslo',
  'london',
  'tokyo',
] as const

/** Hero carousel copy — one slide per key market city */
export const heroSlides = [
  {
    imageKey: 'santorini' as const,
    destination: 'Santorini',
    subtitle: 'Greece · Aegean Escape',
    tagline: 'Whitewashed cliffs and endless blue',
  },
  {
    imageKey: 'bali' as const,
    destination: 'Bali',
    subtitle: 'Indonesia · Island Paradise',
    tagline: 'Terraces, temples, and tropical calm',
  },
  {
    imageKey: 'thailand' as const,
    destination: 'Thailand',
    subtitle: 'Southeast Asia · Beach & Culture',
    tagline: 'Golden shores and vibrant cities',
  },
  {
    imageKey: 'seychelles' as const,
    destination: 'Seychelles',
    subtitle: 'Indian Ocean · Luxury Isles',
    tagline: 'Crystal waters and granite shores',
  },
  {
    imageKey: 'mogadishu' as const,
    destination: 'Mogadishu',
    subtitle: 'Somalia · Coastal Hub',
    tagline: 'Where the city meets the ocean',
  },
  {
    imageKey: 'nairobi' as const,
    destination: 'Nairobi',
    subtitle: 'Kenya · Corporate Travel',
    tagline: 'The heartbeat of East Africa',
  },
]
