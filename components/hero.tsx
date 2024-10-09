'use client';

import Link from 'next/link';
import Balancer from 'react-wrap-balancer';
import { useEffect } from 'react';
import AOS from 'aos';

// Custom Components
import { ModeToggle } from './theme-toggle';
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
    <Section id="hero" className="pt-5 relative">
      <Particles className="absolute inset-0 -z-10" />
      <Container>
        <ModeToggle />
        <div className="px-8 text-center">
          <h1
            className="bg-gradient-to-r from-black to-blue-500 bg-clip-text pb-4 text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl dark:from-white dark:to-indigo-400"
            data-aos="fade-down"
          >
            <Balancer>
              <span className="block text-center font-bold dark:text-white">
                J88Moja Systems
              </span>
              <p className="mb-4 text-center mt-4 text-base font-medium text-zinc-300/40 sm:text-lg md:text-xl lg:text-2xl dark:text-zinc-400">
                Empowering Continuous Improvement Through Technology
              </p>
            </Balancer>
          </h1>

          <p
            className="mt-4 text-gray-600 opacity-70 sm:text-base md:text-lg lg:text-xl xl:text-2xl dark:text-gray-300 dark:opacity-90"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            <Balancer className="font-semibold">
              Streamline processes and improve efficiency with our software systems.
            </Balancer>
          </p>

          <h3
            className="mb-6 leading-relaxed text-muted-foreground dark:text-zinc-400"
            data-aos="fade-down"
            data-aos-delay="400"
          >
            <Balancer className="font-semibold">
              <span className='text-[#042ad3ab] dark:text-indigo-400'>J88Moja Systems</span> is dedicated to driving continuous improvement by developing innovative systems that streamline processes and empower data-driven decision-making. Our forward-thinking approach ensures that businesses operations can harness the full potential of their data to stay ahead in an ever-evolving landscape.
            </Balancer>
          </h3>

          <div className="mb-8" data-aos="fade-up" data-aos-delay="500">
            <div className="inline-flex justify-center">
              <Link href="#calendly">
                <Button
                  asChild
                  variant="default"
                  className="group relative inline-flex w-auto px-6 py-3 items-center justify-center rounded-full border border-slate-100/40 text-sm font-medium shadow-lg shadow-primary-500/50 transition duration-300 ease-in-out hover:shadow-xl dark:border-slate-700 dark:shadow-primary-500/40 dark:hover:shadow-primary-500/50"
                >
                  <span>
                    Book Consultation
                    <span className="ml-1 tracking-normal text-primary-500 opacity-0 transition-opacity duration-150 ease-in-out group-hover:opacity-100 group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </span>
                </Button>
              </Link>
            </div>
          </div>

          <div
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 m-14"
            data-aos="fade-up"
            data-aos-delay="600"
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
              <Link href={href} key={index}>
                <Button
                  asChild
                  className="group flex w-full items-center justify-center whitespace-nowrap rounded bg-gray-500 px-4 py-2 font-medium text-zinc-900 transition-all duration-150 ease-in-out hover:bg-gradient-to-r from-orange-500 via-orange-200 to-green-500 hover:text-white dark:bg-gray-700 dark:text-white dark:hover:bg-gradient-to-r from-orange-500 via-orange-200 to-green-500"
                  variant="ghost"
                >
                  <span className="relative inline-flex items-center">
                    {label}
                    <span className="text-white ml-1 tracking-normal opacity-0 transition-opacity duration-150 ease-in-out group-hover:opacity-100 group-hover:translate-x-0.5">
                      -&gt;
                    </span>
                  </span>
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
