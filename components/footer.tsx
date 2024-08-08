// React and Next.js imports
import Image from 'next/image';
import Link from 'next/link';

// Third-party library imports
import Balancer from 'react-wrap-balancer';

// UI component imports
import { Button } from '@/components/ui/button';

// Icon imports
import { Linkedin } from 'lucide-react';

// Local component imports
import { Section, Container } from '@/components/craft';

// Custom components
import { ModeToggle } from './theme-toggle';

// Asset imports
import Logo from '@/public/j88moja-logo.png';

export default function Footer() {
  return (
    <footer className='light:bg-gray-800 bg-gray-900 py-8 text-white'>
      <Section>
        <Container className='grid gap-8'>
          {/* Logo and Description */}
          <div className='flex flex-col items-center gap-4 text-center md:flex-row md:items-start md:text-left'>
            <Link href='/'>
              <h3 className='sr-only'>J88Moja Systems</h3>
              <Image
                src={Logo}
                alt='J88Moja Systems Logo'
                width={120}
                height={27}
                className='transition-opacity duration-150 hover:opacity-75'
              />
            </Link>
            <p className='max-w-md'>
              <Balancer>
                J88Moja (PTY) Ltd t/a J88Moja Systems is dedicated to empowering
                businesses with innovative technology solutions designed to
                drive growth and efficiency.
              </Balancer>
            </p>
          </div>

          {/* Links */}
          <div className='flex flex-col items-center gap-4 text-center md:flex-row md:gap-6 md:text-left'>
            <Link href='/privacy-policy' className='hover:underline'>
              Privacy Policy
            </Link>
            <Link href='/terms-of-service' className='hover:underline'>
              Terms of Service
            </Link>
            <Link href='/cookie-policy' className='hover:underline'>
              Cookie Policy
            </Link>
          </div>
        </Container>

        {/* Social Media Links and Copyright */}
        <Container className='mt-8 flex flex-col items-center justify-between gap-4 border-t border-slate-100/20 pt-6 md:flex-row'>
          <div className='flex gap-2'>
            {/* Uncomment social media buttons if needed */}
            {/*
    <Button variant="outline" size="icon" asChild>
      <Link
        href="https://github.com/J88MojaSystems"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github className="h-5 w-5 text-gray-700 transition-colors duration-150 hover:text-black dark:text-gray-300 dark:hover:text-white" />
      </Link>
    </Button>
    <Button variant="outline" size="icon" asChild>
      <Link
        href="https://twitter.com/J88MojaSystems"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Twitter className="h-5 w-5 text-gray-700 transition-colors duration-150 hover:text-black dark:text-gray-300 dark:hover:text-white" />
      </Link>
    </Button>
    <Button variant="outline" size="icon" asChild>
      <Link
        href="https://facebook.com/J88MojaSystems"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Facebook className="h-5 w-5 text-gray-700 transition-colors duration-150 hover:text-black dark:text-gray-300 dark:hover:text-white" />
      </Link>
    </Button>
    */}
            <Button variant='outline' size='icon' asChild>
              <Link
                href='https://linkedin.com/company/J88MojaSystems'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Linkedin className='h-5 w-5 text-gray-700 transition-colors duration-150 hover:text-black dark:text-gray-300 dark:hover:text-white' />
              </Link>
            </Button>
            <ModeToggle />
          </div>

          <p className='text-center text-sm text-gray-400 md:text-left'>
            © {new Date().getFullYear()}{' '}
            <Link href='/' className='hover:underline'>
              J88Moja Systems
            </Link>
            . All rights reserved.
          </p>
        </Container>
      </Section>
    </footer>
  );
}
