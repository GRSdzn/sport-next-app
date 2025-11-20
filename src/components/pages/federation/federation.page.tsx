import './federation.scss';
import { AboutSection } from '@/components/sections/about.section';
import { LineSection } from '@/components/ui/Line/Line';
import { GoalsAndObjectivesSection } from '@/components/pages/federation/sections/about/GoalsNObjectives';
import { OBJ_IMAGES, OBJ_LIST } from '@/components/constants/obj-list';
import { GOALS_IMAGES, GOALS_LIST } from '@/components/constants/goals-list';
import { TopOfficialsSection } from './sections/top_officials/top-officials.section';

const FederationPage: React.FC = () => {
  return (
    <div className="federation-page__container">
      <AboutSection showButton={false} />
      <LineSection
        showDottedGrid
        dottedGridPosition="right"
        dottedGridProps={{ itemSize: 8, cols: 3, rows: 7, gapY: 32, gapX: 20 }}
      />

      <GoalsAndObjectivesSection goals={GOALS_LIST} images={GOALS_IMAGES} heading="ЦЕЛИ" listPosition="left" />
      <LineSection />
      <GoalsAndObjectivesSection goals={OBJ_LIST} images={OBJ_IMAGES} heading="ЗАДАЧИ" listPosition="right" />
      <LineSection />
      <TopOfficialsSection />
    </div>
  );
};

export default FederationPage;
