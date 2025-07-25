import { Wrench, Home, Hammer, Search, Settings, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const RoofingServices = () => {
  const services = [
    {
      icon: Wrench,
      title: "Roof Leak Repairs",
      description: "Fast emergency repairs to stop leaks and prevent further damage to your property."
    },
    {
      icon: Home,
      title: "Full Roof Replacement",
      description: "Complete roof installations using high-quality materials and expert craftsmanship."
    },
    {
      icon: Hammer,
      title: "Gutter & Fascia Fixes",
      description: "Professional gutter cleaning, repairs, and fascia board replacement services."
    },
    {
      icon: Search,
      title: "Free Roof Inspections",
      description: "Comprehensive roof surveys to identify potential issues before they become problems."
    },
    {
      icon: Settings,
      title: "Renovation Preparation",
      description: "Roof upgrades and preparations for home renovation and extension projects."
    },
    {
      icon: Clock,
      title: "24/7 Emergency Response",
      description: "Round-the-clock emergency callout service for urgent roofing repairs."
    }
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Our Roofing Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From emergency repairs to complete installations, we provide comprehensive roofing solutions 
            for both domestic and commercial properties.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-primary">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-secondary">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoofingServices;