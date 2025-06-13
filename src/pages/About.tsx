import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Download, ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';

const About = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [sectionsExpanded, setSectionsExpanded] = useState(false);
  const [guildsExpanded, setGuildsExpanded] = useState(false);
  const [typedText, setTypedText] = useState('');
  const navigate = useNavigate();

  /* ───── page should open at top ───── */
  useEffect(() => window.scrollTo(0, 0), []);

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

  /* ───── data ───── */
  const leadership = [
    { name: 'Fr. Michael Rodriguez', title: 'Pastor',            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80' },
    { name: 'Deacon John Smith',     title: 'Permanent Deacon',  image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80' },
    { name: 'Sr. Mary Catherine',    title: 'Parish Sister',     image: 'https://images.unsplash.com/photo-1494790108755-2616c6209697?auto=format&fit=crop&w=300&q=80' },
    { name: 'Mr. David Wilson',      title: 'Music Director',    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80' },
  ];

  const sections = [
    { name: 'Altar Servers',         image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=300&q=80', details: 'Young people serving at the altar during Mass and liturgical celebrations.' },
    { name: 'Lectors',              image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=300&q=80', details: 'Proclaiming the Word of God during Mass and other services.' },
    { name: 'Eucharistic Ministers',image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=300&q=80', details: 'Assisting with the distribution of Holy Communion.' },
    { name: 'Ushers',               image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=300&q=80', details: 'Welcoming parishioners and maintaining order during services.' },
  ];

  const guilds = [
    { name: 'Knights of Columbus',      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=300&q=80', details: 'Catholic men united in charity, unity, fraternity, and patriotism.' },
    { name: 'Catholic Women\'s League', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80', details: 'Supporting faith, service to the church, and community outreach.' },
    { name: 'Youth Ministry',           image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=300&q=80', details: 'Faith formation and fellowship for teenagers and young adults.' },
    { name: 'Senior Guild',             image: 'https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&w=300&q=80', details: 'Fellowship and activities for our senior parishioners.' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* ───── extra styles for scrolling tracks ───── */}
      <style>{`
        @keyframes scroll-left-50 {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-left-50 {
          animation: scroll-left-50 28s linear infinite;
        }
      `}</style>

      {/* ───── MAIN ───── */}
      <main className="pt-20">

        {/* Back to Home */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center bg-gradient-to-r from-sky-500 to-sky-800 hover:from-sky-600 hover:to-sky-900 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back&nbsp;to&nbsp;Home
          </button>
        </div>

        {/* ───── LEADERSHIP (infinite scroll, two visible) ───── */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-sky-500 to-sky-800 bg-clip-text text-transparent">
              {typedText}<span className="border-r-2 border-sky-800 ml-1 animate-pulse" />
            </h2>

            {/* viewport shows only two cards */}
            <div className="overflow-hidden">
              <div className="flex animate-scroll-left-50">
                {[...leadership, ...leadership].map((p, i) => (
                  <div key={i} className="flex-shrink-0 w-1/2 md:w-1/4 px-4">
                    <div className="text-center">
                      <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden shadow-lg">
                        <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
                      <p className="text-gray-600">{p.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ───── HISTORY (unchanged) ───── */}
        {/* Your two history cards go here – code unchanged from earlier version. */}
        {/* --- snip for brevity; keep the Saint Agnes + Church History cards exactly as before --- */}

        {/* ───── SECTIONS ───── */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Sections</h2>

            {!sectionsExpanded ? (
              <div className="mb-8">
                <div className="flex overflow-hidden">
                  <div className="flex animate-scroll-left-50">
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
                {sectionsExpanded ? 'Show Less' : 'All Sections'}
              </button>
            </div>
          </div>
        </section>

        {/* ───── GUILDS ───── */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Guilds</h2>

            {!guildsExpanded ? (
              <div className="mb-8">
                <div className="flex overflow-hidden">
                  <div className="flex animate-scroll-left-50">
                    {[...guilds, ...guilds].map((g, i) => (
                      <div key={i} className="flex-shrink-0 mx-4">
                        <div className="w-48 h-48 rounded-lg overflow-hidden shadow-lg">
                          <img src={g.image} alt={g.name} className="w-full h-full object-cover" />
                        </div>
                        <p className="text-center mt-2 font-medium">{g.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                {guilds.map((g, i) => (
                  <Card key={i} className="overflow-hidden shadow-lg cursor-pointer h-64 group">
                    <CardContent className="p-0 h-full">
                      <div className="relative h-full">
                        <img src={g.image} alt={g.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center">
                          <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                            <h3 className="text-lg font-bold mb-2">{g.name}</h3>
                            <p className="text-sm">{g.details}</p>
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
                onClick={() => setGuildsExpanded(!guildsExpanded)}
                className="bg-gradient-to-r from-sky-500 to-sky-800 hover:from-sky-600 hover:to-sky-900 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                {guildsExpanded ? 'Show Less' : 'All Guilds'}
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
