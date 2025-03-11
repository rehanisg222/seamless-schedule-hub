import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { useEffect, useRef } from "react";
export function Hero() {
  const revenueRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
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
              const value = Math.floor(elapsedTime / duration * targetValue);
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
    }, {
      threshold: 0.1
    });
    if (revenueRef.current) {
      observer.observe(revenueRef.current);
    }
    return () => {
      if (revenueRef.current) {
        observer.unobserve(revenueRef.current);
      }
    };
  }, []);
  const scrollToCalendly = (e: React.MouseEvent) => {
    e.preventDefault();
    const calendlySection = document.getElementById('calendly-section');
    if (calendlySection) {
      calendlySection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background to-background/50"></div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
      </div>
      
      <Container className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center px-3 py-1 mb-4 rounded-full border border-border bg-secondary text-sm font-medium animate-fade-in">
              <span className="inline-block w-2 h-2 rounded-full bg-primary mr-2"></span>
              Transforming social media presence since 2023
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wide mb-2 text-white animate-fade-in" style={{
            animationDelay: "0.05s"
          }}>
              MODERN DAY ALCHEMY
            </h2>
            
            <h1 style={{
            animationDelay: "0.1s"
          }} className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-[#FF4D8F] animate-fade-in lg:text-4xl">
              We help businesses & brands produce spine-chilling ROI Via Paid Advertising
            </h1>
            
            
            
            <p className="text-lg text-muted-foreground mb-3 animate-fade-in" style={{
            animationDelay: "0.25s"
          }}>
              We craft high-converting ad campaigns that turn attention into revenue.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 animate-fade-in" style={{
            animationDelay: "0.3s"
          }}>
              It's time to scale your business the smart way-with date data-driven strategies that work.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 animate-fade-in" style={{
            animationDelay: "0.35s"
          }}>
              <a href="#calendly-section" onClick={scrollToCalendly} className="inline-flex items-center justify-center whitespace-nowrap rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                Book a Strategy Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
          
          <div className="flex justify-center items-center">
            <img src="/lovable-uploads/506d9731-da39-4092-84d7-4b0c42a6356d.png" alt="Wizard" className="w-full max-w-md h-auto animate-fade-in rounded-lg shadow-xl" style={{
            animationDelay: "0.4s"
          }} />
          </div>
        </div>
      </Container>
    </section>;
}