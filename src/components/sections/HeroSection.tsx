'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=1400&q=75',
    destination: 'Mogadishu',
    subtitle: 'Somalia · Coastal Hub',
    tagline: 'Where the city meets the ocean',
  },
  {
    image: 'https://images.unsplash.com/photo-1547471080-7fc2caa6f571?w=1400&q=75',
    destination: 'Nairobi',
    subtitle: 'Kenya · Corporate Travel',
    tagline: 'The heartbeat of East Africa',
  },
  {
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1400&q=75',
    destination: 'Bosaso',
    subtitle: 'Somalia · Coastal Route',
    tagline: 'Where the ocean meets the sky',
  },
  {
    image: 'https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1400&q=75',
    destination: 'Global',
    subtitle: 'International · Premium Routes',
    tagline: 'Travel beyond words',
  },
]

const romanNumerals = ['I', 'II', 'III', 'IV']

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const sectionRef = useRef<HTMLElement>(null)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning || index === currentSlide) return
      setIsTransitioning(true)
      setCurrentSlide(index)
      window.setTimeout(() => setIsTransitioning(false), 700)
    },
    [currentSlide, isTransitioning]
  )

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % slides.length)
  }, [currentSlide, goToSlide])

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length)
  }, [currentSlide, goToSlide])

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.15 }
    )
    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 7000)

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [isVisible])

  useEffect(() => {
    const onVisibilityChange = () => {
      if (document.hidden && timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
    document.addEventListener('visibilitychange', onVisibilityChange)
    return () => document.removeEventListener('visibilitychange', onVisibilityChange)
  }, [])

  const slide = slides[currentSlide]

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-sand-light pt-28 pb-14 md:pt-36 md:pb-20"
      id="hero"
    >
      <div className="pointer-events-none absolute -right-24 top-20 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-ocean/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Copy column */}
          <div className="order-2 lg:order-1">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Beyond Words
            </p>
            <p key={`subtitle-${currentSlide}`} className="eyebrow mb-5 hero-text-in">
              {slide.subtitle}
            </p>
            <h1 className="mb-2 font-display text-5xl font-semibold leading-[0.92] tracking-tight text-ink sm:text-6xl md:text-7xl lg:text-[80px]">
              Travel to{' '}
              <span key={`dest-${currentSlide}`} className="hero-text-in block text-gold">
                {slide.destination}
              </span>
            </h1>
            <p
              key={`tagline-${currentSlide}`}
              className="hero-text-in mb-8 max-w-md text-lg leading-relaxed text-ink-muted md:text-xl"
            >
              {slide.tagline}
            </p>

            <div className="mb-8 flex flex-wrap gap-2">
              {slides.map((item, i) => (
                <button
                  key={item.destination}
                  type="button"
                  onClick={() => goToSlide(i)}
                  disabled={isTransitioning}
                  className={cn(
                    'rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.08em] transition-all duration-300',
                    i === currentSlide
                      ? 'border-gold bg-gold text-night shadow-glow'
                      : 'border-border bg-surface text-ink-muted hover:border-gold/40 hover:text-ink'
                  )}
                  aria-label={`Show ${item.destination}`}
                  aria-current={i === currentSlide ? 'true' : undefined}
                >
                  {item.destination}
                </button>
              ))}
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <MagneticButton>
                <Button href="/contact" variant="primary" size="lg">
                  Plan a Trip
                </Button>
              </MagneticButton>
              <Button href="/services" variant="secondary" size="lg">
                Explore Services
              </Button>
            </div>

            <p className="mt-8 flex flex-wrap gap-x-4 gap-y-2 text-xs font-semibold uppercase tracking-[0.1em] text-ink-muted">
              <span>✓ Kenya & Somalia</span>
              <span>✓ Airport Support</span>
              <span>✓ Corporate Travel</span>
            </p>
          </div>

          {/* Image column */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-4xl border border-border bg-night-card shadow-premium sm:aspect-[5/6]">
                {slides.map((item, i) => (
                  <div
                    key={item.destination}
                    className={cn(
                      'absolute inset-0 transition-opacity duration-700 ease-in-out',
                      i === currentSlide ? 'opacity-100 z-[1]' : 'opacity-0 z-0'
                    )}
                    aria-hidden={i !== currentSlide}
                  >
                    <Image
                      src={item.image}
                      alt={item.destination}
                      fill
                      priority={i === 0}
                      loading={i === 0 ? 'eager' : 'lazy'}
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-night/50 via-transparent to-transparent" />
                  </div>
                ))}

                <div className="absolute bottom-5 left-5 z-10 rounded-2xl border border-white/15 bg-night/70 px-4 py-3 backdrop-blur-sm">
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/50">
                    Featured Route
                  </p>
                  <p className="font-display text-xl font-semibold text-white">{slide.destination}</p>
                </div>

                <div className="absolute right-5 top-5 z-10 flex flex-col items-end font-display text-white/50">
                  <span className="text-2xl font-semibold leading-none text-gold">
                    {romanNumerals[currentSlide]}
                  </span>
                  <div className="my-1.5 h-px w-5 bg-white/20" />
                  <span className="text-xs tracking-wider">{romanNumerals[slides.length - 1]}</span>
                </div>

                <div className="absolute inset-y-0 left-0 right-0 z-20 flex items-center justify-between px-4">
                  <button
                    type="button"
                    onClick={prevSlide}
                    disabled={isTransitioning}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-night/40 text-white/80 backdrop-blur-sm transition-colors hover:border-gold hover:bg-night/60 hover:text-gold disabled:opacity-50"
                    aria-label="Previous destination"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={nextSlide}
                    disabled={isTransitioning}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-night/40 text-white/80 backdrop-blur-sm transition-colors hover:border-gold hover:bg-night/60 hover:text-gold disabled:opacity-50"
                    aria-label="Next destination"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-center gap-3 lg:justify-end">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => goToSlide(i)}
                    disabled={isTransitioning}
                    className={cn(
                      'rounded-full transition-all duration-500',
                      i === currentSlide ? 'h-2 w-8 bg-gold' : 'h-2 w-2 bg-border hover:bg-gold/50'
                    )}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
