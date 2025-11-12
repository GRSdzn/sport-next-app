import './federation-club.section.scss';
import Image from 'next/image';
import { DottedGrid } from '@/components/ui/DottedGrid/DottedGrid';

export const FederationClubSection: React.FC = () => {
  return (
    <section className="federation-club-section">
      <DottedGrid
        itemSize={8}
        style={{ position: 'absolute', bottom: -100, right: 10 }}
        cols={3}
        rows={7}
        gapY={32}
        gapX={20}
      />
      <div className="federation-club-section__wrapper">
        <h2 className="federation-club-section__title">Клубы Федерации</h2>
        <div className="federation-club-section__content">
          <div className="federation-club-section__image-container">
            <Image
              src="/images/federation-club/club-1.svg"
              alt="Клуб тайского Бокса и ММА"
              width={120}
              height={120}
              loading="lazy"
            />
          </div>
          <div className="federation-club-section__image-container">
            <Image
              src="/images/federation-club/club-2.svg"
              alt="Клуб тайского Бокса и ММА"
              width={120}
              height={120}
              loading="lazy"
            />
          </div>
          <div className="federation-club-section__image-container">
            <Image
              src="/images/federation-club/club-3.svg"
              alt="Клуб тайского Бокса и ММА"
              width={120}
              height={120}
              loading="lazy"
            />
          </div>
          <div className="federation-club-section__image-container">
            <Image
              src="/images/federation-club/club-4.svg"
              alt="Клуб тайского Бокса и ММА"
              width={120}
              height={120}
              loading="lazy"
            />
          </div>
          <div className="federation-club-section__image-container">
            <Image
              src="/images/federation-club/club-5.svg"
              alt="Клуб тайского Бокса и ММА"
              width={120}
              height={120}
              loading="lazy"
            />
          </div>
          <div className="federation-club-section__image-container">
            <Image
              src="/images/federation-club/club-6.svg"
              alt="Клуб тайского Бокса и ММА"
              width={120}
              height={120}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
