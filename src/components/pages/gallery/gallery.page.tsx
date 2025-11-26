import './gallery.scss';
import Image from 'next/image';
import { GALLERY_PAGE_IMAGES } from '@/components/constants/gallery-images';
import { DottedGrid } from '@/components/ui/DottedGrid/DottedGrid';

const GalleryPage: React.FC = () => {
  return (
    <div className="gallery-page__container">
      <DottedGrid itemSize={8} cols={5} rows={7} gapX={20} gapY={32} style={{ top: 600, left: -30 }} />
      <DottedGrid itemSize={8} cols={3} rows={5} gapX={20} gapY={32} style={{ bottom: 200, right: 250 }} />
      <section className="gallery-page__section">
        <div className="gallery-page__wrapper">
          <h1 className="gallery-page__title">ГАЛЕРЕЯ</h1>
          <div className="gallery-page__grid">
            {GALLERY_PAGE_IMAGES.map((image, index) => (
              <figure key={`${image.id}-${index}`} className="gallery-page__item">
                <div className="gallery-page__image-wrapper">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="gallery-page__image"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 387px"
                    priority={index < 3}
                    loading={index < 3 ? 'eager' : 'lazy'}
                  />
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
