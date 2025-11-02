'use server';
import { CoverSection } from './sections/cover.section';
import { AboutSection } from './sections/about.section';
import { LineSection } from '@/components/ui/Line/Line';
import { NewsSection } from './sections/news.section';

const HomePage: React.FC = () => {
  return (
    <div className="home-page__container" style={{ display: 'flex', flexDirection: 'column', gap: '100px' }}>
      <CoverSection />
      <LineSection />
      <AboutSection />
      <LineSection />
      <NewsSection />
      <LineSection />
    </div>
  );
};

export default HomePage;
