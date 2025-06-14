
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const SectionsDisplay = () => {
  const [sectionsExpanded, setSectionsExpanded] = useState(false);

  const sections = [
    { name: 'Altar Servers',         image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=300&q=80', details: 'Young people serving at the altar during Mass and liturgical celebrations.' },
    { name: 'Lectors',              image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=300&q=80', details: 'Proclaiming the Word of God during Mass and other services.' },
    { name: 'Eucharistic Ministers',image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=300&q=80', details: 'Assisting with the distribution of Holy Communion.' },
    { name: 'Ushers',               image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=300&q=80', details: 'Welcoming parishioners and maintaining order during services.' },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-sky-500 to-sky-800 bg-clip-text text-transparent">Sections</h2>
        
        <p className="text-gray-600 text-lg text-center mb-12 max-w-3xl mx-auto">
          Explore the various liturgical ministries and volunteer opportunities that make our worship meaningful and welcoming.
        </p>

        {!sectionsExpanded ? (
          <div className="mb-8">
            <div className="flex overflow-hidden">
              <div className="flex animate-scroll-left-25">
                {[...sections, ...sections].map((s, i) => (
                  <div key={i} className="flex-shrink-0 mx-4">
                    <div className="w-48 h-48 rounded-lg overflow-hidden shadow-lg">
                      <img src={s.image} alt={s.name} className="w-full h-full object-cover" />
                    </div>
                    <p className="text-center mt-2 font-medium">{s.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            {sections.map((s, i) => (
              <Card key={i} className="overflow-hidden shadow-lg cursor-pointer h-64 group">
                <CardContent className="p-0 h-full">
                  <div className="relative h-full">
                    <img src={s.image} alt={s.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center">
                      <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                        <h3 className="text-lg font-bold mb-2">{s.name}</h3>
                        <p className="text-sm">{s.details}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        <div className="text-center">
          <button
            onClick={() => setSectionsExpanded(!sectionsExpanded)}
            className="bg-gradient-to-r from-sky-500 to-sky-800 hover:from-sky-600 hover:to-sky-900 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            {sectionsExpanded ? 'Show Less' : 'All Sections'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default SectionsDisplay;
