/*
  # Create emergency risk assessments table

  1. New Tables
    - `emergency_assessments`
      - `id` (uuid, primary key)
      - Contact Information:
        - `full_name` (text, required)
        - `work_email` (text, required)
        - `company` (text, required)
        - `role_title` (text, required)
        - `company_size` (text, required)
        - `phone` (text, optional)
      - Use Case Information:
        - `primary_use_cases` (jsonb) - array of selected use cases
        - `use_case_other` (text, optional)
        - `top_use_case_owner` (text, required)
        - `business_criticality` (text, required)
        - `adoption_status` (text, required)
        - `use_case_description` (text, required)
      - Decision Impact:
        - `decision_impact` (text, required)
        - `output_visibility` (text, required)
      - Discovery:
        - `discovery_confidence` (text, required)
        - `incidents` (jsonb) - array of incidents
      - Vendors & Data:
        - `vendor_locations` (text, required)
        - `data_residency` (text, required)
        - `transfer_mechanism` (text, required)
        - `retention` (text, optional)
      - Privacy:
        - `data_types` (jsonb) - array of data types
        - `lawful_basis` (jsonb) - array of lawful basis
        - `dpia_status` (text, required)
        - `dpia_reference` (text, optional)
        - `ropa_status` (text, required)
      - Controls:
        - `controls_in_place` (jsonb) - array of controls
        - `activity_logging` (text, required)
        - `transparency_evidence` (jsonb) - array of transparency items
      - Oversight:
        - `human_review` (text, required)
        - `runbooks_redress` (text, required)
      - Drivers:
        - `compliance_drivers` (jsonb) - array of drivers
        - `driver_other` (text, optional)
        - `urgency` (text, required)
        - `decision_speed` (text, optional)
        - `biggest_concerns` (text, required)
      - Consent:
        - `consent_agreed` (boolean, required)
      - Metadata:
        - `created_at` (timestamptz)
      
  2. Security
    - Enable RLS on `emergency_assessments` table
    - Add policy for public insert access
    - Add policy for authenticated users to read assessments
*/

CREATE TABLE IF NOT EXISTS emergency_assessments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  
  full_name text NOT NULL,
  work_email text NOT NULL,
  company text NOT NULL,
  role_title text NOT NULL,
  company_size text NOT NULL,
  phone text DEFAULT '',
  
  primary_use_cases jsonb NOT NULL DEFAULT '[]'::jsonb,
  use_case_other text DEFAULT '',
  top_use_case_owner text NOT NULL,
  business_criticality text NOT NULL,
  adoption_status text NOT NULL,
  use_case_description text NOT NULL,
  
  decision_impact text NOT NULL,
  output_visibility text NOT NULL,
  
  discovery_confidence text NOT NULL,
  incidents jsonb NOT NULL DEFAULT '[]'::jsonb,
  
  vendor_locations text NOT NULL,
  data_residency text NOT NULL,
  transfer_mechanism text NOT NULL,
  retention text DEFAULT '',
  
  data_types jsonb NOT NULL DEFAULT '[]'::jsonb,
  lawful_basis jsonb NOT NULL DEFAULT '[]'::jsonb,
  dpia_status text NOT NULL,
  dpia_reference text DEFAULT '',
  ropa_status text NOT NULL,
  
  controls_in_place jsonb NOT NULL DEFAULT '[]'::jsonb,
  activity_logging text NOT NULL,
  transparency_evidence jsonb NOT NULL DEFAULT '[]'::jsonb,
  
  human_review text NOT NULL,
  runbooks_redress text NOT NULL,
  
  compliance_drivers jsonb NOT NULL DEFAULT '[]'::jsonb,
  driver_other text DEFAULT '',
  urgency text NOT NULL,
  decision_speed text DEFAULT '',
  biggest_concerns text NOT NULL,
  
  consent_agreed boolean NOT NULL DEFAULT false,
  
  created_at timestamptz DEFAULT now()
);

ALTER TABLE emergency_assessments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit emergency assessment"
  ON emergency_assessments
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read emergency assessments"
  ON emergency_assessments
  FOR SELECT
  TO authenticated
  USING (true);