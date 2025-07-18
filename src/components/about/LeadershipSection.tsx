
import { useState, useEffect } from 'react';
import { SectionFadeIn } from '../SectionFadeIn';

const LeadershipSection = () => {
  const [typedText, setTypedText] = useState('');

  /* ───── typing animation for heading ───── */
  useEffect(() => {
    const full = 'Our Spiritual Leaders';
    let i = 0;
    const id = setInterval(() => {
      setTypedText(full.slice(0, ++i));
      if (i === full.length) clearInterval(id);
    }, 120);
    return () => clearInterval(id);
  }, []);

  const leadership = [
    { name: 'Fr. M Rodriguez', title: 'Parish Priest', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80' },
    { name: 'Fr. James O\'Connor', title: 'Deputy Priest', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80' },
    { name: 'Deacon John Smith', title: 'Permanent Deacon', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80' },
    { name: 'Sr. Mary Catherine', title: 'Parish Sister', image: 'https://images.unsplash.com/photo-1494790108755-2616c6209697?auto=format&fit=crop&w=300&q=80' },
    { name: 'Mr. David Wilson', title: 'Music Director', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80' },
    { name: 'Mrs. Sarah Johnson', title: 'Youth Coordinator', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80' },
    { name: 'Mr. Thomas Brown', title: 'Facilities Manager', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80' },
    { name: 'Mrs. Lisa Martinez', title: 'Parish Secretary', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80' },
    { name: 'Mr. Robert Garcia', title: 'Maintenance Staff', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80' },
  ];

  return (
    <section className="py-12 bg-gradient-to-br from-sky-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-sky-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-sky-100 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Introduction */}
          <SectionFadeIn direction="left" delay={0}>
            <div className="lg:pr-8">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-sky-600 to-blue-800 bg-clip-text text-transparent">
                {typedText}<span className="border-r-2 border-sky-800 ml-1 animate-pulse" />
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Meet the dedicated clergy and staff who guide our parish community in faith, worship, and service. 
                Our spiritual leaders are committed to nurturing the spiritual growth of our community and providing 
                guidance in all aspects of parish life.
              </p>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Join Our Community</h3>
                <p className="text-gray-700 mb-6">
                  Our spiritual leaders are here to guide you on your faith journey. 
                  Reach out to any of our clergy or staff members for support, guidance, or to learn more about our parish.
                </p>
                <button className="bg-gradient-to-r from-sky-600 to-blue-700 text-white px-6 py-3 rounded-full font-semibold hover:from-sky-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Contact Our Team
                </button>
              </div>
            </div>
          </SectionFadeIn>

          {/* Right Column - Leadership Grid */}
          <SectionFadeIn direction="right" delay={0.2}>
            <div className="flex flex-col items-center w-full mt-16">
              {/* Row 1: 2 leaders */}
              <div className="flex justify-center mb-4 w-full">
                <div className="flex space-x-6 md:space-x-8">
                  {leadership.slice(0, 2).map((leader, index) => (
                    <div key={leader.name} className="relative group">
                      <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden shadow-lg ring-3 ring-white transform transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl">
                        <img 
                          src={leader.image} 
                          alt={leader.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-sm px-2 py-1 text-center min-w-[120px]">
                        <h4 className="font-medium text-gray-900 text-xs">{leader.title}</h4>
                        <p className="text-gray-600 text-xs">{leader.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Row 2: 3 leaders */}
              <div className="flex justify-center mb-4 w-full">
                <div className="flex space-x-6 md:space-x-8">
                  {leadership.slice(2, 5).map((leader, index) => (
                    <div key={leader.name} className="relative group">
                      <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden shadow-lg ring-3 ring-white transform transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl">
                        <img 
                          src={leader.image} 
                          alt={leader.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-sm px-2 py-1 text-center min-w-[120px]">
                        <h4 className="font-medium text-gray-900 text-xs">{leader.title}</h4>
                        <p className="text-gray-600 text-xs">{leader.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Row 3: 4 leaders */}
              <div className="flex justify-center w-full">
                <div className="flex space-x-6 md:space-x-8">
                  {leadership.slice(5, 9).map((leader, index) => (
                    <div key={leader.name} className="relative group">
                      <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden shadow-lg ring-3 ring-white transform transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl">
                        <img 
                          src={leader.image} 
                          alt={leader.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-sm px-2 py-1 text-center min-w-[120px]">
                        <h4 className="font-medium text-gray-900 text-xs">{leader.title}</h4>
                        <p className="text-gray-600 text-xs">{leader.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SectionFadeIn>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
