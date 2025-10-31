'use client';

import { useCookieConsent, CookiePreferences } from '@/lib/cookie-consent';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { useState, useEffect } from 'react';
import { Shield, Settings as SettingsIcon, BarChart3, Target, Info } from 'lucide-react';

interface CookieCategory {
  id: keyof CookiePreferences;
  title: string;
  description: string;
  icon: React.ReactNode;
  required?: boolean;
  examples: string[];
  retention: string;
}

const cookieCategories: CookieCategory[] = [
  {
    id: 'strictlyNecessary',
    title: 'Strictly Necessary',
    description: 'These cookies are essential for the website to function properly. They enable core functionality such as security, consent storage, and load balancing. These cannot be disabled.',
    icon: <Shield className="h-5 w-5 text-green-600" />,
    required: true,
    examples: ['Session management', 'Security tokens', 'Consent preferences', 'Load balancing'],
    retention: 'Session or 12 months',
  },
  {
    id: 'preferences',
    title: 'Preferences',
    description: 'These cookies remember your choices and settings to provide a more personalized experience, such as language preferences and display settings.',
    icon: <SettingsIcon className="h-5 w-5 text-blue-600" />,
    examples: ['Language selection', 'Region settings', 'Display preferences', 'Accessibility options'],
    retention: 'Up to 12 months',
  },
  {
    id: 'analytics',
    title: 'Analytics',
    description: 'These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our services.',
    icon: <BarChart3 className="h-5 w-5 text-purple-600" />,
    examples: ['Google Analytics', 'Page views', 'User behavior', 'Performance metrics'],
    retention: 'Up to 24 months',
  },
  {
    id: 'marketing',
    title: 'Marketing',
    description: 'These cookies are used to track visitors across websites to display relevant advertisements and measure campaign effectiveness.',
    icon: <Target className="h-5 w-5 text-orange-600" />,
    examples: ['Ad targeting', 'Campaign tracking', 'Social media integration', 'Conversion tracking'],
    retention: 'Up to 12 months',
  },
];

export default function CookiePreferencesModal() {
  const { showPreferencesModal, closePreferencesModal, preferences, updatePreferences, acceptAll } = useCookieConsent();
  const [localPreferences, setLocalPreferences] = useState<CookiePreferences>(preferences);

  useEffect(() => {
    setLocalPreferences(preferences);
  }, [preferences]);

  const handleToggle = (category: keyof CookiePreferences) => {
    if (category === 'strictlyNecessary') return;
    setLocalPreferences((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const handleSave = () => {
    updatePreferences(localPreferences);
  };

  const handleAcceptAll = () => {
    acceptAll();
  };

  return (
    <Dialog open={showPreferencesModal} onOpenChange={closePreferencesModal}>
      <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-textElsa-primary">Cookie Preferences</DialogTitle>
          <DialogDescription className="text-base text-textElsa-secondary">
            Manage your cookie preferences below. Strictly necessary cookies are always active as they are essential for the website to function.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          {cookieCategories.map((category) => (
            <div
              key={category.id}
              className="border border-[#B9FF2C]/30 rounded-lg p-4 hover:border-[#B9FF2C] transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3 flex-1">
                  <div className="mt-1" aria-hidden="true">
                    {category.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-bold text-textElsa-primary">{category.title}</h3>
                      {category.required && (
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-[#B9FF2C] text-body">
                          Always Active
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-textElsa-secondary mb-3">{category.description}</p>

                    <details className="text-sm">
                      <summary className="cursor-pointer text-[#B9FF2C] hover:text-[#B9FF2C]/80 font-semibold flex items-center gap-1 mb-2">
                        <Info className="h-4 w-4" aria-hidden="true" />
                        View details
                      </summary>
                      <div className="mt-2 pl-5 space-y-2 text-textElsa-secondary">
                        <div>
                          <span className="font-semibold">Examples:</span>
                          <ul className="list-disc list-inside ml-2 mt-1">
                            {category.examples.map((example, idx) => (
                              <li key={idx}>{example}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <span className="font-semibold">Retention:</span> {category.retention}
                        </div>
                        <div>
                          <span className="font-semibold">Lawful basis:</span>{' '}
                          {category.required ? 'Legitimate interests' : 'Consent'}
                        </div>
                      </div>
                    </details>
                  </div>
                </div>

                <div className="flex items-center">
                  <Switch
                    id={category.id}
                    checked={localPreferences[category.id]}
                    onCheckedChange={() => handleToggle(category.id)}
                    disabled={category.required}
                    aria-label={`Toggle ${category.title} cookies`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-[#B9FF2C]/30">
          <Button
            onClick={handleSave}
            className="bg-[#B9FF2C] hover:bg-[#B9FF2C]/80 text-body flex-1"
            aria-label="Save cookie preferences"
          >
            Save Preferences
          </Button>
          <Button
            onClick={handleAcceptAll}
            variant="outline"
            className="border-2 border-[#B9FF2C] hover:bg-[#B9FF2C]/10 hover:text-[#B9FF2C] flex-1"
            aria-label="Accept all cookies"
          >
            Accept All
          </Button>
        </div>

        <p className="text-xs text-textElsa-secondary text-center pt-2">
          Your preferences will be stored for 12 months. You can change them at any time from our{' '}
          <a href="/cookies" className="text-[#B9FF2C] hover:text-[#B9FF2C]/80 underline font-semibold">
            Cookies page
          </a>
          .
        </p>
      </DialogContent>
    </Dialog>
  );
}
