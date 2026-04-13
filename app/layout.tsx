import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { DevzzBadge } from "@/components/devzz-badge";
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
  title: "Toolzz Vibe Start Template",
  description: "This project is created using Toolzz Vibe AI Agent, try at vibe.toolzz.ai",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <DevzzBadge />
      </body>
    </html>
  );
}
