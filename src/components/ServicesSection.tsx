
import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock, Heart } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

interface MassSchedule {
  id: string;
  day_type: string;
  times: string[];
  special_note?: string;
}

interface Sacrament {
  id: string;
  name: string;
  description: string;
  requirement: string;
}

const ServicesSection = () => {
  const [massSchedules, setMassSchedules] = useState<MassSchedule[]>([]);
  const [sacraments, setSacraments] = useState<Sacrament[]>([]);

  useEffect(() => {
    fetchMassSchedules();
    fetchSacraments();
  }, []);

  const fetchMassSchedules = async () => {
    const { data } = await supabase
      .from('mass_schedules')
      .select('*')
      .eq('is_active', true)
      .order('display_order');
    
    if (data) {
      setMassSchedules(data);
    }
  };

  const fetchSacraments = async () => {
    const { data } = await supabase
      .from('sacraments')
      .select('*')
      .eq('is_active', true)
      .order('display_order');
    
    if (data) {
      setSacraments(data);
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-sky-500 to-sky-800 bg-clip-text text-transparent mb-4">Services & Schedules</h2>
          <p className="text-xl text-gray-600">Join us in worship and celebrate the sacraments</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Mass Schedule */}
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Clock className="w-8 h-8 text-secondary mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Mass Schedule</h3>
              </div>
              {massSchedules.length > 0 ? (
                <div className="space-y-6">
                  {massSchedules.map((mass) => (
                    <div key={mass.id} className="border-b border-gray-200 pb-4 last:border-b-0">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{mass.day_type}</h4>
                      <div className="flex flex-wrap gap-2 mb-2">
                        {mass.times.map((time, timeIndex) => (
                          <span 
                            key={timeIndex}
                            className="bg-secondary text-white px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {time}
                          </span>
                        ))}
                      </div>
                      {mass.special_note && (
                        <p className="text-gray-600 text-sm">{mass.special_note}</p>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-600">No mass schedules available.</p>
              )}
            </CardContent>
          </Card>

          {/* Sacraments */}
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Heart className="w-8 h-8 text-secondary mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Sacraments</h3>
              </div>
              {sacraments.length > 0 ? (
                <div className="space-y-6">
                  {sacraments.map((sacrament) => (
                    <div key={sacrament.id} className="border-b border-gray-200 pb-4 last:border-b-0">
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">{sacrament.name}</h4>
                      <p className="text-secondary font-medium mb-2">{sacrament.description}</p>
                      <p className="text-gray-600 text-sm">{sacrament.requirement}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-600">No sacraments information available.</p>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Special Events */}
        <div className="mt-12">
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Calendar className="w-8 h-8 text-secondary mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Special Events & Feast Days</h3>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="text-center">
                  <h4 className="font-semibold text-gray-900 mb-2">Holy Week</h4>
                  <p className="text-gray-600 text-sm">Special services from Palm Sunday through Easter</p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-gray-900 mb-2">Christmas</h4>
                  <p className="text-gray-600 text-sm">Christmas Eve and Christmas Day masses</p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-gray-900 mb-2">Feast of St. Agnes</h4>
                  <p className="text-gray-600 text-sm">Annual patronal feast celebration</p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-gray-900 mb-2">First Friday</h4>
                  <p className="text-gray-600 text-sm">Adoration and special devotions</p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-gray-900 mb-2">Ash Wednesday</h4>
                  <p className="text-gray-600 text-sm">Beginning of Lenten season</p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-gray-900 mb-2">All Saints Day</h4>
                  <p className="text-gray-600 text-sm">Special mass and remembrance</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
