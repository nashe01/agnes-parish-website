
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CalendarCheck, Clock, BookOpenCheck } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

interface HeroContent {
  id: string;
  parish_name: string;
  welcome_text: string;
  archdiocese: string;
  hero_image_url?: string;
}

interface MassSchedule {
  id: string;
  day_type: string;
  times: string[];
  special_note?: string;
}

const HeroSection = () => {
  const [heroContent, setHeroContent] = useState<HeroContent | null>(null);
  const [massSchedules, setMassSchedules] = useState<MassSchedule[]>([]);
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetchHeroContent();
    fetchMassSchedules();
  }, []);

  const fetchHeroContent = async () => {
    const { data } = await supabase
      .from('hero_content')
      .select('*')
      .maybeSingle();
    
    if (data) {
      setHeroContent(data);
    }
  };

  const fetchMassSchedules = async () => {
    const { data } = await supabase
      .from('mass_schedules')
      .select('*')
      .eq('is_active', true)
      .order('display_order');
    
    if (data) {
      setMassSchedules(data);
    }
  };

  const parishName = heroContent?.parish_name || 'St Agnes Parish';

  useEffect(() => {
    if (currentIndex < parishName.length) {
      const timeout = setTimeout(() => {
        setDisplayText(parishName.substring(0, currentIndex + 1));
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, parishName]);

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

  const getScheduleIcon = (dayType: string) => {
    if (dayType.toLowerCase().includes('sunday')) {
      return <CalendarCheck className="text-sky-600 w-5 h-5" />;
    } else if (dayType.toLowerCase().includes('daily') || dayType.toLowerCase().includes('weekday')) {
      return <Clock className="text-sky-600 w-5 h-5" />;
    } else if (dayType.toLowerCase().includes('confession')) {
      return <BookOpenCheck className="text-sky-600 w-5 h-5" />;
    }
    return <CalendarCheck className="text-sky-600 w-5 h-5" />;
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
              src={heroContent?.hero_image_url || "/lovable-uploads/e63e83b4-2497-47f5-8891-0a8482f5ef91.png"}
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
              {heroContent?.archdiocese || 'Archdiocese of Harare'}
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
              {heroContent?.welcome_text || 'Experience faith, fellowship, and spiritual growth in our welcoming community.'}
            </motion.p>

            {/* Schedule */}
            <div className="space-y-4">
              {massSchedules.slice(0, 3).map((schedule, index) => (
                <motion.div
                  key={schedule.id}
                  className="flex items-center gap-2"
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  custom={0.6 + index * 0.2}
                >
                  {getScheduleIcon(schedule.day_type)}
                  <span className="font-bold text-sky-600">{schedule.day_type}:</span>
                  <span className="text-black">{schedule.times.join(', ')}</span>
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
