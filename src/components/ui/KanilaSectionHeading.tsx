import { KanilaCompassMark } from '@/components/ui/KanilaCompassMark'
import { cn } from '@/lib/utils'

interface KanilaSectionHeadingProps {
  /** Script accent line — e.g. "Explore the World", "Tour Activity" */
  eyebrow: string
  /** Main title; pass brackets in children or use bracketTitle */
  title: React.ReactNode
  subtitle?: string
  align?: 'center' | 'left'
  className?: string
  /** Show ‹ › around title (Kanila "Best Destinations" style) */
  withBrackets?: boolean
  showCompass?: boolean
}

/**
 * Kanila Home 3 section header — Satisfy script eyebrow + Marcellus title + compass mark
 */
export function KanilaSectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = '',
  withBrackets = false,
  showCompass = true,
}: KanilaSectionHeadingProps) {
  const centered = align === 'center'

  return (
    <header
      className={cn(
        'kanila-section-heading',
        centered && 'mx-auto max-w-3xl text-center',
        className
      )}
    >
      <p
        className={cn(
          'kanila-section-eyebrow font-kanila-script text-[1.55rem] text-kamil-green md:text-[1.75rem] lg:text-[1.9rem]',
          centered && 'animate-eyebrow'
        )}
      >
        {eyebrow}
      </p>

      <h2
        className={cn(
          'mt-2 font-kanila-display text-[2.15rem] leading-[1.05] tracking-tight text-ink sm:text-[2.75rem] md:text-[3rem] lg:text-[3.25rem]',
          centered && 'animate-fade-up'
        )}
      >
        {withBrackets ? (
          <>
            <span className="text-kamil-green/75" aria-hidden>
              ‹{' '}
            </span>
            {title}
            <span className="text-kamil-green/75" aria-hidden>
              {' '}
              ›
            </span>
          </>
        ) : (
          title
        )}
      </h2>

      {showCompass && (
        <KanilaCompassMark
          className={cn('mt-4 text-gold/70', centered && 'mx-auto animate-fade-up')}
        />
      )}

      {subtitle && (
        <p
          className={cn(
            'mt-5 max-w-lg text-base leading-relaxed text-body-contrast md:mt-6 md:text-lg',
            centered && 'mx-auto animate-fade-up'
          )}
        >
          {subtitle}
        </p>
      )}
    </header>
  )
}
