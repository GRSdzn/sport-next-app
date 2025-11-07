import { Metadata } from 'next';
import { SITE_URL } from '@/components/constants/urls';

export const galleryMeta: Metadata = {
  title: 'Галерея | Федерация Кун Кхмер',
  description: 'Галерея — фотографии чемпионатов, тренировок и мероприятий Федерации Кхмерского бокса Москвы. Боевое искусство Кун Кхмер.',
  keywords: ['галерея кун кхмер', 'фото чемпионатов', 'тренировки кун кхмер'],
  openGraph: {
    title: 'Галерея | Федерация Кун Кхмер',
    description: 'Фотографии мероприятий и соревнований',
    url: `${SITE_URL}/gallery`,
    type: 'website',
  },
  alternates: {
    canonical: `${SITE_URL}/gallery`,
  },
};

