import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

export function AboutSection() {
  const { language, t } = useLanguage();
const experienceItems = t('about.experience.items');

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-12 font-audiowide" lang={language}>
            {t('about.title')}
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed" lang={language}>
                {t('about.description')}
              </p>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold font-audiowide" lang={language}>
                  {t('about.experience.title')}
                </h3>
                 <ul className="space-y-3">
    {Array.isArray(experienceItems) &&
      experienceItems.map((item, index) => (
        <li key={index} className="flex items-center space-x-2" lang={language}>
          <span className="text-blue-500">•</span>
          <span className="font-audiowide">{item}</span>
        </li>
      ))}
  </ul>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/image/profile.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 