'use server';

import { z } from 'zod';
import { signInSchema, signUpSchema } from '../utils';
import { AuthError } from 'next-auth';
import { auth, signIn, signOut } from '@/auth';
import { myFetch } from '../hooks/useFetch';
import { ResponseMessageWithStatus } from './newVerificationToken.action';
import { cookies } from 'next/headers';
import { User } from '../types/types';

export const Register = async (userData: z.infer<typeof signUpSchema>) => {
  console.log(userData);
  const validData = signUpSchema.safeParse(userData);
  if (!validData.success) return { error: 'Invalid inputs' };

  const exestingUser = await getUserByEmail(userData.email);

  if (exestingUser) {
    return { error: 'Error: Email exists!!!' };
  }
  const user = await myFetch('/users/newuser', { method: 'POST', body: userData });
  return { success: 'Confirmation Email sent!' };
};

export const Login = async (data: z.infer<typeof signInSchema>, variable?:string) => {
  try {
    const validData = signInSchema.safeParse(data);
    if (!validData.success) return { error: 'Invalid inputs' };

    const { email, password } = validData.data;

    const verificationLogin = await myFetch<ResponseMessageWithStatus>(`verificationLogin/${email}`, {
      method: 'POST',
      body: {},
    });
    if (verificationLogin.status !== 200) {
      return { error: verificationLogin.error };
    }
    const user = (await auth())?.user;

    console.log("==================== ", variable ? '/account/ticket': '/account/history')
    await signIn('credentials', {
      email,
      password,
      redirectTo: variable ? '/account/ticket': '/account/history',
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

export const logoutAccount = async () => {
  cookies().delete('role');
  await signOut();
};
