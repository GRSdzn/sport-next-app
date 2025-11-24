import '@/components/pages/home/sections/cover.section.scss';
import { Button } from '@/components/ui/Button/Button';
import { DottedGrid } from '@/components/ui/DottedGrid/DottedGrid';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const CoverSection: React.FC = () => {
  return (
    <section className="cover-section">
      <DottedGrid
        itemSize={8}
        style={{ top: 20, left: 33 }}
        className="cover-section__dotted-grid"
        cols={5}
        rows={7}
        gapX={20}
        gapY={32}
      />

      <div className="cover-section__container">
        <div className="cover-section__title-wrapper">
          <h1 className="cover-section__title">ФЕДЕРАЦИЯ</h1>
          <div className="cover-section__subtitle">
            <span className="cover-section__subtitle-red">КХМЕРСКОГО</span>
            <span className="cover-section__subtitle-white">БОКСА МОСКВЫ</span>
          </div>
        </div>
        <DottedGrid
          itemSize={12}
          style={{ bottom: 600, right: 0 }}
          className="cover-section__dotted-grid"
          gap={20}
          cols={5}
          rows={5}
        />
        <DottedGrid
          itemSize={12}
          style={{ bottom: 0, right: 200 }}
          className="cover-section__dotted-grid"
          gap={20}
          cols={5}
          rows={5}
        />
        <div className="cover-section__background">
          <Image
            src="/images/cover-section/cover-background.webp"
            alt="Федерация КХМЕРСКОГО БОКСА МОСКВЫ"
            sizes="(max-width: 768px) 698px, (max-width: 1600px) 728px, 1499px"
            className="cover-section__background-image"
            fill
            priority
            fetchPriority="high"
            loading="eager"
          />
        </div>
        <div className="cover-section__button-wrapper">
          <Link href="/about-kun-khemer" className="cover-section__button-link">
            <Button
              type="button"
              className="cover-section__button"
              aria-label="Подробнее о Федерации КХМЕРСКОГО БОКСА МОСКВЫ"
              size="lg"
              icon={<Image src="/images/icons/icon-arrow.svg" alt="Иконка стрелки" width={18} height={18} />}
              iconPosition="right"
            >
              ПОДРОБНЕЕ
            </Button>
          </Link>
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
