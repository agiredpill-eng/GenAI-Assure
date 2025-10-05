'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Compass, CircleCheck as CheckCircle2 } from 'lucide-react';

const navigation = [
  { name: 'Solution', href: '/solution' },
  { name: 'Free Assessment', href: '/free-assessment' },
  { name: 'See The Risk Now', href: '/see-the-risks' },
  { name: 'Resources', href: '/resources' },
  { name: 'Contact Us', href: '/contact' },
  { name: 'About Us', href: '/about' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-white border-b border-gray-200'
      }`}
      style={{ boxShadow: scrolled ? '0 1px 3px rgba(0,0,0,0.1)' : 'none' }}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative">
                <Compass className="h-7 w-7 text-[#0F172A]" strokeWidth={2.5} />
                <CheckCircle2 className="h-3 w-3 text-[#0891B2] absolute -bottom-0.5 -right-0.5" strokeWidth={3} />
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-xl font-bold text-[#0F172A] tracking-tight">ELSA</span>
                <span className="text-xl font-bold text-[#0891B2] tracking-tight">AI</span>
              </div>
            </Link>
            <div className="hidden lg:block h-6 w-px bg-gray-300 mx-2"></div>
            <p className="hidden lg:block text-xs text-[#64748B] font-medium">
              Ethical · Legal · Societal · Accountable AI Operations
            </p>
          </div>

          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-[#475569] hover:text-[#0891B2] hover:bg-gray-50 rounded-md transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <button
            type="button"
            className="lg:hidden rounded-md p-2 text-gray-700 hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Toggle menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-3 py-2 text-base font-medium text-[#475569] hover:text-[#0891B2] hover:bg-gray-50 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
