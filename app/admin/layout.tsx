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
  return (
    <main className="flex h-screen w-full font-lato">
      <Sidebar user={session?.user} />
      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src="/icons/bio.png" width={30} height={30} alt="logo" />
          <div>
            <MobileNav user={session?.user} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
