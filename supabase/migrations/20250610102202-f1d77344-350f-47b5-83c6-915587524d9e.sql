
-- Insert sample announcements
INSERT INTO announcements (title, date_text, description, type, is_featured, display_order, is_active) VALUES
('Sunday Mass Schedule Update', 'Effective January 15, 2024', 'Please note the updated Sunday mass times: 7:00 AM, 9:00 AM, and 11:00 AM. Evening mass remains at 6:00 PM.', 'Event', true, 1, true),
('Youth Ministry Meeting', 'Every Friday at 7:00 PM', 'Join us for fellowship, prayer, and community service planning. All youth aged 13-25 welcome.', 'Ministry', false, 2, true),
('First Holy Communion Preparation', 'Registration: February 1-28, 2024', 'Parents of children preparing for First Holy Communion, please register at the parish office. Classes begin March 5th.', 'Sacrament', false, 3, true),
('Parish Fundraiser Dinner', 'March 15, 2024 at 6:00 PM', 'Annual fundraiser dinner to support parish building maintenance. Tickets available after Sunday masses.', 'Community', true, 4, true),
('Lenten Prayer Services', 'Every Wednesday during Lent', 'Special prayer services and Stations of the Cross every Wednesday at 7:00 PM throughout the Lenten season.', 'Event', false, 5, true);

-- Insert mass schedules
INSERT INTO mass_schedules (day_type, times, special_note, display_order, is_active) VALUES
('Sunday', ARRAY['7:00 AM', '9:00 AM', '11:00 AM', '6:00 PM'], 'Main celebration with choir at 11:00 AM', 1, true),
('Weekdays (Mon-Fri)', ARRAY['6:30 AM', '12:15 PM'], 'Morning mass in the chapel', 2, true),
('Saturday', ARRAY['6:30 AM', '5:30 PM'], 'Saturday evening mass fulfills Sunday obligation', 3, true),
('Holy Days', ARRAY['6:30 AM', '12:15 PM', '7:00 PM'], 'Check bulletin for specific holy day schedules', 4, true),
('Confessions', ARRAY['Saturday 4:00-5:00 PM', 'Sunday 30 min before each mass'], 'Also available by appointment', 5, true);

-- Insert sacraments
INSERT INTO sacraments (name, description, requirement, display_order, is_active) VALUES
('Baptism', 'The sacrament of initiation into the Catholic faith', 'Baptism preparation class required for parents and godparents', 1, true),
('First Holy Communion', 'Receiving the Eucharist for the first time', 'Two-year preparation program starting in Grade 1', 2, true),
('Confirmation', 'Completion of Christian initiation', 'Two-year preparation program starting in Grade 9', 3, true),
('Matrimony', 'The sacrament of marriage', 'Marriage preparation course required 6 months prior', 4, true),
('Anointing of the Sick', 'Spiritual healing and comfort for the ill', 'Available upon request for serious illness', 5, true);

-- Insert ministries
INSERT INTO ministries (name, description, meeting_time, location, how_to_join, image_url, display_order, is_active) VALUES
('Altar Servers', 'Young people who assist the priest during Mass and other liturgical celebrations', 'Training: First Saturday of each month at 10:00 AM', 'Main Church', 'Open to youth aged 10 and above. Contact the parish office to register.', 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', 1, true),
('Choir', 'Leading the congregation in song and praise during liturgical celebrations', 'Thursdays at 7:00 PM', 'Church Hall', 'No audition required. All voices welcome. Join us for practice.', 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', 2, true),
('Knights of Columbus', 'Catholic men united in charity, unity, fraternity, and patriotism', 'Second Tuesday of each month at 7:30 PM', 'Parish Hall', 'Catholic men 18 years and older. Contact our Grand Knight for membership information.', 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', 3, true),
('Catholic Women''s League', 'Supporting faith, service to the church, and community outreach', 'Third Sunday after 11:00 AM Mass', 'Parish Meeting Room', 'All Catholic women welcome. Attend our monthly meeting to learn more.', 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', 4, true),
('Youth Ministry', 'Faith formation and fellowship for teenagers and young adults', 'Fridays at 7:00 PM', 'Youth Room', 'Ages 13-25. Come join us for faith sharing, community service, and fun activities.', 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', 5, true),
('Lectors', 'Proclaiming the Word of God during Mass and other liturgical services', 'Training sessions as scheduled', 'Main Church', 'Must be confirmed Catholic. Training provided. Contact the liturgy coordinator.', 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', 6, true);

-- Insert news articles
INSERT INTO news_articles (title, excerpt, image_url, date, category, size, display_order, is_active) VALUES
('New Parish Center Construction Begins', 'Groundbreaking ceremony marks the start of our new multi-purpose parish center, featuring a modern hall, classrooms, and community kitchen.', 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', 'January 20, 2024', 'Parish News', 'large', 1, true),
('Youth Pilgrimage to World Youth Day', 'Twenty-five young parishioners will join the diocesan pilgrimage to World Youth Day in Lisbon this summer.', 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', 'January 15, 2024', 'Youth', 'medium', 2, true),
('Food Drive Success', 'Thanks to your generosity, we collected over 2,000 pounds of food for local families in need during our Christmas food drive.', 'https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', 'January 10, 2024', 'Community Service', 'small', 3, true),
('Lenten Schedule Announced', 'Special services and programs for the Lenten season include daily Mass, Stations of the Cross, and scripture study groups.', 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', 'February 5, 2024', 'Liturgy', 'medium', 4, true),
('Parish School Enrollment Open', 'Registration is now open for the 2024-2025 school year. Our Catholic education program serves students from kindergarten through grade 8.', 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', 'February 1, 2024', 'Education', 'small', 5, true),
('Marriage Enrichment Weekend', 'Married couples are invited to attend our annual marriage enrichment weekend featuring speakers, workshops, and renewal of vows.', 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80', 'January 25, 2024', 'Family Life', 'small', 6, true);

-- Insert gallery photos
INSERT INTO gallery_photos (url, caption, display_order, is_active) VALUES
('https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', 'Christmas Midnight Mass 2023', 1, true),
('https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', 'Parish Choir Performance', 2, true),
('https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', 'Youth Altar Servers Training', 3, true),
('https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', 'Parish Wedding Ceremony', 4, true),
('https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', 'Community Food Drive', 5, true),
('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', 'Parish Center Groundbreaking', 6, true),
('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', 'Youth Ministry Retreat', 7, true),
('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', 'Sunday Scripture Reading', 8, true),
('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', 'Catholic Women''s League Meeting', 9, true),
('https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', 'Parish School Graduation', 10, true);
