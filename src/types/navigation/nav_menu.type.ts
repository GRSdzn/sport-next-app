// types.ts
export type NavMenuItem = {
  label: string;
  href?: string;
  action?: () => void;
  ariaLabel?: string;
};
