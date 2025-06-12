
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Download, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  const [expandedSections, setExpandedSections] = useState(false);
  const [expandedGuilds, setExpandedGuilds] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const leaders = [
    { name: 'Fr. Michael Johnson', role: 'Pastor', image: '/lovable-uploads/e63e83b4-2497-47f5-8891-0a8482f5ef91.png' },
    { name: 'Fr. David Smith', role: 'Associate Pastor', image: '/lovable-uploads/e63e83b4-2497-47f5-8891-0a8482f5ef91.png' },
    { name: 'Deacon Paul Wilson', role: 'Deacon', image: '/lovable-uploads/e63e83b4-2497-47f5-8891-0a8482f5ef91.png' },
    { name: 'Sister Mary Catherine', role: 'Director of Religious Education', image: '/lovable-uploads/e63e83b4-2497-47f5-8891-0a8482f5ef91.png' },
  ];

  const sections = [
    { name: 'Youth Ministry', image: '/lovable-uploads/e63e83b4-2497-47f5-8891-0a8482f5ef91.png', details: 'Active youth programs for spiritual growth', activities: 'Weekly meetings, retreats, community service' },
    { name: 'Music Ministry', image: '/lovable-uploads/e63e83b4-2497-47f5-8891-0a8482f5ef91.png', details: 'Choir and instrumental groups', activities: 'Sunday services, special celebrations' },
    { name: 'Outreach Ministry', image: '/lovable-uploads/e63e83b4-2497-47f5-8891-0a8482f5ef91.png', details: 'Community service and support', activities: 'Food bank, visiting elderly, charity drives' },
    { name: 'Prayer Group', image: '/lovable-uploads/e63e83b4-2497-47f5-8891-0a8482f5ef91.png', details: 'Weekly prayer and meditation', activities: 'Prayer circles, Bible study, spiritual guidance' },
    { name: 'Education Ministry', image: '/lovable-uploads/e63e83b4-2497-47f5-8891-0a8482f5ef91.png', details: 'Religious education for all ages', activities: 'Sunday school, adult education, confirmation classes' },
  ];

  const guilds = [
    { name: "Women's Guild", image: '/lovable-uploads/e63e83b4-2497-47f5-8891-0a8482f5ef91.png', details: 'Fellowship and service for women', activities: 'Monthly meetings, fundraising, community events' },
    { name: "Men's Club", image: '/lovable-uploads/e63e83b4-2497-47f5-8891-0a8482f5ef91.png', details: 'Brotherhood and parish support', activities: 'Service projects, social events, mentorship' },
    { name: 'Knights of Columbus', image: '/lovable-uploads/e63e83b4-2497-47f5-8891-0a8482f5ef91.png', details: 'Catholic men serving community', activities: 'Charity work, parish support, family events' },
    { name: 'Altar Society', image: '/lovable-uploads/e63e83b4-2497-47f5-8891-0a8482f5ef91.png', details: 'Care for sacred spaces', activities: 'Altar decoration, church cleaning, liturgical support' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        {/* Leadership Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">Our Leadership</h2>
              <p className="text-xl text-gray-600">Meet the dedicated clergy and staff who guide our parish</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              {leaders.map((leader, index) => (
                <div key={index} className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-200">
                    <img 
                      src={leader.image} 
                      alt={leader.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                  <p className="text-gray-600">{leader.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">Peek into History</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Hover on the picture with history you want and press download to get full history PDF.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Saint Agnes History Card */}
              <Card 
                className="overflow-hidden shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105"
                onMouseEnter={() => setHoveredCard('saint')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <CardContent className="p-0 h-96 relative">
                  <div className={`absolute inset-0 transition-opacity duration-500 ${hoveredCard === 'saint' ? 'opacity-0' : 'opacity-100'}`}>
                    <img 
                      src="/lovable-uploads/333a1e52-ace4-40f6-8d59-dade5e28336c.png"
                      alt="Saint Agnes"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className={`absolute inset-0 bg-white p-6 flex flex-col justify-between transition-opacity duration-500 ${hoveredCard === 'saint' ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="overflow-y-auto flex-1">
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">Saint Agnes History</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Saint Agnes was born into a wealthy Christian family in Rome around 291 AD. From an early age, she demonstrated extraordinary devotion to her faith and consecrated her virginity to God. When she was only 13 years old, during the persecution of Christians under Emperor Diocletian, Agnes was approached by many suitors seeking her hand in marriage due to her beauty and family wealth.
                        
                        However, Agnes rejected all proposals, declaring that she was already promised to Christ. Her refusal to marry angered the Roman authorities, who saw it as both a personal slight and a challenge to their pagan beliefs. When she continued to refuse to sacrifice to the Roman gods, she was condemned to death.
                        
                        According to tradition, Agnes was martyred around 304 AD at the age of 13. Her courage in the face of persecution and her unwavering faith made her one of the most venerated virgin martyrs in the early Christian church. She is remembered for her purity, bravery, and complete dedication to Christ, becoming a symbol of innocence and faith.
                      </p>
                    </div>
                    <Button className="mt-4">
                      <Download className="w-4 h-4 mr-2" />
                      Download Full History PDF
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Church History Card */}
              <Card 
                className="overflow-hidden shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105"
                onMouseEnter={() => setHoveredCard('church')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <CardContent className="p-0 h-96 relative">
                  <div className={`absolute inset-0 transition-opacity duration-500 ${hoveredCard === 'church' ? 'opacity-0' : 'opacity-100'}`}>
                    <img 
                      src="/lovable-uploads/2c81f3cf-697b-4703-8a8c-047c57de5827.png"
                      alt="St. Agnes Church"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className={`absolute inset-0 bg-white p-6 flex flex-col justify-between transition-opacity duration-500 ${hoveredCard === 'church' ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="overflow-y-auto flex-1">
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">Church History</h3>
                      <p className="text-gray-600 leading-relaxed">
                        St. Agnes Catholic Parish was established in 1952 as a small mission church to serve the growing Catholic community in our neighborhood. The parish began with just 25 families who gathered for Mass in a modest wooden structure that served as both church and community center.
                        
                        Under the leadership of our founding pastor, Fr. Thomas O'Brien, the parish grew rapidly throughout the 1950s and 1960s. In 1965, construction began on our current church building, which was completed and dedicated in 1967. The beautiful Gothic Revival architecture was designed to inspire worship and reflect our rich Catholic heritage.
                        
                        Throughout the decades, St. Agnes Parish has been a cornerstone of faith and community service. We've weathered challenges including the changes following Vatican II, economic hardships, and most recently, the global pandemic. Through it all, our parish family has remained strong, united in faith and committed to serving God and our neighbors.
                        
                        Today, we serve over 800 families and continue to grow, offering diverse ministries, educational programs, and outreach services that touch lives throughout our community.
                      </p>
                    </div>
                    <Button className="mt-4">
                      <Download className="w-4 h-4 mr-2" />
                      Download Full History PDF
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Sections Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">Our Sections</h2>
              <p className="text-xl text-gray-600">Discover our various ministries and programs</p>
            </div>

            {/* Scrolling Cards */}
            <div className="overflow-hidden mb-8">
              <div className={`flex space-x-6 ${!expandedSections ? 'animate-scroll-left' : ''}`}>
                {(expandedSections ? sections : [...sections, ...sections]).map((section, index) => (
                  <Card 
                    key={`${section.name}-${index}`}
                    className="flex-shrink-0 w-64 overflow-hidden shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105"
                    onMouseEnter={() => setHoveredCard(`section-${section.name}-${index}`)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <CardContent className="p-0 h-80 relative">
                      <div className={`absolute inset-0 transition-opacity duration-500 ${hoveredCard === `section-${section.name}-${index}` ? 'opacity-0' : 'opacity-100'}`}>
                        <img 
                          src={section.image}
                          alt={section.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                          <h3 className="font-bold">{section.name}</h3>
                        </div>
                      </div>
                      <div className={`absolute inset-0 bg-white p-6 flex flex-col justify-center transition-opacity duration-500 ${hoveredCard === `section-${section.name}-${index}` ? 'opacity-100' : 'opacity-0'}`}>
                        <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">{section.name}</h3>
                        <p className="text-gray-600 mb-4">{section.details}</p>
                        <p className="text-sm text-gray-500 mb-4"><strong>Current Activities:</strong> {section.activities}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="text-center">
              <Button
                onClick={() => setExpandedSections(!expandedSections)}
                className="group flex items-center mx-auto"
              >
                All Sections
                {expandedSections ? (
                  <ChevronUp className="ml-2 w-5 h-5" />
                ) : (
                  <ChevronDown className="ml-2 w-5 h-5" />
                )}
              </Button>
            </div>
          </div>
        </section>

        {/* Guilds Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">Our Guilds</h2>
              <p className="text-xl text-gray-600">Join our fellowship groups and service organizations</p>
            </div>

            {/* Scrolling Cards */}
            <div className="overflow-hidden mb-8">
              <div className={`flex space-x-6 ${!expandedGuilds ? 'animate-scroll-right' : ''}`}>
                {(expandedGuilds ? guilds : [...guilds, ...guilds]).map((guild, index) => (
                  <Card 
                    key={`${guild.name}-${index}`}
                    className="flex-shrink-0 w-64 overflow-hidden shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105"
                    onMouseEnter={() => setHoveredCard(`guild-${guild.name}-${index}`)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <CardContent className="p-0 h-80 relative">
                      <div className={`absolute inset-0 transition-opacity duration-500 ${hoveredCard === `guild-${guild.name}-${index}` ? 'opacity-0' : 'opacity-100'}`}>
                        <img 
                          src={guild.image}
                          alt={guild.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                          <h3 className="font-bold">{guild.name}</h3>
                        </div>
                      </div>
                      <div className={`absolute inset-0 bg-white p-6 flex flex-col justify-center transition-opacity duration-500 ${hoveredCard === `guild-${guild.name}-${index}` ? 'opacity-100' : 'opacity-0'}`}>
                        <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">{guild.name}</h3>
                        <p className="text-gray-600 mb-4">{guild.details}</p>
                        <p className="text-sm text-gray-500 mb-4"><strong>Current Activities:</strong> {guild.activities}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="text-center">
              <Button
                onClick={() => setExpandedGuilds(!expandedGuilds)}
                className="group flex items-center mx-auto"
              >
                All Guilds
                {expandedGuilds ? (
                  <ChevronUp className="ml-2 w-5 h-5" />
                ) : (
                  <ChevronDown className="ml-2 w-5 h-5" />
                )}
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
