import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button/Button';
import './not-found.scss';

export const NotFoundPage: React.FC = () => {
  return (
    <main className="not-found-page" role="main">
      {/* SEO: используем semantic элементы */}
      <div className="not-found-page__content">
        <h1 className="not-found-page__title">404</h1>
        <p className="not-found-page__description">
          К сожалению, страница, которую вы искали, не существует или не найдена :(
        </p>
        <Link href="/" className="not-found-page__link" aria-label="Перейти на главную страницу">
          <Button
            type="button"
            variant="primary"
            size="lg"
            icon={<Image src="/images/icons/icon-arrow.svg" alt="" width={18} height={18} />}
            iconPosition="right"
            className="not-found-page__button"
            aria-label="На главную"
          >
            НА ГЛАВНУЮ
          </Button>
        </Link>
      </div>
    </main>
  );
};

// SEO meta для Next.js можно добавить в route-level файле
export const metadata = {
  title: '404 — Страница не найдена',
  description: 'Страница, которую вы ищете, не найдена. Перейдите на главную страницу.',
  robots: 'noindex, nofollow',
};
