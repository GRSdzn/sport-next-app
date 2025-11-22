import Image from 'next/image';
import './federal-achievements.scss';
import { FEDERAL_ACHIEVEMENTS_IMAGES } from '@/components/constants/FEDERAL_ACHIEVEMENTS_IMAGES-list';

export const FederalAchievementsSection: React.FC = () => {
  const sectionId = 'federal-achievements';

  return (
    <section className="federal-achievements-section" id={sectionId} aria-labelledby={`${sectionId}-title`}>
      <div className="federal-achievements-section__container">
        <div className="federal-achievements-section__title-wrapper">
          <h2 id={`${sectionId}-title`} className="federal-achievements-section__title" itemProp="headline">
            Заслуги федерации
          </h2>
        </div>

        <div
          className="federal-achievements-section__images-container"
          role="region"
          aria-label="Галерея достижений федерации"
        >
          {FEDERAL_ACHIEVEMENTS_IMAGES.map((achievement, index) => (
            <figure
              key={achievement.image}
              className="federal-achievements-section__image-wrapper"
              style={{ gridArea: `img${index + 1}` }}
            >
              <Image
                src={achievement.image}
                alt={achievement.alt}
                width={220}
                height={300}
                loading="lazy"
                className="federal-achievements-section__image"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
