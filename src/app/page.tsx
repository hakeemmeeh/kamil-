import { HeroSection } from '@/components/sections/HeroSection'
import { CelebrateSection } from '@/components/sections/CelebrateSection'
import { BrandStatement } from '@/components/sections/BrandStatement'
import { BookingSearch } from '@/components/sections/BookingSearch'
import { SignatureServices } from '@/components/sections/SignatureServices'
import { TravelByRegionSection } from '@/components/sections/TravelByRegionSection'
import { PopularDestinationsSection } from '@/components/sections/PopularDestinationsSection'
import { StatsStrip } from '@/components/sections/StatsStrip'
import { CuratedJourneysSection } from '@/components/sections/CuratedJourneysSection'
import { CorporateTravelSection } from '@/components/sections/CorporateTravelSection'
import { AirportExperience } from '@/components/sections/AirportExperience'
import { SomaliaRepresentativeNetwork } from '@/components/sections/SomaliaRepresentativeNetwork'
import { WhyKamil } from '@/components/sections/WhyKamil'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { TrustPartnersStrip } from '@/components/sections/TrustPartnersStrip'
import { CinematicCTA } from '@/components/sections/CinematicCTA'
import { HomeScrollEffects } from '@/components/sections/HomeScrollEffects'

/**
 * Kanila Home 3 structure + Kamil critical sections (services, booking, corporate, airport, tours).
 * DestinationsPreview omitted on home (hero arches + Popular cover the same ground).
 */
export default function HomePage() {
  return (
    <>
      <HomeScrollEffects />

      {/* Kanila Home 3 core */}
      <HeroSection />
      <CelebrateSection />
      <BrandStatement />

      {/* Kamil — inquiry & services */}
      <BookingSearch />
      <SignatureServices />

      <TravelByRegionSection />
      <PopularDestinationsSection />

      <StatsStrip />
      <CuratedJourneysSection />
      <CorporateTravelSection />
      <AirportExperience />
      <SomaliaRepresentativeNetwork />

      <WhyKamil />
      <TestimonialsSection />
      <TrustPartnersStrip />
      <CinematicCTA />
    </>
  )
}
