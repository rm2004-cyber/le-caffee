import HeroSection from '@/components/sections/HeroSection'
import FeaturedSection from '@/components/sections/FeaturedSection'
import AboutSection from '@/components/sections/AboutSection'
import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <FeaturedSection />
        <AboutSection />
        <WhyChooseUsSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </>
  )
}
