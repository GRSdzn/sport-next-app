import React from 'react';
import { EventCard } from '@/components/ui/EventCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/Tabs';
import './NewsTabs.scss';
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
        <TabsTrigger value="news">НОВОСТИ</TabsTrigger>
        <TabsTrigger value="events">МЕРОПРИЯТИЯ</TabsTrigger>
      </TabsList>
      {showLine && <LineSection />}
      <TabsContent value="news">
        <div className="news-tabs__grid">
          {newsItems.length > 0 ? (
            newsItems.map((item, index) => (
              <EventCard
                key={`news-${index}`}
                src={item.src}
                title={item.title}
                description={item.description}
                date={item.date}
                location={item.location}
                alt={item.alt}
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
                key={`event-${index}`}
                src={item.src}
                title={item.title}
                description={item.description}
                date={item.date}
                location={item.location}
                alt={item.alt}
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
