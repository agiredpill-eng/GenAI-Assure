export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          AI Governance Made Simple
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          ELSA AI helps organizations implement ethical, legal, societal, and accountable AI operations with confidence and transparency.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/free-assessment"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-teal hover:bg-teal-600 rounded-lg transition-colors shadow-sm"
          >
            Start Free Assessment
          </a>
          <a
            href="/solution"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-gray-700 bg-white hover:bg-gray-50 rounded-lg transition-colors border border-gray-300"
          >
            Explore Solutions
          </a>
        </div>
      </div>

      <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-teal-100 text-teal mb-4">
            <span className="text-2xl font-bold">E</span>
          </div>
          <h3 className="text-lg font-semibold mb-2">Ethical</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Ensure your AI systems align with ethical principles and values
          </p>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-teal-100 text-teal mb-4">
            <span className="text-2xl font-bold">L</span>
          </div>
          <h3 className="text-lg font-semibold mb-2">Legal</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Stay compliant with AI regulations and legal requirements
          </p>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-teal-100 text-teal mb-4">
            <span className="text-2xl font-bold">S</span>
          </div>
          <h3 className="text-lg font-semibold mb-2">Societal</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Consider broader societal impacts of your AI deployments
          </p>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-teal-100 text-teal mb-4">
            <span className="text-2xl font-bold">A</span>
          </div>
          <h3 className="text-lg font-semibold mb-2">Accountable</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Maintain transparency and accountability in AI operations
          </p>
        </div>
      </div>
    </div>
  );
}
