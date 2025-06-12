import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const AboutUsSection = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const navigate = useNavigate();

  const cardContent = [
    {
      image: '/lovable-uploads/2c81f3cf-697b-4703-8a8c-047c57de5827.png',
      title: 'St. Agnes Catholic Parish',
      content:
        'Founded in 1952, St. Agnes Catholic Parish has served its community for over 70 years. From humble beginnings, it has grown into a vibrant and welcoming faith family.',
    },
    {
      image: '/lovable-uploads/333a1e52-ace4-40f6-8d59-dade5e28336c.png',
      title: 'Saint Agnes of Rome',
      content:
        'Saint Agnes was a young Roman noblewoman martyred for her faith around 304 AD. She is a symbol of purity, courage, and devotion to Christ.',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCard((prev) => (prev + 1) % cardContent.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Us</h2>
          <p className="text-xl text-gray-600">Our Faith, Our Community, Our Story</p>
        </div>

        {/* Crossfade Card Display */}
        <div className="relative max-w-5xl mx-auto h-[400px] mb-12">
          {[0, 1].map((index) => (
            <div
              key={index}
              className={`absolute inset-0 grid md:grid-cols-2 transition-opacity duration-\\[2000ms\\] ease-in-out ${
                currentCard === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              {/* Image */}
              <div className="h-[400px]">
                <img
                  src={cardContent[index].image}
                  alt={cardContent[index].title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text */}
              <div className="p-8 flex flex-col justify-center bg-white h-[400px]">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {cardContent[index].title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed line-clamp-4">
                  {cardContent[index].content}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Learn More Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Learn More About</h3>
          <div className="grid md:grid-cols-5 gap-4 mb-8">
            {[
              'Our Church',
              'Leadership',
              'Church History',
              'Saint History',
              'Sections & Guilds',
            ].map((item, index) => (
              <div key={index} className="p-4 text-center">
                <p className="font-medium text-gray-900 text-lg">{item}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <button
              onClick={() => navigate('/about')}
              className="group flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
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

