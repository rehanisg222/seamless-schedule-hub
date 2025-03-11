import React, { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface PhilosophyProps {
  title: string;
  content: ReactNode;
}

export function Philosophy({ title, content }: PhilosophyProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 text-center">{title}</h2>
          <div className="text-lg leading-relaxed mb-8">
            {content}
          </div>
          <div className="flex justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Schedule Discovery Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
