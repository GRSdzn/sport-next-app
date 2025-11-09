import { CoverSection } from './sections/cover.section';
import { AboutSection } from './sections/about.section';
import { LineSection } from '@/components/ui/Line/Line';
import { NewsSection } from './sections/news.section';
import { GallerySection } from './sections/gallery.section';
import { DetailInfoSection } from './sections/detail-info.section';
import { FederationClubSection } from './sections/federation-club.section';

const HomePage: React.FC = () => {
  return (
    <div
      className="home-page__container"
      style={{ display: 'flex', flexDirection: 'column', gap: '100px', marginBottom: '100px' }}
    >
      <CoverSection />
      <LineSection />
      <AboutSection />
      <LineSection />
      <NewsSection />
      <LineSection />
      {/* <GallerySection /> */}
      <DetailInfoSection />
      <LineSection />
      <FederationClubSection />
    </div>
  );
};

export default HomePage;
