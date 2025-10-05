import Link from 'next/link';

const footerLinks = [
  { name: 'Cookies', href: '/cookies' },
  { name: 'Privacy', href: '/privacy' },
  { name: 'Solution', href: '/solution' },
  { name: 'Free Assessment', href: '/free-assessment' },
  { name: 'See The Risk Now', href: '/see-the-risks' },
  { name: 'Resources', href: '/resources' },
  { name: 'Contact Us', href: '/contact' },
  { name: 'About Us', href: '/about' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] border-t border-[#1E293B] mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-[#94A3B8] mb-6">
          {footerLinks.map((link, index) => (
            <span key={link.name} className="flex items-center">
              <Link
                href={link.href}
                className="hover:text-[#0891B2] transition-colors"
              >
                {link.name}
              </Link>
              {index < footerLinks.length - 1 && (
                <span className="ml-4 text-[#475569]">·</span>
              )}
            </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#94A3B8] border-t border-[#1E293B] pt-6">
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
