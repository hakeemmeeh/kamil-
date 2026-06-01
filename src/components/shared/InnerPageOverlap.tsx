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

/** Rounded panel that slides over PageBanner — Kanila inner-page rhythm */
export function InnerPageOverlap({
  children,
  className,
  bg = 'sand-light',
}: InnerPageOverlapProps) {
  return (
    <div
      className={cn(
        'inner-page-overlap relative z-40 -mt-[min(14vh,120px)] rounded-t-[2.5rem] shadow-[0_-24px_60px_rgba(7,17,31,0.12)] md:-mt-[min(18vh,140px)]',
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
