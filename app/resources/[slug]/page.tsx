import { Calendar, Clock, ArrowLeft, User } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface BlogPost {
  title: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
  content: string;
}

const blogPosts: Record<string, BlogPost> = {
  'eu-ai-act-deployer-obligations': {
    title: 'EU AI Act Deployer Obligations: What You Need to Know',
    date: 'October 2025',
    readTime: '8 min',
    category: 'Compliance',
    author: 'ELSA AI Team',
    content: `
      <p><strong>GenAI Assure™ maps directly to Article 26 (deployer duties)</strong> for organisations that use third‑party AI tools. The Framework focuses on practical controls and audit evidence so deployers can meet their obligations without building models or changing providers.</p>

      <h2>What Article 26 Requires of Deployers</h2>
      <p>The Framework's checklist for deployers requires you to:</p>
      <ul>
        <li>Use AI systems in line with the provider's instructions.</li>
        <li>Keep <strong>comprehensive usage logs</strong>.</li>
        <li>Ensure <strong>human oversight</strong> where required.</li>
        <li><strong>Monitor</strong> system operation and performance.</li>
        <li>Implement <strong>robust data governance</strong>.</li>
        <li><strong>Correct misuse</strong> and address identified risks.</li>
        <li><strong>Co‑operate</strong> with providers and authorities.</li>
        <li>Place appropriate <strong>transparency notices</strong>.</li>
      </ul>
      <p>For <em>high‑risk</em> uses, ensure trained staff, defined oversight procedures, and log retention that meets provider and legal requirements.</p>

      <h2>How GenAI Assure™ Implements These Duties</h2>
      <h3>Comprehensive usage logging</h3>
      <p><strong>Detect & Monitor (GA‑DM‑001)</strong> defines an AI‑specific event schema (user/role/device; tool; <code>use_case_id</code>; action such as prompt/output/upload/webhook; data‑classification tags; decision; connector/token ID) with detections and dashboards. Logs are routed to SIEM with integrity protection via <strong>Documentation & Compliance (GA‑DC‑001)</strong>.</p>

      <h3>Human oversight & operational monitoring</h3>
      <p>High‑risk uses require documented oversight procedures and trained staff, with operational monitoring surfaced through GA‑DM dashboards (e.g., policy‑violation trends, exception backlog).</p>

      <h3>Transparency notices</h3>
      <p>GA‑DC‑001 includes transparency/AI labels among required evidence items (including label screenshots) within the <strong>Evidence Pack</strong>.</p>

      <h3>Robust data governance</h3>
      <p><strong>Technical Protection (GA‑TP‑001)</strong> establishes SSO/MFA, secrets & token hygiene, AI‑aware DLP (prompt/output redaction, multi‑channel coverage), and egress allow‑lists; GA‑DC‑001 covers lawful basis, DPIA/FRIA, RoPA, retention schedules, transfer controls, and vendor documentation.</p>

      <h3>Correct misuse & co‑operate</h3>
      <p><strong>Response & Remediation (GA‑RR‑001)</strong> provides AI‑specific runbooks (e.g., PII exfiltration, token compromise, misleading/deepfake content) and redress workflows, supporting corrective action and coordination with stakeholders.</p>

      <h3>Audit‑ready proof</h3>
      <p>The Evidence Pack (GA‑DC‑001) and evidence‑automation pattern specify sources (SIEM, DLP, CASB/Proxy, IdP, vendor portals), WORM/object storage with SHA‑256, and correlation keys (<code>use_case_id</code>, <code>control_id</code>, <code>vendor_id</code>, <code>token_id</code>, etc.).</p>

      <h2>Bottom Line</h2>
      <p>Implementing GenAI Assure™ as written—AI‑specific logging to SIEM with integrity controls, transparency labels captured as evidence, SSO/DLP/egress protections, documented DPIA/FRIA and transfer registers, and AI incident runbooks—provides the processes and artifacts the Framework maps to Article 26 duties for deployers.</p>

      <div class="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-8 text-amber-900">
        <strong>Note:</strong> The Framework does <em>not</em> prescribe fixed log‑retention durations or quote fine amounts; retention and oversight must meet provider and legal requirements.
      </div>
    `,
  },
  'shadow-ai-hidden-compliance-risk': {
    title: 'Shadow AI: The Hidden Compliance Risk',
    date: 'October 2025',
    readTime: '7 min',
    category: 'Security',
    author: 'ELSA AI Team',
    content: `
      <p><strong>Shadow AI</strong> is any <strong>unsanctioned AI tool</strong> discovered outside your approved catalog. In GenAI Assure™, Shadow AI is handled through a formal <strong>Operations Playbook</strong> with time‑boxed actions, evidence requirements, and dashboards—so you can control risk without blocking safe adoption.</p>

      <h2>How GenAI Assure™ Manages Shadow AI</h2>

      <h3>1) Operations Playbook (with SLAs)</h3>
      <p><strong>Trigger:</strong> automated discovery (CASB/DNS) or manual report. <strong>Contain (≤1 hour, automated):</strong> add domain to monitor/block list; open an incident; notify stakeholders. <strong>Triage (≤24 hours):</strong> run Value & Risk Assessment with the user's manager; record rationale and evidence. <strong>Remediate (≤5 business days):</strong> low risk → fast‑track sanctioning with pre‑approved SSO/DLP/allow‑list changes; medium/high risk → keep blocked and either cease use or submit full DPIA/FRIA.</p>
      <p><strong>Evidence:</strong> all decisions, comms, and outcomes recorded in the ticketing system with an immutable audit trail.</p>

      <h3>2) Detect & Monitor (GA‑DM‑001)</h3>
      <p>A unified <strong>AI event schema</strong> (user/role/device; tool; <code>use_case_id</code>; action like prompt/output/upload/webhook; data‑classification; decision; connector/token ID) feeds the SIEM. Core detections include PII patterns, new/changed webhooks, bulk transfers, and anomalous spikes. Dashboards track <strong>Shadow‑AI coverage</strong> and <strong>policy‑violation trends</strong>.</p>

      <h3>3) Technical Protection (GA‑TP‑001)</h3>
      <p>Enforce identity and egress so only sanctioned tools are used: SSO+MFA, SCIM, vaulted secrets with ≤90‑day rotation, AI‑aware DLP on endpoint/web/email with prompt/output redaction, and proxy/CASB allow‑lists for approved AI API FQDNs; block unknown webhook destinations.</p>

      <h3>4) Documentation & Compliance (GA‑DC‑001)</h3>
      <p>Maintain an <strong>Evidence Pack</strong> including the sanctioned catalog, discovery results, SIEM/DLP exports, WORM proof, RoPA/DPIA/FRIA, and vendor files (e.g., transfer tools and attestations).</p>

      <h3>5) Response & Remediation (GA‑RR‑001)</h3>
      <p>Use AI‑specific runbooks (e.g., PII exfiltration, token compromise, misleading/deepfake content). On DLP "block," auto‑disable the connector, revoke the token, open an incident, notify Security & Compliance, and attach the evidence export. Provide a user redress path with defined SLAs.</p>

      <h3>6) Evidence Automation</h3>
      <p>Collect from SIEM, DLP, CASB/proxy, IdP, ticketing/GRC, SaaS AI admin APIs; store evidence (YAML + binaries) in WORM/object storage with SHA‑256 hashes. Use correlation keys such as <code>use_case_id</code>, <code>control_id</code>, <code>vendor_id</code>, <code>token_id</code>, <code>connector_id</code>, <code>timestamp</code>, <code>decision</code>.</p>

      <h2>KPIs & Dashboards</h2>
      <ul>
        <li><strong>Shadow‑AI coverage (%)</strong></li>
        <li><strong>DLP effectiveness (%)</strong></li>
        <li><strong>MTTD/MTTR</strong> for AI incidents</li>
        <li><strong>Token‑hygiene ≥95%</strong> within rotation SLA</li>
      </ul>

      <h2>Where This Sits in the 30‑60‑90 Plan</h2>
      <ul>
        <li><strong>Days 1—30:</strong> Shadow‑AI discovery, sanctioned catalog, SIEM routing (WORM), baseline DLP.</li>
        <li><strong>Days 31—60:</strong> Shadow‑AI Triage Playbook and GA‑PG/TP/DM/DC/RR/RB controls.</li>
        <li><strong>Days 61—90:</strong> Automate discovery, enable dashboards, build Evidence Packs to SLA.</li>
      </ul>

      <p><strong>Bottom line:</strong> Shadow AI is a governed workflow, not a grey area. GenAI Assure™ gives you discovery, triage with SLAs, enforcement controls, audit‑ready evidence, and measurable KPIs—so you can reduce real risk while enabling safe AI adoption.</p>
    `,
  },
  'building-ai-governance-framework-90-days': {
    title: 'Building an AI Governance Framework in 90 Days',
    date: 'October 2025',
    readTime: '10 min',
    category: 'Governance',
    author: 'ELSA AI Team',
    content: `
      <p>GenAI Assure™ provides a pragmatic <strong>30‑60‑90 day plan</strong> that links governance policies, technical controls, monitoring, and evidence into an auditable operating model for organisations that deploy third‑party AI tools.</p>

      <h2>Days 1—30 — Foundation</h2>
      <ul>
        <li>Sponsor identification and charter establishment</li>
        <li>AI Use Policy development and approval</li>
        <li>Value & Risk Assessment rubric implementation</li>
        <li>Exception workflow definition</li>
        <li>Shadow‑AI discovery initiation</li>
        <li>Sanctioned tool catalog creation</li>
        <li>SSO/MFA for approved tools</li>
        <li>AI log routing to SIEM (WORM configuration)</li>
        <li>Baseline DLP policy implementation</li>
        <li>DPIA/FRIA trigger list establishment</li>
        <li>RoPA initiation</li>
        <li>Trust & Safety awareness campaign launch</li>
      </ul>

      <h2>Days 31—60 — Core Controls</h2>
      <ul>
        <li>DPIAs for top 10 use cases</li>
        <li>Vendor risk assessments and reviews</li>
        <li>Shadow‑AI Triage Playbook development and deployment</li>
        <li>Control deployment (GA‑PG/TP/DM/DC/RR/RB)</li>
        <li>Output and bias monitoring implementation</li>
        <li>Role‑based training and attestations</li>
        <li>Explainability profile development</li>
        <li>Transparency labels deployed to production</li>
      </ul>

      <h2>Days 61—90 — Optimization & Scale</h2>
      <ul>
        <li>Discovery process automation</li>
        <li>Dashboards: deployment and configuration</li>
        <li>Evidence Pack creation per tiered SLA</li>
        <li>Internal audit dry‑run</li>
        <li>Tier finalisation and documentation</li>
        <li>Scale roadmap development</li>
        <li>Continuous‑improvement feedback loop</li>
      </ul>

      <h2>Controls & Evidence in GenAI Assure™</h2>
      <ul>
        <li><strong>GA‑PG‑001 Policy & Governance</strong> — policy, lifecycle gates, exception workflow</li>
        <li><strong>GA‑TP‑001 Technical Protection</strong> — SSO/MFA, SCIM, vaulted secrets & ≤90‑day token rotation, AI‑aware DLP, egress allow‑list, webhook blocking, TLS/KMS baselines</li>
        <li><strong>GA‑DM‑001 Detect & Monitor</strong> — AI event schema; detections for PII, new/changed webhooks, bulk transfers; dashboards incl. Shadow‑AI coverage & policy‑violation trends</li>
        <li><strong>GA‑DC‑001 Documentation & Compliance</strong> — tiered Evidence Pack contents incl. policies/approvals, RoPA, DPIA/FRIA, transfer register, notices, SIEM/DLP exports, WORM proof, sanctioned catalog, discovery results, vendor files, labels/screenshots, explainability profiles</li>
        <li><strong>GA‑RR‑001 Response & Remediation</strong> — AI‑specific runbooks; redress</li>
        <li><strong>GA‑RB‑001 Resilience & Business Continuity</strong> — fallback modes, continuity testing</li>
      </ul>

      <h2>Evidence Automation Pattern</h2>
      <p>Sources: SIEM, DLP, CASB/proxy, IdP, ticketing/GRC, SaaS AI admin APIs, vendor portals. Storage: WORM/object with SHA‑256. Correlation keys: <code>use_case_id</code>, <code>control_id</code>, <code>vendor_id</code>, <code>token_id</code>, <code>connector_id</code>, <code>timestamp</code>, <code>decision</code>.</p>

      <h2>Success Milestones</h2>
      <ul>
        <li><strong>Day 30:</strong> AI Use Policy approved; sanctioned catalog with SSO/MFA; Shadow‑AI discovery operational; initial SIEM logging & DLP deployed.</li>
        <li><strong>Day 60:</strong> DPIAs for top 10 use cases; vendor risk assessments complete for critical tools; Shadow‑AI Triage Playbook operational; role‑based training launched.</li>
        <li><strong>Day 90:</strong> Dashboards operational; evidence automation functioning per SLA; internal‑audit readiness demonstrated; continuous‑improvement loop established.</li>
      </ul>

      <p><em>GenAI Assure™ is security‑led and technology‑agnostic, focused on AI deployers. The 30‑60‑90 plan implements an AI Management System with quarterly checks and annual review.</em></p>
    `,
  },
};

interface PageProps {
  params: {
    slug: string;
  };
}

interface RelatedPost extends BlogPost {
  slug: string;
}

export default function BlogPostPage({ params }: PageProps): JSX.Element {
  const post: BlogPost | undefined = blogPosts[params.slug];

  if (!post) {
    notFound();
  }

  const allSlugs: string[] = Object.keys(blogPosts).filter(s => s !== params.slug);
  const relatedPosts: RelatedPost[] = allSlugs.slice(0, 2).map((slug) => ({
    slug,
    ...blogPosts[slug],
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        <Link
          href="/resources"
          className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-semibold mb-8 transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
          Back to Resources
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-teal-100 text-teal-700 text-sm font-semibold rounded-full">
              {post.category}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <User className="h-5 w-5" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span>{post.readTime} read</span>
            </div>
          </div>
        </header>

        <div className="prose prose-lg prose-gray max-w-none">
          <div
            dangerouslySetInnerHTML={{ __html: post.content }}
            className="[&>h2]:text-3xl [&>h2]:font-bold [&>h2]:text-gray-900 [&>h2]:mt-12 [&>h2]:mb-6
                       [&>h3]:text-2xl [&>h3]:font-bold [&>h3]:text-gray-900 [&>h3]:mt-8 [&>h3]:mb-4
                       [&>p]:text-gray-700 [&>p]:leading-relaxed [&>p]:mb-6 [&>p]:text-lg
                       [&>ul]:list-disc [&>ul]:ml-6 [&>ul]:mb-6 [&>ul]:space-y-2
                       [&>ul>li]:text-gray-700 [&>ul>li]:text-lg
                       [&>strong]:font-semibold [&>strong]:text-gray-900"
          />
        </div>

        {relatedPosts.length > 0 && (
          <div className="mt-16 pt-12 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/resources/${related.slug}`}
                  className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all p-6 border-2 border-gray-200 hover:border-teal-300"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-teal-100 text-teal-700 text-xs font-semibold rounded-full">
                      {related.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                    {related.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mt-3">
                    <span>{related.date}</span>
                    <span>•</span>
                    <span>{related.readTime}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="mt-16 bg-teal-50 border-2 border-teal-200 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Implement These Strategies?
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Our team can help you put these insights into practice with a tailored AI governance solution.
          </p>
          <a
            href="https://elsaai.co.uk/free-assessment"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-teal hover:bg-teal-600 rounded-lg transition-all shadow-lg hover:shadow-xl"
          >
            Get Your Readiness Assessment
          </a>
        </div>
      </article>
    </div>
  );
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }));
}
