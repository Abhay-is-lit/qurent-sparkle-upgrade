import { Card, CardContent } from "@/components/ui/card";

const StreaksSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Build Learning{" "}
              <span className="bg-gradient-to-r from-accent to-accent-glow bg-clip-text text-transparent">
                Streaks
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Maintain your learning streak and stay motivated with our gamified progress system. 
              Track your daily achievements and unlock new milestones as you grow.
            </p>
            <Card className="bg-gradient-primary/10 border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-primary">Current Streak</h3>
                    <p className="text-muted-foreground">Keep it going!</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-accent">15</div>
                    <div className="text-sm text-muted-foreground">days</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="animate-slide-in-right">
            <img
              src="https://uploads.onecompiler.io/435u35p2a/43wyy99m5/Gemini_Generated_Image_lo6xx0lo6xx0lo6x.png"
              alt="Learning Streak Progress"
              className="w-full h-auto rounded-2xl shadow-primary hover:shadow-glow transition-all duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StreaksSection;