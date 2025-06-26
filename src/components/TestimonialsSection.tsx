'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '../contexts/LanguageContext';

export function TestimonialsSection() {
  const { language, t } = useLanguage();

  const testimonials = [
    {
      name: 'John Doe',
      role: t('testimonials.john.role'),
      content: t('testimonials.john.content'),
      image: '/image/testimonials/john.jpg'
    },
    {
      name: 'Jane Smith',
      role: t('testimonials.jane.role'),
      content: t('testimonials.jane.content'),
      image: '/image/testimonials/jane.jpg'
    },
    {
      name: 'Mike Johnson',
      role: t('testimonials.mike.role'),
      content: t('testimonials.mike.content'),
      image: '/image/testimonials/mike.jpg'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-12 font-audiowide" lang={language}>
            {t('testimonials.title')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold font-audiowide" lang="en">{testimonial.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm" lang={language}>
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300" lang={language}>
                  {testimonial.content}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 