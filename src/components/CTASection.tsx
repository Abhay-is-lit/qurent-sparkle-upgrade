import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="animate-gentle-fade">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Ready to{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Transform
            </span>{" "}
            Your Learning?
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Join thousands of learners who are already mastering new skills with our AI-powered platform.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-smooth-rise">
          <Button variant="hero" size="xl" className="group animate-subtle-glow">
            Start Learning Today
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline-primary" size="xl">
            View Courses
          </Button>
        </div>

        <div className="mt-12 text-sm text-muted-foreground animate-gentle-fade">
          Free trial • No credit card required • Start learning in under 60 seconds
        </div>
      </div>
    </section>
  );
};

export default CTASection;