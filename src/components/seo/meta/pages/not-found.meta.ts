import { Metadata } from 'next';
import { SITE_URL } from "@/components/constants/urls";

export const notFoundMeta: Metadata = {
  title: '404 — Страница не найдена',
  description: 'Страница, которую вы ищете, не найдена. Перейдите на главную страницу.',
  robots: 'noindex, nofollow',
  openGraph: {
    title: '404 — Страница не найдена',
    description: 'Страница, которую вы ищете, не найдена. Перейдите на главную страницу.',
    url: SITE_URL,
    siteName: 'Федерация Кун Кхмер — официальный сайт',
    locale: 'ru_RU',
    type: 'website',
  },
};
