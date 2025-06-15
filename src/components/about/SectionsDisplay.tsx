import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { supabase } from '@/integrations/supabase/client';

interface Section {
  id: string;
  name: string;
  image_url?: string | null;
  details?: string | null;
  meeting_time?: string | null;
  location?: string | null;
  secretary_phone?: string | null;
}

const SectionsDisplay = () => {
  const [sectionsExpanded, setSectionsExpanded] = useState(false);
  const [sections, setSections] = useState<Section[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSections = async () => {
      const { data } = await supabase
        .from('about_sections')
        .select('*')
        .eq('is_active', true)
        .order('display_order');
      setSections(data || []);
      setLoading(false);
    };
    fetchSections();
  }, []);

  if (loading) {
    return (
      <section className="py-16">
        <div className="text-center text-lg">Loading sections...</div>
      </section>
    );
  }

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-sky-500 to-sky-800 bg-clip-text text-transparent">Sections</h2>
        <p className="text-gray-600 text-lg text-center mb-12 max-w-3xl mx-auto">
          Explore the various liturgical ministries and volunteer opportunities that make our worship meaningful and welcoming.
        </p>
        {sections.length === 0 ? (
          <div className="text-center text-gray-600 mb-12">No sections available right now.</div>
        ) : !sectionsExpanded ? (
          <div className="mb-8">
            <div className="flex overflow-hidden">
              <div className="flex animate-scroll-left-35">
                {[...sections, ...sections].map((s, i) => (
                  <div key={s.id + '-' + i} className="flex-shrink-0 mx-4 flex flex-col items-center">
                    <div className="w-48 rounded-lg overflow-hidden shadow-lg">
                      <AspectRatio ratio={16 / 9}>
                        <img
                          src={s.image_url || "/placeholder.svg"}
                          alt={s.name}
                          className="object-cover w-full h-full"
                        />
                      </AspectRatio>
                    </div>
                    <p className="text-center mt-2 font-medium">{s.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
            {sections.map((s) => (
              <Card key={s.id} className="flex flex-col h-full">
                <AspectRatio ratio={16 / 9}>
                  <img
                    src={s.image_url || "/placeholder.svg"}
                    alt={s.name}
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
                <CardContent className="flex flex-1 flex-col items-center justify-between p-4 text-center !pt-4">
                  <p className="font-semibold text-lg">{s.name}</p>
                  {s.details && (
                    <p className="text-sm text-gray-700 mt-2 mb-1">{s.details}</p>
                  )}
                  <div className="text-xs text-gray-500 space-y-1 mt-1">
                    {s.meeting_time && (
                      <div>
                        <b>Time:</b> {s.meeting_time}
                      </div>
                    )}
                    {s.location && (
                      <div>
                        <b>Location:</b> {s.location}
                      </div>
                    )}
                    {s.secretary_phone && (
                      <div>
                        <b>Phone:</b> {s.secretary_phone}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        <div className="text-center">
          <button
            onClick={() => {
              setSectionsExpanded(!sectionsExpanded);
            }}
            className="bg-gradient-to-r from-sky-500 to-sky-800 hover:from-sky-600 hover:to-sky-900 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            {sectionsExpanded ? 'Show Less' : 'All Sections'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default SectionsDisplay;
