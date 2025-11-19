'use client';

import Link from 'next/link';
import { memo } from 'react';
import clsx from 'clsx';
import { NAV_MENU } from '@/components/constants/nav_menu';
import './MobileMenu.scss';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContactModal: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = memo(({ isOpen, onClose, onOpenContactModal }) => {
  const handleContactClick = () => {
    onClose();
    onOpenContactModal();
  };

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <div className={clsx('mobile-menu', { 'mobile-menu--open': isOpen })} role="navigation" aria-label="Мобильное меню">
      <nav className="mobile-menu__nav">
        {NAV_MENU.map((item, i) =>
          item.action ? (
            <button
              key={i}
              type="button"
              className="mobile-menu__nav-link"
              onClick={handleContactClick}
              aria-label={item.ariaLabel}
            >
              {item.label}
            </button>
          ) : (
            <Link key={i} href={item.href!} className="mobile-menu__nav-link" onClick={handleLinkClick}>
              {item.label}
            </Link>
          ),
        )}
      </nav>

      <div className="mobile-menu__contacts">
        <div className="mobile-menu__contact-item">
          <div className="mobile-menu__contact-info">
            <a href="tel:+79037342796" className="mobile-menu__contact-phone">
              +7 (903) 734-27-96
            </a>
            <p className="mobile-menu__contact-name">Затолочный Денис Владимирович</p>
            <p className="mobile-menu__contact-position">Президент ФКБМ</p>
          </div>
        </div>

        <div className="mobile-menu__contact-item">
          <div className="mobile-menu__contact-info">
            <a href="tel:+79037777729" className="mobile-menu__contact-phone">
              +7 (903) 777-77-29
            </a>
            <p className="mobile-menu__contact-name">Серебреников Эмилио Руфатович</p>
            <p className="mobile-menu__contact-position">Вице-президент ФКБМ</p>
          </div>
        </div>

        <div className="mobile-menu__contact-item">
          <div className="mobile-menu__contact-info">
            <a href="mailto:Khmer-box@yandex.ru" className="mobile-menu__contact-email">
              Khmer-box@yandex.ru
            </a>
            <p className="mobile-menu__contact-position">Сотрудничество</p>
          </div>
        </div>
      </div>
    </div>
  );
});

MobileMenu.displayName = 'MobileMenu';

export default MobileMenu;
