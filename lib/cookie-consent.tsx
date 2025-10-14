'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface CookiePreferences {
  strictlyNecessary: boolean;
  preferences: boolean;
  analytics: boolean;
  marketing: boolean;
}

export interface ConsentLog {
  timestamp: string;
  preferences: CookiePreferences;
  userAgent: string;
  ipAddress?: string;
}

interface CookieConsentContextType {
  preferences: CookiePreferences;
  hasConsented: boolean;
  showBanner: boolean;
  showPreferencesModal: boolean;
  updatePreferences: (newPreferences: Partial<CookiePreferences>) => void;
  acceptAll: () => void;
  rejectAll: () => void;
  openPreferencesModal: () => void;
  closePreferencesModal: () => void;
  closeBanner: () => void;
}

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

const CONSENT_COOKIE_NAME = 'elsa_ai_cookie_consent';
const CONSENT_VERSION = '1.0';

const defaultPreferences: CookiePreferences = {
  strictlyNecessary: true,
  preferences: false,
  analytics: false,
  marketing: false,
};

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);
  const [hasConsented, setHasConsented] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferencesModal, setShowPreferencesModal] = useState(false);

  useEffect(() => {
    const storedConsent = localStorage.getItem(CONSENT_COOKIE_NAME);

    if (storedConsent) {
      try {
        const parsed = JSON.parse(storedConsent);
        setPreferences(parsed.preferences);
        setHasConsented(true);
        setShowBanner(false);
      } catch (error) {
        console.error('Failed to parse stored consent:', error);
        setShowBanner(true);
      }
    } else {
      setShowBanner(true);
    }
  }, []);

  const logConsent = async (newPreferences: CookiePreferences) => {
    const consentLog: ConsentLog = {
      timestamp: new Date().toISOString(),
      preferences: newPreferences,
      userAgent: navigator.userAgent,
    };

    try {
      const response = await fetch('/api/log-consent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(consentLog),
      });

      if (!response.ok) {
        console.error('Failed to log consent');
      }
    } catch (error) {
      console.error('Error logging consent:', error);
    }
  };

  const savePreferences = (newPreferences: CookiePreferences) => {
    const consentData = {
      version: CONSENT_VERSION,
      timestamp: new Date().toISOString(),
      preferences: newPreferences,
    };

    localStorage.setItem(CONSENT_COOKIE_NAME, JSON.stringify(consentData));

    const expiryDate = new Date();
    expiryDate.setMonth(expiryDate.getMonth() + 12);
    document.cookie = `${CONSENT_COOKIE_NAME}=true; expires=${expiryDate.toUTCString()}; path=/; SameSite=Strict`;

    setPreferences(newPreferences);
    setHasConsented(true);

    logConsent(newPreferences);
  };

  const updatePreferences = (newPreferences: Partial<CookiePreferences>) => {
    const updated = { ...preferences, ...newPreferences, strictlyNecessary: true };
    savePreferences(updated);
    setShowPreferencesModal(false);
    setShowBanner(false);
  };

  const acceptAll = () => {
    const allAccepted: CookiePreferences = {
      strictlyNecessary: true,
      preferences: true,
      analytics: true,
      marketing: true,
    };
    savePreferences(allAccepted);
    setShowBanner(false);
    setShowPreferencesModal(false);
  };

  const rejectAll = () => {
    savePreferences(defaultPreferences);
    setShowBanner(false);
    setShowPreferencesModal(false);
  };

  const openPreferencesModal = () => {
    setShowPreferencesModal(true);
  };

  const closePreferencesModal = () => {
    setShowPreferencesModal(false);
  };

  const closeBanner = () => {
    setShowBanner(false);
  };

  return (
    <CookieConsentContext.Provider
      value={{
        preferences,
        hasConsented,
        showBanner,
        showPreferencesModal,
        updatePreferences,
        acceptAll,
        rejectAll,
        openPreferencesModal,
        closePreferencesModal,
        closeBanner,
      }}
    >
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext);
  if (context === undefined) {
    throw new Error('useCookieConsent must be used within a CookieConsentProvider');
  }
  return context;
}
