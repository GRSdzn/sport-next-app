'use client';

import Image from 'next/image';
import { Button } from '../Button/Button';
import { memo } from 'react';
import Modal from '../Modal/Modal';
import { LineSection } from '../Line/Line';
import './ContactModal.scss';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCallback?: () => void;
}

const ContactModal: React.FC<ContactModalProps> = memo(({ isOpen, onClose, onOpenCallback }) => {
  const handleCallbackClick = () => {
    onClose(); // Закрываем текущее модальное окно
    if (onOpenCallback) {
      onOpenCallback(); // Открываем CallbackModal
    }
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="НАШИ КОНТАКТЫ" maxWidth="lg">
      <div className="contact-modal__content">
        <div className="contact-modal__contact-list">
          <div className="contact-modal__contact-list-item">
            <Image src="/images/icons/icon-phone.svg" alt="" width={24} height={24} loading="lazy" />
            <div className="contact-modal__contact-list-block">
              <h3 className="contact-modal__contact-list-title">
                <a href="tel:+79037342796">+7 (903) 734-27-96</a>
              </h3>
              <p className="contact-modal__contact-list-description">Затолочный Денис Владимирович — Президент ФКБМ</p>
            </div>
          </div>

          <LineSection />

          <div className="contact-modal__contact-list-item">
            <Image src="/images/icons/icon-phone.svg" alt="" width={24} height={24} loading="lazy" />
            <div className="contact-modal__contact-list-block">
              <h3 className="contact-modal__contact-list-title">
                <a href="tel:+79037777729">+7 (903) 777-77-29</a>
              </h3>
              <p className="contact-modal__contact-list-description">
                Серебреников Эмилио Руфатович — Вице-президент ФКБМ
              </p>
            </div>
          </div>

          <LineSection />

          <div className="contact-modal__contact-list-item">
            <Image src="/images/icons/icon-mail.svg" alt="" width={34} height={27} loading="lazy" />
            <div className="contact-modal__contact-list-block">
              <h3 className="contact-modal__contact-list-title">
                <a href="mailto:Khmer-box@yandex.ru">Khmer-box@yandex.ru</a>
              </h3>
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
          size="lg"
          fullWidth
          aria-label="Связаться с нами"
          icon={<Image src="/images/icons/icon-arrow.svg" alt="" width={18} height={18} />}
          iconPosition="right"
          onClick={handleCallbackClick}
        >
          СВЯЗАТЬСЯ
        </Button>
      </div>
    </Modal>
  );
});

ContactModal.displayName = 'ContactModal';

export default ContactModal;
