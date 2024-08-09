import { Main } from '@/components/craft';
import { Metadata } from 'next';
import { CookiePolicy } from '@/components/cookie-policy';

export const metadata: Metadata = {
  title: 'Cookie Policy',
};

export default function Page() {
  return (
    <Main>
      <CookiePolicy />
    </Main>
  );
}
