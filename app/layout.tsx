import type { Metadata } from "next";
import "./globals.css";
import { Open_Sans } from "next/font/google";

export const metadata: Metadata = {
  title: "Kevin's Portfolio",
  description: "A showcase of my work.",
};
//
const openSans = Open_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={openSans.className}>
      <body>
        <main className="h-screen w-screen flex justify-start items-start p-24">
          <section className="max-w-6xl min-w-6xl h-3/4">{children}</section>
        </main>
      </body>
    </html>
  );
}
