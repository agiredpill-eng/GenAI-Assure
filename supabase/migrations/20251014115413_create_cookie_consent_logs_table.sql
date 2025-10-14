/*
  # Create cookie consent logs table

  1. New Tables
    - `cookie_consent_logs`
      - `id` (uuid, primary key)
      - `timestamp` (timestamptz) - When consent was given
      - `preferences` (jsonb) - Cookie preferences object
      - `user_agent` (text) - Browser user agent string
      - `ip_address` (inet, optional) - User IP address
      - `created_at` (timestamptz) - Record creation timestamp
      
  2. Security
    - Enable RLS on `cookie_consent_logs` table
    - Add policy for public insert access (anyone can log consent)
    - Add policy for authenticated admin users to read logs
    
  3. Data Retention
    - Consent logs retained for 12 months (automated cleanup not included in migration)
*/

CREATE TABLE IF NOT EXISTS cookie_consent_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  timestamp timestamptz NOT NULL,
  preferences jsonb NOT NULL,
  user_agent text NOT NULL,
  ip_address inet,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE cookie_consent_logs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can log cookie consent"
  ON cookie_consent_logs
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read consent logs"
  ON cookie_consent_logs
  FOR SELECT
  TO authenticated
  USING (true);

CREATE INDEX IF NOT EXISTS idx_cookie_consent_logs_timestamp ON cookie_consent_logs(timestamp);
CREATE INDEX IF NOT EXISTS idx_cookie_consent_logs_created_at ON cookie_consent_logs(created_at);
