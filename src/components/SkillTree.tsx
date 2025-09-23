import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Lock, Play, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { scienceChapters, calculateChapterProgress } from "@/data/scienceContent";

interface SkillTreeProps {
  completedLessons?: string[];
  currentStreak?: number;
}

const SkillTree: React.FC<SkillTreeProps> = ({ 
  completedLessons = [],
  currentStreak = 0 
}) => {
  const getChapterStatus = (chapterId: string, index: number) => {
    const progress = calculateChapterProgress(chapterId, completedLessons);
    
    if (progress === 100) return 'completed';
    if (progress > 0) return 'current';
    if (index === 0 || scienceChapters[index - 1] && calculateChapterProgress(scienceChapters[index - 1].id, completedLessons) > 0) {
      return 'available';
    }
    return 'locked';
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-6 h-6 text-green-500" />;
      case 'current':
        return <Play className="w-6 h-6 text-primary" />;
      case 'available':
        return <Star className="w-6 h-6 text-yellow-500" />;
      default:
        return <Lock className="w-6 h-6 text-muted-foreground" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'border-green-500 bg-green-50 dark:bg-green-950';
      case 'current':
        return 'border-primary bg-primary/5';
      case 'available':
        return 'border-yellow-500 bg-yellow-50 dark:bg-yellow-950';
      default:
        return 'border-muted bg-muted/20';
    }
  };

  return (
    <div className="space-y-8">
      {/* Streak Display */}
      <Card className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950 dark:to-red-950 border-orange-200 dark:border-orange-800">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-3 rounded-full bg-orange-100 dark:bg-orange-900">
                <Star className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">Learning Streak</h3>
                <p className="text-sm text-muted-foreground">Keep learning daily to maintain your streak!</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-orange-600">{currentStreak}</div>
              <div className="text-sm text-muted-foreground">days</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Chapter Progress Grid */}
      <div className="grid gap-6">
        <h2 className="text-2xl font-bold text-foreground">Science Learning Path</h2>
        
        <div className="space-y-4">
          {scienceChapters.map((chapter, index) => {
            const status = getChapterStatus(chapter.id, index);
            const progress = calculateChapterProgress(chapter.id, completedLessons);
            const isLocked = status === 'locked';
            
            return (
              <Card 
                key={chapter.id} 
                className={`transition-all duration-300 hover:shadow-lg ${getStatusColor(status)} ${
                  !isLocked ? 'hover:scale-102' : 'opacity-60'
                }`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        {getStatusIcon(status)}
                        <div>
                          <h3 className="text-xl font-semibold text-foreground">
                            Chapter {index + 1}: {chapter.title}
                          </h3>
                          <p className="text-muted-foreground text-sm">
                            {chapter.description}
                          </p>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span>{chapter.totalLessons} lessons</span>
                          <span>•</span>
                          <span>~{chapter.estimatedHours}h total</span>
                          <span>•</span>
                          <span>5-15 min per lesson</span>
                        </div>
                        
                        {progress > 0 && (
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="text-muted-foreground">Progress</span>
                              <span className="font-medium text-foreground">{progress}%</span>
                            </div>
                            <Progress value={progress} className="h-2" />
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-end space-y-2 ml-6">
                      <Badge variant={status === 'completed' ? 'default' : 'secondary'} className="capitalize">
                        {status === 'current' ? 'In Progress' : status}
                      </Badge>
                      
                      {!isLocked && (
                        <Link to={`/lesson/science/${chapter.lessons[0].id}`}>
                          <Button 
                            size="sm" 
                            variant={status === 'completed' ? 'outline' : 'default'}
                          >
                            {status === 'completed' ? 'Review' : status === 'current' ? 'Continue' : 'Start'}
                          </Button>
                        </Link>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SkillTree;