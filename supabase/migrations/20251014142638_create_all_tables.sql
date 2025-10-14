/*
  # Create All Database Tables

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, required)
      - `subject` (text)
      - `message` (text, required)
      - `created_at` (timestamptz, default now())
      
    - `emergency_assessments`
      - `id` (uuid, primary key)
      - `full_name` (text, required)
      - `work_email` (text, required)
      - `company` (text, required)
      - `role_title` (text, required)
      - `company_size` (text, required)
      - `phone` (text)
      - `form_data` (jsonb, stores complete form submission)
      - `created_at` (timestamptz, default now())
      
    - `framework_downloads`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, required)
      - `location` (text, required)
      - `company` (text)
      - `purpose` (text, required)
      - `user_agent` (text)
      - `created_at` (timestamptz, default now())
      
  2. Security
    - Enable RLS on all tables
    - Add policies to allow anonymous inserts (public forms)
    - Add policies to allow authenticated users to read all records
*/

-- Contact Submissions Table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text DEFAULT '',
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous inserts"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to view all"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);

-- Emergency Assessments Table
CREATE TABLE IF NOT EXISTS emergency_assessments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  work_email text NOT NULL,
  company text NOT NULL,
  role_title text NOT NULL,
  company_size text NOT NULL,
  phone text DEFAULT '',
  form_data jsonb NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE emergency_assessments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous inserts on emergency_assessments"
  ON emergency_assessments
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to view all emergency_assessments"
  ON emergency_assessments
  FOR SELECT
  TO authenticated
  USING (true);

-- Framework Downloads Table
CREATE TABLE IF NOT EXISTS framework_downloads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  location text NOT NULL,
  company text DEFAULT '',
  purpose text NOT NULL,
  user_agent text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE framework_downloads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous inserts on framework_downloads"
  ON framework_downloads
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to view all framework_downloads"
  ON framework_downloads
  FOR SELECT
  TO authenticated
  USING (true);