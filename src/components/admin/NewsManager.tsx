
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Trash2, Edit } from 'lucide-react';

interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  image_url?: string;
  date: string;
  category: string;
  size: string;
  display_order: number;
  is_active: boolean;
}

const NewsManager = () => {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [editingArticle, setEditingArticle] = useState<NewsArticle | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    const { data, error } = await supabase
      .from('news_articles')
      .select('*')
      .order('display_order');
    
    if (data) {
      setArticles(data);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingArticle) return;

    setIsLoading(true);
    const { error } = await supabase
      .from('news_articles')
      .upsert({
        ...editingArticle,
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
        description: "News article saved successfully!",
      });
      setEditingArticle(null);
      fetchArticles();
    }
    setIsLoading(false);
  };

  const handleDelete = async (id: string) => {
    const { error } = await supabase
      .from('news_articles')
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
        description: "News article deleted successfully!",
      });
      fetchArticles();
    }
  };

  const createNew = () => {
    setEditingArticle({
      id: '',
      title: '',
      excerpt: '',
      image_url: '',
      date: new Date().toLocaleDateString(),
      category: 'Parish News',
      size: 'medium',
      display_order: articles.length,
      is_active: true,
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Manage News</h3>
        <Button onClick={createNew}>
          <Plus className="w-4 h-4 mr-2" />
          Add Article
        </Button>
      </div>

      {editingArticle && (
        <Card>
          <CardHeader>
            <CardTitle>{editingArticle.id ? 'Edit' : 'Add'} News Article</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={editingArticle.title}
                  onChange={(e) => setEditingArticle({ 
                    ...editingArticle, 
                    title: e.target.value 
                  })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="excerpt">Excerpt</Label>
                <Textarea
                  id="excerpt"
                  value={editingArticle.excerpt}
                  onChange={(e) => setEditingArticle({ 
                    ...editingArticle, 
                    excerpt: e.target.value 
                  })}
                  rows={3}
                  required
                />
              </div>
              <div>
                <Label htmlFor="image_url">Image URL</Label>
                <Input
                  id="image_url"
                  value={editingArticle.image_url || ''}
                  onChange={(e) => setEditingArticle({ 
                    ...editingArticle, 
                    image_url: e.target.value 
                  })}
                  placeholder="https://example.com/image.jpg"
                />
              </div>
              <div>
                <Label htmlFor="date">Date</Label>
                <Input
                  id="date"
                  value={editingArticle.date}
                  onChange={(e) => setEditingArticle({ 
                    ...editingArticle, 
                    date: e.target.value 
                  })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="category">Category</Label>
                <Input
                  id="category"
                  value={editingArticle.category}
                  onChange={(e) => setEditingArticle({ 
                    ...editingArticle, 
                    category: e.target.value 
                  })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="size">Size</Label>
                <select
                  id="size"
                  value={editingArticle.size}
                  onChange={(e) => setEditingArticle({ 
                    ...editingArticle, 
                    size: e.target.value 
                  })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                >
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </select>
              </div>
              <div className="flex gap-4">
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? 'Saving...' : 'Save'}
                </Button>
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => setEditingArticle(null)}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      <div className="grid gap-4">
        {articles.map((article) => (
          <Card key={article.id}>
            <CardContent className="p-4">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h4 className="font-semibold">{article.title}</h4>
                  <p className="text-sm text-gray-600">{article.date} • {article.category} • {article.size}</p>
                  <p className="text-sm mt-2">{article.excerpt}</p>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setEditingArticle(article)}
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => handleDelete(article.id)}
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

export default NewsManager;
