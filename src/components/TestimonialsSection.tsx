import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Computer Science Student",
    content: "Querent.AI transformed how I study algorithms. The interactive visualizations made complex concepts click instantly!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Marcus Johnson",
    role: "Working Professional",
    content: "I never thought I could learn data science in my spare time. The personalized paths kept me motivated and engaged.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Emma Rodriguez",
    role: "High School Teacher",
    content: "My students love the gamified approach. Their engagement and retention rates have improved dramatically.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-gentle-fade">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Learners
            </span>{" "}
            Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of successful learners who've transformed their knowledge with Querent.AI
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/30 transition-all duration-500 hover:scale-105 hover:shadow-glow animate-smooth-rise"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-card-foreground/80 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;