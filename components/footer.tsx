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
import { Separator } from './ui/separator';

export default function Footer() {
  return (
    <footer>
      <Section>
        <Container className='grid gap-6'>
          <div className='flex items-center justify-center'>
            <Separator className='mt-3 h-0.5 w-80 bg-slate-100/20' />
          </div>
          <div className='not-prose flex gap-6'>
            <Link href='/'>
              <h3 className='sr-only'>J88Moja Systems</h3>
              <Image
                src={Logo}
                alt='J88Moja Systems Logo'
                width={120}
                height={27.27}
                className='transition-all hover:opacity-75'
              />
            </Link>
            <p>
              <Balancer>
                J88Moja (PTY) Ltd t/a J88Moja Systems is dedicated to empowering
                businesses with innovative technology solutions designed to
                drive growth and efficiency.
              </Balancer>
            </p>
          </div>
          <div className='mb-4 flex flex-col gap-4 md:mb-0 md:flex-row'>
            <Link href='/privacy-policy'>Privacy Policy</Link>
            <Link href='/terms-of-service'>Terms of Service</Link>
            <Link href='/cookie-policy'>Cookie Policy</Link>
          </div>
        </Container>
        <Container className='not-prose flex flex-col justify-between gap-6 border-t pt-6 md:flex-row md:items-center md:gap-2'>
          <div className='flex gap-2'>
            {/* <Button variant="outline" size="icon" asChild>
              <Link
                href="https://github.com/J88MojaSystems"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github />
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link
                href="https://twitter.com/J88MojaSystems"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter />
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link
                href="https://facebook.com/J88MojaSystems"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook />
              </Link>
            </Button> */}
            <Button variant='outline' size='icon' asChild>
              <Link
                href='https://linkedin.com/company/J88MojaSystems'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Linkedin />
              </Link>
            </Button>
            <ModeToggle />
          </div>
          <p className='text-center text-muted-foreground md:text-left'>
            © {new Date().getFullYear()} <Link href='/'>J88Moja Systems</Link>.
            All rights reserved.
          </p>
        </Container>
      </Section>
    </footer>
  );
}
