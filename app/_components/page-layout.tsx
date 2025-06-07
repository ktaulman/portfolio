export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="h-screen w-screen justify-center items-center px py-24">
      {children}
    </main>
  );
}
