'use client';

import Link from 'next/link';
import Balancer from 'react-wrap-balancer';
import { useEffect } from 'react';
import AOS from 'aos';

// Custom Components
import { Section, Container } from '@/components/craft';
import { Particles } from './particles';
import { Button } from './ui/button';

export default function Hero() {
  useEffect(() => {
    AOS.init({
      disable: 'phone',
      duration: 800,
      easing: 'ease-out-cubic',
    });
  });
  return (
    <Section id='hero' className='pt-20'>
      <Particles className='absolute inset-0 -z-10' />
      <Container>
        <div className='px-8 text-center'>
          <div className='mb-6' data-aos='fade-down'>
            <div className='relative inline-flex before:absolute before:inset-0'>
              <Link href='#calendly'>
                <Button
                  asChild
                  // className="px-3 py-1 text-sm font-medium inline-flex items-center justify-center border rounded-full text-zinc-900 dark:text-white hover:text-white transition duration-150 ease-in-out w-full group border-slate-100/40"
                  variant='default'
                >
                  <span className='relative inline-flex items-center'>
                    Book Consultation{' '}
                    <span className='text-primary-500 ml-1 tracking-normal transition-transform duration-150 ease-in-out group-hover:translate-x-0.5'>
                      -&gt;
                    </span>
                  </span>
                </Button>
              </Link>
            </div>
          </div>
          <h1
            className='bg-gradient-to-r from-orange-500 to-green-500 bg-clip-text pb-4 text-7xl font-extrabold tracking-tight text-transparent lg:text-8xl'
            data-aos='fade-down'
          >
            <Balancer>
              <span className='font-bold'>
                Empowering Continuous Improvement
              </span>
              <p className='mb-8 text-lg font-medium text-zinc-300/40'>
                through J88Moja Systems
              </p>
            </Balancer>
          </h1>
          <p
            className='mt-4 text-muted-foreground opacity-70'
            data-aos='fade-down'
            data-aos-delay='200'
          >
            <Balancer>
              Streamline processes and improve efficiency with our software
              systems.
            </Balancer>
          </p>
          <h3
            className='text-muted-foreground'
            data-aos='fade-down'
            data-aos-delay='400'
          >
            <Balancer>
              J88Moja Systems is dedicated to driving continuous improvement by
              developing innovative systems that streamline processes and
              empower data-driven decision-making. Our forward-thinking approach
              ensures that businesses operations can harness the full potential
              of their data to stay ahead in an ever-evolving landscape.
            </Balancer>
          </h3>

          <div
            className='flex flex-col gap-2 md:flex-row md:gap-4'
            data-aos='fade-down'
            data-aos-delay='600'
          >
            {[
              {
                href: '#features',
                label: 'Explore Services',
              },
              {
                href: '#benefits',
                label: 'Explore Benefits',
              },
              {
                href: '#products',
                label: 'Explore Product',
              },
              {
                href: '#faq',
                label: 'Frequently Asked Questions',
              },
            ].map(({ href, label }, index) => (
              <div
                key={index}
                className='mx-auto flex max-w-xs flex-col items-center gap-4 sm:inline-flex sm:max-w-none sm:flex-row sm:justify-center'
              >
                <Link href={href}>
                  <Button
                    asChild
                    className='to-green/80 hover:from-orange/60 group flex w-full items-center justify-center whitespace-nowrap rounded bg-gradient-to-r from-orange-500 via-orange-200 px-4 py-1.5 font-medium text-zinc-900 transition duration-150 ease-in-out hover:bg-gradient-to-r hover:via-orange-500 hover:to-green-500'
                    variant='ghost'
                  >
                    <span className='relative inline-flex items-center'>
                      {label}{' '}
                      <span className='text-primary-500 ml-1 tracking-normal transition-transform duration-150 ease-in-out group-hover:translate-x-0.5'>
                        -&gt;
                      </span>
                    </span>
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
