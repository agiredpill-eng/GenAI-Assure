import { Calendar, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const blogPosts = [
  {
    slug: 'eu-ai-act-deployer-obligations',
    title: 'EU AI Act Deployer Obligations: What You Need to Know',
    summary: 'Key requirements for organizations deploying third-party AI tools under Article 26 of the EU AI Act, including logging, oversight, and transparency obligations.',
    date: 'March 2025',
    readTime: '8 min',
    category: 'Compliance',
  },
  {
    slug: 'shadow-ai-hidden-compliance-risk',
    title: 'Shadow AI: The Hidden Compliance Risk',
    summary: 'How unsanctioned AI tools create security and regulatory gaps, and practical strategies for discovering and controlling shadow AI across your organization.',
    date: 'February 2025',
    readTime: '6 min',
    category: 'Security',
  },
  {
    slug: 'building-ai-governance-framework-90-days',
    title: 'Building an AI Governance Framework in 90 Days',
    summary: 'Practical steps to establish comprehensive AI oversight, from initial discovery to full implementation of controls, policies, and audit-ready documentation.',
    date: 'January 2025',
    readTime: '10 min',
    category: 'Governance',
  },
];

export default function ResourcesPage() {
  return (
    <div className="w-full bg-body">
      <div className="relative bg-body border-b borderElsa-card overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at center, rgba(94,250,195,0.1) 0%, transparent 70%)',
        }}></div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-textElsa-primary mb-6">
              <span className="text-[#B9FF2C]">Resources & Insights</span>
            </h1>
            <p className="text-lg sm:text-xl text-textElsa-secondary leading-relaxed max-w-3xl mx-auto">
              Expert guidance on AI governance, compliance, and security. Stay informed about the latest
              regulatory requirements and best practices for managing AI risks.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/resources/${post.slug}`}
              className="group bg-body rounded-lg overflow-hidden border border-[#B9FF2C]/30 hover:border-[#B9FF2C] shadow-[0_16px_40px_rgba(0,0,0,0.6)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.6),0_0_24px_rgba(94,250,195,0.45)] transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-[#B9FF2C] text-body text-xs font-semibold rounded-full">
                    {post.category}
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-textElsa-primary mb-3 group-hover:text-[#B9FF2C] transition-colors">
                  {post.title}
                </h2>

                <p className="text-textElsa-secondary leading-relaxed mb-4">
                  {post.summary}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-[#B9FF2C]/30">
                  <div className="flex items-center gap-4 text-sm text-textElsa-secondary">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-[#B9FF2C] group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="bg-body rounded-lg p-8 text-center border border-[#B9FF2C]/30 shadow-[0_16px_40px_rgba(0,0,0,0.6)]">
          <h3 className="text-2xl font-bold text-textElsa-primary mb-4">
            Need Personalized Guidance?
          </h3>
          <p className="text-textElsa-secondary mb-6 max-w-2xl mx-auto">
            Our team can provide tailored advice for your specific AI governance challenges.
            Get started with a free assessment to understand your unique requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://elsaai.co.uk/free-assessment"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-semibold text-textElsa-primary bg-transparent border border-[#B9FF2C] hover:text-[#B9FF2C] hover:shadow-[0_0_20px_rgba(185,255,44,0.6)] hover:drop-shadow-[0_0_10px_rgba(185,255,44,0.8)] rounded-sm transition-all shadow-sm hover:shadow-[0_0_20px_rgba(185,255,44,0.6)] transform hover:scale-[1.02] hover:bg-[#B9FF2C]/10"
            >
              Get Your Readiness Assessment
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-semibold text-textElsa-primary bg-transparent border border-[#B9FF2C] hover:text-[#B9FF2C] hover:shadow-[0_0_20px_rgba(185,255,44,0.6)] hover:drop-shadow-[0_0_10px_rgba(185,255,44,0.8)] rounded-sm transition-all shadow-sm hover:shadow-[0_0_20px_rgba(185,255,44,0.6)] transform hover:scale-[1.02] hover:bg-[#B9FF2C]/10"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
