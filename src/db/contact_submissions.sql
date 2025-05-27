-- Table for storing contact form submissions
CREATE TABLE contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  phone TEXT,
  message TEXT NOT NULL,
  budget TEXT,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- Enable Row Level Security (RLS)
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow insertions from anyone
CREATE POLICY "Allow anon inserts" ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create policy to allow viewing data only to authenticated users with admin role
-- Note: You need to set up authentication and roles for this to work
CREATE POLICY "Allow viewing for admins only" ON contact_submissions
  FOR SELECT
  USING (auth.role() = 'authenticated' AND auth.email() IN (
    -- Add administrator emails here
    'admin@example.com'
  ));

-- Create an index on email for potential future queries
CREATE INDEX contact_submissions_email_idx ON contact_submissions(email);

-- Create an index on created_at for sorting/filtering
CREATE INDEX contact_submissions_created_at_idx ON contact_submissions(created_at);

-- COMMENT ON TABLE and columns for documentation
COMMENT ON TABLE contact_submissions IS 'Stores submissions from the website contact form';
COMMENT ON COLUMN contact_submissions.id IS 'Unique identifier for the submission';
COMMENT ON COLUMN contact_submissions.name IS 'Name of the person submitting the form';
COMMENT ON COLUMN contact_submissions.email IS 'Email address of the person submitting the form';
COMMENT ON COLUMN contact_submissions.company IS 'Company name (optional)';
COMMENT ON COLUMN contact_submissions.phone IS 'Phone number (optional)';
COMMENT ON COLUMN contact_submissions.message IS 'Message content from the form';
COMMENT ON COLUMN contact_submissions.budget IS 'Selected budget range from the form';
COMMENT ON COLUMN contact_submissions.created_at IS 'Timestamp when the submission was created'; 