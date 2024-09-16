'use client';

import Balancer from 'react-wrap-balancer';

// Component imports
import { Section, Container } from '@/components/craft';
import { Separator } from '@/components/ui/separator';

export default function About() {
  return (
    <Section id='relative about'>
      <div className='flex items-center justify-center'>
        <Separator className='mt-3 h-0.5 w-80 bg-slate-100/20 dark:bg-slate-700/40' />
      </div>
      <Container className='bg-slate-200 dark:bg-slate-800 rounded p-8'>
        <h2 className='text-3xl font-bold text-slate-900 dark:text-slate-100'>
          CMOOS&#8482;
        </h2>
        <div className='flex flex-col gap-6 space-y-4'>
          <p className='mt-4 text-lg opacity-70 text-slate-700 dark:text-slate-300'>
            <Balancer>
              CMOOS is your ultimate destination for a diverse range of
              enterprise applications. Crafted with cutting-edge technology and
              driven by an unwavering passion for continuous improvement and
              innovation, CMOOS offers an all-in-one solution tailored to your
              business operations. Whether you need a comprehensive suite for
              your entire business or just specific features to enhance your
              operations, CMOOS has you covered.
            </Balancer>
          </p>
          <p className='mt-4 text-lg opacity-70 text-slate-700 dark:text-slate-300'>
            <Balancer>
              Discover the power of CMOOS and elevate your business to the next
              level. Our adaptable platform is designed to scale with your
              needs, ensuring you always stay ahead in today’s dynamic market.
              Embrace the future of business solutions with CMOOS, where your
              success is our mission.
            </Balancer>
          </p>
        </div>
      </Container>
    </Section>
  );
}
