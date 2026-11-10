import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "France Queenie | Personal Portfolio",
  description: "Personal portfolio built with Next.js and ShadCN UI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen w-full bg-[#080808] text-white`}>
        {children}
      </body>
    </html>
  );
}