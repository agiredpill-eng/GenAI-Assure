'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useCookieConsent } from '@/lib/cookie-consent';
import { Settings, Phone, Mail } from 'lucide-react';

const footerNav = {
  solutions: [
    { name: 'All Solutions', href: '/use-cases' },
    { name: 'Microsoft 365 / Workspace', href: '/use-cases#microsoft-365' },
    { name: 'Workflow Automation', href: '/use-cases#workflow' },
    { name: 'Custom Agents', href: '/use-cases#agents' },
  ],
  resources: [
    { name: 'Framework (PDF)', href: '/framework' },
    { name: 'Articles & Guides', href: '/resources' },
    { name: 'FAQ', href: '/faq' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ],
  legal: [
    { name: 'Privacy', href: '/privacy' },
    { name: 'Cookies', href: '/cookies' },
  ],
};

export default function Footer() {
  const { openPreferencesModal } = useCookieConsent();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t borderElsa-card mt-auto relative">
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'radial-gradient(circle at top, rgba(185,255,44,0.15) 0%, transparent 70%)',
      }}></div>
      <div className="absolute inset-0 opacity-50" style={{
        boxShadow: '0 -10px 40px rgba(185,255,44,0.05)',
      }}></div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Row 1: Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Brand / Value Prop / CTA */}
          <div>
            <Link href="/" className="inline-block mb-4 hover:drop-shadow-[0_0_8px_rgba(185,255,44,0.6)] transition-all">
              <Image
                src="/image.png"
                alt="ELSA AI"
                width={180}
                height={50}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-sm text-textElsa-secondary mb-6 max-w-xs">
              Ethical · Legal · Societal · Accountable AI Operations
            </p>
            <a
              href="https://elsaai.co.uk/free-assessment"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-3 text-sm font-semibold text-textElsa-primary bg-transparent border border-[#B9FF2C] hover:text-[#B9FF2C] hover:shadow-[0_0_20px_rgba(185,255,44,0.6)] hover:drop-shadow-[0_0_10px_rgba(185,255,44,0.8)] rounded-sm transition-all shadow-sm hover:shadow-[0_0_20px_rgba(185,255,44,0.6)] transform hover:scale-[1.02] hover:bg-[#B9FF2C]/10"
            >
              Get Your Readiness Assessment
            </a>
          </div>

          {/* Column 2: Solutions */}
          <div>
            <h3 className="text-sm font-semibold text-textElsa-primary mb-4">Solutions</h3>
            <ul className="space-y-3">
              {footerNav.solutions.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-textElsa-secondary hover:text-[#B9FF2C] hover:drop-shadow-[0_0_8px_rgba(185,255,44,0.6)] transition-all"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources / Company */}
          <div>
            <h3 className="text-sm font-semibold text-textElsa-primary mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerNav.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-textElsa-secondary hover:text-[#B9FF2C] hover:drop-shadow-[0_0_8px_rgba(185,255,44,0.6)] transition-all"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-sm font-semibold text-textElsa-primary mb-4 mt-8">Company</h3>
            <ul className="space-y-3">
              {footerNav.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-textElsa-secondary hover:text-[#B9FF2C] hover:drop-shadow-[0_0_8px_rgba(185,255,44,0.6)] transition-all"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Legal & Company Info */}
          <div>
            <h3 className="text-sm font-semibold text-textElsa-primary mb-4">Legal & Company Info</h3>
            <ul className="space-y-3">
              {footerNav.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-textElsa-secondary hover:text-[#B9FF2C] hover:drop-shadow-[0_0_8px_rgba(185,255,44,0.6)] transition-all"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  onClick={openPreferencesModal}
                  className="text-sm text-textElsa-secondary hover:text-[#B9FF2C] hover:drop-shadow-[0_0_8px_rgba(185,255,44,0.6)] transition-all flex items-center gap-1"
                  aria-label="Manage cookie preferences"
                >
                  <Settings className="h-3 w-3" aria-hidden="true" />
                  Manage Cookies
                </button>
              </li>
            </ul>

            <div className="mt-6 space-y-3">
              <div>
                <p className="text-sm font-semibold text-textElsa-primary mb-2">Registered office</p>
                <p className="text-sm text-textElsa-secondary">
                  ELSA AI Ltd<br />
                  124 City Road<br />
                  London, England, EC1V 2NX
                </p>
              </div>
              
              <div>
                <p className="text-sm font-semibold text-textElsa-primary mb-2">Contact</p>
                <div className="space-y-2">
                  <a
                    href="tel:+447715995735"
                    className="text-sm text-textElsa-secondary hover:text-[#B9FF2C] hover:drop-shadow-[0_0_8px_rgba(185,255,44,0.6)] transition-all flex items-center gap-1"
                  >
                    <Phone className="h-3 w-3" />
                    +44 771 5995 735
                  </a>
                  <a
                    href="mailto:contact@elsaai.co.uk"
                    className="text-sm text-textElsa-secondary hover:text-[#B9FF2C] hover:drop-shadow-[0_0_8px_rgba(185,255,44,0.6)] transition-all flex items-center gap-1"
                  >
                    <Mail className="h-3 w-3" />
                    contact@elsaai.co.uk
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: Bottom Bar */}
        <hr className="borderElsa-card mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-textElsa-secondary">
          <p className="text-center sm:text-left">
            United Kingdom · Serving Organisations Globally
          </p>
          <p>© {currentYear} ELSA AI Ltd</p>
        </div>
      </div>
    </footer>
  );
}
