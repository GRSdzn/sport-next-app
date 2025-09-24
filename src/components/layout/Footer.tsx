import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Логотип и основная информация */}
          <div className="footer-section footer-main">
            <div className="footer-logo">
              <Link href="/">
                <Image 
                  src="/images/logo.svg" 
                  alt="Федерация Кун Кхмер" 
                  className="footer-logo-image"
                  width={120}
                  height={60}
                />
              </Link>
            </div>
            
            <div className="footer-social">
              <h4 className="footer-social-title">Мы в социальных сетях</h4>
              <div className="footer-social-links">
                <a 
                  href="https://vk.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label="ВКонтакте"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1.01-1.49-.856-1.49.302v1.575c0 .424-.135.68-1.258.68-1.848 0-3.896-1.118-5.335-3.202C4.624 10.857 4.03 8.57 4.03 8.082c0-.424.17-.68.442-.68.996 0 1.474.705 1.898 1.872.424 1.17.898 2.538 1.898 2.538.424 0 .68-.17.68-.68V9.315c-.085-1.187-.698-1.29-.698-1.71 0-.254.17-.508.442-.508h2.372c.594 0 .814.305.814.61v3.61c0 .594.27.814.68.814.424 0 .814-.22 1.356-.762 1.694-1.694 2.898-4.298 2.898-4.298.254-.594.678-.847 1.017-.847h1.744c1.017 0 1.237.525.847 1.237-.594 1.017-2.712 4.215-2.712 4.215-.339.594-.254.847 0 1.356.594.847 2.373 2.373 2.373 3.22.085.678-.339 1.017-1.017 1.017z"/>
                  </svg>
                  <span>ВКонтакте</span>
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label="Instagram"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span>Instagram</span>
                </a>
                <a 
                  href="https://t.me" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label="Telegram"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                  <span>Telegram</span>
                </a>
              </div>
            </div>
          </div>

          {/* Навигация */}
          <div className="footer-section footer-nav">
            <h4 className="footer-section-title">Навигация</h4>
            <ul className="footer-nav-list">
              <li className="footer-nav-item">
                <Link href="/clubs" className="footer-nav-link">
                  Клубы
                </Link>
              </li>
              <li className="footer-nav-item">
                <Link href="/federation" className="footer-nav-link">
                  Федерация
                </Link>
              </li>
              <li className="footer-nav-item">
                <Link href="/news" className="footer-nav-link">
                  Новости и мероприятия
                </Link>
              </li>
              <li className="footer-nav-item">
                <Link href="/about" className="footer-nav-link">
                  О Кун Кхмер
                </Link>
              </li>
              <li className="footer-nav-item">
                <Link href="/contacts" className="footer-nav-link">
                  Контакты
                </Link>
              </li>
              <li className="footer-nav-item">
                <Link href="/gallery" className="footer-nav-link">
                  Галерея
                </Link>
              </li>
              <li className="footer-nav-item">
                <Link href="/privacy" className="footer-nav-link">
                  Политика конфиденциальности
                </Link>
              </li>
            </ul>
          </div>

          {/* Контактная информация */}
          <div className="footer-section footer-contacts">
            <h4 className="footer-section-title">Контакты</h4>
            <div className="footer-contact-info">
              <div className="footer-contact-item">
                <div className="footer-contact-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <div className="footer-contact-text">
                  <strong>Адрес:</strong><br />
                  г. Москва, ул. Примерная, д. 123, офис 456
                </div>
              </div>

              <div className="footer-contact-item">
                <div className="footer-contact-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <div className="footer-contact-text">
                  <strong>Телефон:</strong><br />
                  <a href="tel:+79991234567">+7 (999) 123-45-67</a>
                </div>
              </div>

              <div className="footer-contact-item">
                <div className="footer-contact-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <div className="footer-contact-text">
                  <strong>Email:</strong><br />
                  <a href="mailto:info@kunkhmer-federation.ru">info@kunkhmer-federation.ru</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Нижняя часть футера */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="footer-copyright">
              <p>&copy; 2024 Федерация Кун Кхмер. Все права защищены.</p>
            </div>
            <div className="footer-bottom-links">
              <Link href="/privacy" className="footer-bottom-link">
                Политика конфиденциальности
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}