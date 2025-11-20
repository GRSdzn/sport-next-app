// Типизация для тренера
export interface Coach {
  id: number;
  name: string;
  imageUrl: string;
  imageWidth: number;
  imageHeight: number;
  imageAlt: string;
}

// Список тренеров
export const COACHING_STAFF_LIST: Coach[] = [
  {
    id: 1,
    name: 'Салатгереев Ибрагим Каирович',
    imageUrl: '/images/coaching-staff/image-1.png',
    imageWidth: 285,
    imageHeight: 343,
    imageAlt: 'Салатгереев Ибрагим Каирович, тренер Федерации Кун Кхмер',
  },
  {
    id: 2,
    name: 'Першай Владимир Игоревич',
    imageUrl: '/images/coaching-staff/image-2.png',
    imageWidth: 285,
    imageHeight: 343,
    imageAlt: 'Першай Владимир Игоревич, тренер Федерации Кун Кхмер',
  },
  {
    id: 3,
    name: 'Акопян Грачья Гургенович',
    imageUrl: '/images/coaching-staff/image-3.png',
    imageWidth: 285,
    imageHeight: 343,
    imageAlt: 'Акопян Грачья Гургенович, тренер Федерации Кун Кхмер',
  },
  {
    id: 4,
    name: 'Иванов Василий Михайлович',
    imageUrl: '/images/coaching-staff/image-4.png',
    imageWidth: 285,
    imageHeight: 343,
    imageAlt: 'Иванов Василий Михайлович, тренер Федерации Кун Кхмер',
  },
  {
    id: 5,
    name: 'Покровский Дмитрий Александрович',
    imageUrl: '/images/coaching-staff/image-5.png',
    imageWidth: 285,
    imageHeight: 343,
    imageAlt: 'Покровский Дмитрий Александрович, тренер Федерации Кун Кхмер',
  },
  {
    id: 6,
    name: 'Дагуев Олег Анатольевич',
    imageUrl: '/images/coaching-staff/image-6.png',
    imageWidth: 285,
    imageHeight: 343,
    imageAlt: 'Дагуев Олег Анатольевич, тренер Федерации Кун Кхмер',
  },
  {
    id: 7,
    name: 'Омаров Саид Омарович',
    imageUrl: '/images/coaching-staff/image-7.png',
    imageWidth: 285,
    imageHeight: 343,
    imageAlt: 'Омаров Саид Омарович, тренер Федерации Кун Кхмер',
  },
  {
    id: 8,
    name: 'Яковлев Василий Николаевич',
    imageUrl: '/images/coaching-staff/image-8.png',
    imageWidth: 285,
    imageHeight: 343,
    imageAlt: 'Яковлев Василий Николаевич, тренер Федерации Кун Кхмер',
  },
  {
    id: 9,
    name: 'Выгодин Иван Сергеевич',
    imageUrl: '/images/coaching-staff/image-9.png',
    imageWidth: 285,
    imageHeight: 343,
    imageAlt: 'Выгодин Иван Сергеевич, тренер Федерации Кун Кхмер',
  },
  {
    id: 10,
    name: 'Глухов Антон Александрович',
    imageUrl: '/images/coaching-staff/image-10.png',
    imageWidth: 285,
    imageHeight: 343,
    imageAlt: 'Глухов Антон Александрович, тренер Федерации Кун Кхмер',
  },
];
