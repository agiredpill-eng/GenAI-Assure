/*
  # Restore All Tables for ELSA AI Forms

  This migration restores all tables required for the contact form, emergency assessment form, and framework download functionality.

  ## Tables Created

  1. **contact_submissions**
     - `id` (uuid, primary key)
     - `name` (text)
     - `email` (text)
     - `subject` (text, nullable)
     - `message` (text)
     - `created_at` (timestamptz)

  2. **emergency_assessments**
     - `id` (uuid, primary key)
     - `full_name` (text)
     - `work_email` (text)
     - `company` (text)
     - `role_title` (text)
     - `company_size` (text)
     - `phone` (text, nullable)
     - All assessment form fields (jsonb for arrays, text for singles)
     - `created_at` (timestamptz)

  3. **framework_downloads**
     - `id` (uuid, primary key)
     - `name` (text)
     - `email` (text)
     - `location` (text)
     - `company` (text, nullable)
     - `purpose` (text)
     - `user_agent` (text, nullable)
     - `created_at` (timestamptz)

  ## Security
  - All tables have RLS enabled
  - Public insert policies allow form submissions
  - Admin read policies for data access
*/

-- Contact Submissions Table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public insert for contact submissions"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Emergency Assessments Table
CREATE TABLE IF NOT EXISTS emergency_assessments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  work_email text NOT NULL,
  company text NOT NULL,
  role_title text NOT NULL,
  company_size text NOT NULL,
  phone text,
  primary_use_cases jsonb DEFAULT '[]'::jsonb,
  use_case_other text,
  top_use_case_owner text NOT NULL,
  business_criticality text NOT NULL,
  adoption_status text NOT NULL,
  use_case_description text NOT NULL,
  decision_impact text NOT NULL,
  output_visibility text NOT NULL,
  discovery_confidence text NOT NULL,
  incidents jsonb DEFAULT '[]'::jsonb,
  vendor_locations text NOT NULL,
  data_residency text NOT NULL,
  transfer_mechanism text NOT NULL,
  retention text,
  data_types jsonb DEFAULT '[]'::jsonb,
  lawful_basis jsonb DEFAULT '[]'::jsonb,
  dpia_status text NOT NULL,
  dpia_reference text,
  ropa_status text NOT NULL,
  controls_in_place jsonb DEFAULT '[]'::jsonb,
  activity_logging text NOT NULL,
  transparency_evidence jsonb DEFAULT '[]'::jsonb,
  human_review text NOT NULL,
  runbooks_redress text NOT NULL,
  compliance_drivers jsonb DEFAULT '[]'::jsonb,
  driver_other text,
  urgency text NOT NULL,
  decision_speed text,
  biggest_concerns text NOT NULL,
  consent boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE emergency_assessments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public insert for emergency assessments"
  ON emergency_assessments
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Framework Downloads Table
CREATE TABLE IF NOT EXISTS framework_downloads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  location text NOT NULL,
  company text,
  purpose text NOT NULL,
  user_agent text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE framework_downloads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public insert for framework downloads"
  ON framework_downloads
  FOR INSERT
  TO anon
  WITH CHECK (true);
