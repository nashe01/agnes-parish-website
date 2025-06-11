
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import FileUpload from './FileUpload';

interface HeroContent {
  id: string;
  parish_name: string;
  welcome_text: string;
  archdiocese: string;
  hero_image_url?: string;
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
        parish_name: 'St Agnes Parish',
        welcome_text: 'Experience faith, fellowship, and spiritual growth in our welcoming community.',
        archdiocese: 'Archdiocese of Harare'
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

  const handleImageUpload = (url: string) => {
    if (content) {
      setContent({ ...content, hero_image_url: url });
    }
  };

  if (!content) {
    return <div>Loading...</div>;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="parish_name">Parish Name</Label>
        <Input
          id="parish_name"
          value={content.parish_name}
          onChange={(e) => setContent({ ...content, parish_name: e.target.value })}
        />
      </div>
      <div>
        <Label htmlFor="archdiocese">Archdiocese</Label>
        <Input
          id="archdiocese"
          value={content.archdiocese}
          onChange={(e) => setContent({ ...content, archdiocese: e.target.value })}
        />
      </div>
      <div>
        <Label htmlFor="welcome_text">Welcome Text</Label>
        <Textarea
          id="welcome_text"
          value={content.welcome_text}
          onChange={(e) => setContent({ ...content, welcome_text: e.target.value })}
          rows={4}
        />
      </div>
      <div>
        <FileUpload
          label="Hero Image"
          onFileUpload={handleImageUpload}
          currentFile={content.hero_image_url}
        />
      </div>
      <Button type="submit" disabled={isLoading}>
        {isLoading ? 'Saving...' : 'Save Changes'}
      </Button>
    </form>
  );
};

export default HeroContentManager;
