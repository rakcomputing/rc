'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useAnimation } from 'framer-motion';
import { Navigation } from '../components/Navigation';
import { ServicesSection } from '../components/ServicesSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
 
import { useLanguage } from '../contexts/LanguageContext';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const controls = useAnimation();
  const { t, language } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, [controls]);

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white dark:bg-gray-900">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800"
          />
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-8"
            >
              <span className="text-blue-600 dark:text-blue-400 text-[50px] font-semibold" lang={language}>
                {t('welcome')}
              </span>
            </motion.div>
            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6"
              lang={language}
            >
              {t('iAm')} <motion.span
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="text-blue-600 dark:text-blue-400"
                lang={language}
              >
                Raksmey Chann
              </motion.span>
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8"
              lang={language}
            >
            DevOps | {t('fullStackDev')} | {t('problemSolver')} | {t('innovator')}
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-10 justify-center"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="#portfolio"
                  className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                  lang={language}
                >
                  {t('viewPortfolio')}
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="#contact"
                  className="px-8 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-full hover:bg-blue-50 transition-colors"
                  lang={language}
                >
                  {t('hireMe')}
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12"
            >
              <div className="flex justify-center space-x-6">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                >
                  <span className="text-2xl">📚</span>
                </a>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                >
                  <span className="text-2xl">💼</span>
                </a>
                <a
                  href="https://twitter.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                >
                  <span className="text-2xl">🐦</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12 font-audiowide" lang={language}>
              {t('about')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 font-audiowide" lang="en">
                    DevOps | Full-Stack Developer | IT Problem Solver
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6" lang="en">
                  I am a passionate software developer with expertise in{' '}
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-audiowide" lang="en">DevOps</span>,{' '}
                                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-audiowide" lang="en">Linux</span>,{' '}
                                                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-audiowide" lang="en">Docker</span>,{' '}

                                                                                             <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-audiowide" lang="en">React.js</span>,{' '}
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-audiowide" lang="en">Next.js</span>,{' '}
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-audiowide" lang="en">Node.js</span>,{' '}
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-audiowide" lang="en">MySQL</span>{' '}
                  and Mobile App:{' '}
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-audiowide" lang="en">React Native</span>,{' '}
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-audiowide" lang="en">SwiftUI</span>,{' '}
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-audiowide" lang="en">Flutter</span>.{' '}
                  With a strong background in web development, I specialize in building scalable applications, optimizing database performance, and implementing secure authentication systems.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  {/* Tech Stack Icons */}
                  <div className="w-12 h-12 bg-white dark:bg-gray-700 rounded-lg flex items-center justify-center shadow-md">
                    <span className="text-2xl">⚛️</span>
                  </div>
                  <div className="w-12 h-12 bg-white dark:bg-gray-700 rounded-lg flex items-center justify-center shadow-md">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <div className="w-12 h-12 bg-white dark:bg-gray-700 rounded-lg flex items-center justify-center shadow-md">
                    <span className="text-2xl">💻</span>
                  </div>
                </div>
                <Link
                  href="/resume.pdf"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors font-audiowide" lang="en"
                >
                  <span className="mr-2">📄</span>
                  Download Resume
                </Link>
              </div>
              <div className="relative h-96">
                <Image
                  src="/image/profile.jpg"
                  alt="Profile"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>
 {/* Portfolio Section */}
        <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12 font-audiowide" lang="en">
              Code Complete
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project 1 */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/image/projects/project1.png"
                    alt="Project 1"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 font-audiowide" lang="en">E-Commerce Krama App</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4" lang="en">
                    A full-stack e-commerce platform built with Next.js, Node.js, and MongoDB.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-audiowide" lang="en">
                      Next.js
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-audiowide" lang="en">
                      Node.js
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-audiowide" lang="en">
                      MongoDB
                    </span>
                  </div>
                  <div className="flex gap-4">
                    <Link
                      href="https://github.com/yourusername/project1"
                      className="text-blue-600 hover:text-blue-800 font-audiowide" lang="en"
                      target="_blank"
                    >
                      GitHub
                    </Link>
                    <Link
                      href="https://storekrama.com"
                      className="text-blue-600 hover:text-blue-800 font-audiowide" lang="en"
                      target="_blank"
                    >
                      Website
                    </Link>
                     <Link
                      href="https://kramapannel.vercel.app/login"
                      className="text-blue-600 hover:text-blue-800 font-audiowide" lang="en"
                      target="_blank"
                    >
                      Pannel
                    </Link>
                  </div>
                </div>
              </div>

              {/* Project 2 */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/image/projects/project2.png"
                    alt="Project 2"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 font-audiowide" lang="en">Doctor Net Website News</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4" lang="en">
                    Doctor Net Website News around the world  with real-time updates.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-audiowide" lang="en">
                      Next Js
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-audiowide" lang="en">
                      MySQL 
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-audiowide" lang="en">
                      Tailwind CSS 
                    </span>
                  </div>
                  <div className="flex gap-4">
                    <Link
                      href="https://github.com/yourusername/project2"
                      className="text-blue-600 hover:text-blue-800 font-audiowide" lang="en"
                      target="_blank"
                    >
                      GitHub
                    </Link>
                    <Link
                      href="https://www.doctornet.blog/"
                      className="text-blue-600 hover:text-blue-800 font-audiowide" lang="en"
                      target="_blank"
                    >
                      Website
                    </Link>
                     <Link
                      href="https://doctoridea-pannel-six.vercel.app/login"
                      className="text-blue-600 hover:text-blue-800 font-audiowide" lang="en"
                      target="_blank"
                    >
                      Pannel
                    </Link>
                  </div>
                </div>
              </div>

              {/* Project 3 */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/image/projects/project3.png"
                    alt="Project 3"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 font-audiowide" lang="en">HR Mamangement System of Health</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4" lang="en">
                   HR Management System for Health is a digital platform  for real time updates.
             </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-audiowide" lang="en">
                  React Js
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-audiowide" lang="en">
                   Node Js 
                    </span>
                     <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-audiowide" lang="en">
                Express Js 
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-audiowide" lang="en">
                     Mysql 
                    </span>
                  </div>
                  <div className="flex gap-4">
                    <Link
                      href="https://github.com/yourusername/project3"
                      className="text-blue-600 hover:text-blue-800 font-audiowide" lang="en"
                      target="_blank"
                    >
                      GitHub
                    </Link>
                   
                    <Link
                      href="https://my.votmean.app"
                      className="text-blue-600 hover:text-blue-800 font-audiowide" lang="en"
                      target="_blank"
                    >
                      Website
                    </Link>
                  </div>
                </div>
              </div>

                  {/* Project 4 */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/image/projects/project4.jpg"
                    alt="Project 3"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 font-audiowide" lang="en">Bloob Donation of Stueng Treng Hospital</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4" lang="en">
                   🩸 Blood Donation – Stueng Treng Hospital
          Donate blood today to help save lives! Visit the Blood Transfusion Unit at Stueng Treng Hospital, Monday to Friday, 8AM–4PM. One donation can save up to three lives.
             </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-audiowide" lang="en">
                    Next js
                    </span>
                       <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-audiowide" lang="en">
                      TypeScripte
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-audiowide" lang="en">
                       Google Cloude
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-audiowide" lang="en">
                      Node js  
                    </span>
                       <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-audiowide" lang="en">
                      Express Js 
                    </span>
                   
                  </div>
                  <div className="flex gap-4">
                    <Link
                      href="https://github.com/yourusername/project3"
                      className="text-blue-600 hover:text-blue-800 font-audiowide" lang="en"
                      target="_blank"
                    >
                      GitHub
                    </Link>
                   
                    <Link
                      href="https://sth.votmean.app/"
                      className="text-blue-600 hover:text-blue-800 font-audiowide" lang="en"
                      target="_blank"
                    >
                     Website
                    </Link>
                     <Link
                      href="https://sthposts.votmean.app/"
                      className="text-blue-600 hover:text-blue-800 font-audiowide" lang="en"
                      target="_blank"
                    >
                      Pannel
                    </Link>
                  </div>
                </div>
              </div>

                     {/* Project 5 */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/image/projects/project5.jpg"
                    alt="Project 3"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 font-audiowide" lang="en">Products Cloud Pannel</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4" lang="en">
                  Pannel of Product Cloud store all configration !
                 </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-audiowide" lang="en">
                    Next js
                    </span>
                       <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-audiowide" lang="en">
                      TypeScripte
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-audiowide" lang="en">
                       Google Cloude
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-audiowide" lang="en">
                      Node js  
                    </span>
                       <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-audiowide" lang="en">
                      Express Js 
                    </span>
                   
                  </div>
                  <div className="flex gap-4">
                    <Link
                      href="https://github.com/yourusername/project3"
                      className="text-blue-600 hover:text-blue-800 font-audiowide" lang="en"
                      target="_blank"
                    >
                      GitHub
                    </Link>
                   
                    <Link
                      href="https://kramapannel.vercel.app/login"
                      className="text-blue-600 hover:text-blue-800 font-audiowide" lang="en"
                      target="_blank"
                    >
                      Website
                    </Link>
                  </div>
                </div>
              </div>


                        {/* Project 6 */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/image/projects/project6.jpeg"
                    alt="Project 3"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 font-audiowide" lang="en">News  Pannel</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4" lang="en">
                   This is All article to news website and  all configration !
                 </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-audiowide" lang="en">
                    Next js
                    </span>
                       <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-audiowide" lang="en">
                      TypeScripte
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-audiowide" lang="en">
                       Mysql Server
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-audiowide" lang="en">
                      Node js  
                    </span>
                       <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-audiowide" lang="en">
                      Express Js 
                    </span>
                   
                  </div>
                  <div className="flex gap-4">
                    <Link
                      href="https://github.com/yourusername/project3"
                      className="text-blue-600 hover:text-blue-800 font-audiowide" lang="en"
                      target="_blank"
                    >
                      GitHub
                    </Link>
                   
                    <Link
                      href="https://doctoridea-pannel-six.vercel.app/login"
                      className="text-blue-600 hover:text-blue-800 font-audiowide" lang="en"
                      target="_blank"
                    >
                      Website
                    </Link>
                  </div>
                </div>
              </div>

                        {/* Project 7 */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/image/projects/project7.jpeg"
                    alt="Project 3"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 font-audiowide" lang="en">Website Any Article</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4" lang="en">
                    This is website for any article easy for Astera !
                 </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-audiowide" lang="en">
                    React js
                    </span>
                       <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-audiowide" lang="en">
                      Javascript
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-audiowide" lang="en">
                       Mysql Server
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-audiowide" lang="en">
                      Node js  
                    </span>
                       <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-audiowide" lang="en">
                      Express Js 
                    </span>
                    
                    
                  </div>
                  <p>------------------</p>
                  <div className='flex flex-wrap gap-2 mb-4'>
                      <span className="px-3 py-1 bg-red-100 text-blue-800 rounded-full text-sm font-audiowide" lang="en">
                     Free Website  
                    </span>
                    <br/>
                     <span className="px-3 py-1 bg-red-100 text-blue-800 rounded-full text-sm font-audiowide" lang="en">
                    Frontend  
                    </span>
                     <span className="px-3 py-1 bg-red-100 text-blue-800 rounded-full text-sm font-audiowide" lang="en">
                     Backend    
                    </span>
                     <span className="px-3 py-1 bg-red-100 text-blue-800 rounded-full text-sm font-audiowide" lang="en">
                        Database 
                    </span>
                  </div>
                  <div className="flex gap-4">
                    <Link
                      href="https://github.com/yourusername/project3"
                      className="text-blue-600 hover:text-blue-800 font-audiowide" lang="en"
                      target="_blank"
                    >
                      GitHub
                    </Link>
                   
                    <Link
                      href="https://doctoridea-pannel-six.vercel.app/login"
                      className="text-blue-600 hover:text-blue-800 font-audiowide" lang="en"
                      target="_blank"
                    >
                      Website
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12 font-audiowide" lang={language}>
              {t('services')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Web Development */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <div className="text-4xl mb-4">🌐</div>
                <h3 className="text-xl font-semibold mb-2 font-audiowide" lang="en">Web Development</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-audiowide" lang="en">React</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-audiowide" lang="en">Next.js</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-audiowide" lang="en">Node.js</span>
                </div>
              </div>

              {/* Mobile Development */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-xl font-semibold mb-2 font-audiowide" lang="en">Mobile Development</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-audiowide" lang="en">React Native</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-audiowide" lang="en">SwiftUI</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-audiowide" lang="en">Flutter</span>
                </div>
              </div>

              {/* Database Management */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <div className="text-4xl mb-4">🗄️</div>
                <h3 className="text-xl font-semibold mb-2 font-audiowide" lang="en">Database Management</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-audiowide" lang="en">MySQL</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-audiowide" lang="en">MongoDB</span>
                </div>
              </div>

              {/* Cloud Solutions */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <div className="text-4xl mb-4">☁️</div>
                <h3 className="text-xl font-semibold mb-2 font-audiowide" lang="en">Cloud Solutions</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-audiowide" lang="en">AWS</span>
                  <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-audiowide" lang="en">Firebase</span>
                  <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-audiowide" lang="en">Supabase</span>
                </div>
              </div>

              {/* UI/UX Design */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-xl font-semibold mb-2 font-audiowide" lang="en">UI/UX Design</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm font-audiowide" lang="en">UI/UX</span>
                  <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm font-audiowide" lang="en">User-centered</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12 font-audiowide" lang={language}>
              {t('skills')}
            </h2>
            
            {/* Technical Skills */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center font-audiowide" lang={language}>
                {t('technicalSkills')}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {/* Frontend */}
                <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                  <h4 className="text-lg font-semibold mb-4 font-audiowide" lang={language}>{t('frontend')}</h4>
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-audiowide" lang="en">React</span>
                        <span className="text-sm font-audiowide" lang="en">90%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-audiowide" lang="en">Next.js</span>
                        <span className="text-sm font-audiowide" lang="en">85%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Backend */}
                <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                  <h4 className="text-lg font-semibold mb-4 font-audiowide" lang={language}>{t('backend')}</h4>
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-audiowide" lang="en">Node.js</span>
                        <span className="text-sm font-audiowide" lang="en">85%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-audiowide" lang="en">Python</span>
                        <span className="text-sm font-audiowide" lang="en">80%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Database */}
                <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                  <h4 className="text-lg font-semibold mb-4 font-audiowide" lang={language}>{t('database')}</h4>
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-audiowide" lang="en">MySQL</span>
                        <span className="text-sm font-audiowide" lang="en">90%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-audiowide" lang="en">MongoDB</span>
                        <span className="text-sm font-audiowide" lang="en">85%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cloud */}
                <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                  <h4 className="text-lg font-semibold mb-4 font-audiowide" lang={language}>{t('cloud')}</h4>
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-audiowide" lang="en">AWS</span>
                        <span className="text-sm font-audiowide" lang="en">80%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-audiowide" lang="en">Firebase</span>
                        <span className="text-sm font-audiowide" lang="en">85%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Soft Skills */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center font-audiowide" lang={language}>
                {t('softSkills')}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg text-center">
                  <div className="text-4xl mb-4">🤝</div>
                  <h4 className="text-lg font-semibold font-audiowide" lang={language}>{t('teamwork')}</h4>
                  <p className="text-gray-600 dark:text-gray-300 font-audiowide" lang="en">{t('collaborative')}</p>
                </div>
                <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg text-center">
                  <div className="text-4xl mb-4">💡</div>
                  <h4 className="text-lg font-semibold font-audiowide" lang={language}>{t('problemSolving')}</h4>
                  <p className="text-gray-600 dark:text-gray-300 font-audiowide" lang="en">{t('analytical')}</p>
                </div>
                <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg text-center">
                  <div className="text-4xl mb-4">🎯</div>
                  <h4 className="text-lg font-semibold font-audiowide" lang={language}>{t('leadership')}</h4>
                  <p className="text-gray-600 dark:text-gray-300 font-audiowide" lang="en">{t('projectManagement')}</p>
                </div>
                <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg text-center">
                  <div className="text-4xl mb-4">💬</div>
                  <h4 className="text-lg font-semibold font-audiowide" lang={language}>{t('communication')}</h4>
                  <p className="text-gray-600 dark:text-gray-300 font-audiowide" lang="en">{t('clearEffective')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

       
        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12 font-audiowide" lang={language}>
              {t('contact')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 font-audiowide" lang="en">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-600 dark:border-gray-500 dark:text-white font-audiowide" lang="en"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 font-audiowide" lang="en">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-600 dark:border-gray-500 dark:text-white font-audiowide" lang="en"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 font-audiowide" lang="en">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-600 dark:border-gray-500 dark:text-white font-audiowide" lang="en"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-audiowide" lang="en"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 font-audiowide" lang="en">
                    Get in Touch
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 font-audiowide" lang="en">
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="text-2xl">📧</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white font-audiowide" lang="en">Email</h4>
                      <a href="mailto:raksmey.itmoh@gmail.com" className="text-blue-600 hover:text-blue-800 font-audiowide" lang="en">
                        raksmey.itmoh@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="text-2xl">📱</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white font-audiowide" lang="en">Phone</h4>
                      <a href="tel:+1234567890" className="text-blue-600 hover:text-blue-800 font-audiowide" lang="en">
                        +855 0885 290 240 / +855 010 290 240
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="text-2xl">📍</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white font-audiowide" lang="en">Location</h4>
                      <p className="text-gray-600 dark:text-gray-300 font-audiowide" lang="en">
                       Prek Village, Stung Treng District, Stung Treng Commune, Stung Treng Province, Cambodia
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4 font-audiowide" lang="en">Follow Me</h4>
                  <div className="flex space-x-4">
                    <a
                      href="https://github.com/yourusername"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                    >
                      <span className="text-2xl">📚</span>
                    </a>
                    <a
                      href="https://linkedin.com/in/yourusername"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                    >
                      <span className="text-2xl">💼</span>
                    </a>
                    <a
                      href="https://twitter.com/yourusername"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                    >
                      <span className="text-2xl">🐦</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
} 