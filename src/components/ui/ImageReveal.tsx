'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface ImageRevealProps {
  children: React.ReactNode
  className?: string
  direction?: 'left' | 'right' | 'up' | 'down'
}

const clipPaths: Record<string, { from: string; to: string }> = {
  left: { from: 'inset(0 100% 0 0)', to: 'inset(0 0% 0 0)' },
  right: { from: 'inset(0 0 0 100%)', to: 'inset(0 0 0 0%)' },
  up: { from: 'inset(100% 0 0 0)', to: 'inset(0% 0 0 0)' },
  down: { from: 'inset(0 0 100% 0)', to: 'inset(0 0 0% 0)' },
}

export function ImageReveal({ children, className = '', direction = 'left' }: ImageRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) {
      el.style.clipPath = clipPaths[direction].to
      return
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { clipPath: clipPaths[direction].from },
        {
          clipPath: clipPaths[direction].to,
          duration: 1.25,
          ease: 'power4.inOut',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            once: true,
          },
        }
      )
    }, el)

    return () => ctx.revert()
  }, [direction])

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      style={{ clipPath: clipPaths[direction].from }}
    >
      {children}
    </div>
  )
}
