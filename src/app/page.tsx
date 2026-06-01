import { HeroSection } from '@/components/sections/HeroSection'
import { TourSearchBar } from '@/components/tours/TourSearchBar'
import { CelebrateSection } from '@/components/sections/CelebrateSection'
import { BrandStatement } from '@/components/sections/BrandStatement'
import { ExploreActivitiesSection } from '@/components/sections/ExploreActivitiesSection'
import { SignatureServicesShowcase } from '@/components/sections/SignatureServicesShowcase'
import { TravelByRegionSection } from '@/components/sections/TravelByRegionSection'
import { PopularDestinationsSection } from '@/components/sections/PopularDestinationsSection'
import { StatsStrip } from '@/components/sections/StatsStrip'
import { FirstMinuteOffersSection } from '@/components/sections/FirstMinuteOffersSection'
import { CuratedJourneysSection } from '@/components/sections/CuratedJourneysSection'
import { TravelTipsSection } from '@/components/sections/TravelTipsSection'
import { HomeFAQSection } from '@/components/sections/HomeFAQSection'
import { KamilServicesTeaser } from '@/components/sections/KamilServicesTeaser'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { NewsletterSection } from '@/components/sections/NewsletterSection'
import { ContactPreview } from '@/components/sections/ContactPreview'
import { CinematicCTA } from '@/components/sections/CinematicCTA'
/**
 * Kanila Home 3 core + Kamil legacy parity (search, offers, contact, newsletter).
 */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TourSearchBar overlap />
      <CelebrateSection compact />
      <BrandStatement />

      <ExploreActivitiesSection />

      <SignatureServicesShowcase />

      <TravelByRegionSection />
      <PopularDestinationsSection />

      <TestimonialsSection />

      <StatsStrip />
      <FirstMinuteOffersSection />
      <CuratedJourneysSection />

      <TravelTipsSection />
      <HomeFAQSection />

      <KamilServicesTeaser />

      <NewsletterSection />
      <ContactPreview />
      <CinematicCTA />
    </>
  )
}
