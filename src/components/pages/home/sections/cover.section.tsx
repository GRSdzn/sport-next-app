import { Button } from '@/components/ui/Button';
import Image from 'next/image';
import React from 'react';
import '@/components/pages/home/sections/cover.section.scss';

export const CoverSection: React.FC = () => {
  return (
    <section className="cover-section">
      <div className="cover-section__container">
        <div className="cover-section__title-wrapper">
          <h1 className="cover-section__title">ФЕДЕРАЦИЯ</h1>
          <div className="cover-section__subtitle">
            <span className="cover-section__subtitle-red">КХМЕРСКОГО</span>
            <span className="cover-section__subtitle-white">БОКСА МОСКВЫ</span>
          </div>
        </div>

        <div className="cover-section__background">
          <Image
            src="/images/test_bcg.png"
            alt="Федерация КХМЕРСКОГО БОКСА МОСКВЫ"
            sizes="(max-width: 768px) 698px, (max-width: 1600px) 728px, 1499px"
            className="cover-section__background-image"
            fill
            priority
          />
        </div>
        <div className="cover-section__button-wrapper">
          <Button
            type="button"
            className="cover-section__button"
            aria-label="Подробнее о Федерации КХМЕРСКОГО БОКСА МОСКВЫ"
            variant="primary"
            size="lg"
            icon={<Image src="/images/icons/icon-arrow.svg" alt="Иконка стрелки" width={18} height={18} />}
            iconPosition="right"
          >
            ПОДРОБНЕЕ
          </Button>
        </div>
        {/* КРАСНАЯ ЛИНИЯ С ТЕКСТОМ */}
      </div>
      <div className="cover-section__red-line">
        <div className="cover-section__red-line-text">
          <span className="cover-section__red-line-text-span">ФЕДЕРАЦИЯ КХМЕРСКОГО БОКСА МОСКВЫ</span>
          <span className="cover-section__red-line-text-span">ФЕДЕРАЦИЯ КХМЕРСКОГО БОКСА МОСКВЫ</span>
          <span className="cover-section__red-line-text-span">ФЕДЕРАЦИЯ КХМЕРСКОГО БОКСА МОСКВЫ</span>
          <span className="cover-section__red-line-text-span">ФЕДЕРАЦИЯ КХМЕРСКОГО БОКСА МОСКВЫ</span>
        </div>
        <div className="cover-section__red-line-text" aria-hidden="true">
          <span className="cover-section__red-line-text-span">ФЕДЕРАЦИЯ КХМЕРСКОГО БОКСА МОСКВЫ</span>
          <span className="cover-section__red-line-text-span">ФЕДЕРАЦИЯ КХМЕРСКОГО БОКСА МОСКВЫ</span>
          <span className="cover-section__red-line-text-span">ФЕДЕРАЦИЯ КХМЕРСКОГО БОКСА МОСКВЫ</span>
          <span className="cover-section__red-line-text-span">ФЕДЕРАЦИЯ КХМЕРСКОГО БОКСА МОСКВЫ</span>
        </div>
      </div>
    </section>
  );
};
