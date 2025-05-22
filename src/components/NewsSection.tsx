
import { Card, CardContent } from '@/components/ui/card';

const NewsSection = () => {
  const news = [
    {
      title: "Parish Renovation Project Completed",
      excerpt: "After months of dedicated work, our sanctuary renovation has been completed with beautiful new altar furnishings.",
      image: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=400&h=300&fit=crop",
      date: "March 15, 2024",
      category: "Parish News",
      size: "large"
    },
    {
      title: "Youth Mission Trip Success",
      excerpt: "Our youth group returned from their mission trip to Guatemala with hearts full of joy and purpose.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      date: "March 10, 2024",
      category: "Youth Ministry",
      size: "medium"
    },
    {
      title: "New Pastor Installation",
      excerpt: "Bishop celebrated the installation of Fr. Rodriguez as our new pastor.",
      image: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=400&h=300&fit=crop",
      date: "March 8, 2024",
      category: "Parish News",
      size: "medium"
    },
    {
      title: "Food Drive Results",
      excerpt: "Thanks to your generosity, we collected over 2,000 pounds of food for local families.",
      date: "March 5, 2024",
      category: "Community Service",
      size: "small"
    },
    {
      title: "Lenten Reflection Series",
      excerpt: "Join us for special Lenten evening reflections every Wednesday at 7 PM.",
      date: "March 1, 2024",
      category: "Spiritual Life",
      size: "small"
    },
    {
      title: "First Communion Celebration",
      excerpt: "Congratulations to our 25 children who received their First Holy Communion last Sunday.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      date: "February 28, 2024",
      category: "Sacraments",
      size: "medium"
    }
  ];

  const photos = [
    {
      url: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=300&h=200&fit=crop",
      caption: "Sunday Mass Celebration"
    },
    {
      url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop",
      caption: "Youth Group Activities"
    },
    {
      url: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=300&h=200&fit=crop",
      caption: "Parish Picnic"
    },
    {
      url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop",
      caption: "Christmas Celebration"
    },
    {
      url: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=300&h=200&fit=crop",
      caption: "Easter Vigil"
    },
    {
      url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop",
      caption: "Confirmation Ceremony"
    }
  ];

  return (
    <section id="news" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">News & Updates</h2>
          <p className="text-xl text-gray-600">Stay connected with parish life and activities</p>
        </div>

        {/* Bento Grid News Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
          {news.map((article, index) => (
            <Card 
              key={index} 
              className={`hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${
                article.size === 'large' ? 'md:col-span-2 md:row-span-2' :
                article.size === 'medium' ? 'md:col-span-2' : 'md:col-span-1'
              }`}
            >
              <CardContent className="p-0 h-full">
                {article.image && (
                  <div className="relative overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-secondary text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {article.category}
                      </span>
                    </div>
                  </div>
                )}
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{article.date}</div>
                  {!article.image && (
                    <div className="mb-3">
                      <span className="bg-secondary text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {article.category}
                      </span>
                    </div>
                  )}
                  <h3 className={`font-bold text-gray-900 mb-3 ${
                    article.size === 'large' ? 'text-2xl' : 'text-lg'
                  }`}>
                    {article.title}
                  </h3>
                  <p className="text-gray-600">{article.excerpt}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Photo Gallery with Infinite Scroll */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Photo Gallery</h3>
        </div>
        
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-right space-x-6">
            {[...photos, ...photos].map((photo, index) => (
              <div key={index} className="flex-shrink-0 w-72">
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-0">
                    <img 
                      src={photo.url} 
                      alt={photo.caption}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <p className="text-center text-gray-700 font-medium">{photo.caption}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
