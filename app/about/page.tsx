export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">About ELSA AI</h1>
      <div className="max-w-3xl">
        <p className="text-xl text-gray-600 leading-relaxed mb-8">
          We are dedicated to helping organizations navigate the complex landscape of AI governance.
        </p>
        <div className="prose prose-lg text-gray-700">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="mb-6 leading-relaxed">
            ELSA AI provides comprehensive solutions for ethical, legal, societal, and accountable AI operations.
            We believe that responsible AI governance is essential for building trust and ensuring sustainable AI deployment.
          </p>
          <h2 className="text-2xl font-bold mb-4">Our Approach</h2>
          <p className="leading-relaxed">
            Through our four-pillar framework—Ethical, Legal, Societal, and Accountable—we help organizations
            implement robust AI governance practices that align with international standards and best practices.
          </p>
        </div>
      </div>
    </div>
  );
}
