import { Shield, Target, Users, Award, CircleCheck as CheckCircle2, Building2, Briefcase, Heart, Scale, ShoppingCart, Building } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            About ELSA AI
          </h1>
          <div className="text-2xl font-semibold text-teal-600 mb-6">
            Ethical • Legal • Societal • Accountable
          </div>
          <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
            We help organisations operationalise responsible AI fast. Using the GenAI Assure™ Framework,
            we turn third-party AI tools into a governed, measurable, and auditable part of your business.
          </p>
          <p className="text-lg text-gray-900 font-semibold mt-6 max-w-3xl mx-auto">
            Outcome: AI that is safe, compliant, and accountable without changing your vendors or rebuilding models.
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
              To make every third-party AI deployment safe, compliant, and auditable by applying a focused
              30-60-90 day rollout that delivers clear guardrails, responsible use, and evidence you can stand behind.
            </p>
          </div>
        </section>

        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Do</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We enable organisations that deploy AI tools (chat, copilots, automations) to operate them with confidence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-gray-200">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-teal-600" />
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-teal-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 leading-relaxed">Stand up guardrails so AI is used safely from day one.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-teal-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 leading-relaxed">Assess and reduce risk across people, process, and data.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-gray-200">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-teal-600" />
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-teal-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 leading-relaxed">Embed monitoring so leaders see what matters, when it matters.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-teal-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 leading-relaxed">Deliver proof so auditors and regulators can verify outcomes.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                <Shield className="h-6 w-6 text-teal-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">AI Governance Framework</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              A practical operating model for AI deployers, built for real-world adoption.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-teal-600 flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold text-gray-900">Policy & accountability</span>
                  <span className="text-gray-700"> that clarify how AI is used.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-teal-600 flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold text-gray-900">Protection of access and data</span>
                  <span className="text-gray-700"> so sensitive information stays safe.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-teal-600 flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold text-gray-900">Monitoring & oversight</span>
                  <span className="text-gray-700"> that make behaviour visible and correctable.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-teal-600 flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold text-gray-900">Documentation & evidence</span>
                  <span className="text-gray-700"> that demonstrate responsible operation.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-teal-600 flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold text-gray-900">Incident handling & resilience</span>
                  <span className="text-gray-700"> so you recover quickly and learn continuously.</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-base text-gray-900 font-semibold">
                Delivered through a pragmatic 30-60-90 day plan with clear milestones.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                <Award className="h-6 w-6 text-teal-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Compliance & Audit Support</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Operate AI with confidence, and prove it.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-teal-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700 leading-relaxed">Aligns with the EU AI Act (deployer duties).</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-teal-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700 leading-relaxed">Works with GDPR/UK GDPR expectations.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-teal-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700 leading-relaxed">Supports ISO/IEC 42001 (AI Management System).</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-teal-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700 leading-relaxed">Maps to NIST AI RMF and NIST CSF / SOC 2.</span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-base text-gray-700 leading-relaxed">
                You get the artefacts and traceability to demonstrate responsible use.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <div className="bg-gradient-to-br from-teal-50 to-white rounded-2xl shadow-xl p-8 sm:p-12 border-2 border-teal-200">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                <Shield className="h-6 w-6 text-teal-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Why We're Different</h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-teal-600 flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold text-gray-900">Deployer-first:</span>
                  <span className="text-gray-700"> built for teams using third-party AI, not building models.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-teal-600 flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold text-gray-900">Security-led:</span>
                  <span className="text-gray-700"> practical guardrails over checkbox policies.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-teal-600 flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold text-gray-900">Measurable:</span>
                  <span className="text-gray-700"> real visibility into how AI is used across your estate.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-teal-600 flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold text-gray-900">Audit-ready:</span>
                  <span className="text-gray-700"> evidence is part of the operating model, not an afterthought.</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-teal-600 flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold text-gray-900">Time-bound:</span>
                  <span className="text-gray-700"> a clear 30-60-90 path your teams can execute.</span>
                </div>
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
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-gray-200">
              <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <Building2 className="h-5 w-5 text-teal-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Technology Companies</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Ship responsibly with copilots, support bots, and internal assistants, without slowing delivery.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-gray-200">
              <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <Scale className="h-5 w-5 text-teal-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Financial Services</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Use AI for research and operations with controls that respect regulatory expectations.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-gray-200">
              <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <Heart className="h-5 w-5 text-teal-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Healthcare Organizations</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Enable staff assistants and knowledge tools while keeping sensitive data safeguarded.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-gray-200">
              <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <Briefcase className="h-5 w-5 text-teal-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Professional Services</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Boost research and drafting, with clear transparency and client-ready assurance.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-gray-200">
              <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <ShoppingCart className="h-5 w-5 text-teal-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">E-commerce & Retail</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Scale customer support and content safely, with governed data flows and brand-safe outputs.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-gray-200">
              <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <Building className="h-5 w-5 text-teal-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Enterprise Organizations</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Roll out AI across functions with consistent guardrails, oversight, and evidence at scale.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl shadow-2xl p-8 sm:p-12 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>

            <p className="text-xl text-white/95 leading-relaxed mb-8">
              Ready to transform your AI governance from a compliance burden into a strategic advantage?
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/free-assessment"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-teal bg-white hover:bg-gray-100 rounded-lg transition-all shadow-lg hover:shadow-xl"
              >
                Get My Free Risk Assessment
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
