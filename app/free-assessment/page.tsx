'use client';

import { useState } from 'react';
import { Mail, Clock, Shield, AlertTriangle, CircleCheck as CheckCircle2, CircleAlert as AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface FormData {
  fullName: string;
  workEmail: string;
  company: string;
  roleTitle: string;
  companySize: string;
  phone: string;
  primaryUseCases: string[];
  useCaseOther: string;
  topUseCaseOwner: string;
  businessCriticality: string;
  adoptionStatus: string;
  useCaseDescription: string;
  decisionImpact: string;
  outputVisibility: string;
  discoveryConfidence: string;
  incidents: string[];
  vendorLocations: string;
  dataResidency: string;
  transferMechanism: string;
  retention: string;
  dataTypes: string[];
  lawfulBasis: string[];
  dpiaStatus: string;
  dpiaReference: string;
  ropaStatus: string;
  controlsInPlace: string[];
  activityLogging: string;
  transparencyEvidence: string[];
  humanReview: string;
  runbooksRedress: string;
  complianceDrivers: string[];
  driverOther: string;
  urgency: string;
  decisionSpeed: string;
  biggestConcerns: string;
  consent: boolean;
}

export default function FreeAssessmentPage() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    workEmail: '',
    company: '',
    roleTitle: '',
    companySize: '',
    phone: '',
    primaryUseCases: [],
    useCaseOther: '',
    topUseCaseOwner: '',
    businessCriticality: '',
    adoptionStatus: '',
    useCaseDescription: '',
    decisionImpact: '',
    outputVisibility: '',
    discoveryConfidence: '',
    incidents: [],
    vendorLocations: '',
    dataResidency: '',
    transferMechanism: '',
    retention: '',
    dataTypes: [],
    lawfulBasis: [],
    dpiaStatus: '',
    dpiaReference: '',
    ropaStatus: '',
    controlsInPlace: [],
    activityLogging: '',
    transparencyEvidence: [],
    humanReview: '',
    runbooksRedress: '',
    complianceDrivers: [],
    driverOther: '',
    urgency: '',
    decisionSpeed: '',
    biggestConcerns: '',
    consent: false,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.workEmail.trim()) {
      newErrors.workEmail = 'Work email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.workEmail)) {
      newErrors.workEmail = 'Please enter a valid email address';
    }
    if (!formData.company.trim()) newErrors.company = 'Company is required';
    if (!formData.roleTitle.trim()) newErrors.roleTitle = 'Role/Title is required';
    if (!formData.companySize) newErrors.companySize = 'Company size is required';
    if (formData.primaryUseCases.length === 0) newErrors.primaryUseCases = 'Select at least one use case';
    if (!formData.topUseCaseOwner.trim()) newErrors.topUseCaseOwner = 'Use case owner is required';
    if (!formData.businessCriticality) newErrors.businessCriticality = 'Business criticality is required';
    if (!formData.adoptionStatus) newErrors.adoptionStatus = 'Adoption status is required';
    if (!formData.useCaseDescription.trim()) newErrors.useCaseDescription = 'Description is required';
    if (!formData.decisionImpact) newErrors.decisionImpact = 'Decision impact is required';
    if (!formData.outputVisibility) newErrors.outputVisibility = 'Output visibility is required';
    if (!formData.discoveryConfidence) newErrors.discoveryConfidence = 'Discovery confidence is required';
    if (!formData.vendorLocations) newErrors.vendorLocations = 'Vendor locations is required';
    if (!formData.dataResidency) newErrors.dataResidency = 'Data residency is required';
    if (!formData.transferMechanism) newErrors.transferMechanism = 'Transfer mechanism is required';
    if (!formData.dpiaStatus) newErrors.dpiaStatus = 'DPIA status is required';
    if (!formData.ropaStatus) newErrors.ropaStatus = 'RoPA status is required';
    if (!formData.activityLogging) newErrors.activityLogging = 'Activity logging is required';
    if (!formData.humanReview) newErrors.humanReview = 'Human review is required';
    if (!formData.runbooksRedress) newErrors.runbooksRedress = 'Runbooks & redress is required';
    if (formData.complianceDrivers.length === 0) newErrors.complianceDrivers = 'Select at least one driver';
    if (!formData.urgency) newErrors.urgency = 'Urgency is required';
    if (!formData.biggestConcerns.trim()) newErrors.biggestConcerns = 'Please describe your concerns';
    if (!formData.consent) newErrors.consent = 'You must agree to be contacted';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/emergency-assessment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit assessment');
      }

      setSubmitStatus('success');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCheckboxChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => {
      const currentValues = prev[field] as string[];
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
              Assessment Submitted Successfully!
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              Our team will analyze your submission and respond within 3 business days with your personalized risk assessment, Framework tier assignment, and priority action roadmap.
            </p>
            <p className="text-gray-600 mb-8">
              Check your email at <strong className="text-gray-900">{formData.workEmail}</strong> for our response.
            </p>
            <Button
              onClick={() => {
                setSubmitStatus('idle');
                setFormData({
                  fullName: '',
                  workEmail: '',
                  company: '',
                  roleTitle: '',
                  companySize: '',
                  phone: '',
                  primaryUseCases: [],
                  useCaseOther: '',
                  topUseCaseOwner: '',
                  businessCriticality: '',
                  adoptionStatus: '',
                  useCaseDescription: '',
                  decisionImpact: '',
                  outputVisibility: '',
                  discoveryConfidence: '',
                  incidents: [],
                  vendorLocations: '',
                  dataResidency: '',
                  transferMechanism: '',
                  retention: '',
                  dataTypes: [],
                  lawfulBasis: [],
                  dpiaStatus: '',
                  dpiaReference: '',
                  ropaStatus: '',
                  controlsInPlace: [],
                  activityLogging: '',
                  transparencyEvidence: [],
                  humanReview: '',
                  runbooksRedress: '',
                  complianceDrivers: [],
                  driverOther: '',
                  urgency: '',
                  decisionSpeed: '',
                  biggestConcerns: '',
                  consent: false,
                });
              }}
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
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            GenAI Assure Emergency Risk Assessment
          </h1>
          <p className="text-xl text-gray-700 mb-4">
            Discover your AI compliance gaps in 15 minutes
          </p>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our experts will analyze your setup and provide a prioritised action plan aligned to the GenAI Assure Framework. For organisations deploying third-party AI (copilots, chat assistants, workflow automations, custom agents).
          </p>
        </div>

        <div className="bg-white border-2 border-teal-200 rounded-xl p-6 mb-8">
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
                <p className="text-gray-700 text-sm">Within 3 business days</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Shield className="h-6 w-6 text-teal-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-gray-900 mb-1">What to Expect</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Risk assessment summary</li>
                  <li>• Framework tier assignment</li>
                  <li>• Priority action roadmap</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-5 mb-8">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-gray-900 mb-2">Before you start:</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Do not paste secrets, credentials, or production data into this form</li>
                <li>• If you don't process personal data for a question, choose "Not applicable"</li>
                <li>• You can select multiple options where noted</li>
              </ul>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-6 sm:p-10 space-y-10">
          <section className="space-y-6">
            <div className="border-b pb-3">
              <h2 className="text-2xl font-bold text-gray-900">1) Contact Information</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="fullName">
                  Full Name <span className="text-red-600">*</span>
                </Label>
                <Input
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className={errors.fullName ? 'border-red-500' : ''}
                />
                {errors.fullName && <p className="text-sm text-red-600">{errors.fullName}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="workEmail">
                  Work Email <span className="text-red-600">*</span>
                </Label>
                <Input
                  id="workEmail"
                  type="email"
                  value={formData.workEmail}
                  onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                  className={errors.workEmail ? 'border-red-500' : ''}
                />
                {errors.workEmail && <p className="text-sm text-red-600">{errors.workEmail}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="company">
                  Company <span className="text-red-600">*</span>
                </Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className={errors.company ? 'border-red-500' : ''}
                />
                {errors.company && <p className="text-sm text-red-600">{errors.company}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="roleTitle">
                  Role/Title <span className="text-red-600">*</span>
                </Label>
                <Input
                  id="roleTitle"
                  value={formData.roleTitle}
                  onChange={(e) => setFormData({ ...formData, roleTitle: e.target.value })}
                  className={errors.roleTitle ? 'border-red-500' : ''}
                />
                {errors.roleTitle && <p className="text-sm text-red-600">{errors.roleTitle}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="companySize">
                  Company Size <span className="text-red-600">*</span>
                </Label>
                <Select value={formData.companySize} onValueChange={(value) => setFormData({ ...formData, companySize: value })}>
                  <SelectTrigger className={errors.companySize ? 'border-red-500' : ''}>
                    <SelectValue placeholder="Select company size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-49">1–49</SelectItem>
                    <SelectItem value="50-249">50–249</SelectItem>
                    <SelectItem value="250-999">250–999</SelectItem>
                    <SelectItem value="1000-4999">1,000–4,999</SelectItem>
                    <SelectItem value="5000+">5,000+</SelectItem>
                  </SelectContent>
                </Select>
                {errors.companySize && <p className="text-sm text-red-600">{errors.companySize}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
            </div>
          </section>

          <section className="space-y-6 border-t pt-8">
            <div className="border-b pb-3">
              <h2 className="text-2xl font-bold text-gray-900">2) Use Case (What you're doing with AI)</h2>
            </div>

            <div className="space-y-3">
              <Label>
                Primary AI Use Cases <span className="text-red-600">*</span>
              </Label>
              <p className="text-sm text-gray-600">Select all that apply</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Customer service chatbots',
                  'Document analysis/generation',
                  'Workflow automation (n8n / Make / Zapier)',
                  'Developer copilots',
                  'Marketing content creation',
                  'HR screening / recruitment',
                  'Financial analysis',
                  'Legal document review',
                  'Sales / lead enrichment',
                ].map((useCase) => (
                  <div key={useCase} className="flex items-center space-x-2">
                    <Checkbox
                      id={`use-case-${useCase}`}
                      checked={formData.primaryUseCases.includes(useCase)}
                      onCheckedChange={() => handleCheckboxChange('primaryUseCases', useCase)}
                    />
                    <Label htmlFor={`use-case-${useCase}`} className="font-normal cursor-pointer text-sm">
                      {useCase}
                    </Label>
                  </div>
                ))}
              </div>
              {errors.primaryUseCases && <p className="text-sm text-red-600">{errors.primaryUseCases}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="useCaseOther">Other (please specify)</Label>
              <Input
                id="useCaseOther"
                value={formData.useCaseOther}
                onChange={(e) => setFormData({ ...formData, useCaseOther: e.target.value })}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="topUseCaseOwner">
                  Top Use Case Owner (name/role) <span className="text-red-600">*</span>
                </Label>
                <Input
                  id="topUseCaseOwner"
                  value={formData.topUseCaseOwner}
                  onChange={(e) => setFormData({ ...formData, topUseCaseOwner: e.target.value })}
                  className={errors.topUseCaseOwner ? 'border-red-500' : ''}
                />
                {errors.topUseCaseOwner && <p className="text-sm text-red-600">{errors.topUseCaseOwner}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="businessCriticality">
                  Business Criticality <span className="text-red-600">*</span>
                </Label>
                <Select value={formData.businessCriticality} onValueChange={(value) => setFormData({ ...formData, businessCriticality: value })}>
                  <SelectTrigger className={errors.businessCriticality ? 'border-red-500' : ''}>
                    <SelectValue placeholder="Select criticality" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="low">Low</SelectItem>
                  </SelectContent>
                </Select>
                {errors.businessCriticality && <p className="text-sm text-red-600">{errors.businessCriticality}</p>}
              </div>
            </div>

            <div className="space-y-3">
              <Label>
                Adoption Status <span className="text-red-600">*</span>
              </Label>
              <RadioGroup value={formData.adoptionStatus} onValueChange={(value) => setFormData({ ...formData, adoptionStatus: value })}>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="sanctioned" id="adoption-sanctioned" />
                    <Label htmlFor="adoption-sanctioned" className="font-normal cursor-pointer">Sanctioned only</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="mix" id="adoption-mix" />
                    <Label htmlFor="adoption-mix" className="font-normal cursor-pointer">Mix (sanctioned + shadow)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="shadow" id="adoption-shadow" />
                    <Label htmlFor="adoption-shadow" className="font-normal cursor-pointer">Mostly shadow</Label>
                  </div>
                </div>
              </RadioGroup>
              {errors.adoptionStatus && <p className="text-sm text-red-600">{errors.adoptionStatus}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="useCaseDescription">
                Short description (purpose, stakeholders, success measure) <span className="text-red-600">*</span>
              </Label>
              <Textarea
                id="useCaseDescription"
                rows={4}
                value={formData.useCaseDescription}
                onChange={(e) => setFormData({ ...formData, useCaseDescription: e.target.value })}
                className={errors.useCaseDescription ? 'border-red-500' : ''}
              />
              {errors.useCaseDescription && <p className="text-sm text-red-600">{errors.useCaseDescription}</p>}
            </div>
          </section>

          <section className="space-y-6 border-t pt-8">
            <div className="border-b pb-3">
              <h2 className="text-2xl font-bold text-gray-900">3) Decision Impact & Output Scope</h2>
            </div>

            <div className="space-y-3">
              <Label>
                AI Decision Impact <span className="text-red-600">*</span>
              </Label>
              <RadioGroup value={formData.decisionImpact} onValueChange={(value) => setFormData({ ...formData, decisionImpact: value })}>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no-direct" id="impact-none" />
                    <Label htmlFor="impact-none" className="font-normal cursor-pointer">No direct impact (internal summaries, research)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="indirect" id="impact-indirect" />
                    <Label htmlFor="impact-indirect" className="font-normal cursor-pointer">Indirect impact (personalisation, recommendations)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="significant" id="impact-significant" />
                    <Label htmlFor="impact-significant" className="font-normal cursor-pointer">Significant impact (customer-facing decisions, content moderation)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="legal" id="impact-legal" />
                    <Label htmlFor="impact-legal" className="font-normal cursor-pointer">Legal/similarly significant (hiring, credit, eligibility, contracts)</Label>
                  </div>
                </div>
              </RadioGroup>
              {errors.decisionImpact && <p className="text-sm text-red-600">{errors.decisionImpact}</p>}
            </div>

            <div className="space-y-3">
              <Label>
                AI Output Visibility <span className="text-red-600">*</span>
              </Label>
              <RadioGroup value={formData.outputVisibility} onValueChange={(value) => setFormData({ ...formData, outputVisibility: value })}>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="internal" id="vis-internal" />
                    <Label htmlFor="vis-internal" className="font-normal cursor-pointer">Internal only (employees)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="b2b" id="vis-b2b" />
                    <Label htmlFor="vis-b2b" className="font-normal cursor-pointer">B2B / Partner-facing</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="customer" id="vis-customer" />
                    <Label htmlFor="vis-customer" className="font-normal cursor-pointer">Customer-facing (external users)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="public" id="vis-public" />
                    <Label htmlFor="vis-public" className="font-normal cursor-pointer">Public-facing (anyone)</Label>
                  </div>
                </div>
              </RadioGroup>
              {errors.outputVisibility && <p className="text-sm text-red-600">{errors.outputVisibility}</p>}
            </div>
          </section>

          <section className="space-y-6 border-t pt-8">
            <div className="border-b pb-3">
              <h2 className="text-2xl font-bold text-gray-900">4) Discovery & Incident History</h2>
            </div>

            <div className="space-y-3">
              <Label>
                AI Discovery Confidence <span className="text-red-600">*</span>
              </Label>
              <RadioGroup value={formData.discoveryConfidence} onValueChange={(value) => setFormData({ ...formData, discoveryConfidence: value })}>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="complete" id="disc-complete" />
                    <Label htmlFor="disc-complete" className="font-normal cursor-pointer">Complete inventory of all AI tools</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="sanctioned-only" id="disc-sanctioned" />
                    <Label htmlFor="disc-sanctioned" className="font-normal cursor-pointer">Know sanctioned tools only</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="suspect-unauthorised" id="disc-suspect" />
                    <Label htmlFor="disc-suspect" className="font-normal cursor-pointer">Suspect unauthorised tools exist</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no-visibility" id="disc-none" />
                    <Label htmlFor="disc-none" className="font-normal cursor-pointer">No visibility into AI usage</Label>
                  </div>
                </div>
              </RadioGroup>
              {errors.discoveryConfidence && <p className="text-sm text-red-600">{errors.discoveryConfidence}</p>}
            </div>

            <div className="space-y-3">
              <Label>AI Security/Compliance Incidents (past 12 months)</Label>
              <p className="text-sm text-gray-600">Select all that apply</p>
              <div className="grid grid-cols-1 gap-3">
                {[
                  'PII leaked via prompts',
                  'Sensitive data in outputs',
                  'Unauthorised webhook/integration discovered',
                  'Compliance notice received',
                  'Customer complaint about AI processing',
                  'Token/API key compromise',
                  'None that we are aware of',
                ].map((incident) => (
                  <div key={incident} className="flex items-center space-x-2">
                    <Checkbox
                      id={`incident-${incident}`}
                      checked={formData.incidents.includes(incident)}
                      onCheckedChange={() => handleCheckboxChange('incidents', incident)}
                    />
                    <Label htmlFor={`incident-${incident}`} className="font-normal cursor-pointer text-sm">
                      {incident}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="space-y-6 border-t pt-8">
            <div className="border-b pb-3">
              <h2 className="text-2xl font-bold text-gray-900">5) Vendors & Data Flows</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <Label>
                  AI Vendor Locations <span className="text-red-600">*</span>
                </Label>
                <RadioGroup value={formData.vendorLocations} onValueChange={(value) => setFormData({ ...formData, vendorLocations: value })}>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="eu-uk" id="vendor-eu" />
                      <Label htmlFor="vendor-eu" className="font-normal cursor-pointer">EU/UK only</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="eu-us" id="vendor-eu-us" />
                      <Label htmlFor="vendor-eu-us" className="font-normal cursor-pointer">EU/UK + US</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="global" id="vendor-global" />
                      <Label htmlFor="vendor-global" className="font-normal cursor-pointer">Global mix (incl. non-adequate countries)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="unknown" id="vendor-unknown" />
                      <Label htmlFor="vendor-unknown" className="font-normal cursor-pointer">Don't know vendor locations</Label>
                    </div>
                  </div>
                </RadioGroup>
                {errors.vendorLocations && <p className="text-sm text-red-600">{errors.vendorLocations}</p>}
              </div>

              <div className="space-y-3">
                <Label>
                  Primary Data Residency <span className="text-red-600">*</span>
                </Label>
                <RadioGroup value={formData.dataResidency} onValueChange={(value) => setFormData({ ...formData, dataResidency: value })}>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="uk" id="res-uk" />
                      <Label htmlFor="res-uk" className="font-normal cursor-pointer">UK</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="eu" id="res-eu" />
                      <Label htmlFor="res-eu" className="font-normal cursor-pointer">EU/EEA</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="us" id="res-us" />
                      <Label htmlFor="res-us" className="font-normal cursor-pointer">US</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="multi" id="res-multi" />
                      <Label htmlFor="res-multi" className="font-normal cursor-pointer">Multi-region</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="other" id="res-other" />
                      <Label htmlFor="res-other" className="font-normal cursor-pointer">Other</Label>
                    </div>
                  </div>
                </RadioGroup>
                {errors.dataResidency && <p className="text-sm text-red-600">{errors.dataResidency}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <Label>
                  International Transfer Mechanism <span className="text-red-600">*</span>
                </Label>
                <RadioGroup value={formData.transferMechanism} onValueChange={(value) => setFormData({ ...formData, transferMechanism: value })}>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="none" id="transfer-none" />
                      <Label htmlFor="transfer-none" className="font-normal cursor-pointer">None</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="scc" id="transfer-scc" />
                      <Label htmlFor="transfer-scc" className="font-normal cursor-pointer">SCC</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="idta" id="transfer-idta" />
                      <Label htmlFor="transfer-idta" className="font-normal cursor-pointer">IDTA</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="both" id="transfer-both" />
                      <Label htmlFor="transfer-both" className="font-normal cursor-pointer">Both</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="unknown-tbd" id="transfer-unknown" />
                      <Label htmlFor="transfer-unknown" className="font-normal cursor-pointer">Unknown/TBD</Label>
                    </div>
                  </div>
                </RadioGroup>
                {errors.transferMechanism && <p className="text-sm text-red-600">{errors.transferMechanism}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="retention">Retention (if known)</Label>
                <Input
                  id="retention"
                  placeholder="e.g., 90 days / 1 year / TBD"
                  value={formData.retention}
                  onChange={(e) => setFormData({ ...formData, retention: e.target.value })}
                />
              </div>
            </div>
          </section>

          <section className="space-y-6 border-t pt-8">
            <div className="border-b pb-3">
              <h2 className="text-2xl font-bold text-gray-900">6) Privacy & Records</h2>
              <p className="text-sm text-gray-600 mt-1">(answer only if personal data is processed)</p>
            </div>

            <div className="space-y-3">
              <Label>Data Types</Label>
              <p className="text-sm text-gray-600">Select all that apply</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'PII',
                  'PHI / health',
                  'PCI',
                  'Secrets / API keys',
                  'Source code / IP',
                  'Customer data',
                  'HR / employee data',
                  'None / public only',
                ].map((dataType) => (
                  <div key={dataType} className="flex items-center space-x-2">
                    <Checkbox
                      id={`data-type-${dataType}`}
                      checked={formData.dataTypes.includes(dataType)}
                      onCheckedChange={() => handleCheckboxChange('dataTypes', dataType)}
                    />
                    <Label htmlFor={`data-type-${dataType}`} className="font-normal cursor-pointer text-sm">
                      {dataType}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <Label>Lawful Basis</Label>
              <p className="text-sm text-gray-600">Select all that apply</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Contract',
                  'Legitimate interests',
                  'Consent',
                  'Legal obligation',
                  'Public task',
                  'Vital interests',
                  'Not applicable / Unknown',
                ].map((basis) => (
                  <div key={basis} className="flex items-center space-x-2">
                    <Checkbox
                      id={`basis-${basis}`}
                      checked={formData.lawfulBasis.includes(basis)}
                      onCheckedChange={() => handleCheckboxChange('lawfulBasis', basis)}
                    />
                    <Label htmlFor={`basis-${basis}`} className="font-normal cursor-pointer text-sm">
                      {basis}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <Label>
                  DPIA/FRIA Status <span className="text-red-600">*</span>
                </Label>
                <RadioGroup value={formData.dpiaStatus} onValueChange={(value) => setFormData({ ...formData, dpiaStatus: value })}>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="completed" id="dpia-completed" />
                      <Label htmlFor="dpia-completed" className="font-normal cursor-pointer">Completed</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="in-progress" id="dpia-progress" />
                      <Label htmlFor="dpia-progress" className="font-normal cursor-pointer">In progress</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="planned" id="dpia-planned" />
                      <Label htmlFor="dpia-planned" className="font-normal cursor-pointer">Planned</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="not-required" id="dpia-not" />
                      <Label htmlFor="dpia-not" className="font-normal cursor-pointer">Not required</Label>
                    </div>
                  </div>
                </RadioGroup>
                {errors.dpiaStatus && <p className="text-sm text-red-600">{errors.dpiaStatus}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="dpiaReference">DPIA ID/Link (if completed)</Label>
                <Input
                  id="dpiaReference"
                  value={formData.dpiaReference}
                  onChange={(e) => setFormData({ ...formData, dpiaReference: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-3">
              <Label>
                RoPA (Record of Processing) <span className="text-red-600">*</span>
              </Label>
              <RadioGroup value={formData.ropaStatus} onValueChange={(value) => setFormData({ ...formData, ropaStatus: value })}>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="exists" id="ropa-exists" />
                    <Label htmlFor="ropa-exists" className="font-normal cursor-pointer">Entry exists</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="planned" id="ropa-planned" />
                    <Label htmlFor="ropa-planned" className="font-normal cursor-pointer">Planned</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="not-started" id="ropa-not" />
                    <Label htmlFor="ropa-not" className="font-normal cursor-pointer">Not started</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="na" id="ropa-na" />
                    <Label htmlFor="ropa-na" className="font-normal cursor-pointer">Not applicable</Label>
                  </div>
                </div>
              </RadioGroup>
              {errors.ropaStatus && <p className="text-sm text-red-600">{errors.ropaStatus}</p>}
            </div>
          </section>

          <section className="space-y-6 border-t pt-8">
            <div className="border-b pb-3">
              <h2 className="text-2xl font-bold text-gray-900">7) Controls & Monitoring</h2>
            </div>

            <div className="space-y-3">
              <Label>Controls in Place</Label>
              <p className="text-sm text-gray-600">Select all that apply</p>
              <div className="grid grid-cols-1 gap-3">
                {[
                  'SSO/MFA on AI tools',
                  'SCIM/JIT user provisioning',
                  'Secrets in enterprise vault with ≤90-day rotation',
                  'Egress allow-list for AI/model/API endpoints',
                  'Webhook controls (blocked/pinned destinations)',
                  'Environment separation (dev / test / prod)',
                  'AI-aware DLP on endpoint / web / email',
                ].map((control) => (
                  <div key={control} className="flex items-center space-x-2">
                    <Checkbox
                      id={`control-${control}`}
                      checked={formData.controlsInPlace.includes(control)}
                      onCheckedChange={() => handleCheckboxChange('controlsInPlace', control)}
                    />
                    <Label htmlFor={`control-${control}`} className="font-normal cursor-pointer text-sm">
                      {control}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <Label>
                AI Activity Logging <span className="text-red-600">*</span>
              </Label>
              <RadioGroup value={formData.activityLogging} onValueChange={(value) => setFormData({ ...formData, activityLogging: value })}>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="comprehensive" id="log-comprehensive" />
                    <Label htmlFor="log-comprehensive" className="font-normal cursor-pointer">All prompts, outputs, uploads/webhooks, and decisions logged (immutably/WORM)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="some" id="log-some" />
                    <Label htmlFor="log-some" className="font-normal cursor-pointer">Some AI activity logged</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="exists-not-ai" id="log-exists" />
                    <Label htmlFor="log-exists" className="font-normal cursor-pointer">Logs exist but not AI-specific</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="none" id="log-none" />
                    <Label htmlFor="log-none" className="font-normal cursor-pointer">No AI activity logging yet</Label>
                  </div>
                </div>
              </RadioGroup>
              {errors.activityLogging && <p className="text-sm text-red-600">{errors.activityLogging}</p>}
            </div>

            <div className="space-y-3">
              <Label>Transparency & Evidence</Label>
              <p className="text-sm text-gray-600">Select all that apply</p>
              <div className="grid grid-cols-1 gap-3">
                {[
                  'Transparency labels/notices live in production',
                  'Evidence exports possible (SIEM/DLP/screenshots)',
                  'Vendor files on record (DPA/SCC/IDTA)',
                  'RoPA entry/export available',
                ].map((item) => (
                  <div key={item} className="flex items-center space-x-2">
                    <Checkbox
                      id={`evidence-${item}`}
                      checked={formData.transparencyEvidence.includes(item)}
                      onCheckedChange={() => handleCheckboxChange('transparencyEvidence', item)}
                    />
                    <Label htmlFor={`evidence-${item}`} className="font-normal cursor-pointer text-sm">
                      {item}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="space-y-6 border-t pt-8">
            <div className="border-b pb-3">
              <h2 className="text-2xl font-bold text-gray-900">8) Human Oversight & Response</h2>
            </div>

            <div className="space-y-3">
              <Label>
                Human Review for AI Decisions <span className="text-red-600">*</span>
              </Label>
              <RadioGroup value={formData.humanReview} onValueChange={(value) => setFormData({ ...formData, humanReview: value })}>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="all" id="review-all" />
                    <Label htmlFor="review-all" className="font-normal cursor-pointer">All AI outputs reviewed by humans before action</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="high-risk" id="review-high" />
                    <Label htmlFor="review-high" className="font-normal cursor-pointer">High-risk outputs reviewed by humans</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="none" id="review-none" />
                    <Label htmlFor="review-none" className="font-normal cursor-pointer">No systematic human review</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="na" id="review-na" />
                    <Label htmlFor="review-na" className="font-normal cursor-pointer">Not applicable (no decision-making use cases)</Label>
                  </div>
                </div>
              </RadioGroup>
              {errors.humanReview && <p className="text-sm text-red-600">{errors.humanReview}</p>}
            </div>

            <div className="space-y-3">
              <Label>
                Runbooks & Redress <span className="text-red-600">*</span>
              </Label>
              <RadioGroup value={formData.runbooksRedress} onValueChange={(value) => setFormData({ ...formData, runbooksRedress: value })}>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="defined" id="runbook-defined" />
                    <Label htmlFor="runbook-defined" className="font-normal cursor-pointer">Incident runbooks + user redress defined</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="some" id="runbook-some" />
                    <Label htmlFor="runbook-some" className="font-normal cursor-pointer">Some elements defined</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="neither" id="runbook-neither" />
                    <Label htmlFor="runbook-neither" className="font-normal cursor-pointer">Neither in place</Label>
                  </div>
                </div>
              </RadioGroup>
              {errors.runbooksRedress && <p className="text-sm text-red-600">{errors.runbooksRedress}</p>}
            </div>
          </section>

          <section className="space-y-6 border-t pt-8">
            <div className="border-b pb-3">
              <h2 className="text-2xl font-bold text-gray-900">9) Drivers & Priorities</h2>
            </div>

            <div className="space-y-3">
              <Label>
                Compliance Drivers <span className="text-red-600">*</span>
              </Label>
              <p className="text-sm text-gray-600">Select all that apply</p>
              <div className="grid grid-cols-1 gap-3">
                {[
                  'Upcoming audit (e.g., SOC 2, ISO 27001)',
                  'Customer/partner questionnaire requirement',
                  'Board/executive mandate',
                  'Regulatory inquiry/notice',
                  'EU AI Act preparation',
                  'Internal risk management',
                  'Sales blocker (procurement requirements)',
                ].map((driver) => (
                  <div key={driver} className="flex items-center space-x-2">
                    <Checkbox
                      id={`driver-${driver}`}
                      checked={formData.complianceDrivers.includes(driver)}
                      onCheckedChange={() => handleCheckboxChange('complianceDrivers', driver)}
                    />
                    <Label htmlFor={`driver-${driver}`} className="font-normal cursor-pointer text-sm">
                      {driver}
                    </Label>
                  </div>
                ))}
              </div>
              {errors.complianceDrivers && <p className="text-sm text-red-600">{errors.complianceDrivers}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="driverOther">Other Driver (please specify)</Label>
              <Input
                id="driverOther"
                value={formData.driverOther}
                onChange={(e) => setFormData({ ...formData, driverOther: e.target.value })}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <Label>
                  Urgency <span className="text-red-600">*</span>
                </Label>
                <RadioGroup value={formData.urgency} onValueChange={(value) => setFormData({ ...formData, urgency: value })}>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="critical" id="urgency-critical" />
                      <Label htmlFor="urgency-critical" className="font-normal cursor-pointer">Critical—now</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="high" id="urgency-high" />
                      <Label htmlFor="urgency-high" className="font-normal cursor-pointer">High—next 3 months</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="medium" id="urgency-medium" />
                      <Label htmlFor="urgency-medium" className="font-normal cursor-pointer">Medium—next 6 months</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="low" id="urgency-low" />
                      <Label htmlFor="urgency-low" className="font-normal cursor-pointer">Low</Label>
                    </div>
                  </div>
                </RadioGroup>
                {errors.urgency && <p className="text-sm text-red-600">{errors.urgency}</p>}
              </div>

              <div className="space-y-3">
                <Label>Decision Speed (optional)</Label>
                <RadioGroup value={formData.decisionSpeed} onValueChange={(value) => setFormData({ ...formData, decisionSpeed: value })}>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="same-day" id="speed-same" />
                      <Label htmlFor="speed-same" className="font-normal cursor-pointer">Same day</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="1-week" id="speed-week" />
                      <Label htmlFor="speed-week" className="font-normal cursor-pointer">Within 1 week</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="1-month" id="speed-month" />
                      <Label htmlFor="speed-month" className="font-normal cursor-pointer">Within 1 month</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="3-months" id="speed-3months" />
                      <Label htmlFor="speed-3months" className="font-normal cursor-pointer">3+ months</Label>
                    </div>
                  </div>
                </RadioGroup>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="biggestConcerns">
                Biggest Concerns <span className="text-red-600">*</span>
              </Label>
              <Textarea
                id="biggestConcerns"
                rows={5}
                placeholder="e.g., data leakage via automations, unclear lawful basis, missing audit trail"
                value={formData.biggestConcerns}
                onChange={(e) => setFormData({ ...formData, biggestConcerns: e.target.value })}
                className={errors.biggestConcerns ? 'border-red-500' : ''}
              />
              {errors.biggestConcerns && <p className="text-sm text-red-600">{errors.biggestConcerns}</p>}
            </div>
          </section>

          <section className="space-y-6 border-t pt-8">
            <div className="border-b pb-3">
              <h2 className="text-2xl font-bold text-gray-900">Consent & Privacy</h2>
            </div>

            <div className="bg-gray-50 rounded-lg p-5 space-y-4">
              <h3 className="font-bold text-gray-900">Data Processing Notice</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                We collect business contact details and technical information about your AI usage to provide an initial risk assessment and prioritised action plan, and to follow up on findings. We retain submissions for up to 12 months for service quality and an audit trail of advice provided. We do not share your data with third parties without consent and do not use it to train AI models. See our{' '}
                <a href="/privacy" target="_blank" className="text-teal-600 hover:text-teal-700 underline">
                  Privacy Policy
                </a>
                {' '}for details.
              </p>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-gray-900 text-sm mb-1">Security Reminder</p>
                  <p className="text-sm text-gray-700">
                    Do not share secrets, API keys, credentials, or production data in this form.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Checkbox
                id="consent"
                checked={formData.consent}
                onCheckedChange={(checked) => setFormData({ ...formData, consent: checked as boolean })}
              />
              <div className="flex-1">
                <Label htmlFor="consent" className="font-normal cursor-pointer">
                  I agree to be contacted about this assessment and acknowledge the Privacy Policy. <span className="text-red-600">*</span>
                </Label>
                {errors.consent && <p className="text-sm text-red-600 mt-1">{errors.consent}</p>}
              </div>
            </div>
          </section>

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

          <div className="flex justify-center pt-6">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-teal hover:bg-teal-600 px-16 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              {isSubmitting ? 'Submitting Assessment...' : 'Submit Emergency Assessment'}
            </Button>
          </div>
        </form>

        <div className="text-center text-sm text-gray-600 mt-8">
          <p>Questions? Contact us at <a href="mailto:contact@elsaai.co.uk" className="text-teal-600 hover:text-teal-700 underline">contact@elsaai.co.uk</a></p>
        </div>
      </div>
    </div>
  );
}
