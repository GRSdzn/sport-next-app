import { memo } from 'react';
import Link from 'next/link';
import type { CheckboxFieldProps } from '../types';

export const CheckboxField: React.FC<CheckboxFieldProps> = memo(({ checked, error, disabled, onChange }) => {
  return (
    <div className="callback-modal__form-group callback-modal__form-group--checkbox">
      <label className="callback-modal__form-checkbox">
        <input
          type="checkbox"
          id="callback-consent"
          name="consent"
          className="callback-modal__form-checkbox-input"
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          aria-invalid={!!error}
          aria-describedby={error ? 'callback-consent-error' : undefined}
          aria-required="true"
        />
        <span className="callback-modal__form-checkbox-custom" aria-hidden="true"></span>
        <span className="callback-modal__form-checkbox-label">
          Я согласен на обработку персональных данных согласно{' '}
          <Link href="/privacy-policy" className="callback-modal__form-checkbox-link" onClick={(e) => e.stopPropagation()}>
            Политике конфиденциальности
          </Link>
        </span>
      </label>
      {error && (
        <span id="callback-consent-error" className="callback-modal__form-error" role="alert" aria-live="polite">
          {error}
        </span>
      )}
    </div>
  );
});

CheckboxField.displayName = 'CheckboxField';
