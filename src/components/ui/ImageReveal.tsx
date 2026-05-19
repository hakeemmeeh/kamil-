'use client'

import { useEffect, useState } from 'react'
import { useInView } from '@/hooks/useInView'

interface ImageRevealProps {
  children: React.ReactNode
  className?: string
  direction?: 'left' | 'right' | 'up' | 'down'
}

const directionClass: Record<string, string> = {
  left: 'reveal-image-left',
  right: 'reveal-image-right',
  up: 'reveal-image-up',
  down: 'reveal-image-down',
}

export function ImageReveal({ children, className = '', direction = 'left' }: ImageRevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>()
  const [failsafe, setFailsafe] = useState(false)

  // Never leave images permanently hidden if scroll observer misses
  useEffect(() => {
    const timer = window.setTimeout(() => setFailsafe(true), 600)
    return () => window.clearTimeout(timer)
  }, [])

  const visible = inView || failsafe

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${directionClass[direction]} ${visible ? 'is-visible' : ''} ${className}`}
    >
      {children}
    </div>
  )
}
