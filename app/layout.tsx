import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { siteUrl, siteConfig } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteConfig.title,
    template: "%s | Accredian Enterprise",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  category: "education",
  keywords: [
    "enterprise learning",
    "corporate upskilling",
    "corporate training",
    "data science training",
    "generative AI training",
    "AI training for teams",
    "leadership development",
    "Accredian",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    type: "website",
    url: "/",
    siteName: siteConfig.name,
    locale: "en_US",
    images: [
      {
        url: "/images/hero-people.jpg",
        width: 1000,
        height: 1000,
        alt: "Accredian Enterprise — upskilling high-performance teams",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/images/hero-people.jpg"],
    creator: "@accredianedu",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: siteConfig.name,
  url: siteUrl,
  description: siteConfig.description,
  email: "enterprise@accredian.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "4th Floor, 250, Phase IV, Udyog Vihar, Sector 18",
    addressLocality: "Gurugram",
    addressRegion: "Haryana",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.linkedin.com/school/accredianedu/",
    "https://x.com/accredianedu",
    "https://www.instagram.com/accredian_edu",
    "https://www.facebook.com/accredianlearn",
    "https://www.youtube.com/channel/UCE0L_4ADPU2iyKnDJ0xRzyA",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`;

  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
