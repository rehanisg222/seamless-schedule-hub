
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export function Hero() {
  const revenueRef = useRef<HTMLHeadingElement>(null);
  const [theme, setTheme] = useState(() => 
    localStorage.getItem('theme') || 'default'
  );
  
  useEffect(() => {
    const handleThemeChange = () => {
      setTheme(localStorage.getItem('theme') || 'default');
    };
    
    window.addEventListener('storage', handleThemeChange);
    document.addEventListener('themeChange', handleThemeChange as EventListener);
    
    return () => {
      window.removeEventListener('storage', handleThemeChange);
      document.removeEventListener('themeChange', handleThemeChange as EventListener);
    };
  }, []);
  
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
      calendlySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return theme === 'futuristic' ? (
    // Futuristic Theme Hero
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#050510] opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-primary/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
      </div>
      
      <Container className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full futuristic-border bg-black/50 text-sm font-medium animate-fade-in">
              <span className="inline-block w-2 h-2 rounded-full bg-accent futuristic-glow mr-2"></span>
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Redefining digital marketing since 2023</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6 animate-fade-in bg-gradient-to-r from-white via-white/90 to-accent/80 bg-clip-text text-transparent" style={{
            animationDelay: "0.1s"
          }}>
              Launch Your Brand Into The Digital Future
            </h1>
            
            <p className="text-xl text-white/80 mb-8 animate-fade-in" style={{
            animationDelay: "0.2s"
          }}>
              Our futuristic approach combines cutting-edge technology with strategic marketing to create campaigns that transcend conventional boundaries.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 animate-fade-in" style={{
            animationDelay: "0.3s"
          }}>
              <a href="#calendly-section" onClick={scrollToCalendly} className="inline-flex items-center justify-center whitespace-nowrap rounded-md bg-primary/90 backdrop-blur-md px-6 py-3 text-sm font-medium text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary/100 hover:shadow-xl hover:shadow-primary/30 futuristic-glow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring border border-primary/50">
                Begin Your Journey
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
          
          <div className="flex justify-center items-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-tr from-primary/20 via-accent/20 to-primary/20 blur-2xl opacity-50 animate-pulse"></div>
              <img 
                src="/lovable-uploads/506d9731-da39-4092-84d7-4b0c42a6356d.png" 
                alt="Wizard" 
                className="w-full max-w-md h-auto relative z-10 animate-fade-in rounded-lg futuristic-border" 
                style={{animationDelay: "0.4s"}}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  ) : (
    // Default Theme Hero (original)
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
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fade-in" style={{
            animationDelay: "0.1s"
          }}>
              Elevate Your Brand With Strategic Social Media Marketing
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 animate-fade-in" style={{
            animationDelay: "0.2s"
          }}>
              We help businesses grow their audience, increase engagement, and drive conversions through data-driven social media strategies.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 animate-fade-in" style={{
            animationDelay: "0.3s"
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
    </section>
  );
}
