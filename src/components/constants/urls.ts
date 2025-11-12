// Ensure SITE_URL is always a valid URL string
const getSiteUrl = (): string => {
  const url = process.env.NEXT_PUBLIC_SITE_URL || 'https://kunkhmer-federation.ru';
  // Ensure URL has protocol
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    return `https://${url}`;
  }
  return url;
};

export const SITE_URL = getSiteUrl();
