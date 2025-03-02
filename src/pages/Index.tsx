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
  return <>
      <Hero />
      
      {/* Our Philosophy Section - Added based on the image */}
      <section className="py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-left">
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-2 font-sans tracking-tight">TOTAL REVENUE GENERATED</h2>
                <h3 className="text-5xl md:text-7xl font-bold text-[#FF4D8F] mb-10 font-serif tracking-tighter">$170,000</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-[#110027] rounded-lg p-6">
                  <h4 className="text-white text-lg uppercase mb-1 font-semibold">APPOINTMENTS BOOKED</h4>
                  <p className="text-5xl font-bold text-[#FF4D8F]">500</p>
                </div>
                
                <div className="bg-[#110027] rounded-lg p-6">
                  <h4 className="text-white text-lg uppercase mb-1 font-semibold">TOTAL AD SPEND</h4>
                  <p className="text-5xl font-bold text-[#FF4D8F]">$11K</p>
                </div>
                
                <div className="bg-[#110027] rounded-lg p-6">
                  <h4 className="text-white text-lg uppercase mb-1 font-semibold">OFFICES</h4>
                  <p className="text-5xl font-bold text-[#FF4D8F]">0</p>
                </div>
                
                <div className="bg-[#110027] rounded-lg p-6">
                  <h4 className="text-white text-lg uppercase mb-1 font-semibold">SERVICES OFFER</h4>
                  <p className="text-5xl font-bold text-[#FF4D8F]">3</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-black">Our Philosophy</h3>
              <p className="text-lg mb-4 text-gray-700">
                Here at Growthstermedia, we've worked with the best in the industry to produce millions of dollars in return on ad spend. We do away with the inefficiencies & formalities that plague most agencies.
              </p>
              <p className="text-lg mb-8 text-gray-700">
                Our client case studies have become myth, our waiting list is longer than your complaints with your current agency and we look for a very specific kind of client.
              </p>
              <p className="text-xl font-medium mb-8 text-gray-800">
                Maybe that's you: it would be our honour to find out. Schedule your FREE discovery call below.
              </p>
              <a href="/booking" className="inline-block px-8 py-4 rounded-full bg-[#D946EF] text-white text-lg font-medium hover:bg-[#C026D3] transition-colors shadow-lg shadow-purple-500/30">
                <div className="font-bold tracking-wide">Speak To Our Team Today</div>
                <div className="text-sm opacity-90">Schedule Your FREE Audit Call Now</div>
              </a>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Stats Section - Updated with new layout and values */}
      <section className="py-16 relative" style={{
      backgroundColor: "#300319"
    }}>
        <Container>
          <div className="text-center mb-12">
            
            
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
              <div className="calendly-inline-widget" data-url="https://calendly.com/growthstermedia/30min" style={{
              minWidth: '320px',
              height: '630px'
            }}></div>
            </div>
          </div>
        </Container>
      </section>
      
      <TeamSection />
      
      <AppointmentModal isOpen={isAppointmentModalOpen} onClose={() => setIsAppointmentModalOpen(false)} />
    </>;
};
export default Index;