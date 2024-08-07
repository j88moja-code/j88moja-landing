'use client';

import Balancer from 'react-wrap-balancer';
import Image, { StaticImageData } from 'next/image';
import React from 'react';

// Component imports
import { Section, Container } from '@/components/craft';

// UI Components
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';

// Asset imports
import Equipment from '@/public/products/cmoos-shorts/equipment.png';
import MaintenanceManage from '@/public/products/cmoos-shorts/maintenance-management.png';
import PTW from '@/public/products/cmoos-shorts/permit-to-work.png';
import ProductionData from '@/public/products/cmoos-shorts/production-data.png';
import Reports from '@/public/products/cmoos-shorts/production-report.png';
import Logo from '@/public/products/logo-no-background.png';

type FeaturesText = {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
  alt: string;
};

const featuresTexts: FeaturesText[] = [
  {
    id: 1,
    title: 'Asset Care',
    description:
      'Manage equipment, maintain records, and track their performance. CMOOS provides a comprehensive view of asset data, enabling efficient and effective decision-making.',
    image: Equipment,
    alt: 'Equipment Cards',
  },
  {
    id: 2,
    title: 'Maintenance Management',
    description:
      'Enable dark mode easing computer screen brightness and Efficiently manage and track maintenance events. CMOOS provides a detailed view of maintenance events, enabling accurate and timely maintenance planning.',
    image: MaintenanceManage,
    alt: 'Events Calendar',
  },
  {
    id: 3,
    title: 'Permit to Work',
    description:
      'Manage and track permit to work applications. CMOOS provides a comprehensive view of permit to work management, ensuring compliance with regulatory requirements and promoting safety culture.',
    image: PTW,
    alt: 'Permit Cards',
  },
  {
    id: 4,
    title: 'Production Data',
    description:
      'Access production data and track production performance. CMOOS provides a comprehensive view of production data, enabling efficient and effective decision-making.',
    image: ProductionData,
    alt: 'Production Cards',
  },
  {
    id: 5,
    title: 'Production Reports',
    description:
      'Generate pdf production reports, which can be downloaded and easily shared. Access production data and track production performance. CMOOS provides a comprehensive view of production reports, enabling efficient and effective decision-making.',
    image: Reports,
    alt: 'Reports Cards',
  },
  {
    id: 6,
    title: 'And Much More...',
    description:
      'Packed with features, CMOOS is a powerful tool for centralising and streamlining data capture, analysis, and reporting. CMOOS provides a comprehensive view of operational data, enabling efficient and effective decision-making.',
    image: Logo,
    alt: 'CMOOS Logo',
  },
];

export default function Features() {
  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Section id='cmoos-features' className='mx-auto border-b dark:border-b-0'>
      <Container>
        <h2 className='text-3xl font-bold'>Features</h2>
        <Carousel setApi={setApi} className='mx-auto w-full max-w-2xl'>
          <CarouselContent>
            {featuresTexts.map((text) => (
              <CarouselItem
                key={text.id}
                className='flex h-screen flex-col items-center justify-center p-4'
              >
                <div className='max-w-3xl text-center'>
                  <h3 className='mb-6 text-3xl font-bold'>{text.title}</h3>
                  <Image
                    src={text.image}
                    alt={text.alt}
                    className='h-auto max-h-96 w-full rounded-lg object-cover'
                    placeholder='blur'
                    width={1200}
                    height={800}
                  />
                  <p className='mt-6 text-lg'>
                    <Balancer>{text.description}</Balancer>
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className='absolute left-4 top-1/2 -translate-y-1/2 transform cursor-pointer rounded-full bg-gray-800 p-2 text-white hover:bg-gray-700'>
            Prev
          </CarouselPrevious>
          <CarouselNext className='absolute right-4 top-1/2 -translate-y-1/2 transform cursor-pointer rounded-full bg-gray-800 p-2 text-white hover:bg-gray-700'>
            Next
          </CarouselNext>
        </Carousel>
      </Container>
    </Section>
  );
}
