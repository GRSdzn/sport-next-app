// constants/nav_menu.ts
import type { NavMenuItem } from '@/types';

export const NAV_MENU: NavMenuItem[] = [
  { label: 'Федерация', href: '/federation' },
  { label: 'Новости и мероприятия', href: '/events' },
  { label: 'О Кун Кхмер', href: '/about' },
  {
    label: 'Контакты',
    action: () => window.dispatchEvent(new Event('open-contact-modal')),
    ariaLabel: 'Связаться с Федерацией Кун Кхмер',
  },
];
