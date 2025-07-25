import { CheckCircle, Clock, Shield, Users } from "lucide-react";

const RoofingAbout = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
              Built on Trust. Backed by Quality.
            </h2>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              With years of experience and a perfect 5-star rating, Storm Line Roofing Stantonbury 
              delivers everything from emergency leak repairs to complete roof installations. Our expert 
              team is local, fast to respond, and fully insured for your peace of mind.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-gray-700 font-medium">Emergency repairs available 24/7</span>
              </div>
              
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-gray-700 font-medium">Domestic & commercial roofing</span>
              </div>
              
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-gray-700 font-medium">Gutters, fascia, tile replacement</span>
              </div>
              
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-gray-700 font-medium">Renovation-ready roof upgrades</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-2xl text-secondary mb-2">24/7</h3>
              <p className="text-gray-600">Emergency Response</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-2xl text-secondary mb-2">100%</h3>
              <p className="text-gray-600">Fully Insured</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-2xl text-secondary mb-2">5.0</h3>
              <p className="text-gray-600">Star Rating</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-2xl text-secondary mb-2">Local</h3>
              <p className="text-gray-600">Milton Keynes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoofingAbout;