'use client';

import { useState, useMemo, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Search, X, ChevronDown, ChevronUp, TriangleAlert as AlertTriangle, Shield, TrendingUp, Code, Zap, MessageSquare, Users as UsersIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

type RiskLevel = 'critical' | 'high' | 'medium' | 'low';
type ControlLevel = 'high' | 'medium' | 'low';

interface Risk {
  id: string;
  title: string;
  level: RiskLevel;
  controlLevel: ControlLevel;
  description: string;
  details: string;
  deployerContext?: string;
  affectedAreas: string[];
  mitigation: string;
  regulations: string[];
  tags: string[];
  toolTypes?: string[];
  evidence?: string;
  genaiAssureComponents?: string[];
}

interface RiskCategory {
  id: string;
  name: string;
  risks: Risk[];
}

const riskData: RiskCategory[] = [
  {
    id: 'generative-ai',
    name: 'Generative AI Content Creation',
    risks: [
      {
        id: 'ai-hallucinations-factual-errors',
        title: 'AI Hallucinations & Factual Errors',
        level: 'high',
        controlLevel: 'medium',
        description: 'Fabricated facts, unsafe or misleading recommendations in customer or internal workflows.',
        details: 'AI systems can confidently generate plausible but entirely fabricated information, creating legal, reputational, and safety risks when used for decision-making, customer advice, or content creation.',
        affectedAreas: ['Copilots/assistants', 'Chatbots', 'Content generation', 'Decision support'],
        mitigation: 'GA-PG: Explainability profiles; human-in-the-loop (HITL) for significant decisions; usage policy. GA-TP: DLP/egress controls to reduce risky context; SSO & least privilege. GA-DM: SIEM logging for prompts/outputs/decisions; detections for high-risk topics. GA-RR: Redress & correction workflow.',
        regulations: ['EU AI Act Article 52', 'Consumer Protection Laws'],
        tags: ['high', 'compliance', 'critical'],
        toolTypes: ['chatbot', 'copilot'],
        evidence: 'Label screenshots; reviewer tickets; SIEM samples; Evidence Pack manifest (YAML + WORM)',
        genaiAssureComponents: ['GA-PG', 'GA-TP', 'GA-DM', 'GA-RR'],
      },
      {
        id: 'prompt-injection-rag',
        title: 'Prompt Injection via Retrieval Sources (RAG)',
        level: 'critical',
        controlLevel: 'high',
        description: 'Embedded instructions in indexed content hijack model behavior, leaking data or causing unsafe actions.',
        details: 'Malicious instructions hidden in documents, emails, or web pages processed by RAG systems or AI agents cause unintended actions. This is a critical attack vector for enterprise knowledge bases.',
        affectedAreas: ['RAG systems', 'Enterprise search', 'Knowledge bases'],
        mitigation: 'GA-TP: Pre-index PII/secret screening; namespace/ACL isolation; encrypted vectors; deletion propagation. GA-DM: Retrieval telemetry under unified schema; anomaly detections. GA-RR: Knowledge-poisoning runbook (quarantine, rollback).',
        regulations: ['OWASP LLM Top 10 #1', 'EU AI Act Article 26'],
        tags: ['critical', 'security', 'emerging', 'deployer-critical'],
        toolTypes: ['chatbot'],
        evidence: 'RAG Index Document; DLP export; SIEM queries & samples; incident transcript; Evidence Pack YAML/WORM',
        genaiAssureComponents: ['GA-TP', 'GA-DM', 'GA-RR'],
      },
      {
        id: 'pii-secrets-prompts-outputs',
        title: 'PII/Secrets in Prompts & Outputs',
        level: 'critical',
        controlLevel: 'high',
        description: 'Exposure of personal data or credentials in inputs/outputs.',
        details: 'AI systems can inadvertently expose sensitive information through prompts or outputs, creating significant privacy and security risks.',
        affectedAreas: ['All user-facing assistants', 'No-code flows', 'Developer tools'],
        mitigation: 'GA-TP: DLP redaction/block; secrets vault; SSO. GA-DM: DLP violation logging; SIEM detections.',
        regulations: ['GDPR Articles 6, 9, 13-15', 'SOC 2 CC6.1'],
        tags: ['critical', 'security', 'compliance', 'deployer-critical'],
        toolTypes: ['chatbot', 'automation', 'copilot'],
        evidence: 'DLP rules/violations; token inventory; SIEM alerts; Evidence manifest',
        genaiAssureComponents: ['GA-TP', 'GA-DM'],
      },
      {
        id: 'bias-harmful-outputs',
        title: 'Bias & Harmful Outputs',
        level: 'high',
        controlLevel: 'medium',
        description: 'Discriminatory, unsafe, or brand-damaging content.',
        details: 'AI systems can generate biased, discriminatory, or harmful content that damages brand reputation and violates ethical standards.',
        affectedAreas: ['Marketing', 'HR', 'Support', 'Public comms'],
        mitigation: 'GA-PG: Policy & training; explainability profiles; pre-publication checks. GA-DM: Detections/dashboards; TEVV-Lite bias tests.',
        regulations: ['EU AI Act Articles 10-11', 'Consumer Protection Laws'],
        tags: ['high', 'compliance', 'critical'],
        toolTypes: ['chatbot'],
        evidence: 'Test results; content review logs; label screenshots',
        genaiAssureComponents: ['GA-PG', 'GA-DM'],
      },
      {
        id: 'synthetic-media-output-misuse',
        title: 'Synthetic Media / Output Misuse',
        level: 'high',
        controlLevel: 'medium',
        description: 'Generated text/images/audio/video used for fraud, misinformation, or brand harm.',
        details: 'AI-generated content can be misused for fraudulent purposes, spreading misinformation, or causing brand damage.',
        affectedAreas: ['Content generation', 'Marketing', 'Comms', 'Customer service'],
        mitigation: 'GA-PG: Approved use-case list; watermarking/content-credentials policy; disclosure requirements. GA-TP: Enable output provenance (e.g., C2PA/content credentials) and metadata preservation where supported. GA-DM: Track generations with provenance IDs; monitor takedown/abuse signals. GA-RR: Redress/takedown workflow; public correction templates.',
        regulations: ['EU AI Act', 'Consumer Protection Laws'],
        tags: ['high', 'compliance', 'emerging'],
        toolTypes: ['chatbot'],
        evidence: 'Usage policy; watermark/provenance configuration screenshots; generation logs with IDs; takedown tickets; label/disclosure samples',
        genaiAssureComponents: ['GA-PG', 'GA-TP', 'GA-DM', 'GA-RR'],
      },
    ],
  },
  {
    id: 'development-automation',
    name: 'Development & Automation',
    risks: [
      {
        id: 'api-token-secret-leakage',
        title: 'API Token & Secret Leakage/Misuse',
        level: 'critical',
        controlLevel: 'high',
        description: 'Stolen keys enable unauthorized access and exfiltration.',
        details: 'API tokens and secrets can be compromised through various attack vectors, enabling unauthorized access to AI services and data exfiltration.',
        affectedAreas: ['No-code builders', 'Routers/gateways', 'Agent tools', 'IDEs'],
        mitigation: 'GA-TP: Vaulted secrets; rotation baseline; egress allow-lists. GA-DM: Usage anomalies; connector/token ID in logs.',
        regulations: ['SOC 2 CC6.1', 'ISO/IEC 27001'],
        tags: ['critical', 'security', 'deployer-critical'],
        toolTypes: ['automation', 'copilot'],
        evidence: 'Rotation logs; secret-scan reports; SIEM; YAML/WORM pack',
        genaiAssureComponents: ['GA-TP', 'GA-DM'],
      },
      {
        id: 'tool-function-abuse',
        title: 'Tool/Function Abuse (Agents & Tool Ecosystems)',
        level: 'critical',
        controlLevel: 'high',
        description: 'Unapproved tool calls; data exfiltration via functions; privilege escalation.',
        details: 'AI agents with access to APIs, databases, or automation tools can execute unintended actions, make poor decisions, or cause cascading failures when operating autonomously.',
        affectedAreas: ['Agents', 'MCP-like tools', 'Function calling'],
        mitigation: 'GA-TP: Tool/Function allow-list & registry; least-privilege scopes; containment/kill actions. GA-DM: Chain logging (function name, decision, token/connector IDs). GA-RR: Tool abuse runbook.',
        regulations: ['EU AI Act', 'GDPR Article 22'],
        tags: ['critical', 'security', 'emerging', 'deployer-critical'],
        toolTypes: ['automation'],
        evidence: 'Tool/Function Registry; SIEM chain logs; incident transcript; Evidence Pack manifest',
        genaiAssureComponents: ['GA-TP', 'GA-DM', 'GA-RR'],
      },
      {
        id: 'conversation-state-leakage',
        title: 'Conversation/State Leakage (Copilots)',
        level: 'high',
        controlLevel: 'medium',
        description: 'Cross-user/tenant memory bleed; unintended training on enterprise data.',
        details: 'AI systems with persistent memory can leak information between users or inadvertently train on sensitive enterprise data.',
        affectedAreas: ['Copilots/assistants with memory'],
        mitigation: 'GA-PG/TP: Per-user/tenant isolation; training opt-out by default; purge/retention controls. GA-DM: Access logs & decisions captured.',
        regulations: ['GDPR Article 32', 'SOC 2'],
        tags: ['high', 'security', 'compliance'],
        toolTypes: ['copilot', 'chatbot'],
        evidence: 'Config screenshots; isolation test results; SIEM samples; Evidence Pack',
        genaiAssureComponents: ['GA-PG', 'GA-TP', 'GA-DM'],
      },
      {
        id: 'no-code-workflow-egress',
        title: 'No-Code/Workflow Egress to Unsanctioned APIs',
        level: 'high',
        controlLevel: 'high',
        description: 'Data pushed to unapproved endpoints; secrets embedded in flows.',
        details: 'No-code automation platforms can inadvertently send data to unauthorized endpoints or embed secrets in workflow configurations.',
        affectedAreas: ['Low/no-code AI builders', 'Workflow platforms'],
        mitigation: 'GA-TP: Connector allow-lists; webhook signing; secret scanning before deploy. GA-DM: Flow execution logs & egress detections. GA-RR: Rollback & circuit breaker.',
        regulations: ['GDPR Article 32', 'SOC 2'],
        tags: ['high', 'security', 'compliance'],
        toolTypes: ['automation'],
        evidence: 'CASB/proxy policies; approvals; secret-scan reports; rollback transcript',
        genaiAssureComponents: ['GA-TP', 'GA-DM', 'GA-RR'],
      },
    ],
  },
  {
    id: 'rag-knowledge-systems',
    name: 'RAG & Knowledge Systems',
    risks: [
      {
        id: 'knowledge-base-poisoning',
        title: 'Knowledge-Base Poisoning (RAG)',
        level: 'critical',
        controlLevel: 'high',
        description: 'Malicious corpus content drives unsafe retrieval & responses.',
        details: 'Malicious content injected into knowledge bases can manipulate AI responses and cause unsafe or incorrect information to be retrieved.',
        affectedAreas: ['RAG pipelines', 'Enterprise search'],
        mitigation: 'GA-TP/DM: Pre-index screening; namespace ACLs; anomaly detection. GA-RR: Quarantine & rollback from clean sources.',
        regulations: ['EU AI Act Article 26', 'SOC 2'],
        tags: ['critical', 'security', 'emerging', 'deployer-critical'],
        toolTypes: ['chatbot'],
        evidence: 'Index doc; DLP/anomaly alerts; rollback transcript',
        genaiAssureComponents: ['GA-TP', 'GA-DM', 'GA-RR'],
      },
      {
        id: 'deletion-propagation-failure',
        title: 'Deletion Propagation Failure (Vectors)',
        level: 'high',
        controlLevel: 'medium',
        description: 'Source deleted but vectors persist; rights requests unmet.',
        details: 'When source documents are deleted, vector embeddings may persist, violating data subject rights and creating compliance issues.',
        affectedAreas: ['Vector DBs', 'RAG caches'],
        mitigation: 'GA-TP/DC: Retention policy; deletion hooks; periodic verification; TEVV-Lite deletion test.',
        regulations: ['GDPR Article 17', 'Data Protection Laws'],
        tags: ['high', 'compliance', 'security'],
        toolTypes: ['chatbot'],
        evidence: 'RAG Index Document; deletion proofs; Evidence manifest',
        genaiAssureComponents: ['GA-TP', 'GA-DC'],
      },
      {
        id: 'context-window-overflow',
        title: 'Context Window Overflow / Truncation',
        level: 'medium',
        controlLevel: 'medium',
        description: 'Critical context is dropped, causing wrong answers or decisions.',
        details: 'When context exceeds model limits, critical information may be truncated, leading to incorrect responses or decisions.',
        affectedAreas: ['RAG pipelines', 'Long documents', 'Conversation history/copilot memory'],
        mitigation: 'GA-TP: Chunking & summarisation strategy; context length validation; system limits by use case. GA-DM: Token/context utilisation dashboards; truncation/error detections. GA-PG: Design standards for prompt/context assembly.',
        regulations: ['EU AI Act Article 52'],
        tags: ['medium', 'compliance'],
        toolTypes: ['chatbot', 'copilot'],
        evidence: 'Context handling design doc; token usage logs; truncation alerts; TEVV-Lite context retention test results',
        genaiAssureComponents: ['GA-TP', 'GA-DM', 'GA-PG'],
      },
    ],
  },
  {
    id: 'infrastructure-operations',
    name: 'Infrastructure & Operations',
    risks: [
      {
        id: 'cost-quota-runaway',
        title: 'Cost/Quota Runaway (Routers/Gateways)',
        level: 'high',
        controlLevel: 'medium',
        description: 'Budget blowouts; throttling of critical workloads.',
        details: 'Uncontrolled AI usage can lead to unexpected costs and service disruptions when quotas are exceeded.',
        affectedAreas: ['Model routers', 'Gateways', 'Orchestration'],
        mitigation: 'GA-PG/TP: Routing policy; per-use-case budgets & rate limits. GA-DM/RB: Cost/usage telemetry; failover SLOs.',
        regulations: ['SOC 2 CC6.1'],
        tags: ['high', 'operational'],
        toolTypes: ['automation'],
        evidence: 'Usage/cost reports; throttle/failover tests; policy docs in pack',
        genaiAssureComponents: ['GA-PG', 'GA-TP', 'GA-DM', 'GA-RB'],
      },
      {
        id: 'data-residency-cross-border',
        title: 'Data Residency & Cross-Border Routing',
        level: 'high',
        controlLevel: 'high',
        description: 'Requests routed to non-approved regions/providers; transfer breaches.',
        details: 'AI requests may be routed to regions that violate data residency requirements or lack adequate data protection safeguards.',
        affectedAreas: ['Routers', 'Gateways', 'Multi-provider stacks'],
        mitigation: 'GA-PG/DC: Approved provider/region list; DPAs/SCCs; Transfer Register. GA-TP/DM: Region pinning & detections.',
        regulations: ['GDPR Articles 44-46', 'Schrems II Decision'],
        tags: ['high', 'compliance', 'security'],
        toolTypes: ['automation'],
        evidence: 'DPAs/SCCs; Transfer Register; SIEM samples with region tags',
        genaiAssureComponents: ['GA-PG', 'GA-DC', 'GA-TP', 'GA-DM'],
      },
      {
        id: 'provider-outage-failover',
        title: 'Provider Outage / Failover Gaps (Routers)',
        level: 'high',
        controlLevel: 'medium',
        description: 'Service interruption; degraded safety/quality on failover.',
        details: 'AI service outages or failover to backup providers can result in degraded performance or safety controls.',
        affectedAreas: ['Routers/gateways', 'Multi-provider estates'],
        mitigation: 'GA-RB/TP: Health checks, failover criteria; rate limits; regional constraints. GA-DM: Availability logging; SLO dashboards.',
        regulations: ['SOC 2 CC6.1'],
        tags: ['high', 'operational'],
        toolTypes: ['automation'],
        evidence: 'Failover test results; availability reports; routing policy; Evidence Pack manifest',
        genaiAssureComponents: ['GA-RB', 'GA-TP', 'GA-DM'],
      },
      {
        id: 'model-version-drift',
        title: 'Model Version Drift & Regression',
        level: 'high',
        controlLevel: 'medium',
        description: 'Provider silently updates a model; workflows break or new biases appear.',
        details: 'Model providers may update models without notice, potentially introducing new vulnerabilities or changing behavior.',
        affectedAreas: ['All AI tooling (assistants, routers/gateways, automations)'],
        mitigation: 'GA-PG: Version/routing policy; change-control & approvals. GA-TP: Version pinning where supported; router allow-list per use case. GA-DM: Output quality monitors; regression test jobs on change; alerting. GA-RR: Rollback to approved version/profile; exception handling.',
        regulations: ['EU AI Act Article 26'],
        tags: ['high', 'operational', 'compliance'],
        toolTypes: ['chatbot', 'automation', 'copilot'],
        evidence: 'Routing/version policy; provider change notices; regression test results; roll-back tickets; SIEM samples',
        genaiAssureComponents: ['GA-PG', 'GA-TP', 'GA-DM', 'GA-RR'],
      },
    ],
  },
  {
    id: 'compliance-governance',
    name: 'Compliance & Governance',
    risks: [
      {
        id: 'logging-coverage-gaps',
        title: 'Logging Coverage Gaps (Deployer & Vendor)',
        level: 'critical',
        controlLevel: 'high',
        description: 'Can\'t reconstruct events; fail EU AI Act Article 26 duties.',
        details: 'Insufficient logging prevents organizations from meeting regulatory requirements and conducting effective incident response.',
        affectedAreas: ['All AI tooling'],
        mitigation: 'GA-DM: Unified event schema; comprehensive usage logs. GA-DC: WORM storage; correlation keys (use_case_id, control_id, vendor_id, token_id…).',
        regulations: ['EU AI Act Article 26', 'SOC 2 CC7.2', 'GDPR Article 5(2)'],
        tags: ['critical', 'compliance', 'deployer-critical'],
        toolTypes: ['chatbot', 'automation', 'hr'],
        evidence: 'SIEM queries & samples; WORM proofs; Evidence YAML',
        genaiAssureComponents: ['GA-DM', 'GA-DC'],
      },
      {
        id: 'shadow-ai-extensions-oauth',
        title: 'Shadow AI via Extensions & OAuth Apps',
        level: 'critical',
        controlLevel: 'high',
        description: 'Unsanctioned tools bypass SSO/DLP; hidden data flows.',
        details: 'Browser extensions and OAuth applications can provide unauthorized access to AI tools, bypassing enterprise security controls.',
        affectedAreas: ['Browsers', 'IDEs', 'SaaS OAuth'],
        mitigation: 'GA-DM: Discovery (extensions/plugins/OAuth grants); sanctioned catalog. GA-PG/TP: Exceptions workflow; block/allow-lists; SSO.',
        regulations: ['GDPR Article 32', 'SOC 2'],
        tags: ['critical', 'security', 'emerging', 'deployer-critical'],
        toolTypes: ['copilot'],
        evidence: 'Discovery reports; sanctioned catalog; exception register',
        genaiAssureComponents: ['GA-DM', 'GA-PG', 'GA-TP'],
      },
      {
        id: 'meeting-comms-consent',
        title: 'Meeting/Comms AI — Consent & Wiretapping Exposure',
        level: 'high',
        controlLevel: 'high',
        description: 'Unlawful recording; cross-tenant transcript exposure.',
        details: 'AI-powered meeting transcription and communication tools can violate privacy laws and wiretapping regulations.',
        affectedAreas: ['Meeting transcription', 'Voice AI'],
        mitigation: 'GA-PG: Consent policy & labels; approved use cases. GA-TP: Encryption, per-meeting access; SSO. GA-DC: DPIA; retention policy.',
        regulations: ['GDPR Articles 6, 9', 'Wiretapping Laws'],
        tags: ['high', 'compliance', 'security'],
        toolTypes: ['chatbot'],
        evidence: 'Consent records; access logs; retention configs; Evidence pack items',
        genaiAssureComponents: ['GA-PG', 'GA-TP', 'GA-DC'],
      },
      {
        id: 'vendor-sub-processor-drift',
        title: 'Vendor/Sub-processor Drift',
        level: 'high',
        controlLevel: 'medium',
        description: 'Undocumented processor changes; transfer non-compliance.',
        details: 'AI vendors may change sub-processors without notice, potentially violating data transfer agreements.',
        affectedAreas: ['All third-party AI SaaS'],
        mitigation: 'GA-PG/DC: Vendor assessments; DPAs/SCCs; Transfer Register; monitor sub-processor updates.',
        regulations: ['GDPR Articles 28, 44-46'],
        tags: ['high', 'compliance', 'security'],
        toolTypes: ['chatbot', 'automation'],
        evidence: 'Vendor attestations; Transfer Register entry; change notices in Evidence Pack',
        genaiAssureComponents: ['GA-PG', 'GA-DC'],
      },
      {
        id: 'transparency-oversight-gaps',
        title: 'Transparency & Oversight Gaps (Significant Decisions)',
        level: 'critical',
        controlLevel: 'high',
        description: 'Users aren\'t informed; no human review or appeals.',
        details: 'AI systems making significant decisions without proper transparency or human oversight violate regulatory requirements.',
        affectedAreas: ['HR screening', 'Finance', 'Eligibility', 'Customer decisions'],
        mitigation: 'GA-PG: Transparency labels; oversight procedures; FRIA/DPIA. GA-DM/RR: Decision logging; redress route.',
        regulations: ['GDPR Article 22', 'EU AI Act Article 52'],
        tags: ['critical', 'compliance', 'deployer-critical'],
        toolTypes: ['hr'],
        evidence: 'Labels; oversight tickets; decision logs; FRIA/DPIA',
        genaiAssureComponents: ['GA-PG', 'GA-DM', 'GA-RR'],
      },
      {
        id: 'accessibility-ux-non-compliance',
        title: 'Accessibility/UX Non-Compliance of AI Outputs',
        level: 'medium',
        controlLevel: 'medium',
        description: 'Outputs breach accessibility standards (e.g., WCAG).',
        details: 'AI-generated content may not meet accessibility standards, creating barriers for users with disabilities.',
        affectedAreas: ['Public content', 'Customer support', 'Internal portals'],
        mitigation: 'GA-PG/DM: Accessibility testing within TEVV-Lite; templates enforcing alt-text/captions; UI labeling standards.',
        regulations: ['ADA', 'WCAG Guidelines'],
        tags: ['medium', 'compliance'],
        toolTypes: ['chatbot'],
        evidence: 'TEVV-Lite results; accessibility test records; Evidence Pack entries',
        genaiAssureComponents: ['GA-PG', 'GA-DM'],
      },
      {
        id: 'ai-incident-response-gaps',
        title: 'AI-Specific Incident Response Gaps',
        level: 'high',
        controlLevel: 'medium',
        description: 'Slow or ineffective containment of AI incidents.',
        details: 'Traditional incident response procedures may not be adequate for AI-specific threats and vulnerabilities.',
        affectedAreas: ['All AI workflows'],
        mitigation: 'GA-RR: Playbooks (poisoning, tool abuse, agent runaway, cross-tenant leakage); SOAR actions (revoke tokens, disable connectors).',
        regulations: ['SOC 2 CC6.1'],
        tags: ['high', 'operational', 'security'],
        toolTypes: ['chatbot', 'automation', 'copilot'],
        evidence: 'Runbooks; tabletop results; incident transcripts in Evidence Pack',
        genaiAssureComponents: ['GA-RR'],
      },
      {
        id: 'malicious-fine-tuning-poisoning',
        title: 'Malicious Fine-Tuning / Model Poisoning (conditional)',
        level: 'critical',
        controlLevel: 'low',
        description: 'Poisoned training data changes model behaviour and safety.',
        details: 'NOTE: This risk is CRITICAL only if the deployer performs fine-tuning. For API-only deployers, this is NOT APPLICABLE as it\'s the vendor\'s responsibility.',
        affectedAreas: ['Internal fine-tuning pipelines operated by the deployer'],
        mitigation: 'GA-PG: Scope boundary: declare model development as out-of-scope for standard deployments; if in-scope, require FT governance policy, approvals, and DPIA/FRIA. GA-TP/DM: Dataset provenance checks, data quality screening, pre/post-train regression tests. GA-RR: Rollback plan to baseline model; incident playbook for poisoning.',
        regulations: ['EU AI Act Article 10', 'ISO/IEC 42001'],
        tags: ['critical', 'compliance', 'security'],
        evidence: 'FT scope statement; dataset lineage/provenance records; pre/post test results; rollback tickets',
        genaiAssureComponents: ['GA-PG', 'GA-TP', 'GA-DM', 'GA-RR'],
      },
      {
        id: 'compliance-lag-emerging-regulations',
        title: 'Compliance Lag (Emerging Regulations & Standards)',
        level: 'high',
        controlLevel: 'medium',
        description: 'Controls/evidence fall out of sync with new regulatory duties.',
        details: 'Rapidly evolving AI regulations can create compliance gaps as new requirements emerge.',
        affectedAreas: ['All governance artefacts (policies, DPIA/FRIA, transfer records, mappings)'],
        mitigation: 'GA-PG: Regulatory watch; quarterly review cadence under AIMS; change-control for policy/control updates. GA-DC: Versioned Evidence Pack templates and mappings; update manifests on change.',
        regulations: ['EU AI Act', 'GDPR', 'Emerging AI Regulations'],
        tags: ['high', 'compliance'],
        toolTypes: ['chatbot', 'automation', 'hr'],
        evidence: 'Regulatory change log; updated control-to-regulation mapping; revised policies; Evidence Pack diffs & manifests',
        genaiAssureComponents: ['GA-PG', 'GA-DC'],
      },
    ],
  },
];

const toolTypes = [
  {
    id: 'copilot',
    name: 'Code Assistants',
    icon: Code,
    examples: 'GitHub Copilot, Cursor, Cody',
    topRisks: 'Insecure Output, Source Code Exfiltration, License Contamination',
  },
  {
    id: 'automation',
    name: 'Workflow Automation',
    icon: Zap,
    examples: 'Zapier, Make, Power Automate',
    topRisks: 'Privilege Escalation, Uncontrolled Data Flows, Webhook Compromise',
  },
  {
    id: 'chatbot',
    name: 'Chatbots & Assistants',
    icon: MessageSquare,
    examples: 'Customer service, internal Q&A',
    topRisks: 'Prompt Injection, PII Leakage, Hallucinations, Missing Transparency',
  },
  {
    id: 'hr',
    name: 'HR & Recruiting',
    icon: UsersIcon,
    examples: 'Resume screening, interview AI',
    topRisks: 'Algorithmic Bias, GDPR Article 22, Missing Explainability',
  },
];

export default function SeeTheRisksPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const [activeFilter, setActiveFilter] = useState(searchParams.get('filter') || 'all');
  const [activeToolType, setActiveToolType] = useState<string | null>(null);
  const [expandedCards, setExpandedCards] = useState<Set<string>>(new Set());

  useEffect(() => {
    const params = new URLSearchParams();
    if (searchQuery) params.set('search', searchQuery);
    if (activeFilter !== 'all') params.set('filter', activeFilter);

    const newUrl = params.toString() ? `?${params.toString()}` : '/see-the-risks';
    router.replace(newUrl, { scroll: false });
  }, [searchQuery, activeFilter, router]);

  const filters = [
    { id: 'all', label: 'All Categories', icon: Shield },
    { id: 'deployer-critical', label: 'Deployer Critical', icon: AlertTriangle },
    { id: 'critical', label: 'Critical Risks', icon: AlertTriangle },
    { id: 'compliance', label: 'Compliance Focus', icon: Shield },
    { id: 'emerging', label: 'Emerging Threats', icon: TrendingUp },
    { id: 'security', label: 'Security Bypass', icon: Shield },
  ];

  const filteredData = useMemo(() => {
    return riskData.map(category => {
      const filteredRisks = category.risks.filter(risk => {
        const matchesSearch = searchQuery === '' ||
          risk.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          risk.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          risk.details.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesFilter = activeFilter === 'all' ||
          risk.tags.includes(activeFilter) ||
          risk.level === activeFilter;

        const matchesToolType = !activeToolType ||
          (risk.toolTypes && risk.toolTypes.includes(activeToolType));

        return matchesSearch && matchesFilter && matchesToolType;
      });

      return {
        ...category,
        risks: filteredRisks,
      };
    }).filter(category => category.risks.length > 0);
  }, [searchQuery, activeFilter, activeToolType]);

  const totalVisibleRisks = filteredData.reduce((sum, cat) => sum + cat.risks.length, 0);

  const toggleCard = (riskId: string) => {
    setExpandedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(riskId)) {
        newSet.delete(riskId);
      } else {
        newSet.add(riskId);
      }
      return newSet;
    });
  };

  const getRiskBadgeColor = (level: RiskLevel) => {
    switch (level) {
      case 'critical':
        return 'bg-red-100 text-red-800 border-red-300';
      case 'high':
        return 'bg-orange-100 text-orange-800 border-orange-300';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'low':
        return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const getControlBadge = (level: ControlLevel) => {
    const styles = {
      high: 'bg-green-50 text-green-700 border-green-300',
      medium: 'bg-orange-50 text-orange-700 border-orange-300',
      low: 'bg-gray-50 text-gray-600 border-gray-300',
    };
    const labels = {
      high: 'HIGH CONTROL',
      medium: 'MEDIUM CONTROL',
      low: 'LOW CONTROL',
    };
    return { style: styles[level], label: labels[level] };
  };

  const handleKeyDown = (e: React.KeyboardEvent, riskId: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleCard(riskId);
    }
  };

  const handleFilterKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      e.preventDefault();
      const currentIndex = filters.findIndex(f => f.id === activeFilter);
      const nextIndex = e.key === 'ArrowLeft'
        ? (currentIndex - 1 + filters.length) % filters.length
        : (currentIndex + 1) % filters.length;
      setActiveFilter(filters[nextIndex].id);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            GenAI Assure Enterprise Defense for AI Risks
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
            The AI risk landscape is evolving rapidly. From prompt injection attacks to compliance gaps under the EU AI Act, organizations face unprecedented challenges in securing their AI operations. Our comprehensive catalog of 25+ critical risks helps you identify, understand, and mitigate the threats that matter most to your business using the GenAI Assure framework.
          </p>
        </div>

        <div className="mb-12 bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-8 border-2 border-teal-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="text-3xl">🛠️</span> Risks by AI Tool Type
          </h2>
          <p className="text-gray-700 mb-6">Different AI tools have different risk profiles. Select your deployment type:</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {toolTypes.map((tool) => {
              const Icon = tool.icon;
              return (
                <button
                  key={tool.id}
                  onClick={() => setActiveToolType(activeToolType === tool.id ? null : tool.id)}
                  className={`text-left p-6 rounded-xl transition-all border-2 ${
                    activeToolType === tool.id
                      ? 'bg-white border-teal-500 shadow-lg scale-105'
                      : 'bg-white/50 border-transparent hover:border-teal-200 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Icon className="h-6 w-6 text-teal-600" />
                    <h3 className="font-bold text-gray-900">{tool.name}</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{tool.examples}</p>
                  <p className="text-xs text-gray-500">
                    <span className="font-semibold">Top Risks:</span> {tool.topRisks}
                  </p>
                </button>
              );
            })}
          </div>
          {activeToolType && (
            <div className="mt-4 text-center">
              <button
                onClick={() => setActiveToolType(null)}
                className="text-sm text-teal-600 hover:text-teal-700 font-semibold"
              >
                Clear tool type filter
              </button>
            </div>
          )}
        </div>

        <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-sm shadow-md rounded-xl p-6 mb-8 border border-gray-200">
          <div className="mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search risks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-10"
                aria-label="Search risks"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  aria-label="Clear search"
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>
          </div>

          <div
            className="flex flex-wrap gap-2 mb-4"
            onKeyDown={handleFilterKeyDown}
            role="radiogroup"
            aria-label="Risk filters"
          >
            {filters.map((filter) => {
              const Icon = filter.icon;
              return (
                <Button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  variant={activeFilter === filter.id ? 'default' : 'outline'}
                  className={`${
                    activeFilter === filter.id
                      ? 'bg-teal-600 text-white hover:bg-teal-700'
                      : 'bg-white hover:bg-gray-50'
                  }`}
                  role="radio"
                  aria-checked={activeFilter === filter.id}
                >
                  <Icon className="h-4 w-4 mr-2" />
                  {filter.label}
                </Button>
              );
            })}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex gap-4 flex-wrap">
              <div className="flex items-center gap-2">
                <Badge className="bg-red-100 text-red-800 border border-red-300">Critical</Badge>
                <span className="text-sm text-gray-600">Critical Risk</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge className="bg-orange-100 text-orange-800 border border-orange-300">High</Badge>
                <span className="text-sm text-gray-600">High Risk</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge className="bg-yellow-100 text-yellow-800 border border-yellow-300">Medium</Badge>
                <span className="text-sm text-gray-600">Medium Risk</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge className="bg-gray-100 text-gray-800 border border-gray-300">Low</Badge>
                <span className="text-sm text-gray-600">Low Risk</span>
              </div>
            </div>
            <div className="text-sm font-semibold text-gray-700">
              {totalVisibleRisks} {totalVisibleRisks === 1 ? 'risk' : 'risks'} shown
            </div>
          </div>
        </div>

        {filteredData.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
            <AlertTriangle className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No risks match your filters</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search terms or filters to see more results.
            </p>
            <Button
              onClick={() => {
                setSearchQuery('');
                setActiveFilter('all');
                setActiveToolType(null);
              }}
              className="bg-teal-600 hover:bg-teal-700"
            >
              Clear All Filters
            </Button>
          </div>
        ) : (
          <div className="space-y-12">
            {filteredData.map((category) => (
              <div key={category.id} className="space-y-4">
                <h2 className="text-3xl font-bold text-gray-900 border-b-2 border-teal-500 pb-3">
                  {category.name}
                </h2>
                <div className="grid grid-cols-1 gap-4">
                  {category.risks.map((risk) => {
                    const isExpanded = expandedCards.has(risk.id);
                    const controlBadge = getControlBadge(risk.controlLevel);
                    return (
                      <div
                        key={risk.id}
                        className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-gray-200 hover:border-teal-300"
                      >
                        <div
                          className="p-6 cursor-pointer"
                          onClick={() => toggleCard(risk.id)}
                          onKeyDown={(e) => handleKeyDown(e, risk.id)}
                          role="button"
                          tabIndex={0}
                          aria-expanded={isExpanded}
                          aria-label={`${risk.title} - Click to ${isExpanded ? 'collapse' : 'expand'}`}
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-3 flex-wrap">
                                <h3 className="text-xl font-bold text-gray-900">{risk.title}</h3>
                                <Badge className={`${getRiskBadgeColor(risk.level)} border font-semibold uppercase text-xs`}>
                                  {risk.level}
                                </Badge>
                                <Badge className={`${controlBadge.style} border text-xs font-semibold`}>
                                  {controlBadge.label}
                                </Badge>
                              </div>
                              <p className="text-gray-700 leading-relaxed">{risk.description}</p>
                            </div>
                            <div className="flex-shrink-0">
                              {isExpanded ? (
                                <ChevronUp className="h-6 w-6 text-gray-600" />
                              ) : (
                                <ChevronDown className="h-6 w-6 text-gray-600" />
                              )}
                            </div>
                          </div>

                          {isExpanded && (
                            <div className="mt-6 pt-6 border-t border-gray-200 space-y-6 animate-in fade-in slide-in-from-top-2 duration-300">
                              <div>
                                <h4 className="font-bold text-gray-900 mb-2">Full Details</h4>
                                <p className="text-gray-700 leading-relaxed whitespace-pre-line">{risk.details}</p>
                              </div>

                              {risk.deployerContext && (
                                <div className="bg-teal-50 border-l-4 border-teal-500 p-4 rounded">
                                  <h4 className="font-bold text-gray-900 mb-2">Deployer Context</h4>
                                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">{risk.deployerContext}</p>
                                </div>
                              )}

                              <div>
                                <h4 className="font-bold text-gray-900 mb-2">Affected Areas</h4>
                                <ul className="list-disc list-inside space-y-1">
                                  {risk.affectedAreas.map((area, idx) => (
                                    <li key={idx} className="text-gray-700">{area}</li>
                                  ))}
                                </ul>
                              </div>

                              <div>
                                <h4 className="font-bold text-gray-900 mb-2">Mitigation Strategies</h4>
                                <p className="text-gray-700 leading-relaxed whitespace-pre-line">{risk.mitigation}</p>
                              </div>

                              <div>
                                <h4 className="font-bold text-gray-900 mb-2">Relevant Regulations</h4>
                                <div className="flex flex-wrap gap-2">
                                  {risk.regulations.map((reg, idx) => (
                                    <Badge key={idx} variant="outline" className="bg-blue-50 text-blue-800 border-blue-300">
                                      {reg}
                                    </Badge>
                                  ))}
                                </div>
                              </div>

                              {risk.genaiAssureComponents && risk.genaiAssureComponents.length > 0 && (
                                <div>
                                  <h4 className="font-bold text-gray-900 mb-2">GenAI Assure Framework Components</h4>
                                  <div className="flex flex-wrap gap-2">
                                    {risk.genaiAssureComponents.map((component, idx) => (
                                      <Badge key={idx} variant="outline" className="bg-teal-50 text-teal-800 border-teal-300 font-mono">
                                        {component}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {risk.evidence && (
                                <div className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded">
                                  <h4 className="font-bold text-gray-900 mb-2">Evidence Requirements</h4>
                                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">{risk.evidence}</p>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-16 bg-teal-50 border-2 border-teal-200 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Need Help Addressing These Risks?
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Our team can help you assess your current AI risk exposure and develop a comprehensive mitigation strategy tailored to your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://elsaai.co.uk/free-assessment"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-teal-600 hover:bg-teal-700 text-white text-lg px-8 py-6 rounded-md transition-colors"
            >
              Get Your Readiness Assessment
            </a>
            <Button
              onClick={() => (window.location.href = '/contact')}
              variant="outline"
              className="border-2 border-teal-600 text-teal-600 hover:bg-teal-50 text-lg px-8 py-6"
            >
              Contact Our Experts
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
