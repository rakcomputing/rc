'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

export function ServicesSection() {
  const { language, t } = useLanguage();

  const services = [
    {
      title: t('services.web.title'),
      description: t('services.web.description'),
      technologies: ['React', 'Next.js', 'Node.js'],
      color: 'blue'
    },
    {
      title: t('services.mobile.title'),
      description: t('services.mobile.description'),
      technologies: ['SwiftUI', 'Flutter'],
      color: 'green'
    },
    {
      title: t('services.database.title'),
      description: t('services.database.description'),
      technologies: ['MySQL', 'MongoDB'],
      color: 'purple'
    },
    {
      title: t('services.cloud.title'),
      description: t('services.cloud.description'),
      technologies: ['AWS', 'Firebase', 'Supabase'],
      color: 'orange'
    },
    {
      title: t('services.design.title'),
      description: t('services.design.description'),
      technologies: ['UI/UX', 'User-centered'],
      color: 'pink'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-12 font-audiowide" lang={language}>
            {t('services.title')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-2xl font-semibold mb-4 font-audiowide" lang={language}>
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4" lang={language}>
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 rounded-full text-sm font-medium font-audiowide
                        ${getTagColor(service.color)}`}
                      lang="en"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function getTagColor(color: string): string {
  const colors = {
    blue: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100',
    green: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100',
    purple: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100',
    orange: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100',
    pink: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-100'
  };
  return colors[color as keyof typeof colors] || colors.blue;
} 