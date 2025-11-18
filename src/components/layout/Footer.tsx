'use client';

import '@/styles/layout/footer.scss';
import Image from 'next/image';
import { Button } from '../ui/Button/Button';
import Link from 'next/link';
import { FOOTER_BUTTONS } from '../constants/footer-buttons';
import ContactModal from '../ui/ContactModal/ContactModal';
import CallbackModal from '../ui/CallbackModal/CallbackModal';
import { useState, useCallback } from 'react';

type ModalType = 'contact' | 'callback' | null;

export default function Footer() {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const openModal = useCallback((modalType: ModalType) => {
    setActiveModal(modalType);
  }, []);

  const closeModal = useCallback(() => {
    setActiveModal(null);
  }, []);

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__container">
        <section className="footer__line-section" aria-hidden="true">
          <div className="footer__line" />
        </section>

        {/* LOGO + FLEX BUTTONS */}
        <nav className="footer__logo-buttons" aria-label="Основная навигация футера">
          <div className="footer__logo">
            <Link href="/" className="footer__logo-link" aria-label="Федерация Кун Кхмер - перейти на главную страницу">
              <Image src="/images/logo.svg" alt="Логотип Федерации Кун Кхмер" width={116} height={45.35} />
            </Link>
          </div>
          <div className="footer__link-buttons">
            {FOOTER_BUTTONS.map((button) => (
              <Link key={button.href} href={button.href} className="footer__button-link">
                <Button
                  type="button"
                  className="footer__button"
                  variant="secondary"
                  size="sm"
                  aria-label={button.label}
                >
                  {button.label}
                </Button>
              </Link>
            ))}
          </div>
        </nav>
        {/* КОНТАКТНАЯ ИНФОРМАЦИЯ */}
        <address className="footer__socials-container">
          {/* phone */}
          <div className="footer__phone-numbers">
            <div className="footer__phone-content">
              <a
                href="tel:+79037342796"
                className="footer__phone-link"
                aria-label="Позвонить президенту ФКБМ Затолочному Денису Владимировичу"
              >
                <span className="footer__phone-title">+7 (903) 734-27-96</span>
              </a>
              <p className="footer__phone-description">Затолочный Денис Владимирович Президент ФКБМ</p>
            </div>
            <div className="footer__phone-content">
              <a
                href="tel:+79037777729"
                className="footer__phone-link"
                aria-label="Позвонить вице-президенту ФКБМ Серебреникову Эмилио Руфатовичу"
              >
                <span className="footer__phone-title">+7 (903) 777-77-29</span>
              </a>
              <p className="footer__phone-description">Серебреников Эмилио Руфатович Вице-президент ФКБМ</p>
            </div>
          </div>
          {/* email */}
          <div className="footer__email-content">
            <a
              href="mailto:Khmer-box@yandex.ru"
              className="footer__email-link"
              aria-label="Написать на электронную почту для сотрудничества"
            >
              <span className="footer__email-title">Khmer-box@yandex.ru</span>
            </a>
            <p className="footer__email-description">Сотрудничество</p>
          </div>
        </address>

        {/* BUTTON - СВЯЗАТЬСЯ */}
        <div className="footer__button-container">
          <Button
            type="button"
            aria-label="Связаться с нами"
            variant="primary"
            size="lg"
            fullWidth
            icon={<Image src="/images/icons/icon-arrow.svg" alt="Иконка стрелки" width={18} height={18} />}
            iconPosition="right"
            onClick={() => openModal('callback')}
          >
            Связаться
          </Button>
          <p className="footer__privacy-policy">
            <Link
              href="/privacy-policy"
              className="footer__privacy-policy-link"
              aria-label="Политика конфиденциальности"
            >
              Политика конфиденциальности
            </Link>
          </p>
        </div>
      </div>

      <ContactModal
        isOpen={activeModal === 'contact'}
        onClose={closeModal}
        onOpenCallback={() => openModal('callback')}
      />
      <CallbackModal isOpen={activeModal === 'callback'} onClose={closeModal} />
    </footer>
  );
}
