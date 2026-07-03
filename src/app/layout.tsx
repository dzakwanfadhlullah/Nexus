import type { Metadata, Viewport } from "next";
import "@/app/globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Nexus Project — Studio Digital untuk Website, Aplikasi, dan Showcase",
    template: "%s — Nexus Project",
  },
  description: siteConfig.description,
  openGraph: {
    title: "Nexus Project — Website, Apps, and Digital Systems",
    description: "Temukan arah website atau aplikasi yang tepat, lalu bangun bersama Nexus.",
    images: ["/og/default-og.svg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og/default-og.svg"],
  },
  icons: {
    icon: "/icons/nexus-logo.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#F8F5F1",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" data-scroll-behavior="smooth">
      <body>
        <div className="page-shell">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
