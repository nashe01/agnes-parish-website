
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

interface HeroContent {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  background_image_url?: string;
}

const HeroContentManager = () => {
  const [content, setContent] = useState<HeroContent | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    const { data, error } = await supabase
      .from('hero_content')
      .select('*')
      .maybeSingle();
    
    if (data) {
      setContent(data);
    } else if (!error) {
      // Create default content if none exists
      const defaultContent = {
        title: 'Welcome to Our Parish',
        subtitle: 'Join us in worship and community',
        description: 'Experience faith, fellowship, and spiritual growth in our welcoming community.'
      };
      const { data: newData } = await supabase
        .from('hero_content')
        .insert(defaultContent)
        .select()
        .single();
      if (newData) setContent(newData);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content) return;

    setIsLoading(true);
    const { error } = await supabase
      .from('hero_content')
      .upsert({
        ...content,
        updated_at: new Date().toISOString(),
      });

    if (error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Success",
        description: "Hero content updated successfully!",
      });
    }
    setIsLoading(false);
  };

  if (!content) {
    return <div>Loading...</div>;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          value={content.title}
          onChange={(e) => setContent({ ...content, title: e.target.value })}
        />
      </div>
      <div>
        <Label htmlFor="subtitle">Subtitle</Label>
        <Input
          id="subtitle"
          value={content.subtitle}
          onChange={(e) => setContent({ ...content, subtitle: e.target.value })}
        />
      </div>
      <div>
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          value={content.description}
          onChange={(e) => setContent({ ...content, description: e.target.value })}
          rows={4}
        />
      </div>
      <div>
        <Label htmlFor="background_image_url">Background Image URL</Label>
        <Input
          id="background_image_url"
          value={content.background_image_url || ''}
          onChange={(e) => setContent({ ...content, background_image_url: e.target.value })}
          placeholder="https://example.com/image.jpg"
        />
      </div>
      <Button type="submit" disabled={isLoading}>
        {isLoading ? 'Saving...' : 'Save Changes'}
      </Button>
    </form>
  );
};

export default HeroContentManager;
