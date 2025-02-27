
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
        "relative rounded-xl p-6 border border-border bg-white transition-all duration-300 hover:shadow-md group",
        className
      )}
    >
      <div className="mb-4 w-12 h-12 rounded-lg bg-secondary flex items-center justify-center text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
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
      title: "Appointment Scheduling",
      description: "Streamlined booking system that allows clients to schedule appointments with ease.",
      icon: Calendar,
    },
    {
      title: "Secure Payments",
      description: "Process payments securely with our integrated payment solutions.",
      icon: CreditCard,
    },
    {
      title: "Team Management",
      description: "Efficiently manage your team and delegate tasks to improve productivity.",
      icon: Users,
    },
    {
      title: "Business Analytics",
      description: "Gain valuable insights into your business performance with detailed analytics.",
      icon: BarChart,
    },
    {
      title: "24/7 Support",
      description: "Get help whenever you need it with our round-the-clock customer support.",
      icon: PhoneCall,
    },
    {
      title: "Fast Implementation",
      description: "Quick and easy setup process to get your business up and running in no time.",
      icon: Zap,
    },
  ];

  return (
    <section id="services" className="section-padding bg-secondary/50">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive solutions designed to help your business thrive in today's competitive landscape.
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
