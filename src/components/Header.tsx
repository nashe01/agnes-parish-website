
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { User } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll effect using useEffect to avoid memory leaks
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Parish Name */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-secondary">St. Agnes Parish</h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-secondary hover:text-secondary/80 transition-colors">Home</a>
            <a href="#services" className="text-secondary hover:text-secondary/80 transition-colors">Services</a>
            <a href="#ministries" className="text-secondary hover:text-secondary/80 transition-colors">Ministries</a>
            <a href="#news" className="text-secondary hover:text-secondary/80 transition-colors">News</a>
            <a href="#contact" className="text-secondary hover:text-secondary/80 transition-colors">Contact</a>
            <a href="#donations" className="text-secondary hover:text-secondary/80 transition-colors">Donations</a>
          </nav>

          {/* Login Button */}
          <Button 
            variant="outline" 
            className="border-secondary text-secondary hover:bg-secondary hover:text-white transition-all duration-300"
          >
            <User className="w-4 h-4 mr-2" />
            Login
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
