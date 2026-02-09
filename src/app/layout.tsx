import "./globals.css";

import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, Playfair_Display } from "next/font/google";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { siteContent } from "@/content/siteContent";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap"
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap"
});

export const metadata: Metadata = {
  title: {
    default: `${siteContent.personal.name} · ${siteContent.personal.title}`,
    template: `%s · ${siteContent.personal.name}`
  },
  description: siteContent.personal.tagline,
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: `${siteContent.personal.name} · ${siteContent.personal.title}`,
    description: siteContent.personal.tagline,
    images: ["/og-image.svg"],
    type: "website"
  },
  icons: {
    icon: "/icon.svg"
  }
};

export default function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-background font-body">
        <div className="min-h-screen bg-hero-wash">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
