import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Calculator, Atom, Globe, Languages, Palette } from "lucide-react";
import { Link } from "react-router-dom";

const subjects = [
  {
    id: "science",
    title: "Science",
    description: "Explore the natural world through interactive lessons",
    icon: Atom,
    color: "from-primary to-primary-glow",
    lessons: 18,
    isNew: true,
    path: "/course/science"
  },
  {
    id: "math",
    title: "Mathematics",
    description: "Build problem-solving skills with step-by-step guidance",
    icon: Calculator,
    color: "from-accent to-accent-glow",
    lessons: 12,
    isNew: false,
    path: "/course/math"
  },
  {
    id: "social-science",
    title: "Social Science",
    description: "Understand society, history, and geography",
    icon: Globe,
    color: "from-secondary to-secondary/80",
    lessons: 8,
    isNew: false,
    path: "/course/social-science"
  },
  {
    id: "english",
    title: "English",
    description: "Master language and literature comprehension",
    icon: Languages,
    color: "from-muted-foreground to-foreground",
    lessons: 15,
    isNew: false,
    path: "/course/english"
  },
  {
    id: "hindi",
    title: "Hindi",
    description: "Develop skills in Hindi language and literature",
    icon: BookOpen,
    color: "from-orange-500 to-red-500",
    lessons: 12,
    isNew: false,
    path: "/course/hindi"
  },
  {
    id: "art",
    title: "Arts & Crafts",
    description: "Express creativity through various art forms",
    icon: Palette,
    color: "from-purple-500 to-pink-500",
    lessons: 6,
    isNew: false,
    path: "/course/art"
  }
];

const Courses = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-16 animate-gentle-fade">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Learning Paths
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Master your school subjects with interactive lessons designed for Class 10 students
          </p>
        </div>

        {/* Subjects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {subjects.map((subject, index) => {
            const IconComponent = subject.icon;
            return (
              <Card 
                key={subject.id} 
                className="group hover:shadow-elegant hover:scale-105 transition-all duration-500 border-border/50 bg-card/90 backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${subject.color} shadow-lg`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    {subject.isNew && (
                      <Badge variant="secondary" className="bg-accent text-accent-foreground">
                        NEW
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                    {subject.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {subject.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-sm text-muted-foreground">
                      {subject.lessons} lessons
                    </span>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`h-2 w-2 rounded-full ${
                            i < 3 ? 'bg-primary' : 'bg-muted'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <Button asChild className="w-full" variant="outline-primary">
                    <Link to={subject.path}>
                      Start Learning
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-20 text-center animate-gentle-fade">
          <h2 className="text-3xl font-bold mb-6 text-primary-foreground">
            Why Choose Querent.AI?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">CGBSE Aligned</h3>
              <p className="text-muted-foreground">
                Content designed specifically for Chhattisgarh Board syllabus
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Atom className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Interactive Learning</h3>
              <p className="text-muted-foreground">
                Engage with content through quizzes and interactive elements
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Step-by-step</h3>
              <p className="text-muted-foreground">
                Break down complex concepts into digestible lessons
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <iframe>
      src="https://www.chatbase.co/chatbot-iframe/oMKwLxgGg4Nv7y-U-3lzq"
      width="100%"
      style="height: 100%; min-height: 700px"
      frameborder="0"
    </iframe>
  );
};

export default Courses;
