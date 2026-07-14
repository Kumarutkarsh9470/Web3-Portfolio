import type { Metadata } from 'next';
import { Space_Grotesk, Anton } from 'next/font/google';
import './globals.css';

const grotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-grotesk',
  display: 'swap',
});

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-anton',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Kumar Utkarsh — Web3 × AI Engineer',
  description:
    'Kumar Utkarsh builds onchain — smart contracts, DeFi protocols, gasless infrastructure — and explores AI interpretability. B.Tech in Data Science & AI at IIT Guwahati.',
  keywords: [
    'Kumar Utkarsh',
    'Web3 Developer',
    'Smart Contracts',
    'Solidity',
    'DeFi',
    'Ethereum',
    'AI Interpretability',
    'IIT Guwahati',
    'Full Stack Developer',
  ],
  authors: [{ name: 'Kumar Utkarsh' }],
  openGraph: {
    title: 'Kumar Utkarsh — Web3 × AI Engineer',
    description:
      'Smart contracts, DeFi protocols, gasless infrastructure, and AI interpretability. Built at IIT Guwahati.',
    url: 'https://web3-portfolio-beta-sable.vercel.app',
    siteName: 'Kumar Utkarsh',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kumar Utkarsh — Web3 × AI Engineer',
    description:
      'Smart contracts, DeFi protocols, gasless infrastructure, and AI interpretability.',
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
    <html lang="en" className={`${grotesk.variable} ${anton.variable}`}>
      <body className="bg-desk font-sans leading-relaxed text-mut antialiased">
        {children}
      </body>
    </html>
  );
}
