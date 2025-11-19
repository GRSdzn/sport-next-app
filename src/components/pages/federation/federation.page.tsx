import './federation.scss';
import { AboutSection } from '@/components/sections/about.section';
import { LineSection } from '@/components/ui/Line/Line';
import { GoalsAndObjectivesSection } from '@/components/pages/federation/sections/about/GoalsNObjectives';
import { OBJ_LIST } from '@/components/constants/obj-list';
import { GOALS_LIST } from '@/components/constants/goals-list';

const FederationPage: React.FC = () => {
  return (
    <div className="federation-page__container">
      <AboutSection />
      <LineSection
        showDottedGrid
        dottedGridPosition="left"
        dottedGridProps={{ itemSize: 8, cols: 3, rows: 7, gapY: 32, gapX: 20 }}
      />
      <GoalsAndObjectivesSection goals={GOALS_LIST} heading="ЦЕЛИ" listPosition="left" />
      <LineSection />
      <GoalsAndObjectivesSection goals={OBJ_LIST} heading="ЗАДАЧИ" listPosition="right" />
      <LineSection />
    </div>
  );
};

export default FederationPage;
