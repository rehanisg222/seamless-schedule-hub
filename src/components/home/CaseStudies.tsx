
import React from 'react';
import { Container } from "@/components/ui/Container";
import { ArrowRight } from 'lucide-react';

export function CaseStudies() {
  const cases = [
    {
      title: "E-commerce Revenue Growth",
      description: "Increased monthly revenue by 350% through targeted Meta ads for a skincare brand",
      stats: "350% increase in revenue",
      image: "/placeholder.svg"
    },
    {
      title: "Lead Generation Campaign",
      description: "Generated 500+ qualified leads in 30 days for a B2B SaaS company",
      stats: "500+ qualified leads",
      image: "/placeholder.svg"
    },
    {
      title: "Brand Awareness Success",
      description: "Grew Instagram following by 10,000+ in 60 days for a fashion startup",
      stats: "10,000+ new followers",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Success Stories</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here are some of the results we've delivered for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((item, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-48 object-cover" 
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="font-bold text-[#FF4D8F] mb-4">{item.stats}</div>
                <a href="#" className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800">
                  Read case study
                  <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
