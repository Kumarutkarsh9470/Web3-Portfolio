import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Kumar Utkarsh — Software Engineer',
  description:
    'Kumar Utkarsh is a software engineer and B.Tech student at IIT Guwahati who builds robust, scalable, and interactive experiences for the web.',
  keywords: [
    'Kumar Utkarsh',
    'Software Engineer',
    'IIT Guwahati',
    'Full Stack Developer',
    'React',
    'TypeScript',
    'Next.js',
  ],
  authors: [{ name: 'Kumar Utkarsh' }],
  openGraph: {
    title: 'Kumar Utkarsh — Software Engineer',
    description:
      'Kumar Utkarsh is a software engineer and B.Tech student at IIT Guwahati who builds robust, scalable, and interactive experiences for the web.',
    url: 'https://kumarutkarsh.dev',
    siteName: 'Kumar Utkarsh',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kumar Utkarsh — Software Engineer',
    description:
      'Kumar Utkarsh is a software engineer and B.Tech student at IIT Guwahati who builds robust, scalable, and interactive experiences for the web.',
    creator: '@KumarUt0141795',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} scroll-smooth`}>
      <body className="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
        {children}
      </body>
    </html>
  );
}
