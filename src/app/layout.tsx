import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SEOMeta from "@/components/seo/head";
import SchemaOrg from "@/components/seo/schema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Lina Villalba - Full-Stack Developer | Portfolio",
    template: "%s | Lina Villalba - Developer Portfolio"
  },
  description: 
    "Portfolio of Lina Villalba, a full-stack developer specializing in React, Node.js, and modern web technologies. Building scalable digital solutions that solve real problems.",
  keywords: [
    "full-stack developer",
    "react developer",
    "node.js developer",
    "freelance developer",
    "web development",
    "javascript developer",
    "frontend developer",
    "backend developer",
    "next.js developer"
  ],
  authors: [{ name: "Lina Villalba" }],
  creator: "Lina Villalba",
  publisher: "Lina Villalba",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://linavillalba.me",
    siteName: "Lina Villalba - Developer Portfolio",
    title: "Lina Villalba - Full-Stack Developer | Portfolio",
    description: 
      "Portfolio of Lina Villalba, a full-stack developer specializing in React, Node.js, and modern web technologies. Building scalable digital solutions that solve real problems.",
    images: [
      {
        url: "/lv-logo-grey.png",
        width: 1200,
        height: 630,
        alt: "Lina Villalba - Full-Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lina Villalba - Full-Stack Developer | Portfolio",
    description: 
      "Portfolio of Lina Villalba, a full-stack developer specializing in React, Node.js, and modern web technologies.",
    images: ["/lv-logo-grey.png"],
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}
      >
        <SEOMeta meta={{
          title: "Lina Villalba - Full-Stack Developer | Portfolio",
          description: "Portfolio of Lina Villalba, a full-stack developer specializing in React, Node.js, and modern web technologies.",
          keywords: "full-stack developer, react developer, node.js developer, freelance developer, web development",
          ogTitle: "Lina Villalba - Full-Stack Developer | Portfolio",
          ogDescription: "Portfolio of Lina Villalba, a full-stack developer specializing in React, Node.js, and modern web technologies.",
          ogImage: "/lv-logo-grey.png",
          twitterCard: "summary_large_image"
        }} />
        <SchemaOrg />
        {children}
      </body>
    </html>
  );
}
