
import React from 'react';
import { Container } from "@/components/ui/Container";
import { ArrowRight } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-20 bg-[#110027] text-white">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business with Data-Driven Advertising?</h2>
          <p className="text-lg mb-8 text-blue-300 max-w-2xl mx-auto">
            Book your free discovery call today and let's discuss how we can help you achieve impressive ROI through strategic advertising campaigns.
          </p>
          <a 
            href="#calendly-section" 
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md bg-[#FF4D8F] text-white hover:bg-[#FF4D8F]/90 transition-colors"
            id="cta-button"
          >
            Schedule Your Free Call
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </Container>
    </section>
  );
}
