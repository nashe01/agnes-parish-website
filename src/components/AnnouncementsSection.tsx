import { Card, CardContent } from '@/components/ui/card';

const AnnouncementsSection = () => {
  const announcements = [
    {
      title: "Holy Week Services",
      date: "March 24-31, 2024",
      description: "Join us for special Holy Week services including Palm Sunday, Holy Thursday, Good Friday, and Easter Vigil.",
      type: "Event"
    },
    {
      title: "Youth Ministry Meeting",
      date: "Every Friday 7:00 PM",
      description: "Young adults aged 18-35 are invited to join our weekly fellowship and Bible study sessions.",
      type: "Ministry"
    },
    {
      title: "Parish Fundraising Dinner",
      date: "April 15, 2024",
      description: "Annual fundraising dinner to support our community outreach programs. Tickets available after mass.",
      type: "Event"
    },
    {
      title: "First Communion Preparation",
      date: "Sundays 2:00 PM",
      description: "Preparation classes for children receiving their First Holy Communion. Registration required.",
      type: "Sacrament"
    },
    {
      title: "Food Drive Collection",
      date: "Ongoing",
      description: "We are collecting non-perishable food items for local families in need. Drop-off at the parish office.",
      type: "Community"
    },
    {
      title: "Lenten Retreat",
      date: "March 16-17, 2024",
      description: "Weekend retreat focusing on prayer, reflection, and spiritual renewal during the Lenten season.",
      type: "Spiritual"
    }
  ];

  const upcomingEvents = [
    {
      title: "Easter Sunday Celebration",
      date: "March 31, 2024",
      time: "7:00 AM, 9:00 AM, 11:00 AM",
      description: "Celebrate the resurrection of our Lord with special Easter masses and fellowship."
    },
    {
      title: "Parish Picnic",
      date: "May 20, 2024",
      time: "12:00 PM - 4:00 PM",
      description: "Annual parish picnic with food, games, and activities for the whole family."
    },
    {
      title: "Confirmation Ceremony",
      date: "April 28, 2024",
      time: "2:00 PM",
      description: "Confirmation ceremony for our youth candidates. Bishop will be presiding."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-sky-500 to-sky-800 bg-clip-text text-transparent mb-4">Announcements & Events</h2>
          <p className="text-xl text-gray-600">Stay updated with parish activities and upcoming events</p>
        </div>

        {/* Upcoming Events */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-sky-500 to-sky-800 bg-clip-text text-transparent mb-8 text-center">Upcoming Events</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h4>
                  <div className="text-secondary font-semibold mb-1">{event.date}</div>
                  <div className="text-secondary font-semibold mb-3">{event.time}</div>
                  <p className="text-gray-600">{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Infinite Scrolling Announcements */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-sky-500 to-sky-800 bg-clip-text text-transparent mb-8 text-center">Parish Announcements</h3>
        </div>
        
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-left space-x-6">
            {[...announcements, ...announcements].map((announcement, index) => (
              <Card key={index} className="flex-shrink-0 w-80 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      announcement.type === 'Event' ? 'bg-skyblue-100 text-skyblue-800' :
                      announcement.type === 'Ministry' ? 'bg-green-100 text-green-800' :
                      announcement.type === 'Sacrament' ? 'bg-purple-100 text-purple-800' :
                      announcement.type === 'Community' ? 'bg-orange-100 text-orange-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {announcement.type}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{announcement.title}</h4>
                  <div className="text-secondary font-semibold mb-3">{announcement.date}</div>
                  <p className="text-gray-600 text-sm">{announcement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnnouncementsSection;
