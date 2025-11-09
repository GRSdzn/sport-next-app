import '@/styles/layout/footer.scss';
import Image from 'next/image';
import { Button } from '../ui/Button/Button';
import Link from 'next/link';
import { FOOTER_BUTTONS } from '../constants/footer-buttons';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <section className="footer__line-section">
          <div className="footer__line" />
        </section>

        {/* LOGO + FLEX BUTTONS */}
        <div className="footer__logo-buttons">
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
        </div>
        {/* {NUMBER + DESCRIPTION} */}
        <div className="footer__socials-container">
          {/* phone */}
          <div className="footer__phone-numbers">
            <div className="footer__phone-content">
              <h2 className="footer__phone-title" title="Номер телефона">
                +7 (903) 734-27-96
              </h2>
              <p className="footer__phone-description">Затолочный Денис Владимирович Президент ФКБМ</p>
            </div>
            <div className="footer__phone-content">
              <h2 className="footer__phone-title" title="Номер телефона">
                +7 (903) 777-77-29
              </h2>
              <p className="footer__phone-description">Серебреников Эмилио Руфатович Вице-президент ФКБМ</p>
            </div>
          </div>
          {/* email */}
          <div className="footer__email-content">
            <h2 className="footer__email-title" title="Email">
              Khmer-box@yandex.ru
            </h2>
            <p className="footer__email-description">Сотрудничество</p>
          </div>
        </div>

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
