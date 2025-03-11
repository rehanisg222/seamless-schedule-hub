
import React from 'react';
import { Container } from "@/components/ui/Container";
import { Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      quote: "Working with GrowthsterMedia has been transformative for our business. Their ad campaigns consistently deliver exceptional ROI.",
      name: "Jane Doe",
      position: "CEO, E-commerce Brand",
      image: "/placeholder.svg"
    },
    {
      quote: "They understand our audience better than we do. The results speak for themselves - 3x return on ad spend in just 30 days.",
      name: "John Smith",
      position: "Marketing Director, SaaS Company",
      image: "/placeholder.svg"
    },
    {
      quote: "The team's attention to detail and data-driven approach has helped us scale our customer acquisition like never before.",
      name: "Sarah Johnson",
      position: "Founder, DTC Brand",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <Quote className="text-[#FF4D8F] mb-4 h-8 w-8" />
              <p className="text-gray-700 mb-6 italic">"{item.quote}"</p>
              <div className="flex items-center">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-12 h-12 rounded-full mr-4 object-cover" 
                />
                <div>
                  <h4 className="font-bold">{item.name}</h4>
                  <p className="text-sm text-gray-600">{item.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
