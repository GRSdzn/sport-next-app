import Image from 'next/image';
import React from 'react';
import './GoalsNObjectives.scss';

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
  return (
    <section
      className="goals-n-obj-section"
      aria-labelledby="goals-heading"
      itemScope
      itemType="https://schema.org/Organization"
    >
      <div className="goals-n-obj-section__container">
        <div
          className={`goals-n-obj-section__content ${
            listPosition === 'right' ? 'goals-n-obj-section__content--reverse' : ''
          }`}
        >
          {/* Список целей */}
          <div className="goals-n-obj-section__list-container">
            <h2 id="goals-heading" className="goals-n-obj-section__heading" itemProp="name">
              {heading}
            </h2>

            <ul
              className="goals-n-obj-section__list"
              itemProp="makesOffer"
              itemScope
              itemType="https://schema.org/ItemList"
            >
              {goals.map((goal) => (
                <li key={goal.number} className="goals-n-obj-section__item" itemProp="itemListElement">
                  <div className="goals-n-obj-section__item-number">{goal.number}</div>
                  <p
                    className="goals-n-obj-section__item-text"
                    dangerouslySetInnerHTML={{
                      __html: goal.text.replace(/\n/g, '<br />'),
                    }}
                  />
                </li>
              ))}
            </ul>
          </div>

          {/* Изображения */}
          <div className="goals-n-obj-section__images" aria-hidden="true">
            {images.map((img, idx) => (
              <div key={idx} className="goals-n-obj-section__image-wrapper">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  loading={idx === 0 ? 'eager' : 'lazy'}
                  className="goals-n-obj-section__image"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
