'use client'

import { useEffect } from 'react'
import { cleanupHomePinnedSections, initHomeScrollAnimations } from '@/lib/animations'

export function HomeScrollEffects() {
  useEffect(() => {
    const init = () => {
      requestAnimationFrame(() => {
        initHomeScrollAnimations()
      })
    }

    if (window.__lenisReady) {
      init()
    } else {
      window.addEventListener('lenis-ready', init, { once: true })
    }

    return () => {
      window.removeEventListener('lenis-ready', init)
      cleanupHomePinnedSections()
    }
  }, [])

  return null
}
