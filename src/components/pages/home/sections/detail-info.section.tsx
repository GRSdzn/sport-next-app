import '@/components/pages/home/sections/detail-info.section.scss';
import { Button } from '@/components/ui/Button/Button';
import { DottedGrid } from '@/components/ui/DottedGrid/DottedGrid';
import Image from 'next/image';

export const DetailInfoSection: React.FC = () => {
  return (
    <section className="detail-info-section">
      <DottedGrid
        itemSize={8}
        style={{ position: 'absolute', top: 0, left: 20 }}
        cols={3}
        rows={7}
        gapY={32}
        gapX={20}
      />
      <DottedGrid itemSize={12} style={{ position: 'absolute', top: 0, right: 0 }} cols={2} rows={5} />
      <div className="detail-info-section__wrapper">
        <div className="detail-info-section__container">
          {/* IMAGES */}
          <div className="detail-info-section__mobile-button-wrapper">
            <Button
              type="button"
              className="detail-info-section__mobile-button"
              aria-label="Подробнее о Кун Кхмер"
              variant="primary"
              size="lg"
              icon={<Image src="/images/icons/icon-arrow.svg" alt="Иконка стрелки" width={18} height={18} />}
              iconPosition="right"
            >
              ПОДРОБНЕЕ
            </Button>
          </div>
          <div className="detail-info-section__images">
            <Image
              src="/images/detail-info/image-1.png"
              alt="Detail Info Image 1"
              width={500}
              height={350}
              className="detail-info-section__image"
              loading="lazy"
            />
            <Image
              src="/images/detail-info/image-2.png"
              alt="Detail Info Image 2"
              width={500}
              height={350}
              className="detail-info-section__image"
              loading="lazy"
            />
            <Image
              src="/images/detail-info/image-3.png"
              alt="Detail Info Image 3"
              width={500}
              height={350}
              className="detail-info-section__image"
              loading="lazy"
            />
            <Image
              src="/images/detail-info/image-4.png"
              alt="Detail Info Image 4"
              width={500}
              height={350}
              className="detail-info-section__image"
              loading="lazy"
            />
          </div>
          {/* TEXT CONTENT */}
          <div className="detail-info-section__content">
            <h2 className="detail-info-section__title">КУН КХМЕР</h2>
            <p className="detail-info-section__description">
              Kun Khmer ( គុន ខ្មែរ ) или Прадал Серей ( ប្រដាល់សេរី ) - это боевое искусство и спортивное единоборство
              из Камбоджи. «Прадал» означает борьбу или бокс и «Серей» означает свободный или «вольная борьба».
              Спортивный вариант единоборства состоит из ударов в стойке кулаками в боксерских перчатках, локтями,
              ногами, и захватов. Задача бойца Kun Khmer состоит в том, чтобы повергнуть противника - технический
              нокаут, нокаут или выиграть по очкам. Очень похож на современный Муай Тай.
            </p>
            <Button
              type="button"
              className="detail-info-section__button"
              aria-label="Подробнее о Кун Кхмер"
              variant="primary"
              size="lg"
              icon={<Image src="/images/icons/icon-arrow.svg" alt="Иконка стрелки" width={18} height={18} />}
              iconPosition="right"
            >
              ПОДРОБНЕЕ
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
