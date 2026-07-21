import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://accredian-enterprise.vercel.app"),
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
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
