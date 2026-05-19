'use client'

import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'

function shouldUseSmoothScroll() {
  if (typeof window === 'undefined') return false
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false
  if (window.matchMedia('(pointer: coarse)').matches) return false
  if (window.matchMedia('(max-width: 1024px)').matches) return false
  return true
}

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (!shouldUseSmoothScroll()) return

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      wheelMultiplier: 0.85,
    })

    let frameId = 0
    const raf = (time: number) => {
      lenis.raf(time)
      frameId = requestAnimationFrame(raf)
    }
    frameId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(frameId)
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}
