
import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { supabase } from '@/integrations/supabase/client';
import { SectionFadeIn } from './SectionFadeIn';

interface Announcement {
  id: string;
  title: string;
  date_text: string;
  description: string;
  type: string;
  is_featured: boolean;
}

interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image_url?: string;
}

const AnnouncementsSection = () => {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [upcomingEvents, setUpcomingEvents] = useState<NewsArticle[]>([]);

  useEffect(() => {
    fetchAnnouncements();
    fetchUpcomingEvents();
  }, []);

  const fetchAnnouncements = async () => {
    const { data } = await supabase
      .from('announcements')
      .select('*')
      .eq('is_active', true)
      .order('display_order');
    
    if (data) {
      setAnnouncements(data);
    }
  };

  const fetchUpcomingEvents = async () => {
    const { data } = await supabase
      .from('news_articles')
      .select('*')
      .eq('is_active', true)
      .order('display_order')
      .limit(3);
    
    if (data) {
      setUpcomingEvents(data);
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-sky-500 to-sky-800 bg-clip-text text-transparent mb-4">Announcements & Events</h2>
          <p className="text-xl text-gray-600">Stay updated with parish activities and upcoming events</p>
        </div>

        {/* Upcoming Events */}
        {upcomingEvents.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-sky-500 to-sky-800 bg-clip-text text-transparent mb-8 text-center">Upcoming Events</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {upcomingEvents.map((event, index) => (
                <SectionFadeIn key={event.id} direction="up" delay={index * 0.08}>
                  <Card className="h-72 relative overflow-hidden group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    <CardContent className="p-0 h-full">
                      {event.image_url && (
                        <img 
                          src={event.image_url} 
                          alt={event.title}
                          className="w-full h-40 object-cover rounded-md"
                        />
                      )}
                      <div className="w-full px-4 py-2 bg-white bg-opacity-90 absolute bottom-0 left-0 rounded-b-md">
                        <h4 className="text-base font-bold text-gray-900 truncate m-0">{event.title}</h4>
                      </div>
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4">
                        <div className="text-sky-400 text-base font-bold mb-2 text-center w-full truncate">{event.date}</div>
                        <p className="text-white text-sm text-center line-clamp-4 w-full">{event.excerpt}</p>
                      </div>
                    </CardContent>
                  </Card>
                </SectionFadeIn>
              ))}
            </div>
          </div>
        )}

        {/* Parish Announcements */}
        {announcements.length > 0 && (
          <>
            <div className="mb-8">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-sky-500 to-sky-800 bg-clip-text text-transparent mb-8 text-center">Parish Announcements</h3>
            </div>
            
            <div className="relative overflow-hidden">
              <div className="flex animate-scroll-left space-x-6">
                {[...announcements, ...announcements].map((announcement, index) => (
                  <SectionFadeIn key={`${announcement.id}-${index}`} direction="up" delay={index * 0.08}>
                    <Card className="flex-shrink-0 w-48 h-40 hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-1 h-full flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start mb-1">
                            <span className={`px-2 py-0 rounded-full text-[10px] font-semibold ${
                              announcement.type === 'Event' ? 'bg-skyblue-100 text-skyblue-800' :
                              announcement.type === 'Ministry' ? 'bg-green-100 text-green-800' :
                              announcement.type === 'Sacrament' ? 'bg-purple-100 text-purple-800' :
                              announcement.type === 'Community' ? 'bg-orange-100 text-orange-800' :
                              'bg-blue-100 text-blue-800'
                            }`}>
                              {announcement.type}
                            </span>
                          </div>
                          <h4 className="text-base font-semibold text-gray-900 mb-0.5 leading-snug truncate">{announcement.title}</h4>
                          <div className="text-secondary font-medium mb-1 text-xs leading-tight truncate">{announcement.date_text}</div>
                          <p className="text-gray-600 text-xs leading-tight m-0 line-clamp-3">{announcement.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </SectionFadeIn>
                ))}
              </div>
            </div>
          </>
        )}

        {announcements.length === 0 && upcomingEvents.length === 0 && (
          <div className="text-center text-gray-600">
            <p>No announcements or events available at the moment.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default AnnouncementsSection;
