// Custom components
import { Section, Container } from '@/components/craft';
import Balancer from 'react-wrap-balancer';

export const PrivacyPolicy = () => {
  return (
    <Section id="privacy-policy">
      <Container className="mx-auto px-4 py-8">
        <h1 className="mb-4 text-3xl font-bold">Privacy Policy</h1>
        <Balancer>
          <p className="mb-4">
            Welcome to J88Moja Systems. We are committed to protecting your
            personal information and your right to privacy. If you have any
            questions or concerns about this privacy notice or our practices
            with regard to your personal information, please contact us at
            info@j88moja.tech.
          </p>

          <h2 className="mb-2 text-2xl font-bold">1. Information We Collect</h2>
          <p className="mb-4">
            We collect personal information that you voluntarily provide to us
            when you express an interest in obtaining information about us or
            our products and services, participate in activities on the
            Services, or otherwise contact us.
          </p>
          <p className="mb-4">
            In relation to the <strong>Tabber</strong> browser extension, we may
            collect the following information:
          </p>
          <ul className="mb-4 list-disc pl-6">
            <li>
              <strong>Browser tab information:</strong> This includes details
              like the title, URL, and favicon of your open browser tabs.
            </li>
            <li>
              <strong>Tab metadata:</strong> Information such as the date and
              time a tab was opened, and its status (active or inactive).
            </li>
            <li>
              <strong>Usage data:</strong> We may collect information on how you
              use the Tabber extension to improve its functionality and user
              experience.
            </li>
          </ul>
          <p className="mb-4">
            <strong>Please note:</strong> Tabber does not collect or store any
            personal or sensitive information from your browser beyond the
            information necessary to provide the tab management features.
          </p>

          <h2 className="mb-2 text-2xl font-bold">2. How We Use Your Information</h2>
          <p className="mb-4">
            We use personal information collected via our Services for a variety
            of business purposes described below. We process your personal
            information for these purposes based on our legitimate business
            interests, in order to enter into or perform a contract with you,
            with your consent, and/or for compliance with our legal obligations.
          </p>
          <p className="mb-4">
            In the context of the <strong>Tabber</strong> extension, we
            specifically use the collected information to:
          </p>
          <ul className="mb-4 list-disc pl-6">
            <li>
              <strong>Manage and display browser tabs:</strong> Helping you
              efficiently organize and manage your open tabs.
            </li>
            <li>
              <strong>Enhance user experience:</strong> Providing personalized
              tab management features based on your browsing behavior.
            </li>
            <li>
              <strong>Provide product improvements:</strong> Using usage data to
              identify areas of improvement and add new features to the
              extension.
            </li>
          </ul>

          <h2 className="mb-2 text-2xl font-bold">3. Sharing Your Personal Information</h2>
          <p className="mb-4">
            We may process or share your data that we hold based on the following
            legal bases: Consent, Legitimate Interests, Performance of a
            Contract, Legal Obligations, and Vital Interests.
          </p>
          <p className="mb-4">
            Regarding <strong>Tabber</strong>, we do not share your browser tab
            data with third parties unless:
          </p>
          <ul className="mb-4 list-disc pl-6">
            <li>You explicitly consent to such sharing.</li>
            <li>We are required by law or legal process to do so.</li>
          </ul>

          <h2 className="mb-2 text-2xl font-bold">4. Security of Your Personal Information</h2>
          <p className="mb-4">
            We have implemented appropriate technical and organizational
            security measures designed to protect the security of any personal
            information we process. However, despite our safeguards and efforts
            to secure your information, no electronic transmission over the
            Internet or information storage technology can be guaranteed to be
            100% secure. Therefore, we cannot guarantee that hackers,
            cybercriminals, or other unauthorized third parties will not be able
            to defeat our security measures and improperly collect, access,
            steal, or modify your information.
          </p>

          <h2 className="mb-2 text-2xl font-bold">5. Your Privacy Rights and Choices</h2>
          <p className="mb-4">
            You have rights under data protection laws in relation to your
            personal data, including the right to request access, correction,
            erasure, restriction, transfer, to object to processing, to data
            portability, and (where the lawful ground of processing is consent)
            to withdraw consent.
          </p>
          <p className="mb-4">
            For <strong>Tabber</strong> users, you have full control over the
            information it accesses. The data collected from your browser tabs
            is solely for enhancing your experience and is not stored or used
            for any purpose other than providing the extension's tab management
            features.
          </p>

          <h2 className="mb-2 text-2xl font-bold">6. Updates to this Policy</h2>
          <p className="mb-4">
            We may update this privacy notice from time to time. The updated
            version will be indicated by an updated "Revised" date, and the
            updated version will be effective as soon as it is accessible. If we
            make material changes to this privacy notice, we may notify you
            either by prominently posting a notice of such changes or by
            directly sending you a notification.
          </p>

          <h2 className="mb-2 text-2xl font-bold">7. Contact Us</h2>
          <p>
            If you have questions or comments about this notice, you may email
            us at info@j88moja.tech. Our location is:
          </p>
          <address className="mb-4">
            J88Moja Systems <br />
            Johannesburg <br />
            South Africa
          </address>
        </Balancer>
      </Container>
    </Section>
  );
};
