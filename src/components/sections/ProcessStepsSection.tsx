'use client'

import { processSteps } from '@/lib/content'
import { LineReveal } from '@/components/ui/LineReveal'

export function ProcessStepsSection() {
  return (
    <section className="section-padding bg-sand-light" id="process">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mb-14 text-center md:mb-16">
          <p className="animate-eyebrow eyebrow mb-6 justify-center">How We Work</p>
          <LineReveal
            tag="h2"
            align="center"
            className="mx-auto max-w-3xl font-kanila-display text-4xl font-normal leading-[0.95] tracking-tight text-ink md:text-5xl"
          >
            {`From Inquiry to\nDeparture — Five Steps`}
          </LineReveal>
        </div>

        <div className="relative">
          <div
            className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent md:block"
            aria-hidden
          />

          <div
            data-stagger="process"
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5"
          >
            {processSteps.map((item) => (
              <div key={item.step} data-stagger-item className="relative text-center lg:text-left">
                <div className="relative z-10 mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-gold/30 bg-white shadow-md lg:mx-0 dark:bg-surface">
                  <span className="font-display text-lg font-bold text-gold">{item.step}</span>
                </div>
                <h3 className="mb-2 font-display text-xl font-semibold text-ink">{item.title}</h3>
                <p className="text-sm leading-relaxed text-ink-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
