import {
  Shield,
  FileCheck,
  CircleCheck as CheckCircle2,
  Briefcase,
  Users,
  FileText,
  DollarSign,
  Search,
  Megaphone,
  Database,
  Headphones,
  ShoppingBag,
  Settings,
  Workflow,
  Bot,
  MessageSquare,
  Stethoscope,
  Globe2,
  Building2,
  Video,
  Layers,
} from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GenAI Assure™ Use Case Library | ELSA AI',
  description:
    '21 real-world scenarios where AI governance matters — from Microsoft 365 Copilot and public chatbots to agents, healthcare AI, and audit readiness.',
  keywords:
    'AI use cases, Microsoft Copilot governance, Google Workspace AI compliance, chatbot governance, enterprise AI controls, EU AI Act',
  alternates: {
    canonical: 'https://elsaai.co.uk/use-cases',
  },
};

type UseCaseItem = {
  id: string;
  title: string;
  icon: typeof Briefcase;
  scenario: string;
  keyConcern: string;
  howAssureHelps: string;
  note?: string;
};

export default function UseCasesPage() {
  const useCases: UseCaseItem[] = [
    {
      id: 'microsoft-365-copilot-google-workspace',
      title: 'Microsoft 365 Copilot & Google Workspace AI',
      icon: Briefcase,
      scenario:
        'Your organisation is rolling out Copilot or Gemini across Docs, Sheets, Email, Teams, and Chat. Sensitive documents, financial data, and HR records are now accessible through natural language prompts — but your DLP policies were never designed for AI-assisted retrieval.',
      keyConcern:
        'Uncontrolled data exposure through AI-assisted search across overprivileged document libraries',
      howAssureHelps:
        'Enforce SSO/MFA and token hygiene (GA-TP), redact PII in prompts and outputs via DLP, log AI usage to SIEM with the event schema (GA-DM), publish transparency labels, and package DPIA/RoPA/transfer registers into an Evidence Pack (GA-DC). Shadow-AI discovery ensures unsanctioned add-ins are found and triaged within playbook SLAs.',
    },
    {
      id: 'public-ai-chatbots',
      title: 'ChatGPT, Gemini, and Other Public AI Chatbots',
      icon: MessageSquare,
      scenario:
        'Employees across multiple departments are pasting customer data, source code, and internal strategy documents into public AI chatbots. IT has no visibility into which tools are in use or what data is leaving the organisation.',
      keyConcern:
        'Shadow AI proliferation and unmonitored data egress to unsanctioned third-party platforms',
      howAssureHelps:
        'Shadow-AI discovery via CASB/DNS with triage playbook SLAs, sanctioned-tool catalogue with SSO/MFA enforcement (GA-TP), DLP pattern matching across endpoint and web channels, SIEM logging of all AI interactions (GA-DM), and incident runbooks for data exposure (GA-RR).',
    },
    {
      id: 'service-desk-itsm',
      title: 'Service Desk & ITSM Copilots',
      icon: Settings,
      scenario:
        'Your teams use AI-assisted resolution in ServiceNow, Jira, or Freshservice to speed up ticket handling. AI suggestions now trigger actions against production systems, but no governance exists around what those actions can do or who reviews them.',
      keyConcern:
        'Ungoverned AI-suggested actions against production systems without human-in-the-loop controls',
      howAssureHelps:
        'Action allow-lists and human-in-the-loop gates (GA-TP), detections for risky webhook changes and bulk data pulls (GA-DM), runbooks for rollback and redress (GA-RR), and dashboards showing policy-violation trends and human override outcomes.',
    },
    {
      id: 'crm-sales-ai',
      title: 'CRM & Sales AI',
      icon: Users,
      scenario:
        'Salesforce Einstein, Dynamics Copilot, or similar tools generate pipeline insights, draft customer emails, and score leads using your CRM data. Customer PII flows through AI prompts and outputs without redaction, and AI-drafted communications reach clients without review.',
      keyConcern:
        'Customer data leakage through AI-assisted CRM and unreviewed AI-generated client communications',
      howAssureHelps:
        'Egress allow-lists and DLP on prompt/output channels (GA-TP), usage logging with use_case_id and decision fields for oversight (GA-DM), transparency controls in customer-facing content (GA-DC), and incident playbooks for data exposure (GA-RR).',
    },
    {
      id: 'ai-people-decisions',
      title: 'AI in People Decisions: Hiring, Performance, and Workforce Analytics',
      icon: Users,
      scenario:
        'Your HR team uses AI tools to screen CVs, analyse employee performance, answer policy questions, and surface workforce insights. Without documented bias testing, human-in-the-loop review, transparency notices, and candidate or employee notification, every cycle carries regulatory exposure and trust erosion.',
      keyConcern:
        'Algorithmic bias in high-risk people decisions, EU AI Act high-risk compliance, and GDPR lawful basis gaps',
      howAssureHelps:
        'Role-based access and least-privilege enforcement (GA-TP), DPIA triggers for high-risk processing and explainability profiles (GA-DC), oversight procedures with human review for legal effects (GA-PG), bias testing per TEVV-Lite playbook, and redress paths for employees and candidates (GA-RR).',
    },
    {
      id: 'legal-document-review',
      title: 'AI-Assisted Legal and Document Review',
      icon: FileText,
      scenario:
        'Your legal and knowledge teams use AI to analyse contracts, summarise internal reports, draft responses, and extract key clauses from confidential materials. Privileged communications and sensitive terms pass through third-party AI services without data processing agreements, redaction controls, or attribution trails.',
      keyConcern:
        'Professional privilege exposure, sensitive document leakage, and absent provenance controls',
      howAssureHelps:
        'DLP redaction and vault-managed tokens (GA-TP), logging of retrieval sources and decisions (GA-DM), Evidence Pack with transparency screenshots, vendor files, and DPA repository (GA-DC). Advisory tooling for counsel — not a substitute for legal advice.',
    },
    {
      id: 'finance-reporting-copilots',
      title: 'Finance & Reporting Copilots',
      icon: DollarSign,
      scenario:
        'Finance teams use AI tools to accelerate close cycles, generate reconciliations, summarise earnings data, and draft board narratives. Without reproducibility controls and data lineage tracking, a single hallucinated figure could reach investors or regulators.',
      keyConcern:
        'Non-reproducible AI outputs in regulated financial disclosures, misstatement risk, and audit trail gaps',
      howAssureHelps:
        'Egress control and webhook pinning (GA-TP), detections for bulk exports and anomalies (GA-DM), runbooks for misstatement risk (GA-RR), and audit evidence (SIEM/DLP exports plus WORM proof) ready for internal and external audit (GA-DC).',
    },
    {
      id: 'enterprise-rag',
      title: 'Internal Knowledge Bases & Enterprise RAG',
      icon: Search,
      scenario:
        'Your teams are building internal copilots and retrieval-augmented generation systems that index company wikis, policy documents, and customer records. Without data classification enforcement, access boundary controls, and output accuracy monitoring, confidential information surfaces to users who should never see it.',
      keyConcern:
        'Data boundary violations, hallucinated answers from authoritative-looking internal AI, and ungoverned retrieval pipelines',
      howAssureHelps:
        'Groundedness policy and transparency labels (GA-PG/DC), retrieval constraints and safe modes (GA-RB), SIEM traces of prompts, sources, and decisions (GA-DM), DPIA where datasets are sensitive (GA-DC), and explainability profiles per use case.',
    },
    {
      id: 'marketing-content-scale',
      title: 'Marketing Content Generation at Scale',
      icon: Megaphone,
      scenario:
        'Your marketing team uses generative AI to produce campaigns, social posts, and product descriptions. Without brand-safety filtering, claims verification, and AI labelling, you risk publishing misleading or non-compliant content under your brand.',
      keyConcern:
        'Unverified AI-generated claims, missing content labelling, and brand-safety failures',
      howAssureHelps:
        'Labelling requirements for AI-generated content (GA-DC), DLP for uploads and outputs (GA-TP), policy gates and exceptions (GA-PG), and dashboards to monitor off-brand or flagged outputs (GA-DM).',
    },
    {
      id: 'contact-centre-ai',
      title: 'Contact Centre AI Augmentation',
      icon: Headphones,
      scenario:
        'AI tools assist agents with real-time suggestions, call summaries, and quality assurance scoring. Agents rely on AI-generated compliance language without verification, and sensitive caller data passes through AI processing without redaction.',
      keyConcern:
        'AI-generated compliance misinformation to customers and unredacted sensitive data in call processing',
      howAssureHelps:
        'Prompt/output redaction and human-in-the-loop for consequential actions (GA-TP), evaluation and QA evidence (GA-DC), incident runbooks for misinformation or sensitive data exposure (GA-RR), and transparency notices for callers.',
    },
    {
      id: 'workflow-orchestrators',
      title: 'Workflow Automation with AI Orchestrators',
      icon: Workflow,
      scenario:
        'Platforms like Make.com, n8n, Zapier, or Power Automate now include AI steps that process customer data across dozens of connected SaaS tools. A misconfigured webhook or runaway loop could exfiltrate data to unmonitored destinations in minutes.',
      keyConcern:
        'Data exfiltration through AI-enabled automation chains, uncontrolled webhook destinations, and token sprawl',
      howAssureHelps:
        'Treat each flow as a governed use case with a unique use_case_id and lifecycle gates (GA-PG). Enforce SSO/MFA, vaulted secrets with ≤90-day rotation, connector/domain allow-lists, and block unknown webhooks (GA-TP). Log every run to SIEM with the automation event schema (GA-DM). Package approvals, RoPA/DPIA, SIEM/DLP exports, and WORM proof into the Evidence Pack (GA-DC). Operate with runbooks for exfiltration and token compromise (GA-RR), with fallback modes for critical processes (GA-RB).',
    },
    {
      id: 'data-pipelines-llm-gateways',
      title: 'Data Pipelines & LLM Gateways',
      icon: Database,
      scenario:
        'Your platform team operates API hubs or model-routing layers that centralise access to multiple AI providers. Without unified controls, each model endpoint becomes an unmonitored egress point with its own token lifecycle, data residency, and sub-processor chain.',
      keyConcern:
        'Fragmented control across multiple AI model endpoints, ungoverned token lifecycles, and invisible data paths',
      howAssureHelps:
        'Egress allow-lists, token rotation ≤90 days, and connector controls (GA-TP); event schema logging with model and tool IDs (GA-DM); vendor and transfer registers for each model endpoint (GA-DC).',
    },
    {
      id: 'low-code-ai-builders',
      title: 'Low-Code AI App Builders',
      icon: Layers,
      scenario:
        'Business users build AI-powered apps in Power Platform, AppSheet, or similar environments. Citizen-developed apps proliferate across departments without security review, connecting to sensitive data sources via AI-enabled connectors that IT never approved.',
      keyConcern:
        'Ungoverned citizen-developed AI apps connecting to sensitive data sources without security review',
      howAssureHelps:
        'Sanctioned-tool catalogue with Shadow-AI discovery and triage SLAs, environment separation, connector allow-lists, and Evidence Packs per app and use case (GA-PG/TP/DC).',
    },
    {
      id: 'procurement-supply-chain-ai',
      title: 'AI Procurement & Supply Chain Intelligence',
      icon: ShoppingBag,
      scenario:
        'AI tools analyse supplier risk, optimise spend, and forecast demand across your supply chain. Decisions informed by AI-generated insights affect contracts worth millions, yet no governance exists around model accuracy, data lineage, or segregation of duties.',
      keyConcern:
        'Ungoverned AI-informed procurement decisions, absent data lineage, and segregation of duties failures',
      howAssureHelps:
        'Approved questionnaires, RoPA entries, and transfer controls (GA-DC), logs and dashboards to show throughput and exceptions (GA-DM/PG), reproducibility validation and SoD enforcement per TEVV-Lite playbook.',
    },
    {
      id: 'ai-video-avatar',
      title: 'AI-Generated Video and Avatar Content',
      icon: Video,
      scenario:
        'Your communications team creates training videos, executive messages, or marketing content using AI avatar and voice synthesis tools. Without deepfake detection validation, likeness permissions, and approval workflows, you risk producing misleading or unauthorised content.',
      keyConcern:
        'Deepfake risk, likeness misuse, and absence of content provenance and approval controls',
      howAssureHelps:
        'Licence and likeness validation, misuse prompt testing, and bias sampling per TEVV-Lite playbook. Deepfake detection validation against NIST FVRT benchmarks (≥95% detection rate, quarterly retest). Human approval workflow and Evidence Pack (GA-DC).',
    },
    {
      id: 'patient-facing-healthcare-ai',
      title: 'Patient-Facing AI in Healthcare Settings',
      icon: Stethoscope,
      scenario:
        'Clinical or administrative AI tools process patient data for triage support, appointment scheduling, or symptom checking. Without DPIA completion, data minimisation enforcement, and explicit lawful basis documentation, every interaction carries regulatory risk.',
      keyConcern:
        'Special category health data processing without compliant safeguards and impact assessments',
      howAssureHelps:
        'DPIA triggers for high-risk processing with special category data (GA-DC), DLP rules for HIPAA identifiers per 45 CFR 164.514(b) (GA-TP), human-in-the-loop for clinical decisions, explainability profiles per use case, and incident runbooks for sensitive data exposure (GA-RR).',
    },
    {
      id: 'ai-agents-autonomous',
      title: 'AI Agent and Autonomous Workflow Deployments',
      icon: Bot,
      scenario:
        'Your teams are experimenting with AI agents that autonomously plan, call tools and APIs, and complete multi-step tasks with minimal human oversight. The blast radius of a misconfigured agent extends across every connected system.',
      keyConcern:
        'Autonomous AI actions without human-in-the-loop safeguards, kill-switches, or audit trails',
      howAssureHelps:
        'Register each agent with a use_case_id and capability manifest (allowed tools/APIs, data domains, human-in-the-loop thresholds) and move through dev→test→prod gates (GA-PG). Lock down with SSO/MFA, action allow-lists, egress allow-lists, webhook pinning, and vaulted tokens (GA-TP). Log an agent event schema to SIEM for every plan, tool call, and write (GA-DM). Operate with kill-switch runbooks and safe-mode fallback patterns (GA-RR/RB).',
    },
    {
      id: 'cross-border-ai',
      title: 'Cross-Border AI Deployments',
      icon: Globe2,
      scenario:
        'Your organisation uses AI tools that process data across multiple jurisdictions — EU, UK, US, or Asia-Pacific. Transfer mechanisms, sub-processor locations, and jurisdiction-specific obligations remain undocumented and unmonitored.',
      keyConcern:
        'Non-compliant cross-border data transfers and unmapped jurisdictional obligations',
      howAssureHelps:
        'Transfer Register with SCC/IDTA repository (GA-DC), vendor due diligence covering data residency, sub-processors, and reassessment cadence, regulatory mapping and change tracking with jurisdiction-specific obligations, and cross-border management integrated into every Evidence Pack.',
    },
    {
      id: 'third-party-vendor-diligence',
      title: 'Third-Party AI Vendor Due Diligence',
      icon: FileCheck,
      scenario:
        'Your procurement pipeline includes a growing number of AI-embedded SaaS products. Vendor security questionnaires do not cover AI-specific risks like training data practices, sub-processor data flows, or model update transparency.',
      keyConcern:
        'Inadequate AI-specific vendor risk assessment and unmonitored sub-processor data handling',
      howAssureHelps:
        'Vendor due diligence artefacts covering SOC 2/ISO/42001 attestations, sub-processors, data residency, and monitoring cadence (GA-DC), training data exposure assessment per Value & Risk rubric, and ongoing reassessment at ≥95% on-schedule rate.',
    },
    {
      id: 'soc2-iso-audit-ai',
      title: 'Preparing for SOC 2 or ISO 27001 Audit with AI in Scope',
      icon: Shield,
      scenario:
        'Your auditors have confirmed that AI tool usage falls within the audit boundary. You need retrievable evidence packs covering access controls, DLP effectiveness, logging integrity, and vendor due diligence — and you need them within defined SLAs.',
      keyConcern:
        'Audit evidence gaps for AI-specific controls and inability to meet evidence retrieval timelines',
      howAssureHelps:
        'Tiered evidence pack SLAs (4h/8h/24h) with failure escalation (GA-DC), WORM storage with SHA-256 hash verification and NTP synchronisation, correlation keys (use_case_id, control_id, vendor_id) for audit trail maintenance, and internal audit sampling at ≥10% of active use cases per quarter (ISO/IEC 42001:2023 9.2).',
    },
    {
      id: 'ai-governance-from-scratch',
      title: 'Building an AI Governance Function from Scratch',
      icon: Building2,
      scenario:
        'Your board has mandated responsible AI adoption, but you have no framework, no policy, no tooling, and limited headcount. You need a structured path from zero to audit-ready governance without a multi-year programme.',
      keyConcern:
        'No existing AI governance capability and pressure to demonstrate compliance rapidly',
      howAssureHelps:
        'Tiered implementation (Tier-1 from ≈1.0 FTE in 30 days through to Tier-3 enterprise attestation), the 30-60-90 day plan with clear milestones, Value & Risk Assessment rubric for prioritisation, and pre-built control catalogue (GA-PG through GA-RB) with TEVV-Lite testing playbooks.',
    },
  ];

  return (
    <div className="w-full bg-body">
      <div className="relative bg-body border-b borderElsa-card overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at center, rgba(94,250,195,0.1) 0%, transparent 70%)',
          }}
        ></div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#B9FF2C]/90 mb-3">
              GenAI Assure™
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-textElsa-primary mb-4">
              <span className="text-[#B9FF2C]">Use Case Library</span>
            </h1>
            <p className="text-xl sm:text-2xl font-bold text-textElsa-primary mb-6">
              21 Real-World Scenarios Where AI Governance Matters
            </p>
            <p className="text-lg sm:text-xl text-textElsa-secondary leading-relaxed max-w-4xl mx-auto">
              Every organisation deploying AI faces governance gaps — from shadow AI and data leakage to regulatory
              exposure and audit readiness. GenAI Assure™ provides the security-led framework, operational controls, and
              evidence automation to close these gaps. The following scenarios represent the situations our clients
              encounter most frequently.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <section className="mb-20">
          <div className="grid gap-8">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;

              return (
                <div
                  key={useCase.id}
                  id={useCase.id}
                  className="group relative bg-body rounded-lg p-6 shadow-[0_16px_40px_rgba(0,0,0,0.6)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.6),0_0_24px_rgba(94,250,195,0.45)] transition-all duration-300 border border-[#B9FF2C]/30 hover:border-[#B9FF2C] transform hover:-translate-y-0.5 scroll-mt-24"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-[#B9FF2C] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-body" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-textElsa-primary mb-3">
                        {String(index + 1).padStart(2, '0')}. {useCase.title}
                      </h3>

                      {useCase.scenario && (
                        <p className="text-textElsa-secondary leading-relaxed mb-4">{useCase.scenario}</p>
                      )}

                      <div className="mb-4">
                        <p className="text-base font-semibold text-[#B9FF2C] mb-2">Key concern:</p>
                        <p className="text-textElsa-primary leading-relaxed">{useCase.keyConcern}</p>
                      </div>

                      <div>
                        <p className="text-base font-semibold text-[#B9FF2C] mb-2">How GenAI Assure™ helps:</p>
                        <p className="text-textElsa-primary leading-relaxed">{useCase.howAssureHelps}</p>
                      </div>

                      {useCase.note && (
                        <div className="mt-4 pt-4 border-t border-[#B9FF2C]/30">
                          <p className="text-sm italic text-textElsa-secondary">{useCase.note}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mb-20">
          <div className="bg-body rounded-2xl shadow-[0_16px_40px_rgba(0,0,0,0.6)] p-8 sm:p-12 border border-[#B9FF2C]/30">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-[#B9FF2C] rounded-lg flex items-center justify-center">
                <Shield className="h-6 w-6 text-body" />
              </div>
              <h2 className="text-3xl font-bold text-textElsa-primary">Why Businesses Adopt GenAI Assure™</h2>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="h-6 w-6 text-[#B9FF2C] flex-shrink-0 mt-1" strokeWidth={2.5} />
                <div>
                  <h3 className="text-xl font-bold text-[#B9FF2C] mb-2">Risk reduced, adoption unlocked</h3>
                  <p className="text-textElsa-primary leading-relaxed">
                    Security-led guardrails (identity, secrets, DLP, egress) let teams ship AI use cases confidently.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="h-6 w-6 text-[#B9FF2C] flex-shrink-0 mt-1" strokeWidth={2.5} />
                <div>
                  <h3 className="text-xl font-bold text-[#B9FF2C] mb-2">Operational visibility</h3>
                  <p className="text-textElsa-primary leading-relaxed">
                    The AI event schema gives uniform logs across tools — prompts, outputs, uploads, webhooks, decisions,
                    and tokens.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="h-6 w-6 text-[#B9FF2C] flex-shrink-0 mt-1" strokeWidth={2.5} />
                <div>
                  <h3 className="text-xl font-bold text-[#B9FF2C] mb-2">Regulatory alignment</h3>
                  <p className="text-textElsa-primary leading-relaxed">
                    Deployer duties (EU AI Act), GDPR/UK GDPR artefacts (DPIA/RoPA/transfers), and the ISO/IEC 42001 AIMS
                    cycle — all baked into the Evidence Pack.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="h-6 w-6 text-[#B9FF2C] flex-shrink-0 mt-1" strokeWidth={2.5} />
                <div>
                  <h3 className="text-xl font-bold text-[#B9FF2C] mb-2">Audit-ready by design</h3>
                  <p className="text-textElsa-primary leading-relaxed">
                    WORM/object storage, SHA-256 hashes, and correlation keys (use_case_id, control_id, vendor_id) make
                    proof easy.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="h-6 w-6 text-[#B9FF2C] flex-shrink-0 mt-1" strokeWidth={2.5} />
                <div>
                  <h3 className="text-xl font-bold text-[#B9FF2C] mb-2">Time-boxed execution</h3>
                  <p className="text-textElsa-primary leading-relaxed">
                    A practical 30–60–90 day plan with clear milestones: policy, SSO/DLP/SIEM, triage playbook,
                    dashboards, and evidence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-body rounded-2xl shadow-[0_16px_40px_rgba(0,0,0,0.6)] p-8 sm:p-12 text-center border border-[#B9FF2C]/30">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-12 bg-[#B9FF2C] rounded-lg flex items-center justify-center">
              <FileCheck className="h-6 w-6 text-body" />
            </div>
            <h2 className="text-3xl font-bold text-textElsa-primary">Ready to govern AI with confidence?</h2>
          </div>

          <p className="text-lg text-textElsa-secondary leading-relaxed mb-2 max-w-3xl mx-auto">
            Practical, Achievable, Auditable AI Governance.
          </p>
          <p className="text-sm text-textElsa-secondary mb-8">
            <a href="https://www.elsaai.co.uk" className="text-[#B9FF2C] hover:underline">
              www.elsaai.co.uk
            </a>{' '}
            <span className="text-textElsa-secondary/60">|</span>{' '}
            <a href="mailto:contact@elsaai.co.uk" className="text-[#B9FF2C] hover:underline">
              contact@elsaai.co.uk
            </a>
          </p>
          <p className="text-lg text-textElsa-secondary leading-relaxed mb-8 max-w-3xl mx-auto">
            Whether you&apos;re deploying Microsoft Copilot, custom agents, or workflow automations, GenAI Assure™ provides
            the governance framework to move fast while staying compliant.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/get-your-readiness-assessment"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-semibold text-textElsa-primary bg-transparent border border-[#B9FF2C] hover:text-[#B9FF2C] hover:shadow-[0_0_20px_rgba(185,255,44,0.6)] hover:drop-shadow-[0_0_10px_rgba(185,255,44,0.8)] rounded-sm transition-all shadow-sm hover:shadow-[0_0_20px_rgba(185,255,44,0.6)] transform hover:scale-[1.02] hover:bg-[#B9FF2C]/10"
            >
              Get Your Readiness Assessment
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-semibold text-textElsa-primary bg-transparent border border-[#B9FF2C] hover:text-[#B9FF2C] hover:shadow-[0_0_20px_rgba(185,255,44,0.6)] hover:drop-shadow-[0_0_10px_rgba(185,255,44,0.8)] rounded-sm transition-all shadow-sm hover:shadow-[0_0_20px_rgba(185,255,44,0.6)] transform hover:scale-[1.02] hover:bg-[#B9FF2C]/10"
            >
              Contact Us
            </a>
          </div>

          <p className="mt-10 text-xs text-textElsa-secondary/70">© 2026 ELSA AI LTD • GenAI Assure™</p>
        </section>
      </div>
    </div>
  );
}
