'use client'

import { useInView } from '@/hooks/useInView'

interface FadeUpProps {
  children: React.ReactNode
  delay?: number
  className?: string
  tag?: 'div' | 'section' | 'article' | 'p' | 'h2' | 'h3'
  /** Show immediately (no hidden-then-reveal) — use for above-fold CTAs */
  instant?: boolean
}

export function FadeUp({
  children,
  delay = 0,
  className = '',
  tag = 'div',
  instant = false,
}: FadeUpProps) {
  const Tag = tag as React.ElementType
  const { ref, inView } = useInView<HTMLElement>({ instant })

  return (
    <Tag
      ref={ref}
      className={`reveal-fade-up ${instant || inView ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </Tag>
  )
}
