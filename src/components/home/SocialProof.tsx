
import React from "react";
import { Container } from "@/components/ui/Container";

export function SocialProof() {
  const logos = [
    "/lovable-uploads/264ff834-cdbd-4364-9c21-d1670606e076.png",
    "/lovable-uploads/313741fe-9141-4987-9744-a588a0c01995.png",
    "/lovable-uploads/506d9731-da39-4092-84d7-4b0c42a6356d.png",
    "/lovable-uploads/5de5d693-f719-4918-9142-ea1838742673.png",
    "/lovable-uploads/9217956f-9b93-43c8-b7a0-f0c8c6d6d7c8.png"
  ];

  return (
    <section className="py-12 bg-gray-50">
      <Container>
        <h3 className="text-center text-lg text-blue-900 font-medium mb-8">Trusted by innovative companies</h3>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {logos.map((logo, index) => (
            <div key={index} className="w-32 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
              <img 
                src={logo} 
                alt={`Partner logo ${index + 1}`} 
                className="max-h-full max-w-full object-contain" 
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
