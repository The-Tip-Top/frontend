/* eslint-disable indent */
'use server';

import { z } from 'zod';
import { signInSchema, signUpSchema } from '../utils';
import { DEFAULT_REDIRECT_LOGIN } from '@/routes';
import { AuthError } from 'next-auth';
import { auth, signIn, signOut } from '@/auth';
import { myFetch } from '../hooks/useFetch';
import { ResponseMessageWithStatus } from './newVerificationToken.action';
import { cookies } from 'next/headers';
import { Ticket } from '../types/types';
import { User } from '@prisma/client';

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
    console.log('--- login info ', email, password);

    const verificationLogin = await myFetch<ResponseMessageWithStatus>(`verificationLogin/${email}`, {
      method: 'POST',
      body: {},
    });
    console.log('login verification ', verificationLogin);
    if (verificationLogin.status !== 200) {
      return { error: verificationLogin.error };
    }
    await signIn('credentials', {
      email,
      password,
      redirectTo: DEFAULT_REDIRECT_LOGIN,
    });

    const user = (await auth())?.user;
    if(user) {
      cookies().set('userId', user?.id as string, {
        path: '/',
        maxAge: 3600 * 5,
        secure: true,
      });
    }
    console.log("sign in userrrrr ", user)
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
interface LinkTicketResponse {
  tickets: Ticket[]
}
export  const linkTicket = async (ticketId: string) => {
  // const userId = cookies().get('userId')?.value
  const userId = (await auth())?.user?.id;
  console.log("user id ===== ", userId, "------ ticket id ", ticketId)
  const bodyData = { id: userId, ticketId: ticketId };
  const ticketsUser = await myFetch<LinkTicketResponse>('linkTicketUser', {
    method: 'PUT',
    body: bodyData
  })
    console.log("----- link ticket ", ticketsUser);
    // setnewGigt(ticketsUser.tickets[0].gift ?? null)
  
}

export const logoutAccount = async () => {
  await signOut()
}