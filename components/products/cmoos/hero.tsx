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
import CMOOSLogo from '@/public/products/logo-color.png';
import Logo from '@/public/products/logo-no-background.png';
import CMOOSMenu from '@/public/products/cmoos-shorts/main-menu.png';
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
    <Section className='relative mx-auto h-[720px]' id='home'>
      <Container className='not-prose'>
        {/* Name and Nav */}
        <div className='flex w-full justify-between' data-aos='fade-up'>
          <div className=''>
            <h1 className='mb-4 text-3xl font-normal md:text-6xl'>
              <Link className='transition-all hover:opacity-70' href='#'>
                <Image
                  className='inline h-24 w-24 object-contain'
                  src={Logo}
                  alt='CMOOS Logo'
                />
              </Link>
            </h1>
            <h2 className='w-48 text-lg font-light leading-6'>
              <Balancer>
                Centralised Management of Operations System&#8482;
              </Balancer>
            </h2>
          </div>
          <nav className='flex items-center justify-between py-4'>
            {/* Full Navigation - Visible on md and larger screens */}
            <ul className='hidden gap-8 text-lg md:flex'>
              <li>
                <Link href='/' className='hover:text-accent'>
                  {'<-'} Home
                </Link>
              </li>
              <li>
                <Link href='#about' className='hover:text-accent'>
                  About
                </Link>
              </li>
              <li>
                <Link href='#cmoos-features' className='hover:text-accent'>
                  Features
                </Link>
              </li>

              <li>
                <Link href='#pricing' className='hover:text-accent'>
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
                <span className='sr-only'>Open menu</span>
                <Menu />
              </Button>
            </div>
          </nav>

          {/* Mobile Dropdown Menu */}
          {isMobileMenuOpen && (
            <ul
              id='mobile-menu'
              className='mt-2 w-full rounded-md bg-background py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none md:hidden'
              role='menu'
              aria-orientation='vertical'
              aria-labelledby='options-menu'
            >
              <li role='none'>
                <Link
                  href='/'
                  className='block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-white'
                  role='menuitem'
                  tabIndex={0}
                >
                  {'<-'} Home
                </Link>
              </li>
              <li role='none'>
                <Link
                  href='#about'
                  className='block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-white'
                  role='menuitem'
                  tabIndex={0}
                >
                  About
                </Link>
              </li>
              <li role='none'>
                <Link
                  href='#cmoos-features'
                  className='block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-white'
                  role='menuitem'
                  tabIndex={0}
                >
                  Features
                </Link>
              </li>

              <li role='none'>
                <Link
                  href='#pricing'
                  className='block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-white'
                  role='menuitem'
                  tabIndex={0}
                >
                  Pricing
                </Link>
              </li>
            </ul>
          )}
        </div>

        {/* Images */}
        <div
          className='fit absolute bottom-0 right-0 flex items-end justify-end gap-2'
          data-aos='fade-up'
          data-aos-delay='300'
        >
          {/* Image 1 */}
          <div className='hidden h-72 w-96 md:block'>
            <Image
              className='dark:brightness-53 h-full w-full rounded-tl-3xl object-cover'
              src={CMOOSLogo}
              alt='CMOOS Logo'
            ></Image>
          </div>
          {/* Image 2 */}
          <div className='h-[420px] w-fit md:w-96'>
            <Image
              className='dark:brightness-53 h-full w-full rounded-tl-3xl object-cover'
              src={CMOOSMenu}
              alt='CMOOS Menu'
            ></Image>
          </div>
        </div>

        {/* Circle CTA */}
        <div
          className='absolute bottom-2 right-2 flex h-12 w-12 items-center justify-center rounded-full border bg-secondary p-12 text-center font-medium leading-4 transition-all hover:opacity-80'
          data-aos='fade-up'
          data-aos-delay='600'
        >
          <Link className='-mt-1' href='#cmoos-cat'>
            Get Started
          </Link>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
