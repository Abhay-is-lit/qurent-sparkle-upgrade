import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-primary"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center group">
            <img
              src="https://uploads.onecompiler.io/435u35p2a/43wzb8jmm/image%20(1).png"
              alt="Querent.AI Logo"
              className="h-10 w-10 mr-3 transition-transform duration-300 group-hover:scale-110"
            />
            <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Querent.AI
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="outline-primary" size="default">
              Sign In
            </Button>
            <Button variant="hero" size="default" className="animate-scale-in">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;