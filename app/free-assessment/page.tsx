'use client';

import { useState } from 'react';
import { Mail, Clock, CircleCheck as CheckCircle2, CircleAlert as AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

interface FormData {
  fullName: string;
  email: string;
  company: string;
  role: string;
  companySize: string;
  phone: string;
  aiStack: string[];
  dataTypes: string[];
  controlsInPlace: string[];
  governanceStatus: string;
  dataResidency: string;
  urgency: string;
  decisionSpeed: string;
  concerns: string;
  consent: boolean;
}

export default function FreeAssessmentPage() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    company: '',
    role: '',
    companySize: '',
    phone: '',
    aiStack: [],
    dataTypes: [],
    controlsInPlace: [],
    governanceStatus: '',
    dataResidency: '',
    urgency: '',
    decisionSpeed: '',
    concerns: '',
    consent: false,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required';
    }

    if (!formData.role) {
      newErrors.role = 'Please select your role';
    }

    if (!formData.companySize) {
      newErrors.companySize = 'Please select company size';
    }

    if (formData.aiStack.length === 0) {
      newErrors.aiStack = 'Please select at least one AI tool';
    }

    if (formData.dataTypes.length === 0) {
      newErrors.dataTypes = 'Please select at least one data type';
    }

    if (!formData.governanceStatus) {
      newErrors.governanceStatus = 'Please select governance status';
    }

    if (!formData.dataResidency) {
      newErrors.dataResidency = 'Please select primary data residency';
    }

    if (!formData.urgency) {
      newErrors.urgency = 'Please select urgency level';
    }

    if (!formData.concerns.trim()) {
      newErrors.concerns = 'Please describe your biggest concerns';
    }

    if (!formData.consent) {
      newErrors.consent = 'You must agree to be contacted';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const emailBody = `
Free Assessment Request

Full Name: ${formData.fullName}
Email: ${formData.email}
Company: ${formData.company}
Role: ${formData.role}
Company Size: ${formData.companySize}
Phone: ${formData.phone || 'Not provided'}

AI Stack: ${formData.aiStack.join(', ')}
Data Types: ${formData.dataTypes.join(', ')}
Controls in Place: ${formData.controlsInPlace.length > 0 ? formData.controlsInPlace.join(', ') : 'None selected'}

Governance Status: ${formData.governanceStatus}
Data Residency: ${formData.dataResidency}
Urgency: ${formData.urgency}
Decision Speed: ${formData.decisionSpeed || 'Not provided'}

Biggest Concerns:
${formData.concerns}

Consent: ${formData.consent ? 'Yes' : 'No'}
      `.trim();

      const mailtoLink = `mailto:contact@elsaai.co.uk?subject=${encodeURIComponent('Free Assessment Request')}&body=${encodeURIComponent(emailBody)}`;

      window.location.href = mailtoLink;

      setTimeout(() => {
        setSubmitStatus('success');
        setFormData({
          fullName: '',
          email: '',
          company: '',
          role: '',
          companySize: '',
          phone: '',
          aiStack: [],
          dataTypes: [],
          controlsInPlace: [],
          governanceStatus: '',
          dataResidency: '',
          urgency: '',
          decisionSpeed: '',
          concerns: '',
          consent: false,
        });
        setIsSubmitting(false);
      }, 1000);
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setIsSubmitting(false);
    }
  };

  const handleCheckboxChange = (field: 'aiStack' | 'dataTypes' | 'controlsInPlace', value: string) => {
    setFormData((prev) => {
      const currentValues = prev[field];
      const newValues = currentValues.includes(value)
        ? currentValues.filter((v) => v !== value)
        : [...currentValues, value];
      return { ...prev, [field]: newValues };
    });
  };

  if (submitStatus === 'success') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-50 to-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 text-center">
            <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="h-10 w-10 text-teal-600" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Thank You!
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              We've received your assessment request. Our team will review your information and respond within 1 business day with your personalized risk assessment and action plan.
            </p>
            <p className="text-gray-600 mb-8">
              Check your email at <strong className="text-gray-900">{formData.email}</strong> for our response.
            </p>
            <Button
              onClick={() => setSubmitStatus('idle')}
              className="bg-teal hover:bg-teal-600"
            >
              Submit Another Assessment
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Get Your Free Emergency Assessment
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Discover your AI compliance gaps in 15 minutes. Our experts will analyze your setup and provide a prioritized action plan.
          </p>
        </div>

        <div className="bg-teal-50 border-2 border-teal-200 rounded-xl p-6 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <Mail className="h-6 w-6 text-teal-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-gray-900 mb-1">Email</p>
                <a href="mailto:contact@elsaai.co.uk" className="text-teal-700 hover:text-teal-800 text-sm">
                  contact@elsaai.co.uk
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="h-6 w-6 text-teal-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-gray-900 mb-1">Response Time</p>
                <p className="text-gray-700 text-sm">Within 1 business day</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-teal-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-gray-900 mb-1">What to Expect</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Risk assessment summary</li>
                  <li>• Priority action roadmap</li>
                  <li>• No sales pressure</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 sm:p-10 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="fullName">
                Full Name <span className="text-red-600">*</span>
              </Label>
              <Input
                id="fullName"
                type="text"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className={errors.fullName ? 'border-red-500' : ''}
              />
              {errors.fullName && (
                <p className="text-sm text-red-600">{errors.fullName}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">
                Work Email <span className="text-red-600">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={errors.email ? 'border-red-500' : ''}
              />
              {errors.email && (
                <p className="text-sm text-red-600">{errors.email}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="company">
                Company <span className="text-red-600">*</span>
              </Label>
              <Input
                id="company"
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className={errors.company ? 'border-red-500' : ''}
              />
              {errors.company && (
                <p className="text-sm text-red-600">{errors.company}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone (optional)</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="role">
                Role <span className="text-red-600">*</span>
              </Label>
              <select
                id="role"
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className={`w-full rounded-md border ${errors.role ? 'border-red-500' : 'border-gray-300'} px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500`}
              >
                <option value="">Select your role</option>
                <option value="cto-ciso">CTO/CISO</option>
                <option value="compliance-legal">Compliance/Legal</option>
                <option value="product-engineering">Product/Engineering</option>
                <option value="operations">Operations</option>
                <option value="other">Other</option>
              </select>
              {errors.role && (
                <p className="text-sm text-red-600">{errors.role}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="companySize">
                Company Size <span className="text-red-600">*</span>
              </Label>
              <select
                id="companySize"
                value={formData.companySize}
                onChange={(e) => setFormData({ ...formData, companySize: e.target.value })}
                className={`w-full rounded-md border ${errors.companySize ? 'border-red-500' : 'border-gray-300'} px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500`}
              >
                <option value="">Select company size</option>
                <option value="1-50">1-50</option>
                <option value="51-200">51-200</option>
                <option value="201-1000">201-1000</option>
                <option value="1000+">1000+</option>
              </select>
              {errors.companySize && (
                <p className="text-sm text-red-600">{errors.companySize}</p>
              )}
            </div>
          </div>

          <div className="space-y-3 border-t pt-6">
            <Label>
              Your AI Stack <span className="text-red-600">*</span>
            </Label>
            <p className="text-sm text-gray-600">Select all that apply</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'ChatGPT/OpenAI',
                'Microsoft 365 Copilot',
                'Google Workspace AI',
                'n8n',
                'Make.com',
                'Zapier',
                'LangChain/Agents',
                'Custom LLM',
                'Other',
              ].map((tool) => (
                <div key={tool} className="flex items-center space-x-2">
                  <Checkbox
                    id={`ai-${tool}`}
                    checked={formData.aiStack.includes(tool)}
                    onCheckedChange={() => handleCheckboxChange('aiStack', tool)}
                  />
                  <Label htmlFor={`ai-${tool}`} className="font-normal cursor-pointer">
                    {tool}
                  </Label>
                </div>
              ))}
            </div>
            {errors.aiStack && (
              <p className="text-sm text-red-600">{errors.aiStack}</p>
            )}
          </div>

          <div className="space-y-3 border-t pt-6">
            <Label>
              Data Types <span className="text-red-600">*</span>
            </Label>
            <p className="text-sm text-gray-600">What types of data are processed by your AI tools?</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'PII',
                'PHI/health',
                'PCI',
                'Secrets/API keys',
                'Source code/IP',
                'Customer data',
                'HR/employee data',
                'None/public only',
              ].map((dataType) => (
                <div key={dataType} className="flex items-center space-x-2">
                  <Checkbox
                    id={`data-${dataType}`}
                    checked={formData.dataTypes.includes(dataType)}
                    onCheckedChange={() => handleCheckboxChange('dataTypes', dataType)}
                  />
                  <Label htmlFor={`data-${dataType}`} className="font-normal cursor-pointer">
                    {dataType}
                  </Label>
                </div>
              ))}
            </div>
            {errors.dataTypes && (
              <p className="text-sm text-red-600">{errors.dataTypes}</p>
            )}
          </div>

          <div className="space-y-3 border-t pt-6">
            <Label>Controls in Place (optional)</Label>
            <p className="text-sm text-gray-600">Select all controls currently implemented</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'SSO on all AI tools',
                'SCIM/JIT',
                'DLP for PII/secrets',
                'Central SIEM usage logs',
                'Secrets in enterprise vault',
                'Transparency labels/notices',
                'DPIA/FRIA completed',
                'Vendor DPA/SCC in place',
              ].map((control) => (
                <div key={control} className="flex items-center space-x-2">
                  <Checkbox
                    id={`control-${control}`}
                    checked={formData.controlsInPlace.includes(control)}
                    onCheckedChange={() => handleCheckboxChange('controlsInPlace', control)}
                  />
                  <Label htmlFor={`control-${control}`} className="font-normal cursor-pointer">
                    {control}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t pt-6">
            <div className="space-y-2">
              <Label htmlFor="governanceStatus">
                AI Governance Status <span className="text-red-600">*</span>
              </Label>
              <select
                id="governanceStatus"
                value={formData.governanceStatus}
                onChange={(e) => setFormData({ ...formData, governanceStatus: e.target.value })}
                className={`w-full rounded-md border ${errors.governanceStatus ? 'border-red-500' : 'border-gray-300'} px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500`}
              >
                <option value="">Select status</option>
                <option value="comprehensive">Comprehensive policy</option>
                <option value="basic">Basic guidelines</option>
                <option value="development">In development</option>
                <option value="none">None</option>
              </select>
              {errors.governanceStatus && (
                <p className="text-sm text-red-600">{errors.governanceStatus}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="dataResidency">
                Primary Data Residency <span className="text-red-600">*</span>
              </Label>
              <select
                id="dataResidency"
                value={formData.dataResidency}
                onChange={(e) => setFormData({ ...formData, dataResidency: e.target.value })}
                className={`w-full rounded-md border ${errors.dataResidency ? 'border-red-500' : 'border-gray-300'} px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500`}
              >
                <option value="">Select region</option>
                <option value="eu">EU</option>
                <option value="uk">UK</option>
                <option value="us">US</option>
                <option value="apac">APAC</option>
                <option value="other">Other</option>
              </select>
              {errors.dataResidency && (
                <p className="text-sm text-red-600">{errors.dataResidency}</p>
              )}
            </div>
          </div>

          <div className="space-y-3 border-t pt-6">
            <Label>
              Urgency & Timeline <span className="text-red-600">*</span>
            </Label>
            <RadioGroup value={formData.urgency} onValueChange={(value) => setFormData({ ...formData, urgency: value })}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { value: 'critical', label: 'Critical—now' },
                  { value: 'high', label: 'High—next 3 months' },
                  { value: 'medium', label: 'Medium—next 6 months' },
                  { value: 'low', label: 'Low' },
                ].map((option) => (
                  <div key={option.value} className="flex items-center space-x-2">
                    <RadioGroupItem value={option.value} id={`urgency-${option.value}`} />
                    <Label htmlFor={`urgency-${option.value}`} className="font-normal cursor-pointer">
                      {option.label}
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
            {errors.urgency && (
              <p className="text-sm text-red-600">{errors.urgency}</p>
            )}
          </div>

          <div className="space-y-3 border-t pt-6">
            <Label>Decision Speed (optional)</Label>
            <RadioGroup value={formData.decisionSpeed} onValueChange={(value) => setFormData({ ...formData, decisionSpeed: value })}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { value: 'same-day', label: 'Same day' },
                  { value: '1-week', label: 'Within 1 week' },
                  { value: '1-month', label: 'Within 1 month' },
                  { value: '3-months', label: '3+ months' },
                ].map((option) => (
                  <div key={option.value} className="flex items-center space-x-2">
                    <RadioGroupItem value={option.value} id={`speed-${option.value}`} />
                    <Label htmlFor={`speed-${option.value}`} className="font-normal cursor-pointer">
                      {option.label}
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2 border-t pt-6">
            <Label htmlFor="concerns">
              Biggest Concerns <span className="text-red-600">*</span>
            </Label>
            <Textarea
              id="concerns"
              rows={5}
              placeholder="e.g., data leakage via automations, unclear lawful basis, missing audit trail…"
              value={formData.concerns}
              onChange={(e) => setFormData({ ...formData, concerns: e.target.value })}
              className={errors.concerns ? 'border-red-500' : ''}
            />
            {errors.concerns && (
              <p className="text-sm text-red-600">{errors.concerns}</p>
            )}
          </div>

          <div className="flex items-start space-x-3 border-t pt-6">
            <Checkbox
              id="consent"
              checked={formData.consent}
              onCheckedChange={(checked) => setFormData({ ...formData, consent: checked as boolean })}
            />
            <div className="flex-1">
              <Label htmlFor="consent" className="font-normal cursor-pointer">
                I agree to be contacted about this assessment and acknowledge the{' '}
                <a href="/privacy" target="_blank" className="text-teal-600 hover:text-teal-700 underline">
                  privacy notice
                </a>
                . <span className="text-red-600">*</span>
              </Label>
              {errors.consent && (
                <p className="text-sm text-red-600 mt-1">{errors.consent}</p>
              )}
            </div>
          </div>

          {submitStatus === 'error' && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-red-800">
                  Something went wrong. Please try again or email us directly at{' '}
                  <a href="mailto:contact@elsaai.co.uk" className="underline font-semibold">
                    contact@elsaai.co.uk
                  </a>
                </p>
              </div>
            </div>
          )}

          <div className="flex justify-center pt-4">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-teal hover:bg-teal-600 px-12 py-6 text-lg font-semibold"
            >
              {isSubmitting ? 'Submitting...' : 'Get My Free Assessment'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
