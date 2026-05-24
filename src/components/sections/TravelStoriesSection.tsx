'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { travelStories } from '@/lib/content'
import { LineReveal } from '@/components/ui/LineReveal'

export function TravelStoriesSection() {
  return (
    <section className="section-padding bg-surface" id="travel-stories">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mb-12 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="animate-eyebrow eyebrow mb-6">Travel Insights</p>
            <LineReveal
              tag="h2"
              className="font-display text-4xl font-semibold leading-[0.95] tracking-tight text-ink md:text-5xl"
            >
              Stories From the Road
            </LineReveal>
          </div>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-sm font-bold text-gold transition hover:gap-3"
          >
            About Kamil Travel <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div
          data-stagger="stories"
          className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6"
        >
          {travelStories.map((story) => (
            <article
              key={story.slug}
              data-stagger-item
              className="group overflow-hidden rounded-3xl border border-border bg-white shadow-lg transition-all duration-500 hover:-translate-y-1 hover:shadow-premium dark:bg-night-card"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <p className="mb-2 text-[10px] font-extrabold uppercase tracking-[0.14em] text-gold">
                  {story.category}
                </p>
                <h3 className="mb-3 font-display text-xl font-semibold leading-snug text-ink dark:text-white">
                  {story.title}
                </h3>
                <p className="mb-5 text-sm leading-relaxed text-ink-muted dark:text-white/60">
                  {story.excerpt}
                </p>
                <Link
                  href={story.href}
                  className="inline-flex items-center gap-2 text-sm font-bold text-gold transition hover:gap-3"
                >
                  Read more <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
