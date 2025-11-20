import '../styles/globals.scss';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Inter } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { mainLayoutMeta } from '@/components/seo/meta';
import type { Viewport } from 'next';

const bebasNeueCyrillic = localFont({
  src: '../../public/fonts/bebas-neue-regular.woff2',
  display: 'swap',
  variable: '--font-bebas-neue-cyrillic',
});

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-inter',
});

export const viewport: Viewport = {
  themeColor: '#151515',
};
export const metadata: Metadata = mainLayoutMeta;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${bebasNeueCyrillic.variable} ${inter.variable}`}>
        <Header />
        <main className="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
