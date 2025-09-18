import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import StreaksSection from "@/components/StreaksSection";
import ConceptsSection from "@/components/ConceptsSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <FeaturesSection />
        <StreaksSection />
        <ConceptsSection />
      </main>
    </div>
  );
};

export default Index;
