import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "diSoftwa Cafee",
  description: "Nikmati suasana hangat dengan secangkir kopi latte di diSoftwa Cafee.",
  keywords: ["Kopi", "Cafe", "diSoftwa", "Next.js", "Kedai Kopi"],
  authors: [{ name: "diSoftwa Cafee" }],
  openGraph: {
    title: "diSoftwa Cafee",
    description: "Nikmati suasana hangat dengan secangkir kopi latte di diSoftwa Cafee.",
    url: "https://contohwebsite.com",
    siteName: "diSoftwa Cafee",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "diSoftwa Cafee",
    description: "Nikmati suasana hangat dengan secangkir kopi latte di diSoftwa Cafee.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
