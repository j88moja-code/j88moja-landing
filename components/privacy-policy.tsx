// Custom components
import { Section, Container } from '@/components/craft';
import Balancer from 'react-wrap-balancer';

export const PrivacyPolicy = () => {
  return (
    <Section className='border-b dark:border-b-0' id='tos'>
      <Container className='mx-auto px-4 py-8'>
        <h1 className='mb-4 text-3xl font-bold'>Privacy Policy</h1>
        <Balancer>
          <p className='mb-4'>
            Welcome to J88Moja Systems. We are committed to protecting your
            personal information and your right to privacy. If you have any
            questions or concerns about this privacy notice or our practices
            with regard to your personal information, please contact us at
            support@yourcompany.com.
          </p>

          <h2 className='mb-2 text-2xl font-bold'>1. Information We Collect</h2>
          <p className='mb-4'>
            We collect personal information that you voluntarily provide to us
            when you express an interest in obtaining information about us or
            our products and services, when you participate in activities on the
            Services, or otherwise when you contact us.
          </p>

          <h2 className='mb-2 text-2xl font-bold'>
            2. How We Use Your Information
          </h2>
          <p className='mb-4'>
            We use personal information collected via our Services for a variety
            of business purposes described below. We process your personal
            information for these purposes in reliance on our legitimate
            business interests, in order to enter into or perform a contract
            with you, with your consent, and/or for compliance with our legal
            obligations.
          </p>

          <h2 className='mb-2 text-2xl font-bold'>
            3. Sharing Your Personal Information
          </h2>
          <p className='mb-4'>
            We may process or share your data that we hold based on the
            following legal basis: Consent, Legitimate Interests, Performance of
            a Contract, Legal Obligations, and Vital Interests.
          </p>

          <h2 className='mb-2 text-2xl font-bold'>
            4. Security of Your Personal Information
          </h2>
          <p className='mb-4'>
            We have implemented appropriate technical and organizational
            security measures designed to protect the security of any personal
            information we process. However, despite our safeguards and efforts
            to secure your information, no electronic transmission over the
            Internet or information storage technology can be guaranteed to be
            100% secure, so we cannot promise or guarantee that hackers,
            cybercriminals, or other unauthorized third parties will not be able
            to defeat our security and improperly collect, access, steal, or
            modify your information.
          </p>

          <h2 className='mb-2 text-2xl font-bold'>
            5. Your Privacy Rights and Choices
          </h2>
          <p className='mb-4'>
            You have rights under data protection laws in relation to your
            personal data, including the right to request access, correction,
            erasure, restriction, transfer, to object to processing, to
            portability of data, and (where the lawful ground of processing is
            consent) to withdraw consent.
          </p>

          <h2 className='mb-2 text-2xl font-bold'>6. Updates to this Policy</h2>
          <p className='mb-4'>
            We may update this privacy notice from time to time. The updated
            version will be indicated by an updated &quot;Revised&quot; date and
            the updated version will be effective as soon as it is accessible.
            If we make material changes to this privacy notice, we may notify
            you either by prominently posting a notice of such changes or by
            directly sending you a notification.
          </p>

          <h2 className='mb-2 text-2xl font-bold'>7. Contact Us</h2>
          <p>
            If you have questions or comments about this notice, you may email
            us at info@j88moja.tech, our location is:
          </p>
          <address className='mb-4'>
            J88Moja Systems <br />
            Johannesburg <br />
            South Africa
          </address>
        </Balancer>
      </Container>
    </Section>
  );
};
