
import { 
  Calendar, 
  CreditCard, 
  Users, 
  BarChart, 
  PhoneCall, 
  Zap 
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  className?: string;
}

const ServiceCard = ({ title, description, icon: Icon, className }: ServiceCardProps) => {
  return (
    <div 
      className={cn(
        "relative rounded-xl p-6 border border-border bg-card transition-all duration-300 hover:shadow-md group",
        className
      )}
    >
      <div className="mb-4 w-12 h-12 rounded-lg bg-muted flex items-center justify-center text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export function Services() {
  const services = [
    {
      title: "Social Media Management",
      description: "Professional management of your social media accounts to increase engagement and followers.",
      icon: Users,
    },
    {
      title: "Content Creation",
      description: "High-quality content creation for your digital platforms.",
      icon: CreditCard,
    },
    {
      title: "SEO Optimization",
      description: "Improve your search engine rankings and drive more traffic to your website.",
      icon: BarChart,
    },
    {
      title: "Ad Campaign Management",
      description: "Strategic planning and execution of advertising campaigns across multiple platforms.",
      icon: Calendar,
    },
    {
      title: "24/7 Support",
      description: "Get help whenever you need it with our round-the-clock customer support.",
      icon: PhoneCall,
    },
    {
      title: "Analytics & Reporting",
      description: "Detailed analytics and reports to track the performance of your social media strategy.",
      icon: Zap,
    },
  ];

  return (
    <section id="services" className="section-padding bg-secondary/30">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive social media solutions designed to help your business thrive in today's competitive landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              className="fade-in-section"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
