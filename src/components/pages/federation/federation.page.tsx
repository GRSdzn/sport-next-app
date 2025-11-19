import { AboutSection } from '@/components/sections/about.section';
import './federation.scss';
import { LineSection } from '@/components/ui/Line/Line';
import { GoalsAndObjectivesSection } from '@/components/features/about/GoalsNObjectives';
import { GOALS_AND_OBJECTIVES_LIST } from '@/components/constants/goals-and-objectives-list';

const FederationPage: React.FC = () => {
  return (
    <div className="federation-page__container">
      <AboutSection />
      <LineSection
        showDottedGrid
        dottedGridPosition="left"
        dottedGridProps={{ itemSize: 8, cols: 3, rows: 7, gapY: 32, gapX: 20 }}
      />
      <GoalsAndObjectivesSection goals={GOALS_AND_OBJECTIVES_LIST} heading="ЦЕЛИ" listPosition="left" />
      <LineSection />
      <GoalsAndObjectivesSection goals={GOALS_AND_OBJECTIVES_LIST} heading="ЗАДАЧИ" listPosition="right" />
      <LineSection />
    </div>
  );
};

export default FederationPage;
