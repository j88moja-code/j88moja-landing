// Custom components
import { Section, Container } from '@/components/craft';
import Balancer from 'react-wrap-balancer';

export const CookiePolicy = () => {
  return (
    <Section>
      <Container className='mx-auto px-4 py-8'>
        <h1 className='mb-4 text-3xl font-bold'>Cookie Policy</h1>
        <Balancer>
          <h1 className='mb-4 text-3xl font-bold'>Cookie Policy</h1>

          <p className='mb-4'>
            This Cookie Policy explains how J88Moja Systems (&quot;we&quot;,
            &quot;us&quot;, or &quot;our&quot;) uses cookies and similar
            technologies to recognize you when you visit our website at
            www.j88moja.tech. It explains what these technologies are and why we
            use them, as well as your rights to control our use of them.
          </p>

          <h2 className='mb-2 text-2xl font-bold'>1. What are cookies?</h2>
          <p className='mb-4'>
            Cookies are small data files that are placed on your computer or
            mobile device when you visit a website. Cookies are widely used by
            website owners to make their websites work, or to work more
            efficiently, as well as to provide reporting information.
          </p>
          <p className='mb-4'>
            Cookies set by the website owner (in this case, J88Moja Systems) are
            called &quot;first-party cookies.&quot; Cookies set by parties other
            than the website owner are called &quot;third-party cookies.&quot;
            Third-party cookies enable third-party features or functionality to
            be provided on or through the website (e.g., like advertising,
            interactive content, and analytics). The parties that set these
            third-party cookies can recognize your computer both when it visits
            the website in question and also when it visits certain other
            websites.
          </p>

          <h2 className='mb-2 text-2xl font-bold'>2. Why do we use cookies?</h2>
          <p className='mb-4'>
            We use first-party and third-party cookies for several reasons. Some
            cookies are required for technical reasons in order for our Website
            to operate, and we refer to these as &quot;essential&quot; or
            &quot;strictly necessary&quot; cookies. Some cookies also are
            &quot;performance cookies,&quot; which are used to assess how
            effective our marketing campaigns are for you. You have the ability
            to accept or decline these cookies, but please note that if you do
            not accept all of these cookies, you may not be able to use some
            parts of our Website correctly or at all.
          </p>

          <h2 className='mb-2 text-2xl font-bold'>
            3. What types of cookies do we use?
          </h2>
          <p className='mb-4'>
            Cookies can be &quot;persistent&quot; or &quot;session&quot;
            Cookies. Persistent Cookies remain on your personal computer or
            mobile device when you visit our Website for the duration of your
            visit. Session Cookies are automatically deleted from your personal
            computer or mobile device when you close your web browser. You can
            set your browser to block or alert you before accepting new cookies,
            but some features of our Website may not function properly without
            cookies.
          </p>

          <h2 className='mb-2 text-2xl font-bold'>4. Third-party cookies</h2>
          <p className='mb-4'>
            In some special cases, we may use cookies provided by trusted
            third-party companies including Calendly and Google Analytics. These
            companies are not governed by this Cookie Policy.
          </p>

          <h2 className='mb-2 text-2xl font-bold'>5. More Information</h2>
          <p className='mb-4'>
            Hopefully, this Cookie Policy has been helpful in understanding the
            cookies we use. If you have any further questions or comments,
            please email us at info@j88moja.tech.
          </p>
        </Balancer>
      </Container>
    </Section>
  );
};
