import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Atom, BookOpen, Play } from "lucide-react";
import Navigation from "@/components/Navigation";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      
      {/* App Banner */}
      <div className="bg-primary text-primary-foreground px-6 py-3 mt-16">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
              <Play className="w-3 h-3 text-accent-foreground" />
            </div>
            <span className="text-sm">
              <strong>It's better with practice.</strong> Over 95% of students learn faster with interactive lessons.
            </span>
          </div>
          <Button variant="outline" size="sm" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
            Try it
          </Button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Course Card */}
          <div className="space-y-6">
            <Card className="group hover:shadow-glow transition-all duration-500 border-border/50 bg-card/90 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-primary to-primary-glow shadow-lg">
                    <Atom className="h-12 w-12 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-3xl group-hover:text-primary transition-colors mb-2">
                      Light - Reflection and Refraction
                    </CardTitle>
                    <p className="text-muted-foreground text-base">
                      Master the fundamental concepts of light behavior, reflection laws, and refraction principles through interactive lessons.
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    <span>8 Lessons</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Atom className="w-4 h-4" />
                    <span>25 Exercises</span>
                  </div>
                </div>
                <Button asChild className="w-full" variant="hero" size="lg">
                  <Link to="/course/science">
                    Continue Learning
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Progress Section */}
          <div className="space-y-8">
            {/* Level Progress */}
            <div className="text-center">
              <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-medium">
                LEVEL 1
              </Badge>
              <h2 className="text-2xl font-bold mb-6 text-foreground">
                Intro to Light Physics
              </h2>
              
              {/* Progress Visualization */}
              <div className="flex justify-center items-center mb-8">
                <div className="relative">
                  {/* Main circular progress */}
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center shadow-glow">
                    <div className="w-24 h-24 rounded-full bg-background flex items-center justify-center">
                      <Atom className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  
                  {/* Small progress indicators */}
                  <div className="absolute -right-8 top-8">
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center shadow-lg">
                      <div className="w-3 h-3 bg-background rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="absolute -left-8 bottom-8">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
                      <div className="text-xs font-medium text-muted-foreground">2/8</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Current Chapter Card */}
            <Card className="border-border/50 bg-card/90 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-center">Laws of Reflection</h3>
                <p className="text-muted-foreground text-center mb-6">
                  Understand how light bounces off surfaces and the fundamental laws that govern reflection.
                </p>
                <Button className="w-full" variant="hero" size="lg" asChild>
                  <Link to="/lesson/science/laws-of-reflection">
                    Start
                  </Link>
                </Button>
                
                {/* Next topics preview */}
                <div className="mt-6 pt-6 border-t border-border/50">
                  <div className="flex items-center justify-center gap-4">
                    <div className="text-center">
                      <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center mb-2">
                        <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
                      </div>
                      <span className="text-xs text-muted-foreground">Multiple Reflection</span>
                    </div>
                    <div className="text-center">
                      <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center mb-2">
                        <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
                      </div>
                      <span className="text-xs text-muted-foreground">Refraction</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;