
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Download, FileText, ExternalLink } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface PDF {
  id: string;
  name: string;
  description?: string;
  file_url: string;
  file_size?: number;
}

const DownloadablePDFs = () => {
  const [pdfs, setPdfs] = useState<PDF[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchPDFs = async () => {
      try {
        const { data, error } = await supabase
          .from('downloadable_pdfs')
          .select('*')
          .eq('is_active', true)
          .order('display_order');
        
        if (error) throw error;
        setPdfs(data || []);
      } catch (error) {
        console.error('Error fetching PDFs:', error);
        toast({
          title: "Error",
          description: "Failed to load documents",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchPDFs();
  }, [toast]);

  const handleDownload = async (pdf: PDF) => {
    try {
      // Check if it's a placeholder URL
      if (pdf.file_url.startsWith('/placeholder-')) {
        toast({
          title: "Document Not Available",
          description: `${pdf.name} is not yet available for download. Please check back later.`,
          variant: "destructive",
        });
        return;
      }

      // Check if it's a Supabase storage URL
      if (pdf.file_url.includes('supabase')) {
        window.open(pdf.file_url, '_blank');
      } else {
        // For external URLs or local files
        const link = document.createElement('a');
        link.href = pdf.file_url;
        link.download = pdf.name;
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    } catch (error) {
      console.error('Download error:', error);
      toast({
        title: "Download Failed",
        description: "Unable to download the document. Please try again.",
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return (
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-lg">Loading documents...</div>
        </div>
      </div>
    );
  }

  if (pdfs.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-sky-500 to-sky-800 bg-clip-text text-transparent">
          Parish Documents
        </h2>
        <p className="text-gray-600 text-lg text-center mb-12 max-w-2xl mx-auto">
          Download important parish documents and historical materials
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pdfs.map((pdf) => {
            const isPlaceholder = pdf.file_url.startsWith('/placeholder-');
            
            return (
              <Card key={pdf.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <FileText className={`w-8 h-8 ${isPlaceholder ? 'text-gray-400' : 'text-sky-600'}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {pdf.name}
                      </h3>
                      {pdf.description && (
                        <p className="text-gray-600 text-sm mb-4">
                          {pdf.description}
                        </p>
                      )}
                      {isPlaceholder && (
                        <p className="text-yellow-600 text-xs mb-4 italic">
                          Document coming soon
                        </p>
                      )}
                      <div className="flex items-center justify-between">
                        {pdf.file_size && !isPlaceholder && (
                          <span className="text-xs text-gray-500">
                            {Math.round(pdf.file_size / 1024)} KB
                          </span>
                        )}
                        <Button 
                          size="sm" 
                          className={`${
                            isPlaceholder 
                              ? 'bg-gray-400 hover:bg-gray-500' 
                              : 'bg-gradient-to-r from-sky-500 to-sky-800 hover:from-sky-600 hover:to-sky-900'
                          }`}
                          onClick={() => handleDownload(pdf)}
                          disabled={isPlaceholder}
                        >
                          <div className="flex items-center gap-2">
                            {isPlaceholder ? (
                              <>
                                <ExternalLink className="w-4 h-4" />
                                Coming Soon
                              </>
                            ) : (
                              <>
                                <Download className="w-4 h-4" />
                                Download
                              </>
                            )}
                          </div>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DownloadablePDFs;
