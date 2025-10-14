'use client';

import { useCookieConsent } from '@/lib/cookie-consent';
import { Button } from '@/components/ui/button';
import { Cookie, Shield, Settings as SettingsIcon, BarChart3, Target, RefreshCw } from 'lucide-react';

export default function CookiesPage() {
  const { openPreferencesModal, preferences } = useCookieConsent();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Cookie className="h-10 w-10 text-teal-600" />
            <h1 className="text-4xl font-bold text-gray-900">Cookies & Preferences</h1>
          </div>

          <div className="bg-teal-50 border-2 border-teal-200 rounded-xl p-6 mb-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-lg font-bold text-gray-900 mb-2">Manage Your Cookie Preferences</h2>
                <p className="text-sm text-gray-700">
                  Control which cookies we can use to improve your experience. You can change your preferences at any time.
                </p>
              </div>
              <Button
                onClick={openPreferencesModal}
                className="bg-teal hover:bg-teal-600 whitespace-nowrap"
              >
                <SettingsIcon className="h-4 w-4 mr-2" />
                Manage Cookies
              </Button>
            </div>

            <div className="mt-4 pt-4 border-t border-teal-200">
              <h3 className="text-sm font-semibold text-gray-900 mb-2">Your Current Settings:</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${preferences.strictlyNecessary ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                  <span className="text-xs text-gray-700">Strictly Necessary</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${preferences.preferences ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                  <span className="text-xs text-gray-700">Preferences</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${preferences.analytics ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                  <span className="text-xs text-gray-700">Analytics</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${preferences.marketing ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                  <span className="text-xs text-gray-700">Marketing</span>
                </div>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What Are Cookies?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Cookies are small text files that are placed on your device when you visit a website. They are widely used to make
                websites work more efficiently and provide information to the owners of the site.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We use cookies to enhance your browsing experience, analyze site traffic, and serve personalized content. This page
                explains what cookies we use, why we use them, and how you can control them.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookie Categories</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We categorize cookies into four types based on their purpose. You can control your preferences for each category
                except strictly necessary cookies, which are essential for the website to function.
              </p>

              <div className="space-y-6">
                <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <Shield className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-bold text-gray-900">Strictly Necessary Cookies</h3>
                        <span className="inline-flex items-center px-2 py-1 rounded text-xs font-semibold bg-green-100 text-green-800">
                          Always Active
                        </span>
                      </div>
                      <p className="text-gray-700 leading-relaxed mb-3">
                        These cookies are essential for the website to function properly and cannot be disabled. They enable core
                        functionality such as security, consent storage, and load balancing.
                      </p>
                      <div className="text-sm text-gray-600 space-y-2">
                        <div>
                          <span className="font-semibold">Purpose:</span> Session management, security tokens, consent preferences, load balancing
                        </div>
                        <div>
                          <span className="font-semibold">Retention:</span> Session or up to 12 months
                        </div>
                        <div>
                          <span className="font-semibold">Lawful basis:</span> Legitimate interests (necessary for website operation)
                        </div>
                        <div>
                          <span className="font-semibold">Examples:</span> elsa_ai_cookie_consent, session_id, security_token
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <SettingsIcon className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Preferences Cookies</h3>
                      <p className="text-gray-700 leading-relaxed mb-3">
                        These cookies remember your choices and settings to provide a more personalized experience, such as language
                        preferences and display settings.
                      </p>
                      <div className="text-sm text-gray-600 space-y-2">
                        <div>
                          <span className="font-semibold">Purpose:</span> Language selection, region settings, display preferences, accessibility options
                        </div>
                        <div>
                          <span className="font-semibold">Retention:</span> Up to 12 months
                        </div>
                        <div>
                          <span className="font-semibold">Lawful basis:</span> Consent
                        </div>
                        <div>
                          <span className="font-semibold">Examples:</span> language_pref, region, theme_preference
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <BarChart3 className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Analytics Cookies</h3>
                      <p className="text-gray-700 leading-relaxed mb-3">
                        These cookies help us understand how visitors interact with our website by collecting and reporting information
                        anonymously. This helps us improve our services.
                      </p>
                      <div className="text-sm text-gray-600 space-y-2">
                        <div>
                          <span className="font-semibold">Purpose:</span> Google Analytics, page views, user behavior, performance metrics
                        </div>
                        <div>
                          <span className="font-semibold">Retention:</span> Up to 24 months
                        </div>
                        <div>
                          <span className="font-semibold">Lawful basis:</span> Consent
                        </div>
                        <div>
                          <span className="font-semibold">Third-party vendors:</span> Google Analytics
                        </div>
                        <div>
                          <span className="font-semibold">Examples:</span> _ga, _gid, _gat
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <Target className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Marketing Cookies</h3>
                      <p className="text-gray-700 leading-relaxed mb-3">
                        These cookies are used to track visitors across websites to display relevant advertisements and measure
                        campaign effectiveness.
                      </p>
                      <div className="text-sm text-gray-600 space-y-2">
                        <div>
                          <span className="font-semibold">Purpose:</span> Ad targeting, campaign tracking, social media integration, conversion tracking
                        </div>
                        <div>
                          <span className="font-semibold">Retention:</span> Up to 12 months
                        </div>
                        <div>
                          <span className="font-semibold">Lawful basis:</span> Consent
                        </div>
                        <div>
                          <span className="font-semibold">Third-party vendors:</span> Google Ads, Facebook Pixel, LinkedIn Insight
                        </div>
                        <div>
                          <span className="font-semibold">Examples:</span> _fbp, fr, li_sugr
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Cookies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Some of the cookies on our website are set by third-party services that appear on our pages. We use these services
                to provide analytics and marketing functionality.
              </p>
              <div className="bg-gray-50 border-2 border-gray-200 rounded-xl p-5">
                <h3 className="font-bold text-gray-900 mb-3">Third-Party Vendors:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 mt-1">•</span>
                    <div>
                      <span className="font-semibold">Google Analytics:</span> Website analytics and performance monitoring
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 mt-1">•</span>
                    <div>
                      <span className="font-semibold">Google Ads:</span> Advertising and conversion tracking
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 mt-1">•</span>
                    <div>
                      <span className="font-semibold">Facebook Pixel:</span> Social media advertising and analytics
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 mt-1">•</span>
                    <div>
                      <span className="font-semibold">LinkedIn Insight:</span> Professional network advertising
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Control Cookies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You have several options to control or limit how we and our partners use cookies:
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <RefreshCw className="h-5 w-5 text-teal-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Use our cookie preferences tool</h3>
                    <p className="text-gray-700 text-sm">
                      Click the "Manage Cookies" button at the top of this page to customize your preferences.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <RefreshCw className="h-5 w-5 text-teal-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Browser settings</h3>
                    <p className="text-gray-700 text-sm">
                      Most browsers allow you to refuse cookies or only accept them from certain websites. Check your browser's help
                      section for instructions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <RefreshCw className="h-5 w-5 text-teal-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Opt-out links</h3>
                    <p className="text-gray-700 text-sm">
                      You can opt out of interest-based advertising by visiting{' '}
                      <a
                        href="https://www.youronlinechoices.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-600 hover:text-teal-700 underline"
                      >
                        Your Online Choices
                      </a>{' '}
                      or{' '}
                      <a
                        href="https://optout.aboutads.info/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-600 hover:text-teal-700 underline"
                      >
                        Digital Advertising Alliance
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Consent Logging</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                In compliance with GDPR and UK GDPR, we log your cookie consent choices. These logs include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Timestamp of your consent</li>
                <li>Your cookie preferences (which categories you accepted)</li>
                <li>Browser information (user agent)</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Consent logs are retained for 12 months to demonstrate compliance with data protection regulations. Your preferences
                remain active for 12 months from the date you set them, after which you will be asked to review your choices again.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Updates to This Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for legal or regulatory
                reasons. The latest version will always be available on this page. If we make significant changes, we will notify
                you through a banner on our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about our use of cookies or this policy, please contact us:
              </p>
              <div className="bg-gray-50 border-2 border-gray-200 rounded-xl p-5">
                <p className="text-gray-700">
                  <strong>Email:</strong>{' '}
                  <a href="mailto:contact@elsaai.co.uk" className="text-teal-600 hover:text-teal-700 underline">
                    contact@elsaai.co.uk
                  </a>
                </p>
                <p className="text-gray-700 mt-2">
                  <strong>Location:</strong> United Kingdom
                </p>
              </div>
            </section>
          </div>

          <div className="mt-12 text-center">
            <Button
              onClick={openPreferencesModal}
              size="lg"
              className="bg-teal hover:bg-teal-600"
            >
              <SettingsIcon className="h-5 w-5 mr-2" />
              Update Cookie Preferences
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
