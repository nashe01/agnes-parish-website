
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Trash2, Edit } from 'lucide-react';

interface Ministry {
  id: string;
  name: string;
  image_url?: string;
  meeting_time: string;
  location: string;
  how_to_join: string;
  description?: string;
  display_order: number;
  is_active: boolean;
}

const MinistriesManager = () => {
  const [ministries, setMinistries] = useState<Ministry[]>([]);
  const [editingMinistry, setEditingMinistry] = useState<Ministry | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    fetchMinistries();
  }, []);

  const fetchMinistries = async () => {
    const { data, error } = await supabase
      .from('ministries')
      .select('*')
      .order('display_order');
    
    if (data) {
      setMinistries(data);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingMinistry) return;

    setIsLoading(true);
    const { error } = await supabase
      .from('ministries')
      .upsert({
        ...editingMinistry,
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
        description: "Ministry saved successfully!",
      });
      setEditingMinistry(null);
      fetchMinistries();
    }
    setIsLoading(false);
  };

  const handleDelete = async (id: string) => {
    const { error } = await supabase
      .from('ministries')
      .delete()
      .eq('id', id);

    if (error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Success",
        description: "Ministry deleted successfully!",
      });
      fetchMinistries();
    }
  };

  const createNew = () => {
    setEditingMinistry({
      id: '',
      name: '',
      image_url: '',
      meeting_time: '',
      location: '',
      how_to_join: '',
      description: '',
      display_order: ministries.length,
      is_active: true,
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Manage Ministries</h3>
        <Button onClick={createNew}>
          <Plus className="w-4 h-4 mr-2" />
          Add Ministry
        </Button>
      </div>

      {editingMinistry && (
        <Card>
          <CardHeader>
            <CardTitle>{editingMinistry.id ? 'Edit' : 'Add'} Ministry</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={editingMinistry.name}
                  onChange={(e) => setEditingMinistry({ 
                    ...editingMinistry, 
                    name: e.target.value 
                  })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="image_url">Image URL</Label>
                <Input
                  id="image_url"
                  value={editingMinistry.image_url || ''}
                  onChange={(e) => setEditingMinistry({ 
                    ...editingMinistry, 
                    image_url: e.target.value 
                  })}
                  placeholder="https://example.com/image.jpg"
                />
              </div>
              <div>
                <Label htmlFor="meeting_time">Meeting Time</Label>
                <Input
                  id="meeting_time"
                  value={editingMinistry.meeting_time}
                  onChange={(e) => setEditingMinistry({ 
                    ...editingMinistry, 
                    meeting_time: e.target.value 
                  })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  value={editingMinistry.location}
                  onChange={(e) => setEditingMinistry({ 
                    ...editingMinistry, 
                    location: e.target.value 
                  })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="how_to_join">How to Join</Label>
                <Input
                  id="how_to_join"
                  value={editingMinistry.how_to_join}
                  onChange={(e) => setEditingMinistry({ 
                    ...editingMinistry, 
                    how_to_join: e.target.value 
                  })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={editingMinistry.description || ''}
                  onChange={(e) => setEditingMinistry({ 
                    ...editingMinistry, 
                    description: e.target.value 
                  })}
                  rows={3}
                />
              </div>
              <div className="flex gap-4">
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? 'Saving...' : 'Save'}
                </Button>
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => setEditingMinistry(null)}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      <div className="grid gap-4">
        {ministries.map((ministry) => (
          <Card key={ministry.id}>
            <CardContent className="p-4">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h4 className="font-semibold">{ministry.name}</h4>
                  <p className="text-sm text-gray-600">{ministry.meeting_time} • {ministry.location}</p>
                  <p className="text-sm mt-1">{ministry.how_to_join}</p>
                  {ministry.description && <p className="text-sm mt-2">{ministry.description}</p>}
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setEditingMinistry(ministry)}
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => handleDelete(ministry.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MinistriesManager;
