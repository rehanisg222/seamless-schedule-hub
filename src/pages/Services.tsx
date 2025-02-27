
import { Services as ServicesSection } from "@/components/home/Services";
import { Container } from "@/components/ui/Container";
import { useEffect } from "react";

const Services = () => {
  // Handle scroll restoration on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-muted-foreground text-lg">
            Comprehensive social media marketing services to help your business thrive in the digital landscape.
          </p>
        </div>
      </Container>
      
      <ServicesSection />
      
      <section className="section-padding">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">How Our Process Works</h2>
            
            <div className="space-y-8">
              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="text-xl font-semibold mb-2 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center mr-3">1</span>
                  Discovery & Strategy
                </h3>
                <p className="text-muted-foreground">
                  We begin with a deep dive into your brand, audience, competitors, and goals to craft a tailored social media strategy that aligns with your business objectives.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="text-xl font-semibold mb-2 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center mr-3">2</span>
                  Content Creation & Planning
                </h3>
                <p className="text-muted-foreground">
                  Our creative team develops engaging, on-brand content and creates a strategic posting schedule to maximize engagement and reach.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="text-xl font-semibold mb-2 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center mr-3">3</span>
                  Implementation & Management
                </h3>
                <p className="text-muted-foreground">
                  We handle the day-to-day management of your social media accounts, including posting, community engagement, and reputation management.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="text-xl font-semibold mb-2 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center mr-3">4</span>
                  Analysis & Optimization
                </h3>
                <p className="text-muted-foreground">
                  We continuously monitor performance, provide detailed reports, and refine our approach to ensure we're achieving maximum ROI for your social media investment.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Services;
