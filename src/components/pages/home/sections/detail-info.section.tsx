import '@/components/pages/home/sections/detail-info.section.scss';
import { Button } from '@/components/ui/Button/Button';
import { DottedGrid } from '@/components/ui/DottedGrid/DottedGrid';
import Image from 'next/image';
import Link from 'next/link';
import { DETAIL_INFO_IMAGES, DETAIL_INFO_DESCRIPTION } from '@/components/constants/detail-info-images';
import { ARROW_ICON } from '@/components/constants/ui-icons';

const DOTTED_GRID_LEFT = {
  itemSize: 8,
  cols: 3,
  rows: 7,
  gapY: 32,
  gapX: 20,
} as const;

const DOTTED_GRID_RIGHT = {
  itemSize: 12,
  cols: 2,
  rows: 5,
} as const;

export const DetailInfoSection: React.FC = () => {
  return (
    <section className="detail-info-section">
      <DottedGrid className="detail-info-section__dotted-grid-left" {...DOTTED_GRID_LEFT} />
      <DottedGrid className="detail-info-section__dotted-grid-right" {...DOTTED_GRID_RIGHT} />
      <div className="detail-info-section__wrapper">
        <div className="detail-info-section__container">
          <div className="detail-info-section__mobile-button-wrapper">
            <Link href="/about" className="detail-info-section__button-link">
              <Button
                type="button"
                className="detail-info-section__mobile-button"
                aria-label="Подробнее о Кун Кхмер"
                variant="primary"
                size="lg"
                icon={ARROW_ICON}
                iconPosition="right"
              >
                ПОДРОБНЕЕ
              </Button>
            </Link>
          </div>
          <div className="detail-info-section__images">
            {DETAIL_INFO_IMAGES.map((image) => (
              <Image
                key={image.id}
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="detail-info-section__image"
                loading="lazy"
              />
            ))}
          </div>
          <div className="detail-info-section__content">
            <h2 className="detail-info-section__title">КУН КХМЕР</h2>
            <p className="detail-info-section__description">{DETAIL_INFO_DESCRIPTION}</p>
            <Link href="/about" className="detail-info-section__button-link">
              <Button
                type="button"
                className="detail-info-section__button"
                aria-label="Подробнее о Кун Кхмер"
                variant="primary"
                size="lg"
                icon={ARROW_ICON}
                iconPosition="right"
              >
                ПОДРОБНЕЕ
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
