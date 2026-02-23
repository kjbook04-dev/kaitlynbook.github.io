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

const siteUrl = "https://kaitlynbook.com";

export const metadata: Metadata = {
  title: {
    default: `${siteContent.personal.name} · Personal Website`,
    template: `%s · ${siteContent.personal.name}`
  },
  description: siteContent.personal.tagline,
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: `${siteContent.personal.name} · Personal Website`,
    description: "Personal Website",
    url: "/",
    siteName: `${siteContent.personal.name} Portfolio`,
    type: "website",
    images: [
      {
        url: "/linkedin-thumbnail-card-v2.png",
        width: 1060,
        height: 451,
        alt: `${siteContent.personal.name} portfolio preview`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteContent.personal.name} · Personal Website`,
    description: "Personal Website",
    images: ["/linkedin-thumbnail-card-v2.png"]
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: ["/icon.svg"],
    apple: ["/icon.svg"]
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
