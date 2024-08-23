import { auth } from '@/auth';
import Footer from '@/components/Footer';
import Header from '@/components/navigation/Header';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  const user = session?.user ?? undefined;
  return (
    <section className="flex min-h-screen w-full flex-col">
      <Header user={user || undefined} />
      <main className="min-h-[calc(100vh-270px)]">{children}</main>
      <Footer />
    </section>
  );
}
