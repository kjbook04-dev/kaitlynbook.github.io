import "./globals.css";

import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";

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
const socialPreviewImage = `${siteUrl}/linkedin-thumbnail-card-linkedin-1200x627.png`;

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
        url: socialPreviewImage,
        width: 1200,
        height: 627,
        alt: `${siteContent.personal.name} portfolio preview`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteContent.personal.name} · Personal Website`,
    description: "Personal Website",
    images: [socialPreviewImage]
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
        <Script id="platform-desktop-scale" strategy="beforeInteractive">
          {`(function(){try{var ua=navigator.userAgent||"";if(/Windows/i.test(ua)){document.documentElement.classList.add("platform-windows");}if(/Android/i.test(ua)&&!/Mobile/i.test(ua)){document.documentElement.classList.add("platform-android-desktop");}}catch(_e){}})();`}
        </Script>
        <Script id="chunk-load-recovery" strategy="beforeInteractive">
          {`(function(){try{var KEY="__chunk_reload_once__";function shouldReload(err){var msg=(err&&((err.message)||String(err)))||"";return /ChunkLoadError|Loading chunk [\\d]+ failed|Failed to fetch dynamically imported module/i.test(msg);}function reloadOnce(){if(sessionStorage.getItem(KEY)==="1"){return;}sessionStorage.setItem(KEY,"1");window.location.reload();}window.addEventListener("error",function(e){if(shouldReload(e&&e.error)){reloadOnce();}});window.addEventListener("unhandledrejection",function(e){if(shouldReload(e&&e.reason)){reloadOnce();}});window.addEventListener("load",function(){sessionStorage.removeItem(KEY);});}catch(_e){}})();`}
        </Script>
        <div className="min-h-screen bg-hero-wash">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
