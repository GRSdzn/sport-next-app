'use client';

import './EventDetailModal.scss';
import React, { useState, useEffect } from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import EmblaCarousel from '@/components/ui/Slider/EmblaCarousel';
import Image from 'next/image';
import { FormattedContent } from '@/components/ui/FormattedContent/FormattedContent';
import { EventDescription } from '@/types/event-list/event-list.type';

export type EventDetailModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: EventDescription;
  date?: string;
  slides?: string[];
  carouselOptions?: EmblaOptionsType;
};

export const EventDetailModal: React.FC<EventDetailModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  date,
  slides = ['/images/slides/slide1.png'],
  carouselOptions = {
    loop: true,
    align: 'center',
    slidesToScroll: 1,
    containScroll: false,
  },
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, mounted]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!mounted || !isOpen) return null;

  return (
    <div className={`event-detail-modal__overlay ${isOpen ? 'is-open' : ''}`} onClick={onClose}>
      <div className="event-detail-modal__container" onClick={(e) => e.stopPropagation()}>
        <div className="event-detail-modal__content">
          <button className="event-detail-modal__back" onClick={onClose} aria-label="Вернуться назад">
            <Image src="/images/icons/icon_arrowleft.svg" alt="Назад" width={32} height={18} />
            <span className="event-detail-modal__back-text">Назад</span>
          </button>
          <div className="event-detail-modal__carousel">
            <EmblaCarousel slides={slides} options={carouselOptions} dots={false} />
          </div>

          <div className="event-detail-modal__info">
            <h2 className="event-detail-modal__title">{title}</h2>

            {description && <FormattedContent content={description} className="event-detail-modal__description" />}
            {date ? (
              <time className="event-detail-modal__date" dateTime={date} title={date}>
                {date}
              </time>
            ) : (
              <p className="event-detail-modal__date">Дата не указана</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
