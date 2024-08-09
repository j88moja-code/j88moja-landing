import { Main } from '@/components/craft';
import { Metadata } from 'next';
import About from '@/components/products/cmoos/about';
import CTA from '@/components/products/cmoos/cta';
import Features from '@/components/products/cmoos/features';
import Hero from '@/components/products/cmoos/hero';
import Pricing from '@/components/products/cmoos/pricing';

export const metadata: Metadata = {
  title: 'CMOOS',
};

export default function Page() {
  return (
    <Main>
      <Hero />
      <About />
      <Features />
      <Pricing />
      <CTA />
    </Main>
  );
}
