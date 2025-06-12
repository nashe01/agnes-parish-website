
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Download, ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [sectionsExpanded, setSectionsExpanded] = useState(false);
  const [guildsExpanded, setGuildsExpanded] = useState(false);
  const navigate = useNavigate();

  const leadership = [
    {
      name: 'Fr. Michael Rodriguez',
      title: 'Pastor',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
    },
    {
      name: 'Deacon John Smith',
      title: 'Permanent Deacon',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
    },
    {
      name: 'Sr. Mary Catherine',
      title: 'Parish Sister',
      image: 'https://images.unsplash.com/photo-1494790108755-2616c6209697?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
    },
    {
      name: 'Mr. David Wilson',
      title: 'Music Director',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
    }
  ];

  const sections = [
    { name: 'Altar Servers', image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', details: 'Young people serving at the altar during Mass and liturgical celebrations.' },
    { name: 'Lectors', image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', details: 'Proclaiming the Word of God during Mass and other services.' },
    { name: 'Eucharistic Ministers', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', details: 'Assisting with the distribution of Holy Communion.' },
    { name: 'Ushers', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', details: 'Welcoming parishioners and maintaining order during services.' }
  ];

  const guilds = [
    { name: 'Knights of Columbus', image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', details: 'Catholic men united in charity, unity, fraternity, and patriotism.' },
    { name: 'Catholic Women\'s League', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', details: 'Supporting faith, service to the church, and community outreach.' },
    { name: 'Youth Ministry', image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', details: 'Faith formation and fellowship for teenagers and young adults.' },
    { name: 'Senior Guild', image: 'https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80', details: 'Fellowship and activities for our senior parishioners.' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        {/* Back Button */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </button>
        </div>

        {/* Leadership Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Our Leadership</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {leadership.map((person, index) => (
                <div key={index} className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden shadow-lg">
                    <img 
                      src={person.image}
                      alt={person.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{person.title}</h3>
                  <p className="text-gray-600">{person.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">Peek Into History</h2>
            <p className="text-center text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
              Hover on the picture with history you want and press download to get full history PDF.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* St. Agnes History Card */}
              <Card
                className="overflow-hidden shadow-lg cursor-pointer h-96"
                onMouseEnter={() => setHoveredCard('saint')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <CardContent className="p-0 h-full">
                  <div className="relative h-full">
                    {hoveredCard === 'saint' ? (
                      <div className="h-full bg-white p-6 flex flex-col justify-between opacity-0 animate-fade-in">
                        <div className="overflow-y-auto">
                          <h3 className="text-2xl font-bold mb-4">Saint Agnes History</h3>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            Saint Agnes of Rome (c. 291 – c. 304) was a member of the Roman nobility raised in a Christian family. 
                            She lived during the reign of the Roman Emperor Diocletian, who led the last major persecution of Christians 
                            in the Roman Empire. At the age of twelve or thirteen, Agnes made a vow of virginity and consecrated 
                            herself to God. When she was approached by suitors, she refused them all, declaring that she was already 
                            betrothed to Christ. Her rejection of a high-ranking Roman official's son led to her persecution. 
                            She was stripped and dragged naked through the streets to a brothel, but her hair miraculously grew to 
                            cover her body. When the son of the prefect attempted to rape her, he was struck blind or dead. 
                            Agnes was then sentenced to death. The first attempt to burn her failed when the flames parted around her. 
                            She was finally beheaded or stabbed in the throat. Saint Agnes became one of the most-venerated virgin 
                            martyrs of Christian antiquity. She is the patron saint of chastity, gardeners, girls, engaged couples, 
                            rape victims, and virgins.
                          </p>
                        </div>
                        <button className="mt-4 flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                          <Download className="w-4 h-4 mr-2" />
                          Download Full History PDF
                        </button>
                      </div>
                    ) : (
                      <div className="h-full relative">
                        <img 
                          src="/lovable-uploads/333a1e52-ace4-40f6-8d59-dade5e28336c.png"
                          alt="Saint Agnes"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                          <h3 className="text-white text-2xl font-bold">Saint Agnes History</h3>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Church History Card */}
              <Card
                className="overflow-hidden shadow-lg cursor-pointer h-96"
                onMouseEnter={() => setHoveredCard('church')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <CardContent className="p-0 h-full">
                  <div className="relative h-full">
                    {hoveredCard === 'church' ? (
                      <div className="h-full bg-white p-6 flex flex-col justify-between opacity-0 animate-fade-in">
                        <div className="overflow-y-auto">
                          <h3 className="text-2xl font-bold mb-4">Church History</h3>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            St. Agnes Catholic Parish was established in 1952 by Archbishop Thomas O'Brien to serve the growing 
                            Catholic community in our neighborhood. The parish began with a small wooden chapel that could seat 
                            only 100 people. Under the leadership of our founding pastor, Fr. Joseph Murphy, the parish grew rapidly. 
                            By 1965, the current church building was constructed, featuring beautiful stained glass windows and 
                            a 200-seat capacity. The parish school was added in 1970, providing Catholic education for children 
                            from kindergarten through eighth grade. Throughout the 1980s and 1990s, the parish expanded its 
                            ministries and community outreach programs. The parish hall was built in 1995, and major renovations 
                            were completed in 2010, including the installation of new lighting, sound systems, and accessibility 
                            features. Today, St. Agnes Parish serves over 1,200 families and continues to be a cornerstone of 
                            faith and community service in our area. Our rich history is marked by the dedication of numerous 
                            priests, deacons, religious sisters, and lay volunteers who have shaped our parish into the vibrant 
                            community it is today.
                          </p>
                        </div>
                        <button className="mt-4 flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                          <Download className="w-4 h-4 mr-2" />
                          Download Full History PDF
                        </button>
                      </div>
                    ) : (
                      <div className="h-full relative">
                        <img 
                          src="/lovable-uploads/2c81f3cf-697b-4703-8a8c-047c57de5827.png"
                          alt="Church Building"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                          <h3 className="text-white text-2xl font-bold">Church History</h3>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Sections */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Sections</h2>
            
            {!sectionsExpanded ? (
              <div className="mb-8">
                <div className="flex overflow-hidden">
                  <div className="flex animate-scroll-left">
                    {[...sections, ...sections].map((section, index) => (
                      <div key={index} className="flex-shrink-0 mx-4">
                        <div className="w-48 h-48 rounded-lg overflow-hidden shadow-lg">
                          <img 
                            src={section.image}
                            alt={section.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p className="text-center mt-2 font-medium">{section.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                {sections.map((section, index) => (
                  <Card 
                    key={index} 
                    className="overflow-hidden shadow-lg cursor-pointer h-64 group"
                  >
                    <CardContent className="p-0 h-full">
                      <div className="relative h-full">
                        <img 
                          src={section.image}
                          alt={section.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center">
                          <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                            <h3 className="text-lg font-bold mb-2">{section.name}</h3>
                            <p className="text-sm">{section.details}</p>
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
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                {sectionsExpanded ? 'Show Less' : 'All Sections'}
              </button>
            </div>
          </div>
        </section>

        {/* Guilds */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Guilds</h2>
            
            {!guildsExpanded ? (
              <div className="mb-8">
                <div className="flex overflow-hidden">
                  <div className="flex animate-scroll-right">
                    {[...guilds, ...guilds].map((guild, index) => (
                      <div key={index} className="flex-shrink-0 mx-4">
                        <div className="w-48 h-48 rounded-lg overflow-hidden shadow-lg">
                          <img 
                            src={guild.image}
                            alt={guild.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p className="text-center mt-2 font-medium">{guild.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid md:grid-cols-4 gap-6 mb-8">
                {guilds.map((guild, index) => (
                  <Card 
                    key={index} 
                    className="overflow-hidden shadow-lg cursor-pointer h-64 group"
                  >
                    <CardContent className="p-0 h-full">
                      <div className="relative h-full">
                        <img 
                          src={guild.image}
                          alt={guild.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center">
                          <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                            <h3 className="text-lg font-bold mb-2">{guild.name}</h3>
                            <p className="text-sm">{guild.details}</p>
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
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                {guildsExpanded ? 'Show Less' : 'All Guilds'}
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
