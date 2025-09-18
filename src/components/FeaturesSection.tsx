import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Personalized Learning Paths",
    description: "Tailored content to fit your learning style and pace, powered by advanced AI algorithms.",
    delay: "0s"
  },
  {
    title: "Interactive Quizzes",
    description: "Engage with material through fun and challenging quizzes that adapt to your progress.",
    delay: "0.2s"
  },
  {
    title: "Progress Tracking",
    description: "Monitor your growth and stay motivated with detailed analytics and achievement badges.",
    delay: "0.4s"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gradient-feature relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4 animate-fade-in">
            Powerful Features
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Everything you need to accelerate your learning journey
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-card/90 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-105 hover:shadow-glow group animate-slide-in-left"
              style={{ animationDelay: feature.delay }}
            >
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-accent group-hover:text-accent-glow transition-colors duration-300">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-card-foreground/80 leading-relaxed text-center">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;