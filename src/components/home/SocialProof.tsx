
import React from 'react';
import { Container } from "@/components/ui/Container";

export function SocialProof() {
  const logos = [
    { name: "Client 1", logo: "/placeholder.svg" },
    { name: "Client 2", logo: "/placeholder.svg" },
    { name: "Client 3", logo: "/placeholder.svg" },
    { name: "Client 4", logo: "/placeholder.svg" },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <Container>
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold">Trusted by Leading Brands</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {logos.map((client, index) => (
            <div key={index} className="flex justify-center">
              <img 
                src={client.logo} 
                alt={`${client.name} logo`} 
                className="h-12 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
