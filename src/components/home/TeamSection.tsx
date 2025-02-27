
import { Container } from "@/components/ui/Container";
import { Linkedin, Twitter, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio: string;
  social: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
  delay?: number;
}

const TeamMember = ({ name, role, image, bio, social, delay = 0 }: TeamMemberProps) => {
  return (
    <div 
      className="fade-in-section"
      style={{ 
        transitionDelay: `${delay}ms` 
      }}
    >
      <div className="rounded-xl overflow-hidden group relative">
        <div className="aspect-[3/4] bg-secondary relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
            {/* This placeholder would be replaced with an actual image */}
            <div className="w-full h-full bg-gradient-to-br from-muted/80 to-secondary/60 flex items-center justify-center">
              <p className="font-medium text-center">Team member photo</p>
            </div>
          </div>
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <div className="flex justify-center space-x-3 mb-3">
              {social.linkedin && (
                <a 
                  href={social.linkedin} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white hover:text-primary transition-colors"
                >
                  <Linkedin size={16} />
                </a>
              )}
              {social.twitter && (
                <a 
                  href={social.twitter} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white hover:text-primary transition-colors"
                >
                  <Twitter size={16} />
                </a>
              )}
              {social.email && (
                <a 
                  href={`mailto:${social.email}`}
                  className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white hover:text-primary transition-colors"
                >
                  <Mail size={16} />
                </a>
              )}
            </div>
            <p className="text-white text-sm text-center">{bio}</p>
          </div>
        </div>
      </div>
      
      <div className="mt-4 text-center">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-muted-foreground">{role}</p>
      </div>
    </div>
  );
};

export function TeamSection() {
  const teamMembers: TeamMemberProps[] = [
    {
      name: "John Doe",
      role: "CEO & Founder",
      image: "/team/john-doe.jpg",
      bio: "John has over 15 years of experience in business management and strategy.",
      social: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        email: "john@example.com",
      },
    },
    {
      name: "Sarah Johnson",
      role: "Operations Director",
      image: "/team/sarah-johnson.jpg",
      bio: "Sarah oversees all operational aspects and ensures smooth service delivery.",
      social: {
        linkedin: "https://linkedin.com",
        email: "sarah@example.com",
      },
    },
    {
      name: "Michael Chen",
      role: "Technical Lead",
      image: "/team/michael-chen.jpg",
      bio: "Michael brings technical expertise and innovative solutions to our clients.",
      social: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        email: "michael@example.com",
      },
    },
    {
      name: "Emma Rodriguez",
      role: "Client Success Manager",
      image: "/team/emma-rodriguez.jpg",
      bio: "Emma ensures all our clients receive exceptional service and support.",
      social: {
        linkedin: "https://linkedin.com",
        email: "emma@example.com",
      },
    },
  ];

  return (
    <section id="team" className="section-padding">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-muted-foreground text-lg">
            Our talented professionals are dedicated to providing exceptional service and innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              {...member}
              delay={index * 100}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
