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
        'Founded in 1952, St. Agnes Catholic Parish has faithfully served its community for over 70 years. Beginning as a small congregation, it has grown into a vibrant and welcoming faith family that embraces people from all walks of life. Our parish continues to uphold the teachings of the Church while actively engaging in community outreach, spiritual growth, and fostering fellowship among parishioners.'
    },
    {
      image: '/lovable-uploads/333a1e52-ace4-40f6-8d59-dade5e28336c.png',
      title: 'Saint Agnes of Rome',
      content:
        'Saint Agnes was a young Roman noblewoman who lived in the early 4th century and was martyred around 304 AD for her unwavering faith in Christ. Remembered for her purity, courage, and devotion, Agnes is a symbol of steadfast belief and virtue. Her legacy inspires countless faithful worldwide to live lives of integrity and dedication to their spiritual calling.'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCard(prev => (prev + 1) % 2);
    }, 15000); // 15 seconds interval for slow fade

    return () => clearInterval(interval);
  }, []);

  const imageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Us</h2>
          <p className="text-xl text-gray-600">Our Faith, Our Community, Our Story</p>
        </div>

        {/* Crossfade container */}
        <div className="relative max-w-5xl mx-auto h-[400px] mb-12">
          {[0, 1].map((index) => (
            <AnimatePresence key={index}>
              {currentCard === index && (
                <motion.div
                  key={index}
                  className="absolute inset-0 grid md:grid-cols-2"
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 2 }}
                >
                  {/* Image */}
                  <motion.div className="h-[400px]" variants={imageVariants} transition={{ duration: 2 }}>
                    <img
                      src={cardContent[index].image}
                      alt={cardContent[index].title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  {/* Text section aligned at top */}
                  <motion.div
                    className="p-8 flex flex-col justify-start bg-white h-[400px]"
                    variants={textVariants}
                    transition={{ duration: 2, delay: 0.5 }}
                  >
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      {cardContent[index].title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {cardContent[index].content}
                    </p>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
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
              'Sections & Guilds'
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
