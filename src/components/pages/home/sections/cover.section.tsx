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
      </div>
      <div className="cover-section__button-wrapper">
        <Button
          type="button"
          className="cover-section__button"
          aria-label="Подробнее о Федерации КХМЕРСКОГО БОКСА МОСКВЫ"
          variant="primary"
        >
          ПОДРОБНЕЕ
        </Button>
      </div>
      <div className="cover-section__background">
        <Image
          src="/images/cover-section/cover-background.png"
          alt="Федерация КХМЕРСКОГО БОКСА МОСКВЫ"
          width={1200}
          height={880}
          className="cover-section__background-image"
        />
      </div>
    </section>
  );
};
