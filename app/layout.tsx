import type { Metadata } from 'next';
import { Inter, Lato } from 'next/font/google';
import './globals.css';
// import Header from '../components/Header';
import Footer from '../components/Footer';

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${lato.className} ${inter.className} bg-background text-foreground`}>
        {/* <Header /> */}
        <main>{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
