import { Shield, Search, ClipboardList, CircleCheck as CheckCircle2 } from 'lucide-react';
import FrameworkWheel from '@/components/FrameworkWheel';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GenAI Assure™ Solution - Complete AI Governance Platform | ELSA AI',
  description: 'End-to-end AI governance solution with technical controls, SIEM integration, DLP, transparency labels, and audit-ready documentation for EU AI Act and GDPR compliance.',
  keywords: 'AI governance solution, GenAI Assure™ platform, AI compliance platform, EU AI Act solution, GDPR AI platform',
  alternates: {
    canonical: 'https://elsaai.co.uk/solution',
  },
};

export default function SolutionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            The GenAI Assure™ Solution
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
            GenAI Assure™ provides a comprehensive, audit-ready framework for managing AI deployments across your organization.
            We combine technical controls, governance processes, and compliance documentation to deliver end-to-end AI risk management
            that meets the demands of GDPR, the EU AI Act, and industry standards like ISO/IEC 42001 and SOC 2.
          </p>
        </div>

        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              The GenAI Assure™ Framework
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our framework addresses the complete lifecycle of AI governance, from discovery and risk assessment
              to technical implementation and continuous monitoring.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12">
            <FrameworkWheel />
          </div>
        </section>

        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Three-Step Process
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We implement the GenAI Assure™ 30-60-90 plan with defined milestones and evidence through our proven methodology.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-gray-200 hover:border-teal-300 transition-all">
              <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
                <Search className="h-8 w-8 text-teal-600" strokeWidth={2} />
              </div>
              <div className="text-sm font-bold text-teal-600 mb-2">STEP 1</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Discovery & Assessment</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We identify all AI tools in use across your organization, assess current controls, and map data flows to understand your complete AI risk exposure.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="text-sm text-gray-700">Shadow AI discovery</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="text-sm text-gray-700">Risk classification</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="text-sm text-gray-700">Compliance gap analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="text-sm text-gray-700">Data flow mapping</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-gray-200 hover:border-teal-300 transition-all">
              <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-teal-600" strokeWidth={2} />
              </div>
              <div className="text-sm font-bold text-teal-600 mb-2">STEP 2</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Implementation & Controls</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We deploy technical controls and governance processes to secure your AI operations and ensure regulatory compliance.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="text-sm text-gray-700">SSO integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="text-sm text-gray-700">AI-aware DLP deployment</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="text-sm text-gray-700">Logging infrastructure</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="text-sm text-gray-700">Policy documentation</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-gray-200 hover:border-teal-300 transition-all">
              <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
                <ClipboardList className="h-8 w-8 text-teal-600" strokeWidth={2} />
              </div>
              <div className="text-sm font-bold text-teal-600 mb-2">STEP 3</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Evidence Pack & Monitoring</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We deliver comprehensive documentation proving compliance and establish ongoing monitoring to maintain your security posture.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="text-sm text-gray-700">Audit-ready evidence pack</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="text-sm text-gray-700">DPIA/FRIA documentation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="text-sm text-gray-700">Continuous monitoring dashboard</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="text-sm text-gray-700">Ongoing compliance support</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl shadow-2xl p-8 sm:p-12 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Secure Your AI Operations?
            </h2>
            <p className="text-xl text-white/95 leading-relaxed mb-8">
              Transform your AI deployment from a compliance liability into a strategic advantage.
              Get started with a free emergency assessment to understand your current risk exposure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
              href="/get-your-readiness-assessment"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-teal bg-white hover:bg-gray-100 rounded-lg transition-all shadow-lg hover:shadow-xl"
              >
                Get Your Readiness Assessment
              </a>
              <a
                href="/see-the-risks"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-white/20 hover:bg-white/30 rounded-lg transition-all border-2 border-white backdrop-blur-sm"
              >
                See My AI Deployer Exposures
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
