
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { User, Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-12">
        <div className="flex justify-between items-center h-16">
          {/* Parish Name */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-sky-500 to-sky-800 bg-clip-text text-transparent">St. Agnes Parish</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 flex-1 justify-center">
            <a href="#home" className="text-secondary font-bold hover:bg-gradient-to-r hover:from-sky-500 hover:to-sky-800 hover:bg-clip-text hover:text-transparent transition-all duration-300">Home</a>
            <a href="#services" className="text-secondary font-bold hover:bg-gradient-to-r hover:from-sky-500 hover:to-sky-800 hover:bg-clip-text hover:text-transparent transition-all duration-300">Services</a>
            <a href="#ministries" className="text-secondary font-bold hover:bg-gradient-to-r hover:from-sky-500 hover:to-sky-800 hover:bg-clip-text hover:text-transparent transition-all duration-300">Ministries</a>
            <a href="#news" className="text-secondary font-bold hover:bg-gradient-to-r hover:from-sky-500 hover:to-sky-800 hover:bg-clip-text hover:text-transparent transition-all duration-300">News</a>
            <a href="#contact" className="text-secondary font-bold hover:bg-gradient-to-r hover:from-sky-500 hover:to-sky-800 hover:bg-clip-text hover:text-transparent transition-all duration-300">Contact</a>
            <a href="#donations" className="text-secondary font-bold hover:bg-gradient-to-r hover:from-sky-500 hover:to-sky-800 hover:bg-clip-text hover:text-transparent transition-all duration-300">Donations</a>
          </nav>

          {/* Desktop Login Button */}
          <Button 
            variant="outline" 
            className="hidden md:flex border-transparent bg-gradient-to-r from-sky-500 to-sky-800 text-white hover:from-sky-600 hover:to-sky-900 transition-all duration-300"
          >
            <User className="w-4 h-4 mr-2" />
            Login
          </Button>

          {/* Mobile Menu Button */}
          <Button 
            variant="outline" 
            className="md:hidden border-transparent bg-gradient-to-r from-sky-500 to-sky-800 text-white hover:from-sky-600 hover:to-sky-900 transition-all duration-300"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </Button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-secondary font-bold hover:bg-gradient-to-r hover:from-sky-500 hover:to-sky-800 hover:bg-clip-text hover:text-transparent transition-all duration-300" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
              <a href="#services" className="text-secondary font-bold hover:bg-gradient-to-r hover:from-sky-500 hover:to-sky-800 hover:bg-clip-text hover:text-transparent transition-all duration-300" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
              <a href="#ministries" className="text-secondary font-bold hover:bg-gradient-to-r hover:from-sky-500 hover:to-sky-800 hover:bg-clip-text hover:text-transparent transition-all duration-300" onClick={() => setIsMobileMenuOpen(false)}>Ministries</a>
              <a href="#news" className="text-secondary font-bold hover:bg-gradient-to-r hover:from-sky-500 hover:to-sky-800 hover:bg-clip-text hover:text-transparent transition-all duration-300" onClick={() => setIsMobileMenuOpen(false)}>News</a>
              <a href="#contact" className="text-secondary font-bold hover:bg-gradient-to-r hover:from-sky-500 hover:to-sky-800 hover:bg-clip-text hover:text-transparent transition-all duration-300" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
              <a href="#donations" className="text-secondary font-bold hover:bg-gradient-to-r hover:from-sky-500 hover:to-sky-800 hover:bg-clip-text hover:text-transparent transition-all duration-300" onClick={() => setIsMobileMenuOpen(false)}>Donations</a>
              <div className="pt-4 border-t border-gray-200">
                <Button 
                  variant="outline" 
                  className="w-full border-transparent bg-gradient-to-r from-sky-500 to-sky-800 text-white hover:from-sky-600 hover:to-sky-900 transition-all duration-300"
                >
                  <User className="w-4 h-4 mr-2" />
                  Login
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
