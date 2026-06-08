import { HeroSection } from '@/components/sections/home/hero/HeroSection'
import { TourSearchBar } from '@/components/tours/TourSearchBar'
import { CelebrateSection } from '@/components/sections/home/CelebrateSection'
import { BrandStatement } from '@/components/sections/home/BrandStatement'
import { ExploreActivitiesSection } from '@/components/sections/home/ExploreActivitiesSection'
import { SignatureServicesShowcase } from '@/components/sections/home/SignatureServicesShowcase'
import { TravelByRegionSection } from '@/components/sections/home/TravelByRegionSection'
import { PopularDestinationsSection } from '@/components/sections/home/PopularDestinationsSection'
import { StatsStrip } from '@/components/sections/home/StatsStrip'
import { FirstMinuteOffersSection } from '@/components/sections/home/FirstMinuteOffersSection'
import { CuratedJourneysSection } from '@/components/sections/home/CuratedJourneysSection'
import { TravelTipsSection } from '@/components/sections/TravelTipsSection'
import { HomeFAQSection } from '@/components/sections/HomeFAQSection'
import { KamilServicesTeaser } from '@/components/sections/home/KamilServicesTeaser'
import { TestimonialsSection } from '@/components/sections/home/TestimonialsSection'
import { NewsletterSection } from '@/components/sections/home/NewsletterSection'
import { ContactPreview } from '@/components/sections/home/ContactPreview'
import { CinematicCTA } from '@/components/sections/home/CinematicCTA'
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
