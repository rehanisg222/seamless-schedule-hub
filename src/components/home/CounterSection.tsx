import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { DollarSign, User, Award, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
interface CounterItemProps {
  icon: React.ComponentType<{
    className?: string;
  }>;
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  delay?: number;
}
const CounterItem = ({
  icon: Icon,
  value,
  label,
  prefix = "",
  suffix = "",
  delay = 0
}: CounterItemProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, {
      threshold: 0.1
    });
    if (counterRef.current) {
      observer.observe(counterRef.current);
    }
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 2000;
    const step = 30;
    const increment = Math.ceil(value / (duration / step));
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        start += increment;
        if (start > value) {
          setCount(value);
          clearInterval(interval);
        } else {
          setCount(start);
        }
      }, step);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timer);
  }, [isVisible, value, delay]);
  return <div ref={counterRef} className={cn("flex flex-col items-center text-center fade-in-section", isVisible ? "is-visible" : "")}>
      <div className="mb-4 w-16 h-16 rounded-full bg-secondary flex items-center justify-center text-primary">
        <Icon className="h-8 w-8" />
      </div>
      
      <p className="text-muted-foreground">{label}</p>
    </div>;
};
export function CounterSection() {
  return <section className="section-padding bg-white relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-secondary/30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/30 rounded-full blur-3xl"></div>
      
      <Container className="relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact in Numbers</h2>
          <p className="text-muted-foreground text-lg">
            We've helped hundreds of businesses achieve measurable results through our dedicated services.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <CounterItem icon={DollarSign} value={5000000} label="Revenue Generated" prefix="$" delay={0} />
          <CounterItem icon={User} value={500} label="Happy Clients" suffix="+" delay={200} />
          <CounterItem icon={Award} value={25} label="Industry Awards" delay={400} />
          <CounterItem icon={Calendar} value={10000} label="Appointments Booked" suffix="+" delay={600} />
        </div>
      </Container>
    </section>;
}