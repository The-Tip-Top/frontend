import { auth } from '@/auth';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  const user = session?.user ?? undefined;
  return (
    <section className="flex min-h-screen w-full flex-col">
      <Header role="EMPLOYEE" user={user || undefined} />
      <main>{children}</main>
      <Footer />
    </section>
  );
}
