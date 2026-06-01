import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface InnerPageOverlapProps {
  children: ReactNode
  className?: string
  /** Panel background — defaults to sand-light */
  bg?: 'sand-light' | 'white' | 'sand' | 'surface'
}

const bgClass = {
  'sand-light': 'bg-sand-light',
  white: 'bg-white',
  sand: 'bg-sand',
  surface: 'bg-surface',
} as const

/** Rounded content panel below compact PageBanner */
export function InnerPageOverlap({
  children,
  className,
  bg = 'sand-light',
}: InnerPageOverlapProps) {
  return (
    <div
      className={cn(
        'inner-page-overlap relative z-40 rounded-t-[1.75rem] shadow-[0_-12px_40px_rgba(7,17,31,0.08)] md:rounded-t-[2rem]',
        bgClass[bg],
        className
      )}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-10 h-1 bg-gradient-to-r from-transparent via-gold to-transparent"
        aria-hidden
      />
      {children}
    </div>
  )
}
