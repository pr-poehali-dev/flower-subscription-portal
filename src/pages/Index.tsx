import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SubscriptionPreview from "@/components/SubscriptionPreview";
import FlowerGallery from "@/components/FlowerGallery";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <SubscriptionPreview />
      <FlowerGallery />
      <Footer />
    </div>
  );
};

export default Index;
