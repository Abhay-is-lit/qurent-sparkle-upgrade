import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Clock, BookOpen, CheckCircle, Lock } from "lucide-react";

const scienceChapters = [
  { id: 1, title: "Evolution", description: "Study the process of evolution and natural selection", duration: "45 min", completed: true },
  { id: 2, title: "Acids, Bases and Salts", description: "Understand chemical properties of acids and bases", duration: "50 min", completed: true },
  { id: 3, title: "Heat and Temperature", description: "Learn about thermal energy and its effects", duration: "40 min", completed: false, current: true },
  { id: 4, title: "Periodic Classification of Elements", description: "Explore the periodic table and element properties", duration: "55 min", completed: false },
  { id: 5, title: "Our Environment: Energy Flow", description: "Study ecosystem energy flow and food chains", duration: "45 min", completed: false },
  { id: 6, title: "Electric Current and Circuit", description: "Understand electrical circuits and current flow", duration: "60 min", completed: false },
  { id: 7, title: "Life Process: Nutrition & Transportation", description: "Learn about biological processes in living organisms", duration: "65 min", completed: false },
  { id: 8, title: "Life Processes: Control and Coordination", description: "Study nervous system and plant responses", duration: "50 min", completed: false },
  { id: 9, title: "Metals and Metallurgy", description: "Explore properties and extraction of metals", duration: "45 min", completed: false },
  { id: 10, title: "Light: Reflection and Refraction", description: "Understand light behavior with plane surfaces", duration: "55 min", completed: false },
  { id: 11, title: "Chemistry of Non-Metals", description: "Study properties and reactions of non-metals", duration: "40 min", completed: false },
  { id: 12, title: "Magnetic Effects of Electric Current", description: "Learn about electromagnetism and motors", duration: "50 min", completed: false },
  { id: 13, title: "Light: Spherical Surfaces", description: "Study reflection and refraction with curved surfaces", duration: "60 min", completed: false },
  { id: 14, title: "Life Processes: Reproduction", description: "Understand growth and development in organisms", duration: "55 min", completed: false },
  { id: 15, title: "Heredity: From Parents to Offsprings", description: "Learn about inheritance and genetics", duration: "45 min", completed: false },
  { id: 16, title: "Derivatives of Hydrocarbons", description: "Study organic chemistry and carbon compounds", duration: "50 min", completed: false },
  { id: 17, title: "Chemistry in Daily Life", description: "Explore chemistry applications in everyday life", duration: "40 min", completed: false },
  { id: 18, title: "Energy: Forms and Sources", description: "Learn about different types of energy", duration: "45 min", completed: false }
];

const courseData = {
  science: {
    title: "Science",
    description: "Master the fundamentals of physics, chemistry, and biology",
    chapters: scienceChapters,
    totalLessons: 18,
    completedLessons: 2,
    estimatedTime: "15 hours"
  }
};

const CourseOverview = () => {
  const { courseId } = useParams();
  const course = courseData[courseId as keyof typeof courseData];

  if (!course) {
    return <div>Course not found</div>;
  }

  const progressPercentage = (course.completedLessons / course.totalLessons) * 100;

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4">
            <Link to="/courses">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Courses
            </Link>
          </Button>
          
          <div className="animate-gentle-fade">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                {course.title}
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              {course.description}
            </p>
            
            {/* Progress Section */}
            <div className="bg-card/90 backdrop-blur-sm rounded-lg p-6 border border-border/50 mb-8">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold">Your Progress</h3>
                  <p className="text-sm text-muted-foreground">
                    {course.completedLessons} of {course.totalLessons} lessons completed
                  </p>
                </div>
                <Badge variant="secondary">
                  {Math.round(progressPercentage)}% Complete
                </Badge>
              </div>
              <Progress value={progressPercentage} className="mb-2" />
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="h-4 w-4 mr-1" />
                Estimated time remaining: {course.estimatedTime}
              </div>
            </div>
          </div>
        </div>

        {/* Chapters List */}
        <div className="space-y-4">
          {course.chapters.map((chapter, index) => (
            <Card 
              key={chapter.id}
              className={`group transition-all duration-300 border-border/50 ${
                chapter.current 
                  ? 'ring-2 ring-primary shadow-primary hover:shadow-glow' 
                  : 'hover:shadow-elegant hover:scale-[1.02]'
              } ${chapter.completed ? 'bg-accent/10' : 'bg-card/90'} backdrop-blur-sm`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                      chapter.completed 
                        ? 'bg-primary text-primary-foreground' 
                        : chapter.current
                        ? 'bg-accent text-accent-foreground'
                        : 'bg-muted text-muted-foreground'
                    }`}>
                      {chapter.completed ? (
                        <CheckCircle className="h-5 w-5" />
                      ) : chapter.current ? (
                        <BookOpen className="h-5 w-5" />
                      ) : (
                        <Lock className="h-5 w-5" />
                      )}
                    </div>
                    <div>
                      <CardTitle className={`text-lg ${chapter.current ? 'text-primary' : ''}`}>
                        Chapter {chapter.id}: {chapter.title}
                      </CardTitle>
                      <CardDescription className="text-sm">
                        {chapter.description}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-sm text-muted-foreground mb-2">
                      <Clock className="h-4 w-4 mr-1" />
                      {chapter.duration}
                    </div>
                    {chapter.current && (
                      <Badge variant="default">Continue</Badge>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    {chapter.completed && (
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        Completed
                      </Badge>
                    )}
                    {chapter.current && (
                      <Badge variant="default">
                        In Progress
                      </Badge>
                    )}
                  </div>
                  <Button 
                    variant={chapter.completed ? "outline" : chapter.current ? "default" : "ghost"}
                    disabled={!chapter.completed && !chapter.current}
                    asChild={chapter.completed || chapter.current}
                  >
                    {(chapter.completed || chapter.current) ? (
                      <Link to={`/lesson/${courseId}/${chapter.id}`}>
                        {chapter.completed ? "Review" : "Start Lesson"}
                      </Link>
                    ) : (
                      "Locked"
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Course Stats */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="text-center bg-card/90 backdrop-blur-sm border-border/50">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">{course.totalLessons}</div>
              <div className="text-sm text-muted-foreground">Total Lessons</div>
            </CardContent>
          </Card>
          <Card className="text-center bg-card/90 backdrop-blur-sm border-border/50">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-accent mb-2">{course.completedLessons}</div>
              <div className="text-sm text-muted-foreground">Completed</div>
            </CardContent>
          </Card>
          <Card className="text-center bg-card/90 backdrop-blur-sm border-border/50">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary-glow mb-2">
                {Math.round(progressPercentage)}%
              </div>
              <div className="text-sm text-muted-foreground">Progress</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CourseOverview;