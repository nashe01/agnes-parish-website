
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
      <section className="py-16 bg-gray-50">
        <div className="text-center text-lg">Loading sections...</div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
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
          // Expanded: show uniform grid, no overlap, top aligned with landscape images
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
            {sections.map((s) => (
              <div key={s.id} className="flip-card group h-full flex flex-col">
                <div className="flip-card-inner w-full h-full">
                  {/* Front */}
                  <div className="flip-card-front rounded-lg shadow-lg overflow-hidden flex flex-col h-full bg-white">
                    <AspectRatio ratio={16 / 9}>
                      <img
                        src={s.image_url || "/placeholder.svg"}
                        alt={s.name}
                        className="object-cover w-full h-full"
                      />
                    </AspectRatio>
                  </div>
                  {/* Back */}
                  <div className="flip-card-back rounded-lg shadow-lg overflow-hidden flex flex-col h-full bg-sky-700 p-4">
                    <div className="flex flex-col flex-1 justify-center text-white text-center gap-2">
                      {s.details && <p className="text-sm mb-1">{s.details}</p>}
                      {s.meeting_time && (
                        <p className="text-xs">
                          <b>Time:</b> {s.meeting_time}
                        </p>
                      )}
                      {s.location && (
                        <p className="text-xs">
                          <b>Location:</b> {s.location}
                        </p>
                      )}
                      {s.secretary_phone && (
                        <p className="text-xs">
                          <b>Phone:</b> {s.secretary_phone}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <p className="text-center mt-3 font-semibold bg-white bg-opacity-90 py-2 rounded-b-lg">
                  {s.name}
                </p>
              </div>
            ))}
          </div>
        )}

        <div className="text-center">
          <button
            onClick={() => {
              setSectionsExpanded(!sectionsExpanded);
              if (!sectionsExpanded) window.scrollTo({ top: 0, behavior: "smooth" });
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
