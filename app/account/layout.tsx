import { auth } from '@/auth';
import Footer from '@/components/Footer';
import Header from '@/components/navigation/Header';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <section className="flex min-h-screen w-full justify-between flex-col">
      <Header user={session?.user} />
      <main>{children}</main>
      <Footer />
    </section>
  );
}
