import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Software Engineering Guide",
  description: "A comprehensive guide to software engineering fundamentals",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-gray-900 text-gray-100`}>
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 p-8 ml-64">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
