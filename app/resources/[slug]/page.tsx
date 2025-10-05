import { Calendar, Clock, ArrowLeft, User } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const blogPosts: Record<string, {
  title: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
  content: string;
}> = {
  'eu-ai-act-deployer-obligations': {
    title: 'EU AI Act Deployer Obligations: What You Need to Know',
    date: 'March 2025',
    readTime: '8 min',
    category: 'Compliance',
    author: 'ELSA AI Team',
    content: `
      <p>The EU AI Act represents the world's first comprehensive regulatory framework for artificial intelligence, and it places significant obligations on organizations that deploy AI systems—even if they don't develop them.</p>

      <h2>Understanding the Deployer Role</h2>
      <p>Under Article 26 of the EU AI Act, a "deployer" is any natural or legal person using an AI system under their authority. This includes organizations that purchase, license, or otherwise use third-party AI tools like ChatGPT, Microsoft Copilot, or automation platforms like Make.com and n8n.</p>

      <h2>Key Deployer Obligations</h2>

      <h3>1. Logging and Record-Keeping</h3>
      <p>Deployers must maintain comprehensive logs of AI system usage, decisions, and outcomes. These logs must be detailed enough to enable proper oversight and investigation of incidents. For high-risk AI systems, this includes maintaining records for at least six months or as required by applicable law.</p>

      <h3>2. Human Oversight</h3>
      <p>Organizations must ensure adequate human oversight of AI systems, particularly for high-risk applications. This means establishing clear processes for human review of AI-generated decisions and maintaining the ability to override or intervene in AI operations.</p>

      <h3>3. Transparency and Disclosure</h3>
      <p>When deploying AI systems that interact with natural persons, deployers must inform those individuals that they are interacting with an AI system. This applies to chatbots, customer service AI, and other user-facing applications.</p>

      <h3>4. Data Quality and Input Monitoring</h3>
      <p>Deployers are responsible for ensuring that input data used by AI systems is relevant, representative, and of sufficient quality. This includes monitoring for data drift and ensuring compliance with data protection requirements.</p>

      <h3>5. Technical Documentation</h3>
      <p>Organizations must maintain and regularly review technical documentation provided by AI system providers. This documentation should detail the AI system's capabilities, limitations, and appropriate use cases.</p>

      <h2>Compliance Challenges</h2>
      <p>Many organizations struggle with these requirements because they lack visibility into their complete AI deployment estate. Shadow AI—tools adopted by employees without IT approval—creates blind spots that make compliance impossible.</p>

      <p>Additionally, most organizations lack the infrastructure to capture and maintain the detailed logs required by Article 26. Standard application logging is insufficient; you need AI-specific logging that captures prompts, responses, user interactions, and decision-making processes.</p>

      <h2>Practical Steps for Compliance</h2>

      <p><strong>Step 1: Discovery</strong><br>Identify all AI tools in use across your organization, including shadow AI. This requires both technical discovery tools and organizational surveys.</p>

      <p><strong>Step 2: Risk Classification</strong><br>Determine which AI systems qualify as "high-risk" under the EU AI Act. This classification determines the level of compliance obligations.</p>

      <p><strong>Step 3: Implement Logging</strong><br>Deploy comprehensive logging infrastructure that captures all required information for audit purposes. This must integrate with existing SIEM systems and support long-term retention.</p>

      <p><strong>Step 4: Establish Governance</strong><br>Create clear policies, procedures, and oversight mechanisms. Assign responsibility for AI governance and establish regular review processes.</p>

      <p><strong>Step 5: Document Everything</strong><br>Maintain thorough documentation of your AI governance framework, risk assessments, and compliance activities. This documentation is your proof of compliance during audits.</p>

      <h2>Enforcement and Penalties</h2>
      <p>Non-compliance with deployer obligations can result in significant penalties: up to €35 million or 7% of global annual turnover, whichever is higher. These penalties apply even to organizations that simply use AI tools provided by third parties.</p>

      <h2>Conclusion</h2>
      <p>EU AI Act compliance requires a systematic approach that combines technical controls, governance processes, and comprehensive documentation. The 90-day implementation window is tightening, and organizations need to act now to establish audit-ready compliance frameworks.</p>
    `,
  },
  'shadow-ai-hidden-compliance-risk': {
    title: 'Shadow AI: The Hidden Compliance Risk',
    date: 'February 2025',
    readTime: '6 min',
    category: 'Security',
    author: 'ELSA AI Team',
    content: `
      <p>Shadow AI represents one of the most significant and underestimated risks facing organizations today. When employees adopt AI tools without IT approval or oversight, they create security vulnerabilities and compliance gaps that can lead to data breaches, regulatory violations, and substantial financial penalties.</p>

      <h2>What is Shadow AI?</h2>
      <p>Shadow AI refers to artificial intelligence tools and services that employees use without formal approval from IT, security, or compliance teams. This includes popular services like ChatGPT, Claude, Midjourney, and automation platforms like Zapier or Make.com that employees adopt to boost productivity.</p>

      <h2>Why Shadow AI is Dangerous</h2>

      <h3>Data Leakage</h3>
      <p>Employees may inadvertently share sensitive information—customer data, source code, business strategies, or personally identifiable information—with AI services that lack adequate security controls or data protection guarantees. Once data enters these systems, organizations often have no control over how it's used, stored, or potentially leaked.</p>

      <h3>Compliance Violations</h3>
      <p>Shadow AI creates GDPR violations when employees process personal data through unapproved tools without proper legal basis, data processing agreements, or adequate safeguards for international data transfers. Similarly, it violates EU AI Act requirements for proper logging, oversight, and transparency.</p>

      <h3>Lack of Visibility</h3>
      <p>Organizations cannot manage risks they don't know about. Shadow AI operates outside security monitoring, audit trails, and governance frameworks, making it impossible to assess or mitigate associated risks.</p>

      <h3>Vendor Risk</h3>
      <p>Without proper vendor due diligence, organizations have no assurance about the security practices, data handling policies, or compliance posture of shadow AI tools. This creates unmanaged third-party risk.</p>

      <h2>How Shadow AI Spreads</h2>

      <p><strong>Productivity Pressure</strong><br>Employees face mounting pressure to do more with less. AI tools promise significant productivity gains, and employees adopt them to meet expectations—regardless of approval processes.</p>

      <p><strong>Accessibility</strong><br>Most AI tools are readily available with simple sign-up processes and free tiers. Employees can start using them immediately without procurement or approval workflows.</p>

      <p><strong>Lack of Alternatives</strong><br>When organizations don't provide approved AI tools that meet employee needs, workers find their own solutions. Shadow AI often fills a gap left by slow IT provisioning processes.</p>

      <p><strong>Remote Work</strong><br>Distributed teams have more autonomy and less oversight, making it easier for shadow AI adoption to go unnoticed.</p>

      <h2>Discovering Shadow AI</h2>

      <h3>Technical Discovery</h3>
      <p>Deploy network monitoring tools to detect traffic to known AI service providers. Analyze DNS queries, HTTPS SNI fields, and application usage patterns to identify AI tool usage.</p>

      <h3>Browser Extension Audits</h3>
      <p>Many AI tools are accessed via browser extensions. Audit installed extensions across your fleet to identify AI-related tools.</p>

      <h3>Organizational Surveys</h3>
      <p>Conduct anonymous surveys asking employees about their AI tool usage. Create a safe environment for disclosure by emphasizing education over punishment.</p>

      <h3>Log Analysis</h3>
      <p>Review SIEM logs, proxy logs, and application logs for indicators of AI service usage. Look for patterns like API calls to OpenAI, Anthropic, or other AI providers.</p>

      <h2>Controlling Shadow AI</h2>

      <p><strong>Provide Approved Alternatives</strong><br>The most effective way to combat shadow AI is to provide secure, approved alternatives that meet employee needs. Implement enterprise AI tools with proper security controls and governance.</p>

      <p><strong>Establish Clear Policies</strong><br>Create and communicate AI acceptable use policies that clearly define what's allowed and what's prohibited. Make these policies practical and enforceable.</p>

      <p><strong>Deploy Technical Controls</strong><br>Implement data loss prevention (DLP) solutions with AI-aware detection capabilities. Block access to unapproved AI services while allowing approved alternatives.</p>

      <p><strong>Enable SSO Integration</strong><br>Require SSO authentication for all approved AI tools. This provides centralized access control, audit trails, and the ability to quickly revoke access when needed.</p>

      <p><strong>Continuous Monitoring</strong><br>Establish ongoing monitoring for new shadow AI adoption. AI tools proliferate rapidly, and yesterday's approved list quickly becomes outdated.</p>

      <h2>Creating a Positive AI Culture</h2>
      <p>Rather than simply blocking AI tools, successful organizations embrace AI adoption while managing risks. This means providing training, establishing governance frameworks, and creating channels for employees to request new AI capabilities.</p>

      <p>Organizations should position themselves as enablers of safe AI use, not as obstacles to productivity. This approach reduces shadow AI by addressing the root cause: employee need for effective tools.</p>

      <h2>Conclusion</h2>
      <p>Shadow AI represents a significant and growing risk that requires urgent attention. Organizations must balance employee productivity needs with security and compliance requirements by providing approved alternatives, establishing clear policies, and maintaining continuous visibility into AI tool usage.</p>
    `,
  },
  'building-ai-governance-framework-90-days': {
    title: 'Building an AI Governance Framework in 90 Days',
    date: 'January 2025',
    readTime: '10 min',
    category: 'Governance',
    author: 'ELSA AI Team',
    content: `
      <p>Establishing comprehensive AI governance doesn't require years of effort or massive budgets. With the right approach, organizations can implement an audit-ready AI governance framework in just 90 days. This guide provides a practical roadmap for building effective AI governance from the ground up.</p>

      <h2>Why 90 Days?</h2>
      <p>The EU AI Act and increasing regulatory scrutiny mean organizations can't afford to wait. A 90-day implementation provides enough time for thorough discovery, implementation, and documentation while maintaining urgency and focus. This timeline balances completeness with practicality.</p>

      <h2>The 90-Day Framework</h2>

      <h3>Days 1-30: Discovery and Assessment</h3>

      <p><strong>Week 1: AI Inventory</strong></p>
      <ul>
        <li>Deploy technical discovery tools to identify AI services in use</li>
        <li>Conduct organizational surveys to uncover shadow AI</li>
        <li>Review software procurement records and subscriptions</li>
        <li>Interview department heads about AI tool usage</li>
        <li>Create a comprehensive inventory of all AI systems</li>
      </ul>

      <p><strong>Week 2: Risk Classification</strong></p>
      <ul>
        <li>Classify each AI system according to EU AI Act risk categories</li>
        <li>Identify high-risk systems requiring enhanced controls</li>
        <li>Map data flows to understand what information AI systems process</li>
        <li>Assess current security controls and identify gaps</li>
        <li>Document findings in a risk register</li>
      </ul>

      <p><strong>Week 3: Gap Analysis</strong></p>
      <ul>
        <li>Compare current state against regulatory requirements</li>
        <li>Identify missing controls, policies, and documentation</li>
        <li>Assess vendor relationships and data processing agreements</li>
        <li>Evaluate logging and monitoring capabilities</li>
        <li>Prioritize gaps based on risk and regulatory importance</li>
      </ul>

      <p><strong>Week 4: Governance Design</strong></p>
      <ul>
        <li>Define AI governance structure and assign responsibilities</li>
        <li>Design approval workflows for new AI tool adoption</li>
        <li>Create policy framework addressing key risk areas</li>
        <li>Establish oversight mechanisms and review cadences</li>
        <li>Develop implementation roadmap for next 60 days</li>
      </ul>

      <h3>Days 31-60: Implementation and Controls</h3>

      <p><strong>Week 5-6: Technical Controls</strong></p>
      <ul>
        <li>Deploy SSO integration for approved AI tools</li>
        <li>Implement AI-aware DLP solutions</li>
        <li>Establish comprehensive logging infrastructure</li>
        <li>Configure SIEM integration for AI event monitoring</li>
        <li>Set up centralized secrets management</li>
        <li>Deploy monitoring dashboards for AI usage</li>
      </ul>

      <p><strong>Week 7: Policy Development</strong></p>
      <ul>
        <li>Draft AI acceptable use policy</li>
        <li>Create vendor assessment procedures</li>
        <li>Develop incident response procedures for AI-related incidents</li>
        <li>Establish data classification and handling guidelines</li>
        <li>Document AI system approval workflows</li>
      </ul>

      <p><strong>Week 8: Documentation and Processes</strong></p>
      <ul>
        <li>Complete Data Protection Impact Assessments (DPIAs) for high-risk systems</li>
        <li>Document vendor due diligence and data processing agreements</li>
        <li>Create transparency notices and user disclosures</li>
        <li>Establish Records of Processing Activities (ROPA)</li>
        <li>Develop audit trail procedures and retention schedules</li>
      </ul>

      <h3>Days 61-90: Evidence Pack and Operationalization</h3>

      <p><strong>Week 9: Testing and Validation</strong></p>
      <ul>
        <li>Test technical controls to ensure proper operation</li>
        <li>Validate logging captures all required information</li>
        <li>Verify DLP rules detect and block sensitive data exposure</li>
        <li>Confirm SSO integration works across all approved tools</li>
        <li>Test incident response procedures with tabletop exercises</li>
      </ul>

      <p><strong>Week 10: Training and Awareness</strong></p>
      <ul>
        <li>Develop AI governance training materials</li>
        <li>Conduct organization-wide AI policy training</li>
        <li>Train IT and security teams on AI-specific controls</li>
        <li>Create quick reference guides and FAQs</li>
        <li>Establish channels for questions and exceptions</li>
      </ul>

      <p><strong>Week 11: Evidence Pack Assembly</strong></p>
      <ul>
        <li>Compile all governance documentation</li>
        <li>Organize policies, procedures, and technical documentation</li>
        <li>Prepare audit-ready evidence of compliance</li>
        <li>Create executive summary of AI governance framework</li>
        <li>Document control effectiveness and testing results</li>
      </ul>

      <p><strong>Week 12-13: Launch and Continuous Improvement</strong></p>
      <ul>
        <li>Launch AI governance framework organization-wide</li>
        <li>Establish ongoing monitoring and reporting</li>
        <li>Set up quarterly governance reviews</li>
        <li>Create feedback mechanisms for continuous improvement</li>
        <li>Plan for emerging AI technologies and regulatory changes</li>
      </ul>

      <h2>Critical Success Factors</h2>

      <p><strong>Executive Sponsorship</strong><br>AI governance requires visible executive support and adequate resourcing. Secure commitment from senior leadership before beginning implementation.</p>

      <p><strong>Cross-Functional Collaboration</strong><br>Effective AI governance requires collaboration across IT, security, legal, compliance, and business units. Establish clear communication channels and decision-making processes.</p>

      <p><strong>Focus on Practicality</strong><br>Perfect is the enemy of good. Focus on implementing effective controls and processes that work in your organization, not theoretical perfection.</p>

      <p><strong>Documentation Discipline</strong><br>Maintain rigorous documentation from day one. Compliance depends on your ability to prove what you've done, not just doing it.</p>

      <p><strong>Change Management</strong><br>AI governance changes how people work. Invest in change management to ensure adoption and minimize resistance.</p>

      <h2>Common Pitfalls to Avoid</h2>

      <p><strong>Analysis Paralysis</strong><br>Don't let the search for perfection delay implementation. Use the 90-day timeline to maintain momentum and force decisions.</p>

      <p><strong>Technology-Only Solutions</strong><br>Technical controls are necessary but insufficient. Effective governance requires policies, processes, and culture change alongside technology.</p>

      <p><strong>Ignoring Shadow AI</strong><br>Governance frameworks fail when they ignore reality. Address existing shadow AI usage rather than pretending it doesn't exist.</p>

      <p><strong>Set-and-Forget Mentality</strong><br>AI governance requires continuous attention. AI technology and regulations evolve rapidly, requiring ongoing adaptation.</p>

      <p><strong>Overlooking User Experience</strong><br>Controls that make AI tools too difficult to use drive shadow AI adoption. Balance security with usability.</p>

      <h2>Measuring Success</h2>

      <p>Track these key metrics to assess AI governance effectiveness:</p>
      <ul>
        <li>Percentage of AI tools with approved risk assessments</li>
        <li>SSO coverage across AI tool estate</li>
        <li>Time from request to approval for new AI tools</li>
        <li>Number of DLP policy violations detected and blocked</li>
        <li>Completeness of AI usage logging</li>
        <li>Employee satisfaction with approved AI tools</li>
        <li>Shadow AI detection rate and remediation time</li>
      </ul>

      <h2>Beyond Day 90</h2>

      <p>Completing the initial framework is just the beginning. Successful organizations establish continuous improvement processes that:</p>
      <ul>
        <li>Monitor for new AI tools and emerging risks</li>
        <li>Update policies and procedures as regulations evolve</li>
        <li>Expand controls to cover new AI use cases</li>
        <li>Maintain audit readiness through regular reviews</li>
        <li>Foster a culture of responsible AI use</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Building an AI governance framework in 90 days is ambitious but achievable with the right approach, resources, and commitment. This roadmap provides a proven path to establishing comprehensive, audit-ready AI governance that meets regulatory requirements while enabling safe AI adoption. The key is to start now—delays only increase risk and make eventual compliance more difficult and expensive.</p>
    `,
  },
};

interface PageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: PageProps) {
  const post = blogPosts[params.slug];

  if (!post) {
    notFound();
  }

  const allSlugs = Object.keys(blogPosts).filter(s => s !== params.slug);
  const relatedPosts = allSlugs.slice(0, 2).map(slug => ({
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
            href="/free-assessment"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-teal hover:bg-teal-600 rounded-lg transition-all shadow-lg hover:shadow-xl"
          >
            Get Free Assessment
          </a>
        </div>
      </article>
    </div>
  );
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }));
}
