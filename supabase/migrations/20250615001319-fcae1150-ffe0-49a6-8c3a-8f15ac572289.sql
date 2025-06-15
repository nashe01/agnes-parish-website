
-- Create a table for downloadable PDFs
CREATE TABLE public.downloadable_pdfs (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  file_url TEXT NOT NULL,
  file_size INTEGER,
  display_order INTEGER NOT NULL DEFAULT 0,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Insert two default PDFs (Saint Agnes and Parish History)
INSERT INTO public.downloadable_pdfs (name, description, file_url, display_order) VALUES
('Saint Agnes History', 'Complete history of Saint Agnes of Rome', '/placeholder-saint-agnes.pdf', 1),
('Parish History', 'St. Agnes Catholic Parish complete history', '/placeholder-parish-history.pdf', 2);

-- Create storage bucket for PDFs
INSERT INTO storage.buckets (id, name, public) VALUES ('pdfs', 'pdfs', true);

-- Create RLS policies for storage bucket
CREATE POLICY "Public PDF access" ON storage.objects 
FOR SELECT USING (bucket_id = 'pdfs');

CREATE POLICY "Admin can upload PDFs" ON storage.objects 
FOR INSERT WITH CHECK (bucket_id = 'pdfs' AND auth.uid() IN (
  SELECT user_id FROM admin_users WHERE is_active = true
));

CREATE POLICY "Admin can update PDFs" ON storage.objects 
FOR UPDATE USING (bucket_id = 'pdfs' AND auth.uid() IN (
  SELECT user_id FROM admin_users WHERE is_active = true
));

CREATE POLICY "Admin can delete PDFs" ON storage.objects 
FOR DELETE USING (bucket_id = 'pdfs' AND auth.uid() IN (
  SELECT user_id FROM admin_users WHERE is_active = true
));
