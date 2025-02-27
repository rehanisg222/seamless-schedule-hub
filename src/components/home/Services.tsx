
import { 
  Instagram,
  Facebook,
  Linkedin,
  BarChart,
  Megaphone,
  Camera
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
      title: "Instagram Marketing",
      description: "Strategic content creation, audience targeting, and growth campaigns to boost your Instagram presence.",
      icon: Instagram,
    },
    {
      title: "Facebook Advertising",
      description: "High-ROI Facebook ad campaigns with precise targeting, compelling creative, and conversion optimization.",
      icon: Facebook,
    },
    {
      title: "LinkedIn Branding",
      description: "B2B social media strategies to establish thought leadership and generate qualified leads on LinkedIn.",
      icon: Linkedin,
    },
    {
      title: "Social Media Analytics",
      description: "Comprehensive performance tracking with actionable insights to continually optimize your social media ROI.",
      icon: BarChart,
    },
    {
      title: "Content Creation",
      description: "Eye-catching graphics, engaging videos, and copy that resonates with your target audience and drives engagement.",
      icon: Camera,
    },
    {
      title: "Paid Advertising",
      description: "Multi-platform social media advertising strategies to increase brand awareness and drive qualified traffic.",
      icon: Megaphone,
    },
  ];

  return (
    <section id="services" className="section-padding bg-secondary/30">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive social media solutions designed to help your business grow its online presence and drive real business results.
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
