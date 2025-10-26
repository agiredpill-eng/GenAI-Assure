'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Image from 'next/image';

const solutionsMenu = {
  'Productivity & Ops': [
    { name: 'Microsoft 365 / Workspace AI', href: '/use-cases#microsoft-365' },
    { name: 'ITSM Copilots', href: '/use-cases#itsm' },
    { name: 'Knowledge Assistants', href: '/use-cases#knowledge' },
    { name: 'Content Supply Chain', href: '/use-cases#content' }
  ],
  'Customer & Growth': [
    { name: 'CRM & Sales AI', href: '/use-cases#crm' },
    { name: 'Contact Center', href: '/use-cases#contact-center' },
    { name: 'HR & People Ops', href: '/use-cases#hr' }
  ],
  'Platform & Control': [
    { name: 'Workflow Automation', href: '/use-cases#workflow' },
    { name: 'Custom Agents', href: '/use-cases#agents' },
    { name: 'Data Pipelines / LLM Gateways', href: '/use-cases#pipelines' },
    { name: 'Low-Code Apps', href: '/use-cases#low-code' },
    { name: 'Finance Copilots', href: '/use-cases#finance' },
    { name: 'Legal Support', href: '/use-cases#legal' }
  ]
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
      <div className="hidden md:block bg-gray-900 text-white py-2">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-center tracking-wide">
            Ethical · Legal · Societal · Accountable AI Operations
          </p>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
          scrolled ? 'shadow-md' : 'border-b border-gray-200'
        }`}
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center" onClick={closeMobileMenu}>
              <Image
                src="/ELSAAI_Header_Logo.JPG"
                alt="ELSA AI"
                width={120}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </Link>

            <div className="hidden lg:flex items-center gap-8">
              <div
                className="relative"
                onMouseEnter={handleSolutionsMouseEnter}
                onMouseLeave={handleSolutionsMouseLeave}
              >
                <button
                  className="flex items-center gap-1 px-2 py-2 text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors tracking-wide min-h-[44px]"
                  aria-expanded={solutionsOpen}
                  aria-controls="solutions-menu"
                  aria-haspopup="true"
                >
                  Solutions
                  <ChevronDown className={`h-4 w-4 transition-transform ${solutionsOpen ? 'rotate-180' : ''}`} />
                </button>

                {solutionsOpen && (
                  <div
                    id="solutions-menu"
                    className="absolute left-0 top-full mt-2 w-[800px] bg-white rounded-lg shadow-xl border border-gray-200 p-6 animate-in fade-in slide-in-from-top-2 duration-200"
                    onMouseEnter={handleSolutionsMouseEnter}
                    onMouseLeave={handleSolutionsMouseLeave}
                  >
                    <div className="grid grid-cols-3 gap-8">
                      {Object.entries(solutionsMenu).map(([category, items]) => (
                        <div key={category}>
                          <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-3">
                            {category}
                          </h3>
                          <ul className="space-y-2">
                            {items.map((item) => (
                              <li key={item.name}>
                                <Link
                                  href={item.href}
                                  className="block px-3 py-2 text-sm text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded-md transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-600"
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <Link
                        href="/use-cases"
                        className="inline-flex items-center text-sm font-semibold text-teal-600 hover:text-teal-700 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-600 rounded px-2 py-1"
                      >
                        View All Solutions →
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
                  className="flex items-center gap-1 px-2 py-2 text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors tracking-wide min-h-[44px]"
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
                    className="absolute left-0 top-full mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 p-4 animate-in fade-in slide-in-from-top-2 duration-200"
                    onMouseEnter={handleResourcesMouseEnter}
                    onMouseLeave={handleResourcesMouseLeave}
                  >
                    <ul className="space-y-1">
                      {resourcesMenu.map((item) => (
                        <li key={item.name}>
                          <Link
                            href={item.href}
                            className="block px-3 py-2 text-sm text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded-md transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-600"
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
                className="px-2 py-2 text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors tracking-wide min-h-[44px] flex items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-600 rounded"
              >
                About
              </Link>

              <Link
                href="/contact"
                className="px-2 py-2 text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors tracking-wide min-h-[44px] flex items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-600 rounded"
              >
                Contact
              </Link>

              <a
                href="https://elsaai.co.uk/free-assessment"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto px-6 py-2.5 text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 rounded-lg transition-all shadow-sm hover:shadow-md transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 min-h-[44px] flex items-center"
              >
                Get My Free Risk Assessment
              </a>
            </div>

            <button
              type="button"
              className="lg:hidden rounded-md p-2 text-gray-700 hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-600 min-h-[44px] min-w-[44px]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="lg:hidden fixed inset-0 top-16 bg-white overflow-y-auto pb-6">
              <div className="px-4 py-6 space-y-4">
                <a
                  href="https://elsaai.co.uk/free-assessment"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-6 py-3 text-center text-base font-semibold text-white bg-teal-600 hover:bg-teal-700 rounded-lg transition-all shadow-sm min-h-[44px]"
                  onClick={closeMobileMenu}
                >
                  Get My Free Risk Assessment
                </a>

                <div className="border-t border-gray-200 pt-4">
                  <button
                    onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                    className="flex items-center justify-between w-full px-4 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-lg transition-colors min-h-[44px]"
                    aria-expanded={mobileSolutionsOpen}
                  >
                    Solutions
                    <ChevronDown className={`h-5 w-5 transition-transform ${mobileSolutionsOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {mobileSolutionsOpen && (
                    <div className="mt-2 pl-4 space-y-4">
                      {Object.entries(solutionsMenu).map(([category, items]) => (
                        <div key={category}>
                          <h3 className="text-xs font-bold text-gray-600 uppercase tracking-wider mb-2 px-4">
                            {category}
                          </h3>
                          <ul className="space-y-1">
                            {items.map((item) => (
                              <li key={item.name}>
                                <Link
                                  href={item.href}
                                  className="block px-4 py-2 text-sm text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded-md transition-colors min-h-[44px] flex items-center"
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
                        className="block px-4 py-2 text-sm font-semibold text-teal-600 hover:text-teal-700 transition-colors min-h-[44px] flex items-center"
                        onClick={closeMobileMenu}
                      >
                        View All Solutions →
                      </Link>
                    </div>
                  )}
                </div>

                <div>
                  <button
                    onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                    className="flex items-center justify-between w-full px-4 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-lg transition-colors min-h-[44px]"
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
                            className="block px-4 py-2 text-sm text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded-md transition-colors min-h-[44px] flex items-center"
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
                  className="block px-4 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-lg transition-colors min-h-[44px]"
                  onClick={closeMobileMenu}
                >
                  About
                </Link>

                <Link
                  href="/contact"
                  className="block px-4 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-lg transition-colors min-h-[44px]"
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
