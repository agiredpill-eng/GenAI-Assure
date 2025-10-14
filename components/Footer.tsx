'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useCookieConsent } from '@/lib/cookie-consent';
import { Settings } from 'lucide-react';

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

  return (
    <footer className="bg-[#0F172A] border-t border-[#1E293B] mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/image.png"
                alt="ELSA AI"
                width={180}
                height={50}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-sm text-[#94A3B8] mb-6 max-w-xs">
              Ethical · Legal · Societal · Accountable AI Operations
            </p>
            <Link
              href="/see-the-risks"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 rounded-lg transition-all shadow-sm hover:shadow-md"
            >
              See the Risks Now
            </Link>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Solutions</h3>
            <ul className="space-y-3">
              {footerNav.solutions.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#94A3B8] hover:text-[#0891B2] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerNav.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#94A3B8] hover:text-[#0891B2] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-sm font-semibold text-white mb-4 mt-8">Company</h3>
            <ul className="space-y-3">
              {footerNav.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#94A3B8] hover:text-[#0891B2] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerNav.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#94A3B8] hover:text-[#0891B2] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  onClick={openPreferencesModal}
                  className="text-sm text-[#94A3B8] hover:text-[#0891B2] transition-colors flex items-center gap-1"
                  aria-label="Manage cookie preferences"
                >
                  <Settings className="h-3 w-3" aria-hidden="true" />
                  Manage Cookies
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#94A3B8] border-t border-[#1E293B] pt-8">
          <p className="text-center sm:text-left">
            United Kingdom · Serving Organizations Globally
          </p>
          <div className="flex items-center gap-4">
            <p>© 2025 ELSA AI</p>
            <a
              href="mailto:contact@elsaai.co.uk"
              className="hover:text-[#0891B2] transition-colors"
            >
              contact@elsaai.co.uk
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
