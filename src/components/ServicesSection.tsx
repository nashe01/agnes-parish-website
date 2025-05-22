
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock, Heart } from 'lucide-react';

const ServicesSection = () => {
  const masses = [
    { day: "Sunday", times: ["7:00 AM", "9:00 AM", "11:00 AM", "6:00 PM"] },
    { day: "Monday - Friday", times: ["6:30 AM", "12:00 PM"] },
    { day: "Saturday", times: ["8:00 AM", "5:00 PM (Vigil)"] }
  ];

  const sacraments = [
    {
      name: "Baptism",
      description: "First Sunday of each month at 1:00 PM",
      requirement: "Baptism preparation class required"
    },
    {
      name: "Confirmation",
      description: "Annual ceremony in spring",
      requirement: "Two-year preparation program required"
    },
    {
      name: "Marriage",
      description: "By appointment",
      requirement: "Six-month preparation period required"
    },
    {
      name: "Confession",
      description: "Saturdays 4:00-5:00 PM or by appointment",
      requirement: "Available before all masses"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Services & Schedules</h2>
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
              <div className="space-y-6">
                {masses.map((mass, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{mass.day}</h4>
                    <div className="flex flex-wrap gap-2">
                      {mass.times.map((time, timeIndex) => (
                        <span 
                          key={timeIndex}
                          className="bg-secondary text-white px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {time}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Sacraments */}
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Heart className="w-8 h-8 text-secondary mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Sacraments</h3>
              </div>
              <div className="space-y-6">
                {sacraments.map((sacrament, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">{sacrament.name}</h4>
                    <p className="text-secondary font-medium mb-2">{sacrament.description}</p>
                    <p className="text-gray-600 text-sm">{sacrament.requirement}</p>
                  </div>
                ))}
              </div>
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
