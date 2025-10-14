'use client';

import { useCookieConsent } from '@/lib/cookie-consent';
import { Button } from '@/components/ui/button';
import { Cookie, Settings } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function CookieConsentBanner() {
  const { showBanner, acceptAll, rejectAll, openPreferencesModal } = useCookieConsent();
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (showBanner && bannerRef.current) {
      const firstButton = bannerRef.current.querySelector('button');
      firstButton?.focus();
    }
  }, [showBanner]);

  if (!showBanner) return null;

  return (
    <div
      ref={bannerRef}
      className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-teal-500 shadow-2xl"
      role="dialog"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-description"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
          <div className="flex items-start gap-3 flex-1">
            <Cookie className="h-6 w-6 text-teal-600 flex-shrink-0 mt-1" aria-hidden="true" />
            <div>
              <h2 id="cookie-banner-title" className="text-lg font-bold text-gray-900 mb-2">
                We value your privacy
              </h2>
              <p id="cookie-banner-description" className="text-sm text-gray-700 leading-relaxed">
                We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic.
                Strictly necessary cookies are always active. You can customize your preferences or accept all cookies.{' '}
                <a href="/cookies" className="text-teal-600 hover:text-teal-700 underline font-semibold">
                  Learn more about cookies
                </a>
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <Button
              onClick={openPreferencesModal}
              variant="outline"
              className="border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50"
              aria-label="Manage cookie preferences"
            >
              <Settings className="h-4 w-4 mr-2" aria-hidden="true" />
              Manage Preferences
            </Button>
            <Button
              onClick={rejectAll}
              variant="outline"
              className="border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50"
              aria-label="Reject all non-essential cookies"
            >
              Reject All
            </Button>
            <Button
              onClick={acceptAll}
              className="bg-teal hover:bg-teal-600"
              aria-label="Accept all cookies"
            >
              Accept All
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
