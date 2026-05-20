'use client'

import { useEffect, useRef, useState } from 'react'

export function prefersReducedMotion() {
  if (typeof window === 'undefined') return true
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function isElementInViewport(el: HTMLElement) {
  const rect = el.getBoundingClientRect()
  return rect.top < window.innerHeight * 0.95 && rect.bottom > 0
}

export function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reveal = () => setInView(true)

    if (prefersReducedMotion()) {
      reveal()
      return
    }

    // Already on screen when section mounts (e.g. after fast scroll or refresh mid-page)
    if (isElementInViewport(el)) {
      reveal()
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal()
          observer.disconnect()
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.01 }
    )

    observer.observe(el)

    // Failsafe after layout/images load — prevents permanently hidden content
    const failsafe = window.setTimeout(() => {
      if (isElementInViewport(el)) reveal()
    }, 400)

    const onLoad = () => {
      if (isElementInViewport(el)) reveal()
    }
    window.addEventListener('load', onLoad)

    return () => {
      observer.disconnect()
      window.clearTimeout(failsafe)
      window.removeEventListener('load', onLoad)
    }
  }, [])

  return { ref, inView }
}
