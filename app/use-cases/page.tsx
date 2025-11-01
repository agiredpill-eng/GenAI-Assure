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
  Bot
} from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Governance Use Cases - GenAI Assure | ELSA AI',
  description: 'Discover how GenAI Assure helps organizations govern Microsoft 365 Copilot, Google Workspace AI, customer service chatbots, and other enterprise AI tools.',
  keywords: 'AI use cases, Microsoft Copilot governance, Google Workspace AI compliance, chatbot governance, enterprise AI controls',
  alternates: {
    canonical: 'https://elsaai.co.uk/use-cases',
  },
};

export default function UseCasesPage() {
  const useCases = [
    {
      id: "microsoft-365",
      title: "Microsoft 365 Copilot / Google Workspace AI",
      icon: Briefcase,
      value: "Accelerate safe productivity gains (Docs/Sheets/Email/Teams/Chat) without data leaks.",
      howAssureHelps: "Enforce SSO/MFA and token hygiene (GA-TP), redact PII in prompts/outputs (DLP), log AI usage to SIEM with the event schema (GA-DM), publish transparency labels, and package DPIA/RoPA/transfer registers into an Evidence Pack (GA-DC). Shadow-AI discovery ensures unsanctioned add-ins are found and triaged (playbook SLAs).",
      color: "blue"
    },
    {
      id: "itsm",
      title: "Service Desk & ITSM copilots (ServiceNow, Jira, Freshservice)",
      icon: Settings,
      value: "Faster ticket resolution with auditable AI suggestions and safe actioning.",
      howAssureHelps: "Action allow-lists + human-in-the-loop gates (GA-TP), detections for risky webhook changes and bulk data pulls (GA-DM), runbooks for rollback/redress (GA-RR), and dashboards showing policy-violation trends and HIL outcomes.",
      color: "teal"
    },
    {
      id: "crm",
      title: "CRM & Sales/Success AI (Salesforce Einstein, Dynamics)",
      icon: Users,
      value: "Better pipeline hygiene and outreach while protecting customer data.",
      howAssureHelps: "Egress allow-lists and DLP on prompt/output (GA-TP), usage logging with use_case_id and decision fields for oversight (GA-DM), transparency in customer-facing content (GA-DC), incident playbooks for data exposure (GA-RR).",
      color: "green"
    },
    {
      id: "hr",
      title: "HR & People Ops assistants (recruiting, onboarding, policy Q&A)",
      icon: Users,
      value: "Faster responses and documentation, with fairness and privacy controls.",
      howAssureHelps: "Role-based access + least-privilege (GA-TP), DPIA triggers for high-risk processing (GA-DC), explainability profiles and oversight procedures (GA-PG/DC), and redress paths for employees (GA-RR).",
      color: "orange"
    },
    {
      id: "legal",
      title: "Legal & Contract support (drafting/summarisation/search)*",
      icon: FileText,
      value: "Accelerate reviews while maintaining confidentiality and provenance.",
      howAssureHelps: "DLP redaction + vault-managed tokens (GA-TP), logging of retrieval sources and decisions (GA-DM), Evidence Pack with transparency screenshots and vendor files (GA-DC).",
      color: "red",
      note: "*Advisory tooling for counsel—not a substitute for legal advice."
    },
    {
      id: "finance",
      title: "Finance & Reporting copilots (close, reconciliations, narrative)",
      icon: DollarSign,
      value: "Shorter cycles with traceable AI assistance and strict data boundaries.",
      howAssureHelps: "Egress control + webhook pinning (GA-TP), detections for bulk exports/anomalies (GA-DM), runbooks for misstatement risk (GA-RR), and audit evidence (exports + WORM proof) ready for internal/external audit (GA-DC).",
      color: "blue"
    },
    {
      id: "knowledge",
      title: "Knowledge assistants & enterprise search (RAG)",
      icon: Search,
      value: "Trusted answers from approved sources—tracked, labeled, and reviewable.",
      howAssureHelps: "Groundedness policy + transparency labels (GA-PG/DC), retrieval constraints and safe modes (GA-RB), SIEM traces of prompts/sources/decisions (GA-DM), and DPIA where datasets are sensitive (GA-DC).",
      color: "teal"
    },
    {
      id: "content",
      title: "Content supply chain (marketing, product, web)",
      icon: Megaphone,
      value: "Faster content with brand-safe outputs and clear disclosure.",
      howAssureHelps: "Labeling requirements for AI-generated content (GA-DC), DLP for uploads/outputs (GA-TP), policy gates + exceptions (GA-PG), and dashboards to monitor off-brand/flagged outputs (GA-DM).",
      color: "green"
    },
    {
      id: "pipelines",
      title: "Data pipelines & LLM gateways (API hubs, model routing)",
      icon: Database,
      value: "Centralized control of model access, cost, and data paths.",
      howAssureHelps: "Egress allow-lists, token rotation ≤90 days, connector controls (GA-TP); event schema logging with model/tool IDs (GA-DM); vendor and transfer registers for each model endpoint (GA-DC).",
      color: "orange"
    },
    {
      id: "contact-center",
      title: "Contact center augmentation (assist, summaries, QA)",
      icon: Headphones,
      value: "Higher agent productivity and consistent compliance language.",
      howAssureHelps: "Prompt/output redaction, HIL for consequential actions (GA-TP), evaluation/QA evidence (GA-DC), and incident runbooks for misinformation or sensitive data exposure (GA-RR).",
      color: "red"
    },
    {
      id: "procurement",
      title: "Procurement & vendor onboarding with AI",
      icon: ShoppingBag,
      value: "Speed up due diligence with traceable assessments.",
      howAssureHelps: "Approved questionnaires, RoPA entries, transfer controls (GA-DC), and logs/dashboards to show throughput and exceptions (GA-DM/PG).",
      color: "blue"
    },
    {
      id: "low-code",
      title: "Governance for low-code AI app builders (Power Platform, AppSheet)",
      icon: Settings,
      value: "Empower the business safely—without sprawl.",
      howAssureHelps: "Sanctioned-tool catalog, Shadow-AI discovery/triage SLAs, environment separation, connector allow-lists, and Evidence Packs per app/use case.",
      color: "teal"
    },
    {
      id: "workflow",
      title: "Workflow Automation (Make.com, n8n, Zapier)",
      icon: Workflow,
      value: "Scale reliable automations across teams while protecting tokens, webhooks, and data flows.",
      howAssureHelps: "Treat each flow as a governed use case with a unique use_case_id and lifecycle gates (GA-PG). Enforce SSO/MFA, vaulted secrets with ≤90-day rotation, connector/domain allow-lists, and block unknown webhooks (GA-TP). Log every run to SIEM with the AI/automation event schema (user/role, platform, flow_id/run_id, action, data-classification, decision, token/connector IDs) plus detections for PII/secrets, bulk transfers, and webhook changes (GA-DM). Package approvals, labels (screenshots), RoPA/DPIA/FRIA, transfer register, SIEM/DLP exports, and WORM proof into the Evidence Pack (GA-DC). Use AI-specific runbooks (exfiltration, token compromise) and redress paths (GA-RR), with fallback modes for critical processes (GA-RB).",
      color: "green"
    },
    {
      id: "agents",
      title: "Custom Agents (Decision-and-Action Workflows)",
      icon: Bot,
      value: "Safely let agents plan, call tools/APIs, and complete tasks—under tight oversight.",
      howAssureHelps: "Register each agent with a use_case_id and a capability manifest (allowed tools/APIs, data domains, human-in-the-loop thresholds) and move it through dev→test→prod gates (GA-PG). Lock down access with SSO/MFA, least-privilege roles, action allow-lists, egress allow-lists, webhook pinning, and vaulted tokens (≤90-day rotation) (GA-TP). Log an agent event schema to SIEM for every plan/tool_call/webhook/write including agent_id, model, session_id/run_id, tool_name, tool_args_hash, data-classification, decision and HIL outcome—then alert on dangerous actions, unsanctioned tools, PII/secrets, anomalies (GA-DM). Build the Evidence Pack (approvals, capability manifest, labels/screenshots, RoPA/DPIA/FRIA, transfers, SIEM/DLP exports, WORM proof, vendor files, explainability profile) (GA-DC). Operate with runbooks (kill-switch, token compromise, misleading/deepfake outputs; user redress) (GA-RR) and safe-mode/fallback patterns for resilience (GA-RB).",
      color: "orange"
    }
  ];

  return (
    <div className="w-full bg-body">
      <div className="relative bg-body border-b borderElsa-card overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at center, rgba(94,250,195,0.1) 0%, transparent 70%)',
        }}></div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-textElsa-primary mb-6">
              <span className="text-[#B9FF2C]">High-Impact Use Cases</span>
            </h1>
            <p className="text-lg sm:text-xl text-textElsa-secondary leading-relaxed max-w-4xl mx-auto">
              GenAI Assure supports organizations across diverse AI deployment scenarios—from productivity tools
              to custom agents—with security-led guardrails, operational visibility, and audit-ready evidence.
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
                  key={index}
                  id={useCase.id}
                  className="group relative bg-body rounded-lg p-6 shadow-[0_16px_40px_rgba(0,0,0,0.6)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.6),0_0_24px_rgba(94,250,195,0.45)] transition-all duration-300 border border-[#B9FF2C]/30 hover:border-[#B9FF2C] transform hover:-translate-y-0.5 scroll-mt-24"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-[#B9FF2C] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-body" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-textElsa-primary mb-3">
                        {index + 1}. {useCase.title}
                      </h3>

                      <div className="mb-4">
                        <p className="text-base font-semibold text-[#B9FF2C] mb-2">Value:</p>
                        <p className="text-textElsa-primary leading-relaxed">{useCase.value}</p>
                      </div>

                      <div>
                        <p className="text-base font-semibold text-[#B9FF2C] mb-2">How GenAI Assure helps:</p>
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
              <h2 className="text-3xl font-bold text-textElsa-primary">Why Businesses Adopt GenAI Assure for These Areas</h2>
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
                    The AI event schema gives uniform logs across tools (prompts, outputs, uploads, webhooks, decisions, tokens).
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="h-6 w-6 text-[#B9FF2C] flex-shrink-0 mt-1" strokeWidth={2.5} />
                <div>
                  <h3 className="text-xl font-bold text-[#B9FF2C] mb-2">Regulatory alignment</h3>
                  <p className="text-textElsa-primary leading-relaxed">
                    Deployer duties (EU AI Act), GDPR/UK GDPR artefacts (DPIA/RoPA/transfers), ISO/IEC 42001 AIMS cycle—all baked into the Evidence Pack.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="h-6 w-6 text-[#B9FF2C] flex-shrink-0 mt-1" strokeWidth={2.5} />
                <div>
                  <h3 className="text-xl font-bold text-[#B9FF2C] mb-2">Audit-ready by design</h3>
                  <p className="text-textElsa-primary leading-relaxed">
                    WORM/object storage, SHA-256 hashes, correlation keys (use_case_id, control_id, vendor_id, etc.) make proof easy.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="h-6 w-6 text-[#B9FF2C] flex-shrink-0 mt-1" strokeWidth={2.5} />
                <div>
                  <h3 className="text-xl font-bold text-[#B9FF2C] mb-2">Time-boxed execution</h3>
                  <p className="text-textElsa-primary leading-relaxed">
                    A practical 30-60-90 plan with clear milestones (policy, SSO/DLP/SIEM, triage playbook, dashboards, evidence).
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
            <h2 className="text-3xl font-bold text-textElsa-primary">Ready to Get Started?</h2>
          </div>

          <p className="text-lg text-textElsa-secondary leading-relaxed mb-8 max-w-3xl mx-auto">
            Whether you're deploying Microsoft Copilot, custom agents, or workflow automations,
            GenAI Assure provides the governance framework to move fast while staying compliant.
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
        </section>
      </div>
    </div>
  );
}
