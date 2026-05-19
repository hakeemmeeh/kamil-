'use client'

import { useRef, useEffect } from 'react'
import { destinations } from '@/lib/content'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { DestinationCard } from '@/components/ui/DestinationCard'
import { FadeUp } from '@/components/ui/FadeUp'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

export function DestinationsPreview() {
  const sectionRef = useRef<HTMLElement>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    const section = sectionRef.current
    const scrollContainer = scrollContainerRef.current
    if (!section || !scrollContainer) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    // On mobile, standard stack. On desktop, horizontal scroll.
    const isMobile = window.matchMedia('(max-width: 768px)').matches
    if (reduceMotion || isMobile) return

    let ctx = gsap.context(() => {
      const scrollDistance = Math.max(0, scrollContainer.scrollWidth - window.innerWidth + 80)
      
      if (scrollDistance > 0) {
        gsap.to(scrollContainer, {
          x: -scrollDistance,
          ease: "none",
          force3D: true, // Forces GPU acceleration to eliminate lag
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${scrollDistance}`,
            pin: true,
            scrub: 0.5, // Adding a tiny bit of smoothing to prevent jitter with Lenis
            invalidateOnRefresh: true
          }
        })
      }
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="bg-sand-light overflow-hidden" id="destinations">
      <div className="pt-24 pb-8 mx-auto max-w-7xl px-5">
        <FadeUp>
          <SectionHeader eyebrow="Destinations" title="Destinations with purpose, planning, and support." description="Explore confirmed travel points across our Somalia airport network and beyond." align="left" />
        </FadeUp>
      </div>

      <div className="md:pb-24">
        {/* Mobile grid / Desktop horizontal row */}
        <div 
          ref={scrollContainerRef}
          className="flex flex-col md:flex-row gap-6 px-5 md:px-[max(1.25rem,calc((100vw-80rem)/2))] pb-24 md:pb-0"
        >
          {destinations.slice(0, 5).map((dest, i) => (
            <div key={dest.slug} className="w-full md:w-[380px] flex-shrink-0">
              <FadeUp delay={i * 0.08}>
                <DestinationCard {...dest} />
              </FadeUp>
            </div>
          ))}
          {/* Spacer block at the end for horizontal scroll */}
          <div className="hidden md:block w-[10vw] flex-shrink-0" />
        </div>
      </div>
    </section>
  )
}
