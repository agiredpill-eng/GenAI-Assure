/*
  # Create Contact Submissions Table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `name` (text) - Full name of the submitter
      - `email` (text) - Email address
      - `subject` (text, nullable) - Optional subject line
      - `message` (text) - Message content
      - `submitted_at` (timestamptz) - Timestamp of submission
      - `created_at` (timestamptz) - Record creation timestamp

  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for anonymous inserts (public contact form)
    - No public read access (internal use only)

  3. Indexes
    - Index on email for quick lookup
    - Index on submitted_at for sorting/filtering
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text,
  message text NOT NULL,
  submitted_at timestamptz NOT NULL DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous contact submissions"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE INDEX IF NOT EXISTS idx_contact_submissions_email ON contact_submissions(email);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_submitted_at ON contact_submissions(submitted_at DESC);
