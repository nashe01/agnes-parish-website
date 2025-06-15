
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Clock, MapPin, Phone } from "lucide-react";
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

const GuildCard = ({
  name,
  image_url,
  meeting_time,
  location,
  secretary_phone,
}: Guild) => (
  <Card className="flex flex-col h-full items-center shadow-lg">
    <AspectRatio ratio={16/9} className="w-full">
      <img
        src={image_url || "/placeholder.svg"}
        alt={name}
        className="object-cover w-full h-full rounded-t-lg"
      />
    </AspectRatio>
    <CardContent className="flex flex-col gap-2 items-center w-full p-4 text-center !pt-4">
      <span className="font-semibold text-lg">{name}</span>
      {meeting_time && (
        <div className="flex items-center justify-center text-sm text-gray-700 gap-2">
          <Clock className="w-4 h-4 text-sky-700" />
          <span>{meeting_time}</span>
        </div>
      )}
      {location && (
        <div className="flex items-center justify-center text-sm text-gray-700 gap-2">
          <MapPin className="w-4 h-4 text-sky-700" />
          <span>{location}</span>
        </div>
      )}
      {secretary_phone && (
        <div className="flex items-center justify-center text-sm text-gray-700 gap-2">
          <Phone className="w-4 h-4 text-sky-700" />
          <span>{secretary_phone}</span>
        </div>
      )}
    </CardContent>
  </Card>
);

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
                  <div key={g.id + '-' + i} className="flex-shrink-0 mx-4 flex flex-col items-center w-56">
                    <GuildCard {...g} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
            {guilds.map((g) => (
              <GuildCard key={g.id} {...g} />
            ))}
          </div>
        )}

        <div className="text-center">
          <button
            onClick={() => {
              setGuildsExpanded(!guildsExpanded);
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
