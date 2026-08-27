import { HeroSection } from '@/components/sections/home/hero/HeroSection'
import { TourSearchBar } from '@/components/tours/TourSearchBar'
import { BrandStatement } from '@/components/sections/home/BrandStatement'
import { SignatureServicesShowcase } from '@/components/sections/home/SignatureServicesShowcase'
import { TravelByRegionSection } from '@/components/sections/home/TravelByRegionSection'
import { PopularDestinationsSection } from '@/components/sections/home/PopularDestinationsSection'
import { FirstMinuteOffersSection } from '@/components/sections/home/FirstMinuteOffersSection'
import { StatsStrip } from '@/components/sections/home/StatsStrip'
import { TestimonialsSection } from '@/components/sections/home/TestimonialsSection'
import { ContactPreview } from '@/components/sections/home/ContactPreview'
import { CinematicCTA } from '@/components/sections/home/CinematicCTA'

/**
 * Phase 1 homepage — lean conversion path (~core sections only).
 */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TourSearchBar overlap />
      <BrandStatement />
      <SignatureServicesShowcase />
      <TravelByRegionSection />
      <PopularDestinationsSection />
      <FirstMinuteOffersSection />
      <StatsStrip />
      <TestimonialsSection />
      <ContactPreview />
      <CinematicCTA />
    </>
  )
}
