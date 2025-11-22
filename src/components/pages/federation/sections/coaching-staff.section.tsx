import './coaching-staff.section.scss';
import Image from 'next/image';
import { COACHING_STAFF_LIST } from '@/components/constants/coaching-staff-list';
import { DottedGrid } from '@/components/ui/DottedGrid/DottedGrid';

export const CoachingStaffSection: React.FC = () => {
  const sectionId = 'coaching-staff';

  return (
    <section id={sectionId} className="coaching-staff-section" aria-labelledby={`${sectionId}-title`}>
      <div className="coaching-staff-section__container">
        <div className="coaching-staff-section__title-wrapper">
          <h2 id={`${sectionId}-title`} className="coaching-staff-section__title">
            ТРЕНЕРСКИЙ СОСТАВ
          </h2>
          <p className="coaching-staff-section__description">
            Более 120 тренеров федерации, специалисты по Кхмерскому боксу, готовят спортсменов, разрабатывают программы
            и проводят занятия, передавая свой опыт.
          </p>
        </div>
        <div className="coaching-staff-section__grid-container" role="list">
          <DottedGrid
            itemSize={8}
            style={{ position: 'absolute', bottom: 20, right: 0 }}
            cols={7}
            rows={5}
            gapX={32}
            gapY={20}
          />

          {COACHING_STAFF_LIST.map((coach) => (
            <article key={coach.id} className="coaching-staff-section__grid-item" role="listitem">
              <Image
                src={coach.imageUrl}
                alt={coach.imageAlt}
                width={coach.imageWidth}
                height={coach.imageHeight}
                className="coaching-staff-section__grid-item-image"
                loading="lazy"
                quality={85}
                itemProp="image"
              />
              <h3 className="coaching-staff-section__grid-item-title" itemProp="name">
                {coach.name}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
