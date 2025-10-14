import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CookieConsentProvider } from '@/lib/cookie-consent';
import CookieConsentBanner from '@/components/CookieConsentBanner';
import CookiePreferencesModal from '@/components/CookiePreferencesModal';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ELSA AI - Ethical • Legal • Societal • Accountable AI Operations',
  description: 'AI governance platform for ethical, legal, societal, and accountable AI operations',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CookieConsentProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow pt-16">
              {children}
            </main>
            <Footer />
            <CookieConsentBanner />
            <CookiePreferencesModal />
          </div>
        </CookieConsentProvider>
      </body>
    </html>
  );
}
