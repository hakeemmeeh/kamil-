'use client'

import { FadeUp } from '@/components/ui/FadeUp'
import { ImageReveal } from '@/components/ui/ImageReveal'
import { TextReveal } from '@/components/ui/TextReveal'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export function BrandStatement() {
  return (
    <section className="section-padding bg-sand-light" id="brand-statement">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div>
            <FadeUp>
              <p className="eyebrow">About Kamil Travel</p>
            </FadeUp>
            <TextReveal
              tag="h2"
              className="mb-8 font-display text-4xl font-semibold leading-[0.95] tracking-tight text-ink md:text-5xl lg:text-[56px]"
            >
              Built for travelers who need more than a ticket.
            </TextReveal>
            <FadeUp delay={0.2}>
              <p className="mb-8 text-lg leading-relaxed text-ink-muted">
                Kamil Travel provides cost-effective, customized, and comprehensive travel management
                services for corporate clientele in Kenya and Somalia. With strong regional knowledge
                and airport support in Somalia, the company helps clients move with greater confidence,
                convenience, and care.
              </p>
            </FadeUp>
            <FadeUp delay={0.3}>
              <div className="mb-8 inline-flex items-center gap-3 rounded-2xl border border-gold/20 bg-gold/10 px-5 py-3">
                <span className="font-display text-3xl font-bold text-gold">10+</span>
                <span className="text-sm font-semibold text-ink-muted">
                  Years Industry
                  <br />
                  Experience
                </span>
              </div>
            </FadeUp>
            <FadeUp delay={0.35}>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-bold text-gold transition hover:gap-3"
              >
                Learn more about us <ArrowUpRight className="h-4 w-4" />
              </Link>
            </FadeUp>
          </div>

          <div className="grid grid-cols-2 items-center gap-5 sm:gap-6">
            <div className="relative aspect-[3/4] w-full pt-3 pl-3 sm:pt-4 sm:pl-4">
              <div className="pointer-events-none absolute left-0 top-0 z-0 h-full w-full rounded-t-full rounded-b-3xl border border-gold/60" />
              <ImageReveal
                className="relative z-10 h-full w-full rounded-t-full rounded-b-3xl shadow-2xl"
                direction="left"
              >
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src="https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=700&q=80"
                    alt="Kamil Travel — airport and travel services"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 45vw, 280px"
                  />
                </div>
              </ImageReveal>
            </div>

            <ImageReveal
              className="relative mt-12 aspect-[3/4] w-full overflow-hidden rounded-tl-[80px] rounded-br-[80px] rounded-tr-xl rounded-bl-xl shadow-premium sm:mt-16 sm:rounded-tl-[100px] sm:rounded-br-[100px]"
              direction="right"
            >
              <Image
                src="https://images.unsplash.com/photo-1488085061387-422e29b40080?w=700&q=80"
                alt="Premium travel experience with Kamil Travel"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 45vw, 280px"
              />
            </ImageReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
