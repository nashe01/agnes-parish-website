
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Trash2, Edit } from 'lucide-react';

interface Sacrament {
  id: string;
  name: string;
  description: string;
  requirement: string;
  display_order: number;
  is_active: boolean;
}

const SacramentsManager = () => {
  const [sacraments, setSacraments] = useState<Sacrament[]>([]);
  const [editingSacrament, setEditingSacrament] = useState<Sacrament | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    fetchSacraments();
  }, []);

  const fetchSacraments = async () => {
    const { data, error } = await supabase
      .from('sacraments')
      .select('*')
      .order('display_order');
    
    if (data) {
      setSacraments(data);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingSacrament) return;

    setIsLoading(true);
    const { error } = await supabase
      .from('sacraments')
      .upsert({
        ...editingSacrament,
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
        description: "Sacrament saved successfully!",
      });
      setEditingSacrament(null);
      fetchSacraments();
    }
    setIsLoading(false);
  };

  const handleDelete = async (id: string) => {
    const { error } = await supabase
      .from('sacraments')
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
        description: "Sacrament deleted successfully!",
      });
      fetchSacraments();
    }
  };

  const createNew = () => {
    setEditingSacrament({
      id: '',
      name: '',
      description: '',
      requirement: '',
      display_order: sacraments.length,
      is_active: true,
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Manage Sacraments</h3>
        <Button onClick={createNew}>
          <Plus className="w-4 h-4 mr-2" />
          Add Sacrament
        </Button>
      </div>

      {editingSacrament && (
        <Card>
          <CardHeader>
            <CardTitle>{editingSacrament.id ? 'Edit' : 'Add'} Sacrament</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={editingSacrament.name}
                  onChange={(e) => setEditingSacrament({ 
                    ...editingSacrament, 
                    name: e.target.value 
                  })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={editingSacrament.description}
                  onChange={(e) => setEditingSacrament({ 
                    ...editingSacrament, 
                    description: e.target.value 
                  })}
                  rows={3}
                  required
                />
              </div>
              <div>
                <Label htmlFor="requirement">Requirement</Label>
                <Textarea
                  id="requirement"
                  value={editingSacrament.requirement}
                  onChange={(e) => setEditingSacrament({ 
                    ...editingSacrament, 
                    requirement: e.target.value 
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
                  onClick={() => setEditingSacrament(null)}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      <div className="grid gap-4">
        {sacraments.map((sacrament) => (
          <Card key={sacrament.id}>
            <CardContent className="p-4">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h4 className="font-semibold">{sacrament.name}</h4>
                  <p className="text-sm mt-2">{sacrament.description}</p>
                  <p className="text-sm text-gray-600 mt-1">Requirement: {sacrament.requirement}</p>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setEditingSacrament(sacrament)}
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => handleDelete(sacrament.id)}
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

export default SacramentsManager;
