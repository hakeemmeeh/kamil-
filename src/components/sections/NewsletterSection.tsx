'use client'

import { FadeUp } from '@/components/ui/FadeUp'
import { NewsletterForm } from '@/components/ui/NewsletterForm'
import { newsletter } from '@/lib/content'

export function NewsletterSection() {
  return (
    <section className="section-padding bg-sand" id="newsletter">
      <div className="mx-auto max-w-3xl px-5 text-center">
        <FadeUp>
          <p className="eyebrow justify-center">Stay Connected</p>
          <h2 className="mb-4 font-display text-4xl font-semibold leading-[0.95] tracking-tight text-ink md:text-5xl">
            {newsletter.title}
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-lg leading-relaxed text-ink-muted">
            {newsletter.subtitle}
          </p>
        </FadeUp>
        <FadeUp delay={0.15}>
          <NewsletterForm />
          <p className="mt-4 text-xs text-ink-muted">{newsletter.disclaimer}</p>
        </FadeUp>
      </div>
    </section>
  )
}
