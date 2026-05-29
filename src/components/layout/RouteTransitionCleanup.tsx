'use client'

import { useEffect, useLayoutEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { cleanupHomePinnedSections } from '@/lib/animations'

function isInternalRoute(href: string) {
  return href.startsWith('/') && !href.startsWith('//') && !href.startsWith('/#')
}

/**
 * GSAP ScrollTrigger pin reparents DOM nodes and breaks React on route change.
 * Revert scroll animations before navigation (capture phase) and on pathname change.
 */
export function RouteTransitionCleanup() {
  const pathname = usePathname()
  const previousPath = useRef(pathname)

  useEffect(() => {
    const onNavigateAway = (event: MouseEvent) => {
      if (pathname !== '/') return

      const anchor = (event.target as Element | null)?.closest('a[href]')
      if (!anchor) return

      const href = anchor.getAttribute('href')
      if (!href || !isInternalRoute(href) || href === '/') return

      cleanupHomePinnedSections()
      window.__lenis?.scrollTo(0, { immediate: true })
    }

    document.addEventListener('click', onNavigateAway, true)
    return () => document.removeEventListener('click', onNavigateAway, true)
  }, [pathname])

  useLayoutEffect(() => {
    const prev = previousPath.current

    if (prev === '/' && pathname !== '/') {
      cleanupHomePinnedSections()
      window.__lenis?.scrollTo(0, { immediate: true })
      window.scrollTo(0, 0)
      ScrollTrigger.refresh()
    }

    previousPath.current = pathname
  }, [pathname])

  return null
}
