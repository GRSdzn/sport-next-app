'use client';

import { memo } from 'react';
import { Button } from '../Button/Button';
import Modal from '../Modal/Modal';
import { FormInput } from './components/FormInput';
import { CheckboxField } from './components/CheckboxField';
import { useCallbackForm } from './hooks/useCallbackForm';
import type { CallbackModalProps } from './types';
import './CallbackModal.scss';

const CallbackModal: React.FC<CallbackModalProps> = memo(({ isOpen, onClose }) => {
  const { formData, errors, isSubmitting, handleInputChange, handleSubmit } = useCallbackForm(onClose);

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="ОБРАТНЫЙ ЗВОНОК" maxWidth="sm" disableClose={isSubmitting}>
      <form className="callback-modal__form-wrapper" onSubmit={handleSubmit} noValidate aria-busy={isSubmitting}>
        <div className="callback-modal__form">
          <FormInput
            id="callback-name"
            name="name"
            type="text"
            label="Ваше имя"
            placeholder="Введите ваше имя"
            value={formData.name}
            error={errors.name}
            disabled={isSubmitting}
            autoComplete="name"
            onChange={handleInputChange('name')}
          />

          <FormInput
            id="callback-phone"
            name="phone"
            type="tel"
            label="Номер телефона"
            placeholder="+7 (___) ___-__-__"
            value={formData.phone}
            error={errors.phone}
            disabled={isSubmitting}
            autoComplete="tel"
            onChange={handleInputChange('phone')}
          />

          <CheckboxField
            checked={formData.consent}
            error={errors.consent}
            disabled={isSubmitting}
            onChange={handleInputChange('consent')}
          />
        </div>

        <div className="callback-modal__button">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            fullWidth
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
