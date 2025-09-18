import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center pt-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <img
            src="https://uploads.onecompiler.io/435u35p2a/43wyy99m5/Gemini_Generated_Image_90439t90439t9043.png"
            alt="Interactive Learning"
            className="w-full max-w-2xl h-auto mx-auto mb-8 rounded-2xl shadow-glow animate-float hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="space-y-6 animate-slide-in-left" style={{ animationDelay: "0.3s" }}>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
            Interactive Learning that's{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              effective
            </span>{" "}
            and{" "}
            <span className="bg-gradient-to-r from-accent to-accent-glow bg-clip-text text-transparent">
              fun
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Get smarter in 15 minutes a day with personalized, AI-powered learning experiences.
          </p>

          <div className="pt-8">
            <Button 
              variant="hero" 
              size="xl" 
              className="animate-glow hover:animate-none transition-all duration-500"
            >
              Start Learning Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;