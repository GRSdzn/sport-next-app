import '@/styles/layout/footer.scss';
import Image from 'next/image';
import { Button } from '../ui/Button/Button';
import Link from 'next/link';
import { FOOTER_BUTTONS } from '../constants/footer-buttons';

export default function Footer() {
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
              <Image
                src="/images/logo.svg"
                alt="Логотип Федерации Кун Кхмер"
                width={150}
                height={60}
                style={{ width: 'auto', height: 'auto' }}
              />
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
          <Link href="/contacts" className="footer__contact-button-link" aria-label="Связаться с нами">
            <Button
              type="button"
              className="footer__contact-button"
              variant="primary"
              size="fw"
              aria-label="Связаться с нами"
              icon={<Image src="/images/icons/icon-arrow.svg" alt="Иконка стрелки" width={18} height={18} />}
              iconPosition="right"
            >
              СВЯЗАТЬСЯ
            </Button>
          </Link>
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
    </footer>
  );
}
