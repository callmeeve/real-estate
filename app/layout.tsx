import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";


export const metadata: Metadata = {
  title: "Acme Real Estate",
  description: "The best place to find your new home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="no-select no-copy">
        <div className="flex flex-col min-h-screen">
          <header className="px-4 lg:px-6 h-14 flex items-center border-b">
            <Link href="/" className="text-lg font-bold">
              Acme Real Estate
            </Link>
            <Navbar />
          </header>
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
