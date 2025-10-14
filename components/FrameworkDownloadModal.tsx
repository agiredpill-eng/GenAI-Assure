'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Download, Loader2 } from 'lucide-react';

interface FrameworkDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDownloadSuccess: () => void;
}

export default function FrameworkDownloadModal({ isOpen, onClose, onDownloadSuccess }: FrameworkDownloadModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    company: '',
    purpose: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    if (!formData.name || !formData.email || !formData.location || !formData.purpose) {
      setError('Please fill in all required fields');
      setIsSubmitting(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/log-download', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          userAgent: navigator.userAgent,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || 'Failed to log download');
      }

      const pdfUrl = 'https://raw.githubusercontent.com/elsasecure/GenAI_Assure_Framework/main/downloads/GenAI_Assure_Framework_v1.0.pdf';
      window.open(pdfUrl, '_blank');

      onDownloadSuccess();
      setFormData({
        name: '',
        email: '',
        location: '',
        company: '',
        purpose: '',
      });
      onClose();
    } catch (err) {
      console.error('Error logging download:', err);
      const errorMessage = err instanceof Error ? err.message : 'Failed to process download. Please try again.';
      setError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <Download className="h-6 w-6 text-teal-600" />
            Download GenAI Assure Framework
          </DialogTitle>
          <DialogDescription className="text-base text-gray-700">
            Please provide the following information to download the framework PDF. This helps us understand how our framework is being used.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-gray-900 font-semibold">
              Full Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="John Smith"
              value={formData.name}
              onChange={handleChange}
              required
              className="border-2 border-gray-300 focus:border-teal-500"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-900 font-semibold">
              Email Address <span className="text-red-500">*</span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="john.smith@company.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="border-2 border-gray-300 focus:border-teal-500"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="location" className="text-gray-900 font-semibold">
              Location <span className="text-red-500">*</span>
            </Label>
            <Input
              id="location"
              name="location"
              type="text"
              placeholder="London, United Kingdom"
              value={formData.location}
              onChange={handleChange}
              required
              className="border-2 border-gray-300 focus:border-teal-500"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="company" className="text-gray-900 font-semibold">
              Company Name (Optional)
            </Label>
            <Input
              id="company"
              name="company"
              type="text"
              placeholder="Your company name"
              value={formData.company}
              onChange={handleChange}
              className="border-2 border-gray-300 focus:border-teal-500"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="purpose" className="text-gray-900 font-semibold">
              Purpose of Download <span className="text-red-500">*</span>
            </Label>
            <Textarea
              id="purpose"
              name="purpose"
              placeholder="e.g., Evaluating AI governance frameworks for my organization, Research for compliance project, etc."
              value={formData.purpose}
              onChange={handleChange}
              required
              rows={4}
              className="border-2 border-gray-300 focus:border-teal-500"
            />
          </div>

          {error && (
            <div className="bg-red-50 border-2 border-red-200 rounded-lg p-3 text-sm text-red-700">
              {error}
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1 border-2 border-gray-300 hover:bg-gray-50"
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-teal hover:bg-teal-600"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <Download className="h-4 w-4 mr-2" />
                  Download Framework
                </>
              )}
            </Button>
          </div>

          <p className="text-xs text-gray-600 text-center pt-2">
            By downloading, you agree to our{' '}
            <a href="/privacy" className="text-teal-600 hover:text-teal-700 underline">
              Privacy Policy
            </a>
            . We will not share your information with third parties.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}
