'use client';

import { Target, Rocket, TrendingUp, Users, Brain, HelpCircle, Award } from 'lucide-react';
import SectionBlock from './SectionBlock';

const sections = [
  {
    title: 'Introduction',
    description: 'Concepts de base et définitions de la puériculture',
    href: '/introduction',
    icon: Rocket,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100'
  },
  {
    title: 'Section I',
    description: 'La puériculture pastorienne (XIXe - début XXe siècle)',
    href: '/section-1',
    icon: TrendingUp,
    color: 'text-green-600',
    bgColor: 'bg-green-100'
  },
  {
    title: 'Section II',
    description: 'Évolution des pratiques - Le \'biberon tueur\' et transformations du XXe siècle',
    href: '/section-2',
    icon: Users,
    color: 'text-orange-600',
    bgColor: 'bg-orange-100'
  },
  {
    title: 'Section III',
    description: 'La nouvelle puériculture - Psychanalyse, Spock, Dolto et l\'amour maternel',
    href: '/section-3',
    icon: Brain,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100'
  },
  {
    title: 'Quiz Interactif',
    description: 'Testez vos connaissances avec 5 questions sur l\'ensemble du cours',
    href: '/quiz',
    icon: HelpCircle,
    color: 'text-red-600',
    bgColor: 'bg-red-100'
  },
  {
    title: 'Cas pratiques',
    description: 'Analysez 3 situations concrètes pour approfondir votre compréhension',
    href: '/cas-pratiques',
    icon: Award,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-100'
  },
  {
    title: 'Exercices d\'Approfondissement',
    description: '4 exercices variés pour développer votre analyse critique et synthétiser vos connaissances',
    href: '/exercices',
    icon: Target,
    color: 'text-pink-600',
    bgColor: 'bg-pink-100'
  }
];

export default function CoursePlan() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Target className="h-8 w-8 text-blue-600" />
          <h2 className="text-3xl font-bold text-gray-900">Plan du cours</h2>
        </div>
        <p className="text-xl text-gray-600">
          Explorez chaque section pour maîtriser l&apos;histoire et l&apos;évolution de la puériculture
        </p>
      </div>

      <div className="space-y-4">
        {sections.map((section, index) => (
          <SectionBlock
            key={section.href}
            {...section}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}