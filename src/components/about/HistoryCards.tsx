
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Download } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface PDF {
  id: string;
  name: string;
  description?: string;
  file_url: string;
  file_size?: number;
}

const HistoryCards = () => {
  const [pdfs, setPdfs] = useState<PDF[]>([]);
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
      }
    };

    fetchPDFs();
  }, []);

  const handleDownload = async (pdfType: 'saint' | 'parish') => {
    try {
      // Find the appropriate PDF based on type
      const targetPdf = pdfs.find(pdf => {
        if (pdfType === 'saint') {
          return pdf.name.toLowerCase().includes('saint') || pdf.name.toLowerCase().includes('agnes');
        } else {
          return pdf.name.toLowerCase().includes('parish') || pdf.name.toLowerCase().includes('church');
        }
      });

      if (!targetPdf) {
        toast({
          title: "Document Not Found",
          description: `${pdfType === 'saint' ? 'Saint Agnes' : 'Parish'} history document is not available.`,
          variant: "destructive",
        });
        return;
      }

      // Check if it's a placeholder URL
      if (targetPdf.file_url.startsWith('/placeholder-')) {
        toast({
          title: "Document Not Available",
          description: `${targetPdf.name} is not yet available for download. Please check back later.`,
          variant: "destructive",
        });
        return;
      }

      // Check if it's a Supabase storage URL
      if (targetPdf.file_url.includes('supabase')) {
        window.open(targetPdf.file_url, '_blank');
      } else {
        // For external URLs or local files
        const link = document.createElement('a');
        link.href = targetPdf.file_url;
        link.download = targetPdf.name;
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }

      toast({
        title: "Download Started",
        description: `Downloading ${targetPdf.name}`,
      });
    } catch (error) {
      console.error('Download error:', error);
      toast({
        title: "Download Failed",
        description: "Unable to download the document. Please try again.",
        variant: "destructive",
      });
    }
  };

  const historyData = {
    stAgnes: {
      title: "Saint Agnes of Rome",
      image: "/lovable-uploads/333a1e52-ace4-40f6-8d59-dade5e28336c.png",
      history: `Saint Agnes was a young Roman noblewoman martyred for her faith around 304 AD during the reign of Emperor Diocletian. She is venerated as one of the most important virgin martyrs in the Catholic Church and is a symbol of purity, courage, and unwavering devotion to Christ.

Born into a wealthy Christian family in Rome, Agnes was known for her exceptional beauty and intelligence. Despite her young age of only 12 or 13 years, she had already consecrated her virginity to God and refused all suitors who sought her hand in marriage.

During the intense persecution of Christians under Diocletian, Agnes was denounced as a Christian. When brought before the Roman prefect, she fearlessly proclaimed her faith and refused to sacrifice to the Roman gods. Various tortures were attempted, but according to tradition, she remained unharmed through divine intervention.

The prefect's son fell in love with her and tried to force her into marriage, but Agnes remained steadfast in her commitment to Christ. Her courage and faith in the face of persecution inspired many Romans to convert to Christianity.

Agnes was ultimately martyred by sword, becoming one of the youngest saints in the Catholic Church. Her feast day is celebrated on January 21st, and she is often depicted with a lamb, symbolizing her purity and gentleness.

She is the patron saint of young girls, rape victims, and gardeners. Her example continues to inspire Christians worldwide to remain faithful to their beliefs despite persecution or pressure to compromise their values.

The name "Agnes" comes from the Greek word "hagnos," meaning "pure" or "holy," which perfectly encapsulates her life and witness. Her tomb in Rome became a place of pilgrimage, and a basilica was built over her burial site by Emperor Constantine's daughter.

Many parishes and institutions worldwide bear her name, including our own St. Agnes Catholic Parish, which strives to embody her spirit of faithfulness, purity, and dedication to Christ.`
    },
    church: {
      title: "St. Agnes Catholic Parish",
      image: "/lovable-uploads/2c81f3cf-697b-4703-8a8c-047c57de5827.png",
      history: `St. Agnes Catholic Parish was founded in 1952 as a small mission church to serve the growing Catholic community in our region. What began as a humble wooden structure with just 50 founding families has grown into a vibrant parish serving over 2,000 families today.

The original church building was constructed through the dedicated efforts of parishioners who donated not only their money but also their time and labor. Father Thomas McCarthy, our founding pastor, led the community with vision and determination, organizing fundraising events and building committees that would lay the foundation for our thriving parish.

In 1965, as the community continued to grow, construction began on our current church building. The beautiful stone structure was designed in the traditional Gothic Revival style, featuring stunning stained glass windows that were crafted by local artisans and donated by parish families in memory of their loved ones.

The 1970s saw the addition of our parish hall and education center, providing space for religious education classes, community gatherings, and social events. This period marked the beginning of many ministries and organizations that continue to serve our community today.

During the 1980s, our parish underwent significant liturgical renovations following the Second Vatican Council, updating the sanctuary to better reflect the reformed liturgy while maintaining the reverent and beautiful atmosphere that defines our worship space.

The 1990s brought technological updates and accessibility improvements, including the installation of our current sound system and the addition of wheelchair accessibility throughout the facility. Our parish school was also established during this decade, providing Catholic education for children from kindergarten through eighth grade.

In the new millennium, we have continued to grow and evolve, adding modern amenities while preserving our traditional character. Our recent renovations include updated lighting, climate control, and the beautiful new Stations of the Cross that were blessed in 2018.

Throughout our history, St. Agnes Parish has been blessed with dedicated pastors, devoted parishioners, and a strong sense of community that transcends generations. We have weathered challenges together, celebrated milestones, and continued to be a beacon of faith in our community.

Today, we honor our past while looking toward the future, committed to serving God and our neighbors with the same spirit of faith, hope, and love that has guided us for over 70 years.`
    }
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-sky-500 to-sky-800 bg-clip-text text-transparent">
            A Peak Into History
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Discover the rich heritage of our patron saint and the remarkable journey of our parish community. 
            These interactive cards reveal the stories that have shaped our faith and guided our mission for generations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Saint Agnes Card */}
          <div className="flip-card h-[450px]">
            <div className="flip-card-inner relative w-full h-full">
              {/* Front */}
              <div className="flip-card-front absolute w-full h-full">
                <Card className="h-full overflow-hidden shadow-xl">
                  <CardContent className="p-0 h-full">
                    <div className="relative h-full">
                      <img 
                        src={historyData.stAgnes.image} 
                        alt={historyData.stAgnes.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                        <div className="p-8 text-white">
                          <h3 className="text-3xl font-bold">{historyData.stAgnes.title}</h3>
                          <p className="text-base opacity-90">Hover to learn more about our patron saint</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Back */}
              <div className="flip-card-back absolute w-full h-full">
                <Card className="h-full bg-gradient-to-br from-sky-50 to-sky-100">
                  <CardContent className="p-8 h-full flex flex-col">
                    <h3 className="text-2xl font-bold text-sky-800 mb-6">{historyData.stAgnes.title}</h3>
                    <ScrollArea className="flex-1 mb-6">
                      <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                        {historyData.stAgnes.history}
                      </p>
                    </ScrollArea>
                    <button 
                      onClick={() => handleDownload('saint')}
                      className="flex items-center justify-center bg-gradient-to-r from-sky-500 to-sky-800 hover:from-sky-600 hover:to-sky-900 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      Download Saint Agnes History PDF
                    </button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Church History Card */}
          <div className="flip-card h-[450px]">
            <div className="flip-card-inner relative w-full h-full">
              {/* Front */}
              <div className="flip-card-front absolute w-full h-full">
                <Card className="h-full overflow-hidden shadow-xl">
                  <CardContent className="p-0 h-full">
                    <div className="relative h-full">
                      <img 
                        src={historyData.church.image} 
                        alt={historyData.church.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                        <div className="p-8 text-white">
                          <h3 className="text-3xl font-bold">{historyData.church.title}</h3>
                          <p className="text-base opacity-90">Hover to discover our parish history</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Back */}
              <div className="flip-card-back absolute w-full h-full">
                <Card className="h-full bg-gradient-to-br from-sky-50 to-sky-100">
                  <CardContent className="p-8 h-full flex flex-col">
                    <h3 className="text-2xl font-bold text-sky-800 mb-6">{historyData.church.title}</h3>
                    <ScrollArea className="flex-1 mb-6">
                      <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                        {historyData.church.history}
                      </p>
                    </ScrollArea>
                    <button 
                      onClick={() => handleDownload('parish')}
                      className="flex items-center justify-center bg-gradient-to-r from-sky-500 to-sky-800 hover:from-sky-600 hover:to-sky-900 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      Download Parish History PDF
                    </button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistoryCards;
