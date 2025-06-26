import type { Metadata } from 'next';
import { Audiowide, Noto_Sans_Khmer } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '../contexts/LanguageContext';

const audiowide = Audiowide({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-audiowide',
});

const notoSansKhmer = Noto_Sans_Khmer({
  weight: ['400', '700'],
  subsets: ['khmer'],
  variable: '--font-khmer',
});

export const metadata: Metadata = {
  title: 'RC Computing',
  description: 'Professional Portfolio Website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${audiowide.variable} ${notoSansKhmer.variable} font-english antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
} 