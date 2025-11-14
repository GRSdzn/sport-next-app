'use client';

import '@/styles/layout/header.scss';
import Image from 'next/image';
import Link from 'next/link';
import { NAV_MENU } from '../constants/nav_menu';
import { Button } from '../ui/Button/Button';
import ContactModal from '../ui/ContactModal/ContactModal';
import CallbackModal from '../ui/CallbackModal/CallbackModal';
import MobileMenu from './MobileMenu/MobileMenu';
import { useState, useEffect, useCallback } from 'react';

type ModalType = 'contact' | 'callback' | null;

export default function Header() {
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Функция для открытия модального окна (закрывает другие автоматически)
  const openModal = useCallback((modalType: ModalType) => {
    setActiveModal(modalType);
    setIsMobileMenuOpen(false); // Закрываем мобильное меню при открытии модалки
  }, []);

  // Функция для закрытия модального окна
  const closeModal = useCallback(() => {
    setActiveModal(null);
  }, []);

  // Функция для переключения мобильного меню
  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  // Функция для закрытия мобильного меню
  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  // Блокировка скролла при открытом мобильном меню
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Слушаем глобальные действия
  useEffect(() => {
    const handler = () => openModal('contact');
    window.addEventListener('open-contact-modal', handler);
    return () => window.removeEventListener('open-contact-modal', handler);
  }, [openModal]);

  return (
    <header className="header" role="banner">
      <div className="header__container">
        <div className="header__logo">
          <Link href="/" className="header__logo-link" aria-label="Федерация Кун Кхмер - перейти на главную страницу">
            <Image
              src="/images/logo.svg"
              alt="Логотип Федерации Кун Кхмер"
              width={116}
              height={45.35}
              priority
            />
          </Link>
        </div>

        <nav className="header__nav" aria-label="Главная навигация" role="navigation">
          {NAV_MENU.map((item, i) =>
            item.action ? (
              <button
                key={i}
                type="button"
                className="header__nav-link"
                onClick={item.action}
                aria-label={item.ariaLabel}
              >
                {item.label}
              </button>
            ) : (
              <Link key={i} href={item.href!} className="header__nav-link">
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="header__actions">
          <div className="header__social" aria-label="Социальные сети">
            <Link
              href="https://vk.com"
              className="header__social-link"
              aria-label="Мы в ВКонтакте"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/images/icons/icon-vk.svg" alt="Иконка ВКонтакте" width={20} height={20} />
            </Link>
            <Link
              href="https://t.me"
              className="header__social-link"
              aria-label="Мы в Telegram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/images/icons/icon-tg.svg" alt="Иконка Telegram" width={20} height={20} />
            </Link>
          </div>
          <div className="header__contact">
            <Button
              type="button"
              className="header__contact-button"
              aria-label="Связаться с Федерацией Кун Кхмер"
              variant="outline"
              size="md"
              onClick={() => openModal('callback')}
            >
              СВЯЗАТЬСЯ
            </Button>
          </div>
          <button
            type="button"
            className="header__burger-button"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={isMobileMenuOpen}
          >
            <Image
              src={isMobileMenuOpen ? '/images/icons/icon-close.svg' : '/images/icons/icon-burger-menu.svg'}
              alt={isMobileMenuOpen ? 'Иконка закрытия' : 'Иконка меню'}
              width={20}
              height={20}
              aria-hidden="true"
            />
          </button>
        </div>
      </div>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} onOpenContactModal={() => openModal('contact')} />

      <ContactModal
        isOpen={activeModal === 'contact'}
        onClose={closeModal}
        onOpenCallback={() => openModal('callback')}
      />
      <CallbackModal isOpen={activeModal === 'callback'} onClose={closeModal} />
    </header>
  );
}
