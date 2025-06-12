
import { useState } from 'react';
import { Menu, X, User, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, isAdmin, signOut } = useAuth();
  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'News', href: '#news' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/e63e83b4-2497-47f5-8891-0a8482f5ef91.png" 
              alt="St. Agnes" 
              className="h-10 w-10 object-contain"
            />
            <div>
              <h1 className="text-xl font-bold text-secondary">St Agnes</h1>
              <p className="text-xs text-gray-600">Catholic Parish</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-700 hover:text-secondary transition-colors duration-200 font-medium"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Auth/Admin Section */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-2">
                {isAdmin && (
                  <Button
                    onClick={() => navigate('/admin')}
                    variant="outline"
                    size="sm"
                  >
                    <Settings className="w-4 h-4 mr-2" />
                    Admin Panel
                  </Button>
                )}
                <Button
                  onClick={signOut}
                  variant="outline"
                  size="sm"
                >
                  Sign Out
                </Button>
              </div>
            ) : (
              <Button
                onClick={() => navigate('/auth')}
                variant="outline"
                size="sm"
              >
                <User className="w-4 h-4 mr-2" />
                Sign In
              </Button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-secondary transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left py-2 text-gray-700 hover:text-secondary transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-4 border-t mt-4">
                {user ? (
                  <div className="space-y-2">
                    {isAdmin && (
                      <Button
                        onClick={() => navigate('/admin')}
                        variant="outline"
                        size="sm"
                        className="w-full"
                      >
                        <Settings className="w-4 h-4 mr-2" />
                        Admin Panel
                      </Button>
                    )}
                    <Button
                      onClick={signOut}
                      variant="outline"
                      size="sm"
                      className="w-full"
                    >
                      Sign Out
                    </Button>
                  </div>
                ) : (
                  <Button
                    onClick={() => navigate('/auth')}
                    variant="outline"
                    size="sm"
                    className="w-full"
                  >
                    <User className="w-4 h-4 mr-2" />
                    Sign In
                  </Button>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
