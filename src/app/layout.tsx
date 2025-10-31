import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.scss';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { mainLayoutMeta } from '@/components/seo/meta';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export const metadata: Metadata = mainLayoutMeta;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <Header />
        <main className="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
