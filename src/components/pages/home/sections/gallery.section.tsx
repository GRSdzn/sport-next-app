import './gallery.section.scss';
import { Button } from '@/components/ui/Button/Button';
import Image from 'next/image';
import Link from 'next/link';
import { GALLERY_IMAGES, getImageSizes } from '@/components/constants/gallery-images';
import { ARROW_ICON } from '@/components/constants/ui-icons';

export const GallerySection: React.FC = () => {
  return (
    <section className="gallery-section">
      <div className="gallery-section__wrapper">
        <div className="gallery-section__text-container">
          <h2 className="gallery-section__title">ГАЛЕРЕЯ</h2>
          <Link href="/gallery" className="gallery-section__button-link">
            <Button
              type="button"
              className="gallery-section__button gallery-section__button--desktop"
              aria-label="Смотреть все изображения"
              variant="primary"
              size="lg"
              icon={ARROW_ICON}
              iconPosition="right"
            >
              СМОТРЕТЬ ВСЕ
            </Button>
          </Link>
        </div>
        <div className="gallery-section__images">
          {GALLERY_IMAGES.map((image, index) => (
            <div
              key={image.id}
              className={`gallery-section__image-container gallery-section__image-container--${image.size}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="gallery-section__image"
                sizes={getImageSizes(image.size)}
                priority={index < 2}
              />
            </div>
          ))}
        </div>
        <Link href="/gallery" className="gallery-section__button-link">
          <Button
            type="button"
            className="gallery-section__button gallery-section__button--mobile"
            aria-label="Смотреть все изображения"
            variant="primary"
            size="lg"
            icon={ARROW_ICON}
            iconPosition="right"
          >
            СМОТРЕТЬ ВСЕ
          </Button>
        </Link>
      </div>
    </section>
  );
};
