import NextAuth from 'next-auth';
import { apiAuthPrefix, authRoutes, DEFAULT_REDIRECT_LOGIN, publicRoutes } from './routes';

import Credentials from 'next-auth/providers/credentials';
import type { NextAuthConfig } from 'next-auth';
import { getUserByEmail } from './lib/actions/auth.action';
import bcrypt from 'bcryptjs';
import { signInSchema } from './lib/utils';
import { cookies } from 'next/headers';

const authConfig = {
  providers: [
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
    // Google, Facebook
  ],
} satisfies NextAuthConfig;

export const {
  handlers: { GET, POST },
  signIn,
  signOut,
  auth,
} = NextAuth({
  session: { strategy: 'jwt' },
  ...authConfig,
});

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;
  const userRole = cookies().get('role')?.value;
  
  // Logged in users are authenticated, otherwise redirect to login page
  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  console.log("===================== ", isLoggedIn && userRole === "ADMIN")
  // if (nextUrl.pathname === '/') {
  //   return Response.redirect(new URL('/home', nextUrl));
  // }
  if (isApiAuthRoute) {
    return undefined;
  }
  if (isAuthRoute) {
    if (isLoggedIn && userRole === 'ADMIN') {
      return Response.redirect(new URL('/admin', nextUrl));
    }
    if (isLoggedIn && userRole === 'USER') {
      return Response.redirect(new URL('/account/settings', nextUrl));
    } 
    return undefined;
  }
  if (!isLoggedIn && !isPublicRoute) {
    return Response.redirect(new URL('/sign-in', nextUrl));
  }

  return undefined;
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
