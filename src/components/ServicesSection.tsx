import { useEffect, useState } from 'react';
import { Calendar, Clock, Heart } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent } from '@/components/ui/card';

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
    <section id="services" className="py-16 bg-gray-50">
      <style>
        {`
          @keyframes scroll-up {
            0% {
              transform: translateY(0);
            }
            100% {
              transform: translateY(-50%);
            }
          }

          .animate-scroll-up {
            animation: scroll-up 20s linear infinite;
          }
        `}
      </style>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-sky-500 to-sky-800 bg-clip-text text-transparent mb-2">
            Services & Schedules
          </h2>
          <p className="text-lg text-gray-600">Join us in worship and celebrate the sacraments</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Mass Schedule */}
          <Card className="bg-white shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Clock className="w-6 h-6 text-secondary mr-2" />
                <h3 className="text-xl font-bold text-gray-900">Mass Schedule</h3>
              </div>
              {massSchedules.length > 0 ? (
                <div className="space-y-4">
                  {massSchedules.map((mass) => (
                    <div key={mass.id} className="pb-2">
                      <h4 className="text-base font-semibold text-gray-900 mb-1">{mass.day_type}</h4>
                      <div className="flex flex-wrap gap-2 mb-1">
                        {mass.times.map((time, index) => (
                          <span
                            key={index}
                            className="bg-secondary text-white px-2 py-0.5 rounded-full text-xs font-medium"
                          >
                            {time}
                          </span>
                        ))}
                      </div>
                      {mass.special_note && (
                        <p className="text-gray-600 text-xs">{mass.special_note}</p>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-600 text-sm">No mass schedules available.</p>
              )}
            </CardContent>
          </Card>

          {/* Sacraments */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center mb-4">
              <Heart className="w-6 h-6 text-secondary mr-2" />
              <h3 className="text-xl font-bold text-gray-900">Sacraments</h3>
            </div>
            {sacraments.length > 0 ? (
              <div className="relative h-80 overflow-hidden">
                <div className="space-y-4 animate-scroll-up">
                  {sacraments.concat(sacraments).map((sacrament, index) => (
                    <div key={`${sacrament.id}-${index}`} className="pb-2">
                      <h4 className="text-base font-semibold text-gray-900 mb-1">{sacrament.name}</h4>
                      <p className="text-secondary text-sm mb-1">{sacrament.description}</p>
                      <p className="text-gray-600 text-xs">{sacrament.requirement}</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <p className="text-gray-600 text-sm">No sacraments information available.</p>
            )}
          </div>
        </div>

        {/* Special Events */}
        <div className="mt-10">
          <Card className="bg-white shadow-lg min-h-[18rem]">
            <CardContent className="p-6">
              <div className="flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-secondary mr-2" />
                <h3 className="text-xl font-bold text-sky-500">Special Events & Feast Days</h3>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  ['Holy Week', 'Special services from Palm Sunday through Easter'],
                  ['Christmas', 'Christmas Eve and Christmas Day masses'],
                  ['Feast of St. Agnes', 'Annual patronal feast celebration'],
                  ['First Friday', 'Adoration and special devotions'],
                  ['Ash Wednesday', 'Beginning of Lenten season'],
                  ['All Saints Day', 'Special mass and remembrance'],
                ].map(([title, desc]) => (
                  <div key={title} className="text-center">
                    <h4 className="font-semibold text-gray-900 text-base mb-1">{title}</h4>
                    <p className="text-gray-600 text-sm">{desc}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
