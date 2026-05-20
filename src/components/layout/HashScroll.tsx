'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

function scrollToHash(hash: string, retries = 0) {
  const id = hash.replace('#', '')
  if (!id) return

  const el = document.getElementById(id)
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 100
    window.scrollTo({ top, behavior: 'smooth' })
    return
  }

  if (retries < 12) {
    window.setTimeout(() => scrollToHash(hash, retries + 1), 100)
  }
}

export function HashScroll() {
  const pathname = usePathname()

  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh()
    window.addEventListener('load', refresh)
    const refreshTimer = window.setTimeout(refresh, 600)
    return () => {
      window.removeEventListener('load', refresh)
      window.clearTimeout(refreshTimer)
    }
  }, [])

  useEffect(() => {
    const hash = window.location.hash
    if (!hash) return

    const timer = window.setTimeout(() => scrollToHash(hash), 150)
    return () => window.clearTimeout(timer)
  }, [pathname])

  return null
}
