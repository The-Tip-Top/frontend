/* eslint-disable prettier/prettier */
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { EGiftStatus, Participation, ParticipationTableProps } from '@/lib/types/types';
import {  formatDateTime, getColor } from '@/lib/utils';
import { StatusBadge } from './StatusBadge';

const ParticipationTable = ({ participations }: ParticipationTableProps) => {
  return (
    <Table>
      <TableHeader className="bg-[#f9fafb] ">
        <TableRow>
          <TableHead className="p-2">Participant</TableHead>
          <TableHead className="p-2">Ticket</TableHead>
          <TableHead className="p-2">Statut</TableHead>
          <TableHead className="p-2">Date de Prticipation</TableHead>
          <TableHead className="p-2">Date de Remise</TableHead>
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
