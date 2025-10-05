import { TriangleAlert as AlertTriangle, Shield, FileCheck } from 'lucide-react';

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
    </div>
  );
}
