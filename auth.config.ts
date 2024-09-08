import bcrypt from 'bcryptjs';
import Google from 'next-auth/providers/google';
import Facebook from 'next-auth/providers/facebook';
import Credentials from 'next-auth/providers/credentials';

import { signInSchema } from './lib/utils';
import { NextAuthConfig } from 'next-auth';
import { getUserByEmail } from './lib/actions/user.auth.action';

const authConfig = {
  trustHost: true,
  providers: [
    Google({
      clientId: '968686510140-p509kkasulv73qvi5f2tf5m66tb9gfgq.apps.googleusercontent.com',
      clientSecret: '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',
    }),
    Facebook({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
    Credentials({
      async authorize(credential) {
        const validatedFields = signInSchema.safeParse(credential);
        if (validatedFields.success) {
          const { email, password } = validatedFields.data;
          const user = await getUserByEmail(email);
          if (!user || !user.password) return null;

          const passwordCheck = await bcrypt.compare(password, user.password);
          if (passwordCheck) return user;
        }
        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;

export default authConfig;
