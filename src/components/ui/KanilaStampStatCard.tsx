import { cn } from '@/lib/utils'

export type StampStatVariant = 'green' | 'night' | 'white'

const variantStyles: Record<
  StampStatVariant,
  { bg: string; value: string; label: string; divider: string }
> = {
  green: {
    bg: 'bg-kamil-green-dark',
    value: 'text-white',
    label: 'text-white/90',
    divider: 'bg-white/35',
  },
  night: {
    bg: 'bg-night',
    value: 'text-white',
    label: 'text-white/85',
    divider: 'bg-white/25',
  },
  white: {
    bg: 'bg-white',
    value: 'text-night',
    label: 'text-ink-muted',
    divider: 'bg-night/15',
  },
}

interface KanilaStampStatCardProps {
  value: string
  label: string
  variant?: StampStatVariant
  className?: string
}

/** Kanila-style stat card with postage-stamp scalloped edges */
export function KanilaStampStatCard({
  value,
  label,
  variant = 'night',
  className,
}: KanilaStampStatCardProps) {
  const styles = variantStyles[variant]

  return (
    <article
      className={cn(
        'kanila-stat-stamp relative flex min-h-[200px] flex-col items-center justify-center px-4 py-10 text-center md:min-h-[240px] md:px-5 md:py-12',
        styles.bg,
        className
      )}
    >
      <p
        className={cn(
          'font-kanila-display text-[2.75rem] font-normal leading-none tracking-tight md:text-[3.25rem] lg:text-[3.75rem]',
          styles.value
        )}
      >
        {value}
      </p>
      <span className={cn('my-4 h-px w-10', styles.divider)} aria-hidden />
      <p
        className={cn(
          'max-w-[9rem] text-[10px] font-bold uppercase leading-snug tracking-[0.18em] md:text-[11px]',
          styles.label
        )}
      >
        {label}
      </p>
    </article>
  )
}
