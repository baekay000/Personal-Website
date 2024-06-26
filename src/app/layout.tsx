import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import Footer from "../components/shared/footer";
import Header from "../components/shared/header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Personal Portfolio",
  description: "On my way to becoming a software engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 flex flex-col h-[100dvh]">
        <Header />
        <main className="flex-1">{children}</main>
        {/* ={inter.className} */}
        <Footer />
      </body>
    </html>
  );
}
