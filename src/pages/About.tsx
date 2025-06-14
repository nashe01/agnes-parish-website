import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
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

  const historyData = {
    stAgnes: {
      title: "Saint Agnes of Rome",
      image: "/lovable-uploads/333a1e52-ace4-40f6-8d59-dade5e28336c.png",
      history: `Saint Agnes was a young Roman noblewoman martyred for her faith around 304 AD during the reign of Emperor Diocletian. She is venerated as one of the most important virgin martyrs in the Catholic Church and is a symbol of purity, courage, and unwavering devotion to Christ.

Born into a wealthy Christian family in Rome, Agnes was known for her exceptional beauty and intelligence. Despite her young age of only 12 or 13 years, she had already consecrated her virginity to God and refused all suitors who sought her hand in marriage.

During the intense persecution of Christians under Diocletian, Agnes was denounced as a Christian. When brought before the Roman prefect, she fearlessly proclaimed her faith and refused to sacrifice to the Roman gods. Various tortures were attempted, but according to tradition, she remained unharmed through divine intervention.

The prefect's son fell in love with her and tried to force her into marriage, but Agnes remained steadfast in her commitment to Christ. Her courage and faith in the face of persecution inspired many Romans to convert to Christianity.

Agnes was ultimately martyred by sword, becoming one of the youngest saints in the Catholic Church. Her feast day is celebrated on January 21st, and she is often depicted with a lamb, symbolizing her purity and gentleness.

She is the patron saint of young girls, rape victims, and gardeners. Her example continues to inspire Christians worldwide to remain faithful to their beliefs despite persecution or pressure to compromise their values.

The name "Agnes" comes from the Greek word "hagnos," meaning "pure" or "holy," which perfectly encapsulates her life and witness. Her tomb in Rome became a place of pilgrimage, and a basilica was built over her burial site by Emperor Constantine's daughter.

Many parishes and institutions worldwide bear her name, including our own St. Agnes Catholic Parish, which strives to embody her spirit of faithfulness, purity, and dedication to Christ.`
    },
    church: {
      title: "St. Agnes Catholic Parish",
      image: "/lovable-uploads/2c81f3cf-697b-4703-8a8c-047c57de5827.png",
      history: `St. Agnes Catholic Parish was founded in 1952 as a small mission church to serve the growing Catholic community in our region. What began as a humble wooden structure with just 50 founding families has grown into a vibrant parish serving over 2,000 families today.

The original church building was constructed through the dedicated efforts of parishioners who donated not only their money but also their time and labor. Father Thomas McCarthy, our founding pastor, led the community with vision and determination, organizing fundraising events and building committees that would lay the foundation for our thriving parish.

In 1965, as the community continued to grow, construction began on our current church building. The beautiful stone structure was designed in the traditional Gothic Revival style, featuring stunning stained glass windows that were crafted by local artisans and donated by parish families in memory of their loved ones.

The 1970s saw the addition of our parish hall and education center, providing space for religious education classes, community gatherings, and social events. This period marked the beginning of many ministries and organizations that continue to serve our community today.

During the 1980s, our parish underwent significant liturgical renovations following the Second Vatican Council, updating the sanctuary to better reflect the reformed liturgy while maintaining the reverent and beautiful atmosphere that defines our worship space.

The 1990s brought technological updates and accessibility improvements, including the installation of our current sound system and the addition of wheelchair accessibility throughout the facility. Our parish school was also established during this decade, providing Catholic education for children from kindergarten through eighth grade.

In the new millennium, we have continued to grow and evolve, adding modern amenities while preserving our traditional character. Our recent renovations include updated lighting, climate control, and the beautiful new Stations of the Cross that were blessed in 2018.

Throughout our history, St. Agnes Parish has been blessed with dedicated pastors, devoted parishioners, and a strong sense of community that transcends generations. We have weathered challenges together, celebrated milestones, and continued to be a beacon of faith in our community.

Today, we honor our past while looking toward the future, committed to serving God and our neighbors with the same spirit of faith, hope, and love that has guided us for over 70 years.`
    }
  };

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
        .flip-card {
          perspective: 1000px;
        }
        .flip-card-inner {
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }
        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }
        .flip-card-front, .flip-card-back {
          backface-visibility: hidden;
        }
        .flip-card-back {
          transform: rotateY(180deg);
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

        {/* ───── HISTORY CARDS ───── */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Saint Agnes Card */}
              <div className="flip-card h-96">
                <div className="flip-card-inner relative w-full h-full">
                  {/* Front */}
                  <div className="flip-card-front absolute w-full h-full">
                    <Card className="h-full overflow-hidden shadow-lg">
                      <CardContent className="p-0 h-full">
                        <div className="relative h-full">
                          <img 
                            src={historyData.stAgnes.image} 
                            alt={historyData.stAgnes.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                            <div className="p-6 text-white">
                              <h3 className="text-2xl font-bold">{historyData.stAgnes.title}</h3>
                              <p className="text-sm opacity-90">Hover to learn more about our patron saint</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Back */}
                  <div className="flip-card-back absolute w-full h-full">
                    <Card className="h-full bg-gradient-to-br from-sky-50 to-sky-100">
                      <CardContent className="p-6 h-full flex flex-col">
                        <h3 className="text-xl font-bold text-sky-800 mb-4">{historyData.stAgnes.title}</h3>
                        <ScrollArea className="flex-1 mb-4">
                          <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                            {historyData.stAgnes.history}
                          </p>
                        </ScrollArea>
                        <button className="flex items-center justify-center bg-gradient-to-r from-sky-500 to-sky-800 hover:from-sky-600 hover:to-sky-900 text-white px-4 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                          <Download className="w-4 h-4 mr-2" />
                          Download Full History PDF
                        </button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>

              {/* Church History Card */}
              <div className="flip-card h-96">
                <div className="flip-card-inner relative w-full h-full">
                  {/* Front */}
                  <div className="flip-card-front absolute w-full h-full">
                    <Card className="h-full overflow-hidden shadow-lg">
                      <CardContent className="p-0 h-full">
                        <div className="relative h-full">
                          <img 
                            src={historyData.church.image} 
                            alt={historyData.church.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                            <div className="p-6 text-white">
                              <h3 className="text-2xl font-bold">{historyData.church.title}</h3>
                              <p className="text-sm opacity-90">Hover to discover our parish history</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Back */}
                  <div className="flip-card-back absolute w-full h-full">
                    <Card className="h-full bg-gradient-to-br from-sky-50 to-sky-100">
                      <CardContent className="p-6 h-full flex flex-col">
                        <h3 className="text-xl font-bold text-sky-800 mb-4">{historyData.church.title}</h3>
                        <ScrollArea className="flex-1 mb-4">
                          <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                            {historyData.church.history}
                          </p>
                        </ScrollArea>
                        <button className="flex items-center justify-center bg-gradient-to-r from-sky-500 to-sky-800 hover:from-sky-600 hover:to-sky-900 text-white px-4 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                          <Download className="w-4 h-4 mr-2" />
                          Download Full History PDF
                        </button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

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
