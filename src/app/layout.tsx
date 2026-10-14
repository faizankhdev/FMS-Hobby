import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import { Roboto, Inter } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { cn } from "@/lib/utils";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/BacktoTop";

export const metadata: Metadata = {
  title: "FMS Hobby UK Official - Ignite Your Fun & Adventure – FMS Hobby UK",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const roboto = Roboto({
  subsets: ["latin"],
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={cn("font-sans", inter.variable)}>
      <body className={`${roboto.className} bg-[#f7f7f8] min-h-full flex flex-col`}>
        <Header />
        {children}
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}