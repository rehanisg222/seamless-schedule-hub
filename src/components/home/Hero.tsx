
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('/background-pattern.svg')] bg-repeat opacity-5"></div>
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-blue-900 mb-6 animate-fade-in">
            We help businesses & brands produce 
            <span className="text-blue-600"> spine-chilling ROI</span> Via Paid Advertising
          </h1>
          <p className="text-lg md:text-xl text-blue-800 mb-8 max-w-3xl mx-auto animate-slide-up">
            Struggling to get consistent leads and sales?
            we craft high-converting ad campaigns that turn attention into revenue.
          </p>
          <p className="text-lg md:text-xl text-blue-800 mb-10 max-w-3xl mx-auto animate-slide-up">
            It's time to scale your business the smart way-with date data-driven strategies that work.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slide-up">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Book a free consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50">
              See our results
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
