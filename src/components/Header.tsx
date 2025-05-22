
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { User } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll effect
  window.addEventListener('scroll', () => {
    setIsScrolled(window.scrollY > 50);
  });

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Parish Name */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900">St. Agnes Parish</h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-secondary transition-colors">Home</a>
            <a href="#services" className="text-gray-700 hover:text-secondary transition-colors">Services</a>
            <a href="#ministries" className="text-gray-700 hover:text-secondary transition-colors">Ministries</a>
            <a href="#news" className="text-gray-700 hover:text-secondary transition-colors">News</a>
            <a href="#contact" className="text-gray-700 hover:text-secondary transition-colors">Contact</a>
            <a href="#donations" className="text-gray-700 hover:text-secondary transition-colors">Donations</a>
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
