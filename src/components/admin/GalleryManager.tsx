
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Trash2, Edit } from 'lucide-react';
import FileUpload from './FileUpload';

interface GalleryPhoto {
  id: string;
  url: string;
  caption: string;
  display_order: number;
  is_active: boolean;
}

const GalleryManager = () => {
  const [photos, setPhotos] = useState<GalleryPhoto[]>([]);
  const [editingPhoto, setEditingPhoto] = useState<GalleryPhoto | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    fetchPhotos();
  }, []);

  const fetchPhotos = async () => {
    const { data, error } = await supabase
      .from('gallery_photos')
      .select('*')
      .order('display_order');
    
    if (data) {
      setPhotos(data);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingPhoto) return;

    setIsLoading(true);
    
    // For new photos, don't include the id field
    const photoData = editingPhoto.id 
      ? {
          id: editingPhoto.id,
          url: editingPhoto.url,
          caption: editingPhoto.caption,
          display_order: editingPhoto.display_order,
          is_active: editingPhoto.is_active,
          updated_at: new Date().toISOString(),
        }
      : {
          url: editingPhoto.url,
          caption: editingPhoto.caption,
          display_order: editingPhoto.display_order,
          is_active: editingPhoto.is_active,
        };

    const { error } = await supabase
      .from('gallery_photos')
      .upsert(photoData);

    if (error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Success",
        description: "Photo saved successfully!",
      });
      setEditingPhoto(null);
      fetchPhotos();
    }
    setIsLoading(false);
  };

  const handleDelete = async (id: string) => {
    const { error } = await supabase
      .from('gallery_photos')
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
        description: "Photo deleted successfully!",
      });
      fetchPhotos();
    }
  };

  const createNew = () => {
    setEditingPhoto({
      id: '', // Empty string for new photos
      url: '',
      caption: '',
      display_order: photos.length,
      is_active: true,
    });
  };

  const handleImageUpload = (url: string) => {
    if (editingPhoto) {
      setEditingPhoto({ ...editingPhoto, url });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Manage Photo Gallery</h3>
        <Button onClick={createNew}>
          <Plus className="w-4 h-4 mr-2" />
          Add Photo
        </Button>
      </div>

      {editingPhoto && (
        <Card>
          <CardHeader>
            <CardTitle>{editingPhoto.id ? 'Edit' : 'Add'} Photo</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <FileUpload
                  label="Photo"
                  onFileUpload={handleImageUpload}
                  currentFile={editingPhoto.url}
                />
              </div>
              <div>
                <Label htmlFor="caption">Caption</Label>
                <Input
                  id="caption"
                  value={editingPhoto.caption}
                  onChange={(e) => setEditingPhoto({ 
                    ...editingPhoto, 
                    caption: e.target.value 
                  })}
                  required
                />
              </div>
              <div className="flex gap-4">
                <Button type="submit" disabled={isLoading || !editingPhoto.url}>
                  {isLoading ? 'Saving...' : 'Save'}
                </Button>
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => setEditingPhoto(null)}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {photos.map((photo) => (
          <Card key={photo.id}>
            <CardContent className="p-4">
              <div className="aspect-square mb-3 overflow-hidden rounded-md bg-gray-100">
                <img
                  src={photo.url}
                  alt={photo.caption}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm font-medium mb-3">{photo.caption}</p>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setEditingPhoto(photo)}
                  className="flex-1"
                >
                  <Edit className="w-4 h-4 mr-1" />
                  Edit
                </Button>
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => handleDelete(photo.id)}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default GalleryManager;
