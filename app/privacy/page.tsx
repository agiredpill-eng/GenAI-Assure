import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - ELSA AI',
  description: 'Privacy policy for ELSA AI and GenAI Assure™. Learn how we collect, use, and protect your personal information.',
  keywords: 'privacy policy, data protection, GDPR',
  alternates: {
    canonical: 'https://elsaai.co.uk/privacy',
  },
};

export default function PrivacyPage() {
  return (
    <div className="w-full bg-body">
      <div className="relative bg-body border-b borderElsa-card overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at center, rgba(94,250,195,0.1) 0%, transparent 70%)',
        }}></div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-textElsa-primary mb-2">
              <span className="text-[#B9FF2C]">Privacy Policy</span>
            </h1>
            <p className="text-lg sm:text-xl text-textElsa-secondary mb-10">
              ELSA AI Website Privacy Statement — Effective Date: 5 October 2025
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-3xl prose prose-lg text-textElsa-primary">
        <h2>Who we are</h2>
        <p>
          ELSA AI Ltd (“ELSA AI”, “we”, “us”, “our”) provides consultancy
          services to help organisations implement the GenAI Assure™ methodology.
        </p>

        <h2>1) Data Controller &amp; Contact</h2>
        <ul>
          <li>
            <strong>Controller:</strong> ELSA AI Ltd, 124 City Road, London,
            England, EC1V 2NX
          </li>
          <li>
            <strong>Data Protection Contact:</strong> contact@elsaai.co.uk
          </li>
          <li>
            <strong>Complaints:</strong> You can contact us, or complain to your
            local data protection authority (e.g., UK ICO: ico.org.uk).
          </li>
        </ul>

        <h2>2) What Personal Data We Collect</h2>
        <ul>
          <li>
            <strong>Website &amp; communications:</strong> name, work email,
            phone, company, job title, message content, meeting notes.
          </li>
          <li>
            <strong>Account &amp; billing (if applicable):</strong> billing
            contact, address, PO numbers, VAT/Tax IDs.
          </li>
          <li>
            <strong>Events &amp; downloads:</strong> registrations, attendance,
            preferences.
          </li>
          <li>
            <strong>Technical data:</strong> IP address, device/browser info,
            pages viewed, referrers, cookie IDs.
          </li>
        </ul>

        <h2>3) How We Collect It</h2>
        <ul>
          <li>Directly from you (forms, email, calls, meetings).</li>
          <li>Automatically via cookies/analytics (see Cookies).</li>
          <li>
            From third parties (event platforms, referrals, LinkedIn, processors
            we use on your instruction).
          </li>
        </ul>

        <h2>4) Why We Use Personal Data (Purposes &amp; Legal Bases)</h2>
        <ul>
          <li>
            <strong>Provide and improve our services</strong> (consulting
            delivery, support, QA) — <em>Performance of contract</em> /{" "}
            <em>Legitimate interests</em>.
          </li>
          <li>
            <strong>Pre-sales &amp; enquiries</strong> (responding to requests,
            demos, proposals) — <em>Legitimate interests</em>.
          </li>
          <li>
            <strong>Meetings, events, newsletters</strong> — <em>Consent</em>{" "}
            (where required) / <em>Legitimate interests</em>.
          </li>
          <li>
            <strong>Billing &amp; accounting</strong> — <em>Legal obligation</em>{" "}
            / <em>Performance of contract</em>.
          </li>
          <li>
            <strong>Security, fraud prevention, service integrity</strong> —{" "}
            <em>Legitimate interests</em> / <em>Legal obligation</em>.
          </li>
          <li>
            <strong>Recruitment</strong> — <em>Legitimate interests</em> /{" "}
            <em>Consent</em> (where required).
          </li>
        </ul>

        <h2>5) AI-Specific Disclosures</h2>
        <p>
          We may process business contact details and communications to deliver
          GenAI Assure™ services (e.g., drafting policies, risk registers,
          evidence maps).
        </p>
        <p>If we use AI tooling in delivery, we:</p>
        <ul>
          <li>limit inputs to the minimum necessary and avoid special category data;</li>
          <li>prefer private/workspace or self-hosted models where feasible;</li>
          <li>apply access controls and logging;</li>
          <li>do not allow providers to train on your data by contract where available;</li>
          <li>redact or pseudonymise where appropriate.</li>
        </ul>
        <p>
          If you share content for analysis (documents, prompts), you are
          responsible for ensuring you have a lawful basis to do so. We’ll
          process it as a <strong>processor</strong> under our services agreement
          and Data Processing Addendum (DPA).
        </p>

        <h2>6) Sharing Your Data</h2>
        <p>We share personal data only with:</p>
        <ul>
          <li>
            <strong>Service providers (processors):</strong> hosting, email,
            CRM, analytics, meeting tools, document management, e-signature.
          </li>
          <li>
            <strong>Professional advisers:</strong> legal, accounting, insurance.
          </li>
          <li>
            <strong>Event partners</strong> (if you register for a co-hosted session).
          </li>
          <li>
            <strong>Authorities</strong> where required by law.
          </li>
        </ul>
        <p>
          All processors are bound by contract (DPAs) and only act on our
          instructions.
        </p>

        <h2>7) International Transfers</h2>
        <p>
          If data is transferred outside the UK/EU, we use lawful transfer tools
          (e.g., UK IDTA/EU SCCs and additional safeguards). You can request a
          copy of the relevant clauses.
        </p>

        <h2>8) Retention</h2>
        <p>
          We keep personal data only as long as needed for the purpose collected,
          then delete or anonymise it. Typical periods: enquiries (12–24 months),
          contracts (7 years for tax), recruiting (12 months unless you consent
          to a talent pool).
        </p>

        <h2>9) Your Rights</h2>
        <p>
          You may have the right to <strong>access, rectify, erase, restrict,
          object,</strong> or <strong>port</strong> your personal data, and to{" "}
          <strong>withdraw consent</strong> where processing relies on consent.
          Contact <a href="mailto:contact@elsaai.co.uk">contact@elsaai.co.uk</a>.
          We’ll respond within applicable legal timeframes.
        </p>

        <h2>10) Cookies &amp; Analytics</h2>
        <ul>
          <li>
            We use necessary cookies for site operation and optional analytics to
            improve content.
          </li>
          <li>
            Where required, we present a cookie banner to collect your
            preferences (Accept / Reject / Manage).
          </li>
          <li>
            You can change preferences anytime via <strong>Cookie Settings</strong> in
            the footer and/or your browser settings.
          </li>
        </ul>
        <p>Summary of tools (examples—replace with your stack):</p>
        <ul>
          <li>
            <strong>Analytics:</strong> [e.g., Plausible/GA4] (IP truncation;
            aggregated reports).
          </li>
          <li>
            <strong>Tag Manager:</strong> [e.g., GTM] (no personal data storage).
          </li>
          <li>
            <strong>Session tools/Hotjar (if used):</strong> disabled by default;
            consent required.
          </li>
        </ul>

        <h2>11) Security</h2>
        <p>
          We implement organisational and technical measures appropriate to risk,
          including access controls, MFA/SSO for admin systems, encryption in
          transit/at rest (where supported), least-privilege, logging, and vendor
          oversight.
        </p>

        <h2>12) Children</h2>
        <p>
          Our services target businesses and are <strong>not</strong> directed at
          children. We do not knowingly collect children’s data.
        </p>

        <h2>13) Third-Party Links</h2>
        <p>
          Our site may include links to third-party sites or services. Their
          privacy policies apply to their processing.
        </p>

        <h2>14) Changes to This Policy</h2>
        <p>
          We may update this notice to remain accurate and compliant. Material
          changes will be highlighted on this page with a new “Last updated”
          date.
        </p>

        <h2>15) How to Contact Us</h2>
        <ul>
          <li>
            <strong>Privacy queries / requests:</strong>{" "}
            <a href="mailto:contact@elsaai.co.uk">contact@elsaai.co.uk</a>
          </li>
          <li>
            <strong>Postal:</strong> 124 City Road, London, England, EC1V 2NX
          </li>
        </ul>

        <h3>Short-form Privacy Notice (for forms &amp; footers)</h3>
        <p>
          “By submitting this form, you acknowledge ELSA AI will process your
          details to respond to your enquiry and, if you opt in, to send updates
          about GenAI Assure™. We won’t sell your data. You can opt out anytime.
          See our full Privacy Policy for your rights, retention, cookies, and
          international transfers.”
        </p>
      </div>
      </div>
    </div>
  );
}
