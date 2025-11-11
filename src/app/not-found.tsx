import { NotFoundPage } from '@/components/pages/404/not-found.page';
import { notFoundMeta } from '@/components/seo/meta/pages';
import type { Metadata } from 'next';

export const metadata: Metadata = notFoundMeta;

export default function NotFound() {
  return <NotFoundPage />;
}
