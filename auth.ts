import NextAuth, { type DefaultSession } from 'next-auth';
import authConfig from '@/auth.config';
import { getUserById } from './lib/actions/auth.action';

type ExtendedUser = DefaultSession['user'] & {
  role: 'ADMIN' | 'USER' | 'EMPLOYEE';
};

declare module 'next-auth' {
  interface Session {
    user: ExtendedUser;
  }
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  // nextAuth will always redirect to this route when something goes wrong
  pages: {
    signIn: '/sign-in',
    error: '/error',
  },
  events: {
    async linkAccount({ user }) {
      // update user data "email verification"
      console.log(user);
    },
  },
  callbacks: {
    async signIn({ user, account }) {
      // allow authentication without email verification
      if (account?.provider !== 'credentials') return true;
      const exestingUser = await getUserById(user.id!);
      // bloc the login whiout verification email
      if (!exestingUser || !exestingUser.emailVerified) {
        return false;
      }
      return true;
    },
    async session({ token, session }) {
      console.log(token);
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }
      if (token.role && session.user) {
        session.user.role = token.role as 'ADMIN' | 'USER' | 'EMPLOYEE';
      }
      return session;
    },
    async jwt({ token }) {
      if (!token.sub) return token; // loged out
      const exestingUser = await getUserById(token.sub);
      if (!exestingUser) return token;
      token.role = exestingUser.role;
      return token;
    },
  },
  // adapter: PrismaAdapter(db),
  session: { strategy: 'jwt' },
  ...authConfig,
});
