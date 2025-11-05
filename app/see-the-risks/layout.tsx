import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Risks & Compliance - See the Risks | ELSA AI',
  description: 'Explore critical AI risks including shadow AI, data leakage, compliance gaps, and GDPR violations. Understand how GenAI Assure™ mitigates these risks.',
  keywords: 'AI risks, shadow AI risks, AI compliance risks, GDPR AI violations, AI data leakage, AI security risks',
  alternates: {
    canonical: 'https://elsaai.co.uk/see-the-risks',
  },
};

export default function SeeTheRisksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

