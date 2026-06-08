import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getTourBySlug, tours } from '@/lib/content'
import { Button } from '@/components/ui/Button'
import { TourCard } from '@/components/ui/TourCard'
import { Clock, MapPin, Check } from 'lucide-react'
import { TourRating } from '@/components/ui/TourRating'
import { TourItinerary } from '@/components/tours/TourItinerary'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return tours.map((tour) => ({ slug: tour.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const tour = getTourBySlug(slug)
  if (!tour) return { title: 'Package Not Found' }
  return {
    title: tour.title,
    description: tour.desc,
  }
}

export default async function TourDetailPage({ params }: Props) {
  const { slug } = await params
  const tour = getTourBySlug(slug)
  if (!tour) notFound()

  const related = tours.filter((t) => t.category === tour.category && t.slug !== tour.slug).slice(0, 3)
  const enquiryHref = `/contact?inquiry=Tour+Inquiry&message=${encodeURIComponent(`I am interested in: ${tour.title}`)}`

  return (
    <>
      <section className="page-banner tour-detail-hero relative overflow-hidden bg-night">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <Image
            src={tour.image}
            alt={tour.title}
            fill
            className="banner-photo object-cover object-center"
            priority
            quality={80}
            sizes="100vw"
          />
          <div className="page-banner-overlay absolute inset-0" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-5 py-8 md:py-10">
          <p className="font-kanila-script mb-1.5 text-[1.15rem] text-kamil-green-light md:text-[1.25rem]">
            {tour.category}
          </p>
          <h1 className="page-banner__title font-kanila-display text-[clamp(1.75rem,4.5vw,2.75rem)] font-normal leading-[1] tracking-tight text-white">
            {tour.title}
          </h1>
          <div className="mt-3">
            <TourRating
              rating={tour.rating ?? 4.5}
              reviewCount={tour.reviewCount ?? 2}
              dark
            />
          </div>
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-xs text-white/70 md:text-sm">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-gold" />
              {tour.destination}, {tour.country}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-gold" />
              {tour.duration}
            </span>
          </div>
          {(tour.interests?.length ?? 0) > 0 && (
            <ul className="mb-6 flex flex-wrap gap-2">
              {tour.interests!.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full bg-white/15 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white"
                >
                  {tag}
                </li>
              ))}
            </ul>
          )}
          <div className="flex flex-wrap gap-3">
            <Button href={enquiryHref} variant="primary" size="lg">
              Enquire About This Package
            </Button>
            <Link href="/tours" className="inline-flex items-center self-center text-sm font-bold text-gold hover:underline">
              ← All packages
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-sand-light">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl shadow-premium">
              <Image
                src={tour.image}
                alt={tour.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="mb-4 font-display text-3xl font-semibold text-ink">Package overview</h2>
              <p className="mb-8 text-lg leading-relaxed text-ink-muted">{tour.desc}</p>
              
              <div className="mb-10 border-t border-border/60 pt-8">
                <TourItinerary tour={tour} />
              </div>

              <h3 className="mb-4 text-sm font-extrabold uppercase tracking-wider text-gold">What&apos;s included</h3>
              <ul className="space-y-3">
                {tour.highlights.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-ink-muted">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                      <Check className="h-4 w-4" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-8 rounded-2xl border border-border bg-sand p-4 text-sm text-ink-muted">
                Pricing and availability are confirmed on enquiry. Kamil Travel coordinates flights, documentation,
                meet &amp; assist, and transfers based on your requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section-padding bg-sand">
          <div className="mx-auto max-w-7xl px-5">
            <h2 className="mb-10 font-display text-3xl font-semibold text-ink md:text-4xl">Related packages</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {related.map((t) => (
                <TourCard key={t.slug} {...t} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
