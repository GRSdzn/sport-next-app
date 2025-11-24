export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  size: 'large' | 'small' | 'medium' | 'wide' | 'tall';
};

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 'gallery-champion-belt',
    src: '/images/gallery/image-1.png',
    alt: 'Победитель с поясом чемпиона',
    size: 'large',
  },
  {
    id: 'gallery-family-photo',
    src: '/images/gallery/image-2.png',
    alt: 'Семейное фото с детьми',
    size: 'small',
  },
  {
    id: 'gallery-pad-training',
    src: '/images/gallery/image-3.png',
    alt: 'Тренировка на лапах',
    size: 'medium',
  },
  {
    id: 'gallery-team-wide',
    src: '/images/gallery/image-5.png',
    alt: 'Большое групповое фото команды',
    size: 'wide',
  },
  {
    id: 'gallery-ring-fight',
    src: '/images/gallery/image-6.png',
    alt: 'Бой на ринге',
    size: 'small',
  },
  {
    id: 'gallery-ring-group',
    src: '/images/gallery/image-4.png',
    alt: 'Групповое фото на ринге',
    size: 'medium',
  },
  {
    id: 'gallery-greece-flag',
    src: '/images/gallery/image-7.png',
    alt: 'Победитель с флагом Греции',
    size: 'tall',
  },
  {
    id: 'gallery-outdoor-training',
    src: '/images/gallery/image-8.png',
    alt: 'Уличная тренировка',
    size: 'medium',
  },
  {
    id: 'gallery-bag-training',
    src: '/images/gallery/image-12.png',
    alt: 'Тренировка с грушей',
    size: 'small',
  },
  {
    id: 'gallery-individual-training',
    src: '/images/gallery/image-11.png',
    alt: 'Индивидуальная тренировка',
    size: 'small',
  },
  {
    id: 'gallery-outdoor-sparring',
    src: '/images/gallery/image-10.png',
    alt: 'Спарринг на улице',
    size: 'small',
  },
  {
    id: 'gallery-team-photo',
    src: '/images/gallery/image-9.png',
    alt: 'Групповое командное фото',
    size: 'small',
  },
];

export const getImageSizes = (size: GalleryImage['size']): string => {
  const sizesMap: Record<GalleryImage['size'], string> = {
    large: '(max-width: 768px) 354px, (max-width: 1200px) 500px, 728px',
    wide: '(max-width: 768px) 354px, 728px',
    tall: '(max-width: 768px) 354px, 500px',
    medium: '(max-width: 768px) 354px, 500px',
    small: '(max-width: 768px) 175px, 354px',
  };

  return sizesMap[size];
};
