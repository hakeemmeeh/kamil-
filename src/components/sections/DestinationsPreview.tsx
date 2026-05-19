'use client'

import { useEffect, useRef } from 'react'
import { destinations } from '@/lib/content'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { DestinationCard } from '@/components/ui/DestinationCard'
import { FadeUp } from '@/components/ui/FadeUp'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function DestinationsPreview() {
  const sectionRef = useRef<HTMLElement>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const scrollContainer = scrollContainerRef.current
    if (!section || !scrollContainer) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isMobile = window.matchMedia('(max-width: 768px)').matches
    if (reduceMotion || isMobile) return

    const ctx = gsap.context(() => {
      const scrollDistance = Math.max(0, scrollContainer.scrollWidth - window.innerWidth + 80)

      if (scrollDistance > 0) {
        gsap.to(scrollContainer, {
          x: -scrollDistance,
          ease: 'none',
          force3D: true,
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: () => `+=${scrollDistance}`,
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        })
      }
    }, section)

    const onResize = () => ScrollTrigger.refresh()
    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
      ctx.revert()
    }
  }, [])

  return (
    <section ref={sectionRef} className="overflow-hidden bg-sand-light" id="destinations">
      <div className="mx-auto max-w-7xl px-5 pt-24 pb-8">
        <FadeUp>
          <SectionHeader
            eyebrow="Destinations"
            title="Destinations with purpose, planning, and support."
            description="Explore confirmed travel points across our Somalia airport network and beyond."
            align="left"
          />
        </FadeUp>
      </div>

      <div className="md:pb-24">
        <div
          ref={scrollContainerRef}
          className="flex flex-col gap-6 px-5 pb-24 md:flex-row md:px-[max(1.25rem,calc((100vw-80rem)/2))] md:pb-0"
        >
          {destinations.slice(0, 5).map((dest, i) => (
            <div key={dest.slug} className="w-full flex-shrink-0 md:w-[380px]">
              <FadeUp delay={i * 0.08}>
                <DestinationCard {...dest} />
              </FadeUp>
            </div>
          ))}
          <div className="hidden w-[10vw] flex-shrink-0 md:block" aria-hidden />
        </div>
      </div>
    </section>
  )
}
