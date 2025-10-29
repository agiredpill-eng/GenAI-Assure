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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Resources & Insights
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Expert guidance on AI governance, compliance, and security. Stay informed about the latest
            regulatory requirements and best practices for managing AI risks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/resources/${post.slug}`}
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-gray-200 hover:border-teal-300"
            >
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-teal-100 text-teal-700 text-xs font-semibold rounded-full">
                    {post.category}
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                  {post.title}
                </h2>

                <p className="text-gray-700 leading-relaxed mb-4">
                  {post.summary}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-teal-600 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="bg-teal-50 border-2 border-teal-200 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Need Personalized Guidance?
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Our team can provide tailored advice for your specific AI governance challenges.
            Get started with a free assessment to understand your unique requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://elsaai.co.uk/free-assessment"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-teal hover:bg-teal-600 rounded-lg transition-all shadow-lg hover:shadow-xl"
            >
              Get Your Readiness Assessment
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-teal bg-white hover:bg-gray-50 rounded-lg transition-all border-2 border-teal shadow-sm hover:shadow-md"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
