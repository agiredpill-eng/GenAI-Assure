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

export default function UseCasesPage() {
  const useCases = [
    {
      title: "Microsoft 365 Copilot / Google Workspace AI",
      icon: Briefcase,
      value: "Accelerate safe productivity gains (Docs/Sheets/Email/Teams/Chat) without data leaks.",
      howAssureHelps: "Enforce SSO/MFA and token hygiene (GA-TP), redact PII in prompts/outputs (DLP), log AI usage to SIEM with the event schema (GA-DM), publish transparency labels, and package DPIA/RoPA/transfer registers into an Evidence Pack (GA-DC). Shadow-AI discovery ensures unsanctioned add-ins are found and triaged (playbook SLAs).",
      color: "blue"
    },
    {
      title: "Service Desk & ITSM copilots (ServiceNow, Jira, Freshservice)",
      icon: Settings,
      value: "Faster ticket resolution with auditable AI suggestions and safe actioning.",
      howAssureHelps: "Action allow-lists + human-in-the-loop gates (GA-TP), detections for risky webhook changes and bulk data pulls (GA-DM), runbooks for rollback/redress (GA-RR), and dashboards showing policy-violation trends and HIL outcomes.",
      color: "teal"
    },
    {
      title: "CRM & Sales/Success AI (Salesforce Einstein, Dynamics)",
      icon: Users,
      value: "Better pipeline hygiene and outreach while protecting customer data.",
      howAssureHelps: "Egress allow-lists and DLP on prompt/output (GA-TP), usage logging with use_case_id and decision fields for oversight (GA-DM), transparency in customer-facing content (GA-DC), incident playbooks for data exposure (GA-RR).",
      color: "green"
    },
    {
      title: "HR & People Ops assistants (recruiting, onboarding, policy Q&A)",
      icon: Users,
      value: "Faster responses and documentation, with fairness and privacy controls.",
      howAssureHelps: "Role-based access + least-privilege (GA-TP), DPIA triggers for high-risk processing (GA-DC), explainability profiles and oversight procedures (GA-PG/DC), and redress paths for employees (GA-RR).",
      color: "orange"
    },
    {
      title: "Legal & Contract support (drafting/summarisation/search)*",
      icon: FileText,
      value: "Accelerate reviews while maintaining confidentiality and provenance.",
      howAssureHelps: "DLP redaction + vault-managed tokens (GA-TP), logging of retrieval sources and decisions (GA-DM), Evidence Pack with transparency screenshots and vendor files (GA-DC).",
      color: "red",
      note: "*Advisory tooling for counsel—not a substitute for legal advice."
    },
    {
      title: "Finance & Reporting copilots (close, reconciliations, narrative)",
      icon: DollarSign,
      value: "Shorter cycles with traceable AI assistance and strict data boundaries.",
      howAssureHelps: "Egress control + webhook pinning (GA-TP), detections for bulk exports/anomalies (GA-DM), runbooks for misstatement risk (GA-RR), and audit evidence (exports + WORM proof) ready for internal/external audit (GA-DC).",
      color: "blue"
    },
    {
      title: "Knowledge assistants & enterprise search (RAG)",
      icon: Search,
      value: "Trusted answers from approved sources—tracked, labeled, and reviewable.",
      howAssureHelps: "Groundedness policy + transparency labels (GA-PG/DC), retrieval constraints and safe modes (GA-RB), SIEM traces of prompts/sources/decisions (GA-DM), and DPIA where datasets are sensitive (GA-DC).",
      color: "teal"
    },
    {
      title: "Content supply chain (marketing, product, web)",
      icon: Megaphone,
      value: "Faster content with brand-safe outputs and clear disclosure.",
      howAssureHelps: "Labeling requirements for AI-generated content (GA-DC), DLP for uploads/outputs (GA-TP), policy gates + exceptions (GA-PG), and dashboards to monitor off-brand/flagged outputs (GA-DM).",
      color: "green"
    },
    {
      title: "Data pipelines & LLM gateways (API hubs, model routing)",
      icon: Database,
      value: "Centralized control of model access, cost, and data paths.",
      howAssureHelps: "Egress allow-lists, token rotation ≤90 days, connector controls (GA-TP); event schema logging with model/tool IDs (GA-DM); vendor and transfer registers for each model endpoint (GA-DC).",
      color: "orange"
    },
    {
      title: "Contact center augmentation (assist, summaries, QA)",
      icon: Headphones,
      value: "Higher agent productivity and consistent compliance language.",
      howAssureHelps: "Prompt/output redaction, HIL for consequential actions (GA-TP), evaluation/QA evidence (GA-DC), and incident runbooks for misinformation or sensitive data exposure (GA-RR).",
      color: "red"
    },
    {
      title: "Procurement & vendor onboarding with AI",
      icon: ShoppingBag,
      value: "Speed up due diligence with traceable assessments.",
      howAssureHelps: "Approved questionnaires, RoPA entries, transfer controls (GA-DC), and logs/dashboards to show throughput and exceptions (GA-DM/PG).",
      color: "blue"
    },
    {
      title: "Governance for low-code AI app builders (Power Platform, AppSheet)",
      icon: Settings,
      value: "Empower the business safely—without sprawl.",
      howAssureHelps: "Sanctioned-tool catalog, Shadow-AI discovery/triage SLAs, environment separation, connector allow-lists, and Evidence Packs per app/use case.",
      color: "teal"
    },
    {
      title: "Workflow Automation (Make.com, n8n, Zapier)",
      icon: Workflow,
      value: "Scale reliable automations across teams while protecting tokens, webhooks, and data flows.",
      howAssureHelps: "Treat each flow as a governed use case with a unique use_case_id and lifecycle gates (GA-PG). Enforce SSO/MFA, vaulted secrets with ≤90-day rotation, connector/domain allow-lists, and block unknown webhooks (GA-TP). Log every run to SIEM with the AI/automation event schema (user/role, platform, flow_id/run_id, action, data-classification, decision, token/connector IDs) plus detections for PII/secrets, bulk transfers, and webhook changes (GA-DM). Package approvals, labels (screenshots), RoPA/DPIA/FRIA, transfer register, SIEM/DLP exports, and WORM proof into the Evidence Pack (GA-DC). Use AI-specific runbooks (exfiltration, token compromise) and redress paths (GA-RR), with fallback modes for critical processes (GA-RB).",
      color: "green"
    },
    {
      title: "Custom Agents (Decision-and-Action Workflows)",
      icon: Bot,
      value: "Safely let agents plan, call tools/APIs, and complete tasks—under tight oversight.",
      howAssureHelps: "Register each agent with a use_case_id and a capability manifest (allowed tools/APIs, data domains, human-in-the-loop thresholds) and move it through dev→test→prod gates (GA-PG). Lock down access with SSO/MFA, least-privilege roles, action allow-lists, egress allow-lists, webhook pinning, and vaulted tokens (≤90-day rotation) (GA-TP). Log an agent event schema to SIEM for every plan/tool_call/webhook/write including agent_id, model, session_id/run_id, tool_name, tool_args_hash, data-classification, decision and HIL outcome—then alert on dangerous actions, unsanctioned tools, PII/secrets, anomalies (GA-DM). Build the Evidence Pack (approvals, capability manifest, labels/screenshots, RoPA/DPIA/FRIA, transfers, SIEM/DLP exports, WORM proof, vendor files, explainability profile) (GA-DC). Operate with runbooks (kill-switch, token compromise, misleading/deepfake outputs; user redress) (GA-RR) and safe-mode/fallback patterns for resilience (GA-RB).",
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; border: string; icon: string }> = {
      blue: { bg: "from-blue-50 to-white", border: "border-blue-200", icon: "bg-blue-100 text-blue-600" },
      teal: { bg: "from-teal-50 to-white", border: "border-teal-200", icon: "bg-teal-100 text-teal-600" },
      green: { bg: "from-green-50 to-white", border: "border-green-200", icon: "bg-green-100 text-green-600" },
      orange: { bg: "from-orange-50 to-white", border: "border-orange-200", icon: "bg-orange-100 text-orange-600" },
      red: { bg: "from-red-50 to-white", border: "border-red-200", icon: "bg-red-100 text-red-600" }
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            High-Impact Use Cases
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
            GenAI Assure supports organizations across diverse AI deployment scenarios—from productivity tools
            to custom agents—with security-led guardrails, operational visibility, and audit-ready evidence.
          </p>
        </div>

        <section className="mb-20">
          <div className="grid gap-8">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              const colorClasses = getColorClasses(useCase.color);

              return (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${colorClasses.bg} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${colorClasses.border} p-8`}
                >
                  <div className="flex items-start gap-6">
                    <div className={`w-12 h-12 ${colorClasses.icon} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <Icon className="h-6 w-6" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {index + 1}. {useCase.title}
                      </h3>

                      <div className="mb-4">
                        <p className="text-base font-semibold text-gray-900 mb-2">Value:</p>
                        <p className="text-gray-700 leading-relaxed">{useCase.value}</p>
                      </div>

                      <div>
                        <p className="text-base font-semibold text-gray-900 mb-2">How GenAI Assure helps:</p>
                        <p className="text-gray-700 leading-relaxed">{useCase.howAssureHelps}</p>
                      </div>

                      {useCase.note && (
                        <div className="mt-4 pt-4 border-t border-gray-300">
                          <p className="text-sm italic text-gray-600">{useCase.note}</p>
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
          <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl shadow-2xl p-8 sm:p-12 text-white">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold">Why Businesses Adopt GenAI Assure for These Areas</h2>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="h-6 w-6 text-white flex-shrink-0 mt-1" strokeWidth={2.5} />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Risk reduced, adoption unlocked</h3>
                  <p className="text-white/95 leading-relaxed">
                    Security-led guardrails (identity, secrets, DLP, egress) let teams ship AI use cases confidently.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="h-6 w-6 text-white flex-shrink-0 mt-1" strokeWidth={2.5} />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Operational visibility</h3>
                  <p className="text-white/95 leading-relaxed">
                    The AI event schema gives uniform logs across tools (prompts, outputs, uploads, webhooks, decisions, tokens).
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="h-6 w-6 text-white flex-shrink-0 mt-1" strokeWidth={2.5} />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Regulatory alignment</h3>
                  <p className="text-white/95 leading-relaxed">
                    Deployer duties (EU AI Act), GDPR/UK GDPR artefacts (DPIA/RoPA/transfers), ISO/IEC 42001 AIMS cycle—all baked into the Evidence Pack.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="h-6 w-6 text-white flex-shrink-0 mt-1" strokeWidth={2.5} />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Audit-ready by design</h3>
                  <p className="text-white/95 leading-relaxed">
                    WORM/object storage, SHA-256 hashes, correlation keys (use_case_id, control_id, vendor_id, etc.) make proof easy.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="h-6 w-6 text-white flex-shrink-0 mt-1" strokeWidth={2.5} />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Time-boxed execution</h3>
                  <p className="text-white/95 leading-relaxed">
                    A practical 30-60-90 plan with clear milestones (policy, SSO/DLP/SIEM, triage playbook, dashboards, evidence).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
              <FileCheck className="h-6 w-6 text-teal-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Ready to Get Started?</h2>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto">
            Whether you're deploying Microsoft Copilot, custom agents, or workflow automations,
            GenAI Assure provides the governance framework to move fast while staying compliant.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/free-assessment"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-teal hover:bg-teal-600 rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Get Free Emergency Assessment
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-teal bg-white hover:bg-gray-50 rounded-lg transition-all border-2 border-teal shadow-sm hover:shadow-md"
            >
              Contact Us
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
