import { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-black/90 backdrop-blur-sm'
    }`}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button onClick={scrollToTop} className="flex items-center">
            <img 
              src="/lovable-uploads/52b73825-b41a-4013-a32a-70cd763acb1f.png" 
              alt="Storm Line Roofing Solutions" 
              className="h-10 w-auto"
            />
          </button>

          {/* Contact Info */}
          <div className="hidden md:flex items-center space-x-6">
            <a 
              href="tel:01908966122" 
              className={`font-medium transition-colors duration-200 flex items-center gap-2 ${
                isScrolled ? 'text-gray-700 hover:text-black' : 'text-white hover:text-gray-300'
              }`}
            >
              <Phone className="w-4 h-4" />
              01908 966122
            </a>
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-primary text-black font-bold hover:bg-primary/90"
            >
              Request Free Quote
            </Button>
          </div>

          {/* Mobile contact */}
          <div className="md:hidden">
            <a 
              href="tel:01908966122"
              className={`p-2 transition-colors duration-200 flex items-center ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              <Phone size={20} />
            </a>
          </div>
        </div>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:block pb-2">
          <div className="flex justify-center space-x-8">
            <button
              onClick={scrollToTop}
              className={`font-medium transition-colors duration-200 ${
                isScrolled ? 'text-gray-700 hover:text-black' : 'text-white hover:text-gray-300'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={`font-medium transition-colors duration-200 ${
                isScrolled ? 'text-gray-700 hover:text-black' : 'text-white hover:text-gray-300'
              }`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className={`font-medium transition-colors duration-200 ${
                isScrolled ? 'text-gray-700 hover:text-black' : 'text-white hover:text-gray-300'
              }`}
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className={`font-medium transition-colors duration-200 ${
                isScrolled ? 'text-gray-700 hover:text-black' : 'text-white hover:text-gray-300'
              }`}
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`font-medium transition-colors duration-200 ${
                isScrolled ? 'text-gray-700 hover:text-black' : 'text-white hover:text-gray-300'
              }`}
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;