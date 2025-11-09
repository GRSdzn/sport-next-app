// types.ts
export type NavMenuItem = {
  label: string;
  href?: string; // если есть href — это обычная ссылка
  action?: () => void; // если есть action — это действие
};
