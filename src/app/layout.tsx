import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AosInit } from "./_components/aos-init";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Petshop - Hotel para pets",
  description: "Petshop e hotel para pets, com serviços de hotel, spa e petshop",
  openGraph: {
    title: "Petshop - Hotel para pets",
    description: "Petshop e hotel para pets, com serviços de hotel, spa e petshop",
    url: "https://petshop.com",
    siteName: "Petshop",
    images: [
      {
        url: "https://petshop.com/og.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "pt-BR",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <AosInit />
      </body>
    </html>
  );
}
