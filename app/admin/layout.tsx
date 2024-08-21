import { auth } from '@/auth';
import MobileNav from '@/components/MobileNav';
import Sidebar from '@/components/Sidebar';
import Image from 'next/image';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  const user = session?.user ?? undefined;
  return (
    <main className="flex h-screen w-full font-lato">
      <Sidebar user={user || undefined} />
      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src="/logofinal.png" width={75} height={75} alt="logo" />
          <div>
            <MobileNav user={session?.user || undefined} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
