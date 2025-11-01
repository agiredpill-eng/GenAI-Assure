'use client';

import { useState } from 'react';
import { Mail, MapPin, CircleCheck as CheckCircle2, CircleAlert as AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
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
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || 'Failed to send message');
      }

      const result = await response.json();
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="w-full bg-body">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="bg-body rounded-lg p-8 sm:p-12 text-center border border-[#B9FF2C]/30 shadow-[0_16px_40px_rgba(0,0,0,0.6)]">
            <div className="w-20 h-20 bg-[#B9FF2C] rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="h-10 w-10 text-body" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-textElsa-primary mb-4">
              Thank You!
            </h1>
            <p className="text-lg text-textElsa-secondary mb-6">
              Our representative will be in touch.
            </p>
            <Button
              onClick={() => setSubmitStatus('idle')}
              className="bg-[#B9FF2C] hover:bg-[#B9FF2C]/80 text-body"
            >
              Send Another Message
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-body">
      <div className="relative bg-body border-b borderElsa-card overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at center, rgba(94,250,195,0.1) 0%, transparent 70%)',
        }}></div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-textElsa-primary mb-6">
              <span className="text-[#B9FF2C]">Contact Us</span>
            </h1>
            <p className="text-lg sm:text-xl text-textElsa-secondary leading-relaxed max-w-3xl mx-auto">
              Get in touch with our team to discuss your AI governance needs. We're here to help you navigate
              compliance challenges and secure your AI operations.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-body rounded-lg p-8 border border-[#B9FF2C]/30 shadow-[0_16px_40px_rgba(0,0,0,0.6)]">
              <h2 className="text-2xl font-bold text-textElsa-primary mb-6">Send us a message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">
                    Name <span className="text-red-600">*</span>
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={errors.name ? 'border-red-500' : ''}
                  />
                  {errors.name && (
                    <p className="text-sm text-red-600">{errors.name}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">
                    Email <span className="text-red-600">*</span>
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

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject (optional)</Label>
                  <Input
                    id="subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">
                    Message <span className="text-red-600">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    rows={6}
                    placeholder="Tell us about your AI governance needs..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={errors.message ? 'border-red-500' : ''}
                  />
                  {errors.message && (
                    <p className="text-sm text-red-600">{errors.message}</p>
                  )}
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

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#B9FF2C] hover:bg-[#B9FF2C]/80 text-body py-6 text-lg font-semibold"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-body rounded-lg p-8 border border-[#B9FF2C]/30 shadow-[0_16px_40px_rgba(0,0,0,0.6)]">
              <h2 className="text-2xl font-bold text-textElsa-primary mb-6">Contact Information</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#B9FF2C] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-body" />
                  </div>
                  <div>
                    <h3 className="font-bold text-textElsa-primary mb-1">Email</h3>
                    <a
                      href="mailto:contact@elsaai.co.uk"
                      className="text-[#B9FF2C] hover:text-[#B9FF2C]/80 hover:underline"
                    >
                      contact@elsaai.co.uk
                    </a>
                    <p className="text-sm text-textElsa-secondary mt-1">We typically respond within 1 business day</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#B9FF2C] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-body" />
                  </div>
                  <div>
                    <h3 className="font-bold text-textElsa-primary mb-1">Location</h3>
                    <p className="text-textElsa-primary">United Kingdom</p>
                    <p className="text-sm text-textElsa-secondary mt-1">Serving organizations globally</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-body rounded-lg p-8 border border-[#B9FF2C]/30 shadow-[0_16px_40px_rgba(0,0,0,0.6)]">
              <h2 className="text-xl font-bold text-textElsa-primary mb-4">Need Immediate Help?</h2>
              <p className="text-textElsa-secondary mb-6">
                If you're facing an urgent AI compliance or security issue, consider our free emergency assessment
                to get immediate guidance on your risks and next steps.
              </p>
              <a
              href="/get-your-readiness-assessment"
                className="inline-flex items-center justify-center w-full px-5 py-3 text-base font-semibold text-textElsa-primary bg-transparent border border-[#B9FF2C] hover:text-[#B9FF2C] hover:shadow-[0_0_20px_rgba(185,255,44,0.6)] hover:drop-shadow-[0_0_10px_rgba(185,255,44,0.8)] rounded-sm transition-all shadow-sm hover:shadow-[0_0_20px_rgba(185,255,44,0.6)] transform hover:scale-[1.02] hover:bg-[#B9FF2C]/10"
              >
                Get Your Readiness Assessment
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
