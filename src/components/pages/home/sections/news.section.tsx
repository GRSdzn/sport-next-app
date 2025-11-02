import './news.section.scss';
import { NewsTabs } from '@/components/features/news/NewsTabs';
import type { EventCardProps } from '@/components/ui/EventCard';

export const NewsSection: React.FC = () => {
  return (
    <section className="news-section">
      <div className="news-section__container">
        <h1 className="news-section__title">НОВОСТИ И МЕРОПРИЯТИЯ</h1>
        <div className="news-section__tabs-wrapper">
          <div className="news-section__tabs-container">
            <NewsTabs defaultTab="news" />
            <div className="news-section__button-wrapper">
              <button
                className="news-section__show-all-button"
                type="button"
                aria-label="Смотреть все новости и мероприятия"
              >
                СМОТРЕТЬ ВСЕ
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
