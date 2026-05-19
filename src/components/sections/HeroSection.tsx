'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { gsap } from 'gsap'
import { Button } from '@/components/ui/Button'
import { MagneticButton } from '@/components/ui/MagneticButton'
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    // Airplane landing / airport runway
    media: 'https://videos.pexels.com/video-files/2169880/2169880-uhd_2560_1440_30fps.mp4',
    type: 'video' as const,
    fallback: 'https://images.unsplash.com/photo-1556388158-158ea5ccacbd?w=1920&q=80',
    destination: 'Mogadishu',
    subtitle: 'Somalia · Airport Hub',
    tagline: 'Your gateway to East Africa',
  },
  {
    // Nairobi — clear city skyline
    media: 'https://images.unsplash.com/photo-1547471080-7fc2caa6f571?w=1920&q=80',
    type: 'image' as const,
    fallback: 'https://images.unsplash.com/photo-1547471080-7fc2caa6f571?w=1920&q=80',
    destination: 'Nairobi',
    subtitle: 'Kenya · Corporate Travel',
    tagline: 'The heartbeat of East Africa',
  },
  {
    // Ocean / coastal city
    media: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80',
    type: 'image' as const,
    fallback: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80',
    destination: 'Bosaso',
    subtitle: 'Somalia · Coastal Route',
    tagline: 'Where the ocean meets the sky',
  },
  {
    // Aerial city view
    media: 'https://videos.pexels.com/video-files/1721294/1721294-uhd_2560_1440_24fps.mp4',
    type: 'video' as const,
    fallback: 'https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1920&q=80',
    destination: 'Global',
    subtitle: 'International · Premium Routes',
    tagline: 'Travel beyond words',
  },
]

const romanNumerals = ['I', 'II', 'III', 'IV', 'V', 'VI']

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const slidesRef = useRef<(HTMLDivElement | null)[]>([])
  const textRefs = useRef<(HTMLDivElement | null)[]>([])
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

  // Video playback control
  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return
      if (i === currentSlide) {
        video.play().catch(() => {})
      } else {
        // Pause inactive videos to save CPU/GPU
        video.pause()
      }
    })
  }, [currentSlide])

  // Crossfade transition between slides
  const goToSlide = useCallback((index: number) => {
    if (isTransitioning || index === currentSlide) return
    setIsTransitioning(true)

    const from = slidesRef.current[currentSlide]
    const to = slidesRef.current[index]
    const fromText = textRefs.current[currentSlide]
    const toText = textRefs.current[index]

    if (!from || !to || !fromText || !toText) return

    // Pre-play the incoming video so there's no stutter when it fades in
    const incomingVideo = videoRefs.current[index]
    if (incomingVideo) incomingVideo.play().catch(() => {})

    const tl = gsap.timeline({
      onComplete: () => {
        setCurrentSlide(index)
        setIsTransitioning(false)
      },
    })

    // Fade out current text
    tl.to(fromText, {
      opacity: 0,
      y: -40,
      duration: 0.5,
      ease: 'power2.in',
      force3D: true,
    })
    // Bring new slide visible with scale zoom
    .set(to, { opacity: 0, scale: 1.15, zIndex: 2 })
    .to(to, {
      opacity: 1,
      scale: 1,
      duration: 1.6,
      ease: 'power3.inOut',
      force3D: true,
    }, '-=0.2')
    // Simultaneously fade old slide
    .to(from, {
      opacity: 0,
      scale: 0.98,
      duration: 1.2,
      ease: 'power2.inOut',
      force3D: true,
    }, '<')
    // Fade in new text
    .fromTo(toText, 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', force3D: true },
      '-=0.6'
    )
    // Reset old slide underneath
    .set(from, { opacity: 0, scale: 1, zIndex: 0 })
    .set(to, { zIndex: 1 })
  }, [currentSlide, isTransitioning])

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % slides.length)
  }, [currentSlide, goToSlide])

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length)
  }, [currentSlide, goToSlide])

  // Auto-advance timer
  useEffect(() => {
    timerRef.current = setInterval(() => {
      if (!isTransitioning) {
        nextSlide()
      }
    }, 6000)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [nextSlide, isTransitioning])

  // Intro animation
  useEffect(() => {
    if (typeof window === 'undefined') return
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return

    const first = slidesRef.current[0]
    const firstText = textRefs.current[0]
    if (!first || !firstText) return

    const tl = gsap.timeline({ defaults: { ease: 'power4.out', force3D: true } })
    tl.fromTo(first, { scale: 1.2, opacity: 0 }, { scale: 1, opacity: 1, duration: 2.2 })
      .fromTo(firstText, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1.0 }, '-=1.3')
      .fromTo('.hero-nav-arrows', { opacity: 0 }, { opacity: 1, duration: 0.6 }, '-=0.5')
      .fromTo('.hero-bottom-bar', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.4')
  }, [])

  return (
    <section ref={sectionRef} className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden" id="hero">
      
      {/* === Background Slides === */}
      {slides.map((slide, i) => (
        <div
          key={i}
          ref={el => { slidesRef.current[i] = el }}
          className="absolute inset-0 will-change-transform"
          style={{ opacity: i === 0 ? 1 : 0, zIndex: i === 0 ? 1 : 0 }}
        >
          {slide.type === 'video' ? (
            <>
              <video
                ref={el => { videoRefs.current[i] = el }}
                muted
                loop
                playsInline
                preload={i < 2 ? 'auto' : 'none'}
                poster={slide.fallback}
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLVideoElement).style.display = 'none'
                }}
              >
                <source src={slide.media} type="video/mp4" />
              </video>
              {/* Fallback image underneath video */}
              <div
                className="absolute inset-0 bg-cover bg-center -z-10"
                style={{ backgroundImage: `url('${slide.fallback}')` }}
              />
            </>
          ) : (
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${slide.media}')` }}
            />
          )}
          {/* Cinematic overlay - Reduced to zero opacity in the center for clear videos */}
          <div className="absolute inset-0 bg-gradient-to-b from-night/30 via-transparent to-night/50 pointer-events-none" />
        </div>
      ))}

      {/* === Per-Slide Content (centered text) === */}
      {slides.map((slide, i) => (
        <div
          key={`text-${i}`}
          ref={el => { textRefs.current[i] = el }}
          className="absolute inset-0 z-10 flex items-center justify-center"
          style={{ opacity: i === 0 ? 1 : 0, pointerEvents: i === currentSlide ? 'auto' : 'none' }}
        >
          <div className="mx-auto max-w-5xl px-5 text-center">
            <p className="eyebrow !text-white/80 justify-center before:!bg-white/60 mb-5 text-[11px] drop-shadow-md">
              {slide.subtitle}
            </p>
            <h1 className="font-display text-6xl sm:text-8xl md:text-[110px] font-semibold text-white leading-[0.9] tracking-tight mb-4 drop-shadow-[0_4px_16px_rgba(0,0,0,0.5)]">
              {slide.destination}
            </h1>
            <p className="mx-auto max-w-[500px] text-lg md:text-xl text-white/90 leading-relaxed mb-10 font-medium drop-shadow-lg">
              {slide.tagline}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <MagneticButton>
                <Button href="/contact" variant="primary" size="lg">Plan a Trip</Button>
              </MagneticButton>
              <Button href="/services" variant="outline" size="lg">Explore Services</Button>
            </div>
          </div>
        </div>
      ))}

      {/* === Navigation Arrows (sides) === */}
      <div className="hero-nav-arrows absolute inset-y-0 left-0 right-0 z-20 pointer-events-none" style={{ opacity: 0 }}>
        <button
          onClick={prevSlide}
          disabled={isTransitioning}
          className="pointer-events-auto absolute left-6 md:left-10 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/50 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={nextSlide}
          disabled={isTransitioning}
          className="pointer-events-auto absolute right-6 md:right-10 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/50 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* === Bottom Bar === */}
      <div className="hero-bottom-bar absolute bottom-8 left-0 right-0 z-20 mx-auto max-w-7xl px-5 flex items-end justify-between" style={{ opacity: 0 }}>
        {/* Left: scroll indicator */}
        <div className="hidden md:flex items-center gap-2 text-xs text-white/40 font-medium">
          <ChevronDown className="h-3.5 w-3.5 animate-bounce" />
          Scroll to explore
        </div>

        {/* Center: dot indicators */}
        <div className="flex items-center gap-3 mx-auto md:mx-0">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              disabled={isTransitioning}
              className={`transition-all duration-500 rounded-full ${
                i === currentSlide
                  ? 'w-8 h-2 bg-gold'
                  : 'w-2 h-2 bg-white/30 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Right: Roman numeral counter */}
        <div className="hidden md:flex flex-col items-end text-white/40 font-display">
          <span className="text-2xl text-white/80 font-semibold leading-none">{romanNumerals[currentSlide]}</span>
          <div className="w-5 h-px bg-white/20 my-1.5" />
          <span className="text-xs tracking-wider">{romanNumerals[slides.length - 1]}</span>
        </div>
      </div>
    </section>
  )
}
