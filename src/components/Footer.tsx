
import { Phone, MapPin } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-secondary text-white pt-12 pb-6 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-gray-700">
          <div>
            <img 
              src="/lovable-uploads/52b73825-b41a-4013-a32a-70cd763acb1f.png" 
              alt="Storm Line Roofing Solutions" 
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-300 text-sm mb-4">
              Roof Leaks to Renovations
            </p>
            <p className="text-gray-300 text-sm">
              Professional roofing services available 24/7 for emergency repairs and complete installations.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={scrollToTop}
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('testimonials')}
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Reviews
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contact Info</h3>
            <div className="space-y-3">
              <a 
                href="tel:01908966122" 
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>01908 966122</span>
              </a>
              
              <div className="flex items-start gap-2 text-gray-300">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span className="text-sm">
                  45 Parklands<br />
                  Stantonbury<br />
                  Milton Keynes
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Storm Line Roofing Stantonbury. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
