/* eslint-disable indent */
'use server';

import { z } from 'zod';
import { signInSchema, signUpSchema } from '../utils';
import { AuthError } from 'next-auth';
import { auth, signIn, signOut } from '@/auth';
import { myFetch } from '../hooks/useFetch';
import { ResponseMessageWithStatus } from './newVerificationToken.action';
import { cookies } from 'next/headers';
import { EGiftStatus, Gift, Ticket, User } from '../types/types';
// import { User } from '@prisma/client';

export const Register = async (userData: z.infer<typeof signUpSchema>) => {
  console.log(userData);
  const validData = signUpSchema.safeParse(userData);
  if (!validData.success) return { error: 'Invalid inputs' };

  const exestingUser = await getUserByEmail(userData.email);

  if (exestingUser) {
    return { error: 'Error: Email exists!!!' };
  }
  const user = await myFetch('/users/newuser', { method: 'POST', body: userData });
  console.log('----------result ', user);

  return { success: 'Confirmation Email sent!' };
};

export const Login = async (data: z.infer<typeof signInSchema>) => {
  try {
    const validData = signInSchema.safeParse(data);
    if (!validData.success) return { error: 'Invalid inputs' };

    const { email, password } = validData.data;
    // console.log('--- login info ', email, password);

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
      redirectTo: '/account/history',
    });

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

export const getUserByEmail = async (email: string) => {
  return await myFetch<User>(`users/email/${email}`, {});
};
export const getUserById = async (id: string) => {
  try {
    return await myFetch<User>(`users/id/${id}`, {});
  } catch {
    return null;
  }
};
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
interface LinkTicketResponse {
  tickets: Ticket[];
}
export const linkTicket = async (ticketId: string) => {
  // const userId = cookies().get('userId')?.value
  const userId = (await auth())?.user?.id;
  const bodyData = { id: userId, ticketId: ticketId };
  if (userId && ticketId) {
    const linktiketResponse = await myFetch<ResponseMessageWithStatus>('linkTicketUser', {
      method: 'PUT',
      body: bodyData,
    });
    console.log('----- link ticket ', linktiketResponse);
    return linktiketResponse;
  }
  return null;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
interface GenericResponse<T> {
  data: T | undefined;
  status: number;
  success?: string;
  error?: string;
}

export const getUserTickets = async () => {
  const userId = (await auth())?.user?.id;
  if (userId) {
    const userTickets = await myFetch<Ticket[]>(`userTikets/${userId}`, {});
    console.log('errorrrr ', userTickets);
    if (userTickets) {
      return userTickets;
    }
  }
  return null;
};

export const verifyCodeTicket = async (code: string) => {
  if (code) {
    const ticket = await myFetch<Ticket>(`tickets/${code}`, {});
    console.log('errorrrr ', ticket);
    if (ticket) {
      return ticket;
    }
  }
  return null;
};
export const getOneTicket = async (id: string) => {
  if (id) {
    const ticket = await myFetch<Ticket>(`tickets/id/${id}`, {});
    console.log('errorrrr ', ticket);
    if (ticket) {
      return ticket;
    }
  }
  return null;
};

export const updateParticipationStatus = async (id: string, status: EGiftStatus) => {
  if (id) {
    const participation = await myFetch<Gift>(`participations/${id}`, {
      method: 'PUT',
      body: { status: status },
    });
    console.log('errorrrr ', participation);
    if (participation) {
      return participation;
    }
  }
  return null;
};

export const logoutAccount = async () => {
  cookies().delete('role');
  await signOut();
};
