import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const reasons = [
    {
        title: "Expert-Led Learning",
        description: "Our courses are crafted by industry experts and top educators, ensuring you get the most relevant and up-to-date knowledge.",
        icon: <Star className="w-8 h-8 fill-accent text-accent" />,
    },
    {
        title: "Personalized Paths",
        description: "We tailor your learning journey to your goals, making it easy to stay motivated and achieve success at your own pace.",
        icon: <Star className="w-8 h-8 fill-accent text-accent" />,
    },
    {
        title: "Engaging Experience",
        description: "Interactive visualizations and gamified lessons make learning fun and effective, boosting retention and engagement.",
        icon: <Star className="w-8 h-8 fill-accent text-accent" />,
    },
];

const WhyChooseUsSection = () => {
    return (
        <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16 animate-gentle-fade">
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                        Why Choose{" "}
                        <span className="bg-gradient-primary bg-clip-text text-transparent">
                            Us
                        </span>{" "}
                        ?
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Discover what makes Querent.AI the best choice for your learning journey!
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {reasons.map((reason, index) => (
                        <Card
                            key={index}
                            className="bg-card border-border hover:border-primary/30 transition-all duration-500 hover:scale-105 hover:shadow-glow animate-smooth-rise"
                        >
                            <CardContent className="p-6">
                                <div className="flex items-center mb-4">
                                    {reason.icon}
                                </div>
                                <h4 className="font-semibold text-foreground text-xl mb-2">{reason.title}</h4>
                                <p className="text-card-foreground/80 leading-relaxed">
                                    {reason.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUsSection;
