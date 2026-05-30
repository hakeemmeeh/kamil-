import { HeroSection } from '@/components/sections/HeroSection'
import { CelebrateSection } from '@/components/sections/CelebrateSection'
import { BrandStatement } from '@/components/sections/BrandStatement'
import { SignatureServicesShowcase } from '@/components/sections/SignatureServicesShowcase'
import { TravelByRegionSection } from '@/components/sections/TravelByRegionSection'
import { PopularDestinationsSection } from '@/components/sections/PopularDestinationsSection'
import { StatsStrip } from '@/components/sections/StatsStrip'
import { CuratedJourneysSection } from '@/components/sections/CuratedJourneysSection'
import { TravelTipsSection } from '@/components/sections/TravelTipsSection'
import { HomeFAQSection } from '@/components/sections/HomeFAQSection'
import { KamilServicesTeaser } from '@/components/sections/KamilServicesTeaser'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { CinematicCTA } from '@/components/sections/CinematicCTA'
import { HomeScrollEffects } from '@/components/sections/HomeScrollEffects'

/**
 * Kanila Home 3 core + Kamil essentials (teasers link to full sections on inner pages).
 */
export default function HomePage() {
  return (
    <>
      <HomeScrollEffects />

      <HeroSection />
      <CelebrateSection compact />
      <BrandStatement />

      <SignatureServicesShowcase />

      <TravelByRegionSection />
      <PopularDestinationsSection />

      <StatsStrip />
      <CuratedJourneysSection />

      <TravelTipsSection />
      <HomeFAQSection />

      <KamilServicesTeaser />

      <TestimonialsSection />
      <CinematicCTA />
    </>
  )
}
