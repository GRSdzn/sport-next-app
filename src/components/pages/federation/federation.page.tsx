import './federation.scss';
import { AboutSection } from '@/components/sections/about.section';
import { LineSection } from '@/components/ui/Line/Line';
import { GoalsAndObjectivesSection } from '@/components/pages/federation/sections/goals-n-objectives';
import { OBJ_IMAGES, OBJ_LIST } from '@/components/constants/obj-list';
import { GOALS_IMAGES, GOALS_LIST } from '@/components/constants/goals-list';
import { TopOfficialsSection } from './sections/top-officials.section';
import { CoachingStaffSection } from './sections/coaching-staff.section';
import { SocialSignificanceSection } from './sections/social-significance.section';
import { FederalAchievementsSection } from './sections/federal-achievements.section';

const FederationPage: React.FC = () => {
  return (
    <div className="federation-page__container">
      <AboutSection showButton={false} dotPosition="right" />
      <LineSection
        showDottedGrid
        dottedGridPosition="left"
        dottedGridProps={{ itemSize: 8, cols: 3, rows: 7, gapY: 32, gapX: 20 }}
      />

      <GoalsAndObjectivesSection goals={GOALS_LIST} images={GOALS_IMAGES} heading="ЦЕЛИ" listPosition="left" />
      <LineSection
        showDottedGrid
        dottedGridPosition="right"
        dottedGridProps={{ itemSize: 8, cols: 3, rows: 7, gapY: 32, gapX: 20 }}
      />
      <GoalsAndObjectivesSection goals={OBJ_LIST} images={OBJ_IMAGES} heading="ЗАДАЧИ" listPosition="right" />
      <LineSection />
      <TopOfficialsSection />
      <LineSection
        showDottedGrid
        dottedGridPosition="right"
        dottedGridProps={{ itemSize: 12, cols: 3, rows: 5, gap: 20 }}
      />
      <CoachingStaffSection />
      <LineSection />
      <SocialSignificanceSection />
      <LineSection />
      <FederalAchievementsSection />
    </div>
  );
};

export default FederationPage;
