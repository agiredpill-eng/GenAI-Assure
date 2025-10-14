/*
  # Create framework downloads table

  1. New Tables
    - `framework_downloads`
      - `id` (uuid, primary key)
      - `name` (text) - User's name
      - `email` (text) - User's email
      - `location` (text) - User's location
      - `company` (text, optional) - Company name if applicable
      - `purpose` (text) - Purpose of download
      - `downloaded_at` (timestamptz) - Download timestamp
      - `user_agent` (text) - Browser user agent
      - `ip_address` (inet, optional) - User IP address
      
  2. Security
    - Enable RLS on `framework_downloads` table
    - Add policy for public insert access (anyone can log download)
    - Add policy for authenticated admin users to read download logs
    
  3. Indexes
    - Index on downloaded_at for efficient counting and sorting
    - Index on email for duplicate checking
*/

CREATE TABLE IF NOT EXISTS framework_downloads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  location text NOT NULL,
  company text DEFAULT '',
  purpose text NOT NULL,
  downloaded_at timestamptz DEFAULT now(),
  user_agent text,
  ip_address inet
);

ALTER TABLE framework_downloads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can log framework downloads"
  ON framework_downloads
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read download logs"
  ON framework_downloads
  FOR SELECT
  TO authenticated
  USING (true);

CREATE INDEX IF NOT EXISTS idx_framework_downloads_downloaded_at ON framework_downloads(downloaded_at DESC);
CREATE INDEX IF NOT EXISTS idx_framework_downloads_email ON framework_downloads(email);

CREATE OR REPLACE FUNCTION get_framework_download_count()
RETURNS bigint
LANGUAGE sql
SECURITY DEFINER
AS $$
  SELECT COUNT(*) FROM framework_downloads;
$$;
