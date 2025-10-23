import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { ApolloWrapper } from "@/api/ApolloWrapper";
import Header from "@/components/Header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Challenge v3.5",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>
        <header className="h-auto py-15 ">
          <Header />
        </header>
        <ApolloWrapper>{children}</ApolloWrapper>
        <footer className="h-10 pt-2 bg-slate-900 text-slate-400 flex justify-center text-sm bottom-0 sticky">
          Sofia Liguori | v3.5
        </footer>
      </body>
    </html>
  );
}
