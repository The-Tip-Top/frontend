import { auth } from '@/auth';
import Header from '@/components/navigation/Header';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  const user = session?.user ?? undefined;
  return (
    <section className="flex h-screen w-full flex-col  justify-center items-center font-lato">
      <Header role="EMPLOYEE" user={user || undefined} />
      <main className="">{children}</main>
      {/* <Footer /> */}
    </section>
  );
}
