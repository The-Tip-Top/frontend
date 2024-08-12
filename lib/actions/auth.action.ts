'use server';

import { z } from 'zod';
// import { authFormSchema } from "../utils";
import { signUpSchema } from '../utils';
import bcrypt from 'bcryptjs';
import { UserRole } from '@/fakeModel';
import { generateVerificationToken } from '../auth/tokens';
import { sendVerificationEmail } from '../mail';

export const Register = async (values: z.infer<typeof signUpSchema>) => {
  console.log(values);
  const validData = signUpSchema.safeParse(values);
  if (!validData.success) return { error: 'Invalid inputs' };

  const { email, password, userName, dateOfBirth, phoneNumber } = values as {
    email: string;
    password: string;
    userName: string;
    dateOfBirth: string;
    phoneNumber: string;
  };
  const hashPassword = await bcrypt.hash(password, 10);

  const exestingUser = await getUserByEmail(email);

  if (exestingUser) {
    return { error: 'Error: Email exists!!!' };
  }

  // call api to create and save user
  console.log('data:', {
    email,
    password: hashPassword,
    dateOfBirth: new Date(dateOfBirth),
    userName,
    phoneNumber,
  });

  const vereficationToken = await generateVerificationToken(email);
  await sendVerificationEmail(vereficationToken.email, vereficationToken.token);

  return { success: 'Confirmation Email sent!' };
};

export const getUserByEmail = async (email: string) => {
  try {
    // call api to get user by email
    console.log(email);
    return user;
  } catch {
    return null;
  }
};
export const getUserById = async (id: string) => {
  try {
    // call api to get user by id
    console.log(id);
    return user;
  } catch {
    return null;
  }
};

const user = {
  id: '',
  email: '',
  password: null,
  name: null,
  userName: null,
  dateOfBirth: null,
  phoneNumber: null,
  role: UserRole.USER,

  emailVerified: null,
  image: null,
  // Session       Session[]
  Account: null,
  // Optional for WebAuthn support
  // Authenticator Authenticator[]

  createdAt: null,
  updatedAt: null,
};
