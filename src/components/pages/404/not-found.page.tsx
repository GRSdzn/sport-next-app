import './not-found.scss';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button/Button';

export const NotFoundPage: React.FC = () => {
  return (
    <main className="not-found-page" role="main">
      <div className="not-found-page__container">
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
      </div>
    </main>
  );
};
