import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { metaConfig } from "@/meta.config";
import ShareThisScript from "@/components/script/ShareThisScript";
import { GoogleAnalytics } from "@next/third-parties/google";
import Plausible from "@/components/script/Plausible";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export async function generateMetadata(): Promise<Metadata> {
  return metaConfig;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <MultitagScript /> */}
        {/* <ShareThisScript id="6714816dd01e2b001255260d" /> */}
        <Plausible />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#f1efe8] `}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow w-full max-w-5xl mx-auto px-2 md:px-4">
            {children}
          </main>
          <Footer />
        </div>
      </body>
      <GoogleAnalytics gaId="G-TVBNNBC23G" />
    </html>
  );
}
