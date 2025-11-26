import { Metadata } from 'next';
import { SITE_URL } from '@/components/constants/urls';

export const aboutMeta: Metadata = {
  title: 'О Кун Кхмер | История боевого искусства Прадал Серей',
  description:
    'Узнайте о Кун Кхмер (Прадал Серей) - древнем камбоджийском боевом искусстве. История, правила, техника и развитие боевого единоборства.',
  keywords: [
    'кун кхмер',
    'прадал серей',
    'боевое искусство',
    'камбоджийский бокс',
    'история кун кхмер',
    'боевой спорт',
    'техника ударов',
  ],
  openGraph: {
    title: 'О Кун Кхмер | История боевого искусства',
    description:
      'Древнее камбоджийское боевое искусство Кун Кхмер - история, техника и развитие спорта',
    url: `${SITE_URL}/about`,
    type: 'website',
    locale: 'ru_RU',
  },
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
};

