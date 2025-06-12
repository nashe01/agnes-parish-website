import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AboutUsSection = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const navigate = useNavigate();

  const cardContent = [
    {
      image: '/lovable-uploads/2c81f3cf-697b-4703-8a8c-047c57de5827.png',
      title: 'St. Agnes Catholic Parish',
      content:
        'Founded in 1952, St. Agnes Catholic Parish has served its community for over 70 years. From humble beginnings, it has grown into a vibrant and welcoming faith family. Our parish is a beacon of hope, faith, and service, bringing together people of all ages and backgrounds to grow spiritually and serve the community.'
    },
    {
      image: '/lovable-uploads/333a1e52-ace4-40f6-8d59-dade5e28336c.png',
      title: 'Saint Agnes of Rome',
      content:
        'Saint Agnes was a young Roman noblewoman martyred for her faith around 304 AD. She is a symbol of purity, courage, and devotion to Christ. Her story inspires countless believers to stand firm in their faith and to live lives of holiness and charity.'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCard(prev => (prev + 1) % cardContent.length);
    }, 15000); // 15 seconds

    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 2 } },
    exit: { opacity: 0, transition: { duration: 2 } }
  };

  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 2 } },
    exit: { opacity: 0, y: -20, transition: { duration: 2 } }
  };

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Us Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4" style={{ color: 'rgb(14, 165, 233)' }}>
            About Us
          </h2>
          <p className="text-xl text-gray-600">Our Faith, Our Community, Our Story</p>
        </div>

        {/* Cards container */}
        <div className="relative max-w-5xl mx-auto h-[400px] mb-12">
          <AnimatePresence mode="wait">
            {cardContent.map((card, index) =>
              index === currentCard ? (
                <motion.div
                  key={card.title}
                  className="absolute inset-0 grid md:grid-cols-2"
                  variants={containerVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  {/* Image */}
                  <div className="h-[400px]">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Text - pushed up */}
                  <motion.div
                    className="p-8 flex flex-col justify-start bg-white h-[400px]"
                    variants={textVariants}
                    key={`text-${card.title}`}
                  >
                    <h3 className="text-3xl font-bold mb-4" style={{ color: 'rgb(14, 165, 233)' }}>
                      {card.title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed line-clamp-6">
                      {card.content}
                    </p>
                  </motion.div>
                </motion.div>
              ) : null
            )}
          </AnimatePresence>
        </div>

        {/* Learn More Button */}
        <div className="flex justify-center">
          <button
            onClick={() => navigate('/about')}
            className="group flex items-center bg-gradient-to-r from-sky-500 to-sky-800 text-white hover:from-sky-600 hover:to-sky-900 px-6 py-2 rounded-full font-semibold text-base transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Learn More
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
