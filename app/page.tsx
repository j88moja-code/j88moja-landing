import { Main } from '@/components/craft';
import About from '@/components/about';
import Contact from '@/components/contact';
import CTA from '@/components/cta';
import Calendly from '@/components/calendly';
import FAQ from '@/components/faq';
import Feature from '@/components/feature';
import Footer from '@/components/footer';
import Hero from '@/components/hero';
import Products from '@/components/products';

export default function Page() {
  return (
    <Main>
      <Hero />
      <Feature />
      <About />
      <Products />
      <CTA />
      <Calendly />
      <FAQ />
      <Contact />
      <Footer />
    </Main>
  );
}
