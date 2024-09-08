'use server';

import { signIn } from '@/auth';
import { myFetch } from '../hooks/useFetch';
import { z } from 'zod';
import { signInSchema } from '../utils';
import { ResponseMessageWithStatus } from './newVerificationToken.action';
import { AuthError } from 'next-auth';

export const LoginAdmin = async (data: z.infer<typeof signInSchema>, redirectTo: string) => {
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

    await signIn('credentials', {
      email,
      password,
      redirectTo: redirectTo,
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
