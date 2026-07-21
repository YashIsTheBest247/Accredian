import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Accredian Enterprise — Next-Gen Expertise For Your Enterprise",
    template: "%s | Accredian Enterprise",
  },
  description:
    "Accredian Enterprise cultivates high-performance teams through expert learning — tailored corporate training in Data Science, Gen-AI, Product, and Leadership.",
  keywords: [
    "enterprise learning",
    "corporate upskilling",
    "data science training",
    "AI training for teams",
    "Accredian",
  ],
  openGraph: {
    title: "Accredian Enterprise — Upskill Your Workforce for the AI Era",
    description:
      "Outcome-driven learning programs that turn your teams into a competitive advantage.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`;

  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
