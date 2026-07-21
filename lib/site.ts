/** Canonical site URL — auto-detects the Vercel deploy URL, overridable via env. */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const siteConfig = {
  name: "Accredian Enterprise",
  title: "Accredian Enterprise — Next-Gen Expertise For Your Enterprise",
  description:
    "Accredian Enterprise cultivates high-performance teams through expert learning — tailored corporate training in Data Science, Gen-AI, Product, and Leadership.",
};
