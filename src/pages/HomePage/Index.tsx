import ContactUs from "components/ContactUs/ContactUs";
import FaqSection from "components/FaqSection/FaqSection";
import Features from "components/Features/Feature";
import FooterSection from "components/Footer/Footer";
import HeroSection from "components/HeroSection/HeroSection";
import NavBar from "components/NavBar/NavBar";
import PricingSection from "components/Pricing/Pricing";

function HomePage() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <Features />
      <PricingSection />
      <ContactUs />
      <FaqSection />
      <FooterSection />
    </div>
  );
}

export default HomePage;
