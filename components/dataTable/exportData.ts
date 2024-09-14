import ExcelJS from 'exceljs';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { formatDateTime } from '../../lib/utils';
import { Participation } from '../../lib/types/types';

export const exportTableToExcel = async (data: Participation[], fileName: string) => {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet('Sheet1');

  worksheet.addRow(['Status', 'Participant', 'Gift', 'Date participation', 'Date de récupération']);

  data.forEach((row) => {
    worksheet.addRow([
      row.ticket?.status ?? 'N/A',
      row.ticket?.user?.name ?? 'N/A',
      row.gift?.name ?? 'N/A',
      row.createdAt ? formatDateTime(new Date(row.createdAt)).dateTime : 'N/A',
      row.submitedAt ? formatDateTime(new Date(row.submitedAt)).dateTime : 'N/A',
    ]);
  });

  const buffer = await workbook.xlsx.writeBuffer();

  const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', `${fileName}.xlsx`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const exportTableToCSV = async (data: Participation[], fileName: string) => {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet('Sheet1');

  worksheet.addRow(['Status', 'Participant', 'Gift', 'Date participation', 'Date de récupération']);

  data.forEach((row) => {
    worksheet.addRow([
      row.ticket?.status ?? 'N/A',
      row.ticket?.user?.name ?? 'N/A',
      row.gift?.name ?? 'N/A',
      row.createdAt ? formatDateTime(new Date(row.createdAt)).dateTime : 'N/A',
      row.submitedAt ? formatDateTime(new Date(row.submitedAt)).dateTime : 'N/A',
    ]);
  });

  const csvBuffer = await workbook.csv.writeBuffer();

  const blob = new Blob([csvBuffer], { type: 'text/csv' });
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
