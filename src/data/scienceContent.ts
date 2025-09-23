export interface Lesson {
  id: string;
  title: string;
  description: string;
  duration: number; // in minutes
  type: 'introduction' | 'concept' | 'experiment' | 'quiz' | 'review';
  content: {
    text?: string;
    concepts?: string[];
    experiment?: {
      title: string;
      materials: string[];
      procedure: string[];
      observation: string;
    };
    quiz?: {
      question: string;
      options: string[];
      correct: number;
      explanation: string;
    }[];
  };
  prerequisites?: string[];
  unlocks?: string[];
  xp: number;
}

export interface Chapter {
  id: string;
  title: string;
  description: string;
  color: string;
  icon: string;
  totalLessons: number;
  estimatedHours: number;
  lessons: Lesson[];
  prerequisites?: string[];
  unlocks?: string[];
}

export const scienceChapters: Chapter[] = [
  {
    id: 'evolution',
    title: 'Evolution',
    description: 'Explore how life forms have changed over millions of years through natural selection and adaptation.',
    color: 'from-emerald-500 to-teal-600',
    icon: 'TreePine',
    totalLessons: 6,
    estimatedHours: 2,
    lessons: [
      {
        id: 'evolution-intro',
        title: 'What is Evolution?',
        description: 'Understanding the concept of evolution and extinction through dinosaurs and fossils.',
        duration: 10,
        type: 'introduction',
        content: {
          text: 'Evolution is the process by which different kinds of living organisms are thought to have developed and diversified from earlier forms. Fossils like those of dinosaurs provide evidence of how life has changed over millions of years.',
          concepts: [
            'Evolution as change over time',
            'Fossil evidence of past life',
            'Extinction and survival',
            'Biodiversity through time'
          ]
        },
        xp: 50
      },
      {
        id: 'habitat-effect',
        title: 'Habitat and Population Dynamics',
        description: 'Learn how habitats affect organism survival and population growth.',
        duration: 12,
        type: 'concept',
        content: {
          text: 'Habitats provide basic needs for organisms: food, reproduction opportunities, and safety. When resources become scarce, populations face competition and natural selection occurs.',
          concepts: [
            'Habitat requirements',
            'Population growth vs resource availability', 
            'Competition for survival',
            'Natural selection pressure'
          ]
        },
        prerequisites: ['evolution-intro'],
        xp: 60
      },
      {
        id: 'darwin-voyage',
        title: 'Darwin\'s Voyage of Discovery',
        description: 'Follow Charles Darwin\'s journey on HMS Beagle and his groundbreaking observations.',
        duration: 15,
        type: 'concept',
        content: {
          text: 'Charles Darwin\'s five-year voyage (1831-1836) on HMS Beagle led to revolutionary insights about evolution. His observations of diverse species and fossils formed the foundation of evolutionary theory.',
          concepts: [
            'HMS Beagle expedition',
            'Darwin\'s scientific method',
            'Observation and hypothesis formation',
            'Geographic distribution of species'
          ]
        },
        prerequisites: ['habitat-effect'],
        xp: 70
      },
      {
        id: 'galapagos-finches',
        title: 'Galapagos Finches and Adaptation',
        description: 'Discover how finches evolved different beak shapes for different food sources.',
        duration: 13,
        type: 'concept',
        content: {
          text: 'Darwin observed 15 species of finches on the Galapagos Islands, each with differently shaped beaks adapted to their specific food sources. This provided key evidence for adaptive evolution.',
          concepts: [
            'Adaptive radiation',
            'Beak morphology and function',
            'Natural selection in action',
            'Species diversification'
          ],
          experiment: {
            title: 'Beak Shape and Function Analysis',
            materials: ['Different shaped tools (tweezers, spoons, tongs)', 'Various food items (seeds, nectar, insects)'],
            procedure: [
              'Use different tools to pick up different food items',
              'Record which tool works best for each food type',
              'Compare efficiency of different beak shapes',
              'Draw conclusions about adaptation'
            ],
            observation: 'Different beak shapes are optimized for different food sources, demonstrating adaptive evolution.'
          }
        },
        prerequisites: ['darwin-voyage'],
        xp: 80
      },
      {
        id: 'homologous-structures',
        title: 'Evidence from Homologous Structures',
        description: 'Examine how similar structures in different organisms reveal common ancestry.',
        duration: 11,
        type: 'concept',
        content: {
          text: 'Homologous structures are similar in basic structure but may serve different functions, indicating common evolutionary origin. Examples include plant stems modified for different purposes.',
          concepts: [
            'Homologous vs analogous structures',
            'Comparative anatomy',
            'Evidence for common ancestry',
            'Structural vs functional similarity'
          ]
        },
        prerequisites: ['galapagos-finches'],
        xp: 65
      },
      {
        id: 'evolution-quiz',
        title: 'Evolution Mastery Check',
        description: 'Test your understanding of evolutionary concepts and evidence.',
        duration: 8,
        type: 'quiz',
        content: {
          quiz: [
            {
              question: 'What provided Darwin with evidence that species can change over time?',
              options: ['Fossil records', 'Living organisms only', 'Rock formations', 'Weather patterns'],
              correct: 0,
              explanation: 'Fossil records showed Darwin that ancient organisms differed from modern ones, providing evidence that species change over time.'
            },
            {
              question: 'Why did finches on different Galapagos islands develop different beak shapes?',
              options: ['Random mutations', 'Adaptation to different food sources', 'Climate differences', 'Predator pressure'],
              correct: 1,
              explanation: 'Finches evolved different beak shapes to efficiently access different food sources available on their respective islands.'
            },
            {
              question: 'What are homologous structures?',
              options: ['Identical structures with same function', 'Similar structures from common ancestry', 'Completely different structures', 'Structures found only in plants'],
              correct: 1,
              explanation: 'Homologous structures are similar in basic form due to common evolutionary origin, though they may serve different functions.'
            }
          ]
        },
        prerequisites: ['homologous-structures'],
        xp: 100
      }
    ]
  },
  {
    id: 'acids-bases-salts',
    title: 'Acids, Bases and Salts',
    description: 'Understand the properties and reactions of acids, bases, and salts in everyday life.',
    color: 'from-blue-500 to-indigo-600',
    icon: 'Flask',
    totalLessons: 6,
    estimatedHours: 2.5,
    lessons: [
      {
        id: 'acids-intro',
        title: 'Introduction to Acids',
        description: 'Learn about acids, their properties, and common examples.',
        duration: 12,
        type: 'introduction',
        content: {
          text: 'Acids are substances that release hydrogen ions (H+) when dissolved in water. They have a sour taste, turn blue litmus red, and react with metals to produce hydrogen gas.',
          concepts: [
            'Definition of acids',
            'Properties of acids',
            'Common acids in daily life',
            'Acid indicators'
          ]
        },
        xp: 50
      },
      {
        id: 'bases-intro',
        title: 'Introduction to Bases',
        description: 'Explore bases, their characteristics, and real-world applications.',
        duration: 12,
        type: 'concept',
        content: {
          text: 'Bases are substances that release hydroxide ions (OH-) in water. They have a bitter taste, feel slippery, turn red litmus blue, and neutralize acids.',
          concepts: [
            'Definition of bases',
            'Properties of bases',
            'Common bases in daily life',
            'Base indicators'
          ]
        },
        prerequisites: ['acids-intro'],
        xp: 50
      },
      {
        id: 'ph-scale',
        title: 'The pH Scale',
        description: 'Master the pH scale and learn to measure acid-base strength.',
        duration: 15,
        type: 'concept',
        content: {
          text: 'The pH scale measures how acidic or basic a solution is, ranging from 0-14. pH 7 is neutral, below 7 is acidic, and above 7 is basic.',
          concepts: [
            'pH scale understanding',
            'Neutral, acidic, and basic solutions',
            'pH indicators and measurement',
            'Real-life pH examples'
          ],
          experiment: {
            title: 'Testing pH of Household Items',
            materials: ['pH paper/indicator', 'Various household liquids', 'Distilled water'],
            procedure: [
              'Collect samples of lemon juice, soap solution, milk',
              'Dip pH paper in each sample',
              'Compare colors with pH scale',
              'Record and classify as acid/base/neutral'
            ],
            observation: 'Different substances have different pH values, helping classify them as acids, bases, or neutral.'
          }
        },
        prerequisites: ['bases-intro'],
        xp: 70
      },
      {
        id: 'neutralization',
        title: 'Neutralization Reactions',
        description: 'Understand how acids and bases react to form salts and water.',
        duration: 13,
        type: 'concept',
        content: {
          text: 'When an acid reacts with a base, they neutralize each other to form salt and water. This reaction is called neutralization: Acid + Base → Salt + Water.',
          concepts: [
            'Neutralization reaction',
            'Formation of salts',
            'Practical applications',
            'Balancing neutralization equations'
          ]
        },
        prerequisites: ['ph-scale'],
        xp: 65
      },
      {
        id: 'salts-properties',
        title: 'Properties and Uses of Salts',
        description: 'Explore different types of salts and their importance in daily life.',
        duration: 14,
        type: 'concept',
        content: {
          text: 'Salts are ionic compounds formed from neutralization reactions. Common salt (NaCl) is essential for life, while other salts have various industrial and household uses.',
          concepts: [
            'Types of salts',
            'Properties of salts',
            'Uses in daily life',
            'Industrial applications'
          ]
        },
        prerequisites: ['neutralization'],
        xp: 60
      },
      {
        id: 'acids-bases-quiz',
        title: 'Acids, Bases & Salts Quiz',
        description: 'Test your knowledge of acid-base chemistry.',
        duration: 10,
        type: 'quiz',
        content: {
          quiz: [
            {
              question: 'What happens to blue litmus paper when dipped in an acid?',
              options: ['Turns red', 'Turns green', 'Remains blue', 'Turns colorless'],
              correct: 0,
              explanation: 'Acids turn blue litmus paper red, which is a characteristic property of acids.'
            },
            {
              question: 'What is the pH of a neutral solution?',
              options: ['0', '7', '14', '1'],
              correct: 1,
              explanation: 'A neutral solution has a pH of 7, which is neither acidic nor basic.'
            },
            {
              question: 'What is formed when an acid reacts with a base?',
              options: ['Salt and water', 'Only salt', 'Only water', 'Gas and salt'],
              correct: 0,
              explanation: 'Neutralization reaction between acid and base produces salt and water.'
            }
          ]
        },
        prerequisites: ['salts-properties'],
        xp: 90
      }
    ]
  }
  // Additional chapters would be added here following the same pattern
];

export const getChapterById = (id: string): Chapter | undefined => {
  return scienceChapters.find(chapter => chapter.id === id);
};

export const getLessonById = (chapterId: string, lessonId: string): Lesson | undefined => {
  const chapter = getChapterById(chapterId);
  return chapter?.lessons.find(lesson => lesson.id === lessonId);
};

export const calculateChapterProgress = (chapterId: string, completedLessons: string[]): number => {
  const chapter = getChapterById(chapterId);
  if (!chapter) return 0;
  
  const completedInChapter = completedLessons.filter(lessonId => 
    chapter.lessons.some(lesson => lesson.id === lessonId)
  ).length;
  
  return Math.round((completedInChapter / chapter.lessons.length) * 100);
};