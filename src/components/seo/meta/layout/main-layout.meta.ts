import { Metadata } from 'next';
import { SITE_URL } from '@/components/constants/urls';

export const mainLayoutMeta: Metadata = {
  title: 'Федерация Кун Кхмер — официальный сайт',
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
  openGraph: {
    title: 'Федерация Кун Кхмер — официальный сайт',
    description: 'Новости, мероприятия и клубы Федерации Кун Кхмер. Следите за событиями и присоединяйтесь!',
    url: SITE_URL,
    siteName: 'Федерация Кун Кхмер',
    images: [
      {
        url: `${SITE_URL}/og-home.jpg`,
        width: 1200,
        height: 630,
        alt: 'Федерация Кун Кхмер',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  alternates: {
    canonical: `${SITE_URL}/`,
  },
  category: 'sports',
  classification: 'боевые искусства',
};
