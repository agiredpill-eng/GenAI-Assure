import { Download, Printer, BookOpen, Shield, FileText, Calendar, Scale } from 'lucide-react';

export default function FrameworkPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
          <div className="bg-gradient-to-br from-blue-500 to-teal-500 px-8 py-12 text-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <Shield className="h-7 w-7 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">GenAI Assure™ Framework v1.0</h1>
              </div>
            </div>
            <h2 className="text-2xl font-semibold mb-4">Read the Framework & Download the PDF</h2>
            <p className="text-lg text-white/95 leading-relaxed max-w-4xl">
              Secures your AI deployment estate with enterprise-grade governance controls for AI tool deployers. This page lets visitors read the full framework in one place and download an audit-ready PDF copy.
            </p>
          </div>

          <div className="px-8 py-8 bg-gray-50 border-b border-gray-200">
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-all shadow-lg hover:shadow-xl">
                <Download className="h-5 w-5 mr-2" />
                Download PDF
              </button>
              <button className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-gray-900 bg-gray-900 hover:bg-gray-800 rounded-lg transition-all shadow-lg hover:shadow-xl text-white">
                <Printer className="h-5 w-5 mr-2" />
                Print
              </button>
              <a
                href="#reader"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-gray-700 bg-white hover:bg-gray-50 rounded-lg transition-all shadow-md hover:shadow-lg border-2 border-gray-300"
              >
                <BookOpen className="h-5 w-5 mr-2" />
                Start Reading
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="h-5 w-5 text-blue-600" />
                  <h3 className="text-sm font-semibold text-gray-600">Version</h3>
                </div>
                <p className="text-2xl font-bold text-gray-900">1.0</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="h-5 w-5 text-green-600" />
                  <h3 className="text-sm font-semibold text-gray-600">Status</h3>
                </div>
                <p className="text-base font-bold text-gray-900">Production Ready – Enterprise Implementation</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="h-5 w-5 text-teal-600" />
                  <h3 className="text-sm font-semibold text-gray-600">Date</h3>
                </div>
                <p className="text-xl font-bold text-gray-900">27 August 2025</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
                <div className="flex items-center gap-2 mb-2">
                  <Scale className="h-5 w-5 text-orange-600" />
                  <h3 className="text-sm font-semibold text-gray-600">License</h3>
                </div>
                <p className="text-base font-bold text-gray-900">Open Framework (CC BY-ND 4.0)</p>
              </div>
            </div>
          </div>

          <div id="reader" className="px-8 py-12">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">In-page Reader</h3>
              <p className="text-gray-700 leading-relaxed">
                Scroll to read the full framework from start to finish. You can also open the PDF in a new tab from your browser controls if preferred.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-inner border-2 border-gray-300 overflow-hidden" style={{ height: '800px' }}>
              <iframe
                src="/path-to-your-framework.pdf"
                className="w-full h-full"
                title="GenAI Assure Framework PDF"
              ></iframe>
            </div>

            <div className="mt-8 bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong className="text-gray-900">Note:</strong> The GenAI Assure™ Framework is licensed under Creative Commons Attribution-NoDerivatives 4.0 International (CC BY-ND 4.0).
                You are free to share and distribute the framework as-is, with proper attribution, but may not create derivative works without permission.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl p-8 shadow-2xl text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Implement the Framework?</h3>
          <p className="text-white/95 mb-6 text-lg leading-relaxed">
            Our team can help you implement the GenAI Assure Framework in your organization and achieve compliance in 90 days.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/free-assessment"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-teal-600 bg-white hover:bg-gray-50 rounded-lg transition-all shadow-lg hover:shadow-xl"
            >
              Get Free Assessment
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-teal-700 hover:bg-teal-800 rounded-lg transition-all shadow-lg hover:shadow-xl border-2 border-white/30"
            >
              Contact Our Experts
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
