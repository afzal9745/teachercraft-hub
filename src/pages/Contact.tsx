
import { useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Calendar } from 'lucide-react';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
  };

  return (
    <div ref={pageRef} className="min-h-screen">
      <Navbar />
      
      {/* Header */}
      <section className="pt-28 pb-16 md:pt-32 md:pb-20 bg-gradient-to-b from-tech-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-1 mb-6 text-gray-900">
              Contact Us
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Have questions about our training programs? We're here to help. Reach out to our team.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-12 px-4 md:py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Get in Touch</h2>
              
              <div className="mb-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-tech-100 p-3 text-tech-600">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Email Us</h3>
                    <p className="text-gray-600 mb-1">For general inquiries:</p>
                    <a href="mailto:contact@techinteach.com" className="text-tech-600 hover:underline">
                      contact@techinteach.com
                    </a>
                    <p className="text-gray-600 mt-2 mb-1">For training bookings:</p>
                    <a href="mailto:training@techinteach.com" className="text-tech-600 hover:underline">
                      training@techinteach.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-tech-100 p-3 text-tech-600">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Call Us</h3>
                    <p className="text-gray-600 mb-1">Main Office:</p>
                    <a href="tel:+918756429310" className="text-tech-600 hover:underline">
                      +91 8756 429 310
                    </a>
                    <p className="text-gray-600 mt-2 mb-1">Training Department:</p>
                    <a href="tel:+918756429311" className="text-tech-600 hover:underline">
                      +91 8756 429 311
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-tech-100 p-3 text-tech-600">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Visit Us</h3>
                    <p className="text-gray-600">
                      TechinTeach Training Center<br />
                      Infopark, Kakkanad<br />
                      Kochi, Kerala 682042<br />
                      India
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="rounded-xl bg-white p-6 border border-gray-100 shadow-sm">
                <h3 className="text-lg font-medium mb-4 text-gray-900">Quick Actions</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a 
                    href="/booking" 
                    className="flex items-center gap-3 rounded-lg border border-tech-200 bg-tech-50 p-4 text-tech-700 hover:bg-tech-100 transition-colors"
                  >
                    <Calendar size={20} />
                    <span className="font-medium">Book a Training</span>
                  </a>
                  
                  <a 
                    href="/programs" 
                    className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white p-4 text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    <MessageSquare size={20} />
                    <span className="font-medium">Explore Programs</span>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <div className="glass-card rounded-xl p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Send a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name</Label>
                      <Input id="name" placeholder="John Doe" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="john@example.com" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="How can we help you?" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Your Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your inquiry..." 
                      required
                      rows={6}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-tech-600 hover:bg-tech-700"
                  >
                    <Send size={16} className="mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section - For illustration only */}
      <section className="py-12 px-4 md:py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video rounded-xl bg-white border border-gray-100 shadow-sm overflow-hidden">
              {/* This would be replaced with an actual map */}
              <div className="h-full w-full bg-gray-200 flex items-center justify-center text-gray-500">
                <div className="text-center">
                  <MapPin size={32} className="mx-auto mb-2" />
                  <p>Interactive Map Would Be Displayed Here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
