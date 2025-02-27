
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background to-background/50"></div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
      </div>
      
      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full border border-border bg-secondary text-sm font-medium animate-fade-in">
            <span className="inline-block w-2 h-2 rounded-full bg-primary mr-2"></span>
            Transforming businesses since 2023
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Elevate Your Business with Our Expert Solutions
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            We help businesses scale effectively with our comprehensive suite of services designed to streamline operations and drive growth.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Link
              to="/booking"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Book an Appointment
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md border border-input bg-background px-6 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-secondary hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Learn More
            </Link>
          </div>
        </div>

        <div className="mt-16 md:mt-24 max-w-5xl mx-auto relative glass p-4 md:p-6 rounded-xl shadow-glass animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div className="aspect-video w-full bg-muted rounded-md overflow-hidden relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-muted-foreground">
                {/* This will be replaced with an actual image or video */}
                <div className="w-full h-full bg-gradient-to-br from-secondary/80 to-background flex items-center justify-center">
                  <p className="text-center text-sm md:text-base">
                    Hero image or video showcase will appear here
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
