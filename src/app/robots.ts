import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://kunkhmer-federation.ru'

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    host: baseUrl,
    sitemap: [
      `${baseUrl}/sitemap.xml`,
      `${baseUrl}/sitemap-news.xml`,
      `${baseUrl}/sitemap-events.xml`,
      `${baseUrl}/sitemap-clubs.xml`,
      `${baseUrl}/sitemap-gallery.xml`,
      `${baseUrl}/sitemap-contacts.xml`,
      `${baseUrl}/sitemap-privacy.xml`,
      `${baseUrl}/sitemap-terms.xml`,
    ],
  }
}