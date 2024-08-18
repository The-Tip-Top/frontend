/* eslint-disable prettier/prettier */
/* eslint-disable indent */
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import qs from 'query-string';
import { z } from 'zod';
import { EGiftStatus } from './types/types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const signUpSchema = z.object({
  firstName: z.string().min(3),
  lastName: z.string().min(3),
  name: z.string().max(50),
  dateOfBirth: z.string().min(10).max(10),
  phoneNumber: z.string().min(10).max(10),

  email: z.string().email({
    message: 'Email invalide.',
  }),
  password: z.string().min(8),
});

export const signInSchema = z.object({
  firstName: z.string().min(3).optional(),
  lastName: z.string().min(3).optional(),
  name: z.string().max(50).optional(),
  dateOfBirth: z.string().min(10).max(10).optional(),
  phoneNumber: z.string().min(10).max(10).optional(),
  email: z.string().email({
    message: 'Email invalide.',
  }),
  password: z.string().min(8),
});

// FORMAT DATE TIME
export const formatDateTime = (dateString: Date) => {
  const dateTimeOptions: Intl.DateTimeFormatOptions = {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  };

  const dateDayOptions: Intl.DateTimeFormatOptions = {
    weekday: 'short',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  };

  const dateOptions: Intl.DateTimeFormatOptions = {
    month: 'short',
    year: 'numeric',
    day: 'numeric',
  };

  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  };

  const formattedDateTime: string = new Date(dateString).toLocaleString('fr-FR', dateTimeOptions);

  const formattedDateDay: string = new Date(dateString).toLocaleString('fr-FR', dateDayOptions);

  const formattedDate: string = new Date(dateString).toLocaleString('fr-FR', dateOptions);

  const formattedTime: string = new Date(dateString).toLocaleString('fr-FR', timeOptions);

  return {
    dateTime: formattedDateTime,
    dateDay: formattedDateDay,
    dateOnly: formattedDate,
    timeOnly: formattedTime,
  };
};

interface UrlQueryParams {
  params: string;
  key: string;
  value: string;
}

export function formUrlQuery({ params, key, value }: UrlQueryParams) {
  const currentUrl = qs.parse(params);

  currentUrl[key] = value;

  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: currentUrl,
    },
    { skipNull: true },
  );
}

export const getColor = (status: EGiftStatus) => {
  switch (status) {
    case EGiftStatus.CANCELLED:
      return 'text-[#f04438]';
    case EGiftStatus.GIFT_GIVEN:
      return 'text-[#039855]';
    case EGiftStatus.WAITING:
      return 'text-[#df7c36]';
    default:
      return 'text-[#3f95e1]';
  }
};
