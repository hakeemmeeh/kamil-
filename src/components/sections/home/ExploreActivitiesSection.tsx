'use client'

import { PhotoFeatureGrid } from '@/components/shared/PhotoFeatureGrid'

const activities = [
  {
    imageKey: 'thailand' as const,
    title: 'Adventure',
    href: '/tours?interest=Adventure',
  },
  {
    imageKey: 'greece' as const,
    title: 'Cultural Tours',
    href: '/tours',
  },
  {
    imageKey: 'thailandTemple' as const,
    title: 'City Breaks',
    href: '/tours',
  },
]

/** Kanila Home 3 — Explore Activities (script eyebrow + 3 arched cards) */
export function ExploreActivitiesSection() {
  return (
    <PhotoFeatureGrid
      layout="split"
      eyebrow="Travel Your Way"
      title="Explore Activities"
      items={activities}
      bgClassName="section-padding bg-cream"
      ctaHref="/tours"
      ctaLabel="View"
    />
  )
}
