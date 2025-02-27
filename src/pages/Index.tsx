import { useState, useEffect } from "react";
import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { CounterSection } from "@/components/home/CounterSection";
import { TeamSection } from "@/components/home/TeamSection";
import { AppointmentModal } from "@/components/shared/AppointmentModal";
import { Container } from "@/components/ui/Container";
import { Calendar, ArrowRight } from "lucide-react";
const Index = () => {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const [testimonials, setTestimonials] = useState([]);

  // Handle scroll restoration on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Load testimonials from localStorage
  useEffect(() => {
    const loadTestimonials = () => {
      const storedTestimonials = localStorage.getItem('testimonials');
      if (storedTestimonials) {
        setTestimonials(JSON.parse(storedTestimonials));
      }
    };
    loadTestimonials();

    // Listen for updates
    const handleStorageChange = () => {
      loadTestimonials();
    };
    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('testimonials-updated', handleStorageChange as any);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('testimonials-updated', handleStorageChange as any);
    };
  }, []);
  return <>
      <Hero />
      <Services />
      
      {/* CTA Section */}
      
      
      <CounterSection />
      <TeamSection />
      
      {/* Testimonials Section */}
      
      
      <AppointmentModal isOpen={isAppointmentModalOpen} onClose={() => setIsAppointmentModalOpen(false)} />
    </>;
};
export default Index;