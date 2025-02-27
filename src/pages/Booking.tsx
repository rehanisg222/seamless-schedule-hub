
import { useState, useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { AppointmentModal } from "@/components/shared/AppointmentModal";
import { Calendar, CreditCard, Clock, CheckCircle } from "lucide-react";

const Booking = () => {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const steps = [
    {
      icon: Calendar,
      title: "Select a Date & Time",
      description: "Choose a convenient time slot from our available options.",
    },
    {
      icon: CreditCard,
      title: "Make a Payment",
      description: "Secure your appointment with a simple payment process.",
    },
    {
      icon: Clock,
      title: "Receive Confirmation",
      description: "Get an email confirmation with all the details of your appointment.",
    },
    {
      icon: CheckCircle,
      title: "Attend Your Appointment",
      description: "Join your scheduled appointment and start your journey to success.",
    },
  ];

  return (
    <>
      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Book Your Appointment</h1>
            <p className="text-muted-foreground text-lg mb-8">
              Schedule a consultation with our experts and take the first step towards achieving your business goals.
            </p>
            <button
              onClick={() => setIsAppointmentModalOpen(true)}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Now
            </button>
          </div>
          
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-center mb-8">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, index) => (
                <div key={index} className="text-center p-6 border border-border rounded-xl bg-white transition-all hover:shadow-md fade-in-section">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-6 w-6" />
                  </div>
                  <div className="mb-2 inline-flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-primary font-medium">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
      
      <section className="py-16 bg-secondary/50">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                {
                  question: "How long is a typical appointment?",
                  answer: "Most initial consultations last 45-60 minutes. Follow-up appointments may be shorter, typically around 30 minutes."
                },
                {
                  question: "Can I reschedule my appointment?",
                  answer: "Yes, you can reschedule your appointment up to 24 hours before the scheduled time without any penalty."
                },
                {
                  question: "What payment methods do you accept?",
                  answer: "We accept all major credit cards, PayPal, and bank transfers for your convenience."
                },
                {
                  question: "Is there a cancellation fee?",
                  answer: "Appointments cancelled with less than 24 hours notice may incur a cancellation fee of 50% of the appointment cost."
                },
                {
                  question: "How do I prepare for my appointment?",
                  answer: "We'll send you a brief questionnaire to complete before your appointment to help us better understand your needs."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-xl border border-border fade-in-section">
                  <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
      
      <AppointmentModal
        isOpen={isAppointmentModalOpen}
        onClose={() => setIsAppointmentModalOpen(false)}
      />
    </>
  );
};

export default Booking;
