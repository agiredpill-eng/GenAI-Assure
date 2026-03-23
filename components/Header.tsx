'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Image from 'next/image';

/** Anchors match `id` on /use-cases (Use Case Library — 21 scenarios) */
const solutionsMenu = {
  'Productivity & collaboration': [
    { name: 'Microsoft 365 Copilot & Workspace AI', href: '/use-cases#microsoft-365-copilot-google-workspace' },
    { name: 'Public AI Chatbots (ChatGPT, Gemini…)', href: '/use-cases#public-ai-chatbots' },
    { name: 'Service Desk & ITSM Copilots', href: '/use-cases#service-desk-itsm' },
    { name: 'Knowledge Bases & Enterprise RAG', href: '/use-cases#enterprise-rag' },
    { name: 'Marketing Content Generation', href: '/use-cases#marketing-content-scale' },
    { name: 'Contact Centre AI Augmentation', href: '/use-cases#contact-centre-ai' },
    { name: 'Workflow Automation & Orchestrators', href: '/use-cases#workflow-orchestrators' },
  ],
  'CRM, finance & risk': [
    { name: 'CRM & Sales AI', href: '/use-cases#crm-sales-ai' },
    { name: 'AI in People Decisions (HR, performance)', href: '/use-cases#ai-people-decisions' },
    { name: 'Legal & Document Review', href: '/use-cases#legal-document-review' },
    { name: 'Finance & Reporting Copilots', href: '/use-cases#finance-reporting-copilots' },
    { name: 'Procurement & Supply Chain AI', href: '/use-cases#procurement-supply-chain-ai' },
    { name: 'AI Video & Avatar Content', href: '/use-cases#ai-video-avatar' },
    { name: 'Patient-Facing Healthcare AI', href: '/use-cases#patient-facing-healthcare-ai' },
  ],
  'Platform & governance': [
    { name: 'Data Pipelines & LLM Gateways', href: '/use-cases#data-pipelines-llm-gateways' },
    { name: 'Low-Code AI App Builders', href: '/use-cases#low-code-ai-builders' },
    { name: 'AI Agents & Autonomous Workflows', href: '/use-cases#ai-agents-autonomous' },
    { name: 'Cross-Border AI Deployments', href: '/use-cases#cross-border-ai' },
    { name: 'Third-Party AI Vendor Due Diligence', href: '/use-cases#third-party-vendor-diligence' },
    { name: 'SOC 2 / ISO 27001 Audit (AI in Scope)', href: '/use-cases#soc2-iso-audit-ai' },
    { name: 'Building an AI Governance Function', href: '/use-cases#ai-governance-from-scratch' },
  ],
};

const resourcesMenu = [
  { name: 'Framework (PDF)', href: '/framework' },
  { name: 'Articles & Guides', href: '/resources' },
  { name: 'Case Studies', href: '/resources#case-studies' }
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  
  // Add refs for timeout management
  const solutionsTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const resourcesTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileSolutionsOpen(false);
    setMobileResourcesOpen(false);
  };

  // Helper functions for delayed menu closing
  const handleSolutionsMouseEnter = () => {
    if (solutionsTimeoutRef.current) {
      clearTimeout(solutionsTimeoutRef.current);
      solutionsTimeoutRef.current = null;
    }
    setSolutionsOpen(true);
  };

  const handleSolutionsMouseLeave = () => {
    solutionsTimeoutRef.current = setTimeout(() => {
      setSolutionsOpen(false);
    }, 150); // 150ms delay
  };

  const handleResourcesMouseEnter = () => {
    if (resourcesTimeoutRef.current) {
      clearTimeout(resourcesTimeoutRef.current);
      resourcesTimeoutRef.current = null;
    }
    setResourcesOpen(true);
  };

  const handleResourcesMouseLeave = () => {
    resourcesTimeoutRef.current = setTimeout(() => {
      setResourcesOpen(false);
    }, 150); // 150ms delay
  };

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (solutionsTimeoutRef.current) {
        clearTimeout(solutionsTimeoutRef.current);
      }
      if (resourcesTimeoutRef.current) {
        clearTimeout(resourcesTimeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      <div className="hidden md:block bg-body border-b borderElsa-card py-2">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-center tracking-wide text-textElsa-primary font-medium transition-colors duration-200 hover:text-[#B9FF2C] hover:drop-shadow-[0_0_8px_rgba(185,255,44,0.6)]">
            Ethical · Legal · Societal · Accountable AI Operations
          </p>
        </div>
      </div>

      <header className="sticky top-0 z-[100] bg-body py-4 transition-all duration-300">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between bg-cardElsa-dark rounded-full border-2 border-[#B9FF2C] px-6 shadow-[0_16px_40px_rgba(0,0,0,0.6),0_0_20px_rgba(185,255,44,0.3)]">
            <Link href="/" className="flex items-center gap-2 text-lg font-bold text-textElsa-primary hover:text-[#B9FF2C] hover:drop-shadow-[0_0_8px_rgba(185,255,44,0.6)] transition-all" onClick={closeMobileMenu}>
              <div className="relative">
                <Image
                  src="/ELSA_AI_Desing_Logo.png"
                  alt="ELSA AI Logo"
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full object-cover border-2 border-[#B9FF2C]"
                  priority
                />
                <span className="absolute -inset-0.5 rounded-full ring-1 ring-[#B9FF2C]/30"></span>
              </div>
              ELSA AI
            </Link>

            <div className="hidden lg:flex items-center gap-8">
              <div
                className="relative"
                onMouseEnter={handleSolutionsMouseEnter}
                onMouseLeave={handleSolutionsMouseLeave}
              >
                <button
                  className="flex items-center gap-1 px-2 py-2 text-sm font-medium text-textElsa-primary hover:text-[#B9FF2C] hover:drop-shadow-[0_0_8px_rgba(185,255,44,0.6)] transition-all tracking-wide min-h-[44px]"
                  aria-expanded={solutionsOpen}
                  aria-controls="solutions-menu"
                  aria-haspopup="true"
                  title="Use Case Library — 21 real-world scenarios"
                >
                  <span className="flex items-center gap-1.5">
                    Solutions
                    <span
                      className="rounded px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide bg-[#B9FF2C]/15 text-[#B9FF2C] border border-[#B9FF2C]/30"
                      aria-hidden="true"
                    >
                      21
                    </span>
                  </span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${solutionsOpen ? 'rotate-180' : ''}`} />
                </button>

                {solutionsOpen && (
                  <div
                    id="solutions-menu"
                    className="absolute left-0 top-full mt-2 w-[min(100vw-2rem,920px)] max-w-[920px] bg-cardElsa-dark rounded-lg shadow-[0_16px_40px_rgba(0,0,0,0.6)] border borderElsa-card p-6 animate-in fade-in slide-in-from-top-2 duration-200"
                    onMouseEnter={handleSolutionsMouseEnter}
                    onMouseLeave={handleSolutionsMouseLeave}
                  >
                    <div className="mb-6 pb-5 border-b borderElsa-card">
                      <p className="text-xs font-bold uppercase tracking-wider text-[#B9FF2C] mb-1">GenAI Assure™</p>
                      <p className="text-base font-bold text-textElsa-primary">Use Case Library</p>
                      <p className="text-sm text-textElsa-secondary mt-1">
                        21 real-world scenarios where AI governance matters — jump to a scenario below or browse the full library.
                      </p>
                    </div>
                    <div className="grid grid-cols-3 gap-8">
                      {Object.entries(solutionsMenu).map(([category, items]) => (
                        <div key={category}>
                          <h3 className="text-xs font-bold text-textElsa-primary uppercase tracking-wider mb-3">
                            {category}
                          </h3>
                          <ul className="space-y-2">
                            {items.map((item) => (
                              <li key={item.name}>
                                <Link
                                  href={item.href}
                                  className="block px-3 py-2 text-sm text-textElsa-secondary hover:text-[#B9FF2C] hover:bg-cardElsa-dark rounded-md transition-all hover:drop-shadow-[0_0_8px_rgba(185,255,44,0.6)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#B9FF2C] border border-transparent hover:border-[#B9FF2C]/30"
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 pt-6 border-t borderElsa-card">
                      <Link
                        href="/use-cases"
                        className="inline-flex items-center text-sm font-semibold text-[#B9FF2C] hover:text-[#B9FF2C] hover:drop-shadow-[0_0_8px_rgba(185,255,44,0.6)] transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#B9FF2C] rounded px-2 py-1"
                      >
                        View full Use Case Library (21 scenarios) →
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <div
                className="relative"
                onMouseEnter={handleResourcesMouseEnter}
                onMouseLeave={handleResourcesMouseLeave}
              >
                <button
                  className="flex items-center gap-1 px-2 py-2 text-sm font-medium text-textElsa-primary hover:text-[#B9FF2C] hover:drop-shadow-[0_0_8px_rgba(185,255,44,0.6)] transition-all tracking-wide min-h-[44px]"
                  aria-expanded={resourcesOpen}
                  aria-controls="resources-menu"
                  aria-haspopup="true"
                >
                  Resources
                  <ChevronDown className={`h-4 w-4 transition-transform ${resourcesOpen ? 'rotate-180' : ''}`} />
                </button>

                {resourcesOpen && (
                  <div
                    id="resources-menu"
                    className="absolute left-0 top-full mt-2 w-56 bg-cardElsa-dark rounded-lg shadow-[0_16px_40px_rgba(0,0,0,0.6)] border borderElsa-card p-4 animate-in fade-in slide-in-from-top-2 duration-200"
                    onMouseEnter={handleResourcesMouseEnter}
                    onMouseLeave={handleResourcesMouseLeave}
                  >
                    <ul className="space-y-1">
                      {resourcesMenu.map((item) => (
                        <li key={item.name}>
                          <Link
                            href={item.href}
                            className="block px-3 py-2 text-sm text-textElsa-secondary hover:text-[#B9FF2C] hover:bg-cardElsa-dark rounded-md transition-all hover:drop-shadow-[0_0_8px_rgba(185,255,44,0.6)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#B9FF2C] border border-transparent hover:border-[#B9FF2C]/30"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <Link
                href="/about"
                className="px-2 py-2 text-sm font-medium text-textElsa-primary hover:text-[#B9FF2C] hover:drop-shadow-[0_0_8px_rgba(185,255,44,0.6)] transition-all tracking-wide min-h-[44px] flex items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#B9FF2C] rounded"
              >
                About
              </Link>

              <Link
                href="/contact"
                className="px-2 py-2 text-sm font-medium text-textElsa-primary hover:text-[#B9FF2C] hover:drop-shadow-[0_0_8px_rgba(185,255,44,0.6)] transition-all tracking-wide min-h-[44px] flex items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#B9FF2C] rounded"
              >
                Contact
              </Link>

              <Link
                href="/get-your-readiness-assessment"
                className="ml-auto px-5 py-2.5 text-sm font-semibold text-textElsa-primary bg-transparent border border-[#B9FF2C] hover:text-[#B9FF2C] hover:shadow-[0_0_20px_rgba(185,255,44,0.6)] hover:drop-shadow-[0_0_10px_rgba(185,255,44,0.8)] rounded-sm transition-all shadow-sm hover:shadow-[0_0_20px_rgba(185,255,44,0.6)] transform hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#B9FF2C] min-h-[44px] flex items-center hover:bg-[#B9FF2C]/10"
              >
                Get Your Readiness Assessment
              </Link>
            </div>

            <button
              type="button"
              className="lg:hidden rounded-md p-2 text-textElsa-primary hover:text-[#B9FF2C] hover:bg-cardElsa-dark hover:drop-shadow-[0_0_8px_rgba(185,255,44,0.6)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#B9FF2C] min-h-[44px] min-w-[44px] transition-all"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="lg:hidden fixed inset-0 top-16 bg-body overflow-y-auto pb-6">
              <div className="px-4 py-6 space-y-4">
                <Link
                  href="/get-your-readiness-assessment"
                  className="block w-full px-6 py-3 text-center text-base font-semibold text-textElsa-primary bg-transparent border border-[#B9FF2C] hover:text-[#B9FF2C] hover:shadow-[0_0_20px_rgba(185,255,44,0.6)] hover:drop-shadow-[0_0_10px_rgba(185,255,44,0.8)] rounded-sm transition-all shadow-sm hover:shadow-[0_0_20px_rgba(185,255,44,0.6)] transform hover:scale-[1.02] min-h-[44px] hover:bg-[#B9FF2C]/10"
                  onClick={closeMobileMenu}
                >
                  Get Your Readiness Assessment
                </Link>

                <div className="border-t borderElsa-card pt-4">
                  <button
                    onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                    className="flex items-center justify-between w-full px-4 py-3 text-base font-medium text-textElsa-primary hover:text-[#B9FF2C] hover:bg-cardElsa-dark hover:drop-shadow-[0_0_8px_rgba(185,255,44,0.6)] rounded-lg transition-all min-h-[44px]"
                    aria-expanded={mobileSolutionsOpen}
                    title="Use Case Library — 21 real-world scenarios"
                  >
                    <span className="flex items-center gap-2">
                      Solutions
                      <span className="rounded px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide bg-[#B9FF2C]/15 text-[#B9FF2C] border border-[#B9FF2C]/30">
                        21
                      </span>
                    </span>
                    <ChevronDown className={`h-5 w-5 transition-transform ${mobileSolutionsOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {mobileSolutionsOpen && (
                    <div className="mt-2 pl-4 space-y-4">
                      <div className="px-4 py-3 rounded-lg bg-cardElsa-dark/80 border border-[#B9FF2C]/20 mb-2">
                        <p className="text-xs font-bold uppercase tracking-wider text-[#B9FF2C]">Use Case Library</p>
                        <p className="text-sm font-semibold text-textElsa-primary mt-0.5">21 real-world scenarios</p>
                        <p className="text-xs text-textElsa-secondary mt-1 leading-snug">
                          AI governance across productivity, CRM, platforms, and compliance.
                        </p>
                      </div>
                      {Object.entries(solutionsMenu).map(([category, items]) => (
                        <div key={category}>
                          <h3 className="text-xs font-bold text-textElsa-secondary uppercase tracking-wider mb-2 px-4">
                            {category}
                          </h3>
                          <ul className="space-y-1">
                            {items.map((item) => (
                              <li key={item.name}>
                                <Link
                                  href={item.href}
                                  className="block px-4 py-2 text-sm text-textElsa-secondary hover:text-[#B9FF2C] hover:bg-cardElsa-dark hover:drop-shadow-[0_0_8px_rgba(185,255,44,0.6)] rounded-md transition-all min-h-[44px] flex items-center"
                                  onClick={closeMobileMenu}
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                      <Link
                        href="/use-cases"
                        className="block px-4 py-2 text-sm font-semibold text-[#B9FF2C] hover:text-[#B9FF2C] hover:drop-shadow-[0_0_8px_rgba(185,255,44,0.6)] transition-all min-h-[44px] flex items-center"
                        onClick={closeMobileMenu}
                      >
                        View full Use Case Library (21 scenarios) →
                      </Link>
                    </div>
                  )}
                </div>

                <div>
                  <button
                    onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                    className="flex items-center justify-between w-full px-4 py-3 text-base font-medium text-textElsa-primary hover:text-[#B9FF2C] hover:bg-cardElsa-dark hover:drop-shadow-[0_0_8px_rgba(185,255,44,0.6)] rounded-lg transition-all min-h-[44px]"
                    aria-expanded={mobileResourcesOpen}
                  >
                    Resources
                    <ChevronDown className={`h-5 w-5 transition-transform ${mobileResourcesOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {mobileResourcesOpen && (
                    <ul className="mt-2 pl-4 space-y-1">
                      {resourcesMenu.map((item) => (
                        <li key={item.name}>
                          <Link
                            href={item.href}
                            className="block px-4 py-2 text-sm text-textElsa-secondary hover:text-[#B9FF2C] hover:bg-cardElsa-dark hover:drop-shadow-[0_0_8px_rgba(185,255,44,0.6)] rounded-md transition-all min-h-[44px] flex items-center"
                            onClick={closeMobileMenu}
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <Link
                  href="/about"
                  className="block px-4 py-3 text-base font-medium text-textElsa-primary hover:text-[#B9FF2C] hover:bg-cardElsa-dark hover:drop-shadow-[0_0_8px_rgba(185,255,44,0.6)] rounded-lg transition-all min-h-[44px]"
                  onClick={closeMobileMenu}
                >
                  About
                </Link>

                <Link
                  href="/contact"
                  className="block px-4 py-3 text-base font-medium text-textElsa-primary hover:text-[#B9FF2C] hover:bg-cardElsa-dark hover:drop-shadow-[0_0_8px_rgba(185,255,44,0.6)] rounded-lg transition-all min-h-[44px]"
                  onClick={closeMobileMenu}
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}
