import { Metadata } from 'next';
import { SITE_URL } from '@/components/constants/urls';

export const federationMeta: Metadata = {
  title: 'Федерация | Федерация Кун Кхмер',
  description:
    'Информация о Федерации Кун Кхмер: цели, задачи, руководство, тренерский состав и достижения. Узнайте подробно о структуре и развитии федерации.',
  keywords: [
    'федерация кун кхмер',
    'информация о федерации',
    'цели федерации',
    'задачи федерации',
    'руководство кун кхмер',
    'тренерский состав',
    'достижения федерации',
    'социальная значимость',
  ],
  openGraph: {
    title: 'Федерация | Федерация Кун Кхмер',
    description: 'Полная информация о Федерации Кун Кхмер, её целях, задачах, руководстве и достижениях',
    url: `${SITE_URL}/federation`,
    type: 'website',
  },
  alternates: {
    canonical: `${SITE_URL}/federation`,
  },
};
