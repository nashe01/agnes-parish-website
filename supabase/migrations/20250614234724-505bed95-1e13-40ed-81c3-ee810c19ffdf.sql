
-- Add meeting_time, location, secretary_phone to about_sections
ALTER TABLE public.about_sections ADD COLUMN meeting_time text;
ALTER TABLE public.about_sections ADD COLUMN location text;
ALTER TABLE public.about_sections ADD COLUMN secretary_phone text;

-- Add meeting_time, location, secretary_phone to about_guilds
ALTER TABLE public.about_guilds ADD COLUMN meeting_time text;
ALTER TABLE public.about_guilds ADD COLUMN location text;
ALTER TABLE public.about_guilds ADD COLUMN secretary_phone text;

-- Update data in about_sections with example images and details
UPDATE public.about_sections SET
  image_url = 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=400&q=80',
  meeting_time = 'Every Sunday 8:00am',
  location = 'Main Church',
  secretary_phone = '+263 77 123 4567'
WHERE name = 'Altar Servers';

UPDATE public.about_sections SET
  image_url = 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&q=80',
  meeting_time = '2nd Saturday 10:00am',
  location = 'Lecture Room A',
  secretary_phone = '+263 77 765 4321'
WHERE name = 'Lectors';

UPDATE public.about_sections SET
  image_url = 'https://images.unsplash.com/photo-1527576539890-dfa815648363?w=400&q=80',
  meeting_time = 'Monthly 3rd Wednesday 6:00pm',
  location = 'Chapel',
  secretary_phone = '+263 77 654 3210'
WHERE name = 'Eucharistic Ministers';

-- (Add similar examples for a few more rows...)

-- About Guilds example images and meeting info
UPDATE public.about_guilds SET
  image_url = 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=400&q=80',
  meeting_time = 'Every Friday 7:00pm',
  location = 'Guild Hall',
  secretary_phone = '+263 77 111 2222'
WHERE name = 'Knights of Columbus';

UPDATE public.about_guilds SET
  image_url = 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&q=80',
  meeting_time = '1st Monday 5:30pm',
  location = 'Community Center',
  secretary_phone = '+263 77 333 4444'
WHERE name = 'Catholic Women''s League';

UPDATE public.about_guilds SET
  image_url = 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&q=80',
  meeting_time = 'Saturdays 2:00pm',
  location = 'Youth Room',
  secretary_phone = '+263 77 555 6666'
WHERE name = 'Youth Ministry';

-- (You can repeat similar UPDATEs for other rows with other sample images and details!)
