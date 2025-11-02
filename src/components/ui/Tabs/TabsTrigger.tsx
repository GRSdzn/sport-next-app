'use client';

import { useTabsContext } from './TabsProvider';

export type TabsTriggerProps = {
  value: string;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
};

export const TabsTrigger: React.FC<TabsTriggerProps> = ({ value, children, className = '', disabled = false }) => {
  const { activeTab, setActiveTab } = useTabsContext();
  const isActive = activeTab === value;

  const handleClick = () => {
    if (!disabled) {
      setActiveTab(value);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (!disabled) {
        setActiveTab(value);
      }
    }
  };

  return (
    <button
      type="button"
      role="tab"
      aria-selected={isActive}
      aria-controls={`tabpanel-${value}`}
      id={`tab-${value}`}
      tabIndex={isActive ? 0 : -1}
      disabled={disabled}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className={`tabs__trigger ${isActive ? 'tabs__trigger--active' : ''} ${
        disabled ? 'tabs__trigger--disabled' : ''
      } ${className}`.trim()}
    >
      {children}
    </button>
  );
};
