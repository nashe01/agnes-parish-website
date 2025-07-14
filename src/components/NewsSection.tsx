
import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { supabase } from '@/integrations/supabase/client';
import { SectionFadeIn } from './SectionFadeIn';

interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  image_url?: string;
  date: string;
  category: string;
  size: string;
}

const NewsSection = () => {
  const [news, setNews] = useState<NewsArticle[]>([]);
  
  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    const { data } = await supabase
      .from('news_articles')
      .select('*')
      .eq('is_active', true)
      .order('display_order')
      .limit(6);
    
    if (data) {
      setNews(data);
    }
  };



  return (
    <section id="news" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-sky-500 to-sky-800 bg-clip-text text-transparent mb-4">News & Updates</h2>
          <p className="text-xl text-gray-600">Stay connected with parish life and activities</p>
        </div>

        {/* News Articles */}
        {news.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
            {news.map((article, index) => (
              <SectionFadeIn key={article.id} direction="up" delay={index * 0.08}>
                <Card 
                  className={`hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${
                    article.size === 'large' ? 'md:col-span-2 md:row-span-2' :
                    article.size === 'medium' ? 'md:col-span-2' : 'md:col-span-1'
                  }`}
                >
                  <CardContent className="p-0 h-full">
                    {article.image_url && (
                      <div className="relative overflow-hidden">
                        <img 
                          src={article.image_url} 
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
                      {!article.image_url && (
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
              </SectionFadeIn>
            ))}
          </div>
        )}

        {news.length === 0 && (
          <div className="text-center text-gray-600">
            <p>No news available at the moment.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default NewsSection;
