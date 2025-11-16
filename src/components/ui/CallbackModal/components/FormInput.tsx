import { memo } from 'react';
import clsx from 'clsx';
import type { FormInputProps } from '../types';

export const FormInput: React.FC<FormInputProps> = memo(
  ({ id, name, type, label, placeholder, value, error, disabled, autoComplete, onChange }) => {
    return (
      <div className="callback-modal__form-group">
        <label htmlFor={id} className="callback-modal__form-label">
          {label}
        </label>
        <input
          type={type}
          id={id}
          name={name}
          className={clsx('callback-modal__form-input', { 'has-error': error })}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          aria-required="true"
          autoComplete={autoComplete}
        />
        {error && (
          <span id={`${id}-error`} className="callback-modal__form-error" role="alert" aria-live="polite">
            {error}
          </span>
        )}
      </div>
    );
  },
);

FormInput.displayName = 'FormInput';
