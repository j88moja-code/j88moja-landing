'use client';

import Image from 'next/image';
import Balancer from 'react-wrap-balancer';

// UI Components
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Section, Container } from '@/components/craft';

// Assets
import CMOOSLogo from '@/public/products/logo-no-background.png';
import Link from 'next/link';
import { HeartHandshake } from 'lucide-react';
import { Separator } from './ui/separator';

type Product = {
  id: number;
  name: string;
  description: string;
  image: any;
  buttonLink: string;
  buttonText: string;
};

const products: Product[] = [
  {
    id: 1,
    name: 'CMOOS',
    description:
      'A one-stop system designed to centralise and streamline data capturing, analysis, and reporting for operations. CMOOS provides a comprehensive view of operational data, enabling efficient and effective decision-making.',
    image: CMOOSLogo,
    buttonLink: '/products/cmoos',
    buttonText: 'Learn More',
  },
];

export default function Products() {
  return (
    <Section id='products'>
      <Container className='px-4 md:px-8'>
        {/* Heading */}
        <h2 className='text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl lg:text-5xl'>
          <Balancer>Our Product</Balancer>
        </h2>

        {/* Subheading */}
        <h4 className='mt-2 text-center text-xl font-light text-gray-600 opacity-80 dark:text-gray-300 md:text-2xl'>
          <Balancer>
            Explore our product that can be tailored to meet your unique needs.
          </Balancer>
        </h4>

        {/* Separator */}
        <div className='mt-6 flex justify-center'>
          <Separator className='h-0.5 w-3/4 max-w-4xl bg-slate-100 dark:bg-slate-700' />
        </div>

        {/* Products List */}
        <div className='mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {products.map((product, index) => (
            <Card
              key={index}
              className='rounded-lg bg-white shadow-lg dark:bg-gray-800'
            >
              <CardHeader>
                <CardTitle className='flex items-center gap-2 text-xl font-semibold text-gray-900 dark:text-white md:text-2xl'>
                  <HeartHandshake
                    size={24}
                    className='text-accent-foreground'
                  />
                  {product.name}&#8482;
                </CardTitle>
                <CardDescription className='mt-2 text-gray-700 dark:text-gray-400'>
                  <Balancer>{product.description}</Balancer>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className='relative h-48 w-full'>
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className='rounded-lg object-cover'
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className='w-full' variant='default'>
                  <Link href={product.buttonLink}>{product.buttonText}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
