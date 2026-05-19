'use client'

import { useState } from 'react'
import { FadeUp } from '@/components/ui/FadeUp'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Button } from '@/components/ui/Button'
import { ChevronDown } from 'lucide-react'

const reasons = [
  { title: 'Corporate travel expertise', desc: 'Years of experience managing complex corporate travel needs across East Africa and beyond.' },
  { title: 'Somalia airport support', desc: 'Branch office at Mogadishu airport and representatives across 6 local airports.' },
  { title: 'Meet & assist services', desc: 'Professional arrival and departure assistance designed for traveler comfort.' },
  { title: 'Group travel coordination', desc: 'Seamless logistics and planning for team and organizational travel.' },
  { title: 'Competitive travel management', desc: 'Cost-effective solutions without compromising on service quality.' },
  { title: 'Responsive assistance', desc: '24-hour support for urgent travel situations and client needs.' },
]

export function WhyKamil() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="section-padding bg-white" id="why-kamil">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <FadeUp>
              <SectionHeader eyebrow="Why Kamil" title="Every journey deserves planning, presence, and peace of mind." align="left" />
            </FadeUp>
            <FadeUp delay={0.2}>
              <Button href="/contact" variant="primary" arrow>Plan a Trip</Button>
            </FadeUp>
          </div>

          <div className="space-y-3">
            {reasons.map((reason, i) => (
              <FadeUp key={reason.title} delay={i * 0.06}>
                <div className={`rounded-2xl border transition-all cursor-pointer ${openIndex === i ? 'border-gold/30 bg-gold/5' : 'border-border bg-sand-light hover:border-gold/20'}`}
                  onClick={() => setOpenIndex(openIndex === i ? -1 : i)}>
                  <div className="flex items-center justify-between p-5">
                    <h3 className="font-display text-lg font-semibold text-ink">{reason.title}</h3>
                    <ChevronDown className={`h-5 w-5 text-gold transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
                  </div>
                  <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-40 pb-5 px-5' : 'max-h-0'}`}>
                    <p className="text-sm text-ink-muted leading-relaxed">{reason.desc}</p>
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
