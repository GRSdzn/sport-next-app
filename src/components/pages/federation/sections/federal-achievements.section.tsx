import Image from 'next/image';
import './federal-achievements.scss';
import { FEDERAL_ACHIEVEMENTS_IMAGES } from '@/components/constants/federal-achievements-images-list';
import { DottedGrid } from '@/components/ui/DottedGrid/DottedGrid';

export const FederalAchievementsSection: React.FC = () => {
  const sectionId = 'federal-achievements';

  return (
    <section className="federal-achievements-section" id={sectionId} aria-labelledby={`${sectionId}-title`}>
      <div className="federal-achievements-section__container">
        <DottedGrid
          itemSize={8}
          style={{ position: 'absolute', bottom: 20, right: 0 }}
          cols={4}
          rows={7}
          gapX={20}
          gapY={32}
        />
        <DottedGrid
          itemSize={8}
          style={{ position: 'absolute', top: 20, left: 0 }}
          cols={4}
          rows={7}
          gapX={20}
          gapY={32}
        />
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
