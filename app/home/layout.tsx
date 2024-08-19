import Footer from '@/components/Footer';
import Header from '@/components/Header';
import NavBar from '@/components/Navbar';
import Navbar from '@/components/Navbar';

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
