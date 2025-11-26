import '@/components/pages/home/sections/cover.section.scss';
import { Button } from '@/components/ui/Button/Button';
import { DottedGrid } from '@/components/ui/DottedGrid/DottedGrid';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { ARROW_ICON } from '@/components/constants/ui-icons';

const DOTTED_GRID_TOP_LEFT = {
  itemSize: 8,
  cols: 5,
  rows: 7,
  gapX: 20,
  gapY: 32,
} as const;

const DOTTED_GRID_BOTTOM_LEFT = {
  itemSize: 12,
  gap: 20,
  cols: 5,
  rows: 5,
} as const;

const COVER_BACKGROUND_SIZES = '(max-width: 768px) 698px, (max-width: 1600px) 728px, 1499px';
const MARQUEE_TEXT = 'ФЕДЕРАЦИЯ КХМЕРСКОГО БОКСА МОСКВЫ';
const MARQUEE_TEXT_REPEATS = 4;

export const CoverSection: React.FC = () => {
  const marqueeTextElements = Array.from({ length: MARQUEE_TEXT_REPEATS }, (_, i) => (
    <span key={i} className="cover-section__red-line-text-span">
      {MARQUEE_TEXT}
    </span>
  ));

  return (
    <section className="cover-section">
      <DottedGrid className="cover-section__dotted-grid-top-left" {...DOTTED_GRID_TOP_LEFT} />

      <div className="cover-section__container">
        <div className="cover-section__title-wrapper">
          <h1 className="cover-section__title">ФЕДЕРАЦИЯ</h1>
          <div className="cover-section__subtitle">
            <span className="cover-section__subtitle-red">КХМЕРСКОГО</span>
            <span className="cover-section__subtitle-white">БОКСА МОСКВЫ</span>
          </div>
        </div>
        <DottedGrid className="cover-section__dotted-grid-center-right" {...DOTTED_GRID_BOTTOM_LEFT} />
        <DottedGrid className="cover-section__dotted-grid-bottom-right" {...DOTTED_GRID_BOTTOM_LEFT} />
        <div className="cover-section__background">
          <Image
            src="/images/cover-section/cover-background.webp"
            alt="Федерация КХМЕРСКОГО БОКСА МОСКВЫ"
            sizes={COVER_BACKGROUND_SIZES}
            className="cover-section__background-image"
            fill
            priority
            fetchPriority="high"
            loading="eager"
          />
        </div>
        <div className="cover-section__button-wrapper">
          <Link href="/about" className="cover-section__button-link">
            <Button
              type="button"
              className="cover-section__button"
              aria-label="Подробнее о Федерации КХМЕРСКОГО БОКСА МОСКВЫ"
              size="lg"
              icon={ARROW_ICON}
              iconPosition="right"
            >
              ПОДРОБНЕЕ
            </Button>
          </Link>
        </div>
      </div>
      <div className="cover-section__red-line">
        <div className="cover-section__red-line-text">{marqueeTextElements}</div>
        <div className="cover-section__red-line-text" aria-hidden="true">
          {marqueeTextElements}
        </div>
      </div>
    </section>
  );
};
