import type { Metadata } from "next";
import "./globals.css";

import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "Subtaitoru",
  description: "Learn japanese with subtitles.",
  keywords: "subtaitoru, learn japanese, video, chrome extension, ",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
