import Footer from '@/components/Footer';
import Header from '@/components/navigation/Header';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="flex min-h-screen w-full flex-col justify-between">
      <Header />
      <main>{children}</main>
      <Footer />
    </section>
  );
}
