import './goals-n-objectives.scss';
import Image from 'next/image';
import React from 'react';

interface GoalItem {
  number: number | string;
  text: string;
}

interface GoalsAndObjectivesSectionProps {
  heading?: string;
  goals: GoalItem[];
  images?: { src: string; alt: string; width: number; height: number }[];
  listPosition?: 'left' | 'right';
}

export const GoalsAndObjectivesSection: React.FC<GoalsAndObjectivesSectionProps> = ({
  heading = 'Цели ',
  goals,
  images = [
    { src: '/images/slides/slide3.png', alt: 'Тренировка Федерации', width: 387, height: 477 },
    { src: '/images/slides/slide3.png', alt: 'Соревнования Федерации', width: 285, height: 229 },
    { src: '/images/slides/slide3.png', alt: 'Команда Федерации', width: 285, height: 229 },
  ],
  listPosition = 'left',
}) => {
  const sectionId = 'goals-and-objectives';

  return (
    <section id={sectionId} className="goals-n-obj-section" aria-labelledby={`${sectionId}-title`} itemScope>
      <div className="goals-n-obj-section__container">
        <div
          className={`goals-n-obj-section__content ${
            listPosition === 'right' ? 'goals-n-obj-section__content--reverse' : ''
          }`}
        >
          {/* Список целей */}
          <div className="goals-n-obj-section__list-container">
            <h2 id={`${sectionId}-title`} className="goals-n-obj-section__heading" itemProp="name">
              {heading}
            </h2>

            <ul className="goals-n-obj-section__list" role="list" aria-label={`Список: ${heading}`}>
              {goals.map((goal) => (
                <li key={goal.number} className="goals-n-obj-section__item">
                  <div className="goals-n-obj-section__item-number" aria-hidden="true">
                    {goal.number}
                  </div>
                  <p
                    className="goals-n-obj-section__item-text"
                    dangerouslySetInnerHTML={{ __html: goal.text.replace(/\n/g, '<br />') }}
                  />
                </li>
              ))}
            </ul>
          </div>

          {/* Изображения */}
          <div className="goals-n-obj-section__images" aria-hidden="true" role="presentation">
            {images.map((img, idx) => (
              <div key={idx} className="goals-n-obj-section__image-wrapper">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  loading={idx === 0 ? 'eager' : 'lazy'}
                  className="goals-n-obj-section__image"
                  sizes="(max-width: 480px) 400px, (max-width: 768px) 240px, (max-width: 1024px) 300px, 387px"
                  quality={85}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
