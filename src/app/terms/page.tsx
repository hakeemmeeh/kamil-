import type { Metadata } from 'next'
import { PageBanner } from '@/components/shared/PageBanner'
import { InnerPageOverlap } from '@/components/shared/InnerPageOverlap'
import { site } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Kamil Travel terms of service for website use and travel enquiries.',
}

export default function TermsPage() {
  return (
    <>
      <PageBanner
        eyebrow="Legal"
        title="Terms of Service"
        subtitle="Terms governing use of our website and inquiry-based travel services."
        imageKey="international"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Terms' }]}
      />

      <InnerPageOverlap bg="white">
        <section className="section-padding pt-14 md:pt-16">
          <div className="prose prose-neutral mx-auto max-w-3xl px-5">
            <p className="text-lg text-ink-muted">
              By using {site.name}&apos;s website and services, you agree to these terms. Our bookings are handled by
              enquiry and confirmation with our team — not instant online checkout.
            </p>

            <h2 className="mt-10 font-kanila-display text-2xl font-normal text-ink">Services</h2>
            <p className="text-ink-muted">
              We provide travel management including air ticketing, meet &amp; assist, transfers, corporate travel,
              tour packages, and visa preparation guidance. Visa assistance does not constitute legal immigration advice
              or guarantee of approval.
            </p>

            <h2 className="mt-8 font-kanila-display text-2xl font-normal text-ink">Pricing &amp; availability</h2>
            <p className="text-ink-muted">
              Quotes, fares, and availability are confirmed in writing after enquiry. Prices may change until tickets
              or services are issued per supplier rules.
            </p>

            <h2 className="mt-8 font-kanila-display text-2xl font-normal text-ink">Client responsibilities</h2>
            <p className="text-ink-muted">
              You are responsible for valid passports, visas, health requirements, and accurate information provided for
              bookings. Late changes may incur airline or supplier fees.
            </p>

            <h2 className="mt-8 font-kanila-display text-2xl font-normal text-ink">Limitation of liability</h2>
            <p className="text-ink-muted">
              We act as an agent coordinating third-party suppliers. Liability is limited to the extent permitted by
              applicable law. [CLIENT TO REVIEW with legal counsel.]
            </p>

            <h2 className="mt-8 font-kanila-display text-2xl font-normal text-ink">Contact</h2>
            <p className="text-ink-muted">
              <a href={`mailto:${site.email}`} className="font-semibold text-gold hover:underline">
                {site.email}
              </a>{' '}
              · {site.phone}
            </p>
          </div>
        </section>
      </InnerPageOverlap>
    </>
  )
}
