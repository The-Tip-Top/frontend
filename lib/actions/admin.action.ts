/* eslint-disable indent */
/* eslint-disable prettier/prettier */
'use server';

import { auth, signIn } from '@/auth';
import { myFetch } from '../hooks/useFetch';
import { EParticipationStatus, Participation } from '../types/types';
import { z } from 'zod';
import { signInSchema } from '../utils';
import { ResponseMessageWithStatus } from './newVerificationToken.action';
import { cookies } from 'next/headers';
import { AuthError } from 'next-auth';

//http://localhost:3001/api/v1/admin/getAllParticipations

// interface ParticipationResponse {
//   participations: Participation[];
// }

// export interface CountingTicketResponse  {
//   [key in keyof typeof EGiftStatus]: nuber;
// }
export type CountingTicketResponse = Record<keyof typeof EParticipationStatus, number>;
export const getAllParticipations = async () => {
  try {
    const participations = await myFetch<Participation[]>('admin/getAllParticipations', {
      method: 'GET',
    });
    console.log('response participation total  ', participations.length);
    return participations;
  } catch (err) {
    console.log('error when fetching participations ', err);
  }
};

export const getCountTicketByStatus = async () => {
  try {
    const count = await myFetch<CountingTicketResponse>('admin/countTickets', {
      method: 'GET',
    });
    console.log('counting tickets ', count);
    return count;
  } catch (err) {
    console.log('error when fetching participations ', err);
  }
};

export const LoginAdmin = async (data: z.infer<typeof signInSchema>) => {
  try {
    const validData = signInSchema.safeParse(data);
    if (!validData.success) return { error: 'Invalid inputs' };

    const { email, password } = validData.data;

    const verificationLogin = await myFetch<ResponseMessageWithStatus>(`verificationLogin/${email}`, {
      method: 'POST',
      body: {},
    });
    // console.log('login verification ', verificationLogin);
    if (verificationLogin.status !== 200) {
      return { error: verificationLogin.error };
    }
    const user = (await auth())?.user;
    console.log('----------user --------', user);
    await signIn('credentials', {
      email,
      password,
      redirectTo: '/admin',
    });

    if (user) {
      cookies().set('userId', user?.id as string, {
        path: '/',
        maxAge: 3600 * 5,
        secure: true,
      });
    }
    // console.log("sign in userrrrr ", user)
    return { success: verificationLogin.success };
  } catch (err) {
    if (err instanceof AuthError) {
      switch (err.type) {
        case 'CredentialsSignin':
          return { error: 'Invalide Credencial' };
        default:
          return { error: 'Something went wrong !!!' };
      }
    }
    throw err;
  }
};
