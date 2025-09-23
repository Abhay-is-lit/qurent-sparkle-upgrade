import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Flame, Star, Trophy, Calendar, Target, Zap } from "lucide-react";

interface StreakCounterProps {
  currentStreak?: number;
  longestStreak?: number;
  todayCompleted?: boolean;
  onStreakUpdate?: (newStreak: number) => void;
}

const StreakCounter: React.FC<StreakCounterProps> = ({
  currentStreak = 0,
  longestStreak = 0,
  todayCompleted = false,
  onStreakUpdate
}) => {
  const [streak, setStreak] = useState(currentStreak);
  const [showCelebration, setShowCelebration] = useState(false);

  useEffect(() => {
    setStreak(currentStreak);
  }, [currentStreak]);

  const handleLessonComplete = () => {
    if (!todayCompleted) {
      const newStreak = streak + 1;
      setStreak(newStreak);
      onStreakUpdate?.(newStreak);
      
      // Show celebration for milestones
      if (newStreak % 7 === 0 || newStreak % 30 === 0) {
        setShowCelebration(true);
        setTimeout(() => setShowCelebration(false), 3000);
      }
    }
  };

  const getStreakLevel = (days: number) => {
    if (days >= 100) return { level: 'Legend', color: 'from-purple-500 to-pink-500', icon: Trophy };
    if (days >= 50) return { level: 'Master', color: 'from-yellow-500 to-orange-500', icon: Star };
    if (days >= 21) return { level: 'Expert', color: 'from-blue-500 to-indigo-500', icon: Zap };
    if (days >= 7) return { level: 'Committed', color: 'from-green-500 to-teal-500', icon: Target };
    return { level: 'Beginner', color: 'from-gray-500 to-gray-600', icon: Calendar };
  };

  const streakInfo = getStreakLevel(streak);
  const IconComponent = streakInfo.icon;

  const milestones = [
    { days: 7, title: 'First Week!', reward: '50 XP Bonus' },
    { days: 21, title: 'Habit Formed!', reward: '100 XP Bonus' },
    { days: 30, title: 'One Month!', reward: 'Special Badge' },
    { days: 50, title: 'Science Master!', reward: 'Master Badge' },
    { days: 100, title: 'Legend Status!', reward: 'Legend Badge' }
  ];

  const nextMilestone = milestones.find(m => m.days > streak);

  return (
    <div className="space-y-6">
      {/* Main Streak Display */}
      <Card className={`bg-gradient-to-r ${streakInfo.color} text-white relative overflow-hidden`}>
        <CardContent className="p-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="p-4 rounded-full bg-white/20 backdrop-blur">
                <Flame className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Day Streak</h3>
                <p className="text-white/90">Keep the momentum going!</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-5xl font-bold mb-1">{streak}</div>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <IconComponent className="w-4 h-4 mr-1" />
                {streakInfo.level}
              </Badge>
            </div>
          </div>
          
          {showCelebration && (
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 flex items-center justify-center animate-pulse">
              <div className="text-center text-white">
                <Trophy className="w-16 h-16 mx-auto mb-2 animate-bounce" />
                <h2 className="text-2xl font-bold">Milestone Reached!</h2>
                <p>Amazing dedication!</p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <Flame className="w-6 h-6 text-orange-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">{streak}</div>
            <div className="text-sm text-muted-foreground">Current</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4 text-center">
            <Trophy className="w-6 h-6 text-yellow-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">{longestStreak}</div>
            <div className="text-sm text-muted-foreground">Best</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4 text-center">
            <Target className="w-6 h-6 text-blue-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">{nextMilestone?.days || '∞'}</div>
            <div className="text-sm text-muted-foreground">Next Goal</div>
          </CardContent>
        </Card>
      </div>

      {/* Next Milestone */}
      {nextMilestone && (
        <Card className="border-primary/20 bg-primary/5">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold text-foreground mb-1">{nextMilestone.title}</h4>
                <p className="text-sm text-muted-foreground">
                  {nextMilestone.days - streak} more days to unlock: {nextMilestone.reward}
                </p>
              </div>
              <div className="text-right">
                <div className="text-sm text-muted-foreground mb-1">
                  {streak}/{nextMilestone.days}
                </div>
                <div className="w-24 bg-muted rounded-full h-2">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all duration-500"
                    style={{ width: `${(streak / nextMilestone.days) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Streak Recovery (if streak is broken) */}
      {streak === 0 && (
        <Card className="border-orange-200 bg-orange-50 dark:bg-orange-950">
          <CardContent className="p-6 text-center">
            <Calendar className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">Ready to Start Fresh?</h3>
            <p className="text-muted-foreground mb-4">
              Begin your science learning journey today and build a new streak!
            </p>
            <Button onClick={handleLessonComplete} className="bg-orange-500 hover:bg-orange-600">
              Start Learning Today
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default StreakCounter;