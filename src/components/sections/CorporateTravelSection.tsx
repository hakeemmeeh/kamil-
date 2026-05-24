'use client'

import Link from 'next/link'
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
    <section className="section-padding bg-sand-light" id="corporate-travel">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Text */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <FadeUp>
              <SectionHeader eyebrow="Corporate Travel" title="Travel management designed for organizations." description="Kamil Travel supports corporate clients with professional booking, coordinated travel planning, airport support, and proactive assistance for complex travel requirements." align="left" />
            </FadeUp>
            <FadeUp delay={0.2}>
              <Link href="/corporate-travel" className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-[13px] font-extrabold uppercase tracking-[0.1em] text-white transition-all hover:bg-gold-dark hover:shadow-glow">
                Learn More
              </Link>
            </FadeUp>
          </div>

          {/* Right: Feature cards */}
          <div className="space-y-4">
            {features.map((feature, i) => (
              <FadeUp key={feature.title} delay={i * 0.08}>
                <div className="group rounded-2xl border border-border bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-gold/40 hover:shadow-premium">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold transition-colors group-hover:bg-gold group-hover:text-white">
                      <feature.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-display text-lg font-semibold text-ink">{feature.title}</h3>
                      <p className="text-sm leading-relaxed text-ink-muted">{feature.desc}</p>
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
