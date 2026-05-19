'use client'

import { useInView } from '@/hooks/useInView'

interface FadeUpProps {
  children: React.ReactNode
  delay?: number
  className?: string
  tag?: 'div' | 'section' | 'article' | 'p' | 'h2' | 'h3'
}

export function FadeUp({ children, delay = 0, className = '', tag = 'div' }: FadeUpProps) {
  const Tag = tag as React.ElementType
  const { ref, inView } = useInView<HTMLElement>()

  return (
    <Tag
      ref={ref}
      className={`reveal-fade-up ${inView ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </Tag>
  )
}
