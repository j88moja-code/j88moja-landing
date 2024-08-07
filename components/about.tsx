'use client';

import Balancer from 'react-wrap-balancer';
import Image, { StaticImageData } from 'next/image';
import { useEffect, useState } from 'react';

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
import Placeholder from '@/public/hero-j88moja.jpg';
import Placeholder2 from '@/public/hero-2.jpg';
import { Separator } from './ui/separator';

type AboutText = {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
  alt: string;
};

const aboutTexts: AboutText[] = [
  {
    id: 1,
    title: 'Improved Processes',
    description:
      'Our software systems optimize your existing processes and systems, making operations management seamless. Say goodbye to manual tasks and embrace efficiency.',
    image: Placeholder,
    alt: 'A depiction of improved processes',
  },
  {
    id: 2,
    title: 'Streamlined Operations',
    description:
      'With our user-friendly interface, you can easily manage and monitor all aspects of your business in one place. Say hello to streamlined operations and increased productivity.',
    image: Placeholder2,
    alt: 'A depiction of streamlined operations',
  },
];

export default function About() {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [, setCurrent] = useState(0);
  const [, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Section id='benefits'>
      <Container className='flex flex-col items-center gap-6'>
        <div className='flex items-center justify-center'>
          <Separator className='mt-3 h-0.5 w-80 bg-slate-100/20' />
        </div>

        <Carousel setApi={setApi} className='mx-auto w-full max-w-2xl'>
          <CarouselContent>
            {aboutTexts.map((text) => (
              <CarouselItem key={text.id}>
                <div className='flex h-full w-full items-center justify-center'>
                  <div className='w-full max-w-lg text-center'>
                    <h2 className='pb-4 text-4xl font-bold tracking-tight lg:text-5xl'>
                      {text.title}
                    </h2>
                    <Image
                      src={text.image}
                      alt={text.alt}
                      className='rounded-lg'
                      placeholder='blur'
                    />
                    <p className='mt-4 text-lg'>
                      <Balancer>{text.description}</Balancer>
                    </p>
                  </div>
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
