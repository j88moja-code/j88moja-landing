import { Main } from "@/components/craft";
import CTA from "@/components/cta";
import FAQ from "@/components/faq";
import Feature from "@/components/feature";
import Footer from "@/components/footer";
import Hero from "@/components/hero";

export default function Page() {
  return (
    <Main>
      <Hero />
      <Feature />
      <CTA />
      <FAQ />
      <Footer />
    </Main>
  );
}
