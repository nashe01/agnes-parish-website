
import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { supabase } from '@/integrations/supabase/client';
import { SectionFadeIn } from './SectionFadeIn';

interface Ministry {
  id: string;
  name: string;
  description: string;
  image_url?: string;
  meeting_time: string;
  location: string;
  how_to_join: string;
}

const MinistriesSection = () => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);
  const [ministries, setMinistries] = useState<Ministry[]>([]);

  useEffect(() => {
    fetchMinistries();
  }, []);

  const fetchMinistries = async () => {
    const { data } = await supabase
      .from('ministries')
      .select('*')
      .eq('is_active', true)
      .order('display_order');
    
    if (data) {
      setMinistries(data);
    }
  };

  const handleCardHover = (index: number) => {
    setFlippedCard(index);
  };

  const handleCardLeave = () => {
    setFlippedCard(null);
  };

  if (ministries.length === 0) {
    return (
      <section id="ministries" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4">Ministries & Guilds</h2>
            <p className="text-xl text-gray-600">Discover opportunities to serve and grow in faith</p>
          </div>
          <div className="text-center text-gray-600">
            <p>No ministries available at the moment.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <SectionFadeIn direction="up">
      <section id="ministries" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4">Ministries & Guilds</h2>
            <p className="text-xl text-gray-600">Discover opportunities to serve and grow in faith</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {ministries.map((ministry, index) => (
              <div 
                key={ministry.id}
                className="relative h-64 cursor-pointer"
                style={{ perspective: '1000px' }}
                onMouseEnter={() => handleCardHover(index)}
                onMouseLeave={handleCardLeave}
              >
                <div 
                  className={`relative w-full h-full transition-transform duration-700 ${
                    flippedCard === index ? '[transform:rotateY(180deg)]' : ''
                  }`}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Front of card */}
                  <Card 
                    className="absolute inset-0 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <div className="relative h-full">
                      <img 
                        src={ministry.image_url || "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop"} 
                        alt={ministry.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <h3 className="text-xl font-bold">{ministry.name}</h3>
                      </div>
                    </div>
                  </Card>

                  {/* Back of card */}
                  <Card 
                    className="absolute inset-0 overflow-hidden shadow-lg bg-secondary text-white p-6 flex flex-col justify-center"
                    style={{ 
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)'
                    }}
                  >
                    <div className="text-center">
                      <h3 className="text-xl font-bold mb-4">{ministry.name}</h3>
                      <div className="space-y-3 text-sm">
                        <div>
                          <p className="font-semibold">Meeting Time:</p>
                          <p>{ministry.meeting_time}</p>
                        </div>
                        <div>
                          <p className="font-semibold">Location:</p>
                          <p>{ministry.location}</p>
                        </div>
                        <div>
                          <p className="font-semibold">How to Join:</p>
                          <p className="text-xs">{ministry.how_to_join}</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SectionFadeIn>
  );
};

export default MinistriesSection;
