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
import { formatDateTime } from '@/lib/utils';
import { DotSquare, Send, SortAscIcon } from 'lucide-react';
import { User } from '@/lib/types/types';
import { sendEmailing } from '@/lib/actions/admin.action';


export const columnsUserDef: ColumnDef<User>[] = [
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
    accessorKey: 'name',
    header: 'Name',
    cell: ({ row }) => {
      return (
        <div className={`capitalize`}>
          {row.original.name}
        </div>
      );
    },
  },
  {
    accessorKey: 'email',
    accessorFn: (row) => row.email,
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          Email
          <SortAscIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="lowercase text-center">{row.original.email}</div>,
  },
  {
    id: 'send Email',
    accessorFn: (row) => row.email,
    header: ({ }) => {
      return (
        <Button variant="ghost">
          Action

        </Button>
      );
    },
    cell: ({ row }) => <div className="lowercase text-center cursor-pointer p-2s rounded-sm">
      <Send className="ml-2 h-5 w-5 "
        onClick={() => sendEmailing([row.original.email]).then((d) => console.log(d))} />
    </div>,
  },
  {
    accessorKey: 'role',
    header: 'Role',
    cell: ({ row }) => {
      return (
        <div className={`capitalize`}>
          {row.original.role}
        </div>
      );
    },
  },
  {
    accessorKey: 'phoneNumber',
    accessorFn: (row) => row.phoneNumber,
    header: ({ column }) => {
      return (
        <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
          Tél
          <SortAscIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return <div className="lowercase text-center">{row.original.phoneNumber}</div>;
    },
    filterFn: 'includesString',
  },
  {
    accessorKey: 'dateOfBirth',
    header: () => <div className="text-center">Naissance</div>,
    cell: ({ row }) => {
      const birthDate = formatDateTime(new Date(row.original.dateOfBirth ?? "")).dateTime;
      return <div className="text-center font-medium w-[200px]">{birthDate}</div>;
    },
  },
  {
    accessorKey: 'createdAt',
    header: () => <div className="text-center">date de Création</div>,
    cell: ({ row }) => {
      const createdAt = formatDateTime(new Date(row.original.createdAt)).dateTime;
      return <div className="text-center font-medium w-[200px]">{createdAt}</div>;
    },
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const user = row.original;

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
            <DropdownMenuItem onClick={() => navigator.clipboard.writeText(user.id)}>
              Copie l&apos;id du l'utilisateur
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
