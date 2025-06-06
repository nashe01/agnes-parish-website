import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CalendarCheck, Clock, BookOpenCheck } from 'lucide-react';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const welcomeText = 'St Agnes Parish';
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < welcomeText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(welcomeText.substring(0, currentIndex + 1));
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, welcomeText]);

  const renderStyledText = () => (
    <span className="bg-gradient-to-r from-sky-500 to-sky-800 bg-clip-text text-transparent">
      {displayText}
    </span>
  );

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
    }),
  };

  return (
    <section
      id="home"
      className="pt-32 min-h-screen flex items-center justify-center bg-gradient-to-b from-skyblue-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <motion.div
            className="relative h-[28rem] lg:h-[38rem] -mt-24 overflow-hidden flex items-center justify-center"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            <img
              src="/lovable-uploads/e63e83b4-2497-47f5-8891-0a8482f5ef91.png"
              alt="St. Agnes with Lamb"
              className="w-full h-full object-contain object-center"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            className="flex flex-col justify-center"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0.2}
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-black mb-4 text-center">
              Archdiocese of Harare
            </h2>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-center">
              {renderStyledText()}
              <span className="inline-block w-1 h-12 bg-sky-600 ml-1 animate-pulse"></span>
            </h1>
            <motion.p
              className="text-lg text-gray-600 mb-8 leading-relaxed"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={0.4}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              Our parish has been serving the community with faith, hope, and
              love for over a century. We welcome all to join us in worship and
              fellowship as we grow together in Christ's grace.
            </motion.p>

            {/* Schedule */}
            <div className="space-y-4">
              {[
                {
                  label: 'Sunday Mass:',
                  icon: <CalendarCheck className="text-sky-600 w-5 h-5" />,
                  time: '7:00 AM, 9:00 AM, 11:00 AM',
                },
                {
                  label: 'Daily Mass:',
                  icon: <Clock className="text-sky-600 w-5 h-5" />,
                  time: '6:30 AM, 12:00 PM',
                },
                {
                  label: 'Confession:',
                  icon: <BookOpenCheck className="text-sky-600 w-5 h-5" />,
                  time: 'Saturday 4:00 PM - 5:00 PM',
                },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  className="flex items-center gap-2"
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  custom={0.6 + index * 0.2}
                >
                  {item.icon}
                  <span className="font-bold text-sky-600">{item.label}</span>
                  <span className="text-black">{item.time}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
