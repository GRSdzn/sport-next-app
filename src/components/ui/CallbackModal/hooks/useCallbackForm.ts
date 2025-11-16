import { useState, useCallback } from 'react';
import type { FormData, FormErrors } from '../types';
import { MIN_NAME_LENGTH, MIN_PHONE_DIGITS, FORM_SUBMIT_DELAY, NAME_REGEX, PHONE_REGEX } from '../constants';

const initialFormData: FormData = {
  name: '',
  phone: '',
  consent: false,
};

export const useCallbackForm = (onSuccess: () => void) => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
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

  // Обработка изменений в полях ввода
  const handleInputChange = useCallback(
    (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
      let value: string | boolean = field === 'consent' ? e.target.checked : e.target.value;

      // Валидация ввода в зависимости от поля
      if (field === 'name' && typeof value === 'string') {
        value = value.replace(NAME_REGEX, '');
      } else if (field === 'phone' && typeof value === 'string') {
        value = value.replace(PHONE_REGEX, '');
      }

      setFormData((prev) => ({ ...prev, [field]: value }));

      // Очистка ошибки при изменении поля
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

  // Обработка отправки формы
  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      if (!validateForm()) return;

      setIsSubmitting(true);

      try {
        // Имитация отправки на сервер
        await new Promise((resolve) => setTimeout(resolve, FORM_SUBMIT_DELAY));

        // Логирование для отладки
        if (process.env.NODE_ENV === 'development') {
          console.log('Form submitted:', formData);
        }

        // Сброс формы после успешной отправки
        setFormData(initialFormData);
        setErrors({});
        onSuccess();

        // TODO: Показать уведомление об успешной отправке
      } catch (error) {
        console.error('Error submitting form:', error);
        // TODO: Показать уведомление об ошибке
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData, validateForm, onSuccess],
  );

  return {
    formData,
    errors,
    isSubmitting,
    handleInputChange,
    handleSubmit,
  };
};
