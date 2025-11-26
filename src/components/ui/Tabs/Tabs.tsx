'use client';

import './Tabs.scss';
import { TabsProvider } from './TabsProvider';

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
