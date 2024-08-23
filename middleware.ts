import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import { cookies } from 'next/headers';
import { apiAuthPrefix, authRoutes, DEFAULT_REDIRECT_LOGIN, publicRoutes } from './routes';
import { getUserByEmail } from './lib/actions/auth.action';
import { signInSchema } from './lib/utils';
import type { NextAuthConfig } from 'next-auth';

const authConfig = {
  providers: [
    Credentials({
      async authorize(credentials) {
        const validatedFields = signInSchema.safeParse(credentials);
        if (!validatedFields.success) return null;

        const { email, password } = validatedFields.data;
        const user = await getUserByEmail(email);

        if (!user || !user.password) return null;

        const passwordCheck = await bcrypt.compare(password, user.password);
        if (!passwordCheck) return null;

        return user;
      },
    }),
    // Other providers (Google, Facebook, etc.)
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
  const connectedWithProvider = cookies().get('provider')?.value;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);
  const isHomeRoute = DEFAULT_REDIRECT_LOGIN.includes(nextUrl.pathname);
  const isAccountRoute = nextUrl.pathname.startsWith('/account');

  if (isApiAuthRoute) {
    return undefined;
  }

  if (nextUrl.pathname === '/') {
    return Response.redirect(new URL('/home', nextUrl));
  }

  if (!isLoggedIn && isAuthRoute && nextUrl.pathname.startsWith('/admin') && nextUrl.pathname !== '/admin/sign-in') {
    return Response.redirect(new URL('/admin/sign-in', nextUrl));
  }

  if (isAuthRoute && !isHomeRoute) {
    if (isLoggedIn && userRole === 'ADMIN' && !nextUrl.pathname.startsWith('/admin')) {
      return Response.redirect(new URL('/admin', nextUrl));
    }
    if (isLoggedIn && (userRole === 'USER' || connectedWithProvider) && !nextUrl.pathname.includes('account')) {
      return Response.redirect(new URL('/account/history', nextUrl));
    }

    if (!isLoggedIn && (isPublicRoute || isAccountRoute)) {
      return Response.redirect(new URL('/home', nextUrl));
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
