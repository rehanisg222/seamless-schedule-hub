
import { Container } from "@/components/ui/Container";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function AlchemySection() {
  return (
    <section className="py-16 md:py-24 bg-secondary overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="fade-in-section">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary">
              MODERN DAY ALCHEMY
            </h2>
            <p className="text-xl mb-6">
              We Help E-commerce & Info Product Businesses Produce Spine-Chilling ROI Via Paid Advertising
            </p>
            <p className="text-muted-foreground mb-6">
              Stop wasting time and money on faulty and ineffective ad campaigns.
            </p>
            <p className="text-muted-foreground mb-8">
              It's time to make your ad-budget count, scale your business and blow up your sales.
            </p>
            
            <Link
              to="/booking"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Transform Your Advertising
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          
          <div className="relative flex justify-center md:justify-end fade-in-section">
            <div className="relative z-10 w-full max-w-md">
              <img 
                src="/lovable-uploads/fe50997e-c6b6-4ee4-b24e-3a521ae477d0.png" 
                alt="Digital Alchemist" 
                className="w-full h-auto rounded-md"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-primary/10 rounded-full blur-3xl z-0"></div>
            <div className="absolute -top-8 -left-8 w-64 h-64 bg-primary/10 rounded-full blur-3xl z-0"></div>
          </div>
        </div>
      </Container>
    </section>
  );
}
