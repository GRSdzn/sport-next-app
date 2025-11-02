'use client';

import { TabsProvider } from './TabsProvider';
import './Tabs.scss';

export type TabsProps = {
  children: React.ReactNode;
  defaultValue?: string;
  className?: string;
};

export const Tabs: React.FC<TabsProps> = ({ children, defaultValue, className = '' }) => {
  return (
    <TabsProvider defaultValue={defaultValue}>
      <div className={`tabs ${className}`.trim()}>{children}</div>
    </TabsProvider>
  );
};
