import { auth } from '@/auth';
import Sidebar from '@/components/Sidebar';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={session?.user} />
      {children}
    </main>
  );
}
