// Server component: lets Next.js add site-wide <head> tags (titles,
// descriptions, canonical links, social previews) to every page.
// Anything interactive lives in client components (Providers, Header, ...).
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "sonner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Providers } from "./providers";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import "../styles/index.css";

const inter = Inter({ subsets: ["latin"] });

const DESCRIPTION =
  "FibreMate: shift production and downtime logging for pulp and paper mills, plus free pulp and paper calculators. Built in South Africa by a production lead with 15 years on tissue machines.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "FibreMate | Shift production, downtime and calculators for pulp and paper mills",
    template: "%s | FibreMate",
  },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: "J88Moja Systems" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_ZA",
    url: "/",
    title: "FibreMate by J88Moja Systems",
    description: DESCRIPTION,
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

/** Structured data: tells Google who publishes the site and what FibreMate is. */
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "J88Moja Systems",
      legalName: "J88Moja (Pty) Ltd",
      url: SITE_URL,
      logo: `${SITE_URL}/images/logo/fibremate-mark.svg`,
      areaServed: "ZA",
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${SITE_URL}/#fibremate`,
      name: SITE_NAME,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web browser",
      description: DESCRIPTION,
      publisher: { "@id": `${SITE_URL}/#organization` },
      offers: { "@type": "Offer", price: "500", priceCurrency: "ZAR", description: "Pilot, per month" },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang="en-ZA">
      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Providers>
          <Header />
          {children}
          <Footer />
          <SpeedInsights />
          <Toaster richColors position="top-right" />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
