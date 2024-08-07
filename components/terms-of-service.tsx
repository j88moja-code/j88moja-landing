// Custom components
import { Section, Container } from '@/components/craft';
import Balancer from 'react-wrap-balancer';

export const TermsOfService = () => {
  return (
    <Section className='border-b dark:border-b-0' id='tos'>
      <Container className='mx-auto px-4 py-8'>
        <h1 className='mb-4 text-3xl font-bold'>Terms of Service</h1>
        <Balancer>
          <p className='mb-4'>
            Welcome to J88Moja Systems. These terms and conditions outline the
            rules and regulations for the use of our Website.
          </p>

          <h2 className='mb-2 text-2xl font-bold'>1. Acceptance of Terms</h2>
          <p className='mb-4'>
            By accessing this website we assume you accept these terms and
            conditions. Do not continue to use J88Moja Systems if you do not
            agree to take all of the terms and conditions stated on this page.
          </p>

          <h2 className='mb-2 text-2xl font-bold'>
            2. Intellectual Property Rights
          </h2>
          <p className='mb-4'>
            Unless otherwise stated, J88Moja Systems and/or its licensors own
            the intellectual property rights for all material on J88Moja
            Systems. All intellectual property rights are reserved. You may
            access this from J88Moja Systems for your own personal use subjected
            to restrictions set in these terms and conditions.
          </p>

          <h2 className='mb-2 text-2xl font-bold'>3. User Responsibilities</h2>
          <p className='mb-4'>
            As a user of our site, you agree not to engage in any activities
            that are unlawful or harmful to us or other users. This includes but
            is not limited to actions like unauthorized data collection,
            interference with site functionality, or using the site for
            fraudulent purposes.
          </p>

          <h2 className='mb-2 text-2xl font-bold'>
            4. Limitations of Liability
          </h2>
          <p className='mb-4'>
            In no event shall J88Moja Systems, nor any of its officers,
            directors, and employees, be liable for anything arising out of or
            in any way connected with your use of this Website whether such
            liability is under contract. J88Moja Systems, including its
            officers, directors, and employees shall not be held liable for any
            indirect, consequential, or special liability arising out of or in
            any way related to your use of this Website.
          </p>

          <h2 className='mb-2 text-2xl font-bold'>5. Termination of Use</h2>
          <p className='mb-4'>
            We may terminate or suspend your access to the Services immediately,
            without prior notice or liability, for any reason whatsoever,
            including without limitation if you breach these Terms.
          </p>

          <h2 className='mb-2 text-2xl font-bold'>6. Governing Law</h2>
          <p className='mb-4'>
            These Terms will be governed by and interpreted in accordance with
            the laws of the South Africa, and you submit to the non-exclusive.
          </p>

          <h2 className='mb-2 text-2xl font-bold'>7. Changes to the Terms</h2>
          <p className='mb-4'>
            We reserve the right, at our sole discretion, to modify or replace
            these Terms at any time. If a revision is material, we will try to
            provide at least 30 days&apos; notice prior to any new terms taking
            effect. What constitutes a material change will be determined at our
            sole discretion.
          </p>

          <h2 className='mb-2 text-2xl font-bold'>8. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at
            info@j88moja.tech.
          </p>
        </Balancer>
      </Container>
    </Section>
  );
};
