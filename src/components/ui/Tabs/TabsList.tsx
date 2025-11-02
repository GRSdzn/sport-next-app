export type TabsListProps = {
  children: React.ReactNode;
  className?: string;
};

export const TabsList: React.FC<TabsListProps> = ({ children, className = '' }) => {
  return (
    <div className={`tabs__list ${className}`.trim()} role="tablist">
      {children}
    </div>
  );
};
