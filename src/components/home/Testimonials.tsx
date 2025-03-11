
import React from "react";
import { Container } from "@/components/ui/Container";
import { Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      quote: "Working with GrowthsterMedia transformed our social media presence. Our engagement increased by 300% and we're seeing real business results.",
      author: "Sarah Johnson",
      position: "Marketing Director, TechFlow Inc."
    },
    {
      quote: "The team at GrowthsterMedia understands our audience better than we do. Their campaigns consistently outperform our expectations and deliver incredible ROI.",
      author: "Michael Chen",
      position: "CEO, Innovate Solutions"
    },
    {
      quote: "Their data-driven approach and creative execution made all the difference. We've tried other agencies before, but none delivered results like GrowthsterMedia.",
      author: "Emily Rodriguez",
      position: "Founder, EcoLife Brands"
    }
  ];

  return (
    <section className="py-16 bg-blue-900 text-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-blue-200 max-w-3xl mx-auto">
            Don't just take our word for it - hear from the businesses we've helped grow.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-blue-800 p-6 rounded-lg relative">
              <Quote className="text-blue-600 h-10 w-10 mb-4 opacity-50" />
              <p className="text-lg mb-6">{testimonial.quote}</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-blue-300 text-sm">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
