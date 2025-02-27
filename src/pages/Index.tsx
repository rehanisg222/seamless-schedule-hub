
import { useState } from "react";
import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { CounterSection } from "@/components/home/CounterSection";
import { TeamSection } from "@/components/home/TeamSection";
import { AppointmentModal } from "@/components/shared/AppointmentModal";
import { Container } from "@/components/ui/Container";
import { useEffect } from "react";
import { Calendar, ArrowRight } from "lucide-react";

const Index = () => {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);

  // Handle scroll restoration on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero />
      <Services />
      
      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <Container>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold">Ready to Grow Your Social Media Presence?</h2>
              <p className="mt-2 text-primary-foreground/80">
                Book a free strategy call now and discover how we can boost your brand's online visibility.
              </p>
            </div>
            <button
              onClick={() => setIsAppointmentModalOpen(true)}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md bg-white px-6 py-3 text-sm font-medium text-primary shadow-sm transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              <Calendar className="mr-2 h-4 w-4" />
              Schedule Strategy Call
            </button>
          </div>
        </Container>
      </section>
      
      <CounterSection />
      <TeamSection />
      
      {/* Testimonials Section */}
      <section className="section-padding bg-secondary/30">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground text-lg">
              Hear from businesses that have transformed their social media presence with Growthstermedia.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-xl border border-border shadow-sm fade-in-section">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary mr-4">
                  <span className="font-semibold">TB</span>
                </div>
                <div>
                  <h3 className="font-medium">Tech Brilliance</h3>
                  <p className="text-sm text-muted-foreground">SaaS Company</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                "Growthstermedia transformed our social media strategy. Our engagement increased by 215% and lead generation from social channels is up 180%. Their team is responsive and truly understands our market."
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-xl border border-border shadow-sm fade-in-section">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary mr-4">
                  <span className="font-semibold">FE</span>
                </div>
                <div>
                  <h3 className="font-medium">Fashion Essentials</h3>
                  <p className="text-sm text-muted-foreground">E-commerce Brand</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                "Since working with Growthstermedia, our Instagram following has grown from 2,000 to over 25,000 in just 6 months. Their content strategy and community management has helped us build a loyal customer base."
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-xl border border-border shadow-sm fade-in-section">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary mr-4">
                  <span className="font-semibold">CG</span>
                </div>
                <div>
                  <h3 className="font-medium">Culinary Glow</h3>
                  <p className="text-sm text-muted-foreground">Restaurant Chain</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                "The Facebook and Instagram ad campaigns managed by Growthstermedia delivered a 340% ROI. Their understanding of the restaurant industry and creative approach to content has been game-changing for our business."
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <button
              onClick={() => setIsAppointmentModalOpen(true)}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Join Our Success Stories
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </Container>
      </section>
      
      <AppointmentModal
        isOpen={isAppointmentModalOpen}
        onClose={() => setIsAppointmentModalOpen(false)}
      />
    </>
  );
};

export default Index;
