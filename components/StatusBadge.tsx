import { participationStatusStyles } from '@/constants';
import { StatusBadgeProps } from '@/lib/types/types';
import { cn } from '@/lib/utils';

export const StatusBadge = ({ status, frStatus = '' }: StatusBadgeProps) => {
  const { borderColor, backgroundColor, textColor, chipBackgroundColor } =
    participationStatusStyles[status as keyof typeof participationStatusStyles] || participationStatusStyles.default;
  return (
    <div className={cn('status-badge', borderColor, chipBackgroundColor)}>
      <div className={cn('size-2 rounded-full', backgroundColor)} />
      <p className={cn('text-[12px] font-medium ', textColor)}>{frStatus || status} </p>
    </div>
  );
};
