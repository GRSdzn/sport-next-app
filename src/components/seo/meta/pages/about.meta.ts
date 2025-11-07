import { Metadata } from 'next';
import { SITE_URL } from '@/components/constants/urls';

export const aboutMeta: Metadata = {
  title: 'О федерации | Федерация Кун Кхмер',
  description:
    'Узнайте больше о Федерации Кхмерского бокса Москвы: цели, задачи, структура организации и развитие кхмерского бокса в столице.',
  keywords: ['о федерации', 'кун кхмер москва', 'история кун кхмер', 'цели федерации'],
  openGraph: {
    title: 'О федерации | Федерация Кун Кхмер',
    description: 'Информация о Федерации Кхмерского бокса Москвы',
    url: `${SITE_URL}/about`,
    type: 'website',
  },
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
};

