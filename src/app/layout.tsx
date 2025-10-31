import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '../styles/globals.scss';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { mainLayoutMeta } from '@/components/seo/meta';

const bebasNeueCyrillic = localFont({
  src: '../../public/fonts/bebas-neue-regular.woff2',
  display: 'swap',
  variable: '--font-bebas-neue-cyrillic',
});

export const metadata: Metadata = mainLayoutMeta;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={bebasNeueCyrillic.className}>
        <Header />
        <main className="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
