import { HeroSection } from '@/components/sections/home/hero/HeroSection'
import { TourSearchBar } from '@/components/tours/TourSearchBar'
import { BrandStatement } from '@/components/sections/home/BrandStatement'
import { SignatureServicesShowcase } from '@/components/sections/home/SignatureServicesShowcase'
import { TravelByRegionSection } from '@/components/sections/home/TravelByRegionSection'
import { PopularDestinationsSection } from '@/components/sections/home/PopularDestinationsSection'
import { StatsStrip } from '@/components/sections/home/StatsStrip'
import { TestimonialsSection } from '@/components/sections/home/TestimonialsSection'
import { ContactPreview } from '@/components/sections/home/ContactPreview'
import { HomeFAQSection } from '@/components/sections/HomeFAQSection'

/**
 * Homepage — one destinations story (regions + leisure arches), one closer.
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
      <StatsStrip />
      <TestimonialsSection />
      <ContactPreview />
      <HomeFAQSection overlap={false} />
    </>
  )
}
