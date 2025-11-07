import { MetadataRoute } from 'next';
import { SITE_URL } from '@/components/constants/urls';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    host: SITE_URL,
    sitemap: [
      `${SITE_URL}/sitemap.xml`,
      `${SITE_URL}/sitemap-news.xml`,
      `${SITE_URL}/sitemap-events.xml`,
      `${SITE_URL}/sitemap-clubs.xml`,
      `${SITE_URL}/sitemap-gallery.xml`,
      `${SITE_URL}/sitemap-contacts.xml`,
      `${SITE_URL}/sitemap-privacy.xml`,
      `${SITE_URL}/sitemap-terms.xml`,
      `${SITE_URL}/sitemap-404.xml`,
    ],
  };
}
