/*
  # Create Assessment Submissions Table

  1. New Tables
    - `assessment_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `full_name` (text) - Full name of the submitter
      - `email` (text) - Work email address
      - `company` (text) - Company name
      - `role` (text) - Job role/position
      - `company_size` (text) - Size of the company
      - `phone` (text, nullable) - Optional phone number
      - `ai_stack` (jsonb) - Array of AI tools being used
      - `data_types` (jsonb) - Array of data types processed
      - `controls_in_place` (jsonb) - Array of existing security controls
      - `governance_status` (text) - Current AI governance status
      - `data_residency` (text) - Primary data residency location
      - `urgency` (text) - Urgency level of the request
      - `decision_speed` (text, nullable) - Decision-making timeline
      - `concerns` (text) - Description of biggest concerns
      - `consent` (boolean) - Agreement to be contacted
      - `submitted_at` (timestamptz) - Timestamp of submission
      - `created_at` (timestamptz) - Record creation timestamp

  2. Security
    - Enable RLS on `assessment_submissions` table
    - Add policy for service role to insert submissions
    - No public read access (internal use only)

  3. Indexes
    - Index on email for quick lookup
    - Index on submitted_at for sorting/filtering
*/

CREATE TABLE IF NOT EXISTS assessment_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  company text NOT NULL,
  role text NOT NULL,
  company_size text NOT NULL,
  phone text,
  ai_stack jsonb NOT NULL DEFAULT '[]'::jsonb,
  data_types jsonb NOT NULL DEFAULT '[]'::jsonb,
  controls_in_place jsonb NOT NULL DEFAULT '[]'::jsonb,
  governance_status text NOT NULL,
  data_residency text NOT NULL,
  urgency text NOT NULL,
  decision_speed text,
  concerns text NOT NULL,
  consent boolean NOT NULL DEFAULT false,
  submitted_at timestamptz NOT NULL DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE assessment_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Service role can insert submissions"
  ON assessment_submissions
  FOR INSERT
  TO service_role
  WITH CHECK (true);

CREATE POLICY "Service role can read submissions"
  ON assessment_submissions
  FOR SELECT
  TO service_role
  USING (true);

CREATE INDEX IF NOT EXISTS idx_assessment_submissions_email ON assessment_submissions(email);
CREATE INDEX IF NOT EXISTS idx_assessment_submissions_submitted_at ON assessment_submissions(submitted_at DESC);
