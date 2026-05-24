'use client'

import { useInView } from '@/hooks/useInView'
import { cn } from '@/lib/utils'

type SlideDirection = 'left' | 'right' | 'up'

interface SlideInProps {
  children: React.ReactNode
  direction?: SlideDirection
  delay?: number
  className?: string
  tag?: 'div' | 'section' | 'article'
}

const directionClass: Record<SlideDirection, string> = {
  left: 'reveal-slide-left',
  right: 'reveal-slide-right',
  up: 'reveal-fade-up',
}

/** Scroll reveal — slide in from left, right, or up */
export function SlideIn({
  children,
  direction = 'up',
  delay = 0,
  className = '',
  tag = 'div',
}: SlideInProps) {
  const Tag = tag as React.ElementType
  const { ref, inView } = useInView<HTMLElement>()

  return (
    <Tag
      ref={ref}
      className={cn(directionClass[direction], inView && 'is-visible', className)}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </Tag>
  )
}
