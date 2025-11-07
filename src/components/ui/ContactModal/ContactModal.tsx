'use client';

import Image from 'next/image';
import { Button } from '../Button/Button';
import { useEffect, useState, useCallback } from 'react';
import clsx from 'clsx';
import { createPortal } from 'react-dom';
import './ContactModal.scss';
import { LineSection } from '../Line/Line';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [mounted, setMounted] = useState(false);

  // рендерим только на клиенте
  useEffect(() => {
    setMounted(true);
  }, []);

  // блокировка скролла
  useEffect(() => {
    if (!mounted) return;
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, mounted]);

  // закрытие при клике вне модалки
  const handleOverlayClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) onClose();
    },
    [onClose],
  );

  // закрытие по ESC
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  // пока не смонтировано — ничего не рендерим
  if (!mounted) return null;

  // SEO + a11y: используем role="dialog" + aria атрибуты
  return createPortal(
    <div
      className={clsx('contact-modal__overlay', { open: isOpen })}
      onMouseDown={handleOverlayClick}
      role="presentation"
      aria-hidden={!isOpen}
    >
      <div
        className="contact-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
        aria-describedby="contact-modal-description"
      >
        <div className="contact-modal__head">
          <h1 id="contact-modal-title" className="contact-modal__head-title">
            НАШИ КОНТАКТЫ
          </h1>
          <button type="button" onClick={onClose} className="contact-modal__close" aria-label="Закрыть модальное окно">
            <Image src="/images/icons/icon-close.svg" alt="" width={20} height={20} priority />
          </button>
        </div>

        <div className="contact-modal__body" id="contact-modal-description">
          <div className="contact-modal__contact-list">
            <div className="contact-modal__contact-list-item">
              <Image src="/images/icons/icon-phone.svg" alt="" width={24} height={24} loading="lazy" />
              <div className="contact-modal__contact-list-block">
                <h2 className="contact-modal__contact-list-title">
                  <a href="tel:+79037342796">+7 (903) 734-27-96</a>
                </h2>
                <p className="contact-modal__contact-list-description">
                  Затолочный Денис Владимирович — Президент ФКБМ
                </p>
              </div>
            </div>

            <LineSection />

            <div className="contact-modal__contact-list-item">
              <Image src="/images/icons/icon-phone.svg" alt="" width={24} height={24} loading="lazy" />
              <div className="contact-modal__contact-list-block">
                <h2 className="contact-modal__contact-list-title">
                  <a href="tel:+79037777729">+7 (903) 777-77-29</a>
                </h2>
                <p className="contact-modal__contact-list-description">
                  Серебреников Эмилио Руфатович — Вице-президент ФКБМ
                </p>
              </div>
            </div>

            <LineSection />

            <div className="contact-modal__contact-list-item">
              <Image src="/images/icons/icon-mail.svg" alt="" width={24} height={24} loading="lazy" />
              <div className="contact-modal__contact-list-block">
                <h2 className="contact-modal__contact-list-title">
                  <a href="mailto:Khmer-box@yandex.ru">Khmer-box@yandex.ru</a>
                </h2>
                <p className="contact-modal__contact-list-description">Сотрудничество и партнёрства</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-modal__button">
          <Button
            type="button"
            className="footer__contact-button"
            variant="primary"
            size="fw"
            aria-label="Связаться с нами"
            icon={<Image src="/images/icons/icon-arrow.svg" alt="" width={18} height={18} />}
            iconPosition="right"
          >
            СВЯЗАТЬСЯ
          </Button>
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default ContactModal;
