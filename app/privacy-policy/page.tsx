import { Main } from '@/components/craft';
import { Metadata } from 'next';
import { PrivacyPolicy } from '@/components/privacy-policy';

export const metadata: Metadata = {
  title: 'Privacy Policy',
};

export default function Page() {
  return (
    <Main>
      <PrivacyPolicy />
    </Main>
  );
}
