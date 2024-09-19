'use client';

import * as React from 'react';
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable, 
} from '@tanstack/react-table';

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Participation, User } from '@/lib/types/types';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { columnsParticipation } from './columnDefinition';
import { exportTableToCSV, exportTableToExcel, exportTableToPDF } from './exportData';
import { sendEmailing } from '@/lib/actions/admin.action';
import { usePathname } from 'next/navigation';

interface DataTableProps<T> {
  data: T[],
  columns: ColumnDef<T>[]
}

export function DataTable<T>({ data, columns }: DataTableProps<T>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  const pathname = usePathname()

  const table = useReactTable({
    data,
    columns: columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  const [fileType, setFileType] = React.useState<string>('excel');

  const handleExport = () => {
    const fileName = 'Participation_Data';
    switch (fileType) {
      case 'excel':
        exportTableToExcel(data as Participation[], fileName);
        break;
      case 'csv':
        exportTableToCSV(data as Participation[], fileName);
        break;
      case 'pdf':
        exportTableToPDF(data as Participation[], fileName);
        break;
      default:
        exportTableToExcel(data as Participation[], fileName);
    }
  };

  const handleSendEmails = () => {
    const selectedRows = table.getSelectedRowModel().rows;
    if (selectedRows.length > 0) {
      const selectedEmails = selectedRows.map((row) => (row.original as User).email);
      sendEmailing(selectedEmails).then((response) => console.log(response));
    } else {
      console.log('No rows selected.');
    }
  }

  return (
    <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1">
      <div className="w-full relative overflow-x-hidden">
        <div className="flex lg:flex-row items-center py-4 flex-col gap-y-1 lg:gap-x-1">
          <Input
            placeholder="Filter participant name..."
            value={(table.getColumn(pathname?.includes('emaling') ? 'name' : 'participant')?.getFilterValue() as string) ?? ''}
            onChange={(event) => {
              const filterValue = event.target.value;
              table.getColumn(pathname?.includes('emaling') ? 'name' : 'participant')?.setFilterValue(filterValue);
            }}
            className="lg:max-w-sm w-full mx-1 border-gray-400 focus:border-none focus:shadow-none"
          />
          <div className="flex  w-full items-center justify-end gap-x-2 flex-col gap-y-2 xs:flex-row">
            { pathname.includes('emailing') &&
              <Button size="sm" onClick={handleSendEmails} className="w-full border-gray-400 text-white bg-[#18181B]">
              Send Email
            </Button>
            }
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size={'sm'} className="w-full flex justify-between text-white bg-[#18181B]">
                  Type <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-white ">
                <DropdownMenuItem onClick={() => setFileType('excel')}>Excel</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setFileType('csv')}>CSV</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setFileType('pdf')}>PDF</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button size="sm" onClick={handleExport} className="w-full border-gray-400 text-white bg-[#18181B]">
              Download {fileType.toUpperCase()}
            </Button>
            {/* </div> */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size={'sm'} className="border-gray-400 w-full flex justify-between text-white bg-[#18181B]">
                  Columns <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-white">
                {table
                  .getAllColumns()
                  .filter((column) => column.getCanHide())
                  .map((column) => {
                    return (
                      <DropdownMenuCheckboxItem
                        key={column.id}
                        className="capitalize"
                        checked={column.getIsVisible()}
                        onCheckedChange={(value) => column.toggleVisibility(!!value)}
                      >
                        {column.id}
                      </DropdownMenuCheckboxItem>
                    );
                  })}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="rounded-md border border-gray-300 w-full max-w-[1140px] ">
          <Table className="overflow-x-auto">
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id} className="bg-[#8FB43A] text-white font-bold font-lato">
                        {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={columnsParticipation.length} className="h-24 text-center">
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <div className="flex items-center justify-end space-x-2 py-4">
          <div className="flex-1 text-sm text-muted-foreground pl-2">
            {table.getFilteredSelectedRowModel().rows.length} / {table.getFilteredRowModel().rows.length} ligne(s)
            sélectionnée(s).
          </div>
          {/* <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button variant="outline" size="sm" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
            Next
          </Button>
        </div> */}
        </div>
      </div>
    </div>
  );
}
