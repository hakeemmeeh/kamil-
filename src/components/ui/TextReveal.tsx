'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface TextRevealProps {
  children: string
  className?: string
  tag?: 'h1' | 'h2' | 'h3' | 'p'
}

export function TextReveal({ children, className = '', tag = 'h2' }: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const Tag = tag

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) {
      const spans = el.querySelectorAll('.word')
      spans.forEach((span) => {
        (span as HTMLElement).style.opacity = '1'
        ;(span as HTMLElement).style.transform = 'none'
      })
      return
    }

    const words = el.querySelectorAll('.word')
    gsap.fromTo(
      words,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.06,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          once: true,
        },
      }
    )
  }, [])

  const words = children.split(' ')

  return (
    <Tag ref={ref as React.RefObject<HTMLHeadingElement>} className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.28em]">
          <span className="word inline-block" style={{ opacity: 0 }}>
            {word}
          </span>
        </span>
      ))}
    </Tag>
  )
}
