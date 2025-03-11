
import React from "react";
import { Container } from "@/components/ui/Container";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CaseStudies() {
  const caseStudies = [
    {
      title: "E-commerce Revenue Boost",
      description: "How we helped an online retailer increase their sales by 215% through targeted Facebook and Instagram campaigns.",
      image: "/lovable-uploads/fe50997e-c6b6-4ee4-b24e-3a521ae477d0.png"
    },
    {
      title: "SaaS Lead Generation",
      description: "Generating 400+ qualified leads per month for a B2B software company through LinkedIn advertising.",
      image: "/lovable-uploads/fe682f89-df27-413b-a582-5dfda5586d71.png"
    },
    {
      title: "Local Business Growth",
      description: "Helping a local service business expand their customer base by 180% with geotargeted social campaigns.",
      image: "/lovable-uploads/e521e155-4098-4fb2-83a2-18133d5d8860.png"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Case Studies</h2>
          <p className="text-lg text-blue-700 max-w-3xl mx-auto">
            See how we've helped businesses like yours achieve remarkable growth through social media.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 transition-all hover:shadow-md">
              <div className="h-48 overflow-hidden">
                <img 
                  src={study.image} 
                  alt={study.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105" 
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">{study.title}</h3>
                <p className="text-gray-700 mb-4">{study.description}</p>
                <Button variant="link" className="text-blue-600 p-0 font-medium">
                  Read case study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
