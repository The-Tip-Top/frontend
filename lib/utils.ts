import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { z } from 'zod';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const signUpSchema = z.object({
  firstName: z.string().min(3),
  lastName: z.string().min(3),
  userName: z.string().max(50),
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
  userName: z.string().max(50).optional(),
  dateOfBirth: z.string().min(10).max(10).optional(),
  phoneNumber: z.string().min(10).max(10).optional(),
  email: z.string().email({
    message: 'Email invalide.',
  }),
  password: z.string().min(8),
});
