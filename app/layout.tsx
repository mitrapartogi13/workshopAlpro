import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

import { Providers } from "@/context/providers";
import { Navbar } from "@/components/layout/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AlproShop | Premium Shopping",
  description: "Curated collection of premium products.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="antialiased bg-slate-950 text-slate-100 selection:bg-blue-500/30 selection:text-blue-200">
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <footer className="border-t border-slate-800/60 bg-slate-950 py-8">
              <div className="mx-auto max-w-7xl px-6 text-center text-sm text-slate-500">
                <p>
                  &copy; {new Date().getFullYear()} AlproShop. All rights
                  reserved.
                </p>
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
