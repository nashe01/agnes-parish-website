import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Download, ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
// ‼️ Footer removed as requested

const About = () => {
  /* ---------- local state ---------- */
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [sectionsExpanded, setSectionsExpanded] = useState(false);
  const [guildsExpanded, setGuildsExpanded] = useState(false);
  const [typedText, setTypedText] = useState('');           // typing effect
  const navigate = useNavigate();

  /* ---------- scroll to top on mount ---------- */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  /* ---------- heading typing effect ---------- */
  useEffect(() => {
    const full = 'Our Leadership';
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(full.slice(0, i + 1));
      i += 1;
      if (i === full.length) clearInterval(interval);
    }, 120);
    return () => clearInterval(interval);
  }, []);

  /* ---------- dummy data ---------- */
  const leadership = [
    { name: 'Fr. Michael Rodriguez', title: 'Pastor', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80' },
    { name: 'Deacon John Smith',     title: 'Permanent Deacon', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80' },
    { name: 'Sr. Mary Catherine',    title: 'Parish Sister',    image: 'https://images.unsplash.com/photo-1494790108755-2616c6209697?auto=format&fit=crop&w=300&q=80' },
    { name: 'Mr. David Wilson',      title: 'Music Director',   image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80' }
  ];

  const sections = [
    { name: 'Altar Servers',        image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=300&q=80', details: 'Young people serving at the altar during Mass and liturgical celebrations.' },
    { name: 'Lectors',              image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=300&q=80', details: 'Proclaiming the Word of God during Mass and other services.' },
    { name: 'Eucharistic Ministers',image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=300&q=80', details: 'Assisting with the distribution of Holy Communion.' },
    { name: 'Ushers',               image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=300&q=80', details: 'Welcoming parishioners and maintaining order during services.' }
  ];

  const guilds = [
    { name: 'Knights of Columbus',     image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=300&q=80', details: 'Catholic men united in charity, unity, fraternity, and patriotism.' },
    { name: 'Catholic Women\'s League',image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80', details: 'Supporting faith, service to the church, and community outreach.' },
    { name: 'Youth Ministry',          image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=300&q=80', details: 'Faith formation and fellowship for teenagers and young adults.' },
    { name: 'Senior Guild',            image: 'https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&w=300&q=80', details: 'Fellowship and activities for our senior parishioners.' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* -------- MAIN -------- */}
      <main className="pt-20">

        {/* Back Button */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center bg-gradient-to-r from-sky-500 to-sky-800 hover:from-sky-600 hover:to-sky-900 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back&nbsp;to&nbsp;Home
          </button>
        </div>

        {/* Leadership Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-sky-500 to-sky-800 bg-clip-text text-transparent">
              {typedText}
              <span className="border-r-2 border-sky-800 ml-1 animate-pulse" />
            </h2>

            <div className="grid md:grid-cols-4 gap-8">
              {leadership.map((person, i) => (
                <div key={i} className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden shadow-lg">
                    <img src={person.image} alt={person.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{person.title}</h3>
                  <p className="text-gray-600">{person.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- History Section ---------- */}
        {/* (unchanged except for typing imports/state above) */}
        {/* ... existing history cards code ... */}

        {/* ---------- Sections ---------- */}
        {/* ... existing Sections code ... */}

        {/* ---------- Guilds ---------- */}
        {/* ... existing Guilds code ... */}

      </main>
      {/* Footer removed */}
    </div>
  );
};

export default About;
