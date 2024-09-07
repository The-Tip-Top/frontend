import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { formatDateTime } from '../../lib/utils';
import { Participation } from '../../lib/types/types';

export const exportTableToExcel = (data: Participation[], fileName: string) => {
  const formattedData = data.map((row) => ({
    Status: row.ticket?.status ?? 'N/A',
    Participant: row.ticket?.user?.name ?? 'N/A',
    Gift: row.gift?.name ?? 'N/A',
    'Date participation': row.createdAt ? formatDateTime(new Date(row.createdAt)).dateTime : 'N/A',
    'Date de récupération': row.submitedAt ? formatDateTime(new Date(row.submitedAt)).dateTime : 'N/A',
  }));

  const worksheet = XLSX.utils.json_to_sheet(formattedData);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

  const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
  const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', `${fileName}.xlsx`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const exportTableToCSV = (data: Participation[], fileName: string) => {
  const formattedData = data.map((row) => ({
    Status: row.ticket?.status ?? 'N/A',
    Participant: row.ticket?.user?.name ?? 'N/A',
    Gift: row.gift?.name ?? 'N/A',
    'Date participation': row.createdAt ? formatDateTime(new Date(row.createdAt)).dateTime : 'N/A',
    'Date de récupération': row.submitedAt ? formatDateTime(new Date(row.submitedAt)).dateTime : 'N/A',
  }));

  const worksheet = XLSX.utils.json_to_sheet(formattedData);
  const csv = XLSX.utils.sheet_to_csv(worksheet);
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', `${fileName}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const exportTableToPDF = (data: Participation[], fileName: string) => {
  const doc = new jsPDF();
  const formattedData = data.map((row) => [
    row.ticket?.status ?? 'N/A',
    row.ticket?.user?.name ?? 'N/A',
    row.gift?.name ?? 'N/A',
    row.createdAt ? formatDateTime(new Date(row.createdAt)).dateTime : 'N/A',
    row.submitedAt ? formatDateTime(new Date(row.submitedAt)).dateTime : 'N/A',
  ]);

  autoTable(doc, {
    head: [['Status', 'Participant', 'Gift', 'Date participation', 'Date de récupération']],
    body: formattedData,
  });

  doc.save(`${fileName}.pdf`);
};




