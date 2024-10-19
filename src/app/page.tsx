import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import ScrollUp from "@/components/Common/ScrollUp";
import Calendly from "@/components/Calendly";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL),
  title: {
    default: "J88Moja Systems",
    template: "%s | J88Moja Systems",
  },
  description:
    "Empowering Continuous Improvement through Technology with Innovative Software Solutions.",
  openGraph: {
    title: "J88Moja Systems",
    description:
      "Empowering Continuous Improvement through Technology with Innovative Software Solutions.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
    type: "website",
    locale: "en-US",
    siteName: "J88Moja Systems",
  },
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Calendly />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Services />
      <Contact />
    </>
  );
}
