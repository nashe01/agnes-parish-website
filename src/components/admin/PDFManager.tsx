
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trash2, Edit, Download, AlertCircle } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import FileUpload from './FileUpload';

interface PDF {
  id: string;
  name: string;
  description?: string;
  file_url: string;
  file_size?: number;
  display_order: number;
  is_active: boolean;
}

const PDFManager = () => {
  const [pdfs, setPdfs] = useState<PDF[]>([]);
  const [editingPdf, setEditingPdf] = useState<PDF | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    file_url: '',
    display_order: 0
  });
  const { toast } = useToast();

  useEffect(() => {
    fetchPDFs();
  }, []);

  const fetchPDFs = async () => {
    try {
      const { data, error } = await supabase
        .from('downloadable_pdfs')
        .select('*')
        .order('display_order');
      
      if (error) throw error;
      setPdfs(data || []);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch PDFs",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.file_url) {
      toast({
        title: "Error",
        description: "Name and file URL are required",
        variant: "destructive",
      });
      return;
    }

    try {
      if (editingPdf) {
        const { error } = await supabase
          .from('downloadable_pdfs')
          .update({
            name: formData.name,
            description: formData.description,
            file_url: formData.file_url,
            display_order: formData.display_order,
            updated_at: new Date().toISOString()
          })
          .eq('id', editingPdf.id);
        
        if (error) throw error;
        toast({ title: "Success", description: "PDF updated successfully" });
      } else {
        const { error } = await supabase
          .from('downloadable_pdfs')
          .insert({
            name: formData.name,
            description: formData.description,
            file_url: formData.file_url,
            display_order: formData.display_order
          });
        
        if (error) throw error;
        toast({ title: "Success", description: "PDF added successfully" });
      }
      
      resetForm();
      fetchPDFs();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save PDF",
        variant: "destructive",
      });
    }
  };

  const handleEdit = (pdf: PDF) => {
    setEditingPdf(pdf);
    setFormData({
      name: pdf.name,
      description: pdf.description || '',
      file_url: pdf.file_url,
      display_order: pdf.display_order
    });
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this PDF?')) return;
    
    try {
      const { error } = await supabase
        .from('downloadable_pdfs')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
      toast({ title: "Success", description: "PDF deleted successfully" });
      fetchPDFs();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete PDF",
        variant: "destructive",
      });
    }
  };

  const toggleActive = async (id: string, currentStatus: boolean) => {
    try {
      const { error } = await supabase
        .from('downloadable_pdfs')
        .update({ is_active: !currentStatus })
        .eq('id', id);
      
      if (error) throw error;
      fetchPDFs();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update PDF status",
        variant: "destructive",
      });
    }
  };

  const resetForm = () => {
    setFormData({ name: '', description: '', file_url: '', display_order: 0 });
    setEditingPdf(null);
  };

  const handleFileUpload = (url: string) => {
    setFormData({ ...formData, file_url: url });
  };

  const testDownload = async (pdf: PDF) => {
    try {
      if (pdf.file_url.startsWith('/placeholder-')) {
        toast({
          title: "Placeholder File",
          description: "This is a placeholder. Upload a real PDF file to enable downloads.",
          variant: "destructive",
        });
        return;
      }
      
      window.open(pdf.file_url, '_blank');
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to open PDF",
        variant: "destructive",
      });
    }
  };

  if (isLoading) {
    return <div>Loading PDFs...</div>;
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>{editingPdf ? 'Edit PDF' : 'Add New PDF'}</CardTitle>
          <div className="flex items-start gap-2 p-4 bg-blue-50 rounded-lg">
            <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <div className="text-sm text-blue-800">
              <p className="font-medium mb-1">How to add PDF files:</p>
              <ol className="list-decimal list-inside space-y-1 text-xs">
                <li>Upload your PDF file using the file upload below</li>
                <li>Or paste a direct URL to a PDF file hosted elsewhere</li>
                <li>Placeholder files (starting with /placeholder-) won't be downloadable</li>
              </ol>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">PDF Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g., Parish History"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Brief description of the PDF content"
              />
            </div>

            <FileUpload
              onFileUpload={handleFileUpload}
              accept="application/pdf"
              label="Upload PDF File"
              currentFile={formData.file_url}
            />

            <div>
              <Label htmlFor="file_url">Or enter PDF URL directly</Label>
              <Input
                id="file_url"
                value={formData.file_url}
                onChange={(e) => setFormData({ ...formData, file_url: e.target.value })}
                placeholder="https://example.com/document.pdf"
                required
              />
            </div>

            <div>
              <Label htmlFor="display_order">Display Order</Label>
              <Input
                id="display_order"
                type="number"
                value={formData.display_order}
                onChange={(e) => setFormData({ ...formData, display_order: parseInt(e.target.value) || 0 })}
              />
            </div>

            <div className="flex gap-2">
              <Button type="submit">
                {editingPdf ? 'Update PDF' : 'Add PDF'}
              </Button>
              {editingPdf && (
                <Button type="button" variant="outline" onClick={resetForm}>
                  Cancel
                </Button>
              )}
            </div>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Existing PDFs</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {pdfs.map((pdf) => {
              const isPlaceholder = pdf.file_url.startsWith('/placeholder-');
              
              return (
                <div key={pdf.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold">{pdf.name}</h3>
                      {isPlaceholder && (
                        <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                          Placeholder
                        </span>
                      )}
                    </div>
                    {pdf.description && (
                      <p className="text-sm text-gray-600 mt-1">{pdf.description}</p>
                    )}
                    <div className="flex items-center gap-4 text-xs text-gray-500 mt-2">
                      <span>Order: {pdf.display_order}</span>
                      <span>Status: {pdf.is_active ? 'Active' : 'Inactive'}</span>
                      {pdf.file_size && <span>Size: {Math.round(pdf.file_size / 1024)} KB</span>}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      onClick={() => testDownload(pdf)}
                      disabled={isPlaceholder}
                    >
                      <Download className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant={pdf.is_active ? "default" : "secondary"}
                      onClick={() => toggleActive(pdf.id, pdf.is_active)}
                    >
                      {pdf.is_active ? 'Active' : 'Inactive'}
                    </Button>
                    <Button size="sm" variant="outline" onClick={() => handleEdit(pdf)}>
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="destructive" onClick={() => handleDelete(pdf.id)}>
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              );
            })}
            {pdfs.length === 0 && (
              <p className="text-center text-gray-500 py-8">No PDFs added yet</p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PDFManager;
