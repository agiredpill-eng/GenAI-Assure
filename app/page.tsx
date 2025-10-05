import { TriangleAlert as AlertTriangle, Shield, FileCheck } from 'lucide-react';
import FrameworkWheel from '@/components/FrameworkWheel';

export default function Home() {
  return (
    <div className="w-full">
      <section className="relative bg-gradient-to-br from-gray-50 to-white border-b border-gray-200 overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-200 rounded-full text-sm font-semibold text-red-800">
                <AlertTriangle className="h-4 w-4" />
                Regulatory Compliance Alert
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Don't Let Unmanaged AI Become Your Next{' '}
                <span className="text-red-600">Regulatory Crisis</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                Your AI implementations—from Make/n8n/Zapier automations to copilots and custom agents—can bypass enterprise security, expose sensitive data, and create compliance gaps that violate{' '}
                <strong className="font-semibold text-gray-900">GDPR/UK GDPR</strong> and{' '}
                <strong className="font-semibold text-gray-900">EU AI Act deployer obligations (Article 26)</strong>.
              </p>

              <div className="bg-teal-50 border-2 border-teal-200 rounded-xl p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <Shield className="h-6 w-6 text-teal-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">GenAI Assure</h3>
                    <p className="text-gray-800 leading-relaxed">
                      Secures your entire AI deployment estate with enterprise-grade governance controls specifically designed for AI tool deployers.
                      We implement what auditors expect and regulations require: comprehensive SSO integration, AI-aware data loss prevention,
                      structured event logging, complete audit trails, transparency documentation, DPIA/FRIA frameworks, and thorough
                      vendor due-diligence processes.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 pt-2 border-t border-teal-200">
                  <FileCheck className="h-5 w-5 text-teal-600" />
                  <p className="font-semibold text-gray-900">
                    Stop hoping your AI deployments stay compliant. Prove it with an audit-ready Evidence Pack.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="/free-assessment"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-teal hover:bg-teal-600 rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Get Free Emergency Assessment
                </a>
                <a
                  href="/see-the-risks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-teal bg-white hover:bg-gray-50 rounded-lg transition-all border-2 border-teal shadow-sm hover:shadow-md"
                >
                  See The Risks Now
                </a>
              </div>
            </div>

            <div className="relative lg:h-[600px] h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-100 via-teal-50 to-gray-100 rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full p-8 flex flex-col items-center justify-center space-y-6">
                    <div className="absolute top-8 right-8 w-24 h-24 bg-teal-200 rounded-full opacity-40 blur-2xl"></div>
                    <div className="absolute bottom-12 left-12 w-32 h-32 bg-teal-300 rounded-full opacity-30 blur-3xl"></div>

                    <div className="relative z-10 bg-white rounded-xl shadow-xl p-6 max-w-sm transform rotate-2 hover:rotate-0 transition-transform">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                          <Shield className="h-6 w-6 text-teal-600" />
                        </div>
                        <div>
                          <div className="font-bold text-gray-900">Enterprise AI Governance</div>
                          <div className="text-xs text-gray-600">Audit-Ready Proof</div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <div className="text-sm text-gray-700">SSO Integration Active</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <div className="text-sm text-gray-700">DLP Monitoring Enabled</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <div className="text-sm text-gray-700">Audit Trail Complete</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <div className="text-sm text-gray-700">GDPR Compliant</div>
                        </div>
                      </div>
                    </div>

                    <div className="relative z-10 bg-white rounded-xl shadow-xl p-6 max-w-sm transform -rotate-2 hover:rotate-0 transition-transform">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                          <FileCheck className="h-6 w-6 text-gray-600" />
                        </div>
                        <div>
                          <div className="font-bold text-gray-900">Evidence Pack</div>
                          <div className="text-xs text-gray-600">Ready for Auditors</div>
                        </div>
                      </div>
                      <div className="text-sm text-gray-700">
                        Complete documentation and compliance records
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-gray-50 py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              Controls You Can Enforce. Evidence Auditors Accept.
            </h2>
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-600">
              That's the GenAI Assure Framework.
            </h3>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed mt-6">
              GenAI Assure defines five core governance principles designed for AI deployers (organisations using third-party AI tools).
              These principles are purpose-built to solve AI governance challenges and mitigate regulatory exposure under frameworks like the{' '}
              <strong className="font-semibold text-gray-900">EU AI Act</strong>,{' '}
              <strong className="font-semibold text-gray-900">GDPR</strong>,{' '}
              <strong className="font-semibold text-gray-900">ISO/IEC 42001</strong>, and{' '}
              <strong className="font-semibold text-gray-900">NIST AI RMF</strong>.
            </p>
          </div>

          <div className="py-12">
            <FrameworkWheel />
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center" style={{ backgroundColor: '#10B981' }}>
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Security & Data Protection</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Technical governance backbone for enterprise AI security
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center" style={{ backgroundColor: '#3B82F6' }}>
                <FileCheck className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Governance & Regulatory Assurance</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Legal and regulatory obligations management
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center" style={{ backgroundColor: '#A855F7' }}>
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Ethical & Human Impact</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Legal and regulatory obligations for ethical AI
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center" style={{ backgroundColor: '#EF4444' }}>
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Accountable Operations</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Operational readiness and accountability frameworks
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center" style={{ backgroundColor: '#84CC16' }}>
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Trust & Safety Culture</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Operational readiness for building trust
              </p>
            </div>

            <div className="bg-teal-50 rounded-xl p-6 shadow-sm border-2 border-teal-200 md:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 rounded-lg bg-teal-500 mb-4 flex items-center justify-center">
                <FileCheck className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Evidence Pack</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Comprehensive audit trail and documentation ready for regulatory review
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
