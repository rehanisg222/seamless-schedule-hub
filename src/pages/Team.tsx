
import { useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { TeamSection } from "@/components/home/TeamSection";
import { CheckCircle } from "lucide-react";

const Team = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      title: "Excellence",
      description: "We strive for excellence in everything we do, delivering high-quality services that exceed expectations."
    },
    {
      title: "Integrity",
      description: "We operate with honesty and transparency, building trust with our clients through ethical business practices."
    },
    {
      title: "Innovation",
      description: "We embrace innovation and creative thinking to develop cutting-edge solutions for complex challenges."
    },
    {
      title: "Collaboration",
      description: "We believe in the power of teamwork and partnership, working closely with our clients to achieve shared goals."
    },
    {
      title: "Accountability",
      description: "We take responsibility for our actions and commitments, ensuring reliable service delivery and customer satisfaction."
    },
    {
      title: "Growth",
      description: "We are committed to continuous improvement and growth, both for our clients and our team members."
    }
  ];

  return (
    <>
      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h1>
            <p className="text-muted-foreground text-lg">
              Meet the talented professionals who are dedicated to your success. Our diverse team brings expertise, passion, and innovation to every project.
            </p>
          </div>
        </Container>
      </section>
      
      <TeamSection />
      
      <section className="py-16 bg-secondary/50">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Mission & Values</h2>
            <p className="text-muted-foreground text-lg">
              We are driven by a clear mission and guided by core values that shape our approach to service and client relationships.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto mb-16 p-6 md:p-8 bg-white rounded-xl border border-border">
            <h3 className="text-xl font-semibold mb-4 text-center">Our Mission</h3>
            <p className="text-center text-lg">
              To empower businesses with innovative solutions that drive growth, efficiency, and lasting success in an ever-evolving market landscape.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div key={index} className="p-6 bg-white rounded-xl border border-border flex flex-col fade-in-section">
                <div className="flex items-center mb-4">
                  <CheckCircle className="h-5 w-5 text-primary mr-2" />
                  <h3 className="font-semibold text-lg">{value.title}</h3>
                </div>
                <p className="text-muted-foreground flex-grow">{value.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
      
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Join Our Team</h2>
            <p className="text-muted-foreground text-lg mb-6">
              We're always looking for talented individuals to join our growing team. Check out our current openings below.
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              View Open Positions
            </a>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Team;
