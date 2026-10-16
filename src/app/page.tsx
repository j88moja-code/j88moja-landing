import ScrollUp from "@/components/Common/ScrollUp";
import Calendly from "@/components/Calendly";
import Contact from "@/components/Contact";
import FAQs from "@/components/FAQ";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Founder from "@/components/Founder";
import Pilot from "@/components/Pilot";
import FreeLogSheet from "@/components/FreeLogSheet";
import CalculatorsTeaser from "@/components/Calculators/Teaser";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL),
  title: {
    default: "FibreMate | Shift production, downtime and calculators for pulp and paper mills",
    template: "%s | J88Moja Systems",
  },
  description:
    "FibreMate replaces paper shift logs and spreadsheets for pulp and paper mills. Record output, stops and their causes in one place, and use free mill calculators. Pilots from R500/month.",
  openGraph: {
    title: "FibreMate by J88Moja Systems",
    description:
      "Shift production, downtime and calculators for pulp and paper mills, built by a production lead with 15 years on tissue machines.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
    type: "website",
    locale: "en-US",
    siteName: "J88Moja Systems",
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.ico",
  },
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Founder />
      <Pilot />
      <FreeLogSheet />
      <CalculatorsTeaser />
      <Calendly />
      <FAQs />
      <Contact />
    </>
  );
}
