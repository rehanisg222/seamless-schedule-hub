
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

export function Hero() {
  const revenueRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && revenueRef.current) {
          const targetValue = 170000;
          let startValue = 0;
          const duration = 2000;
          const startTime = Date.now();
          
          const updateCounter = () => {
            const currentTime = Date.now();
            const elapsedTime = currentTime - startTime;
            
            if (elapsedTime < duration) {
              const value = Math.floor((elapsedTime / duration) * targetValue);
              if (revenueRef.current) {
                revenueRef.current.textContent = `$${value.toLocaleString()}`;
              }
              requestAnimationFrame(updateCounter);
            } else {
              if (revenueRef.current) {
                revenueRef.current.textContent = `$${targetValue.toLocaleString()}`;
              }
            }
          };
          
          updateCounter();
        }
      });
    }, { threshold: 0.1 });
    
    if (revenueRef.current) {
      observer.observe(revenueRef.current);
    }
    
    return () => {
      if (revenueRef.current) {
        observer.unobserve(revenueRef.current);
      }
    };
  }, []);

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background to-background/50"></div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
      </div>
      
      <Container className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full border border-border bg-secondary text-sm font-medium animate-fade-in">
              <span className="inline-block w-2 h-2 rounded-full bg-primary mr-2"></span>
              Transforming social media presence since 2023
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Elevate Your Brand With Strategic Social Media Marketing
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              We help businesses grow their audience, increase engagement, and drive conversions through data-driven social media strategies.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Link
                to="/booking"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Book a Strategy Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md border border-input bg-background px-6 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-secondary hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Our Services
              </Link>
            </div>
          </div>
          
          <div className="flex justify-center items-center">
            <img 
              src="/lovable-uploads/506d9731-da39-4092-84d7-4b0c42a6356d.png" 
              alt="Wizard" 
              className="w-full max-w-md h-auto animate-fade-in rounded-lg shadow-xl" 
              style={{ animationDelay: "0.4s" }}
            />
          </div>
        </div>

        <div className="mt-16 md:mt-24 max-w-5xl mx-auto relative glass p-8 md:p-10 rounded-xl shadow-glass animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
            <div className="flex flex-col items-center justify-center">
              <h2 ref={revenueRef} className="text-2xl md:text-3xl font-bold mb-2 text-primary">$0</h2>
              <p className="text-muted-foreground text-lg">Revenue Generated</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-primary">500+</h2>
              <p className="text-muted-foreground text-lg">Trusted by Clients</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
