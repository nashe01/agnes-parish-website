
import { useState, useEffect } from 'react';

const LeadershipSection = () => {
  const [typedText, setTypedText] = useState('');

  /* ───── typing animation for heading ───── */
  useEffect(() => {
    const full = 'Our Leadership';
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
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-sky-500 to-sky-800 bg-clip-text text-transparent">
          {typedText}<span className="border-r-2 border-sky-800 ml-1 animate-pulse" />
        </h2>

        {/* centered container with smaller cards */}
        <div className="flex justify-center">
          <div className="w-full max-w-2xl overflow-hidden">
            <div className="flex animate-scroll-left-50">
              {[...leadership, ...leadership].map((p, i) => (
                <div key={i} className="flex-shrink-0 w-1/2 px-3">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-3 rounded-full overflow-hidden shadow-lg">
                      <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
                    <p className="text-sm text-gray-600">{p.name}</p>
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
