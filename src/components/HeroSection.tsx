
import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const welcomeText = 'Welcome to St. Agnes Parish';
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

  return (
    <section id="home" className="pt-16 min-h-screen flex items-center justify-center bg-gradient-to-b from-skyblue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Card className="overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Image */}
            <div className="relative h-96 lg:h-auto">
              <img 
                src="/lovable-uploads/e63e83b4-2497-47f5-8891-0a8482f5ef91.png" 
                alt="St. Agnes with Lamb"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-secondary mb-6">
                {displayText}
                <span className="inline-block w-1 h-10 bg-secondary ml-1 animate-pulse"></span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Our parish has been serving the community with faith, 
                hope, and love for over a century. We welcome all to join us in worship and fellowship as we grow together in Christ's grace.
              </p>
              <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="flex items-center text-gray-700">
                  <span className="font-semibold mr-2">Sunday Mass:</span>
                  <span>7:00 AM, 9:00 AM, 11:00 AM</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="font-semibold mr-2">Daily Mass:</span>
                  <span>6:30 AM, 12:00 PM</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <span className="font-semibold mr-2">Confession:</span>
                  <span>Saturday 4:00 PM - 5:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default HeroSection;
