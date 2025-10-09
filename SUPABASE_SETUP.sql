-- MyPeterinarian Database Schema
-- Run this SQL in your Supabase SQL Editor (Dashboard > SQL Editor)

-- Contact Form Submissions Table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  subject VARCHAR(255),
  message TEXT NOT NULL,
  locale VARCHAR(2) DEFAULT 'en',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  status VARCHAR(20) DEFAULT 'new' CHECK (status IN ('new', 'read', 'replied', 'archived'))
);

-- Newsletter Subscribers Table
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  locale VARCHAR(2) DEFAULT 'en',
  subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  status VARCHAR(20) DEFAULT 'active' CHECK (status IN ('active', 'unsubscribed')),
  unsubscribed_at TIMESTAMP WITH TIME ZONE
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status ON contact_submissions(status);
CREATE INDEX IF NOT EXISTS idx_newsletter_subscribers_email ON newsletter_subscribers(email);
CREATE INDEX IF NOT EXISTS idx_newsletter_subscribers_status ON newsletter_subscribers(status);

-- Enable Row Level Security (RLS)
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Create policies for public insert access (for website forms)
CREATE POLICY "Anyone can submit contact form" ON contact_submissions
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Anyone can subscribe to newsletter" ON newsletter_subscribers
  FOR INSERT WITH CHECK (true);

-- Create policies for authenticated admin access (for reading/managing)
-- You'll need to add admin user management separately
CREATE POLICY "Admins can view contact submissions" ON contact_submissions
  FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Admins can update contact submissions" ON contact_submissions
  FOR UPDATE USING (auth.role() = 'authenticated');

CREATE POLICY "Admins can view newsletter subscribers" ON newsletter_subscribers
  FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Admins can update newsletter subscribers" ON newsletter_subscribers
  FOR UPDATE USING (auth.role() = 'authenticated');
