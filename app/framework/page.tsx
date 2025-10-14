'use client';

import { useState, useEffect } from 'react';
import { Download, Printer, BookOpen, Shield, FileText, Calendar, Scale, Users } from 'lucide-react';
import FrameworkDownloadModal from '@/components/FrameworkDownloadModal';

const tabs = [
  { id: 'purpose', label: 'Purpose and Scope' },
  { id: 'principles', label: 'Core Governance Principles' },
  { id: 'domains', label: 'Governance Domains & Controls' },
  { id: 'catalog', label: 'Control Catalog' },
  { id: 'tevv', label: 'TEVV-Lite Testing' },
  { id: 'standards', label: 'Standards Alignment' },
  { id: 'evidence', label: 'Evidence Automation' },
  { id: 'improvement', label: 'Continuous Improvement' },
  { id: 'resources', label: 'Resource Planning' },
  { id: 'next', label: 'Next Steps' },
  { id: 'license', label: 'License & Attribution' },
];

export default function FrameworkPage() {
  const [activeTab, setActiveTab] = useState('purpose');
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const [downloadCount, setDownloadCount] = useState<number>(0);
  const [isLoadingCount, setIsLoadingCount] = useState(true);

  useEffect(() => {
    fetchDownloadCount();
  }, []);

  const fetchDownloadCount = async () => {
    try {
      const response = await fetch('/api/log-download');
      if (response.ok) {
        const data = await response.json();
        setDownloadCount(data.count || 0);
      }
    } catch (error) {
      console.error('Error fetching download count:', error);
    } finally {
      setIsLoadingCount(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    setShowDownloadModal(true);
  };

  const handleDownloadSuccess = () => {
    fetchDownloadCount();
  };

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
              <button
                onClick={handleDownload}
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-all shadow-lg hover:shadow-xl"
              >
                <Download className="h-5 w-5 mr-2" />
                Download PDF
              </button>
              <button
                onClick={handlePrint}
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-gray-900 hover:bg-gray-800 rounded-lg transition-all shadow-lg hover:shadow-xl"
              >
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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
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

              <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-6 shadow-md border-2 border-teal-300">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="h-5 w-5 text-teal-600" />
                  <h3 className="text-sm font-semibold text-gray-600">Downloads</h3>
                </div>
                {isLoadingCount ? (
                  <p className="text-xl font-bold text-gray-400">Loading...</p>
                ) : (
                  <p className="text-3xl font-bold text-teal-700">{downloadCount.toLocaleString()}</p>
                )}
              </div>
            </div>
          </div>

          <div id="reader" className="px-8 py-8">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">In-page Reader</h3>
              <p className="text-gray-700 leading-relaxed">
                Scroll to read the full framework from start to finish. You can also open the PDF in a new tab from your browser controls if preferred.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
              <div className="border-b border-gray-200 bg-gray-50 overflow-x-auto">
                <div className="flex min-w-max">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors ${
                        activeTab === tab.id
                          ? 'bg-white text-blue-600 border-b-2 border-blue-600'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-8 bg-white overflow-auto" style={{ maxHeight: '800px' }}>
                {activeTab === 'purpose' && (
                  <div className="prose max-w-none">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Executive Preface</h2>

                    <h3 className="text-xl font-bold text-gray-900 mb-4">1.1 Purpose and Scope</h3>

                    <p className="mb-4"><strong>Purpose.</strong> GenAI Assure is a concise, security-led governance framework for organisations that deploy third-party AI tools and services. It links core principles → actionable controls → measurable evidence, enabling auditable adoption and a pragmatic 30–60–90-day implementation path for SMBs through to enterprises.</p>

                    <p className="mb-4 text-gray-700">This Framework provides guidance only. Clients retain full responsibility for implementing and operating all required technologies. ELSA AI delivers governance oversight, reviews, and approvals through structured change management processes. We do not directly deploy, configure, or administer systems.</p>

                    <p className="mb-4"><strong>Scope.</strong> The framework focuses on the operational realities of AI deployer organisations governing how external AI tools are selected, configured, monitored, and evidenced within business workflows. It is technology-agnostic, risk-based, and aligned to leading standards (EU AI Act deployer duties, NIST AI RMF, ISO/IEC 42001, GDPR/UK GDPR, SOC 2).</p>

                    <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
                      <h4 className="font-bold text-gray-900 mb-2">In Scope</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Use of third-party AI tools/services (e.g., workflow automations/orchestrators, developer copilots, content/voice/video generators, chatbots/assistants, document intelligence).</li>
                        <li>Data protection and privacy controls, transparency and labelling of AI use, and vendor risk management.</li>
                        <li>Logging/monitoring, evidence management (including WORM/attestations), and Trust & Safety culture development.</li>
                      </ul>
                    </div>

                    <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
                      <h4 className="font-bold text-gray-900 mb-2">Out of Scope</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Building, training, or fine-tuning AI models (provider or internal model development).</li>
                        <li>MLOps and provider-side safety techniques (e.g., model evaluations and safety tuning performed by vendors).</li>
                        <li>General cybersecurity baselines beyond AI-specific controls (addressed indirectly via SOC 2/ISO 27001 alignment).</li>
                      </ul>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-4">1.2 Intended Audience</h3>
                    <p className="mb-2">This framework is designed for AI deployer organisations ranging from SMBs to enterprises, with specific focus on:</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 mb-6">
                      <li>Business unit leaders implementing AI solutions</li>
                      <li>Chief AI Officers (CAIOs) and Product Leaders</li>
                      <li>Chief Information Security Officers (CISOs) and Security Engineering</li>
                      <li>Compliance and Legal teams</li>
                      <li>Risk and Governance functions</li>
                      <li>Where applicable: Data Protection Officer (DPO/Privacy), Procurement/Vendor Management, IT Operations, and Internal Audit.</li>
                    </ul>

                    <h3 className="text-xl font-bold text-gray-900 mb-4">1.3 Standards Alignment</h3>
                    <p className="mb-2">The framework supports compliance with and maps to:</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>GDPR/UK GDPR (data protection requirements)</li>
                      <li>EU AI Act (deployer duties under Article 26)</li>
                      <li>NIST AI RMF (Govern/Map/Measure/Manage functions)</li>
                      <li>ISO/IEC 42001 (AI Management System)</li>
                      <li>NIST CSF 2.0 (cybersecurity framework)</li>
                      <li>SOC 2 Trust Services Criteria</li>
                    </ul>
                  </div>
                )}

                {activeTab === 'principles' && (
                  <div className="prose max-w-none">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Core Governance Principles</h2>
                    <p className="mb-6 text-gray-700">Each principle follows the structure: Objective → Key Controls → Implementation Evidence → KPIs → Owner.</p>

                    <h3 className="text-xl font-bold text-gray-900 mb-4">2.1 Security & Data Protection</h3>
                    <p className="mb-4"><strong>Objective (Protect).</strong> Reduce data loss, token abuse, and unauthorised egress across AI tools and automations.</p>

                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                      <h4 className="font-bold text-gray-900 mb-3">Threat Examples</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>PII leakage through AI prompts/outputs</li>
                        <li>Compromised connectors/API keys</li>
                        <li>Unsanctioned webhooks and data exfiltration</li>
                        <li>Automation loops and bulk data transfers</li>
                      </ul>
                    </div>

                    <h4 className="font-bold text-gray-900 mb-3">Key Controls</h4>

                    <div className="space-y-4 mb-6">
                      <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                        <h5 className="font-bold text-gray-900 mb-2">A) Identity & Access Management</h5>
                        <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                          <li>All AI tools behind IdP SSO + MFA</li>
                          <li>Least-privilege role assignments</li>
                          <li>Privileged Access Management (PAM) for elevated roles/sessions</li>
                          <li>SCIM provisioning and de-provisioning where available</li>
                        </ul>
                      </div>

                      <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                        <h5 className="font-bold text-gray-900 mb-2">B) Secrets & Tokens</h5>
                        <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                          <li>Secrets management in an enterprise vault (no secrets in code/repos)</li>
                          <li>Enforced token rotation SLA (≤90 days); revoke on role change</li>
                          <li>Alerts for unused tokens (&gt;30 days) and stale integrations</li>
                        </ul>
                      </div>

                      <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                        <h5 className="font-bold text-gray-900 mb-2">C) Data Controls</h5>
                        <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                          <li>Data classification for AI inputs and outputs</li>
                          <li>DLP controls on endpoints, email, and web/CASB</li>
                          <li>Prompt/response redaction for sensitive fields (PII, credentials, regulated data)</li>
                          <li>Pattern matching for PII/credentials/regulatory keywords with block or quarantine actions</li>
                        </ul>
                      </div>

                      <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                        <h5 className="font-bold text-gray-900 mb-2">D) Network / Egress Controls</h5>
                        <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                          <li>Allow-list for outbound AI API FQDNs and sanctioned webhook destinations</li>
                          <li>Block unknown webhook domains and unsanctioned API endpoints</li>
                          <li>TLS 1.2+/1.3 enforcement with strong cipher suites</li>
                        </ul>
                      </div>

                      <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                        <h5 className="font-bold text-gray-900 mb-2">E) Logging & Telemetry</h5>
                        <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                          <li>Prompts, outputs, and key actions logged to SIEM (with UEBA where available)</li>
                          <li>Integrity protection via append-only / WORM storage</li>
                          <li>Hash/tokenise high-value data elements in logs</li>
                          <li>Standard correlation keys (e.g., use_case_id, control_id, vendor_id, token_id, connector_id, user_id, timestamp)</li>
                        </ul>
                      </div>

                      <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                        <h5 className="font-bold text-gray-900 mb-2">F) Incident Response & SOAR</h5>
                        <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                          <li>AI-specific runbooks (PII exfil, token compromise, webhook misuse, bulk sends)</li>
                          <li>Automated actions: token revocation, connector disable, case creation, stakeholder notifications</li>
                          <li>Post-incident CAPA with time-bound remediation</li>
                        </ul>
                      </div>
                    </div>

                    <h4 className="font-bold text-gray-900 mb-3">Implementation Evidence (Examples)</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm mb-6">
                      <li>SSO/MFA coverage report for sanctioned AI tools; SCIM provisioning logs</li>
                      <li>Vault policy and token inventory with last-used/last-rotated timestamps</li>
                      <li>DLP policy set (patterns/rules), recent violation reports, and tuning records</li>
                      <li>CASB/Proxy allow-list exports; change-control tickets for egress rules</li>
                      <li>SIEM event schema and sample log extracts (prompts/outputs/actions) stored in WORM</li>
                      <li>SOAR runbooks/playbooks and execution transcripts</li>
                      <li>Exception register (if any) with expiry and approved mitigations</li>
                    </ul>

                    <h4 className="font-bold text-gray-900 mb-3">KPIs</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm mb-6">
                      <li><strong>Shadow-AI coverage (%):</strong> (sanctioned + discovered) ÷ (sanctioned + discovered + ungoverned identified) × 100
                        <br /><span className="text-xs">Trajectory: Q1 ≥80%, Q2 ≥85%, Q3 ≥90%</span></li>
                      <li><strong>DLP effectiveness (%):</strong> blocked violations ÷ total violations × 100
                        <br /><span className="text-xs">Target: Q1 ≥90%, tune +2–3 pts q/q towards ≥95%</span></li>
                      <li><strong>MTTD / MTTR (hours):</strong> mean time to detect / respond to AI incidents
                        <br /><span className="text-xs">Targets: ≤24h / ≤72h</span></li>
                      <li><strong>Token hygiene (%):</strong> connectors within rotation SLA ÷ total connectors × 100
                        <br /><span className="text-xs">Target: ≥95%</span></li>
                    </ul>

                    <p className="text-sm font-semibold text-gray-900">Owner: CISO / Security Engineering</p>
                  </div>
                )}

                {activeTab === 'domains' && (
                  <div className="prose max-w-none">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Governance Domains & Controls</h2>

                    <h3 className="text-xl font-bold text-gray-900 mb-4">3.1 Pre-Implementation Readiness Assessment</h3>

                    <h4 className="font-bold text-gray-900 mb-3">3.1.1 Value & Risk Assessment Framework</h4>
                    <p className="mb-4 text-gray-700">Before implementation, organisations must perform a high-level assessment using this rubric, which also serves as the first gate for all new AI use case requests.</p>

                    <div className="overflow-x-auto mb-6">
                      <table className="min-w-full border-collapse border border-gray-300 text-sm">
                        <thead className="bg-gray-100">
                          <tr>
                            <th className="border border-gray-300 px-4 py-2 text-left font-bold">Assessment Question</th>
                            <th className="border border-gray-300 px-4 py-2 text-left font-bold">Low Risk (1)</th>
                            <th className="border border-gray-300 px-4 py-2 text-left font-bold">Medium Risk (2)</th>
                            <th className="border border-gray-300 px-4 py-2 text-left font-bold">High Risk (3)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2 font-semibold">Data Sensitivity</td>
                            <td className="border border-gray-300 px-4 py-2">Public/internal non-confidential data only</td>
                            <td className="border border-gray-300 px-4 py-2">PII, customer, or confidential IP data</td>
                            <td className="border border-gray-300 px-4 py-2">Special category data (GDPR), regulated data</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-2 font-semibold">Decision Impact</td>
                            <td className="border border-gray-300 px-4 py-2">No direct impact on individuals (e.g., content summarisation)</td>
                            <td className="border border-gray-300 px-4 py-2">Indirect impact (e.g., marketing personalisation)</td>
                            <td className="border border-gray-300 px-4 py-2">Legal or similarly significant effects (e.g., hiring, credit)</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2 font-semibold">Output Scope</td>
                            <td className="border border-gray-300 px-4 py-2">Internal use only</td>
                            <td className="border border-gray-300 px-4 py-2">B2B/partner-facing</td>
                            <td className="border border-gray-300 px-4 py-2">Public-facing or directly customer-facing</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-2 font-semibold">Blast Radius</td>
                            <td className="border border-gray-300 px-4 py-2">Low (single user/team impact)</td>
                            <td className="border border-gray-300 px-4 py-2">Medium (departmental impact)</td>
                            <td className="border border-gray-300 px-4 py-2">High (enterprise-wide, brand, or systemic impact)</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <p className="mb-6 text-gray-700"><strong>Scoring:</strong> Sum the scores. 4-6 ⇒ Tier-1 (Fast Lane); 7-9 ⇒ Tier-2 (Standard Review); 10-12 ⇒ Tier-3 (Full Governance).</p>

                    <h4 className="font-bold text-gray-900 mb-3">3.1.2 Objective Tiering Rubric</h4>

                    <div className="overflow-x-auto mb-6">
                      <table className="min-w-full border-collapse border border-gray-300 text-sm">
                        <thead className="bg-gray-100">
                          <tr>
                            <th className="border border-gray-300 px-4 py-2 text-left font-bold">Factor</th>
                            <th className="border border-gray-300 px-4 py-2 text-left font-bold">Tier-1</th>
                            <th className="border border-gray-300 px-4 py-2 text-left font-bold">Tier-2</th>
                            <th className="border border-gray-300 px-4 py-2 text-left font-bold">Tier-3</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2 font-semibold">Compliance Requirement</td>
                            <td className="border border-gray-300 px-4 py-2">Internal only</td>
                            <td className="border border-gray-300 px-4 py-2">Buyer questionnaires/some regulator</td>
                            <td className="border border-gray-300 px-4 py-2">Formal audit (e.g., SOC 2 Type II)</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-2 font-semibold">Data Sensitivity</td>
                            <td className="border border-gray-300 px-4 py-2">No PII/pseudonymised test</td>
                            <td className="border border-gray-300 px-4 py-2">PII/Customer data; no special categories</td>
                            <td className="border border-gray-300 px-4 py-2">Special category/regulated</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2 font-semibold">Risk Appetite</td>
                            <td className="border border-gray-300 px-4 py-2">Moderate acceptance</td>
                            <td className="border border-gray-300 px-4 py-2">Risk-based gating</td>
                            <td className="border border-gray-300 px-4 py-2">Low tolerance; zero-trust gating</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-2 font-semibold">Trust Signal</td>
                            <td className="border border-gray-300 px-4 py-2">None</td>
                            <td className="border border-gray-300 px-4 py-2">B2B desired</td>
                            <td className="border border-gray-300 px-4 py-2">Mandatory for sales/regulatory</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2 font-semibold">Resources/Budget</td>
                            <td className="border border-gray-300 px-4 py-2">=1.0-1.2 FTE; minimal tools</td>
                            <td className="border border-gray-300 px-4 py-2">=1.5-2.5 FTE; modest tools</td>
                            <td className="border border-gray-300 px-4 py-2">≥3.0 FTE; enterprise tools & audits</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-2 font-semibold">Timeline</td>
                            <td className="border border-gray-300 px-4 py-2">&lt;30 days</td>
                            <td className="border border-gray-300 px-4 py-2">Quarter</td>
                            <td className="border border-gray-300 px-4 py-2">Multi-quarter + attestations</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-4 mt-8">3.2 Implementation Methodology (30-60-90 Day Plan)</h3>

                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
                      <h4 className="font-bold text-gray-900 mb-3">Days 1-30: Foundation</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                        <li>Sponsor identification and charter establishment</li>
                        <li>AI Use Policy development and approval</li>
                        <li>Value & Risk Assessment rubric implementation</li>
                        <li>Exception workflow definition</li>
                        <li>Shadow AI discovery initiation</li>
                        <li>Sanctioned tool catalog creation</li>
                        <li>SSO/MFA deployment for approved tools</li>
                        <li>AI log routing to SIEM (WORM configuration)</li>
                        <li>Baseline DLP policy implementation</li>
                        <li>DPIA/FRIA trigger list establishment</li>
                        <li>RoPA initiation</li>
                        <li>Trust & Safety awareness campaign launch</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
                      <h4 className="font-bold text-gray-900 mb-3">Days 31-60: Core Controls</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                        <li>DPIAs for top 10 use cases</li>
                        <li>Vendor risk assessments and reviews</li>
                        <li>Shadow AI Triage Playbook development and deployment</li>
                        <li>Control deployment (GA-PG/TP/DM/DC/RR/RB)</li>
                        <li>Output and bias monitoring implementation</li>
                        <li>Role-based training and attestations</li>
                        <li>Explainability profile development</li>
                        <li>Transparency labels deployment to production</li>
                      </ul>
                    </div>

                    <div className="bg-teal-50 border-l-4 border-teal-500 p-4">
                      <h4 className="font-bold text-gray-900 mb-3">Days 61-90: Optimization & Scale</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                        <li>Discovery process automation</li>
                        <li>Dashboard deployment and configuration</li>
                        <li>Evidence pack creation per tiered SLA</li>
                        <li>Internal audit dry-run execution</li>
                        <li>Tier finalisation and documentation</li>
                        <li>Scale roadmap development</li>
                        <li>Continuous improvement feedback loop implementation</li>
                      </ul>
                    </div>
                  </div>
                )}

                {activeTab === 'catalog' && (
                  <div className="prose max-w-none">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Control Catalog with Implementation Profiles</h2>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-4">4.1 GA-PG-001 Policy & Governance</h3>

                      <h4 className="font-semibold text-gray-900 mb-2">Minimums:</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm mb-4">
                        <li>AI Use Policy covering scope, roles, approved tools, disallowed data, labelling requirements, approval processes, and exception handling</li>
                        <li>Lifecycle gates for Create/Change, Publish, and Decommission phases</li>
                        <li>Exception workflow with risk acceptance, expiry dates, and mitigation requirements</li>
                      </ul>

                      <h4 className="font-semibold text-gray-900 mb-2">Configuration:</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                        <li>Gate forms integrated in GRC/ticketing systems</li>
                        <li>Unique Use-Case ID and Control ID assignment</li>
                        <li>Evidence storage under Case-YYYY-NNN format with hash verification and timestamps</li>
                      </ul>
                    </div>

                    <div className="bg-teal-50 border border-teal-200 rounded-lg p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-4">4.2 GA-TP-001 Technical Protection</h3>

                      <h4 className="font-semibold text-gray-900 mb-2">Identity & Access:</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm mb-4">
                        <li>SSO + MFA enforcement with local account disablement</li>
                        <li>SCIM provisioning and least-privilege role assignment</li>
                        <li>PAM for administrative tokens and elevated access</li>
                      </ul>

                      <h4 className="font-semibold text-gray-900 mb-2">Secrets & Tokens:</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm mb-4">
                        <li>Centralised secrets management in vault</li>
                        <li>Token rotation ≤90 days with automated alerts</li>
                        <li>Token revocation on role changes</li>
                        <li>Unused token alerts &gt;30 days</li>
                      </ul>

                      <h4 className="font-semibold text-gray-900 mb-2">DLP (AI-aware):</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm mb-4">
                        <li>Pattern detection: payment cards (PAN/Luhn), national IDs, health terms, credentials (API keys/JWT), personal identifiers</li>
                        <li>Multi-channel coverage: endpoint (clipboard/upload), web/CASB (AI domains), email, SaaS DLP</li>
                        <li>Prompt/output redaction with pattern matching, masking, and logging</li>
                      </ul>

                      <h4 className="font-semibold text-gray-900 mb-2">Network/Egress:</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm mb-4">
                        <li>Proxy/CASB allow-list for approved AI API FQDNs</li>
                        <li>Unknown webhook destination blocking</li>
                        <li>TLS 1.2+ enforcement with HSTS where applicable</li>
                      </ul>

                      <h4 className="font-semibold text-gray-900 mb-2">Cryptography:</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm mb-4">
                        <li>At rest: AES-256-GCM or provider equivalent</li>
                        <li>In transit: TLS 1.2+ with modern ciphers and PFS preferred</li>
                        <li>Customer-managed keys where offered, stored in KMS/HSM</li>
                      </ul>

                      <h4 className="font-semibold text-gray-900 mb-2">Configuration Baselines:</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                        <li>AI SaaS tools: disable training on enterprise data, restrict retention, limit public sharing, disable personal spaces for work use</li>
                      </ul>
                    </div>
                  </div>
                )}

                {activeTab === 'tevv' && (
                  <div className="prose max-w-none">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">5. TEVV-Lite Testing Playbooks</h2>
                    <p className="mb-6 text-gray-700">Each playbook follows a Pass/Fail approach with specific evidence requirements.</p>

                    <div className="space-y-4">
                      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                        <h3 className="font-bold text-gray-900 mb-2">5.1 Avatar/Video Generation</h3>
                        <p className="text-sm text-gray-700 mb-2"><strong>Tests:</strong> License/likeness validation, misuse prompt testing, bias sampling, approval workflow</p>
                        <p className="text-sm text-gray-700"><strong>Accept Criteria:</strong> Permissions on file, misuse blocked/refused, parity within threshold, human approval recorded</p>
                      </div>

                      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                        <h3 className="font-bold text-gray-900 mb-2">5.2 Workflow Automations</h3>
                        <p className="text-sm text-gray-700 mb-2"><strong>Tests:</strong> Data minimisation validation, exfiltration testing to non-approved domains, loop/volume guards, rollback procedures</p>
                        <p className="text-sm text-gray-700"><strong>Accept Criteria:</strong> Block+alert on exfiltration test, rate-limit/kill-switch proven, rollback steps documented</p>
                      </div>

                      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                        <h3 className="font-bold text-gray-900 mb-2">5.3 Developer Copilots</h3>
                        <p className="text-sm text-gray-700 mb-2"><strong>Tests:</strong> Canary secret detection, license/IP guardrails, human review for critical changes, training attestations</p>
                        <p className="text-sm text-gray-700"><strong>Accept Criteria:</strong> Canary caught, unsafe suggestions flagged, PR review recorded, staff trained</p>
                      </div>

                      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                        <h3 className="font-bold text-gray-900 mb-2">5.4 Customer Service Chatbots</h3>
                        <p className="text-sm text-gray-700 mb-2"><strong>Tests:</strong> AI notice on first interaction, PII redaction, escalation to human, response sampling, refusal handling</p>
                        <p className="text-sm text-gray-700"><strong>Accept Criteria:</strong> Harm/off-topic rate ≤2%, escalation success ≥95%, PII redaction hit rate ≥95%, label/notice visible</p>
                      </div>

                      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                        <h3 className="font-bold text-gray-900 mb-2">5.5 Document Analysis/Generation</h3>
                        <p className="text-sm text-gray-700 mb-2"><strong>Tests:</strong> Sensitive document handling, local redaction, watermark/label presence, citation/attribution verification</p>
                        <p className="text-sm text-gray-700"><strong>Accept Criteria:</strong> Sensitive terms masked, watermark present, citations complete</p>
                      </div>

                      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                        <h3 className="font-bold text-gray-900 mb-2">5.6 HR Screening Tools</h3>
                        <p className="text-sm text-gray-700 mb-2"><strong>Tests:</strong> Bias checks across protected groups, human-in-the-loop validation, rationale capture, candidate notice</p>
                        <p className="text-sm text-gray-700"><strong>Accept Criteria:</strong> Parity gap ≤10%, human reviewer recorded, notices stored</p>
                      </div>

                      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                        <h3 className="font-bold text-gray-900 mb-2">5.7 Financial Analysis Tools</h3>
                        <p className="text-sm text-gray-700 mb-2"><strong>Tests:</strong> Reproducibility validation, data lineage tracking, anomaly thresholds, segregation of duties</p>
                        <p className="text-sm text-gray-700"><strong>Accept Criteria:</strong> Deterministic steps documented, threshold alerts triggered, SoD enforced</p>
                      </div>

                      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                        <h3 className="font-bold text-gray-900 mb-2">5.8 Marketing Content Creation</h3>
                        <p className="text-sm text-gray-700 mb-2"><strong>Tests:</strong> Brand-safety filtering, claims verification, copyright/asset licensing, labelling</p>
                        <p className="text-sm text-gray-700"><strong>Accept Criteria:</strong> No disallowed topics, claims sourced, licenses attached, labels present</p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'standards' && (
                  <div className="prose max-w-none">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Standards Alignment and Regulatory Implementation</h2>

                    <h3 className="text-xl font-bold text-gray-900 mb-4">6.1 EU AI Act - Deployer Duties (Article 26)</h3>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-4">
                      <h4 className="font-bold text-gray-900 mb-3">Compliance Checklist:</h4>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Use AI systems according to provider instructions</li>
                        <li>Maintain comprehensive usage logs</li>
                        <li>Ensure human oversight where required</li>
                        <li>Monitor system operation and performance</li>
                        <li>Implement robust data governance measures</li>
                        <li>Correct misuse and address identified risks</li>
                        <li>Cooperate with providers and authorities</li>
                        <li>Place appropriate transparency notices</li>
                      </ul>
                    </div>

                    <div className="bg-amber-50 border-l-4 border-amber-500 p-4">
                      <p className="text-gray-800"><strong>High-Risk Use Cases:</strong> Ensure trained staff, oversight procedures, and log retention meet both provider and legal requirements.</p>
                    </div>
                  </div>
                )}

                {activeTab === 'evidence' && (
                  <div className="prose max-w-none">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Evidence Automation and Auditability</h2>

                    <h3 className="text-xl font-bold text-gray-900 mb-4">7.1 Architecture Pattern</h3>
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
                      <p className="text-sm text-gray-700 mb-2"><strong>Sources:</strong> SIEM, DLP, CASB/proxy, IAM/IdP, ticketing/GRC, SaaS AI admin APIs, WORM storage, vendor portals</p>
                      <p className="text-sm text-gray-700 mb-2"><strong>ETL/Collector:</strong> Scheduled API pulls with use_case_id and control_ids, normalised to common schema</p>
                      <p className="text-sm text-gray-700 mb-2"><strong>Storage:</strong> Evidence YAML + binaries in WORM/object storage with SHA-256 hashes and NTP time synchronisation</p>
                      <p className="text-sm text-gray-700"><strong>Bundle Generation:</strong> Per use-case evidence packs with manifest and hash verification</p>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-4">7.2 Correlation Keys</h3>
                    <p className="mb-3 text-gray-700">Essential for audit trail maintenance:</p>
                    <div className="bg-gray-900 text-green-400 p-4 rounded-lg mb-6 font-mono text-sm overflow-x-auto">
                      use_case_id, control_id, vendor_id, token_id, connector_id, environment, timestamp, decision (allow/block/redact)
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-4">7.3 Evidence YAML Schema Example</h3>
                    <pre className="bg-gray-100 border border-gray-300 rounded-lg p-4 text-xs overflow-x-auto mb-6">
{`use_case_id: UC-023
controls:
  - id: GA-TP-001
    artifacts:
      - type: dlp_policy_export
        system: casb
        uri: s3://evidence/UC-023/dlp-export.json
        sha256: "<hash>"
  - id: GA-DM-001
    artifacts:
      - type: siem_alert
        system: splunk
        query: "ai_webhook_block"
        uri: s3://evidence/UC-023/alerts-2025-08.json
        sha256: "<hash>"
pack_built_at: "2025-08-27T12:10:03Z"
builder: "evidence-bot@company"
manifest_sha256: "<hash>"`}
                    </pre>

                    <h3 className="text-xl font-bold text-gray-900 mb-4">7.4 Validation Requirements</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>Hash verification on retrieval</li>
                      <li>Tamper-evident WORM settings</li>
                      <li>Cross-system timestamp reconciliation</li>
                      <li>Automated missing-artifact alerts</li>
                    </ul>
                  </div>
                )}

                {activeTab === 'improvement' && (
                  <div className="prose max-w-none">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">8. Continuous Improvement Management System</h2>

                    <h3 className="text-xl font-bold text-gray-900 mb-4">8.1 AIMS (ISO/IEC 42001) Cycle</h3>

                    <div className="overflow-x-auto mb-6">
                      <table className="min-w-full border-collapse border border-gray-300 text-sm">
                        <thead className="bg-gray-100">
                          <tr>
                            <th className="border border-gray-300 px-4 py-2 text-left font-bold">Phase</th>
                            <th className="border border-gray-300 px-4 py-2 text-left font-bold">Description</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2 font-semibold">Plan</td>
                            <td className="border border-gray-300 px-4 py-2">Policy development, objective setting, risk criteria establishment, roles (RACI) definition</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-2 font-semibold">Do</td>
                            <td className="border border-gray-300 px-4 py-2">Control implementation, training delivery, TEVV-Lite execution, vendor oversight</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2 font-semibold">Check</td>
                            <td className="border border-gray-300 px-4 py-2">Quarterly internal audits and KPI reviews, management review inputs, AI incident analysis, DLP block review, user redress ticket analysis for systemic issues</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-2 font-semibold">Act</td>
                            <td className="border border-gray-300 px-4 py-2">Corrective and Preventive Action (CAPA), control updates, risk register refresh, policy and training material updates based on Check phase findings</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <p className="mb-6 text-gray-700"><strong>Cadence:</strong> Quarterly checks with annual management review and comprehensive internal audit</p>

                    <h3 className="text-xl font-bold text-gray-900 mb-4">8.2 Feedback Loop Integration</h3>
                    <p className="text-gray-700">All AI incidents, DLP blocks, and user redress tickets are systematically reviewed to identify patterns and control gaps. Findings are formally integrated into actionable updates to policies (GA-PG), controls (GA-TP), or training materials.</p>
                  </div>
                )}

                {activeTab === 'resources' && (
                  <div className="prose max-w-none">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">9. Resource Planning and Implementation Support</h2>

                    <h3 className="text-xl font-bold text-gray-900 mb-4">9.1 Resource Requirements by Tier</h3>

                    <div className="overflow-x-auto mb-6">
                      <table className="min-w-full border-collapse border border-gray-300 text-sm">
                        <thead className="bg-gray-100">
                          <tr>
                            <th className="border border-gray-300 px-4 py-2 text-left font-bold">Item</th>
                            <th className="border border-gray-300 px-4 py-2 text-left font-bold">Tier-1</th>
                            <th className="border border-gray-300 px-4 py-2 text-left font-bold">Tier-2</th>
                            <th className="border border-gray-300 px-4 py-2 text-left font-bold">Tier-3</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2 font-semibold">Core Staff</td>
                            <td className="border border-gray-300 px-4 py-2">=1.0-1.2 FTE total</td>
                            <td className="border border-gray-300 px-4 py-2">=1.5-2.5 FTE</td>
                            <td className="border border-gray-300 px-4 py-2">≥3.0 FTE</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-2 font-semibold">Tooling (annual)</td>
                            <td className="border border-gray-300 px-4 py-2">Basic CASB/Proxy, SIEM seats, Vault, DLP lite</td>
                            <td className="border border-gray-300 px-4 py-2">CASB + SaaS DLP, SIEM tier, SOAR starter</td>
                            <td className="border border-gray-300 px-4 py-2">Enterprise CASB/DLP, SIEM/SOAR enterprise, evidence automation</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2 font-semibold">External Support</td>
                            <td className="border border-gray-300 px-4 py-2">Ad-hoc DPIA/FRIA support</td>
                            <td className="border border-gray-300 px-4 py-2">Readiness + audit preparation</td>
                            <td className="border border-gray-300 px-4 py-2">Formal attestation program</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-2 font-semibold">Timeline</td>
                            <td className="border border-gray-300 px-4 py-2">30-60 days</td>
                            <td className="border border-gray-300 px-4 py-2">60-120 days</td>
                            <td className="border border-gray-300 px-4 py-2">120-180 days</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-4">9.2 Change Management Approach</h3>

                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
                      <h4 className="font-bold text-gray-900 mb-2">Stakeholder Engagement:</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                        <li>Executive sponsor identification and communication</li>
                        <li>Multi-tiered briefings for different role groups</li>
                        <li>Regular milestone celebrations and quick-win demonstrations</li>
                      </ul>
                    </div>

                    <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-4">
                      <h4 className="font-bold text-gray-900 mb-2">Resistance Management:</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                        <li>Transparent communication about benefits and necessary changes</li>
                        <li>Clear exception processes with defined SLAs</li>
                        <li>Practical solutions for common integration challenges</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 border-l-4 border-green-500 p-4">
                      <h4 className="font-bold text-gray-900 mb-2">Adoption Tracking:</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                        <li>Tool adoption behind SSO, sanctioned catalog completion</li>
                        <li>Training completion and assessment pass rates</li>
                        <li>DLP false-positive trends and exception processing times</li>
                      </ul>
                    </div>
                  </div>
                )}

                {activeTab === 'next' && (
                  <div className="prose max-w-none">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">10. Next Steps</h2>

                    <h3 className="text-xl font-bold text-gray-900 mb-4">10.1 Framework Adoption Recommendations</h3>
                    <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-6">
                      <li><strong>Begin with Readiness Assessment:</strong> Use the Value & Risk Assessment framework to determine appropriate tier and scope</li>
                      <li><strong>Secure Executive Sponsorship:</strong> Ensure clear commitment and resource allocation aligned with chosen tier</li>
                      <li><strong>Establish Cross-Functional Team:</strong> Include Security, Compliance, Legal, Privacy, and relevant Business Units</li>
                      <li><strong>Follow Phased Implementation:</strong> Adhere to 30-60-90 day plan with regular checkpoint reviews</li>
                      <li><strong>Maintain Continuous Improvement:</strong> Implement quarterly review cycles and annual comprehensive assessments</li>
                    </ol>

                    <h3 className="text-xl font-bold text-gray-900 mb-4">10.2 Success Metrics and Milestones</h3>

                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
                      <h4 className="font-bold text-gray-900 mb-2">Day 30 Success Indicators:</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                        <li>AI Use Policy approved and published</li>
                        <li>Sanctioned tool catalog established with SSO/MFA implementation</li>
                        <li>Shadow AI discovery process operational</li>
                        <li>Initial SIEM logging and DLP policies deployed</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
                      <h4 className="font-bold text-gray-900 mb-2">Day 60 Success Indicators:</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                        <li>Top 10 use cases with completed DPIAs</li>
                        <li>Vendor risk assessments completed for critical tools</li>
                        <li>Shadow AI Triage Playbook operational</li>
                        <li>Role-based training program launched</li>
                      </ul>
                    </div>

                    <div className="bg-teal-50 border-l-4 border-teal-500 p-4 mb-6">
                      <h4 className="font-bold text-gray-900 mb-2">Day 90 Success Indicators:</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                        <li>Comprehensive dashboards operational</li>
                        <li>Evidence automation functional per tiered SLA</li>
                        <li>Internal audit readiness demonstrated</li>
                        <li>Continuous improvement feedback loop established</li>
                      </ul>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-4">10.3 Long-term Maturity Evolution</h3>
                    <p className="mb-2 text-gray-700">The framework supports organisational maturity growth through:</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 mb-6">
                      <li><strong>Tier progression:</strong> Natural advancement from Tier-1 through Tier-3 as capabilities mature</li>
                      <li><strong>Standards evolution:</strong> Adaptability to emerging regulatory requirements and industry standards</li>
                      <li><strong>Technology integration:</strong> Scalable architecture supporting advanced tooling adoption</li>
                      <li><strong>Culture development:</strong> Progressive Trust & Safety culture maturation with measurable indicators</li>
                    </ul>

                    <h3 className="text-xl font-bold text-gray-900 mb-4">10.4 Community and Support</h3>
                    <p className="mb-2 text-gray-700">Organisations implementing this framework are encouraged to:</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>Participate in industry working groups and standards development</li>
                      <li>Share anonymised lessons learned and best practices</li>
                      <li>Contribute to framework evolution through structured feedback mechanisms</li>
                      <li>Engage with regulatory bodies and industry associations for guidance updates</li>
                    </ul>
                  </div>
                )}

                {activeTab === 'license' && (
                  <div className="prose max-w-none">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">11. License and Attribution</h2>

                    <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 mb-6">
                      <p className="text-gray-800 mb-4">This framework is made available under <strong>Creative Commons Attribution-NoDerivatives 4.0 International (CC BY-ND 4.0)</strong>.</p>

                      <h3 className="font-bold text-gray-900 mb-2">You are free to:</h3>
                      <ul className="list-disc list-inside mb-4 text-gray-700">
                        <li><strong>Share</strong> — copy and redistribute the material in any medium or format for any purpose</li>
                      </ul>

                      <h3 className="font-bold text-gray-900 mb-2">Under the following terms:</h3>
                      <ul className="list-disc list-inside mb-4 text-gray-700">
                        <li><strong>Attribution</strong> — You must give appropriate credit, provide a link to the license, and indicate if changes were made</li>
                        <li><strong>NoDerivatives</strong> — You may not modify, transform, or build upon this material</li>
                      </ul>
                    </div>

                    <div className="bg-gray-100 border border-gray-300 rounded-lg p-6 mb-6">
                      <h3 className="font-bold text-gray-900 mb-3">Required citation:</h3>
                      <p className="font-mono text-sm text-gray-800 bg-white p-3 rounded border border-gray-300">
                        Ali, F. (2025). GenAI Assure Framework v1.0. ELSA AI LTD.<br />
                        Available at: www.elsaai.co.uk
                      </p>
                    </div>

                    <p className="text-gray-700 mb-4">
                      <strong>Full license text:</strong> <a href="https://creativecommons.org/licenses/by-nd/4.0/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://creativecommons.org/licenses/by-nd/4.0/</a>
                    </p>

                    <div className="bg-teal-50 border-l-4 border-teal-500 p-4 mb-6">
                      <p className="text-gray-800">
                        <strong>For implementation support or commercial licensing inquiries:</strong><br />
                        <a href="mailto:contact@elsaai.co.uk" className="text-teal-600 hover:underline">contact@elsaai.co.uk</a>
                      </p>
                    </div>

                    <p className="text-center text-gray-600 text-sm mt-8">
                      © 2025 ELSA AI LTD. All rights reserved.
                    </p>
                  </div>
                )}
              </div>
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

      <FrameworkDownloadModal
        isOpen={showDownloadModal}
        onClose={() => setShowDownloadModal(false)}
        onDownloadSuccess={handleDownloadSuccess}
      />
    </div>
  );
}
