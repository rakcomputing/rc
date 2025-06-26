// 'use client';
// import React from 'react';
// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useLanguage } from '../contexts/LanguageContext';

// export function BlogSection() {
//   const { t, language } = useLanguage();

//   const blogPosts = [
//     {
//       title: t('nextjsBlogTitle'),
//       excerpt: t('nextjsBlogExcerpt'),
//       image: '/image/blog/nextjs.png',
//       date: '2024-02-15',
//       readTime: t('readTime'),
//       category: t('webDevelopment'),
//     },
//     {
//       title: t('reactBlogTitle'),
//       excerpt: t('reactBlogExcerpt'),
//       image: '/image/blog/react.png',
//       date: '2024-02-10',
//       readTime: t('readTime'),
//       category: t('frontend'),
//     },
//     {
//       title: t('apiBlogTitle'),
//       excerpt: t('apiBlogExcerpt'),
//       image: '/image/blog/api.png',
//       date: '2024-02-05',
//       readTime: t('readTime'),
//       category: t('backend'),
//     },
//   ];

//   return (
//     <motion.section
//       id="blog"
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.8 }}
//       className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800"
//     >
//       <div className="max-w-7xl mx-auto">
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12"
//           lang={language}
//         >
//           {t('blog')}
//         </motion.h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {blogPosts.map((post, index) => (
//             <motion.article
//               key={post.title}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8, delay: index * 0.2 }}
//               whileHover={{ scale: 1.05 }}
//               className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden"
//             >
//               <div className="relative h-48">
//                 <Image
//                   src={post.image}
//                   alt={post.title}
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//               <div className="p-6">
//                 <div className="flex items-center justify-between mb-4">
//                   <span className="text-sm text-blue-600 dark:text-blue-400" lang={language}>
//                     {post.category}
//                   </span>
//                   <span className="text-sm text-gray-500 dark:text-gray-400" lang={language}>
//                     {post.readTime}
//                   </span>
//                 </div>
//                 <h3 className="text-xl font-semibold mb-2" lang={language}>{post.title}</h3>
//                 <p className="text-gray-600 dark:text-gray-300 mb-4" lang={language}>
//                   {post.excerpt}
//                 </p>
//                 <Link
//                   href="#"
//                   className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
//                   lang={language}
//                 >
//                   {t('readMore')} →
//                 </Link>
//               </div>
//             </motion.article>
//           ))}
//         </div>
//       </div>
//     </motion.section>
//   );
// } 