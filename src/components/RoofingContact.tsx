import { useState } from "react";
import { Phone, Clock, MapPin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import emailjs from 'emailjs-com';

const RoofingContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const EMAILJS_SERVICE_ID = "service_i3h66xg";
      const EMAILJS_TEMPLATE_ID = "template_fgq53nh";
      const EMAILJS_PUBLIC_KEY = "wQmcZvoOqTAhGnRZ3";
      
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
        to_name: 'Storm Line Roofing Team',
        reply_to: formData.email
      };
      
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      
      toast({
        title: "Success!",
        description: "Thank you for your message. We'll get back to you soon!",
        variant: "default"
      });
      
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: ""
      });
    } catch (error) {
      console.error("Error sending message:", error);
      
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again or call us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Speak With a Roofing Expert Today
          </h2>
          <p className="text-lg text-gray-600">
            Get your free quote or emergency repair service
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-secondary">Get Your Free Quote</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Input
                      placeholder="Your Name *"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      disabled={isSubmitting}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Email Address *"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      disabled={isSubmitting}
                      required
                    />
                  </div>
                </div>
                
                <Input
                  type="tel"
                  placeholder="Phone Number *"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  disabled={isSubmitting}
                  required
                />
                
                <Select onValueChange={(value) => setFormData({...formData, service: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Service Needed" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="emergency-repair">Emergency Repair</SelectItem>
                    <SelectItem value="roof-replacement">Roof Replacement</SelectItem>
                    <SelectItem value="leak-repair">Leak Repair</SelectItem>
                    <SelectItem value="gutter-work">Gutter & Fascia</SelectItem>
                    <SelectItem value="inspection">Free Inspection</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                
                <Textarea
                  placeholder="Tell us about your roofing needs..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  disabled={isSubmitting}
                  rows={4}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary text-black font-bold hover:bg-primary/90"
                  disabled={isSubmitting}
                  size="lg"
                >
                  {isSubmitting ? "Sending..." : "Get Free Quote"}
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Phone className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="font-bold text-lg text-secondary">Call Us Now</h3>
                    <a href="tel:01908966122" className="text-2xl font-bold text-primary hover:underline">
                      01908 966122
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Clock className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="font-bold text-lg text-secondary">Operating Hours</h3>
                    <p className="text-gray-600">Open 24 Hours</p>
                    <p className="text-sm text-primary font-medium">Emergency callouts available</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <MapPin className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="font-bold text-lg text-secondary">Our Location</h3>
                    <p className="text-gray-600">
                      45 Parklands<br />
                      Stantonbury<br />
                      Milton Keynes
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoofingContact;