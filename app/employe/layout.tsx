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
    <section className="flex h-screen w-full flex-col  justify-center items-center font-lato">
      <div className="absolute top-0 left-0 right-0">
        <Header role="EMPLOYEE" user={user || undefined} />
      </div>
      <main className="">{children}</main>
      {/* <Footer /> */}
    </section>
  );
}
