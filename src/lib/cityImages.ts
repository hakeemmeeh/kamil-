/**
 * City-specific imagery (Unsplash — Somalia & Kenya destinations).
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
  kanilaHero:
    'photo-1514565131-fce0801e5785', // Epic city skyline at dusk — Kanila-style hero
  kanilaHeroAlt:
    'photo-1544551763-46a013bb70d5', // Coastal sunset — aerial sea overview
  kanilaPopular:
    'photo-1544551763-46a013bb70d5', // Coastal sunset at dusk — Kanila Popular sticky bg
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
  kanilaHero: 'Epic city skyline at dusk — luxury travel hero',
  kanilaHeroAlt: 'Coastal sunset over the ocean',
  kanilaPopular: 'Coastal landscape at dusk — Kanila Popular Destinations backdrop',
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
}


/** Hero carousel — one slide per key market city */
export const heroSlides = [
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
  {
    imageKey: 'hargeisa' as const,
    destination: 'Hargeisa',
    subtitle: 'Somaliland · Regional Gateway',
    tagline: 'Gateway to the north',
  },
  {
    imageKey: 'bosaso' as const,
    destination: 'Bosaso',
    subtitle: 'Somalia · Port City',
    tagline: 'Gulf of Aden trade and travel',
  },
]
