import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, User, FileText, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionFadeIn } from './SectionFadeIn';

const AboutUsSection = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const navigate = useNavigate();

  const cardContent = [
    {
      image: '/lovable-uploads/2c81f3cf-697b-4703-8a8c-047c57de5827.png',
      title: 'St. Agnes Catholic Parish',
      content: `Founded in 1952, St. Agnes Catholic Parish has served its community for over 70 years. From humble beginnings, it has grown into a vibrant and welcoming faith family.

      Over the decades, the parish has witnessed generations of faithful come together for worship, service, and fellowship. What started as a small mission has become a cornerstone of spiritual life in the region.

      Through numerous outreach programs, events, and sacraments, St. Agnes continues to nurture both the spiritual and social well-being of its congregation and broader community.`
    },
    {
      image: '/lovable-uploads/333a1e52-ace4-40f6-8d59-dade5e28336c.png',
      title: 'Saint Agnes of Rome',
      content: `Saint Agnes was a young Roman noblewoman martyred for her faith around 304 AD. She is a symbol of purity, courage, and devotion to Christ.

      At just 12 or 13 years old, Agnes stood firm in her beliefs during a time of intense Christian persecution in Rome. Despite pressure and threats, she refused to renounce her faith or marry a Roman official.

      Her bravery and unwavering commitment to Christ have made her one of the most venerated virgin martyrs in Catholic tradition. Her feast day is celebrated on January 21st.`
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCard((prev) => (prev + 1) % cardContent.length);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  // Motion variants for staggered list
  const listVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-sky-500">
            About Us
          </h2>
          <p className="text-xl text-gray-600">Our Faith, Our Community, Our Story</p>
        </div>

        {/* Crossfade Cards */}
        <div className="relative max-w-5xl mx-auto h-[460px] overflow-hidden mb-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentCard}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2 }}
              className="absolute inset-0 grid md:grid-cols-2"
            >
              {/* Image Section */}
              <div className="h-[460px]">
                <img
                  src={cardContent[currentCard].image}
                  alt={cardContent[currentCard].title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text Section */}
              <div className="p-8 flex flex-col justify-start bg-white h-[460px]">
                <motion.h3
                  className="text-3xl font-bold mb-4 text-sky-500"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2 }}
                >
                  {cardContent[currentCard].title}
                </motion.h3>
                <motion.p
                  className="text-gray-700 text-lg leading-relaxed whitespace-pre-line"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.5, delay: 0.3 }}
                >
                  {cardContent[currentCard].content}
                </motion.p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Learn More Button */}
        <div className="flex justify-center mt-16">
          <button
            onClick={() => navigate('/about')}
            className="group flex items-center bg-gradient-to-r from-sky-500 to-sky-800 text-white hover:from-sky-600 hover:to-sky-900 px-6 py-2 rounded-full font-semibold text-base transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Learn More About
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>

        {/* Animated Bullet Notes */}
        <ul className="mt-6 max-w-5xl mx-auto space-y-3 text-gray-900 text-base">
          <SectionFadeIn direction="up" delay={0}>
            <li className="flex items-start gap-2">
              <User className="w-5 h-5 text-sky-600 mt-1" />
              <span>Know our spiritual leaders</span>
            </li>
          </SectionFadeIn>
          <SectionFadeIn direction="up" delay={0.08}>
            <li className="flex items-start gap-2">
              <FileText className="w-5 h-5 text-sky-600 mt-1" />
              <span>Download PDFs of our full parish history</span>
            </li>
          </SectionFadeIn>
          <SectionFadeIn direction="up" delay={0.16}>
            <li className="flex items-start gap-2">
              <Users className="w-5 h-5 text-sky-600 mt-1" />
              <span>Explore the various guilds and sections of the church</span>
            </li>
          </SectionFadeIn>
        </ul>
      </div>
    </section>
  );
};

export default AboutUsSection;
