import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Governance Framework - GenAI Assure | ELSA AI',
  description: 'Comprehensive AI governance framework with deployer controls, technical safeguards, compliance documentation, and audit-ready evidence for EU AI Act and GDPR.',
  keywords: 'AI governance framework, GenAI Assure framework, EU AI Act compliance, GDPR AI controls, ISO 42001',
  alternates: {
    canonical: 'https://elsaai.co.uk/framework',
  },
};

export default function FrameworkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

