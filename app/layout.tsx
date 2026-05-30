import "@fontsource/orbitron/700.css";
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
  title: "Shinora AI",
  description: "Futuristic AI Dashboard",

  manifest: "/manifest.json",

  icons: {
    apple: "/icon-192.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >

      <head>

        <meta
          name="theme-color"
          content="#050816"
        />

      </head>

      <body className="min-h-full flex flex-col overflow-x-hidden">

        {children}

      </body>

    </html>
  );
}
