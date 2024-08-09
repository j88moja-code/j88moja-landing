import { Main } from '@/components/craft';
import { Metadata } from 'next';
import { PrivacyPolicy } from '@/components/privacy-policy';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  robots: {
    index: false,
    follow: true,
  },
};

export default function Page() {
  return (
    <Main>
      <PrivacyPolicy />
    </Main>
  );
}
