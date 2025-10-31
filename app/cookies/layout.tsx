import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy - ELSA AI',
  description: 'Learn about how ELSA AI uses cookies and similar technologies on our website.',
  keywords: 'cookie policy, privacy policy, cookies',
  alternates: {
    canonical: 'https://elsaai.co.uk/cookies',
  },
};

export default function CookiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

