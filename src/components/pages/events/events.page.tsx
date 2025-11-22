import './events.scss';
import { DottedGrid } from '@/components/ui/DottedGrid/DottedGrid';
import { NewsSection } from '@/components/sections/news.section';

const EventsPage: React.FC = () => {
  return (
    <div className="events-page__container">
      <DottedGrid
        itemSize={8}
        style={{ position: 'absolute', bottom: 50, left: -32 }}
        cols={4}
        rows={7}
        gapX={20}
        gapY={32}
      />
      <NewsSection />
    </div>
  );
};

export default EventsPage;
