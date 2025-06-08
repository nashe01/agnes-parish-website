
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Trash2, Edit } from 'lucide-react';

interface Announcement {
  id: string;
  title: string;
  date_text: string;
  description: string;
  type: string;
  is_featured: boolean;
  display_order: number;
  is_active: boolean;
}

const AnnouncementsManager = () => {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [editingAnnouncement, setEditingAnnouncement] = useState<Announcement | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const fetchAnnouncements = async () => {
    const { data, error } = await supabase
      .from('announcements')
      .select('*')
      .order('display_order');
    
    if (data) {
      setAnnouncements(data);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingAnnouncement) return;

    setIsLoading(true);
    const { error } = await supabase
      .from('announcements')
      .upsert({
        ...editingAnnouncement,
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
        description: "Announcement saved successfully!",
      });
      setEditingAnnouncement(null);
      fetchAnnouncements();
    }
    setIsLoading(false);
  };

  const handleDelete = async (id: string) => {
    const { error } = await supabase
      .from('announcements')
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
        description: "Announcement deleted successfully!",
      });
      fetchAnnouncements();
    }
  };

  const createNew = () => {
    setEditingAnnouncement({
      id: '',
      title: '',
      date_text: '',
      description: '',
      type: 'Event',
      is_featured: false,
      display_order: announcements.length,
      is_active: true,
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Manage Announcements</h3>
        <Button onClick={createNew}>
          <Plus className="w-4 h-4 mr-2" />
          Add Announcement
        </Button>
      </div>

      {editingAnnouncement && (
        <Card>
          <CardHeader>
            <CardTitle>{editingAnnouncement.id ? 'Edit' : 'Add'} Announcement</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={editingAnnouncement.title}
                  onChange={(e) => setEditingAnnouncement({ 
                    ...editingAnnouncement, 
                    title: e.target.value 
                  })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="date_text">Date</Label>
                <Input
                  id="date_text"
                  value={editingAnnouncement.date_text}
                  onChange={(e) => setEditingAnnouncement({ 
                    ...editingAnnouncement, 
                    date_text: e.target.value 
                  })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="type">Type</Label>
                <Input
                  id="type"
                  value={editingAnnouncement.type}
                  onChange={(e) => setEditingAnnouncement({ 
                    ...editingAnnouncement, 
                    type: e.target.value 
                  })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={editingAnnouncement.description}
                  onChange={(e) => setEditingAnnouncement({ 
                    ...editingAnnouncement, 
                    description: e.target.value 
                  })}
                  rows={3}
                  required
                />
              </div>
              <div className="flex gap-4">
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? 'Saving...' : 'Save'}
                </Button>
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => setEditingAnnouncement(null)}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      <div className="grid gap-4">
        {announcements.map((announcement) => (
          <Card key={announcement.id}>
            <CardContent className="p-4">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h4 className="font-semibold">{announcement.title}</h4>
                  <p className="text-sm text-gray-600">{announcement.date_text} • {announcement.type}</p>
                  <p className="text-sm mt-2">{announcement.description}</p>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setEditingAnnouncement(announcement)}
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => handleDelete(announcement.id)}
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

export default AnnouncementsManager;
