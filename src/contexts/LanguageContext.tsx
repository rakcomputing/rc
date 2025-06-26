'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'km';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    home: 'Home',
    about: 'About',
    services: 'Services',
    skills: 'Skills',
    portfolio: 'Portfolio',
    contact: 'Contact',
    fullStackDev: 'Full-Stack Developer',
    problemSolver: 'Problem Solver',
    innovator: 'Innovator',
    viewPortfolio: 'View My Portfolio',
    hireMe: 'Hire Me',
    downloadResume: 'Download Resume',
    technicalSkills: 'Technical Skills',
    softSkills: 'Soft Skills',
    frontend: 'Frontend',
    backend: 'Backend',
    database: 'Database',
    cloud: 'Cloud',
    teamwork: 'Teamwork',
    problemSolving: 'Problem Solving',
    leadership: 'Leadership',
    communication: 'Communication',
    collaborative: 'Collaborative problem-solving',
    analytical: 'Analytical thinking',
    projectManagement: 'Project management',
    clearEffective: 'Clear and effective',
  },
  km: {
    home: 'ទំព័រដើម',
    about: 'អំពីខ្ញុំ',
    services: 'សេវាកម្ម',
    skills: 'ជំនាញ',
    portfolio: 'វត្ថុប្រើប្រាស់',
    contact: 'ទំនាក់ទំនង',
    fullStackDev: 'អ្នកអភិវឌ្ឍន៍ Full-Stack',
    problemSolver: 'អ្នកដោះស្រាយបញ្ហា',
    innovator: 'អ្នកច្នៃប្រឌិត',
    viewPortfolio: 'មើលវត្ថុប្រើប្រាស់',
    hireMe: 'ជួលខ្ញុំ',
    downloadResume: 'ទាញយកព័ត៌មានរូបខ្លួន',
    technicalSkills: 'ជំនាញបច្ចេកទេស',
    softSkills: 'ជំនាញទន់',
    frontend: 'ផ្នែកខាងមុខ',
    backend: 'ផ្នែកខាងក្រោយ',
    database: 'មូលដ្ឋានទិន្នន័យ',
    cloud: 'ពពក',
    teamwork: 'ការធ្វើការជាក្រុម',
    problemSolving: 'ការដោះស្រាយបញ្ហា',
    leadership: 'ភាពជាអ្នកដឹកនាំ',
    communication: 'ការទំនាក់ទំនង',
    collaborative: 'ការធ្វើការជាក្រុមដើម្បីដោះស្រាយបញ្ហា',
    analytical: 'ការគិតវិភាគ',
    projectManagement: 'ការគ្រប់គ្រងគម្រោង',
    clearEffective: 'ច្បាស់លាស់និងមានប្រសិទ្ធភាព',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleLanguageChange = (newLang: Language) => {
    setLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleLanguageChange, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 