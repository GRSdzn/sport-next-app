import { SITE_URL } from "@/components/constants/urls";
import { Metadata } from "next";

export const homeMeta: Metadata = {
  title: "Федерация Кун Кхмер — официальный сайт",
  description:
    "Федерация Кун Кхмер: новости, мероприятия, клубы и галерея. Узнайте больше о боевом искусстве Кун Кхмер в России.",
  keywords: [
    "кун кхмер",
    "боевые искусства",
    "федерация кун кхмер",
    "чемпионаты",
  ],
  openGraph: {
    title: "Федерация Кун Кхмер — официальный сайт",
    description:
      "Новости, мероприятия и клубы Федерации Кун Кхмер. Следите за событиями и присоединяйтесь!",
    url: SITE_URL,
    siteName: "Федерация Кун Кхмер",
    images: [
      {
        url: `${SITE_URL}/og-home.jpg`,
        width: 1200,
        height: 630,
        alt: "Федерация Кун Кхмер",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  alternates: {
    canonical: `${SITE_URL}/`,
  },
};
