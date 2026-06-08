import { destinations } from '@/lib/content'
import { heroArchSlugs } from '@/lib/cityImages'

export type HeroCarouselSlide = {
  slug: string
  title: string
  subtitle: string
  image: string
  imageAlt: string
  href: string
}

/** Single source of truth — arch cards and full-bleed background use the same slides */
export function getHeroCarouselSlides(): HeroCarouselSlide[] {
  const destBySlug = new Map(destinations.map((d) => [d.slug, d]))

  return heroArchSlugs
    .map((slug) => destBySlug.get(slug))
    .filter((d): d is NonNullable<typeof d> => !!d && d.status !== 'client-to-confirm')
    .map((d) => ({
      slug: d.slug,
      title: d.title,
      subtitle: d.country,
      image: d.image,
      imageAlt: `${d.title}, ${d.country}`,
      href: `/destinations#${d.slug}`,
    }))
}

export const HERO_CAROUSEL_INTERVAL_MS = 4500
export const HERO_BG_FADE_MS = 1400
