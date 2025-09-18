import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-feature border-t border-border/20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <img
                src="https://uploads.onecompiler.io/435u35p2a/43wzb8jmm/image%20(1).png"
                alt="Querent.AI Logo"
                className="h-8 w-8 mr-3"
              />
              <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Querent.AI
              </h3>
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Empowering learners worldwide with AI-powered interactive education. 
              Transform your learning journey with personalized, engaging content.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin, Mail].map((Icon, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  className="text-primary-foreground/60 hover:text-accent hover:bg-accent/10"
                >
                  <Icon className="h-5 w-5" />
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-primary-foreground mb-4">Platform</h4>
            <ul className="space-y-2">
              {["Courses", "Features", "Pricing", "Mobile App"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold text-primary-foreground mb-4">Support</h4>
            <ul className="space-y-2">
              {["Help Center", "Contact Us", "Community", "Status"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/60 text-sm mb-4 md:mb-0">
            © 2024 Querent.AI. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            {["Privacy Policy", "Terms of Service", "Cookie Settings"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-primary-foreground/60 hover:text-accent transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;