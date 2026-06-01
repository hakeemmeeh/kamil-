import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

interface TourRatingProps {
  rating: number
  reviewCount: number
  className?: string
  dark?: boolean
}

export function TourRating({ rating, reviewCount, className, dark }: TourRatingProps) {
  const full = Math.floor(rating)
  const hasHalf = rating - full >= 0.25 && rating - full < 0.85

  return (
    <div className={cn('flex flex-wrap items-center gap-2 text-xs font-semibold', className)}>
      <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={cn(
              'h-3.5 w-3.5',
              i < full
                ? 'fill-kamil-green text-kamil-green'
                : i === full && hasHalf
                  ? 'fill-kamil-green/50 text-kamil-green'
                  : dark
                    ? 'text-white/25'
                    : 'text-border'
            )}
          />
        ))}
      </div>
      <span className={dark ? 'text-white/90' : 'text-ink'}>
        <strong>{rating}</strong>
        <span className={dark ? 'text-white/60' : 'text-ink-muted'}> out of 5</span>
      </span>
      <span className={dark ? 'text-white/50' : 'text-ink-muted'}>
        · {reviewCount} {reviewCount === 1 ? 'Review' : 'Reviews'}
      </span>
    </div>
  )
}
