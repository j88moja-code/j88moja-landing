'use client'

// React and Next.js imports
import Link from 'next/link';
import React, { useEffect } from 'react';

// Third-party library imports
import Balancer from 'react-wrap-balancer';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

// UI component imports
import { Section, Container } from '@/components/craft';

// Icon imports
import {
  ArrowRight,
  Database,
  Settings,
  ChartBar,
  UserRoundCheck,
} from 'lucide-react';
import { Separator } from './ui/separator';

type NewType = React.JSX.Element;
type FeatureText = {
  icon: NewType;
  title: string;
  description: string;
  href?: string;
  cta?: string;
};

const featureText: FeatureText[] = [
  {
    icon: <Database className='h-8 w-8 text-primary-500 dark:text-primary-400' />,
    title: 'Data Integration',
    href: '/',
    description:
      'Seamlessly integrate all your data sources to create a unified view, enabling efficient analysis and insights.',
  },
  {
    icon: <Settings className='h-8 w-8 text-primary-500 dark:text-primary-400' />,
    title: 'Process Automation',
    href: '/',
    description:
      'Automate repetitive tasks and processes to increase efficiency and reduce human error across your operations.',
  },
  {
    icon: <ChartBar className='h-8 w-8 text-primary-500 dark:text-primary-400' />,
    title: 'Advanced Analytics',
    href: '/',
    description:
      'Leverage powerful analytics tools to gain deep insights into your operations and make informed decisions.',
  },
  {
    icon: <UserRoundCheck className='h-8 w-8 text-primary-500 dark:text-primary-400' />,
    title: 'User Friendly',
    href: '/',
    description:
      'Elevate your operations with intuitive user interfaces and seamless data entry capabilities.',
  },
];

const Feature = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <Section id='features'>
      <div className='flex items-center justify-center'>
        <Separator className='dark:h-0.5 w-80 bg-slate-100/20 dark:bg-slate-700' />
      </div>
      <Container className='not-prose'>
        <div className='flex flex-col gap-6'>
          <h4
            className='text-2xl font-light opacity-70 dark:text-gray-200 dark:opacity-90'
            data-aos="fade-up"
          >
            <Balancer className="ml-4 font-bold text-black dark:text-white">
              Harnessing the power of data and automation to drive innovation and success.
            </Balancer>
          </h4>

          <div
            className='mt-6 grid gap-8 dark:text-white dark:opacity-80 md:mt-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
            data-aos="fade-up"
          >
            {featureText.map(
              ({ icon, title, description, href, cta }, index) => (
                <Link
                  href={`${href}`}
                  className='relative flex flex-col justify-between gap-6 rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 shadow-lg transition-all hover:-translate-y-2 hover:shadow-xl dark:border-slate-700 dark:bg-slate-800 dark:from-slate-900 dark:to-slate-800'
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={`${index * 100}`}
                >
                  <div className='grid gap-4'>
                    <div className='flex justify-center items-center p-4 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full shadow-md'>
                      {icon}
                    </div>
                    <h4 className='text-lg font-semibold text-center text-primary-700 dark:text-white md:text-xl'>
                      {title}
                    </h4>
                    <p className='text-base text-center text-gray-600 dark:text-white sm:text-sm md:text-base'>
                      {description}
                    </p>
                  </div>
                  {cta && (
                    <div className='flex items-center justify-center text-sm font-semibold text-primary-600 dark:text-primary-300'>
                      <p>{cta}</p>
                      <ArrowRight className='ml-2 h-4 w-4' />
                    </div>
                  )}
                  <div className='absolute inset-0 pointer-events-none opacity-20 bg-gradient-radial from-primary-400 via-transparent to-transparent'></div>
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
