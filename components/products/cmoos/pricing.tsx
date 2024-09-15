// React and Next.js
import React from 'react';
import Link from 'next/link';

// Third-party libraries
import Balancer from 'react-wrap-balancer';

// Custom components
import { Section, Container } from '@/components/craft';
import { Separator } from '@/components/ui/separator';

// Icons
import { Coins, ArrowRight } from 'lucide-react';

type NewType = React.JSX.Element;

type PriceText = {
  icon: NewType;
  title: string;
  description: string;
  href?: string;
  cta?: string;
};

const priceTexts: PriceText[] = [
  {
    icon: <Coins className='h-6 w-6' />,
    title: 'Basic',
    href: '/#contact',
    description: 'Give your team the tools they need to grow.',
    cta: 'Contact Us',
  },
  {
    icon: <Coins className='h-6 w-6' />,
    title: 'Standard',
    href: '/#contact',
    description: 'Powerful features for your business operations.',
    cta: 'Contact Us',
  },
  {
    icon: <Coins className='h-6 w-6' />,
    title: 'Premium',
    href: '/#contact',
    description: 'Advanced analytics and automation capabilities.',
    cta: 'Contact Us',
  },
];

const Feature = () => {
  return (
    <Section id='pricing'>
      <Container className='not-prose bg-slate-200 dark:bg-slate-800 rounded-lg p-8'>
        <div className='flex items-center justify-center'>
          <Separator className='mt-3 h-0.5 w-80 bg-slate-100/20 dark:bg-slate-700/40' />
        </div>
        <div className='flex flex-col gap-6'>
          <h3 className='text-4xl font-bold text-slate-900 dark:text-slate-100'>
            <Balancer>Pricing</Balancer>
          </h3>
          <h4 className='text-2xl font-light text-slate-700 dark:text-slate-300 opacity-70'>
            <Balancer>Choose a plan that best fits your needs.</Balancer>
          </h4>

          <div className='mt-6 grid gap-6 md:mt-12 md:grid-cols-3'>
            {priceTexts.map(
              ({ icon, title, description, href, cta }, index) => (
                <Link
                  href={`${href}`}
                  className='flex flex-col justify-between gap-6 rounded-lg border p-6 transition-all hover:-mt-2 hover:mb-2 bg-slate-100 dark:bg-slate-900 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700'
                  key={index}
                >
                  <div className='grid gap-4'>
                    <div className='text-primary'>{icon}</div>
                    <h4 className='text-xl font-semibold text-slate-900 dark:text-slate-100'>
                      {title}
                    </h4>
                    <p className='text-base text-slate-700 dark:text-slate-400 opacity-75'>
                      {description}
                    </p>
                  </div>
                  {cta && (
                    <div className='flex h-fit items-center text-sm font-semibold text-primary'>
                      <p>{cta}</p> <ArrowRight className='ml-2 h-4 w-4' />
                    </div>
                  )}
                </Link>
              )
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Feature;
