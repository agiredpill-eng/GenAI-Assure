import { Shield, Target, Users, Award, Mail, CircleCheck as CheckCircle2 } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            About ELSA AI
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            We help organizations navigate the complex landscape of AI governance with practical,
            audit-ready solutions that transform compliance from a burden into a strategic advantage.
          </p>
        </div>

        <section className="mb-20">
          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                <Target className="h-6 w-6 text-teal-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              ELSA AI exists to make responsible AI governance accessible and achievable for organizations of all sizes.
              We believe that AI can be a powerful force for innovation and growth when deployed with proper safeguards,
              transparency, and accountability. Our mission is to help organizations adopt AI confidently while meeting
              regulatory requirements, protecting data, and maintaining trust with stakeholders.
            </p>
          </div>
        </section>

        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Do</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We provide comprehensive AI governance solutions that address the complete lifecycle of AI deployment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-gray-200">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI Governance Framework</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We implement the GenAI Assure framework—a comprehensive approach to AI governance that covers
                discovery, risk assessment, technical controls, policy development, and ongoing monitoring.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Shadow AI discovery and inventory</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Risk classification and assessment</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Technical control implementation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Policy and procedure development</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-gray-200">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Compliance & Audit Support</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We deliver audit-ready evidence packs that demonstrate compliance with GDPR, the EU AI Act,
                and industry standards like ISO/IEC 42001, NIST AI RMF, and SOC 2.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">DPIA/FRIA documentation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Vendor due diligence and DPAs</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Comprehensive audit trails</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">Regulatory reporting support</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <div className="bg-gradient-to-br from-teal-50 to-white rounded-2xl shadow-xl p-8 sm:p-12 border-2 border-teal-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                <Shield className="h-6 w-6 text-teal-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Why We're Different</h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Practical, Not Theoretical</h3>
                <p className="text-gray-700 leading-relaxed">
                  We don't provide abstract frameworks that look good on paper but fail in practice. Our solutions
                  are built for real-world implementation, addressing the messy reality of shadow AI, competing priorities,
                  and resource constraints.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Audit-Ready from Day One</h3>
                <p className="text-gray-700 leading-relaxed">
                  Compliance without documentation is just hope. We deliver comprehensive evidence packs that prove
                  compliance to auditors and regulators. When you implement GenAI Assure, you're not just compliant—you
                  can prove it.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">90-Day Implementation</h3>
                <p className="text-gray-700 leading-relaxed">
                  AI governance doesn't require years of effort. Our proven methodology delivers a complete, functioning
                  governance framework in just 90 days. We balance thoroughness with urgency because your regulatory
                  deadlines won't wait.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Technology-Agnostic</h3>
                <p className="text-gray-700 leading-relaxed">
                  We work with your existing AI tools and infrastructure. Whether you're using ChatGPT, Microsoft Copilot,
                  custom LLMs, or automation platforms like Make.com and n8n, our framework adapts to your technology stack.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                <Users className="h-6 w-6 text-teal-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Who We Serve</h2>
            </div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We work with organizations across industries that need to secure their AI operations and demonstrate compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Technology Companies</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Organizations deploying AI at scale across development, operations, and customer-facing applications.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Financial Services</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Banks, insurance companies, and fintech firms using AI for risk assessment, fraud detection, and customer service.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Healthcare Organizations</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Providers and payers using AI tools that process sensitive health data and require strict regulatory compliance.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Professional Services</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Law firms, consultancies, and agencies using AI to enhance productivity while protecting client confidentiality.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">E-commerce & Retail</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Companies using AI for personalization, customer service, and operations while managing privacy obligations.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Enterprise Organizations</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Large corporations with distributed AI adoption across multiple business units and geographies.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl shadow-2xl p-8 sm:p-12 text-white">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold">Get in Touch</h2>
            </div>

            <p className="text-xl text-white/95 leading-relaxed mb-8">
              Ready to transform your AI governance from a compliance burden into a strategic advantage?
              Contact us to discuss your specific requirements and learn how GenAI Assure can help.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <Mail className="h-6 w-6 text-white/80" />
                <a href="mailto:contact@elsaai.co.uk" className="text-white text-lg hover:underline">
                  contact@elsaai.co.uk
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/free-assessment"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-teal bg-white hover:bg-gray-100 rounded-lg transition-all shadow-lg hover:shadow-xl"
              >
                Get Free Emergency Assessment
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-white/20 hover:bg-white/30 rounded-lg transition-all border-2 border-white backdrop-blur-sm"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
