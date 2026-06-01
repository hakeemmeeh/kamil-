'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { homeFaqs } from '@/lib/content'
import { FadeUp } from '@/components/ui/FadeUp'
import { cn } from '@/lib/utils'

export function HomeFAQSection() {
  const [open, setOpen] = useState(0)

  return (
    <section
      className="relative z-40 -mt-[min(12vh,140px)] overflow-hidden rounded-t-[2.5rem] bg-white shadow-[0_-24px_60px_rgba(7,17,31,0.08)]"
      id="faq"
    >
      <div className="absolute left-0 right-0 top-0 z-10 h-1 bg-gold" aria-hidden />

      <div className="relative px-5 py-20 md:py-28">
        <div className="mx-auto max-w-3xl">
          <FadeUp>
            <p className="font-kanila-script mb-3 text-center text-[1.5rem] text-kanila-orange md:text-[1.65rem]">
              Questions
            </p>
            <h2 className="text-center font-kanila-display text-[2.25rem] font-normal leading-[0.95] tracking-tight text-ink md:text-[2.75rem]">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-center text-base text-ink-muted">
              Quick answers about booking, corporate travel, Somalia airport support, and how we work.
            </p>
          </FadeUp>

          <div className="mt-10 space-y-3">
            {homeFaqs.map((item, i) => (
              <FadeUp key={item.q} delay={i * 0.05}>
                <div
                  className={cn(
                    'overflow-hidden rounded-2xl border bg-sand-light transition-colors',
                    open === i ? 'border-gold/40 shadow-md' : 'border-border'
                  )}
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left md:px-6 md:py-5"
                    onClick={() => setOpen(open === i ? -1 : i)}
                    aria-expanded={open === i}
                  >
                    <span className="font-kanila-display text-lg font-normal text-ink md:text-xl">
                      {item.q}
                    </span>
                    <ChevronDown
                      className={cn(
                        'h-5 w-5 shrink-0 text-kanila-orange transition-transform duration-300',
                        open === i && 'rotate-180'
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      'grid transition-[grid-template-rows] duration-300 ease-out',
                      open === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="border-t border-border px-5 pb-5 pt-3 text-sm leading-relaxed text-ink-muted md:px-6">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.2}>
            <p className="mt-8 text-center text-sm text-ink-muted">
              Still have questions?{' '}
              <Link href="/contact" className="font-bold text-kanila-orange hover:underline">
                Contact our team
              </Link>
            </p>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
