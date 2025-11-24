import './federation-club.section.scss';
import Image from 'next/image';
import { DottedGrid } from '@/components/ui/DottedGrid/DottedGrid';
import { FEDERATION_CLUBS } from '@/components/constants/federation-clubs';

const DOTTED_GRID_CONFIG = {
  itemSize: 8,
  cols: 3,
  rows: 7,
  gapY: 32,
  gapX: 20,
} as const;

export const FederationClubSection: React.FC = () => {
  return (
    <section className="federation-club-section">
      <DottedGrid className="federation-club-section__dotted-grid" {...DOTTED_GRID_CONFIG} />
      <div className="federation-club-section__wrapper">
        <h2 className="federation-club-section__title">Клубы Федерации</h2>
        <div className="federation-club-section__content">
          {FEDERATION_CLUBS.map((club) => (
            <div key={club.id} className="federation-club-section__image-container">
              <Image
                src={club.src}
                alt={club.alt}
                width={club.width}
                height={club.height}
                loading="lazy"
                className="federation-club-section__image"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
