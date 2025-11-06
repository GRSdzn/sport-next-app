import { Button } from '@/components/ui/Button/Button';
import Image from 'next/image';
import './gallery.section.scss';

const galleryImages = [
  { src: '/images/slides/slide1.png', alt: 'Фотография из галереи' },
  { src: '/images/slides/slide3.png', alt: 'Фотография из галереи' },
  { src: '/images/slides/slide3.png', alt: 'Фотография из галереи' },
  { src: '/images/slides/slide4.png', alt: 'Фотография из галереи' },
  { src: '/images/slides/slide1.png', alt: 'Фотография из галереи' },
  { src: '/images/slides/slide4.png', alt: 'Фотография из галереи' },
  { src: '/images/slides/slide3.png', alt: 'Фотография из галереи' },
  { src: '/images/slides/slide4.png', alt: 'Фотография из галереи' },
  { src: '/images/slides/slide1.png', alt: 'Фотография из галереи' },
  { src: '/images/slides/slide3.png', alt: 'Фотография из галереи' },
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
            className={`gallery-section__image-container gallery-section__image-container--${index + 1}`}
          >
            <Image src={image.src} alt={image.alt} fill className="gallery-section__image" />
          </div>
        ))}
      </div>
    </section>
  );
};
