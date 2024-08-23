import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="flex min-h-screen w-full flex-col">
      <Header />
      <main>{children}</main>
      <Footer />
    </section>
  );
}
