import type { Metadata } from "next";
import "./globals.css";
import PageLayout from "@/app/_components/page-layout";
import { Open_Sans } from "next/font/google";

export const metadata: Metadata = {
  title: "Kevin's Portfolio",
  description: "A showcase of my work.",
};
const openSans = Open_Sans();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={openSans.className}>
      <body>
        <PageLayout>{children}</PageLayout>
      </body>
    </html>
  );
}
