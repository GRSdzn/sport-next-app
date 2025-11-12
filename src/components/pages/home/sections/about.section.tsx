import '@/components/pages/home/sections/about.section.scss';
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button/Button';
import { DottedGrid } from '@/components/ui/DottedGrid/DottedGrid';
import { SLIDES } from '@/components/constants/slides-imgs';
import { EmblaOptionsType } from 'embla-carousel';
import EmblaCarousel from '@/components/ui/Slider/EmblaCarousel';

export const AboutSection: React.FC = () => {
  const OPTIONS: EmblaOptionsType = { loop: true };

  return (
    <section className="about-section">
      <DottedGrid
        itemSize={8}
        style={{ position: 'absolute', top: 0, left: 50 }}
        cols={5}
        rows={7}
        gapX={20}
        gapY={32}
      />
      <div className="about-section__wrapper">
        <div className="about-section__container">
          <h2 className="about-section__title">О ФЕДЕРАЦИИ</h2>
          <p className="about-section__description">
            Федерация Кхмерского бокса Москвы развивает и популяризирует в столице кхмерский бокс (Кун Кхмер) —
            эффективное и зрелищное боевое искусство Камбоджи. Её цели — сохранение этого вида спорта и воспитание
            здорового поколения.
          </p>
          {/* slider with images */}
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
          <div className="about-section__button-wrapper">
            <Button
              type="button"
              className="about-section__button"
              aria-label="Подробнее о Федерации КХМЕРСКОГО БОКСА МОСКВЫ"
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
