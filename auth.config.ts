import Google from 'next-auth/providers/google';
import Facebook from 'next-auth/providers/facebook';
import Credentials from 'next-auth/providers/credentials';

import { signInSchema } from './lib/utils';
import { NextAuthConfig } from 'next-auth';

// const formSchema = authFormSchema("sign-in");

const authConfig = {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Facebook,
    Credentials({
      async authorize(credential) {
        const validatedFields = signInSchema.safeParse(credential);
        if (validatedFields.success) {
          const { email, password } = validatedFields.data;
          console.log('email', email, 'pasword', password);
        }
        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;

export default authConfig;
