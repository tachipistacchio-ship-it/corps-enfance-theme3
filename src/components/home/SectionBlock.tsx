'use client';

import Link from 'next/link';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface SectionBlockProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  color: string;
  bgColor: string;
  index: number;
}

export default function SectionBlock({ 
  title, 
  description, 
  href, 
  icon: Icon, 
  color, 
  bgColor,
  index 
}: SectionBlockProps) {
  // Map explicite pour les classes de fond des boutons afin d'éviter la génération dynamique
  const bgMap: Record<string, string> = {
    'text-blue-600': 'bg-blue-600 hover:bg-blue-700',
    'text-green-600': 'bg-green-600 hover:bg-green-700',
    'text-orange-600': 'bg-orange-600 hover:bg-orange-700',
    'text-purple-600': 'bg-purple-600 hover:bg-purple-700',
    'text-red-600': 'bg-red-600 hover:bg-red-700',
    'text-indigo-600': 'bg-indigo-600 hover:bg-indigo-700',
    'text-pink-600': 'bg-pink-600 hover:bg-pink-700',
  };
  const buttonBgClass = bgMap[color] || 'bg-gray-900 hover:bg-gray-800';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="group"
    >
      <Link href={href}>
        <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
          <div className="flex flex-col sm:flex-row items-center sm:items-center justify-between gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-center sm:text-left">
              <div className={`${bgColor} p-3 rounded-full`}>
                <Icon className={`h-5 w-5 sm:h-6 sm:w-6 ${color}`} />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">{title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{description}</p>
              </div>
            </div>
            <button
              aria-label={`Commencer ${title}`}
              className={`${buttonBgClass} text-white px-4 sm:px-6 py-2 rounded-lg font-medium shadow-lg transition-colors text-sm sm:text-base whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900`}
            >
              Commencer
            </button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}