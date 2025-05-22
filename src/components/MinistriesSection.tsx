
import { Card } from '@/components/ui/card';

const MinistriesSection = () => {
  const ministries = [
    {
      name: "Youth Ministry",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop"
    },
    {
      name: "Choir Ministry",
      image: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=800&h=600&fit=crop"
    },
    {
      name: "Children's Liturgy",
      image: "https://images.unsplash.com/photo-1560541919-eb5c2da6a5a3?w=800&h=600&fit=crop"
    },
    {
      name: "Knights of Columbus",
      image: "https://images.unsplash.com/photo-1607703703674-df96af81dffa?w=800&h=600&fit=crop"
    },
    {
      name: "Ladies Guild",
      image: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=800&h=600&fit=crop"
    },
    {
      name: "Altar Servers",
      image: "https://images.unsplash.com/photo-1586516439128-ea7a5ade0a11?w=800&h=600&fit=crop"
    },
    {
      name: "Ushers Ministry",
      image: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=800&h=600&fit=crop"
    },
    {
      name: "Lectors Ministry",
      image: "https://images.unsplash.com/photo-1530367899272-065937aaba7d?w=800&h=600&fit=crop"
    }
  ];

  return (
    <section id="ministries" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">Ministries & Guilds</h2>
          <p className="text-xl text-gray-600">Discover opportunities to serve and grow in faith</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {ministries.map((ministry, index) => (
            <Card 
              key={index}
              className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-64"
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default MinistriesSection;
