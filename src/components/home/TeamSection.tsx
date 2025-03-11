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
const TeamMember = ({
  name,
  role,
  image,
  bio,
  social,
  delay = 0
}: TeamMemberProps) => {
  return <div className="fade-in-section" style={{
    transitionDelay: `${delay}ms`
  }}>
      <div className="rounded-xl overflow-hidden group relative">
        <div className="aspect-[3/4] bg-secondary relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
            {/* This placeholder would be replaced with an actual image */}
            <div className="w-full h-full bg-gradient-to-br from-muted/80 to-secondary/60 flex items-center justify-center">
              
            </div>
          </div>
        </div>
        
        
      </div>
      
      <div className="mt-4 text-center">
        
        <p className="text-sm text-muted-foreground">{role}</p>
      </div>
    </div>;
};
export function TeamSection() {
  const teamMembers: TeamMemberProps[] = [{
    name: "John Doe",
    role: "CEO & Founder",
    image: "/team/john-doe.jpg",
    bio: "John has over 15 years of experience in business management and strategy.",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "john@example.com"
    }
  }, {
    name: "Sarah Johnson",
    role: "Operations Director",
    image: "/team/sarah-johnson.jpg",
    bio: "Sarah oversees all operational aspects and ensures smooth service delivery.",
    social: {
      linkedin: "https://linkedin.com",
      email: "sarah@example.com"
    }
  }, {
    name: "Michael Chen",
    role: "Technical Lead",
    image: "/team/michael-chen.jpg",
    bio: "Michael brings technical expertise and innovative solutions to our clients.",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "michael@example.com"
    }
  }, {
    name: "Emma Rodriguez",
    role: "Client Success Manager",
    image: "/team/emma-rodriguez.jpg",
    bio: "Emma ensures all our clients receive exceptional service and support.",
    social: {
      linkedin: "https://linkedin.com",
      email: "emma@example.com"
    }
  }];
  return;
}