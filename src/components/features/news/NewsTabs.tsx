import './NewsTabs.scss';
import { EventCard } from '@/components/ui/EventCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/Tabs';
import { eventsItems, newsItems } from '@/components/constants/events-list';
import { LineSection } from '@/components/ui/Line/Line';

export type NewsTabsProps = {
  defaultTab?: 'news' | 'events';
  showLine?: boolean;
};

export const NewsTabs: React.FC<NewsTabsProps> = ({ defaultTab = 'news', showLine = true }) => {
  return (
    <Tabs defaultValue={defaultTab}>
      <TabsList>
        <TabsTrigger value="news">ПРОШЕДШИЕ</TabsTrigger>
        <TabsTrigger value="events">БУДУЩИЕ</TabsTrigger>
      </TabsList>
      {showLine && <LineSection />}
      <TabsContent value="news">
        <div className="news-tabs__grid">
          {newsItems.length > 0 ? (
            newsItems.map((item, index) => (
              <EventCard
                key={item.title + item.date + index}
                src={item.src}
                title={item.title}
                detailDescription={item.detailDescription}
                date={item.date}
                alt={item.alt}
                slides={item.slides}
                carouselOptions={item.carouselOptions}
              />
            ))
          ) : (
            <p>Новостей пока нет</p>
          )}
        </div>
      </TabsContent>

      <TabsContent value="events">
        <div className="news-tabs__grid">
          {eventsItems.length > 0 ? (
            eventsItems.map((item, index) => (
              <EventCard
                key={item.title + item.date + index}
                src={item.src}
                title={item.title}
                detailDescription={item.detailDescription}
                date={item.date}
                alt={item.alt}
                slides={item.slides}
                carouselOptions={item.carouselOptions}
              />
            ))
          ) : (
            <p>Мероприятий пока нет</p>
          )}
        </div>
      </TabsContent>
    </Tabs>
  );
};
