import Features from 'components/Features/Feature'
import HeroSection from 'components/HeroSection/HeroSection'
import NavBar from 'components/NavBar/NavBar'
import PricingSection from 'components/Pricing/Pricing'

function HomePage() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <Features />
      <PricingSection />
      <div>Home</div>
    </div>
  )
}

export default HomePage
