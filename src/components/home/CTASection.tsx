
import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function CTASection() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Grow Your Business?</h2>
          <p className="text-xl text-blue-200 mb-8">
            Schedule your free discovery call today and see how we can help you achieve spine-chilling ROI with our proven strategies.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-blue-900 hover:bg-blue-100"
              asChild
            >
              <Link to="/booking">
                Book your free consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-blue-800"
              asChild
            >
              <Link to="/contact">
                Contact us
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
