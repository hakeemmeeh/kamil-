import type { Metadata } from 'next'
import { PageBanner } from '@/components/shared/PageBanner'
import { InnerPageOverlap } from '@/components/shared/InnerPageOverlap'
import { site } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Kamil Travel privacy policy — how we handle your personal information.',
}

export default function PrivacyPage() {
  return (
    <>
      <PageBanner
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="How Kamil Travel collects, uses, and protects your information."
        imageKey="nairobi"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Privacy' }]}
      />

      <InnerPageOverlap bg="white">
        <section className="section-padding pt-14 md:pt-16">
          <div className="prose prose-neutral mx-auto max-w-3xl px-5">
            <p className="text-lg text-ink-muted">
              {site.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;) respects your privacy. This policy describes how we
              handle information when you contact us, subscribe to updates, or use our website at{' '}
              <a href={site.website} className="text-gold hover:underline">
                {site.website}
              </a>
              .
            </p>

            <h2 className="mt-10 font-kanila-display text-2xl font-normal text-ink">Information we collect</h2>
            <p className="text-ink-muted">
              When you submit a travel enquiry, newsletter signup, or contact form, we may collect your name, email,
              phone number, company name, travel preferences, and any message you provide.
            </p>

            <h2 className="mt-8 font-kanila-display text-2xl font-normal text-ink">How we use it</h2>
            <ul className="list-disc space-y-2 pl-6 text-ink-muted">
              <li>To respond to travel and corporate booking enquiries</li>
              <li>To coordinate flights, transfers, visas guidance, and related services</li>
              <li>To send newsletters and offers if you have opted in</li>
              <li>To improve our website and client service</li>
            </ul>

            <h2 className="mt-8 font-kanila-display text-2xl font-normal text-ink">Sharing</h2>
            <p className="text-ink-muted">
              We do not sell your personal information. We may share necessary details with airlines, hotels,
              transfer partners, and authorities only as required to fulfil your travel request.
            </p>

            <h2 className="mt-8 font-kanila-display text-2xl font-normal text-ink">Contact</h2>
            <p className="text-ink-muted">
              Questions about this policy:{' '}
              <a href={`mailto:${site.email}`} className="font-semibold text-gold hover:underline">
                {site.email}
              </a>
              . {site.address}
            </p>

            <p className="mt-10 text-sm italic text-ink-muted">
              [CLIENT TO REVIEW: full legal text with counsel before production launch.]
            </p>
          </div>
        </section>
      </InnerPageOverlap>
    </>
  )
}
