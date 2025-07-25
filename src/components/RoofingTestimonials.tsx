import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const RoofingTestimonials = () => {
  const testimonials = [
    {
      text: "Great prompt friendly service. They came out the same day and had my leak fixed within hours.",
      author: "Sarah T.",
      location: "Milton Keynes"
    },
    {
      text: "Storm Line Roofing saved us during a heavy storm. They showed up at 2AM to patch our roof and came back the next day to do a full repair. Brilliant service.",
      author: "James R.",
      location: "Stantonbury"
    },
    {
      text: "Really professional and clean work. No hidden costs, great communication, and very respectful workers. Will recommend them to everyone.",
      author: "Fatima N.",
      location: "Milton Keynes"
    },
    {
      text: "They installed a brand-new roof on our garage. Finished ahead of schedule and under budget. 10/10!",
      author: "Liam K.",
      location: "Milton Keynes"
    },
    {
      text: "What stood out to me was the honesty. They gave me multiple options instead of pushing the most expensive one. Refreshing to see.",
      author: "Darren H.",
      location: "Milton Keynes"
    }
  ];

  return (
    <section className="py-16 bg-muted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Our Customers Say It Best
          </h2>
          <p className="text-lg text-gray-600">
            Don't just take our word for it – see what our satisfied customers have to say
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, starIndex) => (
                    <Star key={starIndex} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                
                <blockquote className="text-gray-700 mb-4 leading-relaxed">
                  "{testimonial.text}"
                </blockquote>
                
                <footer className="text-sm text-gray-600">
                  <strong className="text-secondary">– {testimonial.author}</strong>
                  {testimonial.location && (
                    <span className="text-gray-500"> ({testimonial.location})</span>
                  )}
                </footer>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoofingTestimonials;