
import { useState, useEffect } from "react";
import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { TeamSection } from "@/components/home/TeamSection";
import { AppointmentModal } from "@/components/shared/AppointmentModal";
import { Container } from "@/components/ui/Container";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const [calendarLoaded, setCalendarLoaded] = useState(false);

  // Handle scroll restoration on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Load Calendly script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => setCalendarLoaded(true);
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <>
      <Hero />
      <Services />
      
      {/* Stats Section - Based on first attachment */}
      <section className="py-16" style={{ backgroundColor: "#300319" }}>
        <Container>
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">TOTAL REVENUE GENERATED</h2>
            <h3 className="text-5xl md:text-7xl font-bold text-pink-500 mb-8">$63.4 MILLION</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-blue-950 p-6 rounded-lg text-center">
              <h4 className="text-xl font-bold text-white mb-4">CLIENTS HELPED</h4>
              <p className="text-4xl md:text-6xl font-bold text-pink-500">57</p>
            </div>
            
            <div className="bg-blue-950 p-6 rounded-lg text-center">
              <h4 className="text-xl font-bold text-white mb-4">TOTAL AD SPEND</h4>
              <p className="text-4xl md:text-6xl font-bold text-pink-500">$14.7M</p>
            </div>
            
            <div className="bg-blue-950 p-6 rounded-lg text-center">
              <h4 className="text-xl font-bold text-white mb-4">OFFICES</h4>
              <p className="text-4xl md:text-6xl font-bold text-pink-500">0</p>
            </div>
            
            <div className="bg-blue-950 p-6 rounded-lg text-center">
              <h4 className="text-xl font-bold text-white mb-4">SERVICES OFFER</h4>
              <p className="text-4xl md:text-6xl font-bold text-pink-500">1</p>
            </div>
          </div>
          
          <div className="mt-12 flex flex-col md:flex-row gap-8 items-center justify-between">
            <div className="max-w-xl text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Philosophy</h3>
              <p className="text-lg mb-4">
                At Growthstermedia, we've worked with the best in the industry to produce millions of dollars in return on ad spend. We do away with inefficiencies and formalities that plague most agencies.
              </p>
              <p className="text-lg mb-6">
                Our client case studies have become legendary, our waiting list is longer than your complaints with your current agency, and we look for a very specific kind of client.
              </p>
              <p className="text-xl font-semibold">
                Maybe that's you: it would be our honor to find out. Schedule your FREE discovery call below.
              </p>
            </div>
            
            <a 
              href="/booking" 
              className="px-8 py-4 rounded-full bg-purple-600 text-white text-lg font-medium hover:bg-purple-700 transition-colors text-center"
            >
              Speak To Our Team Today
              <div className="text-sm">Schedule Your FREE Audit Call Now</div>
            </a>
          </div>
        </Container>
      </section>
      
      {/* CTA Section with Embedded Calendly */}
      <section className="py-16 bg-primary text-primary-foreground">
        <Container>
          <div className="flex flex-col">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold">Ready to Grow Your Social Media Presence?</h2>
              <p className="mt-2 text-primary-foreground/80 max-w-2xl mx-auto">
                Book a free strategy call now and discover how we can boost your brand's online visibility.
              </p>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div 
                className="calendly-inline-widget"
                data-url="https://calendly.com/growthstermedia/30min"
                style={{ minWidth: '320px', height: '630px' }}
              ></div>
            </div>
          </div>
        </Container>
      </section>
      
      <TeamSection />
      
      <AppointmentModal
        isOpen={isAppointmentModalOpen}
        onClose={() => setIsAppointmentModalOpen(false)}
      />
    </>
  );
};

export default Index;
