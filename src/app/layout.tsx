import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'My new portfolio page',
  description: 'Generated to practice Next.js and build a fullstack shop',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title as string}</title>
        <meta name="description" content={metadata.description as string} />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}