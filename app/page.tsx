import { TriangleAlert as AlertTriangle, Shield, FileCheck, Search, Lock, CircleCheck as CheckCircle2, ClipboardList, ShieldCheck, Eye, Scale, ShieldAlert, DollarSign, Rocket } from 'lucide-react';
import FrameworkWheel from '@/components/FrameworkWheel';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GenAI Assure - AI Governance & Compliance Framework | ELSA AI',
  description: 'Secure your AI deployment estate with enterprise-grade governance controls. GenAI Assure helps organizations comply with GDPR, EU AI Act, and ISO/IEC 42001 through practical 30-60-90 day implementation.',
  keywords: 'AI governance, AI compliance, GDPR AI, EU AI Act, ISO 42001, AI risk management, AI security, enterprise AI governance',
  openGraph: {
    title: 'GenAI Assure - AI Governance & Compliance Framework',
    description: 'Secure your AI deployment estate with enterprise-grade governance controls for GDPR, EU AI Act, and ISO/IEC 42001 compliance.',
    type: 'website',
  },
};

export default function Home() {
  return (
    <div className="w-full">
      <section className="relative bg-gradient-to-br from-gray-50 to-white border-b border-gray-200 overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-200 rounded-full text-sm font-semibold text-red-800">
                <AlertTriangle className="h-4 w-4" />
                🚨 Your AI Tools Now Sit Under €20M+ GDPR and EU AI Act Penalty Regimes
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Every ChatGPT prompt. Every n8n workflow. Every Copilot suggestion.
              </h1>

              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                If it's not governed, it's discoverable in audit—and you carry the liability as the deployer.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                We make your AI estate audit-ready in 90 days. Controls, evidence packs, regulator-aligned reporting.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href="/free-assessment"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-teal hover:bg-teal-600 rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Get My Free Risk Assessment
                </a>
                <a
                  href="/see-the-risks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-teal bg-white hover:bg-gray-50 rounded-lg transition-all border-2 border-teal shadow-sm hover:shadow-md"
                >
                  See My AI Deployer Exposures
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-gray-50 py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 space-y-3">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              Controls You Can Enforce. Evidence Auditors Accept.
            </h2>
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-600">
              That's the GenAI Assure Framework.
            </h3>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed mt-3">
              GenAI Assure defines five core governance principles designed for AI deployers (organisations using third-party AI tools).
              These principles are purpose-built to solve AI governance challenges and mitigate regulatory exposure under frameworks like the{' '}
              <strong className="font-semibold text-gray-900">EU AI Act</strong>,{' '}
              <strong className="font-semibold text-gray-900">GDPR</strong>,{' '}
              <strong className="font-semibold text-gray-900">ISO/IEC 42001</strong>, and{' '}
              <strong className="font-semibold text-gray-900">NIST AI RMF</strong>.
            </p>
          </div>

          <div className="py-8 grid lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
            <div>
              <FrameworkWheel />
            </div>
            <div className="flex justify-center">
              <a
                href="https://youtu.be/_EdCkza4vTQ"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group block w-full max-w-md"
              >
                <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl bg-gray-900 group-hover:shadow-3xl transition-all duration-300">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/_EdCkza4vTQ?rel=0&modestbranding=1"
                    title="GenAI Assure Framework Overview"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
                <p className="text-center text-sm text-gray-600 mt-3 group-hover:text-teal-600 transition-colors">
                  Watch: GenAI Assure Framework Overview
                </p>
              </a>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="group relative bg-gradient-to-br from-green-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-green-100 hover:border-green-300 cursor-pointer">
              <div className="w-14 h-14 rounded-xl mb-3 flex items-center justify-center bg-green-100 group-hover:scale-110 transition-transform" style={{ backgroundColor: '#10B981' }}>
                <Shield className="h-7 w-7 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Security & Data Protection</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                Technical governance backbone for enterprise AI security
              </p>
            </div>

            <div className="group relative bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-blue-100 hover:border-blue-300 cursor-pointer">
              <div className="w-14 h-14 rounded-xl mb-3 flex items-center justify-center bg-blue-100 group-hover:scale-110 transition-transform" style={{ backgroundColor: '#3B82F6' }}>
                <FileCheck className="h-7 w-7 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Governance & Regulatory Assurance</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                Legal and regulatory obligations management
              </p>
            </div>

            <div className="group relative bg-gradient-to-br from-orange-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-orange-100 hover:border-orange-300 cursor-pointer">
              <div className="w-14 h-14 rounded-xl mb-3 flex items-center justify-center bg-orange-100 group-hover:scale-110 transition-transform" style={{ backgroundColor: '#F97316' }}>
                <svg className="h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Ethical & Human Impact</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                Legal and regulatory obligations for ethical AI
              </p>
            </div>

            <div className="group relative bg-gradient-to-br from-red-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-red-100 hover:border-red-300 cursor-pointer">
              <div className="w-14 h-14 rounded-xl mb-3 flex items-center justify-center bg-red-100 group-hover:scale-110 transition-transform" style={{ backgroundColor: '#EF4444' }}>
                <svg className="h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Accountable Operations</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                Operational readiness and accountability frameworks
              </p>
            </div>

            <div className="group relative bg-gradient-to-br from-lime-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-lime-100 hover:border-lime-300 cursor-pointer">
              <div className="w-14 h-14 rounded-xl mb-3 flex items-center justify-center bg-lime-100 group-hover:scale-110 transition-transform" style={{ backgroundColor: '#84CC16' }}>
                <svg className="h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Trust & Safety Culture</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                Operational readiness for building trust
              </p>
            </div>

            <div className="group relative bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-teal-400 text-white md:col-span-2 lg:col-span-1 cursor-pointer">
              <div className="w-14 h-14 rounded-xl bg-white/20 mb-3 flex items-center justify-center group-hover:scale-110 transition-transform backdrop-blur-sm">
                <FileCheck className="h-7 w-7 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2">Evidence Pack</h4>
              <p className="text-white/95 text-sm leading-relaxed">
                Comprehensive audit trail and documentation ready for regulatory review
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-white py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 space-y-3">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              How GenAI Assure Works: Our 3-Step Path to Confident AI Adoption
            </h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed mt-3">
              GenAI Assure transforms AI governance from a compliance burden into a practical, scalable advantage. By applying our framework of{' '}
              <strong className="font-semibold text-teal">principles → controls → evidence</strong>, we implement the{' '}
              <strong className="font-semibold text-gray-900">GenAI Assure™ 30-60-90 plan with defined milestones and evidence</strong> that enables safe, compliant, and auditable AI adoption.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="group relative bg-gradient-to-br from-teal-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-teal-100 hover:border-teal-300">
              <div className="absolute -top-5 -left-5 w-14 h-14 bg-teal-500 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg group-hover:scale-110 transition-transform">
                1
              </div>

              <div className="mb-4 pt-5">
                <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <div className="relative">
                    <Search className="h-10 w-10 text-teal-600" strokeWidth={2} />
                    <ClipboardList className="h-6 w-6 text-teal-700 absolute -bottom-1 -right-1" strokeWidth={2.5} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Assess & Govern</h3>
                <p className="text-gray-700 leading-relaxed text-sm mb-4">
                  Establish a robust foundation for ethical and compliant AI by understanding your current landscape and mapping out a strategic path forward.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-teal-600 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <p className="text-xs text-gray-700">
                    Define and implement comprehensive AI Use Policies tailored to your enterprise.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-teal-600 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <p className="text-xs text-gray-700">
                    Discover and classify all AI tools and applications in use across your organisation.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-teal-600 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <p className="text-xs text-gray-700">
                    Establish an AI governance framework with clear roles, responsibilities, and oversight.
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-blue-100 hover:border-blue-300">
              <div className="absolute -top-5 -left-5 w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg group-hover:scale-110 transition-transform">
                2
              </div>

              <div className="mb-4 pt-5">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <div className="relative">
                    <ShieldCheck className="h-10 w-10 text-blue-600" strokeWidth={2} />
                    <Lock className="h-6 w-6 text-blue-700 absolute -bottom-1 -right-1" strokeWidth={2.5} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Implement Smart Guardrails</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Deploy advanced technical controls and automated protections to ensure your AI systems operate securely and within defined ethical boundaries.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <p className="text-sm text-gray-700">
                    Secure AI access and usage with granular controls and identity management.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <p className="text-sm text-gray-700">
                    Prevent sensitive data leaks and unauthorised information disclosure in AI interactions.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <p className="text-sm text-gray-700">
                    Monitor for anomalous AI behaviour, security threats, and policy violations in real-time.
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-green-100 hover:border-green-300">
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform">
                3
              </div>

              <div className="mb-6 pt-6">
                <div className="w-20 h-20 bg-green-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <div className="relative">
                    <FileCheck className="h-10 w-10 text-green-600" strokeWidth={2} />
                    <Eye className="h-6 w-6 text-green-700 absolute -bottom-1 -right-1" strokeWidth={2.5} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Achieve Audit-Ready Assurance</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Make compliance straightforward and transparent, ensuring you're always prepared for audits and can demonstrate responsible AI practices with ease.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <p className="text-sm text-gray-700">
                    Align AI controls with regulatory requirements (e.g., EU AI Act, NIST AI RMF).
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <p className="text-sm text-gray-700">
                    Deploy AI transparency labels and usage disclosures for user trust and clarity.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <p className="text-sm text-gray-700">
                    Automate the generation of comprehensive "Evidence Packs" for regulatory audits.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <a
              href="/free-assessment"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-teal hover:bg-teal-600 rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Get My Free Risk Assessment
            </a>
            <a
              href="/see-the-risks"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-teal bg-white hover:bg-gray-50 rounded-lg transition-all border-2 border-teal shadow-sm hover:shadow-md"
            >
              See My AI Deployer Exposures
            </a>
          </div>
        </div>
      </section>

      <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 space-y-3">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              Benefits of GenAI Assure for Your Business
            </h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed mt-3">
              GenAI Assure delivers more than compliance. It provides a practical pathway to safe, auditable, and value-driven AI adoption — helping you accelerate innovation while maintaining trust and resilience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="group relative bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-blue-400 text-white overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>

              <div className="relative z-10 mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform backdrop-blur-sm">
                  <Scale className="h-8 w-8 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Navigate Regulatory Complexity</h3>
              </div>

              <div className="relative z-10 space-y-4">
                <div className="flex items-start gap-3 pb-4 border-b border-white/20">
                  <CheckCircle2 className="h-5 w-5 text-white flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <div>
                    <p className="text-sm font-semibold text-white mb-1">EU AI Act (Article 26)</p>
                    <p className="text-sm text-white/90">
                      Deployer duties for logging, oversight, and transparency.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 pb-4 border-b border-white/20">
                  <CheckCircle2 className="h-5 w-5 text-white flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <div>
                    <p className="text-sm font-semibold text-white mb-1">GDPR/UK GDPR</p>
                    <p className="text-sm text-white/90">
                      Lawful basis, DPIAs, and data rights protections.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-white flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <div>
                    <p className="text-sm font-semibold text-white mb-1">Global Standards</p>
                    <p className="text-sm text-white/90">
                      Mapped to ISO/IEC 42001, NIST AI RMF, NIST CSF 2.0, and SOC 2.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-teal-400 text-white overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>

              <div className="relative z-10 mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform backdrop-blur-sm">
                  <ShieldAlert className="h-8 w-8 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Mitigate Security & Data Risks</h3>
              </div>

              <div className="relative z-10 space-y-4">
                <div className="flex items-start gap-3 pb-4 border-b border-white/20">
                  <CheckCircle2 className="h-5 w-5 text-white flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <div>
                    <p className="text-sm font-semibold text-white mb-1">AI-aware DLP & Redaction</p>
                    <p className="text-sm text-white/90">
                      Prevent leaks of PII, credentials, or regulated data.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 pb-4 border-b border-white/20">
                  <CheckCircle2 className="h-5 w-5 text-white flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <div>
                    <p className="text-sm font-semibold text-white mb-1">Shadow AI Playbook</p>
                    <p className="text-sm text-white/90">
                      Discover and control unsanctioned AI tools.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-white flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <div>
                    <p className="text-sm font-semibold text-white mb-1">Enterprise SSO & Secrets Vaults</p>
                    <p className="text-sm text-white/90">
                      Secure access and enforce token rotation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-red-400 text-white overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>

              <div className="relative z-10 mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform backdrop-blur-sm">
                  <DollarSign className="h-8 w-8 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Mitigate Regulatory Risk</h3>
              </div>

              <div className="relative z-10 space-y-4">
                <div className="flex items-start gap-3 pb-4 border-b border-white/20">
                  <AlertTriangle className="h-5 w-5 text-white flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <div>
                    <p className="text-sm font-semibold text-white mb-1">GDPR Violations</p>
                    <p className="text-sm text-white/90">
                      Unlawful AI data use or data breaches can result in significant regulatory penalties.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 pb-4 border-b border-white/20">
                  <AlertTriangle className="h-5 w-5 text-white flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <div>
                    <p className="text-sm font-semibold text-white mb-1">EU AI Act Violations</p>
                    <p className="text-sm text-white/90">
                      Failing to meet deployer duties can result in substantial regulatory penalties.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-white flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <div>
                    <p className="text-sm font-semibold text-white mb-1">Audit-Ready Proof Required</p>
                    <p className="text-sm text-white/90">
                      Regulators demand audit-ready proof, not promises.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-green-400 text-white overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>

              <div className="relative z-10 mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform backdrop-blur-sm">
                  <Rocket className="h-8 w-8 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Faster, Safer AI Adoption</h3>
              </div>

              <p className="relative z-10 text-white/95 leading-relaxed text-base mb-4">
                Enable your teams to use AI tools with confidence. Our framework establishes clear governance, guardrails, and oversight through a{' '}
                <span className="font-bold text-white bg-white/20 px-2 py-1 rounded">structured 30-60-90 day plan</span>, removing uncertainty and shadow AI risks.
              </p>

              <div className="relative z-10 flex items-center gap-2 pt-4 border-t border-white/30">
                <CheckCircle2 className="h-5 w-5 text-white" strokeWidth={2.5} />
                <p className="text-sm font-semibold text-white">
                  Transform compliance from a burden into a strategic advantage
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <a
              href="/free-assessment"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-teal hover:bg-teal-600 rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Get My Free Risk Assessment
            </a>
            <a
              href="/see-the-risks"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-teal bg-white hover:bg-gray-50 rounded-lg transition-all border-2 border-teal shadow-sm hover:shadow-md"
            >
              See My AI Deployer Exposures
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
