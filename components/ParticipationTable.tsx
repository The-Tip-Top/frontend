/* eslint-disable prettier/prettier */
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { participationStatusStyles } from '@/constants';
import { EGiftStatus, Participation } from '@/lib/types/types';
import { cn, formatDateTime, getColor } from '@/lib/utils';

interface StatusBadgeProps {
  status: string;
}
interface ParticipationTableProps {
  participations: Participation[];
}

const StatusBadge = ({ status }: StatusBadgeProps) => {
  const { borderColor, backgroundColor, textColor, chipBackgroundColor } =
    participationStatusStyles[status as keyof typeof participationStatusStyles] || participationStatusStyles.default;
  return (
    <div className={cn('status-badge', borderColor, chipBackgroundColor)}>
      <div className={cn('size-2 rounded-full', backgroundColor)} />
      <p className={cn('text-[12px] font-medium ', textColor)}>{status} </p>
    </div>
  );
};

const ParticipationTable = ({ participations }: ParticipationTableProps) => {
  console.log('ticketttttt', participations[0]);

  return (
    <Table>
      <TableHeader className="bg-[#f9fafb] ">
        <TableRow>
          <TableHead className="p-2">Participant</TableHead>
          <TableHead className="p-2">Ticket</TableHead>
          <TableHead className="p-2">Statut</TableHead>
          <TableHead className="p-2 max-md:hidden">Date de Prticipation</TableHead>
          <TableHead className="p-2 max-md:hidden">Date de Remise</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {participations?.map((p: Participation, index) => {
          return (
            <TableRow
              key={p.participationId}
              className={`${index % 2 === 0 ? 'bg-[#FFFBFA]' : 'bg-[#F6FEF9] !over:bg-none !border-b-DEFAULT'}`}
            >
              <TableCell className="max-w-[250px] pl-2 pr-10">
                <div className="flex items-center gap-3">
                  <h1 className="text-14 truncate font-semibold text-[#344054] ">{p.ticket?.user?.name ?? ''}</h1>
                </div>
              </TableCell>
              <TableCell className={`pl-2 pr-10 font-semibold`}>{p?.gift?.name}</TableCell>
              <TableCell className={`pl-2 pr-10 font-semibold ${getColor(p?.ticket?.status ?? EGiftStatus.CANCELLED)}`}>
                {' '}
                <StatusBadge status={(p?.ticket?.status as unknown as string) ?? ''} />
              </TableCell>
              <TableCell className="pl-2 pr-10 min-w-32 ">{formatDateTime(new Date(p?.createdAt)).dateTime}</TableCell>
              <TableCell className="pl-2 pr-10 min-w-32 ">{formatDateTime(new Date(p?.submitedAt)).dateTime}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default ParticipationTable;
