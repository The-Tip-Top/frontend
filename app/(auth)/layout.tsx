export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <section className="flex items-center justify-center relative">{children}</section>
    </main>
  );
}
