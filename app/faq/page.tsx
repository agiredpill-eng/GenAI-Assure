import { Metadata } from 'next';
import { HelpCircle, Mail, Globe, Linkedin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'FAQ - Frequently Asked Questions | ELSA AI',
  description: 'Frequently asked questions about ELSA AI, GenAI Assure framework, implementation, compliance, and getting started.',
  keywords: 'FAQ, AI governance FAQ, GenAI Assure questions, AI compliance questions, EU AI Act, GDPR AI',
  alternates: {
    canonical: 'https://elsaai.co.uk/faq',
  },
};

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-body">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#B9FF2C]/20 border border-[#B9FF2C]/30 rounded-full mb-4">
            <HelpCircle className="h-5 w-5 text-[#B9FF2C]" />
            <span className="text-sm font-semibold text-[#B9FF2C]">Frequently Asked Questions</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-sm text-white/80">
            Last updated: October 2025
          </p>
        </div>

        <div className="space-y-12">
          {/* About ELSA AI */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b-2 border-[#B9FF2C]">
              About ELSA AI
            </h2>
            <div className="space-y-6">
              <div className="bg-body rounded-xl border border-[#B9FF2C]/30 shadow-[0_16px_40px_rgba(0,0,0,0.6)] p-6">
                <h3 className="text-lg font-bold text-white mb-3">What is ELSA AI?</h3>
                <p className="text-white/90 leading-relaxed">
                  ELSA AI is an advisory firm specialising in AI governance for organisations that deploy third‑party AI tools. We make adoption safe, compliant, and auditable by turning principles into controls and controls into evidence—without building or operating your systems. (Advisory‑only scope; your teams implement technology.)
                </p>
              </div>

              <div className="bg-body rounded-xl border border-[#B9FF2C]/30 shadow-[0_16px_40px_rgba(0,0,0,0.6)] p-6">
                <h3 className="text-lg font-bold text-white mb-3">Are you the same as ELSA Speak (the English‑learning app)?</h3>
                <p className="text-white/90 leading-relaxed">
                  No. We are ELSA AI—a governance, security, and assurance consultancy for enterprise AI deployers. ELSA Speak is a consumer language‑learning app. Different brands; different services.
                </p>
              </div>

              <div className="bg-body rounded-xl border border-[#B9FF2C]/30 shadow-[0_16px_40px_rgba(0,0,0,0.6)] p-6">
                <h3 className="text-lg font-bold text-white mb-3">Do you offer language‑learning or pronunciation tools?</h3>
                <p className="text-white/90 leading-relaxed">
                  No. We do not provide consumer apps. We focus exclusively on enterprise AI governance and assurance.
                </p>
              </div>
            </div>
          </section>

          {/* About GenAI Assure */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b-2 border-[#B9FF2C]">
              About GenAI Assure
            </h2>
            <div className="space-y-6">
              <div className="bg-body rounded-xl border border-[#B9FF2C]/30 shadow-[0_16px_40px_rgba(0,0,0,0.6)] p-6">
                <h3 className="text-lg font-bold text-white mb-3">What is GenAI Assure?</h3>
                <p className="text-white/90 leading-relaxed">
                  GenAI Assure is ELSA AI's governance framework that provides a pragmatic 30‑60‑90‑day implementation pathway for organisations using third‑party AI tools. It links principles → controls → evidence across security, regulatory, ethics, operations, and culture.
                </p>
              </div>

              <div className="bg-body rounded-xl border border-[#B9FF2C]/30 shadow-[0_16px_40px_rgba(0,0,0,0.6)] p-6">
                <h3 className="text-lg font-bold text-white mb-3">What's the relationship between ELSA AI and GenAI Assure?</h3>
                <ul className="text-white/90 leading-relaxed space-y-2 list-disc list-inside">
                  <li><strong>GenAI Assure</strong> = the framework (the what)</li>
                  <li><strong>ELSA AI</strong> = the advisory services that help you implement it (the who)</li>
                </ul>
              </div>

              <div className="bg-body rounded-xl border border-[#B9FF2C]/30 shadow-[0_16px_40px_rgba(0,0,0,0.6)] p-6">
                <h3 className="text-lg font-bold text-white mb-3">Who is GenAI Assure designed for?</h3>
                <p className="text-white/90 leading-relaxed mb-3">
                  AI deployers—organisations using third‑party AI services such as:
                </p>
                <ul className="text-white/90 leading-relaxed space-y-1 list-disc list-inside ml-4">
                  <li>Copilots (e.g., Microsoft 365 Copilot, GitHub Copilot)</li>
                  <li>Chatbots/assistants (e.g., customer service agents)</li>
                  <li>Workflow automation (e.g., n8n, Make, Zapier)</li>
                  <li>Content & document generation/analysis</li>
                </ul>
              </div>

              <div className="bg-body rounded-xl border border-[#B9FF2C]/30 shadow-[0_16px_40px_rgba(0,0,0,0.6)] p-6">
                <h3 className="text-lg font-bold text-white mb-3">What problems does GenAI Assure address?</h3>
                <ul className="text-white/90 leading-relaxed space-y-2 list-disc list-inside">
                  <li>Shadow AI without oversight</li>
                  <li>Data leakage and misuse via prompts/automations</li>
                  <li>Regulatory non‑compliance (EU AI Act, GDPR, ISO/IEC 42001, NIST AI RMF, SOC 2)</li>
                  <li>Ethical risks (bias, explainability gaps, harmful outputs)</li>
                  <li>Missing audit trails ("prove what your AI decided")</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Implementation & Delivery */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b-2 border-[#B9FF2C]">
              Implementation & Delivery
            </h2>
            <div className="space-y-6">
              <div className="bg-body rounded-xl border border-[#B9FF2C]/30 shadow-[0_16px_40px_rgba(0,0,0,0.6)] p-6">
                <h3 className="text-lg font-bold text-white mb-3">How does implementation work?</h3>
                <p className="text-white/90 leading-relaxed mb-4">
                  We run a 90‑day phased programme:
                </p>
                <div className="space-y-4">
                  <div className="bg-[#B9FF2C]/10 border border-[#B9FF2C]/30 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-2">Days 1–30: Foundation</h4>
                    <ul className="text-white/90 text-sm space-y-1 list-disc list-inside">
                      <li>AI Use Policy & exception framework</li>
                      <li>Value & Risk tiering (intake form)</li>
                      <li>Shadow AI discovery & inventory</li>
                      <li>Initial DPIA/FRIA triggers</li>
                      <li>SSO plan; SIEM event schema</li>
                    </ul>
                  </div>
                  <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-2">Days 31–60: Core Controls</h4>
                    <ul className="text-white/90 text-sm space-y-1 list-disc list-inside">
                      <li>DLP patterns for AI risk</li>
                      <li>Secrets management & token hygiene</li>
                      <li>Vendor risk & DPA reviews</li>
                      <li>Transparency labels & explainability profiles</li>
                      <li>Incident response runbooks</li>
                      <li>Bias/harm testing (TEVV‑Lite context)</li>
                    </ul>
                  </div>
                  <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-2">Days 61–90: Optimisation & Scale</h4>
                    <ul className="text-white/90 text-sm space-y-1 list-disc list-inside">
                      <li>Evidence Pack automation</li>
                      <li>Audit dashboards & KPIs</li>
                      <li>Internal audit dry‑runs</li>
                      <li>Quarterly review cadence</li>
                      <li>Full compliance validation</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-body rounded-xl border border-[#B9FF2C]/30 shadow-[0_16px_40px_rgba(0,0,0,0.6)] p-6">
                <h3 className="text-lg font-bold text-white mb-3">Is GenAI Assure software or a managed service?</h3>
                <p className="text-white/90 leading-relaxed">
                  Neither. It's a framework and advisory methodology. We provide blueprints, control designs, validation, and evidence structures. Your teams implement and operate the technology.
                </p>
              </div>

              <div className="bg-body rounded-xl border border-[#B9FF2C]/30 shadow-[0_16px_40px_rgba(0,0,0,0.6)] p-6">
                <h3 className="text-lg font-bold text-white mb-3">Who does what (roles & responsibilities)?</h3>
                <div className="space-y-4 mt-4">
                  <div className="bg-white/10 border border-white/20 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-2">Your team (Client):</h4>
                    <ul className="text-white/90 text-sm space-y-1 list-disc list-inside">
                      <li>Implement & operate controls (SSO/MFA, DLP, SIEM, secrets vault, SOAR/GRC wiring)</li>
                      <li>Manage vendors and contracts</li>
                      <li>Own day‑to‑day operations</li>
                    </ul>
                  </div>
                  <div className="bg-[#B9FF2C]/10 border border-[#B9FF2C]/30 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-2">ELSA AI (Advisory):</h4>
                    <ul className="text-white/90 text-sm space-y-1 list-disc list-inside">
                      <li>Governance framework & policies</li>
                      <li>Risk & assessment frameworks (DPIA/FRIA facilitation)</li>
                      <li>Technical standards & control specifications</li>
                      <li>Evidence Pack structure & automation guidance</li>
                      <li>Implementation reviews & validation</li>
                      <li>Audit‑readiness assessment</li>
                    </ul>
                  </div>
                </div>
                <p className="text-white/90 leading-relaxed mt-4 italic">
                  We provide the blueprint and independent oversight; you build and run the controls.
                </p>
              </div>
            </div>
          </section>

          {/* Compliance & Standards */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b-2 border-[#B9FF2C]">
              Compliance & Standards
            </h2>
            <div className="space-y-6">
              <div className="bg-body rounded-xl border border-[#B9FF2C]/30 shadow-[0_16px_40px_rgba(0,0,0,0.6)] p-6">
                <h3 className="text-lg font-bold text-white mb-3">What frameworks and regulations does GenAI Assure map to?</h3>
                <p className="text-white/90 leading-relaxed mb-3">
                  GenAI Assure maps to major frameworks and regulations:
                </p>
                <ul className="text-white/90 leading-relaxed space-y-2 list-disc list-inside">
                  <li><strong>EU AI Act (Article 26)</strong> — deployer duties: logging, transparency, human oversight</li>
                  <li><strong>GDPR/UK GDPR</strong> — lawful basis, DPIA/FRIA, rights handling, transfers (SCC/IDTA)</li>
                  <li><strong>ISO/IEC 42001</strong> — AI Management System (Plan‑Do‑Check‑Act)</li>
                  <li><strong>NIST AI RMF</strong> — Govern, Map, Measure, Manage</li>
                  <li><strong>NIST CSF 2.0</strong> — Identify/Protect/Detect/Respond/Recover</li>
                  <li><strong>SOC 2</strong> — Security, Availability, Confidentiality</li>
                </ul>
              </div>

              <div className="bg-body rounded-xl border border-[#B9FF2C]/30 shadow-[0_16px_40px_rgba(0,0,0,0.6)] p-6">
                <h3 className="text-lg font-bold text-white mb-3">What audit evidence will we have?</h3>
                <p className="text-white/90 leading-relaxed mb-3">
                  Evidence Packs per use case, including:
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-white mb-2">Policy & Governance:</h4>
                    <p className="text-white/90 text-sm">AI Use Policy, approvals, exception register; lifecycle gate records</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Legal & Compliance:</h4>
                    <p className="text-white/90 text-sm">DPIA/FRIA, RoPA entries, Transfer Register, transparency labels/notices</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Technical Controls:</h4>
                    <p className="text-white/90 text-sm">SIEM logs (prompts/outputs/decisions), DLP policies & violations, SSO/SCIM reports, secrets/token inventories, vendor attestations (SOC 2/ISO, sub‑processors)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Testing & Validation:</h4>
                    <p className="text-white/90 text-sm">TEVV‑Lite results (bias, explainability, HITL), IR runbooks & transcripts, accessibility conformance</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Format & Assurances:</h4>
                    <p className="text-white/90 text-sm">Evidence YAML manifests with SHA‑256 hashes and WORM/append‑only storage; tiered retrieval SLA (Tier‑1 ≤4h, Tier‑2 ≤8h, Tier‑3 ≤24h)</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing & Engagement */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b-2 border-[#B9FF2C]">
              Pricing & Engagement
            </h2>
            <div className="space-y-6">
              <div className="bg-body rounded-xl border border-[#B9FF2C]/30 shadow-[0_16px_40px_rgba(0,0,0,0.6)] p-6">
                <h3 className="text-lg font-bold text-white mb-3">How do you price engagements?</h3>
                <p className="text-white/90 leading-relaxed">
                  Pricing is set after a Tier‑0 Readiness & Assessment (inventory coverage, intake live, rubric approved). Your use cases are tiered (Tier‑1/2/3) by value/risk, then delivered via the 30‑60‑90 methodology with milestone‑based billing.
                </p>
              </div>

              <div className="bg-body rounded-xl border border-[#B9FF2C]/30 shadow-[0_16px_40px_rgba(0,0,0,0.6)] p-6">
                <h3 className="text-lg font-bold text-white mb-3">What determines my tier?</h3>
                <p className="text-white/90 leading-relaxed">
                  A simple rubric across: data sensitivity, decision impact, output scope, and blast radius. The score maps to Tier‑1 (Fast Lane), Tier‑2 (Standard Review), or Tier‑3 (Full Governance).
                </p>
              </div>

              <div className="bg-body rounded-xl border border-[#B9FF2C]/30 shadow-[0_16px_40px_rgba(0,0,0,0.6)] p-6">
                <h3 className="text-lg font-bold text-white mb-3">What's included in every engagement?</h3>
                <p className="text-white/90 leading-relaxed">
                  Advisory‑only delivery covering: policy & gates, control design/validation (GA‑PG/TP/DM/DC/RR/RB), TEVV‑Lite acceptance, and audit‑ready Evidence Packs with tiered SLAs. You implement the tech; we design, validate, and sign‑off via change tickets.
                </p>
              </div>

              <div className="bg-body rounded-xl border border-[#B9FF2C]/30 shadow-[0_16px_40px_rgba(0,0,0,0.6)] p-6">
                <h3 className="text-lg font-bold text-white mb-3">What's not included?</h3>
                <p className="text-white/90 leading-relaxed">
                  Hands‑on technical build or operations (e.g., configuring SSO/MFA, deploying DLP, wiring SIEM, secrets vault setup, SOAR/GRC automation).
                </p>
              </div>

              <div className="bg-body rounded-xl border border-[#B9FF2C]/30 shadow-[0_16px_40px_rgba(0,0,0,0.6)] p-6">
                <h3 className="text-lg font-bold text-white mb-3">How are milestones & billing structured?</h3>
                <p className="text-white/90 leading-relaxed mb-3">
                  We align invoices to exit gates:
                </p>
                <ul className="text-white/90 leading-relaxed space-y-2 list-disc list-inside">
                  <li><strong>Foundation (Days 1–30):</strong> Policy approved; intake/rubric live; inventory ≥95%</li>
                  <li><strong>Core Controls (Days 31–60):</strong> SIEM events live; DLP active; TEVV‑Lite pass</li>
                  <li><strong>Audit‑Ready (Days 61–90):</strong> Evidence Packs meet SLA; dashboards operational</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Technical Requirements */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b-2 border-[#B9FF2C]">
              Technical Requirements
            </h2>
            <div className="space-y-6">
              <div className="bg-body rounded-xl border border-[#B9FF2C]/30 shadow-[0_16px_40px_rgba(0,0,0,0.6)] p-6">
                <h3 className="text-lg font-bold text-white mb-3">What technical stack do we need?</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-white mb-2">Minimum stack:</h4>
                    <ul className="text-white/90 text-sm space-y-1 list-disc list-inside">
                      <li>IdP (e.g., Entra ID, Okta) with SSO/MFA</li>
                      <li>SIEM or central logging (e.g., Splunk, Elastic, Microsoft Sentinel)</li>
                      <li>Secrets management (e.g., HashiCorp Vault, AWS Secrets Manager, Azure Key Vault)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Enhanced capabilities:</h4>
                    <ul className="text-white/90 text-sm space-y-1 list-disc list-inside">
                      <li>CASB/proxy for domain control</li>
                      <li>Endpoint/Web/SaaS DLP coverage</li>
                      <li>GRC/ticketing (e.g., ServiceNow, Jira)</li>
                      <li>SOAR for automation (optional)</li>
                    </ul>
                  </div>
                </div>
                <p className="text-white/90 leading-relaxed mt-4 italic">
                  We adapt to your environment—not the other way around.
                </p>
              </div>

              <div className="bg-body rounded-xl border border-[#B9FF2C]/30 shadow-[0_16px_40px_rgba(0,0,0,0.6)] p-6">
                <h3 className="text-lg font-bold text-white mb-3">Does GenAI Assure cover model development or fine‑tuning?</h3>
                <p className="text-white/90 leading-relaxed">
                  No. The framework is for AI deployers using third‑party tools; model building or fine‑tuning is out of scope.
                </p>
              </div>
            </div>
          </section>

          {/* Framework Usage */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b-2 border-[#B9FF2C]">
              Framework Usage
            </h2>
            <div className="space-y-6">
              <div className="bg-body rounded-xl border border-[#B9FF2C]/30 shadow-[0_16px_40px_rgba(0,0,0,0.6)] p-6">
                <h3 className="text-lg font-bold text-white mb-3">How is GenAI Assure licensed?</h3>
                <p className="text-white/90 leading-relaxed mb-3">
                  GenAI Assure is proprietary methodology and documentation owned by ELSA AI Ltd (version 1.0).
                </p>
                <p className="text-white/90 leading-relaxed">
                  When we work with you, we give you the framework, controls, and evidence pack for your internal use so you can meet regulatory and audit obligations as an AI deployer. External redistribution or reuse outside your organisation isn't permitted unless agreed in your Statement of Work.
                </p>
              </div>

              <div className="bg-body rounded-xl border border-[#B9FF2C]/30 shadow-[0_16px_40px_rgba(0,0,0,0.6)] p-6">
                <h3 className="text-lg font-bold text-white mb-3">Can we access the framework before engaging?</h3>
                <p className="text-white/90 leading-relaxed">
                  Yes. We make core framework materials available to prospective clients for evaluation. For implementation support, training, or partnership discussions, please contact us.
                </p>
              </div>
            </div>
          </section>

          {/* Getting Started */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b-2 border-[#B9FF2C]">
              Getting Started
            </h2>
            <div className="space-y-6">
              <div className="bg-body rounded-xl border border-[#B9FF2C]/30 shadow-[0_16px_40px_rgba(0,0,0,0.6)] p-6">
                <h3 className="text-lg font-bold text-white mb-3">How do we know if we need GenAI Assure?</h3>
                <p className="text-white/90 leading-relaxed mb-3">
                  You likely do if:
                </p>
                <ul className="text-white/90 leading-relaxed space-y-2 list-disc list-inside">
                  <li>You're already using AI tools in business workflows</li>
                  <li>You process customer or employee data through AI</li>
                  <li>You operate in the EU/UK or sell to European customers</li>
                  <li>You face audits, customer questionnaires, or board scrutiny</li>
                  <li>You have "Shadow AI" usage without oversight</li>
                  <li>You need to demonstrate GDPR‑aligned AI processing and prepare for EU AI Act deployer duties</li>
                </ul>
              </div>

              <div className="bg-body rounded-xl border border-[#B9FF2C]/30 shadow-[0_16px_40px_rgba(0,0,0,0.6)] p-6">
                <h3 className="text-lg font-bold text-white mb-3">What's the first step?</h3>
                <p className="text-white/90 leading-relaxed">
                  Book a short readiness call to confirm scope, then schedule Tier‑0 Readiness & Assessment. You'll receive a prioritised roadmap with tiering, critical gaps, and recommended timelines.
                </p>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b-2 border-[#B9FF2C]">
              Contact
            </h2>
            <div className="bg-body rounded-xl border border-[#B9FF2C]/30 shadow-[0_16px_40px_rgba(0,0,0,0.6)] p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-[#B9FF2C]" />
                  <a href="mailto:contact@elsaai.co.uk" className="text-white/90 hover:text-[#B9FF2C] transition-colors">
                    contact@elsaai.co.uk
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="h-5 w-5 text-[#B9FF2C]" />
                  <a href="https://elsaai.co.uk/" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-[#B9FF2C] transition-colors">
                    https://elsaai.co.uk/
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="h-5 w-5 text-[#B9FF2C]" />
                  <a href="https://www.linkedin.com/in/elsa-ai" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-[#B9FF2C] transition-colors">
                    www.linkedin.com/in/elsa-ai
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

