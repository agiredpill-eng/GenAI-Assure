'use client';

import { useState, useMemo, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Search, X, ChevronDown, ChevronUp, AlertTriangle, Shield, TrendingUp } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

type RiskLevel = 'critical' | 'high' | 'medium';

interface Risk {
  id: string;
  title: string;
  level: RiskLevel;
  description: string;
  details: string;
  affectedAreas: string[];
  mitigation: string;
  regulations: string[];
  tags: string[];
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
        id: 'prompt-injection',
        title: 'Prompt Injection Attacks',
        level: 'critical',
        description: 'Malicious prompts that manipulate AI outputs to bypass safety controls or extract sensitive data.',
        details: 'Attackers craft inputs that override system instructions, potentially exposing confidential information, generating harmful content, or executing unauthorized actions. This is particularly dangerous when AI systems have access to databases or external APIs.',
        affectedAreas: ['Customer-facing chatbots', 'Content generation tools', 'AI assistants with data access'],
        mitigation: 'Implement input validation, output filtering, role-based access controls, and prompt engineering best practices. Use AI-aware DLP to detect and block sensitive data in prompts.',
        regulations: ['EU AI Act Article 26', 'GDPR Article 32'],
        tags: ['critical', 'security', 'emerging'],
      },
      {
        id: 'training-data-poisoning',
        title: 'Training Data Poisoning',
        level: 'high',
        description: 'Corrupted training data leading to biased, unreliable, or malicious AI behavior.',
        details: 'When training datasets are intentionally or unintentionally contaminated, AI models can learn incorrect patterns, produce biased outcomes, or be manipulated to serve attacker objectives. This undermines model reliability and fairness.',
        affectedAreas: ['Custom ML models', 'Fine-tuned LLMs', 'Recommendation systems'],
        mitigation: 'Validate data sources, implement data provenance tracking, use anomaly detection during training, and maintain audit trails of training datasets.',
        regulations: ['EU AI Act Article 10', 'ISO/IEC 42001'],
        tags: ['high', 'compliance', 'security'],
      },
      {
        id: 'hallucination-liability',
        title: 'AI Hallucinations & Factual Errors',
        level: 'high',
        description: 'AI systems generating false or misleading information presented as fact.',
        details: 'LLMs can confidently generate plausible but entirely fabricated information, creating legal, reputational, and safety risks when used for decision-making, customer advice, or content creation.',
        affectedAreas: ['Customer support', 'Content creation', 'Legal/medical advice', 'Research assistance'],
        mitigation: 'Implement fact-checking layers, human oversight for critical outputs, transparency labels, and clear disclaimers about AI-generated content limitations.',
        regulations: ['EU AI Act Article 52', 'Consumer Protection Laws'],
        tags: ['high', 'compliance', 'critical'],
      },
      {
        id: 'copyright-infringement',
        title: 'Copyright & IP Infringement',
        level: 'medium',
        description: 'AI-generated content that infringes on copyrighted material or training data usage violations.',
        details: 'Generative AI models trained on copyrighted content may reproduce protected works, creating legal liability. Additionally, using AI tools without proper licensing can violate vendor terms and copyright law.',
        affectedAreas: ['Content creation', 'Marketing materials', 'Code generation', 'Image/video production'],
        mitigation: 'Use licensed AI tools, implement content scanning for copyright matches, maintain records of AI tool usage and licensing, establish clear AI content policies.',
        regulations: ['Copyright Law', 'DMCA', 'EU Copyright Directive'],
        tags: ['medium', 'compliance'],
      },
    ],
  },
  {
    id: 'sales-marketing',
    name: 'Sales & Marketing AI',
    risks: [
      {
        id: 'personalization-privacy',
        title: 'Excessive Personalization & Privacy Invasion',
        level: 'critical',
        description: 'AI-driven personalization that crosses privacy boundaries or violates data protection laws.',
        details: 'Marketing AI that uses personal data without consent, combines datasets inappropriately, or creates detailed profiles can violate GDPR, damage trust, and result in regulatory fines.',
        affectedAreas: ['Email marketing', 'Ad targeting', 'Customer segmentation', 'Recommendation engines'],
        mitigation: 'Implement consent management, data minimization, purpose limitation, and DPIA processes. Use privacy-preserving AI techniques and transparent data usage policies.',
        regulations: ['GDPR Articles 6, 9, 13-15', 'ePrivacy Directive', 'EU AI Act Article 26'],
        tags: ['critical', 'compliance', 'security'],
      },
      {
        id: 'automated-manipulation',
        title: 'Manipulative Patterns & Dark Patterns',
        level: 'high',
        description: 'AI systems that manipulate user behavior through psychological exploitation.',
        details: 'AI-optimized interfaces and messaging that exploit cognitive biases to manipulate purchasing decisions, create addictive behaviors, or deceive users violate consumer protection laws and ethical standards.',
        affectedAreas: ['E-commerce platforms', 'Social media ads', 'Dynamic pricing', 'Behavioral targeting'],
        mitigation: 'Conduct ethical AI reviews, implement fairness testing, avoid deceptive practices, provide clear opt-outs, and ensure transparent pricing and recommendations.',
        regulations: ['Consumer Protection Laws', 'Unfair Commercial Practices Directive', 'EU AI Act'],
        tags: ['high', 'compliance', 'emerging'],
      },
      {
        id: 'lead-gen-data-breach',
        title: 'Lead Generation Data Breaches',
        level: 'high',
        description: 'Customer data collected by AI tools leaked or misused.',
        details: 'AI-powered lead generation and CRM tools often accumulate vast amounts of personal data. Without proper security controls, this data is vulnerable to breaches, unauthorized access, or misuse.',
        affectedAreas: ['CRM systems', 'Chatbots', 'Form processors', 'Marketing automation'],
        mitigation: 'Encrypt data at rest and in transit, implement access controls, conduct regular security audits, maintain data inventories, and establish incident response procedures.',
        regulations: ['GDPR Article 32', 'CCPA', 'NIS2 Directive'],
        tags: ['high', 'security', 'compliance'],
      },
    ],
  },
  {
    id: 'financial-services',
    name: 'Financial Services AI',
    risks: [
      {
        id: 'algorithmic-bias',
        title: 'Algorithmic Bias in Credit & Lending',
        level: 'critical',
        description: 'AI models that discriminate against protected groups in financial decisions.',
        details: 'ML models used for credit scoring, loan approval, or risk assessment can perpetuate or amplify historical biases, leading to unfair treatment of minorities, women, or other protected classes.',
        affectedAreas: ['Credit scoring', 'Loan underwriting', 'Insurance pricing', 'Fraud detection'],
        mitigation: 'Conduct bias testing, use fairness metrics, implement explainability tools, maintain human oversight, and document decision-making processes for audit purposes.',
        regulations: ['Equal Credit Opportunity Act', 'Fair Lending Laws', 'EU AI Act Articles 10-11', 'GDPR Article 22'],
        tags: ['critical', 'compliance', 'critical'],
      },
      {
        id: 'automated-trading-risk',
        title: 'Automated Trading & Market Manipulation',
        level: 'high',
        description: 'AI trading algorithms causing market instability or engaging in manipulative practices.',
        details: 'High-frequency trading AI and automated investment algorithms can create flash crashes, amplify volatility, or inadvertently engage in market manipulation, resulting in regulatory violations and financial losses.',
        affectedAreas: ['Algorithmic trading', 'Investment algorithms', 'Market-making bots'],
        mitigation: 'Implement circuit breakers, maintain audit logs, conduct backtesting, use kill switches, and ensure compliance with trading regulations and oversight.',
        regulations: ['MiFID II', 'SEC Rules', 'Market Abuse Regulation'],
        tags: ['high', 'compliance', 'security'],
      },
      {
        id: 'fraud-detection-false-positives',
        title: 'Fraud Detection False Positives',
        level: 'medium',
        description: 'AI fraud systems blocking legitimate transactions and damaging customer relationships.',
        details: 'Overly aggressive fraud detection AI can decline valid transactions, freeze accounts incorrectly, and create poor customer experiences while still missing sophisticated fraud.',
        affectedAreas: ['Payment processing', 'Account monitoring', 'Transaction screening'],
        mitigation: 'Balance precision and recall, implement human review for edge cases, provide clear appeals processes, and continuously tune models with feedback loops.',
        regulations: ['Consumer Financial Protection Regulations', 'Payment Services Directive'],
        tags: ['medium', 'security'],
      },
    ],
  },
  {
    id: 'compliance',
    name: 'Cross-Cutting Compliance',
    risks: [
      {
        id: 'gdpr-lawful-basis',
        title: 'Unclear Lawful Basis for AI Processing',
        level: 'critical',
        description: 'Processing personal data through AI without valid legal grounds under GDPR.',
        details: 'Organizations using AI to process personal data must establish a lawful basis (consent, contract, legitimate interest, etc.). Many AI implementations fail to document or justify their legal basis, creating compliance risks.',
        affectedAreas: ['All AI systems processing personal data', 'Customer analytics', 'HR AI', 'Health AI'],
        mitigation: 'Conduct Data Protection Impact Assessments (DPIAs), document lawful basis for each processing activity, implement consent management systems, and maintain Records of Processing Activities (ROPA).',
        regulations: ['GDPR Articles 6, 9, 35', 'UK GDPR', 'Data Protection Act 2018'],
        tags: ['critical', 'compliance', 'critical'],
      },
      {
        id: 'eu-ai-act-logging',
        title: 'EU AI Act Deployer Logging Requirements',
        level: 'critical',
        description: 'Failure to maintain adequate logs as required under Article 26 for high-risk AI systems.',
        details: 'The EU AI Act mandates deployers of high-risk AI systems to maintain detailed logs of AI operations, decisions, and outcomes. Non-compliance can result in fines up to €35 million or 7% of global turnover.',
        affectedAreas: ['High-risk AI systems', 'Biometric identification', 'Critical infrastructure AI', 'Employment AI'],
        mitigation: 'Implement comprehensive logging infrastructure, establish log retention policies, create automated audit trails, and ensure logs capture required decision-making data.',
        regulations: ['EU AI Act Article 26', 'EU AI Act Annex IV'],
        tags: ['critical', 'compliance', 'critical'],
      },
      {
        id: 'missing-transparency-labels',
        title: 'Missing AI Transparency Disclosures',
        level: 'high',
        description: 'Failure to disclose AI usage to users as required by regulations.',
        details: 'Regulations increasingly require organizations to inform users when they interact with AI systems or when AI-generated content is used. Failure to provide these disclosures violates transparency requirements.',
        affectedAreas: ['Chatbots', 'Content generation', 'Automated decision-making', 'Customer service AI'],
        mitigation: 'Implement clear AI disclosure labels, add transparency notices to user interfaces, document AI usage in privacy policies, and train staff on disclosure requirements.',
        regulations: ['EU AI Act Article 52', 'GDPR Recital 71', 'Consumer Protection Laws'],
        tags: ['high', 'compliance', 'critical'],
      },
      {
        id: 'vendor-dpa-missing',
        title: 'Missing Vendor DPAs & Data Transfer Safeguards',
        level: 'high',
        description: 'Using AI vendors without proper Data Processing Agreements or international transfer mechanisms.',
        details: 'When AI tools process personal data, organizations must have DPAs in place and ensure adequate safeguards for international data transfers (SCCs, adequacy decisions, BCRs).',
        affectedAreas: ['Cloud AI services', 'SaaS AI tools', 'API integrations', 'Third-party AI vendors'],
        mitigation: 'Audit all AI vendors, establish DPAs before data sharing, implement Standard Contractual Clauses (SCCs) for non-EU transfers, and maintain vendor risk assessments.',
        regulations: ['GDPR Articles 28, 44-46', 'Schrems II Decision'],
        tags: ['high', 'compliance', 'security'],
      },
    ],
  },
  {
    id: 'emerging-threats',
    name: 'Emerging Threat Categories',
    risks: [
      {
        id: 'shadow-ai',
        title: 'Shadow AI & Unmanaged Tools',
        level: 'critical',
        description: 'Employees using unapproved AI tools that bypass security controls.',
        details: 'Staff adopting AI tools without IT approval creates data leakage risks, compliance gaps, and security vulnerabilities. Organizations often lack visibility into which AI tools are being used and what data is being shared.',
        affectedAreas: ['All departments', 'Remote workers', 'Developer tools', 'Productivity apps'],
        mitigation: 'Implement AI discovery tools, establish AI usage policies, provide approved AI tool alternatives, conduct training, and use DLP to monitor AI tool usage.',
        regulations: ['GDPR Article 32', 'ISO/IEC 27001', 'SOC 2'],
        tags: ['critical', 'security', 'emerging'],
      },
      {
        id: 'ai-agent-autonomy',
        title: 'Autonomous AI Agent Risks',
        level: 'high',
        description: 'AI agents making decisions or taking actions without adequate human oversight.',
        details: 'AI agents with access to APIs, databases, or automation tools can execute unintended actions, make poor decisions, or cause cascading failures when operating autonomously.',
        affectedAreas: ['AI agents', 'RPA integration', 'API-connected LLMs', 'Autonomous workflows'],
        mitigation: 'Implement human-in-the-loop controls, use approval workflows for high-risk actions, establish guardrails for agent behavior, and maintain detailed action logs.',
        regulations: ['EU AI Act', 'GDPR Article 22', 'Sector-specific regulations'],
        tags: ['high', 'emerging', 'security'],
      },
      {
        id: 'model-theft',
        title: 'Model Theft & Intellectual Property Loss',
        level: 'medium',
        description: 'Proprietary AI models stolen through API abuse or reverse engineering.',
        details: 'Attackers can extract or replicate AI models through repeated API queries, creating competitive risks and IP loss. Custom-trained models represent significant investment and competitive advantage.',
        affectedAreas: ['API-exposed models', 'Custom ML models', 'Proprietary algorithms'],
        mitigation: 'Implement rate limiting, API authentication, model watermarking, query monitoring, and restrict access to model details and parameters.',
        regulations: ['Trade Secret Protection', 'DMCA', 'Patent Law'],
        tags: ['medium', 'security', 'emerging'],
      },
      {
        id: 'deepfake-impersonation',
        title: 'Deepfake & Synthetic Identity Attacks',
        level: 'high',
        description: 'AI-generated fake identities or media used for fraud and social engineering.',
        details: 'Sophisticated deepfakes can impersonate executives for financial fraud, bypass identity verification systems, or create reputational damage through fake content.',
        affectedAreas: ['Identity verification', 'Video calls', 'Executive communications', 'Customer onboarding'],
        mitigation: 'Implement multi-factor authentication, liveness detection, voice/video verification protocols, establish out-of-band confirmation for high-value requests.',
        regulations: ['Anti-Fraud Laws', 'Identity Theft Regulations', 'EU AI Act'],
        tags: ['high', 'security', 'emerging'],
      },
    ],
  },
];

export default function SeeTheRisksPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const [activeFilter, setActiveFilter] = useState(searchParams.get('filter') || 'all');
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

        return matchesSearch && matchesFilter;
      });

      return {
        ...category,
        risks: filteredRisks,
      };
    }).filter(category => category.risks.length > 0);
  }, [searchQuery, activeFilter]);

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
    }
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
            The AI risk landscape is evolving rapidly. From prompt injection attacks to compliance gaps under the EU AI Act, organizations face unprecedented challenges in securing their AI operations. Our comprehensive risk catalog helps you identify, understand, and mitigate the threats that matter most to your business.
          </p>
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
                      ? 'bg-teal text-white hover:bg-teal-600'
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
                <Badge className="bg-red-100 text-red-800 border border-red-300">Critical / Article 26</Badge>
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
              }}
              className="bg-teal hover:bg-teal-600"
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
                              <div className="flex items-center gap-3 mb-3">
                                <h3 className="text-xl font-bold text-gray-900">{risk.title}</h3>
                                <Badge className={`${getRiskBadgeColor(risk.level)} border font-semibold uppercase text-xs`}>
                                  {risk.level}
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
                                <p className="text-gray-700 leading-relaxed">{risk.details}</p>
                              </div>

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
                                <p className="text-gray-700 leading-relaxed">{risk.mitigation}</p>
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
            <Button
              onClick={() => (window.location.href = '/free-assessment')}
              className="bg-teal hover:bg-teal-600 text-lg px-8 py-6"
            >
              Get Free Risk Assessment
            </Button>
            <Button
              onClick={() => (window.location.href = '/contact')}
              variant="outline"
              className="border-2 border-teal text-teal hover:bg-teal-50 text-lg px-8 py-6"
            >
              Contact Our Experts
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
