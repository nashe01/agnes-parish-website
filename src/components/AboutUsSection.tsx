
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const AboutUsSection = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCard(prev => (prev + 1) % 2);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const cardContent = [
    {
      image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'St. Agnes Catholic Parish',
      content: 'Founded in 1952, St. Agnes Catholic Parish has been a beacon of faith and community service for over 70 years. Our parish began as a small mission church serving the growing Catholic community in our neighborhood. Through the dedication of our parishioners and the guidance of devoted clergy, we have grown into a vibrant parish family that welcomes all who seek to grow in their relationship with God.'
    },
    {
      image: 'https://images.unsplash.com/photo-1587384474964-3a06ce1ce699?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Saint Agnes of Rome',
      content: 'Saint Agnes was a young Roman noblewoman who lived in the 3rd century. At age 13, she consecrated her life to God and refused marriage proposals, choosing instead to dedicate herself to Christ. During the persecution of Christians under Emperor Diocletian, Agnes was martyred for her faith around 304 AD. She is remembered as a symbol of purity, courage, and unwavering faith. Saint Agnes is the patron saint of young girls, chastity, and rape victims.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Us</h2>
          <p className="text-xl text-gray-600">Our Faith, Our Community, Our Story</p>
        </div>

        {/* Flipping Card */}
        <Card className="mb-12 overflow-hidden shadow-lg">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2 min-h-[400px]">
              <div className="relative overflow-hidden">
                <img 
                  src={cardContent[currentCard].image}
                  alt={cardContent[currentCard].title}
                  className="w-full h-full object-cover transition-all duration-1000"
                />
              </div>
              <div className="p-8 flex flex-col justify-center bg-white">
                <h3 className="text-3xl font-bold text-gray-900 mb-6 transition-all duration-500">
                  {cardContent[currentCard].title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed transition-all duration-500">
                  {cardContent[currentCard].content}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Learn More Points */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Learn More About</h3>
          <div className="grid md:grid-cols-5 gap-4 mb-8">
            {[
              'Our Church',
              'Leadership',
              'Church History',
              'Saint History',
              'Sections & Guilds'
            ].map((item, index) => (
              <div key={index} className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <p className="font-medium text-gray-900">{item}</p>
              </div>
            ))}
          </div>

          {/* Learn More Button */}
          <div className="flex justify-center">
            <button
              onClick={() => navigate('/about')}
              className="group flex items-center bg-secondary text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-secondary/90 transition-all duration-300 transform hover:scale-105"
            >
              Learn More
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
