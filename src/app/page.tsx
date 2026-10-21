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

// Title, description and social preview come from app/layout.tsx
export const metadata: Metadata = {
  alternates: { canonical: "/" },
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
