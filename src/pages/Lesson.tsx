import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle, Clock, Lightbulb } from "lucide-react";

const lessonContent = {
  "science": {
    "3": {
      title: "Heat and Temperature",
      description: "Understanding thermal energy and its effects on matter",
      totalSteps: 8,
      content: [
        {
          type: "introduction",
          title: "What is Heat?",
          content: "Heat is a form of energy that flows from a hotter object to a cooler object. When you hold a hot cup of tea, heat flows from the cup to your hands.",
          image: "https://images.unsplash.com/photo-1544985361-b420d7938c3c?w=500&h=300&fit=crop",
          keyPoints: [
            "Heat is energy in transit",
            "Always flows from hot to cold",
            "Measured in joules or calories"
          ]
        },
        {
          type: "concept",
          title: "Temperature vs Heat",
          content: "Temperature is a measure of how hot or cold something is, while heat is the energy that causes temperature changes.",
          comparison: {
            temperature: ["Measure of hotness/coldness", "Measured in °C, °F, or K", "Intensive property"],
            heat: ["Form of energy", "Measured in joules", "Extensive property"]
          }
        },
        {
          type: "interactive",
          title: "Daily Life Examples",
          content: "Let's identify heat transfer in everyday situations:",
          examples: [
            { situation: "Touching a metal spoon in hot soup", answer: "The spoon becomes hot due to heat transfer from soup" },
            { situation: "Ice melting in a warm room", answer: "Heat from the room melts the ice" },
            { situation: "Feeling warm near a fire", answer: "Heat radiates from fire to your body" }
          ]
        },
        {
          type: "experiment",
          title: "Virtual Experiment: Heat Transfer",
          content: "Observe how heat transfers between objects of different temperatures.",
          setup: "Two metal blocks - one hot (80°C) and one cold (20°C) are brought into contact.",
          observation: "Heat flows from the hot block to the cold block until they reach the same temperature (equilibrium)."
        },
        {
          type: "quiz",
          title: "Quick Check",
          question: "When you touch a cold metal object, why does it feel cold?",
          options: [
            "The metal is giving you cold energy",
            "Heat is flowing from your hand to the metal",
            "The metal is stealing your heat",
            "Cold is flowing from metal to your hand"
          ],
          correct: 1,
          explanation: "Metal feels cold because heat flows from your warmer hand to the cooler metal object."
        },
        {
          type: "application",
          title: "Thermal Expansion",
          content: "When objects are heated, they usually expand (get bigger). This happens because heat makes particles move faster and take up more space.",
          realWorld: [
            "Railway tracks have gaps to allow for expansion",
            "Thermometers work based on liquid expansion",
            "Bridges have expansion joints"
          ]
        },
        {
          type: "problem",
          title: "Solve This",
          content: "A metal rod is 100 cm long at 20°C. When heated to 80°C, it expands by 0.5 cm. What is the new length?",
          solution: "New length = Original length + Expansion = 100 cm + 0.5 cm = 100.5 cm",
          steps: [
            "Identify original length: 100 cm",
            "Identify expansion: 0.5 cm", 
            "Add expansion to original length",
            "Final answer: 100.5 cm"
          ]
        },
        {
          type: "summary",
          title: "Key Takeaways",
          content: "You've learned the fundamental concepts of heat and temperature!",
          points: [
            "Heat is energy that flows between objects",
            "Temperature measures how hot or cold something is",
            "Heat always flows from hot to cold objects",
            "Heating usually causes expansion of materials"
          ],
          nextLesson: "Periodic Classification of Elements"
        }
      ]
    }
  }
};

const Lesson = () => {
  const { courseId, lessonId } = useParams();
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const lesson = lessonContent[courseId as keyof typeof lessonContent]?.[lessonId as string];

  if (!lesson) {
    return <div>Lesson not found</div>;
  }

  const currentContent = lesson.content[currentStep];
  const progress = ((currentStep + 1) / lesson.totalSteps) * 100;

  const handleNext = () => {
    if (currentStep < lesson.totalSteps - 1) {
      setCurrentStep(currentStep + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    }
  };

  const handleAnswerSelect = (optionIndex: number) => {
    setSelectedAnswer(optionIndex);
    setShowExplanation(true);
  };

  const renderContent = () => {
    switch (currentContent.type) {
      case "introduction":
        return (
          <div className="space-y-6">
            <img 
              src={currentContent.image} 
              alt="Heat illustration" 
              className="w-full h-48 object-cover rounded-lg"
            />
            <p className="text-lg leading-relaxed">{currentContent.content}</p>
            <div className="bg-accent/10 p-4 rounded-lg">
              <h4 className="font-semibold mb-3 flex items-center">
                <Lightbulb className="h-4 w-4 mr-2 text-accent" />
                Key Points
              </h4>
              <ul className="space-y-2">
                {currentContent.keyPoints?.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-primary mt-0.5" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );

      case "concept":
        return (
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">{currentContent.content}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-primary">Temperature</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {currentContent.comparison?.temperature.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-4 w-4 mr-2 text-primary mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-accent/5 border-accent/20">
                <CardHeader>
                  <CardTitle className="text-accent">Heat</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {currentContent.comparison?.heat.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-4 w-4 mr-2 text-accent mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case "interactive":
        return (
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">{currentContent.content}</p>
            <div className="space-y-4">
              {currentContent.examples?.map((example, index) => (
                <Card key={index} className="bg-card/50 border-border/50">
                  <CardHeader>
                    <CardTitle className="text-lg">{example.situation}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{example.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case "quiz":
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">{currentContent.question}</h3>
            <div className="space-y-3">
              {currentContent.options?.map((option, index) => (
                <Button
                  key={index}
                  variant={selectedAnswer === index ? "default" : "outline"}
                  className={`w-full text-left justify-start p-4 h-auto ${
                    showExplanation && index === currentContent.correct
                      ? "border-green-500 bg-green-50 dark:bg-green-950"
                      : showExplanation && selectedAnswer === index && index !== currentContent.correct
                      ? "border-red-500 bg-red-50 dark:bg-red-950"
                      : ""
                  }`}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showExplanation}
                >
                  {option}
                </Button>
              ))}
            </div>
            {showExplanation && (
              <div className="bg-accent/10 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Explanation:</h4>
                <p>{currentContent.explanation}</p>
              </div>
            )}
          </div>
        );

      case "problem":
        return (
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">{currentContent.content}</p>
            <Card className="bg-accent/5 border-accent/20">
              <CardHeader>
                <CardTitle className="text-accent">Solution Steps</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-2">
                  {currentContent.steps?.map((step, index) => (
                    <li key={index} className="flex items-start">
                      <span className="flex items-center justify-center w-6 h-6 bg-accent text-accent-foreground rounded-full text-sm mr-3 mt-0.5">
                        {index + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
                <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                  <strong>Solution: </strong>{currentContent.solution}
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case "summary":
        return (
          <div className="space-y-6 text-center">
            <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="h-10 w-10 text-white" />
            </div>
            <p className="text-lg leading-relaxed">{currentContent.content}</p>
            <div className="bg-card/50 p-6 rounded-lg">
              <h4 className="font-semibold mb-4">What You Learned:</h4>
              <ul className="space-y-2 text-left max-w-md mx-auto">
                {currentContent.points?.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 text-primary mt-0.5" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-4">
              <p className="text-muted-foreground mb-4">Next up:</p>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                {currentContent.nextLesson}
              </Badge>
            </div>
          </div>
        );

      default:
        return (
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">{currentContent.content}</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4">
            <Link to={`/course/${courseId}`}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Course
            </Link>
          </Button>
          
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  {lesson.title}
                </span>
              </h1>
              <p className="text-muted-foreground">{lesson.description}</p>
            </div>
            <div className="text-right">
              <div className="flex items-center text-sm text-muted-foreground mb-2">
                <Clock className="h-4 w-4 mr-1" />
                {Math.ceil((lesson.totalSteps - currentStep) * 3)} min left
              </div>
              <Badge variant="secondary">
                Step {currentStep + 1} of {lesson.totalSteps}
              </Badge>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Progress</span>
              <span className="text-sm text-muted-foreground">{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-3" />
          </div>
        </div>

        {/* Lesson Content */}
        <Card className="mb-8 bg-card/90 backdrop-blur-sm border-border/50 animate-gentle-fade">
          <CardHeader>
            <CardTitle className="flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-primary" />
              {currentContent.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {renderContent()}
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentStep === 0}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Previous
          </Button>
          
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              {currentStep + 1} of {lesson.totalSteps}
            </p>
          </div>

          {currentStep === lesson.totalSteps - 1 ? (
            <Button asChild variant="hero">
              <Link to={`/course/${courseId}`}>
                <CheckCircle className="h-4 w-4 mr-2" />
                Complete Lesson
              </Link>
            </Button>
          ) : (
            <Button onClick={handleNext}>
              Next
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Lesson;