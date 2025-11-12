import './line-section.scss';
import { DottedGrid } from '@/components/ui/DottedGrid/DottedGrid';

interface LineSectionProps {
  showDottedGrid?: boolean;
  dottedGridPosition?: 'left' | 'right' | 'center';
  dottedGridProps?: {
    itemSize?: number;
    cols?: number;
    rows?: number;
    gap?: number;
    gapX?: number;
    gapY?: number;
    color?: string;
  };
}

export const LineSection: React.FC<LineSectionProps> = ({
  showDottedGrid = false,
  dottedGridPosition = 'center',
  dottedGridProps = {},
}) => {
  return (
    <section className="line-section__container">
      {showDottedGrid && (
        <DottedGrid
          itemSize={dottedGridProps.itemSize ?? 12}
          cols={dottedGridProps.cols ?? 7}
          rows={dottedGridProps.rows ?? 7}
          gap={dottedGridProps.gap}
          gapX={dottedGridProps.gapX}
          gapY={dottedGridProps.gapY}
          color={dottedGridProps.color}
          style={{
            position: 'absolute',
            top: '50%',
            left: dottedGridPosition === 'left' ? 0 : dottedGridPosition === 'right' ? 'auto' : '50%',
            right: dottedGridPosition === 'right' ? 0 : 'auto',
            transform:
              dottedGridPosition === 'center' ? 'translate(-50%, -50%)' : 'translateY(-50%)',
          }}
        />
      )}
      <div className="line-section__container__wrapper">
        <div className="line-section__container__line" />
      </div>
    </section>
  );
};
