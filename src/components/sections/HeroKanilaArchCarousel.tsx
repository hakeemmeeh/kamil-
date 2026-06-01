'use client'

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { KanilaHeroArchCard } from '@/components/ui/KanilaHeroArchCard'
import { cn } from '@/lib/utils'
import { destinations } from '@/lib/content'
import { heroArchSlugs } from '@/lib/cityImages'

const destBySlug = new Map(destinations.map((d) => [d.slug, d]))

const ITEMS = heroArchSlugs
  .map((slug) => destBySlug.get(slug))
  .filter((d): d is NonNullable<typeof d> => !!d && d.status !== 'client-to-confirm')
  .map((d) => ({
    slug: d.slug,
    title: d.title,
    subtitle: d.country,
    image: d.image,
    href: `/destinations#${d.slug}`,
  }))

const COUNT = ITEMS.length
const AUTO_MS = 4200
const GAP = 16
const DURATION = 0.88
const EASE = [0.22, 1, 0.36, 1] as const

const STAGGER = ['mb-0', 'mb-6', 'mb-12', 'mb-4']

function prefersReducedMotion() {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function useVisibleCount() {
  const [n, setN] = useState(4)
  useEffect(() => {
    const update = () => setN(window.matchMedia('(max-width: 639px)').matches ? 3 : 4)
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])
  return n
}

interface HeroKanilaArchCarouselProps {
  className?: string
}

type VisibleItem = (typeof ITEMS)[number] & { slot: number }

/**
 * Kanila Home 3 hero — each arch has its own motion:
 * lead grows (title + arrow), then hands off to the next card.
 */
export function HeroKanilaArchCarousel({ className }: HeroKanilaArchCarouselProps) {
  const visibleCount = useVisibleCount()
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [dims, setDims] = useState({ lead: 300, compact: 148 })
  const [intro, setIntro] = useState(true)
  const leadProbe = useRef<HTMLDivElement>(null)
  const stepProbe = useRef<HTMLDivElement>(null)
  const reduceMotion = prefersReducedMotion()

  const measure = useCallback(() => {
    const lead = leadProbe.current?.offsetWidth ?? 300
    const compact = stepProbe.current?.offsetWidth ?? 148
    setDims({ lead, compact })
  }, [])

  useLayoutEffect(() => {
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [measure])

  useEffect(() => {
    const t = window.setTimeout(() => setIntro(false), 1400)
    return () => window.clearTimeout(t)
  }, [])

  const visible: VisibleItem[] = Array.from({ length: visibleCount }, (_, slot) => ({
    ...ITEMS[(index + slot) % COUNT],
    slot,
  }))

  const advance = useCallback(() => {
    setIndex((i) => (i + 1) % COUNT)
  }, [])

  useEffect(() => {
    if (paused || COUNT <= 1) return
    const t = window.setInterval(advance, AUTO_MS)
    return () => window.clearInterval(t)
  }, [advance, paused])

  const viewportW = dims.lead + (visibleCount - 1) * (dims.compact + GAP)
  const probe = ITEMS[0]
  const motionDuration = reduceMotion ? 0.01 : DURATION

  return (
    <div
      className={cn('hero-kanila-arch-carousel', className)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Featured destinations"
    >
      <div className="pointer-events-none absolute h-0 overflow-hidden opacity-0" aria-hidden>
        <div ref={leadProbe} className="inline-block">
          {probe && <KanilaHeroArchCard {...probe} isLead />}
        </div>
        <div ref={stepProbe} className="ml-3 inline-block">
          {probe && <KanilaHeroArchCard {...probe} />}
        </div>
      </div>

      <div
        className="hero-kanila-arch-viewport relative overflow-hidden"
        style={{ width: viewportW, maxWidth: '100%' }}
      >
        <motion.div
          className="hero-kanila-arch-track flex items-end"
          style={{ gap: GAP }}
          layout
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((dest) => {
              const isLead = dest.slot === 0
              const width = isLead ? dims.lead : dims.compact

              return (
                <motion.div
                  key={dest.slug}
                  layout
                  layoutId={`hero-arch-${dest.slug}`}
                  data-slot={dest.slot}
                  className={cn(
                    'hero-kanila-arch-item shrink-0',
                    isLead ? 'hero-kanila-arch-item--lead' : 'hero-kanila-arch-item--compact',
                    STAGGER[dest.slot] ?? 'mb-0'
                  )}
                  initial={
                    intro
                      ? { opacity: 0, x: 56, width: dims.compact }
                      : { opacity: 0, x: 40, width: dims.compact }
                  }
                  animate={{
                    opacity: 1,
                    x: 0,
                    width,
                    zIndex: isLead ? 30 : 10 - dest.slot,
                  }}
                  exit={{
                    opacity: 0,
                    x: -56,
                    width: dims.compact,
                    transition: { duration: motionDuration * 0.65, ease: EASE },
                  }}
                  transition={{
                    layout: { duration: motionDuration, ease: EASE },
                    width: { duration: motionDuration, ease: EASE },
                    opacity: { duration: motionDuration * 0.5 },
                    x: { duration: motionDuration, ease: EASE },
                  }}
                >
                  <KanilaHeroArchCard
                    title={dest.title}
                    subtitle={dest.subtitle}
                    image={dest.image}
                    href={dest.href}
                    isLead={isLead}
                  />
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  )
}
