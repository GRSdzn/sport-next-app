// components/ui/GridPattern.tsx
import React from 'react';
import clsx from 'clsx';
import './DottedGrid.scss'; // подключаем CSS

interface DottedGridProps {
  className?: string;
  style?: React.CSSProperties;
  rows?: number;
  cols?: number;
  itemSize?: number;
  gap?: number;
  color?: string;
}

const DEFAULT_ITEM_SIZE = 12;
const DEFAULT_GAP = 10;
const DEFAULT_COLOR = 'rgba(255, 255, 255, 0.2)';

export const DottedGrid: React.FC<DottedGridProps> = ({
  className,
  style,
  rows = 7,
  cols = 7,
  itemSize = DEFAULT_ITEM_SIZE,
  gap = DEFAULT_GAP,
  color = DEFAULT_COLOR,
}) => {
  const normalizedRows = Math.max(1, Math.floor(rows));
  const normalizedCols = Math.max(1, Math.floor(cols));
  const horizontalStep = itemSize + gap;
  const verticalStep = itemSize + gap;

  const totalWidth = normalizedCols * itemSize + (normalizedCols - 1) * gap;
  const totalHeight = normalizedRows * itemSize + (normalizedRows - 1) * gap;

  const boxShadow = Array.from({ length: normalizedRows * normalizedCols }).map((_, index) => {
    const row = Math.floor(index / normalizedCols);
    const col = index % normalizedCols;

    const x = col * horizontalStep;
    const y = row * verticalStep;

    return `${x}px ${y}px 0 0 var(--grid-color)`;
  });

  const gridStyle: React.CSSProperties = {
    ...style,
    width: totalWidth,
    height: totalHeight,
    '--grid-item-size': `${itemSize}px`,
    '--grid-box-shadow': boxShadow.join(', '),
    '--grid-color': color,
  } as React.CSSProperties;

  return <div className={clsx('dotted-grid', className)} style={gridStyle} aria-hidden="true" />;
};
