'use client';

// Third-party library imports
import Balancer from 'react-wrap-balancer';

// UI component imports
import { InlineWidget } from 'react-calendly';

// Custom components
import { Section, Container } from '@/components/craft';
import { Separator } from './ui/separator';

const Calendly = () => {
  return (
    <Section id='calendly'>
      <Container className='flex flex-col items-center gap-6 px-4 md:px-8'>
        {/* Heading */}
        <h2 className='text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl lg:text-5xl'>
          <Balancer>Book a Free Consultation Below:</Balancer>
        </h2>

        {/* Separator */}
        <div className='flex w-full items-center justify-center'>
          <Separator className='mt-3 h-0.5 w-full max-w-lg bg-slate-200 dark:bg-slate-700' />
        </div>

        {/* Subheading */}
        <p className='text-center text-lg text-gray-600 dark:text-gray-300'>
          <Balancer>
            Schedule a free consultation with our team to discuss your needs.
          </Balancer>
        </p>

        {/* Calendly Widget */}
        <InlineWidget
          url='https://calendly.com/ntobekos-j88moja/30min'
          styles={{
            height: '900px',
            width: '100%',
            border: 'none',
            borderRadius: '5px',
            background: 'none',
          }}
        />
      </Container>
    </Section>
  );
};

export default Calendly;
