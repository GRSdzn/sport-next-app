'use client';

import { createContext, useContext, useState, type ReactNode } from 'react';

type TabsContextType = {
  activeTab: string;
  setActiveTab: (value: string) => void;
};

const TabsContext = createContext<TabsContextType | undefined>(undefined);

export const useTabsContext = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('Tabs components must be used within a Tabs component');
  }
  return context;
};

type TabsProviderProps = {
  children: ReactNode;
  defaultValue?: string;
};

export const TabsProvider: React.FC<TabsProviderProps> = ({ children, defaultValue = '' }) => {
  const [activeTab, setActiveTab] = useState<string>(defaultValue);

  return <TabsContext.Provider value={{ activeTab, setActiveTab }}>{children}</TabsContext.Provider>;
};
