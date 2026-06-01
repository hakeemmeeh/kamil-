'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  cleanupSiteScroll,
  heroIntroHome3,
  initHeroCoverScroll,
  initPageBannerStickyCovers,
  initPopularDestinationsScroll,
  initSiteScrollAnimations,
  initTravelTipsStickyScroll,
  whenLenisReady,
} from '@/lib/animations'

/** Sitewide Lenis + GSAP sticky-cover scroll (Kanila Home 3 rhythm) */
export function SiteScrollEffects() {
  const pathname = usePathname()

  useEffect(() => {
    let cancelled = false

    const setup = () => {
      if (cancelled) return
      requestAnimationFrame(() => {
        if (cancelled) return

        initSiteScrollAnimations()
        initPageBannerStickyCovers()

        if (document.querySelector('#hero')) {
          if (pathname === '/') heroIntroHome3()
          initHeroCoverScroll()
        }
        if (document.querySelector('#popular-destinations')) {
          initPopularDestinationsScroll()
        }
        if (document.querySelector('#travel-tips')) {
          initTravelTipsStickyScroll()
        }
        ScrollTrigger.refresh()
      })
    }

    const cancelLenis = whenLenisReady(setup)

    return () => {
      cancelled = true
      cancelLenis()
      cleanupSiteScroll()
    }
  }, [pathname])

  return null
}
