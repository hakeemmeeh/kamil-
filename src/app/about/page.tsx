import type { Metadata } from 'next'
import { about, vision, mission, coreValues } from '@/lib/content'
import { FadeUp } from '@/components/ui/FadeUp'
import { ImageReveal } from '@/components/ui/ImageReveal'
import { Button } from '@/components/ui/Button'
import { SectionHeader } from '@/components/ui/SectionHeader'
import Image from 'next/image'
import { Eye, Target, Users, Shield, Heart, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Kamil Travel — professional travel management for corporate and regional travelers in Kenya and Somalia.',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 bg-night overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1920&q=80')] bg-cover bg-center opacity-20" />
        <div className="relative z-10 mx-auto max-w-4xl px-5 text-center">
          <p className="eyebrow !text-white/60 justify-center before:!bg-surface/40">About Us</p>
          <h1 className="font-display text-5xl md:text-7xl font-semibold text-white leading-[0.95] tracking-tight mb-6">About Kamil Travel</h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">Professional travel management for corporate and regional travelers.</p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-sand-light">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <FadeUp>
                <p className="eyebrow">Our Story</p>
                <h2 className="font-display text-4xl md:text-5xl font-semibold text-ink leading-[0.95] tracking-tight mb-6">A decade of professional travel management.</h2>
                <p className="text-lg text-ink-muted leading-relaxed mb-6">{about.intro}</p>
                <p className="text-ink-muted leading-relaxed mb-6">{about.airportOffice}</p>
                <p className="text-ink-muted leading-relaxed mb-6">{about.airportRepresentatives}</p>
                <p className="text-ink-muted leading-relaxed">{about.airlineRelationships}</p>
              </FadeUp>
            </div>
            <ImageReveal className="relative aspect-[4/3] rounded-3xl overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=800&q=80" alt="Kamil Travel office" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
            </ImageReveal>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-surface">
        <div className="mx-auto max-w-5xl px-5">
          <FadeUp><SectionHeader eyebrow="Purpose" title="Our Vision & Mission" /></FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeUp>
              <div className="rounded-3xl bg-night p-8 md:p-10 h-full">
                <Eye className="h-8 w-8 text-gold mb-6" />
                <h3 className="font-display text-2xl font-semibold text-white mb-4">Vision</h3>
                <p className="text-lg text-white/70 leading-relaxed italic">{vision}</p>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="rounded-3xl bg-gold/10 border border-gold/20 p-8 md:p-10 h-full">
                <Target className="h-8 w-8 text-gold mb-6" />
                <h3 className="font-display text-2xl font-semibold text-ink mb-4">Mission</h3>
                <p className="text-lg text-ink-muted leading-relaxed italic">{mission}</p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="section-padding bg-sand">
        <div className="mx-auto max-w-7xl px-5">
          <FadeUp><SectionHeader eyebrow="Our Edge" title="What Makes Us Different" /></FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Users, title: 'Kenya & Somalia Focus', desc: 'Deep regional expertise across East Africa.' },
              { icon: Shield, title: 'Mogadishu Airport Office', desc: 'Branch office providing direct airport support.' },
              { icon: Target, title: 'Airport Representatives', desc: 'Presence in 6 local Somalia airports.' },
              { icon: Heart, title: 'Corporate Expertise', desc: 'Tailored travel management for organizations.' },
              { icon: Zap, title: 'Professional Staff', desc: 'Qualified and experienced travel professionals.' },
              { icon: Eye, title: 'Airline Relationships', desc: 'Strong partnerships with major airlines.' },
            ].map((item, i) => (
              <FadeUp key={item.title} delay={i * 0.08}>
                <div className="rounded-2xl bg-surface border border-border p-6 hover:border-gold/30 hover:shadow-lg transition-all h-full">
                  <item.icon className="h-8 w-8 text-gold mb-4" />
                  <h3 className="font-display text-xl font-semibold text-ink mb-2">{item.title}</h3>
                  <p className="text-sm text-ink-muted">{item.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-sand-light">
        <div className="mx-auto max-w-6xl px-5">
          <FadeUp><SectionHeader eyebrow="Core Values" title="What Guides Us" /></FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, i) => (
              <FadeUp key={value.title} delay={i * 0.08}>
                <div className="rounded-2xl bg-surface border border-border p-6 hover:border-gold/30 transition-all group h-full">
                  <span className="block font-display text-5xl font-bold text-gold/20 mb-4 group-hover:-translate-y-1 transition-transform">0{i + 1}</span>
                  <div className="w-8 h-0.5 bg-gold mb-4" />
                  <h3 className="font-display text-xl font-semibold text-ink mb-2">{value.title}</h3>
                  <p className="text-sm text-ink-muted">{value.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-night text-center">
        <div className="mx-auto max-w-3xl px-5">
          <FadeUp>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-white leading-[0.95] tracking-tight mb-6">Ready to travel with confidence?</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/contact" variant="primary" size="lg">Plan a Trip</Button>
              <Button href="/contact" variant="outline" size="lg">Contact Us</Button>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
