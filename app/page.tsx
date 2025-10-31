import { TriangleAlert as AlertTriangle, Shield, FileCheck, Search, Lock, CircleCheck as CheckCircle2, ClipboardList, ShieldCheck, Eye, Scale, ShieldAlert, DollarSign, Rocket } from 'lucide-react';
import FrameworkWheel from '@/components/FrameworkWheel';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'GenAI Assure - AI Governance & Compliance Framework | ELSA AI',
  description: 'Secure your AI deployment estate with enterprise-grade governance controls. GenAI Assure helps organizations comply with GDPR, EU AI Act, and ISO/IEC 42001 through practical 30-60-90 day implementation.',
  keywords: 'AI governance, AI compliance, GDPR AI, EU AI Act, ISO 42001, AI risk management, AI security, enterprise AI governance',
  openGraph: {
    title: 'GenAI Assure - AI Governance & Compliance Framework',
    description: 'Secure your AI deployment estate with enterprise-grade governance controls for GDPR, EU AI Act, and ISO/IEC 42001 compliance.',
    type: 'website',
  },
};

export default function Home() {
  return (
    <div className="w-full bg-body">
      <section className="relative bg-body border-b borderElsa-card overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at center, rgba(94,250,195,0.1) 0%, transparent 70%)',
        }}></div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-textElsa-primary leading-tight">
                <span className="text-[#B9FF2C]">Every AI Prompt Your Team Makes Is Audit Evidence.</span> Can You Prove You Had Controls?
              </h1>

              <p className="text-lg sm:text-xl text-textElsa-secondary leading-relaxed">
                The EU AI Act Article 26 holds deployers liable—not vendors. Fines reach €35M or 7% of global revenue, and vendor frameworks won't protect you when regulators arrive. GenAI Assure delivers deployer-first controls and audit-ready documentation in 90 days, built by the director who secured 20+ high-stakes enterprises.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href="https://elsaai.co.uk/free-assessment"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-5 py-3 text-base font-semibold text-textElsa-primary bg-transparent border border-[#B9FF2C] hover:text-[#B9FF2C] hover:shadow-[0_0_20px_rgba(185,255,44,0.6)] hover:drop-shadow-[0_0_10px_rgba(185,255,44,0.8)] rounded-sm transition-all shadow-sm hover:shadow-[0_0_20px_rgba(185,255,44,0.6)] transform hover:scale-[1.02] hover:bg-[#B9FF2C]/10"
                >
                  Get Your Readiness Assessment
                </a>
                <a
                  href="/see-the-risks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-5 py-3 text-base font-semibold text-textElsa-primary bg-transparent border border-[#B9FF2C] hover:text-[#B9FF2C] hover:shadow-[0_0_20px_rgba(185,255,44,0.6)] hover:drop-shadow-[0_0_10px_rgba(185,255,44,0.8)] rounded-sm transition-all shadow-sm hover:shadow-[0_0_20px_rgba(185,255,44,0.6)] transform hover:scale-[1.02] hover:bg-[#B9FF2C]/10"
                >
                  See My AI Deployer Exposures
                </a>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-lg">
                <Image 
                  src="/GenAI_Assure_Hero.png" 
                  alt="GenAI Assure - AI Governance & Compliance Framework" 
                  width={800}
                  height={800}
                  className="w-full h-auto rounded-lg shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

            

      <section className="relative bg-body py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-textElsa-primary">
              Controls You Can Enforce. Evidence Auditors Accept.
            </h2>
            <p className="text-lg text-textElsa-secondary max-w-4xl mx-auto leading-relaxed mt-3">
              A deployer-first framework that links <span className="text-[#B9FF2C]">principles → controls → evidence</span> for third-party AI—on your existing stack (e.g., SSO/DLP + SIEM prompt/output logs). It delivers Evidence Packs with tiered retrieval SLAs, mapped to <span className="text-[#B9FF2C]">EU AI Act Article 26, GDPR, ISO/IEC 42001, and NIST AI RMF</span>.
            </p>
          </div>

          <div className="py-8 grid lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
            <div>
              <FrameworkWheel />
            </div>
            <div className="flex justify-center">
              <a
                href="https://youtu.be/_EdCkza4vTQ"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group block w-full max-w-md"
              >
                <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl bg-gray-900 group-hover:shadow-3xl transition-all duration-300">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/_EdCkza4vTQ?rel=0&modestbranding=1"
                    title="GenAI Assure Framework Overview"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
                <p className="text-center text-sm text-gray-600 mt-3 group-hover:text-teal-600 transition-colors">
                  Watch: GenAI Assure Framework Overview
                </p>
              </a>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="group relative bg-[#059669] rounded-lg p-6 shadow-[0_16px_40px_rgba(0,0,0,0.6)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.6),0_0_24px_rgba(5,150,105,0.45)] transition-all duration-300 border border-[#047857] hover:border-white cursor-pointer transform hover:-translate-y-0.5">
              <div className="w-14 h-14 rounded-lg mb-4 flex items-center justify-center group-hover:scale-110 transition-transform border border-white/30 group-hover:border-white/60 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]" style={{ backgroundColor: 'transparent' }}>
                <Shield className="h-7 w-7 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-white transition-colors">Security & Data Protection</h4>
              <p className="text-white/90 text-sm leading-relaxed group-hover:text-white transition-colors">
                Stop leaks; control access and outbound data (SSO/MFA, DLP, SIEM).
              </p>
            </div>

            <div className="group relative bg-[#001F54] rounded-lg p-6 shadow-[0_16px_40px_rgba(0,0,0,0.6)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.6),0_0_24px_rgba(0,31,84,0.45)] transition-all duration-300 border border-[#002B7A] hover:border-white cursor-pointer transform hover:-translate-y-0.5">
              <div className="w-14 h-14 rounded-lg mb-4 flex items-center justify-center group-hover:scale-110 transition-transform border border-white/30 group-hover:border-white/60 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]" style={{ backgroundColor: 'transparent' }}>
                <FileCheck className="h-7 w-7 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-white transition-colors">Governance & Regulatory Assurance</h4>
              <p className="text-white/90 text-sm leading-relaxed group-hover:text-white transition-colors">
                Meet duties and keep proof (DPIA/FRIA, vendor due-diligence, lifecycle gates).
              </p>
            </div>

            <div className="group relative bg-[#FF8C00] rounded-lg p-6 shadow-[0_16px_40px_rgba(0,0,0,0.6)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.6),0_0_24px_rgba(255,140,0,0.45)] transition-all duration-300 border border-[#DB7A00] hover:border-white cursor-pointer transform hover:-translate-y-0.5">
              <div className="w-14 h-14 rounded-lg mb-4 flex items-center justify-center group-hover:scale-110 transition-transform border border-white/30 group-hover:border-white/60 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]" style={{ backgroundColor: 'transparent' }}>
                <svg className="h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-white transition-colors">Ethical & Human Impact</h4>
              <p className="text-white/90 text-sm leading-relaxed group-hover:text-white transition-colors">
                Lower harm; explain outcomes (bias tests, explainability profiles, HITL, redress).
              </p>
            </div>

            <div className="group relative bg-[#800000] rounded-lg p-6 shadow-[0_16px_40px_rgba(0,0,0,0.6)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.6),0_0_24px_rgba(128,0,0,0.45)] transition-all duration-300 border border-[#6A0000] hover:border-white cursor-pointer transform hover:-translate-y-0.5">
              <div className="w-14 h-14 rounded-lg mb-4 flex items-center justify-center group-hover:scale-110 transition-transform border border-white/30 group-hover:border-white/60 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]" style={{ backgroundColor: 'transparent' }}>
                <svg className="h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-white transition-colors">Accountable Operations</h4>
              <p className="text-white/90 text-sm leading-relaxed group-hover:text-white transition-colors">
                Trace every decision and owner (decision records, RACI, oversight committee).
              </p>
            </div>

            <div className="group relative bg-[#B9FF2C] rounded-lg p-6 shadow-[0_16px_40px_rgba(0,0,0,0.6)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.6),0_0_20px_rgba(185,255,44,0.3)] transition-all duration-300 border border-[#9FE92A] hover:border-black cursor-pointer transform hover:-translate-y-0.5">
              <div className="w-14 h-14 rounded-lg mb-4 flex items-center justify-center group-hover:scale-110 transition-transform border border-black/20 group-hover:border-black/50 group-hover:shadow-[0_0_15px_rgba(0,0,0,0.2)]" style={{ backgroundColor: 'transparent' }}>
                <svg className="h-7 w-7 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-black mb-2 group-hover:text-black transition-colors">Trust & Safety Culture</h4>
              <p className="text-black/90 text-sm leading-relaxed group-hover:text-black transition-colors">
                Train people; report issues safely (role-based training, awareness campaigns, help channel).
              </p>
            </div>

            <div className="group relative bg-[#F0E68C] rounded-lg p-6 shadow-[0_16px_40px_rgba(0,0,0,0.6)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.6),0_0_24px_rgba(240,230,140,0.45)] transition-all duration-300 border border-[#CBBE6A] hover:border-black md:col-span-2 lg:col-span-1 cursor-pointer transform hover:-translate-y-0.5">
              <div className="w-14 h-14 rounded-lg mb-4 flex items-center justify-center group-hover:scale-110 transition-transform border border-black/20 group-hover:border-black/60 group-hover:shadow-[0_0_15px_rgba(0,0,0,0.25)]" style={{ backgroundColor: 'transparent' }}>
                <FileCheck className="h-7 w-7 text-black" />
              </div>
              <h4 className="text-xl font-semibold text-black mb-2 group-hover:text-black transition-colors">Evidence Pack</h4>
              <p className="text-black/90 text-sm leading-relaxed group-hover:text-black transition-colors">
                Audit-ready proof on demand (WORM & hashed manifests; ≤4/8/24h retrieval SLA).
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-body py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-textElsa-primary">
              How GenAI Assure Works: Our 3-Step Path to Confident AI Adoption
            </h2>
            <p className="text-lg text-textElsa-secondary max-w-4xl mx-auto leading-relaxed mt-3">
              GenAI Assure turns governance into a practical advantage by linking <span className="text-[#B9FF2C]">principles → controls → evidence</span> on a 30-60-90 plan with defined milestones and artifacts.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <div className="group relative bg-body rounded-lg p-6 shadow-[0_16px_40px_rgba(0,0,0,0.6)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.6),0_0_24px_rgba(94,250,195,0.45)] transition-all duration-300 border border-[#B9FF2C]/30 hover:border-[#B9FF2C] transform hover:-translate-y-0.5">
              <div className="absolute -top-5 -left-5 w-14 h-14 bg-accent-primary rounded-full flex items-center justify-center text-white text-xl font-bold shadow-[0_8px_16px_rgba(0,0,0,0.2),0_0_20px_rgba(94,250,195,0.4)] group-hover:scale-110 group-hover:shadow-[0_8px_16px_rgba(0,0,0,0.2),0_0_30px_rgba(94,250,195,0.6)] transition-transform">
                1
              </div>

              <div className="mb-4 pt-5">
                <div className="w-16 h-16 bg-transparent rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform border border-[#B9FF2C]/30 group-hover:border-[#B9FF2C] group-hover:shadow-[0_0_15px_rgba(185,255,44,0.25)]">
                  <div className="relative">
                    <Search className="h-10 w-10 text-white" strokeWidth={2} />
                    <ClipboardList className="h-6 w-6 text-white absolute -bottom-1 -right-1" strokeWidth={2.5} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-white transition-colors">Assess & Govern (Days 1–30)</h3>
              </div>

              <div className="border border-[#B9FF2C]/30 rounded-lg p-4 space-y-2 group-hover:border-[#B9FF2C] transition-colors">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-white flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <p className="text-xs text-white/90">
                    Approve AI Use Policy + exceptions; launch intake & tiering
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-white flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <p className="text-xs text-white/90">
                    Discover & inventory ≥95% of AI tools (incl. Shadow-AI)
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-white flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <p className="text-xs text-white/90">
                    Transparency labels live in pilot flows (email/chatbot/docs)
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-white flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <p className="text-xs text-white/90">
                    Stand up AI event schema → SIEM (WORM) and baseline DLP
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-white flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <p className="text-xs text-white/90">
                    Start RoPA and publish DPIA/FRIA trigger list
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative bg-body rounded-lg p-6 shadow-[0_16px_40px_rgba(0,0,0,0.6)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.6),0_0_24px_rgba(94,250,195,0.45)] transition-all duration-300 border border-[#B9FF2C]/30 hover:border-[#B9FF2C] transform hover:-translate-y-0.5">
              <div className="absolute -top-5 -left-5 w-14 h-14 bg-accent-primary rounded-full flex items-center justify-center text-white text-xl font-bold shadow-[0_8px_16px_rgba(0,0,0,0.2),0_0_20px_rgba(94,250,195,0.4)] group-hover:scale-110 group-hover:shadow-[0_8px_16px_rgba(0,0,0,0.2),0_0_30px_rgba(94,250,195,0.6)] transition-transform">
                2
              </div>

              <div className="mb-4 pt-5">
                <div className="w-16 h-16 bg-transparent rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform border border-[#B9FF2C]/30 group-hover:border-[#B9FF2C] group-hover:shadow-[0_0_15px_rgba(185,255,44,0.25)]">
                  <div className="relative">
                    <ShieldCheck className="h-10 w-10 text-white" strokeWidth={2} />
                    <Lock className="h-6 w-6 text-white absolute -bottom-1 -right-1" strokeWidth={2.5} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-white transition-colors">Implement Smart Guardrails (Days 31–60)</h3>
              </div>

              <div className="border border-[#B9FF2C]/30 rounded-lg p-4 space-y-2 group-hover:border-[#B9FF2C] transition-colors">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-white flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <p className="text-xs text-white/90">
                    Enforce SSO/MFA, least-privilege/SCIM, vault + ≤90-day token rotation
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-white flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <p className="text-xs text-white/90">
                    Monitor prompts/outputs/actions in SIEM; tune DLP across channels
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-white flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <p className="text-xs text-white/90">
                    Complete Top-10 DPIAs & vendor due-diligence; ship explainability profiles
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-white flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <p className="text-xs text-white/90">
                    Role-based training launched; Shadow-AI triage playbook running
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-white flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <p className="text-xs text-white/90">
                    Incident & Resilience (GA-RR/RB): IR runbooks/SOAR + fallbacks, tabletop tests
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative bg-body rounded-lg p-8 shadow-[0_16px_40px_rgba(0,0,0,0.6)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.6),0_0_24px_rgba(94,250,195,0.45)] transition-all duration-300 border border-[#B9FF2C]/30 hover:border-[#B9FF2C] transform hover:-translate-y-0.5">
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-accent-primary rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-[0_8px_16px_rgba(0,0,0,0.2),0_0_20px_rgba(94,250,195,0.4)] group-hover:scale-110 group-hover:shadow-[0_8px_16px_rgba(0,0,0,0.2),0_0_30px_rgba(94,250,195,0.6)] transition-transform">
                3
              </div>

              <div className="mb-6 pt-6">
                <div className="w-20 h-20 bg-transparent rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-[#B9FF2C]/30 group-hover:border-[#B9FF2C] group-hover:shadow-[0_0_15px_rgba(185,255,44,0.25)]">
                  <div className="relative">
                    <FileCheck className="h-10 w-10 text-white" strokeWidth={2} />
                    <Eye className="h-6 w-6 text-white absolute -bottom-1 -right-1" strokeWidth={2.5} />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-white transition-colors">Achieve Audit-Ready Assurance (Days 61–90)</h3>
                <p className="text-white/90 leading-relaxed mb-4 text-sm group-hover:text-white transition-colors">
                  Outcome: Safe, compliant, and audit-ready AI—delivered in 90 days.
                </p>
              </div>

              <div className="border border-[#B9FF2C]/30 rounded-lg p-4 space-y-2 group-hover:border-[#B9FF2C] transition-colors">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-white flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <p className="text-xs text-white/90">
                    Automate Evidence Packs: YAML manifest + WORM, SHA-256 timestamps
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-white flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <p className="text-xs text-white/90">
                    Retrieval SLA: Tier-1 ≤4h • Tier-2 ≤8h • Tier-3 ≤24h
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-white flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <p className="text-xs text-white/90">
                    Dashboards & KPIs; internal audit dry-run passed
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-white flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <p className="text-xs text-white/90">
                    Discovery automation live; Transfer Register maintained; vendor re-assess cadence set
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-white flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <p className="text-xs text-white/90">
                    Standards mapped: EU AI Act Art. 26, GDPR, ISO/IEC 42001, NIST AI RMF
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <a
              href="https://elsaai.co.uk/free-assessment"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-semibold text-textElsa-primary bg-transparent border border-[#B9FF2C] hover:text-[#B9FF2C] hover:shadow-[0_0_20px_rgba(185,255,44,0.6)] hover:drop-shadow-[0_0_10px_rgba(185,255,44,0.8)] rounded-sm transition-all shadow-sm hover:shadow-[0_0_20px_rgba(185,255,44,0.6)] transform hover:scale-[1.02] hover:bg-[#B9FF2C]/10"
            >
              Get Your Readiness Assessment
            </a>
            <a
              href="/see-the-risks"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-semibold text-textElsa-primary bg-transparent border border-[#B9FF2C] hover:text-[#B9FF2C] hover:shadow-[0_0_20px_rgba(185,255,44,0.6)] hover:drop-shadow-[0_0_10px_rgba(185,255,44,0.8)] rounded-sm transition-all shadow-sm hover:shadow-[0_0_20px_rgba(185,255,44,0.6)] transform hover:scale-[1.02] hover:bg-[#B9FF2C]/10"
            >
              See My AI Deployer Exposures
            </a>
          </div>
        </div>
      </section>

      <section className="relative bg-body py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-textElsa-primary">
              Benefits of GenAI Assure for Your Business
            </h2>
            <p className="text-lg text-textElsa-secondary max-w-4xl mx-auto leading-relaxed mt-3">
              GenAI Assure delivers more than compliance. <span className="text-[#B9FF2C]">It provides a practical pathway to safe, auditable, value-driven AI adoption</span>—so you can accelerate innovation while maintaining trust and resilience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="group relative bg-body rounded-lg p-6 shadow-[0_16px_40px_rgba(0,0,0,0.6)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.6),0_0_24px_rgba(94,250,195,0.45)] transition-all duration-300 border border-[#B9FF2C]/30 hover:border-[#B9FF2C] transform hover:-translate-y-0.5">
              <div className="relative z-10 mb-6">
                <div className="w-16 h-16 bg-transparent rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform border border-[#B9FF2C]/30 group-hover:border-[#B9FF2C] group-hover:shadow-[0_0_15px_rgba(185,255,44,0.25)]">
                  <Scale className="h-8 w-8 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-white transition-colors">Navigate Regulatory Complexity</h3>
                <p className="text-white/90 text-sm group-hover:text-white transition-colors">Know what's required and how to prove it.</p>
              </div>

              <div className="border border-[#B9FF2C]/30 rounded-lg p-4 group-hover:border-[#B9FF2C] transition-colors">
                <div className="relative z-10 space-y-4">
                  <div className="flex items-start gap-3 pb-4 border-b border-[#B9FF2C]/20">
                    <CheckCircle2 className="h-5 w-5 text-white flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    <p className="text-sm text-white/90">
                      EU AI Act (Art. 26): logging, oversight, transparency.
                    </p>
                  </div>
                  <div className="flex items-start gap-3 pb-4 border-b border-[#B9FF2C]/20">
                    <CheckCircle2 className="h-5 w-5 text-white flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    <p className="text-sm text-white/90">
                      GDPR/UK GDPR: lawful basis, DPIA/FRIA, rights.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-white flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    <p className="text-sm text-white/90">
                      Mapped to ISO/IEC 42001 & NIST AI RMF (plus SOC 2 where needed).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative bg-body rounded-lg p-8 shadow-[0_16px_40px_rgba(0,0,0,0.6)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.6),0_0_24px_rgba(94,250,195,0.45)] transition-all duration-300 border border-[#B9FF2C]/30 hover:border-[#B9FF2C] transform hover:-translate-y-0.5">
              <div className="relative z-10 mb-6">
                <div className="w-16 h-16 bg-transparent rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform border border-[#B9FF2C]/30 group-hover:border-[#B9FF2C] group-hover:shadow-[0_0_15px_rgba(185,255,44,0.25)]">
                  <ShieldAlert className="h-8 w-8 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-white transition-colors">Mitigate Security & Data Risks</h3>
                <p className="text-white/90 text-sm group-hover:text-white transition-colors">Stop leaks; contain misuse.</p>
              </div>

              <div className="border border-[#B9FF2C]/30 rounded-lg p-4 group-hover:border-[#B9FF2C] transition-colors">
                <div className="relative z-10 space-y-4">
                  <div className="flex items-start gap-3 pb-4 border-b border-[#B9FF2C]/20">
                    <CheckCircle2 className="h-5 w-5 text-white flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    <p className="text-sm text-white/90">
                      AI-aware DLP + SIEM detections; proxy/CASB allow-lists.
                    </p>
                  </div>
                  <div className="flex items-start gap-3 pb-4 border-b border-[#B9FF2C]/20">
                    <CheckCircle2 className="h-5 w-5 text-white flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    <p className="text-sm text-white/90">
                      Shadow-AI playbook to block/triage unsanctioned tools.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-white flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    <p className="text-sm text-white/90">
                      SSO/MFA & secrets vaults with rotation hygiene.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative bg-body rounded-lg p-8 shadow-[0_16px_40px_rgba(0,0,0,0.6)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.6),0_0_24px_rgba(94,250,195,0.45)] transition-all duration-300 border border-[#B9FF2C]/30 hover:border-[#B9FF2C] transform hover:-translate-y-0.5">
              <div className="relative z-10 mb-6">
                <div className="w-16 h-16 bg-transparent rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform border border-[#B9FF2C]/30 group-hover:border-[#B9FF2C] group-hover:shadow-[0_0_15px_rgba(185,255,44,0.25)]">
                  <DollarSign className="h-8 w-8 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-white transition-colors">Reduce Regulatory Exposure</h3>
                <p className="text-white/90 text-sm group-hover:text-white transition-colors">Avoid penalties with audit-ready proof.</p>
              </div>

              <div className="border border-[#B9FF2C]/30 rounded-lg p-4 group-hover:border-[#B9FF2C] transition-colors">
                <div className="relative z-10 space-y-4">
                  <div className="flex items-start gap-3 pb-4 border-b border-[#B9FF2C]/20">
                    <CheckCircle2 className="h-5 w-5 text-white flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    <p className="text-sm text-white/90">
                      Labels & notices; DPIA/FRIA before go-live.
                    </p>
                  </div>
                  <div className="flex items-start gap-3 pb-4 border-b border-[#B9FF2C]/20">
                    <CheckCircle2 className="h-5 w-5 text-white flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    <p className="text-sm text-white/90">
                      Vendor due-diligence (SCC/IDTA, attestations, sub-processors).
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-white flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    <p className="text-sm text-white/90">
                      Evidence Packs (YAML+WORM, ≤4/8/24h retrieval SLA).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative bg-body rounded-lg p-8 shadow-[0_16px_40px_rgba(0,0,0,0.6)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.6),0_0_24px_rgba(94,250,195,0.45)] transition-all duration-300 border border-[#B9FF2C]/30 hover:border-[#B9FF2C] transform hover:-translate-y-0.5">
              <div className="relative z-10 mb-6">
                <div className="w-16 h-16 bg-transparent rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform border border-[#B9FF2C]/30 group-hover:border-[#B9FF2C] group-hover:shadow-[0_0_15px_rgba(185,255,44,0.25)]">
                  <Rocket className="h-8 w-8 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-white transition-colors">Faster, Safer AI Adoption</h3>
                <p className="text-white/90 text-sm mb-4 group-hover:text-white transition-colors">Roll out on your existing stack with visibility.</p>
              </div>

              <div className="border border-[#B9FF2C]/30 rounded-lg p-4 group-hover:border-[#B9FF2C] transition-colors">
                <div className="relative z-10 space-y-3">
                  <p className="text-white/90 text-sm">
                    30-60-90 plan with day-30/60/90 receipts; dashboards/KPIs.
                  </p>
                  <p className="text-white/90 text-sm">
                    KPIs include DLP effectiveness, token hygiene, and MTTD/MTTR.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <a
              href="https://elsaai.co.uk/free-assessment"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-semibold text-textElsa-primary bg-transparent border border-[#B9FF2C] hover:text-[#B9FF2C] hover:shadow-[0_0_20px_rgba(185,255,44,0.6)] hover:drop-shadow-[0_0_10px_rgba(185,255,44,0.8)] rounded-sm transition-all shadow-sm hover:shadow-[0_0_20px_rgba(185,255,44,0.6)] transform hover:scale-[1.02] hover:bg-[#B9FF2C]/10"
            >
              Get Your Readiness Assessment
            </a>
            <a
              href="/see-the-risks"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-semibold text-textElsa-primary bg-transparent border border-[#B9FF2C] hover:text-[#B9FF2C] hover:shadow-[0_0_20px_rgba(185,255,44,0.6)] hover:drop-shadow-[0_0_10px_rgba(185,255,44,0.8)] rounded-sm transition-all shadow-sm hover:shadow-[0_0_20px_rgba(185,255,44,0.6)] transform hover:scale-[1.02] hover:bg-[#B9FF2C]/10"
            >
              See My AI Deployer Exposures
            </a>
          </div>
        </div>
      </section>

      {/* Meet Faisal Ali — final section before footer */}
      <section className="relative bg-body py-20 lg:py-28 border-t borderElsa-card overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(94,250,195,0.15), transparent 50%), radial-gradient(circle at 80% 60%, rgba(185,255,44,0.15), transparent 40%)'
        }}></div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 items-center">
            <div className="flex flex-col items-center lg:items-start">
              <div className="relative">
                <img src="/FA-West-3-Piece.png" alt="Faisal Ali" className="w-64 h-64 rounded-full object-cover border-4 border-[#B9FF2C] shadow-[0_12px_40px_rgba(0,0,0,0.45)]" />
                <span className="absolute -inset-2 rounded-full ring-1 ring-[#B9FF2C]/30"></span>
              </div>
              <div className="text-center lg:text-left mt-5 group cursor-pointer">
                <p className="text-textElsa-primary font-semibold transition-colors duration-200 group-hover:text-[#B9FF2C]">— Faisal Ali CISM, CRISC</p>
                <p className="text-textElsa-secondary text-sm transition-colors duration-200 group-hover:text-[#B9FF2C]">Founder, ELSA AI · Director, GenAI Assure Framework</p>
                <p className="text-textElsa-secondary text-xs mt-2 transition-colors duration-200 group-hover:text-[#B9FF2C]">30 Years Securing High-Stakes Enterprises</p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-textElsa-primary tracking-tight mb-6">
                AI Governance Built by Someone Who Secured the World's Most Scrutinized Enterprises
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-[#B9FF2C] pl-6 py-3 bg-cardElsa-dark/50 rounded-r-lg">
                  <p className="text-textElsa-secondary leading-relaxed">
                    Faisal Ali didn't build GenAI Assure in a lab. He built it after 30 years in the trenches—leading cybersecurity programs, navigating audits, and implementing controls at organizations where a single failure could mean regulatory action, board-level crisis, or operational catastrophe.
                  </p>
                </div>

                <div className="border border-[#B9FF2C]/30 rounded-lg p-6 bg-cardElsa-dark/30 hover:border-[#B9FF2C]/50 transition-all">
                  <h3 className="text-lg font-bold text-[#B9FF2C] mb-3">
                    Where the Framework Was Forged:
                  </h3>
                  <p className="text-textElsa-secondary mb-4 text-sm">
                    30 years securing operations where failure meant front-page crisis:
                  </p>
                  <ul className="space-y-2 text-textElsa-secondary text-sm">
                    <li className="flex items-start">
                      <span className="text-[#B9FF2C] mr-3 mt-1">▸</span>
                      <span>Financial institutions managing billions in daily transactions (Barclays, Lloyds, British Business Bank)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#B9FF2C] mr-3 mt-1">▸</span>
                      <span>Defense contractors protecting classified systems (BAE Systems, Lockheed Martin)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#B9FF2C] mr-3 mt-1">▸</span>
                      <span>Retail and supply chain platforms at global scale (Walmart, Premier Farnell, Burberry, Applegate)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#B9FF2C] mr-3 mt-1">▸</span>
                      <span>National infrastructure and public services under taxpayer accountability (Capita, OVO Energy, Smart DCC, BWDC, The Insolvency Service)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#B9FF2C] mr-3 mt-1">▸</span>
                      <span>Manufacturing and global logistics (Bombardier, Volkswagen, Maersk, American President Line, National Saudi Shipping Line)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#B9FF2C] mr-3 mt-1">▸</span>
                      <span>Healthcare systems safeguarding patient data (Newcross Healthcare)</span>
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-[#B9FF2C] pl-6 py-3 bg-cardElsa-dark/50 rounded-r-lg">
                  <h3 className="text-lg font-bold text-textElsa-primary mb-2">
                    What That Experience Revealed:
                  </h3>
                  <p className="text-textElsa-secondary leading-relaxed">
                    Boards don't want theory. Auditors don't want promises. Deployers need controls that work this quarter—and evidence that survives scrutiny. GenAI Assure is built on that reality: 30 years of operational pressure, regulatory scrutiny, and high-stakes delivery.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href="https://www.linkedin.com/in/faisalal1" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-textElsa-primary bg-transparent border border-accent-primary rounded-sm transition-all hover:bg-[#B9FF2C] hover:text-black hover:border-black hover:shadow-[0_0_40px_rgba(94,250,195,0.4)]">LinkedIn Profile</a>
                <a href="/framework" className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-textElsa-primary bg-transparent border border-accent-primary rounded-sm transition-all hover:bg-[#B9FF2C] hover:text-black hover:border-black hover:shadow-[0_0_40px_rgba(94,250,195,0.4)]">Download Framework</a>
                <a href="/contact" className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-textElsa-primary bg-transparent border border-accent-primary rounded-sm transition-all hover:bg-[#B9FF2C] hover:text-black hover:border-black hover:shadow-[0_0_40px_rgba(94,250,195,0.4)]">Book Consultation</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
