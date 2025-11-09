'use client';

import '@/styles/layout/header.scss';
import Image from 'next/image';
import Link from 'next/link';
import { NAV_MENU } from '../constants/nav_menu';
import { Button } from '../ui/Button/Button';
import ContactModal from '../ui/ContactModal/ContactModal';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // слушаем глобальные действия
  useEffect(() => {
    const handler = () => setIsModalOpen(true);
    window.addEventListener('open-contact-modal', handler);
    return () => window.removeEventListener('open-contact-modal', handler);
  }, []);

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
              style={{ width: 'auto', height: 'auto' }}
            />
          </Link>
        </div>

        <nav className="header__nav" aria-label="Главная навигация" role="navigation">
          {NAV_MENU.map((item, i) =>
            item.action ? (
              <button key={i} type="button" className="header__nav-link" onClick={item.action}>
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
              onClick={() => {}}
            >
              СВЯЗАТЬСЯ
            </Button>
          </div>
          <button type="button" className="header__burger-button" aria-label="Открыть меню">
            <Image
              src="/images/icons/icon-burger-menu.svg"
              alt="Иконка меню"
              width={20}
              height={20}
              aria-hidden="true"
            />
          </button>
        </div>
      </div>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </header>
  );
}
