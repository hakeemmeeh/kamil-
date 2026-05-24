'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { prefersReducedMotion } from '@/lib/animations'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface LineRevealProps {
  children: string
  className?: string
  tag?: 'h1' | 'h2' | 'h3' | 'p'
  align?: 'left' | 'center'
  /** Run on load instead of scroll */
  immediate?: boolean
}

export function LineReveal({
  children,
  className = '',
  tag = 'h2',
  align = 'left',
  immediate = false,
}: LineRevealProps) {
  const Tag = tag
  const ref = useRef<HTMLHeadingElement & HTMLParagraphElement>(null)
  const lines = children.split('\n').filter(Boolean)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const lineEls = el.querySelectorAll('.line-reveal-inner')

    if (prefersReducedMotion()) {
      gsap.set(lineEls, { y: 0, opacity: 1 })
      return
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineEls,
        { y: '110%', opacity: 0 },
        {
          y: '0%',
          opacity: 1,
          duration: 1.1,
          stagger: 0.14,
          ease: 'power4.out',
          ...(immediate
            ? { delay: 0.3 }
            : {
                scrollTrigger: {
                  trigger: el,
                  start: 'top 82%',
                  once: true,
                },
              }),
        }
      )
    }, el)

    return () => ctx.revert()
  }, [children, immediate])

  return (
    <Tag
      ref={ref}
      className={`${align === 'center' ? 'text-center' : ''} ${className}`}
    >
      {lines.map((line, i) => (
        <span key={i} className="line-reveal block overflow-hidden">
          <span className="line-reveal-inner inline-block w-full">{line}</span>
        </span>
      ))}
    </Tag>
  )
}
