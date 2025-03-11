
import React from "react";
import { Hero } from "@/components/home/Hero";
import { Stats } from "@/components/home/Stats";
import { Services } from "@/components/home/Services";
import { CTASection } from "@/components/home/CTASection";
import { SocialProof } from "@/components/home/SocialProof";
import { Philosophy } from "@/components/home/Philosophy";
import { CaseStudies } from "@/components/home/CaseStudies";
import { Testimonials } from "@/components/home/Testimonials";
import { Footer } from "@/components/layout/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      
      <Stats 
        title="Our Impact Numbers"
        description="Results that speak volumes through strategic advertising and precise execution."
        stats={[
          {
            value: "$11K+",
            label: "TOTAL AD SPEND"
          },
          {
            value: "$287K+",
            label: "TOTAL REVENUE GENERATED"
          },
          {
            value: "highest return on",
            label: "AD SPEND"
          }
        ]}
      />
      
      <Philosophy
        title="Our Philosophy"
        content={
          <>
            <p className="mb-6 text-blue-800">
              Here at GrowthsterMedia, we've worked with the best in the industry to produce highest return on ad spend. We do away with the inefficiencies & formalities that plague most agencies.
              We focus on what truly matters—strategies that drive real impact and measurable growth for our clients.
            </p>
            <p className="text-blue-800">
              Let's see how we can do the same for you. Schedule your free discovery call below.
            </p>
          </>
        }
      />
      
      <SocialProof />
      <Services />
      <CaseStudies />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
}
