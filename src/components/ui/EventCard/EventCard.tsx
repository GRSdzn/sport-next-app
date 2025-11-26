'use client';

import './EventCard.scss';
import React from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import Image from 'next/image';
import { EventDescription } from '@/types/event-list/event-list.type';
import { useModal } from '@/hooks/useModal';

export type EventCardProps = {
  src: string;
  title: string;
  detailDescription?: EventDescription;
  date?: string;
  alt?: string;
  className?: string;
  slides?: string[];
  carouselOptions?: EmblaOptionsType;
};

export const EventCard: React.FC<EventCardProps> = ({
  src,
  title,
  detailDescription,
  date,
  alt,
  className = '',
  slides = [],
  carouselOptions = {
    loop: true,
    align: 'center',
    slidesToScroll: 1,
    containScroll: false,
  },
}) => {
  const { openEventDetail } = useModal();

  const altText = alt || title;
  const imageTitle = `${title}${date ? ` - ${date}` : ''}`;
  const modalSlides = slides.length > 0 ? slides : [src];

  const handleCardClick = () => {
    openEventDetail({
      title,
      description: detailDescription,
      date,
      slides: modalSlides,
    });
  };

  return (
    <article className={`event-card ${className}`.trim()} onClick={handleCardClick} role="button" tabIndex={0}>
      <div className="event-card__image-wrapper">
        <Image
          src={src}
          alt={altText}
          title={imageTitle}
          fill
          className="event-card__image"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 387px"
        />
      </div>
      <div className="event-card__content">
        {title && (
          <h3 className="event-card__title" title={title}>
            {title}
          </h3>
        )}
        <div className="event-card__meta">
          {date ? (
            <time className="event-card__date" dateTime={date} title={date}>
              {date}
            </time>
          ) : (
            <p className="event-card__date">Дата не указана</p>
          )}
        </div>
      </div>
    </article>
  );
};
