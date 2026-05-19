'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface FadeUpProps {
  children: React.ReactNode
  delay?: number
  className?: string
  tag?: 'div' | 'section' | 'article' | 'p' | 'h2' | 'h3'
}

export function FadeUp({ children, delay = 0, className = '', tag = 'div' }: FadeUpProps) {
  const ref = useRef<HTMLDivElement>(null)
  const Tag = tag as React.ElementType

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return

    gsap.fromTo(
      el,
      { y: 48, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.85,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 86%',
          once: true,
        },
      }
    )
  }, [delay])

  return (
    // Dynamic tag typing
    <Tag ref={ref} className={className} style={{ opacity: 0 }}>
      {children}
    </Tag>
  )
}
