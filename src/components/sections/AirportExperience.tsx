'use client'

import { useLayoutEffect, useRef } from 'react'
import { FadeUp } from '@/components/ui/FadeUp'
import { ImageReveal } from '@/components/ui/ImageReveal'
import Image from 'next/image'
import Link from 'next/link'
import { Plane, PlaneTakeoff, PlaneLanding, Crown, Car, ArrowUpRight } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { prefersReducedMotion } from '@/lib/animations'

gsap.registerPlugin(ScrollTrigger)

const cards = [
  {
    icon: PlaneLanding,
    title: 'Arrival',
    desc: 'Meet and greet support for arriving passengers at Mogadishu airport.',
  },
  {
    icon: Plane,
    title: 'Meet & Assist',
    desc: 'Dedicated representatives guiding you through airport procedures.',
  },
  {
    icon: Crown,
    title: 'VIP Lounge',
    desc: 'VIP lounge access connected to Kamil Travel Mogadishu presence.',
  },
  {
    icon: Car,
    title: 'Transfer',
    desc: 'Ground transfer coordination from airport to your destination.',
  },
  {
    icon: PlaneTakeoff,
    title: 'Departure',
    desc: 'Check-in guidance and departure support for outbound travelers.',
  },
]

const AIRPORT_IMAGE =
  'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=900&q=80'

export function AirportExperience() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsTrackRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const section = sectionRef.current
    const cardsTrack = cardsTrackRef.current
    if (!section || !cardsTrack) return

    const reduceMotion = prefersReducedMotion()
    const isMobile = window.matchMedia('(max-width: 1023px)').matches
    if (reduceMotion || isMobile) return

    const ctx = gsap.context(() => {
      const scrollDistance = Math.max(0, cardsTrack.scrollWidth - cardsTrack.clientWidth + 40)

      if (scrollDistance > 0) {
        gsap.to(cardsTrack, {
          x: -scrollDistance,
          ease: 'none',
          force3D: true,
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: () => `+=${scrollDistance + 200}`,
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
    <section className="section-padding bg-sand" id="airport-experience" ref={sectionRef}>
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,420px)_1fr] lg:gap-16">
          {/* Left: pinned text on desktop */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <FadeUp>
              <p className="eyebrow">Mogadishu Airport Experience</p>
              <h2 className="mb-6 font-kanila-display text-4xl font-normal leading-[0.95] tracking-tight text-ink md:text-5xl">
                A smoother airport experience from arrival to departure.
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-ink-muted">
                Kamil Travel has a branch office at Mogadishu airport, supporting arriving and
                departing clients with meet and assist services and group travel arrangements within
                Somalia.
              </p>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="relative mb-8 hidden lg:block">
                <ImageReveal
                  className="relative aspect-[4/3] w-full overflow-hidden rounded-4xl shadow-premium"
                  direction="left"
                >
                  <Image
                    src={AIRPORT_IMAGE}
                    alt="Mogadishu airport support — meet and assist services"
                    fill
                    className="object-cover"
                    sizes="420px"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-night/25 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 rounded-full bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-wider text-night">
                    Mogadishu Airport
                  </div>
                </ImageReveal>
              </div>
            </FadeUp>

            <FadeUp delay={0.3}>
              <Link
                href="/services#meet-assist"
                className="inline-flex items-center gap-2 text-sm font-bold text-gold transition-all hover:gap-3"
              >
                Explore airport services <ArrowUpRight className="h-4 w-4" />
              </Link>
            </FadeUp>
          </div>

          {/* Right: horizontal scroll cards on desktop, vertical on mobile */}
          <div className="overflow-hidden">
            <div
              ref={cardsTrackRef}
              className="flex flex-col gap-4 lg:flex-row lg:gap-5 lg:pr-5"
            >
              {cards.map((card, i) => (
                <div
                  key={card.title}
                  className="w-full shrink-0 lg:w-[300px]"
                >
                  <FadeUp delay={i * 0.08}>
                    <div className="group flex h-full flex-col rounded-3xl border border-border bg-surface p-6 transition-all duration-500 hover:-translate-y-1 hover:border-gold/30 hover:shadow-premium">
                      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold transition-colors group-hover:bg-gold group-hover:text-night">
                        <card.icon className="h-5 w-5" />
                      </div>
                      <h4 className="mb-2 font-display text-xl font-semibold text-ink">{card.title}</h4>
                      <p className="text-sm leading-relaxed text-ink-muted">{card.desc}</p>
                    </div>
                  </FadeUp>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile airport image */}
        <div className="relative mt-12 lg:hidden">
          <ImageReveal
            className="relative aspect-[4/3] w-full overflow-hidden rounded-4xl shadow-premium"
            direction="left"
          >
            <Image
              src={AIRPORT_IMAGE}
              alt="Mogadishu airport support — meet and assist services"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 420px"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-night/25 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 rounded-full bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-wider text-night">
              Mogadishu Airport
            </div>
          </ImageReveal>
        </div>
      </div>
    </section>
  )
}
