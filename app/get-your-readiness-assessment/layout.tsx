import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free AI Readiness Assessment - GenAI Assure™ | ELSA AI',
  description: 'Get a free AI governance readiness assessment. Identify compliance gaps, shadow AI risks, and receive a prioritized action plan for EU AI Act and GDPR compliance.',
  keywords: 'free AI assessment, AI compliance assessment, shadow AI discovery, EU AI Act readiness, GDPR AI assessment',
  alternates: {
    canonical: 'https://elsaai.co.uk/get-your-readiness-assessment',
  },
};

export default function FreeAssessmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

