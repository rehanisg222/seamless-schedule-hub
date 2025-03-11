import { useState, useEffect } from "react";
import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { AppointmentModal } from "@/components/shared/AppointmentModal";
import { Container } from "@/components/ui/Container";
import { ArrowRight, X } from "lucide-react";
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
      
      {/* Our Philosophy Section */}
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
                  <p className="text-5xl font-bold text-[#FF4D8F]">1</p>
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
              <a href="#calendly-section" className="inline-block px-8 py-4 rounded-full bg-[#D946EF] text-white text-lg font-medium hover:bg-[#C026D3] transition-colors shadow-lg shadow-purple-500/30">
                <div className="font-bold tracking-wide">Speak To Our Team Today</div>
                <div className="text-sm opacity-90">Schedule Your FREE Audit Call Now</div>
              </a>
            </div>
          </div>
        </Container>
      </section>
      
      {/* What We Offer Section - Moved above Calendly */}
      <section className="py-16 relative" style={{
      backgroundColor: "#110027"
    }}>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-white">
              <h2 className="text-2xl font-medium mb-2">What we offer</h2>
              <h3 className="text-5xl md:text-6xl font-bold text-[#FF4D8F] mb-6">PAID ADVERTISING</h3>
              <p className="text-xl mb-6">Ads. Just Ads.</p>
              
              <div className="space-y-6">
                <p className="text-lg">
                  We do one thing - we just do it with a monastic focus and better than anyone else. If you want an agency that offers a full service solution of everything that won't move the needle forward, we're not for you.
                </p>
                
                <p className="text-lg">
                  If you want an agency where with two clicks, you can get a clear breakdown of how much was spent, how much was made & what your net profit was - we're for you.
                </p>
              </div>
              
              <div className="mt-10">
                <a href="#calendly-section" className="inline-block px-8 py-4 rounded-full bg-[#D946EF] text-white text-lg font-medium hover:bg-[#C026D3] transition-colors shadow-lg">
                  <div className="font-bold tracking-wide">Speak To Our Team Today</div>
                  <div className="text-sm opacity-90">Schedule Your FREE Audit Call Now</div>
                </a>
              </div>
            </div>
            
            <div className="text-white">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">MASTERY DEMANDS FOCUS SO....</h3>
                <p className="text-xl mb-6">
                  We don't offer any other services except for <span className="italic">paid advertising</span>...
                </p>
              </div>
              
              <ul className="space-y-4">
                {["WEBDESIGN", "CONTENT CREATION", "EMAIL MARKETING", "SOCIAL MEDIA MANAGEMENT", "INSTAGRAM GROWTH", "PR SERVICE"].map((service, index) => <li key={index} className="flex items-center text-xl font-medium">
                    <span className="inline-flex items-center justify-center w-6 h-6 bg-[#FF4D8F] rounded-full mr-3">
                      <X size={14} />
                    </span>
                    {service}
                  </li>)}
              </ul>
            </div>
          </div>
        </Container>
      </section>
      
      {/* CTA Section with Embedded Calendly */}
      <section id="calendly-section" className="py-16 bg-primary text-primary-foreground">
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
      
      <AppointmentModal isOpen={isAppointmentModalOpen} onClose={() => setIsAppointmentModalOpen(false)} />
    </>;
};
export default Index;
