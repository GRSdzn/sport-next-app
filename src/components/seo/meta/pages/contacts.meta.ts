import { Metadata } from 'next';
import { SITE_URL } from '@/components/constants/urls';

export const contactsMeta: Metadata = {
  title: 'Контакты | Федерация Кун Кхмер',
  description: 'Контакты Федерации Кун Кхмер: телефон, email, адрес офиса в Москве. Свяжитесь с нами для получения информации о тренировках.',
  keywords: ['контакты федерации', 'телефон кун кхмер', 'адрес федерации'],
  openGraph: {
    title: 'Контакты | Федерация Кун Кхмер',
    description: 'Контактная информация Федерации Кун Кхмер',
    url: `${SITE_URL}/contacts`,
    type: 'website',
  },
  alternates: {
    canonical: `${SITE_URL}/contacts`,
  },
};

