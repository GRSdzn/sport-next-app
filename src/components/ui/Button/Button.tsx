import React from 'react';
import './buttons.scss';

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'lp' | 'sm' | 'md' | 'lg' | 'fw';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  ariaLabel?: string;
  'aria-label'?: string;
  'aria-disabled'?: boolean;
  'aria-busy'?: boolean;
};

export const Button = React.memo((props: ButtonProps) => {
  const {
    children,
    className = '',
    variant = 'primary',
    onClick,
    type = 'button',
    disabled = false,
    loading = false,
    icon,
    iconPosition = 'left',
    ariaLabel,
    'aria-label': ariaLabelAlt,
    'aria-disabled': ariaDisabled,
    'aria-busy': ariaBusy,
    size = 'md',
  } = props;

  const isDisabled = disabled || loading;
  const finalAriaLabel = ariaLabel || ariaLabelAlt;
  const finalAriaDisabled = ariaDisabled !== undefined ? ariaDisabled : isDisabled;
  const finalAriaBusy = ariaBusy !== undefined ? ariaBusy : loading;

  const buttonClasses = [
    'button',
    `button--${variant}`,
    `button--${size}`,
    loading && 'button--loading',
    isDisabled && 'button--disabled',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      type={type}
      disabled={isDisabled}
      aria-label={finalAriaLabel}
      aria-disabled={finalAriaDisabled}
      aria-busy={finalAriaBusy}
    >
      {loading && (
        <span className="button__spinner" aria-hidden="true">
          <span className="button__spinner-icon"></span>
        </span>
      )}
      {!loading && iconPosition === 'left' && icon && (
        <span className="button__icon button__icon--left" aria-hidden="true">
          {icon}
        </span>
      )}
      {!loading && <span className="button__content">{children}</span>}
      {!loading && iconPosition === 'right' && icon && (
        <span className="button__icon button__icon--right" aria-hidden="true">
          {icon}
        </span>
      )}
    </button>
  );
});
