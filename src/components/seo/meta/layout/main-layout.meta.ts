import { Metadata } from 'next';
import { SITE_URL } from '@/components/constants/urls';

export const mainLayoutMeta: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Федерация Кун Кхмер — официальный сайт',
    template: '%s | Федерация Кун Кхмер',
  },
  description:
    'Федерация Кун Кхмер: новости, мероприятия, клубы и галерея. Узнайте больше о боевом искусстве Кун Кхмер в России.',
  keywords: [
    'кун кхмер',
    'кхмерский бокс',
    'боевые искусства',
    'федерация кун кхмер',
    'федерация кхмерского бокса москвы',
    'чемпионаты',
    'спорт москва',
    'боевые искусства москва',
    'кун кхмер москва',
    'тренировки кун кхмер',
    'бокс',
  ],
  authors: [{ name: 'Федерация Кун Кхмер' }],
  creator: 'Федерация Кун Кхмер',
  publisher: 'Федерация Кун Кхмер',
  applicationName: 'Федерация Кун Кхмер',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Кун Кхмер',
  },
  openGraph: {
    title: 'Федерация Кун Кхмер — официальный сайт',
    description: 'Новости, мероприятия и клубы Федерации Кун Кхмер. Следите за событиями и присоединяйтесь!',
    url: SITE_URL,
    siteName: 'Федерация Кун Кхмер',
    images: [
      {
        url: '/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'Федерация Кун Кхмер',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.ico',
  },
  category: 'sports',
  classification: 'боевые искусства',
};
