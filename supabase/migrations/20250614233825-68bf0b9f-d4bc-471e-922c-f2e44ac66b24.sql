
-- Seed about_sections with sample data
INSERT INTO public.about_sections (name, image_url, details, display_order) VALUES
('Altar Servers', '', 'Serve at the altar during Mass and celebrations.', 1),
('Lectors', '', 'Proclaim Scripture readings at Mass.', 2),
('Eucharistic Ministers', '', 'Distribute Holy Communion.', 3),
('Ushers', '', 'Welcome parishioners at Mass.', 4),
('Choir Members', '', 'Lead music and song at Mass.', 5),
('Sacristans', '', 'Prepare altar and sacred vessels.', 6),
('Greeters', '', 'Greet visitors and new parishioners.', 7),
('Collection Counters', '', 'Count parish offerings.', 8),
('Catechists', '', 'Teach and prepare children for Sacraments.', 9),
('Tech Team', '', 'Manage sound and projection systems.', 10),
('Flower Arrangers', '', 'Decorate church with floral displays.', 11),
('Readers', '', 'Assist with prayers and announcements.', 12);

-- Seed about_guilds with sample data
INSERT INTO public.about_guilds (name, image_url, details, display_order) VALUES
('Knights of Columbus', '', 'Catholic men serving in charity and unity.', 1),
('Catholic Women''s League', '', 'Women supporting parish and outreach.', 2),
('Youth Ministry', '', 'Faith formation and fellowship for youth.', 3),
('Senior Guild', '', 'Fellowship for senior members.', 4),
('Marriage Encounter', '', 'Support for married couples.', 5),
('Bible Study Group', '', 'Study scripture together.', 6),
('St. Vincent de Paul', '', 'Service to the poor and needy.', 7),
('Rosary Society', '', 'Devoted to prayer and rosary.', 8),
('Men''s Fellowship', '', 'Brotherhood and community for men.', 9),
('Hospitality Team', '', 'Organize refreshments and socials.', 10),
('Liturgical Decor', '', 'Church decoration and beautification.', 11),
('Prayer Ministry', '', 'Organize prayer sessions.', 12);

-- Public can read
CREATE POLICY "Public can view about_sections"
  ON public.about_sections FOR SELECT
  USING (true);

CREATE POLICY "Public can view about_guilds"
  ON public.about_guilds FOR SELECT
  USING (true);

-- Only admin can INSERT about_sections
CREATE POLICY "Only admin can insert about_sections"
  ON public.about_sections FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM admin_users WHERE admin_users.user_id = auth.uid() AND is_active = true
    )
  );

-- Only admin can UPDATE about_sections
CREATE POLICY "Only admin can update about_sections"
  ON public.about_sections FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM admin_users WHERE admin_users.user_id = auth.uid() AND is_active = true
    )
  );

-- Only admin can DELETE about_sections
CREATE POLICY "Only admin can delete about_sections"
  ON public.about_sections FOR DELETE
  USING (
    EXISTS (
      SELECT 1 FROM admin_users WHERE admin_users.user_id = auth.uid() AND is_active = true
    )
  );

-- Only admin can INSERT about_guilds
CREATE POLICY "Only admin can insert about_guilds"
  ON public.about_guilds FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM admin_users WHERE admin_users.user_id = auth.uid() AND is_active = true
    )
  );

-- Only admin can UPDATE about_guilds
CREATE POLICY "Only admin can update about_guilds"
  ON public.about_guilds FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM admin_users WHERE admin_users.user_id = auth.uid() AND is_active = true
    )
  );

-- Only admin can DELETE about_guilds
CREATE POLICY "Only admin can delete about_guilds"
  ON public.about_guilds FOR DELETE
  USING (
    EXISTS (
      SELECT 1 FROM admin_users WHERE admin_users.user_id = auth.uid() AND is_active = true
    )
  );
