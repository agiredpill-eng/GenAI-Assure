/*
  # Update Assessment Submissions RLS Policy

  1. Changes
    - Drop service role policies
    - Add anon role policy for public form submissions
    - Allow anonymous users to insert assessment submissions

  2. Security
    - Only INSERT allowed for anon users
    - No SELECT access for public users
    - Internal admin access should use service role
*/

DROP POLICY IF EXISTS "Service role can insert submissions" ON assessment_submissions;
DROP POLICY IF EXISTS "Service role can read submissions" ON assessment_submissions;

CREATE POLICY "Allow anonymous submissions"
  ON assessment_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);
