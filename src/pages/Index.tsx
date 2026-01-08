import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesIntro from "@/components/FeaturesIntro";
import BenefitsSection from "@/components/BenefitsSection";
import ProductsSection from "@/components/ProductsSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import BotsSection from "@/components/BotsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturesIntro />
      <BenefitsSection />
      <ProductsSection />
      <WhyChooseSection />
      <BotsSection />
      <Footer />
    </div>
  );
};

export default Index;
