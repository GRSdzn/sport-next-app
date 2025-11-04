// components/ui/GridPattern.tsx
import React from 'react';
import clsx from 'clsx';
import './DottedGrid.scss'; // подключаем CSS

interface DottedGridProps {
  className?: string;
  style?: React.CSSProperties;
  rows?: number;
  cols?: number;
}

const DOT_SPACING = 22; // in pixels

export const DottedGrid: React.FC<DottedGridProps> = ({ className, style, rows = 7, cols = 7 }) => {
  const gridStyle: React.CSSProperties = {
    ...style,
    width: cols * DOT_SPACING,
    height: rows * DOT_SPACING,
  };

  return <div className={clsx('dotted-grid', className)} style={gridStyle} />;
};
