import React from 'react';
import Image from 'next/image';
import './EventCard.scss';

export type EventCardProps = {
  src: string;
  title: string;
  description?: string;
  date?: string;
  location?: string;
  alt?: string;
  className?: string;
};

export const EventCard: React.FC<EventCardProps> = ({
  src,
  title,
  description,
  date,
  location,
  alt,
  className = '',
}) => {
  const altText = alt || title;
  const imageTitle = `${title}${date ? ` - ${date}` : ''}${location ? ` в ${location}` : ''}`;

  return (
    <article className={`event-card ${className}`.trim()}>
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
        {description && (
          <p className="event-card__description" title={description}>
            {description}
          </p>
        )}
        {(date || location) && (
          <div className="event-card__meta">
            {date && (
              <time className="event-card__date" dateTime={date} title={date}>
                {date}
              </time>
            )}
            {location && (
              <address className="event-card__location" title={location}>
                {location}
              </address>
            )}
          </div>
        )}
      </div>
    </article>
  );
};
