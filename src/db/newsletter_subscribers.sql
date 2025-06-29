-- Table for storing newsletter subscribers
CREATE TABLE newsletter_subscribers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL UNIQUE,
  subscribed_at TIMESTAMPTZ DEFAULT now() NOT NULL,
  unsubscribed_at TIMESTAMPTZ DEFAULT NULL,
  is_active BOOLEAN DEFAULT true
);

-- Enable Row Level Security (RLS)
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Create policy to allow insertions from anyone
CREATE POLICY "Allow anon inserts" ON newsletter_subscribers
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create policy to allow viewing data only to authenticated users with admin role
CREATE POLICY "Allow viewing for admins only" ON newsletter_subscribers
  FOR SELECT
  USING (auth.role() = 'authenticated' AND auth.email() IN (
    -- Add administrator emails here
    'admin@example.com'
  ));

-- Create an index on email for faster lookups
CREATE INDEX newsletter_subscribers_email_idx ON newsletter_subscribers(email);

-- Create an index on subscription date for reports
CREATE INDEX newsletter_subscribers_date_idx ON newsletter_subscribers(subscribed_at);

-- COMMENT ON TABLE and columns for documentation
COMMENT ON TABLE newsletter_subscribers IS 'Stores email addresses of newsletter subscribers';
COMMENT ON COLUMN newsletter_subscribers.id IS 'Unique identifier for the subscription';
COMMENT ON COLUMN newsletter_subscribers.email IS 'Email address of the subscriber';
COMMENT ON COLUMN newsletter_subscribers.subscribed_at IS 'Timestamp when the subscription was created';
COMMENT ON COLUMN newsletter_subscribers.unsubscribed_at IS 'Timestamp when the subscriber unsubscribed (if applicable)';
COMMENT ON COLUMN newsletter_subscribers.is_active IS 'Flag indicating if the subscription is active'; 