'use client'

import { FadeUp } from '@/components/ui/FadeUp'
import { ImageReveal } from '@/components/ui/ImageReveal'
import Image from 'next/image'
import Link from 'next/link'
import { Plane, PlaneTakeoff, PlaneLanding, Users, Crown, MapPin, ArrowUpRight } from 'lucide-react'

const cards = [
  {
    icon: PlaneLanding,
    title: 'Arrival Assistance',
    desc: 'Meet and greet support for arriving passengers at Mogadishu airport.',
  },
  {
    icon: PlaneTakeoff,
    title: 'Departure Assistance',
    desc: 'Check-in guidance and departure support for outbound travelers.',
  },
  {
    icon: Users,
    title: 'Group Travel Support',
    desc: 'Coordinated group travel arrangements within Somalia.',
  },
  {
    icon: Crown,
    title: 'VIP Lounge Support',
    desc: 'VIP lounge access connected to Kamil Travel Mogadishu presence.',
  },
  {
    icon: MapPin,
    title: 'Local Airport Coordination',
    desc: 'Representatives across 6 local airports in Somalia.',
  },
]

const AIRPORT_IMAGE =
  'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=900&q=80'

export function AirportExperience() {
  return (
    <section className="section-padding bg-sand" id="airport-experience">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="relative">
            <ImageReveal
              className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-premium"
              direction="left"
            >
              <Image
                src={AIRPORT_IMAGE}
                alt="Mogadishu airport support — meet and assist services"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night/40 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 rounded-full bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-wider text-night">
                Mogadishu Airport
              </div>
            </ImageReveal>

            <div
              className="animate-float pointer-events-none absolute -right-3 -top-3 z-20 flex h-16 w-16 items-center justify-center rounded-2xl border border-gold/30 bg-gold shadow-glow sm:-right-5 sm:-top-5 sm:h-20 sm:w-20"
              aria-hidden
            >
              <Plane className="h-8 w-8 text-night sm:h-10 sm:w-10" />
            </div>
            <div
              className="animate-float-delayed pointer-events-none absolute -bottom-2 -left-2 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-night/80 backdrop-blur-sm sm:-bottom-4 sm:-left-4"
              aria-hidden
            >
              <PlaneTakeoff className="h-5 w-5 text-gold" />
            </div>
          </div>

          <div>
            <FadeUp>
              <p className="eyebrow">Mogadishu Airport Support</p>
              <h2 className="mb-6 font-display text-4xl font-semibold leading-[0.95] tracking-tight text-ink md:text-5xl">
                A smoother airport experience from arrival to departure.
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-ink-muted">
                Kamil Travel has a branch office at Mogadishu airport, supporting arriving and
                departing clients with meet and assist services and group travel arrangements within
                Somalia.
              </p>
            </FadeUp>

            <div className="space-y-3">
              {cards.map((card, i) => (
                <FadeUp key={card.title} delay={i * 0.08}>
                  <div className="flex items-center gap-4 rounded-2xl border border-border bg-surface p-4 transition-all hover:border-gold/30 hover:shadow-lg">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold">
                      <card.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-ink">{card.title}</h4>
                      <p className="text-xs text-ink-muted">{card.desc}</p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>

            <FadeUp delay={0.45}>
              <Link
                href="/services#meet-assist"
                className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-gold transition hover:gap-3"
              >
                Explore airport services <ArrowUpRight className="h-4 w-4" />
              </Link>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  )
}
