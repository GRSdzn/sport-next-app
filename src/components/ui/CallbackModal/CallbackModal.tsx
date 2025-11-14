'use client';

import Image from 'next/image';
import { Button } from '../Button/Button';
import { useState, useCallback, memo } from 'react';
import clsx from 'clsx';
import Modal from '../Modal/Modal';
import './CallbackModal.scss';

interface CallbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  phone: string;
  consent: boolean;
}

interface FormErrors {
  name?: string;
  phone?: string;
  consent?: string;
}

// Константы для валидации
const MIN_NAME_LENGTH = 2;
const MIN_PHONE_DIGITS = 10;
const FORM_SUBMIT_DELAY = 1000;

const CallbackModal: React.FC<CallbackModalProps> = memo(({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    consent: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Валидация формы
  const validateForm = useCallback((): boolean => {
    const newErrors: FormErrors = {};
    const trimmedName = formData.name.trim();
    const phoneDigits = formData.phone.replace(/\D/g, '');

    // Валидация имени
    if (!trimmedName) {
      newErrors.name = 'Введите ваше имя';
    } else if (trimmedName.length < MIN_NAME_LENGTH) {
      newErrors.name = `Имя должно содержать минимум ${MIN_NAME_LENGTH} символа`;
    }

    // Валидация телефона
    if (!formData.phone.trim()) {
      newErrors.phone = 'Введите номер телефона';
    } else if (phoneDigits.length < MIN_PHONE_DIGITS) {
      newErrors.phone = 'Введите корректный номер телефона';
    }

    // Валидация согласия
    if (!formData.consent) {
      newErrors.consent = 'Необходимо согласие на обработку персональных данных';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  // Обработка отправки формы
  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      if (!validateForm()) return;

      setIsSubmitting(true);

      try {
        // Имитация отправки на сервер
        await new Promise((resolve) => setTimeout(resolve, FORM_SUBMIT_DELAY));

        // Логирование для отладки (можно заменить на реальный API вызов)
        if (process.env.NODE_ENV === 'development') {
          console.log('Form submitted:', formData);
        }

        // Сброс формы и закрытие модалки после успешной отправки
        setFormData({ name: '', phone: '', consent: false });
        setErrors({});
        onClose();

        // TODO: Показать уведомление об успешной отправке
      } catch (error) {
        console.error('Error submitting form:', error);
        // TODO: Показать уведомление об ошибке
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData, validateForm, onClose],
  );

  // Обработка изменений в полях ввода
  const handleInputChange = useCallback(
    (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = field === 'consent' ? e.target.checked : e.target.value;

      setFormData((prev) => ({ ...prev, [field]: value }));

      // Очистка ошибки при изменении поля (instant feedback)
      if (errors[field]) {
        setErrors((prev) => {
          const newErrors = { ...prev };
          delete newErrors[field];
          return newErrors;
        });
      }
    },
    [errors],
  );

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="ОБРАТНЫЙ ЗВОНОК" maxWidth="sm" disableClose={isSubmitting}>
      <form className="callback-modal__form-wrapper" onSubmit={handleSubmit} noValidate aria-busy={isSubmitting}>
          <div className="callback-modal__form">
            <div className="callback-modal__form-group">
              <label htmlFor="callback-name" className="callback-modal__form-label">
                Ваше имя
              </label>
              <input
                type="text"
                id="callback-name"
                name="name"
                className={clsx('callback-modal__form-input', { 'has-error': errors.name })}
                placeholder="Введите ваше имя"
                value={formData.name}
                onChange={handleInputChange('name')}
                disabled={isSubmitting}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'callback-name-error' : undefined}
                aria-required="true"
                autoComplete="name"
              />
              {errors.name && (
                <span id="callback-name-error" className="callback-modal__form-error" role="alert" aria-live="polite">
                  {errors.name}
                </span>
              )}
            </div>

            <div className="callback-modal__form-group">
              <label htmlFor="callback-phone" className="callback-modal__form-label">
                Номер телефона
              </label>
              <input
                type="tel"
                id="callback-phone"
                name="phone"
                className={clsx('callback-modal__form-input', { 'has-error': errors.phone })}
                placeholder="+7 (___) ___-__-__"
                value={formData.phone}
                onChange={handleInputChange('phone')}
                disabled={isSubmitting}
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? 'callback-phone-error' : undefined}
                aria-required="true"
                autoComplete="tel"
              />
              {errors.phone && (
                <span id="callback-phone-error" className="callback-modal__form-error" role="alert" aria-live="polite">
                  {errors.phone}
                </span>
              )}
            </div>

            <div className="callback-modal__form-group callback-modal__form-group--checkbox">
              <label className="callback-modal__form-checkbox">
                <input
                  type="checkbox"
                  id="callback-consent"
                  name="consent"
                  className="callback-modal__form-checkbox-input"
                  checked={formData.consent}
                  onChange={handleInputChange('consent')}
                  disabled={isSubmitting}
                  aria-invalid={!!errors.consent}
                  aria-describedby={errors.consent ? 'callback-consent-error' : undefined}
                  aria-required="true"
                />
                <span className="callback-modal__form-checkbox-custom" aria-hidden="true"></span>
                <span className="callback-modal__form-checkbox-label">
                  Я согласен на обработку персональных данных согласно{' '}
                  <span className="callback-modal__form-checkbox-link">Политике конфиденциальности</span>
                </span>
              </label>
              {errors.consent && (
                <span
                  id="callback-consent-error"
                  className="callback-modal__form-error"
                  role="alert"
                  aria-live="polite"
                >
                  {errors.consent}
                </span>
              )}
            </div>
          </div>

        <div className="callback-modal__button">
          <Button
            type="submit"
            variant="primary"
            size="fw"
            aria-label="Отправить заявку на обратный звонок"
            disabled={isSubmitting}
            loading={isSubmitting}
          >
            ОТПРАВИТЬ
          </Button>
        </div>
      </form>
    </Modal>
  );
});

CallbackModal.displayName = 'CallbackModal';

export default CallbackModal;
