import './social-significance.section.scss';
import { SIGNIFICANCE_ITEMS } from '@/components/constants/soc-significanse-list';

export const SocialSignificanceSection: React.FC = () => {
  const sectionId = 'social-significance';

  return (
    <section id={sectionId} className="social-significance-section">
      <div className="social-significance-section__container">
        <div className="social-significance-section__title-wrapper">
          <h2
            id={`${sectionId}-title`}
            className="social-significance-section__title"
            aria-labelledby={`${sectionId}-title`}
          >
            Социальная значимость
          </h2>
        </div>

        <div className="social-significance-section__grid">
          {SIGNIFICANCE_ITEMS.map((item) => (
            <div key={item.id} className="social-significance-section__grid-item" itemProp="itemListElement">
              <h3 className="social-significance-section__grid-item-title" itemProp="title">
                {item.title}
              </h3>
              <p className="social-significance-section__grid-item-description" itemProp="description">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
