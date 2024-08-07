'use client';

import Balancer from 'react-wrap-balancer';

// Component imports
import { Section, Container } from '@/components/craft';

export default function About() {
  return (
    <Section className='mx-auto border-b dark:border-b-0' id='about'>
      <Container>
        <h2 className='text-3xl font-bold'>CMOOS&#8482;</h2>
        <div className='flex flex-col gap-6 space-y-4'>
          <p className='mt-4 text-lg opacity-70'>
            <Balancer>
              CMOOS is your ultimate destination for a diverse range of
              enterprise applications. Crafted with cutting-edge technology and
              driven by an unwavering passion for continuous improvement and
              innovation, CMOOS offers an all-in-one solution tailored to your
              business operations. Whether you need a comprehensive suite for
              your entire business or just specific features to enhance your
              operations, CMOOS has you covered.
            </Balancer>
          </p>
          <p className='mt-4 text-lg opacity-70'>
            <Balancer>
              Discover the power of CMOOS and elevate your business to the next
              level. Our adaptable platform is designed to scale with your
              needs, ensuring you always stay ahead in today’s dynamic market.
              Discover the power of CMOOS and elevate your business to the next
              level. Embrace the future of business solutions with CMOOS, where
              your success is our mission.
            </Balancer>
          </p>
        </div>
      </Container>
    </Section>
  );
}
