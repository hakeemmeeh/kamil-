'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { cleanupSiteScroll, initSiteScrollAnimations, whenLenisReady } from '@/lib/animations'

/** Light site scroll — no sticky scenic covers */
export function SiteScrollEffects() {
  const pathname = usePathname()

  useEffect(() => {
    let cancelled = false

    const setup = () => {
      if (cancelled) return
      requestAnimationFrame(() => {
        if (cancelled) return
        initSiteScrollAnimations()
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
