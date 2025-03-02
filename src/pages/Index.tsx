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
      
      {/* Services Section (moved up) */}
      
      
      {/* Stats Section - Updated with new layout and values */}
      <section className="py-16 relative" style={{
      backgroundColor: "#300319"
    }}>
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-3 font-sans tracking-tight">TOTAL REVENUE GENERATED</h2>
            <h3 className="text-5xl md:text-7xl font-bold text-[#D946EF] mb-10 font-serif tracking-tighter">$170,000</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="stats-card transform transition duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-purple-900/20 bg-zinc-200">
              <h4 className="stats-label font-sans tracking-wide">APPOINTMENTS BOOKED</h4>
              <p className="stats-value font-serif">500</p>
            </div>
            
            <div className="stats-card transform transition duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-purple-900/20 bg-slate-900">
              <h4 className="stats-label font-sans tracking-wide">TOTAL AD SPEND</h4>
              <p className="stats-value font-serif">$11K</p>
            </div>
            
            <div className="stats-card transform transition duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-purple-900/20">
              <h4 className="stats-label font-sans tracking-wide">OFFICES</h4>
              <p className="stats-value font-serif">0</p>
            </div>
            
            <div className="stats-card transform transition duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-purple-900/20">
              <h4 className="stats-label font-sans tracking-wide">SERVICES OFFER</h4>
              <p className="stats-value font-serif">3</p>
            </div>
          </div>
          
          <div className="mt-16 flex flex-col md:flex-row gap-8 items-center justify-between">
            <div className="max-w-xl text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 font-sans tracking-tight text-[#9b87f5]">Our Philosophy</h3>
              <p className="text-lg mb-4 leading-relaxed font-light">
                At Growthstermedia, we partner with business leaders to generate substantial returns on advertising investments. Our approach eliminates unnecessary bureaucracy that slows down most agencies.
              </p>
              <p className="text-lg mb-6 leading-relaxed font-light">
                We've built an impressive portfolio of client successes, our waitlist continues to expand, and we're selective about partnering with businesses that align with our growth-focused approach.
              </p>
              <p className="text-xl font-medium italic">
                You might be the perfect fit — we'd be honored to explore this possibility together. Book your free discovery call today.
              </p>
            </div>
            
            <a href="/booking" className="px-8 py-4 rounded-full bg-[#8B5CF6] text-white text-lg font-medium hover:bg-[#7E69AB] transition-colors text-center shadow-lg shadow-purple-900/30 group">
              <div className="font-bold tracking-wide group-hover:translate-x-1 transition-transform">Speak To Our Team Today</div>
              <div className="text-sm mt-1 opacity-90">Schedule Your FREE Audit Call Now</div>
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