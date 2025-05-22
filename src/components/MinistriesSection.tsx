
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const MinistriesSection = () => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const ministries = [
    {
      name: "Youth Ministry",
      description: "Empowering young people in faith and service",
      meetingTime: "Fridays 7:00 PM",
      location: "Parish Hall",
      howToJoin: "Contact Fr. Michael or visit us on Friday evenings. Open to ages 18-35.",
      icon: "👥",
      color: "bg-skyblue-500"
    },
    {
      name: "Choir Ministry",
      description: "Lifting voices in praise and worship",
      meetingTime: "Sundays 8:00 AM & Thursdays 7:00 PM",
      location: "Church Sanctuary",
      howToJoin: "Auditions held monthly. Contact the music director for more information.",
      icon: "🎵",
      color: "bg-purple-500"
    },
    {
      name: "Children's Liturgy",
      description: "Teaching children about God's word",
      meetingTime: "Sundays during 9:00 AM Mass",
      location: "Children's Chapel",
      howToJoin: "Volunteer training provided. Contact the Religious Education coordinator.",
      icon: "👶",
      color: "bg-green-500"
    },
    {
      name: "Knights of Columbus",
      description: "Catholic men's fraternal organization",
      meetingTime: "2nd Tuesday 7:30 PM",
      location: "Knights Hall",
      howToJoin: "Catholic men 18+ welcome. Contact Grand Knight for membership information.",
      icon: "⚔️",
      color: "bg-red-500"
    },
    {
      name: "Ladies Guild",
      description: "Supporting parish life through service",
      meetingTime: "1st Saturday 10:00 AM",
      location: "Parish Center",
      howToJoin: "All women welcome. Contact guild president for meeting details.",
      icon: "👩",
      color: "bg-pink-500"
    },
    {
      name: "Altar Servers",
      description: "Assisting in liturgical celebrations",
      meetingTime: "Training as needed",
      location: "Church Sanctuary",
      howToJoin: "Boys and girls grades 4+ welcome. Training provided monthly.",
      icon: "⛪",
      color: "bg-amber-500"
    },
    {
      name: "Ushers Ministry",
      description: "Welcoming and assisting parishioners",
      meetingTime: "All Masses",
      location: "Church Entrance",
      howToJoin: "Contact head usher. Training provided for new volunteers.",
      icon: "🤝",
      color: "bg-blue-500"
    },
    {
      name: "Lectors Ministry",
      description: "Proclaiming the Word of God",
      meetingTime: "Monthly training sessions",
      location: "Church Sanctuary",
      howToJoin: "Must complete lector training program. Contact liturgy coordinator.",
      icon: "📖",
      color: "bg-indigo-500"
    },
    {
      name: "Eucharistic Ministers",
      description: "Distributing Holy Communion",
      meetingTime: "All Masses",
      location: "Church Sanctuary",
      howToJoin: "Special training required. Must be confirmed Catholic in good standing.",
      icon: "🍞",
      color: "bg-yellow-500"
    }
  ];

  const handleCardHover = (index: number) => {
    setFlippedCard(index);
  };

  const handleCardLeave = () => {
    setFlippedCard(null);
  };

  return (
    <section id="ministries" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Ministries & Guilds</h2>
          <p className="text-xl text-gray-600">Discover opportunities to serve and grow in faith</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ministries.map((ministry, index) => (
            <div
              key={index}
              className="relative h-80 perspective-1000"
              onMouseEnter={() => handleCardHover(index)}
              onMouseLeave={handleCardLeave}
            >
              <div className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                flippedCard === index ? 'rotate-y-180' : ''
              }`}>
                {/* Front of Card */}
                <Card className="absolute inset-0 w-full h-full backface-hidden cursor-pointer hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 h-full flex flex-col justify-center items-center text-center">
                    <div className={`w-16 h-16 rounded-full ${ministry.color} flex items-center justify-center text-2xl mb-4`}>
                      {ministry.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{ministry.name}</h3>
                    <p className="text-gray-600">{ministry.description}</p>
                  </CardContent>
                </Card>

                {/* Back of Card */}
                <Card className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 cursor-pointer">
                  <CardContent className="p-6 h-full flex flex-col justify-center">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">{ministry.name}</h3>
                    <div className="space-y-3 text-sm">
                      <div>
                        <span className="font-semibold text-secondary">Meeting Time:</span>
                        <p className="text-gray-600">{ministry.meetingTime}</p>
                      </div>
                      <div>
                        <span className="font-semibold text-secondary">Location:</span>
                        <p className="text-gray-600">{ministry.location}</p>
                      </div>
                      <div>
                        <span className="font-semibold text-secondary">How to Join:</span>
                        <p className="text-gray-600">{ministry.howToJoin}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
};

export default MinistriesSection;
