'use client';

import './EventDetailModal.scss';
import React, { useState, useEffect } from 'react';
import EmblaCarousel from '@/components/ui/Slider/EmblaCarousel';
import { EVENT_DETAIL_MODAL_DATA } from '@/components/constants/event-detail-modal';
import Image from 'next/image';

export type EventDetailModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  date?: string;
  slides?: string[];
  carouselOptions?: any;
};

export const EventDetailModal: React.FC<EventDetailModalProps> = ({
  isOpen,
  onClose,
  title = EVENT_DETAIL_MODAL_DATA.title,
  description = EVENT_DETAIL_MODAL_DATA.description,
  date = EVENT_DETAIL_MODAL_DATA.date,
  slides = EVENT_DETAIL_MODAL_DATA.slides,
  carouselOptions = { loop: true },
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

            {description && <p className="event-detail-modal__description">{description}</p>}
            {date && (
              <time className="event-detail-modal__date" dateTime={date}>
                {date}
              </time>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
