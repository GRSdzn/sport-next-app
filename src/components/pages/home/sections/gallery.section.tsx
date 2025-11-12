import './gallery.section.scss';
import { Button } from '@/components/ui/Button/Button';
import Image from 'next/image';

const galleryImages = [
  {
    id: 'gallery-champion-belt',
    src: '/images/gallery/image-1.png',
    alt: 'Победитель с поясом чемпиона',
    size: 'large',
  },
  { id: 'gallery-family-photo', src: '/images/gallery/image-2.png', alt: 'Семейное фото с детьми', size: 'small' },
  { id: 'gallery-pad-training', src: '/images/gallery/image-3.png', alt: 'Тренировка на лапах', size: 'medium' },
  { id: 'gallery-team-wide', src: '/images/gallery/image-5.png', alt: 'Большое групповое фото команды', size: 'wide' },
  { id: 'gallery-ring-fight', src: '/images/gallery/image-6.png', alt: 'Бой на ринге', size: 'small' },
  { id: 'gallery-ring-group', src: '/images/gallery/image-4.png', alt: 'Групповое фото на ринге', size: 'medium' },
  { id: 'gallery-greece-flag', src: '/images/gallery/image-7.png', alt: 'Победитель с флагом Греции', size: 'tall' },
  { id: 'gallery-outdoor-training', src: '/images/gallery/image-8.png', alt: 'Уличная тренировка', size: 'medium' },
  { id: 'gallery-bag-training', src: '/images/gallery/image-12.png', alt: 'Тренировка с грушей', size: 'small' },
  {
    id: 'gallery-individual-training',
    src: '/images/gallery/image-11.png',
    alt: 'Индивидуальная тренировка',
    size: 'small',
  },
  { id: 'gallery-outdoor-sparring', src: '/images/gallery/image-10.png', alt: 'Спарринг на улице', size: 'small' },
  { id: 'gallery-team-photo', src: '/images/gallery/image-9.png', alt: 'Групповое командное фото', size: 'small' },
];

export const GallerySection: React.FC = () => {
  return (
    <section className="gallery-section">
      <div className="gallery-section__wrapper">
        <div className="gallery-section__text-container">
          <h2 className="gallery-section__title">ГАЛЕРЕЯ</h2>
          <Button
            type="button"
            className="gallery-section__button gallery-section__button--desktop"
            aria-label="Смотреть все изображения"
            variant="primary"
            size="lg"
            icon={<Image src="/images/icons/icon-arrow.svg" alt="Иконка стрелки" width={18} height={18} />}
            iconPosition="right"
          >
            СМОТРЕТЬ ВСЕ
          </Button>
        </div>
        <div className="gallery-section__images">
          {galleryImages.map((image, index) => {
            // Динамические sizes в зависимости от размера изображения
            const imageSizes =
              image.size === 'large'
                ? '(max-width: 768px) 354px, (max-width: 1200px) 500px, 728px'
                : image.size === 'wide'
                ? '(max-width: 768px) 354px, 728px'
                : image.size === 'tall'
                ? '(max-width: 768px) 354px, 500px'
                : image.size === 'medium'
                ? '(max-width: 768px) 354px, 500px'
                : '(max-width: 768px) 175px, 354px'; // small

            return (
              <div
                key={image.id}
                className={`gallery-section__image-container gallery-section__image-container--${image.size}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="gallery-section__image"
                  sizes={imageSizes}
                  priority={index < 2}
                />
              </div>
            );
          })}
        </div>
        <Button
          type="button"
          className="gallery-section__button gallery-section__button--mobile"
          aria-label="Смотреть все изображения"
          variant="primary"
          size="lg"
          icon={<Image src="/images/icons/icon-arrow.svg" alt="Иконка стрелки" width={18} height={18} />}
          iconPosition="right"
        >
          СМОТРЕТЬ ВСЕ
        </Button>
      </div>
    </section>
  );
};
