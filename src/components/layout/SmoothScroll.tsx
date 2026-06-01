'use client'

import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

declare global {
  interface Window {
    __lenis?: Lenis
    __lenisReady?: boolean
  }
}

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (prefersReducedMotion()) {
      window.__lenisReady = true
      window.dispatchEvent(new CustomEvent('lenis-ready'))
      return
    }

    const isTouch = window.matchMedia('(pointer: coarse)').matches

    const lenis = new Lenis({
      duration: 1.2,
      lerp: isTouch ? 0.09 : 0.082,
      smoothWheel: true,
      syncTouch: isTouch,
      syncTouchLerp: 0.08,
      wheelMultiplier: 0.88,
      touchMultiplier: 1,
      infinite: false,
    })

    window.__lenis = lenis

    lenis.on('scroll', ScrollTrigger.update)

    ScrollTrigger.scrollerProxy(document.documentElement, {
      scrollTop(value) {
        if (arguments.length && value !== undefined) {
          lenis.scrollTo(value, { immediate: true })
        }
        return lenis.scroll
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        }
      },
      pinType: ScrollTrigger.isTouch ? 'transform' : 'fixed',
    })

    ScrollTrigger.defaults({ scroller: document.documentElement })

    const raf = (time: number) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    const onRefresh = () => lenis.resize()
    ScrollTrigger.addEventListener('refresh', onRefresh)

    const refreshAll = () => {
      lenis.resize()
      ScrollTrigger.refresh()
    }

    refreshAll()
    window.addEventListener('load', refreshAll)
    window.addEventListener('resize', refreshAll)

    window.__lenisReady = true
    window.dispatchEvent(new CustomEvent('lenis-ready'))

    return () => {
      window.removeEventListener('load', refreshAll)
      window.removeEventListener('resize', refreshAll)
      ScrollTrigger.removeEventListener('refresh', onRefresh)
      ScrollTrigger.scrollerProxy(document.documentElement, {})
      ScrollTrigger.clearScrollMemory()
      lenis.destroy()
      delete window.__lenis
      delete window.__lenisReady
      ScrollTrigger.refresh()
    }
  }, [])

  return <>{children}</>
}
