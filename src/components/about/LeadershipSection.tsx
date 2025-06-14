
import { useState, useEffect } from 'react';

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
    { name: 'Fr. Michael Rodriguez', title: 'Pastor',            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80' },
    { name: 'Deacon John Smith',     title: 'Permanent Deacon',  image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80' },
    { name: 'Sr. Mary Catherine',    title: 'Parish Sister',     image: 'https://images.unsplash.com/photo-1494790108755-2616c6209697?auto=format&fit=crop&w=300&q=80' },
    { name: 'Mr. David Wilson',      title: 'Music Director',    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80' },
    { name: 'Mrs. Sarah Johnson',    title: 'Youth Coordinator', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80' },
    { name: 'Mr. Thomas Brown',      title: 'Facilities Manager', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80' },
    { name: 'Mrs. Lisa Martinez',    title: 'Parish Secretary',  image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80' },
    { name: 'Fr. James O\'Connor',   title: 'Associate Pastor',  image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80' },
  ];

  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-sky-500 to-sky-800 bg-clip-text text-transparent">
          {typedText}<span className="border-r-2 border-sky-800 ml-1 animate-pulse" />
        </h2>
        
        <div className="text-gray-600 text-lg text-center mb-4 max-w-4xl mx-auto">
          <p className="mb-2 font-medium">LEADERSHIP SECTION</p>
          <p className="mb-2">Meet the dedicated clergy and staff who guide our parish community in faith, worship, and service.</p>
          <p className="mb-2">Our leadership team brings together years of experience, deep spiritual wisdom, and unwavering commitment to serving God and our parishioners.</p>
          <p className="mb-2">From pastoral care to administrative excellence, each member plays a vital role in maintaining our vibrant faith community.</p>
          <p>Together, they work tirelessly to ensure that every parishioner feels welcomed, supported, and spiritually nourished.</p>
        </div>

        {/* very narrow centered container */}
        <div className="flex justify-center">
          <div className="w-full max-w-xs overflow-hidden">
            <div className="flex animate-scroll-left-50">
              {[...leadership, ...leadership].map((p, i) => (
                <div key={i} className="flex-shrink-0 w-1/2 px-0.5">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-2 rounded-full overflow-hidden shadow-lg">
                      <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-sm font-semibold text-gray-900">{p.title}</h3>
                    <p className="text-xs text-gray-600">{p.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
