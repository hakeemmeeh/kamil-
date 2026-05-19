'use client'

import { FadeUp } from '@/components/ui/FadeUp'
import { ImageReveal } from '@/components/ui/ImageReveal'
import { TextReveal } from '@/components/ui/TextReveal'
import Image from 'next/image'

export function BrandStatement() {
  return (
    <section className="section-padding bg-sand-light" id="brand-statement">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <FadeUp>
              <p className="eyebrow">About Kamil Travel</p>
            </FadeUp>
            <TextReveal tag="h2" className="font-display text-4xl md:text-5xl lg:text-[56px] font-semibold text-ink leading-[0.95] tracking-tight mb-8">
              Built for travelers who need more than a ticket.
            </TextReveal>
            <FadeUp delay={0.2}>
              <p className="text-lg text-ink-muted leading-relaxed mb-8">
                Kamil Travel provides cost-effective, customized, and comprehensive travel management services for corporate clientele in Kenya and Somalia. With strong regional knowledge and airport support in Somalia, the company helps clients move with greater confidence, convenience, and care.
              </p>
            </FadeUp>
            <FadeUp delay={0.3}>
              <div className="inline-flex items-center gap-3 rounded-2xl bg-gold/10 px-5 py-3 border border-gold/20">
                <span className="text-3xl font-display font-bold text-gold">10+</span>
                <span className="text-sm font-semibold text-ink-muted">Years Industry<br />Experience</span>
              </div>
            </FadeUp>
          </div>

          {/* Right: Images */}
          <div className="grid grid-cols-2 gap-6 relative items-center">
            {/* Editorial Framed Shape */}
            <div className="relative aspect-[3/4] w-full pt-4 pl-4 h-[90%]">
              {/* Gold Offset Frame */}
              <div className="absolute top-0 left-0 w-full h-full border border-gold/60 rounded-t-full rounded-b-3xl z-0 pointer-events-none"></div>
              {/* Image */}
              <ImageReveal className="relative w-full h-full rounded-t-full rounded-b-3xl overflow-hidden shadow-2xl z-10" direction="left">
                <Image src="https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=600&q=80" alt="Airport terminal" fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
              </ImageReveal>
            </div>

            {/* Asymmetric Geometric Cut-out */}
            <ImageReveal className="relative aspect-[3/4] overflow-hidden rounded-tl-[100px] rounded-br-[100px] rounded-tr-xl rounded-bl-xl shadow-premium mt-16" direction="right">
              <Image src="https://images.unsplash.com/photo-1488085061387-422e29b40080?w=600&q=80" alt="Travel experience" fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
            </ImageReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
