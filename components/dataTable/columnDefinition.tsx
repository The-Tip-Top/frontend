'use client';

import { ColumnDef } from '@tanstack/react-table';
import { Checkbox } from '@/components/ui/checkbox';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { formatDateTime, getColor } from '@/lib/utils';
import { DotSquare, SortAscIcon } from 'lucide-react';
import { EGiftStatus, frStatus, Participation } from '@/lib/types/types';
import { StatusBadge } from '@/components/StatusBadge';

export const columnsParticipation: ColumnDef<Participation>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && 'indeterminate')}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const status = row.original.ticket?.status ?? EGiftStatus.CANCELLED;
      return (
        <div className={`capitalize ${getColor(status)}`}>
          <StatusBadge status={status} frStatus={status && frStatus[status]} />
        </div>
      );
    },
  },
  {
    accessorKey: 'code',
    accessorFn: (row) => row.ticket?.code ?? 'N/A',
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          Code
          <SortAscIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="lowercase text-center">{row.original.ticket?.code}</div>,
  },
  {
    accessorKey: 'participant',
    accessorFn: (row) => row.ticket?.user?.name ?? 'N/A',
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          Participant
          <SortAscIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const participantName = row.original.ticket?.user?.name ?? 'N/A';
      return <div className="lowercase text-center">{participantName}</div>;
    },
    filterFn: 'includesString',
  },
  {
    accessorKey: 'email',
    accessorFn: (row) => row.ticket?.user?.email ?? 'N/A',
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          Email
          <SortAscIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="lowercase text-center">{row.original.ticket?.user?.email}</div>,
  },
  {
    accessorKey: 'Tél',
    accessorFn: (row) => row.ticket?.user?.phoneNumber ?? 'N/A',
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          Télephone
          <SortAscIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="lowercase text-center">{row.original.ticket?.user?.phoneNumber}</div>,
  },
  {
    accessorKey: 'gift.name',
    header: () => <div className="text-center">Cadeau</div>,
    cell: ({ row }) => {
      const giftName = row.original.gift?.name ?? 'N/A';
      return <div className="text-center font-medium w-[150px] ">{giftName}</div>;
    },
  },
  {
    accessorKey: 'createdAt',
    header: () => <div className="text-center">Date participation</div>,
    cell: ({ row }) => {
      const participationDate = formatDateTime(new Date(row.original.createdAt)).dateTime;
      return <div className="text-center font-medium w-[200px]">{participationDate}</div>;
    },
  },
  {
    accessorKey: 'submitedAt',
    header: () => <div className="text-center">Date de récupération</div>,
    cell: ({ row }) => {
      const submittedDate = formatDateTime(new Date(row.original.submitedAt)).dateTime;
      return <div className="text-center font-medium w-[200px]">{submittedDate}</div>;
    },
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const participation = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <DotSquare className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-white">
            <DropdownMenuLabel>Action</DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-gray-200" />
            <DropdownMenuItem onClick={() => navigator.clipboard.writeText(participation.participationId)}>
              Copie l&apos;id de participation
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            {/* <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem> */}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
