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

/** Diverse hero slides — cities, nature, activities, and tourists */
const HERO_SLIDE_DEFS: HeroSlideDef[] = [
  {
    slug: 'safari-adventure',
    title: 'Wild Encounters',
    subtitle: 'Kenya Safari',
    imageKey: 'heroSafari',
    href: '/tours',
  },
  {
    slug: 'tropical-escape',
    title: 'Island Retreats',
    subtitle: 'Indian Ocean',
    imageKey: 'heroBeachLeisure',
    href: '/destinations#seychelles',
  },
  {
    slug: 'cultural-exploration',
    title: 'Historic Wonders',
    subtitle: 'European Tours',
    imageKey: 'heroCulture',
    href: '/destinations#london',
  },
  {
    slug: 'active-leisure',
    title: 'Active Leisure',
    subtitle: 'Global Adventures',
    imageKey: 'heroAdventure',
    href: '/tours',
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
