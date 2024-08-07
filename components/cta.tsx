import Link from 'next/link';

// Third-party library imports
import Balancer from 'react-wrap-balancer';

// UI component imports
import { Button } from '@/components/ui/button';

// Custom components
import { Section, Container } from '@/components/craft';
import { Separator } from './ui/separator';

const CTA = () => {
  return (
    <Section className='px-4'>
      <Container className='flex flex-col items-center gap-6 rounded-lg border bg-accent/50 p-6 text-center md:rounded-xl md:p-12'>
        <h2 className='pb-4 text-4xl font-bold tracking-tight lg:text-5xl'>
          Ready to take your business operations to the next level?
        </h2>
        <div className='flex items-center justify-center'>
          <Separator className='mt-3 h-0.5 w-80 bg-slate-100/20' />
        </div>
        <h3 className='!mb-0 text-muted-foreground'>
          <Balancer>
            Let&apos;s build something amazing together. Get in touch with us or
            book a free consultation to discuss your needs.
          </Balancer>
        </h3>
        <div className='not-prose mx-auto flex items-center gap-2'>
          <Button className='w-fit' asChild>
            <Link href='#contact'>Contact Us</Link>
          </Button>
          <Button className='w-fit' variant='link' asChild>
            <Link href='#calendly'>Book a Consultation {'->'}</Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
};

export default CTA;
