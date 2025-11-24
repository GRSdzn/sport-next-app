import Image from 'next/image';
import './federal-achievements.scss';
import { FEDERAL_ACHIEVEMENTS_IMAGES } from '@/components/constants/federal-achievements-images-list';
import { DottedGrid } from '@/components/ui/DottedGrid/DottedGrid';

const DOTTED_GRID_CONFIG = {
  itemSize: 8,
  cols: 4,
  rows: 7,
  gapX: 20,
  gapY: 32,
} as const;

export const FederalAchievementsSection: React.FC = () => {
  const sectionId = 'federal-achievements';

  return (
    <section className="federal-achievements-section" id={sectionId} aria-labelledby={`${sectionId}-title`}>
      <div className="federal-achievements-section__container">
        <DottedGrid className="federal-achievements-section__dotted-grid-bottom-right" {...DOTTED_GRID_CONFIG} />
        <DottedGrid className="federal-achievements-section__dotted-grid-top-left" {...DOTTED_GRID_CONFIG} />
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
              className={`federal-achievements-section__image-wrapper federal-achievements-section__image-wrapper--${index + 1}`}
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
