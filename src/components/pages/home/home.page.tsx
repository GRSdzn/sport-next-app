import './home.scss';
import { CoverSection } from './sections/cover.section';
import { AboutSection } from './sections/about.section';
import { LineSection } from '@/components/ui/Line/Line';
import { NewsSection } from '../../sections/news.section';
import { GallerySection } from './sections/gallery.section';
import { DetailInfoSection } from './sections/detail-info.section';
import { FederationClubSection } from './sections/federation-club.section';

const HomePage: React.FC = () => {
  return (
    <div className="home-page__container">
      <CoverSection />
      <LineSection />
      <AboutSection />
      <LineSection />
      <NewsSection showAllButton showLine={false} />
      <LineSection />
      <DetailInfoSection />
      <LineSection
        showDottedGrid
        dottedGridPosition="right"
        dottedGridProps={{ itemSize: 8, cols: 4, rows: 5, gapY: 20, gapX: 32 }}
      />
      <GallerySection />
      <LineSection
        showDottedGrid
        dottedGridPosition="left"
        dottedGridProps={{ itemSize: 8, cols: 3, rows: 7, gapY: 32, gapX: 20 }}
      />
      <FederationClubSection />
    </div>
  );
};

export default HomePage;
