import type { Metadata } from 'next';
import { Inter, Lato } from 'next/font/google';
import './globals.css';
import { SessionProvider } from 'next-auth/react';
import { auth } from '@/auth';

const inter = Inter({ subsets: ['latin'] });
const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'Thé TipTop',
  description: 'Grand jeux concours de thé à Nice',
  icons: {
    icon: 'icons/favicon.ico',
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  // console.log('layout session ', session)
  return (
    <SessionProvider session={session}>
      <html lang="fr">
        <body className={`${lato.className} ${inter.className} bg-background text-foreground`}>
          <main>{children}</main>
        </body>
      </html>
    </SessionProvider>
  );
}
