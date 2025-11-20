import './coaching-staff.section.scss';
import Image from 'next/image';
import { COACHING_STAFF_LIST } from '@/components/constants/coaching-staff-list';

export const CoachingStaffSection: React.FC = () => {
  return (
    <section className="coaching-staff-section" aria-labelledby="coaching-staff-title">
      <div className="coaching-staff-section__container">
        <div className="coaching-staff-section__title-wrapper">
          <h2 id="coaching-staff-title" className="coaching-staff-section__title">
            ТРЕНЕРСКИЙ СОСТАВ
          </h2>
          <p className="coaching-staff-section__description">
            Более 120 тренеров федерации, специалисты по Кхмерскому боксу, готовят спортсменов, разрабатывают программы
            и проводят занятия, передавая свой опыт.
          </p>
        </div>
        <div className="coaching-staff-section__grid-container" role="list">
          {COACHING_STAFF_LIST.map((coach) => (
            <article
              key={coach.id}
              className="coaching-staff-section__grid-item"
              role="listitem"
              itemScope
              itemType="https://schema.org/Person"
            >
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
