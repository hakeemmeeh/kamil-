'use client'

import { FadeUp } from '@/components/ui/FadeUp'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Briefcase, Users, Plane, HeadphonesIcon, Globe, Shield } from 'lucide-react'

const features = [
  { icon: Briefcase, title: 'Cost-effective travel planning', desc: 'Competitive rates and efficient booking management for corporate budgets.' },
  { icon: Users, title: 'Customized corporate support', desc: 'Tailored travel solutions for organizations of all sizes.' },
  { icon: Plane, title: 'Group travel coordination', desc: 'Seamless planning and logistics for team and group travel.' },
  { icon: Globe, title: 'Airline relationship support', desc: 'Leveraging established airline partnerships for better travel options.' },
  { icon: HeadphonesIcon, title: 'Emergency travel assistance', desc: 'Responsive support for urgent and unexpected travel situations.' },
  { icon: Shield, title: 'Professional service delivery', desc: 'Dependable, consistent travel management you can count on.' },
]

export function CorporateTravelSection() {
  return (
    <section className="section-padding bg-night" id="corporate-travel">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Text */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <FadeUp>
              <SectionHeader eyebrow="Corporate Travel" title="Travel management designed for organizations." description="Kamil Travel supports corporate clients with professional booking, coordinated travel planning, airport support, and proactive assistance for complex travel requirements." align="left" dark />
            </FadeUp>
            <FadeUp delay={0.2}>
              <a href="/corporate-travel" className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-[13px] font-extrabold uppercase tracking-[0.1em] text-night transition-all hover:bg-gold-dark hover:shadow-glow">
                Learn More
              </a>
            </FadeUp>
          </div>

          {/* Right: Feature cards */}
          <div className="space-y-4">
            {features.map((feature, i) => (
              <FadeUp key={feature.title} delay={i * 0.08}>
                <div className="group rounded-2xl bg-night-card border border-white/5 p-6 transition-all hover:border-gold/30 hover:bg-night-light">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold transition-colors group-hover:bg-gold group-hover:text-night">
                      <feature.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-white mb-1">{feature.title}</h3>
                      <p className="text-sm text-white/50 leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
