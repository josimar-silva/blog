import "./globals.css";

import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import type React from "react";

import { ThemeProvider } from "@/app/__components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "purple",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Josimar Silva",
  description: "Sharing my notes and insights about software engineering",
  keywords: ["software", "engineering", "tech", "blog"],
  authors: [{ name: "Josimar Silva" }],
  icons: {
    icon: "/favicon/favicon.png",
    apple: "/favicon/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
