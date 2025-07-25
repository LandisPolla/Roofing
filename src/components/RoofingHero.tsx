import { Phone, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const RoofingHero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative w-full h-[70vh] min-h-[500px] bg-gradient-to-r from-secondary to-secondary/90 overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            24/7 Roofing Experts in Stantonbury
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            From Roof Leaks to Full Renovations – Fast, Reliable, Local.
          </p>
          
          {/* Rating Badge */}
          <div className="flex items-center justify-center mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-white font-medium">5.0 Rated on Google Reviews</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToContact}
              className="bg-primary text-black font-bold text-lg px-8 py-4 hover:bg-primary/90 shadow-lg"
              size="lg"
            >
              Request a Free Quote
            </Button>
            
            <Button 
              onClick={() => window.open('tel:01908966122', '_self')}
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black font-bold text-lg px-8 py-4"
              size="lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now – 01908 966122
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoofingHero;