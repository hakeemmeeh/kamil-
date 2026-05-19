import { HeroSection } from '@/components/sections/HeroSection'
import { BookingSearch } from '@/components/sections/BookingSearch'
import { BrandStatement } from '@/components/sections/BrandStatement'
import { SignatureServices } from '@/components/sections/SignatureServices'
import { CorporateTravelSection } from '@/components/sections/CorporateTravelSection'
import { AirportExperience } from '@/components/sections/AirportExperience'
import { DestinationsPreview } from '@/components/sections/DestinationsPreview'
import { WhyKamil } from '@/components/sections/WhyKamil'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { CinematicCTA } from '@/components/sections/CinematicCTA'
import { ContactPreview } from '@/components/sections/ContactPreview'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BookingSearch />
      <BrandStatement />
      <SignatureServices />
      <CorporateTravelSection />
      <AirportExperience />
      <DestinationsPreview />
      <WhyKamil />
      <TestimonialsSection />
      <CinematicCTA />
      <ContactPreview />
    </>
  )
}
