import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

export function HeroSection() {
  const { language, t } = useLanguage();

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-audiowide" lang={language}>
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8" lang={language}>
            {t('hero.subtitle')}
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center gap-4"
          >
            <a
              href="#contact"
              className="bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-600 transition-colors font-audiowide"
              lang={language}
            >
              {t('hero.contactButton')}
            </a>
            <a
              href="#portfolio"
              className="border-2 border-blue-500 text-blue-500 px-8 py-3 rounded-full hover:bg-blue-500 hover:text-white transition-colors font-audiowide"
              lang={language}
            >
              {t('hero.portfolioButton')}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 