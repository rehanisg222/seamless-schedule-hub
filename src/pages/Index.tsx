import React from "react";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { SocialProof } from "@/components/SocialProof";
import { Philosophy } from "@/components/Philosophy";
import { CaseStudies } from "@/components/CaseStudies";

export function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      
      <Stats 
        title="Our Impact Numbers"
        description="Results that speak volumes through strategic advertising and precise execution."
        stats={[
          { value: "$11K+", label: "TOTAL AD SPEND" },
          { value: "$287K+", label: "TOTAL REVENUE GENERATED" },
          { value: "highest return on", label: "AD SPEND" },
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
