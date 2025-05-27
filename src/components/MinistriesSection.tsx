import { useState } from 'react';
import { Card } from '@/components/ui/card';

const MinistriesSection = () => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const ministries = [
    {
      name: "Youth Ministry",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop",
      meetingTime: "Fridays 7:00 PM",
      location: "Parish Hall",
      howToJoin: "Contact Fr. Michael or visit us on Friday evenings. Open to ages 18-35."
    },
    {
      name: "Choir Ministry",
      image: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=800&h=600&fit=crop",
      meetingTime: "Sundays 8:00 AM & Thursdays 7:00 PM",
      location: "Church Sanctuary",
      howToJoin: "Auditions held monthly. Contact the music director for more information."
    },
    {
      name: "Children's Liturgy",
      image: "https://images.unsplash.com/photo-1560541919-eb5c2da6a5a3?w=800&h=600&fit=crop",
      meetingTime: "Sundays during 9:00 AM Mass",
      location: "Children's Chapel",
      howToJoin: "Volunteer training provided. Contact the Religious Education coordinator."
    },
    {
      name: "Knights of Columbus",
      image: "https://images.unsplash.com/photo-1607703703674-df96af81dffa?w=800&h=600&fit=crop",
      meetingTime: "2nd Tuesday 7:30 PM",
      location: "Knights Hall",
      howToJoin: "Catholic men 18+ welcome. Contact Grand Knight for membership information."
    },
    {
      name: "Ladies Guild",
      image: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=800&h=600&fit=crop",
      meetingTime: "1st Saturday 10:00 AM",
      location: "Parish Center",
      howToJoin: "All women welcome. Contact guild president for meeting details."
    },
    {
      name: "Altar Servers",
      image: "https://images.unsplash.com/photo-1586516439128-ea7a5ade0a11?w=800&h=600&fit=crop",
      meetingTime: "Training as needed",
      location: "Church Sanctuary",
      howToJoin: "Boys and girls grades 4+ welcome. Training provided monthly."
    },
    {
      name: "Ushers Ministry",
      image: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=800&h=600&fit=crop",
      meetingTime: "All Masses",
      location: "Church Entrance",
      howToJoin: "Contact head usher. Training provided for new volunteers."
    },
    {
      name: "Lectors Ministry",
      image: "https://images.unsplash.com/photo-1530367899272-065937aaba7d?w=800&h=600&fit=crop",
      meetingTime: "Monthly training sessions",
      location: "Church Sanctuary",
      howToJoin: "Must complete lector training program. Contact liturgy coordinator."
    }
  ];

  const handleCardHover = (index: number) => {
    setFlippedCard(index);
  };

  const handleCardLeave = () => {
    setFlippedCard(null);
  };

  return (
    <section id="ministries" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">Ministries & Guilds</h2>
          <p className="text-xl text-gray-600">Discover opportunities to serve and grow in faith</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {ministries.map((ministry, index) => (
            <div 
              key={index}
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
                      src={ministry.image} 
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
                        <p>{ministry.meetingTime}</p>
                      </div>
                      <div>
                        <p className="font-semibold">Location:</p>
                        <p>{ministry.location}</p>
                      </div>
                      <div>
                        <p className="font-semibold">How to Join:</p>
                        <p className="text-xs">{ministry.howToJoin}</p>
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
  );
};

export default MinistriesSection;
