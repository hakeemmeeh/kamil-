'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react'

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
      className="relative flex h-screen min-h-[700px] items-center justify-center overflow-hidden"
      id="hero"
    >
      {slides.map((item, i) => (
        <div
          key={item.destination}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            i === currentSlide ? 'opacity-100 z-[1]' : 'opacity-0 z-0'
          }`}
          aria-hidden={i !== currentSlide}
        >
          <Image
            src={item.image}
            alt={item.destination}
            fill
            priority={i === 0}
            loading={i === 0 ? 'eager' : 'lazy'}
            className="object-cover"
            sizes="100vw"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-night/30 via-transparent to-night/50" />
        </div>
      ))}

      <div className="relative z-10 mx-auto max-w-5xl px-5 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gold drop-shadow-md">
          Beyond Words
        </p>
        <p className="eyebrow !text-white/80 justify-center before:!bg-white/60 mb-5 text-[11px] drop-shadow-md">
          {slide.subtitle}
        </p>
        <h1 className="mb-4 font-display text-6xl font-semibold leading-[0.9] tracking-tight text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.5)] sm:text-8xl md:text-[110px]">
          {slide.destination}
        </h1>
        <p className="mx-auto mb-10 max-w-[500px] text-lg font-medium leading-relaxed text-white/90 drop-shadow-lg md:text-xl">
          {slide.tagline}
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <MagneticButton>
            <Button href="/contact" variant="primary" size="lg">
              Plan a Trip
            </Button>
          </MagneticButton>
          <Button href="/services" variant="outline" size="lg">
            Explore Services
          </Button>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 right-0 z-20">
        <button
          onClick={prevSlide}
          disabled={isTransitioning}
          className="pointer-events-auto absolute left-6 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-night/30 text-white/60 transition-colors duration-300 hover:border-white/50 hover:bg-white/10 hover:text-white disabled:opacity-50 md:left-10 md:h-14 md:w-14"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={nextSlide}
          disabled={isTransitioning}
          className="pointer-events-auto absolute right-6 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-night/30 text-white/60 transition-colors duration-300 hover:border-white/50 hover:bg-white/10 hover:text-white disabled:opacity-50 md:right-10 md:h-14 md:w-14"
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="absolute bottom-8 left-0 right-0 z-20 mx-auto flex max-w-7xl items-end justify-between px-5">
        <div className="hidden items-center gap-2 text-xs font-medium text-white/40 md:flex">
          <ChevronDown className="h-3.5 w-3.5 animate-bounce" />
          Scroll to explore
        </div>

        <div className="mx-auto flex items-center gap-3 md:mx-0">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              disabled={isTransitioning}
              className={`rounded-full transition-all duration-500 ${
                i === currentSlide ? 'h-2 w-8 bg-gold' : 'h-2 w-2 bg-white/30 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <div className="hidden flex-col items-end font-display text-white/40 md:flex">
          <span className="text-2xl font-semibold leading-none text-white/80">
            {romanNumerals[currentSlide]}
          </span>
          <div className="my-1.5 h-px w-5 bg-white/20" />
          <span className="text-xs tracking-wider">{romanNumerals[slides.length - 1]}</span>
        </div>
      </div>
    </section>
  )
}
