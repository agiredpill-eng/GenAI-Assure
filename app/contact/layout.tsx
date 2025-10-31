import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact ELSA AI - Get in Touch | ELSA AI',
  description: 'Contact ELSA AI to discuss your AI governance and compliance needs. Get expert guidance on EU AI Act, GDPR, and responsible AI implementation.',
  keywords: 'contact ELSA AI, AI governance consultation, GenAI Assure support',
  alternates: {
    canonical: 'https://elsaai.co.uk/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

