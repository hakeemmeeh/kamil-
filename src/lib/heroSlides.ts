import { cityImage, cityImageAlts, type CityImageKey } from '@/lib/cityImages'

export type HeroCarouselSlide = {
  slug: string
  title: string
  subtitle: string
  image: string
  imageAlt: string
  href: string
}

type HeroSlideDef = {
  slug: string
  title: string
  subtitle: string
  imageKey: CityImageKey
  href: string
}

/** Dusk/night city skylines — separate from destination card photos */
const HERO_SLIDE_DEFS: HeroSlideDef[] = [
  {
    slug: 'new-york',
    title: 'New York',
    subtitle: 'USA',
    imageKey: 'heroNewYork',
    href: '/destinations#new-york',
  },
  {
    slug: 'dubai',
    title: 'Dubai',
    subtitle: 'United Arab Emirates',
    imageKey: 'heroDubai',
    href: '/destinations#global-destinations',
  },
  {
    slug: 'london',
    title: 'London',
    subtitle: 'United Kingdom',
    imageKey: 'heroLondon',
    href: '/destinations#london',
  },
  {
    slug: 'tokyo',
    title: 'Tokyo',
    subtitle: 'Japan',
    imageKey: 'heroTokyo',
    href: '/destinations#tokyo',
  },
  {
    slug: 'mogadishu',
    title: 'Mogadishu',
    subtitle: 'Somalia',
    imageKey: 'heroMogadishu',
    href: '/destinations#mogadishu',
  },
]

export function getHeroCarouselSlides(): HeroCarouselSlide[] {
  return HERO_SLIDE_DEFS.map((d) => ({
    slug: d.slug,
    title: d.title,
    subtitle: d.subtitle,
    image: cityImage(d.imageKey, 1400),
    imageAlt: cityImageAlts[d.imageKey],
    href: d.href,
  }))
}

export const HERO_CAROUSEL_INTERVAL_MS = 4500
export const HERO_BG_FADE_MS = 1400
