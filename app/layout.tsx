import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Lumina",
    default: "Lumina - Toko Online Terlengkap & Terpercaya",
  },
  description:
    "Belanja online aman dan nyaman di Lumina. Temukan promo spesial, flash sale, dan produk terlengkap dari berbagai kategori.",
  keywords: [
    "lumina",
    "ecommerce",
    "belanja online",
    "promo",
    "flash sale",
    "gadget",
    "fashion",
  ],
  openGraph: {
    title: "Lumina - Toko Online Terlengkap & Terpercaya",
    description:
      "Belanja online aman dan nyaman di Lumina. Temukan promo spesial, flash sale, dan produk terlengkap dari berbagai kategori.",
    url: "https://lumina.com",
    siteName: "Lumina",
    images: [
      {
        url: "https://lumina.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lumina",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumina - Toko Online Terlengkap & Terpercaya",
    description: "Belanja online aman dan nyaman di Lumina.",
    images: ["https://lumina.com/twitter-image.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Lumina",
  url: "https://lumina.com",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://lumina.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased font-sans`}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
