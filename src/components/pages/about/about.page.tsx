import './about.scss';
import Image from 'next/image';
import { DottedGrid } from '@/components/ui/DottedGrid/DottedGrid';
import { DETAIL_INFO_IMAGES } from '@/components/constants/detail-info-images';

export const AboutPage: React.FC = () => {
  return (
    <div className="about-page__container">
      <DottedGrid style={{ bottom: 150, left: -7 }} itemSize={8} gapX={20} gapY={32} rows={7} cols={3} />
      <section className="about-page__hero">
        <div className="about-page__wrapper">
          <div className="about-page__hero-content">
            <h1 className="about-page__title">КУН КХМЕР</h1>
            <div className="about-page__description">
              <p>
                <strong>Kun Khmer</strong> ( គុន ខ្មែរ ) или <strong>Прадал Серей</strong> ( ប្រដាល់សេរី ) — это древнее
                боевое искусство и современный спортивный вид единоборства, зародившийся в Камбодже.
              </p>
              <p>
                «Прадал» означает борьбу или бокс, а «Серей» — свободный или «вольная борьба». Спортивный вариант
                единоборства состоит из ударов в стойке кулаками в боксерских перчатках, локтями, ногами и захватов.
              </p>
              <p>
                Задача бойца Kun Khmer — повергнуть противника посредством технического нокаута, нокаута или победить по
                очкам. Это единоборство очень похоже на современный Муай Тай и имеет богатую историю в азиатской
                культуре боевых искусств.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-page__gallery">
        <div className="about-page__wrapper">
          <div className="about-page__gallery-grid">
            {DETAIL_INFO_IMAGES.map((image, index) => (
              <figure key={`about-image-${index}`} className="about-page__gallery-item">
                <div className="about-page__image-wrapper">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    className="about-page__image"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 590px"
                    priority={index < 2}
                    loading={index < 2 ? 'eager' : 'lazy'}
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
