import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

interface StickyStackSectionProps {
  id?: string
  /** Sticky full-viewport background (image layer) */
  sticky: ReactNode
  /** Panel that scrolls over the sticky image */
  children: ReactNode
  className?: string
  stickyClassName?: string
  panelClassName?: string
  /** Min height runway for sticky scroll — default 150vh desktop */
  minHeight?: string
}

/**
 * Kanila continuous scroll — sticky image + overlapping rounded panel.
 * Disabled on mobile via CSS (normal vertical flow).
 */
export function StickyStackSection({
  id,
  sticky,
  children,
  className,
  stickyClassName,
  panelClassName,
  minHeight,
}: StickyStackSectionProps) {
  return (
    <section
      id={id}
      className={cn('sticky-stack-section', className)}
      style={minHeight ? { minHeight } : undefined}
    >
      <div className={cn('sticky-stack-image', stickyClassName)}>{sticky}</div>
      <div className={cn('sticky-stack-content overlap-panel', panelClassName)}>
        {children}
      </div>
    </section>
  )
}
