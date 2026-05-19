'use client'

import { FadeUp } from '@/components/ui/FadeUp'
import { ImageReveal } from '@/components/ui/ImageReveal'
import Image from 'next/image'
import { PlaneTakeoff, PlaneLanding, Users, Crown, MapPin } from 'lucide-react'

const cards = [
  { icon: PlaneLanding, title: 'Arrival Assistance', desc: 'Meet and greet support for arriving passengers at Mogadishu airport.' },
  { icon: PlaneTakeoff, title: 'Departure Assistance', desc: 'Check-in guidance and departure support for outbound travelers.' },
  { icon: Users, title: 'Group Travel Support', desc: 'Coordinated group travel arrangements within Somalia.' },
  { icon: Crown, title: 'VIP Lounge Support', desc: 'VIP lounge access connected to Kamil Travel Mogadishu presence.' },
  { icon: MapPin, title: 'Local Airport Coordination', desc: 'Representatives across 6 local airports in Somalia.' },
]

export function AirportExperience() {
  return (
    <section className="section-padding bg-sand" id="airport-experience">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <ImageReveal className="relative aspect-[4/3] rounded-3xl overflow-hidden" direction="left">
            <Image src="https://images.unsplash.com/photo-1529074963764-98f45c47344b?w=800&q=80" alt="Airport terminal" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
          </ImageReveal>

          {/* Content */}
          <div>
            <FadeUp>
              <p className="eyebrow">Mogadishu Airport Support</p>
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-ink leading-[0.95] tracking-tight mb-6">
                A smoother airport experience from arrival to departure.
              </h2>
              <p className="text-lg text-ink-muted leading-relaxed mb-10">
                Kamil Travel has a branch office at Mogadishu airport, supporting arriving and departing clients with meet and assist services and group travel arrangements within Somalia.
              </p>
            </FadeUp>

            <div className="space-y-3">
              {cards.map((card, i) => (
                <FadeUp key={card.title} delay={i * 0.08}>
                  <div className="flex items-center gap-4 rounded-2xl bg-surface p-4 border border-border transition-all hover:border-gold/30 hover:shadow-lg">
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
          </div>
        </div>
      </div>
    </section>
  )
}
