export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h1>
      <p className="text-xl text-gray-600 leading-relaxed mb-8">
        Get in touch with our team to discuss your AI governance needs.
      </p>
      <div className="max-w-2xl">
        <p className="text-gray-700 mb-4">
          <strong>Email:</strong> <a href="mailto:contact@elsaai.co.uk" className="text-teal hover:underline">contact@elsaai.co.uk</a>
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Address:</strong><br />
          123 Business Street<br />
          London, UK W1A 1AA
        </p>
      </div>
    </div>
  );
}
