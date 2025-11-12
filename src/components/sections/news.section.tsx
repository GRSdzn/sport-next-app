import './news.section.scss';
import { NewsTabs } from '@/components/features/news/NewsTabs';

export type NewsSectionProps = {
  showAllButton?: boolean;
  showLine?: boolean;
};

export const NewsSection: React.FC<NewsSectionProps> = ({ showAllButton = false, showLine = true }) => {
  return (
    <section className="news-section">
      <div className="news-section__wrapper">
        <div className="news-section__container">
          <h2 className="news-section__title">НОВОСТИ И МЕРОПРИЯТИЯ</h2>
          <div className="news-section__tabs-wrapper">
            <div className="news-section__tabs-container">
              <NewsTabs defaultTab="news" showLine={showLine} />
              {showAllButton && (
                <div className="news-section__button-wrapper">
                  <button
                    className="news-section__show-all-button"
                    type="button"
                    aria-label="Смотреть все новости и мероприятия"
                  >
                    СМОТРЕТЬ ВСЕ
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
