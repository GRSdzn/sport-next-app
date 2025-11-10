import './gallery.section.scss';
import { Button } from '@/components/ui/Button/Button';
import Image from 'next/image';

const galleryImages = [
  { src: '/images/gallery/image-1.png', alt: 'Победитель с поясом чемпиона', size: 'large' },
  { src: '/images/gallery/image-2.png', alt: 'Семейное фото с детьми', size: 'small' },
  { src: '/images/gallery/image-3.png', alt: 'Тренировка на лапах', size: 'medium' },
  { src: '/images/gallery/image-5.png', alt: 'Большое групповое фото команды', size: 'wide' },
  { src: '/images/gallery/image-6.png', alt: 'Бой на ринге', size: 'small' },
  { src: '/images/gallery/image-4.png', alt: 'Групповое фото на ринге', size: 'medium' },
  { src: '/images/gallery/image-7.png', alt: 'Победитель с флагом Греции', size: 'tall' },
  { src: '/images/gallery/image-8.png', alt: 'Уличная тренировка', size: 'medium' },
  { src: '/images/gallery/image-12.png', alt: 'Тренировка с грушей', size: 'small' },
  { src: '/images/gallery/image-11.png', alt: 'Индивидуальная тренировка', size: 'small' },
  { src: '/images/gallery/image-10.png', alt: 'Спарринг на улице', size: 'small' },
  { src: '/images/gallery/image-9.png', alt: 'Групповое командное фото', size: 'small' },
];

export const GallerySection: React.FC = () => {
  return (
    <section className="gallery-section">
      <div className="gallery-section__text-container">
        <h2 className="gallery-section__title">ГАЛЕРЕЯ</h2>
        <Button
          type="button"
          className="gallery-section__button"
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
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className={`gallery-section__image-container gallery-section__image-container--${image.size}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="gallery-section__image"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
