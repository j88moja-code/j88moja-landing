import React from 'react';
import type { Metadata } from 'next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';
import 'aos/dist/aos.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import { cn } from '@/lib/utils';
import Footer from '@/components/footer';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: {
    default: 'J88Moja Systems',
    template: '%s - J88Moja Systems',
  },
  description:
    'Empowering Continuous Improvement through Technology with Innovative Solutions.',
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head />
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <SpeedInsights />
          <Toaster />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
