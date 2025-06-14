
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { supabase } from '@/integrations/supabase/client';

interface Guild {
  id: string;
  name: string;
  image_url?: string | null;
  details?: string | null;
  meeting_time?: string | null;
  location?: string | null;
  secretary_phone?: string | null;
}

const GuildsDisplay = () => {
  const [guildsExpanded, setGuildsExpanded] = useState(false);
  const [guilds, setGuilds] = useState<Guild[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGuilds = async () => {
      const { data } = await supabase
        .from('about_guilds')
        .select('*')
        .eq('is_active', true)
        .order('display_order');
      setGuilds(data || []);
      setLoading(false);
    };
    fetchGuilds();
  }, []);

  if (loading) {
    return (
      <section className="py-16">
        <div className="text-center text-lg">Loading guilds...</div>
      </section>
    );
  }

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-sky-500 to-sky-800 bg-clip-text text-transparent">Guilds</h2>
        <p className="text-gray-600 text-lg text-center mb-12 max-w-3xl mx-auto">
          Discover our parish organizations and ministries that foster fellowship, faith formation, and community service.
        </p>

        {guilds.length === 0 ? (
          <div className="text-center text-gray-600 mb-12">No guilds available right now.</div>
        ) : !guildsExpanded ? (
          <div className="mb-8">
            <div className="flex overflow-hidden">
              <div className="flex animate-scroll-left-35">
                {[...guilds, ...guilds].map((g, i) => (
                  <div key={g.id + '-' + i} className="flex-shrink-0 mx-4 flex flex-col items-center">
                    <div className="w-48 h-48 rounded-lg overflow-hidden shadow-lg">
                      <img src={g.image_url || "/placeholder.svg"} alt={g.name} className="w-full h-full object-cover" />
                    </div>
                    <p className="text-center mt-2 font-medium">{g.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            {guilds.map((g, i) => (
              <div key={g.id} className="h-64 flip-card group">
                <div className="flip-card-inner w-full h-full">
                  {/* Front */}
                  <div className="flip-card-front rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
                    <div className="flex-1">
                      <img src={g.image_url || "/placeholder.svg"} alt={g.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="text-center mt-2 font-medium bg-white bg-opacity-90 py-2">{g.name}</p>
                    </div>
                  </div>
                  {/* Back */}
                  <div className="flip-card-back rounded-lg shadow-lg overflow-hidden flex flex-col h-full p-4 bg-sky-700">
                    <div className="flex flex-col flex-1 justify-center text-white text-center">
                      <div>
                        <p className="font-bold text-lg mb-2">{g.name}</p>
                        <p className="text-sm mb-1">{g.details}</p>
                        {g.meeting_time && <p className="text-xs"><b>Time:</b> {g.meeting_time}</p>}
                        {g.location && <p className="text-xs"><b>Location:</b> {g.location}</p>}
                        {g.secretary_phone && <p className="text-xs"><b>Phone:</b> {g.secretary_phone}</p>}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-center">
          <button
            onClick={() => {
              setGuildsExpanded(!guildsExpanded);
              if (!guildsExpanded) window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="bg-gradient-to-r from-sky-500 to-sky-800 hover:from-sky-600 hover:to-sky-900 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            {guildsExpanded ? 'Show Less' : 'All Guilds'}
          </button>
        </div>
      </div>
    </section>
  );
};
export default GuildsDisplay;
