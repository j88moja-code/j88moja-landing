'use client';
// React and Next.js imports
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';

// Local component imports
import { Section, Container } from '@/components/craft';
import { Button } from '@/components/ui/button';

// Asset imports
import Logo from '@/public/products/logo-no-background.png';
import Balancer from 'react-wrap-balancer';
import { Menu } from 'lucide-react';

const Hero = () => {
  useEffect(() => {
    AOS.init({
      disable: 'phone',
      duration: 800,
      easing: 'ease-out-cubic',
    });
  });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <Section className='relative m-auto flex flex-col items-center' id='home'>
      <Container>
        {/* Name and Navigation */}
        <div className='flex justify-between items-center'>
          <div className='flex items-center' data-aos='fade-up'>
            <Link href='#'>
              <Image
                className='h-16 w-16 md:h-20 md:w-20 lg:h-36 lg:w-36 object-contain'
                src={Logo}
                alt='CMOOS Logo'
              />
            </Link>
          </div>
          <nav className='flex items-center'>
            {/* Full Navigation - Visible on medium and larger screens */}
            <ul className='hidden md:flex gap-6 lg:gap-8 text-sm lg:text-lg font-medium'>
              <li>
                <Link href='/' className='hover:text-accent transition-colors'>
                  Home
                </Link>
              </li>
              <li>
                <Link href='#about' className='hover:text-accent transition-colors'>
                  About
                </Link>
              </li>
              <li>
                <Link href='#cmoos-features' className='hover:text-accent transition-colors'>
                  Features
                </Link>
              </li>
              <li>
                <Link href='#pricing' className='hover:text-accent transition-colors'>
                  Pricing
                </Link>
              </li>
            </ul>

            {/* Mobile Menu Icon - Visible on smaller screens */}
            <div className='flex md:hidden'>
              <Button
                type='button'
                className='inline-flex items-center justify-center rounded-md bg-accent p-2 text-accent-foreground transition-colors hover:bg-accent/80 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2'
                aria-expanded={isMobileMenuOpen}
                aria-haspopup='true'
                onClick={toggleMobileMenu}
              >
                <Menu className='w-6 h-6' />
              </Button>
            </div>
          </nav>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <ul
            id='mobile-menu'
            className='mt-2 w-full rounded-md bg-background py-2 shadow-lg ring-1 ring-black ring-opacity-5 md:hidden'
            role='menu'
            aria-orientation='vertical'
            aria-labelledby='options-menu'
          >
            <li role='none'>
              <Link href='/' className='block px-4 py-2 text-sm text-foreground hover:text-accent hover:bg-slate-400 hover:rounded'>
                Home
              </Link>
            </li>
            <li role='none'>
              <Link href='#about' className='block px-4 py-2 text-sm text-foreground hover:text-accent hover:bg-slate-400 hover:rounded'>
                About
              </Link>
            </li>
            <li role='none'>
              <Link href='#cmoos-features' className='block px-4 py-2 text-sm text-foreground hover:text-accent hover:bg-slate-400 hover:rounded'>
                Features
              </Link>
            </li>
            <li role='none'>
              <Link href='#pricing' className='block px-4 py-2 text-sm text-foreground hover:text-accent hover:bg-slate-400 hover:rounded'>
                Pricing
              </Link>
            </li>
          </ul>
        )}

        <div className='flex flex-col items-center text-center mt-8'>
          <h2 className="bg-gradient-to-r bg-black bg-clip-text pb-4 text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-transparent dark:from-white dark:to-indigo-400">
            <Balancer className='block text-center font-bold dark:text-white'>Centralised Management of Operations System&#8482;</Balancer>
          </h2>
        </div>

        {/* Circle CTA Button */}
        <div
          className='absolute bottom-2 right-4 h-20 w-20 md:h-24 md:w-24 flex items-center justify-center rounded-full bg-accent text-black dark:bg-white dark:text-black p-6 hover:bg-slate-500 hover:dark:bg-white/80 transition-all'
          data-aos='fade-up'
          data-aos-delay='600'
        >
          <Link href='#cmoos-cat' className='text-sm font-bold'>
            Get Started
          </Link>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
