import React from 'react';
import '@/components/pages/home/sections/about.section.scss';
import EmblaCarousel from '@/components/ui/Slider/EmblaCarousel';
import { EmblaOptionsType } from 'embla-carousel';

export const AboutSection: React.FC = () => {
  const OPTIONS: EmblaOptionsType = { loop: true };
  const SLIDES = [
    '/images/slides/slide3.png',
    '/images/slides/slide3.png',
    '/images/slides/slide3.png',
    '/images/slides/slide3.png',
  ];

  return (
    <section className="about-section">
      <div className="about-section__container">
        <h2 className="about-section__title">О ФЕДЕРАЦИИ</h2>
        <p className="about-section__description">
          Федерация Кхмерского бокса Москвы развивает и популяризирует в столице кхмерский бокс (Кун Кхмер) —
          эффективное и зрелищное боевое искусство Камбоджи. Её цели — сохранение этого вида спорта и воспитание
          здорового поколения.
        </p>
        {/* slider with images */}
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
    </section>
  );
};
