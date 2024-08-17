/* eslint-disable indent */
'use server';

import { z } from 'zod';
import { signInSchema, signUpSchema } from '../utils';
import { DEFAULT_REDIRECT_LOGIN } from '@/routes';
import { AuthError } from 'next-auth';
import { signIn } from '@/auth';
import { myFetch } from '../hooks/useFetch';
import { ResponseMessageWithStatus } from './newVerificationToken.action';
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
  try {
    return await myFetch<User>(`users/email/${email}`, {});
  } catch {
    return null;
  }
};
export const getUserById = async (id: string) => {
  try {
    return await myFetch<User>(`users/id/${id}`, {});
  } catch {
    return null;
  }
};
